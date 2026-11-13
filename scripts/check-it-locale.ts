/**
 * Phase 3 Italian validation — run with:
 *   node -e "require('esbuild').buildSync({entryPoints:['scripts/check-it-locale.ts'],bundle:true,platform:'node',format:'cjs',outfile:'/tmp/check-it-locale.cjs'})" && node /tmp/check-it-locale.cjs
 *
 * Checks: 88/88 IT tool overrides, 20 FAQs each, unique Italian slugs with no
 * collision against English slugs or reserved paths, SEO title/description
 * lengths, category overrides, and en/it chrome-dictionary key parity.
 */
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';
import { CATEGORIES } from '../src/registry/categories';
import { IT_TOOL_OVERRIDES } from '../src/locales/it/tools';
import { IT_CATEGORY_OVERRIDES } from '../src/locales/it/categories';
import { enStrings } from '../src/locales/en/ui';
import { itStrings } from '../src/locales/it/ui';
import { CATEGORY_LOCALE_SLUGS } from '../src/locales/config';

const RESERVED = new Set([
  'tools', 'tool', 'category', 'categoria', 'about', 'chi-siamo',
  'contact', 'contatti', 'privacy-policy', 'informativa-sulla-privacy',
  'terms-of-service', 'termini-di-servizio', 'ai-writing-assistant',
  'ai-text-summarizer', 'ai-tool-finder',
  // NOTE: assistente-di-scrittura-ia / riassuntore-di-testo-ia /
  // cercatore-di-strumenti-ia are intentionally NOT reserved — they are
  // the fixed slugs of the 3 AI tools. The per-tool check below only flags
  // a collision if a *different* tool uses the same slug.
  'it', 'de', 'es', 'pt', 'fr', 'en',
  'sitemap.xml', 'robots.txt', 'favicon.svg', '404', 'all-tools',
  'tutti-gli-strumenti',
]);

const IDENTICAL_ALLOWED = new Set(['.', 'Alex Rivera', 'you@example.com', 'Legal', 'UtilityFlow']);

let failures = 0;
let warnings = 0;
const fail = (msg: string) => { failures++; console.log(`  FAIL  ${msg}`); };
const warn = (msg: string) => { warnings++; console.log(`  WARN  ${msg}`); };
const ok = (msg: string) => console.log(`  OK    ${msg}`);

/* ---------- 1. Tool override coverage ---------- */
console.log('\n== Tool overrides ==');
const enIds = TOOLS_REGISTRY.map((t) => t.id);
const itIds = Object.keys(IT_TOOL_OVERRIDES);
const missing = enIds.filter((id) => !IT_TOOL_OVERRIDES[id]);
const extra = itIds.filter((id) => !enIds.includes(id));
if (enIds.length !== 88) fail(`registry has ${enIds.length} tools, expected 88`);
else ok(`registry: 88 tools`);
if (missing.length) fail(`missing IT overrides: ${missing.join(', ')}`);
else ok('all 88 tools have a FR override');
if (extra.length) fail(`extra IT override keys (no such EN tool): ${extra.join(', ')}`);
else ok('no extra IT override keys');

/* ---------- 2. Slugs ---------- */
console.log('\n== Italian slugs ==');
const enSlugs = new Set(TOOLS_REGISTRY.map((t) => t.slug));
const itSlugs = new Map<string, string>(); // slug -> tool id
let slugBad = 0;
for (const tool of TOOLS_REGISTRY) {
  const ov = IT_TOOL_OVERRIDES[tool.id];
  if (!ov) continue;
  const s = ov.slug;
  if (!s || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s)) { fail(`${tool.id}: bad slug "${s}"`); slugBad++; continue; }
  if (enSlugs.has(s)) { fail(`${tool.id}: slug "${s}" collides with an English slug`); slugBad++; }
  if (RESERVED.has(s)) { fail(`${tool.id}: slug "${s}" is a reserved path`); slugBad++; }
  if (itSlugs.has(s)) { fail(`duplicate IT slug "${s}": ${itSlugs.get(s)} and ${tool.id}`); slugBad++; }
  itSlugs.set(s, tool.id);
}
if (!slugBad) ok(`88 unique Italian slugs, no EN collision, no reserved path`);

