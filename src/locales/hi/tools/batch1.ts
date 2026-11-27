import type { ToolLocaleOverride } from '../../types';

/**
 * Hindi overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Original Hindi copy, SEO-optimized for Hindi search intent.
 * Slugs are romanized Hindi, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const HI_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'shabd-ganak',
    name: 'शब्द गणक',
    shortDescription:
      'शब्द, अक्षर, वाक्य, अनुच्छेद, पढ़ने का समय और सबसे ज़्यादा दोहराए गए शब्द तुरंत गिनें।',
    keywords: [
      'शब्द गणक',
      'word counter online hindi',
      'shabd ginne wala tool',
      'online shabd ginna',
      'शब्द गिनने का टूल',
      'reading time calculator hindi',
      'वाक्य गिनने वाला टूल',
      'word count kaise kare',
      'शब्द और अक्षर गिनें',
    ],
    seo: {
      title: 'शब्द गणक: शब्द और पढ़ने का समय गिनें | UtilityFlow',
      description:
        'शब्द, अक्षर, वाक्य और अनुच्छेद तुरंत गिनें और पढ़ने व बोलने का अनुमानित समय जानें — निबंध, लेख और असाइनमेंट के लिए, बिना कुछ अपलोड किए। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'शब्द गणक',
      secondaryKeywords: ['word counter online hindi', 'shabd ginne wala tool', 'पढ़ने का समय कैलकुलेटर', 'शब्द गिनने का टूल'],
      longTailKeywords: ['online shabd aur akshar ginne wala tool', 'लेख में शब्द कितने हैं कैसे जानें', 'reading time kaise nikale hindi me', 'बिना अपलोड किए शब्द गिनने वाला टूल'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अपने लेख के शब्दों, अक्षरों, वाक्यों की संख्या और पढ़ने व बोलने का अनुमानित समय रीयल-टाइम में देखें — आपका टेक्स्ट किसी सर्वर पर नहीं जाता, सब कुछ आपके ब्राउज़र में होता है।',
  },
  'character-counter': {
    slug: 'akshar-ganak',
    name: 'अक्षर गणक',
    shortDescription:
      'स्पेस सहित और बिना स्पेस के अक्षरों की सटीक लंबाई, UTF-8 बाइट्स और सोशल मीडिया व SEO की अक्षर-सीमा देखें।',
    keywords: [
      'अक्षर गणक',
      'character counter online',
      'akshar ginne wala tool',
      'अक्षर गिनने का टूल',
      'meta description length checker',
      'character count kaise kare',
      'अक्षर कितने हैं गिनें',
      'sms character counter hindi',
      'seo title length checker',
    ],
    seo: {
      title: 'अक्षर गणक: अक्षर और बाइट्स गिनें ऑनलाइन | UtilityFlow',
      description:
        'स्पेस सहित और बिना स्पेस के अक्षर, शब्द, अंक और UTF-8 बाइट्स गिनें और SEO, SMS व सोशल मीडिया की अक्षर-सीमा पर अपनी प्रगति लाइव देखें। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'अक्षर गणक',
      secondaryKeywords: ['character counter online', 'akshar ginne wala tool', 'अक्षर गिनने का टूल', 'meta description length checker'],
      longTailKeywords: ['bina space ke akshar kaise gine', 'seo meta description ki length kaise check kare', 'utf 8 bytes kaise nikale online', 'twitter character limit check karne wala tool'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अक्षर, अंक, स्पेस और UTF-8 बाइट्स की सटीक गिनती देखें और SEO स्निपेट, SMS व सोशल मीडिया पोस्ट की अक्षर-सीमा के मुकाबले अपनी प्रगति लाइव ट्रैक करें।',
  },
  'case-converter': {
    slug: 'upper-lower-case-converter',
    name: 'केस कन्वर्टर',
    shortDescription:
      'टेक्स्ट को UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case और kebab-case में बदलें।',
    keywords: [
      'case converter online',
      'capital small converter',
      'upper to lower case converter',
      'text ko capital kaise kare',
      'title case converter hindi',
      'camelcase converter online',
      'snake case generator',
      'capital letter small kaise kare',
      'sentence case converter',
    ],
    seo: {
      title: 'केस कन्वर्टर: Capital Small Text बदलें | UtilityFlow',
      description:
        'टेक्स्ट को UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case और kebab-case में एक क्लिक में बदलें — मुफ्त, तेज़ और प्राइवेट। अभी आज़माएँ।',
      primaryKeyword: 'case converter online',
      secondaryKeywords: ['capital small converter', 'upper to lower case converter', 'title case converter hindi', 'camelcase converter online'],
      longTailKeywords: ['text ko capital se small kaise kare online', 'title case me text kaise badle', 'camelcase aur snake case converter free', 'caps lock se likha text kaise thik kare'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'गलती से Caps Lock में लिखा टेक्स्ट ठीक करें, लेखों के शीर्षक Title Case में बदलें या वेरिएबल के नाम camelCase, PascalCase, snake_case व kebab-case में एक क्लिक में फॉर्मेट करें।',
  },
  'remove-duplicate-lines': {
    slug: 'duplicate-line-hatayen',
    name: 'डुप्लीकेट लाइन हटाएँ',
    shortDescription:
      'केस-सेंसिटिव, स्पेस ट्रिम और अल्फाबेटिकल सॉर्ट के विकल्पों के साथ लिस्ट और लॉग से डुप्लीकेट लाइनें हटाएँ।',
    keywords: [
      'duplicate lines hatane wala tool',
      'remove duplicate lines online',
      'list se duplicate hataye',
      'duplicate line remover hindi',
      'डुप्लीकेट लाइन हटाने का टूल',
      'unique lines filter online',
      'duplicate hatane ka tarika',
      'list saaf karne wala tool',
      'duplicate entries remove kare',
    ],
    seo: {
      title: 'डुप्लीकेट लाइन हटाएँ: लिस्ट साफ़ करें | UtilityFlow',
      description:
        'लिस्ट, ईमेल, URL या लॉग से दोहराई गई लाइनें तुरंत हटाएँ — स्पेस ट्रिम, केस-सेंसिटिव और सॉर्ट के विकल्पों के साथ, सीधे आपके ब्राउज़र में। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'duplicate lines hatane wala tool',
      secondaryKeywords: ['remove duplicate lines online', 'list se duplicate hataye', 'duplicate line remover hindi', 'unique lines filter online'],
      longTailKeywords: ['list se duplicate lines kaise hataye online', 'email list se duplicate email hatane wala tool', 'order same rakhte hue duplicate hataye', 'duplicate lines remove karne ka free tool'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'बिखरी हुई लिस्ट, कीवर्ड एक्सपोर्ट, ईमेल पते या सर्वर लॉग से डुप्लीकेट एंट्री हटाकर साफ़ करें — स्पेस ट्रिम, केस-सेंसिटिव और आउटपुट के क्रम पर पूरा नियंत्रण रखें।',
  },
  'text-diff-checker': {
    slug: 'do-text-compare-kare',
    name: 'टेक्स्ट तुलना टूल',
    shortDescription:
      'दो टेक्स्ट ब्लॉक की लाइन-दर-लाइन तुलना करके जोड़ी गई, हटाई गई और बिना बदली लाइनें पहचानें।',
    keywords: [
      'text compare online',
      'do text compare kare',
      'text difference checker hindi',
      'दो टेक्स्ट में अंतर देखें',
      'text diff tool online',
      'compare two texts online',
      'text me antar kaise pata kare',
      'diff checker hindi',
      'दो फाइल की तुलना करें',
    ],
    seo: {
      title: 'टेक्स्ट तुलना टूल: दो टेक्स्ट में अंतर देखें | UtilityFlow',
      description:
        'दो टेक्स्ट, कोड या कॉन्फ़िग फाइल की लाइन-दर-लाइन तुलना करें और जोड़ी व हटाई गई लाइनें साफ़ देखें — बिना कुछ अपलोड किए, पूरी तरह मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'text compare online',
      secondaryKeywords: ['do text compare kare', 'text difference checker hindi', 'दो टेक्स्ट में अंतर देखें', 'text diff tool online'],
      longTailKeywords: ['do text file me antar kaise nikale online', 'do version ke beech badlav kaise dekhe', 'text compare karne wala free tool hindi', 'document ke do version compare kare'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'लेख, कॉन्ट्रैक्ट या कॉन्फ़िग के दो वर्शन के बीच हर जोड़ी गई, हटाई गई और बदली हुई लाइन पहचानें — लाइन-दर-लाइन तुलना इंजन से, तुरंत और प्राइवेट।',
  },
  'whitespace-remover': {
    slug: 'extra-space-hatayen',
    name: 'एक्स्ट्रा स्पेस हटाएँ',
    shortDescription:
      'PDF या वेब से कॉपी किए टेक्स्ट के एक्स्ट्रा स्पेस, टैब, खाली लाइनें और अनचाहे लाइन ब्रेक हटाएँ।',
    keywords: [
      'extra space hatane wala tool',
      'remove extra spaces online',
      'pdf se copy text saaf kare',
      'खाली लाइन हटाने का टूल',
      'whitespace remover hindi',
      'line break hataye online',
      'text saaf karne wala tool',
      'extra space kaise hataye',
      'pdf text ki line tutna thik kare',
    ],
    seo: {
      title: 'एक्स्ट्रा स्पेस हटाएँ: टेक्स्ट साफ़ करें | UtilityFlow',
      description:
        'PDF से कॉपी किए टेक्स्ट के एक्स्ट्रा स्पेस, टैब, खाली लाइनें और टूटे लाइन ब्रेक हटाएँ — तेज़, मुफ्त और प्राइवेट, बिना रजिस्ट्रेशन के। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'extra space hatane wala tool',
      secondaryKeywords: ['remove extra spaces online', 'pdf se copy text saaf kare', 'खाली लाइन हटाने का टूल', 'whitespace remover hindi'],
      longTailKeywords: ['pdf se copy kiye text ke extra space kaise hataye', 'khali lines aur extra space ek sath hataye', 'tab aur kai space ko ek space me badle', 'copy kiye hue text ko saaf karne wala tool'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF, ईमेल, स्प्रेडशीट या वेबपेज से कॉपी किए बिखरे टेक्स्ट को साफ़ करें — दोहराए स्पेस सिकोड़ें, टैब बदलें, लाइन के किनारे ट्रिम करें और लाइन ब्रेक सामान्य करें।',
  },
  'sort-lines': {
    slug: 'line-sort-kare',
    name: 'लाइन सॉर्ट करें',
    shortDescription:
      'लिस्ट को A–Z, Z–A, नैचुरल क्रम (1, 2, 10), अक्षर-लंबाई, उल्टा या रैंडम शफ़ल में सॉर्ट करें।',
    keywords: [
      'line sort karne wala tool',
      'sort lines alphabetically online',
      'list ko a to z kare',
      'अल्फाबेटिकल सॉर्ट टूल',
      'lines ko sort kaise kare',
      'natural sort online hindi',
      'list shuffle karne wala tool',
      'line ulta karke sort kare',
      'a to z sort karne ka tool',
    ],
    seo: {
      title: 'लाइन सॉर्ट करें: लिस्ट A–Z में जमाएँ ऑनलाइन | UtilityFlow',
      description:
        'लाइनों को A–Z, Z–A, नैचुरल नंबर क्रम, लंबाई, उल्टा या रैंडम शफ़ल में सॉर्ट करें — डुप्लीकेट और खाली लाइनें हटाकर लिस्ट को साफ़ रखें। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'line sort karne wala tool',
      secondaryKeywords: ['sort lines alphabetically online', 'list ko a to z kare', 'अल्फाबेटिकल सॉर्ट टूल', 'natural sort online hindi'],
      longTailKeywords: ['list ko alphabetically kaise sort kare online', 'number wali list ko natural order me sort kare', 'lines ko length ke hisab se sort kare', 'list ko ulta aur shuffle karne wala tool'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'लिस्ट, बिब्लियोग्राफी, इन्वेंटरी SKU या कोड इंपोर्ट को अल्फाबेटिकल, नैचुरल नंबर क्रम, अक्षर-लंबाई या उल्टे क्रम में व्यवस्थित करें — एक क्लिक में।',
  },
  'find-and-replace': {
    slug: 'text-khoj-badlo',
    name: 'खोजें और बदलें',
    shortDescription:
      'केस-सेंसिटिव, पूरे शब्द की मैचिंग और RegExp सपोर्ट के साथ टेक्स्ट में शब्द खोजकर बदलें।',
    keywords: [
      'find and replace online',
      'text me word badle',
      'खोजें और बदलें टूल',
      'bulk text replace online',
      'find replace regex hindi',
      'शब्द बदलने वाला टूल',
      'text replace karne ka tool',
      'ek sath kai word badle',
      'regex find replace online',
    ],
    seo: {
      title: 'खोजें और बदलें: टेक्स्ट में शब्द बदलें | UtilityFlow',
      description:
        'मैच काउंट, केस-सेंसिटिव, पूरे शब्द और RegExp कैप्चर ग्रुप के साथ टेक्स्ट में खोजें-बदलें करें — सीधे ब्राउज़र में, बिना रजिस्ट्रेशन के। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'find and replace online',
      secondaryKeywords: ['text me word badle', 'खोजें और बदलें टूल', 'bulk text replace online', 'find replace regex hindi'],
      longTailKeywords: ['text me ek sath kai word kaise badle', 'sirf poora word replace karne wala tool', 'regex se text find replace kaise kare', 'bade text me word badalne ka free tool'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'लेख, CSV या कोड ब्लॉक में एक साथ बड़े पैमाने पर खोजें-बदलें करें — सटीक टेक्स्ट मैच, पूरे शब्द की सीमा या रेगुलर एक्सप्रेशन के कैप्चर ग्रुप के साथ।',
  },
  'text-reverser': {
    slug: 'text-ulta-kare',
    name: 'टेक्स्ट उल्टा करें',
    shortDescription:
      'पूरा टेक्स्ट उल्टा करें, शब्दों का क्रम बदलें, हर शब्द के अक्षर पलटें या लाइनों का क्रम उल्टा करें।',
    keywords: [
      'text ulta karne wala tool',
      'reverse text online hindi',
      'टेक्स्ट उल्टा करें',
      'word order ulta kare',
      'ulta text generator',
      'mirror text generator hindi',
      'line ulta karne wala tool',
      'text reverse kaise kare',
      'ulta likhne wala tool',
    ],
    seo: {
      title: 'टेक्स्ट उल्टा करें: शब्द और लाइन पलटें | UtilityFlow',
      description:
        'अक्षर उल्टा करें, शब्दों का क्रम बदलें, हर शब्द पलटें या लाइनों का क्रम उल्टा करें — Unicode-सुरक्षित, मुफ्त, प्राइवेट और तुरंत काम करने वाला। अभी आज़माएँ।',
      primaryKeyword: 'text ulta karne wala tool',
      secondaryKeywords: ['reverse text online hindi', 'टेक्स्ट उल्टा करें', 'word order ulta kare', 'ulta text generator'],
      longTailKeywords: ['poora text ulta kaise kare online', 'sentence ke words ka order ulta kare', 'har word ke akshar ulta karne wala tool', 'lines ko neeche se upar ulta kare'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अक्षरों का क्रम पलटें, हर लाइन में शब्दों का क्रम बदलें, हर शब्द के अक्षर उल्टा करें या कई लाइनों की लिस्ट नीचे से ऊपर उल्टा दें — Unicode के साथ पूरी तरह सुरक्षित।',
  },
  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-text-generator',
    name: 'लोरेम इप्सम जनरेटर',
    shortDescription:
      'डिज़ाइन के लिए पैराग्राफ, वाक्य या मनचाही शब्द-संख्या में डमी टेक्स्ट बनाएँ, वैकल्पिक HTML <p> टैग के साथ।',
    keywords: [
      'lorem ipsum generator hindi',
      'dummy text generator online',
      'lorem ipsum text kaise banaye',
      'डमी टेक्स्ट जनरेटर',
      'placeholder text generator',
      'lorem ipsum hindi me',
      'filler text generator online',
      'lorem ipsum paragraphs',
      'design ke liye dummy text',
    ],
    seo: {
      title: 'लोरेम इप्सम जनरेटर: डमी टेक्स्ट बनाएँ | UtilityFlow',
      description:
        'पैराग्राफ, वाक्य या सटीक शब्द-संख्या में लोरेम इप्सम डमी टेक्स्ट बनाएँ — वैकल्पिक HTML टैग के साथ, डिज़ाइन मॉकअप के लिए बिल्कुल मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'lorem ipsum generator hindi',
      secondaryKeywords: ['dummy text generator online', 'lorem ipsum text kaise banaye', 'डमी टेक्स्ट जनरेटर', 'placeholder text generator'],
      longTailKeywords: ['word count ke hisab se lorem ipsum kaise banaye', 'html p tag ke sath lorem ipsum generator', 'design mockup ke liye dummy text banaye', 'website design ke liye filler text generator'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'वायरफ्रेम, टाइपोग्राफी टेस्ट और डिज़ाइन प्रोटोटाइप के लिए सटीक पैराग्राफ, वाक्य या शब्द-संख्या में साफ़ डमी टेक्स्ट बनाएँ — वैकल्पिक HTML पैराग्राफ टैग के साथ।',
  },
  'readability-checker': {
    slug: 'readability-score-checker',
    name: 'पठनीयता जाँच टूल',
    shortDescription:
      'Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog और SMOG पठनीयता स्कोर निकालें।',
    keywords: [
      'readability checker online',
      'flesch reading ease hindi',
      'पठनीयता जाँच टूल',
      'readability score kaise check kare',
      'flesch kincaid grade level',
      'gunning fog calculator hindi',
      'text readability check kare',
      'lekhan kitna aasan hai check kare',
      'readability score checker hindi',
    ],
    seo: {
      title: 'पठनीयता जाँच टूल: Flesch स्कोर निकालें | UtilityFlow',
      description:
        'Flesch Reading Ease, Flesch-Kincaid, Gunning Fog और SMOG स्कोर के साथ लेख की पठनीयता जाँचें — मुफ्त, प्राइवेट, सीधे आपके ब्राउज़र में। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'readability checker online',
      secondaryKeywords: ['flesch reading ease hindi', 'पठनीयता जाँच टूल', 'readability score kaise check kare', 'flesch kincaid grade level'],
      longTailKeywords: ['flesch kincaid grade level kaise nikale online', 'gunning fog aur smog readability score kaise check kare', 'article ki readability kaise sudhare', 'achha flesch reading ease score kitna hota hai'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'अपने लेख को समझना कितना आसान है, यह चार जाने-माने फॉर्मूलों से जाँचें — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog और SMOG — मुश्किल शब्दों की पहचान के साथ।',
  },
  'word-frequency-counter': {
    slug: 'shabd-frequency-ganak',
    name: 'शब्द आवृत्ति गणक',
    shortDescription:
      'स्टॉप-वर्ड फ़िल्टर और एक क्लिक में CSV एक्सपोर्ट के साथ 1, 2 और 3 शब्दों के वाक्यांशों की आवृत्ति गिनें।',
    keywords: [
      'word frequency counter online',
      'shabd kitni baar aaya gine',
      'शब्द आवृत्ति गणक',
      'keyword density checker hindi',
      'phrase frequency counter',
      'word repeat count kaise kare',
      'ngram counter hindi',
      'text me shabd ginne wala tool',
      'keyword frequency check kare',
    ],
    seo: {
      title: 'शब्द आवृत्ति गणक: कीवर्ड घनत्व जाँचें | UtilityFlow',
      description:
        'किसी भी टेक्स्ट में 1, 2 और 3 शब्दों के वाक्यांशों की आवृत्ति गिनें — स्टॉप-वर्ड फ़िल्टर और एक क्लिक में CSV एक्सपोर्ट के साथ, मुफ्त। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'word frequency counter online',
      secondaryKeywords: ['shabd kitni baar aaya gine', 'शब्द आवृत्ति गणक', 'keyword density checker hindi', 'phrase frequency counter'],
      longTailKeywords: ['text me keyword kitni baar aaya kaise gine', '2 aur 3 shabd wale phrase ka frequency check kare', 'word frequency table ko csv me download kare', 'content me keyword density kaise check kare'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'कंटेंट ड्राफ्ट में कीवर्ड संतुलन, ज़्यादा इस्तेमाल हुए वाक्यांश और कई शब्दों के n-gram पैटर्न जाँचें — तुरंत आवृत्ति तालिका, स्टॉप-वर्ड फ़िल्टर और डाउनलोड करने योग्य CSV रिपोर्ट के साथ।',
  },
  'text-to-slug': {
    slug: 'text-se-slug-banaye',
    name: 'टेक्स्ट से स्लग बनाएँ',
    shortDescription:
      'कोड, फाइल नाम और डेटाबेस की के लिए किसी भी टेक्स्ट को साफ़ URL स्लग में बदलें, एक्सेंट ट्रांसलिटरेशन और बैच मोड के साथ।',
    keywords: [
      'text to slug converter hindi',
      'slug kaise banaye online',
      'url slug generator hindi',
      'slugify text online',
      'seo friendly url kaise banaye',
      'title se slug banane wala tool',
      'slug banane ka tarika',
      'clean url slug generator',
      'slug generator online hindi',
    ],
    seo: {
      title: 'टेक्स्ट से स्लग बनाएँ: SEO URL स्लग टूल | UtilityFlow',
      description:
        'ब्लॉग शीर्षक या प्रोडक्ट नाम को साफ़, SEO-फ्रेंडली URL स्लग में बदलें — एक्सेंट ट्रांसलिटरेशन और बैच मोड के साथ, पूरी तरह मुफ्त। रिज़ल्ट तुरंत और सटीक मिलता है।',
      primaryKeyword: 'text to slug converter hindi',
      secondaryKeywords: ['slug kaise banaye online', 'url slug generator hindi', 'slugify text online', 'seo friendly url kaise banaye'],
      longTailKeywords: ['blog title se seo friendly slug kaise banaye', 'kai heading ko ek sath slug me kaise badle', 'accent wale akshar ko slug me kaise badle', 'hyphen ya underscore slug separator kaise chune'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'ब्लॉग शीर्षक, प्रोडक्ट नाम और कई लाइनों वाली कंटेंट सूची को साफ़, ASCII, URL-सुरक्षित स्लग में बदलें — एक्सेंट अपने आप बदल जाते हैं, डिलिमिटर और स्टॉप-वर्ड हटाने के नियंत्रण के साथ।',
  },
  'markdown-previewer': {
    slug: 'markdown-preview-tool',
    name: 'मार्कडाउन प्रीव्यूअर',
    shortDescription:
      'लाइव स्प्लिट एडिटर में Markdown लिखें, सुरक्षित रेंडर किया गया फॉर्मेट देखें और साफ़ HTML कॉपी या एक्सपोर्ट करें।',
    keywords: [
      'markdown previewer online hindi',
      'markdown to html converter',
      'markdown editor online',
      'मार्कडाउन प्रीव्यू टूल',
      'markdown live preview kare',
      'readme preview online',
      'markdown se html kaise banaye',
      'markdown editor hindi me',
      'markdown html export kare',
    ],
    seo: {
      title: 'मार्कडाउन प्रीव्यूअर: लाइव प्रीव्यू और HTML | UtilityFlow',
      description:
        'Markdown लिखें और लाइव रेंडर देखें, कंपाइल किया HTML देखें और साफ़ HTML डॉक्यूमेंट कॉपी या डाउनलोड करें — मुफ्त, तेज़ और प्राइवेट। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'markdown previewer online hindi',
      secondaryKeywords: ['markdown to html converter', 'markdown editor online', 'मार्कडाउन प्रीव्यू टूल', 'markdown live preview kare'],
      longTailKeywords: ['markdown live preview ke sath html export kare', 'readme markdown ko html me kaise badle', 'bina upload kiye browser me markdown editor', 'github readme publish karne se pehle preview kare'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'README, डॉक्यूमेंटेशन और फॉर्मेट वाली नोट्स एक रिस्पॉन्सिव Markdown एडिटर में लिखें — लाइव रेंडर प्रीव्यू, सुरक्षित HTML एस्केप, रॉ HTML जाँच और एक क्लिक HTML एक्सपोर्ट के साथ।',
  },
  'line-prefix-suffix': {
    slug: 'line-number-prefix-suffix',
    name: 'लाइन नंबर और प्रीफ़िक्स/सफ़िक्स जोड़ें',
    shortDescription:
      'लिस्ट, SQL क्लॉज़ और कोड के लिए हर लाइन में लाइन नंबर, कस्टम प्रीफ़िक्स और सफ़िक्स जोड़ें।',
    keywords: [
      'line prefix suffix jodne wala tool',
      'line number add karne wala tool',
      'har line me prefix jode',
      'लाइन नंबर जोड़ने का टूल',
      'sql in clause formatter hindi',
      'line ko quotes me kaise lapete',
      'har line ke aage peeche text jode',
      'line me comma jodne wala tool',
      'prefix suffix generator online',
    ],
    seo: {
      title: 'लाइन नंबर, प्रीफ़िक्स और सफ़िक्स जोड़ें | UtilityFlow',
      description:
        'हर लाइन में लाइन नंबर, कस्टम प्रीफ़िक्स और सफ़िक्स जोड़ें — लिस्ट, SQL क्वेरी और कोड ऐरे के लिए, तुरंत और मुफ्त, बिना रजिस्ट्रेशन। तुरंत रिज़ल्ट पाएँ।',
      primaryKeyword: 'line prefix suffix jodne wala tool',
      secondaryKeywords: ['line number add karne wala tool', 'har line me prefix jode', 'लाइन नंबर जोड़ने का टूल', 'sql in clause formatter hindi'],
      longTailKeywords: ['har line ko single quotes aur comma me kaise lapete', 'sql ke liye har line me quotes jodne wala tool', 'line ke aage peeche text ek sath kaise jode', 'line number zero se shuru karke kaise jode'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'किसी भी लिस्ट की हर लाइन के आगे क्रमिक लाइन नंबर, बुलेट या शुरुआती कोट्स जोड़ें और अंत में कॉमा, सेमीकॉलन या क्लोज़िंग टैग लगाएँ — सेकंडों में।',
  },
  'alphabets-to-word-generator': {
    slug: 'aksharon-se-shabd-generator',
    name: 'अक्षरों से शब्द जनरेटर',
    shortDescription: 'अपने अक्षरों से तुरंत शब्द बनाएँ: ऐनाग्राम, छोटे और लंबे शब्द और संभव संयोजन — ब्राउज़र में मुफ़्त।',
    keywords: [
      'अक्षरों से शब्द जनरेटर',
      'अक्षर से शब्द बनाएँ',
      'अक्षरों से शब्द',
      'ऐनाग्राम जनरेटर',
      'ऐनाग्राम सॉल्वर',
      'अक्षर सुलझाएँ',
      'अक्षरों से शब्द खोजें',
      'अंग्रेजी शब्द जनरेटर',
      'दिए गए अक्षरों से शब्द',
    ],
    seo: {
      title: 'अक्षरों से शब्द जनरेटर: शब्द बनाएँ | UtilityFlow',
      description: 'हमारे मुफ़्त अक्षरों से शब्द जनरेटर से तुरंत शब्द बनाएँ। छोटे और लंबे शब्द, ऐनाग्राम और संभव संयोजन खोजें।',
      primaryKeyword: 'अक्षरों से शब्द जनरेटर',
      secondaryKeywords: ['ऐनाग्राम जनरेटर', 'ऐनाग्राम सॉल्वर', 'अक्षर सुलझाएँ', 'अक्षरों से शब्द खोजें'],
      longTailKeywords: ['इन अक्षरों से कौन से शब्द बना सकता हूँ', 'अक्षरों से शब्द ऑनलाइन मुफ़्त बनाएँ', 'अक्षरों से सबसे लंबा शब्द खोजें', 'शब्द से ऐनाग्राम बनाएँ'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'अपने अक्षर लिखें और उनसे बनने वाले सभी शब्द खोजें: सटीक ऐनाग्राम, छोटे और लंबे शब्द, लंबाई और अक्षर फ़िल्टर के साथ — सीधे अपने ब्राउज़र में।',
  },
};
