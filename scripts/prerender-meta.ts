// scripts/prerender-meta.ts
//
// Build-time prerendering of <head> for all 1,199 routes (Audit Fix #1;
// also fixes #7, the shell canonical that pointed every page at the homepage).
// Blog (Batch 2): +11 blog homes + 77 blog categories = 1,199 (no articles
// yet — the registry is empty; articles add one file per published locale
// when Batch 3 lands, and the sitemap/prerender counts grow with them).
//
// Runs AFTER `vite build` (see the `build` script in package.json).
// Reads dist/index.html (the SPA shell) and writes one prerendered
// dist/<route>/index.html per route (for `/`, it overwrites dist/index.html).
// Each file is the shell with ONLY the SEO head replaced by the route-correct
// head AND the empty `<div id="root">` filled with a static <main> rendered
// from the locale data (Audit Fix H-1, see scripts/prerender-body.ts); the
// JS bundle, CSS and fonts are untouched, so the app
// boots exactly as before for real users — createRoot() replaces the static
// <main> on mount.
//
// The SEO head mirrors src/components/seo/SeoHead.tsx exactly (same tags,
// same order, same values). The per-page props mirror each page's SeoHead
// call (ToolPageLayout, HomePage, CategoryPage, ToolsDirectoryPage,
// About/Contact/Privacy/Terms). NOTE: when a page's SeoHead call changes,
// update the matching builder below — the two must stay in sync (Fix #14
// updates Home/About, Fix #16 adds per-tool og:image).
//
// Route enumeration mirrors scripts/generate-sitemap.ts (STATIC_ROUTES +
// CATEGORIES + TOOLS_REGISTRY + blog home + blog categories + published
// articles, 109 base pages x 11 locales + article URLs = 1,199 in Batch 2).
//
// Also writes functions/known-routes.ts (KNOWN_ROUTES set, used by the
// Cloudflare Pages Functions middleware for 404 handling — Fix #2).
// Blog note: KNOWN_ROUTES also carries the EN-slug article URL under every
// non-EN locale (no prerendered file — the SPA fallback serves it, so the
// ArticlePage cross-locale redirect / not-yet-translated notice can render
// instead of a middleware 404).
//
// Fix #10 (mobile LCP): injects a per-route <link rel="modulepreload">
// for the route's locale chunk on non-EN pages (see localeChunkFile
// below). The chunk then downloads in parallel with the entry bundle
// instead of sequentially after it. If the chunk cannot be resolved,
// the preload is skipped silently — never a broken link, never a
// failed build.
//
// Fix #10b (DE tool-page LCP — live PSI 7.6-8.9s vs local 3.6s): the
// tool's own chunk is ALSO lazy-loaded — ToolPage renders only after
// the locale data resolves, and only then does React.lazy() fire the
// dynamic import of the tool component, so the tool chunk downloads
// sequentially AFTER the locale chunk (one more RTT + queueing on Slow
// 4G, then parse + render before the workspace — the LCP element — can
// paint). Tool pages therefore also preload their tool chunk (see
// toolChunkFile below). The component file name comes from the lazy
// loader's own source (component._payload._result.toString() contains
// the import('.../<ComponentName>') call), so the mapping is derived
// from the real registry data, never hand-maintained. If it cannot be
// resolved, the preload is skipped silently, same as the locale chunk.
// NOTE: route-level lazy loading was tried and REVERTED (measured
// locally: it saved only ~15 KB gzip on the initial bundle but cost
// tool pages ~250 ms of extra Suspense round-trip, so word-counter
// LCP got worse, 2,248 ms -> 2,504 ms). Do not reintroduce lazy()
// page splits without re-measuring LCP on home + a tool page.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG, STATIC_ROUTES, buildCanonicalUrl } from '../src/config/site';
import { DEFAULT_OG_IMAGE, getBlogImageUrl, getOgImageForPage } from '../src/config/ogImages';
import {
  CATEGORY_LOCALE_SLUGS,
  CATEGORY_PATH_SEGMENT,
  STATIC_PATHS,
  SUPPORTED_LOCALES,
  articleHref,
  blogCategoryHref,
  blogHref,
  categoryHref,
  getLocaleInfo,
  localeTag,
  localizeStaticPath,
  ogLocaleTag,
  toolHref,
} from '../src/locales/config';
import { loadFullLocaleData } from './load-full-locale-data';
import { loadLocaleDetails } from '../src/locales/details';
import {
  getArticleAlternatePaths,
  getBlogCategoryAlternatePaths,
  getCategoryAlternatePaths,
  getStaticAlternatePaths,
  getToolAlternatePaths,
  toHreflangEntries,
} from '../src/locales/routes';
import { getPublishedArticleCount } from '../src/locales/slugLookup';
import { getLocalizedCategory, getLocalizedTool } from '../src/locales/tools';
import {
  injectStaticBody,
  renderArticleBody,
  renderBlogCategoryBody,
  renderBlogHomeBody,
  renderCategoryBody,
  renderDirectoryBody,
  renderHomeBody,
  renderStaticBody,
  renderToolBody,
} from './prerender-body';
import { formatString } from '../src/locales/ui';
import type { LocaleCode, NonDefaultLocale } from '../src/locales/config';
import type { FullLocaleData, LocaleData } from '../src/locales/types';
import { CATEGORIES } from '../src/registry/categories';
import { getBlogArticleById, getBlogArticleVersion, getPublishedBlogArticles } from '../src/registry/blogArticles';
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
import { HI_TOOL_OVERRIDES } from '../src/locales/hi/tools';
import { VI_TOOL_OVERRIDES } from '../src/locales/vi/tools';
import type { ToolLocaleOverride } from '../src/locales/types';
import type { BreadcrumbItem, CategoryId, ToolDefinition, ToolDetail } from '../src/types/tool';

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
  hi: HI_TOOL_OVERRIDES,
  vi: VI_TOOL_OVERRIDES,
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
  // L-13: og:locale uses ogLocaleTag (always language_REGION, e.g. de_DE).
  const ogLocale = ogLocaleTag(props.locale);
  const ogLocaleAlternates = SUPPORTED_LOCALES.filter((l) => l.code !== props.locale).map((l) =>
    ogLocaleTag(l.code)
  );
  const ogImageUrl = props.ogImage ?? `${ORIGIN}/og-image.jpg`;
  const lines: string[] = [];
  lines.push(`    <title>${escapeText(props.title)}</title>`);
  lines.push(`    <meta name="description" content="${escapeAttr(props.description)}" />`);
  // L-8: meta keywords tag removed (Google ignores it; it was a stuffed
  // phrase list). The `keywords` prop is accepted but no longer rendered.
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
  // L-11: og:image dimensions + alt (all OG images are 1200×630).
  lines.push(`    <meta property="og:image:width" content="1200" />`);
  lines.push(`    <meta property="og:image:height" content="630" />`);
  lines.push(`    <meta property="og:image:alt" content="${escapeAttr(props.title)}" />`);
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
  /** Fix H-1: static <main> injected inside <div id="root">. */
  body: string;
  /** Fix #10: locale chunk to modulepreload in this page's head (non-EN only). */
  preloadFiles: string[];
  /** Blog article pages: hreflang covers published locales only (2–12 entries), not all 11 + x-default. */
  isArticle?: boolean;
}

