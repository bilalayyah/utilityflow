import { SLUG_IDS, SLUG_MANIFEST } from './slugManifest';
import type { NonDefaultLocale } from './config';

/**
 * Slug lookups for the compact parallel-array manifest (audit #7).
 *
 * SLUG_IDS holds every id once (sorted); each locale's SLUG_MANIFEST
 * entry holds only the localized slugs in the SAME order. A slug is
 * found by the id's index, and an id by the slug's index. This keeps
 * the manifest roughly half the size of the old Record<string, string>
 * format (which repeated every id 10x, once per locale).
 *
 * Reverse lookups stay case-insensitive, matching the old behaviour
 * (routes.ts normalised slugs before comparing).
 */

export function getToolSlug(
  locale: NonDefaultLocale,
  toolId: string
): string | undefined {
  const i = SLUG_IDS.tools.indexOf(toolId);
  return i === -1 ? undefined : SLUG_MANIFEST[locale].tools[i];
}

export function getToolIdBySlug(
  locale: NonDefaultLocale,
  slug: string
): string | undefined {
  const normalized = slug.toLowerCase();
  const i = SLUG_MANIFEST[locale].tools.findIndex(
    (s) => s.toLowerCase() === normalized
  );
  return i === -1 ? undefined : SLUG_IDS.tools[i];
}

export function hasToolSlug(
  locale: NonDefaultLocale,
  toolId: string
): boolean {
  return getToolSlug(locale, toolId) !== undefined;
}

export function getCategorySlug(
  locale: NonDefaultLocale,
  categoryId: string
): string | undefined {
  const i = SLUG_IDS.categories.indexOf(categoryId);
  return i === -1 ? undefined : SLUG_MANIFEST[locale].categories[i];
}

export function getCategoryIdBySlug(
  locale: NonDefaultLocale,
  slug: string
): string | undefined {
  const normalized = slug.toLowerCase();
  const i = SLUG_MANIFEST[locale].categories.findIndex(
    (s) => s.toLowerCase() === normalized
  );
  return i === -1 ? undefined : SLUG_IDS.categories[i];
}

export function hasCategorySlug(
  locale: NonDefaultLocale,
  categoryId: string
): boolean {
  return getCategorySlug(locale, categoryId) !== undefined;
}

/** Localized article slug; undefined when the article is not published in that locale. */
export function getArticleSlug(
  locale: NonDefaultLocale,
  articleId: string
): string | undefined {
  const i = SLUG_IDS.articles.indexOf(articleId);
  if (i === -1) return undefined;
  return SLUG_MANIFEST[locale].articles[i] ?? undefined;
}

export function getArticleIdBySlug(
  locale: NonDefaultLocale,
  slug: string
): string | undefined {
  const normalized = slug.toLowerCase();
  const i = SLUG_MANIFEST[locale].articles.findIndex(
    (s) => s !== null && s.toLowerCase() === normalized
  );
  return i === -1 ? undefined : SLUG_IDS.articles[i];
}

/** Published-article count for a locale (excludes null slots). */
export function getPublishedArticleCount(locale: NonDefaultLocale): number {
  return SLUG_MANIFEST[locale].articles.filter(Boolean).length;
}
