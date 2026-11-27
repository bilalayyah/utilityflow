import type { ToolLocaleOverride } from '../../types';

/**
 * Hindi overrides — Batch 3: Calculators (14 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Original Hindi copy, SEO-optimized for Hindi search intent.
 * Slugs are romanized Hindi, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const HI_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'umar-calculator',
    name: 'उम्र कैलकुलेटर',
    shortDescription:
      'साल, महीने और दिन में सटीक उम्र निकालें, साथ ही कुल हफ़्ते, दिन और अगले जन्मदिन की उलटी गिनती देखें।',
    keywords: [
      'umar calculator hindi',
      'age calculator online hindi',
      'meri umar kitni hai',
      'date of birth se age nikale',
      'जन्म तारीख से उम्र निकालें',
      'age in years months days',
      'birthday countdown calculator',
      'umar kaise nikale online',
      'exact age calculator hindi',
    ],
    seo: {
      title: 'उम्र कैलकुलेटर: साल, महीने और दिन गिनें | UtilityFlow',
      description:
        'जन्म तारीख से अपनी सटीक उम्र साल, महीने, दिन, हफ़्ते और कुल दिनों में निकालें — अगले जन्मदिन की उलटी गिनती के साथ, पूरी तरह मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'umar calculator hindi',
      secondaryKeywords: ['age calculator online hindi', 'meri umar kitni hai', 'date of birth se age nikale', 'जन्म तारीख से उम्र निकालें'],
      longTailKeywords: ['janm tarikh se exact age saal mahine din me kaise nikale', 'mere agle janmdin me kitne din bache hai', 'kisi bhi purani ya aane wali tarikh par umar kaise dekhe', 'aaj meri umar kitni hai calculator'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'जन्म तारीख से आज तक — या किसी भी पुरानी या आने वाली तारीख तक — की सटीक उम्र निकालें, अलग-अलग लंबाई के महीनों और लीप ईयर को ध्यान में रखते हुए।',
  },
  'percentage-calculator': {
    slug: 'pratishat-calculator',
    name: 'प्रतिशत कैलकुलेटर',
    shortDescription:
      'किसी संख्या का प्रतिशत, X, Y का कितना प्रतिशत है, और प्रतिशत बढ़ोतरी या कमी तुरंत निकालें।',
    keywords: [
      'percentage calculator hindi',
      'pratishat kaise nikale',
      'प्रतिशत कैलकुलेटर',
      'percentage increase decrease kaise nikale',
      'x percent of y kaise nikale',
      'pratishat nikalne ka tarika',
      'percentage nikalne wala tool',
      'percent kaise calculate kare',
      'percentage formula hindi',
    ],
    seo: {
      title: 'प्रतिशत कैलकुलेटर: % तुरंत निकालें ऑनलाइन | UtilityFlow',
      description:
        'X% of Y निकालें, जानें कोई संख्या दूसरी का कितना प्रतिशत है और प्रतिशत बढ़ोतरी या कमी मापें — एक ही जगह, मुफ्त और तुरंत, ऑनलाइन। रिज़ल्ट तुरंत और सटीक मिलता है।',
      primaryKeyword: 'percentage calculator hindi',
      secondaryKeywords: ['pratishat kaise nikale', 'प्रतिशत कैलकुलेटर', 'percentage increase decrease kaise nikale', 'x percent of y kaise nikale'],
      longTailKeywords: ['do number ke beech percentage badhotri ya kami kaise nikale', 'x y ka kitna percent hai kaise pata kare', 'browser me turant percentage nikalne wala tool', 'y ka x percent kitna hota hai calculator online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'प्रतिशत के तीन सबसे आम सवाल एक साथ सुलझाएँ — किसी मान का X% निकालना, X, Y का कितना प्रतिशत है यह जानना और प्रतिशत बढ़ोतरी या कमी मापना।',
  },
  'loan-emi-calculator': {
    slug: 'emi-calculator-loan',
    name: 'लोन और EMI कैलकुलेटर',
    shortDescription:
      'मासिक EMI किस्त, कुल ब्याज और सालाना या मासिक अमॉर्टाइज़ेशन शेड्यूल निकालें।',
    keywords: [
      'emi calculator hindi',
      'loan emi calculator online',
      'emi kaise nikale',
      'loan emi kaise calculate kare',
      'personal loan emi calculator',
      'car loan emi calculator hindi',
      'home loan emi calculator',
      'emi calculator loan hindi me',
      'loan interest calculator hindi',
    ],
    seo: {
      title: 'लोन EMI कैलकुलेटर: मासिक किस्त निकालें | UtilityFlow',
      description:
        'मासिक EMI, कुल ब्याज लागत और मूलधन-ब्याज की पूरी अमॉर्टाइज़ेशन टेबल ऑनलाइन निकालें — लोन की सटीक किस्त जानें, पूरी तरह मुफ्त। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'emi calculator hindi',
      secondaryKeywords: ['loan emi calculator online', 'emi kaise nikale', 'loan emi kaise calculate kare', 'personal loan emi calculator'],
      longTailKeywords: ['loan ki monthly emi aur total interest online kaise nikale', 'loan ki principal vs interest wali table kaise dekhe', 'personal aur car loan emi calculator hindi', 'home loan emi kaise calculate kare online'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'अपनी सटीक मासिक EMI, लोन अवधि में कुल ब्याज, मूलधन-ब्याज का अनुपात और साल-दर-साल या महीने-दर-महीने की पारदर्शी अमॉर्टाइज़ेशन टेबल निकालें।',
  },
  'mortgage-calculator': {
    slug: 'home-loan-emi-calculator',
    name: 'होम लोन कैलकुलेटर',
    shortDescription:
      'डाउन पेमेंट, ब्याज दर, प्रॉपर्टी टैक्स, इंश्योरेंस और PMI सहित मासिक PITI होम लोन पेमेंट का अनुमान लगाएँ।',
    keywords: [
      'home loan calculator hindi',
      'mortgage calculator hindi',
      'home loan emi kaise nikale',
      'होम लोन कैलकुलेटर',
      'home loan monthly payment calculator',
      'piti calculator hindi',
      'home loan interest calculator',
      '15 vs 30 year home loan',
      'home loan pmi calculator',
    ],
    seo: {
      title: 'होम लोन कैलकुलेटर: मासिक EMI और PMI फ्री | UtilityFlow',
      description:
        'डाउन पेमेंट, टैक्स, होम इंश्योरेंस, HOA फीस और PMI के साथ मासिक होम लोन पेमेंट का अनुमान लगाएँ — मुफ्त, सीधे आपके ब्राउज़र में। रिज़ल्ट तुरंत और सटीक मिलता है।',
      primaryKeyword: 'home loan calculator hindi',
      secondaryKeywords: ['mortgage calculator hindi', 'home loan emi kaise nikale', 'होम लोन कैलकुलेटर', 'home loan monthly payment calculator'],
      longTailKeywords: ['tax aur insurance ke sath monthly home loan payment kaise nikale', '15 saal vs 30 saal home loan payment compare kare', 'samay ke sath home loan balance kaise kam hota hai', 'mahine me kitna home loan de sakte hai kaise jane'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'अपनी असली मासिक हाउसिंग देनदारी मॉडल करें — मूलधन और ब्याज के साथ प्रॉपर्टी टैक्स, होम इंश्योरेंस, HOA फीस और प्राइवेट मॉर्गेज इंश्योरेंस (PMI) — कुल ब्याज और सालाना लोन कमी के साथ।',
  },
  'compound-interest-calculator': {
    slug: 'chakravriddhi-byaj-calculator',
    name: 'चक्रवृद्धि ब्याज कैलकुलेटर',
    shortDescription:
      'शुरुआती जमा, मासिक योगदान, कंपाउंडिंग फ्रीक्वेंसी और महँगाई समायोजन के साथ निवेश की बढ़ोतरी का अनुमान लगाएँ।',
    keywords: [
      'compound interest calculator hindi',
      'chakravriddhi byaj kaise nikale',
      'चक्रवृद्धि ब्याज कैलकुलेटर',
      'investment growth calculator hindi',
      'compound interest formula hindi',
      'monthly contribution compound interest',
      'sip return calculator hindi',
      'future value calculator hindi',
      'bachat par byaj kaise nikale',
    ],
    seo: {
      title: 'चक्रवृद्धि ब्याज कैलकुलेटर: बचत बढ़ाएँ | UtilityFlow',
      description:
        'शुरुआती राशि, मासिक जमा और दैनिक, मासिक, तिमाही या सालाना कंपाउंडिंग के साथ निवेश का भविष्य मूल्य जानें — साल-दर-साल टेबल के साथ, मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'compound interest calculator hindi',
      secondaryKeywords: ['chakravriddhi byaj kaise nikale', 'चक्रवृद्धि ब्याज कैलकुलेटर', 'investment growth calculator hindi', 'compound interest formula hindi'],
      longTailKeywords: ['monthly contribution ke sath compound interest online kaise nikale', 'monthly vs daily compounding growth compare kare', 'saal dar saal compound interest table kaise dekhe', '20 saal me meri bachat kitni badhegi kaise jane'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'देखें कि शुरुआती राशि और हर महीने का नियमित जमा चक्रवृद्धि ब्याज से सालों में कैसे बढ़ता है — कंपाउंडिंग फ्रीक्वेंसी चुनने के विकल्प और मूलधन बनाम ब्याज की साल-दर-साल टेबल के साथ।',
  },
  'discount-margin-calculator': {
    slug: 'chhoot-margin-calculator',
    name: 'डिस्काउंट और मार्जिन कैलकुलेटर',
    shortDescription:
      'स्टैक्ड डिस्काउंट के साथ सेल प्राइस निकालें या लागत से प्रॉफ़िट मार्जिन, मार्कअप % और ग्रॉस प्रॉफ़िट निकालें।',
    keywords: [
      'discount calculator hindi',
      'margin calculator hindi',
      'डिस्काउंट कैलकुलेटर',
      'markup vs margin kya hai',
      'sale price kaise nikale',
      'profit margin kaise nikale',
      'discount percent calculator hindi',
      'mrp par discount kaise nikale',
      'gross profit calculator hindi',
    ],
    seo: {
      title: 'डिस्काउंट और मार्जिन कैलकुलेटर: सेल प्राइस | UtilityFlow',
      description:
        'स्टैक्ड डिस्काउंट व टैक्स के साथ अंतिम सेल प्राइस निकालें, या लागत और सेल प्राइस से ग्रॉस मार्जिन बनाम मार्कअप तुलना करें — मुफ्त, तुरंत। अभी आज़माएँ।',
      primaryKeyword: 'discount calculator hindi',
      secondaryKeywords: ['margin calculator hindi', 'डिस्काउंट कैलकुलेटर', 'markup vs margin kya hai', 'sale price kaise nikale'],
      longTailKeywords: ['double discount aur tax ke sath final price kaise nikale', 'profit margin aur markup percentage me antar kya hai', 'ecommerce ke liye margin aur profit calculator', 'cost aur selling price se margin percent kaise nikale'],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'दो मोड के बीच आसानी से बदलें — रिटेल डिस्काउंट मोड (स्टैक्ड कूपन डिस्काउंट और वैकल्पिक सेल्स टैक्स) और मार्जिन-मार्कअप मोड — ताकि मार्जिन को मार्कअप से भ्रमित किए बिना प्रोडक्ट की सही कीमत तय करें।',
  },
  'vat-tax-calculator': {
    slug: 'gst-vat-tax-calculator',
    name: 'GST, VAT और टैक्स कैलकुलेटर',
    shortDescription:
      'नेट प्राइस में VAT, GST या सेल्स टैक्स जोड़ें या टैक्स-युक्त ग्रॉस इनवॉइस से टैक्स अलग करके निकालें।',
    keywords: [
      'gst calculator hindi',
      'vat calculator hindi',
      'gst kaise nikale online',
      'जीएसटी कैलकुलेटर',
      'tax calculator hindi',
      'reverse gst calculator',
      'gst included price se gst nikale',
      'net price se gst jode',
      'sales tax calculator hindi',
    ],
    seo: {
      title: 'GST, VAT और टैक्स कैलकुलेटर: नेट व ग्रॉस | UtilityFlow',
      description:
        'नेट सबटोटल में GST, VAT या सेल्स टैक्स जोड़ें, या टैक्स-युक्त कुल से टैक्स और टैक्स-पूर्व नेट प्राइस अलग करें — तुरंत, मुफ्त, बिना रजिस्ट्रेशन। अभी आज़माएँ।',
      primaryKeyword: 'gst calculator hindi',
      secondaryKeywords: ['vat calculator hindi', 'gst kaise nikale online', 'जीएसटी कैलकुलेटर', 'reverse gst calculator'],
      longTailKeywords: ['gross price se gst kaise nikale online', 'price me 18 percent gst ya custom rate kaise jode', 'invoice ka net tax aur gross breakdown kaise dekhe', 'total price se reverse gst kaise calculate kare'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'नेट प्राइस, टैक्स राशि और ग्रॉस कुल दोनों दिशाओं में निकालें — टैक्स-पूर्व सबटोटल में GST, VAT या सेल्स टैक्स जोड़ें, या टैक्स-युक्त रसीद से सटीक टैक्स-पूर्व राशि अलग करें।',
  },
  'salary-calculator': {
    slug: 'vetan-calculator',
    name: 'वेतन कैलकुलेटर',
    shortDescription:
      'कस्टम घंटे और साल के हफ़्तों के साथ प्रति घंटा, दिन, हफ़्ता, पखवाड़ा, महीना और सालाना वेतन बदलें।',
    keywords: [
      'salary calculator hindi',
      'वेतन कैलकुलेटर',
      'hourly to annual salary hindi',
      'monthly salary calculator hindi',
      'salary per hour kaise nikale',
      'annual salary to monthly hindi',
      'pay converter online hindi',
      'salary kitni banti hai calculator',
      'gross salary calculator hindi',
    ],
    seo: {
      title: 'वेतन कैलकुलेटर: प्रति घंटा से सालाना | UtilityFlow',
      description:
        'प्रति घंटा, दिन, हफ़्ता, पखवाड़ा, महीना और सालाना ग्रॉस वेतन बदलें — प्रति हफ़्ता घंटे और साल के पेड हफ़्ते कस्टम करके, पूरी तरह मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'salary calculator hindi',
      secondaryKeywords: ['वेतन कैलकुलेटर', 'hourly to annual salary hindi', 'monthly salary calculator hindi', 'salary per hour kaise nikale'],
      longTailKeywords: ['50 dollar per hour ko annual salary me kaise badle', 'bina vetan wale hafto ke sath gross salary breakdown', 'prati hafta ghante ke sath salary converter', 'annual salary ko monthly aur biweekly me kaise badle'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'किसी भी वेतन दर को — प्रति घंटा, दिन, हफ़्ता, पखवाड़ा, महीना या साल — सभी पेमेंट फ्रीक्वेंसी में बदलें, प्रति हफ़्ता काम के घंटे और साल के पेड हफ़्ते सेट करने के विकल्प के साथ।',
  },
  'tip-calculator': {
    slug: 'tip-calculator-bill',
    name: 'टिप और बिल बाँटने का कैलकुलेटर',
    shortDescription:
      'टिप की राशि, टिप से पहले टैक्स हटाने का विकल्प, प्रति व्यक्ति बिल बाँटना और साफ़ राउंडिंग निकालें।',
    keywords: [
      'tip calculator hindi',
      'bill split calculator hindi',
      'टिप कैलकुलेटर',
      'restaurant bill split kaise kare',
      'tip percent kaise nikale',
      'bill baantne wala calculator',
      'tip kitni deni chahiye',
      'bill per person kaise nikale',
      'restaurant tip calculator hindi',
    ],
    seo: {
      title: 'टिप कैलकुलेटर: बिल बाँटें और टिप निकालें | UtilityFlow',
      description:
        'रेस्टोरेंट टिप प्रतिशत के साथ निकालें, टैक्स-रहित सबटोटल पर टिप लगाएँ, बिल बराबर बाँटें और राउंड करें — मुफ्त, तेज़ और आसान। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'tip calculator hindi',
      secondaryKeywords: ['bill split calculator hindi', 'टिप कैलकुलेटर', 'restaurant bill split kaise kare', 'tip percent kaise nikale'],
      longTailKeywords: ['tax se pehle 18 ya 20 percent tip kaise nikale', 'dosto ke beech dinner bill aur tip kaise baante', 'per person total round karne wala tip calculator', 'tip aur tax ke sath restaurant bill kaise baante'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'रेस्टोरेंट, डिलीवरी या ग्रुप आउटिंग का उचित टिप तुरंत निकालें और बिल किसी भी संख्या के लोगों में बराबर बाँटें — टैक्स हटाने के विकल्प और बिल राउंडिंग के साथ।',
  },
  'bmi-calculator': {
    slug: 'bmi-nikale-online',
    name: 'BMI कैलकुलेटर',
    shortDescription:
      'मीट्रिक या इम्पीरियल यूनिट में बॉडी मास इंडेक्स (BMI) निकालें, WHO वज़न श्रेणी और स्वस्थ रेंज के साथ।',
    keywords: [
      'bmi calculator hindi',
      'bmi kaise nikale',
      'बीएमआई कैलकुलेटर',
      'body mass index hindi',
      'healthy weight range calculator',
      'bmi chart hindi',
      'mera bmi kitna hai',
      'bmi normal range kya hai',
      'weight height se bmi nikale',
    ],
    seo: {
      title: 'BMI कैलकुलेटर: बॉडी मास इंडेक्स निकालें | UtilityFlow',
      description:
        'मीट्रिक या इम्पीरियल यूनिट में अपना BMI निकालें, WHO वज़न श्रेणी देखें और अपनी ऊँचाई के लिए स्वस्थ वज़न रेंज जानें — मुफ्त, तुरंत। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'bmi calculator hindi',
      secondaryKeywords: ['bmi kaise nikale', 'बीएमआई कैलकुलेटर', 'body mass index hindi', 'healthy weight range calculator'],
      longTailKeywords: ['feet inch aur pound me bmi kaise nikale', 'who ki bmi category adult ke liye kya hai', 'apni height ke liye healthy weight range kaise jane', 'meri height ke liye sahi bmi range kya hai'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'वयस्कों का बॉडी मास इंडेक्स (BMI) मीट्रिक (सेमी/किलो) या इम्पीरियल (फ़ीट, इंच/पाउंड) माप से निकालें, विश्व स्वास्थ्य संगठन की वर्गीकरण श्रेणियाँ देखें और अपनी ऊँचाई के लिए 18.5 से 24.9 की स्वस्थ वज़न रेंज देखें।',
  },
  'calorie-calculator': {
    slug: 'calorie-nikale-tdee',
    name: 'कैलोरी और TDEE कैलकुलेटर',
    shortDescription:
      'वज़न लक्ष्य के साथ बेसल मेटाबॉलिक रेट (BMR) और कुल दैनिक ऊर्जा व्यय (TDEE) का अनुमान लगाएँ।',
    keywords: [
      'calorie calculator hindi',
      'tdee calculator hindi',
      'bmr calculator hindi',
      'daily calorie intake kaise nikale',
      'कैलोरी कैलकुलेटर',
      'weight loss calorie calculator',
      'calorie deficit kaise nikale',
      'din me kitni calorie chahiye',
      'macro calculator hindi',
    ],
    seo: {
      title: 'कैलोरी और TDEE कैलकुलेटर: BMR व मैक्रो | UtilityFlow',
      description:
        'Mifflin-St Jeor फॉर्मूले से BMR और TDEE जानें, वज़न घटाने या बढ़ाने का लक्ष्य तय करें और मैक्रो प्लान बनाएँ — मुफ्त, ऑनलाइन। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'calorie calculator hindi',
      secondaryKeywords: ['tdee calculator hindi', 'bmr calculator hindi', 'daily calorie intake kaise nikale', 'कैलोरी कैलकुलेटर'],
      longTailKeywords: ['maintenance calorie aur weight loss deficit online kaise nikale', 'mifflin st jeor se daily calorie kharch kaise nikale', 'metric aur imperial tdee macro calculator', 'vajan kam karne ke liye din me kitni calorie khaye'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'क्लिनिकली मान्य Mifflin-St Jeor समीकरण से अपना बेसल मेटाबॉलिक रेट (BMR) और कुल दैनिक ऊर्जा व्यय (TDEE) जानें — हल्का डेफ़िसिट, स्टैंडर्ड फैट लॉस, लीन गेन और मेंटेनेंस लक्ष्य व मैक्रो के साथ।',
  },
  'date-difference-calculator': {
    slug: 'date-difference-nikale',
    name: 'तारीख़ अंतर कैलकुलेटर',
    shortDescription:
      'दो तारीख़ों के बीच सटीक साल, महीने, दिन, कार्यदिवस और वीकेंड दिन निकालें, या कैलेंडर अंतर जोड़ें-घटाएँ।',
    keywords: [
      'date difference calculator hindi',
      'do tarikh ke beech din ginne',
      'तारीख़ अंतर कैलकुलेटर',
      'days between two dates hindi',
      'working days calculator hindi',
      'tarikh me din jodne wala tool',
      'kitne din bache hai calculator',
      'date se din kaise gine',
      'age days calculator hindi',
    ],
    seo: {
      title: 'तारीख़ अंतर कैलकुलेटर: दिन गिनें ऑनलाइन | UtilityFlow',
      description:
        'दो तारीख़ों के बीच सटीक साल, महीने, दिन, कार्यदिवस और वीकेंड दिन गिनें, या किसी तारीख़ से कैलेंडर अंतर जोड़ें-घटाएँ — मुफ्त। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'date difference calculator hindi',
      secondaryKeywords: ['do tarikh ke beech din ginne', 'तारीख़ अंतर कैलकुलेटर', 'days between two dates hindi', 'working days calculator hindi'],
      longTailKeywords: ['do tarikh ke beech working days aur weekend din kaise gine', 'do tarikh ke beech exact mahine aur din kaise nikale', 'kisi tarikh me saal mahine din kaise jode ya ghataye', 'do tarikh ke beech kitne working days hai online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'किन्हीं दो तारीख़ों के बीच सटीक कैलेंडर अंतर मापें — कार्यदिवस बनाम वीकेंड दिन की गिनती और अंतिम तारीख़ गिनने के विकल्प सहित — या किसी संदर्भ तारीख़ से साल, महीने और दिन जोड़ें-घटाएँ।',
  },
  'time-duration-calculator': {
    slug: 'samay-avdhi-calculator',
    name: 'समय अवधि कैलकुलेटर',
    shortDescription:
      'घड़ी के समय के बीच बीता समय HH:MM:SS निकालें (ब्रेक और नाइट शिफ़्ट सहित) या कई पंक्तियों की टाइमशीट जोड़ें।',
    keywords: [
      'time duration calculator hindi',
      'samay avdhi calculator',
      'घंटे गिनने वाला कैलकुलेटर',
      'hours calculator hindi',
      'do samay ke beech antar nikale',
      'timesheet calculator hindi',
      'kaam ke ghante kaise gine',
      'hours minutes add karne wala tool',
      'shift hours calculator hindi',
    ],
    seo: {
      title: 'समय अवधि कैलकुलेटर: घंटे, टाइमशीट ऑनलाइन | UtilityFlow',
      description:
        'घंटे, मिनट और सेकंड में बीता समय निकालें, बिना वेतन वाला ब्रेक घटाएँ, नाइट शिफ़्ट संभालें या टाइमशीट पंक्तियाँ जोड़ें — मुफ्त। आपका डेटा कभी सर्वर पर नहीं जाता।',
      primaryKeyword: 'time duration calculator hindi',
      secondaryKeywords: ['samay avdhi calculator', 'घंटे गिनने वाला कैलकुलेटर', 'hours calculator hindi', 'timesheet calculator hindi'],
      longTailKeywords: ['bina vetan wale break aur night shift ke sath beeta samay kaise nikale', 'hh mm ss duration ko decimal ghante me kaise badle', 'kai ghante minute second wali row kaise jode', 'break ke sath kaam ke ghante online kaise nikale'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'घड़ी के दो समय के बीच बीते सटीक घंटे, मिनट और सेकंड जानें — बिना वेतन वाले ब्रेक की कटौती और आधी रात पार करने वाली नाइट शिफ़्ट के साथ — या असीमित अवधि पंक्तियाँ जोड़कर पेरोल के दशमलव घंटे पाएँ।',
  },
  'unit-converter': {
    slug: 'ikai-converter',
    name: 'यूनिट कन्वर्टर',
    shortDescription:
      'पूरी रेफ़रेंस टेबल के साथ लंबाई, वज़न, तापमान, क्षेत्रफल, आयतन, गति और डिजिटल स्टोरेज की यूनिट बदलें।',
    keywords: [
      'unit converter hindi',
      'यूनिट कन्वर्टर',
      'metric to imperial converter hindi',
      'meter to feet converter hindi',
      'kg to pound converter hindi',
      'celsius to fahrenheit kaise badle',
      'liter to gallon converter',
      'km to miles converter hindi',
      'unit badalne wala tool',
    ],
    seo: {
      title: 'यूनिट कन्वर्टर: लंबाई, वज़न और डेटा फ्री | UtilityFlow',
      description:
        'लंबाई, वज़न, तापमान, क्षेत्रफल, आयतन, गति और डिजिटल स्टोरेज को मीट्रिक व इम्पीरियल यूनिट में बदलें — पूरी रेफ़रेंस टेबल के साथ, मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'unit converter hindi',
      secondaryKeywords: ['यूनिट कन्वर्टर', 'metric to imperial converter hindi', 'meter to feet converter hindi', 'kg to pound converter hindi'],
      longTailKeywords: ['kilometer ko miles aur kg ko pound me online kaise badle', 'gigabyte decimal vs gibibyte storage converter', 'science aur engineering unit converter table ke sath', 'celsius ko fahrenheit aur kelvin me online kaise badle'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'सात माप परिवारों में तुरंत बदलें — लंबाई, वज़न और द्रव्यमान, तापमान, क्षेत्रफल, आयतन, गति और डिजिटल स्टोरेज — कैटेगरी की हर यूनिट दिखाने वाली ऑटोमैटिक साइड-बाय-साइड टेबल के साथ।',
  },
  'roman-numeral-converter': {
    slug: 'roman-ank-converter',
    name: 'रोमन अंक कन्वर्टर',
    shortDescription:
      'संख्याओं को रोमन अंकों में और रोमन अंकों को संख्याओं में तुरंत बदलें — तारीखों को भी रोमन अंकों में बदलें।',
    keywords: [
      'roman numeral converter hindi',
      'roman ank kaise nikale',
      'रोमन अंक कन्वर्टर',
      'roman numerals to numbers hindi',
      'roman ank date converter',
      'roman numeral calculator hindi',
      'roman ank 1 se 3999',
      'saal ko roman ank me badle',
      'roman ank chart hindi',
    ],
    seo: {
      title: 'रोमन अंक कन्वर्टर: संख्या और तारीख बदलें | UtilityFlow',
      description:
        'संख्याओं को रोमन अंकों में और रोमन अंकों को संख्याओं में तुरंत बदलें। साल, जन्मदिन और तारीखों के लिए मुफ्त रोमन अंक कन्वर्टर ऑनलाइन आज ही ट्राई करें — मुफ्त।',
      primaryKeyword: 'roman numeral converter hindi',
      secondaryKeywords: [
        'roman ank kaise nikale',
        'रोमन अंक कन्वर्टर',
        'roman numerals to numbers hindi',
        'roman ank date converter',
      ],
      longTailKeywords: [
        'number ko roman ank me kaise badle',
        '2026 roman ank me kya hota hai',
        'apna birthday roman ank me kaise badle',
        'saal ko roman ank me badalne wala tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '1 से 3999 तक किसी भी पूर्ण संख्या को रोमन अंकों में बदलें, या रोमन अंकों को आम संख्याओं की तरह पढ़ें — और पूरी तारीख को भी रोमन अंकों में बदलें, सब कुछ अपने ब्राउज़र में तुरंत।',
  },
  'online-hourly-calculator': {
    slug: 'online-ghanta-calculator',
    name: 'ऑनलाइन घंटा कैलकुलेटर',
    shortDescription:
      'दो समयों के बीच घंटे, ब्रेक सहित काम के घंटे, दशमलव घंटे और प्रति घंटा वेतन निकालें — ब्राउज़र में मुफ़्त।',
    keywords: [
      'online ghanta calculator hindi',
      'kaam ke ghante calculator',
      'do samay ke beech ghante',
      'prati ghanta vetan calculator',
      'decimal ghante calculator',
      'overtime vetan',
      'samay jodna ghatana',
      'maine kitne ghante kaam kiya',
    ],
    seo: {
      title: 'ऑनलाइन घंटा कैलकुलेटर – घंटे और वेतन निकालें | UtilityFlow',
      description:
        'मुफ़्त ऑनलाइन घंटा कैलकुलेटर से काम के घंटे, समय का अंतर, ब्रेक, दशमलव घंटे और प्रति घंटा कमाई तुरंत निकालें।',
      primaryKeyword: 'online ghanta calculator hindi',
      secondaryKeywords: [
        'kaam ke ghante calculator',
        'do samay ke beech ghante',
        'prati ghanta vetan calculator',
        'decimal ghante calculator',
      ],
      longTailKeywords: [
        'do samay ke beech ghante kaise nikale',
        'break ke saath kaam ke ghante kaise nikale',
        'ghante minute ko decimal ghante me badle',
        'overtime ke saath prati ghanta vetan nikale',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '12 या 24 घंटे के फॉर्मेट में दो समयों के बीच घंटे निकालें, तय ब्रेक वाली शिफ्ट का हिसाब रखें, समय जोड़ें या घटाएँ, घंटे-मिनट को दशमलव घंटों में बदलें, और काम के घंटों को वेतन में बदलें — ओवरटाइम, ब्रेक और अपनी मुद्रा के साथ, सब कुछ ब्राउज़र में तुरंत।',
  },
};
