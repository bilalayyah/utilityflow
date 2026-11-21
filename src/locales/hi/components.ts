import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the hi locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the hi locale is selected.
 */
export const hiComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "केस बदलने के लिए टेक्स्ट",
      "placeholder": "टेक्स्ट लिखें या पेस्ट करें, फिर नीचे किसी भी केस बटन पर क्लिक करें...",
      "copyResult": "परिणाम कॉपी करें"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "साफ़ और संक्षिप्त टेक्स्ट लिखें जो हर प्लेटफ़ॉर्म की अक्षर-सीमा में आ जाए — न सर्च रिज़ल्ट में अजीब तरह से कटे, न सोशल मीडिया पर।",
      "withSpaces": "स्पेस सहित",
      "withoutSpaces": "बिना स्पेस",
      "words": "शब्द",
      "letters": "अक्षर",
      "digits": "अंक",
      "utf8Bytes": "UTF-8 बाइट",
      "copyText": "टेक्स्ट कॉपी करें",
      "textToMeasure": "अक्षर-लंबाई मापने के लिए टेक्स्ट",
      "placeholder": "अक्षरों की सटीक गिनती, बाइट साइज़ और प्लेटफ़ॉर्म सीमाएँ देखने के लिए टेक्स्ट लिखें या पेस्ट करें...",
      "whitespaceChars": "व्हाइटस्पेस अक्षर",
      "lines": "लाइनें",
      "platformLimitsTitle": "प्लेटफ़ॉर्म और SEO अक्षर-सीमाएँ",
      "over": "ज़्यादा",
      "left": "बचे",
      "platformLimits": [
        {
          "name": "SEO मेटा टाइटल",
          "note": "Google SERP टाइटल की सुझाई गई लंबाई"
        },
        {
          "name": "SEO मेटा विवरण",
          "note": "डेस्कटॉप स्निपेट की सामान्य सीमा"
        },
        {
          "name": "SMS सेगमेंट",
          "note": "एक GSM-7 SMS मैसेज"
        },
        {
          "name": "X / Twitter पोस्ट",
          "note": "पोस्ट की सामान्य लंबाई"
        },
        {
          "name": "Instagram कैप्शन प्रीव्यू",
          "note": "\"More\" से पहले दिखने वाला हिस्सा"
        },
        {
          "name": "LinkedIn पोस्ट",
          "note": "फ़ीड अपडेट की अधिकतम सामान्य लंबाई"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "ढूँढें",
      "replaceWith": "से बदलें",
      "findPlaceholder": "खोजने के लिए टेक्स्ट...",
      "replacePlaceholder": "बदलने वाला टेक्स्ट...",
      "caseSensitive": "केस-सेंसिटिव",
      "wholeWordOnly": "सिर्फ़ पूरे शब्द",
      "useRegex": "रेगुलर एक्सप्रेशन (RegExp) इस्तेमाल करें",
      "regexError": "Regex त्रुटि:",
      "invalidRegex": "अमान्य रेगुलर एक्सप्रेशन।",
      "sourceText": "मूल टेक्स्ट",
      "updatedOutput": "बदला हुआ परिणाम",
      "match": "मिलान",
      "matches": "मिलान",
      "replaced": "बदले गए",
      "sourcePlaceholder": "खोजने और बदलने के लिए टेक्स्ट पेस्ट करें...",
      "outputPlaceholder": "बदला हुआ टेक्स्ट यहाँ दिखेगा...",
      "copyResult": "परिणाम कॉपी करें"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "लाइन प्रीफ़िक्स",
      "lineSuffix": "लाइन सफ़िक्स",
      "startNumber": "शुरुआती नंबर",
      "numberSeparator": "नंबर सेपरेटर",
      "addLineNumbers": "लाइन नंबर जोड़ें",
      "zeroPad": "शून्य से पैड करें (01, 02)",
      "skipEmptyLines": "खाली लाइनें छोड़ें",
      "inputLines": "इनपुट लाइनें",
      "formattedLines": "फ़ॉर्मैट की गई लाइनें",
      "copyResult": "परिणाम कॉपी करें",
      "inputPlaceholder": "हर पंक्ति में एक मान या लाइन पेस्ट करें...",
      "outputPlaceholder": "नंबर वाली या लिपटी लाइनें यहाँ दिखेंगी..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "मात्रा",
      "unit": "इकाई",
      "unitLabels": {
        "paragraphs": "पैराग्राफ़",
        "sentences": "वाक्य",
        "words": "शब्द"
      },
      "startClassic": "“Lorem ipsum” से शुरू करें",
      "wrapHtml": "<p> टैग में लपेटें",
      "words": "शब्द",
      "characters": "अक्षर",
      "regenerate": "फिर से बनाएँ",
      "copyPlaceholder": "प्लेसहोल्डर टेक्स्ट कॉपी करें",
      "generatedText": "बनाया गया प्लेसहोल्डर टेक्स्ट"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow रिलीज़ नोट्स\n\n**Markdown Previewer** में आपका स्वागत है — लाइव *HTML* एक्सपोर्ट वाला तेज़, ब्राउज़र में चलने वाला एडिटर।\n\n## मुख्य सुविधाएँ\n\n- हेडिंग, लिस्ट और लिंक के लिए तुरंत फ़ॉर्मैटिंग\n- बिना किसी रिमोट अपलोड के सुरक्षित HTML एस्केपिंग\n- एक क्लिक में रॉ HTML कॉपी और डाउनलोड\n\n> दस्तावेज़ों को काम के पास रखें और प्रकाशित करने से पहले संरचना देख लें।\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n[UtilityFlow](/tools/) पर और जानें।",
      "renderedPreview": "रेंडर किया गया प्रीव्यू",
      "rawHtml": "रॉ HTML",
      "exportHtml": "HTML एक्सपोर्ट करें",
      "copyHtml": "HTML कॉपी करें",
      "markdownSource": "Markdown सोर्स",
      "livePreview": "लाइव प्रीव्यू",
      "compiledHtml": "कंपाइल किया गया HTML",
      "compiledHtmlAria": "कंपाइल किए गए HTML का सोर्स",
      "inputPlaceholder": "Markdown लिखें (# हेडिंग, **बोल्ड**, - लिस्ट, [लिंक](https://...))...",
      "emptyPreview": "Markdown टाइप करते ही प्रीव्यू यहाँ दिखेगा..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "साफ़ तकनीकी लेखन पाठक के समय का सम्मान करता है। जटिल निर्देश आसान बने रहें, इसलिए जहाँ हो सके ठोस संज्ञाएँ और सक्रिय क्रियाएँ इस्तेमाल करें।\n\nनेस्टेड उपवाक्यों से भरे लंबे वाक्य पाठक को पैराग्राफ़ दोबारा पढ़ने पर मजबूर करते हैं। घने स्पष्टीकरणों को छोटे चरणों में तोड़ने से दस्तावेज़ तेज़ी से स्कैन होते हैं और आसानी से लागू होते हैं।",
      "level": "स्तर:",
      "textToCheck": "पठनीयता जाँचने के लिए टेक्स्ट",
      "placeholder": "Flesch Reading Ease और ग्रेड-स्तर स्कोर जानने के लिए अपना लेख, निबंध या लैंडिंग पेज का टेक्स्ट पेस्ट करें...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "Flesch-Kincaid ग्रेड",
      "usGrade": "अमेरिकी स्कूल ग्रेड स्तर",
      "gunningFog": "Gunning Fog Index",
      "yearsEducation": "शिक्षा के वर्ष",
      "smog": "SMOG Index",
      "polysyllable": "बहु-अक्षरीय जटिलता",
      "structuralBreakdown": "संरचनात्मक विवरण",
      "wordsSentences": "शब्द / वाक्य",
      "avgSentenceLength": "औसत वाक्य लंबाई",
      "words": "शब्द",
      "avgSyllablesPerWord": "प्रति शब्द औसत अक्षर",
      "complexWords": "जटिल शब्द (3+ अक्षर)",
      "longWordsDetected": "लंबे शब्द मिले (3+ अक्षर)",
      "noLongWords": "इस अंश में 3+ अक्षर वाले शब्द नहीं मिले।",
      "emptyState": "पठनीयता सूत्र और संरचनात्मक अनुपात देखने के लिए ऊपर कम से कम एक वाक्य लिखें।",
      "levels": [
        {
          "level": "बहुत आसान",
          "audience": "5वीं कक्षा (10–11 वर्ष)"
        },
        {
          "level": "आसान",
          "audience": "6वीं कक्षा (11–12 वर्ष)"
        },
        {
          "level": "काफ़ी आसान",
          "audience": "7वीं कक्षा (12–13 वर्ष)"
        },
        {
          "level": "सामान्य",
          "audience": "8वीं–9वीं कक्षा (13–15 वर्ष)"
        },
        {
          "level": "काफ़ी कठिन",
          "audience": "10वीं–12वीं कक्षा"
        },
        {
          "level": "कठिन",
          "audience": "कॉलेज स्तर"
        },
        {
          "level": "बहुत कठिन",
          "audience": "कॉलेज स्नातक / विशेषज्ञ स्तर"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "केस-सेंसिटिव",
      "trimWhitespace": "व्हाइटस्पेस हटाएँ",
      "removeEmptyLines": "खाली लाइनें हटाएँ",
      "sortAlphabetically": "वर्णमाला क्रम में छाँटें",
      "originalLines": "मूल लाइनें",
      "lines": "लाइनें",
      "uniqueLines": "अनूठी लाइनें",
      "unique": "अनूठी",
      "removed": "हटाई गईं",
      "inputPlaceholder": "हर लाइन में एक आइटम वाली लिस्ट पेस्ट करें...",
      "outputPlaceholder": "डुप्लिकेट हटाया गया परिणाम यहाँ दिखेगा..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "केस-सेंसिटिव",
      "ignoreBlankLines": "खाली लाइनें छोड़ें",
      "removeDuplicates": "डुप्लिकेट हटाएँ",
      "inputLines": "इनपुट लाइनें",
      "sortedLines": "छाँटी गई लाइनें",
      "copySorted": "छाँटी हुई कॉपी करें",
      "inputPlaceholder": "हर लाइन में एक आइटम लिखें...",
      "outputPlaceholder": "छाँटा गया परिणाम यहाँ दिखेगा...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "प्राकृतिक (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "सबसे छोटी पहले"
        },
        {
          "id": "length-desc",
          "label": "सबसे लंबी पहले"
        },
        {
          "id": "reverse-order",
          "label": "उल्टा क्रम"
        },
        {
          "id": "shuffle",
          "label": "शफ़ल करें"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "व्हाइटस्पेस छोड़ें",
      "ignoreCase": "केस छोड़ें",
      "originalText": "मूल टेक्स्ट",
      "modifiedText": "बदला हुआ टेक्स्ट",
      "originalPlaceholder": "मूल टेक्स्ट पेस्ट करें...",
      "modifiedPlaceholder": "बदला हुआ टेक्स्ट पेस्ट करें...",
      "lineComparison": "लाइन तुलना",
      "added": "जोड़े गए",
      "removed": "हटाए गए",
      "unchanged": "बिना बदलाव",
      "emptyState": "लाइनें जोड़ी या हटाई गईं देखने के लिए दोनों बॉक्स में टेक्स्ट लिखें।"
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "टेक्स्ट की पहली लाइन\nटेक्स्ट की दूसरी लाइन\nटेक्स्ट की तीसरी लाइन",
      "originalText": "मूल टेक्स्ट",
      "reversedOutput": "उल्टा किया गया परिणाम",
      "inputPlaceholder": "उलटने के लिए टेक्स्ट या लाइनें लिखें...",
      "outputPlaceholder": "उल्टा टेक्स्ट यहाँ दिखेगा...",
      "modes": [
        {
          "id": "characters",
          "label": "अक्षर उलटें"
        },
        {
          "id": "words",
          "label": "शब्दों का क्रम उलटें"
        },
        {
          "id": "each-word",
          "label": "हर शब्द उलटें"
        },
        {
          "id": "lines",
          "label": "लाइनों का क्रम उलटें"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSON ऑनलाइन फ़ॉर्मैट करने के 10 बेहतरीन तरीके!\nCafé और Crème: 2026 गाइड\nCloudflare Pages पर तेज़ स्टैटिक साइट कैसे बनाएँ",
      "hyphen": "हाइफ़न (-)",
      "underscore": "अंडरस्कोर (_)",
      "forceLowercase": "सब छोटे अक्षरों में करें",
      "stripStopWords": "आम स्टॉप वर्ड हटाएँ",
      "titlesLabel": "टाइटल या वाक्यांश (बैच मोड के लिए हर लाइन में एक)",
      "inputPlaceholder": "ब्लॉग टाइटल, प्रोडक्ट नाम या हेडिंग की लिस्ट लिखें...",
      "generatedSlugs": "बनाए गए URL स्लग",
      "copySlugs": "स्लग कॉपी करें",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   पहली   लाइन जिसमें   ज़्यादा   स्पेस हैं।   \n\n   दूसरी लाइन   जिसमें   टैब\tऔर   गैप हैं।\n\n\nतीसरी   लाइन यहाँ है।   ",
      "collapseSpaces": "कई स्पेस एक में करें",
      "trimEdges": "लाइन के किनारे ट्रिम करें",
      "tabsToSpaces": "टैब को स्पेस में बदलें",
      "lineBreaks": "लाइन ब्रेक:",
      "keepBreaks": "लाइन ब्रेक रखें",
      "removeBlankLines": "खाली लाइनें हटाएँ",
      "replaceWithSpaces": "स्पेस से बदलें",
      "removeAllBreaks": "सारे ब्रेक हटाएँ",
      "inputText": "इनपुट टेक्स्ट",
      "chars": "अक्षर",
      "cleanedText": "साफ़ किया गया टेक्स्ट",
      "removed": "हटाए गए",
      "inputPlaceholder": "ज़्यादा स्पेस, टैब या खाली लाइनों वाला गड़बड़ टेक्स्ट पेस्ट करें...",
      "outputPlaceholder": "साफ़ किया गया परिणाम अपने आप दिखेगा..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow टेक्स्ट की हर गिनती सीधे आपके ब्राउज़र में करता है। चाहे आप ब्लॉग लेख लिख रहे हों, प्रोडक्ट घोषणा को कस रहे हों, या सख़्त शब्द-सीमा के मुक़ाबले अकादमिक निबंध जाँच रहे हों — तुरंत गिनती से अपना संदेश साफ़-सुथरा रखना आसान हो जाता है।\n\nछोटे वाक्यों से स्कैन करना आसान होता है। वाक्यों की लंबाई बदलते रहने से लंबे गाइड डेस्कटॉप और मोबाइल दोनों पर पढ़ने में दिलचस्प बने रहते हैं।",
      "words": "शब्द",
      "characters": "अक्षर",
      "noSpaces": "बिना स्पेस",
      "sentences": "वाक्य",
      "paragraphs": "पैराग्राफ़",
      "readingTime": "पढ़ने का समय",
      "downloadTxt": ".txt डाउनलोड करें",
      "copyText": "टेक्स्ट कॉपी करें",
      "textToCount": "गिनने के लिए टेक्स्ट",
      "placeholder": "शब्द, अक्षर, वाक्य और पढ़ने का समय गिनने के लिए टेक्स्ट पेस्ट करें या लिखें...",
      "deliveryTimingLines": "बोलने का समय और लाइनें",
      "speakingTime": "बोलने का समय (130 शब्द/मिनट)",
      "totalLines": "कुल लाइनें",
      "avgWordLength": "औसत शब्द लंबाई",
      "chars": "अक्षर",
      "mostFrequentWords": "सबसे ज़्यादा बार आए शब्द",
      "emptyKeywords": "सबसे ज़्यादा दोहराए गए शब्द देखने के लिए ऊपर टेक्स्ट लिखें।"
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "तकनीकी SEO ऑडिट क्रॉलेबिलिटी, इंटरनल लिंकिंग और पेज स्पीड जाँचते हैं। तेज़ पेज यूज़र एंगेजमेंट और मोबाइल सर्च में पेज स्पीड सिग्नल बेहतर करते हैं। इंटरनल लिंकिंग जुड़े गाइड जोड़ती है और तकनीकी SEO संरचना मज़बूत करती है।",
      "ngramLabels": {
        "1": "1 शब्द",
        "2": "2 शब्दों के वाक्यांश",
        "3": "3 शब्दों के वाक्यांश"
      },
      "excludeStopWords": "आम स्टॉप वर्ड छोड़ें",
      "minLength": "न्यूनतम लंबाई:",
      "textForAnalysis": "फ़्रीक्वेंसी विश्लेषण के लिए टेक्स्ट",
      "placeholder": "दोहराए गए शब्द और कीवर्ड डेंसिटी गिनने के लिए लेख, प्रोडक्ट विवरण या नोट्स पेस्ट करें...",
      "totalWords": "कुल शब्द:",
      "uniqueTerms": "अनूठे शब्द:",
      "exportCsv": "CSV एक्सपोर्ट करें",
      "copyCsv": "CSV कॉपी करें",
      "rank": "#",
      "termPhrase": "शब्द / वाक्यांश",
      "count": "गिनती",
      "density": "घनत्व",
      "emptyState": "शब्द गिनती और कीवर्ड डेंसिटी प्रतिशत देखने के लिए ऊपर टेक्स्ट लिखें।"
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "कृपया मान्य कैलेंडर तारीखें डालें।",
      "errorDobAfterTarget": "जन्म तारीख़ लक्ष्य तारीख़ के बाद की नहीं हो सकती।",
      "dobLabel": "जन्म तारीख़",
      "targetLabel": "उस तारीख़ पर उम्र",
      "exactAge": "सटीक उम्र",
      "yearsWord": "वर्ष",
      "monthsWord": "महीने",
      "daysWord": "दिन",
      "nextBirthday": "अगला जन्मदिन",
      "turning": "उम्र होगी",
      "inWord": "में",
      "totalMonths": "कुल महीने",
      "totalWeeks": "कुल हफ़्ते",
      "totalDays": "कुल दिन",
      "totalHours": "कुल घंटे (लगभग)",
      "monthsAbbr": "माह",
      "weeksAbbr": "हफ़्ता",
      "daysAbbr": "दिन",
      "hoursAbbr": "घंटा"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "कम वज़न",
      "normalWeight": "सामान्य वज़न",
      "overweight": "ज़्यादा वज़न",
      "obesity": "मोटापा",
      "errorHeightMetric": "ऊँचाई 50 cm से 280 cm के बीच डालें।",
      "errorWeightMetric": "वज़न 15 kg से 500 kg के बीच डालें।",
      "errorHeightImperial": "मान्य ऊँचाई डालें — 2 ft से 9 ft के बीच।",
      "errorWeightImperial": "वज़न 30 lbs से 1100 lbs के बीच डालें।",
      "metricTab": "मीट्रिक (cm / kg)",
      "imperialTab": "इंपीरियल (ft, in / lbs)",
      "heightCmLabel": "ऊँचाई (cm)",
      "weightKgLabel": "वज़न (kg)",
      "heightFtLabel": "ऊँचाई (ft)",
      "heightInLabel": "ऊँचाई (in)",
      "weightLbsLabel": "वज़न (lbs)",
      "bmiLabel": "बॉडी मास इंडेक्स (BMI)",
      "whoCategory": "WHO श्रेणी",
      "healthyRange": "स्वस्थ BMI वज़न सीमा (18.5–24.9)",
      "disclaimer": "BMI एक सामान्य जाँच अनुपात है — यह मांसपेशियों का वज़न और शरीर की चर्बी अलग नहीं करता।"
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "उम्र 15 से 100 वर्ष के बीच डालें।",
      "errorHeightMetric": "ऊँचाई 100 cm से 250 cm के बीच डालें।",
      "errorWeightMetric": "वज़न 30 kg से 350 kg के बीच डालें।",
      "errorHeightImperial": "ऊँचाई 3 ft 4 in से 8 ft 2 in के बीच डालें।",
      "errorWeightImperial": "वज़न 66 lbs से 770 lbs के बीच डालें।",
      "metricTab": "मीट्रिक (cm / kg)",
      "imperialTab": "इंपीरियल (ft, in / lbs)",
      "maleTab": "पुरुष",
      "femaleTab": "महिला",
      "ageLabel": "उम्र (वर्ष)",
      "heightCmLabel": "ऊँचाई (cm)",
      "weightKgLabel": "वज़न (kg)",
      "heightFtLabel": "ऊँचाई (ft)",
      "heightInLabel": "ऊँचाई (in)",
      "weightLbsLabel": "वज़न (lbs)",
      "activityLabel": "गतिविधि स्तर",
      "activitySedentary": "बैठे रहने वाला (1.2×)",
      "activitySedentaryDetail": "डेस्क जॉब, बहुत कम या कोई व्यायाम नहीं",
      "activityLight": "हल्का सक्रिय (1.375×)",
      "activityLightDetail": "हल्का व्यायाम, हफ़्ते में 1–3 दिन",
      "activityModerate": "मध्यम सक्रिय (1.55×)",
      "activityModerateDetail": "मध्यम व्यायाम, हफ़्ते में 3–5 दिन",
      "activityVery": "बहुत सक्रिय (1.725×)",
      "activityVeryDetail": "कठिन व्यायाम, हफ़्ते में 6–7 दिन",
      "activityExtra": "अत्यधिक सक्रिय (1.9×)",
      "activityExtraDetail": "शारीरिक काम या दिन में दो बार ट्रेनिंग",
      "maintenance": "रखरखाव कैलोरी (TDEE)",
      "mildLoss": "हल्का वज़न कम करना (-0.25 kg/हफ़्ता)",
      "mildLossNote": "~250 kcal रोज़ की कमी",
      "weightLoss": "वज़न कम करना (-0.5 kg/हफ़्ता)",
      "weightLossNote": "~500 kcal रोज़ की कमी",
      "leanGain": "लीन वज़न बढ़ाना",
      "leanGainNote": "+250 kcal रोज़ ज़्यादा",
      "macroHeading": "रखरखाव मैक्रो बँटवारा (संदर्भ) (30% प्रोटीन · 40% कार्ब्स · 30% फैट)",
      "protein": "प्रोटीन",
      "carbs": "कार्बोहाइड्रेट",
      "fat": "आहार वसा",
      "gramsPerDay": "g/दिन",
      "disclaimer": "Mifflin-St Jeor BMR समीकरण से गणना की गई है। हर व्यक्ति की ऊर्जा ज़रूरत शरीर की बनावट और स्वास्थ्य स्थिति के अनुसार अलग होती है; सख़्त डाइट शुरू करने से पहले किसी योग्य स्वास्थ्य विशेषज्ञ से सलाह लें।"
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "शुरुआती जमा नकारात्मक नहीं हो सकती।",
      "errorMonthly": "मासिक योगदान नकारात्मक नहीं हो सकता।",
      "errorRate": "वार्षिक रिटर्न दर 0% से 100% के बीच होनी चाहिए।",
      "errorYears": "समय अवधि 1 से 100 वर्ष के बीच होनी चाहिए।",
      "initialLabel": "शुरुआती मूलधन ($)",
      "monthlyLabel": "मासिक जोड़ ($)",
      "rateLabel": "वार्षिक रिटर्न (%)",
      "yearsLabel": "वर्ष",
      "compoundingLabel": "चक्रवृद्धि",
      "dailyOption": "रोज़ाना (365/वर्ष)",
      "monthlyOption": "मासिक (12/वर्ष)",
      "quarterlyOption": "तिमाही (4/वर्ष)",
      "annualOption": "वार्षिक (1/वर्ष)",
      "futureBalance": "भविष्य का बैलेंस",
      "totalContributed": "कुल मूलधन + जमा",
      "totalInterest": "कुल चक्रवृद्धि ब्याज",
      "yearHeader": "वर्ष",
      "totalContributedHeader": "कुल जमा",
      "cumulativeInterestHeader": "संचयी ब्याज",
      "endingBalanceHeader": "अंतिम बैलेंस",
      "yearPrefix": "वर्ष"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "कृपया मान्य शुरू और अंत की कैलेंडर तारीखें चुनें।",
      "errorInvalidBase": "कृपया मान्य शुरुआती कैलेंडर तारीख़ डालें।",
      "errorNonNegative": "वर्ष, महीने और दिन के लिए शून्य या उससे बड़ी पूर्ण संख्याएँ डालें।",
      "differenceTab": "तारीखों के बीच अंतर",
      "addSubtractTab": "समय जोड़ें / घटाएँ",
      "startLabel": "शुरू की तारीख़",
      "endLabel": "अंत की तारीख़",
      "swapTitle": "तारीखें बदलें",
      "swapAria": "शुरू और अंत की तारीखें बदलें",
      "includeEnd": "गिनती में अंत की तारीख़ भी शामिल करें (+1 कैलेंडर दिन)",
      "calendarDuration": "कैलेंडर अवधि",
      "reversedRange": "(उल्टी सीमा)",
      "totalSpan": "कुल अवधि:",
      "calendarDays": "कैलेंडर दिन",
      "weeksDays": "हफ़्ते और दिन",
      "weekdays": "कार्यदिवस (सोम–शुक्र)",
      "weekendDays": "सप्ताहांत के दिन (शनि–रवि)",
      "totalHours": "कुल घंटे",
      "yearsWord": "वर्ष",
      "monthsWord": "महीने",
      "daysWord": "दिन",
      "weeksAbbr": "हफ़्ता",
      "daysAbbr": "दिन",
      "hoursAbbr": "घंटा",
      "referenceLabel": "संदर्भ तारीख़",
      "operationLabel": "क्रिया",
      "addOption": "जोड़ें (+)",
      "subtractOption": "घटाएँ (-)",
      "yearsLabel": "वर्ष",
      "monthsLabel": "महीने",
      "daysLabel": "दिन",
      "resultingDate": "परिणामी कैलेंडर तारीख़",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "मूल कीमत नकारात्मक नहीं हो सकती।",
      "errorDiscount": "छूट 0% से 100% के बीच होनी चाहिए।",
      "errorTax": "बिक्री कर 0% से 100% के बीच होना चाहिए।",
      "errorCost": "लागत नकारात्मक नहीं हो सकती।",
      "errorSelling": "बिक्री कीमत 0 से ज़्यादा होनी चाहिए।",
      "discountTab": "बिक्री छूट",
      "marginTab": "लाभ मार्जिन और मार्कअप",
      "originalPriceLabel": "मूल कीमत ($)",
      "discountLabel": "छूट (%)",
      "salesTaxLabel": "बिक्री कर (%)",
      "costLabel": "इकाई लागत ($)",
      "sellingLabel": "बिक्री कीमत ($)",
      "finalPrice": "अंतिम कीमत",
      "beforeTax": "कर से पहले:",
      "youSave": "आपकी बचत",
      "taxAdded": "जोड़ा गया कर",
      "grossProfit": "कुल लाभ",
      "profitMargin": "लाभ मार्जिन",
      "profitDivSelling": "(लाभ ÷ बिक्री कीमत)",
      "markup": "मार्कअप",
      "profitDivCost": "(लाभ ÷ लागत)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "0 से ज़्यादा लोन मूलधन डालें।",
      "errorRate": "वार्षिक ब्याज दर 0% से 100% के बीच डालें।",
      "errorDuration": "लोन अवधि 1 से 600 महीने के बीच होनी चाहिए।",
      "principalLabel": "लोन मूलधन ($)",
      "rateLabel": "वार्षिक ब्याज दर (% APR)",
      "termLabel": "लोन अवधि",
      "termUnitAria": "लोन अवधि की इकाई",
      "yearsOption": "वर्ष",
      "monthsOption": "महीने",
      "monthlyPayment": "मासिक किस्त (EMI)",
      "forPrefix": "के लिए",
      "monthlyPayments": "मासिक किस्तें",
      "totalInterest": "कुल ब्याज",
      "ofTotalCost": "कुल लागत का",
      "totalRepayment": "कुल चुकौती",
      "principalWord": "मूलधन",
      "principalLabelShort": "मूलधन",
      "interestLabelShort": "ब्याज",
      "showSchedule": "चुकौती अनुसूची दिखाएँ",
      "hideSchedule": "चुकौती अनुसूची छिपाएँ",
      "monthHeader": "महीना",
      "paymentHeader": "किस्त",
      "principalHeader": "मूलधन",
      "interestHeader": "ब्याज",
      "balanceHeader": "शेष"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "घर की कीमत 0 से ज़्यादा होनी चाहिए।",
      "errorDownPayment": "डाउन पेमेंट प्रतिशत 0% से 99.9% के बीच होना चाहिए।",
      "errorRate": "ब्याज दर 0% से 50% के बीच होनी चाहिए।",
      "errorTerm": "लोन अवधि 1 से 50 वर्ष के बीच होनी चाहिए।",
      "homePriceLabel": "घर की कीमत ($)",
      "downPaymentLabel": "डाउन पेमेंट (%)",
      "rateLabel": "ब्याज दर (% APR)",
      "termLabel": "लोन अवधि (वर्ष)",
      "yearsWord": "वर्ष",
      "taxLabel": "संपत्ति कर ($ / वर्ष)",
      "insuranceLabel": "घर का बीमा ($ / वर्ष)",
      "hoaLabel": "HOA शुल्क ($ / महीना)",
      "estimatedMonthly": "अनुमानित मासिक भुगतान",
      "loanAmount": "लोन राशि",
      "downPayment": "डाउन पेमेंट",
      "lifetimeInterest": "पूरे समय का ब्याज",
      "breakdownHeading": "मासिक भुगतान का विवरण",
      "principalInterest": "मूलधन और ब्याज (P&I)",
      "propertyTaxes": "संपत्ति कर",
      "homeownersInsurance": "मकान मालिक बीमा",
      "hoaDues": "HOA शुल्क",
      "pmiLabel": "अनुमानित PMI (0.5%/वर्ष जब डाउन पेमेंट 20% से कम हो)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "मान्य संख्याएँ डालें।",
      "errorTotalZero": "कुल (Y) 0 नहीं हो सकता।",
      "errorStartZero": "शुरुआती मान 0 नहीं हो सकता।",
      "heading1": "1. किसी संख्या का प्रतिशत",
      "heading2": "2. पूरे के मुक़ाबले हिस्से का प्रतिशत",
      "heading3": "3. प्रतिशत बढ़ोतरी या कमी",
      "whatIs": "कितना है",
      "percentOf": "% का",
      "isWhatPercentOf": "का कितना % है",
      "fromWord": "से",
      "toWord": "तक",
      "result": "परिणाम:",
      "change": "बदलाव:",
      "formula": "सूत्र",
      "difference": "अंतर",
      "ariaPctX": "प्रतिशत X",
      "ariaBaseY": "आधार संख्या Y",
      "ariaPartX": "हिस्से का मान X",
      "ariaWholeY": "पूरे का मान Y",
      "ariaInitialA": "शुरुआती मान A",
      "ariaFinalB": "अंतिम मान B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "वेतन राशि नकारात्मक नहीं हो सकती।",
      "errorHours": "सप्ताह के घंटे 1 से 168 के बीच होने चाहिए।",
      "errorWeeks": "वर्ष के हफ़्ते 1 से 52 के बीच होने चाहिए।",
      "errorTax": "प्रभावी कर दर 0% से 99% के बीच होनी चाहिए।",
      "amountLabel": "वेतन राशि ($)",
      "frequencyLabel": "आवृत्ति",
      "hourlyOption": "प्रति घंटा",
      "dailyOption": "दैनिक",
      "weeklyOption": "साप्ताहिक",
      "biweeklyOption": "दो-साप्ताहिक",
      "monthlyOption": "मासिक",
      "annualOption": "वार्षिक",
      "hoursLabel": "घंटे / सप्ताह",
      "weeksLabel": "हफ़्ते / वर्ष",
      "taxLabel": "अनुमानित कर दर (%)",
      "rowHourly": "प्रति घंटा",
      "rowDaily": "दैनिक (5-दिन का सप्ताह)",
      "rowWeekly": "साप्ताहिक",
      "rowBiweekly": "दो-साप्ताहिक",
      "rowMonthly": "मासिक",
      "rowAnnual": "वार्षिक",
      "payPeriodHeader": "वेतन अवधि",
      "grossPayHeader": "कुल वेतन",
      "estNetPay": "अनुमानित शुद्ध वेतन",
      "taxWord": "कर"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "मान्य शुरू और अंत का समय डालें।",
      "errorBreakRange": "ब्रेक कटौती 0 से 1,440 मिनट के बीच डालें।",
      "errorEndEarlier": "अंत का समय शुरू के समय से पहले है। अगर आधी रात के पार जा रहा है तो ओवरनाइट रोलओवर चालू करें।",
      "errorBreakExceeds": "ब्रेक कटौती कुल बीते समय से ज़्यादा है।",
      "errorSumFields": "अवधि के सभी फ़ील्ड में शून्य या उससे बड़ी संख्याएँ होनी चाहिए।",
      "betweenTab": "दो घड़ियों के बीच बीता समय",
      "sumTab": "टाइमशीट अवधियाँ जोड़ें",
      "startLabel": "शुरू का समय",
      "endLabel": "अंत का समय",
      "breakLabel": "बिना वेतन ब्रेक (मिनट)",
      "overnightLabel": "अंत का समय शुरू से पहले हो तो उसे अगले दिन का मानें (रात की शिफ़्ट)",
      "netDuration": "शुद्ध अवधि",
      "overnightTag": "(रात भर)",
      "decimalHours": "दशमलव घंटे",
      "totalMinutes": "कुल मिनट",
      "totalSeconds": "कुल सेकंड",
      "hoursAbbr": "घंटा",
      "minutesAbbr": "मिनट",
      "secondsAbbr": "सेकंड",
      "labelHeader": "लेबल",
      "hoursHeader": "घंटे",
      "minutesHeader": "मिनट",
      "secondsHeader": "सेकंड",
      "removeButton": "हटाएँ",
      "removeAria": "हटाएँ",
      "addRowButton": "अवधि पंक्ति जोड़ें",
      "morningSession": "सुबह का सत्र",
      "afternoonSession": "दोपहर का सत्र",
      "segmentPrefix": "खंड",
      "combinedTime": "संयुक्त समय (HH:MM:SS)",
      "dayEquivalent": "24-घंटे के दिन",
      "daysAbbr": "दिन"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "बिल राशि नकारात्मक नहीं हो सकती।",
      "errorTip": "टिप प्रतिशत 0% से 200% के बीच होना चाहिए।",
      "errorPeople": "लोगों की संख्या 1 से 100 के बीच होनी चाहिए।",
      "billLabel": "बिल का योग ($)",
      "tipLabel": "टिप प्रतिशत (%)",
      "peopleLabel": "बाँटें (लोग)",
      "presetsLabel": "टिप प्रीसेट:",
      "roundingLabel": "राउंडिंग:",
      "exactOption": "सटीक सेंट",
      "totalUpOption": "कुल ऊपर राउंड करें ($)",
      "perPersonUpOption": "प्रति व्यक्ति ऊपर राउंड करें ($)",
      "perPersonTotal": "प्रति व्यक्ति कुल",
      "includes": "शामिल है",
      "tipEach": "टिप प्रति व्यक्ति",
      "totalTip": "कुल टिप",
      "effectiveRate": "प्रभावी दर:",
      "totalBill": "कुल बिल"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "बदलने के लिए मान्य संख्या डालें।",
      "errorAbsoluteZero": "तापमान परम शून्य से नीचे नहीं हो सकता (-273.15 °C / 0 K)।",
      "categoryNames": {
        "length": "लंबाई",
        "weight": "वज़न और द्रव्यमान",
        "temperature": "तापमान",
        "area": "क्षेत्रफल",
        "volume": "आयतन",
        "speed": "गति",
        "storage": "डिजिटल स्टोरेज"
      },
      "unitLabels": {
        "mm": "मिलीमीटर",
        "cm": "सेंटीमीटर",
        "m": "मीटर",
        "km": "किलोमीटर",
        "in": "इंच",
        "ft": "फ़ुट",
        "yd": "गज़",
        "mi": "मील",
        "mg": "मिलीग्राम",
        "g": "ग्राम",
        "kg": "किलोग्राम",
        "t": "मीट्रिक टन",
        "oz": "औंस",
        "lb": "पाउंड",
        "st": "स्टोन",
        "C": "सेल्सियस",
        "F": "फ़ारेनहाइट",
        "K": "केल्विन",
        "cm2": "वर्ग सेंटीमीटर",
        "m2": "वर्ग मीटर",
        "ha": "हेक्टेयर",
        "km2": "वर्ग किलोमीटर",
        "ft2": "वर्ग फ़ुट",
        "yd2": "वर्ग गज़",
        "acre": "एकड़",
        "mi2": "वर्ग मील",
        "mL": "मिलीलीटर",
        "L": "लीटर",
        "m3": "घन मीटर",
        "floz": "फ़्लूइड औंस (US)",
        "cup": "कप (US)",
        "pt": "पिंट (US)",
        "qt": "क्वार्ट (US)",
        "gal": "गैलन (US)",
        "ms": "मीटर / सेकंड",
        "kmh": "किलोमीटर / घंटा",
        "mph": "मील / घंटा",
        "knot": "नॉट",
        "fts": "फ़ुट / सेकंड",
        "B": "बाइट",
        "KB": "किलोबाइट (10³)",
        "MB": "मेगाबाइट (10⁶)",
        "GB": "गीगाबाइट (10⁹)",
        "TB": "टेराबाइट (10¹²)",
        "KiB": "किबीबाइट (2¹⁰)",
        "MiB": "मेबीबाइट (2²⁰)",
        "GiB": "गीबीबाइट (2³⁰)"
      },
      "valueLabel": "मान",
      "fromLabel": "किस इकाई से",
      "toLabel": "किस इकाई में",
      "swapAria": "इकाइयाँ बदलें",
      "swapTitle": "इकाइयाँ बदलें",
      "toWord": "में",
      "copyResult": "परिणाम कॉपी करें",
      "unitHeader": "इकाई",
      "symbolHeader": "प्रतीक",
      "equivalentHeader": "समतुल्य मान"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "राशि नकारात्मक नहीं हो सकती।",
      "errorRate": "कर दर 0% से 100% के बीच होनी चाहिए।",
      "addTab": "कर जोड़ें (नेट → ग्रॉस)",
      "removeTab": "कर निकालें (ग्रॉस → नेट)",
      "commonRates": "आम दरें:",
      "netAmountLabel": "नेट राशि (कर छोड़कर) ($)",
      "grossAmountLabel": "ग्रॉस राशि (कर सहित) ($)",
      "rateLabel": "VAT / बिक्री कर दर (%)",
      "netPrice": "नेट कीमत (कर छोड़कर)",
      "taxAmount": "कर राशि",
      "grossPrice": "ग्रॉस कीमत (कर सहित)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64 में एनकोड करें",
      "decodeTab": "Base64 डिकोड करें",
      "urlSafe": "URL-सेफ़ (- और _)",
      "omitPadding": "अंत का = पैडिंग हटाएँ",
      "swap": "बदलें",
      "decodeError": "डिकोड त्रुटि:",
      "inputLabelEncode": "सादा टेक्स्ट (UTF-8)",
      "inputLabelDecode": "Base64 स्ट्रिंग",
      "inputPlaceholderEncode": "एनकोड करने के लिए टेक्स्ट या JSON लिखें...",
      "inputPlaceholderDecode": "स्टैंडर्ड या URL-सेफ़ Base64 स्ट्रिंग पेस्ट करें...",
      "outputLabelEncode": "Base64 आउटपुट",
      "outputLabelDecode": "डिकोड किया गया टेक्स्ट",
      "outputPlaceholder": "बदला गया आउटपुट यहाँ दिखेगा...",
      "copyOutput": "आउटपुट कॉपी करें",
      "invalidLength": "Base64 स्ट्रिंग की लंबाई अमान्य है।",
      "invalidInput": "अमान्य Base64 इनपुट या ग़लत UTF-8 बाइट क्रम।"
    },
    "tables": {
      "samplePlain": "UtilityFlow: UTF-8 सुरक्षित Base64 एनकोडिंग ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "रंग चुनें",
      "colorPickerAria": "कलर पिकर",
      "copyHex": "HEX कॉपी करें",
      "copyRgb": "RGB कॉपी करें",
      "copyHsl": "HSL कॉपी करें",
      "contrastTitle": "WCAG 2.1 कंट्रास्ट अनुपात जाँच",
      "contrastDesc": "अग्रभूमि ({color}) को किसी भी पृष्ठभूमि रंग पर देखें।",
      "backgroundLabel": "पृष्ठभूमि:",
      "bgAria": "कंट्रास्ट के लिए पृष्ठभूमि रंग",
      "sampleTitle": "बॉडी और UI टेक्स्ट का नमूना",
      "sampleSentence": "तेज़ भूरी लोमड़ी आलसी कुत्ते के ऊपर से छलाँग लगा गई।",
      "aaNormal": "AA सामान्य टेक्स्ट (≥ 4.5:1)",
      "aaaNormal": "AAA सामान्य टेक्स्ट (≥ 7.0:1)",
      "aaLarge": "AA बड़ा टेक्स्ट (≥ 3.0:1)",
      "pass": "पास",
      "fail": "फ़ेल"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5-फ़ील्ड Cron एक्सप्रेशन",
      "copyCron": "cron कॉपी करें",
      "humanTitle": "आसान भाषा में शेड्यूल",
      "breakdownTitle": "फ़ील्ड विवरण",
      "fieldMinute": "मिनट (0–59)",
      "fieldHour": "घंटा (0–23)",
      "fieldDom": "महीने का दिन (1–31)",
      "fieldMonth": "महीना (1–12)",
      "fieldDow": "सप्ताह का दिन (0–6)",
      "nextRuns": "अगली {count} तय रन (स्थानीय समय)",
      "noRuns": "अगले 366 दिनों में कोई मेल खाता रन नहीं मिला।",
      "fieldsError": "स्टैंडर्ड cron में 5 फ़ील्ड चाहिए (मिनट घंटा महीने-का-दिन महीना सप्ताह-का-दिन)। मिले {count}।",
      "emptySegment": "\"{token}\" में खाली खंड",
      "invalidStep": "\"{token}\" में अमान्य चरण \"{step}\"",
      "outOfRange": "\"{token}\" में मान सीमा से बाहर ({min}–{max})",
      "invalidCron": "अमान्य cron एक्सप्रेशन।",
      "everyMinutes": "हर {n} मिनट",
      "minuteZeroHour": "हर घंटे के मिनट 0 पर",
      "atTime": "{time} पर",
      "atFields": "{a}, {b} पर",
      "dayEveryDay": "हर दिन",
      "dayWeekdays": "कार्यदिवसों पर (सोमवार–शुक्रवार)",
      "dayOfMonth": "महीने के {day} दिन",
      "dayDow": "{dow} को",
      "dayBoth": "{day} दिन या {dow} को",
      "monthIn": " {months} में"
    },
    "tables": {
      "presets": [
        {
          "label": "हर 5 मिनट",
          "expr": "*/5 * * * *"
        },
        {
          "label": "हर घंटा",
          "expr": "0 * * * *"
        },
        {
          "label": "रोज़ आधी रात",
          "expr": "0 0 * * *"
        },
        {
          "label": "कार्यदिवसों पर सुबह 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "महीने की 1 तारीख़ को 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "रविवार",
        "सोमवार",
        "मंगलवार",
        "बुधवार",
        "गुरुवार",
        "शुक्रवार",
        "शनिवार"
      ],
      "monthLabels": [
        "",
        "जनवरी",
        "फ़रवरी",
        "मार्च",
        "अप्रैल",
        "मई",
        "जून",
        "जुलाई",
        "अगस्त",
        "सितंबर",
        "अक्टूबर",
        "नवंबर",
        "दिसंबर"
      ],
      "unitWords": {
        "minute": "मिनट",
        "hour": "घंटा",
        "day": "दिन",
        "month": "महीना",
        "weekday": "सप्ताह का दिन"
      },
      "unitPlurals": {
        "minute": "मिनट",
        "hour": "घंटे",
        "day": "दिन",
        "month": "महीने",
        "weekday": "सप्ताह के दिन"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS मिनिफ़ाई करें",
      "beautifyTab": "CSS सुंदर बनाएँ",
      "inputLabel": "इनपुट CSS",
      "bytesLabel": "बाइट",
      "inputPlaceholder": "CSS नियम या स्टाइलशीट यहाँ पेस्ट करें...",
      "outputLabelMinify": "मिनिफ़ाइड CSS",
      "outputLabelBeautify": "सुंदर बनाई गई CSS",
      "outputPlaceholder": "प्रोसेस की गई CSS यहाँ दिखेगी...",
      "copyCss": "CSS कॉपी करें"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "टेक्स्ट इनपुट",
      "fileTab": "लोकल फ़ाइल चेकसम",
      "uppercaseHex": "बड़े अक्षर हेक्स",
      "inputLabel": "इनपुट स्ट्रिंग (UTF-8)",
      "inputPlaceholder": "SHA-1, SHA-256, SHA-384 और SHA-512 हैश निकालने के लिए टेक्स्ट लिखें...",
      "chooseFileLabel": "हैश करने के लिए लोकल फ़ाइल चुनें",
      "fileNoteDefault": "फ़ाइल ब्राउज़र की मेमोरी में ही पढ़ी जाती है, कभी अपलोड नहीं होती।",
      "bytesLabel": "बाइट",
      "cryptoUnavailable": "Web Crypto हैशिंग उपलब्ध नहीं है।",
      "sampleText": "नमस्ते, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "एंटिटी एनकोड करें",
      "decodeTab": "एंटिटी डिकोड करें",
      "encodeNonAscii": "गैर-ASCII चिह्न एनकोड करें (&#...;)",
      "swap": "बदलें",
      "inputLabelEncode": "रॉ HTML / टेक्स्ट",
      "inputLabelDecode": "HTML-एनकोडेड स्ट्रिंग",
      "inputPlaceholderEncode": "<p>HTML टैग या विशेष अक्षर लिखें...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;एनकोडेड एंटिटी पेस्ट करें...&lt;/p&gt;",
      "outputLabelEncode": "एनकोडेड एंटिटी",
      "outputLabelDecode": "डिकोड किया गया टेक्स्ट",
      "outputPlaceholder": "बदली गई एंटिटी यहाँ दिखेंगी..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS मिनिफ़ाई करें",
      "beautifyTab": "JS सुंदर बनाएँ",
      "indentLabel": "इंडेंट:",
      "indent2": "2 स्पेस",
      "indent4": "4 स्पेस",
      "inputLabel": "JavaScript / TypeScript इनपुट",
      "bytesLabel": "बाइट",
      "inputPlaceholder": "JavaScript या TypeScript स्निपेट पेस्ट करें...",
      "outputLabelMinify": "मिनिफ़ाइड आउटपुट",
      "outputLabelBeautify": "सुंदर बनाया गया आउटपुट",
      "outputPlaceholder": "फ़ॉर्मैट किया गया JavaScript यहाँ दिखेगा...",
      "copyCode": "कोड कॉपी करें"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "डिलिमिटर:",
      "commaOpt": "कॉमा (,)",
      "semicolonOpt": "सेमीकोलन (;)",
      "tabOpt": "टैब (TSV)",
      "conversionError": "रूपांतरण त्रुटि:",
      "inputLabelJson": "JSON इनपुट",
      "inputLabelCsv": "CSV इनपुट",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "CSV आउटपुट",
      "outputLabelJson": "JSON आउटपुट",
      "outputPlaceholder": "बदला गया डेटा यहाँ दिखेगा...",
      "parseFallback": "इनपुट फ़ॉर्मैट पार्स नहीं हो सका।"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "ब्राउज़र की मेमोरी में ही Base64Url हेडर और पेलोड डिकोड करता है। क्रिप्टोग्राफ़िक हस्ताक्षर जाँचता नहीं।",
      "loadSampleJwt": "नमूना JWT लोड करें",
      "inputLabel": "एनकोडेड JWT टोकन",
      "inputPlaceholder": "हेडर और क्लेम देखने के लिए JWT टोकन पेस्ट करें (eyJhbGciOi...)...",
      "invalidJwt": "अमान्य JWT:",
      "headerLabel": "हेडर (एल्गोरिदम और टाइप)",
      "payloadLabel": "पेलोड (क्लेम)",
      "copyHeader": "हेडर कॉपी करें",
      "copyPayload": "पेलोड कॉपी करें",
      "timestampTitle": "टाइमस्टैम्प क्लेम",
      "iatLabel": "जारी किया गया (iat)",
      "nbfLabel": "इससे पहले नहीं (nbf)",
      "expLabel": "समाप्ति (exp)",
      "expired": "समाप्त हो गया",
      "active": "सक्रिय (अभी समाप्त नहीं हुआ)",
      "signatureLabel": "हस्ताक्षर खंड (Base64Url)",
      "invalidB64Url": "Base64Url खंड की लंबाई अमान्य है।",
      "segmentCount": "3 बिंदु-विभाजित JWT खंड चाहिए (header.payload.signature), मिले {count}।",
      "parseFallback": "JWT Base64Url JSON खंड पार्स नहीं हो सके।"
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "रेगुलर एक्सप्रेशन पैटर्न",
      "patternPlaceholder": "regex पैटर्न लिखें...",
      "flagsLabel": "फ़्लैग:",
      "syntaxError": "सिंटैक्स त्रुटि:",
      "testStringLabel": "टेस्ट स्ट्रिंग",
      "testPlaceholder": "अपने पैटर्न पर जाँचने के लिए नमूना टेक्स्ट पेस्ट करें...",
      "highlightedMatches": "हाइलाइट किए गए मिलान",
      "matchSingular": "मिलान",
      "matchPlural": "मिलान",
      "highlightEmpty": "मिलान यहाँ रीयल टाइम में हाइलाइट होंगे...",
      "capturedTitle": "कैप्चर किए गए मिलान",
      "matchLabel": "मिलान",
      "indexLabel": "इंडेक्स",
      "groupsLabel": "समूह:",
      "noMatches": "कोई मिलान नहीं मिला।",
      "replaceLabel": "बदलने वाले टेम्पलेट का प्रीव्यू",
      "replacePlaceholder": "जैसे $1 [at] $2",
      "invalidRegex": "अमान्य रेगुलर एक्सप्रेशन।"
    },
    "tables": {
      "sampleText": "मुख्य संपर्क: support@utilityflow.online\nबिलिंग टीम: billing@example.org\nअमान्य ईमेल: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (ग्लोबल)"
        },
        {
          "flag": "i",
          "label": "i (केस छोड़ें)"
        },
        {
          "flag": "m",
          "label": "m (मल्टीलाइन)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "सुंदर बनाएँ",
      "minify": "मिनिफ़ाई करें",
      "uppercaseKw": "बड़े अक्षर कीवर्ड",
      "lowercaseKw": "छोटे अक्षर",
      "indentLabel": "इंडेंट:",
      "indent2": "2 स्पेस",
      "indent4": "4 स्पेस",
      "inputLabel": "रॉ SQL क्वेरी",
      "inputPlaceholder": "SQL क्वेरी पेस्ट करें (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "फ़ॉर्मैट की गई SQL",
      "outputPlaceholder": "फ़ॉर्मैट की गई SQL यहाँ दिखेगी...",
      "copySql": "SQL कॉपी करें"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "वर्तमान Unix टाइमस्टैम्प (सेकंड)",
      "useCurrent": "वर्तमान समय इस्तेमाल करें",
      "copyEpoch": "epoch कॉपी करें",
      "converter1Label": "Unix टाइमस्टैम्प → मानव तारीख़",
      "epochPlaceholder": "जैसे 1794544800",
      "unitAuto": "ऑटो",
      "unitSeconds": "सेकंड",
      "unitMilliseconds": "मिलीसेकंड",
      "errorNotNumeric": "मान्य संख्यात्मक Unix टाइमस्टैम्प डालें।",
      "errorOutOfRange": "टाइमस्टैम्प मान्य JavaScript Date सीमा से बाहर है।",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "स्थानीय समय क्षेत्र",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "सापेक्ष",
      "converter2Label": "स्थानीय तारीख़ और समय → Unix टाइमस्टैम्प",
      "secondsLabel": "सेकंड",
      "millisecondsLabel": "मिलीसेकंड",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "एनकोड करें",
      "decode": "डिकोड करें",
      "encodeUriPreserve": "encodeURI (://?& सुरक्षित रखें)",
      "swap": "बदलें",
      "urlError": "URL त्रुटि:",
      "inputLabel": "इनपुट स्ट्रिंग या URL",
      "inputPlaceholder": "URL, क्वेरी स्ट्रिंग या पैरामीटर मान पेस्ट करें...",
      "outputLabelEncode": "एनकोडेड आउटपुट",
      "outputLabelDecode": "डिकोडेड आउटपुट",
      "outputPlaceholder": "एनकोड या डिकोड की गई URL यहाँ दिखेगी...",
      "parsedTitle": "URL का पार्स किया गया विवरण",
      "protocol": "प्रोटोकॉल",
      "host": "होस्ट",
      "pathname": "पाथनेम",
      "hash": "हैश",
      "noneValue": "(कोई नहीं)",
      "queryParam": "क्वेरी पैरामीटर",
      "decodedValue": "डिकोड किया गया मान",
      "malformed": "ग़लत प्रतिशत-एनकोडिंग क्रम।"
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID वर्शन",
      "v4": "v4 (रैंडम)",
      "v7": "v7 (समय-क्रमबद्ध)",
      "quantity": "मात्रा (1–100)",
      "generate": "UUID बनाएँ",
      "uppercase": "बड़े अक्षर",
      "includeHyphens": "हाइफ़न शामिल करें",
      "wrapBraces": "{ब्रेसिज़} में लपेटें",
      "generatedLabel": "बनाए गए UUID",
      "copyAll": "सभी कॉपी करें"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "सफ़ेद पर इंडिगो",
      "presetSlate": "स्लेट इंक",
      "presetEmerald": "एमराल्ड बैज",
      "presetDark": "डार्क मोड",
      "swapColors": "रंग बदलें",
      "fgTitle": "अग्रभूमि / टेक्स्ट रंग",
      "bgTitle": "पृष्ठभूमि रंग",
      "copyHex": "HEX कॉपी करें",
      "pickerSuffix": "पिकर",
      "hexInputSuffix": "HEX इनपुट",
      "contrastRatioLabel": "WCAG 2.1 कंट्रास्ट अनुपात",
      "checkAaNormal": "WCAG AA सामान्य टेक्स्ट",
      "checkAaLarge": "WCAG AA बड़ा टेक्स्ट / UI",
      "checkAaaNormal": "WCAG AAA सामान्य टेक्स्ट",
      "checkAaaLarge": "WCAG AAA बड़ा टेक्स्ट",
      "pass": "पास",
      "fail": "फ़ेल",
      "livePreviewLabel": "लाइव एक्सेसिबिलिटी प्रीव्यू",
      "previewHeading": "साफ़ टाइपोग्राफ़ी किसी भी स्क्रीन साइज़ पर आसानी से पढ़ी जाती है।",
      "previewBody": "सामान्य बॉडी टेक्स्ट (14–16 px) के लिए WCAG लेवल AA में कम से कम 4.5:1 और लेवल AAA में 7.0:1 कंट्रास्ट अनुपात चाहिए। बड़ी हेडिंग (18 pt+ या बोल्ड 14 pt+) के लिए कम से कम 3.0:1 चाहिए।",
      "outlinedControl": "आउटलाइन वाला UI कंट्रोल",
      "hexOnHex": "{fg} पर {bg}",
      "extractTitle": "इमेज से कलर पैलेट निकालें",
      "extractBody": "स्क्रीनशॉट, लोगो या फ़ोटो अपलोड करें — मुख्य HEX स्वॉच सीधे आपकी कंट्रास्ट जाँच में आ जाएँगे।",
      "appliesToLabel": "स्वॉच क्लिक करने पर लागू होगा:",
      "foregroundBtn": "अग्रभूमि",
      "backgroundBtn": "पृष्ठभूमि",
      "selectImage": "स्वॉच निकालने के लिए इमेज चुनें",
      "loadedReplace": "लोड हुई: {name} (दूसरी अपलोड करें)",
      "selectImageError": "कृपया PNG, JPG, WebP या GIF इमेज चुनें।",
      "unableToRead": "\"{name}\" पढ़ी नहीं जा सकी।",
      "canvasUnavailable": "Canvas 2D कॉन्टेक्स्ट उपलब्ध नहीं है।",
      "transparentImage": "इमेज पूरी तरह पारदर्शी लगती है।",
      "unableToExtract": "पैलेट निकाली नहीं जा सकी।",
      "areaPercent": "~{n}% क्षेत्र"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 ब्राउज़र टैब",
        "taskbar": "32×32 टास्कबार / HiDPI",
        "desktopShortcut": "48×48 डेस्कटॉप शॉर्टकट",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA स्प्लैश"
      },
      "monogramMode": "मोनोग्राम बैज बिल्डर",
      "imageMode": "लोगो इमेज अपलोड करें",
      "lettersLabel": "टेक्स्ट / शुरुआती अक्षर (1–3 अक्षर)",
      "cornerShapeLabel": "कोने का आकार",
      "roundedSquare": "गोल कोनों वाला वर्ग",
      "circle": "वृत्त",
      "sharpSquare": "नुकीला वर्ग",
      "square": "वर्ग",
      "bgColorLabel": "पृष्ठभूमि रंग",
      "textColorLabel": "टेक्स्ट रंग",
      "chooseLogo": "PNG, JPG, WebP या SVG लोगो चुनें",
      "loadedReplace": "लोड हुआ: {name} (बदलने के लिए क्लिक करें)",
      "cropMaskLabel": "क्रॉप मास्क",
      "unableToRead": "\"{name}\" पढ़ी नहीं जा सकी।",
      "canvasUnavailable": "Canvas 2D कॉन्टेक्स्ट उपलब्ध नहीं है।",
      "failedEncode": "फ़ेविकॉन PNG एनकोड नहीं हो सका।",
      "unableToGenerate": "फ़ेविकॉन बनाए नहीं जा सके।",
      "icoBundleTitle": "मल्टी-साइज़ favicon.ico बंडल (16px + 32px + 48px)",
      "icoBundleBody": "आपकी वेबसाइट के रूट /public/ फ़ोल्डर के लिए तैयार, मानक-अनुरूप बाइनरी .ico फ़ाइल",
      "downloadIco": "favicon.ico डाउनलोड करें",
      "faviconPreviewAlt": "फ़ेविकॉन 32x32 प्रीव्यू",
      "iconAlt": "{size}x{size} का आइकन",
      "htmlTagsLabel": "HTML <head> लिंक टैग",
      "copyHtml": "HTML कॉपी करें"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "क्रिप्टोग्राफ़िक चेकसम निकालने के लिए कोई भी फ़ाइल चुनें",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Web Crypto API से लोकल हैश · कोई फ़ाइल अपलोड नहीं होती (500 MB से कम की सलाह)",
      "cryptoUnavailable": "इस ब्राउज़र में Web Crypto SubtleCrypto API उपलब्ध नहीं है।",
      "hashFailed": "ब्राउज़र मेमोरी में फ़ाइल हैश नहीं हो सकी (कई सौ MB से बड़ी फ़ाइलें RAM सीमा पार कर सकती हैं)।",
      "computing": "SHA-1, SHA-256, SHA-384 और SHA-512 चेकसम लोकल निकाले जा रहे हैं...",
      "fileLabel": "फ़ाइल:",
      "sizeLabel": "साइज़:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "बदली गई:",
      "bytesSuffix": "{n} बाइट",
      "downloadSha256": ".sha256 डाउनलोड करें",
      "sha256Label": "SHA-256 (सुझाया गया)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (सिर्फ़ पुरानी संगतता के लिए)",
      "verifyLabel": "अपेक्षित चेकसम से जाँचें",
      "expectedPlaceholder": "प्रकाशित SHA-256, SHA-512, SHA-384 या SHA-1 चेकसम (या .sha256sum लाइन) पेस्ट करें...",
      "verified": "चेकसम जाँच हो गई! फ़ाइल अपेक्षित {algorithm} डाइजेस्ट से बिल्कुल मेल खाती है।",
      "mismatch": "चेकसम मेल नहीं खाता! कोई भी निकाला गया डाइजेस्ट आपके अपेक्षित मान से मेल नहीं खाता।"
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "कंप्रेस करने के लिए इमेज चुनें (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "HTML5 Canvas से लोकल प्रोसेस · कभी रिमोट सर्वर पर अपलोड नहीं होती",
      "uploadImageError": "कृपया PNG, JPG, WebP या GIF इमेज फ़ाइल अपलोड करें।",
      "fileTooLarge": "फ़ाइल बहुत बड़ी है — प्रति फ़ाइल सीमा 20 MB है। कृपया छोटी इमेज चुनें।",
      "unableToDecode": "\"{name}\" डिकोड नहीं हो सकी।",
      "canvasUnavailable": "Canvas 2D कॉन्टेक्स्ट उपलब्ध नहीं है।",
      "compressionFailed": "ब्राउज़र कैनवस में कंप्रेशन विफल रहा।",
      "unableToCompress": "इमेज कंप्रेस नहीं हो सकी।",
      "unableToRead": "\"{name}\" पढ़ी नहीं जा सकी।",
      "invalidImage": "अमान्य इमेज फ़ाइल।",
      "outputFormatLabel": "आउटपुट फ़ॉर्मैट",
      "webpOption": "WebP (वेब के लिए सबसे छोटा आधुनिक साइज़)",
      "jpgOption": "JPG (सबसे व्यापक संगतता)",
      "pngOption": "PNG (बिना नुकसान पारदर्शिता)",
      "maxWidthLabel": "अधिकतम चौड़ाई सीमा",
      "keepOriginalWidth": "मूल चौड़ाई रखें",
      "max1920": "अधिकतम 1920 px (Full HD)",
      "max1280": "अधिकतम 1280 px (ब्लॉग / हीरो)",
      "max800": "अधिकतम 800 px (थंबनेल)",
      "qualityLabel": "क्वालिटी: ",
      "losslessPng": "बिना नुकसान PNG",
      "originalLabel": "मूल",
      "compressedLabel": "कंप्रेस की गई",
      "changeLabel": "बदलाव",
      "outputSummary": "आउटपुट: {w} × {h} px · {ext}",
      "compressing": "कंप्रेस हो रही है...",
      "downloadExt": ".{ext} डाउनलोड करें",
      "previewAlt": "कंप्रेस की गई इमेज का प्रीव्यू"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "बदलने के लिए एक या कई इमेज चुनें",
      "imagesLoaded": "{n} इमेज लोड हुईं — जोड़ने या बदलने के लिए क्लिक करें",
      "batchNote": "PNG, JPG, WebP, SVG या GIF को लोकल ही PNG, JPG या WebP में बैच बदलें",
      "convertToLabel": "किस फ़ॉर्मैट में बदलें",
      "pngOption": "PNG (.png — पारदर्शिता बनी रहती है)",
      "qualityLabel": "नुकसान वाली क्वालिटी: ",
      "lossless": "बिना नुकसान",
      "alphaFillLabel": "अल्फ़ा फ़िल",
      "converting": "बदली जा रही हैं...",
      "reconvert": "फिर से बदलें",
      "selectFilesError": "एक या ज़्यादा इमेज फ़ाइलें चुनें (PNG, JPG, WebP, SVG, GIF)।",
      "filesTooLarge": "{names} छोड़ी गईं — 25 MB प्रति फ़ाइल सीमा से बड़ी फ़ाइलें बदली नहीं जातीं।",
      "couldNotDecode": "\"{name}\" डिकोड नहीं हो सकी।",
      "canvasUnavailable": "Canvas 2D उपलब्ध नहीं है।",
      "conversionFailed": "\"{name}\" का रूपांतरण विफल रहा।",
      "batchFailed": "बैच इमेज रूपांतरण विफल रहा।",
      "downloadExt": ".{ext} डाउनलोड करें"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "पहले से तय साइज़ में बदलने या क्रॉप करने के लिए इमेज चुनें",
      "fileWithDims": "{name} (मूल: {w} × {h} px)",
      "supportsNote": "पिक्सेल रीसाइज़, आस्पेक्ट लॉक और बीच से क्रॉप वाले सोशल प्रीसेट समर्थित हैं",
      "selectImageError": "PNG, JPG, WebP या GIF इमेज चुनें।",
      "unableToDecode": "\"{name}\" डिकोड नहीं हो सकी।",
      "unableToRead": "इमेज पढ़ी नहीं जा सकी।",
      "failedLoading": "रीसाइज़ के लिए इमेज लोड नहीं हो सकी।",
      "canvasUnavailable": "Canvas 2D उपलब्ध नहीं है।",
      "failedGenerating": "रीसाइज़ की गई इमेज बनाई नहीं जा सकी।",
      "resizeFailed": "रीसाइज़ विफल रहा।",
      "quickPresets": "त्वरित प्रीसेट:",
      "presetOg": "OG शेयर (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "वर्ग (1080×1080)",
      "presetAvatar": "अवतार (512×512)",
      "widthLabel": "चौड़ाई (px)",
      "heightLabel": "ऊँचाई (px)",
      "fitModeLabel": "आस्पेक्ट फ़िट मोड",
      "coverCropOption": "बीच से कवर क्रॉप (बिना खिंचाव)",
      "exactOption": "सटीक आयामों में स्केल करें",
      "outputFormatLabel": "आउटपुट फ़ॉर्मैट",
      "lockAspect": "आयाम लिखते समय मूल आस्पेक्ट अनुपात लॉक करें",
      "resizeButton": "{w} × {h} px में रीसाइज़ करें",
      "readySummary": "तैयार: {w} × {h} px ({ext})",
      "downloadResized": "रीसाइज़ की गई .{ext} डाउनलोड करें",
      "previewAlt": "रीसाइज़ की गई इमेज का आउटपुट"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "घुमाने, पलटने या फ़िल्टर लगाने के लिए इमेज चुनें",
      "loadedReplace": "{name} (बदलने के लिए क्लिक करें)",
      "previewNote": "रीयल-टाइम HTML5 Canvas प्रीव्यू और पिक्सेल एक्सपोर्ट",
      "selectImageError": "कृपया PNG, JPG, WebP या GIF इमेज चुनें।",
      "failedLoading": "\"{name}\" लोड नहीं हो सकी।",
      "rotateLeft": "90° बाएँ घुमाएँ",
      "rotateRight": "90° दाएँ घुमाएँ",
      "flipHorizontal": "क्षैतिज पलटें",
      "flipVertical": "ऊर्ध्वाधर पलटें",
      "brightnessLabel": "चमक: ",
      "contrastLabel": "कंट्रास्ट: ",
      "grayscaleLabel": "ब्लैक और व्हाइट (ग्रेस्केल)",
      "resetAll": "सब रीसेट करें",
      "exportFormatLabel": "एक्सपोर्ट फ़ॉर्मैट",
      "livePreview": "लाइव Canvas प्रीव्यू"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "इमेज → Base64 Data URI",
      "decodeMode": "Base64 → इमेज प्रीव्यू",
      "selectImageError": "इमेज फ़ाइल चुनें (PNG, JPG, WebP, SVG, GIF, ICO)।",
      "unableToRead": "\"{name}\" पढ़ी नहीं जा सकी।",
      "chooseImage": "एनकोड करने के लिए इमेज फ़ाइल चुनें",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Data URI, रॉ Base64, HTML <img> और CSS बैकग्राउंड स्निपेट बनाता है",
      "binarySizeLabel": "बाइनरी फ़ाइल साइज़",
      "base64SizeLabel": "Base64 URI साइज़ (~33% बड़ा)",
      "fullDataUriLabel": "पूरी Data URI",
      "copyDataUri": "Data URI कॉपी करें",
      "copyRawBase64": "रॉ Base64 कॉपी करें",
      "copyImg": "<img> कॉपी करें",
      "copyCss": "CSS कॉपी करें",
      "encodedAria": "एनकोड की गई Base64 Data URI",
      "encodedAlt": "एनकोड किया गया प्रीव्यू",
      "pasteLabel": "Base64 इमेज स्ट्रिंग या Data URI पेस्ट करें",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... या रॉ base64 स्ट्रिंग",
      "invalidPayload": "पेस्ट किया गया Base64 टेक्स्ट मान्य एनकोडेड इमेज पेलोड नहीं है।",
      "decodedAlt": "डिकोड किया गया Base64 प्रीव्यू",
      "downloadExt": ".{ext} डाउनलोड करें"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "बहुत मज़बूत",
        "strong": "मज़बूत",
        "moderate": "मध्यम",
        "weak": "कमज़ोर"
      },
      "randomPasswordMode": "रैंडम पासवर्ड",
      "passphraseMode": "Diceware पासफ़्रेज़",
      "regenerate": "फिर से बनाएँ",
      "passwordLengthLabel": "पासवर्ड लंबाई: ",
      "charsSuffix": " अक्षर",
      "batchCountLabel": "बैच संख्या: ",
      "uppercaseLabel": "बड़े अक्षर (A–Z)",
      "lowercaseLabel": "छोटे अक्षर (a–z)",
      "numbersLabel": "संख्याएँ (0–9)",
      "symbolsLabel": "चिह्न (!@#$%...)",
      "excludeAmbiguousLabel": "भ्रमित करने वाले छोड़ें (0, O, 1, l, I)",
      "wordCountLabel": "शब्द संख्या: ",
      "wordSeparatorLabel": "शब्द सेपरेटर",
      "hyphenOption": "हाइफ़न (-)",
      "underscoreOption": "अंडरस्कोर (_)",
      "periodOption": "पीरियड (.)",
      "spaceOption": "स्पेस ( )",
      "capitalizeWordsLabel": "शब्दों के पहले अक्षर बड़े करें",
      "appendDigitLabel": "2 अंकों की संख्या जोड़ें",
      "selectGroupWarning": "पासवर्ड बनाने के लिए कम से कम एक अक्षर समूह चुनें।",
      "entropyBits": "~{n} बिट एंट्रॉपी",
      "poolSizeSuffix": " · पूल साइज़ {n}",
      "wordListSuffix": " · {n} शब्दों की सूची",
      "copyAll": "सभी कॉपी करें"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "वेबसाइट URL",
        "text": "टेक्स्ट",
        "wifi": "Wi-Fi कॉन्फ़िगरेशन",
        "vcard": "vCard संपर्क",
        "email": "ईमेल पता",
        "phone": "फ़ोन नंबर",
        "plainText": "सादा टेक्स्ट"
      },
      "liveCameraCapture": "लाइव कैमरा कैप्चर",
      "scanMode": "QR इमेज स्कैन / डिकोड करें",
      "vcardMode": "vCard संपर्क QR बिल्डर",
      "uploadQr": "QR कोड इमेज अपलोड करें",
      "uploadQrNote": "PNG, JPG, WebP या SVG स्क्रीनशॉट · 100% क्लाइंट-साइड",
      "liveCameraTitle": "लाइव डिवाइस कैमरा स्कैन",
      "liveCameraNote": "सिर्फ़ अनुमति मिलने पर लोकल कैमरा फ़ीड इस्तेमाल करता है",
      "startCamera": "कैमरा स्कैनर शुरू करें",
      "stopCamera": "कैमरा रोकें",
      "cameraHint": "कैमरा QR कोड की ओर करें — डिकोड होते ही कैप्चर अपने आप रुक जाएगा।",
      "uploadImageError": "कृपया QR कोड वाली PNG, JPG, WebP या SVG इमेज अपलोड करें।",
      "unableToLoad": "\"{name}\" लोड नहीं हो सकी।",
      "noQrDetected": "इस इमेज में कोई QR कोड नहीं मिला। फ़ोकस साफ़ रखें, शांत-क्षेत्र (quiet-zone) मार्जिन साफ़ रखें और कंट्रास्ट ज़्यादा रखें।",
      "unableToScan": "इमेज स्कैन नहीं हो सकी।",
      "cameraUnsupported": "इस ब्राउज़र में कैमरा स्कैनिंग समर्थित नहीं है।",
      "cameraDenied": "कैमरा अनुमति नहीं मिली या कोई कैमरा डिवाइस उपलब्ध नहीं है। इसके बजाय QR कोड इमेज अपलोड करें।",
      "decodedPayload": "डिकोड किया गया पेलोड · {kind}",
      "sourceLabel": "स्रोत: ",
      "copyPayload": "पेलोड कॉपी करें",
      "decodedAria": "डिकोड किया गया QR टेक्स्ट",
      "detectedLink": "मिला वेब लिंक: ",
      "uploadedPreviewAlt": "अपलोड किए गए QR कोड का प्रीव्यू",
      "firstNameLabel": "पहला नाम",
      "lastNameLabel": "अंतिम नाम",
      "orgLabel": "संगठन",
      "jobTitleLabel": "पद",
      "defaultJobTitle": "प्रोडक्ट डिज़ाइनर",
      "phoneLabel": "फ़ोन नंबर",
      "emailLabel": "ईमेल पता",
      "websiteLabel": "वेबसाइट URL",
      "rawVcardLabel": "रॉ vCard 3.0 पेलोड",
      "copyVcard": "vCard कॉपी करें",
      "vcardQrAlt": "बनाया गया vCard QR कोड",
      "downloadPng": "PNG डाउनलोड करें",
      "downloadSvg": "SVG डाउनलोड करें"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical और Hreflang टैग",
      "redirectsMode": "301 रीडायरेक्ट नियम जेनरेटर",
      "canonicalLabel": "सेल्फ़-रेफ़रेंसिंग Canonical URL",
      "alternatesLabel": "भाषा और क्षेत्र के विकल्प",
      "addLocale": "लोकेल जोड़ें",
      "langCodeAria": "भाषा कोड",
      "alternateUrlAria": "वैकल्पिक URL",
      "removeLocaleAria": "लोकेल पंक्ति हटाएँ",
      "htmlTagsLabel": "HTML <head> लिंक टैग",
      "copyHtml": "HTML कॉपी करें",
      "xmlSnippetLabel": "XML साइटमैप <xhtml:link> स्निपेट",
      "copyXml": "XML कॉपी करें",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (server block)",
      "copyRules": "{n} नियम कॉपी करें",
      "pairsLabel": "स्रोत → गंतव्य जोड़े (कॉमा, टैब, या “ -> ” से अलग करें)",
      "generatedConfigLabel": "बनाया गया 301 रीडायरेक्ट कॉन्फ़िग",
      "skippedInvalid": "{n} लाइन छोड़ी गईं — गंतव्य लक्ष्य नहीं मिला।",
      "invalidHreflangWarning": "अमान्य hreflang कोड छोड़े गए: {codes} — 2-अक्षर भाषा कोड इस्तेमाल करें (जैसे en, es), फिर चाहें तो क्षेत्र जोड़ें (जैसे en-US), या x-default।"
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "तकनीकी SEO की शुरुआत साफ़, क्रॉल किए जा सकने वाले URL, सटीक canonical टैग और संरचित XML साइटमैप से होती है। जब प्रकाशक कीवर्ड भरने के बजाय यूज़र की मंशा पर केंद्रित मददगार कंटेंट लिखते हैं, तो सर्च इंजन विषय की गहराई अपने आप समझ लेते हैं। अपनी हेडिंग, मेटा विवरण और इंटरनल लिंक नियमित जाँचें।",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "संपादकीय मार्गदर्शन:",
      "guidanceBody": "आधुनिक सर्च इंजन किसी तय कीवर्ड-घनत्व कोटा को पूरा करने पर इनाम नहीं देते। इस वितरण ऑडिट से आकस्मिक दोहराव पकड़ें या पुष्टि करें कि मुख्य अवधारणाएँ आपके टेक्स्ट में साफ़ दिख रही हैं।",
      "targetLabel": "लक्ष्य कीवर्ड / वाक्यांश (वैकल्पिक)",
      "targetPlaceholder": "जैसे technical seo",
      "phraseLengthLabel": "वाक्यांश लंबाई",
      "oneWord": "1 शब्द",
      "twoWord": "2 शब्दों के वाक्यांश",
      "threeWord": "3 शब्दों के वाक्यांश",
      "stripHtml": "HTML टैग हटाएँ",
      "ignoreStopWords": "स्टॉप वर्ड छोड़ें",
      "textLabel": "लेख का मसौदा या पेस्ट की गई HTML कॉपी",
      "totalWords": "कुल शब्द",
      "uniqueVocabulary": "अनूठी शब्दावली",
      "readingTime": "अनुमानित पढ़ने का समय",
      "targetPrefix": "लक्ष्य: ",
      "hits": "{n} बार ({d}%)",
      "rankHeader": "रैंक",
      "termHeader": "शब्द / N-gram",
      "occurrencesHeader": "बार",
      "shareHeader": "हिस्सा (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – तेज़ ब्राउज़र-आधारित ऑनलाइन यूटिलिटी टूल",
      "defaultDescription": "टेक्स्ट एडिटिंग, डेवलपर एनकोडिंग, वित्त कैलकुलेटर, PDF वर्कफ़्लो और SEO के लिए 84 तेज़, प्राइवेसी-पहले ब्राउज़र टूल देखें।",
      "pageTitleLabel": "पेज टाइटल (<title> / og:title)",
      "titleChars": "{n} अक्षर (आदर्श 30–60)",
      "metaDescriptionLabel": "मेटा विवरण",
      "descChars": "{n} अक्षर (आदर्श 120–160)",
      "canonicalUrlLabel": "Canonical URL",
      "ogImageLabel": "Open Graph इमेज URL (1200×630 सुझाई गई)",
      "siteNameLabel": "साइट नाम (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter कार्ड",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots follow निर्देश",
      "includeViewportLabel": "charset और viewport टैग शामिल करें",
      "generatedTagsLabel": "बनाए गए HTML <head> टैग",
      "copyHtml": "HTML कॉपी करें",
      "downloadHtml": ".html डाउनलोड करें",
      "socialPreviewLabel": "सोशल शेयर कार्ड प्रीव्यू",
      "socialPreviewFallback": "सोशल शेयर प्रीव्यू",
      "untitledPage": "बिना शीर्षक पेज",
      "metaSnippetFallback": "मेटा विवरण स्निपेट यहाँ दिखेगा।"
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "क्लाइंट-साइड HTML सोर्स ऑडिट:",
      "auditBody": "ब्राउज़र किसी भी तीसरे पक्ष की वेबसाइट की क्रॉस-ऑरिजिन स्क्रैपिंग (CORS) रोकते हैं और निजी सर्च एनालिटिक्स तक उनकी पहुँच नहीं होती। अपने पेज का HTML सोर्स नीचे पेस्ट करें (View Page Source) और DOM टैग लोकल ही ऑडिट करें।",
      "pastedHtmlLabel": "पेस्ट किया गया HTML सोर्स",
      "loadSampleHtml": "नमूना HTML लोड करें",
      "htmlPlaceholder": "रॉ <html>...</html> सोर्स यहाँ पेस्ट करें...",
      "scoreLabel": "DOM ऑडिट स्कोर",
      "checksPassed": "{passed} / {total} जाँचें पास",
      "linksSummary": "लिंक: {total} ({internal} आंतरिक / {external} बाहरी)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "डिफ़ॉल्ट (index, follow)",
      "headingOutline": "हेडिंग रूपरेखा (H1–H4)",
      "emptyState": "टाइटल, विवरण, हेडिंग, canonical और alt टैग देखने के लिए बाईं ओर HTML सोर्स पेस्ट करें।",
      "checkTitle": "टाइटल टैग (<title>)",
      "checkMetaDesc": "मेटा विवरण",
      "checkH1": "बिल्कुल एक <h1> हेडिंग",
      "checkCanonical": "Canonical URL (<link rel=\"canonical\">)",
      "checkAlt": "इमेज Alt विशेषताएँ",
      "checkOgJsonLd": "Open Graph और JSON-LD संरचित डेटा",
      "titleDetail": "{n} अक्षर: \"{title}\"",
      "titleMissing": "<head> में <title> टैग नहीं मिला।",
      "descDetail": "{n} अक्षर (लक्ष्य 120–160)।",
      "descMissing": "<meta name=\"description\"> नहीं मिला।",
      "h1Detail": "{n} <h1> एलिमेंट मिले।",
      "canonicalMissing": "कोई canonical टैग घोषित नहीं है।",
      "noImages": "मार्कअप में कोई <img> एलिमेंट नहीं है।",
      "altDetail": "{with}/{total} इमेज में वर्णनात्मक alt टेक्स्ट है।",
      "ogDetail": "og:title {presence} · {n} JSON-LD ब्लॉक।",
      "present": "मौजूद",
      "missing": "नहीं मिला"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "इंडेक्सिंग निर्देश",
      "indexOption": "index (सर्च इंडेक्सिंग की अनुमति)",
      "noindexOption": "noindex (SERP से बाहर रखें)",
      "linkCrawlingLabel": "लिंक क्रॉलिंग",
      "followOption": "follow (लिंक सिग्नल पास करें)",
      "nofollowOption": "nofollow (लिंक फ़ॉलो न करें)",
      "largeOption": "large (योग्य खोजें)",
      "htmlTagLabel": "HTML <head> मेटा टैग",
      "copyHtmlTag": "HTML टैग कॉपी करें",
      "httpHeaderLabel": "HTTP रिस्पॉन्स हेडर (PDF / गैर-HTML)",
      "copyHeader": "हेडर कॉपी करें",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare _headers पाथ पैटर्न",
      "copyBlock": "ब्लॉक कॉपी करें"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "शुरुआती टेम्पलेट:",
      "allowAll": "सभी क्रॉलर को अनुमति",
      "standardWebApp": "स्टैंडर्ड वेब ऐप / SaaS",
      "wordpressClean": "WordPress क्लीन",
      "stagingBlockAll": "स्टेजिंग (सब ब्लॉक करें)",
      "crawlerRules": "क्रॉलर पाथ नियम",
      "addRule": "नियम जोड़ें",
      "directiveAria": "निर्देश",
      "pathAria": "पाथ",
      "deleteRuleAria": "नियम हटाएँ",
      "crawlDelayLabel": "Crawl-delay (सेकंड, वैकल्पिक)",
      "crawlDelayPlaceholder": "कोई नहीं",
      "sitemapUrlsLabel": "साइटमैप URL (हर लाइन में एक)",
      "generatedLabel": "बनाया गया robots.txt",
      "invalidSitemapWarning": "अमान्य साइटमैप URL छोड़े गए: {urls} — साइटमैप लाइनों में पूरे http(s) URL होने चाहिए।"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "तेज़ ब्राउज़र यूटिलिटी कैसे बनाएँ",
      "defaultFaqQ1": "क्या UtilityFlow टूल लोकल ब्राउज़र में चलाता है?",
      "defaultFaqA1": "हाँ। लगभग सभी यूटिलिटी सीधे ब्राउज़र मेमोरी में चलती हैं — इनपुट बाहरी सर्वर पर नहीं भेजे जाते।",
      "defaultFaqQ2": "क्या संरचित JSON-LD SEO में मदद करता है?",
      "defaultFaqA2": "हाँ। मान्य Schema.org JSON-LD सर्च क्रॉलर के लिए एंटिटी संदर्भ साफ़ करता है और रिच रिज़ल्ट की पात्रता बढ़ाता है।",
      "defaultProductName": "प्रो एर्गोनॉमिक मैकेनिकल कीबोर्ड",
      "defaultProductDesc": "सॉफ़्टवेयर डेवलपर के लिए बनाया गया लो-प्रोफ़ाइल वायरलेस कीबोर्ड।",
      "defaultCrumbHome": "होम",
      "defaultCrumbSeo": "SEO टूल",
      "defaultCrumbSchema": "Schema मार्कअप जेनरेटर",
      "headlineLabel": "हेडलाइन",
      "authorNameLabel": "लेखक का नाम",
      "publisherNameLabel": "प्रकाशक का नाम",
      "datePublishedLabel": "प्रकाशन तारीख़",
      "articleUrlLabel": "लेख URL",
      "featuredImageLabel": "फ़ीचर्ड इमेज URL",
      "questionLabel": "प्रश्न #{n}",
      "removeQuestionAria": "प्रश्न {n} हटाएँ",
      "questionPlaceholder": "प्रश्न",
      "acceptedAnswerPlaceholder": "स्वीकृत उत्तर",
      "addFaqRow": "FAQ पंक्ति जोड़ें",
      "productNameLabel": "प्रोडक्ट नाम",
      "descriptionLabel": "विवरण",
      "priceLabel": "कीमत",
      "currencyLabel": "मुद्रा",
      "availabilityLabel": "उपलब्धता",
      "orgNameLabel": "संगठन का नाम",
      "websiteUrlLabel": "वेबसाइट URL",
      "logoUrlLabel": "लोगो URL",
      "breadcrumbLabelAria": "ब्रेडक्रंब {n} लेबल",
      "breadcrumbUrlAria": "ब्रेडक्रंब {n} URL",
      "labelPlaceholder": "लेबल",
      "addLevel": "स्तर जोड़ें",
      "jsonLdOutputLabel": "JSON-LD <script> आउटपुट",
      "copyScriptTag": "स्क्रिप्ट टैग कॉपी करें"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "वर्ड काउंटर – शब्द और अक्षर गिनें | UtilityFlow",
      "defaultDescription": "अपने ब्राउज़र में JSON पेलोड को तुरंत फ़ॉर्मैट, जाँच, मिनिफ़ाई और की सॉर्ट करें — लाइन/कॉलम सिंटैक्स त्रुटि विवरण सहित।",
      "desktopSerp": "डेस्कटॉप SERP (~580px टाइटल)",
      "mobileSerp": "मोबाइल SERP (~120ch विवरण)",
      "copyTitleMeta": "टाइटल और मेटा कॉपी करें",
      "seoTitleLabel": "SEO टाइटल",
      "titleMetrics": "{chars} अक्षर · ~{px} px / 580 px अधिकतम",
      "metaDescriptionLabel": "मेटा विवरण",
      "descMetrics": "{chars} अक्षर · ~{px} px",
      "pageUrlLabel": "पेज URL (ब्रेडक्रंब प्रीव्यू के लिए)",
      "siteNameLabel": "साइट नाम",
      "boldKeywordLabel": "बोल्ड कीवर्ड",
      "optionalPlaceholder": "वैकल्पिक",
      "datePrefixLabel": "तारीख़ उपसर्ग",
      "datePlaceholder": "जैसे Nov 12, 2025",
      "desktopSimulation": "डेस्कटॉप सर्च स्निपेट सिम्युलेशन",
      "mobileSimulation": "मोबाइल सर्च स्निपेट सिम्युलेशन",
      "titleFallback": "आपका SEO टाइटल यहाँ दिखेगा",
      "descFallback": "आपके मेटा विवरण का प्रीव्यू यहाँ दिखेगा।"
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "तकनीकी SEO के लिए साफ़ URL स्लग कैसे बनाएँ!\n2026 में 10 बेहतरीन Café और प्रोडक्टिविटी टूल\nXML साइटमैप और Robots.txt पूरी चेकलिस्ट",
      "domainLabel": "बेस डोमेन / सबफ़ोल्डर (पूरी URL प्रीव्यू के लिए)",
      "separatorLabel": "शब्द सेपरेटर",
      "hyphenOption": "हाइफ़न (-) — Google की सिफ़ारिश",
      "underscoreOption": "अंडरस्कोर (_)",
      "maxLengthLabel": "अधिकतम स्लग लंबाई ({n} अक्षर)",
      "stripStopWords": "वैकल्पिक अंग्रेज़ी स्टॉप वर्ड हटाएँ (a, the, and, of, in, to)",
      "trailingSlash": "अंत में स्लैश (/) शामिल करें",
      "titlesLabel": "पेज हेडलाइन / टाइटल (बैच बनाने के लिए हर लाइन में एक)",
      "generatedLabel": "बनाए गए SEO स्लग ({n})",
      "copyAllSlugs": "सभी स्लग कॉपी करें",
      "copyAllUrls": "सभी पूरी URL कॉपी करें",
      "originalTitleHeader": "मूल टाइटल",
      "slugUrlHeader": "SEO स्लग और पूरी URL",
      "copyHeader": "कॉपी करें"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> तारीख़ (वैकल्पिक)",
      "changefreqLabel": "<changefreq> संकेत",
      "priorityLabel": "डिफ़ॉल्ट <priority>",
      "omitTag": "टैग छोड़ें",
      "deduplicateLabel": "बिल्कुल समान URL हटाएँ",
      "urlsLabel": "Canonical URL (हर लाइन में एक पूरी https:// URL)",
      "skippedInvalid": "{n} अमान्य URL लाइन छोड़ी गईं: ",
      "generatedLabel": "बनाया गया sitemap.xml ({n} URL)",
      "copyXml": "XML कॉपी करें",
      "downloadXml": ".xml डाउनलोड करें",
      "generatedAria": "बनाया गया XML साइटमैप"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "मेकर्स और टीमों के लिए तेज़ ब्राउज़र टूल बना रहे हैं।   \n\nहर मंगलवार नया वीकली वर्कफ़्लो ड्रॉप।\n\nनीचे दिए लिंक पर मुफ़्त यूटिलिटी आज़माएँ!",
      "modeBraille": "अदृश्य स्पेसर (⠀ U+2800)",
      "modeDot": "कम से कम डॉट स्पेसर (.)",
      "modeClean": "सिर्फ़ पीछे के स्पेस साफ़ करें",
      "collapse": "गलती से दोहरे स्पेस हटाएँ",
      "labelRaw": "मसौदा कैप्शन या बायो",
      "phRaw": "अपना कैप्शन लिखें — जहाँ पैराग्राफ़ ब्रेक चाहिए वहाँ खाली लाइन छोड़ें...",
      "tip": "टिप: ऊपर वाली लाइन के अंत में पीछे स्पेस हों तो सोशल ऐप अक्सर खाली पैराग्राफ़ हटा देते हैं।",
      "labelOut": "पेस्ट करने के लिए तैयार आउटपुट",
      "copyFormatted": "फ़ॉर्मैट किया गया कैप्शन कॉपी करें",
      "charsLabel": "अक्षर:",
      "linesLabel": "लाइनें:",
      "blankLabel": "खाली ब्रेक बचे:",
      "fitsBio": "Instagram 150-अक्षर बायो में आ जाता है",
      "captionLength": "कैप्शन लंबाई (150 बायो सीमा से ज़्यादा)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "समस्या → उकसाना → समाधान (PAS)",
        "tutorial": "3-चरण कार्रवाई योग्य विवरण",
        "bab": "पहले → बाद में → सेतु",
        "checklist": "लॉन्च / ऑडिट चेकलिस्ट",
        "myth": "आम मिथक बनाम व्यावहारिक हक़ीक़त"
      },
      "frameworkDescriptions": {
        "pas": "अपना वर्कफ़्लो समाधान देने से पहले ठोस परेशानी उजागर करता है।",
        "tutorial": "LinkedIn कैरोसेल और सेव के लिए उपयुक्त क्रमांकित how-to संरचना।",
        "bab": "पुरानी अड़चन की तुलना सुव्यवस्थित परिणाम से करता है।",
        "checklist": "बुकमार्क करने लायक साफ़ जाँच सूची।",
        "myth": "पुरानी सलाह को सीधे, संक्षिप्त विकल्पों से चुनौती देता है।"
      },
      "frameworkLabels": {
        "fixesHeading": "असल में क्या ठीक करता है:",
        "beforeLabel": "पहले: ",
        "afterLabel": "बाद में: ",
        "bridgeHeading": "सेतु:",
        "mythLabel": "आम मिथक: ",
        "worksHeading": "व्यवहार में क्या काम करता है:"
      },
      "sampleHook": "कैंपेन लिंक हाथ से फ़ॉर्मैट करके घंटे बर्बाद करना बंद करें।",
      "sampleContext": "असंगत UTM पैरामीटर और टूटी बायो स्पेसिंग चुपचाप एनालिटिक्स रिपोर्ट बिगाड़ देते हैं।",
      "samplePoints": "छोटे अक्षरों वाले utm_source और utm_medium टैग एक जैसे रखें\nप्रकाशित करने से पहले अक्षर फ़ोल्ड जाँचें\nपीछे स्पेस के बिना साफ़ पैराग्राफ़ ब्रेक रखें",
      "sampleCta": "अपने अगले प्रोडक्ट लॉन्च के लिए यह चेकलिस्ट बुकमार्क करें।",
      "infoTitle": "नियतात्मक टेम्पलेट संयोजन:",
      "infoBody": "यह टूल सीधे आपके ब्राउज़र में संरचित कॉपीराइटिंग फ़्रेमवर्क इस्तेमाल करता है — कोई AI मॉडल या बाहरी API इस्तेमाल नहीं होता, न ही ऐसा दावा है।",
      "labelHook": "शुरुआती हुक (पहली 1–2 लाइनें)",
      "labelContext": "संदर्भ / समस्या कथन",
      "labelPoints": "मुख्य बातें (हर लाइन में एक)",
      "labelCta": "कॉल-टू-एक्शन (CTA)",
      "labelTags": "हैशटैग",
      "previewTitle": "फ़ॉर्मैट किया गया कैप्शन प्रीव्यू",
      "copyCaption": "कैप्शन कॉपी करें",
      "charsLabel": "अक्षर:",
      "wordsLabel": "शब्द:",
      "fits": "आ जाता है",
      "threadNeeded": "थ्रेड चाहिए",
      "tooLong": "बहुत लंबा"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "फ़ॉर्मैटिंग और एक्सेसिबिलिटी केस",
      "optCamel": "PascalCase (#CamelCase — स्क्रीन-रीडर अनुकूल)",
      "optLower": "सब छोटे अक्षर (#lowercase)",
      "optPreserve": "मूल केस रखें",
      "outLabel": "आउटपुट लेआउट",
      "optInline": "एक लाइन (स्पेस से अलग)",
      "optNewline": "हर लाइन में एक हैशटैग",
      "optDots": "कैप्शन फ़ोल्ड सेपरेटर (.\n.\n.)",
      "dedupe": "डुप्लिकेट हैशटैग हटाएँ",
      "labelRaw": "कीवर्ड या गड़बड़ हैशटैग (कॉमा, स्पेस या लाइन से अलग)",
      "labelResult": "साफ़ हैशटैग समूह",
      "copyHashtags": "हैशटैग कॉपी करें",
      "statClean": "साफ़ हैशटैग",
      "statDupes": "डुप्लिकेट हटाए गए",
      "statIgMax": "Instagram अधिकतम (30)",
      "statWithin": "IG 30 सीमा के भीतर",
      "statExceeds": "30-टैग सीमा से ज़्यादा",
      "statChars": "आउटपुट अक्षर"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 अक्षर · अक्षर, संख्याएँ, अंडरस्कोर",
        "instagram": "1–30 अक्षर · अक्षर, संख्याएँ, पीरियड, अंडरस्कोर",
        "tiktok": "2–24 अक्षर · अक्षर, संख्याएँ, अंडरस्कोर, पीरियड",
        "youtube": "3–30 अक्षर · अक्षर, संख्याएँ, _, -, .",
        "threads": "1–30 अक्षर · Instagram के साथ साझा नेमस्पेस",
        "github": "1–39 अक्षर · अक्षर-संख्या और एकल हाइफ़न"
      },
      "infoTitle": "नियम जाँच और सीधे जाँच लिंक:",
      "infoBodyBefore": "उपलब्धता का अंदाज़ा लगाए बिना, ऑफ़लाइन ही हैंडल सिंटैक्स और अक्षर सीमा जाँचता है। किसी भी प्लेटफ़ॉर्म के",
      "infoEm": "प्रोफ़ाइल URL खोलें",
      "infoBodyAfter": "लिंक पर क्लिक करके लाइव दावा स्थिति सीधे जाँचें।",
      "labelBrand": "ब्रांड, प्रोजेक्ट या क्रिएटर नाम",
      "phBrand": "जैसे Utility Hub",
      "labelActive": "जाँचने के लिए सक्रिय हैंडल",
      "copyAt": "@ कॉपी करें",
      "variationsTitle": "संगत हैंडल विविधताएँ:",
      "thPlatform": "प्लेटफ़ॉर्म",
      "thRules": "फ़ॉर्मैट नियम",
      "thStatus": "सिंटैक्स स्थिति",
      "thCheck": "मैन्युअल जाँच",
      "valid": "मान्य फ़ॉर्मैट",
      "invalid": "अमान्य सिंटैक्स/लंबाई",
      "checkUrl": "URL जाँचें"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "बोल्ड (Sans-Serif)",
        "sans-italic": "इटैलिक (Sans-Serif)",
        "sans-bold-italic": "बोल्ड इटैलिक (Sans-Serif)",
        "serif-bold": "बोल्ड (Serif)",
        "monospace": "मोनोस्पेस",
        "double-struck": "डबल-स्ट्रक (ब्लैकबोर्ड)",
        "script-bold": "स्क्रिप्ट बोल्ड",
        "fraktur-bold": "फ़्रैक्टुर बोल्ड",
        "small-caps": "स्मॉल कैप्स",
        "fullwidth": "फ़ुलविड्थ एस्थेटिक"
      },
      "styleNotes": {
        "sans-bold": "बायो हेडर और पोस्ट हुक के लिए साफ़ पढ़ने योग्य",
        "sans-italic": "कैप्शन में हल्का ज़ोर",
        "sans-bold-italic": "मज़बूत कॉलआउट और सेक्शन डिवाइडर",
        "serif-bold": "संपादकीय शैली का ज़ोर",
        "monospace": "कोड हैंडल, तारीख़ें और तकनीकी टैग",
        "double-struck": "प्रदर्शन अक्षर",
        "script-bold": "सजावटी बायो हस्ताक्षर",
        "fraktur-bold": "गॉथिक प्रदर्शन अक्षर",
        "small-caps": "साफ़ बड़े-अक्षर जैसे प्रोफ़ाइल लेबल",
        "fullwidth": "चौड़े अंतर वाले रेट्रो सोशल हेडर"
      },
      "sampleText": "नया क्रिएटर टूलकिट 2025",
      "accessibilityTitle": "एक्सेसिबिलिटी नोट:",
      "accessibilityBody": "स्टाइल वाले Unicode अक्षर गणितीय चिह्न ब्लॉक से आते हैं, इसलिए स्क्रीन रीडर उन्हें अक्षर-दर-अक्षर पढ़ सकते हैं या छोड़ सकते हैं, और कुछ सर्च इंडेक्स उन्हें अनदेखा करते हैं। पूरे पैराग्राफ़ के बजाय छोटे हाइलाइट के लिए कम इस्तेमाल करें।",
      "labelInput": "स्टाइल करने के लिए टेक्स्ट",
      "placeholder": "छोटी हेडलाइन, बायो लाइन या CTA लिखें...",
      "previewEmpty": "प्रीव्यू"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagram बायो",
        "linkedinPost": "LinkedIn पोस्ट",
        "newsletter": "न्यूज़लेटर",
        "youtubeDescription": "YouTube विवरण"
      },
      "presetsLabel": "त्वरित चैनल प्रीसेट:",
      "errorEmpty": "गंतव्य वेबसाइट URL डालें।",
      "errorInvalid": "मान्य गंतव्य URL डालें (जैसे https://example.com/landing)।",
      "labelUrl": "वेबसाइट गंतव्य URL *",
      "labelSource": "कैंपेन स्रोत (utm_source) *",
      "phSource": "जैसे instagram, newsletter, google",
      "labelMedium": "कैंपेन माध्यम (utm_medium) *",
      "phMedium": "जैसे social, cpc, email, video",
      "labelCampaign": "कैंपेन नाम (utm_campaign)",
      "phCampaign": "जैसे spring_launch",
      "labelContent": "कैंपेन कंटेंट (utm_content)",
      "phContent": "जैसे hero_banner, bio_button",
      "labelTerm": "कैंपेन शब्द (utm_term)",
      "phTerm": "वैकल्पिक भुगतान कीवर्ड या ऑडियंस टैग",
      "normalizeLabel": "छोटे अक्षर ज़बरदस्ती करें और स्पेस को अंडरस्कोर (`_`) में बदलें",
      "generatedTitle": "बनाई गई कैंपेन URL",
      "copyUtm": "UTM URL कॉपी करें",
      "thParam": "क्वेरी पैरामीटर",
      "thValue": "सामान्यीकृत मान"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "शुरुआती पेज नंबर 1 या उससे बड़ी पूर्ण संख्या होनी चाहिए।",
      "stampedSuccess": (n: number, size: string) => `${n} पेज पर पेज नंबर लगाए गए (${size})।`,
      "pageOfLabel": (cur: number, total: number) => `पेज ${cur} / ${total}`,
      "dropTitleEmpty": "पेज नंबर जोड़ने के लिए PDF फ़ाइल चुनें",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} पेज)`,
      "dropSub": "रिपोर्ट, अनुबंध और पैकेट में साफ़ वेक्टर पेज लेबल लगाता है",
      "labelPos": "स्थिति",
      "optBottomCenter": "नीचे बीच में",
      "optBottomRight": "नीचे दाएँ",
      "optBottomLeft": "नीचे बाएँ",
      "optTopRight": "ऊपर दाएँ",
      "labelFmt": "लेबल फ़ॉर्मैट",
      "optPageOf": "पेज 1 / N",
      "optSlash": "1 / N",
      "optNumberOnly": "1, 2, 3...",
      "labelStart": "शुरुआती नंबर",
      "labelSize": "फ़ॉन्ट साइज़ (pt)",
      "opt9": "9 pt (हल्का)",
      "opt11": "11 pt (मानक)",
      "opt14": "14 pt (बड़ा)",
      "skipCover": "कवर पेज छोड़ें (नंबरिंग पेज 2 से शुरू करें)",
      "numbering": "पेजों पर नंबर लगाए जा रहे हैं...",
      "addBtn": "पेज नंबर जोड़ें और डाउनलोड करें"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `इमेज "${name}" डिकोड नहीं हो सकी।`,
      "errCanvas": "Canvas 2D कॉन्टेक्स्ट उपलब्ध नहीं है।",
      "errConvert": (name: string) => `"${name}" को PNG में बदला नहीं जा सका।`,
      "errNotImage": (name: string) => `"${name}" समर्थित इमेज फ़ाइल नहीं है (PNG, JPG, WebP)।`,
      "errRead": (name: string) => `"${name}" पढ़ी नहीं जा सकी।`,
      "errLoad": "इमेज लोड नहीं हो सकी।",
      "errEmpty": "पहले कम से कम एक इमेज जोड़ें।",
      "errBuild": "इमेज को PDF में बदला नहीं जा सका।",
      "createdSuccess": (n: number, size: string) => `${n} पेज का PDF साफ़-सुथरा बना (${size})।`,
      "dropTitle": "PNG, JPG या WebP इमेज चुनें",
      "dropSub": "स्क्रीनशॉट, स्कैन या फ़ोटो को लोकल ही एक PDF में बदलें",
      "labelSize": "PDF पेज साइज़",
      "optA4": "A4 पोर्ट्रेट (210 × 297 mm)",
      "optLetter": "US Letter (8.5 × 11 in)",
      "optFit": "इमेज के सटीक आयाम",
      "labelMargin": "पेज मार्जिन",
      "optMargin0": "कोई मार्जिन नहीं (0 pt)",
      "optMargin24": "मानक मार्जिन (24 pt)",
      "optMargin48": "चौड़ा मार्जिन (48 pt)",
      "labelOut": "आउटपुट फ़ाइल नाम",
      "moveUp": (name: string) => `${name} ऊपर ले जाएँ`,
      "moveDown": (name: string) => `${name} नीचे ले जाएँ`,
      "removeFile": (name: string) => `${name} हटाएँ`,
      "building": "PDF बनाई जा रही है...",
      "convertBtn": (n: number) => `${n} इमेज को PDF में बदलें`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "चुनी गई PDF फ़ाइलें पढ़ी नहीं जा सकीं।",
      "errMin2": "मर्ज करने के लिए कम से कम दो PDF फ़ाइलें जोड़ें।",
      "mergedSuccess": (n: number, pages: number, size: string) => `${n} PDF साफ़-सुथरी मर्ज हुईं (${pages} पेज, ${size})।`,
      "dropValidating": "PDF फ़ाइलें जाँची जा रही हैं...",
      "dropTitle": "कई PDF फ़ाइलें चुनें या छोड़ें",
      "dropSub": "100% ब्राउज़र-साइड मर्जिंग, pdf-lib से · सिर्फ़ बिना एन्क्रिप्शन वाली PDF · कभी अपलोड नहीं होती",
      "filesQueued": "फ़ाइलें कतार में",
      "totalPagesLabel": "कुल पेज",
      "combinedSize": "संयुक्त इनपुट साइज़",
      "clearQueue": "कतार साफ़ करें",
      "pageSingular": "पेज",
      "pagePlural": "पेज",
      "moveUp": (name: string) => `${name} ऊपर ले जाएँ`,
      "moveDown": (name: string) => `${name} नीचे ले जाएँ`,
      "removeFile": (name: string) => `${name} हटाएँ`,
      "outName": "आउटपुट फ़ाइल नाम",
      "merging": "PDF मर्ज हो रही हैं...",
      "mergeBtn": (n: number) => `${n} PDF मर्ज करें और डाउनलोड करें`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "बदलने योग्य मेटाडेटा फ़ील्ड साफ़ कर दिए गए। लागू करने के लिए Save & Download PDF पर क्लिक करें।",
      "savedSuccess": (size: string) => `अपडेट किया गया PDF मेटाडेटा सहेजा गया (${size})।`,
      "dropTitleEmpty": "मेटाडेटा देखने या बदलने के लिए PDF फ़ाइल चुनें",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} पेज · ${size})`,
      "dropSub": "दस्तावेज़ गुण देखें, लेखक/सॉफ़्टवेयर टैग साफ़ करें, या साफ़ SEO टाइटल सेट करें",
      "labelTitle": "दस्तावेज़ टाइटल",
      "labelAuthor": "लेखक",
      "labelSubject": "विषय / सारांश",
      "labelKeywords": "कीवर्ड (कॉमा से अलग करें)",
      "labelCreator": "बनाने वाला ऐप्लिकेशन",
      "labelProducer": "PDF प्रोड्यूसर",
      "saving": "PDF सहेजी जा रही है...",
      "saveBtn": "मेटाडेटा सहेजें और PDF डाउनलोड करें",
      "stripBtn": "बदलने योग्य फ़ील्ड साफ़ करें"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "घुमाने के लिए कोई मेल खाता पेज नहीं मिला।",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `${b} में से ${a} पेज ${deg}° दक्षिणावर्त घुमाए गए (${size})।`,
      "dropTitleEmpty": "पेज घुमाने के लिए PDF फ़ाइल चुनें",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} पेज)`,
      "dropSub": "बिना सर्वर अपलोड के, लोकल ही सभी पेज या चुनी पेज-सीमा घुमाएँ",
      "labelAngle": "घुमाव कोण",
      "opt90": "90° दक्षिणावर्त (दाएँ)",
      "opt270": "90° वामावर्त (बाएँ / 270°)",
      "opt180": "180° उल्टा",
      "labelScope": "किस पर लागू करें",
      "optAll": (n: number) => `सभी पेज (${n})`,
      "optRange": "ख़ास पेज-सीमाएँ",
      "optOdd": "सिर्फ़ विषम पेज",
      "optEven": "सिर्फ़ सम पेज",
      "labelRangeInput": (n: number) => `पेज नंबर / सीमाएँ (1–${n})`,
      "phRange": "जैसे 1, 3-5",
      "rotating": "पेज घुमाए जा रहे हैं...",
      "rotateBtn": "घुमाव लागू करें और PDF डाउनलोड करें"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- पेज ${n} ---`,
      "dropExtracting": "PDF टेक्स्ट लेयर निकाली जा रही है...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} पेज)`,
      "dropTitleEmpty": "टेक्स्ट निकालने के लिए टेक्स्ट-आधारित PDF चुनें",
      "dropSub": "PDF.js से लोकल ही एंबेडेड Unicode टेक्स्ट निकालता है · कोई सर्वर अपलोड नहीं",
      "noTextTitle": "चुनने योग्य टेक्स्ट लेयर नहीं मिली:",
      "noTextBody": "इस PDF में स्कैन की गई इमेज या आउटलाइन किए गए वेक्टर पाथ लगते हैं, एंबेडेड टेक्स्ट लेयर नहीं। ऑफ़लाइन क्लाइंट-साइड ऑप्टिकल कैरेक्टर पहचान (OCR) नहीं की जाती।",
      "markersLabelBefore": "पेज हेडर मार्कर शामिल करें (",
      "markersCode": "--- पेज N ---",
      "markersLabelAfter": ")",
      "copyText": "टेक्स्ट कॉपी करें",
      "downloadTxt": ".txt डाउनलोड करें",
      "outputAria": "निकाला गया PDF टेक्स्ट आउटपुट",
      "pagesScanned": "स्कैन किए गए पेज:",
      "wordsExtracted": "निकाले गए शब्द:",
      "textSize": "टेक्स्ट साइज़:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "ब्राउज़र कैनवस मेमोरी तेज़ और रिस्पॉन्सिव रखने के लिए एक बैच में अधिकतम 20 पेज रेंडर करें।",
      "errCanvas": "Canvas 2D कॉन्टेक्स्ट उपलब्ध नहीं है।",
      "dropTitleEmpty": "इमेज के रूप में रेंडर करने के लिए PDF चुनें",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} पेज · ${size})`,
      "dropSub": "PDF.js कैनवस से लोकल रेंडर · PNG या JPG आउटपुट",
      "labelRange": "पेज (“all” या 1-4, 6 जैसी सीमा)",
      "labelFormat": "इमेज फ़ॉर्मैट",
      "optPng": "PNG (बिना नुकसान / साफ़ टेक्स्ट)",
      "optJpg": "JPG (कॉम्पैक्ट, फ़ोटो के लिए अच्छा)",
      "labelScale": "रेंडर रिज़ॉल्यूशन",
      "optScale1": "1.0× (72 DPI तेज़ प्रीव्यू)",
      "optScale15": "1.5× (108 DPI मानक)",
      "optScale2": "2.0× (144 DPI तीखा)",
      "rendering": "PDF पेज रेंडर हो रहे हैं...",
      "renderBtn": "PDF पेज को इमेज में रेंडर करें",
      "pageAlt": (n: number) => `पेज ${n} प्रीव्यू`,
      "pageLabel": (n: number, w: number, h: number) => `पेज ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "तटस्थ ग्रे",
        "indigo": "ब्रांड इंडिगो",
        "red": "स्टैम्प लाल"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "PDF बनाने से पहले वॉटरमार्क टेक्स्ट डालें।",
      "appliedSuccess": (text: string, n: number, size: string) => `"${text}" वॉटरमार्क ${n} पेज पर लगाया गया (${size})।`,
      "dropTitleEmpty": "वॉटरमार्क लगाने के लिए PDF फ़ाइल चुनें",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} पेज)`,
      "dropSub": "pdf-lib से लोकल ही साफ़ वेक्टर टेक्स्ट स्टैम्प लगाता है",
      "labelText": "वॉटरमार्क टेक्स्ट",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "स्टैम्प रंग",
      "firstPageOnly": "सिर्फ़ पहला पेज",
      "labelSize": "फ़ॉन्ट साइज़:",
      "ptSuffix": (n: number) => `${n} pt`,
      "labelOpacity": "अपारदर्शिता:",
      "labelAngle": "घुमाव:",
      "applying": "PDF पर वॉटरमार्क लगाया जा रहा है...",
      "applyBtn": "वॉटरमार्क लगाएँ और डाउनलोड करें"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF में कम से कम 1 पेज रहना चाहिए।",
      "savedSuccess": (n: number, size: string) => `${n} पेज वाला अपडेटेड PDF सहेजा गया (${size})।`,
      "loading": "PDF पेज और प्रीव्यू लोड हो रहे हैं...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n} पेज सक्रिय)`,
      "dropTitleEmpty": "पेज क्रम बदलने या हटाने के लिए PDF फ़ाइल चुनें",
      "dropSub": "लोकल ही पेज हिलाएँ, शीट डुप्लिकेट करें या अनचाहे पेज हटाएँ",
      "outCount": "आउटपुट पेज संख्या:",
      "saving": "PDF सहेजी जा रही है...",
      "saveBtn": "क्रम बदला PDF सहेजें",
      "thumbAlt": (n: number) => `मूल पेज ${n}`,
      "thumbFallback": (n: number) => `मूल पृ. ${n}`,
      "posLabel": (n: number) => `स्थान #${n}`,
      "origLabel": (n: number) => `(मूल ${n})`,
      "moveEarlierTitle": "पहले ले जाएँ",
      "moveEarlierAria": (n: number) => `स्थान ${n} पहले ले जाएँ`,
      "moveLaterTitle": "बाद में ले जाएँ",
      "moveLaterAria": (n: number) => `स्थान ${n} बाद में ले जाएँ`,
      "dupTitle": "पेज डुप्लिकेट करें",
      "dupAria": (n: number) => `स्थान ${n} का पेज डुप्लिकेट करें`,
      "delTitle": "पेज हटाएँ",
      "delAria": (n: number) => `स्थान ${n} का पेज हटाएँ`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `बर्स्ट स्प्लिट में हर पेज की अलग फ़ाइल डाउनलोड होती है। 25 पेज से बड़े दस्तावेज़ (${n} पेज यहाँ) के लिए सीमाएँ निकालें, ताकि ब्राउज़र बल्क डाउनलोड ब्लॉक न करे।`,
      "exportedAll": (n: number) => `${n} एक-पेज वाली PDF फ़ाइलें एक्सपोर्ट हुईं।`,
      "errNoMatch": "उस चयन से कोई पेज मेल नहीं खाया (जैसे, सम पेज के लिए 2+ पेज चाहिए)।",
      "extractedSuccess": (a: number, b: number, size: string) => `${b} में से ${a} पेज निकाले गए (${size})।`,
      "dropTitleEmpty": "स्प्लिट या निकालने के लिए PDF फ़ाइल चुनें",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} पेज · ${size})`,
      "dropSub": "मेमोरी में लोकल प्रोसेस · दस्तावेज़ बदलने के लिए क्लिक करें",
      "modeRange": "पेज-सीमाएँ निकालें",
      "modeOdd": "सिर्फ़ विषम पेज",
      "modeEven": "सिर्फ़ सम पेज",
      "modeBurst": "सभी अलग-अलग पेज निकालें",
      "labelRange": (n: number) => `निकालने के पेज (1–${n})`,
      "phRange": "जैसे 1-3, 5, 8-10",
      "rangeHintBefore": "कॉमा और हाइफ़न इस्तेमाल करें (जैसे ",
      "rangeHintAfter": ")।",
      "extracting": "PDF निकाली जा रही है...",
      "splitBtn": "स्प्लिट करें और PDF डाउनलोड करें"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "वेबसाइट URL",
      "tabText": "सादा टेक्स्ट",
      "tabWifi": "Wi-Fi नेटवर्क",
      "tabEmail": "ईमेल लिंक",
      "tabPhone": "फ़ोन नंबर",
      "labelUrl": "गंतव्य URL",
      "labelText": "टेक्स्ट कंटेंट",
      "labelSsid": "नेटवर्क नाम (SSID)",
      "labelSecurity": "सुरक्षा प्रकार",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "खुला (कोई पासवर्ड नहीं)",
      "labelWifiPass": "Wi-Fi पासवर्ड",
      "hiddenSsid": "छिपा SSID नेटवर्क",
      "labelEmailTo": "प्राप्तकर्ता ईमेल",
      "labelEmailSubject": "विषय (वैकल्पिक)",
      "labelPhone": "फ़ोन नंबर (E.164 फ़ॉर्मैट सुझाया गया)",
      "sizeLabel": (size: number) => `साइज़ (${size}px)`,
      "labelEc": "त्रुटि सुधार",
      "labelFg": "अग्रभूमि",
      "labelBg": "पृष्ठभूमि",
      "quietZone": "शांत क्षेत्र मार्जिन:",
      "modulesLabel": (margin: number) => `${margin} मॉड्यूल`,
      "encodedPayload": "एनकोडेड पेलोड स्ट्रिंग",
      "copyPayload": "पेलोड कॉपी करें",
      "emptyError": "स्कैन किया जा सकने वाला QR कोड बनाने के लिए ऊपर कंटेंट डालें।",
      "encodeError": "QR पेलोड एनकोड नहीं हो सका।",
      "qrAlt": "बनाया गया स्कैन योग्य QR कोड",
      "downloadPng": "PNG डाउनलोड करें",
      "downloadSvg": "SVG डाउनलोड करें",
      "copySvg": "SVG कॉपी करें",
      "sampleText": "UtilityFlow में आपका स्वागत है!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "मानक पोस्ट",
        "profileBio": "प्रोफ़ाइल बायो",
        "caption": "कैप्शन",
        "feedPost": "फ़ीड पोस्ट",
        "videoCaption": "वीडियो कैप्शन",
        "post": "पोस्ट",
        "videoTitle": "वीडियो टाइटल",
        "description": "विवरण"
      },
      "sampleText": "तेज़ शिपिंग छोटे रोज़ के सुधारों से शुरू होती है।\n\nहमारी ब्राउज़र-आधारित क्रिएटर यूटिलिटी https://utilityflow.online/tools/ पर आज़माएँ — बिना साइन-अप के।\n\n#CreatorTools #Workflow",
      "labelInput": "सोशल पोस्ट / बायो मसौदा",
      "copyDraft": "मसौदा कॉपी करें",
      "placeholder": "अपना सोशल कैप्शन, पोस्ट, बायो या YouTube टाइटल लिखें या पेस्ट करें...",
      "charsLabel": "अक्षर:",
      "wordsLabel": "शब्द:",
      "hashtagsLabel": "हैशटैग:",
      "mentionsLabel": "मेंशन:",
      "urlsLabel": "मिले URL:",
      "urlsWeighted": "(X पर 23 अक्षर के बराबर)",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} सीमा से ज़्यादा`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} बचे`,
      "foldLabel": (n: number) => `फ़ोल्ड ~${n} अक्षर`,
      "foldTitle": "फ़ीड ट्रंकेशन / “See More” फ़ोल्ड प्रीव्यू",
      "foldDesc": (limit: number, platform: string, surface: string) => `“See more” दबाने से पहले पाठक क्या देखते हैं, उसका प्रीव्यू (${platform} ${surface} के लिए ${limit} अक्षर)।`,
      "selectAria": "ट्रंकेशन प्रीव्यू प्लेटफ़ॉर्म चुनें",
      "previewEmpty": "प्रीव्यू यहाँ दिखेगा..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "बिना ट्रैकिंग के 84 तेज़ ब्राउज़र यूटिलिटी कैसे बनाईं",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "24K व्यू · 2 दिन पहले",
      "errNotImage": "कृपया PNG, JPG या WebP इमेज फ़ाइल चुनें।",
      "errDecode": "ब्राउज़र में यह इमेज फ़ाइल डिकोड नहीं हो सकी।",
      "previewEyebrow": "1280 × 720 प्रीव्यू",
      "emptyThumb": "फ़ीड पठनीयता जाँचने के लिए अपना थंबनेल अपलोड करें",
      "thumbAlt": "अपलोड किए गए थंबनेल का प्रीव्यू",
      "safeZoneTitle": "टाइमस्टैम्प बैज ओवरलैप क्षेत्र",
      "chooseThumb": "लोकल थंबनेल चुनें (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `बदलें: ${name}`,
      "recommended": "1280×720 (16:9) सुझाया गया, 2 MB से कम · कभी अपलोड नहीं होता",
      "diagTitle": "इमेज स्पेसिफ़िकेशन जाँच",
      "dimLabel": "आयाम",
      "dimHdOk": "(HD ठीक)",
      "dimUnder": "(<1280px)",
      "aspectLabel": "आस्पेक्ट अनुपात",
      "aspectMatch": "16:9 मेल",
      "aspectNo": "16:9 नहीं (क्रॉप/लेटरबॉक्स हो सकता है)",
      "sizeLabel": "फ़ाइल साइज़",
      "sizeOk": "(<2 MB ठीक)",
      "sizeOver": "(>2 MB सीमा)",
      "titleLabel": (len: number) => `वीडियो टाइटल (${len}/100 अक्षर · मोबाइल पर ~60 दिखते हैं)`,
      "channelLabel": "चैनल नाम",
      "durationLabel": "अवधि",
      "darkMode": "डार्क मोड फ़ीड प्रीव्यू",
      "safeZone": "टाइमस्टैम्प कोना क्षेत्र हाइलाइट करें",
      "desktopCard": "डेस्कटॉप होम फ़ीड कार्ड",
      "sidebar": "डेस्कटॉप वॉच साइडबार (कॉम्पैक्ट सुझाया गया)",
      "untitled": "बिना शीर्षक वीडियो"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "परिचय और अवलोकन"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "मुख्य आर्किटेक्चर सेटअप"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "लाइव डेमो और आम गलतियाँ"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "सारांश और अगले कदम"
        }
      ],
      "newChapter": (n: number) => `अध्याय ${n}`,
      "defaultChapterTitle": "अध्याय",
      "warnInvalid": "एक या ज़्यादा टाइमस्टैम्प का फ़ॉर्मैट अमान्य है (MM:SS या HH:MM:SS इस्तेमाल करें)।",
      "warnMin3": "वीडियो चैप्टर चालू करने के लिए YouTube को बढ़ते क्रम में कम से कम 3 टाइमस्टैम्प चाहिए।",
      "warnFirst": "YouTube चैप्टर पहचान सके, इसके लिए पहला अध्याय 00:00 से शुरू होना चाहिए।",
      "warnOrder": "अध्याय कालानुक्रम से बाहर हैं (क्रमानुसार छाँटें पर क्लिक करें)।",
      "warnShort": (title: string) => `अध्याय "${title}" पिछले अध्याय के बाद 10 सेकंड से कम का है (YouTube न्यूनतम 10 सेकंड है)।`,
      "labelUrl": "YouTube वीडियो URL या वीडियो ID (सीधे `?t=` डीप लिंक के लिए)",
      "heading": "वीडियो अध्याय",
      "sortBtn": "कालानुक्रम में छाँटें",
      "addBtn": "अध्याय जोड़ें",
      "tsAria": (n: number) => `अध्याय ${n} का टाइमस्टैम्प`,
      "titleAria": (n: number) => `अध्याय ${n} का टाइटल`,
      "phTitle": "अध्याय टाइटल",
      "removeAria": (n: number) => `अध्याय ${n} हटाएँ`,
      "specTitle": "YouTube चैप्टर स्पेसिफ़िकेशन जाँच:",
      "descBlock": "विवरण अध्याय ब्लॉक",
      "copyChapters": "अध्याय कॉपी करें",
      "emptyChapters": "विवरण ब्लॉक बनाने के लिए ऊपर अध्याय जोड़ें।",
      "shareTitle": "टाइमस्टैम्प वाले शेयर लिंक",
      "videoIdLabel": (id: string) => `(वीडियो ID: ${id})`,
      "noVideoId": "(ऊपर मान्य YouTube URL डालें)",
      "noVideoHint": "हर अध्याय के लिए क्लिक करने योग्य `?t=` जंप लिंक बनाने के लिए मान्य youtube.com या youtu.be URL पेस्ट करें।"
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "कोई फ़ाइल चुनी नहीं गई।",
      "notPdf": (name: string) => `"${name}" PDF फ़ाइल नहीं लगती।`,
      "empty": (name: string) => `"${name}" खाली है या अधूरी है।`,
      "noHeader": (name: string) => `"${name}" में मान्य %PDF हेडर नहीं है और इसे प्रोसेस नहीं किया जा सकता।`,
      "enterRanges": "पेज नंबर या सीमाएँ डालें, जैसे \"1-3, 5\"।",
      "rangeOutside": (token: string, total: number) => `सीमा "${token}" दस्तावेज़ की 1–${total} पेज सीमा से बाहर है।`,
      "rangeReversed": (token: string) => `सीमा "${token}" का शुरुआती पेज अंतिम पेज से बड़ा है।`,
      "pageMissing": (page: number, total: number) => `पेज ${page} मौजूद नहीं है (दस्तावेज़ में ${total} पेज हैं)।`,
      "invalidSyntax": (token: string) => `अमान्य पेज सिंटैक्स "${token}"। "1-3, 5" जैसे नंबर और सीमाएँ इस्तेमाल करें।`,
      "encrypted": "यह PDF एन्क्रिप्टेड है या पासवर्ड से सुरक्षित है। लोकल प्रोसेस करने से पहले इसे अनलॉक करें।",
      "unable": "PDF फ़ाइल प्रोसेस नहीं हो सकी।",
      "allKeywords": ["all", "सभी", "सब"]
    }
  }
};
