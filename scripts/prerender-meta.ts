// scripts/prerender-meta.ts
//
// Build-time prerendering of <head> for all 1,111 routes (Audit Fix #1;
// also fixes #7, the shell canonical that pointed every page at the homepage).
//
// Runs AFTER `vite build` (see the `build` script in package.json).
// Reads dist/index.html (the SPA shell) and writes one prerendered
// dist/<route>/index.html per route (for `/`, it overwrites dist/index.html).
// Each file is the shell with ONLY the SEO head replaced by the route-correct
// head; the body, JS bundle, CSS, fonts and the AdSense script are untouched,
// so the app boots exactly as before for real users.
//
// The SEO head mirrors src/components/seo/SeoHead.tsx exactly (same tags,
// same order, same values). The per-page props mirror each page's SeoHead
// call (ToolPageLayout, HomePage, CategoryPage, ToolsDirectoryPage,
// About/Contact/Privacy/Terms, AdminCommentsPage). NOTE: when a page's
// SeoHead call changes, update the matching builder below — the two must
// stay in sync (Fix #14 updates Home/About, Fix #16 adds per-tool og:image,
// Fix #22 updates the admin title/description).
//
// Route enumeration mirrors scripts/generate-sitemap.ts (STATIC_ROUTES +
// CATEGORIES + TOOLS_REGISTRY, 101 pages x 11 locales = 1,111 URLs).
//
// Also writes functions/known-routes.ts (KNOWN_ROUTES set, used by the
// Cloudflare Pages Functions middleware for 404 handling — Fix #2).

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG, STATIC_ROUTES, buildCanonicalUrl } from '../src/config/site';
import { getOgImageForPage } from '../src/config/ogImages';
import {
  CATEGORY_LOCALE_SLUGS,
  CATEGORY_PATH_SEGMENT,
  STATIC_PATHS,
  SUPPORTED_LOCALES,
  categoryHref,
  getLocaleInfo,
  localeTag,
  localizeStaticPath,
  toolHref,
} from '../src/locales/config';
import { loadLocaleData } from '../src/locales/loader';
import {
  getCategoryAlternatePaths,
  getStaticAlternatePaths,
  getToolAlternatePaths,
  toHreflangEntries,
} from '../src/locales/routes';
import { getLocalizedCategory, getLocalizedTool } from '../src/locales/tools';
import { formatString } from '../src/locales/ui';
import type { LocaleCode } from '../src/locales/config';
import type { LocaleData } from '../src/locales/types';
import { CATEGORIES } from '../src/registry/categories';
import { TOOLS_REGISTRY } from '../src/registry/toolsRegistry';
import { DE_TOOL_OVERRIDES } from '../src/locales/de/tools';
import { ES_TOOL_OVERRIDES } from '../src/locales/es/tools';
import { FR_TOOL_OVERRIDES } from '../src/locales/fr/tools';
import { ID_TOOL_OVERRIDES } from '../src/locales/id/tools';
import { IT_TOOL_OVERRIDES } from '../src/locales/it/tools';
import { JA_TOOL_OVERRIDES } from '../src/locales/ja/tools';
import { KO_TOOL_OVERRIDES } from '../src/locales/ko/tools';
import { PT_TOOL_OVERRIDES } from '../src/locales/pt/tools';
import { RU_TOOL_OVERRIDES } from '../src/locales/ru/tools';
import { ZH_TOOL_OVERRIDES } from '../src/locales/zh/tools';
import type { ToolLocaleOverride } from '../src/locales/types';
import type { BreadcrumbItem, CategoryId } from '../src/types/tool';

const ORIGIN = SITE_CONFIG.defaultOrigin;

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
};

// ---------------------------------------------------------------------------
// Pure replicas of the app's schema builders (identical output).
// Copied from src/components/common/Breadcrumbs.tsx (buildBreadcrumbSchema),
// src/components/common/FAQAccordion.tsx (buildFaqSchema) and
// src/components/tool/ToolPageLayout.tsx (buildHowToSchema) so this script
// stays free of React imports. If those builders change, update here too.
// ---------------------------------------------------------------------------

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = buildCanonicalUrl(item.href, ORIGIN);
      }
      return entry;
    }),
  };
}

