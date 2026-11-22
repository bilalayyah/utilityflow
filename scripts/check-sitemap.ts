#!/usr/bin/env tsx
// Standalone sitemap validator (audit #3). Run: tsx scripts/check-sitemap.ts
// [path-to-sitemap.xml]  (default: public/sitemap.xml).
//
// Independently recomputes the expected URL set from the same registry /
// locale sources the generator uses, then validates the GENERATED
// sitemap.xml file (not the generator's in-memory entries), so a bug in
// the generator — a dropped locale, a wrong slug, a stale lastmod — is
// caught instead of shipped.
//
// Checks:
//  1. Total URL count == expected (4,103 as of 2026-11-19; computed from
//     the registry, so it follows new articles / locales automatically).
//  2. No duplicate <loc> values.
//  3. Every <loc> ends with '/' (trailing-slash canonicals).
//  4. The URL set is exactly the expected set (no missing, no extra).
//  5. Every URL's hreflang alternates are exactly the expected localized
//     set + x-default -> EN, and every alternate href is itself a <loc>
//     in the sitemap (reciprocity).
//  6. lastmod == publishedAt / updatedAt for articles; ABSENT for
//     tool / category / static pages (audit #8).
//  7. Per-locale counts match (373 per locale).
// Exit 0 on pass, 1 on any failure (prints every failure, not just the
// first). Wired as `prebuild` in package.json and in the build chain
// right after generate-sitemap.ts, so a broken sitemap fails the build.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SITE_CONFIG, STATIC_ROUTES, buildCanonicalUrl } from '../src/config/site';
import type { LocaleCode } from '../src/locales/config';
import {
  CATEGORY_LOCALE_SLUGS,
  CATEGORY_PATH_SEGMENT,
  STATIC_PATHS,
  SUPPORTED_LOCALES,
  localeTag,
} from '../src/locales/config';
import { PT_TOOL_OVERRIDES } from '../src/locales/pt/tools';
import { FR_TOOL_OVERRIDES } from '../src/locales/fr/tools';
import { ES_TOOL_OVERRIDES } from '../src/locales/es/tools';
import { DE_TOOL_OVERRIDES } from '../src/locales/de/tools';
import { ID_TOOL_OVERRIDES } from '../src/locales/id/tools';
import { IT_TOOL_OVERRIDES } from '../src/locales/it/tools';
import { RU_TOOL_OVERRIDES } from '../src/locales/ru/tools';
import { JA_TOOL_OVERRIDES } from '../src/locales/ja/tools';
import { KO_TOOL_OVERRIDES } from '../src/locales/ko/tools';
import { ZH_TOOL_OVERRIDES } from '../src/locales/zh/tools';
import { HI_TOOL_OVERRIDES } from '../src/locales/hi/tools';
import { UR_TOOL_OVERRIDES } from '../src/locales/ur/tools';
import type { ToolLocaleOverride } from '../src/locales/types';
import { CATEGORIES } from '../src/registry/categories';
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';
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
import { UR_ARTICLE_OVERRIDES } from '../src/locales/ur/blog';

const TOOL_OVERRIDES_BY_LOCALE: Record<string, Record<string, ToolLocaleOverride>> = {
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
  ur: UR_TOOL_OVERRIDES,
};

const ARTICLE_OVERRIDES_BY_LOCALE = {
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
  ur: UR_ARTICLE_OVERRIDES,
} as const;

interface ExpectedEntry {
  /** hreflang -> href (includes x-default -> EN). */
  alternates: Map<string, string>;
  /** Content date for articles; undefined = no <lastmod> expected. */
  lastmod?: string;
  isArticle: boolean;
}

function buildExpected(siteOrigin: string): Map<string, ExpectedEntry> {
  const expected = new Map<string, ExpectedEntry>();
  const addGroup = (
    enPath: string,
    localizedPaths: Partial<Record<LocaleCode, string>>,
    lastmod?: string,
    isArticle = false
  ) => {
    const urls: Partial<Record<LocaleCode, string>> = { en: enPath, ...localizedPaths };
    const alternates = new Map<string, string>();
    for (const locale of SUPPORTED_LOCALES) {
      const path = urls[locale.code];
      if (path) alternates.set(localeTag(locale.code), buildCanonicalUrl(path, siteOrigin));
    }
    alternates.set('x-default', buildCanonicalUrl(enPath, siteOrigin));
    for (const locale of SUPPORTED_LOCALES) {
      const path = urls[locale.code];
      if (!path) continue;
      expected.set(buildCanonicalUrl(path, siteOrigin), {
        alternates,
        ...(lastmod ? { lastmod } : {}),
        isArticle,
      });
    }
  };

  for (const route of STATIC_ROUTES) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const p = STATIC_PATHS[route.path]?.[locale.code];
      if (p) localized[locale.code] = p;
    }
    addGroup(route.path, localized);
  }
  for (const category of CATEGORIES) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = CATEGORY_LOCALE_SLUGS[locale.code]?.[category.id];
      if (slug) {
        localized[locale.code] =
          `${locale.pathPrefix}/${CATEGORY_PATH_SEGMENT[locale.code]}/${slug}/`;
      }
    }
    addGroup(`/category/${category.slug}/`, localized);
  }
  for (const tool of TOOLS_REGISTRY) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = TOOL_OVERRIDES_BY_LOCALE[locale.code]?.[tool.id]?.slug;
      if (slug) localized[locale.code] = `${locale.pathPrefix}/${slug}/`;
    }
    addGroup(`/${tool.slug}/`, localized);
  }
  {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const p = STATIC_PATHS['/blog/']?.[locale.code];
      if (p) localized[locale.code] = p;
    }
    addGroup('/blog/', localized);
  }
  for (const category of CATEGORIES) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = CATEGORY_LOCALE_SLUGS[locale.code]?.[category.id];
      if (slug) {
        localized[locale.code] = `${locale.pathPrefix}/blog/category/${slug}/`;
      }
    }
    addGroup(`/blog/category/${category.slug}/`, localized);
  }
  for (const article of BLOG_ARTICLES) {
    if (article.status !== 'published') continue;
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = ARTICLE_OVERRIDES_BY_LOCALE[locale.code]?.[article.id]?.slug;
      if (slug) localized[locale.code] = `${locale.pathPrefix}/blog/${slug}/`;
    }
    addGroup(
      `/blog/${article.en.slug}/`,
      localized,
      article.updatedAt ?? article.publishedAt,
      true
    );
  }
  return expected;
}

