// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
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
  },
  'utm-link-builder': {
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
  },
  'social-character-limit-checker': {
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
  },
  'unicode-fancy-text-formatter': {
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
  },
  'bio-line-break-formatter': {
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
  },
  'youtube-timestamp-generator': {
    instructions: [
      {
        title: 'Paste your YouTube URL (optional)',
        description:
          'Enter any youtube.com/watch, youtu.be, or Shorts link to auto-generate clickable deep links per chapter.',
      },
      {
        title: 'Add and label chapters',
        description:
          'Enter MM:SS or HH:MM:SS timestamps and chapter titles; click Sort Chronologically anytime if rows get out of order.',
      },
      {
        title: 'Sort and check the chapter rules',
        description:
          'Sort the list chronologically and review the spec check for the 00:00 start, at least 3 chapters, and 10-second minimum spacing.',
      },
      {
        title: 'Fix any warnings before copying',
        description:
          'If a warning appears, adjust the offending timestamp or title so every chapter passes YouTube’s rules before you export.',
      },
      {
        title: 'Copy the description block and links',
        description:
          'Copy the formatted chapter block for your video description, and copy individual ?t= links for comments, show notes, or newsletters.',
      },
      {
        title: 'Tip: test a link before publishing',
        description:
          'Open one generated ?t= link in a new tab to confirm it jumps to the right moment, especially after editing timestamps late.',
      },
    ],
    examples: [
      {
        title: 'Formatting a 4-chapter tutorial description',
        input: '00:00 Intro · 01:15 Setup · 04:40 Demo · 08:20 Summary',
        output: '00:00 Intro\n01:15 Setup\n04:40 Demo\n08:20 Summary (+ https://youtu.be/...?t=75)',
        explanation: 'Converts 01:15 directly into ?t=75s for one-click sharing.',
      },
    ],
    benefits: [
      'Automatically validates YouTube’s 00:00 start, 3-chapter minimum, and 10-second duration rules',
      'Switches seamlessly to HH:MM:SS padding when videos exceed 60 minutes',
      'Extracts video IDs from standard, shortened, live, embed, and Shorts URLs',
      'Generates ready-to-share ?t= deep links for show notes and pinned comments',
    ],
    useCases: [
      'Adding searchable chapter scrubbing bars to YouTube tutorials and podcasts',
      'Creating clickable podcast episode show-note timestamps',
      'Sharing exact tutorial steps in documentation, Slack, or Discord',
      'Auditing long-form livestream chapter lists for formatting typos',
    ],
    faqs: [
      {
        question: 'Why aren’t my YouTube video chapters showing up on the progress bar?',
        answer:
          'YouTube requires the first timestamp to be exactly 00:00, at least 3 timestamps listed in ascending chronological order, and each chapter to last at least 10 seconds.',
      },
      {
        question: 'Should timestamps exceed 60 minutes as MM:SS or HH:MM:SS?',
        answer:
          'Once any chapter reaches 60 minutes or longer, this tool automatically formats every timestamp consistently in HH:MM:SS notation.',
      },
      {
        question: 'Does this connect to the YouTube Data API?',
        answer:
          'No. Everything parses and formats locally in your browser without requiring Google account OAuth or API keys.',
      },
      {
        question: 'Is the YouTube Timestamp Generator free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and nothing is uploaded to a server.',
      },
      {
        question: 'What is the minimum number of chapters YouTube requires?',
        answer:
          'YouTube needs at least 3 chapters in the description before it shows chapter markers on the progress bar.',
      },
      {
        question: 'Why must the first YouTube chapter start at 00:00?',
        answer:
          'YouTube uses the first timestamp to anchor the chapter system, so a description that starts later will not generate chapters at all.',
      },
      {
        question: 'What happens if two chapters are less than 10 seconds apart?',
        answer:
          'YouTube ignores chapters shorter than 10 seconds, so this tool flags the gap and you should move the later timestamp forward.',
      },
      {
        question: 'Can I use the YouTube Timestamp Generator for Shorts?',
        answer:
          'Yes, you can paste a Shorts link and the tool will still generate ?t= jump links, though chapters themselves are mainly useful for longer videos.',
      },
      {
        question: 'How do the ?t= jump links work?',
        answer:
          'Each link appends the chapter start time in seconds to the video URL, so clicking it opens the video at that exact moment.',
      },
      {
        question: 'What YouTube URL formats does the timestamp generator accept?',
        answer:
          'It accepts standard youtube.com/watch links, shortened youtu.be links, live links, embed links, and Shorts links.',
      },
      {
        question: 'Do chapters have to be in chronological order?',
        answer:
          'Yes, YouTube requires ascending order, and this tool can sort your rows chronologically with one click if they get mixed up.',
      },
      {
        question: 'Can I add chapters to a video I did not upload?',
        answer:
          'You can generate timestamp links for any public video to share exact moments, but chapters only appear when the video owner adds them to the description.',
      },
      {
        question: 'How many chapters can I add with this tool?',
        answer:
          'There is no fixed cap in the tool, but very long chapter lists become hard to read, so keep them focused on real sections of the video.',
      },
      {
        question: 'Do I need to include chapter titles, or are times enough?',
        answer:
          'YouTube needs a title after each timestamp, so add a short descriptive label for every chapter you list.',
      },
      {
        question: 'Can I use these timestamps in a podcast episode description?',
        answer:
          'Yes, the same 00:00 format works in podcast show notes and episode descriptions, and the ?t= links are handy for listeners.',
      },
      {
        question: 'Why does the tool switch all timestamps to HH:MM:SS for long videos?',
        answer:
          'Mixed MM:SS and HH:MM:SS formats confuse viewers and parsers, so the tool keeps every timestamp in one consistent format.',
      },
      {
        question: 'Is my video URL or chapter list uploaded anywhere?',
        answer:
          'No, all parsing and formatting happens locally in your browser, and your URLs and chapter titles never leave your device.',
      },
      {
        question: 'Can I edit a chapter after adding it?',
        answer:
          'Yes, you can change any timestamp or title, re-sort the list, and re-check the spec warnings before copying the updated block.',
      },
      {
        question: 'What should I do if a generated link opens at the wrong time?',
        answer:
          'Check that the timestamp was entered as minutes and seconds in the right order, then re-copy the link after correcting it.',
      },
      {
        question: 'Do YouTube chapters help viewers find content faster?',
        answer:
          'Yes, chapters let viewers jump straight to the section they need, which makes long tutorials, reviews, and podcasts easier to navigate.',
      },
    ],
  },
  'social-thumbnail-previewer': {
    instructions: [
      {
        title: 'Load a local thumbnail image',
        description:
          'Pick a PNG, JPG, or WebP file from disk; it stays strictly in local browser memory via Object URLs.',
      },
      {
        title: 'Enter title, channel, and duration',
        description:
          'Type your candidate title and video length to check two-line feed truncation and corner badge coverage.',
      },
      {
        title: 'Toggle Dark Mode & Safe Zone',
        description:
          'Switch between Light and Dark feeds and toggle the amber timestamp corner zone overlay before exporting.',
      },
      {
        title: 'Compare feed and sidebar sizes',
        description:
          'Check the large desktop feed card and the compact sidebar thumbnail side by side to catch text that is unreadable at small sizes.',
      },
      {
        title: 'Check the spec warnings',
        description:
          'Review the 1280×720 dimension, 16:9 aspect ratio, and 2 MB file-size checks, and fix any flagged issue in your image editor.',
      },
      {
        title: 'Tip: fix text hidden by the badge',
        description:
          'If the duration badge covers important text or a face, move that element away from the bottom-right corner and re-upload the image.',
      },
    ],
    examples: [
      {
        title: 'Checking bottom-right text placement',
        input: '1280×720 PNG · Duration: 12:48 · Safe Zone: Enabled',
        output: 'Highlights the bottom-right corner where the 12:48 duration badge covers artwork.',
        explanation: 'Prevents important thumbnail faces or numbers from sitting behind player time overlays.',
      },
    ],
    benefits: [
      'Reads real natural pixel dimensions, aspect ratio, and KB/MB file size immediately',
      'Previews both large desktop feed cards and small recommended sidebar thumbnails',
      'Includes Light/Dark feed toggle to test high-contrast legibility',
      'Zero server upload—ideal for unreleased sponsor or product launch graphics',
    ],
    useCases: [
      'Catching unreadable small text in compact sidebar thumbnails before publishing',
      'Ensuring important graphics stay clear of the bottom-right duration overlay',
      'Verifying thumbnails meet YouTube’s 1280×720, 16:9, and <2 MB requirements',
      'Comparing title phrasing so critical keywords appear before line-clamp truncation',
    ],
    faqs: [
      {
        question: 'Are my uploaded thumbnail images sent to a remote server?',
        answer:
          'Never. Images load exclusively inside your browser tab via URL.createObjectURL() and are revoked automatically when replaced or closed.',
      },
      {
        question: 'What dimensions and file size does YouTube recommend for thumbnails?',
        answer:
          'YouTube recommends 1280×720 pixels (minimum width 640px) in a 16:9 aspect ratio, saved as JPG, PNG, or WebP under 2 MB.',
      },
      {
        question: 'Why does sidebar preview matter so much?',
        answer:
          'Suggested watch-page thumbnails appear much smaller (~168px wide), so verifying readability at compact scale prevents cluttered designs.',
      },
      {
        question: 'Is the YouTube Thumbnail Previewer free to use?',
        answer:
          'Yes, it is free to use in your browser with no account, and your thumbnail images are never uploaded anywhere.',
      },
      {
        question: 'Which image formats can I preview with the thumbnail previewer?',
        answer:
          'You can load PNG, JPG, and WebP files, which are the same formats YouTube accepts for custom thumbnails.',
      },
      {
        question: 'How does the thumbnail previewer check the 16:9 aspect ratio?',
        answer:
          'It reads the real pixel dimensions of your image and flags it if the width-to-height ratio does not match 16:9.',
      },
      {
        question: 'What is the thumbnail safe zone in this previewer?',
        answer:
          'The safe zone overlay highlights the bottom-right corner where YouTube places the video duration badge, so you can keep faces and key text clear of it.',
      },
      {
        question: 'Why should I preview my thumbnail in Dark Mode?',
        answer:
          'Many viewers browse YouTube in Dark Mode, and bright or low-contrast designs can look very different against a dark feed background.',
      },
      {
        question: 'How does the previewer show title truncation?',
        answer:
          'It renders your title in a realistic feed card with the same two-line limit, so you can see exactly where YouTube cuts it off.',
      },
      {
        question: 'What happens if my thumbnail is larger than 2 MB?',
        answer:
          'The tool flags the file size, and you should re-export it at higher compression or a smaller resolution until it is under 2 MB.',
      },
      {
        question: 'Can I preview a thumbnail before my video is published?',
        answer:
          'Yes, that is the main use: test unreleased thumbnails locally so sponsor graphics and launch artwork stay private until release day.',
      },
      {
        question: 'Why does my thumbnail look blurry in the sidebar preview?',
        answer:
          'Small sidebar thumbnails shrink your image a lot, so thin text and fine detail blur; use large bold text and simple shapes instead.',
      },
      {
        question: 'Does the previewer change or compress my thumbnail image?',
        answer:
          'No, it only displays your file as-is and reports its dimensions and size; it never edits, resizes, or re-encodes the image.',
      },
      {
        question: 'What is the minimum thumbnail width YouTube accepts?',
        answer:
          'YouTube requires a minimum width of 640 pixels, though 1280 pixels wide is recommended for a sharp HD result.',
      },
      {
        question: 'Can I test different titles with the same thumbnail?',
        answer:
          'Yes, just edit the title field and the feed preview updates instantly, so you can compare phrasing without re-uploading the image.',
      },
      {
        question: 'Why is my thumbnail text cut off in the feed preview?',
        answer:
          'Feed cards clamp titles to two lines, so move your most important words to the start of the title where they stay visible.',
      },
      {
        question: 'Does the previewer work for thumbnails on other platforms?',
        answer:
          'It is built around YouTube feed layouts, but the size, contrast, and small-scale readability checks are useful for any video platform.',
      },
      {
        question: 'How do I remove a loaded thumbnail image?',
        answer:
          'Load a different image to replace it, or close the tab; the in-memory object URL is revoked and nothing is stored.',
      },
      {
        question: 'What should I do if the preview looks different from real YouTube?',
        answer:
          'YouTube tweaks its layout over time, so treat the preview as a close approximation and do a final check on a private or unlisted upload.',
      },
      {
        question: 'Can the thumbnail previewer check a live YouTube video thumbnail?',
        answer:
          'No, it previews local image files only; to check a published video, download its thumbnail image first and load that file here.',
      },
    ],
  },
  'hashtag-formatter': {
    instructions: [
      {
        title: 'Paste keywords or rough hashtags',
        description:
          'Enter tags separated by commas, spaces, semicolons, or newlines—with or without leading # symbols.',
      },
      {
        title: 'Pick case and output layout',
        description:
          'Choose PascalCase (#CamelCase) for accessibility, lowercase, or Preserve Case, plus inline or line-separated output.',
      },
      {
        title: 'Choose a caption separator style',
        description:
          'Pick a single-line block, vertical list, or dot-separated footer so the tags sit neatly below your caption text.',
      },
      {
        title: 'Run the formatter',
        description:
          'The tool strips invalid punctuation, removes duplicates case-insensitively, and rebuilds every tag in your chosen case.',
      },
      {
        title: 'Check count and copy',
        description:
          'Verify duplicates removed and total tag count against Instagram’s 30-tag cap, then click Copy Hashtags.',
      },
      {
        title: 'Tip: trim tags over the platform cap',
        description:
          'If the count exceeds 30, drop the least relevant tags first, since extra tags past the cap are ignored by Instagram.',
      },
    ],
    examples: [
      {
        title: 'Converting plain phrases into accessible CamelCase hashtags',
        input: 'content marketing, productivity hacks, Content Marketing',
        output: '#ContentMarketing #ProductivityHacks (1 duplicate removed)',
        explanation: 'Capitalizing each word boundary helps screen readers pronounce multi-word tags properly.',
      },
    ],
    benefits: [
      'Supports accessible #PascalCase formatting recommended by digital accessibility guides',
      'Deduplicates identical tags case-insensitively automatically',
      'Strips unsupported punctuation (hyphens, periods, commas) that break clickable tags',
      'Tracks exact tag count against platform caps',
    ],
    useCases: [
      'Cleaning campaign hashtag banks shared across marketing spreadsheets',
      'Converting multi-word SEO keywords into clickable social hashtags',
      'Updating legacy lowercase tag lists to accessible CamelCase formatting',
      'Generating tidy dot-separated hashtag footers for Instagram posts',
    ],
    faqs: [
      {
        question: 'Why is CamelCase / PascalCase recommended for hashtags?',
        answer:
          'Screen readers split capitalized word boundaries (e.g. #SocialMediaTools as "Social Media Tools") instead of attempting to pronounce a long lowercase string as one garbled word.',
      },
      {
        question: 'Why are hyphens and periods removed inside tags?',
        answer:
          'Most social platforms terminate a clickable hashtag at the first space, hyphen, or punctuation mark, so removing hyphens keeps the full tag intact.',
      },
      {
        question: 'Does this use AI or guess banned hashtags?',
        answer:
          'No. It deterministically cleans, formats, and deduplicates the exact tags you supply.',
      },
      {
        question: 'Is the Hashtag Formatter free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your tags are processed locally without being uploaded.',
      },
      {
        question: 'What is the Instagram hashtag limit?',
        answer:
          'Instagram allows up to 30 hashtags per post, and this tool counts your tags so you can stay within that cap.',
      },
      {
        question: 'How does the Hashtag Formatter remove duplicates?',
        answer:
          'It compares tags case-insensitively, so #ContentMarketing and #contentmarketing count as the same tag and only one is kept.',
      },
      {
        question: 'Can I paste hashtags with or without the # symbol?',
        answer:
          'Yes, both work: the tool adds a # to plain keywords and keeps the ones you already typed with a #.',
      },
      {
        question: 'What separators can I use between hashtags?',
        answer:
          'You can separate tags with commas, spaces, semicolons, or newlines, and the tool handles mixed separators in one paste.',
      },
      {
        question: 'What is the difference between CamelCase and lowercase hashtags?',
        answer:
          'CamelCase capitalizes each word (#SocialMedia) for screen-reader accessibility, while lowercase (#socialmedia) is a stylistic choice that reads as one word.',
      },
      {
        question: 'Does the Hashtag Formatter check if a hashtag is banned?',
        answer:
          'No, it does not check ban lists or live platform data; it only cleans and formats the tags you provide.',
      },
      {
        question: 'Can I use the formatted hashtags on TikTok and X too?',
        answer:
          'Yes, the cleaned tags work on any platform, though each platform has its own limits, such as the 30-tag cap on Instagram.',
      },
      {
        question: 'Why do some of my hashtags disappear after formatting?',
        answer:
          'Tags made only of punctuation or unsupported characters are removed, since they would not work as clickable hashtags anyway.',
      },
      {
        question: 'What are dot-separated hashtag footers for?',
        answer:
          'Dot separators push hashtags below the caption fold on Instagram, keeping the visible caption clean while the tags still work.',
      },
      {
        question: 'Can I format hashtags in a vertical list?',
        answer:
          'Yes, choose the line-separated layout to put one hashtag per line, which is handy for comments and caption footers.',
      },
      {
        question: 'Does the Hashtag Formatter work with non-English words?',
        answer:
          'Yes, it keeps letters from other alphabets in the tag, as long as the platform supports them in hashtags.',
      },
      {
        question: 'How many hashtags should I use per post?',
        answer:
          'There is no single right number; use tags that are genuinely relevant to the post, and let the counter keep you under the platform cap.',
      },
      {
        question: 'Can I save a hashtag group for reuse?',
        answer:
          'The tool does not store groups, so copy the formatted block into your own notes or spreadsheet to reuse it later.',
      },
      {
        question: 'Why does Preserve Case keep my original capitalization?',
        answer:
          'Preserve Case is for brand tags or acronyms you want exactly as typed, while the other modes standardize every tag the same way.',
      },
      {
        question: 'Are my hashtags uploaded to a server?',
        answer:
          'No, all formatting happens locally in your browser, so your keyword lists and campaign tags never leave your device.',
      },
      {
        question: 'What should I do if a formatted hashtag still does not work on a platform?',
        answer:
          'Check the platform’s own rules for that tag, since some platforms block certain words or limit tag length even when the format is clean.',
      },
    ],
  },
  'caption-template-builder': {
    instructions: [
      {
        title: 'Choose a post structure',
        description:
          'Pick from the five deterministic templates along the top bar to fit your goal.',
      },
      {
        title: 'Fill your own hook, points, and CTA',
        description:
          'Enter your authentic opening hook, problem context, bullet takeaways (one per line), call-to-action, and hashtags.',
      },
      {
        title: 'Review the live preview',
        description:
          'Read the formatted post as it will appear, checking paragraph spacing and the order of hook, takeaways, and call-to-action.',
      },
      {
        title: 'Check the character and word fit',
        description:
          'Watch the live counter against X’s 280-character limit and Instagram or LinkedIn limits, and trim lines that push you over.',
      },
      {
        title: 'Copy and verify length',
        description:
          'Preview the live formatted post, confirm character/word fit for X or Instagram/LinkedIn, and click Copy Caption.',
      },
      {
        title: 'Tip: try the same notes in another template',
        description:
          'Switch templates without retyping to compare how your hook and points read as PAS, a tutorial, or a checklist before you post.',
      },
    ],
    examples: [
      {
        title: 'Assembling a 3-step actionable LinkedIn post',
        input: 'Hook + Context + 3 bullet points + CTA',
        output: 'Clean numbered post with crisp paragraph spacing and footer hashtags.',
        explanation: 'Deterministically structures your exact words without altering voice or inventing claims.',
      },
    ],
    benefits: [
      '100% transparent deterministic assembly—no generic AI buzzwords or hallucinated facts',
      'Enforces clean visual hierarchy between hook, takeaways, and call-to-action',
      'Live character & word counter flags X 280-char and IG/LinkedIn limits',
      'Lets creators test five classic frameworks on the same notes in one click',
    ],
    useCases: [
      'Drafting consistent product launch announcements for social channels',
      'Turning rough engineering or marketing bullet notes into readable posts',
      'Formatting educational carousels or weekly tip checklists',
      'Separating opening hooks cleanly from value lists before scheduling',
    ],
    faqs: [
      {
        question: 'Does this tool use an AI language model to rewrite my words?',
        answer:
          'No. It is a purely deterministic structured template builder running in your browser—every sentence in the preview comes strictly from your own inputs.',
      },
      {
        question: 'How do I add more steps or checklist items?',
        answer:
          'Simply press Enter to add new lines inside the Key Takeaways textarea; each non-empty line automatically formats into a numbered item, bullet, or checkbox.',
      },
      {
        question: 'Can I preserve blank lines when pasting into Instagram afterward?',
        answer:
          'Yes. If an app still collapses spacing on mobile, drop the copied caption into our Instagram & Bio Line Break Formatter for invisible spacers.',
      },
      {
        question: 'Is the Caption Template Builder free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your drafts are processed locally without being uploaded.',
      },
      {
        question: 'What is the PAS template in the Caption Template Builder?',
        answer:
          'PAS stands for Problem–Agitate–Solution: name the reader’s problem, sharpen why it hurts, then present your solution and call-to-action.',
      },
      {
        question: 'Which caption templates does this builder include?',
        answer:
          'It includes five templates: Problem–Agitate–Solution, Actionable Breakdown, Before–After–Bridge, Audit Checklist, and Myth vs. Reality.',
      },
      {
        question: 'Can I use the Caption Template Builder for LinkedIn posts?',
        answer:
          'Yes, the structured hook, takeaways, and call-to-action layout works well for LinkedIn, and the live counter helps you stay within its limits.',
      },
      {
        question: 'Can I use the Caption Template Builder for Instagram captions?',
        answer:
          'Yes, the templates format cleanly for Instagram captions, and you can add hashtags at the end of the built caption.',
      },
      {
        question: 'What is the Before–After–Bridge caption template?',
        answer:
          'It shows the reader’s current situation, paints the improved after-state, then bridges the gap with your product, method, or advice.',
      },
      {
        question: 'How does the character counter work in the caption builder?',
        answer:
          'It counts characters and words live as you type and flags when your draft passes limits like X’s 280 characters.',
      },
      {
        question: 'Can I switch templates without losing my text?',
        answer:
          'Yes, switching templates reuses your existing hook, points, and call-to-action, so you can compare structures without retyping.',
      },
      {
        question: 'Does the builder add hashtags automatically?',
        answer:
          'No, it only places the hashtags you enter yourself, so you control exactly which tags appear with each caption.',
      },
      {
        question: 'What makes a good hook for a social media caption?',
        answer:
          'A good hook states a clear benefit, surprising fact, or relatable problem in one short line that makes the reader stop scrolling.',
      },
      {
        question: 'Can I use the caption builder for X (Twitter) posts?',
        answer:
          'Yes, the counter warns you at 280 characters, so you can trim your hook and takeaways until the post fits a single tweet.',
      },
      {
        question: 'What is the Myth vs. Reality caption template for?',
        answer:
          'It pairs a common misconception with the correct fact, which works well for educational posts and debunking bad advice in your niche.',
      },
      {
        question: 'Can I edit the caption after copying it?',
        answer:
          'Yes, the copied text is plain text, so you can tweak wording, emojis, or line breaks in your scheduling app before publishing.',
      },
      {
        question: 'Does the builder save my captions?',
        answer:
          'No, drafts live only in your browser tab, so copy finished captions to your own notes or scheduler before closing the page.',
      },
      {
        question: 'What should I put in the call-to-action field?',
        answer:
          'Write one clear next step, such as commenting, saving the post, clicking your link, or following your account.',
      },
      {
        question: 'Can I use the caption builder for product launch announcements?',
        answer:
          'Yes, the PAS or Before–After–Bridge templates are a good fit for launches: state the problem, show the result, and end with where to get it.',
      },
      {
        question: 'Why does the builder not rewrite or improve my wording?',
        answer:
          'It is deliberately deterministic, so your voice and facts stay exactly as you wrote them instead of being replaced by generic generated copy.',
      },
    ],
  },
  'social-handle-formatter': {
    instructions: [
      {
        title: 'Enter brand or creator name',
        description:
          'Type your brand or display name (e.g. Utility Hub) to populate clean consistent handle candidates.',
      },
      {
        title: 'Test variations or edit directly',
        description:
          'Click any variation pill or customize Active Handle to test prefixes/suffixes like get, use, hq, or studio.',
      },
      {
        title: 'Review syntax compliance per platform',
        description:
          'Check the Valid format status for each candidate across X, Instagram, TikTok, YouTube, Threads, and GitHub.',
      },
      {
        title: 'Fix invalid characters',
        description:
          'If a platform flags a handle, remove the disallowed character — for example, drop hyphens for X and Instagram, or underscores for GitHub.',
      },
      {
        title: 'Review syntax compliance and open URLs',
        description:
          'Check Valid format status across X, Instagram, TikTok, YouTube, Threads, and GitHub, then click Check URL to inspect live claim status.',
      },
      {
        title: 'Tip: copy your shortlist before claiming',
        description:
          'Copy the handles that pass on every platform you care about, then claim them one by one, starting with the network where your audience is largest.',
      },
    ],
    examples: [
      {
        title: 'Comparing hyphenated vs underscored handles across platforms',
        input: 'Handle: utility-hub',
        output: 'Valid on GitHub & YouTube @handle · Invalid on X & Instagram (hyphens disallowed)',
        explanation: 'Prevents choosing a brand handle that cannot match identically on major social networks.',
      },
    ],
    benefits: [
      'Catches platform mismatches early (like hyphens failing on X/Instagram vs allowed on GitHub/YouTube)',
      'Enforces exact character bounds such as X’s strict 15-character maximum',
      'Never fakes live availability badges offline—provides direct clickable profile links instead',
      'Includes one-click @handle clipboard copying',
    ],
    useCases: [
      'Naming a new startup, podcast, newsletter, or open-source project consistently',
      'Finding backup prefixes/suffixes when an exact single-word handle is taken',
      'Checking whether a proposed 18-character handle exceeds X’s 15-character cap',
      'Preparing a launch checklist of all official social profile URLs',
    ],
    faqs: [
      {
        question: 'Why doesn’t this tool show live green "Available" badges automatically?',
        answer:
          'Major social networks block unauthenticated browser CORS checks and rate-limit automated availability scraping. Rather than displaying unreliable or fabricated guesses, this tool validates official platform syntax rules locally and gives direct URL links to check each platform accurately.',
      },
      {
        question: 'Which handle characters work across almost every major network?',
        answer:
          'Lowercase alphanumeric characters (a–z, 0–9) and underscores (_) within 4–15 characters work simultaneously across X, Instagram, TikTok, YouTube, and Threads.',
      },
      {
        question: 'Why does GitHub reject underscores in handles?',
        answer:
          'GitHub usernames only allow alphanumeric characters and single non-leading/non-trailing hyphens, whereas X and Instagram disallow hyphens.',
      },
      {
        question: 'Is the Social Handle Formatter free to use?',
        answer:
          'Yes, it is free to use in your browser with no sign-up, and your brand names and handle ideas are processed locally without being uploaded.',
      },
      {
        question: 'What is the maximum handle length on X?',
        answer:
          'X usernames can be at most 15 characters long, so this tool flags any candidate longer than that for X.',
      },
      {
        question: 'How do I check if a social handle is actually available?',
        answer:
          'Click the Check URL link for each platform to open the live profile page; if the page shows a real profile, the handle is taken.',
      },
      {
        question: 'Why do hyphens work on GitHub but not on X or Instagram?',
        answer:
          'Each platform sets its own allowed characters: GitHub permits hyphens, while X and Instagram only allow letters, numbers, and underscores.',
      },
      {
        question: 'What handle prefixes should I try if my exact name is taken?',
        answer:
          'Common prefixes and suffixes include get, use, the, hq, studio, official, and app — the tool generates these variations for you to test.',
      },
      {
        question: 'Can the Social Handle Formatter check YouTube handles?',
        answer:
          'Yes, it validates candidates against YouTube’s @handle character rules and gives you a direct link to check the handle’s live status.',
      },
      {
        question: 'What is the minimum handle length on most platforms?',
        answer:
          'Most platforms require at least a few characters, and handles that work across X, Instagram, TikTok, YouTube, and Threads are usually 4–15 characters.',
      },
      {
        question: 'Should my handle match on every social platform?',
        answer:
          'Matching handles make your brand easier to find and harder to impersonate, so aim for one handle that passes the rules on every platform you use.',
      },
      {
        question: 'Can I use numbers in my social handle?',
        answer:
          'Yes, numbers are allowed on all six platforms this tool checks, though starting a handle with a number can look less clean.',
      },
      {
        question: 'Why does the tool say my handle is valid but the platform rejects it?',
        answer:
          'Syntax validity is only one check; the platform may also reject a handle because it is already taken, reserved, or blocked for policy reasons.',
      },
      {
        question: 'Does the Social Handle Formatter check Threads handles?',
        answer:
          'Yes, it validates candidates against Threads username rules alongside X, Instagram, TikTok, YouTube, and GitHub.',
      },
      {
        question: 'Can I use dots or periods in a social handle?',
        answer:
          'Instagram allows periods in usernames, but X, TikTok, and GitHub do not, so a handle with dots will not match everywhere.',
      },
      {
        question: 'How do I pick a handle for a new startup or podcast?',
        answer:
          'Enter your brand name, shortlist the variations that pass on every platform, then claim the same one everywhere before announcing it.',
      },
      {
        question: 'Can I test a handle with underscores on GitHub?',
        answer:
          'You can test it, but GitHub will reject underscores, so the tool flags it as invalid for GitHub even if it passes on X and Instagram.',
      },
      {
        question: 'Are my brand name ideas uploaded to a server?',
        answer:
          'No, all handle generation and validation happens locally in your browser, so your naming ideas never leave your device.',
      },
      {
        question: 'What should I do if my ideal handle is taken on one platform?',
        answer:
          'Try a consistent prefix or suffix across all platforms instead of a different name on one network, so your brand stays easy to find.',
      },
      {
        question: 'Can I copy a handle directly from the tool?',
        answer:
          'Yes, the tool includes one-click copying for the active handle, so you can paste it into sign-up forms without retyping.',
      },
    ],
  },
};