function buildOrganizationSchema(homePath: string): Record<string, unknown> {
  // Fix #14: mirrors the Organization schema in HomePage/AboutPage.
  // L-12: founder (Bilal) added — the person behind the site, named in
  // the footer ("Crafted with ❤️ by Bilal inspired by Shaheen").
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: buildCanonicalUrl(homePath, ORIGIN),
    logo: 'https://utilityflow.online/og-image.jpg',
    founder: {
      '@type': 'Person',
      name: 'Bilal',
    },
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
    // L-9: the tools directory has its own OG image (/og/tools.jpg).
    ogImage: getOgImageForPage('static', 'tools', locale),
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
  // L-7: AboutPage / ContactPage schema (in addition to BreadcrumbList;
  // About also carries the Organization schema, as before).
  const pageSchema: Record<string, unknown> | null =
    key === 'about'
      ? {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: cfg.seoTitle(t),
          url: buildCanonicalUrl(canonicalPath, ORIGIN),
          description: cfg.seoDescription(t),
        }
      : key === 'contact'
        ? {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: cfg.seoTitle(t),
            url: buildCanonicalUrl(canonicalPath, ORIGIN),
            description: cfg.seoDescription(t),
          }
        : null;
  const structuredData: Record<string, unknown> | Array<Record<string, unknown>> =
    key === 'about'
      ? [
          breadcrumbSchema,
          buildOrganizationSchema(localizeStaticPath('/', locale)),
          pageSchema as Record<string, unknown>,
        ]
      : pageSchema
        ? [breadcrumbSchema, pageSchema]
        : breadcrumbSchema;
  return {
    title: cfg.seoTitle(t),
    description: cfg.seoDescription(t),
    canonicalPath,
    // Fix #14: About also carries the Organization schema (mirrors AboutPage).
    structuredData,
    alternates: toHreflangEntries(getStaticAlternatePaths(cfg.enPath)),
    locale,
  };
}

function categorySeo(
  categoryId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: FullLocaleData
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
    structuredData: [
      collectionSchema,
      buildBreadcrumbSchema(breadcrumbs),
      // L-15: category FAQPage schema (mirrors the FAQ section on the page).
      ...((category.faqs ?? []).length > 0 ? [buildFaqSchema(category.faqs ?? [])] : []),
    ],
    alternates: toHreflangEntries(getCategoryAlternatePaths(category.id)),
    ogImage: getOgImageForPage('category', category.id, locale),
    locale,
  };
}

