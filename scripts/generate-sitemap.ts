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
import type { ToolLocaleOverride } from '../src/locales/types';
import { CATEGORIES } from '../src/registry/categories';
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';

interface SitemapAlternate {
  hreflang: string;
  href: string;
}

interface SitemapEntry {
  loc: string;
  lastmod: string;
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
  const siteOrigin = (
    process.env.VITE_SITE_URL ||
    process.env.SITE_URL ||
    SITE_CONFIG.defaultOrigin
  ).replace(/\/+$/, '');

  const today = new Date().toISOString().split('T')[0];
  const entries: SitemapEntry[] = [];

  /**
   * Push the EN entry and one twin per translated locale, each carrying
   * hreflang alternates for every locale (en + translated + x-default).
   * localizedPaths maps locale code -> localized path (EN path is the key).
   */
  const addMultilingual = (
    enPath: string,
    localizedPaths: Partial<Record<LocaleCode, string>>,
    changefreq: string,
    priority: string
  ) => {
    const urls: Partial<Record<LocaleCode, string>> = { en: enPath, ...localizedPaths };
    const alternates: SitemapAlternate[] = [];
    for (const locale of SUPPORTED_LOCALES) {
      const path = urls[locale.code];
      if (path) {
        alternates.push({
          hreflang: locale.code,
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
        lastmod: today,
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
        `\n    <lastmod>${entry.lastmod}</lastmod>\n` +
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
  const robotsContent = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteOrigin}/sitemap.xml`,
    '',
  ].join('\n');
  writeFileSync(robotsPath, robotsContent, 'utf8');

  const nonEnPrefixes = SUPPORTED_LOCALES.filter((l) => l.code !== 'en').map(
    (l) => `${l.pathPrefix}/`
  );
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