function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildHowToSchema(
  howToTitle: string,
  description: string,
  steps: Array<{ title: string; description: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToTitle,
    description,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
    })),
  };
}

// ---------------------------------------------------------------------------
// HTML escaping. Attribute values escape & < > "; <title> text escapes & < >.
// JSON-LD is escaped so a `</script>` sequence inside a string can never
// break out of the script element (JSON `\u003c` is valid JSON).
// ---------------------------------------------------------------------------

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeJsonLd(serialized: string): string {
  // Serialized JSON in, escaped JSON out (NOT re-stringified).
  return serialized.replace(/</g, '\\u003c');
}

// ---------------------------------------------------------------------------
// renderSeoHead — mirrors SeoHead.tsx's useEffect, same tags in the same
// order: title, description, keywords, robots, canonical, hreflang
// alternates, og:* (+ og:locale:alternate), twitter:*, JSON-LD scripts.
// ---------------------------------------------------------------------------

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  alternates?: Array<{ hreflang: string; href: string }>;
  ogImage?: string;
  locale: LocaleCode;
}

function renderSeoHead(props: SeoHeadProps): string {
  const canonicalUrl = buildCanonicalUrl(props.canonicalPath, ORIGIN);
  const ogLocale = localeTag(props.locale).replace('-', '_');
  const ogLocaleAlternates = SUPPORTED_LOCALES.filter((l) => l.code !== props.locale).map(
    (l) => localeTag(l.code).replace('-', '_')
  );
  const ogImageUrl = props.ogImage ?? `${ORIGIN}/og-image.jpg`;
  const lines: string[] = [];
  lines.push(`    <title>${escapeText(props.title)}</title>`);
  lines.push(`    <meta name="description" content="${escapeAttr(props.description)}" />`);
  if (props.keywords && props.keywords.length > 0) {
    lines.push(`    <meta name="keywords" content="${escapeAttr(props.keywords.join(', '))}" />`);
  }
  lines.push(
    `    <meta name="robots" content="${props.noIndex ? 'noindex, follow' : 'index, follow'}" />`
  );
  lines.push(`    <link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`);
  if (props.alternates) {
    for (const alt of props.alternates) {
      lines.push(
        `    <link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(alt.href)}" />`
      );
    }
  }
  lines.push(`    <meta property="og:title" content="${escapeAttr(props.title)}" />`);
  lines.push(`    <meta property="og:description" content="${escapeAttr(props.description)}" />`);
  lines.push(`    <meta property="og:type" content="${props.ogType ?? 'website'}" />`);
  lines.push(`    <meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`);
  lines.push(`    <meta property="og:site_name" content="${escapeAttr(SITE_CONFIG.name)}" />`);
  lines.push(`    <meta property="og:locale" content="${escapeAttr(ogLocale)}" />`);
  for (const alt of ogLocaleAlternates) {
    lines.push(`    <meta property="og:locale:alternate" content="${escapeAttr(alt)}" />`);
  }
  lines.push(`    <meta property="og:image" content="${escapeAttr(ogImageUrl)}" />`);
  lines.push(`    <meta name="twitter:card" content="summary_large_image" />`);
  lines.push(`    <meta name="twitter:title" content="${escapeAttr(props.title)}" />`);
  lines.push(`    <meta name="twitter:description" content="${escapeAttr(props.description)}" />`);
  lines.push(`    <meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />`);
  if (props.structuredData) {
    const items = Array.isArray(props.structuredData)
      ? props.structuredData
      : [props.structuredData];
    for (const item of items) {
      if (!item) continue;
      lines.push(
        `    <script type="application/ld+json" data-seo-jsonld="true">${escapeJsonLd(JSON.stringify(item))}</script>`
      );
    }
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Per-page SeoHead props — each builder mirrors one page's SeoHead call.
// ---------------------------------------------------------------------------

interface PageSeo {
  path: string;
  locale: LocaleCode;
  props: SeoHeadProps;
}

function buildOrganizationSchema(homePath: string): Record<string, unknown> {
  // Fix #14: mirrors the Organization schema in HomePage/AboutPage.
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(homePath, ORIGIN),
    logo: 'https://utilityflow.online/og-image.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE_CONFIG.contactEmail,
    },
  };
}

