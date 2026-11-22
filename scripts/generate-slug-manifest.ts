import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NonDefaultLocale } from '../src/locales/config';
import { SUPPORTED_LOCALES } from '../src/locales/config';
import { CATEGORIES } from '../src/registry/categories';
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';
import { ES_CATEGORY_OVERRIDES } from '../src/locales/es/categories';
import { ES_TOOL_OVERRIDES } from '../src/locales/es/tools';
import { DE_CATEGORY_OVERRIDES } from '../src/locales/de/categories';
import { DE_TOOL_OVERRIDES } from '../src/locales/de/tools';
import { FR_CATEGORY_OVERRIDES } from '../src/locales/fr/categories';
import { FR_TOOL_OVERRIDES } from '../src/locales/fr/tools';
import { ID_CATEGORY_OVERRIDES } from '../src/locales/id/categories';
import { ID_TOOL_OVERRIDES } from '../src/locales/id/tools';
import { IT_CATEGORY_OVERRIDES } from '../src/locales/it/categories';
import { IT_TOOL_OVERRIDES } from '../src/locales/it/tools';
import { PT_CATEGORY_OVERRIDES } from '../src/locales/pt/categories';
import { PT_TOOL_OVERRIDES } from '../src/locales/pt/tools';
import { RU_CATEGORY_OVERRIDES } from '../src/locales/ru/categories';
import { RU_TOOL_OVERRIDES } from '../src/locales/ru/tools';
import { JA_CATEGORY_OVERRIDES } from '../src/locales/ja/categories';
import { JA_TOOL_OVERRIDES } from '../src/locales/ja/tools';
import { KO_CATEGORY_OVERRIDES } from '../src/locales/ko/categories';
import { KO_TOOL_OVERRIDES } from '../src/locales/ko/tools';
import { ZH_CATEGORY_OVERRIDES } from '../src/locales/zh/categories';
import { HI_CATEGORY_OVERRIDES } from '../src/locales/hi/categories';
import { AR_CATEGORY_OVERRIDES } from '../src/locales/ar/categories';
import { ZH_TOOL_OVERRIDES } from '../src/locales/zh/tools';
import { HI_TOOL_OVERRIDES } from '../src/locales/hi/tools';
import { AR_TOOL_OVERRIDES } from '../src/locales/ar/tools';
import { TR_CATEGORY_OVERRIDES } from '../src/locales/tr/categories';
import { TR_TOOL_OVERRIDES } from '../src/locales/tr/tools';
import { VI_CATEGORY_OVERRIDES } from '../src/locales/vi/categories';
import { VI_TOOL_OVERRIDES } from '../src/locales/vi/tools';
import { BLOG_ARTICLES } from '../src/registry/blogArticles';
import { ES_ARTICLE_OVERRIDES } from '../src/locales/es/blog';
import { DE_ARTICLE_OVERRIDES } from '../src/locales/de/blog';
import { FR_ARTICLE_OVERRIDES } from '../src/locales/fr/blog';
import { ID_ARTICLE_OVERRIDES } from '../src/locales/id/blog';
import { IT_ARTICLE_OVERRIDES } from '../src/locales/it/blog';
import { PT_ARTICLE_OVERRIDES } from '../src/locales/pt/blog';
import { RU_ARTICLE_OVERRIDES } from '../src/locales/ru/blog';
import { JA_ARTICLE_OVERRIDES } from '../src/locales/ja/blog';
import { KO_ARTICLE_OVERRIDES } from '../src/locales/ko/blog';
import { ZH_ARTICLE_OVERRIDES } from '../src/locales/zh/blog';
import { HI_ARTICLE_OVERRIDES } from '../src/locales/hi/blog';
import { AR_ARTICLE_OVERRIDES } from '../src/locales/ar/blog';
import { TR_ARTICLE_OVERRIDES } from '../src/locales/tr/blog';
import { VI_ARTICLE_OVERRIDES } from '../src/locales/vi/blog';
import type { ArticleLocaleOverride, CategoryLocaleOverride, ToolLocaleOverride } from '../src/locales/types';

/**
 * Generates src/locales/slugManifest.ts — the static slug-only map used by
 * routes.ts for cross-locale navigation (alternate paths + equivalent-path
 * resolution) WITHOUT loading any locale data.
 *
 * Slugs ONLY: no names, descriptions, FAQs or UI strings are included, so
 * the manifest stays tiny and can be imported by the main bundle. It runs
 * as the first step of `npm run build` so it never goes stale.
 *
 * Run directly: `npx tsx scripts/generate-slug-manifest.ts`
 */

