import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG, STATIC_ROUTES, buildCanonicalUrl } from '../src/config/site';
import { CATEGORY_ES_SLUGS, STATIC_PATHS } from '../src/locales/config';
import { ES_TOOL_OVERRIDES } from '../src/locales/es/tools';
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

  /** Push the EN entry and its ES twin, each carrying en/es/x-default alternates. */
  const addBilingual = (
    enPath: string,
    esPath: string | undefined,
    changefreq: string,
    priority: string
  ) => {
    const enUrl = buildCanonicalUrl(enPath, siteOrigin);
    const esUrl = esPath ? buildCanonicalUrl(esPath, siteOrigin) : undefined;
    const alternates: SitemapAlternate[] = [
      { hreflang: 'en', href: enUrl },
      ...(esUrl ? [{ hreflang: 'es', href: esUrl }] : []),
      { hreflang: 'x-default', href: enUrl },
    ];
    entries.push({ loc: enUrl, lastmod: today, changefreq, priority, alternates });
    if (esUrl) {
      entries.push({ loc: esUrl, lastmod: today, changefreq, priority, alternates });
    }
  };

  for (const route of STATIC_ROUTES) {
    addBilingual(
      route.path,
      STATIC_PATHS[route.path]?.es,
      route.changefreq,
      route.priority
    );
  }

  for (const category of CATEGORIES) {
    addBilingual(
      `/category/${category.slug}/`,
      `/es/categoria/${CATEGORY_ES_SLUGS[category.id]}/`,
      'weekly',
      '0.8'
    );
  }

  for (const tool of TOOLS_REGISTRY) {
    const esSlug = ES_TOOL_OVERRIDES[tool.id]?.slug;
    addBilingual(
      `/${tool.slug}/`,
      esSlug ? `/es/${esSlug}/` : undefined,
      'weekly',
      '0.8'
    );
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

  const esCount = entries.filter((e) => e.loc.includes('/es/')).length;
  console.log(
    `Generated sitemap.xml (${entries.length} URLs: ${entries.length - esCount} EN + ${esCount} ES, all with hreflang alternates)`
  );
}

generateSitemap();
