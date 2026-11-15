// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'json-formatter': {
    instructions: [
      {
        title: 'Paste raw JSON',
        description:
          'Insert any JSON object or array into Raw JSON Input, or click Load sample to inspect a sample payload.',
      },
      {
        title: 'Select formatting mode',
        description:
          'Switch between 2 Spaces, 4 Spaces, Tab, or Minify, and optionally enable Sort keys A–Z.',
      },
      {
        title: 'Fix syntax errors with line and column hints',
        description:
          'If the validator reports an error, read the exact line and column shown, fix the offending comma, quote, or bracket in your input, and the status banner updates instantly.',
      },
      {
        title: 'Review the formatted output and statistics',
        description:
          'Confirm the Valid JSON status banner showing total keys, nesting depth, and byte count, then scroll through the formatted output to check that nested structures look right.',
      },
      {
        title: 'Copy or download the result',
        description:
          'Click Copy to place the formatted JSON on your clipboard, or Download to save it as a .json file for your project.',
      },
      {
        title: 'Tip: compare sizes and clean up diffs',
        description:
          'Paste the same payload again after minifying to compare byte sizes, or enable Sort keys A–Z before a git diff so only real changes show up.',
      },
    ],
    examples: [
      {
        title: 'Minified API response formatting',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation: 'Expands compact single-line API payloads into readable indented JSON.',
      },
    ],
    benefits: [
      'Reports syntax error positions with line and column context',
      'Recursively sorts nested object keys alphabetically for clean diffs',
      'Computes total keys, maximum nesting depth, and output byte size',
      'Keeps private API responses and tokens strictly in browser memory',
    ],
    useCases: [
      'Debugging REST and GraphQL API payloads during development',
      'Normalizing package.json or config files before git diffing',
      'Minifying JSON fixtures and static datasets',
      'Validating webhook bodies before writing parsers',
    ],
    faqs: [
      {
        question: 'Does sorting keys alter array element order?',
        answer:
          'No. Sort keys A–Z only reorders keys inside JSON objects while preserving the exact sequence of array elements.',
      },
      {
        question: 'Why does trailing-comma JSON show a syntax error?',
        answer:
          'Strict RFC 8259 JSON does not allow trailing commas or single-quoted keys. The validator flags the exact line and column so you can fix them before deploying.',
      },
      {
        question: 'Is my JSON payload logged anywhere?',
        answer:
          'Never. Parsing and formatting run entirely via JavaScript in your browser tab.',
      },
      {
        question: 'Is the JSON Formatter free to use?',
        answer:
          'Yes, the JSON Formatter is completely free with no sign-up, no usage limits, and no watermark on the output.',
      },
      {
        question: 'What is the difference between formatting and minifying JSON?',
        answer:
          'Formatting adds indentation and line breaks so JSON is easy to read, while minifying removes all unnecessary whitespace so the payload is as small as possible for transport.',
      },
      {
        question: 'Can the JSON Formatter handle large JSON files?',
        answer:
          'Yes. Because all processing happens locally in your browser, there is no server upload limit, though very large payloads depend on your browser memory.',
      },
      {
        question: 'What indentation options does the JSON Formatter offer?',
        answer:
          'You can format with 2 spaces, 4 spaces, or a tab character, so the output matches the style of your codebase.',
      },
      {
        question: 'Does the JSON Formatter support JSON arrays at the top level?',
        answer:
          'Yes. A top-level array is valid JSON, so you can paste and format arrays just like objects.',
      },
      {
        question: 'How do I fix an “Unexpected token” error in my JSON?',
        answer:
          'Look at the line and column reported by the validator. The most common causes are a missing comma, an unclosed bracket, or a single quote where a double quote is required.',
      },
      {
        question: 'Can I format JSON with comments or trailing commas?',
        answer:
          'No. Comments and trailing commas are not part of strict JSON, so remove them first and the formatter will accept the cleaned input.',
      },
      {
        question: 'What does the nesting depth statistic mean in the JSON Formatter?',
        answer:
          'Nesting depth counts how many levels deep the most deeply nested value sits inside objects and arrays, which helps you judge how complex a payload is.',
      },
      {
        question: 'Does the JSON Formatter preserve the order of object keys?',
        answer:
          'Yes, unless you enable Sort keys A–Z. By default the formatter keeps your original key order exactly as pasted.',
      },
      {
        question: 'Can I sort keys in nested JSON objects too?',
        answer:
          'Yes. Sorting applies recursively, so keys inside every nested object are reordered alphabetically while array order stays untouched.',
      },
      {
        question: 'What file format does the JSON Formatter download produce?',
        answer:
          'The download saves your formatted or minified result as a standard .json text file you can open in any editor.',
      },
      {
        question: 'Does the JSON Formatter work offline?',
        answer:
          'Yes. Once the page has loaded, formatting and validation run entirely in your browser with no network requests.',
      },
      {
        question: 'Why is my valid JavaScript object rejected as JSON?',
        answer:
          'JSON is stricter than JavaScript: keys must use double quotes, values cannot be undefined or functions, and trailing commas are not allowed.',
      },
      {
        question: 'Can the JSON Formatter validate JSON from an API response?',
        answer:
          'Yes. Paste the raw response body into the input and the validator will confirm whether it is valid JSON and pinpoint any syntax error.',
      },
      {
        question: 'What is the maximum JSON size I can paste into the JSON Formatter?',
        answer:
          'There is no fixed size limit because nothing is uploaded to a server. Practical limits come only from your browser memory and how large a text box it can handle smoothly.',
      },
      {
        question: 'Does minifying JSON change its meaning?',
        answer:
          'No. Minifying only removes whitespace, so the data, keys, and values stay exactly the same while the file gets smaller.',
      },
      {
        question: 'How do I copy formatted JSON without extra whitespace?',
        answer:
          'Switch to Minify mode first, then click Copy. The clipboard will contain the compact single-line JSON with no extra spaces or line breaks.',
      },
    ],
  },
  'base64-encoder-decoder': {
    instructions: [
      {
        title: 'Choose Encode or Decode',
        description:
          'Select Encode to Base64 or Decode Base64 at the top of the workspace.',
      },
      {
        title: 'Paste your text or Base64 string',
        description:
          'Enter the UTF-8 text you want to encode, or the Base64 string you want to decode, into the input box.',
      },
      {
        title: 'Configure Base64 options',
        description:
          'In Encode mode, optionally enable URL-safe (- and _) output or omit trailing = padding characters.',
      },
      {
        title: 'Check the output and validation',
        description:
          'Review the converted result instantly. If a decode fails, check for missing padding or characters outside the Base64 alphabet.',
      },
      {
        title: 'Copy or swap',
        description:
          'Copy the result to your clipboard or click Swap to reverse the direction using your current output.',
      },
      {
        title: 'Tip: handling URL-safe tokens',
        description:
          'When pasting tokens from a URL, use URL-safe mode so - and _ are handled correctly. Remember that Base64 is encoding, not encryption, so never treat it as secure storage.',
      },
    ],
    examples: [
      {
        title: 'UTF-8 string encoding',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation: 'Uses TextEncoder UTF-8 byte serialization before Base64 conversion.',
      },
    ],
    benefits: [
      'UTF-8 safe encoding/decoding avoids legacy btoa/atob Unicode crashes',
      'Supports RFC 4648 URL-safe alphabet (- and _) and unpadded decoding',
      'One-click Swap moves output into input and flips mode',
      'Safe local execution for API keys and Basic Auth headers',
    ],
    useCases: [
      'Encoding HTTP Basic Authentication credentials locally',
      'Inspecting Base64-encoded JSON payloads or data URIs',
      'Preparing URL-safe Base64 tokens for query parameters',
      'Decoding Base64 email or webhook body snippets',
    ],
    faqs: [
      {
        question: 'Why does standard btoa() fail on Unicode characters?',
        answer:
          'Native btoa() only accepts single-byte Latin-1 code points. This tool converts text to UTF-8 bytes via TextEncoder first so all international scripts and emojis encode cleanly.',
      },
      {
        question: 'Can the decoder handle URL-safe Base64 without "=" padding?',
        answer:
          'Yes. The decoder automatically normalizes "-" and "_" back to "+" and "/" and restores missing "=" padding before decoding.',
      },
      {
        question: 'Is Base64 encryption?',
        answer:
          'No. Base64 is an encoding format for representing binary or text data in ASCII, not cryptographic encryption.',
      },
      {
        question: 'Is the Base64 Encoder free to use?',
        answer:
          'Yes, the Base64 Encoder is completely free with no sign-up and no limits on how many strings you convert.',
      },
      {
        question: 'What characters are allowed in a Base64 string?',
        answer:
          'Standard Base64 uses A–Z, a–z, 0–9, plus + and /, with = used for padding. The URL-safe variant replaces + and / with - and _.',
      },
      {
        question: 'Why is my Base64 output longer than my input?',
        answer:
          'Base64 represents every 3 bytes of input as 4 ASCII characters, so the encoded output is roughly a third longer than the original text.',
      },
      {
        question: 'Can I encode emojis and non-English text to Base64?',
        answer:
          'Yes. The tool encodes text as UTF-8 bytes first, so emojis, accented letters, and non-Latin scripts all encode and decode correctly.',
      },
      {
        question: 'What is URL-safe Base64 and when should I use it?',
        answer:
          'URL-safe Base64 replaces + and / with - and _ so the encoded string can sit inside a URL or filename without being percent-encoded. Use it for tokens passed in query parameters.',
      },
      {
        question: 'How do I decode a Base64 string without padding?',
        answer:
          'Paste it directly. The decoder detects missing = padding and restores it automatically before decoding.',
      },
      {
        question: 'Can the Base64 Encoder handle binary files?',
        answer:
          'No, this tool encodes text only. To encode a file you would need to read its bytes first, which this text-based tool does not do.',
      },
      {
        question: 'What is the difference between Base64 and Base64URL?',
        answer:
          'Base64URL is the URL-safe variant of Base64: it swaps + for - and / for _, and usually drops the = padding, so the result is safe in URLs and filenames.',
      },
      {
        question: 'Why does my decoded Base64 text show strange characters?',
        answer:
          'The original text was probably encoded from a different byte encoding than UTF-8, or the Base64 string is corrupted. Try re-encoding the source as UTF-8 and compare.',
      },
      {
        question: 'Can I encode a password or secret with Base64?',
        answer:
          'You can, but you should not rely on it for security. Base64 is trivially reversible, so anyone who sees the encoded string can decode it instantly.',
      },
      {
        question: 'How do I encode text for a Basic Auth header?',
        answer:
          'Combine the username and password as username:password, encode that string to Base64, and use it as Authorization: Basic <encoded value> in your request.',
      },
      {
        question: 'Does the Base64 Encoder work offline?',
        answer:
          'Yes. Once the page has loaded, encoding and decoding run entirely in your browser with no network requests.',
      },
      {
        question: 'What happens if I paste an invalid Base64 string into the decoder?',
        answer:
          'The decoder reports an error instead of guessing. Check for characters outside the Base64 alphabet, missing padding, or stray whitespace and line breaks.',
      },
      {
        question: 'Can I decode a Base64 data URI with this tool?',
        answer:
          'Yes, if you paste only the Base64 part after the comma. Remove the data:...;base64, prefix first, since it is not part of the encoded data.',
      },
      {
        question: 'Why do some Base64 strings end with "=" signs?',
        answer:
          'The = signs are padding added when the input length is not a multiple of three bytes. They tell the decoder exactly how many bytes the final group represents.',
      },
      {
        question: 'Is my text uploaded to a server when I encode it?',
        answer:
          'No. Encoding and decoding run locally in your browser, so sensitive strings like API keys never leave your device.',
      },
      {
        question: 'How do I convert Base64 back to the original text?',
        answer:
          'Switch to Decode mode, paste the Base64 string, and the tool returns the original UTF-8 text, which you can then copy.',
      },
    ],
  },
  'url-encoder-decoder': {
    instructions: [
      {
        title: 'Choose Encode or Decode',
        description:
          'Toggle between Encode and Decode, then select encodeURIComponent (for single parameter values) or encodeURI (to preserve ://?& delimiters).',
      },
      {
        title: 'Paste a URL or parameter string',
        description:
          'Enter any URL or percent-encoded snippet into Input String or URL.',
      },
      {
        title: 'Review the encoded or decoded result',
        description:
          'Check the output box to confirm that special characters like spaces, & and = were encoded or decoded exactly as expected.',
      },
      {
        title: 'Inspect parsed parameters',
        description:
          'When a valid full URL is detected, review the Parsed URL Breakdown table below for decoded query key-value pairs.',
      },
      {
        title: 'Copy the result',
        description:
          'Click Copy to use the encoded URL in your code, link, or API request without retyping it.',
      },
      {
        title: 'Troubleshooting: malformed % sequences',
        description:
          'If you see an error about a malformed % sequence, look for a lone % not followed by two hex digits, such as %2, and fix it before decoding again.',
      },
    ],
    examples: [
      {
        title: 'Encoding a query value',
        input: 'json formatter & validator',
        output: 'json%20formatter%20%26%20validator',
        explanation: 'Using encodeURIComponent escapes "&" so it does not split your query string.',
      },
    ],
    benefits: [
      'Clarifies encodeURIComponent vs encodeURI behavior side by side',
      'Automatically parses valid URLs into protocol, host, path, hash, and query rows',
      'Handles "+" space encoding cleanly when decoding form query strings',
      'Reports malformed % sequences clearly',
    ],
    useCases: [
      'Debugging OAuth redirect URIs and callback parameters',
      'Escaping search queries or JSON strings passed in query parameters',
      'Auditing UTM campaign links with multiple tracking parameters',
      'Decoding server access log URLs for human review',
    ],
    faqs: [
      {
        question: 'When should I use encodeURIComponent instead of encodeURI?',
        answer:
          'Use encodeURIComponent when encoding a single query parameter value (so characters like & and = are escaped). Use encodeURI when encoding an entire URL and you want to keep https://, /, ?, and & intact.',
      },
      {
        question: 'Why did a decoded URL turn "+" into a space?',
        answer:
          'In application/x-www-form-urlencoded query strings, "+" represents a space. Component decoding normalizes "+" to spaces automatically.',
      },
      {
        question: 'Does the URL parser validate whether a domain is reachable?',
        answer:
          'No. Parsing uses the browser URL API locally without sending any network request to the target host.',
      },
      {
        question: 'Is the URL Encoder free to use?',
        answer:
          'Yes, the URL Encoder is completely free with no sign-up and no limits on how many URLs you encode or decode.',
      },
      {
        question: 'What characters does URL encoding change?',
        answer:
          'URL encoding converts reserved and unsafe characters, such as spaces, &, =, ?, #, and non-ASCII letters, into % followed by two hex digits.',
      },
      {
        question: 'What is the difference between %20 and + for spaces in a URL?',
        answer:
          'Both can represent a space in a query string, but %20 is the standard percent-encoding while + only means space in form-encoded query strings, not in paths.',
      },
      {
        question: 'Can the URL Encoder encode a full URL with https:// intact?',
        answer:
          'Yes. Choose encodeURI mode and the scheme, slashes, and delimiters stay untouched while only unsafe characters are encoded.',
      },
      {
        question: 'How do I encode an ampersand in a query value?',
        answer:
          'Use encodeURIComponent mode on the value alone. It turns & into %26 so the ampersand is treated as data instead of splitting your query string.',
      },
      {
        question: 'Why does my decoded URL still contain % signs?',
        answer:
          'A % followed by two hex digits decodes once, so a double-encoded value like %2520 becomes %20 after one decode. Run decode again if you need the fully decoded form.',
      },
      {
        question: 'Can I decode a URL with multiple query parameters?',
        answer:
          'Yes. The decoder handles the whole query string, and the parsed breakdown table lists every key-value pair separately for easy inspection.',
      },
      {
        question: 'Does the URL Encoder handle Unicode characters?',
        answer:
          'Yes. Non-ASCII characters are first converted to UTF-8 bytes and then percent-encoded, so accented letters and other scripts encode correctly.',
      },
      {
        question: 'What is percent-encoding in a URL?',
        answer:
          'Percent-encoding replaces a character with a % sign followed by its two-digit hexadecimal byte value, which keeps URLs valid when they contain spaces or special symbols.',
      },
      {
        question: 'How do I encode a URL for use in an email or document?',
        answer:
          'Paste the URL, choose encodeURI mode, and copy the result. The encoded link stays clickable and will not break across line wraps in plain text.',
      },
      {
        question: 'Does the URL Decoder validate the URL?',
        answer:
          'It checks that the input is a well-formed URL and that every % sequence is valid, but it does not check whether the domain exists or the page loads.',
      },
      {
        question: 'Can I encode spaces as %20 instead of +?',
        answer:
          'Yes. The encoder always uses %20 for spaces. The + form only appears when decoding form-encoded input, where + already means a space.',
      },
      {
        question: 'What happens if I encode an already-encoded URL?',
        answer:
          'The % signs themselves get encoded to %25, producing double encoding like %2520. Decode once to return to the single-encoded form.',
      },
      {
        question: 'Is my URL uploaded to a server when I encode it?',
        answer:
          'No. Encoding, decoding, and parsing all run locally in your browser, so private links and tokens never leave your device.',
      },
      {
        question: 'How do I encode a URL fragment or hash?',
        answer:
          'Encode only the fragment value with encodeURIComponent, then append it after the # yourself, so the hash delimiter is not encoded away.',
      },
      {
        question: 'Why do some encoded URLs look much longer?',
        answer:
          'Every special or non-ASCII character becomes three characters (% plus two hex digits), so URLs with many spaces or Unicode characters grow noticeably.',
      },
      {
        question: 'Can the URL Encoder handle very long URLs?',
        answer:
          'Yes. Processing runs locally with no server upload limit, so long URLs encode and decode in your browser as long as your browser can hold the text.',
      },
    ],
  },
  'uuid-generator': {
    instructions: [
      {
        title: 'Pick UUID v4 or v7',
        description:
          'Choose v4 for standard random identifiers or v7 for sortable timestamp-prefixed database primary keys.',
      },
      {
        title: 'Set quantity and formatting',
        description:
          'Enter between 1 and 100 IDs and toggle Uppercase, Include hyphens, or Wrap in {braces}.',
      },
      {
        title: 'Generate a fresh batch',
        description:
          'Click Generate UUIDs to create a new batch. Every click produces a completely new set of random identifiers.',
      },
      {
        title: 'Review the generated IDs',
        description:
          'Scan the list to confirm the version, case, and hyphen format match what your database or code expects.',
      },
      {
        title: 'Copy or download the list',
        description:
          'Click Copy all to put every ID on your clipboard, or download the batch as a .txt file for seeding records or test fixtures.',
      },
      {
        title: 'Tip: choosing v7 for databases',
        description:
          'If you store IDs as primary keys, prefer v7 so new rows sort chronologically and keep your index efficient. Use v4 when order does not matter.',
      },
    ],
    examples: [
      {
        title: 'Standard lowercase UUID v4',
        input: 'Version: v4 · Hyphens: On · Uppercase: Off',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: '128-bit RFC 4122 identifier suitable for distributed primary keys.',
      },
    ],
    benefits: [
      'Uses browser crypto.randomUUID / crypto.getRandomValues (CSPRNG)',
      'Supports modern RFC 9562 UUID v7 with 48-bit millisecond timestamp prefix',
      'Batch generates up to 100 unique IDs at once',
      'Formats uppercase, compact no-hyphen hex, or braced GUID strings',
    ],
    useCases: [
      'Seeding database fixtures and migration test records',
      'Generating correlation IDs, API keys, and webhook test IDs',
      'Comparing B-tree index-friendly UUID v7 vs random UUID v4',
      'Creating Windows/C# braced GUID constants',
    ],
    faqs: [
      {
        question: 'What is the advantage of UUID v7 over UUID v4?',
        answer:
          'UUID v7 encodes a Unix millisecond timestamp in its most significant bits, making IDs chronologically sortable and reducing B-tree index fragmentation in SQL databases.',
      },
      {
        question: 'Are these UUIDs generated with Math.random()?',
        answer:
          'No. Every UUID uses cryptographically strong randomness from the Web Crypto API.',
      },
      {
        question: 'How do I get a 32-character hex ID without dashes?',
        answer:
          'Uncheck "Include hyphens" to strip dashes immediately across the entire generated batch.',
      },
      {
        question: 'Is the UUID Generator free to use?',
        answer:
          'Yes, the UUID Generator is completely free with no sign-up, and you can generate as many batches as you need.',
      },
      {
        question: 'What is a UUID and what is it used for?',
        answer:
          'A UUID is a 128-bit unique identifier, usually written as 32 hex digits in five groups. It is used for database primary keys, correlation IDs, session tokens, and file names.',
      },
      {
        question: 'Can two generated UUIDs ever be the same?',
        answer:
          'In practice, no. With 122 random bits in a UUID v4, a collision is so unlikely that you can treat generated IDs as unique.',
      },
      {
        question: 'What is the difference between UUID v4 and UUID v7?',
        answer:
          'UUID v4 is fully random, while UUID v7 starts with a millisecond timestamp so newer IDs sort after older ones. Both are 128-bit identifiers.',
      },
      {
        question: 'How many UUIDs can I generate at once?',
        answer:
          'You can generate between 1 and 100 UUIDs in a single batch. Click Generate again for another fresh batch of the same size.',
      },
      {
        question: 'What does "time-ordered" mean for UUID v7?',
        answer:
          'Time-ordered means the first part of the UUID is a Unix millisecond timestamp, so sorting IDs alphabetically also sorts them by creation time.',
      },
      {
        question: 'Can I generate UUIDs without hyphens?',
        answer:
          'Yes. Turn off Include hyphens and every UUID in the batch is shown as a compact 32-character hex string.',
      },
      {
        question: 'What are braced GUIDs and when do I need them?',
        answer:
          'Braced GUIDs wrap the UUID in curly braces, like {550e8400-...}. Some Microsoft tools and C# code expect this format for GUID constants.',
      },
      {
        question: 'Are UUIDs generated here safe for production use?',
        answer:
          'Yes. They use the browser Web Crypto API, which provides cryptographically strong randomness suitable for production identifiers.',
      },
      {
        question: 'Can I generate uppercase UUIDs?',
        answer:
          'Yes. Enable the Uppercase toggle and the whole batch is shown with A–F hex letters in capitals.',
      },
      {
        question: 'Do I need an internet connection to generate UUIDs?',
        answer:
          'Only to load the page. Once loaded, generation runs entirely in your browser with no network requests.',
      },
      {
        question: 'Is my generated UUID list stored or uploaded anywhere?',
        answer:
          'No. Generation happens locally in your browser, so your IDs are never sent to a server or stored anywhere.',
      },
      {
        question: 'Can I use a UUID as an API key?',
        answer:
          'You can use one as an opaque token, but a UUID is an identifier, not a secret designed for authentication. For real API keys, use a proper secrets system with rotation.',
      },
      {
        question: 'What is the difference between a UUID and a GUID?',
        answer:
          'They are the same 128-bit format. GUID is the name Microsoft uses, while UUID is the open standard name used everywhere else.',
      },
      {
        question: 'Why would I choose UUID v7 for a database primary key?',
        answer:
          'Because v7 IDs sort by creation time, new rows land near each other in a B-tree index, which keeps inserts fast and reduces index fragmentation compared to random v4 IDs.',
      },
      {
        question: 'Can I regenerate the same UUID twice?',
        answer:
          'No. Each generation uses fresh cryptographic randomness, so you will never get the same UUID again. Save any ID you need to reuse.',
      },
      {
        question: 'How do I copy all generated UUIDs at once?',
        answer:
          'Click Copy all to place the entire batch on your clipboard, one UUID per line, ready to paste into your code, spreadsheet, or SQL script.',
      },
    ],
  },
  'regex-tester': {
    instructions: [
      {
        title: 'Enter your pattern and flags',
        description:
          'Type a RegExp pattern between the slashes and toggle g, i, m, or s flags.',
      },
      {
        title: 'Provide sample text',
        description:
          'Paste test strings into Test String to see matching substrings highlighted on the right.',
      },
      {
        title: 'Review highlighted matches',
        description:
          'Check the highlighted substrings and the match count to confirm your pattern finds exactly what you expect, and nothing more.',
      },
      {
        title: 'Inspect groups and replacements',
        description:
          'Review exact match indices and $1/$2 capture groups, or test a replacement template below.',
      },
      {
        title: 'Fix pattern errors',
        description:
          'If a syntax error appears, read the message, check for unclosed brackets or parentheses, and adjust the pattern until matches appear.',
      },
      {
        title: 'Tip: test edge cases before shipping',
        description:
          'Try empty strings, unusual characters, and multiline input before using a pattern in production, and toggle the i flag to check case sensitivity.',
      },
    ],
    examples: [
      {
        title: 'Extracting email local-part and domain',
        input: 'Pattern: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Text: support@utilityflow.online',
        output: 'Match #1 · $1="support" · $2="utilityflow.online"',
        explanation: 'Parenthesized groups expose captured substrings individually.',
      },
    ],
    benefits: [
      'Guards against infinite loops on zero-length matches automatically',
      'Displays exact character index and captured group values per match',
      'Includes live replacement template preview using $1, $2, and $&',
      'Reports RegExp syntax errors cleanly without crashing',
    ],
    useCases: [
      'Validating email, slug, or form input patterns before shipping',
      'Extracting structured tokens from log lines or HTML snippets',
      'Testing search-and-replace capture templates',
      'Verifying multiline (^ / $) and case-insensitive flag behavior',
    ],
    faqs: [
      {
        question: 'Which regex engine does this tester use?',
        answer:
          'It uses your browser’s native ECMAScript (JavaScript) RegExp engine, so behavior matches client-side JS and Node.js code identically.',
      },
      {
        question: 'Why does global mode ("g") matter?',
        answer:
          'Without the "g" flag, RegExp stops after the first match. Enabling "g" finds and highlights every match across the test string.',
      },
      {
        question: 'How do I match across newline characters with "."?',
        answer:
          'Enable the "s" (dotAll) flag so the dot metacharacter "." matches newline characters as well.',
      },
      {
        question: 'Is the Regex Tester free to use?',
        answer:
          'Yes, the Regex Tester is completely free with no sign-up and no limits on how many patterns or test strings you try.',
      },
      {
        question: 'What regex flavor does the Regex Tester use?',
        answer:
          'It uses the JavaScript (ECMAScript) regex flavor, the same engine that runs in browsers and Node.js, so patterns behave the same in your code.',
      },
      {
        question: 'How do I test a regex for email validation?',
        answer:
          'Paste a pattern such as ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) and try valid and invalid addresses in the test string to see which ones match.',
      },
      {
        question: 'What do the g, i, m, and s flags do in the Regex Tester?',
        answer:
          'The g flag finds all matches, i makes matching case-insensitive, m lets ^ and $ match at line boundaries, and s lets . match newline characters.',
      },
      {
        question: 'How do capture groups work in the Regex Tester?',
        answer:
          'Text inside parentheses forms a numbered capture group. After a match, each group is listed as $1, $2, and so on with the exact substring it captured.',
      },
      {
        question: 'What is the difference between .* and .*? in regex?',
        answer:
          'The .* quantifier is greedy and matches as much as possible, while .*? is lazy and matches as little as possible. Use the lazy form when you want the shortest match.',
      },
      {
        question: 'How do I match a literal dot or parenthesis in regex?',
        answer:
          'Escape it with a backslash, such as \\. for a dot or \\( for a parenthesis, so the character is treated as literal text instead of a metacharacter.',
      },
      {
        question: 'Why is my regex matching too much text?',
        answer:
          'You are probably using a greedy quantifier like .* that swallows everything up to the last possible match. Switch to a lazy quantifier like .*? or narrow the character class.',
      },
      {
        question: 'How do I use $1 and $2 in a replacement?',
        answer:
          'Type a replacement template such as $2@$1 and the tester substitutes each $n with the text captured by that numbered group in every match.',
      },
      {
        question: 'Can the Regex Tester match across multiple lines?',
        answer:
          'Yes. Enable the m flag so ^ and $ work per line, and the s flag if you need . to cross line breaks.',
      },
      {
        question: 'What is a lookahead in regex?',
        answer:
          'A lookahead like (?=...) checks that a pattern follows the current position without consuming it, so you can require a condition, such as a digit ahead, without including it in the match.',
      },
      {
        question: 'Why does my pattern show no matches?',
        answer:
          'Check for a syntax error, an unescaped special character, or a character class that excludes your input. Try simplifying the pattern and adding one piece at a time.',
      },
      {
        question: 'How do I test a regex against many lines at once?',
        answer:
          'Paste the whole multi-line sample into the test string and enable the g flag. Every matching line is highlighted and listed with its index.',
      },
      {
        question: 'Does the Regex Tester support Unicode characters?',
        answer:
          'Yes. JavaScript regex handles Unicode text, and you can use escapes like \\u{1F600} or the u flag for full Unicode-aware matching.',
      },
      {
        question: 'Is my regex or test text uploaded anywhere?',
        answer:
          'No. Testing runs entirely in your browser, so your patterns and sample data never leave your device.',
      },
      {
        question: 'What is catastrophic backtracking and how do I avoid it?',
        answer:
          'It happens when nested quantifiers like (a+)+ force the engine to try an enormous number of combinations. Avoid overlapping quantifiers and use atomic-style patterns or simpler character classes instead.',
      },
      {
        question: 'Can I save or share my regex pattern?',
        answer:
          'There is no built-in save feature, so copy your pattern and test string into a snippet file or code comment. You can also paste the pattern directly into your source code.',
      },
    ],
  },
  'jwt-decoder': {
    instructions: [
      {
        title: 'Paste your JWT string',
        description:
          'Paste a standard three-segment token (header.payload.signature) into the input box, or click Load sample JWT to try a demo token.',
      },
      {
        title: 'Review Header and Payload JSON',
        description:
          'Inspect algorithm metadata (`alg`, `typ`) and decoded claim fields in formatted JSON panels.',
      },
      {
        title: 'Check Timestamp Claims',
        description:
          'Verify UTC date conversions for `iat`, `nbf`, and `exp` plus active/expired status.',
      },
      {
        title: 'Inspect claims like sub, roles and scopes',
        description:
          'Look for identity and permission claims such as sub, iss, aud, roles and scope to confirm the token carries what your API expects.',
      },
      {
        title: 'Copy decoded JSON or a single claim',
        description:
          'Copy the full formatted header or payload JSON, or copy an individual claim value to paste into your code, tests or support ticket.',
      },
      {
        title: 'Troubleshoot a token that will not decode',
        description:
          'Remove extra spaces, line breaks or quotes around the token. A five-segment token is an encrypted JWE, not a JWT, and cannot be decoded without its decryption key.',
      },
    ],
    examples: [
      {
        title: 'Inspecting token expiration',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Header: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation: 'Decodes Base64Url segments and translates numeric epoch claims into UTC dates.',
      },
    ],
    benefits: [
      'Zero network transmission—tokens never leave your browser tab',
      'Translates numeric iat, nbf, and exp claims to readable UTC dates',
      'Highlights whether the token expiration timestamp has already passed',
      'Clearly notes that cryptographic signature verification requires your signing key',
    ],
    useCases: [
      'Debugging OAuth2 / OIDC access and ID tokens during API integration',
      'Verifying role, scope, and tenant claims emitted by auth providers',
      'Checking why an API rejected an expired bearer token',
      'Validating JWT structure in integration tests',
    ],
    faqs: [
      {
        question: 'Does this JWT Decoder verify whether a token signature is authentic?',
        answer:
          'No. Decoding a JWT only parses its Base64Url header and payload segments. Verifying a signature requires your server secret or public JWKS key and should always happen on your backend.',
      },
      {
        question: 'Is it safe to paste authentication tokens here?',
        answer:
          'All decoding runs locally in client-side JavaScript without logging or transmitting tokens. Still, avoid pasting production credentials on untrusted shared computers.',
      },
      {
        question: 'Why does my token fail if it has 5 segments instead of 3?',
        answer:
          'A 5-segment token is an encrypted JWE (JSON Web Encryption) rather than a signed JWS/JWT, so its payload cannot be decoded without the decryption key.',
      },
      {
        question: 'What is a JWT and what does this decoder show?',
        answer:
          'A JSON Web Token is a compact string with three Base64Url segments: header, payload and signature. This decoder shows the header JSON, the payload claims and human-readable dates for the timestamp claims.',
      },
      {
        question: 'Is the JWT Decoder free to use?',
        answer:
          'Yes. The JWT Decoder is completely free with no sign-up, no usage limits and no account needed. It runs entirely in your browser.',
      },
      {
        question: 'Can I decode a JWT without the signing secret?',
        answer:
          'Yes. Decoding only reads the Base64Url header and payload, which are not encrypted. The signing secret is only needed to verify that the signature is authentic.',
      },
      {
        question: 'What do the header fields alg and typ mean in a JWT?',
        answer:
          'The alg field names the signing algorithm, such as HS256 or RS256, and typ usually says JWT to identify the token type. Both fields live in the header segment.',
      },
      {
        question: 'What claims are usually in a JWT payload?',
        answer:
          'Common payload claims include sub for the subject or user id, iss for the issuer, aud for the audience, iat for issued time, nbf for not-before time and exp for expiration time, plus custom claims like roles or scopes.',
      },
      {
        question: 'How do I know if my JWT has expired?',
        answer:
          'Compare the exp claim with the current time. This decoder converts exp into a plain UTC date and flags whether the token is still active or already expired.',
      },
      {
        question: 'What is the difference between iat, nbf and exp in a JWT?',
        answer:
          'The iat claim records when the token was issued, nbf records the earliest time the token becomes valid, and exp records when it stops being valid. All three are Unix timestamps in seconds.',
      },
      {
        question: 'Why does my decoded JWT payload look different from the original JSON?',
        answer:
          'Decoding only reverses the Base64Url encoding, so the payload should match the original claims. If it looks garbled, the token may be truncated, wrapped across lines or copied with extra characters.',
      },
      {
        question: 'Can I decode a JWT that has no signature?',
        answer:
          'Yes. An unsigned token uses alg none and has an empty third segment, and its header and payload still decode normally. Unsigned tokens should never be trusted in production.',
      },
      {
        question: 'What does it mean if my token has only two segments?',
        answer:
          'A two-segment token is malformed or incomplete, usually because part of it was cut off while copying. A valid signed JWT always has three segments separated by dots.',
      },
      {
        question: 'Does the JWT Decoder store or send my token anywhere?',
        answer:
          'No. Decoding happens entirely in your browser tab and nothing is uploaded, logged or stored on a server. Closing the tab removes the token from memory.',
      },
      {
        question: 'Why will my JWT not decode at all?',
        answer:
          'Check for extra spaces, line breaks or quotation marks around the token, and confirm it has exactly three dot-separated segments. Tokens copied from log output often include trailing punctuation that breaks decoding.',
      },
      {
        question: 'Can I use this JWT Decoder for OAuth2 access tokens?',
        answer:
          'Yes, as long as the access token is a JWT. Many OAuth2 and OpenID Connect providers issue JWT access and ID tokens, and this tool decodes their claims the same way.',
      },
      {
        question: 'What is a JWE and why can I not decode it here?',
        answer:
          'A JWE is an encrypted JSON Web Encryption token with five segments. Its payload is encrypted, so it can only be read with the decryption key held by the intended recipient.',
      },
      {
        question: 'How do I check JWT claims like roles and scopes?',
        answer:
          'Paste the token and read the decoded payload panel. Roles, scopes, permissions and tenant claims appear there as regular JSON fields you can inspect or copy.',
      },
      {
        question: 'Does decoding a JWT prove the token is valid?',
        answer:
          'No. Decoding only shows what the token contains. Anyone can create a token with any claims, so validity must be confirmed by checking the signature and the exp claim on your server.',
      },
      {
        question: 'Can I decode a JWT on a shared or public computer?',
        answer:
          'You can, because decoding is local and nothing is uploaded, but it is still best to avoid pasting live production tokens on a computer you do not control.',
      },
    ],
  },
  'hash-generator': {
    instructions: [
      {
        title: 'Choose Text Input or Local File Checksum',
        description:
          'Select Text Input to hash strings or Local File Checksum to verify downloaded binaries without uploading them.',
      },
      {
        title: 'Enter text or pick a local file',
        description:
          'Type or paste your text into the input box, or choose a file from your device. The file is read only inside your browser and never uploaded.',
      },
      {
        title: 'Select output encoding',
        description:
          'Switch between Hex (lowercase or uppercase) and Base64 digest formatting.',
      },
      {
        title: 'Review all four digests at once',
        description:
          'SHA-1, SHA-256, SHA-384 and SHA-512 are computed simultaneously, so compare the algorithms side by side without re-running the tool.',
      },
      {
        title: 'Copy any digest',
        description:
          'Click Copy next to SHA-1, SHA-256, SHA-384, or SHA-512 to copy the computed hash.',
      },
      {
        title: 'Troubleshoot a checksum that does not match',
        description:
          'If a file checksum differs from the published value, re-download the file and check for trailing newlines or whitespace in text input, since even one extra character changes the hash completely.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 of "UtilityFlow"',
        input: 'UtilityFlow',
        output: 'Computed deterministically in 64 hex characters (256 bits)',
        explanation: 'Even a single-character change produces a completely different digest.',
      },
    ],
    benefits: [
      'Uses native hardware-accelerated Web Crypto SubtleCrypto',
      'Verifies local file SHA-256 checksums without uploading files',
      'Outputs both Hex (upper/lower) and Base64 formats',
      'Computes all four SHA algorithms simultaneously',
    ],
    useCases: [
      'Verifying SHA-256 checksums on downloaded software installers or archives',
      'Generating Subresource Integrity (SRI) Base64 hashes for scripts/styles',
      'Testing webhook HMAC or payload digest expectations',
      'Creating deterministic content fingerprints',
    ],
    faqs: [
      {
        question: 'Can I reverse a SHA-256 hash back to the original text?',
        answer:
          'No. Cryptographic hash functions are one-way mathematical digests designed so the original input cannot be derived from the hash.',
      },
      {
        question: 'Why are SHA-256 and SHA-512 preferred over SHA-1?',
        answer:
          'SHA-1 has known collision weaknesses and is deprecated for security signatures; SHA-256 and SHA-512 belong to the stronger SHA-2 family.',
      },
      {
        question: 'Are uploaded files transmitted to a server?',
        answer:
          'No. Selected files are read into an ArrayBuffer inside your browser tab and hashed locally.',
      },
      {
        question: 'What is a hash generator used for?',
        answer:
          'A hash generator turns text or a file into a fixed-length fingerprint called a digest. Developers use digests to verify downloads, check data integrity and build Subresource Integrity values.',
      },
      {
        question: 'Is the Hash Generator free to use?',
        answer:
          'Yes. The Hash Generator is completely free with no sign-up and no usage limits. All hashing runs locally in your browser.',
      },
      {
        question: 'What is the difference between SHA-1, SHA-256, SHA-384 and SHA-512?',
        answer:
          'They are members of the SHA family with different digest lengths: SHA-1 produces 160 bits, SHA-256 produces 256 bits, SHA-384 produces 384 bits and SHA-512 produces 512 bits. Longer digests are generally stronger.',
      },
      {
        question: 'How do I verify a downloaded file checksum with this tool?',
        answer:
          'Switch to Local File Checksum mode, select the downloaded file and compare the computed SHA-256 value with the checksum published by the software vendor. Matching values mean the file is intact.',
      },
      {
        question: 'What should I do if my file checksum does not match?',
        answer:
          'Do not install or run the file. Re-download it from the official source and hash it again, since a mismatch can mean a corrupted or tampered download.',
      },
      {
        question: 'What is the difference between hex and Base64 hash output?',
        answer:
          'Hex output shows the digest as hexadecimal characters, while Base64 output shows the same digest in a shorter Base64 string. Both represent the exact same hash bytes.',
      },
      {
        question: 'Does changing one character really change the whole hash?',
        answer:
          'Yes. Hash functions have an avalanche effect, so changing a single letter, space or newline produces a completely different digest with no visible pattern.',
      },
      {
        question: 'Can two different files produce the same SHA-256 hash?',
        answer:
          'In theory a collision is possible, but with SHA-256 it is so unlikely in practice that matching hashes are treated as proof the files are identical.',
      },
      {
        question: 'Can I hash a file without uploading it?',
        answer:
          'Yes. This tool reads the file into your browser memory and hashes it with the Web Crypto API. The file never leaves your device.',
      },
      {
        question: 'What is a Subresource Integrity hash and how do I make one?',
        answer:
          'A Subresource Integrity (SRI) hash is a Base64 SHA digest added to a script or link tag so browsers refuse tampered files. Select Base64 output here and copy the SHA-256 or SHA-384 digest into your integrity attribute.',
      },
      {
        question: 'Why does the same text always produce the same hash?',
        answer:
          'Hash functions are deterministic: identical input always produces the identical digest. That is what makes hashes useful for verifying files and detecting changes.',
      },
      {
        question: 'Is SHA-1 still safe to use?',
        answer:
          'SHA-1 is fine for simple checksums of non-sensitive data, but it should not be used for security signatures or certificates because practical collision attacks exist against it.',
      },
      {
        question: 'How long is a SHA-256 hash in hex characters?',
        answer:
          'A SHA-256 digest is 256 bits, which appears as 64 hexadecimal characters. SHA-1 shows 40 hex characters, SHA-384 shows 96 and SHA-512 shows 128.',
      },
      {
        question: 'Does the Hash Generator work offline?',
        answer:
          'Yes, once the page has loaded. Hashing uses the built-in Web Crypto API in your browser, so no network connection is needed while you hash text or files.',
      },
      {
        question: 'Can I hash text with special characters or emoji?',
        answer:
          'Yes. Text is encoded as UTF-8 before hashing, so accented letters, symbols and emoji are all handled consistently.',
      },
      {
        question: 'What is the difference between a hash and encryption?',
        answer:
          'Encryption is reversible with a key, while hashing is a one-way digest that cannot be reversed. Hashes verify integrity; encryption protects confidentiality.',
      },
      {
        question: 'Can I use the Hash Generator to check a password?',
        answer:
          'You can hash a password to compare it with a stored digest, but passwords should be hashed with a slow password algorithm such as bcrypt or Argon2, not plain SHA-256, in real applications.',
      },
    ],
  },
  'html-entity-encoder': {
    instructions: [
      {
        title: 'Pick Encode or Decode',
        description:
          'Choose Encode Entities to escape HTML markup or Decode Entities to unescape existing entities.',
      },
      {
        title: 'Paste your HTML or text',
        description:
          'Paste the snippet, attribute value or escaped string into the input box. Large blocks of code paste in exactly as they are.',
      },
      {
        title: 'Toggle non-ASCII encoding',
        description:
          'In Encode mode, decide whether characters above ASCII 127 should also convert to numeric &#...; entities.',
      },
      {
        title: 'Review the converted output',
        description:
          'Check that tags, quotes and symbols converted as expected, and confirm that nothing in your snippet was altered or dropped.',
      },
      {
        title: 'Copy or swap',
        description:
          'Copy the converted text or click Swap to invert your workflow.',
      },
      {
        title: 'Troubleshoot double-encoded entities',
        description:
          'If you see &amp;lt; in your output, the text was encoded twice. Decode once to return it to normal entities, then encode a single time.',
      },
    ],
    examples: [
      {
        title: 'Escaping an HTML snippet for documentation',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: 'Prevents the browser from interpreting example tags as live DOM elements.',
      },
    ],
    benefits: [
      'Escapes all five XML/HTML reserved characters (&, <, >, ", \')',
      'Optional numeric entity encoding for international symbols and punctuation',
      'Decodes both named (&mdash;, &copy;) and numeric (&#8212;, &#x2014;) entities',
      'Uses safe DOMParser text extraction when decoding',
    ],
    useCases: [
      'Preparing HTML code examples for blog articles and documentation',
      'Cleaning HTML-encoded text scraped from RSS feeds or XML APIs',
      'Escaping attribute values in static HTML templates',
      'Checking how special symbols render safely in UTF-8 or ASCII pages',
    ],
    faqs: [
      {
        question: 'Which five characters must always be escaped in HTML text and attributes?',
        answer:
          'Ampersand (&), less-than (<), greater-than (>), double quote ("), and single quote (\') should be escaped to prevent markup ambiguity or XSS issues.',
      },
      {
        question: 'When should I turn off non-ASCII encoding?',
        answer:
          'If your web page uses <meta charset="UTF-8">, standard international characters and symbols render directly without needing numeric &#...; entities.',
      },
      {
        question: 'Does the decoder handle hexadecimal entities like &#x27;?',
        answer:
          'Yes. Both decimal (&#39;) and hexadecimal (&#x27;) entities as well as standard named entities (&amp;, &nbsp;, &copy;) decode properly.',
      },
      {
        question: 'What is an HTML entity?',
        answer:
          'An HTML entity is a text code that represents a special character, such as &lt; for < or &amp; for &. Entities let you display reserved characters without the browser treating them as markup.',
      },
      {
        question: 'Is the HTML Entity Encoder free to use?',
        answer:
          'Yes. The HTML Entity Encoder is completely free with no sign-up and no usage limits. All encoding and decoding runs locally in your browser.',
      },
      {
        question: 'Why do I need to escape HTML characters at all?',
        answer:
          'Browsers interpret <, > and & as markup. Escaping them shows the characters as visible text instead, which is essential for code examples, user content and safe templates.',
      },
      {
        question: 'What is the difference between named and numeric HTML entities?',
        answer:
          'Named entities use a readable name such as &copy; for the copyright symbol, while numeric entities use a code point such as &#169; or &#xA9;. Both render the same character.',
      },
      {
        question: 'When should I encode non-ASCII characters as entities?',
        answer:
          'Encode them when a page or email system does not reliably support UTF-8, or when you need pure ASCII output. On modern UTF-8 pages, accented letters and symbols can stay as plain characters.',
      },
      {
        question: 'What does double-encoded HTML look like?',
        answer:
          'Double encoding turns &lt; into &amp;lt;, so the browser displays the literal text &lt; instead of <. Decode once to fix it, then encode only a single time.',
      },
      {
        question: 'Can I decode HTML entities from scraped web pages?',
        answer:
          'Yes. Paste the escaped text from an RSS feed, XML API or scraped page and decode it to recover readable plain text with real characters.',
      },
      {
        question: 'Does encoding HTML entities prevent XSS attacks?',
        answer:
          'Escaping user input is an important layer of XSS defence, but it is not a complete solution on its own. Always combine it with proper output encoding, validation and a content security policy.',
      },
      {
        question: 'What is the HTML entity for a non-breaking space?',
        answer:
          'The non-breaking space is &nbsp; or &#160;. It keeps two words on the same line and is commonly used to preserve spacing in HTML layouts.',
      },
      {
        question: 'How do I escape quotes inside an HTML attribute?',
        answer:
          'Use &quot; for double quotes and &#39; or &apos; for single quotes. Escaping quotes stops an attribute value from ending early and breaking your markup.',
      },
      {
        question: 'Can this tool encode emoji and other Unicode symbols?',
        answer:
          'Yes. With non-ASCII encoding enabled, emoji and international symbols become numeric entities such as &#128512;. With it off, they stay as plain Unicode characters.',
      },
      {
        question: 'What is the difference between escaping HTML and URL encoding?',
        answer:
          'HTML escaping converts reserved markup characters into entities for display in pages, while URL encoding converts characters into percent codes such as %20 for use inside links and query strings.',
      },
      {
        question: 'Does the encoder change normal letters and numbers?',
        answer:
          'No. Plain letters, digits and most punctuation pass through unchanged. Only reserved characters and, optionally, non-ASCII symbols are converted.',
      },
      {
        question: 'Why does my decoded text show strange characters?',
        answer:
          'The source was probably encoded with a different character set, or an entity was malformed. Try decoding again from the original escaped text and check that the page declares UTF-8.',
      },
      {
        question: 'Can I encode an entire HTML document with this tool?',
        answer:
          'Yes. You can paste a full document and encode it, but the result is meant for display as a code sample, not for saving as a working web page.',
      },
      {
        question: 'Is my pasted HTML sent to a server?',
        answer:
          'No. Encoding and decoding happen entirely in your browser, so your code and text never leave your device.',
      },
      {
        question: 'What is the HTML entity for the ampersand character?',
        answer:
          'The ampersand itself is &amp; or &#38;. Always encode a literal & first, because an unencoded ampersand can make the browser misread the entities that follow it.',
      },
    ],
  },
  'json-csv-converter': {
    instructions: [
      {
        title: 'Choose conversion direction',
        description:
          'Select JSON → CSV or CSV → JSON and choose Comma (,), Semicolon (;), or Tab (TSV) as your delimiter.',
      },
      {
        title: 'Paste your JSON or CSV data',
        description:
          'Insert data into the left editor or click Load sample to test quoted fields.',
      },
      {
        title: 'Check the column headers',
        description:
          'Review the generated headers before converting. Nested objects become dot-separated columns such as address.city, and missing keys leave empty cells.',
      },
      {
        title: 'Convert your data',
        description:
          'Run the conversion and inspect the preview. Quoted commas, embedded quotes and newlines inside cells are preserved exactly as RFC 4180 requires.',
      },
      {
        title: 'Copy or download the result',
        description:
          'Copy the converted output or download it directly as a .csv or .json file.',
      },
      {
        title: 'Troubleshoot a conversion error',
        description:
          'If conversion fails, validate your JSON syntax first: check for trailing commas, missing quotes and unmatched brackets. For CSV, confirm you picked the delimiter your file actually uses.',
      },
    ],
    examples: [
      {
        title: 'Handling commas inside CSV values',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation: 'Automatically quotes fields containing delimiters or double quotes per RFC 4180.',
      },
    ],
    benefits: [
      'Bidirectional JSON ↔ CSV conversion in one workspace',
      'Flattens nested JSON objects using dot-notation column headers',
      'Proper RFC-4180 parser preserves quoted commas and embedded newlines',
      'Supports comma, semicolon (European Excel), and tab delimiters',
    ],
    useCases: [
      'Exporting REST API JSON lists into Excel or Google Sheets',
      'Converting spreadsheet data exports into JSON seed files for web apps',
      'Preparing TSV datasets for data science or SQL imports',
      'Inspecting semicolon-delimited CSV exports cleanly',
    ],
    faqs: [
      {
        question: 'How does JSON to CSV handle objects with nested properties?',
        answer:
          'Nested objects are flattened into dot-separated column names (for example, address.city), and arrays are serialized as compact JSON strings.',
      },
      {
        question: 'What if different JSON objects have slightly different keys?',
        answer:
          'The converter scans all objects in the array to build a union of column headers and leaves empty cells where a key is absent.',
      },
      {
        question: 'Does the CSV parser break if a cell contains a comma inside quotes?',
        answer:
          'No. The state-machine parser tracks double-quoted cells and escaped "" quotes accurately.',
      },
      {
        question: 'What is the JSON to CSV Converter used for?',
        answer:
          'It turns JSON data from APIs and apps into CSV spreadsheets you can open in Excel or Google Sheets, and it converts CSV files back into JSON for code and databases.',
      },
      {
        question: 'Is the JSON to CSV Converter free to use?',
        answer:
          'Yes. The JSON to CSV Converter is completely free with no sign-up and no usage limits. All conversion runs locally in your browser.',
      },
      {
        question: 'Can I convert a single JSON object instead of an array?',
        answer:
          'Yes. A single object is treated as one row with its keys as column headers, so you still get a valid CSV file with one data row.',
      },
      {
        question: 'How are JSON arrays inside objects converted to CSV?',
        answer:
          'Array values are serialized as compact JSON strings inside a single cell, so the data is preserved and can be parsed back into an array later.',
      },
      {
        question: 'Which delimiter should I choose for my CSV file?',
        answer:
          'Use a comma for standard CSV, a semicolon for European Excel exports where commas are decimal separators, and a tab for TSV files used in data tools.',
      },
      {
        question: 'Does the converter preserve numbers and booleans correctly?',
        answer:
          'Yes. Numbers and booleans are written as plain values in CSV. When converting back to JSON, values that look like numbers or booleans are parsed into their matching JSON types.',
      },
      {
        question: 'What happens to empty or null values in JSON to CSV?',
        answer:
          'Empty strings, null values and missing keys all become empty cells in the CSV, which keeps the rows aligned with the column headers.',
      },
      {
        question: 'Can I convert CSV back to JSON with this tool?',
        answer:
          'Yes. Switch to CSV to JSON mode, paste your CSV or TSV data and choose the delimiter. The first row becomes the object keys and each following row becomes one JSON object.',
      },
      {
        question: 'Why does my CSV open with all data in one Excel column?',
        answer:
          'Excel may expect a different delimiter than the one your file uses. Re-export with a comma delimiter, or use the semicolon option for European locale settings.',
      },
      {
        question: 'Does the JSON to CSV Converter handle large files?',
        answer:
          'Yes, within browser memory limits. Conversion runs locally, so very large datasets may take a few seconds, but your data is never uploaded to a server.',
      },
      {
        question: 'Is my JSON or CSV data sent to a server?',
        answer:
          'No. Conversion happens entirely in your browser tab, so your data stays on your device and is removed when you close the tab.',
      },
      {
        question: 'What is RFC 4180 and why does it matter for CSV?',
        answer:
          'RFC 4180 is the standard format for CSV files. It defines how fields with commas, quotes or newlines must be wrapped in double quotes, which keeps spreadsheet apps reading your file correctly.',
      },
      {
        question: 'Can I convert TSV files to JSON?',
        answer:
          'Yes. Choose the Tab (TSV) delimiter in CSV to JSON mode and paste your tab-separated data. Tabs are common in data exports and work the same way as commas.',
      },
      {
        question: 'Why did my JSON to CSV conversion fail?',
        answer:
          'The most common causes are invalid JSON, such as trailing commas or missing quotes, and pasting a JSON object that is not an array of objects. Fix the syntax and try again.',
      },
      {
        question: 'How do I export API JSON data to Excel?',
        answer:
          'Copy the JSON array from your API response, paste it here, convert to CSV and download the file. Open the downloaded CSV directly in Excel or import it into Google Sheets.',
      },
      {
        question: 'Does the converter keep the original order of my JSON keys?',
        answer:
          'Column order follows the order keys first appear across your objects. The first object sets the initial order and new keys from later objects are appended.',
      },
      {
        question: 'Can I download the converted file instead of copying it?',
        answer:
          'Yes. Use the download button to save the result as a .csv or .json file on your device, ready to open in a spreadsheet or import into your app.',
      },
    ],
  },
  'unix-timestamp-converter': {
    instructions: [
      {
        title: 'View or copy current Unix time',
        description:
          'Use the live ticking counter at the top to grab the current Unix epoch in seconds.',
      },
      {
        title: 'Convert Unix Timestamp → Human Date',
        description:
          'Enter any numeric epoch; Auto mode detects seconds vs milliseconds automatically, or force a unit.',
      },
      {
        title: 'Review ISO, UTC and local formats',
        description:
          'Compare the ISO 8601, UTC, RFC 2822 and local-time outputs side by side, plus the relative time such as 2 hours ago, to pick the format you need.',
      },
      {
        title: 'Convert Local Date & Time → Unix Timestamp',
        description:
          'Pick a date and time in the lower panel to get exact seconds, milliseconds, and ISO 8601 output.',
      },
      {
        title: 'Copy the timestamp you need',
        description:
          'Copy the seconds value for APIs and databases, the milliseconds value for JavaScript Date objects, or the ISO string for logs and JSON.',
      },
      {
        title: 'Troubleshoot a wrong-looking date',
        description:
          'If the date lands in 1970 or the year 5000, you probably mixed up seconds and milliseconds. Switch the unit selector from Auto to the correct unit and convert again.',
      },
    ],
    examples: [
      {
        title: 'Detecting seconds vs milliseconds',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (seconds)',
        explanation: '10-digit numbers are interpreted as seconds; 13-digit numbers as milliseconds.',
      },
    ],
    benefits: [
      'Live ticking Unix clock synced to your system time',
      'Automatic seconds vs milliseconds detection with manual override',
      'Outputs ISO 8601, local time, RFC 2822 GMT, and relative time together',
      'Includes bidirectional date-picker to Unix seconds/ms converter',
    ],
    useCases: [
      'Inspecting JWT `iat` / `exp` claims and API created_at timestamps',
      'Debugging database integer timestamps in PostgreSQL or SQLite',
      'Generating future epoch timestamps for cache TTLs or tests',
      'Converting log file epoch markers into local readable times',
    ],
    faqs: [
      {
        question: 'How does Auto mode tell seconds apart from milliseconds?',
        answer:
          'Values with magnitude ≥ 100,000,000,000 (1e11, around 1973 in milliseconds or year 5138 in seconds) are treated as milliseconds; smaller values are treated as seconds.',
      },
      {
        question: 'Is Unix time affected by timezones?',
        answer:
          'No. Unix epoch time always measures elapsed seconds since 1970-01-01T00:00:00Z (UTC), regardless of your local timezone.',
      },
      {
        question: 'Can I convert timestamps before 1970?',
        answer:
          'Yes. Enter a negative Unix timestamp (such as -86400 for December 31, 1969) to inspect pre-1970 dates.',
      },
      {
        question: 'What is a Unix timestamp?',
        answer:
          'A Unix timestamp, also called epoch time, is the number of seconds that have passed since January 1, 1970 at 00:00:00 UTC. It is a simple way for computers to store dates as a single number.',
      },
      {
        question: 'Is the Unix Timestamp Converter free to use?',
        answer:
          'Yes. The Unix Timestamp Converter is completely free with no sign-up and no usage limits. All conversion runs locally in your browser.',
      },
      {
        question: 'What is the difference between Unix seconds and milliseconds?',
        answer:
          'Unix seconds count whole seconds since 1970 and are usually 10 digits long, while milliseconds count thousandths of a second and are usually 13 digits long. JavaScript Date objects use milliseconds.',
      },
      {
        question: 'What is the current Unix timestamp right now?',
        answer:
          'The live counter at the top of this tool ticks every second and shows the current Unix time in seconds. Copy it whenever you need the exact value for testing or logging.',
      },
      {
        question: 'How do I convert a Unix timestamp to a readable date?',
        answer:
          'Paste the epoch number into the converter and it shows the matching date in ISO 8601, UTC, RFC 2822 and your local timezone, plus a relative time such as 3 days ago.',
      },
      {
        question: 'How do I convert a date to a Unix timestamp?',
        answer:
          'Use the date and time picker in the lower panel, then read the exact Unix seconds and milliseconds for the date you selected in your local timezone.',
      },
      {
        question: 'Why does my timestamp show a date in 1970?',
        answer:
          'You probably entered a milliseconds value while the tool expected seconds, or a very small number. A small value means only a few seconds after the 1970 epoch start.',
      },
      {
        question: 'Why does my timestamp show a date in the year 5000?',
        answer:
          'You probably entered a seconds value while the tool treated it as milliseconds, or entered milliseconds in a seconds field. Switch the unit selector to the correct unit and convert again.',
      },
      {
        question: 'What is ISO 8601 format for a Unix timestamp?',
        answer:
          'ISO 8601 writes a date as YYYY-MM-DDTHH:MM:SS, for example 2026-11-13T04:40:00.000Z. The trailing Z means the time is in UTC.',
      },
      {
        question: 'Do Unix timestamps include leap seconds?',
        answer:
          'No. Unix time counts every day as exactly 86,400 seconds and ignores leap seconds, so it drifts slightly from true astronomical time over long periods.',
      },
      {
        question: 'Can I use Unix timestamps for future dates?',
        answer:
          'Yes. Enter a future date in the date picker to get its Unix timestamp, which is handy for setting cache expiry times, scheduled jobs and test data.',
      },
      {
        question: 'What is the maximum Unix timestamp?',
        answer:
          'On 32-bit systems the classic limit is 2,147,483,647 seconds, which is January 19, 2038. Modern 64-bit systems handle far larger values, and this tool accepts them.',
      },
      {
        question: 'How do I check a JWT expiry timestamp with this converter?',
        answer:
          'Copy the exp claim from your decoded JWT and paste it here. The converter shows the exact UTC date and time when the token expires.',
      },
      {
        question: 'Does the Unix Timestamp Converter work offline?',
        answer:
          'Yes, once the page has loaded. Conversion is simple arithmetic in your browser, and the live clock reads your system time, so no network connection is needed.',
      },
      {
        question: 'What is the difference between UTC and local time in the results?',
        answer:
          'UTC is the universal reference time with no offset, while local time applies your timezone offset. Both describe the same instant, just shown in different zones.',
      },
      {
        question: 'Can I convert a Unix timestamp from a database or log file?',
        answer:
          'Yes. Copy the integer timestamp from your database row or log line and paste it here to see the human-readable date, which makes debugging much faster.',
      },
      {
        question: 'Is my timestamp data sent to a server?',
        answer:
          'No. Conversion happens entirely in your browser, so the timestamps and dates you enter never leave your device.',
      },
    ],
  },
  'sql-formatter': {
    instructions: [
      {
        title: 'Paste your SQL query',
        description:
          'Insert any SELECT, INSERT, UPDATE, DELETE, or DDL query into Raw SQL Query, including multi-line or single-line statements.',
      },
      {
        title: 'Choose Beautify or Minify mode',
        description:
          'Select Beautify to expand the query into readable indented clauses, or Minify to collapse it into a single line for logs and code.',
      },
      {
        title: 'Set keyword casing and indentation',
        description:
          'Pick UPPERCASE or lowercase SQL keywords and choose 2-space or 4-space indentation to match your team style guide.',
      },
      {
        title: 'Review the formatted output',
        description:
          'Check that clause breaks, JOINs, and subqueries are aligned as expected and that strings and comments are untouched.',
      },
      {
        title: 'Copy or reuse the formatted SQL',
        description:
          'Use Copy SQL to transfer the standardized query back into your editor, migration file, or pull request.',
      },
      {
        title: 'Fix formatting issues',
        description:
          'If output looks wrong, check for unbalanced quotes or a missing semicolon in your input, then re-paste and format again.',
      },
    ],
    examples: [
      {
        title: 'Formatting a multi-join query',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Breaks major SQL clauses onto dedicated lines and normalizes keyword casing.',
      },
    ],
    benefits: [
      'Preserves single-quoted string literals and SQL comments untouched',
      'Supports multi-word clauses like LEFT OUTER JOIN, GROUP BY, and ORDER BY',
      'Switches effortlessly between Beautify and Minify modes',
      'Runs locally so proprietary table and schema names stay private',
    ],
    useCases: [
      'Cleaning ORM-generated SQL logs for performance debugging',
      'Standardizing SQL scripts before pull-request reviews',
      'Compacting multi-line queries into single-line strings for CLI scripts',
      'Aligning keyword casing across team SQL style guides',
    ],
    faqs: [
      {
        question: 'Will SQL Formatter alter table names or text inside quotes?',
        answer:
          'No. The tokenizer isolates string literals and comments so uppercase/lowercase keyword formatting only applies to recognized SQL keywords.',
      },
      {
        question: 'Which SQL dialects are supported?',
        answer:
          'Standard ANSI SQL clauses (PostgreSQL, MySQL, SQLite, SQL Server) including SELECT, JOINs, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE, and DELETE are supported.',
      },
      {
        question: 'Can I minify a formatted query back into one line?',
        answer:
          'Yes. Switch the mode toggle to Minify to strip comments and collapse extra whitespace safely.',
      },
      {
        question: 'Is the SQL Formatter free to use?',
        answer:
          'Yes. The SQL Formatter is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the SQL Formatter send my queries to a server?',
        answer:
          'No. All formatting happens locally in your browser, so table names, schema details, and data values in your queries never leave your device.',
      },
      {
        question: 'Can I format SQL with subqueries and CTEs?',
        answer:
          'Yes. Nested SELECT statements and common table expressions (WITH ... AS) are formatted with their own indentation levels so the structure stays readable.',
      },
      {
        question: 'Does the SQL Formatter handle INSERT, UPDATE, and DELETE statements?',
        answer:
          'Yes. INSERT, UPDATE, and DELETE statements are formatted alongside SELECT queries, with their clauses broken onto separate lines.',
      },
      {
        question: 'Can I format DDL statements like CREATE TABLE?',
        answer:
          'Yes. DDL statements such as CREATE TABLE, ALTER TABLE, and DROP TABLE can be pasted in and formatted with the same keyword casing and indentation rules.',
      },
      {
        question: 'What indentation options does the SQL Formatter offer?',
        answer:
          'You can choose 2-space or 4-space indentation for beautified queries, so the output matches your editor or team style guide.',
      },
      {
        question: 'Does formatting change what my SQL query does?',
        answer:
          'No. Formatting only changes whitespace and keyword casing; it does not add, remove, or reorder any part of the query logic.',
      },
      {
        question: 'Can I format multiple SQL queries at once?',
        answer:
          'Yes. You can paste several statements separated by semicolons and format them together in one pass.',
      },
      {
        question: 'Does the SQL Formatter work with MySQL, PostgreSQL, and SQL Server syntax?',
        answer:
          'Yes. It handles standard ANSI SQL used by MySQL, PostgreSQL, SQLite, and SQL Server, including their common clause keywords.',
      },
      {
        question: 'Will comments in my SQL be preserved when formatting?',
        answer:
          'Yes. Single-line and block comments are preserved by the tokenizer, although Minify mode strips comments to produce the smallest output.',
      },
      {
        question: 'What happens if my SQL has a syntax error?',
        answer:
          'The formatter still processes the text as best it can, since it works on tokens rather than executing the query, but you should fix the error before running the SQL in your database.',
      },
      {
        question: 'Can I minify SQL for use in application code or logs?',
        answer:
          'Yes. Minify mode collapses a query to one line while preserving string literals, which is ideal for embedding SQL in code or logging it compactly.',
      },
      {
        question: 'Does the SQL Formatter support window functions?',
        answer:
          'Yes. Window functions such as ROW_NUMBER() OVER (PARTITION BY ...) are formatted as part of the SELECT list with their OVER clauses kept intact.',
      },
      {
        question: 'Is there a size limit on the SQL I can format?',
        answer:
          'There is no fixed character limit in the tool, since it runs in your browser, though very long queries may take a moment on slower devices.',
      },
      {
        question: 'Can I use the SQL Formatter on my phone?',
        answer:
          'Yes. It works in any modern mobile browser, so you can paste and format SQL on your phone or tablet without installing anything.',
      },
      {
        question: 'Does the SQL Formatter preserve line breaks inside string literals?',
        answer:
          'Yes. Text inside single-quoted string literals is left untouched, so multi-line strings keep their original line breaks.',
      },
      {
        question: 'How can I standardize keyword casing across my team with the SQL Formatter?',
        answer:
          'Agree on one casing style, such as UPPERCASE keywords, and run every query through the formatter with that setting before committing it to your repository.',
      },
    ],
  },
  'css-minifier': {
    instructions: [
      {
        title: 'Select Minify or Beautify',
        description:
          'Choose Minify CSS to shrink file weight for production or Beautify CSS to restore indentation to a compressed stylesheet.',
      },
      {
        title: 'Paste your stylesheet',
        description:
          'Enter CSS rules, custom properties, or `@media` blocks into Input CSS, including full stylesheets or single snippets.',
      },
      {
        title: 'Run the tool and check the stats',
        description:
          'The output updates as you type; in Minify mode, check the exact input bytes, output bytes, and percentage saved.',
      },
      {
        title: 'Review the output carefully',
        description:
          'Confirm that @media blocks, quoted strings, and url(...) values survived intact and that nested rules are indented correctly in Beautify mode.',
      },
      {
        title: 'Copy or download the CSS',
        description:
          'Click Copy CSS to paste the result into your stylesheet, inline <style> block, or deployment build step.',
      },
      {
        title: 'Fix flat or broken output',
        description:
          'If Beautify output looks flat or rules merge together, check for a missing closing brace in your input and add it before retrying.',
      },
    ],
    examples: [
      {
        title: 'Compressing a card rule',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Removes newlines, spaces around punctuation, and final semicolon inside the block.',
      },
    ],
    benefits: [
      'Tokenizer preserves quoted strings (such as content: "..." or url(...))',
      'Strips /* ... */ comments and unnecessary whitespace safely',
      'Displays exact input bytes, output bytes, and percentage saved',
      'Includes Beautify mode to inspect third-party minified CSS',
    ],
    useCases: [
      'Compressing inline <style> snippets for HTML emails and landing pages',
      'Unminifying production CSS bundles during visual debugging',
      'Checking stylesheet weight savings before deployment',
      'Cleaning spacing inconsistencies in legacy stylesheets',
    ],
    faqs: [
      {
        question: 'Does CSS minification break spaces inside content: "..." strings?',
        answer:
          'No. Single- and double-quoted string literals are preserved verbatim by the tokenizer.',
      },
      {
        question: 'Why does Minify remove the last semicolon before "}"?',
        answer:
          'In CSS syntax, the final declaration before a closing curly brace does not require a trailing semicolon, saving 1 byte per rule block.',
      },
      {
        question: 'Does it support nested @media blocks in Beautify mode?',
        answer:
          'Yes. Brace depth is tracked across @media and @supports blocks so inner rules indent properly.',
      },
      {
        question: 'Is the CSS Minifier free to use?',
        answer:
          'Yes. The CSS Minifier is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the CSS Minifier upload my stylesheet anywhere?',
        answer:
          'No. All minification and beautifying happens locally in your browser, so your CSS never leaves your device.',
      },
      {
        question: 'How much smaller will my CSS get after minifying?',
        answer:
          'It depends on how many comments and extra spaces your stylesheet contains; the tool shows the exact byte count and percentage saved for your input.',
      },
      {
        question: 'Does CSS minification remove @media queries?',
        answer:
          'No. @media queries and their conditions are preserved exactly, since removing them would change how your page responds to screen sizes.',
      },
      {
        question: 'Can I minify CSS that uses custom properties (variables)?',
        answer:
          'Yes. Custom properties such as --brand-color and their var() references are treated as normal declarations and kept intact.',
      },
      {
        question: 'Does the CSS Minifier preserve url(...) and content strings?',
        answer:
          'Yes. Quoted strings inside url(...) and content properties are preserved verbatim, so image paths and generated text stay correct.',
      },
      {
        question: 'Will minified CSS still work in all browsers?',
        answer:
          'Yes. Minification only removes comments and unnecessary whitespace, which browsers ignore anyway, so the rendered result is identical.',
      },
      {
        question: 'Can I beautify CSS from a production bundle?',
        answer:
          'Yes. Paste any minified stylesheet into Beautify mode to expand it into indented, readable rules for debugging.',
      },
      {
        question: 'Does the CSS Minifier handle @keyframes and @font-face?',
        answer:
          'Yes. At-rules such as @keyframes, @font-face, and @import are preserved, with their inner blocks indented correctly in Beautify mode.',
      },
      {
        question: 'What is the difference between minify and beautify in the CSS Minifier?',
        answer:
          'Minify shrinks CSS by removing comments and whitespace for production, while Beautify expands compressed CSS into readable indented rules for editing and debugging.',
      },
      {
        question: 'Can I minify multiple stylesheets at once?',
        answer:
          'Yes. You can paste several stylesheets together into one input, though keeping related files separate makes the output easier to manage.',
      },
      {
        question: 'Does the CSS Minifier remove unused CSS rules?',
        answer:
          'No. It only removes comments and whitespace; it does not analyze which selectors your HTML uses, so unused rules stay in the output.',
      },
      {
        question: 'Is the byte-savings percentage shown by the CSS Minifier exact?',
        answer:
          'Yes. It is calculated from the actual byte counts of your input and output, so the percentage reflects your real savings.',
      },
      {
        question: 'Can I use the CSS Minifier for inline <style> snippets?',
        answer:
          'Yes. Small snippets minify the same way as full stylesheets, which is useful for HTML emails and landing pages with inline styles.',
      },
      {
        question: 'Does the CSS Minifier support modern CSS like grid and nesting?',
        answer:
          'Yes. Modern properties such as grid and flexbox pass through unchanged, and nested rules are indented by brace depth in Beautify mode.',
      },
      {
        question: 'What happens if my CSS has a syntax error?',
        answer:
          'The tool still processes the text, but a missing brace or unclosed string can confuse the output, so fix syntax errors before minifying for production.',
      },
      {
        question: 'Can I minify CSS on my phone?',
        answer:
          'Yes. The CSS Minifier works in any modern mobile browser, so you can paste and minify stylesheets without installing anything.',
      },
    ],
  },
  'js-formatter': {
    instructions: [
      {
        title: 'Choose Minify JS or Beautify JS',
        description:
          'Pick Minify JS to strip comments and whitespace for compact output, or Beautify JS with 2 or 4 spaces to restore readable indentation.',
      },
      {
        title: 'Paste your code snippet',
        description:
          'Insert JavaScript or TypeScript code into the left editor, from a single function to a full script block.',
      },
      {
        title: 'Set indentation for Beautify mode',
        description:
          'Choose 2-space or 4-space indentation so the beautified code matches your editor or project style.',
      },
      {
        title: 'Review byte savings and output',
        description:
          'Verify the byte reduction in Minify mode and scan the output to confirm strings, template literals, and regex patterns are intact.',
      },
      {
        title: 'Copy the processed code',
        description:
          'Use the copy button to move the minified or beautified code into your editor, bookmarklet, or inline script.',
      },
      {
        title: 'Fix minification issues',
        description:
          'If minified code behaves oddly, add missing semicolons to your input first, since automatic semicolon insertion can be ambiguous after whitespace is removed.',
      },
    ],
    examples: [
      {
        title: 'Stripping comments and whitespace',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Removes comments and whitespace around braces without touching logic.',
      },
    ],
    benefits: [
      'Lexical tokenizer protects single, double, and backtick template strings',
      'Strips both // single-line and /* */ block comments in Minify mode',
      'Reports live byte reduction percentage',
      'Fast browser-only execution with zero code sent externally',
    ],
    useCases: [
      'Preparing compact inline scripts or bookmarklets',
      'Unpacking compressed single-line snippets for readability',
      'Removing developer comments before sharing code samples',
      'Quickly re-indenting pasted JS functions',
    ],
    faqs: [
      {
        question: 'Does this tool rename variables (mangle) like Terser or esbuild?',
        answer:
          'No. It performs safe whitespace and comment minification without renaming identifiers or altering AST semantics, making the output easy to inspect.',
      },
      {
        question: 'Are string literals containing "//" (like URLs) safe?',
        answer:
          'Yes. Quoted strings and template literals are tokenized before comment detection so URLs inside quotes are never treated as comments.',
      },
      {
        question: 'Should I use semicolons when minifying multi-statement JS?',
        answer:
          'Including standard semicolons is recommended before minifying any JavaScript snippet to avoid ASI (Automatic Semicolon Insertion) ambiguities.',
      },
      {
        question: 'Is the JavaScript Minifier free to use?',
        answer:
          'Yes. The JavaScript Minifier is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the JavaScript Minifier upload my code to a server?',
        answer:
          'No. All minification and formatting happens locally in your browser, so your code never leaves your device.',
      },
      {
        question: 'Does the JavaScript Minifier work with TypeScript code?',
        answer:
          'Yes. TypeScript snippets can be pasted in and minified or beautified the same way, since the tokenizer handles standard JS and TS syntax.',
      },
      {
        question: 'Will minifying break my JavaScript?',
        answer:
          'No, as long as your code uses standard semicolons. Only comments and extra whitespace are removed, so the logic stays identical.',
      },
      {
        question: 'Does the JavaScript Minifier remove console.log statements?',
        answer:
          'No. It only strips comments and whitespace, so console.log calls and other statements remain in the output.',
      },
      {
        question: 'Can I beautify minified code from a production bundle?',
        answer:
          'Yes. Paste compact single-line code into Beautify mode to re-indent it into readable lines for debugging.',
      },
      {
        question: 'Does the JavaScript Minifier handle template literals with ${} expressions?',
        answer:
          'Yes. Backtick template literals, including ${} interpolations, are tokenized as strings and preserved exactly.',
      },
      {
        question: 'What is the difference between minify and beautify in the JavaScript Minifier?',
        answer:
          'Minify removes comments and whitespace to shrink code for inline use, while Beautify re-indents compact code into readable lines for editing.',
      },
      {
        question: 'Can I minify ES6 code with arrow functions and classes?',
        answer:
          'Yes. Arrow functions, classes, destructuring, and other modern ES6 syntax are handled by the tokenizer without changing the code.',
      },
      {
        question: 'Does the JavaScript Minifier support JSX or React code?',
        answer:
          'JSX is not specifically supported, since angle brackets in JSX can be misread by the tokenizer. Use it for plain JavaScript or TypeScript and a dedicated formatter for JSX.',
      },
      {
        question: 'How much smaller will my JavaScript get after minifying?',
        answer:
          'It depends on how many comments and line breaks your code has; the tool shows the exact byte count and percentage saved for your snippet.',
      },
      {
        question: 'Can I minify multiple JavaScript files at once?',
        answer:
          'The tool processes one snippet at a time, so paste each file separately. For whole projects, use a bundler such as esbuild or Terser instead.',
      },
      {
        question: 'Does the JavaScript Minifier preserve regular expressions?',
        answer:
          'Yes. Regular expression literals are recognized by the tokenizer and kept intact, including any // characters inside the pattern.',
      },
      {
        question: 'What happens if my JavaScript has a syntax error?',
        answer:
          'The tool still processes the text, but unbalanced braces or unclosed strings can produce odd output, so fix syntax errors before minifying.',
      },
      {
        question: 'Can I use the JavaScript Minifier for bookmarklets?',
        answer:
          'Yes. Minify mode is ideal for bookmarklets, since it collapses a snippet into a compact single line you can paste into a bookmark URL.',
      },
      {
        question: 'Is the minified output safe to paste into an HTML script tag?',
        answer:
          'Generally yes, but avoid a literal "</script>" sequence inside your strings, since the browser would treat it as the end of the script block.',
      },
      {
        question: 'Can I format JavaScript on my phone?',
        answer:
          'Yes. The JavaScript Minifier works in any modern mobile browser, so you can paste and format code without installing anything.',
      },
    ],
  },
  'cron-expression-parser': {
    instructions: [
      {
        title: 'Enter a 5-field cron expression or pick a preset',
        description:
          'Type any cron expression such as `0 9 * * 1-5` or click a common schedule preset button to start from a known pattern.',
      },
      {
        title: 'Check the plain-English summary and field breakdown',
        description:
          'Verify that minute, hour, day-of-month, month, and day-of-week fields match your intent before trusting the schedule.',
      },
      {
        title: 'Verify the next 8 run times',
        description:
          'Review the calculated upcoming local execution timestamps to confirm the job runs when you expect it to.',
      },
      {
        title: 'Adjust fields with steps, ranges, and lists',
        description:
          'Refine the schedule using step values like */15, ranges like 1-5, or lists like 1,15, then re-check the summary and run times.',
      },
      {
        title: 'Copy the expression for your scheduler',
        description:
          'Copy the verified expression into your crontab, GitHub Actions workflow, or Cloudflare Worker cron trigger.',
      },
      {
        title: 'Watch out for day-of-month vs day-of-week',
        description:
          'If both day fields are restricted, standard cron runs when either matches. Use * in one of them if you only want one condition to apply.',
      },
    ],
    examples: [
      {
        title: 'Business-hours morning job',
        input: '0 9 * * 1-5',
        output: 'At 09:00, on weekday 1-5 (Monday–Friday).',
        explanation: 'Runs at 09:00 AM every Monday through Friday.',
      },
    ],
    benefits: [
      'Supports wildcards (*), steps (*/5), ranges (1-5), lists (1,15), and names (MON-FRI)',
      'Computes the next 8 concrete execution timestamps in your local timezone',
      'Flags out-of-range values or missing fields immediately',
      'Includes one-click presets for common intervals',
    ],
    useCases: [
      'Verifying GitHub Actions `schedule.cron` and Cloudflare Workers Cron Triggers',
      'Debugging Linux crontab backup or cleanup schedules',
      'Double-checking day-of-week (0–6) vs day-of-month (1–31) logic',
      'Documenting recurring job schedules for operations runbooks',
    ],
    faqs: [
      {
        question: 'Does this parser support 6-field cron expressions with seconds?',
        answer:
          'This tool parses standard 5-field Unix crontab expressions (minute, hour, day of month, month, day of week), used by Linux cron, GitHub Actions, and Cloudflare Workers.',
      },
      {
        question: 'What happens if both Day of Month and Day of Week are non-wildcard?',
        answer:
          'Following standard Vixie/Unix cron behavior, when both day fields are restricted, a run triggers if either Day of Month OR Day of Week matches.',
      },
      {
        question: 'Are MON–FRI and JAN–DEC names supported?',
        answer:
          'Yes. Standard 3-letter English month and weekday abbreviations as well as numeric 0 or 7 for Sunday are supported.',
      },
      {
        question: 'Is the Cron Expression Parser free to use?',
        answer:
          'Yes. The Cron Expression Parser is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'What is a cron expression?',
        answer:
          'A cron expression is a compact 5-field schedule string that tells a system when to run a job automatically, such as every hour or every weekday at 9 AM.',
      },
      {
        question: 'What do the 5 fields in a cron expression mean?',
        answer:
          'From left to right they are minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-7, where both 0 and 7 mean Sunday).',
      },
      {
        question: 'How do I run a cron job every 5 minutes?',
        answer:
          'Use the step syntax in the minute field: */5 * * * * runs the job every 5 minutes, at :00, :05, :10, and so on.',
      },
      {
        question: 'How do I schedule a cron job at 9 AM on weekdays?',
        answer:
          'Use 0 9 * * 1-5, which means minute 0, hour 9, any day of the month, any month, and weekdays Monday through Friday.',
      },
      {
        question: 'What does */15 mean in a cron expression?',
        answer:
          'The */15 step syntax means every 15 units of that field, so */15 in the minute field runs a job every 15 minutes.',
      },
      {
        question: 'What is the difference between 0 and 7 for Sunday in cron?',
        answer:
          'There is no difference; both 0 and 7 represent Sunday in the day-of-week field, so you can use whichever you prefer.',
      },
      {
        question: 'Can I use this Cron Expression Parser for GitHub Actions schedules?',
        answer:
          'Yes. GitHub Actions uses the same 5-field cron syntax, so you can verify a schedule here before pasting it into your workflow file.',
      },
      {
        question: 'Does the Cron Expression Parser account for my timezone?',
        answer:
          'The next 8 run times are shown in your local browser timezone, but remember that cron itself runs in the server timezone, so check your server settings too.',
      },
      {
        question: 'What happens if I enter an invalid cron expression?',
        answer:
          'The parser flags out-of-range values or missing fields immediately, so you can correct the expression before deploying it.',
      },
      {
        question: 'Can I schedule a cron job for the last day of the month?',
        answer:
          'Standard 5-field cron has no last-day syntax. A common workaround is to schedule on days 28-31 and let the job itself check whether it is the last day.',
      },
      {
        question: 'What do L and W mean in a cron expression?',
        answer:
          'L (last) and W (weekday) are Quartz-style extensions, not part of standard Unix cron, so they are not supported by this parser.',
      },
      {
        question: 'How do I run a cron job twice a day?',
        answer:
          'List both hours in the hour field, for example 0 6,18 * * * runs the job at 6 AM and 6 PM every day.',
      },
      {
        question: 'Does the Cron Expression Parser support seconds or 6-field expressions?',
        answer:
          'No. It supports only standard 5-field Unix expressions; schedulers that need seconds use a different 6-field format.',
      },
      {
        question: 'Can I preview cron runs for a specific date range?',
        answer:
          'The tool previews the next 8 upcoming run times from now. It does not offer a custom date-range view, but the next 8 runs usually reveal scheduling mistakes.',
      },
      {
        question: 'Why does my cron job run on unexpected days?',
        answer:
          'The most common cause is restricting both day-of-month and day-of-week, which triggers a run when either matches. Set one of them to * to fix it.',
      },
      {
        question: 'Can I use cron presets for common schedules?',
        answer:
          'Yes. The tool includes one-click presets for common intervals such as every hour, daily, weekly, and monthly, which you can then customize.',
      },
    ],
  },
  'color-converter': {
    instructions: [
      {
        title: 'Pick or type a color',
        description:
          'Use the color picker, enter a 3- or 6-digit HEX code, or adjust individual R/G/B or H/S/L channels to set your foreground color.',
      },
      {
        title: 'Review HEX, RGB, and HSL values',
        description:
          'Check the synchronized values in all three notations and confirm the live swatch matches the color you intended.',
      },
      {
        title: 'Copy CSS color values',
        description:
          'Click Copy HEX, Copy RGB, or Copy HSL to grab ready-to-use CSS strings for your stylesheet or design tokens.',
      },
      {
        title: 'Select a background color',
        description:
          'Choose a background color below to compare it against your foreground color for the contrast check.',
      },
      {
        title: 'Check WCAG contrast results',
        description:
          'Read the exact contrast ratio and Pass/Fail status for AA Normal, AAA Normal, and AA Large text before shipping the pairing.',
      },
      {
        title: 'Fix a failing contrast pair',
        description:
          'If the pair fails, lower the Lightness in HSL to darken the text (or lighten the background) until the ratio reaches at least 4.5:1 for normal text.',
      },
    ],
    examples: [
      {
        title: 'Accessible cobalt blue on white',
        input: 'Foreground: #2563EB · Background: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contrast: 5.17:1 (AA Pass)',
        explanation: 'Meets the 4.5:1 WCAG AA requirement for standard body text.',
      },
    ],
    benefits: [
      'Synchronizes HEX, RGB, and HSL channels bidirectionally in real time',
      'Built-in WCAG 2.1 relative luminance contrast calculator',
      'Tests AA Normal (4.5:1), AAA Normal (7.0:1), and AA Large (3.0:1) thresholds',
      'One-click copy for valid CSS color strings',
    ],
    useCases: [
      'Verifying button and link text contrast during UI implementation',
      'Converting brand HEX palettes into HSL for Tailwind or CSS variables',
      'Fine-tuning lightness and saturation without leaving the browser',
      'Auditing accessibility compliance before design handoff',
    ],
    faqs: [
      {
        question: 'What contrast ratio is required for WCAG 2.1 AA body text?',
        answer:
          'WCAG 2.1 AA requires at least 4.5:1 for normal text and 3.0:1 for large text (18pt / 24px regular or 14pt / 18.66px bold).',
      },
      {
        question: 'Can I enter 3-digit shorthand HEX codes like #09f?',
        answer:
          'Yes. Three-character HEX codes expand automatically to their 6-character equivalents, so #09f becomes #0099ff and converts exactly like a full code.',
      },
      {
        question: 'Why does HSL make adjusting themes easier than RGB?',
        answer:
          'HSL separates Hue, Saturation, and Lightness, allowing you to darken or lighten a brand color by changing only the Lightness percentage.',
      },
      {
        question: 'Is the Color Converter free to use?',
        answer:
          'Yes. The Color Converter is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Does the Color Converter store my colors?',
        answer:
          'No. Conversions and contrast checks happen locally in your browser, so your palette choices are never uploaded or stored.',
      },
      {
        question: 'How do I convert HEX to RGB with the Color Converter?',
        answer:
          'Enter a HEX code such as #2563EB and the RGB value appears instantly, ready to copy as a CSS rgb() string.',
      },
      {
        question: 'How do I convert RGB to HSL?',
        answer:
          'Enter the RGB values or adjust the R, G, and B channels, and the matching HSL value updates live in the same panel.',
      },
      {
        question: 'What is the difference between HEX, RGB, and HSL?',
        answer:
          'HEX is a compact code for a color, RGB defines it by red, green, and blue amounts, and HSL defines it by hue, saturation, and lightness. They describe the same color in different notations.',
      },
      {
        question: 'What contrast ratio do I need for WCAG AAA?',
        answer:
          'WCAG AAA requires at least 7.0:1 for normal text and 4.5:1 for large text, which is stricter than the AA level.',
      },
      {
        question: 'What counts as large text for WCAG contrast?',
        answer:
          'Large text is 18pt (24px) or larger in regular weight, or 14pt (18.66px) or larger in bold weight. Large text only needs a 3.0:1 ratio for AA.',
      },
      {
        question: 'Can I convert a color with transparency (alpha) in the Color Converter?',
        answer:
          'This converter handles solid colors without an alpha channel. For transparency, take the converted RGB values and use them inside an rgba() function.',
      },
      {
        question: 'Does the Color Converter support 8-digit HEX codes with alpha?',
        answer:
          'No. The converter accepts standard 3- and 6-digit HEX codes; for transparency, use the RGB output with an alpha value in rgba().',
      },
      {
        question: 'Can I pick a color from an image with the Color Converter?',
        answer:
          'No. The tool does not sample images; enter the HEX value of the color you want or choose it with the built-in color picker.',
      },
      {
        question: 'How is the WCAG contrast ratio calculated?',
        answer:
          'It is calculated from the relative luminance of the foreground and background colors using the formula defined in the WCAG 2.1 specification.',
      },
      {
        question: 'Why does my brand color fail AA contrast on white?',
        answer:
          'Light or mid-tone brand colors often fall below the 4.5:1 threshold against white. Darken the color or use it only for large text and decorative elements.',
      },
      {
        question: 'Can I copy colors as CSS variables from the Color Converter?',
        answer:
          'Yes. Copy the HEX, RGB, or HSL value and paste it into a CSS custom property, for example --brand: #2563EB, then reference it with var(--brand).',
      },
      {
        question: 'What is the difference between HSL and HSV?',
        answer:
          'HSL describes a color by hue, saturation, and lightness, while HSV uses hue, saturation, and value (brightness). HSL is generally easier for creating accessible light and dark theme variants.',
      },
      {
        question: 'Can I convert named CSS colors like "red" in the Color Converter?',
        answer:
          'Enter the HEX value for the named color instead, for example red is #FF0000. The tool accepts HEX, RGB, and HSL input.',
      },
      {
        question: 'How do I find a darker shade of my brand color?',
        answer:
          'Convert the color to HSL, keep the hue and saturation the same, and lower the Lightness percentage until you reach the shade you want.',
      },
      {
        question: 'Can I use the Color Converter on my phone?',
        answer:
          'Yes. The Color Converter works in any modern mobile browser, so you can convert colors and check contrast without installing anything.',
      },
    ],
  },
};
