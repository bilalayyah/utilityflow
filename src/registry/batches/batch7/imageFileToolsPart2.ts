import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const IMAGE_FILE_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'color-contrast-checker',
    slug: 'color-contrast-checker',
    name: 'Color Contrast Checker & Palette Extractor',
    shortDescription:
      'Test WCAG 2.1 AA/AAA color contrast ratios, convert HEX/RGB/HSL values, and extract dominant color palettes from uploaded images.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'wcag color contrast checker',
      'accessibility contrast ratio',
      'image color palette extractor',
      'hex rgb hsl color picker',
    ],
    seo: {
      title: 'Color Contrast Checker & Image Palette Extractor – WCAG 2.1 | UtilityFlow',
      description:
        'Check WCAG 2.1 AA and AAA contrast ratios for foreground/background color pairs, convert HEX/RGB/HSL values, and extract dominant color swatches from any uploaded image.',
      primaryKeyword: 'color contrast checker',
      secondaryKeywords: [
        'wcag aa aaa contrast ratio calculator',
        'extract color palette from image',
        'accessible text background color checker',
      ],
      longTailKeywords: [
        'test wcag 2.1 normal and large text contrast ratio online',
        'pull dominant hex swatches from screenshot into contrast checker',
        'check dark mode ui foreground background color accessibility',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Validate UI color pairings against official WCAG 2.1 relative luminance and contrast thresholds (AA 4.5:1, AA Large 3.0:1, AAA 7.0:1), edit synced HEX/RGB/HSL values, and upload screenshots or logos to pull dominant HEX swatches straight into your Foreground or Background slot.',
    instructions: [
      {
        title: 'Pick Foreground and Background colors',
        description:
          'Use the color pickers, HEX inputs, or individual R/G/B inputs—or start from accessible presets and swap colors with one click.',
      },
      {
        title: 'Review the WCAG 2.1 scorecard',
        description:
          'Check exact contrast ratio (e.g., 12.63 : 1) and instant PASS/FAIL status across AA Normal, AA Large/UI, AAA Normal, and AAA Large benchmarks.',
      },
      {
        title: 'Extract swatches from an image (optional)',
        description:
          'Upload any screenshot or brand logo at the bottom to extract up to 8 distinct dominant colors and apply them directly to Foreground or Background.',
      },
    ],
    examples: [
      {
        title: 'Auditing primary CTA button readability',
        input: 'Foreground: #FFFFFF · Background: #4F46E5',
        output: 'Contrast Ratio 6.29 : 1 — Passes WCAG AA Normal, AA Large, and AAA Large',
        explanation: 'Uses official sRGB gamma-linearized relative luminance (0.2126R + 0.7152G + 0.0722B).',
      },
    ],
    benefits: [
      'Exact WCAG 2.1 sRGB relative luminance formula—zero approximations',
      'Live typography and bordered UI control card previews the active pairing',
      'Built-in Canvas image color quantizer pulls brand swatches without extra tools',
      'Displays synchronized HEX, RGB, and HSL strings ready to paste into CSS',
    ],
    useCases: [
      'Auditing design systems, SaaS dashboards, and dark-mode themes for WCAG AA/AAA compliance',
      'Pulling dominant brand colors from client logos directly into accessible UI palettes',
      'Fixing low-contrast badge, placeholder, or button label pairings before launch',
      'Teaching accessible visual hierarchy with live large- vs. normal-text previews',
    ],
    faqs: [
      {
        question: 'What contrast ratio is required for WCAG Level AA vs. Level AAA?',
        answer:
          'WCAG 2.1 Level AA requires at least 4.5:1 for normal body text and 3.0:1 for large text (18 pt+ or bold 14 pt+) and UI components. Level AAA increases these thresholds to 7.0:1 for normal text and 4.5:1 for large text.',
      },
      {
        question: 'How does the image palette extractor work?',
        answer:
          'It draws your uploaded image onto an offscreen HTML5 Canvas, ignores transparent pixels, clusters nearby RGB buckets, and surfaces up to 8 visually distinct dominant swatches by area coverage.',
      },
      {
        question: 'Does it also convert between HEX, RGB, and HSL?',
        answer:
          'Yes. Updating any color picker, HEX input, or R/G/B field recalculates HEX, rgb(), and hsl() representations automatically.',
      },
    ],
    relatedToolSlugs: [
      'color-converter',
      'favicon-generator',
      'image-format-converter',
      'on-page-seo-checker',
    ],
    component: lazy(() => import('../../../tools/image-file/ColorContrastCheckerTool')),
  },
  {
    id: 'qr-code-scanner',
    slug: 'qr-code-scanner',
    name: 'QR Code Scanner & vCard QR Studio',
    shortDescription:
      'Decode QR codes from uploaded images or your device camera privately in the browser, or build downloadable PNG/SVG vCard Contact QR codes.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'qr code scanner online',
      'decode qr code from image',
      'vcard qr code generator',
      'camera qr reader browser',
    ],
    seo: {
      title: 'QR Code Scanner & vCard Contact QR Studio – Browser Reader | UtilityFlow',
      description:
        'Scan and decode QR codes from screenshots, PNG/JPG images, or your webcam locally using jsQR—or generate downloadable vCard Contact QR codes in PNG and SVG formats.',
      primaryKeyword: 'qr code scanner',
      secondaryKeywords: [
        'qr code image reader online',
        'scan qr from screenshot free',
        'generate vcard contact qr code',
      ],
      longTailKeywords: [
        'decode qr code from uploaded png or jpg screenshot offline',
        'scan qr code with laptop webcam without installing app',
        'create downloadable vcard 3.0 contact qr code svg and png',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Read QR code contents from screenshots, photos, or an optional live camera stream directly inside your browser—with automatic payload classification (URL, Wi-Fi, vCard, Text)—plus a companion **vCard Contact QR Builder** that exports crisp PNG and SVG contact cards.',
    instructions: [
      {
        title: 'Upload a QR image or enable camera scanning',
        description:
          'Drop or select any PNG, JPG, WebP, or SVG QR screenshot—or click Start Camera Scanner when you want to read a printed QR code live.',
      },
      {
        title: 'Inspect and copy decoded text',
        description:
          'Review the decoded payload, detected payload category, and safe link preview (only http/https URLs become clickable links), then copy with one click.',
      },
      {
        title: 'Switch to vCard Contact QR Builder (optional)',
        description:
          'Build a scannable VCF 3.0 business card QR code with name, organization, phone, email, and website, and download as PNG or SVG.',
      },
    ],
    examples: [
      {
        title: 'Verifying a printed marketing flyer screenshot before ordering prints',
        input: 'Upload flyer-qr.png (600×600 PNG)',
        output: 'Decoded Payload · Website URL: https://example.com/?utm_source=print',
        explanation: 'Runs multi-scale inversion-aware decoding locally so inverted dark-mode QR codes also decode reliably.',
      },
    ],
    benefits: [
      'Decodes normal and color-inverted QR screenshots cleanly without mobile apps',
      'Optional camera stream stops immediately upon decode or tab exit',
      'Classifies decoded payloads cleanly without automatically redirecting away',
      'Includes full vCard 3.0 PNG & SVG QR generation for digital business cards',
    ],
    useCases: [
      'Double-checking UTM destination URLs inside QR assets before printing posters',
      'Extracting Wi-Fi strings or text tokens from desktop screenshots',
      'Scanning physical QR codes on a laptop using your built-in webcam',
      'Creating scannable vCard contact QR codes for resumes, badges, and presentations',
    ],
    faqs: [
      {
        question: 'What if my device has no camera or denies camera permission?',
        answer:
          'You never need a camera to use this tool—simply take a screenshot or photo and upload it via Upload QR Code Image, which runs identically without camera permissions.',
      },
      {
        question: 'Does scanning a QR code automatically open malicious websites?',
        answer:
          'No. Decoded text is displayed safely inside a read-only textarea first so you can inspect any URL before choosing whether to visit it.',
      },
      {
        question: 'Need a URL, Wi-Fi, or custom color QR generator instead of a vCard?',
        answer:
          'Try our dedicated QR Code Generator tool in Social Media Tools for custom foreground/background colors, error correction levels, and URL/text QR codes.',
      },
    ],
    relatedToolSlugs: [
      'qr-code-generator',
      'image-to-base64',
      'utm-link-builder',
      'url-encoder-decoder',
    ],
    component: lazy(() => import('../../../tools/image-file/QrCodeScannerTool')),
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Cryptographic Password & Passphrase Generator',
    shortDescription:
      'Generate unbiased random passwords and Diceware-style passphrases using crypto.getRandomValues rejection sampling with exact entropy calculations.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'cryptographic password generator',
      'secure random password generator',
      'diceware passphrase generator',
      'crypto getrandomvalues password',
    ],
    seo: {
      title: 'Cryptographic Password & Passphrase Generator – Zero Bias | UtilityFlow',
      description:
        'Generate strong random passwords (8–64 chars) and memorable Diceware passphrases locally using Web Crypto crypto.getRandomValues rejection sampling and Shannon entropy scoring.',
      primaryKeyword: 'password generator',
      secondaryKeywords: [
        'cryptographically secure password generator',
        'memorable passphrase generator online',
        'password entropy calculator',
      ],
      longTailKeywords: [
        'generate random password using crypto getrandomvalues without modulo bias',
        'create 5-word diceware passphrase locally offline',
        'exclude ambiguous characters 0 o 1 l i password generator',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Generate high-entropy passwords and memorable multi-word passphrases 100% locally using your browser’s hardware-backed CSPRNG (`window.crypto.getRandomValues`) with rejection sampling to eliminate modulo bias and Fisher-Yates shuffling to prevent predictable character positions.',
    instructions: [
      {
        title: 'Choose Random Password or Diceware Passphrase',
        description:
          'Use Random Password for maximum character-set density or Diceware Passphrase for easier human typing with strong multi-word entropy.',
      },
      {
        title: 'Customize length, character sets, and batch count',
        description:
          'Adjust length (8–64 chars), toggle Uppercase/Lowercase/Digits/Symbols, optionally exclude lookalike characters (0/O/1/l/I), or select 3–8 Diceware words.',
      },
      {
        title: 'Regenerate and copy securely',
        description:
          'Inspect exact Shannon entropy bits (~72–118+ bits recommended) and copy single passwords or the full batch.',
      },
    ],
    examples: [
      {
        title: '18-character mixed password with full character pool',
        input: 'Length: 18 · Upper + Lower + Digits + Symbols (Pool: 88 chars)',
        output: '~116.3 bits of cryptographic entropy · Guarantees >= 1 character from each enabled class',
        explanation: 'Uses rejection sampling (discarding uint32 samples >= floor(2^32 / pool) * pool) for strict uniformity.',
      },
    ],
    benefits: [
      'Strictly avoids insecure Math.random()—uses hardware-seeded window.crypto.getRandomValues',
      'Eliminates modulo bias via true rejection sampling and unbiased Fisher-Yates shuffle',
      'Guarantees at least one character from every selected character class without fixed slots',
      'Nothing is logged, stored, or transmitted over the network',
    ],
    useCases: [
      'Securing cloud accounts, SSH keys, database credentials, and password-manager master vaults',
      'Generating human-typable Diceware passphrases for disk encryption or Wi-Fi guest keys',
      'Provisioning temporary onboarding credentials in bulk (up to 10 per click)',
      'Comparing bit-entropy impact of 12 vs. 18 vs. 24 characters',
    ],
    faqs: [
      {
        question: 'Why does rejection sampling with crypto.getRandomValues matter?',
        answer:
          'Simply computing randomUint32 % poolSize slightly favors lower-index characters when 2^32 is not evenly divisible by poolSize (modulo bias). Rejection sampling discards out-of-range draws so every character in the pool has exact mathematical equal probability.',
      },
      {
        question: 'Should I use a random password or a passphrase?',
        answer:
          'Both are excellent when long enough: 16+ mixed characters works everywhere in password managers, while a 5- to 6-word passphrase is far easier to type manually on TVs, phones, or disk decryption prompts.',
      },
      {
        question: 'Are generated passwords stored anywhere?',
        answer:
          'Never. Passwords live solely in ephemeral React memory in your tab and disappear on refresh.',
      },
    ],
    relatedToolSlugs: [
      'file-hash-verifier',
      'hash-generator',
      'uuid-generator',
      'jwt-decoder',
    ],
    component: lazy(() => import('../../../tools/image-file/PasswordGeneratorTool')),
  },
  {
    id: 'file-hash-verifier',
    slug: 'file-hash-verifier',
    name: 'File Hash & Checksum Verifier',
    shortDescription:
      'Compute local SHA-256, SHA-512, SHA-384, and SHA-1 binary file checksums via Web Crypto SubtleCrypto and verify downloads against published hashes.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'file hash verifier',
      'sha256 file checksum checker',
      'verify downloaded file hash online',
      'sha512 file hash generator',
    ],
    seo: {
      title: 'File Hash & SHA-256 Checksum Verifier – Verify Files Locally | UtilityFlow',
      description:
        'Compute SHA-256, SHA-512, SHA-384, and SHA-1 digests for any local file using the browser Web Crypto API, and compare against expected release checksums without uploading.',
      primaryKeyword: 'file hash verifier',
      secondaryKeywords: [
        'sha256 checksum calculator file',
        'verify sha256sum file online',
        'browser subtlecrypto file digest',
      ],
      longTailKeywords: [
        'check sha-256 hash of downloaded installer without terminal',
        'compare file binary checksum against expected sha256sum string',
        'calculate sha256 and sha512 locally with zero file upload',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verify integrity and authenticity of software installers, archives, datasets, and documents locally—calculating `SHA-256`, `SHA-512`, `SHA-384`, and `SHA-1` digests via hardware-accelerated Web Crypto `subtle.digest` with instant expected-checksum comparison.',
    instructions: [
      {
        title: 'Select a file from your device',
        description:
          'Choose an archive, installer, PDF, or binary asset. The file is read strictly into local browser memory (recommended under 500 MB) and never uploaded.',
      },
      {
        title: 'Inspect computed cryptographic digests',
        description:
          'Review SHA-256, SHA-512, SHA-384, and legacy SHA-1 hexadecimal hashes along with file metadata and download a standard .sha256 text file if needed.',
      },
      {
        title: 'Verify against a published checksum',
        description:
          'Paste the expected SHA-256/512/384/1 string—or an entire "<hash>  filename" line from a .sha256sum file—to confirm an exact match or catch corruption/tampering.',
      },
    ],
    examples: [
      {
        title: 'Verifying a downloaded release binary against a vendor .sha256sum',
        input: 'File: app-v2.tar.gz · Expected: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum Verified! Matches the computed SHA-256 digest cleanly.',
        explanation: 'Automatically extracts the leading hash token, ignores case, and compares against all 4 computed algorithms.',
      },
    ],
    benefits: [
      'Uses native C++/hardware-accelerated browser Web Crypto SubtleCrypto',
      'Supports pasting full "<hash>  filename" lines from .sha256sum release manifests',
      'Exports standard filename.sha256 verification files in one click',
      'Zero file uploads keep confidential builds and contracts private',
    ],
    useCases: [
      'Verifying Linux ISOs, CLI binaries, or open-source tarballs without opening a terminal',
      'Confirming exact byte-for-byte delivery of legal or financial archives',
      'Generating .sha256 release manifests for small client deliverables',
      'Detecting truncated or corrupted downloads before extraction',
    ],
    faqs: [
      {
        question: 'Is there a maximum file size limit?',
        answer:
          'Because browser File.arrayBuffer() loads the whole file into client RAM at once, files up to ~300–500 MB work smoothly, while multi-gigabyte ISOs may exceed browser memory quotas—for multi-GB files, native CLI tools (shasum -a 256 or certutil) are recommended.',
      },
      {
        question: 'Why is SHA-1 labeled legacy compatibility only?',
        answer:
          'SHA-1 has known practical collision weaknesses and should not be trusted for adversarial security guarantees; prefer SHA-256 or SHA-512 whenever possible.',
      },
      {
        question: 'Looking to hash raw text strings instead of binary files?',
        answer:
          'Check our Hash Generator tool in Developer Tools for instant UTF-8 text hashing.',
      },
    ],
    relatedToolSlugs: [
      'hash-generator',
      'password-generator',
      'base64-encoder-decoder',
      'pdf-metadata-editor',
    ],
    component: lazy(() => import('../../../tools/image-file/FileHashVerifierTool')),
  },
  {
    id: 'favicon-generator',
    slug: 'favicon-generator',
    name: 'Favicon & App Icon Generator (.ico & PNG)',
    shortDescription:
      'Generate crisp multi-size PNG icons (16×16 to 512×512) and a real multi-frame binary favicon.ico from a custom monogram badge or uploaded logo.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'favicon generator',
      'create favicon.ico online',
      'apple touch icon generator',
      'text to favicon monogram',
    ],
    seo: {
      title: 'Favicon & App Icon Generator (.ico & PNG Bundle) | UtilityFlow',
      description:
        'Generate multi-size favicon.ico files (16px, 32px, 48px) plus 180×180 Apple Touch and 192/512 PWA PNG icons from an uploaded logo or custom monogram badge locally.',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'png to multi size ico converter',
        'monogram favicon builder',
        'pwa and apple touch icon generator',
      ],
      longTailKeywords: [
        'create real binary favicon.ico with 16x16 32x32 48x48 frames free',
        'generate website favicon and html link tags from text initials',
        'crop square logo to rounded circle apple touch icon 180x180',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Design a clean monogram icon in seconds—or upload your existing brand logo—to render pixel-sharp `16×16`, `32×32`, `48×48`, `180×180` Apple Touch, and `192×192` / `512×512` PWA PNG assets plus a standards-compliant multi-image binary **`favicon.ico`** and ready-to-paste HTML `<link>` markup.',
    instructions: [
      {
        title: 'Choose Monogram Badge or Upload Logo',
        description:
          'Enter 1–3 brand initials with custom background/text colors, or switch to Upload Logo Image to center-crop an existing PNG/SVG/JPG mark.',
      },
      {
        title: 'Select corner shape',
        description:
          'Choose Rounded Square (iOS/macOS style), Circle, or Sharp Square framing.',
      },
      {
        title: 'Download favicon.ico, PNGs, and HTML snippet',
        description:
          'Download the multi-frame favicon.ico bundle alongside individual PNG sizes and copy the <head> link tags into your project.',
      },
    ],
    examples: [
      {
        title: 'Bootstrapping icons for a new React or Cloudflare Pages app',
        input: 'Monogram "UH" · Background #4F46E5 · Shape: Rounded Square',
        output: 'Binary favicon.ico (16+32+48 px PNG frames) + 6 PNG sizes + HTML <link> snippet',
        explanation: 'Constructs valid ICONDIR and ICONDIRENTRY binary headers directly inside Uint8Array buffers.',
      },
    ],
    benefits: [
      'Builds a genuine multi-frame binary .ico file (16×16, 32×32, and 48×48), not a renamed PNG',
      'Covers desktop tabs, Apple Touch (180×180), and Web Manifest icons (192/512 px)',
      'Instant Monogram mode requires zero design software for side projects and MVPs',
      'Generates clean HTML5 <link rel="icon"> boilerplate ready to paste into index.html',
    ],
    useCases: [
      'Shipping missing favicons and Apple Touch icons before SaaS or microsite launches',
      'Creating high-contrast tab icons for staging vs. production dashboards',
      'Turning square brand SVG/PNG marks into complete PWA icon sets',
      'Generating crisp 16×16 and 32×32 previews to verify small-size legibility',
    ],
    faqs: [
      {
        question: 'Is the downloaded favicon.ico a real ICO binary file?',
        answer:
          'Yes. It writes standard Windows ICO ICONDIR headers and directory entries containing three crisp PNG-encoded frames (16×16, 32×32, and 48×48) supported by all modern browsers and operating systems.',
      },
      {
        question: 'Which icon sizes do modern websites actually need?',
        answer:
          'A favicon.ico plus a 32×32 PNG, 180×180 Apple Touch icon, and 192×192 / 512×512 Web Manifest PNGs cover virtually every desktop, mobile iOS, and Android browser.',
      },
      {
        question: 'Where should I put these files in a React + Vite project?',
        answer:
          'Place favicon.ico and the PNG icons inside your project’s /public/ folder and paste the HTML <link> tags inside index.html <head>.',
      },
    ],
    relatedToolSlugs: [
      'meta-tag-generator',
      'image-resizer',
      'color-contrast-checker',
      'image-to-base64',
    ],
    component: lazy(() => import('../../../tools/image-file/FaviconGeneratorTool')),
  },
];
