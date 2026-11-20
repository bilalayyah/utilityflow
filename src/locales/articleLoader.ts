import type { NonDefaultLocale } from './config';
import type { ArticleLocaleOverride } from './types';

/**
 * Localized per-article loader (audit #6, locale-chunk split).
 *
 * Each localized article's full version (body + FAQs) lives in its own
 * generated file (src/locales/<code>/articles/<id>.ts, written by
 * scripts/generate-blog-article-chunks.ts). The locale chunk carries only
 * the SLIM overrides (slug/title/description/readingMinutes), so opening
 * any page in a language no longer downloads all 249 articles' bodies.
 *
 * This module maps locale -> lazy per-locale loader
 * (src/locales/<code>/articleLoader.ts, one import.meta.glob per locale),
 * so Vite emits one small chunk per article (~5 KB gz) and an article
 * page downloads only its own chunk. The per-locale loader modules are
 * themselves separate chunks, loaded only when that locale's article
 * page needs them — the entry chunk carries only this 10-entry map.
 *
 * Mirrors src/registry/blogArticleLoader.ts (EN). Resolved versions are
 * cached, so ArticlePage can read the body SYNCHRONOUSLY on its first
 * render when the boot gate (src/boot/preloadRoute.ts) already loaded
 * it — no loading placeholder, no placeholder -> body swap, no CLS shift.
 */

type LocaleArticleLoader = {
  loadArticleById: (id: string) => Promise<ArticleLocaleOverride | null>;
  getCachedArticleById: (id: string) => ArticleLocaleOverride | null;
};

const LOCALE_LOADERS: Record<
  NonDefaultLocale,
  () => Promise<LocaleArticleLoader>
> = {
  es: () => import('./es/articleLoader'),
  pt: () => import('./pt/articleLoader'),
  fr: () => import('./fr/articleLoader'),
  de: () => import('./de/articleLoader'),
  it: () => import('./it/articleLoader'),
  id: () => import('./id/articleLoader'),
  ru: () => import('./ru/articleLoader'),
  ja: () => import('./ja/articleLoader'),
  ko: () => import('./ko/articleLoader'),
  zh: () => import('./zh/articleLoader'),
};

const articleCache = new Map<string, ArticleLocaleOverride>();

/** Synchronous read of an already-loaded localized version (null if not loaded yet). */
export function getCachedLocalizedArticle(
  locale: NonDefaultLocale,
  id: string
): ArticleLocaleOverride | null {
  return articleCache.get(`${locale}:${id}`) ?? null;
}

/**
 * Load one article's full localized version (body + FAQs). Returns null
 * when the id is unknown or the chunk fails to load — never throws, so
 * callers (ArticlePage, main.tsx preload) can fall back to their own
 * loading/error state instead of crashing.
 */
export async function loadLocalizedArticleById(
  locale: NonDefaultLocale,
  id: string
): Promise<ArticleLocaleOverride | null> {
  const key = `${locale}:${id}`;
  const cached = articleCache.get(key);
  if (cached) return cached;
  try {
    const loader = await LOCALE_LOADERS[locale]();
    const version = await loader.loadArticleById(id);
    if (!version || typeof version.body !== 'string') return null;
    articleCache.set(key, version);
    return version;
  } catch {
    return null;
  }
}
