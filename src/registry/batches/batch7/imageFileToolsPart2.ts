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
      'wcag aa contrast ratio calculator',
      'aaa contrast checker online',
      'accessible color combinations',
      'text background contrast test',
      'design accessibility checker',
    ],
    seo: {
      title: 'Color Contrast Checker – WCAG 2.1 AA/AAA | UtilityFlow',
      description:
        'Check WCAG 2.1 AA and AAA contrast ratios for text and background color pairs, convert HEX, RGB and HSL, and extract palettes from images, free in your browser.',
      primaryKeyword: 'color contrast checker',
      secondaryKeywords: [
        'wcag aa aaa contrast ratio calculator',
        'extract color palette from image',
        'accessible text background color checker',
        'wcag contrast ratio for normal and large text',
        'check color accessibility online',
      ],
      longTailKeywords: [
        'test wcag 2.1 normal and large text contrast ratio online',
        'pull dominant hex swatches from screenshot into contrast checker',
        'check dark mode ui foreground background color accessibility',
        'what contrast ratio passes wcag aa for body text',
        'convert hex to rgb and hsl for accessible ui colors',
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
        title: 'Adjust shades until the ratio passes',
        description:
          'Nudge the lightness or individual RGB channels and watch the ratio update live until your pairing reaches the AA or AAA threshold you need.',
      },
      {
        title: 'Review the WCAG 2.1 scorecard',
        description:
          'Check exact contrast ratio (e.g., 12.63 : 1) and instant PASS/FAIL status across AA Normal, AA Large/UI, AAA Normal, and AAA Large benchmarks.',
      },
      {
        title: 'Preview the pairing in real UI text',
        description:
          'Read the live typography and bordered UI control card previews to see how your colors actually look as body text, headings, and buttons.',
      },
      {
        title: 'Extract swatches from an image (optional)',
        description:
          'Upload any screenshot or brand logo at the bottom to extract up to 8 distinct dominant colors and apply them directly to Foreground or Background.',
      },
      {
        title: 'Copy the colors and fix failing pairs',
        description:
          'Copy the synced HEX, RGB, or HSL values into your CSS. If a pair fails, darken the text or lighten the background until the scorecard turns green.',
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
        question: 'Does the Color Contrast Checker also convert between HEX, RGB, and HSL?',
        answer:
          'Yes. Updating any color picker, HEX input, or R/G/B field recalculates HEX, rgb(), and hsl() representations automatically.',
      },
      {
        question: 'What counts as large text under WCAG contrast rules?',
        answer:
          'Large text is 18 pt (24 px) or larger, or 14 pt (18.66 px) bold or larger. Large text only needs a 3.0:1 ratio for AA and 4.5:1 for AAA, while normal text needs 4.5:1 for AA and 7.0:1 for AAA.',
      },
      {
        question: 'Is the Color Contrast Checker free to use?',
        answer:
          'Yes, it is completely free with no sign-up. All checks run locally in your browser, so you can test as many color pairs as you like.',
      },
      {
        question: 'Do my uploaded images leave my device?',
        answer:
          'No. Palette extraction happens entirely in your browser using an offscreen canvas, and your images are never uploaded to any server.',
      },
      {
        question: 'How is the contrast ratio calculated?',
        answer:
          'It uses the official WCAG 2.1 formula: the relative luminance of each color is computed from gamma-linearized sRGB values, and the ratio is (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color.',
      },
      {
        question: 'Can I check contrast for dark mode designs?',
        answer:
          'Yes. Enter your dark background and light text colors the same way, and the scorecard shows whether the pairing passes AA and AAA for both normal and large text.',
      },
      {
        question: 'Why does my color pair fail AA even though it looks readable to me?',
        answer:
          'Perceived readability and measured luminance contrast are different things. Colors that look distinct to you may still be close in luminance, especially mid-tone hues, so trust the ratio and adjust lightness until it passes.',
      },
      {
        question: 'What should I do if my brand color fails the contrast test?',
        answer:
          'Keep the brand color for large headings or decorative elements, and use a darker shade of it for body text. You can also lighten the background or add a semi-opaque overlay behind the text.',
      },
      {
        question: 'Does the checker work for UI components like buttons and icons?',
        answer:
          'Yes. WCAG 2.1 requires a 3.0:1 ratio for non-text UI components such as button borders, input outlines, and meaningful icons, and the AA Large/UI column on the scorecard covers exactly that.',
      },
      {
        question: 'Can I test placeholder text and disabled states with this tool?',
        answer:
          'Yes, enter the placeholder or disabled-state color as the foreground. Note that disabled controls are exempt from WCAG contrast requirements, but placeholder text that conveys information is not.',
      },
      {
        question: 'How many colors can the palette extractor pull from an image?',
        answer:
          'Up to 8 distinct dominant colors. Similar shades are clustered together, so the swatches represent the most visually prominent colors in the image rather than every shade present.',
      },
      {
        question: 'Can I apply an extracted swatch directly as my foreground or background?',
        answer:
          'Yes. Each extracted swatch has a button to send it straight into the Foreground or Background slot, so you can test it against your other color immediately.',
      },
      {
        question: 'What image formats work with the palette extractor?',
        answer:
          'Any image your browser can display, including PNG, JPG, WebP, and SVG screenshots or logos. Transparent pixels are ignored when clustering colors.',
      },
      {
        question: 'Does the Color Contrast Checker test color blindness?',
        answer:
          'No, it measures luminance contrast only. Contrast is one part of accessibility; for color-blind safety, also avoid relying on color alone to convey meaning and check your palette with a color-blindness simulator.',
      },
      {
        question: 'Can I use the HEX, RGB, and HSL values in my CSS?',
        answer:
          'Yes. All three formats stay in sync as you edit, and you can copy any of them directly into your stylesheet, design tokens, or Tailwind config.',
      },
      {
        question: 'What is the difference between AA and AAA in practice?',
        answer:
          'AA is the legal and practical standard most sites target, while AAA is stricter and often hard to meet for brand-colored body text. Aim for AAA where you can, but never ship below AA for text.',
      },
      {
        question: 'Does the tool store my color choices or images?',
        answer:
          'No. Everything runs locally in your browser tab, nothing is uploaded, and your colors and images disappear when you close or refresh the page.',
      },
      {
        question: 'Can I check more than one color pair at a time?',
        answer:
          'The checker tests one foreground/background pair at a time, but you can swap colors in a single click and re-test as many pairs as you need in seconds.',
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
      'scan qr code from screenshot',
      'qr code reader without app',
      'decode qr code png jpg',
      'wifi qr code scanner',
      'qr code payload reader',
    ],
    seo: {
      title: 'QR Code Scanner – Decode QR Images & vCards | UtilityFlow',
      description:
        'Scan and decode QR codes from screenshots, photos or your webcam right in your browser, or build a downloadable vCard contact QR code in PNG and SVG formats.',
      primaryKeyword: 'qr code scanner',
      secondaryKeywords: [
        'qr code image reader online',
        'scan qr from screenshot free',
        'generate vcard contact qr code',
        'webcam qr code reader browser',
        'decode qr code without installing app',
      ],
      longTailKeywords: [
        'decode qr code from uploaded png or jpg screenshot offline',
        'scan qr code with laptop webcam without installing app',
        'create downloadable vcard 3.0 contact qr code svg and png',
        'read inverted dark mode qr code from screenshot',
        'check qr code destination url before printing flyer',
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
        title: 'Let the scanner decode the code',
        description:
          'The tool runs multi-scale, inversion-aware decoding locally in your browser, so even dark-mode or inverted QR codes are read without uploading anything.',
      },
      {
        title: 'Inspect and copy decoded text',
        description:
          'Review the decoded payload, detected payload category, and safe link preview (only http/https URLs become clickable links), then copy with one click.',
      },
      {
        title: 'Check the payload type before acting',
        description:
          'See whether the QR holds a URL, Wi-Fi credentials, vCard contact, or plain text, and verify the destination looks right before visiting or connecting.',
      },
      {
        title: 'Switch to vCard Contact QR Builder (optional)',
        description:
          'Build a scannable VCF 3.0 business card QR code with name, organization, phone, email, and website, and download as PNG or SVG.',
      },
      {
        title: 'Download, print, or troubleshoot a failed scan',
        description:
          'Download your vCard QR or re-upload a sharper, well-lit screenshot if decoding fails — cropped, blurry, or tiny QR codes are the most common cause.',
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
      {
        question: 'Is the QR Code Scanner free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and both scanning and vCard QR generation run locally in your browser.',
      },
      {
        question: 'Are my uploaded QR images sent to a server?',
        answer:
          'No. Decoding happens entirely in your browser using jsQR, so your screenshots and photos never leave your device.',
      },
      {
        question: 'What image formats can the QR Code Scanner read?',
        answer:
          'PNG, JPG, WebP, and SVG images all work. Screenshots taken on a phone or computer are the most common way to supply a QR code.',
      },
      {
        question: 'Why did my QR code fail to scan?',
        answer:
          'The usual causes are a blurry or low-resolution image, a QR code cropped too tightly, glare on a printed code, or a code that is simply too small in the frame. Re-upload a sharper, larger, well-lit capture.',
      },
      {
        question: 'Can the scanner read inverted or dark-mode QR codes?',
        answer:
          'Yes. The decoder is inversion-aware, so QR codes with light modules on a dark background decode just as reliably as standard black-on-white codes.',
      },
      {
        question: 'What kinds of QR payloads can it detect?',
        answer:
          'It classifies decoded content automatically, including website URLs, Wi-Fi network credentials, vCard contacts, and plain text, so you know what a code does before you act on it.',
      },
      {
        question: 'Is it safe to scan a QR code I found in public?',
        answer:
          'Scanning is safe here because nothing opens automatically — you see the decoded text first. Always read the URL carefully and avoid entering passwords or payment details on pages a random QR code leads you to.',
      },
      {
        question: 'Can I scan a QR code with my laptop webcam?',
        answer:
          'Yes. Click Start Camera Scanner, allow camera access when your browser asks, and hold the printed code in front of the camera. The stream stops automatically once the code decodes or when you leave the tab.',
      },
      {
        question: 'Does the camera keep recording after a scan?',
        answer:
          'No. The camera stream stops immediately upon a successful decode, and it also stops if you switch tabs or close the scanner.',
      },
      {
        question: 'What is a vCard QR code?',
        answer:
          'A vCard QR code stores contact details — name, organization, phone, email, and website — in the standard VCF 3.0 format, so scanning it with a phone offers to save the contact directly.',
      },
      {
        question: 'Can I download my vCard QR code as PNG and SVG?',
        answer:
          'Yes. The vCard builder exports both formats: PNG for documents and presentations, and SVG for crisp printing at any size.',
      },
      {
        question: 'Will the vCard QR code work on both iPhone and Android?',
        answer:
          'Yes. Both platforms recognize standard VCF 3.0 vCard QR codes and offer to add the contact when scanned with the built-in camera.',
      },
      {
        question: 'Can I scan a QR code from a video or screen recording?',
        answer:
          'Not directly, but you can pause the video, take a screenshot of the frame showing the QR code, and upload that screenshot to the scanner.',
      },
      {
        question: 'Does the QR Code Scanner work offline?',
        answer:
          'Once the page has loaded, decoding runs fully in your browser with no network requests, so you can scan uploaded images even without an internet connection.',
      },
      {
        question: 'Can I scan multiple QR codes in one image?',
        answer:
          'The scanner decodes one QR code at a time. If an image contains several codes, crop the image so each code is uploaded separately.',
      },
      {
        question: 'What should I check before printing a QR code on a flyer?',
        answer:
          'Upload a screenshot of the finished design and scan it here to confirm the destination URL, UTM parameters, and payload are exactly right before you order prints.',
      },
      {
        question: 'Does the tool store my scanned QR codes or camera images?',
        answer:
          'No. Nothing is uploaded, logged, or stored. Decoded results exist only in your current browser tab and disappear when you close it.',
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
      'strong password maker online',
      'random passphrase generator',
      'password entropy checker',
      'generate secure password free',
      'unbiased random password tool',
    ],
    seo: {
      title: 'Password Generator – Secure Random Passwords | UtilityFlow',
      description:
        'Generate strong random passwords and memorable Diceware passphrases locally in your browser with Web Crypto, exact entropy scoring and no storage or uploads.',
      primaryKeyword: 'password generator',
      secondaryKeywords: [
        'cryptographically secure password generator',
        'memorable passphrase generator online',
        'password entropy calculator',
        'random password maker with symbols',
        'diceware wordlist passphrase tool',
      ],
      longTailKeywords: [
        'generate random password using crypto getrandomvalues without modulo bias',
        'create 5-word diceware passphrase locally offline',
        'exclude ambiguous characters 0 o 1 l i password generator',
        'how many entropy bits does an 18 character password have',
        'generate batch of 10 random passwords at once',
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
        title: 'Generate your password or passphrase',
        description:
          'Click generate to create fresh output using your browser’s hardware-backed CSPRNG with rejection sampling, so every character has exactly equal probability.',
      },
      {
        title: 'Check the entropy score',
        description:
          'Inspect exact Shannon entropy bits (~72–118+ bits recommended) to see how much guessing work the result represents before you use it.',
      },
      {
        title: 'Regenerate and copy securely',
        description:
          'Not happy with a result? Regenerate for a fresh one, then copy a single password or the full batch with one click.',
      },
      {
        title: 'Save it in a password manager and refresh to clear',
        description:
          'Paste the result into your password manager right away. Refreshing the page wipes the generated passwords from memory, so never rely on the tab to remember them.',
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
      {
        question: 'Is the Password Generator free to use?',
        answer:
          'Yes, it is completely free with no sign-up. You can generate as many passwords and passphrases as you need, right in your browser.',
      },
      {
        question: 'How are passwords generated here?',
        answer:
          'They are created locally in your browser using window.crypto.getRandomValues, your browser’s hardware-backed cryptographically secure random number generator, with rejection sampling to remove modulo bias.',
      },
      {
        question: 'Are my generated passwords sent to a server?',
        answer:
          'No. Generation happens entirely on your device, and nothing is stored, logged, or transmitted over the network.',
      },
      {
        question: 'How long should my password be?',
        answer:
          'For important accounts, use at least 16 characters with mixed character classes, which gives roughly 100+ bits of entropy. Shorter passwords are fine only for low-value accounts, and length matters more than complexity.',
      },
      {
        question: 'What is password entropy, and how many bits do I need?',
        answer:
          'Entropy measures how much guessing work a password represents. Around 70–80 bits is strong for most accounts, while 100+ bits is recommended for master passwords, encryption keys, and high-value accounts.',
      },
      {
        question: 'What is a Diceware passphrase?',
        answer:
          'A Diceware passphrase is several random words picked from a fixed wordlist, such as "correct horse battery staple". Five or six random words give strong entropy while remaining much easier to type and remember than random characters.',
      },
      {
        question: 'Should I exclude ambiguous characters like 0, O, 1, l, and I?',
        answer:
          'Yes, when you will type the password by hand or read it aloud. Excluding lookalikes prevents mistyped logins, and with a long enough password the small entropy loss is negligible.',
      },
      {
        question: 'Can I generate several passwords at once?',
        answer:
          'Yes. You can generate a batch of up to 10 passwords in one click, which is handy when provisioning accounts or onboarding new team members.',
      },
      {
        question: 'Does the generator guarantee at least one character from each selected class?',
        answer:
          'Yes. Every generated password includes at least one character from each character class you enabled, without placing those characters in fixed, predictable positions.',
      },
      {
        question: 'Can I use these passwords for my password manager master password?',
        answer:
          'A long passphrase works well as a master password because you must type it from memory. Generate a 6-word Diceware passphrase, memorize it, and store your other passwords in the manager.',
      },
      {
        question: 'Why not use Math.random() for passwords?',
        answer:
          'Math.random() is not cryptographically secure: its output can be predicted if an attacker learns its internal state. This tool uses only window.crypto.getRandomValues, which is designed for security-sensitive randomness.',
      },
      {
        question: 'Will a generated password work on every website?',
        answer:
          'Almost always. If a site rejects symbols or limits length, reduce the length or disable the symbol class and regenerate until the site accepts it.',
      },
      {
        question: 'Can I reuse a generated password on multiple sites?',
        answer:
          'You should not. Reusing a password means one breach exposes every account that shares it, so generate a unique password for each site and store them in a password manager.',
      },
      {
        question: 'What happens to my passwords if I refresh the page?',
        answer:
          'They are gone. Generated passwords exist only in the tab’s temporary memory, so copy or save them in a password manager before refreshing or closing the page.',
      },
      {
        question: 'Does the Password Generator work offline?',
        answer:
          'Yes. Once the page has loaded, generation runs fully in your browser with no network requests, so it works offline.',
      },
      {
        question: 'How do I pick between a password and a passphrase for Wi-Fi?',
        answer:
          'Use a passphrase for Wi-Fi keys you type on many devices, since words are easier to enter correctly, and a random character password when a password manager will fill it in for you.',
      },
      {
        question: 'Is a generated password guaranteed to be unhackable?',
        answer:
          'No password can be guaranteed unhackable — a site can still be breached or tricked by phishing. A long, unique, randomly generated password stored in a password manager is, however, one of the strongest practical defenses you can use.',
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
      'sha256 checksum calculator',
      'check file integrity online',
      'compare file checksum',
      'sha384 sha1 hash checker',
      'verify iso checksum browser',
    ],
    seo: {
      title: 'File Hash Verifier – SHA-256 Checksum Checker | UtilityFlow',
      description:
        'Compute SHA-256, SHA-512, SHA-384 and SHA-1 digests for any local file in your browser and compare them against published checksums — no uploads, free to use.',
      primaryKeyword: 'file hash verifier',
      secondaryKeywords: [
        'sha256 checksum calculator file',
        'verify sha256sum file online',
        'browser subtlecrypto file digest',
        'sha512 checksum verifier',
        'check downloaded file integrity',
      ],
      longTailKeywords: [
        'check sha-256 hash of downloaded installer without terminal',
        'compare file binary checksum against expected sha256sum string',
        'calculate sha256 and sha512 locally with zero file upload',
        'verify linux iso sha256 checksum in browser',
        'export sha256 file for release download verification',
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
        title: 'Wait for the digests to compute',
        description:
          'The browser calculates SHA-256, SHA-512, SHA-384, and SHA-1 in parallel using hardware-accelerated Web Crypto. Larger files take a few seconds.',
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
      {
        title: 'Copy or export the hash',
        description:
          'Copy any digest with one click, or download the standard .sha256 text file to ship alongside a release or keep as a verification record.',
      },
      {
        title: 'Act on a mismatch or a large file',
        description:
          'If the hashes do not match, delete the file and re-download it from the official source. For files over ~500 MB, use shasum -a 256 or certutil instead, since the browser loads the whole file into memory.',
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
      {
        question: 'Is the File Hash Verifier free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and you can verify as many files as you like.',
      },
      {
        question: 'Are my files uploaded anywhere when I verify them?',
        answer:
          'No. Hashing happens entirely in your browser using the Web Crypto API, so your files never leave your device — which is exactly why it is safe for confidential builds and contracts.',
      },
      {
        question: 'What is a file hash, and why should I check it?',
        answer:
          'A hash is a fixed-length fingerprint computed from a file’s exact bytes. If even one byte changes, the hash changes completely, so comparing hashes proves a download arrived intact and unmodified.',
      },
      {
        question: 'Which hash algorithm should I use: SHA-256, SHA-512, or SHA-1?',
        answer:
          'Use SHA-256 for general verification — it is the standard publishers provide. SHA-512 is equally strong and faster on 64-bit systems, while SHA-1 is legacy only and should not be trusted for security.',
      },
      {
        question: 'Where do I find the official checksum to compare against?',
        answer:
          'Publishers usually list it on the download page or in a .sha256 / .sha256sum file next to the download. Always copy it from the vendor’s own site, never from a mirror or forum post.',
      },
      {
        question: 'What should I do if the hashes do not match?',
        answer:
          'Do not run or extract the file. Delete it and re-download from the official source; a mismatch means the download was corrupted, truncated, or possibly tampered with.',
      },
      {
        question: 'Can I paste a whole .sha256sum line instead of just the hash?',
        answer:
          'Yes. The verifier accepts a full "<hash>  filename" line from a release manifest — it extracts the leading hash token automatically, ignores case, and compares it against all four computed algorithms.',
      },
      {
        question: 'Does the hash depend on the file name?',
        answer:
          'No. The digest is computed from the file’s contents only, so renaming a file never changes its hash. Two files with the same bytes always produce the same hash.',
      },
      {
        question: 'Can I verify a Linux ISO or a large installer with this tool?',
        answer:
          'Yes, up to roughly 300–500 MB. For multi-gigabyte ISOs, use a native tool such as shasum -a 256 on macOS/Linux or certutil -hashfile on Windows, since browsers load the whole file into memory.',
      },
      {
        question: 'What is the difference between SHA-256 and SHA-512?',
        answer:
          'Both are secure members of the SHA-2 family; SHA-256 produces a 64-character hex digest and SHA-512 a 128-character one. SHA-512 is slightly stronger and faster on 64-bit hardware, but SHA-256 is the more widely published checksum.',
      },
      {
        question: 'Can this tool detect a virus or malware in a file?',
        answer:
          'No. A matching hash only proves the file is identical to the one the publisher released. If the publisher’s own file were malicious, the hash would still match, so only verify downloads from sources you trust.',
      },
      {
        question: 'How do I download a .sha256 file for my own release?',
        answer:
          'Hash your release file here, then download the standard filename.sha256 text file the tool generates and publish it alongside your download so users can verify it.',
      },
      {
        question: 'Why does hashing take a few seconds for large files?',
        answer:
          'The browser must read and process every byte of the file. Larger files simply take longer, and the time grows with file size rather than with the algorithm you choose.',
      },
      {
        question: 'Does the File Hash Verifier work offline?',
        answer:
          'Yes. Once the page has loaded, all hashing runs locally in your browser with no network requests, so you can verify files without an internet connection.',
      },
      {
        question: 'Can I verify multiple files at once?',
        answer:
          'The tool verifies one file at a time. Hash each file separately and compare it against its own published checksum.',
      },
      {
        question: 'Is a matching hash proof the file is authentic?',
        answer:
          'It proves the file is byte-for-byte identical to the one the publisher hashed. It does not prove the publisher is who they claim to be, so get the expected hash from the publisher’s official channel.',
      },
      {
        question: 'Does the tool store my files or their hashes?',
        answer:
          'No. Nothing is uploaded or stored, and the computed hashes exist only in your current browser tab until you close or refresh it.',
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
      'favicon ico maker free',
      'pwa icon generator 192 512',
      'website favicon maker',
      'png to favicon converter',
      'app icon generator online',
    ],
    seo: {
      title: 'Favicon Generator – .ico & PNG App Icons | UtilityFlow',
      description:
        'Generate a real multi-frame favicon.ico plus 16–512px PNG, Apple Touch and PWA icons from your logo or a custom monogram badge — free, in your browser.',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'png to multi size ico converter',
        'monogram favicon builder',
        'pwa and apple touch icon generator',
        'favicon ico maker online free',
        'create website favicon from logo',
      ],
      longTailKeywords: [
        'create real binary favicon.ico with 16x16 32x32 48x48 frames free',
        'generate website favicon and html link tags from text initials',
        'crop square logo to rounded circle apple touch icon 180x180',
        'generate 192x192 and 512x512 pwa icons for web manifest',
        'where to put favicon.ico in react vite public folder',
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
        title: 'Style your icon',
        description:
          'Pick your monogram letters and colors, or adjust the uploaded logo crop so the mark sits centered with even padding on every side.',
      },
      {
        title: 'Select corner shape',
        description:
          'Choose Rounded Square (iOS/macOS style), Circle, or Sharp Square framing.',
      },
      {
        title: 'Preview every size',
        description:
          'Check the 16×16 and 32×32 previews carefully — a mark that looks great large can turn into a blur at tab size, so simplify letters or details if needed.',
      },
      {
        title: 'Download favicon.ico, PNGs, and HTML snippet',
        description:
          'Download the multi-frame favicon.ico bundle alongside individual PNG sizes and copy the <head> link tags into your project.',
      },
      {
        title: 'Install the icons and clear the cache',
        description:
          'Place the files in your /public/ folder, paste the link tags into index.html, then hard-refresh or clear your browser cache — browsers cache favicons aggressively, so a stale icon usually means a cached one.',
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
      {
        question: 'Is the Favicon Generator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and all icons are generated locally in your browser.',
      },
      {
        question: 'Are my uploaded logos sent to a server?',
        answer:
          'No. Your logo is processed entirely in your browser and never uploaded, so your brand assets stay private.',
      },
      {
        question: 'What is the difference between a favicon.ico and a PNG favicon?',
        answer:
          'A favicon.ico is a container holding several icon sizes in one binary file, which browsers have supported for decades. A PNG favicon is a single-size image; modern browsers accept both, but .ico remains the safest default.',
      },
      {
        question: 'What is an Apple Touch icon?',
        answer:
          'It is the 180×180 PNG icon iOS uses when someone adds your site to their home screen. Without one, iOS takes a screenshot of your page instead, which usually looks poor.',
      },
      {
        question: 'What are 192×192 and 512×512 PWA icons for?',
        answer:
          'They are the icons listed in your web app manifest for installable Progressive Web Apps. Android and Chrome use them for the home-screen icon, splash screen, and app launcher.',
      },
      {
        question: 'Can I make a favicon from text without a logo?',
        answer:
          'Yes. Monogram mode turns 1–3 letters, such as your brand initials, into a clean badge with your choice of background color, text color, and corner shape — no design software needed.',
      },
      {
        question: 'What logo file should I upload for the best result?',
        answer:
          'Upload a square PNG or SVG with a transparent background at 512×512 or larger. Square source images crop cleanly; wide or tall logos get center-cropped, which can cut off edges.',
      },
      {
        question: 'Why does my new favicon not show up after I deploy?',
        answer:
          'Browsers cache favicons very aggressively. Hard-refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac), clear the site cache, or test in a private window to see the new icon.',
      },
      {
        question: 'Should the favicon match my logo exactly?',
        answer:
          'At large sizes yes, but at 16×16 fine details disappear. Simplify the mark for the smallest sizes — bold initials or a single bold shape read far better than a detailed logo.',
      },
      {
        question: 'What corner shape should I choose?',
        answer:
          'Rounded Square matches iOS and macOS app-icon styling, Circle suits avatars and social-style marks, and Sharp Square is best for geometric or technical brand marks.',
      },
      {
        question: 'Do I need to add HTML link tags for the icons?',
        answer:
          'Yes for reliable results. Browsers look for /favicon.ico by default, but Apple Touch and PWA icons only load when you declare them with <link> tags in your page <head>, which this tool generates for you.',
      },
      {
        question: 'Can I use the generated icons for a mobile app too?',
        answer:
          'The 192×192 and 512×512 PNGs work for PWA installs, but native iOS and Android apps need their own icon sets with specific sizes and formats, which this web-focused tool does not generate.',
      },
      {
        question: 'Does the Favicon Generator work offline?',
        answer:
          'Yes. Once the page has loaded, icon generation runs fully in your browser with no network requests.',
      },
      {
        question: 'What background color works best for a monogram favicon?',
        answer:
          'A solid, high-contrast brand color with white or near-white letters works best, since it stays legible at 16×16. Avoid light text on light backgrounds and busy gradients.',
      },
      {
        question: 'Can I regenerate icons after changing my brand colors?',
        answer:
          'Yes. Just update the colors or upload the new logo and download a fresh set — the tool keeps nothing from your previous session, so each run starts clean.',
      },
      {
        question: 'Will the favicon work in dark mode browser tabs?',
        answer:
          'A favicon with a solid background color shows the same in light and dark tabs. If your mark is dark-on-transparent, add a light background or outline so it stays visible on dark browser chrome.',
      },
      {
        question: 'Does the tool store my logos or generated icons?',
        answer:
          'No. Everything runs locally in your browser tab, nothing is uploaded or stored, and your files disappear when you close or refresh the page.',
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