const TOOL_OVERRIDES: Record<NonDefaultLocale, Record<string, ToolLocaleOverride>> = {
  es: ES_TOOL_OVERRIDES,
  pt: PT_TOOL_OVERRIDES,
  fr: FR_TOOL_OVERRIDES,
  de: DE_TOOL_OVERRIDES,
  it: IT_TOOL_OVERRIDES,
  id: ID_TOOL_OVERRIDES,
  ru: RU_TOOL_OVERRIDES,
  ja: JA_TOOL_OVERRIDES,
  ko: KO_TOOL_OVERRIDES,
  zh: ZH_TOOL_OVERRIDES,
  hi: HI_TOOL_OVERRIDES,
  ar: AR_TOOL_OVERRIDES,
  tr: TR_TOOL_OVERRIDES,
  vi: VI_TOOL_OVERRIDES,
};

const CATEGORY_OVERRIDES: Record<
  NonDefaultLocale,
  Record<string, CategoryLocaleOverride>
> = {
  es: ES_CATEGORY_OVERRIDES,
  pt: PT_CATEGORY_OVERRIDES,
  fr: FR_CATEGORY_OVERRIDES,
  de: DE_CATEGORY_OVERRIDES,
  it: IT_CATEGORY_OVERRIDES,
  id: ID_CATEGORY_OVERRIDES,
  ru: RU_CATEGORY_OVERRIDES,
  ja: JA_CATEGORY_OVERRIDES,
  ko: KO_CATEGORY_OVERRIDES,
  zh: ZH_CATEGORY_OVERRIDES,
  hi: HI_CATEGORY_OVERRIDES,
  ar: AR_CATEGORY_OVERRIDES,
  tr: TR_CATEGORY_OVERRIDES,
  vi: VI_CATEGORY_OVERRIDES,
};

/** Blog article overrides (Batch 2). Empty until Batch 4 (localization). */
const ARTICLE_OVERRIDES: Record<
  NonDefaultLocale,
  Record<string, ArticleLocaleOverride>
> = {
  es: ES_ARTICLE_OVERRIDES,
  pt: PT_ARTICLE_OVERRIDES,
  fr: FR_ARTICLE_OVERRIDES,
  de: DE_ARTICLE_OVERRIDES,
  it: IT_ARTICLE_OVERRIDES,
  id: ID_ARTICLE_OVERRIDES,
  ru: RU_ARTICLE_OVERRIDES,
  ja: JA_ARTICLE_OVERRIDES,
  ko: KO_ARTICLE_OVERRIDES,
  zh: ZH_ARTICLE_OVERRIDES,
  hi: HI_ARTICLE_OVERRIDES,
  ar: AR_ARTICLE_OVERRIDES,
  tr: TR_ARTICLE_OVERRIDES,
  vi: VI_ARTICLE_OVERRIDES,
};

