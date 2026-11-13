import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG, STATIC_ROUTES, buildCanonicalUrl } from '../src/config/site';
import { CATEGORIES } from '../src/registry/categories';
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
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

  for (const route of STATIC_ROUTES) {
    entries.push({
      loc: buildCanonicalUrl(route.path, siteOrigin),
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  }

  for (const category of CATEGORIES) {
    entries.push({
      loc: buildCanonicalUrl(`/category/${category.slug}/`, siteOrigin),
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  for (const tool of TOOLS_REGISTRY) {
    entries.push({
      loc: buildCanonicalUrl(`/${tool.slug}/`, siteOrigin),
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.8',
    });
  }

  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (entry) =>
        `  <url>\n` +
        `    <loc>${escapeXml(entry.loc)}</loc>\n` +
        `    <lastmod>${entry.lastmod}</lastmod>\n` +
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

  console.log(
    `Generated sitemap.xml (${entries.length} URLs: ${STATIC_ROUTES.length} static, ${CATEGORIES.length} categories, ${TOOLS_REGISTRY.length} tools)`
  );
}

generateSitemap();
