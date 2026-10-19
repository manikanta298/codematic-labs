import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
const read = path => readFile(resolve("dist", path), "utf8");
const sitemap = await read("sitemap.xml");
const paths = [...sitemap.matchAll(/<loc>https:\/\/codematic-labs\.vercel\.app([^<]*)<\/loc>/g)].map(match => match[1]);
assert.equal(paths.length, 34, "Sitemap must cover all public pages");
assert.equal(new Set(paths).size, 34, "Sitemap paths must be unique");
const pathSet = new Set(paths), titles = new Set(), descriptions = new Set();
let links = 0, assets = 0;
for (const path of paths) {
  const html = await read(path === "/" ? "index.html" : path.slice(1) + ".html");
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one H1`);
  assert.equal((html.match(/id="main-content"/g) || []).length, 1, `${path}: one main target`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${path}: unique title`); titles.add(title);
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(description && !descriptions.has(description), `${path}: unique description`); descriptions.add(description);
  assert.ok(html.includes(`rel="canonical" href="https://codematic-labs.vercel.app${path}"`), `${path}: canonical`);
  assert.ok(html.includes('property="og:image"') && html.includes('name="twitter:card"'), `${path}: social metadata`);
  assert.ok(!html.includes('href="https://www.linkedin.com"'), "No placeholder LinkedIn");
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) { assert.ok(pathSet.has(href), `${path}: ${href}`); links++; }
  for (const [, src] of html.matchAll(/(?:src|href)="(\/(?:assets|technology)\/[^\"]+)"/g)) { await access(resolve("dist", decodeURIComponent(src.slice(1)))); assets++; }
  if (/^\/(products|case-studies)\//.test(path)) assert.equal((html.match(/class="workflow-step-heading"/g) || []).length, 5, `${path}: five workflow icons`);
  if (path.startsWith("/case-studies/")) assert.ok(html.includes("Intended result") && html.includes("not measured client results"), `${path}: example disclosure`);
  if (path.startsWith("/products/")) assert.ok(!html.includes("05 / Intended result"), `${path}: distinct product page`);
}
const tech = await read("tech-stack.html");
assert.equal((tech.match(/class="tech-logo-tile"/g) || []).length, 24);
for (const [, src] of tech.matchAll(/src="(\/technology\/[^\"]+)"/g)) {
  const original = await readFile(resolve("public", src.slice(1)));
  const built = await readFile(resolve("dist", src.slice(1)));
  assert.equal(createHash("sha256").update(original).digest("hex"), createHash("sha256").update(built).digest("hex"));
}
const notFound = await read("404.html");
assert.ok(notFound.includes("noindex, follow") && !notFound.includes('rel="canonical"'));
assert.ok(notFound.includes("Page not found."));
const config = JSON.parse(await readFile("vercel.json", "utf8"));
assert.equal(config.cleanUrls, true);
assert.ok(!config.rewrites, "No catch-all rewrite should mask missing routes");
assert.ok((await read("robots.txt")).includes("Sitemap: https://codematic-labs.vercel.app/sitemap.xml"));
await access(resolve("dist", "social-preview.jpg"));
console.log(`PASS: 34 prerendered pages, ${links} internal links, ${assets} asset references, 24 brand logos, 18 five-step workflows, metadata, sitemap and 404 output.`);
