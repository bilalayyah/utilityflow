/**
 * check-export-chunk.cjs — bundle guardrail for the Universal Result Export.
 *
 * Asserts, against a built dist/:
 *  1. The export chunk is ABSENT from dist/index.html modulepreloads
 *     (export code must never be preloaded on the homepage / entry).
 *  2. The export chunk is ABSENT from the homepage entry chunk
 *     (no static import of html-to-image / pdf-lib from the shell).
 *  3. The export code IS present as a split async chunk (dynamic
 *     import() produced a separate file that only loads on demand).
 *
 * Markers are string literals that only exist in src/components/export/:
 * 'uf-recent-results' (storage key) and 'export-print-node' (print class).
 * The import specifier 'html-to-image' is NOT used as a marker — Rollup
 * resolves it at build time and the literal may not survive minification.
 *
 * Phase 1 note: no tool mounts the panel yet, so Vite tree-shakes the
 * export module away entirely and NO chunk contains the markers. In that
 * case the script prints SKIP and exits 0 — checks 1–3 only apply once
 * Phase 2 mounts the panel and a chunk exists. A SKIP in Phase 2 (panel
 * mounted but no chunk found) would mean the panel was never bundled.
 *
 * Usage (after a build; NOT wired into the build scripts yet — the
 * coordinator runs it during verification):
 *   node scripts/check-export-chunk.cjs
 *
 * Exit 0 = PASS (or SKIP, Phase 1), exit 1 = FAIL (message names the
 * violation).
 */
const fs = require('node:fs');
const path = require('node:path');

const DIST = path.resolve(__dirname, '..', 'dist');
const ASSETS = path.join(DIST, 'assets');

function fail(message) {
  console.error(`check-export-chunk: FAIL — ${message}`);
  process.exit(1);
}

function pass(message) {
  console.log(`check-export-chunk: PASS — ${message}`);
}

if (!fs.existsSync(DIST)) {
  fail(`dist/ does not exist at ${DIST} — run the build first.`);
}
const indexHtmlPath = path.join(DIST, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  fail('dist/index.html is missing — run the build first.');
}
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

if (!fs.existsSync(ASSETS)) {
  fail('dist/assets/ is missing — run the build first.');
}
const assetFiles = fs.readdirSync(ASSETS).filter((f) => f.endsWith('.js'));

// String literals that exist ONLY in src/components/export/.
const EXPORT_MARKERS = ['uf-recent-results', 'export-print-node'];
const chunkContents = new Map();
for (const file of assetFiles) {
  chunkContents.set(file, fs.readFileSync(path.join(ASSETS, file), 'utf8'));
}
const exportChunks = assetFiles.filter((file) => {
  const content = chunkContents.get(file);
  return EXPORT_MARKERS.some((marker) => content.includes(marker));
});

if (exportChunks.length === 0) {
  // Phase 1: the panel is not mounted by any tool yet, so the export
  // module is tree-shaken away. Nothing to guard — skip, do not fail.
  console.log(
    'check-export-chunk: SKIP — no chunk contains export code ' +
      '(panel not mounted by any tool yet; expected in Phase 1).'
  );
  process.exit(0);
}

// 1. Absent from index.html modulepreloads.
const preloadMatches = [...indexHtml.matchAll(/modulepreload[^>]*href="([^"]+)"/g)].map(
  (m) => m[1]
);
const preloadedExport = preloadMatches.filter((href) =>
  exportChunks.some((chunk) => href.includes(chunk))
);
if (preloadedExport.length > 0) {
  fail(
    `export chunk is modulepreloaded in dist/index.html: ${preloadedExport.join(', ')}`
  );
}
pass('export chunk is not modulepreloaded in dist/index.html.');

// 2. Absent from the homepage entry chunk (the JS file index.html loads
//    directly — the entry bundle must not contain export code).
const entryMatches = [...indexHtml.matchAll(/<script[^>]*src="([^"]+\.js)"/g)].map(
  (m) => m[1]
);
for (const src of entryMatches) {
  const entryFile = path.basename(src);
  const entryPath = path.join(ASSETS, entryFile);
  if (!fs.existsSync(entryPath)) continue;
  const content = chunkContents.get(entryFile) ?? fs.readFileSync(entryPath, 'utf8');
  const hit = EXPORT_MARKERS.find((marker) => content.includes(marker));
  if (hit) {
    fail(`entry chunk ${entryFile} contains export marker "${hit}" (static import leak).`);
  }
}
pass('export code is absent from the homepage entry chunk.');

// 3. Present as a split async chunk.
pass(`export code is present as split async chunk(s): ${exportChunks.join(', ')}.`);
