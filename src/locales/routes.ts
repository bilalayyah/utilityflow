import type { CategoryId } from '../types/tool';
import { buildCanonicalUrl } from '../config/site';
import type { LocaleCode } from './config';
import { STATIC_PATHS } from './config';
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
 */

function normalize(pathname: string): string {
  const cleaned = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export function getLocalizedEquivalentPath(
  pathname: string,
  targetLocale: LocaleCode
): string {
  const [pathPart, hash] = pathname.split('#');
  const path = normalize(pathPart || '/');
  const withHash = (base: string) => (hash ? `${base}#${hash}` : base);
  const home = targetLocale === 'es' ? '/es/' : '/';

  // Homepage
  if (path === '/' || path === '/es/') return withHash(home);

  // Static pages (English or Spanish path in)
  for (const [enPath, localized] of Object.entries(STATIC_PATHS)) {
    if (path === enPath || (localized.es && path === localized.es)) {
      return withHash(targetLocale === 'es' ? localized.es ?? enPath : enPath);
    }
  }

  // Category hubs: /category/<slug>/ or /es/categoria/<slug>/
  const categoryMatch = path.match(/^\/(?:es\/categoria|category)\/([^/]+)\/$/);
  if (categoryMatch) {
    const category =
      getCategoryByLocalizedSlug(categoryMatch[1], 'es') ??
      getCategoryByLocalizedSlug(categoryMatch[1], 'en');
    if (!category) return withHash(home);
    // Always resolve through the English base record: the localized
    // category carries the Spanish slug, which must never leak into an
    // English URL.
    const base = getCategoryById(category.id);
    if (!base) return withHash(home);
    if (targetLocale === 'es') {
      const localized = getLocalizedCategory(base, 'es');
      if (!localized) return withHash(home);
      return withHash(`/es/categoria/${localized.slug}/`);
    }
    return withHash(`/category/${base.slug}/`);
  }

  // Tool pages: /<slug>/ or /es/<slug>/ (single segment)
  const toolMatch = path.match(/^\/(?:es\/)?([^/]+)\/$/);
  if (toolMatch) {
    const tool =
      getToolByLocalizedSlug(toolMatch[1], 'es') ??
      getToolByLocalizedSlug(toolMatch[1], 'en');
    if (!tool) return withHash(home);
    const base = getToolById(tool.id);
    if (!base) return withHash(home);
    if (targetLocale === 'es') {
      if (!hasToolOverride(base.id, 'es')) return withHash(home);
      return withHash(`/es/${getLocalizedTool(base, 'es').slug}/`);
    }
    return withHash(`/${base.slug}/`);
  }

  return withHash(home);
}

/** Canonical paths for a tool in each locale (es only when translated). */
export function getToolAlternatePaths(
  toolId: string
): { en: string; es?: string } | undefined {
  const base = getToolById(toolId);
  if (!base) return undefined;
  const result: { en: string; es?: string } = { en: `/${base.slug}/` };
  if (hasToolOverride(toolId, 'es')) {
    result.es = `/es/${getLocalizedTool(base, 'es').slug}/`;
  }
  return result;
}

/** Canonical paths for a category in each locale (es only when translated). */
export function getCategoryAlternatePaths(
  categoryId: string
): { en: string; es?: string } | undefined {
  const base = getCategoryById(categoryId as CategoryId);
  if (!base) return undefined;
  const result: { en: string; es?: string } = { en: `/category/${base.slug}/` };
  const localized = getLocalizedCategory(base, 'es');
  if (localized && localized.slug !== base.slug) {
    result.es = `/es/categoria/${localized.slug}/`;
  }
  return result;
}

/** Canonical paths for a static page in each locale (pass the EN path). */
export function getStaticAlternatePaths(
  pathname: string
): { en: string; es?: string } {
  const path = normalize(pathname);
  const en = path;
  const localized = STATIC_PATHS[path];
  return localized?.es ? { en, es: localized.es } : { en };
}

export interface HreflangEntry {
  hreflang: string;
  href: string;
}

/**
 * Convert a {en, es?} alternate-path set into absolute hreflang entries
 * for SeoHead (en / es / x-default → en).
 */
export function toHreflangEntries(
  alternates: { en: string; es?: string } | undefined
): HreflangEntry[] | undefined {
  if (!alternates) return undefined;
  const entries: HreflangEntry[] = [
    { hreflang: 'en', href: buildCanonicalUrl(alternates.en) },
  ];
  if (alternates.es) {
    entries.push({ hreflang: 'es', href: buildCanonicalUrl(alternates.es) });
  }
  entries.push({ hreflang: 'x-default', href: buildCanonicalUrl(alternates.en) });
  return entries;
}