/**
 * Blog home — mirrors BlogHomePage.tsx SeoHead call.
 * Alternates come from STATIC_PATHS ('/blog/' is a static route).
 */
function blogHomeSeo(t: LocaleData['uiStrings'], locale: LocaleCode): SeoHeadProps {
  const canonicalPath = blogHref(locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog },
  ];
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.blog.title,
    url: buildCanonicalUrl(canonicalPath, ORIGIN),
    description: t.blog.seoDescription,
  };
  return {
    title: t.blog.seoTitle,
    description: t.blog.seoDescription,
    canonicalPath,
    ogType: 'website',
    structuredData: [blogSchema, buildBreadcrumbSchema(breadcrumbs)],
    alternates: toHreflangEntries(getStaticAlternatePaths('/blog/')),
    locale,
  };
}

/**
 * Blog category — mirrors BlogCategoryPage.tsx SeoHead call.
 * The title is built from the localized category name plus the localized
 * word for "Guides" (t.blog.categoryGuidesWord): "<Category> <Guides> |
 * UtilityFlow Blog". The description is the category's dedicated SEO
 * description (category.seo.description), not the longDescription shown
 * on the page — the long text is 190–338 chars, the SEO descriptions are
 * all 129–160 chars (Phase 8 fix F1).
 */
function blogCategorySeo(
  categoryId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: FullLocaleData
): SeoHeadProps {
  const category = getLocalizedCategory(categoryId as CategoryId, locale, data);
  if (!category) throw new Error(`Category not found: ${categoryId}`);
  const canonicalPath = blogCategoryHref(category.id, locale);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog, href: blogHref(locale) },
    { label: category.name },
  ];
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    url: buildCanonicalUrl(canonicalPath, ORIGIN),
    description: category.longDescription,
  };
  return {
    title: `${category.name} ${t.blog.categoryGuidesWord} | UtilityFlow Blog`,
    description: category.seo.description,
    canonicalPath,
    ogType: 'website',
    structuredData: [collectionSchema, buildBreadcrumbSchema(breadcrumbs)],
    alternates: toHreflangEntries(getBlogCategoryAlternatePaths(category.id)),
    ogImage: getOgImageForPage('category', category.id, locale),
    locale,
  };
}

/**
 * Article — mirrors ArticlePage.tsx SeoHead call (published version).
 * Hreflang covers ONLY the locales where the article is published
 * (getArticleAlternatePaths reads the slug manifest), plus x-default → EN.
 * The og:image + BlogPosting image are the per-article branded card
 * (article-images batch): public/blog-images/<id>-<lang>.png via
 * getBlogImageUrl. Not-yet-translated articles never reach this function
 * (getBlogArticleVersion throws), so no fallback is needed here.
 */
function articleSeo(
  articleId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: FullLocaleData
): SeoHeadProps {
  const article = getBlogArticleById(articleId);
  if (!article) throw new Error(`Article not found: ${articleId}`);
  const version = getBlogArticleVersion(article, locale, data);
  if (!version) throw new Error(`Article ${articleId} not published in ${locale}`);
  const canonicalPath = articleHref(version.slug, locale);
  const category = getLocalizedCategory(article.categoryId as CategoryId, locale, data);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.blog, href: blogHref(locale) },
    ...(category
      ? [{ label: category.name, href: blogCategoryHref(category.id, locale) }]
      : []),
    { label: version.title },
  ];
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: version.title,
    description: version.description,
    inLanguage: localeTag(locale),
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    author: { '@type': 'Organization', name: 'UtilityFlow' },
    mainEntityOfPage: buildCanonicalUrl(canonicalPath, ORIGIN),
    image: getBlogImageUrl(articleId, locale),
  };
  const faqs = version.faqs.map((faq) => ({ question: faq.q, answer: faq.a }));
  return {
    title: version.title,
    description: version.description,
    canonicalPath,
    ogType: 'article',
    ogImage: getBlogImageUrl(articleId, locale),
    structuredData: [
      blogPostingSchema,
      buildBreadcrumbSchema(breadcrumbs),
      ...(faqs.length > 0 ? [buildFaqSchema(faqs)] : []),
    ],
    alternates: toHreflangEntries(getArticleAlternatePaths(article.id)),
    locale,
  };
}

/**
 * H-3 (page weight): merge a light tool record with its per-batch detail
 * record for prerendering. A missing detail record is a hard error — the
 * prerendered page must carry the full guide, exactly as before the split.
 */
function withDetail(
  light: ToolDefinition,
  details: Record<string, ToolDetail>,
  locale: LocaleCode
): ToolDefinition {
  const detail = details[light.id];
  if (!detail) throw new Error(`Missing detail for tool ${light.id} (${locale})`);
  return { ...light, ...detail };
}

