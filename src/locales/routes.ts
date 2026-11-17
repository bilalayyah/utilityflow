import type { CategoryId } from '../types/tool';
import { buildCanonicalUrl } from '../config/site';
import type { LocaleCode, NonDefaultLocale } from './config';
import {
  CATEGORY_PATH_SEGMENT,
  DEFAULT_LOCALE,
  STATIC_PATHS,
  SUPPORTED_LOCALES,
  getLocaleInfo,
  isLocaleCode,
  localeTag,
} from './config';
import { getCategoryById, getCategoryBySlug } from '../registry/categories';
import {
  getBlogArticleById,
  getBlogArticleBySlug,
} from '../registry/blogArticles';
import { getToolBySlug } from '../registry/toolsRegistry';
import { getToolById } from './tools';
import { SLUG_MANIFEST } from './slugManifest';
import { getActiveLocaleData } from './store';
import type { LocaleData } from './types';

/**
 * Cross-locale navigation: given the current pathname, build the equivalent
 * path in the target locale (same tool, category, or static page).
 * Unknown pages — and tools with no translation in the target locale —
 * fall back to the target locale's homepage (never link unfinished pages).
 *
 * Alternate-path sets are Partial<Record<LocaleCode, string>>: 'en' is
 * always present; other locales appear only when translated.
 *
 * This module NEVER needs loaded locale data for its alternate-path
 * getters: getToolAlternatePaths / getCategoryAlternatePaths read slugs
 * from the static SLUG_MANIFEST (slugs only, bundled with the app).
 * getLocalizedEquivalentPath resolves the SOURCE tool/category through the
 * manifest too (invert slug -> id), and resolves the TARGET slug from the
 * optional `targetData` when provided, else the store, else the manifest
 * (the manifest is the last resort so a switch always lands on the right
 * localized URL even before the target locale's data has been stored).
 */

export type LocaleAlternatePaths = Partial<Record<LocaleCode, string>>;

function normalize(pathname: string): string {
  const cleaned = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

function homePath(locale: LocaleCode): string {
  return locale === DEFAULT_LOCALE ? '/' : `${getLocaleInfo(locale).pathPrefix}/`;
}

/** Invert the manifest: localized tool slug -> English tool id (EN slugs resolve via the registry). */
function resolveToolIdBySlug(slug: string, locale: LocaleCode): string | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== DEFAULT_LOCALE) {
    const entry = Object.entries(SLUG_MANIFEST[locale].tools).find(
      ([, localizedSlug]) => localizedSlug.toLowerCase() === normalized
    );
    if (entry) return entry[0];
  }
  return getToolBySlug(normalized)?.id;
}

/** Invert the manifest: localized article slug -> article id (EN slugs resolve via the registry). */
function resolveBlogArticleIdBySlug(slug: string, locale: LocaleCode): string | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== DEFAULT_LOCALE) {
    const entry = Object.entries(SLUG_MANIFEST[locale].articles ?? {}).find(
      ([, localizedSlug]) => localizedSlug.toLowerCase() === normalized
    );
    if (entry) return entry[0];
  }
  return getBlogArticleBySlug(normalized, DEFAULT_LOCALE)?.id;
}

/** Localized article slug for the target locale: targetData -> store -> manifest. Undefined when not published there. */
function targetBlogArticleSlug(
  articleId: string,
  targetLocale: LocaleCode,
  targetData?: LocaleData
): string | undefined {
  if (targetLocale === DEFAULT_LOCALE) {
    return getBlogArticleById(articleId)?.en.slug;
  }
  if (targetData && targetData.code === targetLocale) {
    return targetData.articleOverrides[articleId]?.slug;
  }
  const storeData = getActiveLocaleData();
  if (storeData.code === targetLocale) {
    return storeData.articleOverrides[articleId]?.slug;
  }
  return SLUG_MANIFEST[targetLocale as NonDefaultLocale].articles?.[articleId];
}

