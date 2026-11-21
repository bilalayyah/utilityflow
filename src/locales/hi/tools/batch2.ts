import type { ToolLocaleOverride } from '../../types';

/**
 * Hindi overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Hindi copy, SEO-optimized for Hindi search intent.
 * Slugs are romanized Hindi, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const HI_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-encode-decode-kare',
    name: 'Base64 एन्कोडर / डिकोडर',
    shortDescription:
      'टेक्स्ट को स्टैंडर्ड या URL-सेफ़ Base64 में एन्कोड करें और UTF-8 Base64 स्ट्रिंग को ब्राउज़र में सुरक्षित डिकोड करें।',
    keywords: [
      'base64 encoder decoder online',
      'base64 encode kaise kare',
      'base64 decode kaise kare',
      'base64 to text converter',
      'text to base64 online hindi',
      'base64 url safe kya hai',
      'base64 decode tool hindi',
      'base64 converter free',
      'utf8 base64 encode kare',
    ],
    seo: {
      title: 'Base64 एन्कोडर और डिकोडर ऑनलाइन फ्री | UtilityFlow',
      description:
        'UTF-8 टेक्स्ट को Base64 में एन्कोड करें या Base64 को पढ़ने योग्य टेक्स्ट में डिकोड करें — URL-सेफ़ विकल्प के साथ, सब कुछ आपके ब्राउज़र में। अभी आज़माएँ।',
      primaryKeyword: 'base64 encoder decoder online',
      secondaryKeywords: ['base64 encode kaise kare', 'base64 decode kaise kare', 'base64 to text converter', 'text to base64 online hindi'],
      longTailKeywords: ['emoji wale utf8 text ko base64 me kaise encode kare', 'url safe base64 bina padding ke decode kare', 'browser me base64 converter free tool', 'emoji wali base64 string ko decode kaise kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'एक्सेंट वाले अक्षर और इमोजी सहित UTF-8 स्ट्रिंग को RFC 4648 के अनुसार स्टैंडर्ड या URL-सेफ़ Base64 में बदलें, या Base64 स्ट्रिंग को तुरंत वैलिडेशन के साथ वापस सादे टेक्स्ट में डिकोड करें।',
  },
  'url-encoder-decoder': {
    slug: 'url-encode-decode-kare',
    name: 'URL एन्कोडर / डिकोडर',
    shortDescription:
      'क्वेरी वैल्यू या पूरी URL को पर्सेंट-एन्कोड करें और पार्स किए गए होस्ट, पाथ और क्वेरी पैरामीटर देखें।',
    keywords: [
      'url encoder decoder online',
      'url encode kaise kare',
      'url decode kaise kare',
      'percent encoding kya hai',
      'url parser online hindi',
      'encodeuricomponent online',
      'url decode tool hindi',
      'query string encode kare',
      'url me special character encode',
    ],
    seo: {
      title: 'URL एन्कोडर और डिकोडर: URL बदलें ऑनलाइन | UtilityFlow',
      description:
        'encodeURIComponent और encodeURI मोड से URL एन्कोड या डिकोड करें और प्रोटोकॉल, होस्ट, पाथ व क्वेरी पैरामीटर का पूरा ब्रेकडाउन देखें। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'url encoder decoder online',
      secondaryKeywords: ['url encode kaise kare', 'url decode kaise kare', 'percent encoding kya hai', 'url parser online hindi'],
      longTailKeywords: ['encodeuri aur encodeuricomponent me antar kya hai', 'url ke query parameter ko decode kaise kare', 'url ke liye special character percent encode kare', 'ampersand tode bina query value encode kaise kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'क्वेरी पैरामीटर की वैल्यू या पूरी URL को सुरक्षित एन्कोड करें, पर्सेंट-एन्कोडेड स्ट्रिंग (%20, %3A, +) को डिकोड करें और हर क्वेरी पैरामीटर का लाइव ब्रेकडाउन टेबल में देखें।',
  },
  'uuid-generator': {
    slug: 'uuid-banaye',
    name: 'UUID जनरेटर (v4 और v7)',
    shortDescription:
      'RFC 9562 के अनुसार क्रिप्टोग्राफ़िक रूप से रैंडम UUID v4 और समय-क्रम वाले UUID v7 एक साथ कई बनाएँ।',
    keywords: [
      'uuid generator online',
      'uuid kaise banaye',
      'guid generator hindi',
      'uuid v4 generator free',
      'uuid v7 kya hai',
      'random uuid generate kare',
      'uuid generator hindi me',
      'bulk uuid generator',
      'online uuid banane wala tool',
    ],
    seo: {
      title: 'UUID जनरेटर v4 और v7: मुफ्त ऑनलाइन टूल | UtilityFlow',
      description:
        'RFC 9562 के अनुसार 100 तक क्रिप्टोग्राफ़िक UUID v4 या समय-क्रम वाले UUID v7 बनाएँ — अपरकेस, हाइफ़न और ब्रेसेज़ विकल्प के साथ, मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'uuid generator online',
      secondaryKeywords: ['uuid kaise banaye', 'guid generator hindi', 'uuid v4 generator free', 'uuid v7 kya hai'],
      longTailKeywords: ['ek sath kai uuid v4 aur v7 kaise banaye', 'time ordered uuid v7 rfc 9562 kya hai', 'bina hyphen ke uppercase uuid generator', 'ek sath 100 uuid banane wala free tool'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'एक या एक साथ कई UUID बनाएँ — क्रिप्टोग्राफ़िक रूप से रैंडम UUID v4 और टाइमस्टैम्प-क्रम वाले UUID v7, सीधे Web Crypto API से, फॉर्मेट के विकल्पों के साथ।',
  },
  'regex-tester': {
    slug: 'regex-test-kare',
    name: 'Regex टेस्टर',
    shortDescription:
      'लाइव मैच हाइलाइट, कैप्चर ग्रुप, फ़्लैग और रिप्लेसमेंट आउटपुट के साथ JavaScript रेगुलर एक्सप्रेशन टेस्ट करें।',
    keywords: [
      'regex tester online',
      'regex test kaise kare',
      'regular expression tester hindi',
      'javascript regex tester',
      'regex match checker online',
      'regex debug kaise kare',
      'regex tester hindi me',
      'regex pattern test kare',
      'regex capture group kya hai',
    ],
    seo: {
      title: 'Regex टेस्टर: JavaScript Regex जाँचें | UtilityFlow',
      description:
        'g, i, m और s फ़्लैग के साथ रेगुलर एक्सप्रेशन लाइव टेस्ट करें — मैच हाइलाइट, कैप्चर ग्रुप जाँच और रिप्लेस प्रीव्यू के साथ, मुफ्त। रिज़ल्ट तुरंत और सटीक मिलता है।',
      primaryKeyword: 'regex tester online',
      secondaryKeywords: ['regex test kaise kare', 'regular expression tester hindi', 'javascript regex tester', 'regex match checker online'],
      longTailKeywords: ['javascript regex capture group online kaise test kare', 'live regex match highlight karne wala tool', 'regex replace preview capture group ke sath', 'regex ko live highlight ke sath debug kaise kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JavaScript रेगुलर एक्सप्रेशन को इंटरैक्टिव तरीके से डीबग करें — लाइव मैच हाइलाइट, मैच की इंडेक्स पोज़िशन, नंबर वाले कैप्चर ग्रुप, फ़्लैग स्विच और रिप्लेसमेंट प्रीव्यू के साथ।',
  },
  'jwt-decoder': {
    slug: 'jwt-decode-kare',
    name: 'JWT डिकोडर',
    shortDescription:
      'JSON Web Token के हेडर, पेलोड क्लेम और एक्सपायरी टाइमस्टैम्प को अपने ब्राउज़र में सुरक्षित डिकोड करें।',
    keywords: [
      'jwt decoder online',
      'jwt decode kaise kare',
      'json web token decode hindi',
      'jwt token check kare',
      'jwt expiry check kaise kare',
      'jwt payload viewer online',
      'jwt token kaise dekhe',
      'jwt claims kya hai',
      'jwt token expire check kare',
    ],
    seo: {
      title: 'JWT डिकोडर: टोकन और एक्सपायरी जाँचें | UtilityFlow',
      description:
        'JWT के हेडर और पेलोड क्लेम अपने ब्राउज़र में डिकोड करें और iat, nbf व exp को साफ़ UTC तारीख़ में देखें — मुफ्त और पूरी तरह प्राइवेट। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'jwt decoder online',
      secondaryKeywords: ['jwt decode kaise kare', 'json web token decode hindi', 'jwt token check kare', 'jwt expiry check kaise kare'],
      longTailKeywords: ['jwt token ko server par bheje bina locally decode kare', 'jwt ki exp expiry date online kaise check kare', 'jwt header aur claims base64url kaise dekhe', 'browser me jwt payload claims kaise padhe'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JSON Web Token (JWT) को ब्राउज़र की लोकल मेमोरी में सुरक्षित जाँचें — फॉर्मेट किए गए Header और Payload JSON ऑब्जेक्ट देखें और `iat`, `nbf` व `exp` की पढ़ने योग्य एक्सपायरी स्थिति देखें।',
  },
  'hash-generator': {
    slug: 'hash-banaye-sha256',
    name: 'हैश जनरेटर (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Web Crypto से टेक्स्ट या लोकल फाइल के लिए SHA-1, SHA-256, SHA-384 और SHA-512 क्रिप्टोग्राफ़िक हैश बनाएँ।',
    keywords: [
      'hash generator online',
      'sha256 generator hindi',
      'sha512 hash kaise banaye',
      'file ka checksum kaise nikale',
      'sha1 hash generator',
      'sha384 hash online',
      'checksum calculator hindi',
      'file checksum verify kaise kare',
      'secure hash generator online',
    ],
    seo: {
      title: 'हैश जनरेटर SHA-256 और SHA-512 ऑनलाइन | UtilityFlow',
      description:
        'टेक्स्ट और लोकल फाइल के लिए SHA-1, SHA-256, SHA-384 व SHA-512 हैश हेक्स या Base64 में बनाएँ — सीधे ब्राउज़र में, मुफ्त और सुरक्षित। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'hash generator online',
      secondaryKeywords: ['sha256 generator hindi', 'file ka checksum kaise nikale', 'sha512 hash kaise banaye', 'checksum calculator hindi'],
      longTailKeywords: ['local file ka sha256 checksum browser me kaise nikale', 'sha256 hash hexadecimal aur base64 me kaise banaye', 'web crypto api se hash generator online', 'download ki hui file ka checksum kaise verify kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ब्राउज़र की नेटिव Web Crypto API (`crypto.subtle.digest`) से SHA-1, SHA-256, SHA-384 और SHA-512 हैश एक साथ निकालें — UTF-8 टेक्स्ट और लोकल फाइल के चेकसम, दोनों के लिए।',
  },
  'html-entity-encoder': {
    slug: 'html-entity-encode-kare',
    name: 'HTML एंटिटी एन्कोडर और डिकोडर',
    shortDescription:
      'रिज़र्व्ड HTML अक्षर (<, >, &, कोट्स) और नॉन-ASCII सिंबल एस्केप करें या HTML एंटिटी को साफ़ डिकोड करें।',
    keywords: [
      'html entity encoder online',
      'html escape kaise kare',
      'html entity decoder hindi',
      'html special character encode',
      'escape html online tool',
      'html entity converter hindi',
      'html decode kaise kare',
      'html me quotes escape kare',
      'html entity encode decoder',
    ],
    seo: {
      title: 'HTML एंटिटी एन्कोडर ऑनलाइन: Escape करें | UtilityFlow',
      description:
        'रिज़र्व्ड HTML अक्षर और नॉन-ASCII सिंबल को एंटिटी में एन्कोड करें, या नाम वाली व नंबर वाली एंटिटी को सादे टेक्स्ट में डिकोड करें — मुफ्त। अभी आज़माएँ।',
      primaryKeyword: 'html entity encoder online',
      secondaryKeywords: ['html escape kaise kare', 'html entity decoder hindi', 'html special character encode', 'escape html online tool'],
      longTailKeywords: ['code snippet ke liye html tag escape kaise kare', 'named aur numeric html entity decode kaise kare', 'special character ko html entity me kaise badle', 'html me quotes aur ampersand escape kaise kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'वेबपेज में कोड स्निपेट डालने के लिए `<`, `>`, `&`, कोट्स और अंतरराष्ट्रीय Unicode सिंबल को HTML एंटिटी में सुरक्षित एस्केप करें, या एस्केप की हुई HTML स्ट्रिंग को वापस पढ़ने योग्य टेक्स्ट में डिकोड करें।',
  },
  'json-csv-converter': {
    slug: 'json-se-csv-banaye',
    name: 'JSON से CSV और CSV से JSON कन्वर्टर',
    shortDescription:
      'JSON ऐरे को RFC 4180 CSV स्प्रेडशीट में बदलें और कोटेड CSV फाइल को वापस साफ़ JSON में पार्स करें।',
    keywords: [
      'json to csv converter online',
      'csv to json converter hindi',
      'json csv converter free',
      'json ko csv me kaise badle',
      'csv ko json me kaise badle',
      'json to csv online free hindi',
      'json array to csv kaise kare',
      'csv to json kaise convert kare',
      'json tsv converter online',
    ],
    seo: {
      title: 'JSON से CSV और CSV से JSON कन्वर्टर फ्री | UtilityFlow',
      description:
        'JSON ऐरे को नेस्टेड ऑब्जेक्ट फ़्लैट करके साफ़ CSV शीट में बदलें, या CSV व TSV फाइल को स्ट्रक्चर्ड JSON में पार्स करें — मुफ्त, लोकल। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'json to csv converter online',
      secondaryKeywords: ['csv to json converter hindi', 'json ko csv me kaise badle', 'csv ko json me kaise badle', 'json to csv online free hindi'],
      longTailKeywords: ['nested json object ko csv columns me kaise badle', 'comma wali quoted csv ko json array me kaise badle', 'browser me json to csv download karne wala tool', 'json array ko csv sheet me free kaise convert kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'API के JSON ऐरे को साफ़ CSV स्प्रेडशीट में बदलें — नेस्टेड ऑब्जेक्ट की कुंजियाँ अपने आप फ़्लैट हो जाती हैं — या कोटेड कॉमा वाली CSV व TSV फाइल को फॉर्मेट किए गए JSON में वापस पार्स करें।',
  },
  'unix-timestamp-converter': {
    slug: 'unix-time-converter',
    name: 'Unix टाइमस्टैम्प कन्वर्टर',
    shortDescription:
      'Unix epoch सेकंड या मिलीसेकंड को ISO 8601, UTC और लोकल तारीख़ में बदलें — और उल्टा भी।',
    keywords: [
      'unix timestamp converter online',
      'epoch to date converter hindi',
      'unix time kya hai',
      'epoch time kaise nikale',
      'timestamp to date online',
      'date to unix timestamp hindi',
      'current unix time kya hai',
      'epoch milliseconds converter',
      'unix timestamp converter hindi',
    ],
    seo: {
      title: 'Unix टाइमस्टैम्प कन्वर्टर: तारीख़ बदलें | UtilityFlow',
      description:
        'Unix टाइमस्टैम्प को सेकंड या मिलीसेकंड में ISO 8601, UTC, RFC 2822 व लोकल समय में बदलें, या किसी भी तारीख़ से Unix समय पाएँ — मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'unix timestamp converter online',
      secondaryKeywords: ['epoch to date converter hindi', 'unix time kya hai', 'timestamp to date online', 'date to unix timestamp hindi'],
      longTailKeywords: ['epoch milliseconds ko iso 8601 date me kaise badle', 'current unix time live seconds me kaise dekhe', 'local date time ko epoch unix me kaise badle', 'unix timestamp ko utc date me online free kaise badle'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Unix epoch इंटीजर (सेकंड या मिलीसेकंड) को ISO 8601, UTC और लोकल टाइमज़ोन की स्ट्रिंग में बदलें — रिलेटिव ऑफ़सेट के साथ — या किसी भी कैलेंडर तारीख़ को वापस epoch टाइमस्टैम्प में बदलें।',
  },
  'sql-formatter': {
    slug: 'sql-format-kare',
    name: 'SQL फॉर्मेटर',
    shortDescription:
      'SQL क्वेरी को फॉर्मेट, इंडेंट और स्टैंडर्डाइज़ करें — कीवर्ड अपरकेस/लोअरकेस में या क्वेरी को एक लाइन में मिनिफ़ाई करें।',
    keywords: [
      'sql formatter online',
      'sql query format kaise kare',
      'sql beautifier hindi',
      'sql minifier online',
      'sql format karne wala tool',
      'sql query ko sundar kaise banaye',
      'sql indent kaise kare',
      'sql formatter hindi me',
      'online sql formatter free',
    ],
    seo: {
      title: 'SQL फॉर्मेटर: क्वेरी सुंदर बनाएँ ऑनलाइन | UtilityFlow',
      description:
        'SQL क्वेरी को साफ़ क्लॉज़ ब्रेक, कीवर्ड अपरकेस/लोअरकेस और 2 या 4 स्पेस इंडेंट के साथ फॉर्मेट करें, या एक लाइन में मिनिफ़ाई करें — मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'sql formatter online',
      secondaryKeywords: ['sql query format kaise kare', 'sql beautifier hindi', 'sql minifier online', 'sql format karne wala tool'],
      longTailKeywords: ['select join group by wali sql query online kaise format kare', 'sql keyword ko uppercase me bina galti ke kaise badle', 'string literal bachate hue sql query kaise minify kare', '2 ya 4 space indent ke sath sql query format kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'एक लाइन में सघन SQL क्वेरी को पढ़ने योग्य, स्ट्रक्चर्ड स्टेटमेंट में बदलें — `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` व `ORDER BY` की साफ़ अलाइनमेंट के साथ, कोटेड स्ट्रिंग और कमेंट बचाते हुए।',
  },
  'css-minifier': {
    slug: 'css-minify-kare',
    name: 'CSS मिनिफ़ायर और ब्यूटीफ़ायर',
    shortDescription:
      'बंडल साइज़ घटाने के लिए CSS स्टाइलशीट मिनिफ़ाई करें या कंप्रेस्ड CSS रूल को साफ़ इंडेंटेशन में ब्यूटीफ़ाई करें।',
    keywords: [
      'css minifier online',
      'css beautifier hindi',
      'css compress kaise kare',
      'css format karne wala tool',
      'css minify kaise kare',
      'css ko chota kaise kare',
      'minify css online free',
      'css unminify kaise kare',
      'css file size kam kaise kare',
    ],
    seo: {
      title: 'CSS मिनिफ़ायर और ब्यूटीफ़ायर ऑनलाइन फ्री | UtilityFlow',
      description:
        'कमेंट व एक्स्ट्रा स्पेस हटाकर CSS मिनिफ़ाई करें — लाइव बाइट-बचत आँकड़ों के साथ — या मिनिफ़ाइड शीट को साफ़ रूल में खोलें, पूरी तरह मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'css minifier online',
      secondaryKeywords: ['css beautifier hindi', 'css compress kaise kare', 'css format karne wala tool', 'css minify kaise kare'],
      longTailKeywords: ['quoted string aur media query bachate hue css minify kare', 'compressed css sheet ko online unminify kaise kare', 'browser me css compression percentage kaise nikale', 'deploy se pehle css file size kaise kam kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'कमेंट, बेकार व्हाइटस्पेस और क्लोज़िंग ब्रेस से पहले के आखिरी सेमीकॉलन हटाकर CSS स्टाइलशीट कंप्रेस करें, या एक लाइन में मिनिफ़ाइड CSS को वापस इंडेंट किए गए पढ़ने योग्य ब्लॉक में खोलें।',
  },
  'js-formatter': {
    slug: 'javascript-format-kare',
    name: 'JavaScript / TypeScript मिनिफ़ायर और फॉर्मेटर',
    shortDescription:
      'कमेंट व एक्स्ट्रा व्हाइटस्पेस हटाकर JavaScript स्निपेट मिनिफ़ाई करें या कॉम्पैक्ट कोड ब्लॉक ब्यूटीफ़ाई करें।',
    keywords: [
      'javascript minifier online',
      'js formatter hindi',
      'js beautifier online',
      'javascript compress kaise kare',
      'js format karne wala tool',
      'javascript minify kaise kare',
      'js code beautify kare',
      'typescript minifier online',
      'js code formatter free',
    ],
    seo: {
      title: 'JavaScript मिनिफ़ायर और फॉर्मेटर ऑनलाइन | UtilityFlow',
      description:
        'कमेंट व एक्स्ट्रा स्पेस सुरक्षित हटाकर JavaScript व TypeScript मिनिफ़ाई करें, या कॉम्पैक्ट कोड को 2 या 4 स्पेस इंडेंट में खोलें — मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'javascript minifier online',
      secondaryKeywords: ['js formatter hindi', 'js beautifier online', 'javascript compress kaise kare', 'js format karne wala tool'],
      longTailKeywords: ['string aur template literal bachate hue js minify kare', 'compact javascript code ko indent ke sath kaise khole', 'browser me js formatter aur minifier tool', '2 ya 4 space indent me javascript code beautify kare'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'बुकमार्कलेट और इनलाइन स्क्रिप्ट के लिए JavaScript स्निपेट कंप्रेस करें — कमेंट व एक्स्ट्रा स्पेस हटाकर, स्ट्रिंग लिटरल सुरक्षित रखते हुए — या कंप्रेस्ड कोड को फिर से इंडेंट करें।',
  },
  'cron-expression-parser': {
    slug: 'cron-expression-samjhe',
    name: 'Cron एक्सप्रेशन पार्सर और शेड्यूल प्रीव्यू',
    shortDescription:
      '5-फ़ील्ड cron एक्सप्रेशन को आसान भाषा में समझें, प्रीसेट देखें और अगले 8 रन टाइम का प्रीव्यू पाएँ।',
    keywords: [
      'cron expression parser online',
      'crontab generator hindi',
      'cron schedule tester',
      'cron expression kaise samjhe',
      'cron job kya hai hindi',
      'cron expression tester online',
      'crontab guru alternative hindi',
      'cron schedule preview tool',
      'cron expression hindi me',
    ],
    seo: {
      title: 'Cron एक्सप्रेशन पार्सर: शेड्यूल समझें | UtilityFlow',
      description:
        '5-फ़ील्ड cron एक्सप्रेशन को आसान भाषा में समझें, हर फ़ील्ड जाँचें, आम प्रीसेट आज़माएँ और अगले 8 रन टाइम देखें — मुफ्त, तुरंत। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'cron expression parser online',
      secondaryKeywords: ['crontab generator hindi', 'cron schedule tester', 'cron expression kaise samjhe', 'cron job kya hai hindi'],
      longTailKeywords: ['5 field wale cron expression ko aasan bhasha me kaise samjhe', 'cron ke agle 8 run time kaise nikale', 'weekday aur step wale cron expression online test kare', 'har weekday subah 9 baje wala cron expression example'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Unix crontab के 5-फ़ील्ड एक्सप्रेशन (`मिनट घंटा महीने-का-दिन महीना हफ़्ते-का-दिन`) को साफ़, पढ़ने योग्य सारांश में डिकोड करें, फ़ील्ड की रेंज जाँचें और अगले 8 शेड्यूल किए गए रन टाइम देखें।',
  },
  'color-converter': {
    slug: 'rang-converter-hex-rgb',
    name: 'कलर कन्वर्टर (HEX / RGB / HSL और WCAG कॉन्ट्रास्ट)',
    shortDescription:
      'लाइव कलर पिकर और WCAG 2.1 AA/AAA कॉन्ट्रास्ट जाँच के साथ कलर को HEX, RGB और HSL में बदलें।',
    keywords: [
      'color converter online',
      'hex to rgb converter hindi',
      'rgb to hex kaise kare',
      'wcag contrast checker hindi',
      'hex to hsl converter',
      'rgb to hsl kaise badle',
      'color picker online hindi',
      'hex color converter tool',
      'hsl to rgb converter',
    ],
    seo: {
      title: 'कलर कन्वर्टर HEX, RGB, HSL ऑनलाइन फ्री | UtilityFlow',
      description:
        'कलर को HEX, RGB और HSL में तुरंत बदलें और टेक्स्ट-बैकग्राउंड कॉन्ट्रास्ट WCAG 2.1 AA व AAA के लिए जाँचें — मुफ्त, सीधे ब्राउज़र में। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'color converter online',
      secondaryKeywords: ['hex to rgb converter hindi', 'rgb to hex kaise kare', 'wcag contrast checker hindi', 'hex to hsl converter'],
      longTailKeywords: ['hex color ko css rgb aur hsl value me kaise badle', 'text contrast wcag 2.1 aa aur aaa kaise check kare', 'developer ke liye hex rgb hsl color tool', 'hex ko hsl me css variable ke liye kaise badle'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'लाइव स्वॉच और WCAG 2.1 कॉन्ट्रास्ट-रेशियो चेकर के साथ CSS HEX, RGB और HSL नोटेशन के बीच कलर आसानी से बदलें — ऐक्सेसिबल इंटरफ़ेस डिज़ाइन के लिए।',
  },
};