function homeSeo(t: LocaleData['uiStrings'], locale: LocaleCode): SeoHeadProps {
  const homePath = localizeStaticPath('/', locale);
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(homePath, ORIGIN),
    description: t.home.seoDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${buildCanonicalUrl(localizeStaticPath('/tools/', locale), ORIGIN)}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return {
    title: t.home.seoTitle,
    description: t.home.seoDescription,
    canonicalPath: homePath,
    keywords: t.home.seoKeywords,
    structuredData: [websiteSchema, buildOrganizationSchema(homePath), buildFaqSchema(t.home.faqs)],
    alternates: toHreflangEntries(getStaticAlternatePaths('/')),
    locale,
  };
}

function directorySeo(t: LocaleData['uiStrings'], locale: LocaleCode): SeoHeadProps {
  const canonicalPath = localizeStaticPath('/tools/', locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.allTools },
  ];
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name:
      locale === 'en'
        ? `${SITE_CONFIG.name} Tools Directory`
        : `${t.directory.title} | ${SITE_CONFIG.name}`,
    url: buildCanonicalUrl(canonicalPath, ORIGIN),
    description: t.directory.seoDescription,
  };
  return {
    title: t.directory.seoTitle,
    description: t.directory.seoDescription,
    canonicalPath,
    keywords: t.directory.seoKeywords,
    structuredData: [collectionSchema, buildBreadcrumbSchema(breadcrumbs)],
    alternates: toHreflangEntries(getStaticAlternatePaths('/tools/')),
    locale,
  };
}

type StaticPageKey = 'about' | 'contact' | 'privacy' | 'terms';

const STATIC_PAGE_CONFIG: Record<
  StaticPageKey,
  { enPath: string; seoTitle: (t: LocaleData['uiStrings']) => string; seoDescription: (t: LocaleData['uiStrings']) => string; crumbLabel: (t: LocaleData['uiStrings']) => string }
> = {
  about: {
    enPath: '/about/',
    seoTitle: (t) => t.about.seoTitle,
    seoDescription: (t) => t.about.seoDescription,
    crumbLabel: (t) => t.nav.about,
  },
  contact: {
    enPath: '/contact/',
    seoTitle: (t) => t.contact.seoTitle,
    seoDescription: (t) => t.contact.seoDescription,
    crumbLabel: (t) => t.nav.contact,
  },
  privacy: {
    enPath: '/privacy-policy/',
    seoTitle: (t) => t.privacy.seoTitle,
    seoDescription: (t) => t.privacy.seoDescription,
    crumbLabel: (t) => t.footer.privacyPolicy,
  },
  terms: {
    enPath: '/terms-of-service/',
    seoTitle: (t) => t.terms.seoTitle,
    seoDescription: (t) => t.terms.seoDescription,
    crumbLabel: (t) => t.footer.termsOfService,
  },
};

function staticPageSeo(
  key: StaticPageKey,
  t: LocaleData['uiStrings'],
  locale: LocaleCode
): SeoHeadProps {
  const cfg = STATIC_PAGE_CONFIG[key];
  const canonicalPath = localizeStaticPath(cfg.enPath, locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: cfg.crumbLabel(t) },
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
  return {
    title: cfg.seoTitle(t),
    description: cfg.seoDescription(t),
    canonicalPath,
    // Fix #14: About also carries the Organization schema (mirrors AboutPage).
    structuredData:
      key === 'about'
        ? [breadcrumbSchema, buildOrganizationSchema(localizeStaticPath('/', locale))]
        : breadcrumbSchema,
    alternates: toHreflangEntries(getStaticAlternatePaths(cfg.enPath)),
    locale,
  };
}

