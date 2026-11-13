import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const TEXT_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word Counter',
    shortDescription:
      'Count words, characters, sentences, paragraphs, reading time, and top repeated keywords instantly.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'word counter',
      'online word count',
      'count words in text',
      'reading time calculator',
      'sentence counter',
    ],
    seo: {
      title: 'Word Counter – Count Words, Sentences & Reading Time | UtilityFlow',
      description:
        'Count words, characters with and without spaces, sentences, paragraphs, and estimated reading time instantaneously inside your browser.',
      primaryKeyword: 'word counter',
      secondaryKeywords: ['online word counter', 'word count tool', 'reading time estimator'],
      longTailKeywords: [
        'count words and characters online free',
        'estimate speaking and reading time from text',
        'browser word counter without upload',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Measure exact word counts, character totals, sentence density, and estimated reading and speaking durations in real time without uploading your draft to any server.',
    instructions: [
      {
        title: 'Paste or type your draft',
        description:
          'Enter text directly into the editor or click Load sample to inspect how counts update.',
      },
      {
        title: 'Review live structural totals',
        description:
          'Check words, characters with and without spaces, sentences, paragraphs, and estimated reading time in the summary strip.',
      },
      {
        title: 'Inspect repeated terms or export',
        description:
          'Scan the top frequent words panel for unintended repetition, then copy your text or download a .txt backup.',
      },
    ],
    examples: [
      {
        title: 'Blog intro length check',
        input: 'Fast static websites reduce server latency. Readers stay engaged when copy is concise.',
        output: '13 words · 87 characters · 2 sentences · 4s reading time',
        explanation:
          'Ideal for verifying headline and opening paragraph pacing before publishing.',
      },
      {
        title: 'Essay limit verification',
        input: 'Paragraph 1 (240 words)\n\nParagraph 2 (255 words)',
        output: '495 words · 2 paragraphs · 2m 12s reading time',
        explanation: 'Confirms a 500-word scholarship or assignment target with margin to spare.',
      },
    ],
    benefits: [
      'Updates instantaneously on every keystroke in browser memory',
      'Calculates both reading time (225 wpm) and speaking time (130 wpm)',
      'Surfaces your six most frequent words to catch repetitive phrasing',
      'Exports plain-text backups directly as a .txt file',
    ],
    useCases: [
      'Meeting strict word targets for academic essays and grant applications',
      'Timing conference talks, video scripts, and podcast introductions',
      'Auditing article drafts and landing pages for concise structure',
      'Checking newsletter copy length before scheduling campaigns',
    ],
    faqs: [
      {
        question: 'How does the Word Counter calculate reading and speaking time?',
        answer:
          'Reading time uses an average adult silent reading pace of 225 words per minute, while speaking time uses a conversational presentation pace of 130 words per minute.',
      },
      {
        question: 'Are hyphenated words counted as one word or two?',
        answer:
          'Standard whitespace-delimited tokens are counted as single words, matching the behavior of most desktop word processors.',
      },
      {
        question: 'Is my writing saved or sent anywhere?',
        answer:
          'No. All counting runs locally inside your browser tab, and your text disappears as soon as you clear or close the page.',
      },
      {
        question: 'What is the difference between Word Counter and Character Counter?',
        answer:
          'Word Counter focuses on word totals, paragraphs, speaking duration, and top repeated words, whereas Character Counter breaks down UTF-8 byte sizes and social/SEO character limits.',
      },
    ],
    relatedToolSlugs: [
      'character-counter',
      'readability-checker',
      'word-frequency-counter',
      'case-converter',
    ],
    component: lazy(() => import('../../../tools/text/WordCounterTool')),
  },
  {
    id: 'character-counter',
    slug: 'character-counter',
    name: 'Character Counter',
    shortDescription:
      'Measure exact character length with and without spaces, UTF-8 bytes, and social/SEO character limits.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'character counter',
      'letter counter',
      'meta description length checker',
      'utf8 byte counter',
      'character limit tool',
    ],
    seo: {
      title: 'Character Counter – Check Character Limits & Byte Size | UtilityFlow',
      description:
        'Count characters with and without spaces, letters, digits, and UTF-8 bytes while tracking live progress against SEO and social media limits.',
      primaryKeyword: 'character counter',
      secondaryKeywords: ['character count online', 'string length calculator', 'meta title length'],
      longTailKeywords: [
        'count characters without spaces online',
        'check seo meta description character limit',
        'calculate utf8 byte length of text',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Track exact character counts, letters, numeric digits, whitespace, and UTF-8 byte sizes while monitoring live progress bars for SEO snippets, SMS segments, and social feeds.',
    instructions: [
      {
        title: 'Enter or paste your copy',
        description:
          'Type a meta title, social caption, SMS alert, or form field string into the text box.',
      },
      {
        title: 'Inspect character and byte metrics',
        description:
          'Compare total characters with spaces, characters excluding spaces, letters, digits, and UTF-8 byte weight.',
      },
      {
        title: 'Verify platform thresholds',
        description:
          'Review the live progress meters to confirm your copy fits within SEO, SMS, X, Instagram, or LinkedIn limits.',
      },
    ],
    examples: [
      {
        title: 'Meta title check',
        input: 'Word Counter – Count Words, Sentences & Reading Time',
        output: '51 / 60 characters (9 remaining)',
        explanation: 'Fits comfortably under the typical 60-character search engine title display window.',
      },
      {
        title: 'Multi-byte emoji byte check',
        input: 'Launch day 🚀',
        output: '13 UTF-16 code units · 15 UTF-8 bytes',
        explanation: 'Shows exact byte size differences when non-ASCII characters are included.',
      },
    ],
    benefits: [
      'Tracks both characters with spaces and non-whitespace character count',
      'Measures exact UTF-8 byte length for database column and API payload limits',
      'Includes visual limit indicators for SEO tags, SMS, X, Instagram, and LinkedIn',
      'Zero server uploads or character logging',
    ],
    useCases: [
      'Writing search engine title tags and meta descriptions without truncation',
      'Drafting SMS notifications within single-segment 160-character limits',
      'Validating database VARCHAR field length in UTF-8 bytes',
      'Crafting crisp social media captions before the fold',
    ],
    faqs: [
      {
        question: 'Why are UTF-8 bytes sometimes higher than the character count?',
        answer:
          'Standard English ASCII characters take 1 byte each in UTF-8, while accented characters, non-Latin scripts, and emojis require 2 to 4 bytes per character.',
      },
      {
        question: 'Does the character counter include line breaks?',
        answer:
          'Yes. Newline characters are counted in the "With Spaces" metric and excluded from the "Without Spaces" metric.',
      },
      {
        question: 'What happens if I exceed a platform limit bar?',
        answer:
          'The progress indicator turns red and displays the exact number of characters over the limit so you know how much to trim.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'text-to-slug',
      'whitespace-remover',
      'case-converter',
    ],
    component: lazy(() => import('../../../tools/text/CharacterCounterTool')),
  },
  {
    id: 'case-converter',
    slug: 'case-converter',
    name: 'Case Converter',
    shortDescription:
      'Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'case converter',
      'title case converter',
      'uppercase to lowercase',
      'camelCase converter',
      'snake case generator',
    ],
    seo: {
      title: 'Case Converter – Title Case, Sentence, camelCase & More | UtilityFlow',
      description:
        'Transform text between uppercase, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, and kebab-case in one click.',
      primaryKeyword: 'case converter',
      secondaryKeywords: ['title case converter', 'sentence case tool', 'change text case'],
      longTailKeywords: [
        'convert all caps text to sentence case',
        'convert string to camelCase and snake_case',
        'online title case capitalization tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Fix accidental Caps Lock text, standardize article headlines in Title Case, or format variable identifiers into camelCase, PascalCase, snake_case, or kebab-case with a single click.',
    instructions: [
      {
        title: 'Paste or type your text',
        description:
          'Insert headings, paragraphs, or identifier strings into the editor.',
      },
      {
        title: 'Choose a casing style',
        description:
          'Click any transformation button—such as Title Case, Sentence case, camelCase, or snake_case—to update the text immediately.',
      },
      {
        title: 'Copy the formatted output',
        description:
          'Use the Copy result button to transfer the converted text to your clipboard.',
      },
    ],
    examples: [
      {
        title: 'Fixing accidental all-caps prose',
        input: 'THIS REPORT SUMMARIZES Q4 RESULTS. ALL METRICS ARE FINAL.',
        output: 'This report summarizes q4 results. All metrics are final.',
        explanation: 'Sentence case lowers all letters and capitalizes the start of each sentence.',
      },
      {
        title: 'Formatting code identifiers',
        input: 'user account billing status',
        output: 'userAccountBillingStatus (camelCase) / user_account_billing_status (snake_case)',
        explanation: 'Converts plain English labels directly into standard programming conventions.',
      },
    ],
    benefits: [
      'Supports 10 prose and developer casing formats in one workspace',
      'Smart Title Case keeps minor prepositions and conjunctions lowercase',
      'Handles multi-sentence paragraphs and line breaks cleanly',
      'Runs locally in your browser with instant one-click copy',
    ],
    useCases: [
      'Converting accidentally typed ALL CAPS emails back to Sentence case',
      'Formatting blog headlines and YouTube titles consistently',
      'Renaming database columns, CSS classes, or JavaScript variables',
      'Normalizing spreadsheet headers before importing CSV files',
    ],
    faqs: [
      {
        question: 'How does Title Case handle short words like "and" or "of"?',
        answer:
          'The Title Case formatter capitalizes the first and last words of the title while keeping standard minor articles, conjunctions, and short prepositions (such as a, an, and, of, in, to) lowercase.',
      },
      {
        question: 'Can I convert an existing snake_case or camelCase identifier to another format?',
        answer:
          'Yes. Word boundaries at underscores, hyphens, and camelCase transitions are split automatically before applying the new casing rule.',
      },
      {
        question: 'Does Sentence case preserve multiple paragraphs?',
        answer:
          'Yes. Capitalization resets at the beginning of the text, after sentence-ending punctuation, and at the start of new lines.',
      },
    ],
    relatedToolSlugs: [
      'text-to-slug',
      'whitespace-remover',
      'word-counter',
      'find-and-replace',
    ],
    component: lazy(() => import('../../../tools/text/CaseConverterTool')),
  },
  {
    id: 'remove-duplicate-lines',
    slug: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    shortDescription:
      'Deduplicate lists and logs with options for case sensitivity, whitespace trimming, and alphabetical sorting.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'remove duplicate lines',
      'deduplicate list online',
      'unique lines filter',
      'remove repeated rows',
    ],
    seo: {
      title: 'Remove Duplicate Lines – Clean & Deduplicate Lists | UtilityFlow',
      description:
        'Remove repeated lines from lists, email exports, URLs, or logs instantly with optional whitespace trimming, case sensitivity, and sorting.',
      primaryKeyword: 'remove duplicate lines',
      secondaryKeywords: ['duplicate line remover', 'dedupe text list', 'unique lines tool'],
      longTailKeywords: [
        'remove duplicate lines keeping original order',
        'deduplicate email list case insensitive',
        'clean repeated rows from text online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Clean up messy lists, exported keywords, email addresses, or server logs by stripping duplicate entries while controlling whitespace trimming, case sensitivity, and output order.',
    instructions: [
      {
        title: 'Paste your line-separated list',
        description:
          'Add any list with one item per line into the Original Lines box.',
      },
      {
        title: 'Configure matching rules',
        description:
          'Toggle Case-sensitive, Trim whitespace, Remove empty lines, or Sort alphabetically depending on how strict your match should be.',
      },
      {
        title: 'Copy unique lines',
        description:
          'Check how many duplicates were removed in the summary header and click Copy to grab the clean list.',
      },
    ],
    examples: [
      {
        title: 'Email list cleanup',
        input: 'alex@example.com\nsam@example.com\nAlex@example.com\n  sam@example.com  ',
        output: 'alex@example.com\nsam@example.com',
        explanation:
          'With whitespace trimming enabled and case sensitivity off, trailing spaces and capitalization variants collapse cleanly.',
      },
    ],
    benefits: [
      'Preserves first-occurrence order by default or sorts alphabetically on demand',
      'Displays exact original line count, unique count, and duplicates removed',
      'Handles large multi-thousand-line lists smoothly in client memory',
      'Keeps private lists and customer exports off third-party servers',
    ],
    useCases: [
      'Deduplicating keyword research exports and URL lists',
      'Cleaning subscriber email lists before importing into a CRM',
      'Removing repeated stack trace or IP entries from log files',
      'Preparing unique tag or SKU lists for spreadsheets',
    ],
    faqs: [
      {
        question: 'Does Remove Duplicate Lines preserve my original order?',
        answer:
          'Yes. By default it keeps the first occurrence of each unique line in its original order. You can enable "Sort alphabetically" whenever you also want A–Z ordering.',
      },
      {
        question: 'How does Trim whitespace affect duplicate detection?',
        answer:
          'When Trim whitespace is checked, leading and trailing spaces are stripped before checking uniqueness, preventing items like "apple " and "apple" from being treated as different.',
      },
      {
        question: 'What if I want to keep case variations like "USA" and "usa"?',
        answer:
          'Enable the "Case-sensitive" checkbox so lines with different capitalization remain separate entries.',
      },
    ],
    relatedToolSlugs: [
      'sort-lines',
      'whitespace-remover',
      'line-prefix-suffix',
      'find-and-replace',
    ],
    component: lazy(() => import('../../../tools/text/RemoveDuplicateLinesTool')),
  },
  {
    id: 'text-diff-checker',
    slug: 'text-diff-checker',
    name: 'Text Diff Checker',
    shortDescription:
      'Compare two blocks of text line by line to spot additions, deletions, and unchanged lines.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'text diff checker',
      'compare two texts',
      'online diff tool',
      'text comparison',
    ],
    seo: {
      title: 'Text Diff Checker – Compare Two Texts Line by Line | UtilityFlow',
      description:
        'Compare two versions of text, code, or configuration files side by side with clear added and removed line indicators in your browser.',
      primaryKeyword: 'text diff checker',
      secondaryKeywords: ['compare text online', 'diff checker', 'text difference tool'],
      longTailKeywords: [
        'compare two text files line by line online',
        'diff checker ignore whitespace and case',
        'client side text comparison tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Spot every insertion, deletion, and edit between two versions of an article, contract clause, or configuration snippet using a longest-common-subsequence line diff engine.',
    instructions: [
      {
        title: 'Paste both versions',
        description:
          'Put the baseline copy in Original Text and the revised version in Modified Text.',
      },
      {
        title: 'Adjust comparison options',
        description:
          'Enable Ignore whitespace or Ignore case if you want to skip formatting-only changes.',
      },
      {
        title: 'Review highlighted changes',
        description:
          'Scan the Line Comparison pane with + added, - removed, and line-number indicators.',
      },
    ],
    examples: [
      {
        title: 'Config revision check',
        input: 'Original: Cache TTL: 600\nModified: Cache TTL: 1800',
        output: '- Cache TTL: 600\n+ Cache TTL: 1800',
        explanation: 'Clearly isolates the changed line along with old and new line numbers.',
      },
    ],
    benefits: [
      'Uses Longest Common Subsequence (LCS) alignment rather than naive index matching',
      'Pairs color highlighting with + / - symbols for color-blind accessibility',
      'Tracks original and modified line numbers side by side',
      'Keeps confidential drafts and config files strictly in local browser memory',
    ],
    useCases: [
      'Reviewing edits between two revisions of an article or contract',
      'Inspecting changes in .env, JSON, or YAML configuration snippets',
      'Verifying translation updates or legal policy revisions',
      'Checking student or team draft revisions quickly',
    ],
    faqs: [
      {
        question: 'How does the diff algorithm handle inserted lines in the middle of a file?',
        answer:
          'Because it uses a Longest Common Subsequence (LCS) line comparison algorithm, inserting lines shifts subsequent line numbers without marking the rest of the file as changed.',
      },
      {
        question: 'What does "Ignore whitespace" do?',
        answer:
          'It trims leading and trailing spaces and collapses multiple consecutive spaces before comparing lines, which helps focus on content edits rather than indentation tweaks.',
      },
      {
        question: 'Is there a character limit for comparing texts?',
        answer:
          'Comparison runs directly in your browser without server limits; typical documents up to several thousand lines compare almost instantaneously.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'find-and-replace',
      'remove-duplicate-lines',
      'whitespace-remover',
    ],
    component: lazy(() => import('../../../tools/text/TextDiffCheckerTool')),
  },
];
