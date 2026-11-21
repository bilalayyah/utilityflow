import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
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
import { TR_TOOL_OVERRIDES } from '../src/locales/tr/tools';
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
import { TR_ARTICLE_OVERRIDES } from '../src/locales/tr/blog';
import type { ArticleLocaleOverride } from '../src/locales/types';

interface SitemapAlternate {
  hreflang: string;
  href: string;
}

interface SitemapEntry {
  loc: string;
  /** Content date (articles only: publishedAt / updatedAt). Omitted for
   * tool / category / static pages, which have no per-page content date —
   * lastmod is optional in the sitemap spec, and stamping every URL with
   * the build date (audit #8) misleads crawlers on every deploy. */
  lastmod?: string;
  changefreq: string;
  priority: string;
  alternates: SitemapAlternate[];
}

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
  tr: TR_TOOL_OVERRIDES,
};

/** Blog article overrides per locale (Batch 2). Empty until Batch 4 (localization). */
const ARTICLE_OVERRIDES_BY_LOCALE: Record<
  string,
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
  tr: TR_ARTICLE_OVERRIDES,
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap(): void {
  const envOrigin = (process.env.VITE_SITE_URL || process.env.SITE_URL || '').replace(
    /\/+$/,
    ''
  );
  // A stray env value must never silently re-domain the whole sitemap: the
  // canonical origin is https://utilityflow.online, full stop.
  if (envOrigin && envOrigin !== SITE_CONFIG.defaultOrigin) {
    throw new Error(
      `Refusing to generate sitemap: VITE_SITE_URL/SITE_URL is "${envOrigin}" but the canonical origin is "${SITE_CONFIG.defaultOrigin}". Unset the env var or set it to the canonical origin.`
    );
  }
  const siteOrigin = envOrigin || SITE_CONFIG.defaultOrigin;

  const entries: SitemapEntry[] = [];

  /**
   * Push the EN entry and one twin per translated locale, each carrying
   * hreflang alternates for every locale (en + translated + x-default).
   * localizedPaths maps locale code -> localized path (EN path is the key).
   * lastmod is the page's CONTENT date (articles: publishedAt/updatedAt)
   * — pass it only when known; tool / category / static pages carry no
   * lastmod (audit #8: the build date used to stamp all 4,103 URLs).
   */
  const addMultilingual = (
    enPath: string,
    localizedPaths: Partial<Record<LocaleCode, string>>,
    changefreq: string,
    priority: string,
    lastmod?: string
  ) => {
    const urls: Partial<Record<LocaleCode, string>> = { en: enPath, ...localizedPaths };
    const alternates: SitemapAlternate[] = [];
    for (const locale of SUPPORTED_LOCALES) {
      const path = urls[locale.code];
      if (path) {
        alternates.push({
          // Regional tags (en-US, pt-BR, zh-CN) so hreflang matches <html lang>.
          hreflang: localeTag(locale.code),
          href: buildCanonicalUrl(path, siteOrigin),
        });
      }
    }
    alternates.push({ hreflang: 'x-default', href: buildCanonicalUrl(enPath, siteOrigin) });
    for (const locale of SUPPORTED_LOCALES) {
      const path = urls[locale.code];
      if (!path) continue;
      entries.push({
        loc: buildCanonicalUrl(path, siteOrigin),
        ...(lastmod ? { lastmod } : {}),
        changefreq,
        priority,
        alternates,
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
    addMultilingual(route.path, localized, route.changefreq, route.priority);
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
    addMultilingual(`/category/${category.slug}/`, localized, 'weekly', '0.8');
  }

  for (const tool of TOOLS_REGISTRY) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = TOOL_OVERRIDES_BY_LOCALE[locale.code]?.[tool.id]?.slug;
      if (slug) localized[locale.code] = `${locale.pathPrefix}/${slug}/`;
    }
    addMultilingual(`/${tool.slug}/`, localized, 'weekly', '0.8');
  }

  // Blog home (Batch 2): /blog/ in every locale ("blog" in all locales).
  {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const p = STATIC_PATHS['/blog/']?.[locale.code];
      if (p) localized[locale.code] = p;
    }
    addMultilingual('/blog/', localized, 'weekly', '0.9');
  }

  // Blog categories (Batch 2): /blog/category/<slug>/ (EN) and
  // /<locale>/blog/category/<localized-slug>/ (localized). The segment
  // word "category" is English in every locale (like "blog"); the
  // category slug itself is localized.
  for (const category of CATEGORIES) {
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = CATEGORY_LOCALE_SLUGS[locale.code]?.[category.id];
      if (slug) {
        localized[locale.code] = `${locale.pathPrefix}/blog/category/${slug}/`;
      }
    }
    addMultilingual(`/blog/category/${category.slug}/`, localized, 'weekly', '0.8');
  }

  // Blog articles (Batch 3+): only status "published" articles, in every
  // locale where that article's translation is published. An article
  // published only in EN gets an EN entry with just en + x-default
  // hreflang; a fully translated article gets all 12 alternates. (Batch 2:
  // BLOG_ARTICLES is empty, so this loop adds nothing yet.)
  for (const article of BLOG_ARTICLES) {
    if (article.status !== 'published') continue;
    const localized: Partial<Record<LocaleCode, string>> = {};
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === 'en') continue;
      const slug = ARTICLE_OVERRIDES_BY_LOCALE[locale.code]?.[article.id]?.slug;
      if (slug) localized[locale.code] = `${locale.pathPrefix}/blog/${slug}/`;
    }
    addMultilingual(
      `/blog/${article.en.slug}/`,
      localized,
      'weekly',
      '0.7',
      article.updatedAt ?? article.publishedAt
    );
  }

  // Build-time completeness assertions: a silently incomplete sitemap
  // (a locale dropped, a tool missing its slug) must fail the build
  // instead of shipping. Every page exists in every locale, so the counts
  // are exact, not approximate.
  //
  // Blog pages per locale: 1 home + 7 categories = 8 (exist in all 11
  // locales). Articles are per-locale: an article counts in a locale
  // only when it is published there (EN: status "published"; non-EN:
  // a translation override exists). 264 articles are published in EN
  // and in each localized locale (2,904 article URLs); the total is
  // 4,103 URLs.
  const publishedArticles = BLOG_ARTICLES.filter((a) => a.status === 'published');
  const articleCountByLocale = new Map<LocaleCode, number>();
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === 'en') {
      articleCountByLocale.set(locale.code, publishedArticles.length);
    } else {
      const n = publishedArticles.filter(
        (a) => ARTICLE_OVERRIDES_BY_LOCALE[locale.code]?.[a.id]?.slug
      ).length;
      articleCountByLocale.set(locale.code, n);
    }
  }
  const basePages =
    STATIC_ROUTES.length + CATEGORIES.length + TOOLS_REGISTRY.length + 1 + CATEGORIES.length;
  const expectedTotal =
    basePages * SUPPORTED_LOCALES.length +
    [...articleCountByLocale.values()].reduce((sum, n) => sum + n, 0);
  if (entries.length !== expectedTotal) {
    throw new Error(
      `Sitemap incomplete: ${entries.length} URLs, expected ${expectedTotal} (${basePages} base pages x ${SUPPORTED_LOCALES.length} locales + ${[...articleCountByLocale.values()].reduce((sum, n) => sum + n, 0)} article URLs). A page or locale is missing slugs — check the locale overrides.`
    );
  }
  const nonEnPrefixes = SUPPORTED_LOCALES.filter((l) => l.code !== 'en').map(
    (l) => `${l.pathPrefix}/`
  );
  for (const locale of SUPPORTED_LOCALES) {
    const expectedForLocale = basePages + (articleCountByLocale.get(locale.code) ?? 0);
    const n =
      locale.code === 'en'
        ? entries.filter((e) => !nonEnPrefixes.some((p) => e.loc.includes(p))).length
        : entries.filter((e) => e.loc.includes(`${locale.pathPrefix}/`)).length;
    if (n !== expectedForLocale) {
      throw new Error(
        `Sitemap incomplete for locale ${locale.code}: ${n} URLs, expected ${expectedForLocale}.`
      );
    }
  }
  for (const entry of entries) {
    const isBlogArticle =
      entry.loc.includes('/blog/') &&
      !entry.loc.endsWith('/blog/') &&
      !entry.loc.includes('/blog/category/');
    if (isBlogArticle) {
      // Articles: hreflang for exactly the published locales + x-default.
      // An EN-only article has 2 alternates (en-US + x-default); a fully
      // translated article has 12. Anything else is a bug.
      const hasEn = entry.alternates.some((a) => a.hreflang === 'en-US');
      const hasXDefault = entry.alternates.some((a) => a.hreflang === 'x-default');
      if (
        entry.alternates.length < 2 ||
        entry.alternates.length > SUPPORTED_LOCALES.length + 1 ||
        !hasEn ||
        !hasXDefault
      ) {
        throw new Error(
          `Sitemap article entry ${entry.loc} has ${entry.alternates.length} hreflang alternates (expected 2–${SUPPORTED_LOCALES.length + 1}, always including en-US and x-default).`
        );
      }
    } else if (entry.alternates.length !== SUPPORTED_LOCALES.length + 1) {
      throw new Error(
        `Sitemap entry ${entry.loc} has ${entry.alternates.length} hreflang alternates, expected ${SUPPORTED_LOCALES.length + 1} (${SUPPORTED_LOCALES.length} locales + x-default).`
      );
    }
  }

  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map(
      (entry) =>
        `  <url>\n` +
        `    <loc>${escapeXml(entry.loc)}</loc>\n` +
        entry.alternates
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />`
          )
          .join('\n') +
        (entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>\n` : '\n') +
        `    <changefreq>${entry.changefreq}</changefreq>\n` +
        `    <priority>${entry.priority}</priority>\n` +
        `  </url>`
    ),
    '</urlset>',
    '',
  ];

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const publicDir = resolve(__dirname, '../public');
  mkdirSync(publicDir, { recursive: true });

  const sitemapPath = resolve(publicDir, 'sitemap.xml');
  writeFileSync(sitemapPath, xmlLines.join('\n'), 'utf8');

  const robotsPath = resolve(publicDir, 'robots.txt');
  // L-5: Disallow /admin/ (belt-and-braces alongside the admin page's
  // noindex — crawlers should not fetch the admin page or its data).
  // NOTE: this script REWRITES public/robots.txt on every build, so the
  // Disallow must live here — editing public/robots.txt by hand is lost
  // on the next build.
  const robotsContent = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    '',
    `Sitemap: ${siteOrigin}/sitemap.xml`,
    '',
  ].join('\n');
  writeFileSync(robotsPath, robotsContent, 'utf8');

  const counts = SUPPORTED_LOCALES.map((locale) => {
    const n =
      locale.code === 'en'
        ? entries.filter((e) => !nonEnPrefixes.some((p) => e.loc.includes(p))).length
        : entries.filter((e) => e.loc.includes(`${locale.pathPrefix}/`)).length;
    return `${n} ${locale.code.toUpperCase()}`;
  }).join(' + ');
  console.log(
    `Generated sitemap.xml (${entries.length} URLs: ${counts}, all with hreflang alternates)`
  );
}

generateSitemap();