function toolSeo(
  toolId: string,
  t: LocaleData['uiStrings'],
  locale: LocaleCode,
  data: FullLocaleData,
  details: Record<string, ToolDetail>
): SeoHeadProps {
  const base = TOOLS_REGISTRY.find((tool) => tool.id === toolId);
  if (!base) throw new Error(`Tool not found: ${toolId}`);
  const light = getLocalizedTool(base, locale, data);
  // H-3 (page weight): the guide fields live in the per-batch detail
  // modules; prerender merges them back so the static HTML + HowTo/FAQ
  // JSON-LD are identical to before the split. A missing detail record is
  // a hard error — never silently ship a tool page without its guide.
  const detail = details[toolId];
  if (!detail) throw new Error(`Missing detail for tool ${toolId} (${locale})`);
  const tool: ToolDefinition = { ...light, ...detail };
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
    ...((tool.instructions ?? []).length > 0
      ? [buildHowToSchema(howToTitle, tool.seo.description, tool.instructions ?? [])]
      : []),
    ...((tool.faqs ?? []).length > 0 ? [buildFaqSchema(tool.faqs ?? [])] : []),
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
    ogImage: getOgImageForPage('tool', tool.id, locale),
    locale,
  };
}

// ---------------------------------------------------------------------------
// Shell surgery: strip the shell's SEO tags, then replace <title> with the
// route-correct SEO block. Everything else in <head> (charset, viewport,
// favicon, theme script, fonts) and the whole <body> stay
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

function prerenderHead(shell: string, seo: SeoHeadProps, preloadFiles: string[] = []): string {
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
  // Fix #10: preload the route's locale chunk so it downloads in parallel
  // with the entry bundle (appended at the end of <head>, after the SEO
  // block — the preload scanner still finds it before the body script).
  if (preloadFiles.length > 0) {
    head +=
      '\n' +
      preloadFiles
        .map((file) => `    <link rel="modulepreload" href="/${escapeAttr(file)}" />`)
        .join('\n');
  }
  return shell.replace(/<head>[\s\S]*?<\/head>/, () => `<head>${head}\n  </head>`);
}

// ---------------------------------------------------------------------------
// Fix #10 — locale-chunk modulepreload for non-EN routes.
//
// A non-EN page cannot render until its locale chunk arrives
// (LocaleProvider waits for loadLocaleData), and that chunk is large
// (768 KB-1.4 MB, ~220-290 KB gzip). Loaded on demand it downloads
// sequentially AFTER the entry bundle; preloaded in <head> it downloads
// in parallel with the entry instead. The chunk file is found by scanning
// dist/assets for `<locale>-<hash>.js` (exactly one match required -
// otherwise the preload is skipped, never a broken link).
// The hash is Vite's default 8 characters, so the pattern requires
// exactly 8 — otherwise the per-article chunks (<locale>-<id>-<hash>.js,
// audit #6) also match, since their <id> contains hyphens and the
// character class includes '-'. A per-article suffix is always longer
// than 8 chars (<id> + '-' + 8-char hash), so {8} excludes them.
// ---------------------------------------------------------------------------

function localeChunkFile(distDir: string, locale: LocaleCode, marker?: string): string | null {
  const assetsDir = resolve(distDir, 'assets');
  if (!existsSync(assetsDir)) return null;
  const pattern = new RegExp(`^${locale}-[A-Za-z0-9_-]{8}\.js$`);
  const matches = readdirSync(assetsDir).filter((name) => pattern.test(name));
  if (matches.length === 0) return null;
  if (matches.length === 1) return `assets/${matches[0]}`;
  // Ambiguous: the `es-` prefix also matches the pdf-lib chunk
  // (es-BJUdrXYB.js, named after pdf-lib's ES-module build). Disambiguate
  // by content — the real locale chunk contains the locale's own UI
  // strings; the library chunk does not. Exactly one match required.
  if (!marker) return null;
  const withMarker = matches.filter((name) => {
    try {
      return readFileSync(resolve(assetsDir, name), 'utf8').includes(marker);
    } catch {
      return false;
    }
  });
  if (withMarker.length !== 1) return null;
  return `assets/${withMarker[0]}`;
}

// ---------------------------------------------------------------------------
// Fix #10b — tool-chunk modulepreload for tool pages.
//
// The tool component is React.lazy(() => import('.../<Name>Tool')) in the
// registry, so Vite emits one chunk per tool named `<Name>Tool-<hash>.js`.
// The component file name is read from the lazy loader's own source text
// (React.lazy keeps the loader as _payload._result; its toString() still
// contains the import('.../<Name>Tool') call under tsx), so the mapping
// is derived from the real registry — no hand-maintained list, and a
// rename in the registry is picked up automatically. The chunk is found
// by scanning dist/assets for exactly one `<Name>Tool-<hash>.js` match;
// anything else (no match, ambiguous) skips the preload silently.
// ---------------------------------------------------------------------------

