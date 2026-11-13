import type { CategoryId, ToolDefinition } from '../types/tool';
import { AI_TOOLS } from './aiTools';
import { BATCH_1_TEXT_TOOLS } from './batches/batch1TextTools';
import { BATCH_2_DEVELOPER_TOOLS } from './batches/batch2DeveloperTools';
import { BATCH_3_CALCULATORS } from './batches/batch3Calculators';
import { BATCH_4_SOCIAL_TOOLS } from './batches/batch4SocialTools';
import { BATCH_5_PDF_TOOLS } from './batches/batch5PdfTools';
import { BATCH_6_SEO_TOOLS } from './batches/batch6SeoTools';
import { BATCH_7_IMAGE_FILE_TOOLS } from './batches/batch7ImageFileTools';

/**
 * Central Tool Registry.
 * Combines all 85 local browser tools across 7 batches plus free AI utilities.
 */
export const TOOLS_REGISTRY: ToolDefinition[] = [
  ...BATCH_1_TEXT_TOOLS,
  ...BATCH_2_DEVELOPER_TOOLS,
  ...BATCH_3_CALCULATORS,
  ...BATCH_4_SOCIAL_TOOLS,
  ...BATCH_5_PDF_TOOLS,
  ...BATCH_6_SEO_TOOLS,
  ...BATCH_7_IMAGE_FILE_TOOLS,
  ...AI_TOOLS,
];

export function getAllTools(): ToolDefinition[] {
  return TOOLS_REGISTRY;
}

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').toLowerCase();
  return TOOLS_REGISTRY.find((tool) => tool.slug.toLowerCase() === normalized);
}

export function getToolsByCategory(categoryId: CategoryId): ToolDefinition[] {
  return TOOLS_REGISTRY.filter((tool) => tool.categoryId === categoryId);
}

export function getPopularTools(limit = 8): ToolDefinition[] {
  const popular = TOOLS_REGISTRY.filter((tool) => tool.popular);
  const pool = popular.length > 0 ? popular : TOOLS_REGISTRY;

  // Distribute popular tools evenly across active categories via round-robin
  const byCategory = new Map<CategoryId, ToolDefinition[]>();
  for (const tool of pool) {
    const list = byCategory.get(tool.categoryId) || [];
    list.push(tool);
    byCategory.set(tool.categoryId, list);
  }

  const result: ToolDefinition[] = [];
  const queues = Array.from(byCategory.values());
  let index = 0;

  while (result.length < limit) {
    let addedInRound = false;
    for (const queue of queues) {
      if (index < queue.length) {
        result.push(queue[index]);
        addedInRound = true;
        if (result.length >= limit) break;
      }
    }
    if (!addedInRound) break;
    index += 1;
  }

  return result;
}

export function getRelatedTools(tool: ToolDefinition, limit = 4): ToolDefinition[] {
  const explicitMatches = tool.relatedToolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((item): item is ToolDefinition => Boolean(item && item.slug !== tool.slug));

  if (explicitMatches.length >= limit) {
    return explicitMatches.slice(0, limit);
  }

  const sameCategoryFallback = TOOLS_REGISTRY.filter(
    (item) =>
      item.slug !== tool.slug &&
      item.categoryId === tool.categoryId &&
      !explicitMatches.some((existing) => existing.slug === item.slug)
  );

  return [...explicitMatches, ...sameCategoryFallback].slice(0, limit);
}

export function searchTools(query: string, categoryId?: CategoryId | 'all'): ToolDefinition[] {
  const trimmed = query.trim().toLowerCase();
  return TOOLS_REGISTRY.filter((tool) => {
    if (categoryId && categoryId !== 'all' && tool.categoryId !== categoryId) {
      return false;
    }
    if (!trimmed) return true;
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
