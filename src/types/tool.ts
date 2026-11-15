import type { ComponentType, LazyExoticComponent } from 'react';

export type CategoryId =
  | 'text-writing'
  | 'developer'
  | 'calculators'
  | 'social-media'
  | 'pdf'
  | 'seo'
  | 'image-file';

export type BatchNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ToolProcessingMode = 'browser' | 'api';

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolStep {
  title: string;
  description: string;
}

export interface ToolExample {
  title: string;
  input: string;
  output: string;
  explanation?: string;
}

export interface ToolSEOConfig {
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  schemaApplicationCategory?: string;
}

/**
 * Below-the-fold guide content for one tool (H-3 page-weight split).
 *
 * The light record (ToolDefinition / ToolLocaleOverride without these
 * fields) ships in the entry + locale chunks on EVERY page; the detail
 * lives in a per-batch detail module and loads only on the tool's own
 * page, after first paint (see src/locales/details.ts). `intro` and
 * `apiNotice` stay light — they render above the fold (header), so
 * loading them late would shift the workspace (CLS).
 */
export interface ToolDetail {
  instructions: ToolStep[];
  examples: ToolExample[];
  benefits: string[];
  useCases: string[];
  faqs: ToolFAQ[];
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categoryId: CategoryId;
  batch: BatchNumber;
  processingMode: ToolProcessingMode;
  requiresExternalApi: boolean;
  apiNotice?: string;
  popular?: boolean;
  featured?: boolean;
  keywords: string[];
  seo: ToolSEOConfig;
  intro: string;
  /** Below-the-fold guide content — absent on light records (see ToolDetail). */
  instructions?: ToolStep[];
  examples?: ToolExample[];
  benefits?: string[];
  useCases?: string[];
  faqs?: ToolFAQ[];
  relatedToolSlugs: string[];
  component: LazyExoticComponent<ComponentType<Record<string, never>>>;
}

export interface CategorySEOConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface ToolCategory {
  id: CategoryId;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  batch: BatchNumber;
  plannedToolCount: number;
  iconName:
    | 'FileText'
    | 'Code2'
    | 'Calculator'
    | 'Share2'
    | 'FileSpreadsheet'
    | 'SearchCheck'
    | 'Image';
  seo: CategorySEOConfig;
  sampleToolNames: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
