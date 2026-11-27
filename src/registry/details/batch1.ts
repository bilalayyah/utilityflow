// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'word-counter': {
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
        title: 'Check reading and speaking time',
        description:
          'See the estimated reading time at 225 words per minute and speaking time at 130 words per minute so you can pace essays, talks, and video scripts before you publish.',
      },
      {
        title: 'Inspect repeated terms',
        description:
          'Scan the top frequent words panel to spot unintended repetition and tighten your phrasing before finalizing the draft.',
      },
      {
        title: 'Copy or download your text',
        description:
          'Use the copy button or download a .txt backup of your draft once you are happy with the counts.',
      },
      {
        title: 'Troubleshoot unexpected counts',
        description:
          'If a count looks off, check for pasted hidden characters or extra blank lines; clearing extra line breaks usually fixes paragraph and sentence totals.',
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
      {
        question: 'Is the Word Counter free to use?',
        answer:
          'Yes. The Word Counter is completely free with no sign-up, no word-count limit, and no account needed.',
      },
      {
        question: 'Does the Word Counter work offline?',
        answer:
          'Yes. Once the page has loaded, all counting runs locally in your browser, so it keeps working without an internet connection.',
      },
      {
        question: 'How are sentences counted?',
        answer:
          'Sentences are counted at sentence-ending punctuation such as periods, exclamation marks, and question marks, so abbreviations like Dr. may add an extra sentence.',
      },
      {
        question: 'What counts as a word in the Word Counter?',
        answer:
          'Any sequence of characters separated by whitespace counts as one word, including numbers, hyphenated terms, and words with apostrophes.',
      },
      {
        question: 'Can I count words in a PDF or Word document?',
        answer:
          'Not directly. Copy the text out of your document and paste it into the Word Counter to see its counts instantly.',
      },
      {
        question: 'Does the Word Counter count characters with spaces?',
        answer:
          'Yes. It shows characters both with and without spaces, so you can check limits that count either way.',
      },
      {
        question: 'How accurate is the reading time estimate?',
        answer:
          'It is an estimate based on an average silent reading pace of 225 words per minute; individual readers may be faster or slower.',
      },
      {
        question: 'What is the speaking time estimate based on?',
        answer:
          'Speaking time uses a conversational presentation pace of 130 words per minute, which suits talks, video scripts, and podcast intros.',
      },
      {
        question: 'Does the Word Counter handle other languages?',
        answer:
          'Yes. It counts whitespace-separated words in any language, though reading-time estimates are calibrated for English text.',
      },
      {
        question: 'Can I check a word limit for an essay or assignment?',
        answer:
          'Yes. Paste your essay and compare the live word total against your target; the summary strip shows the exact count as you edit.',
      },
      {
        question: 'Does the Word Counter count numbers as words?',
        answer:
          'Yes. Standalone numbers separated by spaces are counted as words, just as most desktop word processors count them.',
      },
      {
        question: 'Why does my count differ from Microsoft Word or Google Docs?',
        answer:
          'Different tools split hyphenated words, em dashes, and numbers slightly differently, so small differences of a few words are normal.',
      },
      {
        question: 'What are the top frequent words shown for?',
        answer:
          'The panel lists your six most repeated words so you can spot overused terms and vary your vocabulary before publishing.',
      },
      {
        question: 'Can I count words in a specific paragraph only?',
        answer:
          'Yes. Paste just that paragraph into the editor and the live totals will reflect only the text you entered.',
      },
      {
        question: 'Can I use the Word Counter for social media captions?',
        answer:
          'Yes. Paste your caption to check its word total and reading time, and use the Character Counter if you also need to check character limits.',
      },
      {
        question: 'Can I use the Word Counter on my phone?',
        answer:
          'Yes. It works in any modern mobile browser with the same live counts, reading time, and copy options.',
      },
    ],
    howItWorks: [
      'The word counter splits trimmed text on whitespace runs, so every sequence separated by spaces, tabs, or line breaks counts as one word, including numbers, hyphenated terms, and words with apostrophes.',
      'Characters are measured two ways: the raw string length, which counts every character including spaces, and the same length after all whitespace is stripped.',
      'Sentences are detected by splitting on runs of periods, exclamation marks, and question marks, while paragraphs are split on blank lines, and lines are split on line breaks.',
      'Reading time divides the word total by 225 words per minute and speaking time by 130, rounding to the nearest second with a one-second minimum.',
      'The frequent-words panel lowercases each token, strips edge punctuation, ignores tokens under two characters, and lists the six most common words with their share.',
    ],
    supportedFormats: ['Plain text', 'Multi-line text', 'Emoji', 'Numbers and dates', 'Hyphenated words', 'Apostrophes', 'Line breaks', 'UTF-8 text'],
    limitations: [
      'Abbreviations such as Dr. or e.g. end with a period, so the splitter counts them as sentence ends and the sentence total can read high.',
      'Words are split on whitespace only, so a token joined by punctuation without a space counts as one word rather than two.',
      'Reading and speaking times use fixed averages of 225 and 130 words per minute, so they are planning estimates, not measurements of any real reader or speaker.',
      'Character counts use JavaScript string length, so an emoji or other character outside the basic multilingual plane counts as two characters, not one.',
    ],
  },
  'character-counter': {
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
      {
        title: 'Use the byte size for technical limits',
        description:
          'Check the UTF-8 byte total when validating database columns, API payloads, or file fields that limit by bytes rather than characters.',
      },
      {
        title: 'Compare with and without spaces',
        description:
          'Switch between the with-spaces and without-spaces totals when a form or platform counts only non-whitespace characters.',
      },
      {
        title: 'Troubleshoot a count that looks wrong',
        description:
          'If a count seems off, check for invisible characters such as trailing spaces or pasted line breaks, which are counted in the with-spaces total.',
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
      {
        question: 'Is the Character Counter free to use?',
        answer:
          'Yes. The Character Counter is completely free with no sign-up, no character limit, and no account needed.',
      },
      {
        question: 'What is the difference between characters with and without spaces?',
        answer:
          'Characters with spaces include every space between words, while characters without spaces exclude them, which matters when a platform counts only visible characters.',
      },
      {
        question: 'Does the Character Counter count emojis?',
        answer:
          'Yes. Each emoji counts as characters, and because most emojis use multiple UTF-8 bytes, the byte total will be higher than the character count.',
      },
      {
        question: 'How many characters can I paste into the Character Counter?',
        answer:
          'There is no set limit. Counting runs entirely in your browser, so even very long documents are measured instantly.',
      },
      {
        question: 'What is the SEO meta title character limit?',
        answer:
          'Search engines typically display around 50 to 60 characters of a title tag, so keeping titles in that range avoids truncation in results.',
      },
      {
        question: 'What is the meta description character limit?',
        answer:
          'Search engines usually display about 150 to 160 characters of a meta description, so the tool tracks your progress toward that range.',
      },
      {
        question: 'How many characters fit in a single SMS?',
        answer:
          'A standard SMS segment holds 160 characters using the basic GSM alphabet; longer messages are split into multiple segments.',
      },
      {
        question: 'Does the Character Counter count tabs and line breaks?',
        answer:
          'Yes. Tabs and line breaks are counted in the with-spaces total, so pasted text with extra blank lines will show a higher count.',
      },
      {
        question: 'Does the Character Counter include punctuation in the count?',
        answer:
          'Yes. Punctuation marks count as characters, and they are included in both the with-spaces and without-spaces totals.',
      },
      {
        question: 'What character limit does X (Twitter) use?',
        answer:
          'X posts are limited to 280 characters for most accounts, and the limit bars in this tool show your progress toward that threshold.',
      },
      {
        question: 'Can I check an Instagram caption length?',
        answer:
          'Yes. Paste your caption and watch the Instagram limit meter; captions are limited to 2,200 characters.',
      },
      {
        question: 'Does the Character Counter work with non-English text?',
        answer:
          'Yes. It counts characters in any script, and the UTF-8 byte total shows the true storage size for accented letters and non-Latin characters.',
      },
      {
        question: 'Can I use the Character Counter for a LinkedIn post?',
        answer:
          'Yes. Paste your post and check the LinkedIn limit meter, which tracks the 3,000-character post limit.',
      },
      {
        question: 'Does the Character Counter save or upload my text?',
        answer:
          'No. All counting happens locally in your browser, and your text is never uploaded, stored, or shared.',
      },
      {
        question: 'Why does my count differ from Microsoft Word?',
        answer:
          'Different tools treat line breaks, tabs, and hidden formatting characters differently, so small differences between counters are normal.',
      },
      {
        question: 'What counts as a letter versus a digit?',
        answer:
          'Letters are alphabetic characters in any script, while digits are numeric characters from 0 to 9; both are shown as separate totals.',
      },
      {
        question: 'Can I check character count for a password or username field?',
        answer:
          'Yes. Paste the value into the tool to verify it meets a minimum or maximum length requirement before submitting a form.',
      },
    ],
    howItWorks: [
      'The character counter reads the raw string length for the with-spaces total, then strips every whitespace character with a regular expression and measures again for the without-spaces total.',
      'Letters are counted by matching A to Z in either case, digits by matching 0 to 9, and the difference between the two character totals gives the whitespace count.',
      'Byte size is measured by encoding the text as UTF-8 with TextEncoder, so accented letters count as two bytes, most emoji as four, and plain ASCII letters as one byte each.',
      'Each platform bar divides the with-spaces total by a fixed limit, 60 for a meta title, 160 for a meta description or SMS segment, 280 for an X post, 125 for an Instagram caption preview, and 3000 for LinkedIn, and caps the bar at 100 percent.',
    ],
    supportedFormats: ['Plain text', 'UTF-8 text', 'Emoji', 'Accented characters', 'Numbers', 'Line breaks', 'Tabs and spaces', 'Multi-paragraph text'],
    limitations: [
      'Letters are matched only in the A to Z range, so letters from other alphabets, such as Cyrillic, Arabic, or Chinese characters, are counted as characters but not as letters.',
      'Platform limits are fixed reference values, not live rules, so a platform that changes its limit or counts characters differently, such as X weighting some characters double, will disagree with the bar.',
      'The UTF-8 byte total describes storage size, not display width, so it does not predict how much screen space the text occupies or how a platform truncates it.',
      'Emoji and other characters outside the basic multilingual plane count as two characters in the JavaScript string length, even though they appear as a single symbol.',
    ],
  },
  'case-converter': {
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
      {
        title: 'Fix ALL CAPS text in one click',
        description:
          'Paste text typed with Caps Lock on and choose Sentence case to restore normal capitalization across every sentence.',
      },
      {
        title: 'Convert identifiers for code',
        description:
          'Paste a plain label such as "user account status" and pick camelCase, PascalCase, snake_case, or kebab-case to get a ready-to-use variable name.',
      },
      {
        title: 'Troubleshoot odd capitalization',
        description:
          'If Title Case leaves a word lowercase, it is likely a minor word like "and" or "of"; retype it or apply Uppercase to that word on its own.',
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
      {
        question: 'Is the Case Converter free to use?',
        answer:
          'Yes. The Case Converter is completely free with no sign-up, no text length limit, and no account needed.',
      },
      {
        question: 'What is the difference between Title Case and Sentence case?',
        answer:
          'Title Case capitalizes most words in a heading, while Sentence case capitalizes only the first word of each sentence and proper nouns, like a normal sentence.',
      },
      {
        question: 'What is camelCase used for?',
        answer:
          'camelCase is the standard naming style for variables and functions in JavaScript and many other programming languages, for example userAccountStatus.',
      },
      {
        question: 'What is snake_case used for?',
        answer:
          'snake_case separates words with underscores and is commonly used for Python variables, database columns, and file names, for example user_account_status.',
      },
      {
        question: 'What is kebab-case used for?',
        answer:
          'kebab-case separates words with hyphens and is commonly used for URLs, CSS class names, and HTML attributes, for example user-account-status.',
      },
      {
        question: 'What is PascalCase used for?',
        answer:
          'PascalCase capitalizes every word with no separators and is commonly used for class names and component names, for example UserAccountStatus.',
      },
      {
        question: 'Can the Case Converter fix text typed in ALL CAPS?',
        answer:
          'Yes. Paste the all-caps text and choose Sentence case or lowercase to restore normal capitalization in one click.',
      },
      {
        question: 'Does the Case Converter work with numbers and symbols?',
        answer:
          'Yes. Numbers, punctuation, and symbols pass through unchanged; only letters are converted.',
      },
      {
        question: 'Can I convert a whole paragraph at once?',
        answer:
          'Yes. Paste the entire paragraph and the converter applies the chosen case across all its sentences and line breaks.',
      },
      {
        question: 'Does Title Case capitalize words after a colon?',
        answer:
          'Words after a colon are treated like other words in the title, so major words are capitalized and minor words stay lowercase.',
      },
      {
        question: 'Does the Case Converter handle other languages?',
        answer:
          'Yes. It converts letters in any language that uses uppercase and lowercase forms, though Title Case minor-word rules are based on English.',
      },
      {
        question: 'Can I convert snake_case back to normal words?',
        answer:
          'Yes. Paste the identifier and choose Sentence case or Title Case; underscores are treated as word separators and replaced with spaces.',
      },
      {
        question: 'What happens to line breaks when I convert case?',
        answer:
          'Line breaks are preserved exactly, so multi-line text keeps its structure after conversion.',
      },
      {
        question: 'Does the Case Converter save or upload my text?',
        answer:
          'No. Conversion runs locally in your browser, and your text is never uploaded, stored, or shared.',
      },
      {
        question: 'Can I convert text with mixed cases already applied?',
        answer:
          'Yes. The converter first splits words at underscores, hyphens, and case transitions, so mixed-case input converts cleanly.',
      },
      {
        question: 'Can I use the Case Converter for YouTube titles?',
        answer:
          'Yes. Paste your video title and apply Title Case for a consistent, professional headline style.',
      },
      {
        question: 'Does the Case Converter work on my phone?',
        answer:
          'Yes. It works in any modern mobile browser with the same one-click conversions and copy button.',
      },
    ],
    howItWorks: [
      'Uppercase and lowercase use the built-in case mapping of the browser, which converts every letter in the text at once while leaving numbers, punctuation, and spacing untouched.',
      'Title Case lowercases the text first, then capitalises the first letter of each word, except small words such as and, of, and the, which stay lowercase unless they open or close the text.',
      'Sentence case lowercases everything, then capitalises the first letter of the text and the first letter after each period, exclamation mark, question mark, or line break.',
      'The code styles split words on camelCase boundaries, underscores, and hyphens, strip non-alphanumeric characters, then rejoin the words with the separator or capitalisation of that style: camelCase, PascalCase, snake_case, kebab-case, or CONSTANT_CASE.',
      'Alternating case walks the text character by character, flipping between upper and lower for letters only, so spaces and punctuation keep their place and do not reset the pattern.',
    ],
    supportedFormats: ['Plain text', 'Headings and titles', 'Variable names', 'URLs and slugs', 'Multi-line text', 'Mixed case text', 'Punctuation and symbols', 'Numbers'],
    limitations: [
      'Title Case follows a fixed list of minor words, so names, brand spellings, and style-guide exceptions, such as always capitalising a particular word, are not respected.',
      'The code styles strip accents and non-ASCII letters when splitting words, so a word such as cafe with an accent loses the accent and becomes plain cafe in camelCase, snake_case, and the other identifier styles.',
      'Sentence case only recognises periods, exclamation marks, question marks, and line breaks as sentence ends, so abbreviations and decimal numbers can trigger a capital letter in the wrong place.',
      'Conversions replace the text in place, so the original wording is not kept by the tool, and copying the result before converting again is the only way to keep the earlier version.',
    ],
  },
  'remove-duplicate-lines': {
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
      {
        title: 'Sort the cleaned list alphabetically',
        description:
          'Enable Sort alphabetically if you want the unique lines ordered A to Z instead of keeping their original first-occurrence order.',
      },
      {
        title: 'Check the summary counts',
        description:
          'Review the original line count, unique count, and duplicates removed in the summary header to confirm the cleanup worked as expected.',
      },
      {
        title: 'Troubleshoot lines that did not dedupe',
        description:
          'If two lines that look identical remain, check for hidden trailing spaces or different capitalization, then enable Trim whitespace or turn off Case-sensitive and run it again.',
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
      {
        question: 'Is the Remove Duplicate Lines tool free to use?',
        answer:
          'Yes. The tool is completely free with no sign-up, no line limit, and no account needed.',
      },
      {
        question: 'What counts as a duplicate line?',
        answer:
          'Two lines are duplicates when their text matches exactly under your current settings, including the case sensitivity and whitespace trimming options you chose.',
      },
      {
        question: 'Does it work with comma-separated lists?',
        answer:
          'Not directly. The tool compares whole lines, so split a comma-separated list into one item per line first, then paste it in.',
      },
      {
        question: 'Can I remove duplicate lines from a CSV file?',
        answer:
          'Yes. Copy the column or rows from your CSV, paste them as lines, deduplicate, and paste the clean list back into your spreadsheet.',
      },
      {
        question: 'What happens to empty lines?',
        answer:
          'Empty lines are treated like any other line, so enabling "Remove empty lines" clears them from the output along with the duplicates.',
      },
      {
        question: 'Can I remove duplicates from a list of URLs?',
        answer:
          'Yes. Paste one URL per line and the tool removes repeated URLs, which is useful for cleaning keyword exports and sitemap lists.',
      },
      {
        question: 'How many lines can I deduplicate at once?',
        answer:
          'There is no set limit. Deduplication runs entirely in your browser, so multi-thousand-line lists are handled smoothly in client memory.',
      },
      {
        question: 'Does the tool keep the first or last occurrence of a duplicate?',
        answer:
          'It keeps the first occurrence of each unique line and removes later repeats, which preserves your original ordering.',
      },
      {
        question: 'Can I remove duplicate email addresses from a list?',
        answer:
          'Yes. Paste one address per line with case sensitivity off and whitespace trimming on, and duplicate addresses collapse into a single entry.',
      },
      {
        question: 'Does sorting change which lines are kept?',
        answer:
          'No. Sorting only reorders the unique lines alphabetically after deduplication; it does not change which lines are considered duplicates.',
      },
      {
        question: 'Does the tool remove duplicate words inside a single line?',
        answer:
          'No. It compares whole lines, so duplicates within one line are untouched; use the Find and Replace tool for word-level cleanup.',
      },
      {
        question: 'Does the tool work with numbers or IP addresses?',
        answer:
          'Yes. Any line content works, including numbers, IP addresses, SKUs, and codes, as long as each item is on its own line.',
      },
      {
        question: 'Can I remove duplicate lines from server logs?',
        answer:
          'Yes. Paste the log lines and deduplicate them to isolate unique errors or repeated IP entries for faster troubleshooting.',
      },
      {
        question: 'Does Remove Duplicate Lines save or upload my list?',
        answer:
          'No. Deduplication runs locally in your browser, and your list is never uploaded, stored, or shared.',
      },
      {
        question: 'What if my list uses semicolons instead of line breaks?',
        answer:
          'The tool treats each line as one item, so replace semicolons with line breaks first, then paste the list to deduplicate it.',
      },
      {
        question: 'Can I remove duplicates while keeping blank lines?',
        answer:
          'Yes. Leave "Remove empty lines" unchecked and blank lines will be kept in the output alongside the deduplicated items.',
      },
      {
        question: 'Does the tool work on my phone?',
        answer:
          'Yes. It works in any modern mobile browser with the same deduplication options and copy button.',
      },
    ],
    howItWorks: [
      'The tool splits the input on line breaks, then walks the lines in order, keeping the first occurrence of each line and dropping later repeats, so the original order of unique lines is preserved.',
      'Each line is compared through a key: with case sensitivity off, the key is the lowercased line, so Apple@example.com and apple@example.com count as the same line.',
      'Trimming, on by default, strips leading and trailing spaces from each line before comparison and output, so a line with extra spaces still matches its clean twin.',
      'Empty lines are dropped when the remove-empty option is on, and the optional alphabetical sort orders the surviving lines with a locale-aware comparison that follows the case-sensitivity setting.',
    ],
    supportedFormats: ['Email lists', 'One item per line', 'CSV values', 'URLs', 'Log lines', 'Keywords', 'SKUs and codes', 'Multi-line text'],
    limitations: [
      'Comparison is whole-line only, so two lines that differ by a single character, such as a typo in an email address, are treated as different lines and both are kept.',
      'With case sensitivity off, lines that differ only in capitalisation collapse into one, which can lose a meaningful distinction in case-sensitive data such as passwords or codes.',
      'Sorting uses the locale comparison of the browser, so the order can vary slightly between browsers and locales for accented characters, symbols, and mixed-case lines.',
      'The tool works on lines, not words, so duplicates inside a single line, such as a repeated word in a sentence, are never detected or removed.',
    ],
  },
  'text-diff-checker': {
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
      {
        title: 'Check the change summary',
        description:
          'Read the counts of added, removed, and unchanged lines to get a quick sense of how much changed between the two versions.',
      },
      {
        title: 'Compare a specific section only',
        description:
          'Paste just the section you care about into both boxes to diff a single paragraph or config block without the rest of the document.',
      },
      {
        title: 'Troubleshoot a diff that looks wrong',
        description:
          'If nearly every line shows as changed, the two texts may use different line endings or indentation; enable Ignore whitespace and check that both pastes start at the same line.',
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
      {
        question: 'Is the Text Diff Checker free to use?',
        answer:
          'Yes. The Text Diff Checker is completely free with no sign-up, no comparison limit, and no account needed.',
      },
      {
        question: 'What is the difference between added and removed lines?',
        answer:
          'Added lines appear only in the modified text and are marked with a + symbol, while removed lines appear only in the original text and are marked with a - symbol.',
      },
      {
        question: 'Can I compare two files instead of pasted text?',
        answer:
          'Not directly. Copy the contents of each file and paste them into the Original Text and Modified Text boxes to compare them.',
      },
      {
        question: 'Does the Text Diff Checker work with code?',
        answer:
          'Yes. It compares any line-based text, including source code, so you can spot changed lines between two versions of a script or stylesheet.',
      },
      {
        question: 'Can I compare JSON or YAML configuration files?',
        answer:
          'Yes. Paste each version into the two boxes and the diff will highlight changed keys, values, and lines in your configuration.',
      },
      {
        question: 'What does "Ignore case" do?',
        answer:
          'It treats uppercase and lowercase letters as equal during comparison, so a line that only changed capitalization will not be marked as different.',
      },
      {
        question: 'Can I compare texts in different languages?',
        answer:
          'Yes. The comparison works on any text, though lines in different languages will naturally show as changed because their content differs.',
      },
      {
        question: 'Does the Text Diff Checker show character-level changes?',
        answer:
          'No. The comparison works line by line, so a changed word marks its whole line as changed; for finer detail, compare the two lines separately.',
      },
      {
        question: 'Can I compare a document with its older version?',
        answer:
          'Yes. Paste the older version as the Original Text and the newer version as the Modified Text to see every addition and deletion.',
      },
      {
        question: 'How are line numbers shown in the comparison?',
        answer:
          'Each line keeps its own number from its original text, so you can trace a changed line back to its exact position in either version.',
      },
      {
        question: 'Does the Text Diff Checker save or upload my text?',
        answer:
          'No. Comparison runs locally in your browser, and your texts are never uploaded, stored, or shared.',
      },
      {
        question: 'Can I compare legal contracts with the Text Diff Checker?',
        answer:
          'Yes. Paste the two contract versions to spot changed clauses, though you should always have a lawyer review important legal changes.',
      },
      {
        question: 'What happens if I paste the same text in both boxes?',
        answer:
          'The comparison will show zero added and zero removed lines, confirming the two texts are identical.',
      },
      {
        question: 'Can I compare text with different line endings?',
        answer:
          'Yes. If line endings differ, the diff may mark lines as changed; enabling Ignore whitespace usually clears these formatting-only differences.',
      },
      {
        question: 'Does the Text Diff Checker work with large documents?',
        answer:
          'Yes. Documents up to several thousand lines compare almost instantly in the browser, with no server upload involved.',
      },
      {
        question: 'Can I use the Text Diff Checker for translation reviews?',
        answer:
          'Yes. Paste the original translation and the revised translation to review every edited line side by side.',
      },
      {
        question: 'Does the Text Diff Checker work on my phone?',
        answer:
          'Yes. It works in any modern mobile browser with the same side-by-side comparison and highlighting.',
      },
    ],
    howItWorks: [
      'The checker splits both texts into lines and builds a longest-common-subsequence table, which finds the largest set of lines that appear in the same order in both versions.',
      'Walking the table from the top, a line present in both versions is marked unchanged, a line only in the original is marked removed, and a line only in the modified text is marked added.',
      'Ignore whitespace collapses every run of spaces and tabs inside a line to a single space and trims the ends before comparing, so reformatting alone does not show as a change.',
      'Ignore case lowercases each line before comparing, so a change in capitalisation alone is treated as no change, while the displayed lines keep their original casing.',
    ],
    supportedFormats: ['Plain text', 'Configuration files', 'Code snippets', 'Contracts and clauses', 'Multi-line lists', 'CSV text', 'Log output', 'Markdown source'],
    limitations: [
      'The diff works line by line, so a changed word inside a long line marks the whole line as removed and added, with no highlighting of the exact word that changed.',
      'The longest-common-subsequence table grows with the product of the two line counts, so very large files with thousands of lines can slow the browser or use substantial memory.',
      'When the same line appears several times, the algorithm may pair occurrences differently from a human reader, so moved blocks can appear as a removal plus an addition rather than a move.',
      'Ignore whitespace only normalises spacing inside lines, so it does not ignore blank-line insertions or deletions, which still appear as added or removed lines.',
    ],
  },
  'whitespace-remover': {
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
    howItWorks: [
      'The tool first normalises Windows line endings to plain line feeds, so mixed line endings from pasted files do not create phantom blank lines.',
      'Tabs are replaced with a single space each, then runs of two or more spaces inside a line collapse to one, while single spaces between words are left alone.',
      'The line-break mode decides the fate of every newline: keep them, drop blank lines only, replace each run with a single space, or remove them entirely to join the text into one block.',
      'Trimming strips spaces from the start and end of every line and from the whole result, and the character counter beside the output shows exactly how many characters were removed.',
    ],
    supportedFormats: ['Pasted PDF text', 'Spreadsheet copies', 'Email text', 'Code snippets', 'Multi-line text', 'Tabs and spaces', 'Windows line endings', 'Blank-line heavy text'],
    limitations: [
      'Collapsing spaces is purely mechanical, so it cannot tell a meaningful double space, such as the gap after a sentence in older typing styles, from an accidental one.',
      'Removing all line breaks joins lines without adding a space, so two lines that end and begin without punctuation run together into a single word at the join.',
      'The tool only handles spaces, tabs, and line breaks, so other invisible characters, such as non-breaking spaces or zero-width characters, are left untouched.',
      'Trimming line edges removes intentional indentation, so pasted code loses its visual nesting unless the trim option is switched off first.',
    ],
  },
  'sort-lines': {
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
    howItWorks: [
      'The tool splits the input on line breaks, drops blank lines when that option is on, and optionally removes duplicates by keeping the first occurrence of each line.',
      'Alphabetical sorting uses the Intl.Collator of the browser, which compares lines by language-aware rules rather than raw character codes, so accented letters sort near their base letters.',
      'Natural sorting enables the numeric mode of the collator, so Item 2 sorts before Item 10 instead of after it, which is the order a plain code-point sort would produce.',
      'Length modes compare line lengths first and use the collator only to break ties, reverse order flips the list end to end, and shuffle reorders lines with a seeded pseudo-random generator.',
    ],
    supportedFormats: ['Word lists', 'Bibliographies', 'Inventory SKUs', 'Code imports', 'Email lists', 'Names', 'Numbers as text', 'Multi-line text'],
    limitations: [
      'Sorting follows the locale of the browser, so the same list can sort in a slightly different order in different browsers or language settings, especially for accented characters.',
      'The shuffle is produced by a simple seeded generator, not a cryptographic random source, so it is fine for reordering a list but not suitable for anything needing true randomness.',
      'Reverse order only flips the current line sequence, so it does not sort descending, and applying it to an unsorted list gives a reversed unsorted list.',
      'Deduplication compares whole lines, so lines that differ by trailing spaces or punctuation are treated as different entries unless the text is cleaned first.',
    ],
  },
  'find-and-replace': {
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
    howItWorks: [
      'The tool builds a regular expression from the search text, escaping special characters for plain matching or using the pattern as written in regex mode, then replaces every match at once.',
      'Case-insensitive matching is the default, adding the global and ignore-case flags, while the case-sensitive option drops the ignore-case flag so capitalisation must match exactly.',
      'Whole-word mode wraps the escaped search text in word boundaries, so searching for cat no longer matches catalogue or scatter, and the option is disabled while regex mode is on.',
      'In regex mode, capture groups can be reused in the replacement with $1, $2, and similar references, so Order #(\\d+) can be rewritten as Ref-$1.',
    ],
    supportedFormats: ['Plain text', 'CSV snippets', 'Code blocks', 'Prose and articles', 'Email text', 'URLs', 'Regular expressions', 'Multi-line text'],
    limitations: [
      'Replacements happen all at once with no undo inside the tool, so a broad pattern that matches more than intended can only be fixed by re-pasting the original text.',
      'An invalid regular expression shows an error and leaves the output unchanged, but a valid pattern that is too greedy can still replace far more than expected.',
      'Word boundaries follow JavaScript regex rules, so they do not work as expected around accented letters or non-Latin scripts, where \\b may not recognise the word edge.',
      'The match count counts non-overlapping matches only, so overlapping occurrences of a pattern, such as aa inside aaaa, are counted once per position the engine advances past.',
    ],
  },
  'text-reverser': {
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
    howItWorks: [
      'Reverse Characters flips the whole input end to end using Array.from, which splits the text into Unicode code points, so emoji and other multi-byte symbols stay intact instead of splitting into halves.',
      'Reverse Word Order works line by line, trimming each line, splitting it on whitespace, and reversing the word sequence while keeping the lines themselves in their original order.',
      'Reverse Each Word keeps the word order and the spacing between words, but flips the letters inside every non-whitespace run, so only the words themselves are mirrored.',
      'Reverse Line Order splits the text on line breaks and flips the sequence of lines, leaving the characters inside each line exactly as they were.',
    ],
    supportedFormats: ['Plain text', 'Multi-line lists', 'Sentences', 'Single words', 'Emoji', 'Code snippets', 'Palindrome checks', 'Mixed-case text'],
    limitations: [
      'Reversing characters flips punctuation and brackets too, so the output is a mirror image, not readable text, and paired marks such as parentheses end up facing the wrong way.',
      'Reverse Word Order trims each line and joins words with single spaces, so extra spacing and indentation inside a line are lost in the output.',
      'Characters built from a base letter plus combining marks, such as an accented letter typed as two code points, can separate when reversed, leaving the accent on the wrong letter.',
      'The tool reverses text only, so it does not check palindromes, translate mirrored writing, or restore text that was reversed by another tool with different rules.',
    ],
  },
  'lorem-ipsum-generator': {
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
    howItWorks: [
      'The generator draws from a fixed pool of twelve classic lorem ipsum sentences plus the traditional opening sentence, cycling through the pool in order with an offset that changes on every regenerate.',
      'Paragraph mode builds each paragraph from exactly four sentences, sentence mode joins the requested number of sentences with spaces, and word mode streams words from the pool until the count is reached.',
      'The classic-start option forces the first sentence, or the first words in word mode, to be the familiar Lorem ipsum dolor sit amet opening instead of a pool sentence.',
      'The HTML option wraps each paragraph or the whole word-mode output in <p> tags, and the counters strip those tags before counting words so the totals describe the visible text.',
    ],
    supportedFormats: ['Paragraphs', 'Sentences', 'Words', 'HTML <p> tags', 'Plain text', 'Wireframe copy', 'Typography samples', 'Layout prototypes'],
    limitations: [
      'The text comes from a small fixed pool of twelve sentences, so large requests repeat sentences, and the output is never unique or varied beyond the regenerate offset.',
      'Word mode can end mid-sentence, and its final word is capitalised with a period added, so the result reads as a fragment rather than finished prose.',
      'Counts are capped at 30 paragraphs or sentences and 500 words, so larger blocks must be generated in several runs and joined by hand.',
      'Lorem ipsum is placeholder Latin with no real meaning, so it cannot test readability, translation, or content accuracy, only layout, spacing, and typography.',
    ],
  },
  'readability-checker': {
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
    howItWorks: [
      'The checker counts words with a letter-and-digit pattern, splits sentences on runs of periods, exclamation marks, and question marks, and estimates syllables by counting vowel groups after stripping common silent endings.',
      'Flesch Reading Ease combines average sentence length and average syllables per word into a 0 to 100 score, clamped at both ends, and labels the result from Very Easy to Very Difficult.',
      'Flesch-Kincaid Grade Level uses the same two averages to estimate a US school grade, Gunning Fog adds the share of words with three or more syllables and multiplies by 0.4, and SMOG uses the polysyllable count and sentence count under a square root.',
      'Complex words are any words with three or more estimated syllables, and the tool lists up to twelve distinct examples so the words pushing the scores up are visible.',
    ],
    supportedFormats: ['Articles and essays', 'Blog posts', 'Landing page copy', 'Documentation', 'Emails', 'Plain text', 'Multi-paragraph text', 'English prose'],
    limitations: [
      'Syllable counting strips silent endings and counts vowel groups in Latin letters only, so irregular words can be miscounted and text in other scripts is largely ignored by the word matcher.',
      'The formulas only measure sentence length and word length, so they cannot judge meaning, accuracy, logic, or tone, and a clear short text can still score as difficult.',
      'SMOG was designed for passages of at least thirty sentences, so its result on a short paragraph is a rough guide rather than a reliable grade.',
      'Lists, headings, tables, and dialogue do not behave like sentences, so pasting a whole page layout instead of running prose produces unreliable scores.',
    ],
  },
  'word-frequency-counter': {
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
          'It counts how often each word or phrase appears in a text so you can spot repetition, check keyword balance and find recurring themes. To audit a target keyword in a draft, see Keyword Density Checker.',
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
    howItWorks: [
      'The tool lowercases the text and extracts tokens of letters, digits, and apostrophes, then strips stray apostrophes from the ends of tokens before counting.',
      'Single-word mode counts each token, while two- and three-word modes slide a window across the token stream and count every overlapping phrase, skipping phrases made entirely of stop words.',
      'Stop-word filtering uses a fixed list of thirty common English words, such as the, and, and of, and the minimum-length control drops short tokens in single-word mode only.',
      'Density divides each term count, multiplied by the phrase length, by the total token count, and the table shows the top fifty terms sorted by count, then alphabetically.',
    ],
    supportedFormats: ['Article drafts', 'Product descriptions', 'Blog posts', 'SEO copy', 'Plain text', 'Single words', 'Two-word phrases', 'Three-word phrases'],
    limitations: [
      'Tokens are matched as Latin letters, digits, and apostrophes only, so words in other scripts are ignored and hyphenated words are split at the hyphen.',
      'The stop-word list is a fixed set of thirty English words, so common words in other languages, and domain filler words such as click or here, are counted as meaningful terms.',
      'Density is a share of tokens in the pasted text, not a search-engine metric, so it says nothing about ranking, and a high density can simply mean a short text.',
      'Only the top fifty terms are shown, so the rarer terms of a long document never appear in the table, and the CSV export contains only those same fifty rows.',
    ],
  },
  'text-to-slug': {
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
          'It turns a title or phrase into a clean, URL-safe slug by lowercasing it, removing punctuation and replacing spaces with hyphens or underscores. For bulk URL slugs with domain preview and word-boundary truncation, see URL Slug Generator.',
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
    howItWorks: [
      'Each line is normalised to decomposed Unicode, the accent marks are stripped, and the ampersand is expanded to the word and, so Cafe with an accent and Creme becomes cafe and creme before any other step.',
      'Every character that is not a letter, digit, space, underscore, or hyphen is replaced with a space, the line is split on runs of spaces, underscores, and hyphens, and the pieces are joined with the chosen separator.',
      'Force lowercase, on by default, lowercases the joined slug, and the stop-word option removes a fixed list of sixteen common words, but only when more than one word would remain.',
      'Batch mode processes each input line independently, drops lines that produce an empty slug, and keeps the output lines in the same order as the input titles.',
    ],
    supportedFormats: ['Blog titles', 'Product names', 'Page headings', 'One title per line', 'Hyphen separators', 'Underscore separators', 'Accented text', 'Ampersands'],
    limitations: [
      'Accents are stripped rather than transliterated, so letters without a Latin decomposition, such as the slashed o, the Polish l, or Chinese characters, are dropped entirely instead of converted.',
      'The slug is not checked against any website, so it can duplicate an existing URL, exceed a platform length limit, or collide with a reserved path without warning.',
      'Stop-word removal uses a fixed list of sixteen English words, so stop words in other languages stay in the slug and meaningful short words can be removed by mistake.',
      'No length cap is applied, so a very long title produces a very long slug, which some content systems truncate or reject when the page is published.',
    ],
  },
  'markdown-previewer': {
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
    howItWorks: [
      'The previewer parses the source line by line with its own small parser: headings of one to six hashes, unordered and ordered lists, blockquotes, horizontal rules, and fenced code blocks are each recognised by a pattern.',
      'Inline formatting is applied after escaping, so bold, italic, strikethrough, inline code, and links are converted to HTML while raw angle brackets in the source are shown as text, never executed.',
      'Link destinations are checked against an allowlist of https, http, site-relative, anchor, and mailto addresses, and anything else is replaced with a plain hash, while external links open in a new tab.',
      'The export wraps the compiled HTML in a minimal standalone document with a UTF-8 charset declaration, so the downloaded file opens directly in a browser.',
    ],
    supportedFormats: ['Markdown headings', 'Bold and italic', 'Lists', 'Blockquotes', 'Code blocks', 'Links', 'Inline code', 'Strikethrough'],
    limitations: [
      'The parser covers common Markdown only, so tables, footnotes, task lists, image syntax, and nested formatting beyond one level are not rendered and appear as plain text.',
      'An unclosed fenced code block is still rendered as code at the end of the document, so a missing closing fence swallows the rest of the text into the code block.',
      'The exported file is a bare HTML shell with no stylesheet, so the fonts, colours, and spacing of the preview do not carry over and the page renders with browser defaults.',
      'Inline formatting uses simple patterns applied in a fixed order, so overlapping or mismatched markers, such as bold markers that span a line break, may render literally instead of formatting.',
    ],
  },
  'line-prefix-suffix': {
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
    howItWorks: [
      'The tool splits the input on line breaks and wraps every line with the prefix and suffix exactly as typed, so a quote and comma turn names into quoted, comma-separated values.',
      'Numbering counts only non-empty lines, starts at the chosen number, and places the number plus separator before the prefix, so numbering stays sequential across blank lines.',
      'Zero-padding widens numbers to at least two digits, sized from the final number in the list, so a list numbered to 120 pads as 001 rather than 01.',
      'Skipping empty lines, on by default, leaves blank lines untouched and unnumbered, so the shape of the original list survives in the output.',
    ],
    supportedFormats: ['Name lists', 'Code values', 'CSV rows', 'SQL lists', 'Quoted strings', 'Numbered lists', 'Multi-line text', 'One item per line'],
    limitations: [
      'The prefix and suffix are inserted verbatim with no escaping, so a value that already contains a quote or comma can produce broken code or CSV when the output is pasted elsewhere.',
      'Numbering counts non-empty lines only, so if blank lines are meant to hold a number, the sequence skips them and the output numbers no longer match the line positions.',
      'The tool formats lines, not fields, so it cannot split a line on commas, quote individual values inside a line, or handle multi-line values such as an address block.',
      'Start numbers and separators have no validation, so a negative start or an empty separator silently produces unusual output rather than an error.',
    ],
  },
  'alphabets-to-word-generator': {
    instructions: [
      {
        title: 'Enter your letters',
        description:
          'Type up to 15 letters into the input box, for example LISTEN. Uppercase and lowercase letters both work, spaces between letters are ignored, and repeated letters are allowed — the tool counts how many times each letter appears and never uses a letter more often than you entered it.',
      },
      {
        title: 'Choose a word-finding mode',
        description:
          'Pick one of five modes. Generate finds every word your letters can build; Anagrams finds only words that use all your letters exactly once; Short finds the shortest words; Long finds the longest words first; Pattern Finder searches with known positions, using ? for any unknown letter, for example P?A?ET.',
      },
      {
        title: 'Refine with filters',
        description:
          'Set a minimum and maximum word length, ask for words that start or end with a particular letter, require letters that must appear, or exclude letters you do not want. Change any filter at any time — the results update without retyping your letters.',
      },
      {
        title: 'Generate your words',
        description:
          'Click Generate Words or press Enter. Results appear with each word and its letter count, sorted alphabetically or by length, longest first or shortest first, depending on the sort you chose. The total result count is shown at the top of the list.',
      },
      {
        title: 'Copy or download results',
        description:
          'Copy any single word with its copy button, copy the whole list with Copy All, or download every result as a plain .txt file to keep or share.',
      },
      {
        title: 'Reuse a recent search',
        description:
          'Your recent letter sets appear in the history below the results. Click one to run it again with its mode and result count shown, without typing the letters a second time.',
      },
    ],
    examples: [
      {
        title: 'LISTEN — five exact anagrams',
        input: 'LISTEN',
        output: 'LISTEN · SILENT · ENLIST · TINSEL · INLETS',
        explanation:
          'The classic anagram set: every result uses L, I, S, T, E, N exactly once, which is why Anagrams mode returns only these five words from this input.',
      },
      {
        title: 'APPLE — repeated letters counted exactly',
        input: 'APPLE',
        output: 'APPLE · PEAL · LEAP · PALE · APE · LAP',
        explanation:
          'The letter P appears twice in APPLE, so words may use P at most twice — PEAL and LEAP use both Ps, while APE and LAP use only one. No result ever uses P three times.',
      },
      {
        title: 'EARTH and STONE — anagrams plus shorter words',
        input: 'EARTH',
        output: 'EARTH · HEART · HATER · RATE · EAT · TEA',
        explanation:
          'Generate mode returns the full anagrams first and then every shorter word the letters can build, so EARTH also gives RATE, EAT, and TEA. STONE behaves the same way, giving STONE, NOTES, ONSET, and TONES.',
      },
      {
        title: 'CARE and ANGLE — short words and word games',
        input: 'CARE',
        output: 'CARE · RACE · ACRE · CAR · ARE · ACE',
        explanation:
          'Short mode groups two-, three-, and four-letter results separately, which is useful for word games that reward quick short plays. ANGLE works the same way, giving ANGLE, LEAN, GALE, LANE, AGE, and ALE.',
      },
    ],
    benefits: [
      'Every result is a real dictionary word — no invented or random words, ever',
      'Runs entirely in your browser: your letters are never uploaded or stored on a server',
      'Finds short words, long words, and exact anagrams from one input in a single click',
      'Free with no sign-up, no account, and no limit on how many searches you run',
      'Keeps working offline once the page and the dictionary have loaded — no connection needed per search',
      'Copy single words, copy all results, or download them as a plain .txt file',
    ],
    useCases: [
      'Students building vocabulary and practising spelling with real word lists',
      'Teachers creating word puzzles, anagram worksheets, and classroom word games',
      'Word game players finding playable words and checking anagram options before a move',
      'English learners discovering new words that can be built from familiar letters',
      'Writers and poets hunting for the right word length or a fresh anagram for a line',
      'Puzzle enthusiasts solving crosswords, word ladders, and anagram challenges',
    ],
    faqs: [
      {
        question: 'What is an alphabets to word generator?',
        answer:
          'Type LISTEN and it shows LISTEN, SILENT, ENLIST, TINSEL, and INLETS, plus every shorter word those letters can form. It is not a random word generator: every result comes from a built-in English dictionary, and no result ever uses a letter more times than it appears in your input.',
      },
      {
        question: 'How do I make words from letters?',
        answer:
          'Type your letters into the input box, choose a mode — Generate, Anagrams, Short, Long, or Pattern Finder — and click Generate Words or press Enter. The tool compares your letters against its dictionary and lists every word it can build. Use the filters to set a minimum or maximum length, a starting or ending letter, or letters to include or exclude, then copy or download the words you want.',
      },
      {
        question: 'Can I generate multiple words from one set of letters?',
        answer:
          'Yes. One set of letters usually produces many words. LISTEN gives five exact anagrams and dozens of shorter words such as LIST, SENT, TENS, and LINE. The total result count is shown at the top of the list.',
      },
      {
        question: 'What is an anagram?',
        answer:
          'An anagram is a word formed by rearranging all the letters of another word exactly once. LISTEN and SILENT are anagrams of each other because they use the same six letters. The Anagrams mode returns only these full rearrangements, while Generate mode also returns shorter words that use only some of your letters.',
      },
      {
        question: 'What is the difference between a word generator and an anagram solver?',
        answer:
          'A word generator returns every dictionary word your letters can build, including short words that use only some of them. An anagram solver is stricter: it returns only words that use every letter exactly once, with nothing left over and nothing added. This tool does both: Generate mode is the word generator and Anagrams mode is the anagram solver.',
      },
      {
        question: 'Can I find the longest word from letters?',
        answer:
          'Yes. Choose the Long mode, which sorts results longest first and shows every word tied for the maximum length at the top, followed by shorter alternatives. You can also set a maximum number of results if a long input produces hundreds of words.',
      },
      {
        question: 'Can I find short words from letters?',
        answer:
          'Yes. The Short mode groups results by length, so you can browse two-letter, three-letter, four-letter, and five-letter words separately, or set your own minimum and maximum length. Short words help in word games that reward quick two- and three-letter plays.',
      },
      {
        question: 'Can I use repeated letters?',
        answer:
          'Yes. Repeated letters are allowed and counted exactly. If you enter APPLE, the tool knows P appears twice, so it can return PEAL and LEAP but never a word that needs P three times. Type the letters exactly as you have them — duplicates included — and the generator respects the count.',
      },
      {
        question: 'Does the generator use every letter?',
        answer:
          'Only in Anagrams mode, where every result must use all of your letters exactly once. In Generate, Short, Long, and Pattern Finder modes, results may use any subset of your letters, so a six-letter input can also return shorter words. The mode you pick decides whether every letter is required.',
      },
      {
        question: 'Can I find words using all the letters?',
        answer:
          'Yes — that is exactly what Anagrams mode does. Enter your letters, choose Anagrams, and you will see only words that use the complete letter set, such as the five anagrams of LISTEN. If no word uses all your letters, the tool shows an empty state instead of inventing a result.',
      },
      {
        question: 'Can I exclude specific letters?',
        answer:
          'Yes. The exclude-letters filter removes every word containing a letter you do not want, and the include-letters filter does the opposite, keeping only words that contain a letter you require. Both filters can be combined with a starting-letter, ending-letter, and length filter, and you can change them without retyping your letters.',
      },
      {
        question: 'Can I find words starting with a particular letter?',
        answer:
          'Yes. Set the starts-with filter to the letter you want, and every result will begin with it — for example, PLANET starting with P returns PLANET itself. The same filter exists for ending letters, and both work together with the Pattern Finder, where ? stands for any unknown letter in a known position.',
      },
      {
        question: 'Does the tool work offline?',
        answer:
          'Yes, after the page and the dictionary have loaded. The dictionary is bundled with the site and downloaded once as a separate chunk when you first use the tool; after that, every search runs entirely in your browser with no internet connection and no per-search server request. Open the page once online first so the dictionary can load.',
      },
      {
        question: 'Is this word generator free?',
        answer:
          'Yes, completely free. There is no sign-up, no account, no credit system, and no limit on the number of searches. Every tool on UtilityFlow is free in the same way.',
      },
      {
        question: 'Are all generated words valid English words?',
        answer:
          'Yes. Every result is checked against the bundled ENABLE dictionary of 172,823 English words, a public-domain word list built for word games. The tool never invents words, and it never returns a word that is not in the dictionary. ENABLE contains no proper nouns or abbreviations, and offensive words are filtered out.',
      },
      {
        question: 'Does the tool support every word game dictionary?',
        answer:
          'No. Different word games use different dictionaries — Scrabble tournaments use the official NASPA or CSW lists, Words With Friends uses its own list, and each list accepts some words the others reject. This tool uses the public-domain ENABLE list, which overlaps heavily with game dictionaries but is not identical to any of them, so always check a word against your game’s own dictionary before playing it.',
      },
    ],
    howItWorks: [
      'The tool ships with the ENABLE English word list — 172,823 words, released into the public domain, with no proper nouns and no abbreviations. It is bundled with the site and loaded lazily as a separate chunk the first time you use the tool, so it never slows the initial page load.',
      'Every word and every input is normalized to lowercase letters A–Z, and each is reduced to a letter-frequency count: how many times A appears, how many times B appears, and so on through Z.',
      'A dictionary word is accepted only if every letter it needs is available in your input at least as many times — this is the canBuildWord check. APPLE can build PEAL because P appears twice in both, but it can never build a word needing three Ps.',
      'Exact anagrams are found with a sorted-letter signature index: each dictionary word is keyed by its letters in alphabetical order, so LISTEN, SILENT, ENLIST, TINSEL, and INLETS all share the key EILNST and are returned in one lookup.',
      'Pattern Finder matches position by position: a ? in your pattern stands for any single letter, while a fixed letter must match exactly, so P?A?ET finds PLANET among words built from your letters.',
      'Results are filtered by your minimum and maximum length, starting and ending letters, and include and exclude lists, then sorted alphabetically, longest first, or shortest first, and capped at your chosen result limit.',
    ],
    supportedFormats: [
      'Uppercase letters (A–Z)',
      'Lowercase letters (a–z)',
      'Letters separated by spaces',
      'Repeated letters',
      'Pattern search with ? wildcards',
      'Plain-text (.txt) result download',
    ],
    limitations: [
      'Input is limited to 15 letters, which keeps result lists readable; longer letter sets would return hundreds of words and are not accepted.',
      'The dictionary is ENABLE, a general word-game list — not an official tournament list — so a word shown here may not be accepted in every word game.',
      'A small number of offensive words are filtered out of results, so the list you see is a cleaned subset of the dictionary.',
      'The dictionary contains common English words only: no proper nouns, no abbreviations, and no accented characters.',
      'The tool works offline only after the page and the dictionary chunk have loaded; the first visit needs a connection so the dictionary can download once.',
    ],
  },
};