function toolComponentBasename(tool: ToolDefinition): string | null {
  const lazyComp = tool.component as unknown as {
    _payload?: { _result?: unknown };
  };
  const loader = lazyComp?._payload?._result;
  if (typeof loader !== 'function') return null;
  const src = Function.prototype.toString.call(loader);
  const m = src.match(/import\(["']([^"']+)["']\)/);
  if (!m) return null;
  const parts = m[1].split('/');
  const base = parts[parts.length - 1];
  return base ? base : null;
}

function toolChunkFile(distDir: string, tool: ToolDefinition): string | null {
  const base = toolComponentBasename(tool);
  if (!base) return null;
  const assetsDir = resolve(distDir, 'assets');
  if (!existsSync(assetsDir)) return null;
  const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escaped}-[A-Za-z0-9_-]+\\.js$`);
  const matches = readdirSync(assetsDir).filter((name) => pattern.test(name));
  if (matches.length !== 1) return null;
  return `assets/${matches[0]}`;
}

// ---------------------------------------------------------------------------
// Perf fix (CLS, Wed 2026-11-18) — per-article chunk modulepreload for EN
// article pages.
//
// EN article bodies load on demand from their own per-article chunk
// (src/registry/articles/<id>.ts, ~5 KB gz, registry split). Preloading
// that chunk in the prerendered <head> starts the download during
// initial load, so the body is usually already in the module cache when
// ArticlePage renders — shrinking the loading-placeholder window and
// the layout shift when the body arrives. The chunk file is found by
// scanning dist/assets for exactly one `<article-id>-<hash>.js` match
// (Vite hashes are alphanumeric plus `_`/`-`, e.g. `CU_KS4ZX` — the
// hash part is therefore [A-Za-z0-9_-]+. That class could in theory
// also match a longer id's file against a shorter id's pattern, but no
// article id is a prefix of another (verified: 0 prefix collisions
// across all 264 ids), so exactly-one-match still holds). Zero or
// ambiguous matches skip the preload silently, never a broken
// link, never a failed build. Non-EN articles resolve synchronously
// from locale data and never load the chunk, so they get no preload.
// ---------------------------------------------------------------------------

function articleChunkFile(distDir: string, articleId: string): string | null {
  const assetsDir = resolve(distDir, 'assets');
  if (!existsSync(assetsDir)) return null;
  const escaped = articleId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${escaped}-[A-Za-z0-9_-]+\\.js$`);
  const matches = readdirSync(assetsDir).filter((name) => pattern.test(name));
  if (matches.length !== 1) return null;
  return `assets/${matches[0]}`;
}

