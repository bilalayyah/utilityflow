import type { ToolLocaleOverride } from '../../types';

/**
 * Hindi overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6SeoTools.ts,
 *         src/registry/batches/batch7ImageFileTools.ts.
 * Original Hindi, SEO-optimized for Hindi search intent. Slugs are
 * romanized (Latin) — what Hindi speakers actually type into Google.
 */
export const HI_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-tags-banaye',
    name: 'मेटा टैग जनरेटर',
    shortDescription:
      'टाइटल, मेटा डिस्क्रिप्शन, कैनोनिकल, रोबोट्स, Open Graph और Twitter/X Card टैग बनाएँ, लाइव कार्ड प्रीव्यू के साथ।',
    keywords: [
      'meta tag generator',
      'meta tags kaise banaye',
      'open graph generator',
      'twitter card generator',
      'seo meta tags',
      'meta description generator',
      'html meta tags kaise banaye',
      'og tags generator',
      'website meta tags kaise lagaye',
    ],
    seo: {
      title: 'मेटा टैग जनरेटर – Open Graph और SEO टैग | UtilityFlow',
      description:
        'टाइटल, डिस्क्रिप्शन और कैनोनिकल URL के साथ Open Graph और Twitter Card टैग बनाएँ। लंबाई की लाइव जाँच और सोशल प्रीव्यू — फ्री, ब्राउज़र में ही, बिना साइन-अप।',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'meta tags kaise banaye',
        'open graph generator',
        'twitter card generator',
        'meta description generator',
      ],
      longTailKeywords: [
        'website ke liye meta tags kaise banaye free me',
        'open graph aur twitter card tags kaise banaye',
        'meta title description length kaise check kare',
        'html head seo tags copy paste kaise kare',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'स्टैंडर्ड के हिसाब से सही HTML <head> मेटाडेटा बनाएँ — <title>, <meta name="description">, कैनोनिकल URL, इंडेक्सिंग नियम, Open Graph (og:*) टैग और Twitter/X Card मार्कअप, एट्रिब्यूट एस्केपिंग और लाइव सोशल कार्ड प्रीव्यू के साथ।',
  },
  'serp-snippet-preview': {
    slug: 'google-serp-preview',
    name: 'Google SERP स्निपेट प्रीव्यू',
    shortDescription:
      'डेस्कटॉप और मोबाइल पर Google सर्च रिज़ल्ट का प्रीव्यू देखें — टाइटल की असली पिक्सल-चौड़ाई की जाँच और कीवर्ड हाइलाइट के साथ।',
    keywords: [
      'serp preview',
      'google serp preview tool',
      'google search result preview',
      'seo title length checker',
      'meta description preview',
      'google snippet preview',
      'serp checker online',
      'google me title kaise dikhega',
      'seo snippet preview tool',
    ],
    seo: {
      title: 'Google SERP प्रीव्यू – सर्च रिज़ल्ट देखें | UtilityFlow',
      description:
        'पब्लिश करने से पहले डेस्कटॉप और मोबाइल पर अपना Google सर्च स्निपेट देखें। टाइटल की पिक्सल-चौड़ाई और कटने की चेतावनी के साथ, बोल्ड कीवर्ड हाइलाइट भी — फ्री।',
      primaryKeyword: 'serp preview',
      secondaryKeywords: [
        'google serp preview tool',
        'google search result preview',
        'seo title length checker',
        'meta description preview',
      ],
      longTailKeywords: [
        'google me mera title kaise dikhega check kare',
        'seo title 580px width me aayega ya nahi',
        'mobile aur desktop serp preview kaise dekhe',
        'meta description google me cut to nahi hogi check kare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अंदाज़े से नहीं — HTML5 Canvas से लाइव फ़ॉन्ट मेज़रमेंट के साथ जाँचें कि आपका SEO टाइटल Google के करीब 580 px के डिस्प्ले बजट में आता है या नहीं, और डेस्कटॉप व मोबाइल सर्च कार्ड का प्रीव्यू बोल्ड कीवर्ड हाइलाइट के साथ देखें।',
  },
  'xml-sitemap-generator': {
    slug: 'sitemap-generator',
    name: 'XML साइटमैप जनरेटर',
    shortDescription:
      'URL की लिस्ट से Sitemaps.org के हिसाब से सही sitemap.xml फ़ाइल बनाएँ — डुप्लिकेट हटाएँ, lastmod और changefreq के साथ।',
    keywords: [
      'sitemap generator',
      'xml sitemap generator',
      'sitemap kaise banaye',
      'sitemap.xml kaise banaye',
      'website sitemap generator',
      'free sitemap generator',
      'sitemap maker online',
      'sitemap xml file kaise banaye',
      'seo sitemap tool',
    ],
    seo: {
      title: 'XML साइटमैप जनरेटर – वेबसाइट के लिए फ्री | UtilityFlow',
      description:
        'कैनोनिकल URL की लिस्ट को तुरंत सही sitemap.xml में बदलें — डुप्लिकेट हटाएँ, lastmod तारीख़ें और changefreq सुझाव के साथ, ब्राउज़र में ही, पूरी तरह फ्री।',
      primaryKeyword: 'sitemap generator',
      secondaryKeywords: [
        'xml sitemap generator',
        'sitemap kaise banaye',
        'sitemap.xml kaise banaye',
        'website sitemap generator',
      ],
      longTailKeywords: [
        'website ke liye sitemap xml kaise banaye free me',
        'url list se sitemap xml generate kare',
        'sitemap me lastmod aur changefreq kaise lagaye',
        'chhoti website ke liye sitemap kaise banaye online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'किसी भी कैनोनिकल https:// URL लिस्ट को Sitemaps 0.9 स्कीमा के हिसाब से सही sitemap.xml में बदलें — गलत URL छाँटें, डुप्लिकेट अपने-आप हटाएँ, XML कैरेक्टर एस्केप करें और .xml फ़ाइल एक्सपोर्ट करें।',
  },
  'robots-txt-generator': {
    slug: 'robots-txt-banaye',
    name: 'Robots.txt जनरेटर',
    shortDescription:
      'User-agent के हिसाब से ग्रुप किए गए सही robots.txt नियम बनाएँ — Allow/Disallow पाथ, Crawl-delay और Sitemap डायरेक्टिव के साथ।',
    keywords: [
      'robots.txt generator',
      'robots txt kaise banaye',
      'robots.txt file kaise banaye',
      'allow disallow robots txt',
      'robots txt generator free',
      'robots.txt kya hai',
      'sitemap robots txt',
      'robots txt maker',
      'website robots txt kaise banaye',
    ],
    seo: {
      title: 'Robots.txt जनरेटर – क्रॉलर नियम बनाएँ | UtilityFlow',
      description:
        'User-agent ग्रुप, Allow/Disallow नियम, crawl-delay और sitemap लिंक के साथ सही robots.txt बनाएँ। तैयार टेम्पलेट के साथ — फ्री, ब्राउज़र में ही, बिना साइन-अप।',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt kaise banaye',
        'robots.txt file kaise banaye',
        'allow disallow robots txt',
        'robots txt generator free',
      ],
      longTailKeywords: [
        'website ke liye robots txt file kaise banaye',
        'robots txt me sitemap kaise add kare',
        'robots txt se crawler ko kaise block kare',
        'wordpress ke liye robots txt kaise banaye',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'खुली वेबसाइट, SaaS ऐप, WordPress या टेस्टिंग ब्लॉक करने के लिए तैयार टेम्पलेट से साफ़ robots.txt डायरेक्टिव बनाएँ — User-agent, Allow/Disallow, Crawl-delay और Sitemap: वाली पंक्तियों के साथ।',
  },
  'schema-markup-generator': {
    slug: 'json-ld-schema-generator',
    name: 'JSON-LD स्कीमा मार्कअप जनरेटर',
    shortDescription:
      'Article, FAQPage, Product, Organization और BreadcrumbList के लिए Schema.org के सही JSON-LD स्क्रिप्ट बनाएँ।',
    keywords: [
      'schema markup generator',
      'json ld generator',
      'structured data generator',
      'faq schema generator',
      'schema.org json ld',
      'rich snippet schema',
      'json ld kaise banaye',
      'structured data kya hai',
      'breadcrumb schema generator',
    ],
    seo: {
      title: 'JSON-LD स्कीमा जनरेटर – Structured Data | UtilityFlow',
      description:
        'Article, FAQPage, Product, Organization और BreadcrumbList के लिए सही Schema.org JSON-LD बनाएँ। सुरक्षित HTML एस्केप, स्क्रिप्ट कॉपी और .jsonld एक्सपोर्ट के साथ।',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json ld generator',
        'structured data generator',
        'faq schema generator',
        'schema.org json ld',
      ],
      longTailKeywords: [
        'website ke liye json ld schema kaise banaye free me',
        'faqpage structured data kaise banaye',
        'article aur product schema kaise generate kare',
        'json ld script html me kaise lagaye',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Article, FAQPage, Product, Organization और BreadcrumbList के लिए Schema.org के साफ़ JSON-LD ब्लॉक बनाएँ — डायनामिक रो बिल्डर, स्क्रिप्ट टैग में < का सुरक्षित एस्केप और .jsonld एक्सपोर्ट के साथ।',
  },
  'url-slug-generator': {
    slug: 'slug-generator',
    name: 'URL स्लग जनरेटर',
    shortDescription:
      'आर्टिकल के टाइटल को साफ़, SEO-अनुकूल URL स्लग में बदलें — एक्सेंट ट्रांसलिटरेशन, बैच मोड और स्टॉप वर्ड हटाने के साथ।',
    keywords: [
      'slug generator',
      'url slug kaise banaye',
      'seo friendly url kaise banaye',
      'blog title to slug',
      'permalink generator',
      'slug maker online',
      'url slug generator free',
      'seo url kaise banaye',
      'title se slug kaise banaye',
    ],
    seo: {
      title: 'URL स्लग जनरेटर – SEO फ्रेंडली परमालिंक | UtilityFlow',
      description:
        'टाइटल को एक साथ कई SEO स्लग में बदलें — एक्सेंट को ASCII में बदलें, स्टॉप वर्ड हटाएँ और शब्द की सीमा पर सही लंबाई में काटें, पूरी तरह फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'slug generator',
      secondaryKeywords: [
        'url slug kaise banaye',
        'seo friendly url kaise banaye',
        'blog title to slug',
        'permalink generator',
      ],
      longTailKeywords: [
        'blog title ko seo friendly slug me kaise badle',
        'ek sath kai slug kaise banaye online',
        'hindi title ka url slug kaise banaye',
        'slug se stop words kaise hataye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'एक पोस्ट या पूरे कंटेंट कैलेंडर के लिए पढ़ने में आसान, हाइफ़न वाले परमालिंक स्टैंडर्ड करें। एक्सेंट को साफ़ ASCII में बदलें (Café → cafe), चाहें तो बेकार स्टॉप वर्ड हटाएँ, शब्द के बीच में कटे बिना लंबाई सीमित करें और पूरी URL का प्रीव्यू देखें।',
  },
  'keyword-density-checker': {
    slug: 'keyword-density-check-kare',
    name: 'कीवर्ड डेंसिटी चेकर',
    shortDescription:
      'शब्द गिनती, टारगेट कीवर्ड डेंसिटी, पढ़ने का समय और 1, 2 व 3 शब्दों वाले टॉप फ्रेज़ की फ्रीक्वेंसी — सब कुछ लोकल जाँचें।',
    keywords: [
      'keyword density checker',
      'keyword density kaise check kare',
      'keyword density kya hoti hai',
      'seo content analyzer',
      'keyword density tool free',
      'keyword frequency checker',
      'keyword density kaise nikale',
      'content seo check kaise kare',
      'keyword stuffing check',
    ],
    seo: {
      title: 'कीवर्ड डेंसिटी चेकर – SEO कंटेंट जाँचें | UtilityFlow',
      description:
        'ड्राफ़्ट या HTML पेस्ट करके शब्द गिनती, पढ़ने का समय, टारगेट कीवर्ड डेंसिटी और 1, 2 व 3 शब्दों के फ्रेज़ तुरंत जाँचें — ब्राउज़र में ही, पूरी तरह फ्री।',
      primaryKeyword: 'keyword density checker',
      secondaryKeywords: [
        'keyword density kaise check kare',
        'keyword density kya hoti hai',
        'seo content analyzer',
        'keyword density tool free',
      ],
      longTailKeywords: [
        'blog ki keyword density kaise check kare online',
        'keyword stuffing kaise check kare free me',
        'html paste karke keyword density kaise nikale',
        'keyword density kitni honi chahiye seo ke liye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'कंटेंट ड्राफ़्ट या पेस्ट किए गए HTML को जाँचें — शब्दावली की गहराई, पढ़ने का समय, टारगेट फ्रेज़ के सटीक मैच और 1, 2 व 3 शब्दों वाले टॉप n-gram की फ्रीक्वेंसी देखें। यह पुराने कीवर्ड कोटा के पीछे भागने के बजाय अनजाने में दोहराए गए शब्द पकड़ने के लिए बना है।',
  },
  'canonical-hreflang-generator': {
    slug: 'hreflang-generator',
    name: 'कैनोनिकल और Hreflang जनरेटर',
    shortDescription:
      'मल्टीलिंगुअल पेजों के लिए hreflang और कैनोनिकल टैग बनाएँ, और Cloudflare Pages, Apache व Nginx के लिए 301 रीडायरेक्ट तैयार करें।',
    keywords: [
      'hreflang generator',
      'canonical tag generator',
      '301 redirect generator',
      'hreflang tags kaise banaye',
      'canonical url kaise banaye',
      'cloudflare redirect rules',
      'multilingual seo tags',
      'hreflang kya hai',
      '301 redirect kaise banaye',
    ],
    seo: {
      title: 'Hreflang जनरेटर – कैनोनिकल और 301 रीडायरेक्ट | UtilityFlow',
      description:
        'मल्टीलिंगुअल पेजों के लिए hreflang और कैनोनिकल टैग बनाएँ, और Cloudflare Pages, Apache व Nginx के लिए 301 रीडायरेक्ट नियम तैयार करें — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'hreflang generator',
      secondaryKeywords: [
        'canonical tag generator',
        '301 redirect generator',
        'hreflang tags kaise banaye',
        'canonical url kaise banaye',
      ],
      longTailKeywords: [
        'multilingual website ke liye hreflang tags kaise banaye',
        'cloudflare pages ke liye 301 redirect kaise banaye',
        'canonical tag kya hai aur kaise lagaye',
        'hreflang x-default tag kaise banaye',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'टेक्निकल SEO की दो ज़रूरी चीज़ें एक ही जगह — कई रीजन के hreflang + canonical एनोटेशन (HTML <head> और XML साइटमैप दोनों के लिए) बनाएँ, या पुरानी URL की लिस्ट को Cloudflare Pages, Apache और Nginx के लिए तैयार 301 रीडायरेक्ट नियमों में बदलें।',
  },
  'on-page-seo-checker': {
    slug: 'on-page-seo-check-kare',
    name: 'ऑन-पेज SEO चेकर',
    shortDescription:
      'पेस्ट किए गए HTML सोर्स को ब्राउज़र में ही ऑडिट करें — टाइटल लंबाई, मेटा डिस्क्रिप्शन, H1–H4 क्रम, alt टेक्स्ट और JSON-LD।',
    keywords: [
      'on page seo checker',
      'on page seo kaise check kare',
      'seo audit tool free',
      'html seo checker',
      'seo checker online free',
      'website seo check kaise kare',
      'on page seo kya hai',
      'meta title length checker',
      'seo audit kaise kare',
    ],
    seo: {
      title: 'ऑन-पेज SEO चेकर – HTML ऑडिट टूल फ्री | UtilityFlow',
      description:
        'किसी भी पेज का HTML पेस्ट करके टाइटल, मेटा डिस्क्रिप्शन, हेडिंग, कैनोनिकल, alt टेक्स्ट और JSON-LD तुरंत ऑडिट करें — फ्री, ब्राउज़र में ही, बिना साइन-अप।',
      primaryKeyword: 'on page seo checker',
      secondaryKeywords: [
        'on page seo kaise check kare',
        'seo audit tool free',
        'html seo checker',
        'seo checker online free',
      ],
      longTailKeywords: [
        'website ka on page seo kaise check kare free me',
        'html paste karke seo audit kaise kare',
        'h1 h2 heading structure kaise check kare',
        'meta title aur description length kaise check kare',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'किसी भी पेज के HTML सोर्स (View Page Source) को सीधे अपने ब्राउज़र में DOM लेवल पर ऑडिट करें — <title>, मेटा डिस्क्रिप्शन, कैनोनिकल, H1–H4 हेडिंग क्रम, इमेज में गायब alt टेक्स्ट, इंटरनल/एक्सटर्नल लिंक, Open Graph और JSON-LD, सब कुछ एक साथ।',
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-tag-banaye',
    name: 'रोबोट्स मेटा टैग जनरेटर',
    shortDescription:
      'noindex, nofollow, noarchive, max-snippet और max-image-preview वाले रोबोट्स टैग और Cloudflare _headers नियम बनाएँ।',
    keywords: [
      'robots meta tag generator',
      'noindex tag kaise lagaye',
      'nofollow meta tag',
      'x-robots-tag generator',
      'max-image-preview large',
      'robots meta tag kya hai',
      'noindex nofollow kaise lagaye',
      'cloudflare headers robots',
      'meta robots tag generator',
    ],
    seo: {
      title: 'रोबोट्स मेटा टैग जनरेटर – Noindex और X-Robots | UtilityFlow',
      description:
        'noindex, nofollow, max-snippet और max-image-preview वाले HTML रोबोट्स टैग और X-Robots-Tag हेडर बनाएँ, Cloudflare _headers आउटपुट के साथ — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'noindex tag kaise lagaye',
        'nofollow meta tag',
        'x-robots-tag generator',
        'max-image-preview large',
      ],
      longTailKeywords: [
        'pdf ke liye x-robots-tag noindex kaise banaye',
        'noindex nofollow meta tag kaise lagaye',
        'max-snippet aur max-image-preview large kaise set kare',
        'robots txt aur meta robots me kya farak hai',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'पेज लेवल पर क्रॉलर के सही निर्देश बनाएँ — index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet और max-image-preview:large — एक साथ HTML <meta name="robots"> टैग, HTTP X-Robots-Tag हेडर और Cloudflare Pages _headers ब्लॉक के रूप में।',
  },
  'image-compressor': {
    slug: 'image-compress-kare',
    name: 'इमेज कंप्रेसर',
    shortDescription:
      'PNG, JPG और WebP इमेज को ब्राउज़र में ही छोटा करें — क्वालिटी कंट्रोल, ज़्यादा से ज़्यादा चौड़ाई और तुरंत बाइट बचत के साथ।',
    keywords: [
      'image compressor',
      'image compress kaise kare',
      'photo compress online',
      'jpg compress kaise kare',
      'image size kam kaise kare',
      'photo size reduce kaise kare',
      'png compress online free',
      'image ko chhota kaise kare',
      'webp compressor',
    ],
    seo: {
      title: 'इमेज कंप्रेस करें – PNG, JPG, WebP फ्री | UtilityFlow',
      description:
        'इमेज को ब्राउज़र में ही कंप्रेस करें — क्वालिटी सेट करें, ज़्यादा चौड़ाई सीमित करें, पहले-बाद का साइज़ देखें और डाउनलोड करें। कोई अपलोड नहीं, पूरी तरह फ्री।',
      primaryKeyword: 'image compressor',
      secondaryKeywords: [
        'image compress kaise kare',
        'photo compress online',
        'jpg compress kaise kare',
        'image size kam kaise kare',
      ],
      longTailKeywords: [
        'website ke liye image size kam kaise kare bina upload kiye',
        'jpg photo ko webp me compress kaise kare',
        'badi image ko chhota kaise kare online free',
        'email ke liye photo size kaise kam kare',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'भारी PNG, JPG और WebP इमेज को तेज़ पेज लोड और हल्के ईमेल अटैचमेंट के लिए सीधे ब्राउज़र में छोटा करें — लॉसी कंप्रेशन की क्वालिटी सेट करें, चौड़ाई की सीमा लगाएँ और बाइट में हुई असली बचत देखें, बिना कोई फ़ाइल सर्वर पर भेजे।',
  },
  'image-resizer': {
    slug: 'image-resize-kare',
    name: 'इमेज रीसाइज़र',
    shortDescription:
      'इमेज को एकदम सही पिक्सल साइज़ में बदलें — सोशल और OG प्रीसेट, आस्पेक्ट रेशियो लॉक, सेंटर क्रॉप और PNG/JPG/WebP एक्सपोर्ट के साथ।',
    keywords: [
      'image resizer',
      'image resize kaise kare',
      'photo resize online',
      'image size change kaise kare',
      'photo ko 1200x630 kaise kare',
      'image ko square kaise kare',
      'instagram photo resize',
      'image resizer online free',
      'photo ka size kaise badle',
    ],
    seo: {
      title: 'इमेज रीसाइज़ करें – सही पिक्सल साइज़ में | UtilityFlow',
      description:
        'फोटो को एकदम सही पिक्सल में रीसाइज़ करें — प्रीसेट चुनें, आस्पेक्ट रेशियो लॉक करें, सेंटर क्रॉप करें और PNG, JPG या WebP में एक्सपोर्ट करें, प्राइवेट और फ्री।',
      primaryKeyword: 'image resizer',
      secondaryKeywords: [
        'image resize kaise kare',
        'photo resize online',
        'image size change kaise kare',
        'photo ko 1200x630 kaise kare',
      ],
      longTailKeywords: [
        'image ko 1200x630 open graph size me kaise kare',
        'photo ko 1080x1080 square kaise kare instagram ke liye',
        'image ka width height pixel me kaise badle',
        'bina stretch kiye photo resize kaise kare',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'ग्राफ़िक्स और फोटो को एकदम सही पिक्सल साइज़ में बदलें — Open Graph (1200×630), YouTube HD (1280×720), स्क्वायर (1080×1080) और अवतार (512×512) के बने-बनाए प्रीसेट से, हाई-क्वालिटी Canvas रीसैंपलिंग और बिना खिंचाव के सेंटर कवर क्रॉप के साथ।',
  },
  'image-format-converter': {
    slug: 'image-format-badlein',
    name: 'इमेज फ़ॉर्मैट कन्वर्टर (PNG / JPG / WebP)',
    shortDescription:
      'PNG, JPG, WebP, GIF और SVG इमेज को एक साथ दूसरे फ़ॉर्मैट में बदलें — क्वालिटी कंट्रोल और JPEG के लिए बैकग्राउंड रंग के साथ।',
    keywords: [
      'image format converter',
      'png to jpg',
      'jpg to png',
      'webp to jpg',
      'png to webp converter',
      'image format kaise badle',
      'webp to png',
      'jpg to webp converter',
      'image converter online free',
    ],
    seo: {
      title: 'इमेज फ़ॉर्मैट बदलें – PNG, JPG, WebP | UtilityFlow',
      description:
        'इमेज को PNG, JPG और WebP के बीच तुरंत बदलें — एक साथ कई फ़ाइलें, JPG क्वालिटी सेट करें और ट्रांसपेरेंट बैकग्राउंड भरें, ब्राउज़र में ही, पूरी तरह फ्री।',
      primaryKeyword: 'image format converter',
      secondaryKeywords: [
        'png to jpg',
        'jpg to png',
        'webp to jpg',
        'png to webp converter',
      ],
      longTailKeywords: [
        'kai images ko ek sath webp me kaise badle',
        'webp screenshot ko png kaise banaye',
        'transparent png ko jpg me kaise badle background ke sath',
        'png se jpg format kaise change kare online',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'PNG, JPG, WebP, GIF और SVG फ़ाइलों को एक साथ वेब के लिए तैयार WebP, यूनिवर्सल JPG या बिना लॉस वाले ट्रांसपेरेंट PNG में बदलें — पूरी तरह ब्राउज़र में, और ट्रांसपेरेंसी को JPEG में बदलते समय अपनी पसंद का बैकग्राउंड रंग भरने के विकल्प के साथ।',
  },
  'image-rotate-flip': {
    slug: 'photo-rotate-kare',
    name: 'फोटो रोटेट और फ़्लिप करें',
    shortDescription:
      'इमेज को 90°/180°/270° घुमाएँ, हॉरिज़ॉन्टल या वर्टिकल फ़्लिप करें और ग्रेस्केल, ब्राइटनेस व कॉन्ट्रास्ट फ़िल्टर लाइव लगाएँ।',
    keywords: [
      'photo rotate kaise kare',
      'image rotate online',
      'photo flip kaise kare',
      'image ko ulta kaise kare',
      'photo mirror kaise kare',
      'image grayscale kaise kare',
      'photo brightness kaise badhaye',
      'image rotate 90 degree',
      'photo straight kaise kare',
    ],
    seo: {
      title: 'फोटो रोटेट करें – घुमाएँ और फ़्लिप करें | UtilityFlow',
      description:
        'इमेज को ऑनलाइन 90, 180 या 270 डिग्री घुमाएँ, फोटो को हॉरिज़ॉन्टल या वर्टिकल फ़्लिप करें और ब्राइटनेस, कॉन्ट्रास्ट व ग्रेस्केल सेट करें — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'photo rotate kaise kare',
      secondaryKeywords: [
        'image rotate online',
        'photo flip kaise kare',
        'image ko ulta kaise kare',
        'photo mirror kaise kare',
      ],
      longTailKeywords: [
        'tedhi photo ko 90 degree seedha kaise kare online',
        'selfie ko mirror flip kaise kare bina app ke',
        'photo ko black and white grayscale kaise kare',
        'scan ki hui image ko seedha kaise kare',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'टेढ़ी फोटो की ओरिएंटेशन ठीक करें, सेल्फ़ी को हॉरिज़ॉन्टल या वर्टिकल मिरर करें, फोटो को ब्लैक-एंड-व्हाइट ग्रेस्केल में बदलें और ब्राइटनेस व कॉन्ट्रास्ट लाइव सेट करें — HTML5 Canvas 2D के लोकल ट्रांसफ़ॉर्म से।',
  },
  'image-to-base64': {
    slug: 'photo-to-base64',
    name: 'इमेज से Base64 कन्वर्टर',
    shortDescription:
      'PNG, JPG, WebP, SVG और ICO इमेज को Base64 Data URI, HTML <img> टैग और CSS नियमों में बदलें, या Base64 को वापस इमेज में देखें।',
    keywords: [
      'image to base64',
      'base64 image converter',
      'photo to base64 kaise kare',
      'base64 to image',
      'data uri generator',
      'base64 encoder online',
      'image base64 css',
      'png to base64',
      'base64 decode image',
    ],
    seo: {
      title: 'इमेज से Base64 बनाएँ – Data URI कन्वर्टर | UtilityFlow',
      description:
        'छोटे आइकन और लोगो को Base64 Data URI, HTML img टैग या CSS बैकग्राउंड में बदलें, या Base64 स्ट्रिंग को वापस इमेज प्रीव्यू में तुरंत देखें — पूरी तरह फ्री।',
      primaryKeyword: 'image to base64',
      secondaryKeywords: [
        'base64 image converter',
        'photo to base64 kaise kare',
        'base64 to image',
        'data uri generator',
      ],
      longTailKeywords: [
        'png icon ko css background data uri kaise banaye',
        'base64 string ko image preview me kaise dekhe',
        'chhote logo ko base64 me kaise badle html email ke liye',
        'image binary aur base64 size me kya farak hai',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'छोटे आइकन, लोगो और ईमेल ग्राफ़िक्स को खुद में पूरी data:image/...;base64,... URI, कॉपी करने लायक HTML <img> टैग और CSS background-image नियमों में बदलें — या दूसरा मोड चुनकर बिना प्रोसेस की गई Base64 इमेज स्ट्रिंग को देखकर डाउनलोड करें।',
  },
  'color-contrast-checker': {
    slug: 'color-contrast-check-kare',
    name: 'कलर कॉन्ट्रास्ट चेकर',
    shortDescription:
      'WCAG 2.1 AA/AAA के हिसाब से कलर कॉन्ट्रास्ट रेशियो जाँचें, HEX/RGB/HSL बदलें और अपलोड की गई इमेज से कलर पैलेट निकालें।',
    keywords: [
      'color contrast checker',
      'wcag contrast checker',
      'color contrast ratio check',
      'accessible color combinations',
      'hex to rgb converter',
      'color palette extractor',
      'contrast checker online',
      'text color contrast kaise check kare',
      'wcag aa contrast ratio',
    ],
    seo: {
      title: 'कलर कॉन्ट्रास्ट चेकर – WCAG AA/AAA जाँच | UtilityFlow',
      description:
        'टेक्स्ट और बैकग्राउंड के WCAG 2.1 AA और AAA कॉन्ट्रास्ट रेशियो जाँचें, HEX, RGB और HSL बदलें और इमेज से पैलेट निकालें — फ्री, ब्राउज़र में ही, बिना साइन-अप।',
      primaryKeyword: 'color contrast checker',
      secondaryKeywords: [
        'wcag contrast checker',
        'color contrast ratio check',
        'accessible color combinations',
        'hex to rgb converter',
      ],
      longTailKeywords: [
        'wcag 2.1 contrast ratio online kaise check kare',
        'text aur background ka contrast kitna hona chahiye',
        'image se dominant color palette kaise nikale',
        'dark mode ui ka color contrast kaise check kare',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'WCAG 2.1 के आधिकारिक नियमों (AA 4.5:1, AA लार्ज 3.0:1, AAA 7.0:1) के हिसाब से UI कलर पेयर जाँचें, सिंक किए हुए HEX/RGB/HSL मान बदलें और स्क्रीनशॉट या लोगो अपलोड करके उनमें से मुख्य HEX रंग सीधे अपने फ़ोरग्राउंड या बैकग्राउंड में लें।',
  },
  'qr-code-scanner': {
    slug: 'qr-code-scan-kare',
    name: 'QR कोड स्कैनर',
    shortDescription:
      'अपलोड की गई इमेज या डिवाइस कैमरे से QR कोड पढ़कर डिकोड करें — ब्राउज़र में ही, प्राइवेट; साथ में vCard QR बिल्डर भी।',
    keywords: [
      'qr code scanner',
      'qr code scan kaise kare',
      'qr code scanner online',
      'qr code kaise scan kare',
      'scan qr code from image',
      'qr code reader online',
      'qr code decode kaise kare',
      'laptop se qr code scan kare',
      'vcard qr code generator',
    ],
    seo: {
      title: 'QR कोड स्कैन करें – ऑनलाइन QR रीडर फ्री | UtilityFlow',
      description:
        'स्क्रीनशॉट, फोटो या वेबकैम से QR कोड स्कैन करके डिकोड करें — ब्राउज़र में ही, प्राइवेट। साथ में vCard कॉन्टैक्ट QR कोड भी बनाएँ, PNG और SVG में, फ्री।',
      primaryKeyword: 'qr code scanner',
      secondaryKeywords: [
        'qr code scan kaise kare',
        'qr code scanner online',
        'qr code kaise scan kare',
        'scan qr code from image',
      ],
      longTailKeywords: [
        'screenshot se qr code kaise scan kare online',
        'laptop webcam se qr code kaise scan kare bina app ke',
        'png jpg image se qr code kaise decode kare',
        'vcard contact qr code kaise banaye free me',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'स्क्रीनशॉट, फोटो या लाइव कैमरा फीड से QR कोड का कंटेंट सीधे अपने ब्राउज़र में पढ़ें — लोड अपने-आप पहचाना जाता है (URL, Wi-Fi, vCard, टेक्स्ट) — और साथ में vCard कॉन्टैक्ट QR बिल्डर से साफ़ PNG व SVG कॉन्टैक्ट कार्ड भी एक्सपोर्ट करें।',
  },
  'password-generator': {
    slug: 'password-banaye',
    name: 'सुरक्षित पासवर्ड जनरेटर',
    shortDescription:
      'crypto.getRandomValues से बिना बायस वाले रैंडम पासवर्ड और Diceware जैसे याद रखने लायक पासफ़्रेज़ बनाएँ, सटीक एंट्रॉपी के साथ।',
    keywords: [
      'password generator',
      'strong password kaise banaye',
      'secure password generator',
      'random password generator',
      'password banane ka tarika',
      'passphrase generator',
      'strong password generator online',
      'safe password kaise banaye',
      'password entropy checker',
    ],
    seo: {
      title: 'पासवर्ड जनरेटर – मज़बूत और सुरक्षित फ्री | UtilityFlow',
      description:
        'ब्राउज़र में ही मज़बूत रैंडम पासवर्ड और याद रखने लायक Diceware पासफ़्रेज़ बनाएँ। Web Crypto और सटीक एंट्रॉपी स्कोर के साथ — कुछ भी सेव नहीं होता, फ्री।',
      primaryKeyword: 'password generator',
      secondaryKeywords: [
        'strong password kaise banaye',
        'secure password generator',
        'random password generator',
        'password banane ka tarika',
      ],
      longTailKeywords: [
        'crypto getrandomvalues se secure password kaise banaye',
        '5 shabd wala diceware passphrase kaise banaye',
        '18 character password me kitni entropy hoti hai',
        'ambiguous character ke bina password kaise banaye',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'ब्राउज़र के हार्डवेयर वाले CSPRNG (window.crypto.getRandomValues) से 100% लोकल हाई-एंट्रॉपी पासवर्ड और कई शब्दों वाले याद रखने लायक पासफ़्रेज़ बनाएँ — मॉड्यूलो बायस हटाने के लिए रिजेक्शन सैंपलिंग और अंदाज़ा लगाने लायक कैरेक्टर पोज़िशन से बचने के लिए Fisher-Yates शफ़ल के साथ।',
  },
  'file-hash-verifier': {
    slug: 'file-hash-check-kare',
    name: 'फ़ाइल हैश वेरिफ़ायर',
    shortDescription:
      'Web Crypto से किसी भी फ़ाइल का SHA-256, SHA-512, SHA-384 और SHA-1 हैश लोकल निकालें और डाउनलोड की सच्चाई जाँचें।',
    keywords: [
      'file hash checker',
      'sha256 checker online',
      'file hash kaise check kare',
      'sha256 verify kaise kare',
      'hash verifier online',
      'file integrity check kaise kare',
      'sha256sum check',
      'download file verify kaise kare',
      'sha512 hash generator',
    ],
    seo: {
      title: 'फ़ाइल हैश वेरिफ़ायर – SHA-256 जाँचें | UtilityFlow',
      description:
        'किसी भी लोकल फ़ाइल का SHA-256, SHA-512, SHA-384 और SHA-1 हैश ब्राउज़र में ही निकालें और पब्लिश किए गए हैश से तुरंत मिलाएँ — कोई अपलोड नहीं, पूरी तरह फ्री।',
      primaryKeyword: 'file hash checker',
      secondaryKeywords: [
        'sha256 checker online',
        'file hash kaise check kare',
        'sha256 verify kaise kare',
        'hash verifier online',
      ],
      longTailKeywords: [
        'download kiye hue installer ka sha256 hash kaise check kare',
        'bina terminal ke file ka sha256 kaise nikale',
        'iso file ka sha256 verify kaise kare browser me',
        'file hash ko expected checksum se kaise milaye',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'सॉफ़्टवेयर इंस्टॉलर, फ़ाइल, डेटासेट और दस्तावेज़ की इंटीग्रिटी और असलियत लोकल ही जाँचें — Web Crypto के हार्डवेयर वाले subtle.digest से SHA-256, SHA-512, SHA-384 और SHA-1 हैश निकालकर उम्मीद वाले चेकसम से तुरंत मिलाएँ।',
  },
  'favicon-generator': {
    slug: 'favicon-banaye',
    name: 'फ़ैविकॉन जनरेटर',
    shortDescription:
      'मोनोग्राम बैज या अपलोड किए गए लोगो से कई साइज़ के PNG आइकन (16×16 से 512×512) और असली मल्टी-फ़्रेम favicon.ico बनाएँ।',
    keywords: [
      'favicon generator',
      'favicon kaise banaye',
      'favicon.ico kaise banaye',
      'website favicon generator',
      'favicon maker online free',
      'png to favicon',
      'apple touch icon generator',
      'pwa icon generator',
      'favicon banane ka tarika',
    ],
    seo: {
      title: 'फ़ैविकॉन जनरेटर – .ico और PNG आइकन बनाएँ | UtilityFlow',
      description:
        'अपने लोगो या मोनोग्राम से मल्टी-फ़्रेम favicon.ico और 16–512px PNG, Apple Touch व PWA आइकन बनाएँ — फ्री, ब्राउज़र में ही, बिना साइन-अप के, तुरंत डाउनलोड।',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'favicon kaise banaye',
        'favicon.ico kaise banaye',
        'website favicon generator',
        'favicon maker online free',
      ],
      longTailKeywords: [
        'website ke liye favicon ico kaise banaye free me',
        'logo se 16x16 32x32 48x48 favicon kaise banaye',
        'pwa ke liye 192x192 aur 512x512 icon kaise banaye',
        'text initials se favicon kaise banaye online',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'सेकंडों में साफ़ मोनोग्राम आइकन डिज़ाइन करें या अपना ब्रांड लोगो अपलोड करें — 16×16, 32×32, 48×48, Apple Touch 180×180 और PWA 192×192 / 512×512 के साफ़ PNG आइकन और स्टैंडर्ड वाला असली मल्टी-इमेज favicon.ico, पेस्ट करने लायक HTML <link> मार्कअप के साथ।',
  },
};