function categorySeo(
  categoryId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: LocaleData
): SeoHeadProps {
  const category = getLocalizedCategory(categoryId as CategoryId, locale, data);
  if (!category) throw new Error(`Category not found: ${categoryId}`);
  const canonicalPath = categoryHref(category.id, locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.tools, href: localizeStaticPath('/tools/', locale) },
    { label: category.name },
  ];
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: buildCanonicalUrl(canonicalPath, ORIGIN),
    description: category.seo.description,
  };
  return {
    title: category.seo.title,
    description: category.seo.description,
    canonicalPath,
    keywords: category.seo.keywords,
    structuredData: [collectionSchema, buildBreadcrumbSchema(breadcrumbs)],
    alternates: toHreflangEntries(getCategoryAlternatePaths(category.id)),
    ogImage: getOgImageForPage('category', category.id),
    locale,
  };
}

function toolSeo(
  toolId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: LocaleData
): SeoHeadProps {
  const base = TOOLS_REGISTRY.find((tool) => tool.id === toolId);
  if (!base) throw new Error(`Tool not found: ${toolId}`);
  const tool = getLocalizedTool(base, locale, data);
  const canonicalPath = toolHref(tool.slug, locale);
  const category = getLocalizedCategory(tool.categoryId, locale, data);
  const howToTitle = formatString(t.toolPage.howToUse, { name: tool.name });
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    ...(category
      ? [{ label: category.name, href: categoryHref(category.id, locale) }]
      : []),
    { label: tool.name },
  ];
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: buildCanonicalUrl(canonicalPath, ORIGIN),
    applicationCategory: tool.seo.schemaApplicationCategory || 'UtilitiesApplication',
    operatingSystem: 'All',
    isAccessibleForFree: true,
    description: tool.seo.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
  const structuredData: Array<Record<string, unknown>> = [
    softwareSchema,
    buildBreadcrumbSchema(breadcrumbItems),
    ...(tool.instructions.length > 0
      ? [buildHowToSchema(howToTitle, tool.seo.description, tool.instructions)]
      : []),
    ...(tool.faqs.length > 0 ? [buildFaqSchema(tool.faqs)] : []),
  ];
  return {
    title: tool.seo.title,
    description: tool.seo.description,
    canonicalPath,
    keywords: [
      tool.seo.primaryKeyword,
      ...tool.seo.secondaryKeywords,
      ...tool.seo.longTailKeywords,
    ],
    structuredData,
    alternates: toHreflangEntries(getToolAlternatePaths(tool.id)),
    ogImage: getOgImageForPage('tool', tool.id),
    locale,
  };
}

// Admin page values are hard-coded here to match AdminCommentsPage.tsx
// (Fix #22 updates both places together).
const ADMIN_SEO = {
  title: 'Comments Admin – Moderate UtilityFlow Comments',
  description:
    'Review the newest comments across all UtilityFlow tool pages and delete spam. Admin-only page, not linked or indexed.',
  canonicalPath: '/admin/comments/',
};

function adminSeo(): SeoHeadProps {
  return {
    title: ADMIN_SEO.title,
    description: ADMIN_SEO.description,
    canonicalPath: ADMIN_SEO.canonicalPath,
    noIndex: true,
    locale: 'en',
  };
}

// ---------------------------------------------------------------------------
// Shell surgery: strip the shell's SEO tags, then replace <title> with the
// route-correct SEO block. Everything else in <head> (charset, viewport,
// favicon, theme script, fonts, AdSense script) and the whole <body> stay
// byte-identical, so the app boots exactly as before.
// ---------------------------------------------------------------------------