/** Invert the manifest: localized category slug -> category id (EN slugs resolve via the registry). */
function resolveCategoryIdBySlug(slug: string, locale: LocaleCode): string | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== DEFAULT_LOCALE) {
    const entry = Object.entries(SLUG_MANIFEST[locale].categories).find(
      ([, localizedSlug]) => localizedSlug.toLowerCase() === normalized
    );
    if (entry) return entry[0];
  }
  return getCategoryBySlug(normalized)?.id;
}

/** Localized tool slug for the target locale: targetData -> store -> manifest. */
function targetToolSlug(
  toolId: string,
  targetLocale: LocaleCode,
  targetData?: LocaleData
): string | undefined {
  if (targetLocale === DEFAULT_LOCALE) return getToolById(toolId)?.slug;
  if (targetData && targetData.code === targetLocale) {
    return targetData.toolOverrides[toolId]?.slug;
  }
  const storeData = getActiveLocaleData();
  if (storeData.code === targetLocale) {
    return storeData.toolOverrides[toolId]?.slug;
  }
  return SLUG_MANIFEST[targetLocale as NonDefaultLocale].tools[toolId];
}

/** Localized category slug for the target locale: targetData -> store -> manifest (falls back to the English slug, as before). */
function targetCategorySlug(
  categoryId: string,
  targetLocale: LocaleCode,
  targetData?: LocaleData
): string {
  const base = getCategoryById(categoryId as CategoryId);
  if (targetLocale === DEFAULT_LOCALE) return base?.slug ?? categoryId;
  if (targetData && targetData.code === targetLocale) {
    return targetData.categoryOverrides[categoryId]?.slug ?? base?.slug ?? categoryId;
  }
  const storeData = getActiveLocaleData();
  if (storeData.code === targetLocale) {
    return storeData.categoryOverrides[categoryId]?.slug ?? base?.slug ?? categoryId;
  }
  return SLUG_MANIFEST[targetLocale as NonDefaultLocale].categories[categoryId] ?? base?.slug ?? categoryId;
}

