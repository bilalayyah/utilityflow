import type { CategoryId } from '../types/tool';
import { buildCanonicalUrl } from '../config/site';
import type { LocaleCode } from './config';
import {
  CATEGORY_PATH_SEGMENT,
  DEFAULT_LOCALE,
  STATIC_PATHS,
  SUPPORTED_LOCALES,
  getLocaleInfo,
  isLocaleCode,
} from './config';
import { getCategoryById } from '../registry/categories';
import {
  getCategoryByLocalizedSlug,
  getLocalizedCategory,
  getLocalizedTool,
  getToolById,
  getToolByLocalizedSlug,
  hasToolOverride,
} from './tools';

/**
 * Cross-locale navigation: given the current pathname, build the equivalent
 * path in the target locale (same tool, category, or static page).
 * Unknown pages — and tools with no translation in the target locale —
 * fall back to the target locale's homepage (never link unfinished pages).
 *
 * Alternate-path sets are Partial<Record<LocaleCode, string>>: 'en' is
 * always present; other locales appear only when translated.
 */

export type LocaleAlternatePaths = Partial<Record<LocaleCode, string>>;

function normalize(pathname: string): string {
  const cleaned = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

function homePath(locale: LocaleCode): string {
  return locale === DEFAULT_LOCALE ? '/' : `${getLocaleInfo(locale).pathPrefix}/`;
}

export function getLocalizedEquivalentPath(
  pathname: string,
  targetLocale: LocaleCode
): string {
  const [pathPart, hash] = pathname.split('#');
  const path = normalize(pathPart || '/');
  const withHash = (base: string) => (hash ? `${base}#${hash}` : base);
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
    const category =
      getCategoryByLocalizedSlug(slug, sourceLocale) ??
      getCategoryByLocalizedSlug(slug, DEFAULT_LOCALE);
    if (!category) return withHash(home);
    // Always resolve through the English base record: a localized category
    // slug must never leak into another locale's URL.
    const base = getCategoryById(category.id);
    if (!base) return withHash(home);
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/category/${base.slug}/`);
    }
    const localized = getLocalizedCategory(base, targetLocale);
    if (!localized) return withHash(home);
    return withHash(
      `${getLocaleInfo(targetLocale).pathPrefix}/${CATEGORY_PATH_SEGMENT[targetLocale]}/${localized.slug}/`
    );
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
    const tool =
      getToolByLocalizedSlug(toolSlug, sourceLocale) ??
      getToolByLocalizedSlug(toolSlug, DEFAULT_LOCALE);
    if (!tool) return withHash(home);
    const base = getToolById(tool.id);
    if (!base) return withHash(home);
    if (targetLocale === DEFAULT_LOCALE) {
      return withHash(`/${base.slug}/`);
    }
    if (!hasToolOverride(base.id, targetLocale)) return withHash(home);
    return withHash(
      `${getLocaleInfo(targetLocale).pathPrefix}/${getLocalizedTool(base, targetLocale).slug}/`
    );
  }

  return withHash(home);
}

/** Canonical paths for a tool in each locale (non-EN only when translated). */
export function getToolAlternatePaths(toolId: string): LocaleAlternatePaths | undefined {
  const base = getToolById(toolId);
  if (!base) return undefined;
  const result: LocaleAlternatePaths = { en: `/${base.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    if (hasToolOverride(toolId, locale.code)) {
      result[locale.code] = `${locale.pathPrefix}/${getLocalizedTool(base, locale.code).slug}/`;
    }
  }
  return result;
}

/** Canonical paths for a category in each locale (non-EN only when translated). */
export function getCategoryAlternatePaths(
  categoryId: string
): LocaleAlternatePaths | undefined {
  const base = getCategoryById(categoryId as CategoryId);
  if (!base) return undefined;
  const result: LocaleAlternatePaths = { en: `/category/${base.slug}/` };
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.code === DEFAULT_LOCALE) continue;
    const localized = getLocalizedCategory(base, locale.code);
    if (localized && localized.slug !== base.slug) {
      result[locale.code] =
        `${locale.pathPrefix}/${CATEGORY_PATH_SEGMENT[locale.code]}/${localized.slug}/`;
    }
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
 * plus x-default → en).
 */
export function toHreflangEntries(
  alternates: LocaleAlternatePaths | undefined
): HreflangEntry[] | undefined {
  if (!alternates || !alternates.en) return undefined;
  const entries: HreflangEntry[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    const path = alternates[locale.code];
    if (path) {
      entries.push({ hreflang: locale.code, href: buildCanonicalUrl(path) });
    }
  }
  entries.push({ hreflang: 'x-default', href: buildCanonicalUrl(alternates.en) });
  return entries;
}