const SEO_TAG_PATTERNS: RegExp[] = [
  /<meta\s+name="description"[^>]*\/?>/g,
  /<meta\s+name="keywords"[^>]*\/?>/g,
  /<meta\s+name="robots"[^>]*\/?>/g,
  /<link\s+rel="canonical"[^>]*\/?>/g,
  /<link\s+rel="alternate"[^>]*\/?>/g,
  /<meta\s+property="og:[^"]*"[^>]*\/?>/g,
  /<meta\s+name="twitter:[^"]*"[^>]*\/?>/g,
  /<script[^>]*data-seo-jsonld[^>]*>[\s\S]*?<\/script>/g,
];

function prerenderHead(shell: string, seo: SeoHeadProps): string {
  const headMatch = shell.match(/<head>([\s\S]*?)<\/head>/);
  if (!headMatch) throw new Error('Shell has no <head> block');
  let head = headMatch[1];
  if (!/<title>[\s\S]*?<\/title>/.test(head)) {
    throw new Error('Shell head has no <title> element');
  }
  for (const pattern of SEO_TAG_PATTERNS) {
    head = head.replace(pattern, '');
  }
  // Drop the now-empty lines left behind by the removed tags.
  head = head
    .split('\n')
    .filter((line) => line.trim() !== '')
    .join('\n');
  head = head.replace(/<title>[\s\S]*?<\/title>/, () => renderSeoHead(seo));
  return shell.replace(/<head>[\s\S]*?<\/head>/, () => `<head>${head}\n  </head>`);
}

function filePathForRoute(distDir: string, routePath: string): string {
  if (routePath === '/') return resolve(distDir, 'index.html');
  const cleaned = routePath.replace(/^\/+|\/+$/g, '');
  return resolve(distDir, cleaned, 'index.html');
}

// ---------------------------------------------------------------------------
// Main: enumerate routes (same as generate-sitemap.ts), render each page,
// write dist files, cross-check against public/sitemap.xml, and emit
// functions/known-routes.ts.
// ---------------------------------------------------------------------------

