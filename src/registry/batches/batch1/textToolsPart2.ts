import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const TEXT_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'whitespace-remover',
    slug: 'whitespace-remover',
    name: 'Whitespace & Line Break Remover',
    shortDescription:
      'Strip extra spaces, tabs, blank lines, and unwanted line breaks from copied PDF or web text.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'whitespace remover',
      'remove extra spaces',
      'line break remover',
      'remove blank lines',
      'clean copied pdf text',
    ],
    seo: {
      title: 'Whitespace & Line Break Remover – Clean Extra Spaces | UtilityFlow',
      description:
        'Remove extra spaces, tabs, trailing whitespace, blank lines, and awkward PDF line breaks cleanly in your browser.',
      primaryKeyword: 'whitespace remover',
      secondaryKeywords: ['remove extra spaces', 'remove line breaks', 'clean text whitespace'],
      longTailKeywords: [
        'remove extra spaces and blank lines online',
        'fix line breaks when copying from pdf',
        'convert tabs and multiple spaces to single space',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Clean up messy copy pasted from PDFs, emails, spreadsheets, or web pages by collapsing repeated spaces, converting tabs, trimming line edges, and normalizing line breaks.',
    instructions: [
      {
        title: 'Paste unformatted text',
        description:
          'Drop text containing double spaces, stray tabs, or broken line wraps into Input Text.',
      },
      {
        title: 'Select cleanup rules',
        description:
          'Choose how spaces, tabs, and line breaks should be handled (keep breaks, remove blank lines, replace breaks with spaces, or strip all breaks).',
      },
      {
        title: 'Copy cleaned text',
        description:
          'Review the saved character count and copy the normalized result.',
      },
    ],
    examples: [
      {
        title: 'Cleaning PDF copy-paste',
        input: '   First   line with   extra spaces.\n\n\nSecond   line   here.   ',
        output: 'First line with extra spaces.\nSecond line here.',
        explanation: 'Collapses double spaces, trims margins, and removes empty spacer lines.',
      },
    ],
    benefits: [
      'Fixes broken line wrapping from PDF documents in one click',
      'Counts exact characters removed during cleanup',
      'Supports keeping paragraphs while stripping only excess spacing',
      'Processes everything locally in the browser',
    ],
    useCases: [
      'Repairing broken text copied out of multi-column PDFs',
      'Stripping trailing spaces before pasting into CMS fields',
      'Flattening multi-line addresses or snippets into a single line',
      'Normalizing tab-indented notes into clean single-spaced copy',
    ],
    faqs: [
      {
        question: 'Which line break option should I pick for text copied from a PDF?',
        answer:
          'Select "Replace with spaces" when hard line wraps broke sentences mid-line, or "Remove blank lines" if each line is already a distinct paragraph or list item.',
      },
      {
        question: 'Will collapsing spaces affect single spaces between words?',
        answer:
          'No. Only runs of two or more consecutive spaces are collapsed into a single space.',
      },
      {
        question: 'Does this remove tabs as well?',
        answer:
          'Yes, when "Convert tabs to spaces" is enabled, tab characters are turned into single spaces and merged with adjacent whitespace.',
      },
    ],
    relatedToolSlugs: [
      'remove-duplicate-lines',
      'find-and-replace',
      'case-converter',
      'word-counter',
    ],
    component: lazy(() => import('../../../tools/text/WhitespaceRemoverTool')),
  },
  {
    id: 'sort-lines',
    slug: 'sort-lines',
    name: 'Sort Lines Alphabetically',
    shortDescription:
      'Sort lists A–Z, Z–A, naturally (1, 2, 10), by character length, reversed, or randomly shuffled.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'sort lines alphabetically',
      'alphabetize list online',
      'natural sort tool',
      'sort text by length',
    ],
    seo: {
      title: 'Sort Lines Alphabetically – A-Z, Natural & Length Sorter | UtilityFlow',
      description:
        'Sort text lines A to Z, Z to A, natural numeric order, character length, reverse order, or random shuffle with optional deduplication.',
      primaryKeyword: 'sort lines alphabetically',
      secondaryKeywords: ['alphabetize list', 'text line sorter', 'natural sort online'],
      longTailKeywords: [
        'sort list alphabetically with numbers in natural order',
        'sort lines by length shortest to longest',
        'alphabetize and remove duplicate lines',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organize lists, bibliographies, inventory SKUs, or code imports alphabetically, numerically with natural sorting, by character length, or in reverse order.',
    instructions: [
      {
        title: 'Enter one item per line',
        description:
          'Paste your list into the Input Lines field.',
      },
      {
        title: 'Choose a sort order',
        description:
          'Pick A → Z, Z → A, Natural (1, 2, 10), Shortest/Longest First, Reverse Order, or Shuffle.',
      },
      {
        title: 'Toggle cleanup options',
        description:
          'Optionally enforce case-sensitive comparison, drop blank lines, or remove duplicates in the same pass.',
      },
    ],
    examples: [
      {
        title: 'Natural numeric sorting vs standard text sorting',
        input: 'Item 10\nItem 2\nItem 1',
        output: 'Item 1\nItem 2\nItem 10',
        explanation:
          'Natural mode compares embedded numbers numerically so Item 2 precedes Item 10.',
      },
    ],
    benefits: [
      'Includes locale-aware collator and natural numeric sorting',
      'Combines sorting with blank-line removal and deduplication',
      'Supports length-based sorting for UI tables and copy checks',
      'Instant one-click copy of the sorted result',
    ],
    useCases: [
      'Alphabetizing bibliographies, glossaries, and reference lists',
      'Ordering numbered files or test cases naturally (Item 1, 2, 10)',
      'Sorting CSS properties, imports, or environment keys',
      'Randomizing giveaway entries or quiz questions with Shuffle',
    ],
    faqs: [
      {
        question: 'What is the difference between A → Z and Natural sort?',
        answer:
          'Standard alphabetical sort places "Item 10" before "Item 2" because "1" comes before "2". Natural sort parses numbers inside strings so "Item 2" comes before "Item 10".',
      },
      {
        question: 'Can I remove duplicate entries while sorting?',
        answer:
          'Yes. Check the "Remove duplicates" option to deduplicate and sort your list simultaneously.',
      },
      {
        question: 'How does Reverse Order differ from Z → A?',
        answer:
          'Z → A sorts alphabetically descending, whereas Reverse Order flips your existing line sequence from bottom to top without alphabetizing.',
      },
    ],
    relatedToolSlugs: [
      'remove-duplicate-lines',
      'line-prefix-suffix',
      'text-reverser',
      'whitespace-remover',
    ],
    component: lazy(() => import('../../../tools/text/SortLinesTool')),
  },
  {
    id: 'find-and-replace',
    slug: 'find-and-replace',
    name: 'Find & Replace Text',
    shortDescription:
      'Search and replace strings across text with case sensitivity, whole-word matching, and RegExp support.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'find and replace text',
      'bulk text replace',
      'regex find and replace',
      'search and replace online',
    ],
    seo: {
      title: 'Find & Replace Text – Bulk & RegExp Text Replacer | UtilityFlow',
      description:
        'Find and replace text online with live match counts, case sensitivity, whole-word matching, and JavaScript RegExp capture group support.',
      primaryKeyword: 'find and replace text',
      secondaryKeywords: ['online find and replace', 'regex replace tool', 'bulk replace text'],
      longTailKeywords: [
        'find and replace whole words only online',
        'regex find and replace with capture groups',
        'bulk replace text strings in browser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Perform fast bulk search-and-replace edits across prose, CSV snippets, or code blocks using exact text matching, whole-word boundaries, or regular expression capture groups.',
    instructions: [
      {
        title: 'Enter Find and Replace terms',
        description:
          'Type the text or pattern you want to match in Find, and the target string in Replace with.',
      },
      {
        title: 'Set matching flags',
        description:
          'Toggle Case-sensitive, Whole word only, or Use Regular Expression (RegExp) for pattern matching.',
      },
      {
        title: 'Review matches and copy',
        description:
          'Check the live count of replaced occurrences and copy the updated text.',
      },
    ],
    examples: [
      {
        title: 'Regex capture group reformatting',
        input: 'Find: Order #(\\d+)  |  Replace: Ref-$1\nSource: Order #1042 shipped.',
        output: 'Ref-1042 shipped.',
        explanation: 'Uses a RegExp capture group ($1) to preserve the numeric order ID while changing the prefix.',
      },
    ],
    benefits: [
      'Shows live match count and clear syntax error feedback for invalid RegExp patterns',
      'Whole-word option prevents accidental partial matches inside longer words',
      'Supports RegExp capture groups ($1, $2) for structured text rewrites',
      'Runs locally so private snippets and credentials stay on your device',
    ],
    useCases: [
      'Swapping brand names, URLs, or dates across long documents',
      'Reformatting IDs or dates with regular expression capture groups',
      'Updating delimiters or placeholder variables in templates',
      'Cleaning repeated typos before publishing',
    ],
    faqs: [
      {
        question: 'Can I use capture groups like $1 in RegExp mode?',
        answer:
          'Yes. When "Use Regular Expression (RegExp)" is checked, parenthesized groups in Find can be referenced as $1, $2, and so on in the Replace field.',
      },
      {
        question: 'Why is "Whole word only" disabled in RegExp mode?',
        answer:
          'In RegExp mode you have direct control over word boundaries using \\b inside your pattern.',
      },
      {
        question: 'Does leaving "Replace with" empty delete matched text?',
        answer:
          'Yes. Leaving the Replace field blank removes every matched occurrence cleanly.',
      },
    ],
    relatedToolSlugs: [
      'text-diff-checker',
      'whitespace-remover',
      'line-prefix-suffix',
      'case-converter',
    ],
    component: lazy(() => import('../../../tools/text/FindAndReplaceTool')),
  },
  {
    id: 'text-reverser',
    slug: 'text-reverser',
    name: 'Text Reverser',
    shortDescription:
      'Reverse entire text strings, reverse word order, flip letters per word, or invert line sequences.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'text reverser',
      'reverse string online',
      'reverse words',
      'reverse lines',
    ],
    seo: {
      title: 'Text Reverser – Reverse Characters, Words & Lines | UtilityFlow',
      description:
        'Reverse characters, flip word order, mirror each word individually, or invert line order from bottom to top instantaneously.',
      primaryKeyword: 'text reverser',
      secondaryKeywords: ['reverse text online', 'reverse word order', 'invert lines'],
      longTailKeywords: [
        'reverse each word in a sentence online',
        'reverse order of lines in text file',
        'unicode safe string reverser',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Flip character sequences, reverse word order per line, mirror letters inside individual words, or invert multi-line lists from bottom to top with Unicode-aware handling.',
    instructions: [
      {
        title: 'Choose a reversal mode',
        description:
          'Select Reverse Characters, Reverse Word Order, Reverse Each Word, or Reverse Line Order.',
      },
      {
        title: 'Enter your text',
        description:
          'Type or paste text into Original Text to see the reversed output immediately.',
      },
      {
        title: 'Copy the output',
        description:
          'Use the Copy button to copy the transformed text.',
      },
    ],
    examples: [
      {
        title: 'Comparing reversal modes',
        input: 'Hello World',
        output: 'Characters: dlroW olleH · Word Order: World Hello · Each Word: olleH dlroW',
        explanation: 'Demonstrates how each mode alters character vs token placement.',
      },
    ],
    benefits: [
      'Unicode-safe character splitting preserves emojis and surrogate pairs',
      'Four distinct modes cover both string flipping and list inversion',
      'Live zero-click preview as you type',
      'Lightweight browser-side execution',
    ],
    useCases: [
      'Inverting chronological logs or lists from oldest-first to newest-first',
      'Testing palindrome strings and right-to-left character edge cases',
      'Reversing "First Last" name lists or word sequences',
      'Creating puzzles, ciphers, and word games',
    ],
    faqs: [
      {
        question: 'Does Reverse Characters break emojis or accented Unicode characters?',
        answer:
          'The tool uses Array.from() code-point iteration rather than naive UTF-16 indexing, so multi-byte characters and standard emojis stay intact.',
      },
      {
        question: 'How do I flip a list of lines upside down without reversing the words?',
        answer:
          'Select "Reverse Line Order" to move the bottom line to the top while keeping the text inside each line unchanged.',
      },
      {
        question: 'What is the difference between "Reverse Word Order" and "Reverse Each Word"?',
        answer:
          '"Reverse Word Order" turns "one two three" into "three two one", whereas "Reverse Each Word" keeps word positions and flips letters to "eno owt eerht".',
      },
    ],
    relatedToolSlugs: [
      'sort-lines',
      'case-converter',
      'line-prefix-suffix',
      'word-counter',
    ],
    component: lazy(() => import('../../../tools/text/TextReverserTool')),
  },
  {
    id: 'lorem-ipsum-generator',
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    shortDescription:
      'Generate custom placeholder paragraphs, sentences, or word counts with optional HTML <p> tags.',
    categoryId: 'text-writing',
    batch: 1,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'lorem ipsum generator',
      'placeholder text generator',
      'dummy text',
      'html lorem ipsum',
    ],
    seo: {
      title: 'Lorem Ipsum Generator – Custom Paragraphs & HTML Tags | UtilityFlow',
      description:
        'Generate customizable Lorem Ipsum placeholder paragraphs, sentences, or exact word counts with optional HTML <p> wrapping.',
      primaryKeyword: 'lorem ipsum generator',
      secondaryKeywords: ['placeholder text', 'dummy copy generator', 'lorem ipsum paragraphs'],
      longTailKeywords: [
        'generate lorem ipsum by word count',
        'lorem ipsum generator with html p tags',
        'clean placeholder text for ui mockups',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Create clean placeholder copy tailored to exact paragraph, sentence, or word counts for wireframes, typography tests, and layout prototypes—with optional HTML paragraph tags.',
    instructions: [
      {
        title: 'Choose unit and amount',
        description:
          'Pick Paragraphs, Sentences, or Words and enter the desired count.',
      },
      {
        title: 'Customize formatting',
        description:
          'Choose whether to begin with the classic "Lorem ipsum dolor sit amet..." sentence and whether to wrap paragraphs in HTML <p> tags.',
      },
      {
        title: 'Regenerate or copy',
        description:
          'Click Regenerate for a fresh sentence variation or Copy placeholder text to paste into your design.',
      },
    ],
    examples: [
      {
        title: 'HTML mockup snippet',
        input: 'Unit: Paragraphs · Amount: 1 · Wrap in <p> tags: Checked',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation: 'Ready to paste directly into HTML templates or CMS code views.',
      },
    ],
    benefits: [
      'Generates exact word, sentence, or paragraph counts on demand',
      'Optional <p> tag wrapping saves time for front-end prototypes',
      'Live word and character counter verifies layout fit before pasting',
      'Instant regeneration without external network calls',
    ],
    useCases: [
      'Stress-testing card heights and line wrapping in responsive UI layouts',
      'Previewing font pairings, line heights, and measure widths',
      'Populating wireframe templates and editorial page mocks',
      'Testing truncation and overflow behavior in CSS components',
    ],
    faqs: [
      {
        question: 'Can I generate an exact number of words instead of paragraphs?',
        answer:
          'Yes. Switch the unit selector to "Words" and enter any number up to 500 words.',
      },
      {
        question: 'Why use Lorem Ipsum instead of repeating one phrase?',
        answer:
          'Classic Latin placeholder text approximates natural English word-length distribution and letter rhythm without distracting stakeholders with readable copy.',
      },
      {
        question: 'Does the <p> tag option work with Sentences and Words modes?',
        answer:
          'Yes. In Paragraphs mode each paragraph gets its own <p>...</p> wrapper, while Sentences and Words wrap the generated block in a single <p> element.',
      },
    ],
    relatedToolSlugs: [
      'word-counter',
      'character-counter',
      'markdown-previewer',
      'readability-checker',
    ],
    component: lazy(() => import('../../../tools/text/LoremIpsumGeneratorTool')),
  },
];