// Audit #6: the localized per-article chunk for one (locale, article).
// Localized chunks are named <locale>-<id>-<hash>.js (the locale prefix
// keeps them distinct from the EN <id>-<hash>.js chunks, so the EN
// lookup above still matches exactly one file). Exactly one match
// required; otherwise the preload is skipped silently.
function localizedArticleChunkFile(
  distDir: string,
  locale: LocaleCode,
  articleId: string
): string | null {
  const assetsDir = resolve(distDir, 'assets');
  if (!existsSync(assetsDir)) return null;
  const escaped = articleId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`^${locale}-${escaped}-[A-Za-z0-9_-]+\\.js$`);
  const matches = readdirSync(assetsDir).filter((name) => pattern.test(name));
  if (matches.length !== 1) return null;
  return `assets/${matches[0]}`;
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

  // Fix #10: per-locale modulepreload (see localeChunkFile above).
  // EN routes need nothing extra (English data is built into the entry);
  // every non-EN route preloads its locale chunk.
  const localePreloadCache = new Map<LocaleCode, string[]>();
  function preloadFor(locale: LocaleCode, marker?: string): string[] {
    const cached = localePreloadCache.get(locale);
    if (cached) return cached;
    const files: string[] = [];
    if (locale !== 'en') {
      const chunk = localeChunkFile(distDir, locale, marker);
      if (chunk) files.push(chunk);
    }
    localePreloadCache.set(locale, files);
    return files;
  }

  // Fix #10b: per-tool chunk preload (see toolChunkFile above). Cached per
  // tool id; resolvedToolIds tracks coverage for the final log line.
  const toolPreloadCache = new Map<string, string[]>();
  const resolvedToolIds = new Set<string>();
  function toolPreloadFor(tool: ToolDefinition): string[] {
    const cached = toolPreloadCache.get(tool.id);
    if (cached) return cached;
    const files: string[] = [];
    const chunk = toolChunkFile(distDir, tool);
    if (chunk) {
      files.push(chunk);
      resolvedToolIds.add(tool.id);
    }
    toolPreloadCache.set(tool.id, files);
    return files;
  }

  // Perf fix (CLS): per-article chunk preload for EN articles only (see
  // articleChunkFile above). Cached per article id; resolvedArticleIds
  // tracks coverage for the final log line.
  const articlePreloadCache = new Map<string, string[]>();
  const resolvedArticleIds = new Set<string>();
  function articlePreloadFor(articleId: string): string[] {
    const cached = articlePreloadCache.get(articleId);
    if (cached) return cached;
    const files: string[] = [];
    const chunk = articleChunkFile(distDir, articleId);
    if (chunk) {
      files.push(chunk);
      resolvedArticleIds.add(articleId);
    }
    articlePreloadCache.set(articleId, files);
    return files;
  }

  // Audit #6: per-article chunk preload for non-EN articles (their
  // localized chunk, <locale>-<id>-<hash>.js). Cached per (locale,
  // article); resolvedLocalizedArticles tracks coverage for the log line.
  const localizedArticlePreloadCache = new Map<string, string[]>();
  const resolvedLocalizedArticles = new Set<string>();
  function localizedArticlePreloadFor(locale: LocaleCode, articleId: string): string[] {
    const key = `${locale}:${articleId}`;
    const cached = localizedArticlePreloadCache.get(key);
    if (cached) return cached;
    const files: string[] = [];
    const chunk = localizedArticleChunkFile(distDir, locale, articleId);
    if (chunk) {
      files.push(chunk);
      resolvedLocalizedArticles.add(key);
    }
    localizedArticlePreloadCache.set(key, files);
    return files;
  }

  for (const localeInfo of SUPPORTED_LOCALES) {
    const locale = localeInfo.code;
    const data: FullLocaleData = await loadFullLocaleData(locale);
    // H-3: bulk-load this locale's per-batch detail modules once, so every
    // tool page prerenders with its full guide (HowTo/FAQ JSON-LD + body).
    const details = await loadLocaleDetails(locale);
    const t = data.uiStrings;

    // Static routes (home, directory, about, contact, privacy, terms).
    for (const route of STATIC_ROUTES) {
      const localized =
        route.path === '/'
          ? localizeStaticPath('/', locale)
          : STATIC_PATHS[route.path]?.[locale] ?? route.path;
      let props: SeoHeadProps;
      let body: string;
      let preloadFiles: string[] = [];
      if (route.path === '/') {
        props = homeSeo(t, locale);
        body = renderHomeBody(t, locale, data);
        // Home is eager, but non-EN home still needs its locale chunk.
        preloadFiles = preloadFor(locale, t.nav.allTools);
      } else if (route.path === '/tools/') {
        props = directorySeo(t, locale);
        body = renderDirectoryBody(t, locale, data);
        preloadFiles = preloadFor(locale, t.nav.allTools);
      } else if (route.path === '/about/') {
        props = staticPageSeo('about', t, locale);
        body = renderStaticBody('about', t, locale, data);
        preloadFiles = preloadFor(locale, t.nav.allTools);
      } else if (route.path === '/contact/') {
        props = staticPageSeo('contact', t, locale);
        body = renderStaticBody('contact', t, locale, data);
        preloadFiles = preloadFor(locale, t.nav.allTools);
      } else if (route.path === '/privacy-policy/') {
        props = staticPageSeo('privacy', t, locale);
        body = renderStaticBody('privacy', t, locale, data);
        preloadFiles = preloadFor(locale, t.nav.allTools);
      } else {
        props = staticPageSeo('terms', t, locale);
        body = renderStaticBody('terms', t, locale, data);
        preloadFiles = preloadFor(locale, t.nav.allTools);
      }
      pages.push({ path: localized, locale, props, body, preloadFiles });
      knownRoutes.add(localized);
    }

    // Category hubs.
    for (const category of CATEGORIES) {
      const localized =
        locale === 'en'
          ? `/category/${category.slug}/`
          : `${localeInfo.pathPrefix}/${CATEGORY_PATH_SEGMENT[locale]}/${CATEGORY_LOCALE_SLUGS[locale][category.id]}/`;
      const localizedCategory = getLocalizedCategory(category.id, locale, data);
      if (!localizedCategory) throw new Error(`Category not found: ${category.id}`);
      pages.push({
        path: localized,
        locale,
        props: categorySeo(category.id, t, locale, data),
        body: renderCategoryBody(localizedCategory, t, locale, data),
        preloadFiles: preloadFor(locale, t.nav.allTools),
      });
      knownRoutes.add(localized);
    }

    // Tool pages.
    for (const tool of TOOLS_REGISTRY) {
      const localized =
        locale === 'en'
          ? `/${tool.slug}/`
          : `${localeInfo.pathPrefix}/${TOOL_OVERRIDES_BY_LOCALE[locale]?.[tool.id]?.slug ?? tool.slug}/`;
      pages.push({
        path: localized,
        locale,
        props: toolSeo(tool.id, t, locale, data, details),
        body: renderToolBody(withDetail(getLocalizedTool(tool, locale, data), details, locale), t, locale, data),
        // Fix #10b: tool chunk preload rides along with the locale preload
        // (EN tool pages get the tool chunk only — they need no locale).
        preloadFiles: [...preloadFor(locale, t.nav.allTools), ...toolPreloadFor(tool)],
      });
      knownRoutes.add(localized);
    }

    // Blog home (Batch 2: renders the empty state — no articles yet).
    pages.push({
      path: blogHref(locale),
      locale,
      props: blogHomeSeo(t, locale),
      body: renderBlogHomeBody(t, locale, data),
      preloadFiles: preloadFor(locale, t.nav.allTools),
    });
    knownRoutes.add(blogHref(locale));

    // Blog categories (7 categories x 11 locales).
    for (const category of CATEGORIES) {
      const localizedCategory = getLocalizedCategory(category.id, locale, data);
      if (!localizedCategory) throw new Error(`Category not found: ${category.id}`);
      pages.push({
        path: blogCategoryHref(category.id, locale),
        locale,
        props: blogCategorySeo(category.id, t, locale, data),
        body: renderBlogCategoryBody(localizedCategory, t, locale, data),
        preloadFiles: preloadFor(locale, t.nav.allTools),
      });
      knownRoutes.add(blogCategoryHref(category.id, locale));
    }

    // Blog articles — one file per locale where the article is published.
    // (Batch 2: the registry is empty, so this loop adds nothing yet.)
    for (const article of getPublishedBlogArticles()) {
      const version = getBlogArticleVersion(article, locale, data);
      if (!version) continue;
      pages.push({
        path: articleHref(version.slug, locale),
        locale,
        props: articleSeo(article.id, t, locale, data),
        body: renderArticleBody(article, version, t, locale, data),
        // Perf fix (CLS): articles preload their per-article chunk —
        // EN (<id>-<hash>.js) and non-EN (<locale>-<id>-<hash>.js,
        // audit #6: non-EN no longer resolves from the locale chunk).
        preloadFiles:
          locale === 'en'
            ? [...preloadFor(locale, t.nav.allTools), ...articlePreloadFor(article.id)]
            : [...preloadFor(locale, t.nav.allTools), ...localizedArticlePreloadFor(locale, article.id)],
        isArticle: true,
      });
      knownRoutes.add(articleHref(version.slug, locale));
    }
  }

  // Blog article EN-slug URLs under every non-EN locale: no prerendered
  // file (the SPA fallback serves them), but they must reach the SPA so
  // the ArticlePage cross-locale redirect (published locale) / notice
  // (unpublished locale) can render instead of a middleware 404.
  for (const article of getPublishedBlogArticles()) {
    for (const info of SUPPORTED_LOCALES) {
      if (info.code === 'en') continue;
      knownRoutes.add(`${info.pathPrefix}/blog/${article.en.slug}/`);
    }
  }

  // Assertions before writing anything.
  // Base pages per locale: static routes + tool categories + tools + blog
  // home (1) + blog categories (7). Articles add one file per locale
  // where the article is published — counted from the slug manifest
  // (EN: every published article; non-EN: the manifest articles map),
  // which cross-checks the registry + overrides the loop reads.
  const basePages =
    STATIC_ROUTES.length + CATEGORIES.length + TOOLS_REGISTRY.length + 1 + CATEGORIES.length;
  const publishedArticles = getPublishedBlogArticles();
  const articleUrls =
    publishedArticles.length +
    SUPPORTED_LOCALES.filter((l) => l.code !== 'en').reduce(
      (sum, l) =>
        sum + getPublishedArticleCount(l.code as NonDefaultLocale),
      0
    );
  const expectedTotal = basePages * SUPPORTED_LOCALES.length + articleUrls;
  if (pages.length !== expectedTotal) {
    throw new Error(
      `Prerender incomplete: ${pages.length} pages, expected ${expectedTotal} (${basePages} base pages x ${SUPPORTED_LOCALES.length} locales + ${articleUrls} article URLs).`
    );
  }
  const seen = new Set<string>();
  for (const page of pages) {
    if (seen.has(page.path)) throw new Error(`Duplicate route: ${page.path}`);
    seen.add(page.path);
    if (!page.props.title || !page.props.description) {
      throw new Error(`Missing title/description for ${page.path}`);
    }
    // Fix H-1: every page must carry a static body with exactly one <h1>.
    if (!page.body.includes('data-prerendered-body="true"') || !page.body.includes('<h1')) {
      throw new Error(`Missing static body/H1 for ${page.path}`);
    }
    if ((page.body.match(/<h1/g) ?? []).length !== 1) {
      throw new Error(`Static body for ${page.path} must contain exactly one <h1>`);
    }
    if (page.props.alternates) {
      const altCount = page.props.alternates.length;
      if (page.isArticle) {
        // Articles: hreflang covers published locales only (2–12),
        // always including en-US + x-default.
        if (altCount < 2 || altCount > SUPPORTED_LOCALES.length + 1) {
          throw new Error(
            `${page.path} has ${altCount} hreflang alternates, expected 2–${SUPPORTED_LOCALES.length + 1} (published locales only).`
          );
        }
        const langs = new Set(page.props.alternates.map((a) => a.hreflang));
        if (!langs.has('en-US') || !langs.has('x-default')) {
          throw new Error(`${page.path} hreflang must include en-US and x-default.`);
        }
      } else if (altCount !== SUPPORTED_LOCALES.length + 1) {
        throw new Error(
          `${page.path} has ${altCount} hreflang alternates, expected ${SUPPORTED_LOCALES.length + 1}.`
        );
      }
    }
  }

  // Write one file per route.
  let written = 0;
  let bodyBytes = 0;
  for (const page of pages) {
    const html = injectStaticBody(prerenderHead(shell, page.props, page.preloadFiles), page.body);
    bodyBytes += page.body.length;
    const withLang = html.replace('<html lang="en">', () => `<html lang="${escapeAttr(getLocaleInfo(page.locale).htmlLang)}">`);
    const outPath = filePathForRoute(distDir, page.path);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, withLang, 'utf8');
    written++;
  }
  if (written !== expectedTotal) {
    throw new Error(`Prerender wrote ${written} files, expected ${expectedTotal}.`);
  }

  // Cross-check: every <loc> in public/sitemap.xml must have a file.
  const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length !== expectedTotal) {
    throw new Error(`Sitemap has ${locs.length} URLs, expected ${expectedTotal}.`);
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
      '// All known page routes (1,199 sitemap URLs +',
      '// article EN-slug fallback URLs under non-EN locales, no files).',
      '// Used by functions/_middleware.ts to return a real 404 for unknown paths.',
      '',
      'export const KNOWN_ROUTES: ReadonlySet<string> = new Set([',
      ...routesSorted.map((r) => `  '${r}',`),
      ']);',
      '',
    ].join('\n'),
    'utf8'
  );

  // Fix #10b coverage: every tool page should carry its tool-chunk
  // preload (88 tools x 11 locales = 968 pages). Warn — do not fail the
  // build — if any tool's chunk could not be resolved.
  const missingTools = TOOLS_REGISTRY.filter((tool) => !resolvedToolIds.has(tool.id)).map(
    (tool) => tool.id
  );
  if (missingTools.length > 0) {
    console.warn(
      `WARNING: tool-chunk preload missing for ${missingTools.length} tool(s): ${missingTools.join(', ')}`
    );
  }
  console.log(
    `Prerendered ${written} pages into dist/; known-routes.ts written (${routesSorted.length} routes).`
  );
  console.log(
    `Static bodies (Fix H-1): ${(bodyBytes / 1024 / 1024).toFixed(1)} MB total across ${written} pages.`
  );
  console.log(
    `Preloads: locale chunks for ${[...localePreloadCache.values()].filter((f) => f.length > 0).length}/${SUPPORTED_LOCALES.length - 1} non-EN locales; tool chunks for ${resolvedToolIds.size}/${TOOLS_REGISTRY.length} tools; article chunks for ${resolvedArticleIds.size}/${publishedArticles.length} EN articles; localized article chunks for ${resolvedLocalizedArticles.size}/${publishedArticles.length * (SUPPORTED_LOCALES.length - 1)} (locale, article) pairs.`
  );
  if (resolvedArticleIds.size !== publishedArticles.length) {
    const missingArticles = publishedArticles
      .filter((article) => !resolvedArticleIds.has(article.id))
      .map((article) => article.id);
    console.warn(
      `WARNING: article-chunk preload missing for ${missingArticles.length} article(s): ${missingArticles.join(', ')}`
    );
  }
  const expectedLocalized = publishedArticles.length * (SUPPORTED_LOCALES.length - 1);
  if (resolvedLocalizedArticles.size !== expectedLocalized) {
    const missingLocalized = publishedArticles.flatMap((article) =>
      SUPPORTED_LOCALES.filter((l) => l.code !== 'en')
        .filter((l) => !resolvedLocalizedArticles.has(`${l.code}:${article.id}`))
        .map((l) => `${l.code}:${article.id}`)
    );
    console.warn(
      `WARNING: localized article-chunk preload missing for ${missingLocalized.length} (locale, article) pair(s): ${missingLocalized.slice(0, 10).join(', ')}${missingLocalized.length > 10 ? ', …' : ''}`
    );
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