/* ---------- 3. Per-tool field counts & lengths ---------- */
console.log('\n== Per-tool fields ==');
let faqTotal = 0;
let fieldBad = 0;
for (const tool of TOOLS_REGISTRY) {
  const ov = IT_TOOL_OVERRIDES[tool.id];
  if (!ov) continue;
  const problems: string[] = [];
  const nonEmpty = (v: unknown) => typeof v === 'string' && v.trim().length > 0;
  if (!nonEmpty(ov.name)) problems.push('name empty');
  if (!nonEmpty(ov.shortDescription)) problems.push('shortDescription empty');
  if (!nonEmpty(ov.intro)) problems.push('intro empty');
  if (ov.keywords.length !== 9) problems.push(`keywords=${ov.keywords.length}`);
  if (ov.keywords.some((k) => !nonEmpty(k))) problems.push('empty keyword');
  if (ov.seo.title.length < 50 || ov.seo.title.length > 60) problems.push(`seo.title len=${ov.seo.title.length}`);
  if (!ov.seo.title.endsWith(' | UtilityFlow')) problems.push('seo.title missing " | UtilityFlow"');
  if (ov.seo.description.length < 150 || ov.seo.description.length > 160) problems.push(`seo.description len=${ov.seo.description.length}`);
  if (ov.seo.secondaryKeywords.length !== 4) problems.push(`secondaryKeywords=${ov.seo.secondaryKeywords.length}`);
  if (ov.seo.longTailKeywords.length !== 4) problems.push(`longTailKeywords=${ov.seo.longTailKeywords.length}`);
  if (!nonEmpty(ov.seo.primaryKeyword)) problems.push('primaryKeyword empty');
  if (ov.instructions.length !== 6) problems.push(`instructions=${ov.instructions.length}`);
  if (ov.instructions.some((s) => !nonEmpty(s.title) || !nonEmpty(s.description))) problems.push('empty instruction');
  if (ov.examples.length !== 2) problems.push(`examples=${ov.examples.length}`);
  if (ov.examples.some((e) => !nonEmpty(e.title) || !nonEmpty(e.input) || !nonEmpty(e.output))) problems.push('empty example');
  if (ov.benefits.length !== 4 || ov.benefits.some((b) => !nonEmpty(b))) problems.push('benefits!=4 or empty');
  if (ov.useCases.length !== 4 || ov.useCases.some((u) => !nonEmpty(u))) problems.push('useCases!=4 or empty');
  if (ov.faqs.length !== 20) problems.push(`faqs=${ov.faqs.length}`);
  faqTotal += ov.faqs.length;
  const qSeen = new Set<string>();
  for (const f of ov.faqs) {
    if (!nonEmpty(f.question) || !nonEmpty(f.answer)) problems.push('empty faq');
    if (qSeen.has(f.question)) problems.push(`duplicate faq question: "${f.question.slice(0, 40)}"`);
    qSeen.add(f.question);
    // FAQ identical to its English twin = untranslated
    const enFaq = tool.faqs.find((ef) => ef.question === f.question);
    if (enFaq && enFaq.answer === f.answer) problems.push(`faq untranslated: "${f.question.slice(0, 40)}"`);
  }
  if (problems.length) { fieldBad++; fail(`${tool.id}: ${problems.join('; ')}`); }
}
if (!fieldBad) ok(`all 88 tools pass field counts/lengths; total IT FAQs = ${faqTotal} (expect 1760)`);
else console.log(`  INFO  total IT FAQs counted: ${faqTotal}`);

/* ---------- 4. Categories ---------- */
console.log('\n== Categories ==');
let catBad = 0;
for (const cat of CATEGORIES) {
  const ov = IT_CATEGORY_OVERRIDES[cat.id];
  if (!ov) { fail(`missing IT category override: ${cat.id}`); catBad++; continue; }
  const expected = CATEGORY_LOCALE_SLUGS.it[cat.id];
  if (ov.slug !== expected) { fail(`${cat.id}: slug "${ov.slug}" != expected "${expected}"`); catBad++; }
  if (ov.seo.title.length < 50 || ov.seo.title.length > 60) { fail(`${cat.id}: seo.title len=${ov.seo.title.length}`); catBad++; }
  if (ov.seo.description.length < 150 || ov.seo.description.length > 160) { fail(`${cat.id}: seo.description len=${ov.seo.description.length}`); catBad++; }
  if (ov.sampleToolNames.length !== 5) { fail(`${cat.id}: sampleToolNames=${ov.sampleToolNames.length}`); catBad++; }
}
if (!catBad) ok('7/7 category overrides, slugs match config, SEO lengths in range');

/* ---------- 5. Chrome dictionary parity ---------- */
console.log('\n== Chrome dictionary (en vs it) ==');
function walk(a: unknown, b: unknown, path: string, missing: string[], identical: string[]) {
  if (typeof a === 'string') {
    if (typeof b !== 'string') { missing.push(`${path} (type mismatch)`); return; }
    if (a === b && !IDENTICAL_ALLOWED.has(a) && !a.startsWith('http') && !a.includes('utilityflow') && !/^\d/.test(a)) {
      identical.push(path);
    }
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) { missing.push(`${path} (array len ${a.length} vs ${Array.isArray(b) ? b.length : '?'})`); return; }
    a.forEach((item, i) => walk(item, b[i], `${path}[${i}]`, missing, identical));
    return;
  }
  if (a && typeof a === 'object') {
    for (const key of Object.keys(a as Record<string, unknown>)) {
      if (!(key in (b as Record<string, unknown>))) { missing.push(`${path}.${key}`); continue; }
      walk((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key], `${path}.${key}`, missing, identical);
    }
    for (const key of Object.keys(b as Record<string, unknown>)) {
      if (!(key in (a as Record<string, unknown>))) missing.push(`${path}.${key} (extra in it)`);
    }
    return;
  }
}
const missingKeys: string[] = [];
const identicalVals: string[] = [];
walk(enStrings, itStrings, 'ui', missingKeys, identicalVals);
if (missingKeys.length) missingKeys.forEach((k) => fail(`key mismatch: ${k}`));
else ok('key parity: en and it dictionaries match exactly');
if (identicalVals.length) identicalVals.forEach((k) => warn(`identical en/it value (untranslated?): ${k}`));
else ok('no identical en/it values outside the allowlist');

/* ---------- Summary ---------- */
console.log(`\n== SUMMARY ==\n  failures: ${failures}\n  warnings: ${warnings}`);
if (failures > 0) process.exit(1);
console.log('  IT locale validation PASSED');