async function prerender(): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const distDir = resolve(__dirname, '../dist');
  const shellPath = resolve(distDir, 'index.html');
  if (!existsSync(shellPath)) {
    throw new Error(`Shell not found: ${shellPath} (run vite build first)`);
  }
  const shell = readFileSync(shellPath, 'utf8');
  if (!shell.includes('<div id="root">') || !shell.includes('/assets/')) {
    throw new Error('Shell does not look like the built app (no #root or /assets/)');
  }

  const pages: PageSeo[] = [];
  const knownRoutes = new Set<string>();

  for (const localeInfo of SUPPORTED_LOCALES) {
    const locale = localeInfo.code;
    const data: LocaleData = await loadLocaleData(locale);
    const t = data.uiStrings;

    // Static routes (home, directory, about, contact, privacy, terms).
    for (const route of STATIC_ROUTES) {
      const localized =
        route.path === '/'
          ? localizeStaticPath('/', locale)
          : STATIC_PATHS[route.path]?.[locale] ?? route.path;
      let props: SeoHeadProps;
      if (route.path === '/') props = homeSeo(t, locale);
      else if (route.path === '/tools/') props = directorySeo(t, locale);
      else if (route.path === '/about/') props = staticPageSeo('about', t, locale);
      else if (route.path === '/contact/') props = staticPageSeo('contact', t, locale);
      else if (route.path === '/privacy-policy/')
        props = staticPageSeo('privacy', t, locale);
      else props = staticPageSeo('terms', t, locale);
      pages.push({ path: localized, locale, props });
      knownRoutes.add(localized);
    }

    // Category hubs.
    for (const category of CATEGORIES) {
      const localized =
        locale === 'en'
          ? `/category/${category.slug}/`
          : `${localeInfo.pathPrefix}/${CATEGORY_PATH_SEGMENT[locale]}/${CATEGORY_LOCALE_SLUGS[locale][category.id]}/`;
      pages.push({ path: localized, locale, props: categorySeo(category.id, t, locale, data) });
      knownRoutes.add(localized);
    }

    // Tool pages.
    for (const tool of TOOLS_REGISTRY) {
      const localized =
        locale === 'en'
          ? `/${tool.slug}/`
          : `${localeInfo.pathPrefix}/${TOOL_OVERRIDES_BY_LOCALE[locale]?.[tool.id]?.slug ?? tool.slug}/`;
      pages.push({ path: localized, locale, props: toolSeo(tool.id, t, locale, data) });
      knownRoutes.add(localized);
    }
  }

  // Admin page (not in the sitemap; noindex; EN only).
  const adminProps = adminSeo();

  // Assertions before writing anything.
  const expectedPages = STATIC_ROUTES.length + CATEGORIES.length + TOOLS_REGISTRY.length;
  const expectedTotal = expectedPages * SUPPORTED_LOCALES.length;
  if (pages.length !== expectedTotal) {
    throw new Error(
      `Prerender incomplete: ${pages.length} pages, expected ${expectedTotal} (${expectedPages} pages x ${SUPPORTED_LOCALES.length} locales).`
    );
  }
  const seen = new Set<string>();
  for (const page of pages) {
    if (seen.has(page.path)) throw new Error(`Duplicate route: ${page.path}`);
    seen.add(page.path);
    if (!page.props.title || !page.props.description) {
      throw new Error(`Missing title/description for ${page.path}`);
    }
    if (page.props.alternates && page.props.alternates.length !== SUPPORTED_LOCALES.length + 1) {
      throw new Error(
        `${page.path} has ${page.props.alternates.length} hreflang alternates, expected ${SUPPORTED_LOCALES.length + 1}.`
      );
    }
  }

  // Write one file per route.
  let written = 0;
  for (const page of pages) {
    const html = prerenderHead(shell, page.props);
    const withLang = html.replace('<html lang="en">', () => `<html lang="${escapeAttr(getLocaleInfo(page.locale).htmlLang)}">`);
    const outPath = filePathForRoute(distDir, page.path);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, withLang, 'utf8');
    written++;
  }
  if (written !== 1111) {
    throw new Error(`Prerender wrote ${written} files, expected 1111.`);
  }

  // Admin files: /admin/comments/ -> dist/admin/comments/index.html and
  // /admin/comments (slash-less) -> dist/admin/comments.html (same head).
  const adminHtml = prerenderHead(shell, adminProps);
  const adminDir = resolve(distDir, 'admin', 'comments');
  mkdirSync(adminDir, { recursive: true });
  writeFileSync(resolve(adminDir, 'index.html'), adminHtml, 'utf8');
  writeFileSync(resolve(distDir, 'admin', 'comments.html'), adminHtml, 'utf8');
  knownRoutes.add('/admin/comments');
  knownRoutes.add('/admin/comments/');

  // Cross-check: every <loc> in public/sitemap.xml must have a file.
  const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length !== 1111) {
    throw new Error(`Sitemap has ${locs.length} URLs, expected 1111.`);
  }
  for (const loc of locs) {
    const url = new URL(loc);
    const file = filePathForRoute(distDir, url.pathname);
    if (!existsSync(file)) {
      throw new Error(`Sitemap URL has no prerendered file: ${loc}`);
    }
  }

  // Emit functions/known-routes.ts for the Pages Functions middleware.
  const routesSorted = [...knownRoutes].sort();
  const knownRoutesPath = resolve(__dirname, '../functions/known-routes.ts');
  mkdirSync(dirname(knownRoutesPath), { recursive: true });
  writeFileSync(
    knownRoutesPath,
    [
      '// AUTO-GENERATED by scripts/prerender-meta.ts (run at build time).',
      '// Do not edit by hand — it is regenerated on every build.',
      '// All known page routes (1,111 sitemap URLs + /admin/comments x2).',
      '// Used by functions/_middleware.ts to return a real 404 for unknown paths.',
      '',
      'export const KNOWN_ROUTES: ReadonlySet<string> = new Set([',
      ...routesSorted.map((r) => `  '${r}',`),
      ']);',
      '',
    ].join('\n'),
    'utf8'
  );

  console.log(
    `Prerendered ${written} pages (+ admin x2) into dist/; known-routes.ts written (${routesSorted.length} routes).`
  );
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
