import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const DEV_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    shortDescription:
      'Format, minify, sort keys, and validate JSON syntax with line and column error pinpointing.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'json formatter',
      'json validator',
      'json beautifier',
      'json minifier',
      'pretty print json',
      'json pretty printer',
      'format json online',
      'json syntax checker',
      'json lint',
      'json parser',
    ],
    seo: {
      title: 'JSON Formatter & Validator – Pretty Print JSON | UtilityFlow',
      description:
        'Format, validate, minify and sort keys in JSON payloads instantly in your browser, with precise line and column syntax error details for fast debugging.',
      primaryKeyword: 'json formatter',
      secondaryKeywords: [
        'json validator',
        'json beautifier',
        'json minifier',
        'pretty print json',
        'json syntax checker',
      ],
      longTailKeywords: [
        'validate and pretty print json online free',
        'sort json keys alphabetically in browser',
        'minify json payload without server upload',
        'format nested json with indentation online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Validate malformed JSON payloads with line and column feedback, format nested structures with 2-space, 4-space, or tab indentation, sort keys alphabetically, or minify for production transport.',
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
    relatedToolSlugs: [
      'json-csv-converter',
      'base64-encoder-decoder',
      'jwt-decoder',
      'js-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/JsonFormatterTool')),
  },
  {
    id: 'base64-encoder-decoder',
    slug: 'base64-encoder-decoder',
    name: 'Base64 Encoder / Decoder',
    shortDescription:
      'Encode text to standard or URL-safe Base64 and decode UTF-8 Base64 strings safely in browser memory.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'base64 encoder',
      'base64 decoder',
      'utf8 base64',
      'url safe base64',
      'base64 encode online',
      'base64 decode online',
      'encode text to base64',
      'decode base64 to text',
      'base64 converter',
      'base64 to text',
    ],
    seo: {
      title: 'Base64 Encoder & Decoder – UTF-8 & URL-Safe | UtilityFlow',
      description:
        'Encode UTF-8 text to Base64 or decode Base64 back to readable text, with URL-safe and unpadded options, all processed locally in your browser with no upload.',
      primaryKeyword: 'base64 encoder decoder',
      secondaryKeywords: [
        'base64 decode online',
        'base64 encode utf8',
        'url safe base64',
        'base64 to text',
      ],
      longTailKeywords: [
        'encode utf8 emojis to base64 online',
        'decode url safe base64 without padding',
        'client side base64 converter',
        'decode base64 string with emojis online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convert UTF-8 strings—including accented characters and emojis—into standard or RFC 4648 URL-safe Base64, or decode Base64 strings back to plain text with instant validation.',
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
        output: 'VXRpbGl0eUh1YjogVVRGLTggeKky',
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
    relatedToolSlugs: [
      'url-encoder-decoder',
      'jwt-decoder',
      'json-formatter',
      'hash-generator',
    ],
    component: lazy(() => import('../../../tools/developer/Base64Tool')),
  },
  {
    id: 'url-encoder-decoder',
    slug: 'url-encoder-decoder',
    name: 'URL Encoder / Decoder',
    shortDescription:
      'Percent-encode query values or full URLs and inspect parsed host, path, and query parameters.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'url encoder',
      'url decoder',
      'percent encoding',
      'url parser',
      'encode url online',
      'decode url online',
      'url encode tool',
      'encodeURIComponent',
      'query string encoder',
      'url percent encoder',
    ],
    seo: {
      title: 'URL Encoder & Decoder – Percent Encoding Tool | UtilityFlow',
      description:
        'Encode or decode URLs with encodeURIComponent and encodeURI modes while inspecting protocol, host, pathname, and query parameters locally in your browser.',
      primaryKeyword: 'url encoder decoder',
      secondaryKeywords: [
        'percent encoding online',
        'url decode tool',
        'query string parser',
        'encodeURIComponent online',
      ],
      longTailKeywords: [
        'difference between encodeuri and encodeuricomponent',
        'decode url query parameters table online',
        'percent encode special characters for urls',
        'encode url query value without breaking ampersand',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Safely encode query parameter values or full URLs, decode percent-encoded strings (`%20`, `%3A`, `+`), and inspect a live breakdown of every query parameter in a table.',
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
    relatedToolSlugs: [
      'base64-encoder-decoder',
      'html-entity-encoder',
      'text-to-slug',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/UrlEncoderDecoderTool')),
  },
  {
    id: 'uuid-generator',
    slug: 'uuid-generator',
    name: 'UUID Generator (v4 & v7)',
    shortDescription:
      'Generate cryptographically random UUID v4 and time-ordered RFC 9562 UUID v7 identifiers in batches.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'uuid generator',
      'guid generator',
      'uuid v4',
      'uuid v7 generator',
      'uuid v4 generator online',
      'generate uuid online',
      'random uuid generator',
      'bulk uuid generator',
      'uuid generator free',
      'guid generator online',
    ],
    seo: {
      title: 'UUID Generator – v4 & v7 Batch IDs Free Online | UtilityFlow',
      description:
        'Generate up to 100 cryptographically random UUID v4 or time-ordered RFC 9562 UUID v7 identifiers with uppercase, hyphen, and brace options in your browser.',
      primaryKeyword: 'uuid generator',
      secondaryKeywords: [
        'guid generator online',
        'uuid v4 generator',
        'uuid v7 generator',
        'bulk uuid generator',
      ],
      longTailKeywords: [
        'generate bulk uuid v4 and v7 online',
        'rfc 9562 time ordered uuid v7 generator',
        'uuid without hyphens uppercase generator',
        'generate 100 uuids at once online free',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Create single or bulk batches of cryptographically random UUID v4 and timestamp-ordered RFC 9562 UUID v7 identifiers directly via Web Crypto APIs, complete with formatting toggles.',
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
    relatedToolSlugs: [
      'hash-generator',
      'json-formatter',
      'unix-timestamp-converter',
      'base64-encoder-decoder',
    ],
    component: lazy(() => import('../../../tools/developer/UuidGeneratorTool')),
  },
  {
    id: 'regex-tester',
    slug: 'regex-tester',
    name: 'Regex Tester',
    shortDescription:
      'Test JavaScript regular expressions with live match highlights, capture groups, flags, and replacement output.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'regex tester',
      'regular expression tester',
      'javascript regex',
      'regex match highlighter',
      'regex tester online',
      'test regex online',
      'regex debugger',
      'regex match tester',
      'javascript regex tester',
      'regex validator',
    ],
    seo: {
      title: 'Regex Tester – Live JavaScript RegExp Matches | UtilityFlow',
      description:
        'Test regular expressions live with g/i/m/s flags, inline match highlighting, numbered capture group inspection, and replacement preview in your browser.',
      primaryKeyword: 'regex tester',
      secondaryKeywords: [
        'regular expression tester',
        'js regex debugger',
        'regex capture groups',
        'regex replace tester',
      ],
      longTailKeywords: [
        'test javascript regex capture groups online',
        'live regular expression match highlighter',
        'regex replace preview with $1 capture group',
        'debug javascript regex with live highlighting online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Debug JavaScript regular expressions interactively with live highlighted matches, match index positions, numbered capture group inspection, flag toggles, and replacement previews.',
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
    relatedToolSlugs: [
      'find-and-replace',
      'json-formatter',
      'cron-expression-parser',
      'url-encoder-decoder',
    ],
    component: lazy(() => import('../../../tools/developer/RegexTesterTool')),
  },
];
