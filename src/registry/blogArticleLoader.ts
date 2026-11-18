import type { BlogArticleLocaleVersion } from '../types/blog';

/**
 * Per-article EN loader (registry split, perf fix Wed 2026-11-18).
 *
 * Each article's full EN version lives in its own generated file
 * (src/registry/articles/<article-id>.ts, written by
 * scripts/generate-blog-article-chunks.ts). This module maps article id
 * -> lazy loader via import.meta.glob, so Vite emits one small chunk
 * per article (~17 KB raw / ~5 KB gz) and an article page downloads
 * only its own chunk — never the full 1.25 MB gz registry.
 *
 * The full registry (src/registry/blogArticles.ts) is still the source
 * of truth for Node scripts (sitemap, slug manifest, prerender), which
 * run under tsx and need every body. The browser never imports it.
 */

// One lazy import per generated per-article file. Vite turns each
// entry into its own chunk; nothing is loaded until called.
const articleModules = import.meta.glob<{ articleEn: BlogArticleLocaleVersion; default: BlogArticleLocaleVersion }>(
  './articles/*.ts'
);

/** Article id -> lazy loader, keyed by the filename (<id>.ts). */
const loadersById = new Map<string, () => Promise<{ articleEn: BlogArticleLocaleVersion; default: BlogArticleLocaleVersion }>>();
for (const [path, loader] of Object.entries(articleModules)) {
  const match = /\/([^/]+)\.ts$/.exec(path);
  if (!match) continue;
  loadersById.set(match[1], loader as () => Promise<{ articleEn: BlogArticleLocaleVersion; default: BlogArticleLocaleVersion }>);
}

/**
 * Load one article's full EN version (body + FAQs). Returns null when
 * the id is unknown or the chunk fails to load — never throws, so
 * callers (ArticlePage, main.tsx preload) can fall back to their own
 * loading/error state instead of crashing.
 *
 * CLS fix (Wed 2026-11-18): resolved versions are cached, so ArticlePage
 * can read the body SYNCHRONOUSLY on its first render when the boot gate
 * (src/boot/preloadRoute.ts) already loaded it — no loading placeholder,
 * no placeholder -> body swap, no 0.381 grid shift.
 */
const articleCache = new Map<string, BlogArticleLocaleVersion>();

/** Synchronous read of an already-loaded EN version (null if not loaded yet). */
export function getCachedArticleById(id: string): BlogArticleLocaleVersion | null {
  return articleCache.get(id) ?? null;
}

export async function loadBlogArticleById(id: string): Promise<BlogArticleLocaleVersion | null> {
  const cached = articleCache.get(id);
  if (cached) return cached;
  const loader = loadersById.get(id);
  if (!loader) return null;
  try {
    const mod = await loader();
    const version = mod.articleEn ?? mod.default;
    if (!version || typeof version.body !== 'string') return null;
    articleCache.set(id, version);
    return version;
  } catch {
    return null;
  }
}
