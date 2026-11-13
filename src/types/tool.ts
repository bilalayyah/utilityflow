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
  instructions: ToolStep[];
  examples: ToolExample[];
  benefits: string[];
  useCases: string[];
  faqs: ToolFAQ[];
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