export function getLocalizedEquivalentPath(
  pathname: string,
  targetLocale: LocaleCode,
  targetData?: LocaleData
): string {
  // Preserve query string and hash across the switch (e.g. tool state in
  // ?params must survive a language change).
  const [beforeHash, hash] = pathname.split('#');
  const [pathPart, search] = beforeHash.split('?');
  const path = normalize(pathPart || '/');
  const withHash = (base: string) =>
    `${base}${search ? `?${search}` : ''}${hash ? `#${hash}` : ''}`;
  const home = homePath(targetLocale);

  // Homepage (any locale's home in)
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return withHash(home);
  if (
    segments.length === 1 &&
    isLocaleCode(segments[0]) &&
    segments[0] !== DEFAULT_LOCALE
  ) {
    return withHash(home);
  }

  // Static pages (English or any localized path in)
  for (const [enPath, localized] of Object.entries(STATIC_PATHS)) {
    const localizedPaths = Object.values(localized).filter(Boolean) as string[];
    if (path === enPath || localizedPaths.includes(path)) {
      const target = targetLocale === DEFAULT_LOCALE ? enPath : localized[targetLocale];
      return withHash(target ?? home);
    }
  }

  // Category hubs: /category/<slug>/ or /<code>/<categoria|categorie>/<slug>/
  const categorySegment = segments[0];
  const isCategoryPath =
    categorySegment === 'category' ||
    (segments.length === 3 &&
      isLocaleCode(categorySegment) &&
      categorySegment !== DEFAULT_LOCALE &&
      Object.values(CATEGORY_PATH_SEGMENT).includes(segments[1]));
  if (isCategoryPath) {
    const slug = categorySegment === 'category' ? segments[1] : segments[2];
    const sourceLocale =
      categorySegment === 'category'
        ? DEFAULT_LOCALE
        : (categorySegment as LocaleCode);
    const categoryId = resolveCategoryIdBySlug(slug, sourceLocale);
    if (!categoryId) return withHash(home);
    // Always resolve through the English base record: a localized category
    // slug must never leak into another locale's URL.
    const base = getCategoryById(categoryId as CategoryId);
    if (!base) return withHash(home);
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/category/${base.slug}/`);
    }
    return withHash(
      `${getLocaleInfo(targetLocale).pathPrefix}/${CATEGORY_PATH_SEGMENT[targetLocale]}/${targetCategorySlug(base.id, targetLocale, targetData)}/`
    );
  }

  // Blog category hubs: /blog/category/<slug>/ or /<code>/blog/category/<slug>/
  const isBlogCategoryPath =
    (segments[0] === 'blog' && segments[1] === 'category' && segments.length === 3) ||
    (segments.length === 4 &&
      isLocaleCode(segments[0]) &&
      segments[0] !== DEFAULT_LOCALE &&
      segments[1] === 'blog' &&
      segments[2] === 'category');
  if (isBlogCategoryPath) {
    const slug = segments[0] === 'blog' ? segments[2] : segments[3];
    const sourceLocale =
      segments[0] === 'blog' ? DEFAULT_LOCALE : (segments[0] as LocaleCode);
    const categoryId = resolveCategoryIdBySlug(slug, sourceLocale);
    if (!categoryId) return withHash(home);
    const base = getCategoryById(categoryId as CategoryId);
    if (!base) return withHash(home);
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/blog/category/${base.slug}/`);
    }
    const localizedSlug = targetCategorySlug(base.id, targetLocale, targetData);
    return withHash(
      `${getLocaleInfo(targetLocale).pathPrefix}/blog/category/${localizedSlug}/`
    );
  }

  // Blog articles: /blog/<slug>/ or /<code>/blog/<slug>/.
  // If the article is not published in the target locale, fall back to
  // that locale's blog home (never link an unfinished translation).
  const isBlogArticlePath =
    (segments[0] === 'blog' && segments.length === 2) ||
    (segments.length === 3 &&
      isLocaleCode(segments[0]) &&
      segments[0] !== DEFAULT_LOCALE &&
      segments[1] === 'blog');
  if (isBlogArticlePath) {
    const slug = segments[0] === 'blog' ? segments[1] : segments[2];
    const sourceLocale =
      segments[0] === 'blog' ? DEFAULT_LOCALE : (segments[0] as LocaleCode);
    const articleId = resolveBlogArticleIdBySlug(slug, sourceLocale);
    if (!articleId) return withHash(home);
    const targetSlug = targetBlogArticleSlug(articleId, targetLocale, targetData);
    if (!targetSlug) {
      return withHash(
        targetLocale === DEFAULT_LOCALE
          ? '/blog/'
          : `${getLocaleInfo(targetLocale).pathPrefix}/blog/`
      );
    }
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/blog/${targetSlug}/`);
    }
    return withHash(`${getLocaleInfo(targetLocale).pathPrefix}/blog/${targetSlug}/`);
  }

  // Tool pages: /<slug>/ or /<code>/<slug>/ (single segment after the prefix)
  const toolSlug =
    segments.length === 1
      ? segments[0]
      : segments.length === 2 &&
          isLocaleCode(segments[0]) &&
          segments[0] !== DEFAULT_LOCALE
        ? segments[1]
        : undefined;
  if (toolSlug !== undefined) {
    const sourceLocale =
      segments.length === 2 ? (segments[0] as LocaleCode) : DEFAULT_LOCALE;
    const toolId = resolveToolIdBySlug(toolSlug, sourceLocale);
    if (!toolId) return withHash(home);
    const base = getToolById(toolId);
    if (!base) return withHash(home);
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/${base.slug}/`);
    }
    const localizedSlug = targetToolSlug(base.id, targetLocale, targetData);
    if (!localizedSlug) return withHash(home);
    return withHash(`${getLocaleInfo(targetLocale).pathPrefix}/${localizedSlug}/`);
  }

  return withHash(home);
}

