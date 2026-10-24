import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const script = await readFile('public/logo-loader.js', 'utf8');
const template = await readFile('index.html', 'utf8');
const expectedLogo = await readFile('src/assets/logo white.png');
let pages = 0;
for (const file of await readdir('dist', { recursive: true })) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(resolve('dist', file), 'utf8');
  assert.equal((html.match(/id="site-loader"/g) || []).length, 1, file);
  assert.ok(html.indexOf('id="site-loader"') < html.indexOf('id="root"'), `${file}: outside hydration root`);
  assert.ok(html.includes('prefers-reduced-motion: reduce') && html.includes('8000'), `${file}: safeguards`);
  const image = html.match(/<img[^>]*class="logo-loader__image"[^>]*>/)?.[0];
  const src = image?.match(/src="([^"]+)"/)?.[1];
  assert.ok(src?.startsWith('/assets/'), `${file}: bundled logo`);
  const actualLogo = await readFile(resolve('dist', decodeURIComponent(src.slice(1))));
  assert.equal(createHash('sha256').update(actualLogo).digest('hex'), createHash('sha256').update(expectedLogo).digest('hex'));
  pages++;
}
assert.equal(pages, 35);

const flush = () => new Promise(resolve => setImmediate(resolve));
function fixture({ loaded = false, mounted = false, missing = false, broken = false } = {}) {
  const classes = new Set(['logo-loader-enabled']);
  const leaving = new Set(), callbacks = {}, timers = new Map();
  let id = 0, removed = false;
  const root = { dataset: mounted ? { appReady: 'true' } : {}, classList: { add: name => classes.add(name), remove: name => classes.delete(name) } };
  const image = { complete: broken, naturalWidth: broken ? 0 : 3000, addEventListener: (name, fn) => { callbacks['image:' + name] = fn; } };
  const overlay = { classList: { add: name => leaving.add(name) }, addEventListener: (name, fn) => { callbacks[name] = fn; }, querySelector: () => image, remove: () => { removed = true; } };
  const window = { logoLoaderSafetyTimer: 999, addEventListener: (name, fn) => { callbacks[name] = fn; } };
  const context = { window, document: { documentElement: root, readyState: loaded ? 'complete' : 'loading', getElementById: () => missing ? null : overlay }, Promise, setTimeout: fn => { timers.set(++id, fn); return id; }, clearTimeout: n => timers.delete(n) };
  return { context, callbacks, classes, leaving, timers, removed: () => removed };
}
// Wait for both initial React commit and page load, in either event order.
for (const order of [['load', 'codematic:ready'], ['codematic:ready', 'load']]) {
  const f = fixture(); vm.runInNewContext(script, f.context);
  f.callbacks[order[0]](); await flush(); assert.equal(f.leaving.size, 0);
  f.callbacks[order[1]](); await flush(); assert.ok(f.leaving.has('is-leaving'));
  for (const fn of [...f.timers.values()]) fn();
  assert.ok(f.removed()); assert.equal(f.classes.size, 0);
  f.context.window.LogoLoader.finish();
}
for (const options of [{ loaded: true, mounted: true }, { broken: true }, { missing: true }]) {
  const f = fixture(options); vm.runInNewContext(script, f.context); await flush();
  for (const fn of [...f.timers.values()]) fn();
  assert.equal(f.classes.size, 0); if (!options.missing) assert.ok(f.removed());
}
// The inline bootstrap independently releases the page if the external script fails.
const f = fixture();
vm.runInNewContext(template.match(/<script>([\s\S]*?)<\/script>/)[1], f.context);
for (const fn of [...f.timers.values()]) fn();
assert.equal(f.classes.size, 0); assert.ok(f.removed());
console.log(`PASS: loader on ${pages} HTML pages, original logo bytes, React/load ordering, image failure, missing overlay, transition fallback and independent failsafe.`);