function generateSlugManifest(): void {
  // Loud completeness checks: a locale added to SUPPORTED_LOCALES without
  // its override maps, or a locale that lost a tool/category, must fail
  // the build instead of silently shipping a shrunken manifest (which
  // would drop hreflang alternates and break the language switcher).
  const nonDefaultLocales = SUPPORTED_LOCALES.filter(
    (l) => l.code !== 'en'
  ).map((l) => l.code) as NonDefaultLocale[];
  for (const locale of nonDefaultLocales) {
    if (!TOOL_OVERRIDES[locale] || !CATEGORY_OVERRIDES[locale] || !ARTICLE_OVERRIDES[locale]) {
      throw new Error(
        `Slug manifest incomplete: locale "${locale}" is in SUPPORTED_LOCALES but missing from TOOL_OVERRIDES/CATEGORY_OVERRIDES/ARTICLE_OVERRIDES in scripts/generate-slug-manifest.ts.`
      );
    }
  }

  // Compact parallel-array format (audit #7 — LocaleContext diet): the
  // article/tool/category ids are stored ONCE in SLUG_IDS (sorted), and
  // each locale carries only the localized slugs in the SAME order. The
  // old Record<string,string> format repeated every id 10x (once per
  // locale) — ~238 KB source for the manifest alone. Parallel arrays
  // store each id once, roughly halving the manifest's bundled size.
  // Lookups go through the helpers in src/locales/slugLookup.ts.
  const sortIds = (ids: string[]): string[] => [...ids].sort();
  const toolIds = sortIds(TOOLS_REGISTRY.map((t) => t.id));
  const categoryIds = sortIds(CATEGORIES.map((c) => c.id));
  const articleIds = sortIds(
    BLOG_ARTICLES.filter((a) => a.status === 'published').map((a) => a.id)
  );

  const manifest: Record<
    NonDefaultLocale,
    {
      tools: string[];
      categories: string[];
      articles: (string | null)[];
    }
  > = {} as Record<
    NonDefaultLocale,
    {
      tools: string[];
      categories: string[];
      articles: (string | null)[];
    }
  >;

  for (const locale of Object.keys(TOOL_OVERRIDES) as NonDefaultLocale[]) {
    const tools: string[] = toolIds.map((toolId) => {
      const slug = TOOL_OVERRIDES[locale][toolId]?.slug;
      if (!slug) {
        throw new Error(
          `Slug manifest incomplete for locale "${locale}": tool "${toolId}" has no slug override.`
        );
      }
      return slug;
    });
    const categories: string[] = categoryIds.map((categoryId) => {
      const slug = CATEGORY_OVERRIDES[locale][categoryId]?.slug;
      if (!slug) {
        throw new Error(
          `Slug manifest incomplete for locale "${locale}": category "${categoryId}" has no slug override.`
        );
      }
      return slug;
    });
    // Article slugs: parallel to articleIds; null when the article is
    // not published in that locale (an article appears as a slug only
    // when its translation exists).
    const articles: (string | null)[] = articleIds.map(
      (articleId) => ARTICLE_OVERRIDES[locale][articleId]?.slug ?? null
    );
    manifest[locale] = { tools, categories, articles };
  }

  // Every locale must carry every tool and every category — exact counts,
  // not approximate. A missing slug would silently drop that locale from
  // hreflang sets and switcher equivalents.
  for (const locale of nonDefaultLocales) {
    if (manifest[locale].tools.length !== TOOLS_REGISTRY.length) {
      throw new Error(
        `Slug manifest incomplete for locale "${locale}": ${manifest[locale].tools.length} tool slugs, expected ${TOOLS_REGISTRY.length}.`
      );
    }
    if (manifest[locale].categories.length !== CATEGORIES.length) {
      throw new Error(
        `Slug manifest incomplete for locale "${locale}": ${manifest[locale].categories.length} category slugs, expected ${CATEGORIES.length}.`
      );
    }
    // Article slugs are NOT exact-count: an article appears in a locale
    // only when its translation is published there. But an override for
    // an UNPUBLISHED article must fail loudly (it would otherwise be
    // silently dropped from the manifest).
    for (const articleId of Object.keys(ARTICLE_OVERRIDES[locale])) {
      if (!articleIds.includes(articleId)) {
        throw new Error(
          `Slug manifest has an orphan article slug for locale "${locale}": "${articleId}" is not a published article.`
        );
      }
    }
  }

  const header = [
    '/**',
    ' * Static slug manifest — GENERATED by scripts/generate-slug-manifest.ts.',
    ' * Do NOT edit by hand; re-run the generator (it is the first step of',
    ' * `npm run build`, so it never goes stale).',
    ' *',
    ' * Compact parallel-array format (audit #7): the ids live ONCE in',
    ' * SLUG_IDS (sorted); each locale carries only the localized slugs in',
    ' * the SAME order, so a slug is found by the id\'s index. The old',
    ' * Record<string,string> format repeated every id 10x (once per',
    ' * locale). Lookups go through src/locales/slugLookup.ts — do NOT',
    ' * index SLUG_MANIFEST directly.',
    ' *',
    ' * Slugs ONLY: no names, descriptions, FAQs or UI strings — routes.ts',
    ' * uses this for cross-locale navigation without loading locale data.',
    ' */',
    '',
    "import type { NonDefaultLocale } from './config';",
    '',
    '/** Per-locale slug arrays, parallel to SLUG_IDS (same order, same length). */',
    'export interface SlugManifestEntry {',
    '  tools: string[];',
    '  categories: string[];',
    '  /** Localized article slug, parallel to SLUG_IDS.articles; null when the article is not published in that locale. */',
    '  articles: (string | null)[];',
    '}',
    '',
    `export const SLUG_IDS = ${JSON.stringify(
      { tools: toolIds, categories: categoryIds, articles: articleIds },
      null,
      2
    )};`,
    '',
    'export const SLUG_MANIFEST: Record<NonDefaultLocale, SlugManifestEntry> = ',
  ].join('\n');

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outPath = resolve(__dirname, '../src/locales/slugManifest.ts');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    `${header}${JSON.stringify(manifest, null, 2)};\n`,
    'utf8'
  );

  const toolCount = Object.values(manifest).reduce(
    (sum, entry) => sum + entry.tools.length,
    0
  );
  const categoryCount = Object.values(manifest).reduce(
    (sum, entry) => sum + entry.categories.length,
    0
  );
  const articleCount = Object.values(manifest).reduce(
    (sum, entry) => sum + entry.articles.filter(Boolean).length,
    0
  );
  console.log(
    `Generated slugManifest.ts (${Object.keys(manifest).length} locales, ${toolCount} tool slugs, ${categoryCount} category slugs, ${articleCount} article slugs)`
  );
}

generateSlugManifest();
