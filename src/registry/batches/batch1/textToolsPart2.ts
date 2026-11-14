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
      'remove trailing spaces',
      'fix pdf line breaks',
      'collapse multiple spaces',
      'clean text online',
    ],
    seo: {
      title: 'Whitespace Remover – Clean Extra Spaces | UtilityFlow',
      description:
        'Remove extra spaces, tabs, trailing whitespace, blank lines and broken PDF line breaks in your browser — fast, free and completely private, with no sign-up.',
      primaryKeyword: 'whitespace remover',
      secondaryKeywords: ['remove extra spaces', 'remove line breaks', 'clean text whitespace', 'remove blank lines', 'fix pdf line breaks'],
      longTailKeywords: [
        'remove extra spaces and blank lines online',
        'fix line breaks when copying from pdf',
        'convert tabs and multiple spaces to single space',
        'remove trailing spaces from copied text',
        'turn multi-line text into a single line',
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
        title: 'Choose how spaces and tabs are handled',
        description:
          'Collapse runs of multiple spaces into one, convert tabs to single spaces, and trim leading and trailing spaces from each line.',
      },
      {
        title: 'Pick a line break option',
        description:
          'Keep paragraph breaks, remove blank lines only, replace line breaks with spaces to rejoin wrapped sentences, or strip all breaks to make one continuous line.',
      },
      {
        title: 'Review the cleaned output',
        description:
          'Check the result in the output panel and the character count showing exactly how many characters were removed during cleanup.',
      },
      {
        title: 'Copy the cleaned text',
        description:
          'Use the copy button to copy the normalized result, then paste it into your document, form, or CMS field.',
      },
      {
        title: 'Fix sentences that run together',
        description:
          'If words from separate lines join without a space, switch to "Replace with spaces". If paragraphs merged into one block, switch back to "Remove blank lines" instead.',
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
      {
        question: 'Is the Whitespace Remover free to use?',
        answer:
          'Yes. It is completely free with no sign-up, no account, and no limits on how many times you clean text.',
      },
      {
        question: 'Does my text leave my browser when I use the Whitespace Remover?',
        answer:
          'No. All cleanup happens locally in your browser, so your text is never uploaded to a server.',
      },
      {
        question: 'What does the "Remove blank lines" option do?',
        answer:
          'It deletes empty lines from your text while keeping every line that contains content, so paragraphs and list items stay in order.',
      },
      {
        question: 'Can I keep paragraph breaks while removing extra spaces?',
        answer:
          'Yes. Choose the option that keeps line breaks and only collapses extra spaces, so your paragraphs stay separated while the spacing inside them is fixed.',
      },
      {
        question: 'What is the difference between "Replace with spaces" and removing all line breaks?',
        answer:
          '"Replace with spaces" joins lines with a single space so wrapped sentences read correctly, while removing all breaks joins lines directly with no space between them.',
      },
      {
        question: 'Does the Whitespace Remover delete trailing spaces at the end of lines?',
        answer:
          'Yes. Spaces and tabs at the end of each line are trimmed, which is useful before pasting text into forms or code fields.',
      },
      {
        question: 'Does it remove leading spaces and indentation at the start of lines?',
        answer:
          'Yes. Leading whitespace at the start of each line is trimmed, so indented or misaligned pasted text lines up cleanly.',
      },
      {
        question: 'Can I clean text copied from a spreadsheet with the Whitespace Remover?',
        answer:
          'Yes. Tabs between spreadsheet cells are converted to single spaces, and extra blank lines from copied ranges are removed.',
      },
      {
        question: 'How do I turn multi-line text into a single line?',
        answer:
          'Paste your text, then choose the option that replaces line breaks with spaces or strips all breaks, and copy the resulting single-line output.',
      },
      {
        question: 'Does the Whitespace Remover change punctuation, letters, or numbers?',
        answer:
          'No. It only changes whitespace characters such as spaces, tabs, and line breaks; your words, punctuation, and numbers stay exactly as they were.',
      },
      {
        question: 'Can I use the Whitespace Remover to clean text before pasting it into a form?',
        answer:
          'Yes. It is ideal for stripping trailing spaces and stray line breaks from addresses, names, or descriptions before they go into a web form or CMS field.',
      },
      {
        question: 'What does the character count shown after cleanup mean?',
        answer:
          'It shows how many characters were removed during cleanup, so you can see exactly how much extra whitespace the tool stripped from your text.',
      },
      {
        question: 'Does the Whitespace Remover work on very long documents?',
        answer:
          'Yes. Because it runs locally in your browser, you can paste long documents, though extremely large blocks of text may take a moment to process.',
      },
      {
        question: 'Can I undo a cleanup if I pick the wrong option?',
        answer:
          'Your original text stays in the input field, so you can simply pick a different option and the output updates without losing your pasted text.',
      },
      {
        question: 'Does the Whitespace Remover remove spaces inside words?',
        answer:
          'No. Spaces inside words are single spaces, so they are left untouched; only runs of two or more spaces are collapsed.',
      },
      {
        question: 'What kinds of whitespace does the tool clean?',
        answer:
          'It cleans regular spaces, tab characters, trailing and leading whitespace on lines, blank lines, and unwanted line breaks.',
      },
      {
        question: 'Can I use the Whitespace Remover on code?',
        answer:
          'It works for prose, but be careful with indentation-sensitive code such as Python, because trimming leading spaces can change how the code behaves.',
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
      'sort list a to z',
      'alphabetical order tool',
      'shuffle lines online',
      'sort lines z to a',
      'reverse line order',
    ],
    seo: {
      title: 'Sort Lines Alphabetically – A-Z & Natural | UtilityFlow',
      description:
        'Sort lines A to Z, Z to A, in natural numeric order, by length, in reverse, or shuffled — with optional deduplication and blank-line removal included.',
      primaryKeyword: 'sort lines alphabetically',
      secondaryKeywords: ['alphabetize list', 'text line sorter', 'natural sort online', 'sort lines a to z', 'shuffle lines'],
      longTailKeywords: [
        'sort list alphabetically with numbers in natural order',
        'sort lines by length shortest to longest',
        'alphabetize and remove duplicate lines',
        'reverse order of lines online',
        'sort list z to a online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organize lists, bibliographies, inventory SKUs, or code imports alphabetically, numerically with natural sorting, by character length, or in reverse order.',
    instructions: [
      {
        title: 'Enter one item per line',
        description:
          'Paste your list into the Input Lines field, with each item on its own line.',
      },
      {
        title: 'Choose a sort order',
        description:
          'Pick A → Z, Z → A, Natural (1, 2, 10), Shortest/Longest First, Reverse Order, or Shuffle.',
      },
      {
        title: 'Set case sensitivity',
        description:
          'Turn on case-sensitive comparison if uppercase and lowercase letters should sort separately; otherwise "apple" and "Apple" are treated the same.',
      },
      {
        title: 'Toggle cleanup options',
        description:
          'Optionally drop blank lines or remove duplicates in the same pass so your sorted list comes out clean.',
      },
      {
        title: 'Review and copy the sorted list',
        description:
          'Check the sorted output in order, then copy it with one click to paste into your document, spreadsheet, or code file.',
      },
      {
        title: 'Fix numbered items sorting out of order',
        description:
          'If "Item 10" appears before "Item 2", switch from A → Z to Natural sort, which compares the numbers inside each line numerically.',
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
      {
        question: 'Is the Sort Lines tool free to use?',
        answer:
          'Yes. It is completely free with no sign-up, no account, and no limit on how many lists you sort.',
      },
      {
        question: 'Does my list leave my browser when I sort it?',
        answer:
          'No. Sorting happens locally in your browser, so your list is never uploaded to a server.',
      },
      {
        question: 'What is natural sort and when should I use it?',
        answer:
          'Natural sort compares numbers inside text numerically, so use it for numbered items like "Chapter 2" and "Chapter 10" to keep them in true numeric order.',
      },
      {
        question: 'Can I sort a list from Z to A?',
        answer:
          'Yes. Choose the Z → A option to sort your lines in reverse alphabetical order.',
      },
      {
        question: 'Can I sort lines by length instead of alphabetically?',
        answer:
          'Yes. Choose Shortest First or Longest First to order lines by character length, which is handy for checking UI tables or aligning copy.',
      },
      {
        question: 'What does the Shuffle option do in the Sort Lines tool?',
        answer:
          'Shuffle randomizes the order of your lines, which is useful for giveaway entries, quiz questions, or any list you want in random order.',
      },
      {
        question: 'Does the Sort Lines tool remove blank lines?',
        answer:
          'Yes, if you enable the blank-line option. Otherwise empty lines are kept in the output.',
      },
      {
        question: 'Can I sort case-sensitively with the Sort Lines tool?',
        answer:
          'Yes. Turn on case-sensitive comparison to sort uppercase and lowercase letters separately; with it off, "apple" and "Apple" are treated the same.',
      },
      {
        question: 'Does the Sort Lines tool work with numbers and dates?',
        answer:
          'Yes. Natural sort orders embedded numbers correctly, and dates sort correctly when written in YYYY-MM-DD format; other date formats sort as plain text.',
      },
      {
        question: 'Can I sort columns inside a line, like CSV values?',
        answer:
          'No. The tool sorts whole lines, so each line moves as one unit; it does not reorder values separated by commas within a single line.',
      },
      {
        question: 'What happens to duplicate lines when I sort?',
        answer:
          'Duplicates stay in the list unless you enable "Remove duplicates", which keeps only the first occurrence of each line before sorting.',
      },
      {
        question: 'Can I reverse a list without sorting it alphabetically?',
        answer:
          'Yes. Use Reverse Order to flip your list from bottom to top while keeping the text inside each line unchanged.',
      },
      {
        question: 'Does the Sort Lines tool handle accented letters and other languages?',
        answer:
          'Yes. It uses a locale-aware collator, so accented characters and non-English letters sort in a sensible order rather than by raw character codes.',
      },
      {
        question: 'Can I sort a numbered list like "1. Apple, 2. Banana, 10. Cherry"?',
        answer:
          'Yes. Natural sort reads the numbers at the start of each line, so "2. Banana" correctly comes before "10. Cherry".',
      },
      {
        question: 'How large a list can the Sort Lines tool handle?',
        answer:
          'It runs locally in your browser and handles long lists easily, though extremely large pastes with tens of thousands of lines may take a moment.',
      },
      {
        question: 'Does sorting change the text inside each line?',
        answer:
          'No. Sorting only changes the order of the lines; the words, numbers, and punctuation inside each line stay exactly the same.',
      },
      {
        question: 'Can I undo a sort if I pick the wrong order?',
        answer:
          'Your original list stays in the input field, so you can pick a different sort order and the output updates without losing your pasted list.',
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
      'replace text online',
      'find replace words',
      'regex replace online',
      'replace all occurrences',
      'text replacer tool',
    ],
    seo: {
      title: 'Find & Replace Text – Bulk & Regex Tool | UtilityFlow',
      description:
        'Find and replace text in your browser with live match counts, case sensitivity, whole-word matching and JavaScript RegExp capture group support — no sign-up.',
      primaryKeyword: 'find and replace text',
      secondaryKeywords: ['online find and replace', 'regex replace tool', 'bulk replace text', 'replace text online', 'find replace words'],
      longTailKeywords: [
        'find and replace whole words only online',
        'regex find and replace with capture groups',
        'bulk replace text strings in browser',
        'replace all occurrences in text online',
        'case sensitive find and replace',
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
        title: 'Paste the text to edit',
        description:
          'Paste the full document, CSV snippet, or code block into the source text field so every occurrence is covered in one pass.',
      },
      {
        title: 'Check the live match count',
        description:
          'Look at the live count of replaced occurrences to confirm the match is hitting exactly the spots you expect before copying.',
      },
      {
        title: 'Review the output and copy',
        description:
          'Scan the updated text for unintended changes, then copy it with one click to paste back into your document or editor.',
      },
      {
        title: 'Fix a match that replaces nothing',
        description:
          'If the count is zero, check case sensitivity, turn off Whole word only, or escape special characters like . and ( in RegExp mode; invalid patterns show a syntax error message.',
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
          'Yes. Leaving the Replace field blank removes every matched occurrence cleanly, so check the preview first to avoid deleting text you still need.',
      },
      {
        question: 'Is the Find & Replace tool free to use?',
        answer:
          'Yes. It is completely free with no sign-up, no account, and no limit on how many replacements you make.',
      },
      {
        question: 'Does my text leave my browser when I use Find & Replace?',
        answer:
          'No. Everything runs locally in your browser, so private snippets, documents, and code stay on your device.',
      },
      {
        question: 'What does the live match count show?',
        answer:
          'It shows how many occurrences of your Find term were replaced, so you can confirm the replacement hit exactly the spots you expected.',
      },
      {
        question: 'Can I replace only whole words and not parts of longer words?',
        answer:
          'Yes. Turn on "Whole word only" so "cat" is replaced but "catalog" is left untouched; in RegExp mode, use \\b word boundaries instead.',
      },
      {
        question: 'Is Find & Replace case-sensitive?',
        answer:
          'Only if you turn on the Case-sensitive option. With it off, "Apple" and "apple" are treated as the same match.',
      },
      {
        question: 'Can I replace text across multiple lines at once?',
        answer:
          'Yes. The tool processes your entire pasted text in one pass, so matches on every line are replaced together.',
      },
      {
        question: 'What happens if my regular expression is invalid?',
        answer:
          'The tool shows a clear syntax error message instead of producing bad output, so you can fix the pattern before copying anything.',
      },
      {
        question: 'Can I match special characters like line breaks or tabs in Find & Replace?',
        answer:
          'Yes, in RegExp mode you can use escapes such as \\n for a line break and \\t for a tab inside your pattern.',
      },
      {
        question: 'Can I swap two words around using capture groups?',
        answer:
          'Yes. For example, find (\\w+) (\\w+) and replace with $2 $1 to flip "John Smith" into "Smith John".',
      },
      {
        question: 'Can I insert the whole matched text into the replacement?',
        answer:
          'Yes. In RegExp mode, $& in the Replace field inserts the entire matched text, which is useful for wrapping matches in quotes or tags.',
      },
      {
        question: 'Can I replace URLs or dates across a whole document?',
        answer:
          'Yes. Paste the full document and use one Find & Replace pass to swap every old URL, brand name, or date at once.',
      },
      {
        question: 'Does Find & Replace change only the first occurrence or all of them?',
        answer:
          'It replaces all matches in the pasted text at once; to change only one occurrence, edit that spot manually after copying the result.',
      },
      {
        question: 'Does Find & Replace work on code?',
        answer:
          'Yes. It works on code blocks, templates, and config snippets, so you can rename variables, update placeholders, or change delimiters in bulk.',
      },
      {
        question: 'Can I fix a repeated typo with Find & Replace?',
        answer:
          'Yes. Enter the misspelled word in Find and the correct spelling in Replace, then check the match count to see how many typos were fixed.',
      },
      {
        question: 'Which regular expression flavor does the tool use?',
        answer:
          'It uses JavaScript RegExp, the same pattern syntax used in browsers, with capture groups, character classes, and quantifiers.',
      },
      {
        question: 'Can I undo a replacement if I make a mistake?',
        answer:
          'Your original text stays in the input field, so you can change the Find or Replace terms and the output updates without losing your source text.',
      },
      {
        question: 'Is there a limit on how much text I can process with Find & Replace?',
        answer:
          'There is no set limit. It runs locally in your browser and handles long documents, though extremely large pastes may take a moment to process.',
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
      'reverse text characters',
      'flip text online',
      'mirror text generator',
      'reverse sentence order',
      'backwards text generator',
    ],
    seo: {
      title: 'Text Reverser – Reverse Words & Lines | UtilityFlow',
      description:
        'Reverse characters, flip word order, mirror each word, or invert line order instantly — Unicode-safe, free, and fully private in your browser — no sign-up.',
      primaryKeyword: 'text reverser',
      secondaryKeywords: ['reverse text online', 'reverse word order', 'invert lines', 'flip text online', 'mirror text generator'],
      longTailKeywords: [
        'reverse each word in a sentence online',
        'reverse order of lines in text file',
        'unicode safe string reverser',
        'reverse text characters online',
        'backwards text generator',
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
        title: 'Check the live preview',
        description:
          'The output updates as you type, so you can instantly see how the chosen mode transforms your text.',
      },
      {
        title: 'Compare modes side by side',
        description:
          'Switch between modes on the same input to compare character reversal, word-order reversal, and line inversion before settling on one.',
      },
      {
        title: 'Copy the output',
        description:
          'Use the Copy button to copy the transformed text, then paste it into your document, puzzle, or message.',
      },
      {
        title: 'Fix lines that reversed the wrong way',
        description:
          'If the words inside each line flipped when you only wanted the list flipped, switch to Reverse Line Order, which moves lines without touching the text inside them.',
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
      {
        question: 'Is the Text Reverser free to use?',
        answer:
          'Yes. It is completely free with no sign-up, no account, and no limit on how much text you reverse.',
      },
      {
        question: 'Does my text leave my browser when I use the Text Reverser?',
        answer:
          'No. Reversal happens locally in your browser, so your text is never uploaded or stored anywhere.',
      },
      {
        question: 'What are the four reversal modes in the Text Reverser?',
        answer:
          'Reverse Characters flips every character, Reverse Word Order flips the order of words, Reverse Each Word mirrors letters inside each word, and Reverse Line Order inverts the sequence of lines.',
      },
      {
        question: 'Can I reverse a whole paragraph with the Text Reverser?',
        answer:
          'Yes. Paste the paragraph and choose Reverse Characters to flip the entire block, or Reverse Line Order to flip multi-line text line by line.',
      },
      {
        question: 'Can I use the Text Reverser to create a mirror effect?',
        answer:
          'Yes. Reverse Characters produces mirrored-looking text that reads backwards, which works well for puzzles, ciphers, and playful messages.',
      },
      {
        question: 'Does the Text Reverser work with accented letters?',
        answer:
          'Yes. It handles Unicode characters by code point, so accented letters such as é and ü are reversed correctly without breaking apart.',
      },
      {
        question: 'Does the Text Reverser work with text in other languages?',
        answer:
          'Yes. It works on any Unicode text, including non-Latin scripts, because reversal is done character by character rather than by language rules.',
      },
      {
        question: 'What is a palindrome and can the Text Reverser help check one?',
        answer:
          'A palindrome reads the same forwards and backwards, like "racecar". Reverse your text and compare it with the original to check.',
      },
      {
        question: 'Can I use the Text Reverser for puzzles and word games?',
        answer:
          'Yes. Reversed words and sentences are a classic puzzle format, and the live preview makes it easy to build clues and answers quickly.',
      },
      {
        question: 'Does reversing text add or remove spaces?',
        answer:
          'Reverse Characters reverses everything including spaces, while the word-based modes keep single spaces between words so the output stays readable.',
      },
      {
        question: 'Can I reverse a very long block of text?',
        answer:
          'Yes. It runs locally in your browser and handles long pastes, though extremely large blocks may take a moment to update in the live preview.',
      },
      {
        question: 'Does the Text Reverser save or store my text?',
        answer:
          'No. Nothing is saved or sent to a server; your text exists only in your browser tab while you use the tool.',
      },
      {
        question: 'How do I reverse "First Last" names into "Last First"?',
        answer:
          'Use Reverse Word Order, which turns "John Smith" into "Smith John" while keeping each name spelled correctly.',
      },
      {
        question: 'Can the Text Reverser reverse numbers?',
        answer:
          'Yes. In Reverse Characters mode, "12345" becomes "54321", which is useful for testing numeric strings and codes.',
      },
      {
        question: 'What happens to line breaks when I reverse characters?',
        answer:
          'Line breaks are reversed along with the rest of the text, so lines end up in the opposite order too; use Reverse Line Order if you want lines flipped but text inside them untouched.',
      },
      {
        question: 'Can I undo a reversal?',
        answer:
          'Yes. Your original text stays in the input field, and reversing the output a second time with the same mode restores the original text.',
      },
      {
        question: 'Is reversed text readable?',
        answer:
          'No, reversed text reads backwards by design. Paste it back into the tool and reverse it again to restore the original wording.',
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
      'lorem ipsum text',
      'dummy text generator',
      'placeholder paragraphs',
      'lorem ipsum words',
      'filler text generator',
    ],
    seo: {
      title: 'Lorem Ipsum Generator – Placeholder Text | UtilityFlow',
      description:
        'Generate Lorem Ipsum placeholder text by paragraphs, sentences or exact word count, with optional HTML paragraph tags for mockups and layouts — no sign-up.',
      primaryKeyword: 'lorem ipsum generator',
      secondaryKeywords: ['placeholder text', 'dummy copy generator', 'lorem ipsum paragraphs', 'dummy text generator', 'lorem ipsum text'],
      longTailKeywords: [
        'generate lorem ipsum by word count',
        'lorem ipsum generator with html p tags',
        'clean placeholder text for ui mockups',
        'lorem ipsum generator for website mockup',
        'placeholder text for design wireframes',
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
        title: 'Generate the placeholder text',
        description:
          'The text is generated instantly in your browser, with no waiting and no network calls.',
      },
      {
        title: 'Check the word and character count',
        description:
          'Use the live word and character counter to verify the generated text fits your layout before pasting it into your design.',
      },
      {
        title: 'Regenerate or copy',
        description:
          'Click Regenerate for a fresh sentence variation or Copy placeholder text to paste into your design.',
      },
      {
        title: 'Match text length to your layout',
        description:
          'If a card overflows or looks empty, switch to the Words unit and generate an exact word count that matches the space, then regenerate until the fit looks right.',
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
      {
        question: 'Is the Lorem Ipsum Generator free to use?',
        answer:
          'Yes. It is completely free with no sign-up, no account, and no limit on how much placeholder text you generate.',
      },
      {
        question: 'Do I need an account or an internet connection to generate Lorem Ipsum?',
        answer:
          'No. The generator runs entirely in your browser with no sign-up and no network calls, so it works instantly whenever the page is loaded.',
      },
      {
        question: 'What is Lorem Ipsum?',
        answer:
          'Lorem Ipsum is scrambled Latin-like placeholder text that designers have used since the days of print typesetting to fill layouts before the real copy is ready.',
      },
      {
        question: 'Can I generate a single sentence of Lorem Ipsum?',
        answer:
          'Yes. Choose the Sentences unit, enter 1, and the generator produces one placeholder sentence.',
      },
      {
        question: 'Can I start my text with the classic "Lorem ipsum dolor sit amet..." sentence?',
        answer:
          'Yes. Enable the classic opening option and your generated text begins with the familiar "Lorem ipsum dolor sit amet..." sentence.',
      },
      {
        question: 'Can I paste the generated text directly into HTML?',
        answer:
          'Yes. Turn on the <p> tag option and the output is wrapped in HTML paragraph tags, ready to paste into templates or a CMS code view.',
      },
      {
        question: 'Can I generate exactly 100 words of Lorem Ipsum?',
        answer:
          'Yes. Select the Words unit, enter 100, and the generator produces exactly 100 words of placeholder text.',
      },
      {
        question: 'Is the generated Lorem Ipsum text always the same?',
        answer:
          'No. Click Regenerate to produce a fresh variation with different sentence structures, so repeated blocks do not look identical.',
      },
      {
        question: 'Is Lorem Ipsum real Latin?',
        answer:
          'No. It is scrambled pseudo-Latin made of Latin-like words; it looks like real language but carries no actual meaning.',
      },
      {
        question: 'Can I use Lorem Ipsum on a published website?',
        answer:
          'It is meant as temporary placeholder copy, so replace it with real content before publishing, otherwise visitors will see dummy text.',
      },
      {
        question: 'What is Lorem Ipsum used for?',
        answer:
          'It fills wireframes, mockups, and prototypes so designers can test typography, spacing, and layout without waiting for final copy.',
      },
      {
        question: 'Can I control the length of individual sentences?',
        answer:
          'No. You control the total count in paragraphs, sentences, or words, while the generator varies sentence lengths naturally; regenerate if the rhythm does not suit your layout.',
      },
      {
        question: 'Does the Lorem Ipsum Generator work for print design too?',
        answer:
          'Yes. Copy the generated text into print tools, slide decks, or page-layout software to preview how real copy will flow in the design.',
      },
      {
        question: 'How do I test text truncation with Lorem Ipsum?',
        answer:
          'Generate an exact word count that matches your space, paste it into the component, and watch whether the text truncates or overflows at different screen sizes.',
      },
      {
        question: 'Can I generate Lorem Ipsum in another language?',
        answer:
          'No. The tool generates only the classic Latin-like placeholder text; for readable copy in another language, write or translate real text instead.',
      },
      {
        question: 'Does the Lorem Ipsum Generator save my generated text?',
        answer:
          'No. Everything runs locally in your browser and nothing is stored or sent to a server.',
      },
      {
        question: 'Why does placeholder text help clients focus on the design?',
        answer:
          'Readable draft copy pulls attention to the words themselves, while neutral Lorem Ipsum keeps reviewers focused on layout, typography, and spacing.',
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
