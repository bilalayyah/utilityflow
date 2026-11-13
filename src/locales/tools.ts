import type { CategoryId, ToolCategory, ToolDefinition } from '../types/tool';
import { CATEGORIES, getCategoryById } from '../registry/categories';
import { TOOLS_REGISTRY, getToolBySlug } from '../registry/toolsRegistry';
import type { LocaleCode } from './config';
import { ES_CATEGORY_OVERRIDES } from './es/categories';
import { ES_TOOL_OVERRIDES } from './es/tools';

/**
 * Localization layer for tools and categories.
 * English ToolDefinitions / ToolCategory records stay the source of truth;
 * a locale override replaces only user-facing fields. Missing overrides fall
 * back to English so a partially translated locale never breaks a page.
 */

const TOOL_BY_ID = new Map<string, ToolDefinition>(
  TOOLS_REGISTRY.map((tool) => [tool.id, tool])
);

export function getToolById(id: string): ToolDefinition | undefined {
  return TOOL_BY_ID.get(id);
}

export function hasToolOverride(toolId: string, locale: LocaleCode): boolean {
  if (locale === 'en') return true;
  if (locale === 'es') return Boolean(ES_TOOL_OVERRIDES[toolId]);
  return false;
}

export function getLocalizedTool(tool: ToolDefinition, locale: LocaleCode): ToolDefinition {
  if (locale === 'en') return tool;
  if (locale === 'es') {
    const override = ES_TOOL_OVERRIDES[tool.id];
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
  return tool;
}

export function getLocalizedTools(locale: LocaleCode): ToolDefinition[] {
  return TOOLS_REGISTRY.map((tool) => getLocalizedTool(tool, locale));
}

/** Resolve a tool by its slug in the given locale (Spanish or English slug). */
export function getToolByLocalizedSlug(
  slug: string,
  locale: LocaleCode
): ToolDefinition | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale === 'es') {
    const entry = Object.entries(ES_TOOL_OVERRIDES).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = TOOL_BY_ID.get(entry[0]);
      if (base) return getLocalizedTool(base, 'es');
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
  if (locale === 'es') return Boolean(ES_CATEGORY_OVERRIDES[categoryId]);
  return false;
}

export function getLocalizedCategory(
  category: ToolCategory | CategoryId,
  locale: LocaleCode
): ToolCategory | undefined {
  const base =
    typeof category === 'string' ? getCategoryById(category) : category;
  if (!base) return undefined;
  if (locale === 'en') return base;
  if (locale === 'es') {
    const override = ES_CATEGORY_OVERRIDES[base.id];
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
  return base;
}

export function getLocalizedCategories(locale: LocaleCode): ToolCategory[] {
  return CATEGORIES.map((category) => getLocalizedCategory(category, locale)).filter(
    (category): category is ToolCategory => category !== undefined
  );
}

/** Resolve a category by its slug in the given locale (Spanish or English slug). */
export function getCategoryByLocalizedSlug(
  slug: string,
  locale: LocaleCode
): ToolCategory | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale === 'es') {
    const entry = Object.entries(ES_CATEGORY_OVERRIDES).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = getCategoryById(entry[0] as CategoryId);
      if (base) return getLocalizedCategory(base, 'es');
    }
  }
  return CATEGORIES.find((category) => category.slug.toLowerCase() === normalized);
}
