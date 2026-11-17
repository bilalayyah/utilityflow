import type { CategoryId } from './tool';

/**
 * Blog article types (Batch 2 — blog infrastructure).
 *
 * One BlogArticle record per English article. The English record is the
 * source of truth for id, toolId, categoryId, type, status and the EN
 * version; translations live in per-locale modules
 * (src/locales/<code>/blog.ts, ArticleLocaleOverride, carried on
 * LocaleData.articleOverrides) — mirroring ToolLocaleOverride. They are
 * NOT duplicated on this record.
 *
 * Body size note (H-3 pattern): article bodies are large (2,000–2,500
 * words). For Batch 2 the registry is empty, so bodies live inline in
 * the locale version. If Batch 3 bodies grow the bundle, move them to
 * per-batch detail modules (mirroring src/locales/details.ts) and keep
 * only metadata in the registry — the type already separates `body` so
 * that move is mechanical.
 */

export type BlogArticleType = 'guide' | 'howto' | 'advanced';

export type BlogArticleStatus = 'draft' | 'published';

export interface BlogArticleFaq {
  q: string;
  a: string;
}

/** One locale's version of an article (EN original or a translation). */
export interface BlogArticleLocaleVersion {
  /** URL slug under /blog/ (EN) or /<locale>/blog/ (localized). Unique per locale. */
  slug: string;
  /** H1 / SEO title base. */
  title: string;
  /** Meta description (unique per article). */
  description: string;
  /** Article body HTML (H2/H3, steps, examples, FAQs). Escaped at render/prerender. */
  body: string;
  /** Visible FAQs — only these get FAQPage JSON-LD. */
  faqs: BlogArticleFaq[];
  /** Reading time in minutes, computed from body word count. */
  readingMinutes: number;
}

export interface BlogArticle {
  /** Stable id, e.g. "word-counter-guide" (never changes; translations key off this). */
  id: string;
  /** The tool's stable English id (links article -> tool page). */
  toolId: string;
  /** One of the 7 category ids. */
  categoryId: CategoryId;
  /** A1 guide / A2 how-to / A3 advanced-comparison-optimization. */
  type: BlogArticleType;
  /** Only "published" is routed, prerendered, and sitemapped. */
  status: BlogArticleStatus;
  /** ISO date, real publication date (not fabricated). */
  publishedAt: string;
  /** Only when genuinely updated. */
  updatedAt?: string;
  /** English (original) version. */
  en: BlogArticleLocaleVersion;
  /** Other tools genuinely relevant (for the "Related tools" section). */
  relatedToolIds: string[];
}
