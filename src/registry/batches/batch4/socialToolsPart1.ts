import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const SOCIAL_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    shortDescription:
      'Generate custom scannable QR codes for URLs, plain text, Wi-Fi logins, emails, or phone numbers with PNG and SVG export.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'qr code generator',
      'free qr code maker',
      'wifi qr code',
      'svg qr code generator',
      'create qr code online',
      'qr code for wifi password',
      'qr code png download',
      'free qr code generator no sign up',
      'qr code maker for business cards',
      'custom qr code with colors',
    ],
    seo: {
      title: 'QR Code Generator – Free PNG & SVG QR Codes | UtilityFlow',
      description:
        'Create free static QR codes for URLs, Wi-Fi, text, emails and phone numbers in your browser — no sign-up, no expiry — and download crisp PNG or SVG files.',
      primaryKeyword: 'qr code generator',
      secondaryKeywords: [
        'wifi qr code generator',
        'svg qr code maker',
        'custom color qr code',
        'qr code maker for print',
        'wifi password qr code',
      ],
      longTailKeywords: [
        'generate static qr code without expiration or tracking',
        'create scannable wifi qr code in browser',
        'download vector svg qr code free',
        'make qr code for business card free online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Encode website URLs, Wi-Fi credentials, plain text, email links, or phone numbers into crisp ISO-standard QR codes directly in your browser—with zero expiration limits, zero redirect tracking, and instant PNG or vector SVG downloads.',
    instructions: [
      {
        title: 'Choose payload format',
        description:
          'Select Website URL, Plain Text, Wi-Fi Network, Email Link, or Phone Number at the top.',
      },
      {
        title: 'Enter your content',
        description:
          'Type or paste your URL, text, or contact details. For Wi-Fi, add the network name (SSID), security type, and password.',
      },
      {
        title: 'Customize appearance and error correction',
        description:
          'Adjust pixel size, quiet-zone margin, foreground/background hex colors, and error correction level (L–H).',
      },
      {
        title: 'Preview and test the code',
        description:
          'Check the live preview and scan it with your phone camera before downloading to confirm it opens the right destination.',
      },
      {
        title: 'Download PNG or vector SVG',
        description:
          'Export a crisp PNG for social graphics or copy/download the scalable SVG file for print materials.',
      },
      {
        title: 'Fix a code that will not scan',
        description:
          'Raise the foreground contrast, enlarge the code, increase the error correction level, or widen the quiet-zone margin, then test again.',
      },
    ],
    examples: [
      {
        title: 'Guest Wi-Fi QR sticker payload',
        input: 'SSID: GuestWiFi · Security: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation: 'iOS and Android cameras automatically recognize standard WIFI QR payloads to join without typing.',
      },
    ],
    benefits: [
      'Static QR codes never expire and never route users through third-party tracking redirects',
      'Generates lossless vector SVG alongside high-resolution PNG images',
      'Supports WPA/WEP/open Wi-Fi QR formatting cleanly with special-character escaping',
      'Keeps private URLs and Wi-Fi passwords strictly in browser memory',
    ],
    useCases: [
      'Linking print flyers, posters, or business cards to UTM-tagged landing pages',
      'Creating scannable guest Wi-Fi QR signs for offices, studios, or events',
      'Adding instant contact or portfolio links to slide decks and packaging',
      'Exporting crisp SVG QR codes for high-DPI print design tools',
    ],
    faqs: [
      {
        question: 'Do QR codes created here expire after a trial period?',
        answer:
          'No. These are static QR codes whose data is encoded directly inside the black-and-white pattern, so they work permanently with no server dependency or scan limits.',
      },
      {
        question: 'Which error correction level should I choose?',
        answer:
          'Level M (15%) balances compact density with reliability for clean digital screens or flyers. Choose Q (25%) or H (30%) for outdoor stickers or rougher print surfaces.',
      },
      {
        question: 'Why should foreground contrast stay high?',
        answer:
          'Phone cameras rely on strong luminance contrast between dark modules and the light background; keep dark foreground colors on light backgrounds with at least a 2-module quiet margin.',
      },
      {
        question: 'Is the QR Code Generator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, no watermark, and no limit on how many QR codes you create or download.',
      },
      {
        question: 'Do I need an account to make a QR code?',
        answer:
          'No account is needed. Everything runs locally in your browser, so you can generate and download a QR code immediately.',
      },
      {
        question: 'What types of content can I encode in a QR code?',
        answer:
          'You can encode website URLs, plain text, Wi-Fi network credentials, email links, and phone numbers that open the dialer when scanned.',
      },
      {
        question: 'Can I make a QR code for my Wi-Fi password?',
        answer:
          'Yes. Choose the Wi-Fi Network format, enter the network name (SSID), security type such as WPA, and the password, and guests can join by scanning instead of typing.',
      },
      {
        question: 'What is the difference between PNG and SVG downloads?',
        answer:
          'PNG is a fixed-resolution raster image best for screens and social posts, while SVG is a vector file that scales to any size without losing sharpness, making it ideal for print.',
      },
      {
        question: 'Will my QR code still work if I print it small?',
        answer:
          'It depends on how much data it holds and the print quality. Short URLs scan reliably at small sizes, while dense codes need to be printed larger with a clear quiet zone.',
      },
      {
        question: 'What does the error correction level do?',
        answer:
          'Error correction adds redundancy so the code still scans if part of it is scratched, dirty, or covered. Higher levels survive more damage but make the pattern denser.',
      },
      {
        question: 'Can I change the colors of my QR code?',
        answer:
          'Yes, you can set custom foreground and background hex colors. Keep dark modules on a light background so phone cameras can still read the pattern reliably.',
      },
      {
        question: 'What is the quiet zone and why does it matter?',
        answer:
          'The quiet zone is the blank margin around the code that helps scanners find its edges. Keep at least a 4-module-wide margin and never place text or logos inside it.',
      },
      {
        question: 'Do QR codes made here track scans?',
        answer:
          'No. These are static codes with no redirect server behind them, so no one can see when or where they are scanned.',
      },
      {
        question: 'Can I use these QR codes on business cards and flyers?',
        answer:
          'Yes. Download the SVG version for crisp print on cards, posters, and packaging, and use PNG for websites, slides, and social graphics.',
      },
      {
        question: 'Why will my phone not scan the QR code?',
        answer:
          'Low contrast, a code printed too small, glare, or damage are the usual causes. Try a darker foreground, a larger size, a higher error correction level, and a wider quiet zone.',
      },
      {
        question: 'Does the QR code work offline after I download it?',
        answer:
          'Yes. The data is encoded directly in the pattern itself, so a downloaded code scans and works without any connection to this website.',
      },
      {
        question: 'Can I encode a phone number so it opens the dialer?',
        answer:
          'Yes. Choose the Phone Number format and the code creates a tel: link, so scanning it on a phone opens the dialer with the number ready to call.',
      },
      {
        question: 'Can I encode an email address so it opens a new message?',
        answer:
          'Yes. The Email Link format creates a mailto: link, so scanning it opens the mail app with your address pre-filled as the recipient.',
      },
      {
        question: 'Is my Wi-Fi password safe when I generate a QR code here?',
        answer:
          'Yes. The code is generated entirely in your browser and nothing you type is uploaded or stored on any server.',
      },
      {
        question: 'What size should I download the PNG at for printing?',
        answer:
          'Choose the largest pixel size available for print work, and prefer SVG for anything larger than a flyer, since vector output stays sharp at any size.',
      },
    ],
    relatedToolSlugs: [
      'utm-link-builder',
      'url-encoder-decoder',
      'social-handle-formatter',
      'color-converter',
    ],
    component: lazy(() => import('../../../tools/social/QrCodeGeneratorTool')),
  },
  {
    id: 'utm-link-builder',
    slug: 'utm-link-builder',
    name: 'UTM Link Builder',
    shortDescription:
      'Build clean campaign tracking URLs with utm_source, utm_medium, utm_campaign, utm_term, and utm_content parameters.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'utm link builder',
      'campaign url builder',
      'utm generator',
      'google analytics utm',
      'utm builder free',
      'utm parameter generator',
      'campaign tracking link builder',
      'instagram utm link generator',
      'utm link generator for email',
      'google analytics campaign url',
    ],
    seo: {
      title: 'UTM Link Builder – Free Campaign URL Tracker | UtilityFlow',
      description:
        'Build consistent UTM campaign URLs for social, email and ads with presets, lowercase normalization and a parameter breakdown — free, right in your browser.',
      primaryKeyword: 'utm link builder',
      secondaryKeywords: [
        'campaign url builder',
        'utm tag generator',
        'social media tracking url',
        'utm url builder for instagram bio',
        'campaign tracking parameters tool',
      ],
      longTailKeywords: [
        'build consistent lowercase utm tracking links online',
        'utm generator preserving existing query strings and hashes',
        'instagram bio and newsletter utm link templates',
        'how to build utm links for social media campaigns',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Generate clean, standardized campaign tracking URLs for social bios, creator sponsorships, paid ads, and newsletters while preserving existing query strings and URL fragments (`#section`).',
    instructions: [
      {
        title: 'Enter your destination URL',
        description:
          'Paste the target landing page URL or select a channel quick preset to pre-populate standard tags.',
      },
      {
        title: 'Pick a channel preset (optional)',
        description:
          'Choose Instagram, email, YouTube, or another preset to fill in standard source and medium values instead of typing them from scratch.',
      },
      {
        title: 'Fill UTM parameters',
        description:
          'Specify utm_source, utm_medium, utm_campaign, and optional utm_content or utm_term values.',
      },
      {
        title: 'Add optional utm_term and utm_content',
        description:
          'Use utm_term for paid search keywords and utm_content to tell apart two links in the same campaign, such as a bio button versus a story link.',
      },
      {
        title: 'Copy and verify breakdown',
        description:
          'Inspect the live parameter table below to avoid typos or mixed casing before copying the final link.',
      },
      {
        title: 'Test the link before publishing',
        description:
          'Open the copied URL in a browser to confirm it lands on the right page, then check that lowercase normalization did not change any case-sensitive part of the destination.',
      },
    ],
    examples: [
      {
        title: 'Instagram link-in-bio campaign link',
        input: 'URL: https://utilityflow.online/tools/ · Source: instagram · Medium: social · Campaign: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation: 'Uses browser URL parsing so existing parameters or #anchors stay intact.',
      },
    ],
    benefits: [
      'One-click channel presets prevent inconsistent naming like IG vs instagram',
      'Optional lowercase and underscore normalization avoids split GA4 reports',
      'Preserves pre-existing query parameters and anchor #hashes properly',
      'Displays a decoded parameter review table before you publish',
    ],
    useCases: [
      'Tracking clicks from Instagram, LinkedIn, X, and TikTok profile bios',
      'Measuring individual CTA buttons inside weekly email newsletters',
      'Tagging sponsor links inside YouTube video descriptions',
      'Generating clean UTM links to feed directly into the QR Code Generator',
    ],
    faqs: [
      {
        question: 'Why does lowercase normalization matter for UTM parameters?',
        answer:
          'Analytics platforms such as Google Analytics 4 treat utm_source=Instagram and utm_source=instagram as separate rows, splitting campaign attribution.',
      },
      {
        question: 'Should I use UTM tags on internal website navigation links?',
        answer:
          'No. UTM parameters are designed exclusively for external inbound campaigns; using them on internal links overwrites original referral attribution mid-session.',
      },
      {
        question: 'Can I turn a generated UTM link into a QR code?',
        answer:
          'Yes. Copy your finished UTM URL and paste it straight into our QR Code Generator for measurable offline-to-online print campaigns.',
      },
      {
        question: 'Is the UTM Link Builder free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and every link is built locally in your browser without uploading your URLs anywhere.',
      },
      {
        question: 'What is a UTM parameter?',
        answer:
          'A UTM parameter is a short tag added to the end of a URL, such as utm_source=instagram, that tells analytics tools where a visitor came from.',
      },
      {
        question: 'What does utm_source mean?',
        answer:
          'It identifies the traffic source, such as instagram, google, or newsletter, so you can see which place sent each visitor.',
      },
      {
        question: 'What does utm_medium mean?',
        answer:
          'It describes the marketing channel, such as social, email, cpc, or referral, so you can compare channels inside one campaign.',
      },
      {
        question: 'What does utm_campaign mean?',
        answer:
          'It names the specific campaign, such as spring_launch or black_friday, so all links for one promotion are grouped together in reports.',
      },
      {
        question: 'What is utm_content used for?',
        answer:
          'It distinguishes two links in the same campaign, for example a bio button versus a story link, so you can see which placement performed better.',
      },
      {
        question: 'What is utm_term used for?',
        answer:
          'It identifies the paid search keyword that triggered an ad click, and it is mainly useful for Google Ads or other search campaigns.',
      },
      {
        question: 'Do I need to fill in all five UTM parameters?',
        answer:
          'No. Source, medium, and campaign are the recommended minimum, while utm_term and utm_content are optional and only needed when you want finer detail.',
      },
      {
        question: 'Can I use UTM links in my Instagram bio?',
        answer:
          'Yes. UTM links are one of the most common ways to measure bio traffic, and they work the same in link-in-bio pages, story links, and post captions.',
      },
      {
        question: 'Will UTM parameters break my existing query string or #anchor?',
        answer:
          'No. The builder preserves any parameters already in your URL and keeps the #anchor fragment at the end, so the link still lands on the right section.',
      },
      {
        question: 'Should I use spaces in UTM values?',
        answer:
          'No. Use underscores or hyphens instead, such as spring_launch, because spaces get percent-encoded and make reports harder to read.',
      },
      {
        question: 'Can I track QR code scans with UTM links?',
        answer:
          'Yes. Build the UTM URL first, then turn it into a QR code with our QR Code Generator, and every scan that reaches your site will carry the campaign tags.',
      },
      {
        question: 'Do UTM links affect SEO?',
        answer:
          'No, search engines generally ignore UTM parameters for ranking, but it is good practice to keep a canonical tag on the landing page so indexed URLs stay clean.',
      },
      {
        question: 'How do I see UTM results in Google Analytics?',
        answer:
          'In Google Analytics 4, open the Traffic acquisition report and look at session source, medium, and campaign, which are populated from your UTM values.',
      },
      {
        question: 'What is the difference between utm_source and utm_medium?',
        answer:
          'Source answers where the click came from, such as instagram, while medium answers how it arrived, such as social or email. A complete tag needs both.',
      },
      {
        question: 'Can I save or reuse a UTM link template?',
        answer:
          'Yes. The channel presets pre-populate standard source and medium values, and you can copy a finished link and reuse the same naming pattern for future campaigns.',
      },
      {
        question: 'Why do my UTM reports show the same campaign twice?',
        answer:
          'Mixed casing or inconsistent spelling, such as Instagram versus instagram, creates separate rows. Keep one lowercase naming convention for every link.',
      },
    ],
    relatedToolSlugs: [
      'qr-code-generator',
      'url-encoder-decoder',
      'social-character-limit-checker',
      'caption-template-builder',
    ],
    component: lazy(() => import('../../../tools/social/UtmLinkBuilderTool')),
  },
  {
    id: 'social-character-limit-checker',
    slug: 'social-character-limit-checker',
    name: 'Social Character Limit Checker',
    shortDescription:
      'Measure copy length across X, Instagram, LinkedIn, TikTok, Threads, Bluesky, and YouTube with feed fold previews.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'social character limit checker',
      'twitter character counter',
      'instagram caption limit',
      'linkedin post length checker',
      'x character counter',
      'instagram caption character counter',
      'tiktok caption limit checker',
      'threads character limit',
      'bluesky character counter',
      'youtube title character counter',
    ],
    seo: {
      title: 'Social Character Limit Checker – Free Tool | UtilityFlow',
      description:
        'Check character limits and feed fold previews for X, Instagram, LinkedIn, TikTok, Threads, Bluesky and YouTube — with accurate emoji and link counting, free.',
      primaryKeyword: 'social character limit checker',
      secondaryKeywords: [
        'x twitter post counter',
        'instagram caption length checker',
        'linkedin see more fold preview',
        'tiktok caption character counter',
        'threads post length checker',
      ],
      longTailKeywords: [
        'check character limit and fold truncation across social platforms',
        'twitter 280 character counter with 23 char url weighting',
        'instagram bio 150 character and caption counter',
        'how many characters in an instagram bio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Write once and instantly verify hard character caps, X `t.co` 23-character link weighting, hashtag counts, and above-the-fold truncation previews across 10 major social surfaces.',
    instructions: [
      {
        title: 'Write or paste your social draft',
        description:
          'Type captions, bios, or video descriptions into the editor box.',
      },
      {
        title: 'Review platform meter cards',
        description:
          'See green/amber/red utilization bars for X, Instagram, LinkedIn, TikTok, Threads, Bluesky, and YouTube.',
      },
      {
        title: 'Check the "See More" fold preview',
        description:
          'Pick a target platform in the dropdown below to inspect where feed truncation cuts off your opening hook.',
      },
      {
        title: 'Trim your hook above the fold',
        description:
          'Move your most important words into the first 125 characters for Instagram or 210 for LinkedIn so readers see them before the "...more" button.',
      },
      {
        title: 'Adjust hashtags, mentions, and links',
        description:
          'Remove or shorten hashtags, @mentions, and URLs on platforms where you are over the limit, and remember X counts every link as 23 characters.',
      },
      {
        title: 'Re-check and copy the final text',
        description:
          'After every edit, confirm all meter cards are green, then copy the text. If a platform still shows red, cut filler words or move extra detail into a reply or comment.',
      },
    ],
    examples: [
      {
        title: 'Testing a link post on X vs LinkedIn',
        input: '140-char hook + https://example.com/very-long-campaign-url',
        output: 'X counts the URL as 23 chars; Instagram & LinkedIn count full URL length.',
        explanation: 'Reflects X’s automatic t.co link wrapping behavior accurately.',
      },
    ],
    benefits: [
      'Accounts for multi-code-point emojis accurately using Array.from character counting',
      'Models X’s 23-character URL length normalization automatically',
      'Shows both hard maximum caps and feed truncation ("See more") thresholds',
      'Counts embedded hashtags, @mentions, and URLs in real time',
    ],
    useCases: [
      'Ensuring your first 125–210 characters hook readers before the feed fold',
      'Fitting creator announcements under X 280-character and Bluesky 300-character limits',
      'Editing LinkedIn and Instagram bios strictly within 150–160 character limits',
      'Checking YouTube 70-character mobile title visibility before publishing',
    ],
    faqs: [
      {
        question: 'Why does X (Twitter) count long URLs as 23 characters?',
        answer:
          'X wraps outbound links through its t.co shortener, so every http/https URL occupies 23 characters toward the 280-character post budget regardless of original URL length.',
      },
      {
        question: 'What is the "Fold" length shown on Instagram and LinkedIn cards?',
        answer:
          'Feed layouts collapse long captions after roughly 125 characters on Instagram and 210 characters on LinkedIn behind a "...more" button. Putting your core hook before the fold boosts read-through.',
      },
      {
        question: 'Does this count emojis as 1 character or 2?',
        answer:
          'Using Unicode code-point iteration, standard single emojis count as 1 character instead of inflated UTF-16 surrogate pairs.',
      },
      {
        question: 'Is the Social Character Limit Checker free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and your draft text is counted locally in your browser without being uploaded anywhere.',
      },
      {
        question: 'What is the character limit for a post on X (Twitter)?',
        answer:
          'Standard posts on X allow up to 280 characters, with every URL counting as 23 characters because of t.co link wrapping.',
      },
      {
        question: 'What is the Instagram caption character limit?',
        answer:
          'Instagram captions allow up to 2,200 characters, but only about the first 125 characters show in the feed before the "...more" fold.',
      },
      {
        question: 'What is the Instagram bio character limit?',
        answer:
          'Instagram bios allow up to 150 characters, so every letter, space, emoji, and line break counts toward that tight budget.',
      },
      {
        question: 'What is the LinkedIn post character limit?',
        answer:
          'LinkedIn posts allow up to 3,000 characters, while the feed shows roughly the first 210 characters before the "see more" button.',
      },
      {
        question: 'What is the TikTok caption character limit?',
        answer:
          'TikTok video captions allow up to 4,000 characters, though short, punchy captions usually perform better because viewers scan quickly.',
      },
      {
        question: 'What is the Threads character limit?',
        answer:
          'Threads posts allow up to 500 characters, which is longer than a standard X post but still short enough to reward tight writing.',
      },
      {
        question: 'What is the Bluesky character limit?',
        answer:
          'Bluesky posts allow up to 300 characters, slightly more than the 280-character limit on a standard X post.',
      },
      {
        question: 'What is the YouTube title character limit?',
        answer:
          'YouTube titles allow up to 100 characters, but mobile search results typically show only about the first 70, so front-load your key words.',
      },
      {
        question: 'What is the YouTube description character limit?',
        answer:
          'YouTube video descriptions allow up to 5,000 characters, with the first one or two lines visible before viewers tap "show more".',
      },
      {
        question: 'How does the feed fold work on Instagram?',
        answer:
          'Instagram collapses captions after about 125 characters in the feed, so readers must tap "...more" to see the rest. Put your hook and key message first.',
      },
      {
        question: 'How does the LinkedIn "see more" fold work?',
        answer:
          'LinkedIn shows roughly the first 210 characters of a post in the feed, then hides the rest behind "see more", so open with a line that earns the click.',
      },
      {
        question: 'Do hashtags count toward the character limit?',
        answer:
          'Yes. Every character in a hashtag, including the # symbol itself, counts toward the post limit on every platform.',
      },
      {
        question: 'Do line breaks count as characters?',
        answer:
          'Yes. Each newline in your draft counts as one character, so extra blank lines eat into tight limits such as the 150-character Instagram bio.',
      },
      {
        question: 'Do emojis count as one character on every platform?',
        answer:
          'This checker counts standard single emojis as one character using code-point counting, but complex emojis built from joined symbols may count as more on some platforms.',
      },
      {
        question: 'Do URLs count the same on every platform?',
        answer:
          'No. X counts every URL as 23 characters through t.co wrapping, while Instagram, LinkedIn, and most other platforms count the full length of the link.',
      },
      {
        question: 'Can I check multiple platforms at once?',
        answer:
          'Yes. Type or paste your draft once and every platform meter card updates at the same time, so you can adapt one post for X, Instagram, LinkedIn, and more.',
      },
    ],
    relatedToolSlugs: [
      'bio-line-break-formatter',
      'hashtag-formatter',
      'caption-template-builder',
      'character-counter',
    ],
    component: lazy(() => import('../../../tools/social/SocialCharacterLimitTool')),
  },
  {
    id: 'unicode-fancy-text-formatter',
    slug: 'unicode-fancy-text-formatter',
    name: 'Unicode Fancy Text Formatter',
    shortDescription:
      'Convert plain ASCII text into Unicode Bold, Italic, Monospace, Script, Small Caps, and Fullwidth styles for bios.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'fancy text generator',
      'unicode bold text',
      'instagram bio font formatter',
      'small caps generator',
      'bold text generator for instagram',
      'unicode italic text generator',
      'monospace text generator',
      'script text generator',
      'fullwidth text generator',
      'fancy fonts for bios',
    ],
    seo: {
      title: 'Unicode Fancy Text Formatter – Free Styles | UtilityFlow',
      description:
        'Turn plain text into Unicode bold, italic, monospace, script, small caps and fullwidth styles for bios and posts — copy and paste anywhere, free, no sign-up.',
      primaryKeyword: 'unicode fancy text formatter',
      secondaryKeywords: [
        'unicode bold text generator',
        'small caps text converter',
        'social media bio fonts',
        'bold italic text for social bios',
        'unicode text styles copy paste',
      ],
      longTailKeywords: [
        'copy and paste unicode bold text for linkedin and instagram',
        'convert plain text to small caps and monospace unicode',
        'accessible guidance for unicode styled social text',
        'how to make bold text in instagram bio without app',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transform plain letters and numbers into standard Unicode Mathematical Alphanumeric Symbols, Small Caps, and Fullwidth glyphs that preserve bold or monospace styling inside plain-text social bios.',
    instructions: [
      {
        title: 'Enter short headline or bio label',
        description:
          'Type a short phrase, section header, or handle tagline into Text to Stylize.',
      },
      {
        title: 'Browse 10 Unicode styles',
        description:
          'Compare Sans-Serif Bold, Italic, Monospace, Script, Double-Struck, Small Caps, and Fullwidth previews.',
      },
      {
        title: 'Compare previews side by side',
        description:
          'Look through all ten style cards to find the one that reads best at small sizes, since some script and double-struck styles are harder to read.',
      },
      {
        title: 'Copy your preferred style',
        description:
          'Click Copy on your preferred style card to place the styled Unicode text on your clipboard.',
      },
      {
        title: 'Paste and check rendering',
        description:
          'Paste the text into your bio, caption, or post, then view it on another device to make sure no characters show up as empty boxes.',
      },
      {
        title: 'Copy responsibly',
        description:
          'Click Copy on your preferred style and keep critical body copy in standard plain text for screen-reader accessibility.',
      },
    ],
    examples: [
      {
        title: 'Formatting a LinkedIn or X bio divider',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Sans-Serif Bold)',
        explanation: 'Uses official Unicode U+1D5D4–U+1D7EC mathematical bold code points.',
      },
    ],
    benefits: [
      'Renders real Unicode glyphs rather than images or platform-specific HTML',
      'Includes clear accessibility notice on screen-reader and search behavior',
      'Handles digits, punctuation, and special blackboard symbols like ℂ, ℕ, ℝ properly',
      'One-click copy for every style card',
    ],
    useCases: [
      'Highlighting section headers inside Instagram or TikTok profile bios',
      'Formatting technical handles or dates in Monospace Unicode',
      'Adding subtle Small Caps labels in plain-text newsletters or notes',
      'Styling short announcements where native Markdown bold is unsupported',
    ],
    faqs: [
      {
        question: 'Why does the tool include an accessibility warning?',
        answer:
          'Unicode mathematical symbols are intended for equations rather than prose, so assistive screen readers often read them aloud as "mathematical sans-serif bold capital A" and social search bars may not index them.',
      },
      {
        question: 'Are these actual font files?',
        answer:
          'No. They are standardized Unicode characters mapped across distinct symbol blocks, which is why they survive pasting into plain-text social fields.',
      },
      {
        question: 'Why do accented non-ASCII letters stay unchanged?',
        answer:
          'Unicode Mathematical Alphanumeric blocks only define unaccented Latin A–Z and digits 0–9, so accented characters remain untouched to preserve readability.',
      },
      {
        question: 'Is the Unicode Fancy Text Formatter free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and your text is converted locally in your browser without being uploaded anywhere.',
      },
      {
        question: 'What Unicode styles can I create with this formatter?',
        answer:
          'You can create Sans-Serif Bold, Italic, Monospace, Script, Double-Struck, Fraktur, Small Caps, and Fullwidth styles, with ten style cards to compare at a glance.',
      },
      {
        question: 'Will fancy text work on Instagram?',
        answer:
          'Yes. Styled Unicode text pastes directly into Instagram bios, captions, and comments because it is made of real characters, not images or fonts.',
      },
      {
        question: 'Will fancy text work on LinkedIn and X?',
        answer:
          'Yes. LinkedIn and X both accept Unicode characters in bios and posts, so bold or small caps headers paste in just like ordinary text.',
      },
      {
        question: 'Can I use fancy text in my TikTok bio?',
        answer:
          'Yes. TikTok bios accept Unicode characters, so you can style a short name or tagline, though you should keep the rest of the bio in plain text.',
      },
      {
        question: 'Why do some characters look like boxes on some devices?',
        answer:
          'Older phones or computers may not have fonts covering every Unicode symbol block, so a missing glyph shows as an empty box. Test your styled text on another device before publishing.',
      },
      {
        question: 'Can I use fancy text for my whole bio?',
        answer:
          'It is not recommended. Screen readers struggle with styled text and search may not match it, so use fancy text only for short headers and keep the rest plain.',
      },
      {
        question: 'Does fancy text affect search on social platforms?',
        answer:
          'Yes, it can. A search for a plain word may not match the same word written in mathematical bold characters, so avoid styling keywords people search for.',
      },
      {
        question: 'Can screen readers read Unicode fancy text?',
        answer:
          'Often poorly. Screen readers may read each styled letter aloud with its full Unicode name, which makes long styled passages confusing for blind users.',
      },
      {
        question: 'Can I make bold text in WhatsApp with this formatter?',
        answer:
          'Yes, Unicode bold pastes into WhatsApp, but the app also has native formatting, so wrapping text in asterisks such as *bold* is usually the simpler choice.',
      },
      {
        question: 'Do numbers and punctuation change too?',
        answer:
          'Digits convert in most styles, such as bold and monospace, while most punctuation stays unchanged because the Unicode symbol blocks do not define styled versions of it.',
      },
      {
        question: 'Can I convert styled text back to normal text?',
        answer:
          'The tool converts plain text into styled text, so to get plain text back, retype the original phrase or paste it from where you first copied it.',
      },
      {
        question: 'Is Unicode fancy text the same as a font?',
        answer:
          'No. A font changes how ordinary letters look on one device, while Unicode fancy text uses different characters entirely, which is why the styling survives copying and pasting.',
      },
      {
        question: 'Will fancy text work in email subject lines?',
        answer:
          'It usually renders in modern email clients, but styled characters can trip spam filters and confuse screen readers, so plain text is the safer choice for email.',
      },
      {
        question: 'Can I use fancy text on YouTube titles?',
        answer:
          'Yes, YouTube accepts Unicode in titles, but styled words may not match plain search queries, so use it sparingly and keep searchable keywords in plain text.',
      },
      {
        question: 'Does this formatter upload my text anywhere?',
        answer:
          'No. All conversion happens locally in your browser, so nothing you type is sent to a server or stored.',
      },
      {
        question: 'What is Fullwidth text?',
        answer:
          'Fullwidth text uses wide Unicode characters, such as Ｆｕｌｌｗｉｄｔｈ, where each letter takes up double the normal width, giving headings an airy, spaced-out look.',
      },
    ],
    relatedToolSlugs: [
      'bio-line-break-formatter',
      'social-character-limit-checker',
      'case-converter',
      'caption-template-builder',
    ],
    component: lazy(() => import('../../../tools/social/UnicodeTextFormatterTool')),
  },
  {
    id: 'bio-line-break-formatter',
    slug: 'bio-line-break-formatter',
    name: 'Instagram & Bio Line Break Formatter',
    shortDescription:
      'Preserve clean blank paragraphs in Instagram captions and bios by stripping trailing spaces and adding invisible spacers.',
    categoryId: 'social-media',
    batch: 4,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'instagram line break generator',
      'bio line break formatter',
      'caption spacer tool',
      'invisible line break social',
      'instagram caption spacer',
      'line breaks for instagram bio',
      'caption line break tool',
      'invisible character for instagram',
      'tiktok bio line breaks',
      'threads caption formatter',
    ],
    seo: {
      title: 'Bio Line Break Formatter – Instagram Captions | UtilityFlow',
      description:
        'Keep clean paragraph spacing in Instagram, Threads and TikTok captions and bios — strip trailing spaces, add invisible spacers and copy it in one click.',
      primaryKeyword: 'bio line break formatter',
      secondaryKeywords: [
        'instagram caption line breaks',
        'invisible spacer instagram bio',
        'preserve blank lines social media',
        'instagram bio spacing tool',
        'tiktok caption line break',
      ],
      longTailKeywords: [
        'keep paragraph spacing in instagram captions without periods',
        'fix trailing spaces breaking instagram bio line breaks',
        'copy clean formatted social caption to clipboard',
        'how to add line breaks in instagram bio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Prevent social apps from collapsing empty lines inside your captions and bios by stripping hidden trailing spaces and optionally inserting invisible Braille Blank (`⠀`) spacers across paragraph gaps.',
    instructions: [
      {
        title: 'Write or paste your caption',
        description:
          'Draft multi-paragraph copy or bio lines with empty lines wherever you want visual breathing room.',
      },
      {
        title: 'Select spacer strategy',
        description:
          'Choose Invisible Spacer (U+2800), Minimal Dot Spacer (.), or Clean Trailing Spaces Only.',
      },
      {
        title: 'Review the formatted preview',
        description:
          'Check the preview to confirm every blank line survived and no trailing spaces remain at the end of your lines.',
      },
      {
        title: 'Check the character count',
        description:
          'Watch the live counter to make sure your bio still fits inside Instagram’s 150-character limit, since each spacer counts as one character.',
      },
      {
        title: 'Copy formatted text',
        description:
          'Click Copy Formatted Caption and verify whether your bio fits inside Instagram’s 150-character limit.',
      },
      {
        title: 'Paste and verify on the platform',
        description:
          'Paste into Instagram, Threads, or TikTok and preview the post. If the breaks still collapse, switch to Invisible Spacer mode and copy again.',
      },
    ],
    examples: [
      {
        title: 'Cleaning trailing spaces before pasting into Instagram',
        input: 'Line 1   \\n\\nLine 2',
        output: 'Line 1\\n⠀\\nLine 2',
        explanation: 'Removes the trailing spaces after "Line 1" and inserts an invisible U+2800 spacer so the blank gap persists.',
      },
    ],
    benefits: [
      'Eliminates invisible trailing spaces that trigger social platform line-collapsing bugs',
      'Supports both invisible Unicode spacers and clean dot separators',
      'Collapses accidental double spaces inside sentences automatically',
      'Checks total length against the 150-character Instagram bio cap live',
    ],
    useCases: [
      'Formatting readable multi-paragraph Instagram and Facebook captions',
      'Structuring stacked bulleted Instagram or TikTok profile bios',
      'Cleaning copy pasted out of Notion, Google Docs, or Notes apps before publishing',
      'Separating main caption storytelling from footer calls-to-action',
    ],
    faqs: [
      {
        question: 'Why do blank lines disappear when I paste text directly into Instagram?',
        answer:
          'Mobile keyboards and text editors often leave trailing spaces at the end of sentences, which social parsers treat as formatting artifacts and collapse into a single newline.',
      },
      {
        question: 'What character is used for the Invisible Spacer mode?',
        answer:
          'It inserts U+2800 (Braille Pattern Blank) solely on otherwise empty lines so visual spacing holds without displaying awkward periods or dashes.',
      },
      {
        question: 'Does this modify text inside my sentences?',
        answer:
          'Only trailing whitespace at the end of lines is trimmed, plus optional repeated spaces inside lines when enabled.',
      },
      {
        question: 'Is the Bio Line Break Formatter free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and your caption is formatted locally in your browser without being uploaded anywhere.',
      },
      {
        question: 'Why do Instagram captions lose their line breaks?',
        answer:
          'Trailing spaces left by keyboards and editors make social apps treat a blank line as an artifact and collapse it. Stripping those spaces and adding a spacer keeps the gap.',
      },
      {
        question: 'Can I use this formatter for TikTok captions too?',
        answer:
          'Yes. TikTok captions accept the same line breaks and invisible spacers, so formatted text pastes in with its paragraph spacing intact.',
      },
      {
        question: 'Can I use this formatter for Threads posts?',
        answer:
          'Yes. Threads preserves blank lines in formatted text, so you can structure longer posts with clear paragraph breaks.',
      },
      {
        question: 'Can I use it for my Instagram bio?',
        answer:
          'Yes. It works for stacked, multi-line bios, but watch the live counter because Instagram bios allow only 150 characters and each spacer counts.',
      },
      {
        question: 'What is the difference between Invisible Spacer and Dot Spacer?',
        answer:
          'Invisible Spacer puts a blank Braille character on empty lines so the gap looks empty, while Dot Spacer puts a visible period there, which some people prefer for reliability.',
      },
      {
        question: 'When should I choose "Clean Trailing Spaces Only"?',
        answer:
          'Choose it when the platform already preserves your line breaks and you only want to remove hidden trailing spaces that could still trigger collapsing.',
      },
      {
        question: 'Does the invisible spacer count toward the Instagram bio character limit?',
        answer:
          'Yes. Each U+2800 spacer is one character, so a bio with several blank lines uses up part of the 150-character budget.',
      },
      {
        question: 'Will the invisible character show up as a weird symbol?',
        answer:
          'On most modern phones it renders as blank space, but very old fonts may display it as an empty box, so test your bio on another device after pasting.',
      },
      {
        question: 'Can I format text pasted from Google Docs or Notion?',
        answer:
          'Yes. Text copied from Docs, Notion, or Notes apps often carries hidden trailing spaces, and this tool cleans them before you paste into a social app.',
      },
      {
        question: 'Does the tool remove spaces inside my sentences?',
        answer:
          'No. It only trims trailing whitespace at the end of lines, and it collapses repeated spaces inside a line only when you enable that option.',
      },
      {
        question: 'How many blank lines should I leave between paragraphs?',
        answer:
          'One blank line is usually enough for readable captions. Two or more can look gappy in the feed and waste characters in a bio.',
      },
      {
        question: 'Can I use this formatter for Facebook posts?',
        answer:
          'Yes. Facebook usually preserves line breaks on its own, but the tool is still useful for cleaning trailing spaces from text pasted out of other apps.',
      },
      {
        question: 'Does this tool upload my caption anywhere?',
        answer:
          'No. All formatting happens locally in your browser, so your caption text is never sent to a server or stored.',
      },
      {
        question: 'Why does my caption still look collapsed after pasting?',
        answer:
          'Some apps strip formatting when you paste. Try copying again in Invisible Spacer mode, paste directly into the caption field rather than through another app, and check the preview.',
      },
      {
        question: 'Can I use line breaks in X (Twitter) posts?',
        answer:
          'Yes. X supports line breaks in posts, and this formatter works there too, but remember that each newline counts toward the 280-character limit.',
      },
      {
        question: 'Can I use this formatter for YouTube descriptions?',
        answer:
          'Yes. YouTube descriptions preserve blank lines, so formatted text keeps its paragraph spacing when viewers expand the description.',
      },
    ],
    relatedToolSlugs: [
      'social-character-limit-checker',
      'hashtag-formatter',
      'unicode-fancy-text-formatter',
      'whitespace-remover',
    ],
    component: lazy(() => import('../../../tools/social/BioLineBreakFormatterTool')),
  },
];
