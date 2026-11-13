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
    ],
    seo: {
      title: 'JSON Formatter & Validator – Pretty Print & Minify | UtilityFlow',
      description:
        'Format, validate, minify, and sort keys in JSON payloads instantaneously in your browser with line/column syntax error details.',
      primaryKeyword: 'json formatter',
      secondaryKeywords: ['json validator', 'json beautifier', 'json minifier'],
      longTailKeywords: [
        'validate and pretty print json online free',
        'sort json keys alphabetically in browser',
        'minify json payload without server upload',
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
        title: 'Inspect validation and export',
        description:
          'Confirm the Valid JSON status banner showing total keys, nesting depth, and byte count, then copy or download the .json file.',
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
    ],
    seo: {
      title: 'Base64 Encoder & Decoder – UTF-8 & URL-Safe Base64 | UtilityFlow',
      description:
        'Encode UTF-8 text to Base64 or decode Base64 strings back to readable text with URL-safe and unpadded options in your browser.',
      primaryKeyword: 'base64 encoder decoder',
      secondaryKeywords: ['base64 decode online', 'base64 encode utf8', 'url safe base64'],
      longTailKeywords: [
        'encode utf8 emojis to base64 online',
        'decode url safe base64 without padding',
        'client side base64 converter',
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
        title: 'Configure Base64 options',
        description:
          'In Encode mode, optionally enable URL-safe (- and _) output or omit trailing = padding characters.',
      },
      {
        title: 'Copy or swap',
        description:
          'Copy the result or click Swap to reverse the direction using your current output.',
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
    ],
    seo: {
      title: 'URL Encoder & Decoder – Percent Encoding & URL Parser | UtilityFlow',
      description:
        'Encode or decode URLs with encodeURIComponent and encodeURI modes while inspecting protocol, host, pathname, and query parameters.',
      primaryKeyword: 'url encoder decoder',
      secondaryKeywords: ['percent encoding online', 'url decode tool', 'query string parser'],
      longTailKeywords: [
        'difference between encodeuri and encodeuricomponent',
        'decode url query parameters table online',
        'percent encode special characters for urls',
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
        title: 'Inspect parsed parameters',
        description:
          'When a valid full URL is detected, review the Parsed URL Breakdown table below for decoded query key-value pairs.',
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
    ],
    seo: {
      title: 'UUID Generator – Cryptographic UUID v4 & v7 Batch Tool | UtilityFlow',
      description:
        'Generate up to 100 cryptographically random UUID v4 or time-ordered RFC 9562 UUID v7 identifiers with uppercase, hyphen, and brace options.',
      primaryKeyword: 'uuid generator',
      secondaryKeywords: ['guid generator online', 'uuid v4 generator', 'uuid v7 generator'],
      longTailKeywords: [
        'generate bulk uuid v4 and v7 online',
        'rfc 9562 time ordered uuid v7 generator',
        'uuid without hyphens uppercase generator',
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
        title: 'Generate, copy, or download',
        description:
          'Click Generate UUIDs for a fresh batch, Copy all to clipboard, or download a .txt list.',
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
    ],
    seo: {
      title: 'Regex Tester – Live JavaScript RegExp & Capture Groups | UtilityFlow',
      description:
        'Test regular expressions live with g/i/m/s flags, inline match highlighting, numbered capture group inspection, and replacement preview.',
      primaryKeyword: 'regex tester',
      secondaryKeywords: ['regular expression tester', 'js regex debugger', 'regex capture groups'],
      longTailKeywords: [
        'test javascript regex capture groups online',
        'live regular expression match highlighter',
        'regex replace preview with $1 capture group',
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
        title: 'Inspect groups and replacements',
        description:
          'Review exact match indices and $1/$2 capture groups, or test a replacement template below.',
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
