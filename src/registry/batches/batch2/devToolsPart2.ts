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
      'jwt token decoder',
      'decode jwt payload',
      'jwt expiry checker',
      'jwt claims viewer',
      'check jwt expiration',
    ],
    seo: {
      title: 'JWT Decoder – Decode Tokens & Check Expiry | UtilityFlow',
      description:
        'Decode JWT headers and payload claims in your browser and check iat, nbf and exp timestamps in plain UTC dates. Free, private, no upload ever. Fast and easy.',
      primaryKeyword: 'jwt decoder',
      secondaryKeywords: ['decode jwt online', 'jwt payload viewer', 'json web token inspector', 'jwt expiry checker'],
      longTailKeywords: [
        'decode jwt token locally without server upload',
        'check jwt exp expiration timestamp online',
        'inspect base64url jwt header and claims',
        'read jwt payload claims in browser',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspect JSON Web Tokens (JWT) safely in local browser memory—view formatted Header and Payload JSON objects and check human-readable `iat`, `nbf`, and `exp` expiration status.',
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
      'sha1 hash generator',
      'sha384 hash online',
      'checksum calculator',
      'verify file checksum',
      'secure hash generator online',
    ],
    seo: {
      title: 'Hash Generator – SHA-1, SHA-256 & SHA-512 Tool | UtilityFlow',
      description:
        'Generate SHA-1, SHA-256, SHA-384 and SHA-512 digests in hex or Base64 for text and local files, right in your browser. Free, private, no upload. Fast and easy.',
      primaryKeyword: 'hash generator',
      secondaryKeywords: ['sha256 hash online', 'file checksum verifier', 'sha512 generator', 'checksum calculator'],
      longTailKeywords: [
        'compute sha256 checksum of local file in browser',
        'generate sha256 hash in hex and base64',
        'web crypto api hash generator online',
        'verify downloaded file sha256 checksum',
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
      'encode html characters',
      'html escape tool',
      'convert to html entities',
      'decode html entities online',
      'escape special characters html',
    ],
    seo: {
      title: 'HTML Entity Encoder – Escape & Decode HTML | UtilityFlow',
      description:
        'Encode reserved HTML characters and non-ASCII symbols into entities, or decode named and numeric entities back to plain text. Free, local, instant. No sign-up.',
      primaryKeyword: 'html entity encoder',
      secondaryKeywords: ['html escape tool', 'html entity decoder', 'unescape html', 'encode html characters'],
      longTailKeywords: [
        'escape html tags for code snippets online',
        'decode named and numeric html entities',
        'convert special characters to html entities',
        'escape html quotes and ampersands online',
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
      'export json to csv',
      'json to csv online free',
      'csv to json converter',
      'json to tsv converter',
      'convert csv to json array',
    ],
    seo: {
      title: 'JSON to CSV Converter – JSON & CSV Made Easy | UtilityFlow',
      description:
        'Convert JSON arrays into clean CSV spreadsheets with nested object flattening, or parse CSV and TSV files back into structured JSON. Free and local. No sign-up.',
      primaryKeyword: 'json to csv converter',
      secondaryKeywords: ['csv to json converter', 'export json as csv', 'tsv to json', 'json to csv online free'],
      longTailKeywords: [
        'convert nested json objects to csv columns online',
        'parse quoted csv with commas to json array',
        'client side json to csv downloader',
        'convert json array to csv spreadsheet free',
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
      'unix time converter',
      'convert epoch to date',
      'date to unix timestamp',
      'current unix time',
      'epoch milliseconds converter',
    ],
    seo: {
      title: 'Unix Timestamp Converter – Epoch to Date Tool | UtilityFlow',
      description:
        'Convert Unix epoch timestamps in seconds or milliseconds to ISO 8601, UTC, RFC 2822 and local time, or turn any date back into Unix time. Free. Fast and easy.',
      primaryKeyword: 'unix timestamp converter',
      secondaryKeywords: ['epoch converter', 'unix time to date', 'date to unix timestamp', 'epoch milliseconds converter'],
      longTailKeywords: [
        'convert unix epoch milliseconds to iso 8601 date',
        'live current unix timestamp in seconds',
        'convert local date and time to unix epoch',
        'unix timestamp to utc date online free',
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
    relatedToolSlugs: [
      'jwt-decoder',
      'cron-expression-parser',
      'uuid-generator',
      'json-formatter',
    ],
    component: lazy(() => import('../../../tools/developer/UnixTimestampConverterTool')),
  },
];
