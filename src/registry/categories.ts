import type { CategoryId, ToolCategory } from '../types/tool';

export const CATEGORIES: ToolCategory[] = [
  {
    id: 'text-writing',
    slug: 'text-writing-tools',
    name: 'Text & Writing Tools',
    shortName: 'Text & Writing',
    description:
      'Analyze word counts, format copy, clean whitespace, convert case, and inspect readability directly in your browser.',
    longDescription:
      'Precision writing and string manipulation utilities designed for writers, editors, content teams, and students. Every text operation runs instantaneously on your device without uploading drafts to remote servers.',
    batch: 1,
    plannedToolCount: 15,
    iconName: 'FileText',
    seo: {
      title: 'Text & Writing Tools – Word & String Utilities | UtilityFlow',
      description:
        'Explore browser-based text and writing tools including word counters, case converters, line sorters, and text cleaners with instant local processing.',
      keywords: [
        'text tools',
        'writing utilities',
        'word counter',
        'character counter',
        'case converter',
      ],
    },
    sampleToolNames: [
      'Word Counter',
      'Character Counter',
      'Case Converter',
      'Remove Duplicate Lines',
      'Text Diff Checker',
    ],
  },
  {
    id: 'developer',
    slug: 'developer-tools',
    name: 'Developer Tools',
    shortName: 'Developer',
    description:
      'Format JSON, encode Base64, test regular expressions, decode JWTs, and generate hashes with zero server round-trips.',
    longDescription:
      'Everyday engineering utilities built for fast debugging and clean data transformation. Paste payloads, inspect structured formats, and validate syntax locally so sensitive tokens and config snippets never leave your machine.',
    batch: 2,
    plannedToolCount: 15,
    iconName: 'Code2',
    seo: {
      title: 'Developer Tools – JSON, Regex & Encoding | UtilityFlow',
      description:
        'Client-side developer utilities for formatting JSON, testing regex, encoding Base64 and URLs, inspecting JWTs, and generating UUIDs safely.',
      keywords: [
        'developer tools',
        'json formatter',
        'base64 encoder',
        'regex tester',
        'jwt decoder',
      ],
    },
    sampleToolNames: [
      'JSON Formatter & Validator',
      'Base64 Encoder / Decoder',
      'URL Encoder / Decoder',
      'UUID Generator',
      'Regex Tester',
    ],
  },
  {
    id: 'calculators',
    slug: 'calculators',
    name: 'Calculators',
    shortName: 'Calculators',
    description:
      'Calculate ages, percentages, loan schedules, BMI, unit conversions, and business margins with deterministic precision.',
    longDescription:
      'Accurate financial, date, health, and mathematical calculators engineered for clarity. Review step-by-step breakdowns, clean tabular outputs, and instant recalculations as you adjust inputs.',
    batch: 3,
    plannedToolCount: 15,
    iconName: 'Calculator',
    seo: {
      title: 'Online Calculators – Finance, Date & Math | UtilityFlow',
      description:
        'Use fast, transparent online calculators for age, percentages, loan repayments, margins, and unit conversions with instant results.',
      keywords: [
        'online calculators',
        'age calculator',
        'percentage calculator',
        'loan calculator',
        'unit converter',
      ],
    },
    sampleToolNames: [
      'Age Calculator',
      'Percentage Calculator',
      'Loan & EMI Calculator',
      'Discount & Margin Calculator',
      'Date Difference Calculator',
    ],
  },
  {
    id: 'social-media',
    slug: 'social-media-tools',
    name: 'Social Media Tools',
    shortName: 'Social Media',
    description:
      'Build UTM tracking links, preview post lengths, generate QR codes, and format captions for modern social channels.',
    longDescription:
      'Practical marketing and publishing helpers for creators, growth teams, and community managers. Standardize campaign tracking parameters, check platform character limits, and generate scannable QR codes on demand.',
    batch: 4,
    plannedToolCount: 10,
    iconName: 'Share2',
    seo: {
      title: 'Social Media Tools – QR, UTM & Post Helpers | UtilityFlow',
      description:
        'Create UTM links, generate QR codes, check social character limits, and format hashtags and bios with clean browser-side utilities.',
      keywords: [
        'social media tools',
        'qr code generator',
        'utm builder',
        'hashtag formatter',
        'caption counter',
      ],
    },
    sampleToolNames: [
      'QR Code Generator',
      'UTM Link Builder',
      'Social Character Limit Checker',
      'Fancy Unicode Text Formatter',
      'Bio Line Break Formatter',
    ],
  },
  {
    id: 'pdf',
    slug: 'pdf-tools',
    name: 'PDF Tools',
    shortName: 'PDF Tools',
    description:
      'Merge, split, reorder, watermark, and convert PDF documents inside your browser without uploading private files.',
    longDescription:
      'Document workflows engineered for confidentiality. Process contracts, invoices, and study packets directly in client memory using WebAssembly and browser canvas APIs rather than remote file servers.',
    batch: 5,
    plannedToolCount: 10,
    iconName: 'FileSpreadsheet',
    seo: {
      title: 'PDF Tools – Private Browser-Based Utilities | UtilityFlow',
      description:
        'Merge, split, rotate, and convert PDF files locally in your browser without uploading sensitive documents to third-party servers.',
      keywords: [
        'pdf tools',
        'merge pdf',
        'split pdf',
        'image to pdf',
        'browser pdf editor',
      ],
    },
    sampleToolNames: [
      'Merge PDF',
      'Split PDF',
      'Images to PDF',
      'PDF Page Rotator',
      'PDF Metadata Inspector',
    ],
  },
  {
    id: 'seo',
    slug: 'seo-tools',
    name: 'SEO Tools',
    shortName: 'SEO Tools',
    description:
      'Preview SERP snippets, generate OpenGraph tags, build robots.txt and XML sitemaps, and inspect keyword density.',
    longDescription:
      'Technical and on-page search optimization utilities for publishers, indie founders, and SEO specialists. Validate title lengths, compose structured metadata, and craft clean URL slugs in seconds.',
    batch: 6,
    plannedToolCount: 10,
    iconName: 'SearchCheck',
    seo: {
      title: 'SEO Tools – SERP, Meta & Slug Utilities | UtilityFlow',
      description:
        'Optimize pages with free SEO utilities including SERP snippet previews, meta tag generators, robots.txt builders, and keyword density checkers.',
      keywords: [
        'seo tools',
        'meta tag generator',
        'serp preview',
        'robots.txt generator',
        'slug generator',
      ],
    },
    sampleToolNames: [
      'Meta Tag & OpenGraph Generator',
      'SERP Snippet Preview',
      'URL Slug Generator',
      'Robots.txt Generator',
      'Schema Markup Generator',
    ],
  },
  {
    id: 'image-file',
    slug: 'image-file-tools',
    name: 'Image & File Tools',
    shortName: 'Image & File',
    description:
      'Compress images, resize dimensions, convert PNG/JPG/WebP, test WCAG contrast, scan QR codes, hash files, and build favicons locally.',
    longDescription:
      'Fast media, cryptography, and file utilities powered by HTML5 Canvas, Web Crypto API, and client-side File APIs. Optimize web assets for Core Web Vitals, verify file SHA-256 checksums, extract image palettes, and generate favicons without uploading files.',
    batch: 7,
    plannedToolCount: 10,
    iconName: 'Image',
    seo: {
      title: 'Image & File Tools – Compress, Resize, Convert | UtilityFlow',
      description:
        'Compress, resize, rotate, and convert images between PNG, JPG, and WebP locally, verify file checksums, scan QR codes, check WCAG contrast, and build favicons.',
      keywords: [
        'image tools',
        'image compressor',
        'image resizer',
        'webp converter',
        'color contrast checker',
      ],
    },
    sampleToolNames: [
      'Image Compressor',
      'Image Resizer & Cropper',
      'Image Format Converter',
      'Color Contrast Checker',
      'Cryptographic Password Generator',
    ],
  },
];

export function getCategoryBySlug(slug: string): ToolCategory | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryById(id: CategoryId): ToolCategory | undefined {
  return CATEGORIES.find((category) => category.id === id);
}
