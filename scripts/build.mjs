import { build } from "vite";
import { readFile, writeFile, mkdir, rm, copyFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const temporary = resolve(root, ".prerender");
const escape = value => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
try {
  await build();
  await build({ build: { ssr: "scripts/prerender-entry.tsx", outDir: ".prerender", emptyOutDir: true, rollupOptions: { output: { entryFileNames: "entry.mjs" } } } });
  const { render, getRouteMetadata, publicPaths, siteOrigin } = await import(pathToFileURL(resolve(temporary, "entry.mjs")).href);
  const template = await readFile(resolve(root, "dist/index.html"), "utf8");
  const head = meta => {
    const tags = [
      `<title>${escape(meta.title)}</title>`,
      `<meta name="description" content="${escape(meta.description)}">`,
      `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}">`,
      ...Object.entries({ title: meta.title, description: meta.description, type: meta.type || "website", url: siteOrigin + meta.path, image: siteOrigin + "/social-preview.jpg" }).map(([k, v]) => `<meta property="og:${k}" content="${escape(v)}">`),
      ...Object.entries({ card: "summary_large_image", title: meta.title, description: meta.description, image: siteOrigin + "/social-preview.jpg" }).map(([k, v]) => `<meta name="twitter:${k}" content="${escape(v)}">`),
    ];
    if (!meta.noindex) tags.push(`<link rel="canonical" href="${siteOrigin + meta.path}">`);
    return tags.join("\n    ");
  };
  for (const path of [...publicPaths, "/404"]) {
    const meta = getRouteMetadata(path);
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g, "")
      .replace("</head>", `${head(meta)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);
    const target = resolve(root, "dist", path === "/" ? "index.html" : path.slice(1) + ".html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }
  await writeFile(resolve(root, "dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPaths.map(path => `  <url><loc>${siteOrigin + path}</loc></url>`).join("\n")}\n</urlset>\n`);
  await writeFile(resolve(root, "dist/robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`);
  await copyFile(resolve(root, "src/assets/hero.jpg"), resolve(root, "dist/social-preview.jpg"));
  console.log(`Prerendered ${publicPaths.length} public pages, sitemap and branded 404.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