interface ParsedEntry {
  loc: string;
  alternates: Map<string, string>;
  lastmod?: string;
}

function parseSitemap(xml: string): ParsedEntry[] {
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  return blocks.map((block) => {
    const body = block[1];
    const locMatches = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)];
    if (locMatches.length !== 1) {
      throw new Error(
        `Sitemap <url> block with ${locMatches.length} <loc> tags (expected exactly 1).`
      );
    }
    const loc = locMatches[0][1];
    const alternates = new Map<string, string>();
    for (const m of body.matchAll(
      /<xhtml:link rel="alternate" hreflang="([^"]+)" href="([^"]+)" \/>/g
    )) {
      alternates.set(m[1], m[2]);
    }
    const lastmod = body.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    return { loc, alternates, ...(lastmod ? { lastmod } : {}) };
  });
}

function main(): void {
  const failures: string[] = [];
  const fail = (msg: string) => failures.push(msg);

  const sitemapPath = resolve(process.argv[2] ?? 'public/sitemap.xml');
  const xml = readFileSync(sitemapPath, 'utf8');
  const parsed = parseSitemap(xml);

  const envOrigin = process.env.VITE_SITE_URL || process.env.SITE_URL || '';
  const siteOrigin = envOrigin || SITE_CONFIG.defaultOrigin;
  const expected = buildExpected(siteOrigin);
  const locSet = new Set(parsed.map((e) => e.loc));

  // 1. Total count.
  if (parsed.length !== expected.size) {
    fail(`Total URLs: ${parsed.length}, expected ${expected.size}.`);
  }

  // 2. Duplicates.
  const seen = new Map<string, number>();
  for (const e of parsed) seen.set(e.loc, (seen.get(e.loc) ?? 0) + 1);
  for (const [loc, n] of seen) {
    if (n > 1) fail(`Duplicate <loc>: ${loc} (${n}x).`);
  }

  // 3. Trailing slash.
  for (const e of parsed) {
    if (!e.loc.endsWith('/')) fail(`<loc> without trailing slash: ${e.loc}`);
  }

  // 4. Exact URL set.
  const missing = [...expected.keys()].filter((loc) => !locSet.has(loc));
  const extra = parsed.map((e) => e.loc).filter((loc) => !expected.has(loc));
  if (missing.length) {
    fail(`Missing ${missing.length} expected URLs (first 5): ${missing.slice(0, 5).join(', ')}`);
  }
  if (extra.length) {
    fail(`Unexpected ${extra.length} URLs (first 5): ${extra.slice(0, 5).join(', ')}`);
  }

  // 5 + 6. Alternates + lastmod, per URL.
  for (const e of parsed) {
    const exp = expected.get(e.loc);
    if (!exp) continue;
    if (e.alternates.size !== exp.alternates.size) {
      fail(
        `${e.loc}: ${e.alternates.size} hreflang alternates, expected ${exp.alternates.size}.`
      );
    } else {
      for (const [hreflang, href] of exp.alternates) {
        if (e.alternates.get(hreflang) !== href) {
          fail(`${e.loc}: hreflang ${hreflang} -> ${e.alternates.get(hreflang) ?? '(missing)'}, expected ${href}.`);
        }
        if (!locSet.has(href)) {
          fail(`${e.loc}: alternate ${hreflang} href ${href} is not itself a <loc> in the sitemap (not reciprocal).`);
        }
      }
    }
    if (exp.lastmod) {
      if (e.lastmod !== exp.lastmod) {
        fail(`${e.loc}: lastmod ${e.lastmod ?? '(missing)'}, expected ${exp.lastmod}.`);
      }
    } else if (e.lastmod) {
      fail(`${e.loc}: unexpected <lastmod> ${e.lastmod} (non-article pages carry no lastmod).`);
    }
  }

  // 7. Per-locale counts.
  const nonEnPrefixes = SUPPORTED_LOCALES.filter((l) => l.code !== 'en').map(
    (l) => `${l.pathPrefix}/`
  );
  for (const locale of SUPPORTED_LOCALES) {
    const n =
      locale.code === 'en'
        ? parsed.filter((e) => !nonEnPrefixes.some((p) => e.loc.includes(p))).length
        : parsed.filter((e) => e.loc.includes(`${locale.pathPrefix}/`)).length;
    const expectedN = [...expected.keys()].filter((loc) =>
      locale.code === 'en'
        ? !nonEnPrefixes.some((p) => loc.includes(p))
        : loc.includes(`${locale.pathPrefix}/`)
    ).length;
    if (n !== expectedN) {
      fail(`Locale ${locale.code}: ${n} URLs, expected ${expectedN}.`);
    }
  }

  if (failures.length) {
    console.error(`check-sitemap FAILED (${failures.length} failure${failures.length === 1 ? '' : 's'}):`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
  }
  console.log(
    `check-sitemap OK: ${parsed.length} URLs, 0 duplicates, all trailing-slash, hreflang reciprocal, lastmod matches article dates.`
  );
}

main();
