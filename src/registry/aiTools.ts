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
    title: 'Free AI Writing Assistant – Grammar, Rewriter & Tone Tool | UtilityFlow',
    description:
      'Fix grammar, rewrite sentences, adjust tone, simplify or expand paragraphs, paraphrase text, and write emails free with no sign-up required.',
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
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Refine drafts cleanly in seconds without creating an account. Choose from 10 writing tasks—including grammar correction, paraphrasing, tone shifting, sentence simplification, and email drafting—while strictly preserving your original meaning and facts.',
  instructions: [
    {
      title: 'Paste or write your text',
      description:
        'Enter up to 12,000 characters into the editor. Use the live word and character counters to verify draft length before generating.',
    },
    {
      title: 'Pick a writing task, tone, and language',
      description:
        'Select one of 10 writing tasks (such as Fix Grammar, Make Professional, Paraphrase, or Write an Email), match a tone from Professional to Simple, and pick your target output language.',
    },
    {
      title: 'Review and compare original vs. improved text',
      description:
        'Click Generate to process your request, inspect side-by-side or word-level changes, then copy the result or download it as a TXT file.',
    },
  ],
  examples: [
    {
      title: 'Grammar & Spelling Cleanup',
      input:
        'Hi team, i wanted to folow up on yesterday meeting and share the update timeline for Q4 launch.',
      output:
        'Hi team, I wanted to follow up on yesterday’s meeting and share the updated timeline for the Q4 launch.',
      explanation:
        'Task: Fix Grammar · Tone: Professional. Fixes capitalization, verb agreement, and spelling while keeping your exact voice.',
    },
    {
      title: 'Rough Notes into Ready Email',
      input:
        'ask client sarah if thursday 2pm works for design review call, mention mockup v2 ready and link attached',
      output:
        'Subject: Design Review Call & Mockup v2\n\nHi Sarah,\n\nI wanted to let you know that Mockup v2 is ready and attached for your review. Would Thursday at 2:00 PM work for a quick design review call?\n\nBest regards,',
      explanation:
        'Task: Write an Email · Tone: Friendly. Structures bulleted notes into a polite, factual email without inventing details.',
    },
  ],
  benefits: [
    '100% free access with zero sign-up, login, or subscription paywalls',
    '10 specialized writing modes plus 7 tone presets and multi-language output',
    'Preserves names, numbers, dates, and meaning without fabricating facts',
    'Side-by-side comparison and highlighted word-level change tracking',
    'One-click Copy and TXT file export in both Light and Dark Mode',
  ],
  useCases: [
    'Polishing client emails, proposals, and status updates before sending',
    'Fixing grammar, punctuation, and spelling mistakes in essays or reports',
    'Simplifying dense technical paragraphs for broader audiences',
    'Converting casual chat drafts into formal workplace communication',
  ],
  faqs: [
    {
      question: 'Is the AI Writing Assistant completely free without signing up?',
      answer:
        'Yes. You do not need to create an account, enter an email address, or add a payment card. Visitors receive up to 5 free writing requests per UTC day.',
    },
    {
      question: 'Does the AI invent new facts when rewriting or expanding text?',
      answer:
        'No. Our system prompt instructs the model to preserve all original facts, names, dates, and numbers strictly and avoid fabricating statistics or claims.',
    },
    {
      question: 'Is my writing stored or logged by UtilityFlow?',
      answer:
        'UtilityFlow does not store, log, or sell your text. Requests are sent securely through our backend to Groq for inference, and visitor quota tracking uses only a daily salted SHA-256 hash.',
    },
    {
      question: 'What happens if I hit the daily free request limit?',
      answer:
        'Daily limits reset automatically at UTC midnight. In the meantime, all 85+ local browser utilities—including Word Counter, Readability Checker, and Text Diff Checker—work with no limits.',
    },
  ],
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
  ],
  seo: {
    title: 'Free AI Text Summarizer – Short, Medium & Long Summaries | UtilityFlow',
    description:
      'Summarize long articles, research notes, and reports into paragraphs, bullet points, or key takeaways free without signing up.',
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
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Distill long articles, reports, essays, and meeting transcripts into crisp summaries without creating an account. Choose Short (10–20%), Medium (30–40%), or Long (50–60%) lengths across paragraph, bullet-point, key-points, and plain-language formats while preserving names, numbers, and dates.',
  instructions: [
    {
      title: 'Paste or type your source text',
      description:
        'Enter at least 25 words (120+ characters) up to 25,000 characters. Check the live word count and estimated reading time below the editor.',
    },
    {
      title: 'Pick summary length, format, and language',
      description:
        'Select Short, Medium, or Long (Detailed) compression, pick Paragraph, Bullet Points, Key Points, or Simple Language formatting, and choose an output language.',
    },
    {
      title: 'Compare reading time and export',
      description:
        'Click Summarize Text to view reading time saved, compare the summary alongside the original text, and copy or download the summary as TXT.',
    },
  ],
  examples: [
    {
      title: 'Bullet Point Executive Digest',
      input:
        'A 160-word engineering study comparing twice-weekly written updates against daily meetings across 140 engineers.',
      output:
        '- Study of 140 engineers across London, Berlin, and Toronto over six months.\n- Replacing three weekly syncs with twice-weekly digests cut calendar fragmentation by 28% and boosted sprint delivery by 14%.\n- Success relied on upfront blockers, PR links, and exact dates.',
      explanation:
        'Length: Short · Format: Bullet Point Summary. Preserves sample size, locations, and exact percentages.',
    },
  ],
  benefits: [
    'Free anonymous access with zero accounts, subscriptions, or credits',
    'Short (10–20%), Medium (30–40%), and Long (50–60%) summary controls',
    'Paragraph, Bullet Point, Key Points Extraction, and Simple Language modes',
    'Preserves names, statistics, dates, and facts without hallucinating details',
    'Instant reading-time comparison, Copy button, and TXT file download',
  ],
  useCases: [
    'Turning long articles or research briefs into quick bulleted notes',
    'Summarizing meeting transcripts and extracting numbered action points',
    'Translating and condensing multi-paragraph documents into clear takeaways',
    'Estimating reading time savings before sharing executive digests',
  ],
  faqs: [
    {
      question: 'Why does the AI Text Summarizer require at least 25 words?',
      answer:
        'Texts under 25 words or 120 characters are too brief to compress meaningfully without losing essential context, so the tool prompts you to add more source text first.',
    },
    {
      question: 'Does the summarizer change names, numbers, or dates?',
      answer:
        'No. Our summarization instructions strictly require keeping original figures, dates, names, and factual relationships intact without adding external claims.',
    },
    {
      question: 'How is estimated reading time calculated?',
      answer:
        'Estimated reading time uses an average silent reading speed of 200 words per minute for both your original text and the generated summary so you can see time saved at a glance.',
    },
    {
      question: 'Is there any limit or charge for using the AI Text Summarizer?',
      answer:
        'The tool is completely free with no billing or sign-up. Visitors receive up to 5 free summaries per UTC day, and all 85 local browser tools remain unlimited.',
    },
  ],
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
    '100% free with no login, subscription, or credits. Searches our verified inventory of 85 browser tools + 2 AI tools (up to 10 AI searches/day + unlimited instant keyword matching).',
  popular: true,
  featured: true,
  keywords: [
    'ai tool finder',
    'smart tool search',
    'find utility tool',
    'recommend online tool',
    'natural language tool search',
  ],
  seo: {
    title: 'AI Smart Tool Finder – Find the Right Utility Tool | UtilityFlow',
    description:
      'Describe what you need in plain language to discover the right browser or AI utility across UtilityFlow’s 88 live tools—fast, free, and without fabricated links.',
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
    ],
    schemaApplicationCategory: 'UtilitiesApplication',
  },
  intro:
    'Not sure which tool handles your task? Describe your goal in plain English—even with spelling mistakes or informal wording—and our hybrid keyword + Groq AI matcher recommends verified tools from UtilityFlow’s live catalog with clear justifications.',
  instructions: [
    {
      title: 'Describe your task or select a quick prompt',
      description:
        'Type a plain-language request such as "I want to reduce my image size to 100KB" or "convert PDF into PNG", or click any quick task preset.',
    },
    {
      title: 'Filter by category if needed',
      description:
        'Narrow recommendations to Text & Writing, Developer, Calculators, Social Media, PDF, SEO, or Image & File tools—or search across all 87 tools at once.',
    },
    {
      title: 'Inspect justifications and open the verified tool',
      description:
        'Review why the top recommendation and alternatives match your goal, check supported formats, and click Open Tool to launch immediately.',
    },
  ],
  examples: [
    {
      title: 'Compressing an Image to 100KB',
      input: 'I want to reduce my image size to 100KB.',
      output: 'Recommended: Image Compressor (/image-compressor/)',
      explanation:
        'Matches the client-side Image Compressor and suggests Image Resizer & Cropper or Image Format Converter as alternatives.',
    },
    {
      title: 'Honest No-Match Handling',
      input: 'I need to convert a PDF to Word.',
      output: 'No exact PDF-to-DOCX converter available; notes PDF Text Extractor for raw text.',
      explanation:
        'Never invents missing tools or pretends a tool supports formats it does not.',
    },
  ],
  benefits: [
    'Free natural-language search across all 85 browser tools and 2 AI tools',
    'Instant local typo-tolerant keyword matching plus Groq AI semantic ranking',
    'Strict inventory verification guarantees zero fabricated tools or broken links',
    'Shows clear one-sentence justification and up to 3 alternatives',
  ],
  useCases: [
    'Finding the right PDF, image, or text utility without browsing every category',
    'Matching plain-English goals to exact browser tools with supported formats',
    'Checking honestly whether UtilityFlow currently supports a specialized file format',
  ],
  faqs: [
    {
      question: 'Does the AI Smart Tool Finder ever recommend tools that do not exist?',
      answer:
        'No. Every recommendation returned by AI is strictly checked against our live tool registry before display. If no matching tool exists, the finder tells you honestly.',
    },
    {
      question: 'What happens if I make spelling mistakes in my search?',
      answer:
        'Our local keyword ranker includes edit-distance typo tolerance and task synonyms, and the Groq AI ranker interprets natural phrasing and misspellings automatically.',
    },
    {
      question: 'How many searches can I run for free?',
      answer:
        'Instant local keyword matching is unlimited, and visitors receive up to 10 free AI-assisted searches per UTC day with zero sign-up or payment required.',
    },
  ],
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
