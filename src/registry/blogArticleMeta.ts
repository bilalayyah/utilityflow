import type { CategoryId } from '../types/tool';
import type {
  BlogArticleMeta,
  BlogArticleMetaVersion,
} from '../types/blog';
import type { LocaleCode } from '../locales/config';
import { DEFAULT_LOCALE, getLocaleInfo } from '../locales/config';
import type { ArticleLocaleOverride, LocaleData } from '../locales/types';
import { getActiveLocaleData } from '../locales/store';
import { BLOG_ARTICLE_META } from './blogArticleIndex';

/**
 * Slim blog-article helpers (Phase 5 bundle split).
 *
 * These are the browser entry-path equivalents of the helpers in
 * src/registry/blogArticles.ts, but they operate on the slim generated
 * index (src/registry/blogArticleIndex.ts — metadata only, no bodies,
 * no FAQs) instead of the 4.6 MB full EN registry. Every function that
 * only needs slugs, titles, descriptions, reading minutes, ids or
 * publication status lives here, so the entry chunk never imports the
 * full registry.
 *
 * Rules:
 * - Listings, cards, search, hreflang, URL resolution and related
 *   articles use THESE helpers (meta only).
 * - The full article body + FAQs for ONE article come from
 *   src/registry/blogArticles.ts, loaded on demand by ArticlePage via
 *   dynamic import (EN), or from the loaded locale's articleOverrides
 *   (non-EN — already in the locale chunk).
 * - Node scripts (generate-sitemap, generate-slug-manifest,
 *   prerender-meta, prerender-body) keep importing the full registry —
 *   they run under tsx, not in the browser bundle, and they need the
 *   full bodies for static HTML + FAQ JSON-LD.
 *
 * The lookup logic mirrors blogArticles.ts line-for-line where the
 * record shapes allow it, so behaviour is identical — only the data
 * source differs (slim index vs full registry).
 */

export function getAllBlogArticles(): BlogArticleMeta[] {
  return BLOG_ARTICLE_META;
}

/** Published articles only (drafts are excluded from routing/prerender/sitemap). */
export function getPublishedBlogArticles(): BlogArticleMeta[] {
  return BLOG_ARTICLE_META.filter((article) => article.status === 'published');
}

export function getBlogArticleById(id: string): BlogArticleMeta | undefined {
  return BLOG_ARTICLE_META.find((article) => article.id === id);
}

function normalizeSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, '').toLowerCase();
}

/**
 * The locale version of an article (slim EN version, or the translation
 * if published in that locale). For non-EN locales this returns the full
 * ArticleLocaleOverride from the loaded locale data (body + FAQs
 * included — it already lives in the locale chunk); for EN it returns
 * the slim meta version (slug/title/description/readingMinutes only —
 * the full EN body is loaded separately by ArticlePage).
 */
export function getBlogArticleVersion(
  article: BlogArticleMeta,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMetaVersion | ArticleLocaleOverride | undefined {
  if (locale === DEFAULT_LOCALE) return article.en;
  if (data.code !== locale) return undefined;
  const override = data.articleOverrides[article.id];
  if (!override) return undefined;
  // Normalise: ArticleLocaleOverride.faqs is optional, but callers that
  // render FAQs expect an array (possibly empty).
  return { ...override, faqs: override.faqs ?? [] };
}

/** Find a published article by its slug in the given locale (EN slug or the locale's translated slug). */
export function getBlogArticleBySlug(
  slug: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMeta | undefined {
  const normalized = normalizeSlug(slug);
  return getPublishedBlogArticles().find((article) => {
    const version = getBlogArticleVersion(article, locale, data);
    return version !== undefined && version.slug.toLowerCase() === normalized;
  });
}

/** Canonical article URL path for a locale. Undefined when the article is not published in that locale. */
export function getBlogArticleUrl(
  article: BlogArticleMeta,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): string | undefined {
  const version = getBlogArticleVersion(article, locale, data);
  if (!version) return undefined;
  if (locale === DEFAULT_LOCALE) return `/blog/${version.slug}/`;
  return `${getLocaleInfo(locale).pathPrefix}/blog/${version.slug}/`;
}

/** Published articles for one tool (the tool's 3 articles, in type order guide → howto → advanced). */
export function getBlogArticlesForTool(
  toolId: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMeta[] {
  const order: Record<BlogArticleMeta['type'], number> = { guide: 0, howto: 1, advanced: 2 };
  return getPublishedBlogArticles()
    .filter(
      (article) =>
        article.toolId === toolId &&
        getBlogArticleVersion(article, locale, data) !== undefined
    )
    .sort((a, b) => order[a.type] - order[b.type]);
}

/** Published articles for one category (in that locale), newest first. */
export function getBlogArticlesForCategory(
  categoryId: CategoryId,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMeta[] {
  return getPublishedBlogArticles()
    .filter(
      (article) =>
        article.categoryId === categoryId &&
        getBlogArticleVersion(article, locale, data) !== undefined
    )
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** The other two articles for the same tool (same locale), in type order. Used by RelatedArticles. */
export function getSiblingBlogArticles(
  article: BlogArticleMeta,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMeta[] {
  return getBlogArticlesForTool(article.toolId, locale, data).filter(
    (sibling) => sibling.id !== article.id
  );
}

/**
 * Related articles for an article page: the other two articles for the
 * same tool first, then same-category articles (newest first), capped.
 * Mirrors getRelatedTools (explicit first, same-category fallback).
 * `limit` comes before the optional `data` so callers can pass a limit
 * without a data object (React pages use the store default).
 */
export function getRelatedBlogArticles(
  article: BlogArticleMeta,
  locale: LocaleCode,
  limit = 4,
  data: LocaleData = getActiveLocaleData()
): BlogArticleMeta[] {
  const siblings = getSiblingBlogArticles(article, locale, data);
  const seen = new Set(siblings.map((s) => s.id));
  const sameCategory = getBlogArticlesForCategory(article.categoryId, locale, data).filter(
    (candidate) => candidate.id !== article.id && !seen.has(candidate.id)
  );
  return [...siblings, ...sameCategory].slice(0, limit);
}

/** Previous/next article (same tool, type order) for prev/next navigation. */
export function getBlogArticlePrevNext(
  article: BlogArticleMeta,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): { prev?: BlogArticleMeta; next?: BlogArticleMeta } {
  const siblings = getBlogArticlesForTool(article.toolId, locale, data);
  const index = siblings.findIndex((sibling) => sibling.id === article.id);
  if (index === -1) return {};
  return {
    prev: siblings[index - 1],
    next: siblings[index + 1],
  };
}

/** Blog home URL path for a locale. */
export function getBlogHomeUrl(locale: LocaleCode): string {
  return locale === DEFAULT_LOCALE ? '/blog/' : `${getLocaleInfo(locale).pathPrefix}/blog/`;
}