/** Canonical paths for a tool in each locale (non-EN only when translated). Static — reads SLUG_MANIFEST, needs no loaded locale data. */
export function getToolAlternatePaths(toolId: string): LocaleAlternatePaths | undefined {
  const base = getToolById(toolId);
  if (!base) return undefined;
  const result: LocaleAlternatePaths = { en: `/${base.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    const slug = SLUG_MANIFEST[locale.code].tools[toolId];
    if (slug) {
      result[locale.code] = `${locale.pathPrefix}/${slug}/`;
    }
  }
  return result;
}

/** Canonical paths for a category in each locale (non-EN only when translated). Static — reads SLUG_MANIFEST, needs no loaded locale data. */
export function getCategoryAlternatePaths(
  categoryId: string
): LocaleAlternatePaths | undefined {
  const base = getCategoryById(categoryId as CategoryId);
  if (!base) return undefined;
  const result: LocaleAlternatePaths = { en: `/category/${base.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    const slug = SLUG_MANIFEST[locale.code].categories[categoryId];
    if (slug && slug !== base.slug) {
      result[locale.code] =
        `${locale.pathPrefix}/${CATEGORY_PATH_SEGMENT[locale.code]}/${slug}/`;
    }
  }
  return result;
}

/** Canonical paths for a blog article in each locale where it is published. Static — reads SLUG_MANIFEST, needs no loaded locale data. */
export function getArticleAlternatePaths(
  articleId: string
): LocaleAlternatePaths | undefined {
  const base = getBlogArticleById(articleId);
  if (!base || base.status !== 'published') return undefined;
  const result: LocaleAlternatePaths = { en: `/blog/${base.en.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    const slug = SLUG_MANIFEST[locale.code].articles?.[articleId];
    if (slug) {
      result[locale.code] = `${locale.pathPrefix}/blog/${slug}/`;
    }
  }
  return result;
}

/** Canonical paths for a blog category in each locale. Static — reads SLUG_MANIFEST, needs no loaded locale data. */
export function getBlogCategoryAlternatePaths(
  categoryId: string
): LocaleAlternatePaths | undefined {
  const base = getCategoryById(categoryId as CategoryId);
  if (!base) return undefined;
  const result: LocaleAlternatePaths = { en: `/blog/category/${base.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    const slug =
      SLUG_MANIFEST[locale.code].categories[categoryId] ?? base.slug;
    result[locale.code] =
      `${locale.pathPrefix}/blog/category/${slug}/`;
  }
  return result;
}

/** Canonical paths for a static page in each locale (pass the EN path). */
export function getStaticAlternatePaths(pathname: string): LocaleAlternatePaths {
  const path = normalize(pathname);
  const result: LocaleAlternatePaths = { en: path };
  const localized = STATIC_PATHS[path];
  if (localized) {
    for (const locale of SUPPORTED_LOCALES) {
      if (locale.code === DEFAULT_LOCALE) continue;
      if (localized[locale.code]) result[locale.code] = localized[locale.code] as string;
    }
  }
  return result;
}

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

/**
 * Convert a locale alternate-path set into absolute hreflang entries for
 * SeoHead (one entry per translated locale, in SUPPORTED_LOCALES order,
 * plus x-default → en). hreflang values use the regional tags from
 * localeTag() (en-US, pt-BR, zh-CN) so they match <html lang>.
 */
export function toHreflangEntries(
  alternates: LocaleAlternatePaths | undefined
): HreflangEntry[] | undefined {
  if (!alternates || !alternates.en) return undefined;
  const entries: HreflangEntry[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    const path = alternates[locale.code];
    if (path) {
      entries.push({ hreflang: localeTag(locale.code), href: buildCanonicalUrl(path) });
    }
  }
  entries.push({ hreflang: 'x-default', href: buildCanonicalUrl(alternates.en) });
  return entries;
}
