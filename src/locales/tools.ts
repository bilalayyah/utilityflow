import type { CategoryId, ToolCategory, ToolDefinition } from '../types/tool';
import { CATEGORIES, getCategoryById } from '../registry/categories';
import { TOOLS_REGISTRY, getToolBySlug } from '../registry/toolsRegistry';
import type { LocaleCode } from './config';
import { SLUG_MANIFEST } from './slugManifest';
import { getActiveLocaleData } from './store';
import type { LocaleData } from './types';

/**
 * Localization layer for tools and categories.
 * English ToolDefinitions / ToolCategory records stay the source of truth;
 * a locale override replaces only user-facing fields. Missing overrides fall
 * back to English so a partially translated locale never breaks a page.
 *
 * Locale data is NOT statically imported here anymore: the active locale's
 * data is loaded on demand (loader.ts) and held in store.ts. Every getter
 * below takes an OPTIONAL trailing `data` parameter (default: the active
 * data from the store), so existing render-time callers keep working
 * unchanged. Rule inside each getter: if locale === 'en', return the
 * English base; if locale !== data.code, fall back to the English base
 * (loaded data only ever covers its own locale — never another locale's);
 * otherwise use data.toolOverrides / data.categoryOverrides.
 *
 * Adding a language: create locales/<code>/ (tools + categories + ui +
 * components + index.ts), register it in loader.ts and the slug manifest
 * generator, add the locale to SUPPORTED_LOCALES — nothing else in this
 * file needs to change.
 */

const TOOL_BY_ID = new Map<string, ToolDefinition>(
  TOOLS_REGISTRY.map((tool) => [tool.id, tool])
);

export function getToolById(id: string): ToolDefinition | undefined {
  return TOOL_BY_ID.get(id);
}

/** True when the locale has a tool override. Falls back to the static slug manifest when the loaded data covers a different locale. */
export function hasToolOverride(
  toolId: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): boolean {
  if (locale === 'en') return true;
  if (locale === data.code) return Boolean(data.toolOverrides[toolId]);
  return Boolean(SLUG_MANIFEST[locale]?.tools[toolId]);
}

export function getLocalizedTool(
  tool: ToolDefinition,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolDefinition {
  if (locale === 'en' || locale !== data.code) return tool;
  const override = data.toolOverrides[tool.id];
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

export function getLocalizedTools(
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolDefinition[] {
  return TOOLS_REGISTRY.map((tool) => getLocalizedTool(tool, locale, data));
}

/** Resolve a tool by its slug in the given locale (localized or English slug). */
export function getToolByLocalizedSlug(
  slug: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolDefinition | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== 'en' && locale === data.code) {
    const entry = Object.entries(data.toolOverrides).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = TOOL_BY_ID.get(entry[0]);
      if (base) return getLocalizedTool(base, locale, data);
    }
  }
  return getToolBySlug(normalized);
}

/** Localized search over tool names, descriptions, slugs and keywords. */
export function searchToolsLocalized(
  query: string,
  locale: LocaleCode,
  categoryId?: CategoryId | 'all',
  data: LocaleData = getActiveLocaleData()
): ToolDefinition[] {
  const trimmed = query.trim().toLowerCase();
  const tools = getLocalizedTools(locale, data).filter(
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

/** True when the locale has a category override. Falls back to the static slug manifest when the loaded data covers a different locale. */
export function hasCategoryOverride(
  categoryId: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): boolean {
  if (locale === 'en') return true;
  if (locale === data.code) return Boolean(data.categoryOverrides[categoryId]);
  return Boolean(SLUG_MANIFEST[locale]?.categories[categoryId]);
}

export function getLocalizedCategory(
  category: ToolCategory | CategoryId,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolCategory | undefined {
  const base =
    typeof category === 'string' ? getCategoryById(category) : category;
  if (!base) return undefined;
  if (locale === 'en' || locale !== data.code) return base;
  const override = data.categoryOverrides[base.id];
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

export function getLocalizedCategories(
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolCategory[] {
  return CATEGORIES.map((category) => getLocalizedCategory(category, locale, data)).filter(
    (category): category is ToolCategory => category !== undefined
  );
}

/** Resolve a category by its slug in the given locale (localized or English slug). */
export function getCategoryByLocalizedSlug(
  slug: string,
  locale: LocaleCode,
  data: LocaleData = getActiveLocaleData()
): ToolCategory | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (locale !== 'en' && locale === data.code) {
    const entry = Object.entries(data.categoryOverrides).find(
      ([, override]) => override.slug.toLowerCase() === normalized
    );
    if (entry) {
      const base = getCategoryById(entry[0] as CategoryId);
      if (base) return getLocalizedCategory(base, locale, data);
    }
  }
  return CATEGORIES.find((category) => category.slug.toLowerCase() === normalized);
}
