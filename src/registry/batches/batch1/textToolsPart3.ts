import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const TEXT_TOOLS_PART_3: ToolDefinition[] = [
  {
    id: 'readability-checker',
    slug: 'readability-checker',
    name: 'Readability Score Checker',
    shortDescription:
      'Calculate Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, and SMOG readability scores.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'readability checker',
      'flesch reading ease',
      'flesch kincaid grade level',
      'gunning fog calculator',
    ],
    seo: {
      title: 'Readability Score Checker – Flesch-Kincaid & Fog Index | UtilityFlow',
      description:
        'Check Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, and SMOG readability scores with sentence and syllable breakdowns.',
      primaryKeyword: 'readability score checker',
      secondaryKeywords: ['flesch reading ease calculator', 'grade level checker', 'reading level tool'],
      longTailKeywords: [
        'check flesch kincaid grade level online',
        'calculate gunning fog and smog readability index',
        'improve article readability score browser tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evaluate how easy your writing is to understand using four established readability formulas—Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, and SMOG—alongside complex word detection.',
    instructions: [
      {
        title: 'Paste your article or passage',
        description:
          'Enter at least one complete sentence into the editor, or click Load sample.',
      },
      {
        title: 'Review readability scores',
        description:
          'Check Flesch Reading Ease (0–100, higher is easier) and grade-level estimates across the four index cards.',
      },
      {
        title: 'Refine long sentences and complex words',
        description:
          'Inspect average sentence length and the list of 3+ syllable words to simplify dense passages.',
      },
    ],
    examples: [
      {
        title: 'Plain-language guide',
        input: 'Short sentences keep instructions clear. Use simple words when explaining steps.',
        output: 'Flesch Ease ~78 (Fairly Easy) · Grade ~5.2',
        explanation:
          'Shorter average sentence length and fewer polysyllabic words yield higher reading ease.',
      },
    ],
    benefits: [
      'Computes four widely used readability indices simultaneously',
      'Lists sample 3+ syllable words found in your passage',
      'Displays exact average words per sentence and syllables per word',
      'Runs completely offline in browser memory for unpublished drafts',
    ],
    useCases: [
      'Editing documentation, UX copy, and help-center articles for clarity',
      'Checking educational handouts against target student grade levels',
      'Simplifying legal, healthcare, or financial customer communications',
      'Improving scannability of blog posts and landing pages',
    ],
    faqs: [
      {
        question: 'What is a good Flesch Reading Ease score for web articles?',
        answer:
          'Most general-audience web content targets a Flesch Reading Ease score between 60 and 75, corresponding roughly to an 7th-to-9th grade reading level.',
      },
      {
        question: 'How can I raise a low readability score?',
        answer:
          'Split long multi-clause sentences into shorter statements and replace unnecessary 3+ syllable jargon with concrete, everyday words.',
      },
      {
        question: 'Why does the tool mention sentence count for SMOG?',
        answer:
          'The standard SMOG formula relies on multi-sentence samples, so short 1–2 sentence snippets use a scaled estimate until 3 or more sentences are provided.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'word-frequency-counter',
      'character-counter',
      'markdown-previewer',
    ],
    component: lazy(() => import('../../../tools/text/ReadabilityCheckerTool')),
  },
  {
    id: 'word-frequency-counter',
    slug: 'word-frequency-counter',
    name: 'Word Frequency & Keyword Density Counter',
    shortDescription:
      'Analyze 1-word, 2-word, and 3-word phrase frequencies and density percentages with CSV export.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'word frequency counter',
      'keyword density checker',
      'ngram counter',
      'word repetition analyzer',
    ],
    seo: {
      title: 'Word Frequency & Keyword Density Counter – N-Grams | UtilityFlow',
      description:
        'Count repeated words and 2-word or 3-word phrases with density percentages, stop-word filtering, and one-click CSV export.',
      primaryKeyword: 'word frequency counter',
      secondaryKeywords: ['keyword density checker', 'phrase frequency analyzer', 'word occurrence tool'],
      longTailKeywords: [
        'count word frequency and density percentage online',
        'analyze 2 word and 3 word phrases in text',
        'export word frequency table to csv',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audit content drafts for keyword balance, overused phrasing, and multi-word n-gram patterns with instant frequency tables, stop-word filtering, and downloadable CSV reports.',
    instructions: [
      {
        title: 'Paste your content',
        description:
          'Insert an article draft, transcript, or product copy into the text box.',
      },
      {
        title: 'Choose 1-Word, 2-Word, or 3-Word phrases',
        description:
          'Switch between single-word counts and multi-word phrase combinations, and toggle stop-word exclusion.',
      },
      {
        title: 'Inspect density or export CSV',
        description:
          'Review exact occurrence counts and percentage density, then copy or download the table as CSV.',
      },
    ],
    examples: [
      {
        title: 'Phrase density check',
        input: 'Fast pages improve user engagement and page speed.',
        output: 'page: 2 · page speed: 1 · user engagement: 1',
        explanation:
          'Surfaces both individual term frequency and multi-word topical phrases.',
      },
    ],
    benefits: [
      'Supports 1-word, 2-word, and 3-word n-gram analysis',
      'Optional stop-word filter removes filler words like "the" and "and"',
      'Adjustable minimum word length threshold',
      'Exports clean CSV tables ready for spreadsheets',
    ],
    useCases: [
      'Checking article drafts to avoid unintentional keyword stuffing',
      'Spotting repetitive verbal tics in speeches or transcripts',
      'Identifying recurring themes in customer feedback or survey responses',
      'Comparing multi-word phrase balance across landing page copy',
    ],
    faqs: [
      {
        question: 'How is keyword density percentage calculated?',
        answer:
          'Density equals (term occurrences × words in phrase ÷ total words in the text) × 100, giving an accurate share of the document.',
      },
      {
        question: 'What are stop words?',
        answer:
          'Stop words are high-frequency grammatical words such as "the", "and", "of", "in", and "to" that usually carry little topical meaning in frequency audits.',
      },
      {
        question: 'Can I export the frequency results to Excel or Google Sheets?',
        answer:
          'Yes. Click "Export CSV" to download a standard comma-separated file or "Copy CSV" to paste directly.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'readability-checker',
      'remove-duplicate-lines',
      'text-to-slug',
    ],
    component: lazy(() => import('../../../tools/text/WordFrequencyCounterTool')),
  },
  {
    id: 'text-to-slug',
    slug: 'text-to-slug',
    name: 'Text to Slug Converter',
    shortDescription:
      'Convert titles and headings into clean, SEO-friendly URL slugs with accent transliteration and batch mode.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'text to slug',
      'url slug generator',
      'slugify online',
      'seo url formatter',
    ],
    seo: {
      title: 'Text to Slug Converter – Clean SEO URL Slug Generator | UtilityFlow',
      description:
        'Convert titles and phrases into clean SEO URL slugs with Unicode accent normalization, hyphen or underscore separators, and batch line mode.',
      primaryKeyword: 'text to slug converter',
      secondaryKeywords: ['url slug generator', 'slugify string', 'clean url generator'],
      longTailKeywords: [
        'convert article title to seo friendly url slug',
        'batch convert multiple headings to slugs',
        'slugify accented characters to ascii online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Turn blog titles, product names, and multi-line content calendars into clean, URL-safe ASCII slugs with automatic accent transliteration, delimiter controls, and optional stop-word removal.',
    instructions: [
      {
        title: 'Enter one or more titles',
        description:
          'Type a single title or paste multiple lines to generate slugs in batch.',
      },
      {
        title: 'Choose slug options',
        description:
          'Pick Hyphen (-) or Underscore (_), toggle lowercase enforcement, and optionally strip common stop words.',
      },
      {
        title: 'Copy generated slugs',
        description:
          'Copy the clean URL slugs directly into your CMS or routing table.',
      },
    ],
    examples: [
      {
        title: 'Accented title normalization',
        input: 'Café & Crème: Guide for 2026!',
        output: 'cafe-and-creme-guide-for-2026',
        explanation:
          'Transliterates accented Latin letters, expands "&" to "and", and strips punctuation.',
      },
    ],
    benefits: [
      'Normalizes accented characters (é, ñ, ü) into clean ASCII equivalents',
      'Supports batch multi-line conversion in one pass',
      'Offers optional stop-word stripping for shorter URLs',
      'Replaces "&" cleanly with "and" instead of dropping meaning',
    ],
    useCases: [
      'Generating readable blog post and documentation URLs',
      'Creating consistent filenames for downloadable assets and images',
      'Batch-preparing route slugs for static sites and e-commerce catalogs',
      'Standardizing category or tag identifiers in databases',
    ],
    faqs: [
      {
        question: 'Should I use hyphens or underscores in URL slugs?',
        answer:
          'Search engines generally recommend hyphens (-) as word separators in URLs, while underscores (_) are common for file names or database keys.',
      },
      {
        question: 'How does the tool handle accented characters like "café"?',
        answer:
          'It applies Unicode NFD normalization to separate diacritic marks and strip them cleanly, turning "café" into "cafe" rather than deleting the letter.',
      },
      {
        question: 'Can I convert 50 titles at once?',
        answer:
          'Yes. Paste one title per line and every line will convert into its own corresponding slug on the right.',
      },
    ],
    relatedToolSlugs: [
      'case-converter',
      'character-counter',
      'whitespace-remover',
      'line-prefix-suffix',
    ],
    component: lazy(() => import('../../../tools/text/TextToSlugTool')),
  },
  {
    id: 'markdown-previewer',
    slug: 'markdown-previewer',
    name: 'Markdown Previewer & HTML Exporter',
    shortDescription:
      'Write Markdown in a live split editor, inspect rendered formatting safely, and copy or export clean HTML.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'markdown previewer',
      'markdown to html',
      'online markdown editor',
      'live markdown viewer',
    ],
    seo: {
      title: 'Markdown Previewer & HTML Exporter – Live Editor | UtilityFlow',
      description:
        'Preview Markdown formatting in real time, inspect compiled HTML source, and copy or download clean HTML documents in your browser.',
      primaryKeyword: 'markdown previewer',
      secondaryKeywords: ['markdown to html converter', 'online markdown editor', 'markdown viewer'],
      longTailKeywords: [
        'live markdown previewer with html export',
        'convert markdown readme to html online',
        'browser markdown editor without upload',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Draft README files, documentation, and formatted notes in a responsive Markdown editor with live rendered preview, safe HTML escaping, raw HTML inspection, and one-click HTML export.',
    instructions: [
      {
        title: 'Write or paste Markdown',
        description:
          'Use standard syntax (# headings, **bold**, *italic*, lists, blockquotes, links, and fenced code blocks) in the left pane.',
      },
      {
        title: 'Toggle Rendered Preview or Raw HTML',
        description:
          'Switch tabs above the right pane to inspect visual typography or copy the generated HTML markup.',
      },
      {
        title: 'Copy or export',
        description:
          'Click Copy HTML for snippets or Export HTML to download a standalone HTML document.',
      },
    ],
    examples: [
      {
        title: 'Heading and list conversion',
        input: '## Checklist\n- **Verify** links\n- Publish draft',
        output: '<h2>Checklist</h2><ul><li><strong>Verify</strong> links</li><li>Publish draft</li></ul>',
        explanation: 'Converts clean Markdown syntax directly into semantic HTML elements.',
      },
    ],
    benefits: [
      'Escapes raw HTML and sanitizes link schemes to prevent unsafe preview markup',
      'Supports headings, bold/italic, strikethrough, blockquotes, lists, links, and code blocks',
      'Switches effortlessly between visual preview and raw HTML source',
      'Downloads a complete standalone .html file in one click',
    ],
    useCases: [
      'Previewing GitHub README.md files before committing',
      'Converting Markdown notes into clean HTML for email or CMS blocks',
      'Drafting technical tutorials and release notes offline',
      'Checking link and code-fence formatting quickly',
    ],
    faqs: [
      {
        question: 'Does the Markdown Previewer execute embedded JavaScript?',
        answer:
          'No. Raw HTML tags in input are escaped and link protocols are restricted to safe web, relative, anchor, and mailto schemes.',
      },
      {
        question: 'Can I copy only the compiled HTML fragment without <html> boilerplate?',
        answer:
          'Yes. The "Copy HTML" button copies the compiled HTML body markup, while "Export HTML" wraps it in a standalone HTML5 document.',
      },
      {
        question: 'Are fenced code blocks supported?',
        answer:
          'Yes. Wrap multi-line code snippets in triple backticks (```) to render formatted <pre><code> blocks.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'readability-checker',
      'text-to-slug',
      'text-diff-checker',
    ],
    component: lazy(() => import('../../../tools/text/MarkdownPreviewerTool')),
  },
  {
    id: 'line-prefix-suffix',
    slug: 'line-prefix-suffix',
    name: 'Add Line Numbers & Prefix/Suffix',
    shortDescription:
      'Add line numbers, custom prefixes, and suffixes to every line for lists, SQL clauses, and code.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'add prefix and suffix to lines',
      'add line numbers to text',
      'wrap lines in quotes',
      'bulk line formatter',
    ],
    seo: {
      title: 'Add Line Numbers & Prefix/Suffix to Text Lines | UtilityFlow',
      description:
        'Add sequential line numbers, zero-padding, custom prefixes, and suffixes to every line of text for lists, SQL queries, and code arrays.',
      primaryKeyword: 'add prefix and suffix to lines',
      secondaryKeywords: ['add line numbers online', 'line prefix suffix tool', 'wrap lines quotes'],
      longTailKeywords: [
        'wrap each line in single quotes and comma for sql',
        'add numbered list prefix to text lines',
        'bulk prepend and append text to every line',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prepend sequential line numbers, bullet characters, or opening quotes and append commas, semicolons, or closing tags across every line of a list in seconds.',
    instructions: [
      {
        title: 'Set prefix, suffix, or numbering',
        description:
          'Enter any prefix and/or suffix string, and optionally check Add line numbers with your preferred start number and separator.',
      },
      {
        title: 'Paste your lines',
        description:
          'Enter one item per row in Input Lines (or click Load sample to see SQL-style quoting).',
      },
      {
        title: 'Copy formatted lines',
        description:
          'Review the instant output and copy the formatted block to your clipboard.',
      },
    ],
    examples: [
      {
        title: 'Formatting values for an SQL IN clause',
        input: 'Prefix: \'  |  Suffix: \',  |  Lines: tokyo / london',
        output: "'tokyo',\n'london',",
        explanation: 'Wraps plain text items in single quotes and trailing commas instantly.',
      },
      {
        title: 'Zero-padded numbered steps',
        input: 'Line numbers: On · Pad zeros: On · Separator: ": "',
        output: '01: Step one\n02: Step two',
        explanation: 'Creates aligned numbered lists for outlines or documentation.',
      },
    ],
    benefits: [
      'Combines prefix, suffix, and sequential line numbering in one tool',
      'Optional zero-padding keeps multi-digit lists visually aligned',
      'Skips blank lines automatically when enabled so counters stay accurate',
      'Zero server uploads for sensitive IDs or query values',
    ],
    useCases: [
      'Wrapping spreadsheet IDs in quotes and commas for SQL IN (...) queries',
      'Converting plain text items into Markdown bullets or HTML <li> tags',
      'Adding sequential step numbers to checklists and outlines',
      'Building string arrays for JavaScript, Python, or JSON',
    ],
    faqs: [
      {
        question: 'Can I add only line numbers without a prefix or suffix?',
        answer:
          'Yes. Clear the Line Prefix and Line Suffix inputs, enable "Add line numbers", and set your preferred start number and separator.',
      },
      {
        question: 'How do I skip numbering blank spacer lines?',
        answer:
          'Keep "Skip empty lines" checked so blank lines are preserved without incrementing the line counter or receiving prefixes/suffixes.',
      },
      {
        question: 'Can I start numbering from 0 or any custom number?',
        answer:
          'Yes. Enter any integer in the Start Number field to begin counting from 0, 1, 100, or another offset.',
      },
    ],
    relatedToolSlugs: [
      'sort-lines',
      'remove-duplicate-lines',
      'find-and-replace',
      'text-to-slug',
    ],
    component: lazy(() => import('../../../tools/text/LinePrefixSuffixTool')),
  },
];
