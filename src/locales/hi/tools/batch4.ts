import type { ToolLocaleOverride } from '../../types';

/**
 * Hindi overrides — Batch 4: Social Media tools (10) + PDF tools (10).
 * Source: src/registry/batches/batch4SocialTools.ts,
 *         src/registry/batches/batch5PdfTools.ts.
 * Original Hindi, SEO-optimized for Hindi search intent. Slugs are
 * romanized (Latin) — what Hindi speakers actually type into Google.
 */
export const HI_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'qr-code-banaye',
    name: 'QR कोड जनरेटर',
    shortDescription:
      'वेबसाइट लिंक, टेक्स्ट, Wi-Fi पासवर्ड, ईमेल या फ़ोन नंबर के लिए स्कैन करने लायक QR कोड बनाएँ और PNG या SVG में डाउनलोड करें।',
    keywords: [
      'qr code kaise banaye',
      'qr code generator free',
      'wifi qr code generator',
      'qr code png download',
      'qr code maker online',
      'qr code banaye free me',
      'qr code svg download',
      'website ka qr code kaise banaye',
      'qr code kaise banaye mobile se',
    ],
    seo: {
      title: 'QR कोड जनरेटर – फ्री में QR कोड बनाएँ | UtilityFlow',
      description:
        'बिना साइन-अप के वेबसाइट, Wi-Fi, टेक्स्ट, ईमेल या फ़ोन नंबर का QR कोड बनाएँ। ब्राउज़र में ही बनता है, कोई एक्सपायरी नहीं, PNG और SVG में फ्री डाउनलोड करें।',
      primaryKeyword: 'qr code kaise banaye',
      secondaryKeywords: [
        'qr code generator free',
        'wifi qr code generator',
        'qr code png download',
        'qr code maker online',
      ],
      longTailKeywords: [
        'mobile se qr code kaise banaye free me',
        'wifi password ka qr code kaise banaye',
        'qr code png aur svg me download kare',
        'website link ka qr code kaise banaye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'वेबसाइट का लिंक, Wi-Fi पासवर्ड, टेक्स्ट, ईमेल या फ़ोन नंबर — किसी भी जानकारी को साफ़ और स्कैन करने लायक QR कोड में बदलें। यह सब आपके ब्राउज़र में ही होता है, बिना किसी एक्सपायरी या ट्रैकिंग रीडायरेक्ट के, और आप तैयार QR कोड को PNG या SVG में तुरंत डाउनलोड कर सकते हैं।',
  },
  'utm-link-builder': {
    slug: 'utm-link-banaye',
    name: 'UTM लिंक बिल्डर',
    shortDescription:
      'Google Analytics के लिए utm_source, utm_medium, utm_campaign, utm_term और utm_content वाले साफ़-सुथरे ट्रैकिंग लिंक बनाएँ।',
    keywords: [
      'utm link kaise banaye',
      'utm link builder',
      'utm generator free',
      'utm parameters kya hai',
      'google analytics utm link',
      'instagram bio utm link',
      'utm link maker online',
      'campaign url builder',
      'utm tracking link kaise banaye',
    ],
    seo: {
      title: 'UTM लिंक बिल्डर – कैंपेन ट्रैकिंग लिंक बनाएँ | UtilityFlow',
      description:
        'सोशल मीडिया, ईमेल और विज्ञापनों के लिए सही UTM पैरामीटर वाले कैंपेन लिंक बनाएँ। टेम्पलेट, छोटे अक्षर और पुराने पैरामीटर सुरक्षित — सब कुछ ब्राउज़र में, फ्री।',
      primaryKeyword: 'utm link kaise banaye',
      secondaryKeywords: [
        'utm link builder',
        'utm generator free',
        'google analytics utm link',
        'instagram bio utm link',
      ],
      longTailKeywords: [
        'google analytics ke liye utm link kaise banaye',
        'instagram bio ke liye utm link banaye',
        'email campaign ke liye utm tracking link banaye',
        'utm parameters ke sath campaign url kaise banaye',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'सोशल मीडिया बायो, ईमेल न्यूज़लेटर और पेड विज्ञापनों के लिए एक जैसे, साफ़ और स्टैंडर्ड UTM ट्रैकिंग लिंक बनाएँ। पुराने क्वेरी पैरामीटर और # सेक्शन वाले हिस्से सुरक्षित रहते हैं, और टेम्पलेट से हर बार सही फॉर्मेट मिलता है।',
  },
  'social-character-limit-checker': {
    slug: 'social-media-character-limit',
    name: 'सोशल मीडिया कैरेक्टर लिमिट चेकर',
    shortDescription:
      'X, Instagram, LinkedIn, TikTok, Threads, Bluesky और YouTube पर अपनी पोस्ट की लंबाई जाँचें, फीड में कटने का प्रीव्यू भी देखें।',
    keywords: [
      'instagram character limit',
      'twitter character limit',
      'instagram bio character limit',
      'linkedin post character limit',
      'tiktok caption limit',
      'x post character limit',
      'social media character counter',
      'threads character limit',
      'youtube description character limit',
    ],
    seo: {
      title: 'सोशल मीडिया कैरेक्टर लिमिट चेकर – फ्री टूल | UtilityFlow',
      description:
        'X, Instagram, LinkedIn, TikTok, Threads, Bluesky और YouTube की कैरेक्टर लिमिट जाँचें। फीड में कहाँ कटेगा, इसका प्रीव्यू, इमोजी गिनती और लिंक वेटेज देखें — फ्री।',
      primaryKeyword: 'instagram character limit',
      secondaryKeywords: [
        'twitter character limit',
        'linkedin post character limit',
        'social media character counter',
        'instagram bio character limit',
      ],
      longTailKeywords: [
        'instagram bio me kitne character likh sakte hai',
        'x twitter post character limit kitna hai',
        'linkedin post kitne character ki hoti hai',
        'tiktok caption character limit kya hai',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'एक बार लिखें और तुरंत देखें कि आपकी पोस्ट X, Instagram, LinkedIn, TikTok, Threads, Bluesky और YouTube की लिमिट में आती है या नहीं — X के 23 कैरेक्टर वाले t.co लिंक, इमोजी गिनती और फीड में "और देखें" के बाद कटने वाले हिस्से का प्रीव्यू भी साथ में।',
  },
  'unicode-fancy-text-formatter': {
    slug: 'stylish-text-generator',
    name: 'स्टाइलिश टेक्स्ट जनरेटर',
    shortDescription:
      'सादे टेक्स्ट को बोल्ड, इटैलिक, मोनोस्पेस, स्क्रिप्ट, स्मॉल कैप्स और फुलविड्थ यूनिकोड स्टाइल में बदलकर बायो के लिए कॉपी करें।',
    keywords: [
      'stylish text generator',
      'stylish font generator',
      'instagram stylish bio',
      'bold text generator',
      'fancy text generator',
      'stylish name generator',
      'instagram bio font style',
      'unicode bold text',
      'stylish text copy paste',
    ],
    seo: {
      title: 'स्टाइलिश टेक्स्ट जनरेटर – फैंसी फॉन्ट | UtilityFlow',
      description:
        'सादे टेक्स्ट को बोल्ड, इटैलिक, मोनोस्पेस, स्क्रिप्ट और स्मॉल कैप्स यूनिकोड स्टाइल में बदलें। Instagram, WhatsApp और Facebook बायो में कॉपी-पेस्ट करें — फ्री।',
      primaryKeyword: 'stylish text generator',
      secondaryKeywords: [
        'stylish font generator',
        'instagram stylish bio',
        'bold text generator',
        'fancy text generator',
      ],
      longTailKeywords: [
        'instagram bio ke liye stylish font kaise banaye',
        'whatsapp bio stylish text copy paste',
        'bold aur italic unicode text generator online',
        'stylish name font generator free me',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'सादे अक्षरों को यूनिकोड के बोल्ड, इटैलिक, मोनोस्पेस, स्क्रिप्ट, स्मॉल कैप्स और फुलविड्थ स्टाइल में बदलें — ये स्टाइल सादे टेक्स्ट वाली बायो में भी वैसे ही दिखते हैं, और आप इन्हें कॉपी करके Instagram, WhatsApp या LinkedIn पर कहीं भी पेस्ट कर सकते हैं।',
  },
  'bio-line-break-formatter': {
    slug: 'instagram-bio-line-break',
    name: 'Instagram बायो लाइन ब्रेक फॉर्मैटर',
    shortDescription:
      'Instagram बायो और कैप्शन में पैराग्राफ के बीच की खाली लाइनें बचाकर रखें — छिपे हुए स्पेस हटाएँ और इनविज़िबल स्पेसर जोड़ें।',
    keywords: [
      'instagram bio line break',
      'instagram bio me line break kaise kare',
      'instagram caption line break',
      'bio line break generator',
      'instagram bio spacing',
      'invisible character for instagram bio',
      'instagram bio me gap kaise de',
      'bio me line break kaise lagaye',
      'instagram caption spacing tool',
    ],
    seo: {
      title: 'Instagram बायो लाइन ब्रेक – स्पेसिंग टूल | UtilityFlow',
      description:
        'Instagram बायो और कैप्शन में पैराग्राफ की खाली लाइनें बचाएँ। छिपे हुए ट्रेलिंग स्पेस हटाएँ और इनविज़िबल स्पेसर से साफ़ फॉर्मेटिंग पाएँ — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'instagram bio line break',
      secondaryKeywords: [
        'instagram bio me line break kaise kare',
        'instagram caption line break',
        'bio line break generator',
        'invisible character for instagram bio',
      ],
      longTailKeywords: [
        'instagram bio me line break kaise lagaye',
        'instagram caption me gap kaise de',
        'bio me khali line kaise banaye',
        'instagram bio spacing tool online free',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'सोशल ऐप्स आपकी बायो और कैप्शन की खाली लाइनें अक्सर खत्म कर देते हैं। यह टूल छिपे हुए ट्रेलिंग स्पेस हटाकर और चाहें तो इनविज़िबल ब्रेल स्पेसर जोड़कर आपके पैराग्राफ का साफ़ फॉर्मेट बनाए रखता है।',
  },
  'youtube-timestamp-generator': {
    slug: 'youtube-chapter-banaye',
    name: 'YouTube चैप्टर और टाइमस्टैम्प जनरेटर',
    shortDescription:
      'YouTube वीडियो के लिए सही फॉर्मेट वाले चैप्टर और क्लिक करने लायक ?t= टाइमस्टैम्प लिंक बनाएँ, YouTube के नियमों के साथ वैलिडेटेड।',
    keywords: [
      'youtube timestamp generator',
      'youtube chapter kaise banaye',
      'youtube video chapters',
      'youtube timestamp link kaise banaye',
      'youtube description timestamp',
      'youtube chapters generator',
      'video timestamp maker',
      'youtube time stamp kaise lagaye',
      'youtube chapter timestamp format',
    ],
    seo: {
      title: 'YouTube चैप्टर जनरेटर – टाइमस्टैम्प बनाएँ | UtilityFlow',
      description:
        'YouTube वीडियो के चैप्टर 00:00 से शुरू करके सही फॉर्मेट में बनाएँ, 10 सेकंड के नियम के साथ वैलिडेट करें और शेयर करने लायक ?t= लिंक पाएँ — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'youtube timestamp generator',
      secondaryKeywords: [
        'youtube chapter kaise banaye',
        'youtube video chapters',
        'youtube timestamp link kaise banaye',
        'youtube chapters generator',
      ],
      longTailKeywords: [
        'youtube video me chapter kaise banaye',
        'youtube description me timestamp kaise lagaye',
        'youtube timestamp link kaise banaye share karne ke liye',
        'youtube chapter 00:00 se kaise shuru kare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अपने YouTube वीडियो के डिस्क्रिप्शन के लिए साफ़ और क्रम से लगे चैप्टर बनाएँ — YouTube के नियमों (00:00 से शुरुआत, कम से कम 3 चैप्टर, 10 सेकंड का गैप) के साथ अपने-आप वैलिडेटेड, और कमेंट, न्यूज़लेटर या शो नोट्स के लिए क्लिक करने लायक ?t= लिंक भी पाएँ।',
  },
  'social-thumbnail-previewer': {
    slug: 'youtube-thumbnail-preview',
    name: 'YouTube थंबनेल प्रीव्यू टूल',
    shortDescription:
      'थंबनेल और टाइटल को पब्लिश करने से पहले डेस्कटॉप और साइडबार फीड लेआउट में देखें, 16:9 और 2 MB की जाँच के साथ।',
    keywords: [
      'youtube thumbnail preview',
      'youtube thumbnail checker',
      'youtube thumbnail size checker',
      'thumbnail preview tool',
      'youtube thumbnail kaise check kare',
      'youtube title preview',
      'thumbnail test online',
      'youtube thumbnail 1280x720 checker',
      'video thumbnail preview',
    ],
    seo: {
      title: 'YouTube थंबनेल प्रीव्यू – पहले जाँचें | UtilityFlow',
      description:
        'पब्लिश करने से पहले थंबनेल और टाइटल को लाइट और डार्क YouTube फीड में देखें। 16:9, 1280×720 और 2 MB की जाँच करें, सब कुछ लोकल — कुछ भी अपलोड नहीं होता।',
      primaryKeyword: 'youtube thumbnail preview',
      secondaryKeywords: [
        'youtube thumbnail checker',
        'youtube thumbnail size checker',
        'thumbnail preview tool',
        'youtube title preview',
      ],
      longTailKeywords: [
        'youtube thumbnail publish karne se pehle kaise check kare',
        'dark mode me youtube thumbnail preview dekhe',
        'youtube thumbnail 1280x720 size check online',
        'youtube title kitna lamba dikhega preview kare',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'बिना पब्लिश किए अपने वीडियो के थंबनेल और टाइटल को असली जैसे मेन फीड और साइडबार लेआउट में आज़माएँ — लाइट और डार्क दोनों मोड में, 1280×720 HD साइज़, 16:9 रेशियो, 2 MB लिमिट और नीचे-दाएँ कोने में दिखने वाले ड्यूरेशन बैज की जाँच के साथ, पूरी तरह आपके ब्राउज़र में।',
  },
  'hashtag-formatter': {
    slug: 'hashtag-generator',
    name: 'हैशटैग जनरेटर और फॉर्मैटर',
    shortDescription:
      'बिखरे कीवर्ड को साफ़ हैशटैग में बदलें, डुप्लिकेट हटाएँ, #CamelCase फॉर्मेट करें और प्लेटफ़ॉर्म की लिमिट जाँचें।',
    keywords: [
      'hashtag generator',
      'instagram hashtag generator',
      'hashtag kaise banaye',
      'best hashtags for instagram',
      'hashtag formatter',
      'instagram hashtags copy paste',
      'hashtag maker online',
      'hashtag for reels',
      'duplicate hashtag remover',
    ],
    seo: {
      title: 'हैशटैग जनरेटर – Instagram के लिए बेस्ट टैग | UtilityFlow',
      description:
        'कीवर्ड की लिस्ट को बिना डुप्लिकेट वाले #CamelCase हैशटैग में बदलें। Instagram की 30 हैशटैग लिमिट जाँचें और ग्रुप को एक लाइन या पॉइंट से अलग करके पाएँ — फ्री।',
      primaryKeyword: 'hashtag generator',
      secondaryKeywords: [
        'instagram hashtag generator',
        'hashtag kaise banaye',
        'best hashtags for instagram',
        'hashtag formatter',
      ],
      longTailKeywords: [
        'instagram reels ke liye best hashtags kaise banaye',
        'hashtag list se duplicate kaise hataye',
        'camelcase hashtag kaise banaye',
        'instagram me kitne hashtag use kar sakte hai',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'कॉमा से अलग कीवर्ड या बिखरी टैग लिस्ट को बिना डुप्लिकेट और गलत पंक्चुएशन वाले साफ़ हैशटैग में बदलें — स्क्रीन रीडर के लिए आसान #CamelCase या छोटे अक्षरों में, एक लाइन, वर्टिकल या पॉइंट-सेपरेटर वाले ब्लॉक में तैयार।',
  },
  'caption-template-builder': {
    slug: 'instagram-caption-generator',
    name: 'Instagram कैप्शन और हुक टेम्पलेट बिल्डर',
    shortDescription:
      'PAS, ट्यूटोरियल, पहले-बाद-ब्रिज और चेकलिस्ट जैसे तयशुदा फ्रेमवर्क से सोशल मीडिया कैप्शन की साफ़ संरचना बनाएँ — बिना AI के।',
    keywords: [
      'instagram caption generator',
      'instagram caption kaise likhe',
      'best instagram captions',
      'caption template',
      'social media caption ideas',
      'linkedin post template',
      'instagram caption in hindi',
      'caption likhne ka tarika',
      'hook for instagram reels',
    ],
    seo: {
      title: 'Instagram कैप्शन जनरेटर – हुक टेम्पलेट | UtilityFlow',
      description:
        'PAS, ट्यूटोरियल, पहले-बाद-ब्रिज और चेकलिस्ट फ्रेमवर्क से साफ़ सोशल मीडिया कैप्शन बनाएँ। सिर्फ़ आपके अपने शब्द, कोई AI टेक्स्ट नहीं — फ्री, ब्राउज़र में ही।',
      primaryKeyword: 'instagram caption generator',
      secondaryKeywords: [
        'instagram caption kaise likhe',
        'best instagram captions',
        'caption template',
        'social media caption ideas',
      ],
      longTailKeywords: [
        'instagram caption kaise likhe hindi me',
        'reels ke liye hook kaise likhe',
        'linkedin post structure template free',
        'pas framework se caption kaise banaye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'कॉपीराइटिंग के तयशुदा फ्रेमवर्क — प्रॉब्लम–एजिटेशन–सॉल्यूशन (PAS), स्टेप-बाय-स्टेप ट्यूटोरियल, पहले–बाद–ब्रिज, ऑडिट चेकलिस्ट और मिथ बनाम सच — से अपनी ही बातों से साफ़ और पढ़ने में आसान सोशल पोस्ट तेज़ी से लिखें, बिना किसी AI-जनरेटेड टेक्स्ट के।',
  },
  'social-handle-formatter': {
    slug: 'username-generator',
    name: 'सोशल मीडिया यूज़रनेम जनरेटर',
    shortDescription:
      'ब्रांड नाम से हर प्लेटफ़ॉर्म के लिए सही यूज़रनेम वेरिएशन बनाएँ, नियम जाँचें और प्रोफ़ाइल लिंक से उपलब्धता देखें।',
    keywords: [
      'username generator',
      'instagram username ideas',
      'stylish username generator',
      'best username for instagram',
      'username availability checker',
      'unique username ideas',
      'social media username generator',
      'instagram username kaise banaye',
      'cool username generator',
    ],
    seo: {
      title: 'यूज़रनेम जनरेटर – Instagram, X और TikTok | UtilityFlow',
      description:
        'ब्रांड नाम से X, Instagram, TikTok, YouTube, Threads और GitHub के लिए यूज़रनेम वेरिएशन बनाएँ, हर प्लेटफ़ॉर्म के नियम जाँचें और प्रोफ़ाइल लिंक से उपलब्धता देखें।',
      primaryKeyword: 'username generator',
      secondaryKeywords: [
        'instagram username ideas',
        'stylish username generator',
        'best username for instagram',
        'username availability checker',
      ],
      longTailKeywords: [
        'instagram ke liye unique username kaise banaye',
        'brand name se username ideas kaise banaye',
        'username available hai ya nahi kaise check kare',
        'x instagram tiktok ke liye same username kaise banaye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'किसी भी ब्रांड, प्रोजेक्ट या क्रिएटर के नाम को छह बड़े प्लेटफ़ॉर्म के लिए साफ़ यूज़रनेम विकल्पों में बदलें — हर विकल्प की लंबाई और चिह्नों के नियम जाँचें और सीधे प्रोफ़ाइल लिंक खोलकर देखें कि नाम उपलब्ध है या नहीं।',
  },
  'merge-pdf': {
    slug: 'pdf-merge-kare',
    name: 'PDF मर्ज करें',
    shortDescription:
      'कई PDF फ़ाइलों को अपने मनचाहे क्रम में एक ही PDF में जोड़ें — ब्राउज़र में ही, बिना किसी सर्वर पर अपलोड किए।',
    keywords: [
      'pdf merge kaise kare',
      'pdf merge online free',
      'pdf files ko ek me kaise jode',
      'merge pdf free',
      'pdf jodne ka tarika',
      'pdf combine kaise kare',
      'pdf merge tool',
      'online pdf merge',
      'pdf files merge kare',
    ],
    seo: {
      title: 'PDF मर्ज करें – कई PDF एक में जोड़ें फ्री | UtilityFlow',
      description:
        'कई PDF फ़ाइलों को अपनी पसंद के क्रम में एक ही दस्तावेज़ में जोड़ें। सब कुछ आपके ब्राउज़र में होता है, कोई अपलोड नहीं, कोई लिमिट नहीं — फ्री और प्राइवेट।',
      primaryKeyword: 'pdf merge kaise kare',
      secondaryKeywords: [
        'pdf merge online free',
        'pdf files ko ek me kaise jode',
        'merge pdf free',
        'pdf combine kaise kare',
      ],
      longTailKeywords: [
        'pdf files ko ek me kaise jode bina upload kiye',
        'confidential pdf merge kaise kare free me',
        'pdf merge karke order kaise badle',
        'mobile se pdf merge kaise kare online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'दो या ज़्यादा PDF फ़ाइलों को सीधे ब्राउज़र की मेमोरी में एक साफ़ दस्तावेज़ में जोड़ें। हर फ़ाइल के पेज गिनें, ऊपर-नीचे करके क्रम बदलें, आउटपुट फ़ाइल का नाम चुनें और तुरंत डाउनलोड करें — आपकी फ़ाइलें कभी किसी सर्वर पर नहीं जातीं।',
  },
  'split-pdf': {
    slug: 'pdf-split-kare',
    name: 'PDF स्प्लिट करें – पेज अलग करें',
    shortDescription:
      'PDF से खास पेज रेंज, सम या विषम पेज निकालें, या पूरे PDF को एक-एक पेज की अलग फ़ाइलों में बाँटें — सब कुछ लोकल।',
    keywords: [
      'pdf split kaise kare',
      'pdf se page kaise nikale',
      'pdf pages alag kaise kare',
      'pdf splitter online free',
      'pdf page extractor',
      'pdf ko alag alag kaise kare',
      'extract pdf pages',
      'pdf split tool free',
      'pdf page kaise nikale',
    ],
    seo: {
      title: 'PDF स्प्लिट करें – पेज निकालें और अलग करें | UtilityFlow',
      description:
        'PDF से खास पेज रेंज (जैसे 1-3, 5) निकालें, सम-विषम पेज अलग करें या पूरे PDF को एक-एक पेज की फ़ाइलों में बाँटें — ब्राउज़र में ही, बिना अपलोड के, पूरी तरह फ्री।',
      primaryKeyword: 'pdf split kaise kare',
      secondaryKeywords: [
        'pdf se page kaise nikale',
        'pdf pages alag kaise kare',
        'pdf splitter online free',
        'pdf page extractor',
      ],
      longTailKeywords: [
        'pdf se sirf kuch page kaise nikale',
        'pdf ke odd even page alag kaise kare',
        'pdf ko ek ek page me kaise bante',
        'pdf split karke selected pages download kare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'सही पेज रेंज निकालें (1-3, 5, 8-10), दो तरफ़ा दस्तावेज़ों के लिए सम या विषम पेज अलग करें, या छोटे PDF को एक-एक पेज की अलग फ़ाइलों में बाँटें — यह सब पूरी तरह आपके ब्राउज़र की मेमोरी में होता है।',
  },
  'images-to-pdf': {
    slug: 'image-to-pdf',
    name: 'इमेज से PDF बनाएँ',
    shortDescription:
      'PNG, JPG और WebP इमेज को A4, US Letter या इमेज के असली साइज़ वाले एक ही PDF में बदलें — ब्राउज़र में ही।',
    keywords: [
      'jpg to pdf',
      'image to pdf',
      'photo ko pdf kaise banaye',
      'jpg to pdf converter',
      'png to pdf',
      'image se pdf kaise banaye',
      'photo to pdf converter',
      'multiple images to pdf',
      'screenshot to pdf',
    ],
    seo: {
      title: 'JPG से PDF बनाएँ – इमेज को PDF में बदलें | UtilityFlow',
      description:
        'JPG, PNG और WebP फोटो को एक ही साफ़ मल्टी-पेज PDF में बदलें। A4, US Letter या असली साइज़ चुनें, इमेज का क्रम बदलें — सब कुछ ब्राउज़र में, बिना अपलोड के।',
      primaryKeyword: 'jpg to pdf',
      secondaryKeywords: [
        'image to pdf',
        'photo ko pdf kaise banaye',
        'jpg to pdf converter',
        'png to pdf',
      ],
      longTailKeywords: [
        'mobile photo ko pdf kaise banaye free me',
        'multiple images ko ek pdf me kaise banaye',
        'screenshot ko pdf me kaise convert kare',
        'jpg png webp image ko a4 pdf kaise banaye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'स्कैन, रसीद या स्क्रीनशॉट — JPG, PNG और WebP इमेज को एक साफ़ मल्टी-पेज PDF में जोड़ें। इमेज को देखकर क्रम बदलें, A4 पोर्ट्रेट, US Letter या इमेज का असली साइज़ चुनें, मार्जिन सेट करें और ब्राउज़र में ही PDF तैयार करें।',
  },
  'pdf-to-images': {
    slug: 'pdf-to-jpg',
    name: 'PDF से इमेज बनाएँ (PNG / JPG)',
    shortDescription:
      'PDF के पेजों को डाउनलोड करने लायक PNG या JPG इमेज में बदलें, 1.0× से 2.0× रेज़ोल्यूशन के साथ — PDF.js से, पूरी तरह लोकल।',
    keywords: [
      'pdf to jpg',
      'pdf to png',
      'pdf ko image kaise banaye',
      'pdf to image converter',
      'pdf page ko jpg me kaise badle',
      'pdf se photo kaise nikale',
      'pdf to png converter free',
      'pdf page to image',
      'pdf ko jpg me convert kare',
    ],
    seo: {
      title: 'PDF से JPG बनाएँ – पेज को इमेज में बदलें | UtilityFlow',
      description:
        'PDF के किसी भी पेज को साफ़ PNG या हल्की JPG इमेज में बदलें, 2× तक रेज़ोल्यूशन के साथ। खास पेज चुनें और सिर्फ़ ज़रूरत वाली इमेज डाउनलोड करें — पूरी तरह फ्री।',
      primaryKeyword: 'pdf to jpg',
      secondaryKeywords: [
        'pdf to png',
        'pdf ko image kaise banaye',
        'pdf to image converter',
        'pdf page ko jpg me kaise badle',
      ],
      longTailKeywords: [
        'pdf ke page ko high resolution png kaise banaye',
        'pdf slide ko image me kaise convert kare',
        'pdf se sirf ek page ko jpg kaise banaye',
        'pdf ko image me badle bina upload kiye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mozilla के PDF.js इंजन से PDF के पेजों को साफ़ PNG या हल्की JPG इमेज में बदलें, सीधे अपने ब्राउज़र में। पेज रेंज चुनें, स्केल (1.0×–2.0×) सेट करें और प्रीव्यू देखकर सिर्फ़ ज़रूरत की इमेज डाउनलोड करें।',
  },
  'pdf-page-rotator': {
    slug: 'pdf-rotate-kare',
    name: 'PDF पेज रोटेट करें',
    shortDescription:
      'टेढ़े या उल्टे PDF पेजों को 90°, 180° या 270° पर हमेशा के लिए घुमाएँ — सभी, सम-विषम या खास पेजों पर, बिना क्वालिटी घटाए।',
    keywords: [
      'pdf rotate kaise kare',
      'pdf page rotate',
      'pdf ko seedha kaise kare',
      'pdf rotate online free',
      'ulta pdf kaise seedha kare',
      'pdf page ulta hai kaise thik kare',
      'rotate pdf 90 degree',
      'pdf orientation fix',
      'pdf ghumane ka tarika',
    ],
    seo: {
      title: 'PDF रोटेट करें – टेढ़े पेज सीधे करें फ्री | UtilityFlow',
      description:
        'टेढ़े या उल्टे PDF पेजों को 90°, 180° या 270° पर हमेशा के लिए घुमाएँ। सभी पेज, सम-विषम या खास रेंज चुनें — ब्राउज़र में ही, बिना अपलोड के, पूरी तरह फ्री।',
      primaryKeyword: 'pdf rotate kaise kare',
      secondaryKeywords: [
        'pdf page rotate',
        'pdf ko seedha kaise kare',
        'pdf rotate online free',
        'ulta pdf kaise seedha kare',
      ],
      longTailKeywords: [
        'scan kiya hua ulta pdf kaise seedha kare',
        'pdf ke sirf 2 aur 4 page rotate kaise kare',
        'pdf page ko 90 degree rotate karke save kare',
        'pdf orientation thik karne ka tool online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'टेढ़ी टेबल या उल्टे स्कैन वाले PDF पेजों को पेज के डिक्शनरी में ही हमेशा के लिए सही कर दें। 90° दाएँ, 90° बाएँ या 180° घुमाएँ — सभी पेजों, सम या विषम पेजों, या खास पेज रेंज पर, बिना दोबारा एन्कोड किए।',
  },
  'reorder-delete-pdf-pages': {
    slug: 'pdf-pages-reorder-kare',
    name: 'PDF पेज रीऑर्डर और डिलीट करें',
    shortDescription:
      'PDF पेजों को थंबनेल देखकर ऊपर-नीचे करें, पेज डुप्लिकेट करें या बेकार पेज हटाएँ — सब कुछ ब्राउज़र में ही।',
    keywords: [
      'pdf pages reorder kaise kare',
      'pdf se page delete kaise kare',
      'pdf page kaise hataye',
      'pdf pages arrange kaise kare',
      'pdf blank page delete',
      'pdf page duplicate kaise kare',
      'pdf pages ko order me kaise lagaye',
      'pdf reorganize online',
      'pdf page move kaise kare',
    ],
    seo: {
      title: 'PDF पेज रीऑर्डर करें – हटाएँ और बदलें | UtilityFlow',
      description:
        'PDF पेजों को थंबनेल देखकर ब्राउज़र में ही रीऑर्डर करें — पेज ऊपर-नीचे करें, डुप्लिकेट करें या खाली पेज हटाएँ और साफ़ PDF तुरंत डाउनलोड करें, पूरी तरह फ्री।',
      primaryKeyword: 'pdf pages reorder kaise kare',
      secondaryKeywords: [
        'pdf se page delete kaise kare',
        'pdf page kaise hataye',
        'pdf pages arrange kaise kare',
        'pdf blank page delete',
      ],
      longTailKeywords: [
        'pdf ke pages ka order kaise badle bina upload kiye',
        'pdf se blank page kaise hataye online',
        'pdf me ek page duplicate kaise kare',
        'pdf pages ko visual tarike se reorder kare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अपने PDF के पेजों को थंबनेल कार्ड के रूप में देखें, बिखरे पेजों को आगे-पीछे करें, कवर या टेम्पलेट पेज डुप्लिकेट करें, खाली पेज हटाएँ और साफ़, सही क्रम वाला PDF ब्राउज़र में ही एक्सपोर्ट करें।',
  },
  'pdf-watermark': {
    slug: 'pdf-watermark-lagaye',
    name: 'PDF पर वॉटरमार्क लगाएँ',
    shortDescription:
      'PDF पेजों पर CONFIDENTIAL या DRAFT जैसे टेक्स्ट वॉटरमार्क तिरछे या बीच में लगाएँ, साइज़ और पारदर्शिता अपनी पसंद से।',
    keywords: [
      'pdf watermark kaise lagaye',
      'pdf par watermark lagane ka tarika',
      'pdf watermark online free',
      'confidential watermark pdf',
      'draft watermark pdf',
      'pdf me watermark add kare',
      'pdf stamp lagaye',
      'watermark pdf free tool',
      'pdf par stamp kaise lagaye',
    ],
    seo: {
      title: 'PDF पर वॉटरमार्क लगाएँ – फ्री ऑनलाइन टूल | UtilityFlow',
      description:
        'किसी भी PDF पर ब्राउज़र में ही तुरंत वॉटरमार्क लगाएँ — तिरछा या बीच में टेक्स्ट, साइज़, पारदर्शिता, एंगल और रंग अपनी पसंद से, बिना अपलोड के, पूरी तरह फ्री।',
      primaryKeyword: 'pdf watermark kaise lagaye',
      secondaryKeywords: [
        'pdf par watermark lagane ka tarika',
        'pdf watermark online free',
        'confidential watermark pdf',
        'draft watermark pdf',
      ],
      longTailKeywords: [
        'pdf par confidential watermark kaise lagaye',
        'pdf ke first page par watermark kaise lagaye',
        'bina upload kiye pdf par watermark lagaye',
        'pdf par draft stamp kaise lagaye free me',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'CONFIDENTIAL, DRAFT या DO NOT DISTRIBUTE जैसे टेक्स्ट वॉटरमार्क किसी भी PDF के सभी पेजों या सिर्फ़ पहले पेज पर लगाएँ — फ़ॉन्ट साइज़, पारदर्शिता, घुमाव का एंगल और रंग के लाइव कंट्रोल के साथ, पूरी तरह आपके ब्राउज़र में।',
  },
  'add-pdf-page-numbers': {
    slug: 'pdf-page-number-lagaye',
    name: 'PDF में पेज नंबर डालें',
    shortDescription:
      'PDF दस्तावेज़ों में "Page 1 of N", "1 / N" या "1" जैसे साफ़ पेज नंबर जोड़ें, कवर पेज छोड़े जाने के विकल्प के साथ।',
    keywords: [
      'pdf me page number kaise lagaye',
      'pdf page number add kare',
      'pdf numbering kaise kare',
      'pdf me page number dalne ka tarika',
      'add page numbers to pdf free',
      'pdf page number tool',
      'pdf me page number kaise dale',
      'bates numbering pdf',
      'pdf paginate kaise kare',
    ],
    seo: {
      title: 'PDF में पेज नंबर डालें – फ्री पेजिनेशन टूल | UtilityFlow',
      description:
        'PDF फ़ाइलों में ब्राउज़र में ही पेज नंबर जोड़ें — साफ़ वेक्टर टेक्स्ट, कवर पेज छोड़ने और शुरुआती नंबर का विकल्प, बिना अपलोड के, पूरी तरह फ्री और प्राइवेट।',
      primaryKeyword: 'pdf me page number kaise lagaye',
      secondaryKeywords: [
        'pdf page number add kare',
        'pdf numbering kaise kare',
        'pdf me page number dalne ka tarika',
        'add page numbers to pdf free',
      ],
      longTailKeywords: [
        'pdf me page 1 of n number kaise lagaye',
        'pdf numbering cover page chhodkar kaise kare',
        'combined pdf me page number kaise dale',
        'pdf me page number add kare bina upload kiye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'मर्ज किए गए पैकेज, कानूनी दस्तावेज़ या पढ़ाई के नोट्स को साफ़ वेक्टर टाइपोग्राफी से नंबर करें — "Page 1 of N", "1 / N" या सिर्फ़ अंक चुनें, नीचे या ऊपर की जगह, शुरुआती नंबर और कवर पेज छोड़ने का विकल्प भी साथ में।',
  },
  'pdf-metadata-editor': {
    slug: 'pdf-metadata-badlein',
    name: 'PDF मेटाडेटा एडिटर',
    shortDescription:
      'PDF के छिपे हुए टाइटल, लेखक, विषय, कीवर्ड, क्रिएटर और प्रोड्यूसर टैग देखें, बदलें या हटाएँ — ब्राउज़र में, पूरी प्राइवेसी के साथ।',
    keywords: [
      'pdf metadata editor',
      'pdf metadata kaise badle',
      'pdf se author kaise hataye',
      'pdf metadata remove kaise kare',
      'pdf title change kaise kare',
      'pdf properties edit kaise kare',
      'pdf metadata viewer',
      'pdf author name hataye',
      'pdf metadata check kare',
    ],
    seo: {
      title: 'PDF मेटाडेटा एडिटर – देखें, बदलें, हटाएँ | UtilityFlow',
      description:
        'PDF के टाइटल, लेखक, विषय, कीवर्ड, क्रिएटर और प्रोड्यूसर टैग ब्राउज़र में ही देखें, बदलें या हटाएँ — शेयर करने से पहले निजी जानकारी साफ़ करें, पूरी तरह फ्री।',
      primaryKeyword: 'pdf metadata editor',
      secondaryKeywords: [
        'pdf metadata kaise badle',
        'pdf se author kaise hataye',
        'pdf metadata remove kaise kare',
        'pdf title change kaise kare',
      ],
      longTailKeywords: [
        'pdf se chhupa hua author metadata kaise hataye',
        'pdf title browser tab me kaise badle',
        'pdf share karne se pehle metadata kaise remove kare',
        'pdf properties online edit kare bina upload kiye',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF के हेडर में छिपी जानकारी देखें — दस्तावेज़ का टाइटल, लेखक, विषय, कीवर्ड, क्रिएटर और प्रोड्यूसर सॉफ़्टवेयर — ताकि ब्राउज़र टैब में साफ़ टाइटल दिखे या पब्लिक शेयर करने से पहले पहचान वाली निजी जानकारी हटाई जा सके।',
  },
  'pdf-text-extractor': {
    slug: 'pdf-to-text',
    name: 'PDF से टेक्स्ट निकालें',
    shortDescription:
      'PDF दस्तावेज़ों से पेज-दर-पेज चुनने लायक टेक्स्ट निकालकर कॉपी करें या .txt फ़ाइल डाउनलोड करें — PDF.js से, ब्राउज़र में ही।',
    keywords: [
      'pdf to text',
      'pdf se text kaise nikale',
      'pdf to txt converter',
      'pdf text copy kaise kare',
      'pdf se text extract kare',
      'pdf ko text me kaise badle',
      'pdf text extractor online',
      'pdf se text copy nahi ho raha',
      'pdf to text free',
    ],
    seo: {
      title: 'PDF से टेक्स्ट निकालें – PDF को TXT में बदलें | UtilityFlow',
      description:
        'PDF से पेज-दर-पेज टेक्स्ट निकालें — पेज मार्कर, शब्द गिनती, एक क्लिक में कॉपी और .txt डाउनलोड के साथ, ब्राउज़र में ही, पूरी तरह फ्री। स्कैन PDF की पहचान भी।',
      primaryKeyword: 'pdf to text',
      secondaryKeywords: [
        'pdf se text kaise nikale',
        'pdf to txt converter',
        'pdf text copy kaise kare',
        'pdf se text extract kare',
      ],
      longTailKeywords: [
        'confidential pdf se text nikale bina upload kiye',
        'pdf ko txt file me kaise convert kare',
        'pdf se text copy nahi ho raha kya kare',
        'scanned pdf me text hai ya nahi kaise pata kare',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'टेक्स्ट वाले PDF से पेज-दर-पेज यूनिकोड टेक्स्ट सीधे निकालें — PDF.js से, "--- Page N ---" मार्कर, शब्द और बाइट गिनती, एक क्लिक में कॉपी और .txt एक्सपोर्ट के साथ। अगर PDF स्कैन किया हुआ या सिर्फ़ इमेज वाला है, तो यह साफ़ बता भी देता है।',
  },
};
