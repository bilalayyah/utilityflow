import type { CategoryId } from '../types/tool';
import type { BlogArticle, BlogArticleLocaleVersion } from '../types/blog';
import type { LocaleCode } from '../locales/config';
import { DEFAULT_LOCALE, getLocaleInfo } from '../locales/config';
import type { LocaleData } from '../locales/types';
import { getActiveLocaleData } from '../locales/store';
import { getCategoryById } from './categories';

/**
 * Blog article registry (Batch 2 — blog infrastructure).
 *
 * Canonical EN registry, mirroring TOOLS_REGISTRY: a flat exported array
 * built by spreading per-category part arrays (Batch 3 adds the articles).
 * For Batch 2 the registry is EMPTY — the blog home/category pages must
 * render correctly with zero articles (empty state, no broken links).
 *
 * Translations live in per-locale modules (src/locales/<code>/blog.ts,
 * ArticleLocaleOverride, carried on LocaleData.articleOverrides) and are
 * resolved through the `data` parameter (defaults to the active locale
 * data from the store) — mirroring getLocalizedTool / getLocalizedCategory.
 * Helpers that only need slugs use the static SLUG_MANIFEST instead (see
 * src/locales/routes.ts).
 */

/** All blog articles (EN originals). Empty until Batch 3. */
export const BLOG_ARTICLES: BlogArticle[] = [];

export function getAllBlogArticles(): BlogArticle[] {
  return BLOG_ARTICLES;
}

/** Published articles only (drafts are excluded from routing/prerender/sitemap). */
export function getPublishedBlogArticles(): BlogArticle[] {
  return BLOG_ARTICLES.filter((article) => article.status === 'published');
}

export function getBlogArticleById(id: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.id === id);
}

function normalizeSlug(slug: string): string {
  return slug.replace(/^\/+|\/+$/g, '').toLowerCase();
}

/** The locale version of an article (EN original, or the translation if published in that locale). */
export function getBlogArticleVersion(
  article: BlogArticle,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticleLocaleVersion | undefined {
  if (locale === DEFAULT_LOCALE) return article.en;
  if (data.code !== locale) return undefined;
  const override = data.articleOverrides[article.id];
  if (!override) return undefined;
  // Normalise: ArticleLocaleOverride.faqs is optional, but the
  // BlogArticleLocaleVersion contract requires an array (possibly empty).
  return { ...override, faqs: override.faqs ?? [] };
}

/** Find a published article by its slug in the given locale (EN slug or the locale's translated slug). */
export function getBlogArticleBySlug(
  slug: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticle | undefined {
  const normalized = normalizeSlug(slug);
  return getPublishedBlogArticles().find((article) => {
    const version = getBlogArticleVersion(article, locale, data);
    return version !== undefined && version.slug.toLowerCase() === normalized;
  });
}

/** Canonical article URL path for a locale. Undefined when the article is not published in that locale. */
export function getBlogArticleUrl(
  article: BlogArticle,
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
): BlogArticle[] {
  const order: Record<BlogArticle['type'], number> = { guide: 0, howto: 1, advanced: 2 };
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
): BlogArticle[] {
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
  article: BlogArticle,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): BlogArticle[] {
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
  article: BlogArticle,
  locale: LocaleCode,
  limit = 4,
  data: LocaleData = getActiveLocaleData()
): BlogArticle[] {
  const siblings = getSiblingBlogArticles(article, locale, data);
  const seen = new Set(siblings.map((s) => s.id));
  const sameCategory = getBlogArticlesForCategory(article.categoryId, locale, data).filter(
    (candidate) => candidate.id !== article.id && !seen.has(candidate.id)
  );
  return [...siblings, ...sameCategory].slice(0, limit);
}

/** Previous/next article (same tool, type order) for prev/next navigation. */
export function getBlogArticlePrevNext(
  article: BlogArticle,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): { prev?: BlogArticle; next?: BlogArticle } {
  const siblings = getBlogArticlesForTool(article.toolId, locale, data);
  const index = siblings.findIndex((sibling) => sibling.id === article.id);
  if (index === -1) return {};
  return {
    prev: siblings[index - 1],
    next: siblings[index + 1],
  };
}

/** Blog category URL path for a locale (EN /blog/category/<slug>/, localized /<locale>/blog/category/<localized-slug>/). */
export function getBlogCategoryUrl(
  categoryId: CategoryId,
  locale: LocaleCode
): string {
  const category = getCategoryById(categoryId);
  const slug = category ? category.slug : categoryId;
  if (locale === DEFAULT_LOCALE) return `/blog/category/${slug}/`;
  // Localized category slug comes from the slug manifest via the caller;
  // this helper uses the EN slug as a safe fallback (the pages resolve
  // the localized slug through getCategoryByLocalizedSlug).
  return `${getLocaleInfo(locale).pathPrefix}/blog/category/${slug}/`;
}

/** Blog home URL path for a locale. */
export function getBlogHomeUrl(locale: LocaleCode): string {
  return locale === DEFAULT_LOCALE ? '/blog/' : `${getLocaleInfo(locale).pathPrefix}/blog/`;
}

/** Reading minutes from a body word count (200 wpm, minimum 1). */
export function readingMinutesForBody(body: string): number {
  const words = body
    .replace(/<[^>]*>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
