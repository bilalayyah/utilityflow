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
 */
export interface ToolLocaleOverride {
  slug: string;
  name: string;
  shortDescription: string;
  keywords: string[];
  seo: ToolSEOConfig;
  intro: string;
  instructions: ToolStep[];
  examples: ToolExample[];
  benefits: string[];
  useCases: string[];
  faqs: ToolFAQ[];
  /** Only for tools that carry an apiNotice in English (3 AI tools + currency converter). */
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
  seo: CategorySEOConfig;
  sampleToolNames: string[];
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
  uiStrings: UiStrings;
  componentStrings: Record<string, ComponentLocaleData>;
}
