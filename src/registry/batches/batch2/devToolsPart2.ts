import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const DEV_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'jwt-decoder',
    slug: 'jwt-decoder',
    name: 'JWT Decoder',
    shortDescription:
      'Decode JSON Web Token headers, payload claims, and expiration timestamps safely inside your browser.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'jwt decoder',
      'decode json web token',
      'jwt inspector',
      'jwt exp timestamp',
    ],
    seo: {
      title: 'JWT Decoder – Inspect JSON Web Token Claims Locally | UtilityFlow',
      description:
        'Decode JWT headers, payload JSON claims, and iat/nbf/exp expiration timestamps securely in browser memory without uploading tokens.',
      primaryKeyword: 'jwt decoder',
      secondaryKeywords: ['decode jwt online', 'jwt payload viewer', 'json web token inspector'],
      longTailKeywords: [
        'decode jwt token locally without server upload',
        'check jwt exp expiration timestamp online',
        'inspect base64url jwt header and claims',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspect JSON Web Tokens (JWT) safely in local browser memory—view formatted Header and Payload JSON objects and check human-readable `iat`, `nbf`, and `exp` expiration status.',
    instructions: [
      {
        title: 'Paste your JWT string',
        description:
          'Paste a standard three-segment token (header.payload.signature) or click Load sample JWT.',
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
    ],
    relatedToolSlugs: [
      'base64-encoder-decoder',
      'json-formatter',
      'unix-timestamp-converter',
      'hash-generator',
    ],
    component: lazy(() => import('../../../tools/developer/JwtDecoderTool')),
  },
  {
    id: 'hash-generator',
    slug: 'hash-generator',
    name: 'Hash Generator (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Compute SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic hashes for text or local files via Web Crypto.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'hash generator',
      'sha256 generator',
      'sha512 hash',
      'file checksum sha256',
    ],
    seo: {
      title: 'Hash Generator – SHA-1, SHA-256, SHA-384 & SHA-512 | UtilityFlow',
      description:
        'Generate SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic digests in hex or Base64 for text strings and local files via Web Crypto.',
      primaryKeyword: 'hash generator',
      secondaryKeywords: ['sha256 hash online', 'file checksum verifier', 'sha512 generator'],
      longTailKeywords: [
        'compute sha256 checksum of local file in browser',
        'generate sha256 hash in hex and base64',
        'web crypto api hash generator online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compute SHA-1, SHA-256, SHA-384, and SHA-512 digests simultaneously using the browser’s native Web Crypto API (`crypto.subtle.digest`) for both UTF-8 text and local file checksums.',
    instructions: [
      {
        title: 'Choose Text Input or Local File Checksum',
        description:
          'Select Text Input to hash strings or Local File Checksum to verify downloaded binaries without uploading them.',
      },
      {
        title: 'Select output encoding',
        description:
          'Switch between Hex (lowercase or uppercase) and Base64 digest formatting.',
      },
      {
        title: 'Copy any digest',
        description:
          'Click Copy next to SHA-1, SHA-256, SHA-384, or SHA-512 to copy the computed hash.',
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
    ],
    relatedToolSlugs: [
      'uuid-generator',
      'base64-encoder-decoder',
      'jwt-decoder',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/HashGeneratorTool')),
  },
  {
    id: 'html-entity-encoder',
    slug: 'html-entity-encoder',
    name: 'HTML Entity Encoder & Decoder',
    shortDescription:
      'Escape reserved HTML characters (<, >, &, quotes) and non-ASCII symbols or decode HTML entities cleanly.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'html entity encoder',
      'html decoder',
      'escape html online',
      'unescape html entities',
    ],
    seo: {
      title: 'HTML Entity Encoder & Decoder – Escape Special Characters | UtilityFlow',
      description:
        'Encode reserved HTML characters and non-ASCII symbols into HTML entities or decode named and numeric entities back into plain text.',
      primaryKeyword: 'html entity encoder',
      secondaryKeywords: ['html escape tool', 'html entity decoder', 'unescape html'],
      longTailKeywords: [
        'escape html tags for code snippets online',
        'decode named and numeric html entities',
        'convert special characters to html entities',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Safely escape `<`, `>`, `&`, quotes, and international Unicode symbols into HTML entities for embedding code snippets in web pages, or decode HTML-escaped strings back to readable text.',
    instructions: [
      {
        title: 'Pick Encode or Decode',
        description:
          'Choose Encode Entities to escape HTML markup or Decode Entities to unescape existing entities.',
      },
      {
        title: 'Toggle non-ASCII encoding',
        description:
          'In Encode mode, decide whether characters above ASCII 127 should also convert to numeric &#...; entities.',
      },
      {
        title: 'Copy or swap',
        description:
          'Copy the converted text or click Swap to invert your workflow.',
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
    ],
    relatedToolSlugs: [
      'url-encoder-decoder',
      'base64-encoder-decoder',
      'markdown-previewer',
      'css-minifier',
    ],
    component: lazy(() => import('../../../tools/developer/HtmlEntityEncoderTool')),
  },
  {
    id: 'json-csv-converter',
    slug: 'json-csv-converter',
    name: 'JSON to CSV / CSV to JSON Converter',
    shortDescription:
      'Convert JSON arrays to RFC-4180 CSV spreadsheets and parse quoted CSV files back into clean JSON.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    keywords: [
      'json to csv',
      'csv to json',
      'json csv converter',
      'convert json array to csv',
    ],
    seo: {
      title: 'JSON to CSV & CSV to JSON Converter – RFC-4180 Tool | UtilityFlow',
      description:
        'Convert JSON arrays into CSV spreadsheets with nested object flattening or parse CSV/TSV files into structured JSON arrays locally.',
      primaryKeyword: 'json to csv converter',
      secondaryKeywords: ['csv to json converter', 'export json as csv', 'tsv to json'],
      longTailKeywords: [
        'convert nested json objects to csv columns online',
        'parse quoted csv with commas to json array',
        'client side json to csv downloader',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transform API JSON arrays into clean CSV spreadsheets—automatically flattening nested object keys—or parse delimited CSV/TSV files with quoted commas back into formatted JSON.',
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
        title: 'Copy or download the result',
        description:
          'Copy the converted output or download it directly as a .csv or .json file.',
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
    ],
    relatedToolSlugs: [
      'json-formatter',
      'sql-formatter',
      'word-frequency-counter',
      'remove-duplicate-lines',
    ],
    component: lazy(() => import('../../../tools/developer/JsonCsvConverterTool')),
  },
  {
    id: 'unix-timestamp-converter',
    slug: 'unix-timestamp-converter',
    name: 'Unix Timestamp Converter',
    shortDescription:
      'Convert Unix epoch seconds or milliseconds to ISO 8601, UTC, and local dates—and vice versa.',
    categoryId: 'developer',
    batch: 2,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: false,
    keywords: [
      'unix timestamp converter',
      'epoch converter',
      'epoch to date',
      'timestamp to iso 8601',
    ],
    seo: {
      title: 'Unix Timestamp Converter – Epoch Seconds & MS to Date | UtilityFlow',
      description:
        'Convert Unix epoch timestamps (seconds or milliseconds) to ISO 8601, UTC, RFC 2822, and local time, or convert dates back to Unix time.',
      primaryKeyword: 'unix timestamp converter',
      secondaryKeywords: ['epoch converter', 'unix time to date', 'date to unix timestamp'],
      longTailKeywords: [
        'convert unix epoch milliseconds to iso 8601 date',
        'live current unix timestamp in seconds',
        'convert local date and time to unix epoch',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Convert Unix epoch integers (seconds or milliseconds) into ISO 8601, UTC, and local timezone strings with relative offsets, or turn any calendar date and time back into an epoch timestamp.',
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
        title: 'Convert Local Date & Time → Unix Timestamp',
        description:
          'Pick a date and time in the lower panel to get exact seconds, milliseconds, and ISO 8601 output.',
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
    ],
    relatedToolSlugs: [
      'jwt-decoder',
      'cron-expression-parser',
      'uuid-generator',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/UnixTimestampConverterTool')),
  },
];
