import type { CategoryId, ToolCategory, ToolDefinition } from '../types/tool';
import { CATEGORIES, getCategoryById } from '../registry/categories';
import { TOOLS_REGISTRY, getToolBySlug } from '../registry/toolsRegistry';
import type { LocaleCode, NonDefaultLocale } from './config';
import { ES_CATEGORY_OVERRIDES } from './es/categories';
import { ES_TOOL_OVERRIDES } from './es/tools';
import { FR_CATEGORY_OVERRIDES } from './fr/categories';
import { FR_TOOL_OVERRIDES } from './fr/tools';
import { PT_CATEGORY_OVERRIDES } from './pt/categories';
import { PT_TOOL_OVERRIDES } from './pt/tools';
import type { CategoryLocaleOverride, ToolLocaleOverride } from './types';

/**
 * Localization layer for tools and categories.
 * English ToolDefinitions / ToolCategory records stay the source of truth;
 * a locale override replaces only user-facing fields. Missing overrides fall
 * back to English so a partially translated locale never breaks a page.
 *
 * Adding a language: create locales/<code>/tools + categories, register them
 * in the two maps below, add the locale to SUPPORTED_LOCALES — nothing else
 * in this file needs to change.
 */

const TOOL_OVERRIDES: Record<NonDefaultLocale, Record<string, ToolLocaleOverride>> = {
  es: ES_TOOL_OVERRIDES,
  pt: PT_TOOL_OVERRIDES,
  fr: FR_TOOL_OVERRIDES,
};

const CATEGORY_OVERRIDES: Record<NonDefaultLocale, Record<string, CategoryLocaleOverride>> = {
  es: ES_CATEGORY_OVERRIDES,
  pt: PT_CATEGORY_OVERRIDES,
  fr: FR_CATEGORY_OVERRIDES,
};

const TOOL_BY_ID = new Map<string, ToolDefinition>(
  TOOLS_REGISTRY.map((tool) => [tool.id, tool])
);

export function getToolById(id: string): ToolDefinition | undefined {
  return TOOL_BY_ID.get(id);
}

export function hasToolOverride(toolId: string, locale: LocaleCode): boolean {
  if (locale === 'en') return true;
  return Boolean(TOOL_OVERRIDES[locale][toolId]);
}

export function getLocalizedTool(tool: ToolDefinition, locale: LocaleCode): ToolDefinition {
  if (locale === 'en') return tool;
  const override = TOOL_OVERRIDES[locale][tool.id];
  if (!override) return tool;
  return {
    ...tool,
    slug: override.slug,
    name: override.name,
    shortDescription: override.shortDescription,
    keywords: override.keywords,
    seo: override.seo,
    intro: override.intro,
    instructions: override.instructions,
    examples: override.examples,
    benefits: override.benefits,
    useCases: override.useCases,
    faqs: override.faqs,
    ...(override.apiNotice !== undefined ? { apiNotice: override.apiNotice } : {}),
  };
}

export function getLocalizedTools(locale: LocaleCode): ToolDefinition[] {
  return TOOLS_REGISTRY.map((tool) => getLocalizedTool(tool, locale));
}

/** Resolve a tool by its slug in the given locale (localized or English slug). */
export function getToolByLocalizedSlug(
  slug: string,
  locale: LocaleCode
): ToolDefinition | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== 'en') {
    const entry = Object.entries(TOOL_OVERRIDES[locale]).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = TOOL_BY_ID.get(entry[0]);
      if (base) return getLocalizedTool(base, locale);
    }
  }
  return getToolBySlug(normalized);
}

/** Localized search over tool names, descriptions, slugs and keywords. */
export function searchToolsLocalized(
  query: string,
  locale: LocaleCode,
  categoryId?: CategoryId | 'all'
): ToolDefinition[] {
  const trimmed = query.trim().toLowerCase();
  const tools = getLocalizedTools(locale).filter(
    (tool) => !categoryId || categoryId === 'all' || tool.categoryId === categoryId
  );
  if (!trimmed) return tools;
  return tools.filter((tool) => {
    const haystack = [
      tool.name,
      tool.shortDescription,
      tool.slug,
      ...tool.keywords,
      tool.seo.primaryKeyword,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(trimmed);
  });
}

export function hasCategoryOverride(categoryId: string, locale: LocaleCode): boolean {
  if (locale === 'en') return true;
  return Boolean(CATEGORY_OVERRIDES[locale][categoryId]);
}

export function getLocalizedCategory(
  category: ToolCategory | CategoryId,
  locale: LocaleCode
): ToolCategory | undefined {
  const base =
    typeof category === 'string' ? getCategoryById(category) : category;
  if (!base) return undefined;
  if (locale === 'en') return base;
  const override = CATEGORY_OVERRIDES[locale][base.id];
  if (!override) return base;
  return {
    ...base,
    slug: override.slug,
    name: override.name,
    shortName: override.shortName,
    description: override.description,
    longDescription: override.longDescription,
    seo: override.seo,
    sampleToolNames: override.sampleToolNames,
  };
}

export function getLocalizedCategories(locale: LocaleCode): ToolCategory[] {
  return CATEGORIES.map((category) => getLocalizedCategory(category, locale)).filter(
    (category): category is ToolCategory => category !== undefined
  );
}

/** Resolve a category by its slug in the given locale (localized or English slug). */
export function getCategoryByLocalizedSlug(
  slug: string,
  locale: LocaleCode
): ToolCategory | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== 'en') {
    const entry = Object.entries(CATEGORY_OVERRIDES[locale]).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = getCategoryById(entry[0] as CategoryId);
      if (base) return getLocalizedCategory(base, locale);
    }
  }
  return CATEGORIES.find((category) => category.slug.toLowerCase() === normalized);
}
