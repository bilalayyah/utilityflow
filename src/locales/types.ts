import type {
  CategorySEOConfig,
  ToolExample,
  ToolFAQ,
  ToolSEOConfig,
  ToolStep,
} from '../types/tool';
import type { LocaleCode } from './config';
import type { UiStrings } from './ui';

/**
 * Per-locale content override for one tool.
 * The English ToolDefinition stays the source of truth for ids, component,
 * category, batch, processing mode, popularity flags and relatedToolSlugs.
 * A locale override replaces only the user-facing, localizable fields.
 *
 * H-3 page-weight split: the guide fields (instructions, examples,
 * benefits, useCases, faqs) live in a per-batch detail module, NOT in the
 * locale chunk — see src/locales/details.ts. Light override records omit
 * them; they are merged back on the tool's own page (ToolPageLayout) and
 * at prerender time (scripts/prerender-meta.ts).
 */
export interface ToolLocaleOverride {
  slug: string;
  name: string;
  shortDescription: string;
  keywords: string[];
  seo: ToolSEOConfig;
  intro: string;
  instructions?: ToolStep[];
  examples?: ToolExample[];
  benefits?: string[];
  useCases?: string[];
  faqs?: ToolFAQ[];
  /** Optional notice shown when a tool needs an external API (e.g. live exchange rates). No current tool carries one — the API-backed tools (3 AI tools + Currency Calculator) were removed — but the field is kept for any future API-backed tool. */
  apiNotice?: string;
}

/**
 * Per-locale content override for one category.
 * id, batch, plannedToolCount and iconName stay in the English base record.
 */
export interface CategoryLocaleOverride {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  /** L-15: short intro paragraph (translated). */
  intro?: string;
  /** L-15: short FAQ (3–5 Q&As, translated). */
  faqs?: Array<{ question: string; answer: string }>;
  seo: CategorySEOConfig;
  sampleToolNames: string[];
}

/**
 * Per-locale content override for one blog article.
 * The English BlogArticle stays the source of truth for id, toolId,
 * categoryId, type, status, publishedAt and relatedToolIds. A locale
 * override replaces only the user-facing, localizable fields. An entry
 * exists only when that translation is actually published — never an
 * empty/placeholder entry.
 */
export interface ArticleLocaleOverride {
  slug: string;
  title: string;
  description: string;
  body: string;
  faqs?: Array<{ q: string; a: string }>;
  readingMinutes: number;
}

/**
 * Slim per-locale article record (audit #6, locale-chunk split).
 * The browser's locale chunk carries ONLY this — slug, title,
 * description, readingMinutes — for routing, listings, hreflang and
 * search. The full body + FAQs live in the article's own per-article
 * chunk (src/locales/<code>/articles/<id>.ts) and are loaded on demand
 * by src/locales/articleLoader.ts, mirroring the EN per-article split.
 * A full ArticleLocaleOverride IS a slim override (it has all four
 * fields), so full records are assignable to this type.
 */
export interface ArticleLocaleSlimOverride {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
}

/** A titled section of a legal / informational page. */
export interface InfoSection {
  title: string;
  paragraphs: string[];
}

/** One homepage "why choose us" card. */
export interface WhyChooseItem {
  title: string;
  description: string;
}

/**
 * Per-component localized strings for one workbench component.
 * `strings` overrides the component's English string table (merged over it);
 * `tables` holds non-string lookup tables (e.g. IO-format maps) keyed by
 * their English source string. Both are partial: missing keys fall back
 * to the English values at render time.
 */
export interface ComponentLocaleData {
  strings: Record<string, unknown>;
  tables?: Record<string, unknown>;
}

/**
 * Everything one locale needs at render time, loaded as a unit.
 * English is the built-in default (empty overrides, enStrings, no component
 * strings); every other locale is loaded on demand via loader.ts and held
 * in store.ts as the active data.
 */
export interface LocaleData {
  code: LocaleCode;
  toolOverrides: Record<string, ToolLocaleOverride>;
  categoryOverrides: Record<string, CategoryLocaleOverride>;
  /**
   * Blog article overrides, keyed by article id. Only published
   * translations. SLIM (audit #6): slug/title/description/readingMinutes
   * only — the full body + FAQs are NOT in the locale chunk; they load
   * per-article from src/locales/<code>/articles/<id>.ts via
   * src/locales/articleLoader.ts. Every consumer that only needs the
   * shell (routing, listings, hreflang, search) uses this.
   */
  articleOverrides: Record<string, ArticleLocaleSlimOverride>;
  uiStrings: UiStrings;
  componentStrings: Record<string, ComponentLocaleData>;
}

/**
 * Node-only (prerender): the same locale data but with FULL article
 * overrides (body + FAQs). The prerender scripts (which run under tsx,
 * not in the browser bundle) load the full overrides from the locale's
 * blog.ts source and use this type, so getBlogArticleVersion
 * (src/registry/blogArticles.ts) keeps returning a full
 * BlogArticleLocaleVersion for static HTML + FAQ JSON-LD.
 */
export interface FullLocaleData extends Omit<LocaleData, 'articleOverrides'> {
  articleOverrides: Record<string, ArticleLocaleOverride>;
}
