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
      'smog readability index',
      'reading level checker',
      'readability score checker',
      'grade level readability',
      'check text readability online',
    ],
    seo: {
      title: 'Readability Checker: Flesch-Kincaid Scores | UtilityFlow',
      description:
        'Check Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog and SMOG scores with our readability score checker — free, private, in your browser.',
      primaryKeyword: 'readability score checker',
      secondaryKeywords: ['flesch reading ease calculator', 'grade level checker', 'reading level tool', 'gunning fog index calculator', 'smog index checker'],
      longTailKeywords: [
        'check flesch kincaid grade level online',
        'calculate gunning fog and smog readability index',
        'improve article readability score browser tool',
        'what is a good flesch reading ease score',
        'free readability score checker no signup',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evaluate how easy your writing is to understand using four established readability formulas—Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, and SMOG—alongside complex word detection.',
    instructions: [
      {
        title: 'Paste your article or passage',
        description:
          'Enter at least one complete sentence into the editor, or click Load sample to try it with example text.',
      },
      {
        title: 'Check the four score cards',
        description:
          'Review Flesch Reading Ease (0–100, higher is easier) plus Flesch-Kincaid, Gunning Fog and SMOG grade-level estimates side by side.',
      },
      {
        title: 'Read the sentence and syllable breakdown',
        description:
          'Inspect average words per sentence, syllables per word and the count of long or complex words behind each score.',
      },
      {
        title: 'Find the complex words',
        description:
          'Scan the list of 3+ syllable words the tool flags and note which ones you can replace with simpler everyday terms.',
      },
      {
        title: 'Shorten long sentences and re-check',
        description:
          'Split dense multi-clause sentences, paste the revised text back in and watch the scores update instantly.',
      },
      {
        title: 'Troubleshoot odd results',
        description:
          'If a score looks wrong, check for missing full stops, abbreviations or bullet fragments, since the formulas count sentences and syllables from punctuation.',
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
          'Most general-audience web content targets a Flesch Reading Ease score between 60 and 75, corresponding roughly to a 7th-to-9th grade reading level.',
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
      {
        question: 'What is the Readability Checker used for?',
        answer:
          'It measures how easy a passage is to understand by calculating four standard readability formulas and showing sentence and syllable statistics.',
      },
      {
        question: 'Is the Readability Checker free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs in your browser so your text never leaves your device.',
      },
      {
        question: 'What is the Flesch-Kincaid Grade Level?',
        answer:
          'It estimates the US school grade needed to understand a text; for example, a score of 8.0 means an eighth-grader should be able to read it comfortably.',
      },
      {
        question: 'What does the Gunning Fog Index measure?',
        answer:
          'It estimates years of formal education needed to understand a passage on first reading, based on sentence length and the share of complex words.',
      },
      {
        question: 'What is the SMOG index?',
        answer:
          'The SMOG index estimates the years of education needed to fully comprehend a text, counting polysyllabic words across a sample of sentences.',
      },
      {
        question: 'What Flesch Reading Ease score should I aim for?',
        answer:
          'General audiences usually target 60–70, while plain-language public content often aims for 70 or higher; technical writing for specialists can score lower.',
      },
      {
        question: 'How many words do I need for accurate readability scores?',
        answer:
          'Longer samples of at least 100 words give more reliable results, though the tool works on shorter passages with a scaled SMOG estimate.',
      },
      {
        question: 'Does the Readability Checker store or upload my text?',
        answer:
          'No. All calculations happen locally in your browser, so drafts, unpublished articles and private documents stay on your device.',
      },
      {
        question: 'Why do the four scores disagree with each other?',
        answer:
          'Each formula weights sentence length and syllable counts differently, so treat them as complementary estimates rather than a single exact grade.',
      },
      {
        question: 'How are syllables counted in the Readability Checker?',
        answer:
          'The tool estimates syllables from the letters in each word, which is accurate for most common English words but can miscount unusual names, abbreviations or technical terms.',
      },
      {
        question: 'Can I check readability for non-English text?',
        answer:
          'The four formulas were designed for English, so scores for other languages may be misleading even though the tool will still calculate them.',
      },
      {
        question: 'What counts as a complex word?',
        answer:
          'A complex word is generally one with three or more syllables, excluding common suffixes and proper names, and the tool lists examples it finds in your passage.',
      },
      {
        question: 'Does punctuation affect my readability score?',
        answer:
          'Yes. Sentence boundaries come from full stops, question marks and exclamation marks, so missing punctuation can merge sentences and skew the results.',
      },
      {
        question: 'Can the Readability Checker help with SEO?',
        answer:
          'Clearer, easier-to-read content keeps visitors engaged longer, which supports SEO indirectly, though readability is only one of many ranking factors.',
      },
      {
        question: 'Is a higher Flesch Reading Ease score always better?',
        answer:
          'Not always. Match the score to your audience: simple instructions should score high, while specialist academic or legal readers may expect denser language.',
      },
      {
        question: 'Why does my score change when I add a heading?',
        answer:
          'Scores are calculated from the whole text you paste, so including headings, navigation labels or code fragments can shift the averages; check body text alone for the most consistent result.',
      },
      {
        question: 'Can I use the Readability Checker for student essays?',
        answer:
          'Yes. Teachers and students can use it to check whether an essay matches the intended grade level before submitting it.',
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
      'phrase frequency analyzer',
      'keyword density calculator',
      'count repeated words online',
      'word occurrence counter',
      'text frequency analysis',
    ],
    seo: {
      title: 'Word Frequency Counter & Keyword Density | UtilityFlow',
      description:
        'Analyse word frequency and keyword density for 1, 2 and 3-word phrases with percentages, stop-word filtering and CSV export — free, private, in your browser.',
      primaryKeyword: 'word frequency counter',
      secondaryKeywords: ['keyword density checker', 'phrase frequency analyzer', 'word occurrence tool', 'ngram frequency counter', 'keyword density calculator'],
      longTailKeywords: [
        'count word frequency and density percentage online',
        'analyze 2 word and 3 word phrases in text',
        'export word frequency table to csv',
        'check keyword stuffing in article draft',
        'find most repeated words in text',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audit content drafts for keyword balance, overused phrasing, and multi-word n-gram patterns with instant frequency tables, stop-word filtering, and downloadable CSV reports.',
    instructions: [
      {
        title: 'Paste your content',
        description:
          'Insert an article draft, transcript, product copy or survey responses into the text box.',
      },
      {
        title: 'Choose 1-word, 2-word or 3-word phrases',
        description:
          'Switch between single words and multi-word n-grams to see individual terms or recurring phrases.',
      },
      {
        title: 'Filter stop words and set a minimum length',
        description:
          'Toggle stop-word exclusion to hide filler words like "the" and "and", and raise the minimum word length to focus on meaningful terms.',
      },
      {
        title: 'Review counts and density percentages',
        description:
          'Sort the table to see which words and phrases appear most often and what share of the text each one takes.',
      },
      {
        title: 'Spot overuse or keyword stuffing',
        description:
          'Compare your top terms against your target keywords and rewrite passages where one term dominates the text.',
      },
      {
        title: 'Copy or export the results as CSV',
        description:
          'Click Export CSV to download the table for a spreadsheet, or Copy CSV to paste it straight into a report.',
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
      {
        question: 'What is a Word Frequency Counter used for?',
        answer:
          'It counts how often each word or phrase appears in a text so you can spot repetition, check keyword balance and find recurring themes.',
      },
      {
        question: 'Is the Word Frequency Counter free to use?',
        answer:
          'Yes, it is free with no sign-up, and it runs entirely in your browser so your text is never uploaded.',
      },
      {
        question: 'What is keyword density and why does it matter?',
        answer:
          'Keyword density is the percentage of a text made up by a given term; a natural density helps search engines understand a topic, while an unnaturally high one looks like stuffing.',
      },
      {
        question: 'What is a good keyword density percentage?',
        answer:
          'There is no official target, but most editors aim for a natural 1–2% for a main keyword and focus on readable, helpful writing rather than hitting a number.',
      },
      {
        question: 'What are n-grams in the Word Frequency Counter?',
        answer:
          'N-grams are sequences of one, two or three consecutive words, such as "page speed" or "user engagement", counted as single phrases.',
      },
      {
        question: 'Why should I analyse 2-word and 3-word phrases?',
        answer:
          'Single words can be misleading, while multi-word phrases reveal the actual topics and repeated expressions in your content.',
      },
      {
        question: 'How does the stop-word filter work?',
        answer:
          'When enabled, it removes common grammatical words such as "the", "and" and "of" so the table highlights topical words instead of filler.',
      },
      {
        question: 'Can I change which words count as stop words?',
        answer:
          'The tool uses a built-in list of common English stop words, and you can toggle the filter on or off whenever you want to see the full table.',
      },
      {
        question: 'What does the minimum word length setting do?',
        answer:
          'It excludes words shorter than the length you choose, which helps hide abbreviations and single letters from the frequency table.',
      },
      {
        question: 'Does the Word Frequency Counter upload my text?',
        answer:
          'No. All counting happens locally in your browser, so private drafts and transcripts stay on your device.',
      },
      {
        question: 'Can I count word frequency in a long document?',
        answer:
          'Yes. Paste in long articles or transcripts and the tool counts every occurrence, though very large texts may take a moment to process.',
      },
      {
        question: 'How is the density percentage calculated for phrases?',
        answer:
          'Density equals the phrase occurrences multiplied by the words in the phrase, divided by the total words in the text, then multiplied by 100.',
      },
      {
        question: 'Can the Word Frequency Counter find repeated phrases in a transcript?',
        answer:
          'Yes. Switch to 2-word or 3-word mode to surface verbal tics and phrases a speaker repeats without realising it.',
      },
      {
        question: 'Does punctuation affect word counts?',
        answer:
          'The tool strips punctuation before counting, so "speed," and "speed" are counted as the same word.',
      },
      {
        question: 'Are uppercase and lowercase words counted together?',
        answer:
          'Yes. Words are lowercased before counting, so "Page" and "page" count as one term.',
      },
      {
        question: 'Can I export the frequency table to Excel?',
        answer:
          'Yes. Use Export CSV to download a file that opens directly in Excel or Google Sheets, or Copy CSV to paste the table anywhere.',
      },
      {
        question: 'How can I use word frequency to improve my writing?',
        answer:
          'Look for words you repeat unintentionally, replace them with varied synonyms, and check that your main topic keywords appear consistently but naturally.',
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
      'slug converter',
      'create url slug',
      'title to slug converter',
      'clean url slug maker',
      'batch slug generator',
    ],
    seo: {
      title: 'Text to Slug Converter – Clean SEO URLs | UtilityFlow',
      description:
        'Turn titles and headings into clean, SEO-friendly URL slugs with accent transliteration, hyphen or underscore separators and batch line mode — free and private.',
      primaryKeyword: 'text to slug converter',
      secondaryKeywords: ['url slug generator', 'slugify string', 'clean url generator', 'title to slug tool', 'seo slug maker'],
      longTailKeywords: [
        'convert article title to seo friendly url slug',
        'batch convert multiple headings to slugs',
        'slugify accented characters to ascii online',
        'hyphen or underscore slug separator',
        'generate slug from product name',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Turn blog titles, product names, and multi-line content calendars into clean, URL-safe ASCII slugs with automatic accent transliteration, delimiter controls, and optional stop-word removal.',
    instructions: [
      {
        title: 'Enter one or more titles',
        description:
          'Type a single title or paste multiple lines to generate a slug for each one in batch mode.',
      },
      {
        title: 'Choose a separator',
        description:
          'Pick hyphens (-) for SEO-friendly URLs or underscores (_) for file names and database keys.',
      },
      {
        title: 'Adjust lowercase and stop words',
        description:
          'Keep lowercase enforced for clean URLs and optionally strip common stop words like "the" and "and" for shorter slugs.',
      },
      {
        title: 'Review the generated slugs',
        description:
          'Check that each slug reads clearly, keeps its key words and contains no stray punctuation or double separators.',
      },
      {
        title: 'Copy slugs into your CMS or code',
        description:
          'Copy individual slugs or the whole batch into your content system, routing table or file names.',
      },
      {
        title: 'Fix a slug that looks wrong',
        description:
          'If a character survived oddly, check for unusual symbols or non-Latin script in the original title and simplify it before converting again.',
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
      {
        question: 'What is a Text to Slug Converter?',
        answer:
          'It turns a title or phrase into a clean, URL-safe slug by lowercasing it, removing punctuation and replacing spaces with hyphens or underscores.',
      },
      {
        question: 'Is the Text to Slug Converter free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs in your browser so your titles never leave your device.',
      },
      {
        question: 'What makes a slug SEO-friendly?',
        answer:
          'A good slug is short, readable, lowercase and built from real words that describe the page, with hyphens separating the words.',
      },
      {
        question: 'How long should a URL slug be?',
        answer:
          'Aim for three to five meaningful words; longer slugs get truncated in search results and are harder for readers to remember.',
      },
      {
        question: 'Why are slugs lowercase?',
        answer:
          'Lowercase URLs avoid duplicate-content problems, since some servers treat "/Guide" and "/guide" as different pages.',
      },
      {
        question: 'What happens to numbers in a slug?',
        answer:
          'Numbers are kept as-is, so a title like "Guide for 2026" becomes "guide-for-2026".',
      },
      {
        question: 'How are special characters handled in slugs?',
        answer:
          'Punctuation and symbols are removed, "&" becomes "and", and accented letters such as é are transliterated to plain ASCII equivalents.',
      },
      {
        question: 'Can the Text to Slug Converter handle non-English titles?',
        answer:
          'Latin-based accented characters are transliterated cleanly, but non-Latin scripts may be stripped, so check the output before publishing.',
      },
      {
        question: 'What are stop words in a slug?',
        answer:
          'Stop words are common words such as "a", "the" and "of" that add length without meaning; removing them makes shorter, cleaner URLs.',
      },
      {
        question: 'Should I remove stop words from every slug?',
        answer:
          'Not always. Keep them when they are needed for clarity, such as in "how-to" guides, and remove them only when the slug stays readable without them.',
      },
      {
        question: 'Can I convert many titles at once?',
        answer:
          'Yes. Paste one title per line and the tool generates a matching slug for every line in a single pass.',
      },
      {
        question: 'Does the Text to Slug Converter upload my titles?',
        answer:
          'No. All conversion happens locally in your browser, so unpublished titles and product names stay private.',
      },
      {
        question: 'Why do my slugs have double hyphens?',
        answer:
          'Double hyphens usually come from consecutive punctuation or spaces in the original title; clean up the title or remove the extra punctuation and convert again.',
      },
      {
        question: 'Can I use slugs for file names too?',
        answer:
          'Yes. Slugs make safe, readable file names, and the underscore separator option suits file systems and database keys.',
      },
      {
        question: 'What is the difference between a slug and a URL?',
        answer:
          'A slug is the readable tail of a URL, such as "image-compressor-guide" in example.com/image-compressor-guide.',
      },
      {
        question: 'Do slugs affect search rankings?',
        answer:
          'A clear slug helps search engines and readers understand a page at a glance, though it is only one small part of SEO.',
      },
      {
        question: 'Can I change a slug after publishing a page?',
        answer:
          'Yes, but set up a redirect from the old URL to the new one so existing links and search listings do not break.',
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
      'markdown editor online',
      'render markdown online',
      'markdown to html converter',
      'preview readme markdown',
      'markdown html exporter',
    ],
    seo: {
      title: 'Markdown Previewer – Live HTML Exporter | UtilityFlow',
      description:
        'Write Markdown and watch it render live, inspect the compiled HTML source, and copy or download a clean standalone HTML document — free, in your browser.',
      primaryKeyword: 'markdown previewer',
      secondaryKeywords: ['markdown to html converter', 'online markdown editor', 'markdown viewer', 'live markdown editor', 'markdown html export tool'],
      longTailKeywords: [
        'live markdown previewer with html export',
        'convert markdown readme to html online',
        'browser markdown editor without upload',
        'preview github readme before committing',
        'markdown to standalone html file',
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
        title: 'Watch the live preview',
        description:
          'The right pane renders your formatting instantly as you type, so you can check headings, lists and links without refreshing.',
      },
      {
        title: 'Switch to the Raw HTML tab',
        description:
          'Toggle above the right pane to inspect the compiled HTML markup the preview is built from.',
      },
      {
        title: 'Check code blocks and links',
        description:
          'Scroll through the preview to confirm fenced code blocks render correctly and links point where you expect.',
      },
      {
        title: 'Copy HTML or export a file',
        description:
          'Click Copy HTML for a snippet to paste into a CMS or email, or Export HTML to download a standalone HTML5 document.',
      },
      {
        title: 'Fix formatting that looks wrong',
        description:
          'If a list or code block does not render, check for a missing blank line before it or an unclosed backtick fence, then re-check the preview.',
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
      {
        question: 'What is a Markdown Previewer?',
        answer:
          'It renders Markdown text into formatted HTML in real time so you can see exactly how headings, lists, links and code will look before publishing.',
      },
      {
        question: 'Is the Markdown Previewer free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs in your browser so your drafts are never uploaded.',
      },
      {
        question: 'What Markdown syntax does the previewer support?',
        answer:
          'It supports headings, bold, italic, strikethrough, blockquotes, ordered and unordered lists, links, images and fenced code blocks.',
      },
      {
        question: 'Can I preview a GitHub README with this tool?',
        answer:
          'Yes. Paste your README.md content into the editor to check how it will render on GitHub before you commit it.',
      },
      {
        question: 'Does the Markdown Previewer support tables?',
        answer:
          'Table support depends on the Markdown flavour; check the preview to see whether your pipe tables render, and simplify them if they do not.',
      },
      {
        question: 'What is the difference between Copy HTML and Export HTML?',
        answer:
          'Copy HTML copies just the compiled body markup for pasting elsewhere, while Export HTML downloads a complete standalone HTML5 document.',
      },
      {
        question: 'Is the exported HTML a complete web page?',
        answer:
          'Yes. The export wraps your content in a full HTML5 document with head and body tags, ready to open in any browser.',
      },
      {
        question: 'Does the Markdown Previewer run JavaScript from my input?',
        answer:
          'No. Raw HTML tags are escaped and link protocols are restricted to safe web, relative, anchor and mailto schemes.',
      },
      {
        question: 'Can I use the Markdown Previewer offline?',
        answer:
          'The editor and preview run entirely in your browser with no uploads, so your drafts stay on your device while you work.',
      },
      {
        question: 'Does the Markdown Previewer save my work?',
        answer:
          'The tool does not store your text on any server, so copy or export anything important before closing the tab.',
      },
      {
        question: 'How do I add an image in Markdown?',
        answer:
          'Use the syntax ![alt text](image-url) and the image will render in the preview when the URL is reachable.',
      },
      {
        question: 'Why is my code block not rendering?',
        answer:
          'Make sure the opening and closing fences use three backticks on their own lines, with a blank line before the opening fence.',
      },
      {
        question: 'Can I convert Markdown to HTML for an email?',
        answer:
          'Yes. Copy the compiled HTML fragment and paste it into an email editor that accepts HTML, or export the full document first.',
      },
      {
        question: 'Can I write code blocks with a language tag?',
        answer:
          'Yes. Add the language name after the opening backticks, for example ```js, and the block renders as formatted code.',
      },
      {
        question: 'Can I paste Markdown copied from another editor?',
        answer:
          'Yes. Paste Markdown from any editor or notes app and the preview updates immediately.',
      },
      {
        question: 'What happens to links in the preview?',
        answer:
          'Links render as clickable anchors in the preview, and only safe protocols such as https, relative paths, anchors and mailto are allowed.',
      },
      {
        question: 'Can I print the rendered preview?',
        answer:
          'Yes. Export the HTML file and open it in your browser, then use the browser print function to print it or save it as a PDF.',
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
      'prepend text to each line',
      'append text to lines',
      'line number generator',
      'sql in clause formatter',
      'add comma to each line',
    ],
    seo: {
      title: 'Add Prefix & Suffix to Lines – Line Numbers | UtilityFlow',
      description:
        'Add line numbers, custom prefixes and suffixes to every line of text for lists, SQL queries and code arrays — free, instant and fully private in your browser.',
      primaryKeyword: 'add prefix and suffix to lines',
      secondaryKeywords: ['add line numbers online', 'line prefix suffix tool', 'wrap lines quotes', 'bulk line formatter', 'prepend append text lines'],
      longTailKeywords: [
        'wrap each line in single quotes and comma for sql',
        'add numbered list prefix to text lines',
        'bulk prepend and append text to every line',
        'add line numbers starting from zero',
        'format lines for javascript array',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prepend sequential line numbers, bullet characters, or opening quotes and append commas, semicolons, or closing tags across every line of a list in seconds.',
    instructions: [
      {
        title: 'Set your prefix and suffix',
        description:
          'Enter any text to add before or after each line, such as an opening quote, a bullet or a closing tag.',
      },
      {
        title: 'Turn on line numbers if needed',
        description:
          'Enable Add line numbers and set the start number and separator, for example "1. " or "01: ".',
      },
      {
        title: 'Paste your lines',
        description:
          'Enter one item per row in Input Lines, or click Load sample to see SQL-style quoting in action.',
      },
      {
        title: 'Choose how blank lines are handled',
        description:
          'Keep Skip empty lines checked so blank spacer lines are preserved without numbering or extra characters.',
      },
      {
        title: 'Review the formatted output',
        description:
          'Check that quotes, commas and numbers line up on every line before you use the result.',
      },
      {
        title: 'Copy the formatted lines',
        description:
          'Copy the whole block to your clipboard and paste it into your SQL query, code file or document.',
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
      {
        question: 'What is the Add Line Numbers & Prefix/Suffix tool?',
        answer:
          'It adds a custom prefix, suffix or sequential line number to every line of a list, so you can format text in bulk instead of editing each line by hand.',
      },
      {
        question: 'Is the line prefix and suffix tool free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs in your browser so your text never leaves your device.',
      },
      {
        question: 'Can I add a prefix without a suffix?',
        answer:
          'Yes. Fill in only the Line Prefix field and leave the suffix empty, or the other way round, and only the part you entered will be applied.',
      },
      {
        question: 'How do I wrap lines in quotes for an SQL IN clause?',
        answer:
          'Enter a single quote as the prefix and "\'," as the suffix, and each line becomes a quoted value followed by a comma.',
      },
      {
        question: 'Can I add a comma to the end of every line?',
        answer:
          'Yes. Put a comma in the Line Suffix field and every non-empty line will end with one.',
      },
      {
        question: 'How does zero-padding work for line numbers?',
        answer:
          'When pad zeros is enabled, numbers are padded to the same width, so a list of 100 lines shows 001, 002 and so on instead of 1, 2 and 100.',
      },
      {
        question: 'What separator should I use for numbered lines?',
        answer:
          'Common choices are ". " for plain numbered lists, ": " for labelled steps, and ") " for outline-style numbering.',
      },
      {
        question: 'Can I number lines starting from a number other than 1?',
        answer:
          'Yes. Enter any integer in the Start Number field to begin from 0, 100 or any other offset you need.',
      },
      {
        question: 'What happens to blank lines in my list?',
        answer:
          'With Skip empty lines enabled, blank lines are kept as-is without numbers or affixes; with it off, they are treated like any other line.',
      },
      {
        question: 'Can I use the tool to make a Markdown bullet list?',
        answer:
          'Yes. Enter "- " as the prefix and every line becomes a Markdown bullet point.',
      },
      {
        question: 'Can I turn lines into HTML list items?',
        answer:
          'Yes. Use "<li>" as the prefix and "</li>" as the suffix to wrap each line in list-item tags.',
      },
      {
        question: 'Does the tool upload my text to a server?',
        answer:
          'No. All formatting happens locally in your browser, which keeps sensitive IDs, query values and code private.',
      },
      {
        question: 'Can I format lines for a JavaScript or Python array?',
        answer:
          'Yes. Wrap lines in quotes with a trailing comma and paste the result straight into an array literal.',
      },
      {
        question: 'Is there a limit on how many lines I can format?',
        answer:
          'The tool handles long lists comfortably, though extremely large pastes may take a moment to process in the browser.',
      },
      {
        question: 'Why are some lines not getting numbered?',
        answer:
          'Check whether Skip empty lines is enabled, since blank lines are skipped by design and will not receive a number.',
      },
      {
        question: 'Can I add different prefixes to different lines?',
        answer:
          'No. The tool applies the same prefix and suffix to every line; for mixed formatting, run each group through the tool separately.',
      },
      {
        question: 'How do I remove a prefix I added by mistake?',
        answer:
          'Paste the formatted text into the Find and Replace tool or re-run the original list with the correct settings, since this tool only adds text and does not strip it.',
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
