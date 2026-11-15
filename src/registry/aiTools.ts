import { lazy } from 'react';
import type { ToolDefinition } from '../types/tool';

const AiWritingAssistantTool = lazy(
  () => import('../tools/ai/AiWritingAssistantTool')
);

const AiTextSummarizerTool = lazy(
  () => import('../tools/ai/AiTextSummarizerTool')
);

const AiToolFinderTool = lazy(
  () => import('../tools/ai/AiToolFinderTool')
);

export const AI_WRITING_ASSISTANT_TOOL: ToolDefinition = {
  id: 'ai-writing-assistant',
  slug: 'ai-writing-assistant',
  name: 'AI Writing Assistant',
  shortDescription:
    'Fix grammar, rewrite sentences, adjust tone, paraphrase, expand ideas, and draft clear emails free with zero sign-up.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Free allowance: up to 5 writing requests per day per visitor (12,000 characters max), powered by Groq free-tier inference without storing your text.',
  popular: true,
  featured: true,
  keywords: [
    'ai writing assistant',
    'free grammar checker',
    'sentence rewriter',
    'text paraphraser',
    'tone converter',
    'email writing assistant',
    'spelling correction',
    'sentence simplifier',
  ],
  seo: {
    title: 'AI Writing Assistant – Grammar & Rewriter | UtilityFlow',
    description:
      'Fix grammar, rewrite sentences, adjust tone, simplify or expand paragraphs, paraphrase text, and write clear emails free — no sign-up or account required.',
    primaryKeyword: 'ai writing assistant',
    secondaryKeywords: [
      'free grammar checker ai',
      'ai sentence rewriter',
      'ai text paraphraser',
      'ai email writing assistant',
    ],
    longTailKeywords: [
      'free ai writing assistant without login',
      'make text more professional ai tool',
      'rewrite paragraph preserve meaning free',
      'fix grammar and spelling online free',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Refine drafts cleanly in seconds without creating an account. Choose from 10 writing tasks—including grammar correction, paraphrasing, tone shifting, sentence simplification, and email drafting—while strictly preserving your original meaning and facts.',
  relatedToolSlugs: [
    'ai-text-summarizer',
    'word-counter',
    'readability-checker',
    'text-diff-checker',
  ],
  component: AiWritingAssistantTool,
};

export const AI_TEXT_SUMMARIZER_TOOL: ToolDefinition = {
  id: 'ai-text-summarizer',
  slug: 'ai-text-summarizer',
  name: 'AI Text Summarizer',
  shortDescription:
    'Condense articles, reports, and notes into short, medium, or long summaries with bullet points and key takeaways free.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Free allowance: up to 5 summaries per day per visitor (up to 25,000 characters per request), powered by Groq free-tier inference without storing your text.',
  popular: true,
  featured: true,
  keywords: [
    'ai text summarizer',
    'free article summarizer',
    'bullet point summary',
    'key points extractor',
    'paragraph summarizer',
    'simple language summary',
    'reading time calculator',
    'summarize long text online',
    'ai summary generator free',
  ],
  seo: {
    title: 'AI Text Summarizer – Short & Long Summaries | UtilityFlow',
    description:
      'Summarize long articles, research notes, and reports into short paragraphs, bullet points, or key takeaways — free, fast, and with no sign-up required.',
    primaryKeyword: 'ai text summarizer',
    secondaryKeywords: [
      'free article summarizer',
      'bullet point text summarizer',
      'extract key points ai',
      'paragraph summary generator',
    ],
    longTailKeywords: [
      'free ai text summarizer without login',
      'summarize long article preserve numbers and facts',
      'short medium long text summarizer online',
      'summarize research paper into bullet points',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Distill long articles, reports, essays, and meeting transcripts into crisp summaries without creating an account. Choose Short (10–20%), Medium (30–40%), or Long (50–60%) lengths across paragraph, bullet-point, key-points, and plain-language formats while preserving names, numbers, and dates.',
  relatedToolSlugs: [
    'ai-writing-assistant',
    'word-counter',
    'readability-checker',
    'keyword-density-checker',
  ],
  component: AiTextSummarizerTool,
};

export const AI_TOOL_FINDER_TOOL: ToolDefinition = {
  id: 'ai-tool-finder',
  slug: 'ai-tool-finder',
  name: 'AI Smart Tool Finder',
  shortDescription:
    'Describe your task in plain English—with typos or natural phrasing—to find the best matching UtilityFlow tool instantly.',
  categoryId: 'text-writing',
  batch: 1,
  processingMode: 'api',
  requiresExternalApi: true,
  apiNotice:
    '100% free with no login, subscription, or credits. Searches our verified inventory of 85 browser tools + 3 AI tools (up to 10 AI searches/day + unlimited instant keyword matching).',
  popular: true,
  featured: true,
  keywords: [
    'ai tool finder',
    'smart tool search',
    'find utility tool',
    'recommend online tool',
    'natural language tool search',
    'find free tool online',
    'utility tool recommender',
    'search tools by task',
  ],
  seo: {
    title: 'AI Smart Tool Finder – Find the Right Tool | UtilityFlow',
    description:
      'Describe what you need in plain language to discover the right browser or AI utility across UtilityFlow’s 88 tools — fast, free, and without fabricated links.',
    primaryKeyword: 'ai smart tool finder',
    secondaryKeywords: [
      'online tool finder',
      'find right utility tool',
      'ai tool recommender',
      'utilityflow tool search',
    ],
    longTailKeywords: [
      'find free online tool for my task',
      'search utility tools by plain language problem',
      'ai tool discovery without login',
      'which online tool do i need for pdf',
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Not sure which tool handles your task? Describe your goal in plain English—even with spelling mistakes or informal wording—and our hybrid keyword + Groq AI matcher recommends verified tools from UtilityFlow’s live catalog with clear justifications.',
  relatedToolSlugs: [
    'ai-writing-assistant',
    'ai-text-summarizer',
    'image-compressor',
    'pdf-to-images',
  ],
  component: AiToolFinderTool,
};

export const AI_TOOLS: ToolDefinition[] = [
  AI_WRITING_ASSISTANT_TOOL,
  AI_TEXT_SUMMARIZER_TOOL,
  AI_TOOL_FINDER_TOOL,
];
