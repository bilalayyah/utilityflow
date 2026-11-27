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
    intro:
      'Choose a tool below, paste or type your text, and the result appears right away. There is nothing to install and nothing to upload — your drafts stay on your device, because every tool runs entirely in your browser.',
    faqs: [
      {
        question: 'Are the text and writing tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Does my text leave my browser?',
        answer:
          'No. Every tool runs 100% in your browser, so the text you paste or type is never uploaded to a server or stored anywhere.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No. You can open any tool and start using it right away — no account, no email, and no installation.',
      },
      {
        question: 'Which tool should I use to count the words in my text?',
        answer:
          'Use the Word Counter. Paste your text into it and it shows the word and character count instantly.',
      },
    ],
    batch: 1,
    plannedToolCount: 18,
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
    intro:
      'Pick the tool you need, paste your code or data, and inspect the result instantly. Everything is processed on your own device, so tokens, payloads, and config snippets never leave your machine.',
    faqs: [
      {
        question: 'Are the developer tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Can I safely paste a token or API key into these tools?',
        answer:
          'Yes. Tools such as the JWT decoder and the Base64 encoder run entirely in your browser, so the text you paste is never sent to a server.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No. You can open any tool and start using it right away — no account, no email, and no installation.',
      },
      {
        question: 'Which tool should I use to check if my JSON is valid?',
        answer:
          'Use any JSON formatter. Paste your JSON into it and it will format the code and show any errors.',
      },
    ],
    batch: 2,
    plannedToolCount: 15,
    iconName: 'Code2',
    seo: {
      title: 'Developer Tools – JSON, Regex & Encoding | UtilityFlow',
      description:
        'Client-side developer utilities for formatting JSON, testing regex, encoding Base64 and URLs, inspecting JWTs, and generating UUIDs safely.',
      keywords: [
        'developer tools',
        'base64 encoder',
        'regex tester',
        'jwt decoder',
      ],
    },
    sampleToolNames: [
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
    intro:
      'Select a calculator, enter your numbers, and the result updates instantly as you change the inputs. No sign-up is needed, and nothing you enter is sent anywhere — every calculation happens in your browser.',
    faqs: [
      {
        question: 'Are the calculators free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Does the data I enter leave my browser?',
        answer:
          'No. Every calculation runs 100% in your browser, so the numbers you enter are never uploaded to a server or stored anywhere.',
      },
      {
        question: 'Do the calculators work on mobile?',
        answer:
          'Yes. They work in any modern browser, so you can use them on your phone, tablet, or computer.',
      },
      {
        question: 'Which calculator should I use for a monthly loan payment?',
        answer:
          'Use the Loan & EMI Calculator. Enter the loan amount, interest rate, and duration to see the monthly payment and a full repayment schedule.',
      },
    ],
    batch: 3,
    plannedToolCount: 16,
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
    intro:
      'Open a tool below, enter your link or text, and copy the result straight into your post or campaign. Everything runs in your browser, so your links and captions are never uploaded to a server.',
    faqs: [
      {
        question: 'Are the social media tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Is anything I enter uploaded to a server?',
        answer:
          'No. Every tool runs 100% in your browser, so your links, captions, and text never leave your device.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No. You can open any tool and start using it right away — no account, no email, and no installation.',
      },
      {
        question: 'Which tool creates a QR code for my link?',
        answer:
          'Use the QR Code Generator. Enter your link and it creates a scannable QR code you can download and share.',
      },
    ],
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
    intro:
      'Choose a tool, select your PDF file, and the result is ready in your browser within moments. Your documents never leave your device — they are processed locally, not uploaded to any server.',
    faqs: [
      {
        question: 'Are the PDF tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Are my PDF files uploaded anywhere?',
        answer:
          'No. Your files are processed directly in your browser, so they never leave your device and are never stored on a server.',
      },
      {
        question: 'Do the PDF tools work on mobile?',
        answer:
          'Yes. They work in any modern browser, so you can use them on your phone, tablet, or computer.',
      },
      {
        question: 'Which tool combines several PDF files into one?',
        answer:
          'Use Merge PDF. Select the files you want to combine and it joins them into a single PDF document.',
      },
    ],
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
    intro:
      'Pick a tool, enter your page title, URL, or content, and check the result instantly. All checks run in your browser, so your unpublished pages and drafts stay private.',
    faqs: [
      {
        question: 'Are the SEO tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Does my content leave my browser?',
        answer:
          'No. Every tool runs 100% in your browser, so the titles, URLs, and content you enter are never uploaded to a server or stored anywhere.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No. You can open any tool and start using it right away — no account, no email, and no installation.',
      },
      {
        question: 'Which tool previews how my page will look in search results?',
        answer:
          'Use the SERP Snippet Preview. Enter your title and description to see how your page may appear in Google search results.',
      },
    ],
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
    intro:
      'Select a tool below, choose your file, and get your result right away. Your images and files never leave your device — everything is processed locally in your browser.',
    faqs: [
      {
        question: 'Are the image and file tools free?',
        answer:
          'Yes, all of them are free to use, with no sign-up and no account needed.',
      },
      {
        question: 'Are my images uploaded to a server?',
        answer:
          'No. Your files are processed directly in your browser, so they never leave your device and are never stored on a server.',
      },
      {
        question: 'Do the tools work on mobile?',
        answer:
          'Yes. They work in any modern browser, so you can use them on your phone, tablet, or computer.',
      },
      {
        question: 'Which tool should I use to make an image file smaller?',
        answer:
          'Use the Image Compressor. Choose your image and it reduces the file size while keeping it ready for the web.',
      },
    ],
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
