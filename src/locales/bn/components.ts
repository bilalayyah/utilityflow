import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the bn locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the bn locale is selected.
 */
export const bnComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "কেস পরিবর্তন করার টেক্সট",
      "placeholder": "টেক্সট লিখুন বা পেস্ট করুন, তারপর নিচের যেকোনো কেস বোতামে ক্লিক করুন...",
      "copyResult": "ফলাফল কপি করুন"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "পরিষ্কার ও সংক্ষিপ্ত টেক্সট লিখুন যা প্রতিটি প্ল্যাটফর্মের অক্ষর-সীমার মধ্যে পড়ে — সার্চ রেজাল্টে যেন অদ্ভুতভাবে কাটা না যায়, সোশ্যাল মিডিয়াতেও নয়।",
      "withSpaces": "স্পেসসহ",
      "withoutSpaces": "স্পেস ছাড়া",
      "words": "শব্দ",
      "letters": "অক্ষর",
      "digits": "সংখ্যা",
      "utf8Bytes": "UTF-8 বাইট",
      "copyText": "টেক্সট কপি করুন",
      "textToMeasure": "অক্ষরের দৈর্ঘ্য মাপার টেক্সট",
      "placeholder": "অক্ষরের সঠিক গণনা, বাইট সাইজ ও প্ল্যাটফর্ম সীমা দেখতে টেক্সট লিখুন বা পেস্ট করুন...",
      "whitespaceChars": "হোয়াইটস্পেস অক্ষর",
      "lines": "লাইন",
      "platformLimitsTitle": "প্ল্যাটফর্ম ও SEO অক্ষর-সীমা",
      "over": "বেশি",
      "left": "বাকি",
      "platformLimits": [
        {
          "name": "SEO মেটা টাইটেল",
          "note": "Google SERP টাইটেলের প্রস্তাবিত দৈর্ঘ্য"
        },
        {
          "name": "SEO মেটা বিবরণ",
          "note": "ডেস্কটপ স্নিপেটের সাধারণ সীমা"
        },
        {
          "name": "SMS সেগমেন্ট",
          "note": "একটি GSM-7 SMS বার্তা"
        },
        {
          "name": "X / Twitter পোস্ট",
          "note": "পোস্টের সাধারণ দৈর্ঘ্য"
        },
        {
          "name": "Instagram ক্যাপশন প্রিভিউ",
          "note": "\"More\"-এর আগে দেখা অংশ"
        },
        {
          "name": "LinkedIn পোস্ট",
          "note": "ফিড আপডেটের সর্বোচ্চ সাধারণ দৈর্ঘ্য"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "খুঁজুন",
      "replaceWith": "দিয়ে বদলান",
      "findPlaceholder": "খোঁজার টেক্সট...",
      "replacePlaceholder": "বদলানোর টেক্সট...",
      "caseSensitive": "কেস-সেনসিটিভ",
      "wholeWordOnly": "শুধু পুরো শব্দ",
      "useRegex": "রেগুলার এক্সপ্রেশন (RegExp) ব্যবহার করুন",
      "regexError": "Regex ত্রুটি:",
      "invalidRegex": "অবৈধ রেগুলার এক্সপ্রেশন।",
      "sourceText": "মূল টেক্সট",
      "updatedOutput": "বদলানো ফলাফল",
      "match": "মিল",
      "matches": "মিল",
      "replaced": "বদলানো হয়েছে",
      "sourcePlaceholder": "খুঁজে বদলানোর জন্য টেক্সট পেস্ট করুন...",
      "outputPlaceholder": "বদলানো টেক্সট এখানে দেখা যাবে...",
      "copyResult": "ফলাফল কপি করুন"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "লাইন প্রিফিক্স",
      "lineSuffix": "লাইন সাফিক্স",
      "startNumber": "শুরুর নম্বর",
      "numberSeparator": "নম্বর সেপারেটর",
      "addLineNumbers": "লাইন নম্বর যোগ করুন",
      "zeroPad": "শূন্য দিয়ে প্যাড করুন (01, 02)",
      "skipEmptyLines": "খালি লাইন বাদ দিন",
      "inputLines": "ইনপুট লাইন",
      "formattedLines": "ফরম্যাট করা লাইন",
      "copyResult": "ফলাফল কপি করুন",
      "inputPlaceholder": "প্রতি লাইনে একটি মান বা লাইন পেস্ট করুন...",
      "outputPlaceholder": "নম্বর দেওয়া বা মোড়ানো লাইন এখানে দেখা যাবে..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "পরিমাণ",
      "unit": "একক",
      "unitLabels": {
        "paragraphs": "অনুচ্ছেদ",
        "sentences": "বাক্য",
        "words": "শব্দ"
      },
      "startClassic": "“Lorem ipsum” দিয়ে শুরু করুন",
      "wrapHtml": "<p> ট্যাগে মোড়ান",
      "words": "শব্দ",
      "characters": "অক্ষর",
      "regenerate": "আবার তৈরি করুন",
      "copyPlaceholder": "প্লেসহোল্ডার টেক্সট কপি করুন",
      "generatedText": "তৈরি করা প্লেসহোল্ডার টেক্সট"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow রিলিজ নোট\n\n**Markdown Previewer**-এ স্বাগতম — লাইভ *HTML* এক্সপোর্টসহ দ্রুত, ব্রাউজারে চলা এডিটর।\n\n## মূল বৈশিষ্ট্য\n\n- হেডিং, লিস্ট ও লিংকের জন্য তাৎক্ষণিক ফরম্যাটিং\n- কোনো রিমোট আপলোড ছাড়াই নিরাপদ HTML এস্কেপিং\n- এক ক্লিকে র HTML কপি ও ডাউনলোড\n\n> নথিগুলো কাজের কাছেই রাখুন এবং প্রকাশের আগে গঠন দেখে নিন।\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n[UtilityFlow](/tools/)-এ আরও জানুন।",
      "renderedPreview": "রেন্ডার করা প্রিভিউ",
      "rawHtml": "র HTML",
      "exportHtml": "HTML এক্সপোর্ট করুন",
      "copyHtml": "HTML কপি করুন",
      "markdownSource": "Markdown সোর্স",
      "livePreview": "লাইভ প্রিভিউ",
      "compiledHtml": "কম্পাইল করা HTML",
      "compiledHtmlAria": "কম্পাইল করা HTML-এর সোর্স",
      "inputPlaceholder": "Markdown লিখুন (# হেডিং, **বোল্ড**, - লিস্ট, [লিংক](https://...))...",
      "emptyPreview": "Markdown টাইপ করলেই প্রিভিউ এখানে দেখা যাবে..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "পরিষ্কার কারিগরি লেখা পাঠকের সময়কে সম্মান করে। জটিল নির্দেশ সহজ রাখতে যেখানে সম্ভব সুনির্দিষ্ট বিশেষ্য ও সক্রিয় ক্রিয়া ব্যবহার করুন।\n\nনেস্টেড উপবাক্যে ভরা লম্বা বাক্য পাঠককে অনুচ্ছেদ আবার পড়তে বাধ্য করে। ঘন ব্যাখ্যাগুলোকে ছোট ধাপে ভেঙে দিলে নথি দ্রুত স্ক্যান করা যায় এবং সহজে প্রয়োগ করা যায়।",
      "level": "স্তর:",
      "textToCheck": "পঠনযোগ্যতা যাচাই করার টেক্সট",
      "placeholder": "Flesch Reading Ease ও গ্রেড-স্তরের স্কোর জানতে আপনার লেখা, প্রবন্ধ বা ল্যান্ডিং পেজের টেক্সট পেস্ট করুন...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "Flesch-Kincaid গ্রেড",
      "usGrade": "মার্কিন স্কুল গ্রেড স্তর",
      "gunningFog": "Gunning Fog Index",
      "yearsEducation": "শিক্ষার বছর",
      "smog": "SMOG Index",
      "polysyllable": "বহু-অক্ষরযুক্ত জটিলতা",
      "structuralBreakdown": "গঠনগত বিবরণ",
      "wordsSentences": "শব্দ / বাক্য",
      "avgSentenceLength": "গড় বাক্য দৈর্ঘ্য",
      "words": "শব্দ",
      "avgSyllablesPerWord": "প্রতি শব্দে গড় অক্ষর",
      "complexWords": "জটিল শব্দ (৩+ অক্ষর)",
      "longWordsDetected": "লম্বা শব্দ পাওয়া গেছে (৩+ অক্ষর)",
      "noLongWords": "এই অংশে ৩+ অক্ষরের শব্দ পাওয়া যায়নি।",
      "emptyState": "পঠনযোগ্যতার সূত্র ও গঠনগত অনুপাত দেখতে উপরে অন্তত একটি বাক্য লিখুন।",
      "levels": [
        {
          "level": "খুব সহজ",
          "audience": "৫ম শ্রেণি (১০–১১ বছর)"
        },
        {
          "level": "সহজ",
          "audience": "৬ষ্ঠ শ্রেণি (১১–১২ বছর)"
        },
        {
          "level": "বেশ সহজ",
          "audience": "৭ম শ্রেণি (১২–১৩ বছর)"
        },
        {
          "level": "সাধারণ",
          "audience": "৮ম–৯ম শ্রেণি (১৩–১৫ বছর)"
        },
        {
          "level": "বেশ কঠিন",
          "audience": "১০ম–১২শ শ্রেণি"
        },
        {
          "level": "কঠিন",
          "audience": "কলেজ স্তর"
        },
        {
          "level": "খুব কঠিন",
          "audience": "কলেজ স্নাতক / বিশেষজ্ঞ স্তর"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "কেস-সেনসিটিভ",
      "trimWhitespace": "হোয়াইটস্পেস সরান",
      "removeEmptyLines": "খালি লাইন সরান",
      "sortAlphabetically": "বর্ণানুক্রমে সাজান",
      "originalLines": "মূল লাইন",
      "lines": "লাইন",
      "uniqueLines": "অনন্য লাইন",
      "unique": "অনন্য",
      "removed": "সরানো হয়েছে",
      "inputPlaceholder": "প্রতি লাইনে একটি আইটেমের তালিকা পেস্ট করুন...",
      "outputPlaceholder": "ডুপ্লিকেট সরানো ফলাফল এখানে দেখা যাবে..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "কেস-সেনসিটিভ",
      "ignoreBlankLines": "খালি লাইন বাদ দিন",
      "removeDuplicates": "ডুপ্লিকেট সরান",
      "inputLines": "ইনপুট লাইন",
      "sortedLines": "সাজানো লাইন",
      "copySorted": "সাজানো কপি করুন",
      "inputPlaceholder": "প্রতি লাইনে একটি আইটেম লিখুন...",
      "outputPlaceholder": "সাজানো ফলাফল এখানে দেখা যাবে...",
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
          "label": "স্বাভাবিক (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "সবচেয়ে ছোট আগে"
        },
        {
          "id": "length-desc",
          "label": "সবচেয়ে বড় আগে"
        },
        {
          "id": "reverse-order",
          "label": "উল্টো ক্রম"
        },
        {
          "id": "shuffle",
          "label": "শাফল করুন"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "হোয়াইটস্পেস বাদ দিন",
      "ignoreCase": "কেস বাদ দিন",
      "originalText": "মূল টেক্সট",
      "modifiedText": "বদলানো টেক্সট",
      "originalPlaceholder": "মূল টেক্সট পেস্ট করুন...",
      "modifiedPlaceholder": "বদলানো টেক্সট পেস্ট করুন...",
      "lineComparison": "লাইন তুলনা",
      "added": "যোগ করা হয়েছে",
      "removed": "সরানো হয়েছে",
      "unchanged": "পরিবর্তন হয়নি",
      "emptyState": "যোগ করা বা সরানো লাইন দেখতে দুটি বাক্সেই টেক্সট লিখুন।"
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "টেক্সটের প্রথম লাইন\nটেক্সটের দ্বিতীয় লাইন\nটেক্সটের তৃতীয় লাইন",
      "originalText": "মূল টেক্সট",
      "reversedOutput": "উল্টানো ফলাফল",
      "inputPlaceholder": "উল্টানোর জন্য টেক্সট বা লাইন লিখুন...",
      "outputPlaceholder": "উল্টানো টেক্সট এখানে দেখা যাবে...",
      "modes": [
        {
          "id": "characters",
          "label": "অক্ষর উল্টান"
        },
        {
          "id": "words",
          "label": "শব্দের ক্রম উল্টান"
        },
        {
          "id": "each-word",
          "label": "প্রতিটি শব্দ উল্টান"
        },
        {
          "id": "lines",
          "label": "লাইনের ক্রম উল্টান"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSON অনলাইনে ফরম্যাট করার ১০টি সেরা উপায়!\nCafé ও Crème: ২০২৬ গাইড\nCloudflare Pages-এ দ্রুত স্ট্যাটিক সাইট কীভাবে বানাবেন",
      "hyphen": "হাইফেন (-)",
      "underscore": "আন্ডারস্কোর (_)",
      "forceLowercase": "সব ছোট অক্ষরে করুন",
      "stripStopWords": "সাধারণ স্টপ ওয়ার্ড সরান",
      "titlesLabel": "টাইটেল বা বাক্যাংশ (ব্যাচ মোডের জন্য প্রতি লাইনে একটি)",
      "inputPlaceholder": "ব্লগ টাইটেল, প্রোডাক্টের নাম বা হেডিংয়ের তালিকা লিখুন...",
      "generatedSlugs": "তৈরি করা URL স্লাগ",
      "copySlugs": "স্লাগ কপি করুন",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   প্রথম   লাইনে   অনেক   বেশি   স্পেস আছে।   \n\n   দ্বিতীয় লাইনে   ট্যাব\tও   ফাঁক আছে।\n\n\nতৃতীয়   লাইন এখানে।   ",
      "collapseSpaces": "একাধিক স্পেস একটিতে করুন",
      "trimEdges": "লাইনের কিনারা ট্রিম করুন",
      "tabsToSpaces": "ট্যাব স্পেসে বদলান",
      "lineBreaks": "লাইন ব্রেক:",
      "keepBreaks": "লাইন ব্রেক রাখুন",
      "removeBlankLines": "খালি লাইন সরান",
      "replaceWithSpaces": "স্পেস দিয়ে বদলান",
      "removeAllBreaks": "সব ব্রেক সরান",
      "inputText": "ইনপুট টেক্সট",
      "chars": "অক্ষর",
      "cleanedText": "পরিষ্কার করা টেক্সট",
      "removed": "সরানো হয়েছে",
      "inputPlaceholder": "বেশি স্পেস, ট্যাব বা খালি লাইনসহ এলোমেলো টেক্সট পেস্ট করুন...",
      "outputPlaceholder": "পরিষ্কার করা ফলাফল নিজে থেকেই দেখা যাবে..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow আপনার ব্রাউজারেই টেক্সটের প্রতিটি গণনা সরাসরি করে। আপনি ব্লগ লেখা লিখছেন, প্রোডাক্ট ঘোষণা সংক্ষিপ্ত করছেন, নাকি কঠোর শব্দ-সীমার বিপরীতে একাডেমিক প্রবন্ধ যাচাই করছেন — তাৎক্ষণিক গণনা আপনার বার্তা পরিষ্কার রাখা সহজ করে দেয়।\n\nছোট বাক্যে স্ক্যান করা সহজ হয়। বাক্যের দৈর্ঘ্য বদলাতে থাকলে লম্বা গাইড ডেস্কটপ ও মোবাইল দুটোতেই পড়তে আকর্ষণীয় থাকে।",
      "words": "শব্দ",
      "characters": "অক্ষর",
      "noSpaces": "স্পেস ছাড়া",
      "sentences": "বাক্য",
      "paragraphs": "অনুচ্ছেদ",
      "readingTime": "পড়ার সময়",
      "downloadTxt": ".txt ডাউনলোড করুন",
      "copyText": "টেক্সট কপি করুন",
      "textToCount": "গোনার টেক্সট",
      "placeholder": "শব্দ, অক্ষর, বাক্য ও পড়ার সময় গুনতে টেক্সট পেস্ট করুন বা লিখুন...",
      "deliveryTimingLines": "বলার সময় ও লাইন",
      "speakingTime": "বলার সময় (১৩০ শব্দ/মিনিট)",
      "totalLines": "মোট লাইন",
      "avgWordLength": "গড় শব্দ দৈর্ঘ্য",
      "chars": "অক্ষর",
      "mostFrequentWords": "সবচেয়ে বেশি আসা শব্দ",
      "emptyKeywords": "সবচেয়ে বেশি পুনরাবৃত্ত শব্দ দেখতে উপরে টেক্সট লিখুন।"
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "কারিগরি SEO অডিট ক্রলযোগ্যতা, ইন্টারনাল লিংকিং ও পেজের গতি যাচাই করে। দ্রুত পেজ ব্যবহারকারীর সম্পৃক্ততা ও মোবাইল সার্চে পেজ স্পিড সিগন্যাল ভালো করে। ইন্টারনাল লিংকিং সংযুক্ত গাইডগুলোকে জোড়ে এবং কারিগরি SEO কাঠামো মজবুত করে।",
      "ngramLabels": {
        "1": "১ শব্দ",
        "2": "২ শব্দের বাক্যাংশ",
        "3": "৩ শব্দের বাক্যাংশ"
      },
      "excludeStopWords": "সাধারণ স্টপ ওয়ার্ড বাদ দিন",
      "minLength": "সর্বনিম্ন দৈর্ঘ্য:",
      "textForAnalysis": "ফ্রিকোয়েন্সি বিশ্লেষণের টেক্সট",
      "placeholder": "পুনরাবৃত্ত শব্দ ও কীওয়ার্ড ঘনত্ব গুনতে লেখা, প্রোডাক্ট বিবরণ বা নোট পেস্ট করুন...",
      "totalWords": "মোট শব্দ:",
      "uniqueTerms": "অনন্য শব্দ:",
      "exportCsv": "CSV এক্সপোর্ট করুন",
      "copyCsv": "CSV কপি করুন",
      "rank": "#",
      "termPhrase": "শব্দ / বাক্যাংশ",
      "count": "গণনা",
      "density": "ঘনত্ব",
      "emptyState": "শব্দ গণনা ও কীওয়ার্ড ঘনত্বের শতাংশ দেখতে উপরে টেক্সট লিখুন।"
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "অনুগ্রহ করে বৈধ ক্যালেন্ডার তারিখ দিন।",
      "errorDobAfterTarget": "জন্ম তারিখ লক্ষ্য তারিখের পরে হতে পারে না।",
      "dobLabel": "জন্ম তারিখ",
      "targetLabel": "যে তারিখে বয়স",
      "exactAge": "সঠিক বয়স",
      "yearsWord": "বছর",
      "monthsWord": "মাস",
      "daysWord": "দিন",
      "nextBirthday": "পরের জন্মদিন",
      "turning": "বয়স হবে",
      "inWord": "পর",
      "totalMonths": "মোট মাস",
      "totalWeeks": "মোট সপ্তাহ",
      "totalDays": "মোট দিন",
      "totalHours": "মোট ঘণ্টা (প্রায়)",
      "monthsAbbr": "মাস",
      "weeksAbbr": "সপ্তাহ",
      "daysAbbr": "দিন",
      "hoursAbbr": "ঘণ্টা"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "কম ওজন",
      "normalWeight": "স্বাভাবিক ওজন",
      "overweight": "বেশি ওজন",
      "obesity": "স্থূলতা",
      "errorHeightMetric": "উচ্চতা ৫০ cm থেকে ২৮০ cm-এর মধ্যে দিন।",
      "errorWeightMetric": "ওজন ১৫ kg থেকে ৫০০ kg-এর মধ্যে দিন।",
      "errorHeightImperial": "বৈধ উচ্চতা দিন — ২ ft থেকে ৯ ft-এর মধ্যে।",
      "errorWeightImperial": "ওজন ৩০ lbs থেকে ১১০০ lbs-এর মধ্যে দিন।",
      "metricTab": "মেট্রিক (cm / kg)",
      "imperialTab": "ইম্পেরিয়াল (ft, in / lbs)",
      "heightCmLabel": "উচ্চতা (cm)",
      "weightKgLabel": "ওজন (kg)",
      "heightFtLabel": "উচ্চতা (ft)",
      "heightInLabel": "উচ্চতা (in)",
      "weightLbsLabel": "ওজন (lbs)",
      "bmiLabel": "বডি মাস ইনডেক্স (BMI)",
      "whoCategory": "WHO বিভাগ",
      "healthyRange": "সুস্থ BMI ওজনের সীমা (১৮.৫–২৪.৯)",
      "disclaimer": "BMI একটি সাধারণ যাচাই অনুপাত — এটি পেশির ওজন ও শরীরের চর্বি আলাদা করে না।"
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "বয়স ১৫ থেকে ১০০ বছরের মধ্যে দিন।",
      "errorHeightMetric": "উচ্চতা ১০০ cm থেকে ২৫০ cm-এর মধ্যে দিন।",
      "errorWeightMetric": "ওজন ৩০ kg থেকে ৩৫০ kg-এর মধ্যে দিন।",
      "errorHeightImperial": "উচ্চতা ৩ ft ৪ in থেকে ৮ ft ২ in-এর মধ্যে দিন।",
      "errorWeightImperial": "ওজন ৬৬ lbs থেকে ৭৭০ lbs-এর মধ্যে দিন।",
      "metricTab": "মেট্রিক (cm / kg)",
      "imperialTab": "ইম্পেরিয়াল (ft, in / lbs)",
      "maleTab": "পুরুষ",
      "femaleTab": "মহিলা",
      "ageLabel": "বয়স (বছর)",
      "heightCmLabel": "উচ্চতা (cm)",
      "weightKgLabel": "ওজন (kg)",
      "heightFtLabel": "উচ্চতা (ft)",
      "heightInLabel": "উচ্চতা (in)",
      "weightLbsLabel": "ওজন (lbs)",
      "activityLabel": "কার্যকলাপের স্তর",
      "activitySedentary": "বসে থাকা (১.২×)",
      "activitySedentaryDetail": "ডেস্ক জব, খুব কম বা কোনো ব্যায়াম নেই",
      "activityLight": "হালকা সক্রিয় (১.৩৭৫×)",
      "activityLightDetail": "হালকা ব্যায়াম, সপ্তাহে ১–৩ দিন",
      "activityModerate": "মাঝারি সক্রিয় (১.৫৫×)",
      "activityModerateDetail": "মাঝারি ব্যায়াম, সপ্তাহে ৩–৫ দিন",
      "activityVery": "খুব সক্রিয় (১.৭২৫×)",
      "activityVeryDetail": "কঠিন ব্যায়াম, সপ্তাহে ৬–৭ দিন",
      "activityExtra": "অত্যন্ত সক্রিয় (১.৯×)",
      "activityExtraDetail": "শারীরিক কাজ বা দিনে দুবার ট্রেনিং",
      "maintenance": "রক্ষণাবেক্ষণ ক্যালোরি (TDEE)",
      "mildLoss": "হালকা ওজন কমানো (-০.২৫ kg/সপ্তাহ)",
      "mildLossNote": "~২৫০ kcal প্রতিদিন কম",
      "weightLoss": "ওজন কমানো (-০.৫ kg/সপ্তাহ)",
      "weightLossNote": "~৫০০ kcal প্রতিদিন কম",
      "leanGain": "লিন ওজন বাড়ানো",
      "leanGainNote": "+২৫০ kcal প্রতিদিন বেশি",
      "macroHeading": "রক্ষণাবেক্ষণ ম্যাক্রো বিভাজন (রেফারেন্স) (৩০% প্রোটিন · ৪০% কার্বস · ৩০% ফ্যাট)",
      "protein": "প্রোটিন",
      "carbs": "কার্বোহাইড্রেট",
      "fat": "খাদ্য চর্বি",
      "gramsPerDay": "g/দিন",
      "disclaimer": "Mifflin-St Jeor BMR সমীকরণ দিয়ে হিসাব করা হয়েছে। প্রত্যেকের শক্তির চাহিদা শরীরের গঠন ও স্বাস্থ্যের অবস্থা অনুযায়ী আলাদা হয়; কঠোর ডায়েট শুরুর আগে যোগ্য স্বাস্থ্য বিশেষজ্ঞের পরামর্শ নিন।"
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "শুরুর জমা ঋণাত্মক হতে পারে না।",
      "errorMonthly": "মাসিক অবদান ঋণাত্মক হতে পারে না।",
      "errorRate": "বার্ষিক রিটার্নের হার ০% থেকে ১০০%-এর মধ্যে হতে হবে।",
      "errorYears": "সময়কাল ১ থেকে ১০০ বছরের মধ্যে হতে হবে।",
      "initialLabel": "শুরুর মূলধন ($)",
      "monthlyLabel": "মাসিক জমা ($)",
      "rateLabel": "বার্ষিক রিটার্ন (%)",
      "yearsLabel": "বছর",
      "compoundingLabel": "চক্রবৃদ্ধি",
      "dailyOption": "দৈনিক (৩৬৫/বছর)",
      "monthlyOption": "মাসিক (১২/বছর)",
      "quarterlyOption": "ত্রৈমাসিক (৪/বছর)",
      "annualOption": "বার্ষিক (১/বছর)",
      "futureBalance": "ভবিষ্যৎ ব্যালেন্স",
      "totalContributed": "মোট মূলধন + জমা",
      "totalInterest": "মোট চক্রবৃদ্ধি সুদ",
      "yearHeader": "বছর",
      "totalContributedHeader": "মোট জমা",
      "cumulativeInterestHeader": "সঞ্চিত সুদ",
      "endingBalanceHeader": "শেষ ব্যালেন্স",
      "yearPrefix": "বছর"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "অনুগ্রহ করে বৈধ শুরুর ও শেষের ক্যালেন্ডার তারিখ বেছে নিন।",
      "errorInvalidBase": "অনুগ্রহ করে বৈধ শুরুর ক্যালেন্ডার তারিখ দিন।",
      "errorNonNegative": "বছর, মাস ও দিনের জন্য শূন্য বা তার বেশি পূর্ণসংখ্যা দিন।",
      "differenceTab": "তারিখের মধ্যে পার্থক্য",
      "addSubtractTab": "সময় যোগ / বিয়োগ করুন",
      "startLabel": "শুরুর তারিখ",
      "endLabel": "শেষের তারিখ",
      "swapTitle": "তারিখ বদলান",
      "swapAria": "শুরুর ও শেষের তারিখ বদলান",
      "includeEnd": "গণনায় শেষের তারিখও অন্তর্ভুক্ত করুন (+১ ক্যালেন্ডার দিন)",
      "calendarDuration": "ক্যালেন্ডার সময়কাল",
      "reversedRange": "(উল্টো সীমা)",
      "totalSpan": "মোট সময়কাল:",
      "calendarDays": "ক্যালেন্ডার দিন",
      "weeksDays": "সপ্তাহ ও দিন",
      "weekdays": "কর্মদিবস (সোম–শুক্র)",
      "weekendDays": "সপ্তাহান্তের দিন (শনি–রবি)",
      "totalHours": "মোট ঘণ্টা",
      "yearsWord": "বছর",
      "monthsWord": "মাস",
      "daysWord": "দিন",
      "weeksAbbr": "সপ্তাহ",
      "daysAbbr": "দিন",
      "hoursAbbr": "ঘণ্টা",
      "referenceLabel": "রেফারেন্স তারিখ",
      "operationLabel": "ক্রিয়া",
      "addOption": "যোগ করুন (+)",
      "subtractOption": "বিয়োগ করুন (-)",
      "yearsLabel": "বছর",
      "monthsLabel": "মাস",
      "daysLabel": "দিন",
      "resultingDate": "ফলাফলের ক্যালেন্ডার তারিখ",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "মূল দাম ঋণাত্মক হতে পারে না।",
      "errorDiscount": "ছাড় ০% থেকে ১০০%-এর মধ্যে হতে হবে।",
      "errorTax": "বিক্রয় কর ০% থেকে ১০০%-এর মধ্যে হতে হবে।",
      "errorCost": "খরচ ঋণাত্মক হতে পারে না।",
      "errorSelling": "বিক্রয় মূল্য ০-এর বেশি হতে হবে।",
      "discountTab": "বিক্রয় ছাড়",
      "marginTab": "লাভ মার্জিন ও মার্কআপ",
      "originalPriceLabel": "মূল দাম ($)",
      "discountLabel": "ছাড় (%)",
      "salesTaxLabel": "বিক্রয় কর (%)",
      "costLabel": "একক খরচ ($)",
      "sellingLabel": "বিক্রয় মূল্য ($)",
      "finalPrice": "চূড়ান্ত দাম",
      "beforeTax": "করের আগে:",
      "youSave": "আপনার সাশ্রয়",
      "taxAdded": "যোগ করা কর",
      "grossProfit": "মোট লাভ",
      "profitMargin": "লাভ মার্জিন",
      "profitDivSelling": "(লাভ ÷ বিক্রয় মূল্য)",
      "markup": "মার্কআপ",
      "profitDivCost": "(লাভ ÷ খরচ)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "০-এর বেশি লোনের মূলধন দিন।",
      "errorRate": "বার্ষিক সুদের হার ০% থেকে ১০০%-এর মধ্যে দিন।",
      "errorDuration": "লোনের মেয়াদ ১ থেকে ৬০০ মাসের মধ্যে হতে হবে।",
      "principalLabel": "লোনের মূলধন ($)",
      "rateLabel": "বার্ষিক সুদের হার (% APR)",
      "termLabel": "লোনের মেয়াদ",
      "termUnitAria": "লোনের মেয়াদের একক",
      "yearsOption": "বছর",
      "monthsOption": "মাস",
      "monthlyPayment": "মাসিক কিস্তি (EMI)",
      "forPrefix": "এর জন্য",
      "monthlyPayments": "মাসিক কিস্তি",
      "totalInterest": "মোট সুদ",
      "ofTotalCost": "মোট খরচের",
      "totalRepayment": "মোট পরিশোধ",
      "principalWord": "মূলধন",
      "principalLabelShort": "মূলধন",
      "interestLabelShort": "সুদ",
      "showSchedule": "পরিশোধের সময়সূচি দেখান",
      "hideSchedule": "পরিশোধের সময়সূচি লুকান",
      "monthHeader": "মাস",
      "paymentHeader": "কিস্তি",
      "principalHeader": "মূলধন",
      "interestHeader": "সুদ",
      "balanceHeader": "অবশিষ্ট"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "বাড়ির দাম ০-এর বেশি হতে হবে।",
      "errorDownPayment": "ডাউন পেমেন্টের শতাংশ ০% থেকে ৯৯.৯%-এর মধ্যে হতে হবে।",
      "errorRate": "সুদের হার ০% থেকে ৫০%-এর মধ্যে হতে হবে।",
      "errorTerm": "লোনের মেয়াদ ১ থেকে ৫০ বছরের মধ্যে হতে হবে।",
      "homePriceLabel": "বাড়ির দাম ($)",
      "downPaymentLabel": "ডাউন পেমেন্ট (%)",
      "rateLabel": "সুদের হার (% APR)",
      "termLabel": "লোনের মেয়াদ (বছর)",
      "yearsWord": "বছর",
      "taxLabel": "সম্পত্তি কর ($ / বছর)",
      "insuranceLabel": "বাড়ির বিমা ($ / বছর)",
      "hoaLabel": "HOA ফি ($ / মাস)",
      "estimatedMonthly": "আনুমানিক মাসিক পেমেন্ট",
      "loanAmount": "লোনের পরিমাণ",
      "downPayment": "ডাউন পেমেন্ট",
      "lifetimeInterest": "পুরো সময়ের সুদ",
      "breakdownHeading": "মাসিক পেমেন্টের বিবরণ",
      "principalInterest": "মূলধন ও সুদ (P&I)",
      "propertyTaxes": "সম্পত্তি কর",
      "homeownersInsurance": "বাড়ির মালিকের বিমা",
      "hoaDues": "HOA ফি",
      "pmiLabel": "আনুমানিক PMI (০.৫%/বছর যখন ডাউন পেমেন্ট ২০%-এর কম হয়)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "বৈধ সংখ্যা দিন।",
      "errorTotalZero": "মোট (Y) ০ হতে পারে না।",
      "errorStartZero": "শুরুর মান ০ হতে পারে না।",
      "heading1": "১. কোনো সংখ্যার শতাংশ",
      "heading2": "২. পুরোর তুলনায় অংশের শতাংশ",
      "heading3": "৩. শতাংশ বৃদ্ধি বা হ্রাস",
      "whatIs": "কত",
      "percentOf": "% হলো",
      "isWhatPercentOf": "এর কত %",
      "fromWord": "থেকে",
      "toWord": "পর্যন্ত",
      "result": "ফলাফল:",
      "change": "পরিবর্তন:",
      "formula": "সূত্র",
      "difference": "পার্থক্য",
      "ariaPctX": "শতাংশ X",
      "ariaBaseY": "ভিত্তি সংখ্যা Y",
      "ariaPartX": "অংশের মান X",
      "ariaWholeY": "পুরোর মান Y",
      "ariaInitialA": "শুরুর মান A",
      "ariaFinalB": "চূড়ান্ত মান B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "বেতনের পরিমাণ ঋণাত্মক হতে পারে না।",
      "errorHours": "সপ্তাহের ঘণ্টা ১ থেকে ১৬৮-এর মধ্যে হতে হবে।",
      "errorWeeks": "বছরের সপ্তাহ ১ থেকে ৫২-এর মধ্যে হতে হবে।",
      "errorTax": "কার্যকর করের হার ০% থেকে ৯৯%-এর মধ্যে হতে হবে।",
      "amountLabel": "বেতনের পরিমাণ ($)",
      "frequencyLabel": "ফ্রিকোয়েন্সি",
      "hourlyOption": "প্রতি ঘণ্টা",
      "dailyOption": "দৈনিক",
      "weeklyOption": "সাপ্তাহিক",
      "biweeklyOption": "দ্বি-সাপ্তাহিক",
      "monthlyOption": "মাসিক",
      "annualOption": "বার্ষিক",
      "hoursLabel": "ঘণ্টা / সপ্তাহ",
      "weeksLabel": "সপ্তাহ / বছর",
      "taxLabel": "আনুমানিক করের হার (%)",
      "rowHourly": "প্রতি ঘণ্টা",
      "rowDaily": "দৈনিক (৫ দিনের সপ্তাহ)",
      "rowWeekly": "সাপ্তাহিক",
      "rowBiweekly": "দ্বি-সাপ্তাহিক",
      "rowMonthly": "মাসিক",
      "rowAnnual": "বার্ষিক",
      "payPeriodHeader": "বেতনকাল",
      "grossPayHeader": "মোট বেতন",
      "estNetPay": "আনুমানিক নিট বেতন",
      "taxWord": "কর"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "বৈধ শুরুর ও শেষের সময় দিন।",
      "errorBreakRange": "ব্রেক কাটা ০ থেকে ১,৪৪০ মিনিটের মধ্যে দিন।",
      "errorEndEarlier": "শেষের সময় শুরুর সময়ের আগে। রাত পেরিয়ে গেলে ওভারনাইট রোলওভার চালু করুন।",
      "errorBreakExceeds": "ব্রেক কাটা মোট অতিবাহিত সময়ের বেশি।",
      "errorSumFields": "সময়কালের সব ফিল্ডে শূন্য বা তার বেশি সংখ্যা হতে হবে।",
      "betweenTab": "দুই ঘড়ির মধ্যে অতিবাহিত সময়",
      "sumTab": "টাইমশিট সময়কাল যোগ করুন",
      "startLabel": "শুরুর সময়",
      "endLabel": "শেষের সময়",
      "breakLabel": "বেতনহীন ব্রেক (মিনিট)",
      "overnightLabel": "শেষের সময় শুরুর আগে হলে সেটিকে পরের দিনের ধরে নিন (রাতের শিফট)",
      "netDuration": "নিট সময়কাল",
      "overnightTag": "(সারারাত)",
      "decimalHours": "দশমিক ঘণ্টা",
      "totalMinutes": "মোট মিনিট",
      "totalSeconds": "মোট সেকেন্ড",
      "hoursAbbr": "ঘণ্টা",
      "minutesAbbr": "মিনিট",
      "secondsAbbr": "সেকেন্ড",
      "labelHeader": "লেবেল",
      "hoursHeader": "ঘণ্টা",
      "minutesHeader": "মিনিট",
      "secondsHeader": "সেকেন্ড",
      "removeButton": "সরান",
      "removeAria": "সরান",
      "addRowButton": "সময়কালের সারি যোগ করুন",
      "morningSession": "সকালের সেশন",
      "afternoonSession": "দুপুরের সেশন",
      "segmentPrefix": "খণ্ড",
      "combinedTime": "সম্মিলিত সময় (HH:MM:SS)",
      "dayEquivalent": "২৪ ঘণ্টার দিন",
      "daysAbbr": "দিন"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "বিলের পরিমাণ ঋণাত্মক হতে পারে না।",
      "errorTip": "টিপের শতাংশ ০% থেকে ২০০%-এর মধ্যে হতে হবে।",
      "errorPeople": "লোকের সংখ্যা ১ থেকে ১০০-এর মধ্যে হতে হবে।",
      "billLabel": "বিলের মোট ($)",
      "tipLabel": "টিপের শতাংশ (%)",
      "peopleLabel": "ভাগ করুন (লোক)",
      "presetsLabel": "টিপ প্রিসেট:",
      "roundingLabel": "রাউন্ডিং:",
      "exactOption": "সঠিক সেন্ট",
      "totalUpOption": "মোট উপরে রাউন্ড করুন ($)",
      "perPersonUpOption": "প্রতি ব্যক্তি উপরে রাউন্ড করুন ($)",
      "perPersonTotal": "প্রতি ব্যক্তির মোট",
      "includes": "অন্তর্ভুক্ত",
      "tipEach": "প্রতি ব্যক্তির টিপ",
      "totalTip": "মোট টিপ",
      "effectiveRate": "কার্যকর হার:",
      "totalBill": "মোট বিল"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "বদলানোর জন্য বৈধ সংখ্যা দিন।",
      "errorAbsoluteZero": "তাপমাত্রা পরম শূন্যের নিচে হতে পারে না (-২৭৩.১৫ °C / ০ K)।",
      "categoryNames": {
        "length": "দৈর্ঘ্য",
        "weight": "ওজন ও ভর",
        "temperature": "তাপমাত্রা",
        "area": "ক্ষেত্রফল",
        "volume": "আয়তন",
        "speed": "গতি",
        "storage": "ডিজিটাল স্টোরেজ"
      },
      "unitLabels": {
        "mm": "মিলিমিটার",
        "cm": "সেন্টিমিটার",
        "m": "মিটার",
        "km": "কিলোমিটার",
        "in": "ইঞ্চি",
        "ft": "ফুট",
        "yd": "গজ",
        "mi": "মাইল",
        "mg": "মিলিগ্রাম",
        "g": "গ্রাম",
        "kg": "কিলোগ্রাম",
        "t": "মেট্রিক টন",
        "oz": "আউন্স",
        "lb": "পাউন্ড",
        "st": "স্টোন",
        "C": "সেলসিয়াস",
        "F": "ফারেনহাইট",
        "K": "কেলভিন",
        "cm2": "বর্গ সেন্টিমিটার",
        "m2": "বর্গ মিটার",
        "ha": "হেক্টর",
        "km2": "বর্গ কিলোমিটার",
        "ft2": "বর্গ ফুট",
        "yd2": "বর্গ গজ",
        "acre": "একর",
        "mi2": "বর্গ মাইল",
        "mL": "মিলিলিটার",
        "L": "লিটার",
        "m3": "ঘন মিটার",
        "floz": "ফ্লুইড আউন্স (US)",
        "cup": "কাপ (US)",
        "pt": "পিন্ট (US)",
        "qt": "কোয়ার্ট (US)",
        "gal": "গ্যালন (US)",
        "ms": "মিটার / সেকেন্ড",
        "kmh": "কিলোমিটার / ঘণ্টা",
        "mph": "মাইল / ঘণ্টা",
        "knot": "নট",
        "fts": "ফুট / সেকেন্ড",
        "B": "বাইট",
        "KB": "কিলোবাইট (10³)",
        "MB": "মেগাবাইট (10⁶)",
        "GB": "গিগাবাইট (10⁹)",
        "TB": "টেরাবাইট (10¹²)",
        "KiB": "কিবিবাইট (2¹⁰)",
        "MiB": "মেবিবাইট (2²⁰)",
        "GiB": "গিবিবাইট (2³⁰)"
      },
      "valueLabel": "মান",
      "fromLabel": "কোন একক থেকে",
      "toLabel": "কোন এককে",
      "swapAria": "একক বদলান",
      "swapTitle": "একক বদলান",
      "toWord": "তে",
      "copyResult": "ফলাফল কপি করুন",
      "unitHeader": "একক",
      "symbolHeader": "প্রতীক",
      "equivalentHeader": "সমতুল্য মান"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "পরিমাণ ঋণাত্মক হতে পারে না।",
      "errorRate": "করের হার ০% থেকে ১০০%-এর মধ্যে হতে হবে।",
      "addTab": "কর যোগ করুন (নেট → গ্রস)",
      "removeTab": "কর বাদ দিন (গ্রস → নেট)",
      "commonRates": "সাধারণ হার:",
      "netAmountLabel": "নেট পরিমাণ (কর ছাড়া) ($)",
      "grossAmountLabel": "গ্রস পরিমাণ (করসহ) ($)",
      "rateLabel": "VAT / বিক্রয় করের হার (%)",
      "netPrice": "নেট দাম (কর ছাড়া)",
      "taxAmount": "করের পরিমাণ",
      "grossPrice": "গ্রস দাম (করসহ)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64-এ এনকোড করুন",
      "decodeTab": "Base64 ডিকোড করুন",
      "urlSafe": "URL-নিরাপদ (- ও _)",
      "omitPadding": "শেষের = প্যাডিং বাদ দিন",
      "swap": "বদলান",
      "decodeError": "ডিকোড ত্রুটি:",
      "inputLabelEncode": "সাধারণ টেক্সট (UTF-8)",
      "inputLabelDecode": "Base64 স্ট্রিং",
      "inputPlaceholderEncode": "এনকোড করার জন্য টেক্সট বা JSON লিখুন...",
      "inputPlaceholderDecode": "স্ট্যান্ডার্ড বা URL-নিরাপদ Base64 স্ট্রিং পেস্ট করুন...",
      "outputLabelEncode": "Base64 আউটপুট",
      "outputLabelDecode": "ডিকোড করা টেক্সট",
      "outputPlaceholder": "বদলানো আউটপুট এখানে দেখা যাবে...",
      "copyOutput": "আউটপুট কপি করুন",
      "invalidLength": "Base64 স্ট্রিংয়ের দৈর্ঘ্য অবৈধ।",
      "invalidInput": "অবৈধ Base64 ইনপুট বা ভুল UTF-8 বাইট ক্রম।"
    },
    "tables": {
      "samplePlain": "UtilityFlow: UTF-8 নিরাপদ Base64 এনকোডিং ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "রং বেছে নিন",
      "colorPickerAria": "কালার পিকার",
      "copyHex": "HEX কপি করুন",
      "copyRgb": "RGB কপি করুন",
      "copyHsl": "HSL কপি করুন",
      "contrastTitle": "WCAG 2.1 কনট্রাস্ট অনুপাত যাচাই",
      "contrastDesc": "সামনের রং ({color}) যেকোনো পেছনের রঙে দেখুন।",
      "backgroundLabel": "পেছনের রং:",
      "bgAria": "কনট্রাস্টের জন্য পেছনের রং",
      "sampleTitle": "বডি ও UI টেক্সটের নমুনা",
      "sampleSentence": "দ্রুত বাদামি শিয়াল অলস কুকুরের উপর দিয়ে লাফ দিল।",
      "aaNormal": "AA সাধারণ টেক্সট (≥ ৪.৫:১)",
      "aaaNormal": "AAA সাধারণ টেক্সট (≥ ৭.০:১)",
      "aaLarge": "AA বড় টেক্সট (≥ ৩.০:১)",
      "pass": "পাস",
      "fail": "ফেল"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "৫-ফিল্ড Cron এক্সপ্রেশন",
      "copyCron": "cron কপি করুন",
      "humanTitle": "সহজ ভাষায় সময়সূচি",
      "breakdownTitle": "ফিল্ড বিবরণ",
      "fieldMinute": "মিনিট (০–৫৯)",
      "fieldHour": "ঘণ্টা (০–২৩)",
      "fieldDom": "মাসের দিন (১–৩১)",
      "fieldMonth": "মাস (১–১২)",
      "fieldDow": "সপ্তাহের দিন (০–৬)",
      "nextRuns": "পরের {count}টি নির্ধারিত রান (স্থানীয় সময়)",
      "noRuns": "পরের ৩৬৬ দিনে কোনো মিলে যাওয়া রান পাওয়া যায়নি।",
      "fieldsError": "স্ট্যান্ডার্ড cron-এ ৫টি ফিল্ড লাগে (মিনিট ঘণ্টা মাসের-দিন মাস সপ্তাহের-দিন)। পাওয়া গেছে {count}টি।",
      "emptySegment": "\"{token}\"-এ খালি খণ্ড",
      "invalidStep": "\"{token}\"-এ অবৈধ ধাপ \"{step}\"",
      "outOfRange": "\"{token}\"-এ মান সীমার বাইরে ({min}–{max})",
      "invalidCron": "অবৈধ cron এক্সপ্রেশন।",
      "everyMinutes": "প্রতি {n} মিনিট",
      "minuteZeroHour": "প্রতি ঘণ্টার ০ মিনিটে",
      "atTime": "{time}-এ",
      "atFields": "{a}, {b}-এ",
      "dayEveryDay": "প্রতিদিন",
      "dayWeekdays": "কর্মদিবসে (সোমবার–শুক্রবার)",
      "dayOfMonth": "মাসের {day} তারিখে",
      "dayDow": "{dow}-এ",
      "dayBoth": "{day} তারিখে বা {dow}-এ",
      "monthIn": " {months}-এ"
    },
    "tables": {
      "presets": [
        {
          "label": "প্রতি ৫ মিনিট",
          "expr": "*/5 * * * *"
        },
        {
          "label": "প্রতি ঘণ্টা",
          "expr": "0 * * * *"
        },
        {
          "label": "প্রতিদিন মধ্যরাতে",
          "expr": "0 0 * * *"
        },
        {
          "label": "কর্মদিবসে সকাল ৯:০০",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "মাসের ১ তারিখে ০৮:৩০",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "রবিবার",
        "সোমবার",
        "মঙ্গলবার",
        "বুধবার",
        "বৃহস্পতিবার",
        "শুক্রবার",
        "শনিবার"
      ],
      "monthLabels": [
        "",
        "জানুয়ারি",
        "ফেব্রুয়ারি",
        "মার্চ",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "আগস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর"
      ],
      "unitWords": {
        "minute": "মিনিট",
        "hour": "ঘণ্টা",
        "day": "দিন",
        "month": "মাস",
        "weekday": "সপ্তাহের দিন"
      },
      "unitPlurals": {
        "minute": "মিনিট",
        "hour": "ঘণ্টা",
        "day": "দিন",
        "month": "মাস",
        "weekday": "সপ্তাহের দিন"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS মিনিফাই করুন",
      "beautifyTab": "CSS সুন্দর করুন",
      "inputLabel": "ইনপুট CSS",
      "bytesLabel": "বাইট",
      "inputPlaceholder": "CSS নিয়ম বা স্টাইলশিট এখানে পেস্ট করুন...",
      "outputLabelMinify": "মিনিফাই করা CSS",
      "outputLabelBeautify": "সুন্দর করা CSS",
      "outputPlaceholder": "প্রসেস করা CSS এখানে দেখা যাবে...",
      "copyCss": "CSS কপি করুন"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "টেক্সট ইনপুট",
      "fileTab": "লোকাল ফাইল চেকসাম",
      "uppercaseHex": "বড় অক্ষরের হেক্স",
      "inputLabel": "ইনপুট স্ট্রিং (UTF-8)",
      "inputPlaceholder": "SHA-1, SHA-256, SHA-384 ও SHA-512 হ্যাশ পেতে টেক্সট লিখুন...",
      "chooseFileLabel": "হ্যাশ করার জন্য লোকাল ফাইল বেছে নিন",
      "fileNoteDefault": "ফাইল শুধু ব্রাউজারের মেমরিতেই পড়া হয়, কখনো আপলোড হয় না।",
      "bytesLabel": "বাইট",
      "cryptoUnavailable": "Web Crypto হ্যাশিং উপলভ্য নয়।",
      "sampleText": "নমস্কার, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "এনটিটি এনকোড করুন",
      "decodeTab": "এনটিটি ডিকোড করুন",
      "encodeNonAscii": "অ-ASCII চিহ্ন এনকোড করুন (&#...;)",
      "swap": "বদলান",
      "inputLabelEncode": "র HTML / টেক্সট",
      "inputLabelDecode": "HTML-এনকোডেড স্ট্রিং",
      "inputPlaceholderEncode": "<p>HTML ট্যাগ বা বিশেষ অক্ষর লিখুন...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;এনকোডেড এনটিটি পেস্ট করুন...&lt;/p&gt;",
      "outputLabelEncode": "এনকোডেড এনটিটি",
      "outputLabelDecode": "ডিকোড করা টেক্সট",
      "outputPlaceholder": "বদলানো এনটিটি এখানে দেখা যাবে..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS মিনিফাই করুন",
      "beautifyTab": "JS সুন্দর করুন",
      "indentLabel": "ইনডেন্ট:",
      "indent2": "২ স্পেস",
      "indent4": "৪ স্পেস",
      "inputLabel": "JavaScript / TypeScript ইনপুট",
      "bytesLabel": "বাইট",
      "inputPlaceholder": "JavaScript বা TypeScript স্নিপেট পেস্ট করুন...",
      "outputLabelMinify": "মিনিফাই করা আউটপুট",
      "outputLabelBeautify": "সুন্দর করা আউটপুট",
      "outputPlaceholder": "ফরম্যাট করা JavaScript এখানে দেখা যাবে...",
      "copyCode": "কোড কপি করুন"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "ডিলিমিটার:",
      "commaOpt": "কমা (,)",
      "semicolonOpt": "সেমিকোলন (;)",
      "tabOpt": "ট্যাব (TSV)",
      "conversionError": "রূপান্তর ত্রুটি:",
      "inputLabelJson": "JSON ইনপুট",
      "inputLabelCsv": "CSV ইনপুট",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "CSV আউটপুট",
      "outputLabelJson": "JSON আউটপুট",
      "outputPlaceholder": "বদলানো ডেটা এখানে দেখা যাবে...",
      "parseFallback": "ইনপুট ফরম্যাট পার্স করা যায়নি।"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "শুধু ব্রাউজারের মেমরিতেই Base64Url হেডার ও পেলোড ডিকোড করে। ক্রিপ্টোগ্রাফিক স্বাক্ষর যাচাই করে না।",
      "loadSampleJwt": "নমুনা JWT লোড করুন",
      "inputLabel": "এনকোডেড JWT টোকেন",
      "inputPlaceholder": "হেডার ও ক্লেইম দেখতে JWT টোকেন পেস্ট করুন (eyJhbGciOi...)...",
      "invalidJwt": "অবৈধ JWT:",
      "headerLabel": "হেডার (অ্যালগরিদম ও টাইপ)",
      "payloadLabel": "পেলোড (ক্লেইম)",
      "copyHeader": "হেডার কপি করুন",
      "copyPayload": "পেলোড কপি করুন",
      "timestampTitle": "টাইমস্ট্যাম্প ক্লেইম",
      "iatLabel": "জারি করা হয়েছে (iat)",
      "nbfLabel": "এর আগে নয় (nbf)",
      "expLabel": "মেয়াদ শেষ (exp)",
      "expired": "মেয়াদ শেষ হয়েছে",
      "active": "সক্রিয় (এখনো মেয়াদ শেষ হয়নি)",
      "signatureLabel": "স্বাক্ষর অংশ (Base64Url)",
      "invalidB64Url": "Base64Url অংশের দৈর্ঘ্য অবৈধ।",
      "segmentCount": "৩টি বিন্দু-বিভক্ত JWT অংশ লাগবে (header.payload.signature), পাওয়া গেছে {count}টি।",
      "parseFallback": "JWT Base64Url JSON অংশ পার্স করা যায়নি।"
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "রেগুলার এক্সপ্রেশন প্যাটার্ন",
      "patternPlaceholder": "regex প্যাটার্ন লিখুন...",
      "flagsLabel": "ফ্ল্যাগ:",
      "syntaxError": "সিনট্যাক্স ত্রুটি:",
      "testStringLabel": "টেস্ট স্ট্রিং",
      "testPlaceholder": "আপনার প্যাটার্নে যাচাই করার জন্য নমুনা টেক্সট পেস্ট করুন...",
      "highlightedMatches": "হাইলাইট করা মিল",
      "matchSingular": "মিল",
      "matchPlural": "মিল",
      "highlightEmpty": "মিল এখানে রিয়েল টাইমে হাইলাইট হবে...",
      "capturedTitle": "ক্যাপচার করা মিল",
      "matchLabel": "মিল",
      "indexLabel": "ইনডেক্স",
      "groupsLabel": "গ্রুপ:",
      "noMatches": "কোনো মিল পাওয়া যায়নি।",
      "replaceLabel": "বদলানোর টেমপ্লেটের প্রিভিউ",
      "replacePlaceholder": "যেমন $1 [at] $2",
      "invalidRegex": "অবৈধ রেগুলার এক্সপ্রেশন।"
    },
    "tables": {
      "sampleText": "প্রধান যোগাযোগ: support@utilityflow.online\nবিলিং টিম: billing@example.org\nঅবৈধ ইমেইল: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (গ্লোবাল)"
        },
        {
          "flag": "i",
          "label": "i (কেস বাদ দিন)"
        },
        {
          "flag": "m",
          "label": "m (মাল্টিলাইন)"
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
      "beautify": "সুন্দর করুন",
      "minify": "মিনিফাই করুন",
      "uppercaseKw": "বড় অক্ষরের কীওয়ার্ড",
      "lowercaseKw": "ছোট অক্ষর",
      "indentLabel": "ইনডেন্ট:",
      "indent2": "২ স্পেস",
      "indent4": "৪ স্পেস",
      "inputLabel": "র SQL কোয়েরি",
      "inputPlaceholder": "SQL কোয়েরি পেস্ট করুন (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "ফরম্যাট করা SQL",
      "outputPlaceholder": "ফরম্যাট করা SQL এখানে দেখা যাবে...",
      "copySql": "SQL কপি করুন"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "বর্তমান Unix টাইমস্ট্যাম্প (সেকেন্ড)",
      "useCurrent": "বর্তমান সময় ব্যবহার করুন",
      "copyEpoch": "epoch কপি করুন",
      "converter1Label": "Unix টাইমস্ট্যাম্প → মানব-পাঠ্য তারিখ",
      "epochPlaceholder": "যেমন 1794544800",
      "unitAuto": "অটো",
      "unitSeconds": "সেকেন্ড",
      "unitMilliseconds": "মিলিসেকেন্ড",
      "errorNotNumeric": "বৈধ সংখ্যাসূচক Unix টাইমস্ট্যাম্প দিন।",
      "errorOutOfRange": "টাইমস্ট্যাম্প বৈধ JavaScript Date সীমার বাইরে।",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "স্থানীয় সময় অঞ্চল",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "আপেক্ষিক",
      "converter2Label": "স্থানীয় তারিখ ও সময় → Unix টাইমস্ট্যাম্প",
      "secondsLabel": "সেকেন্ড",
      "millisecondsLabel": "মিলিসেকেন্ড",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "এনকোড করুন",
      "decode": "ডিকোড করুন",
      "encodeUriPreserve": "encodeURI (://?& নিরাপদ রাখুন)",
      "swap": "বদলান",
      "urlError": "URL ত্রুটি:",
      "inputLabel": "ইনপুট স্ট্রিং বা URL",
      "inputPlaceholder": "URL, কোয়েরি স্ট্রিং বা প্যারামিটার মান পেস্ট করুন...",
      "outputLabelEncode": "এনকোডেড আউটপুট",
      "outputLabelDecode": "ডিকোডেড আউটপুট",
      "outputPlaceholder": "এনকোড বা ডিকোড করা URL এখানে দেখা যাবে...",
      "parsedTitle": "URL-এর পার্স করা বিবরণ",
      "protocol": "প্রোটোকল",
      "host": "হোস্ট",
      "pathname": "পাথনেম",
      "hash": "হ্যাশ",
      "noneValue": "(কোনোটিই নয়)",
      "queryParam": "কোয়েরি প্যারামিটার",
      "decodedValue": "ডিকোড করা মান",
      "malformed": "ভুল শতাংশ-এনকোডিং ক্রম।"
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID সংস্করণ",
      "v4": "v4 (র‍্যান্ডম)",
      "v7": "v7 (সময়-ক্রমবদ্ধ)",
      "quantity": "পরিমাণ (১–১০০)",
      "generate": "UUID তৈরি করুন",
      "uppercase": "বড় অক্ষর",
      "includeHyphens": "হাইফেন অন্তর্ভুক্ত করুন",
      "wrapBraces": "{ব্রেসে} মোড়ান",
      "generatedLabel": "তৈরি করা UUID",
      "copyAll": "সব কপি করুন"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "সাদার উপর ইনডিগো",
      "presetSlate": "স্লেট কালি",
      "presetEmerald": "এমারাল্ড ব্যাজ",
      "presetDark": "ডার্ক মোড",
      "swapColors": "রং বদলান",
      "fgTitle": "সামনের রং / টেক্সটের রং",
      "bgTitle": "পেছনের রং",
      "copyHex": "HEX কপি করুন",
      "pickerSuffix": "পিকার",
      "hexInputSuffix": "HEX ইনপুট",
      "contrastRatioLabel": "WCAG 2.1 কনট্রাস্ট অনুপাত",
      "checkAaNormal": "WCAG AA সাধারণ টেক্সট",
      "checkAaLarge": "WCAG AA বড় টেক্সট / UI",
      "checkAaaNormal": "WCAG AAA সাধারণ টেক্সট",
      "checkAaaLarge": "WCAG AAA বড় টেক্সট",
      "pass": "পাস",
      "fail": "ফেল",
      "livePreviewLabel": "লাইভ অ্যাক্সেসিবিলিটি প্রিভিউ",
      "previewHeading": "পরিষ্কার টাইপোগ্রাফি যেকোনো স্ক্রিন সাইজে সহজে পড়া যায়।",
      "previewBody": "সাধারণ বডি টেক্সটের (১৪–১৬ px) জন্য WCAG লেভেল AA-তে অন্তত ৪.৫:১ এবং লেভেল AAA-তে ৭.০:১ কনট্রাস্ট অনুপাত লাগে। বড় হেডিংয়ের (১৮ pt+ বা বোল্ড ১৪ pt+) জন্য অন্তত ৩.০:১ লাগে।",
      "outlinedControl": "আউটলাইন দেওয়া UI কন্ট্রোল",
      "hexOnHex": "{fg} এর উপর {bg}",
      "extractTitle": "ইমেজ থেকে কালার প্যালেট বের করুন",
      "extractBody": "স্ক্রিনশট, লোগো বা ছবি আপলোড করুন — মূল HEX সোয়াচ সরাসরি আপনার কনট্রাস্ট যাচাইয়ে চলে আসবে।",
      "appliesToLabel": "সোয়াচে ক্লিক করলে প্রয়োগ হবে:",
      "foregroundBtn": "সামনের রং",
      "backgroundBtn": "পেছনের রং",
      "selectImage": "সোয়াচ বের করার জন্য ইমেজ বেছে নিন",
      "loadedReplace": "লোড হয়েছে: {name} (অন্যটি আপলোড করুন)",
      "selectImageError": "অনুগ্রহ করে PNG, JPG, WebP বা GIF ইমেজ বেছে নিন।",
      "unableToRead": "\"{name}\" পড়া যায়নি।",
      "canvasUnavailable": "Canvas 2D কনটেক্সট উপলভ্য নয়।",
      "transparentImage": "ইমেজটি পুরোপুরি স্বচ্ছ মনে হচ্ছে।",
      "unableToExtract": "প্যালেট বের করা যায়নি।",
      "areaPercent": "~{n}% এলাকা"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 ব্রাউজার ট্যাব",
        "taskbar": "32×32 টাস্কবার / HiDPI",
        "desktopShortcut": "48×48 ডেস্কটপ শর্টকাট",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA স্প্ল্যাশ"
      },
      "monogramMode": "মনোগ্রাম ব্যাজ বিল্ডার",
      "imageMode": "লোগো ইমেজ আপলোড করুন",
      "lettersLabel": "টেক্সট / শুরুর অক্ষর (১–৩ অক্ষর)",
      "cornerShapeLabel": "কোনার আকৃতি",
      "roundedSquare": "গোল কোনার বর্গ",
      "circle": "বৃত্ত",
      "sharpSquare": "ধারালো বর্গ",
      "square": "বর্গ",
      "bgColorLabel": "পেছনের রং",
      "textColorLabel": "টেক্সটের রং",
      "chooseLogo": "PNG, JPG, WebP বা SVG লোগো বেছে নিন",
      "loadedReplace": "লোড হয়েছে: {name} (বদলাতে ক্লিক করুন)",
      "cropMaskLabel": "ক্রপ মাস্ক",
      "unableToRead": "\"{name}\" পড়া যায়নি।",
      "canvasUnavailable": "Canvas 2D কনটেক্সট উপলভ্য নয়।",
      "failedEncode": "ফেভিকন PNG এনকোড করা যায়নি।",
      "unableToGenerate": "ফেভিকন তৈরি করা যায়নি।",
      "icoBundleTitle": "মাল্টি-সাইজ favicon.ico বান্ডল (16px + 32px + 48px)",
      "icoBundleBody": "আপনার ওয়েবসাইটের রুট /public/ ফোল্ডারের জন্য তৈরি, মানসম্মত বাইনারি .ico ফাইল",
      "downloadIco": "favicon.ico ডাউনলোড করুন",
      "faviconPreviewAlt": "ফেভিকন 32x32 প্রিভিউ",
      "iconAlt": "{size}x{size}-এর আইকন",
      "htmlTagsLabel": "HTML <head> লিংক ট্যাগ",
      "copyHtml": "HTML কপি করুন"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "ক্রিপ্টোগ্রাফিক চেকসাম বের করার জন্য যেকোনো ফাইল বেছে নিন",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Web Crypto API দিয়ে লোকাল হ্যাশ · কোনো ফাইল আপলোড হয় না (৫০০ MB-এর কমের পরামর্শ)",
      "cryptoUnavailable": "এই ব্রাউজারে Web Crypto SubtleCrypto API উপলভ্য নয়।",
      "hashFailed": "ব্রাউজারের মেমরিতে ফাইল হ্যাশ করা যায়নি (কয়েকশ MB-এর বড় ফাইল RAM সীমা ছাড়িয়ে যেতে পারে)।",
      "computing": "SHA-1, SHA-256, SHA-384 ও SHA-512 চেকসাম লোকালি বের করা হচ্ছে...",
      "fileLabel": "ফাইল:",
      "sizeLabel": "সাইজ:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "বদলানো হয়েছে:",
      "bytesSuffix": "{n} বাইট",
      "downloadSha256": ".sha256 ডাউনলোড করুন",
      "sha256Label": "SHA-256 (প্রস্তাবিত)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (শুধু পুরনো সামঞ্জস্যের জন্য)",
      "verifyLabel": "প্রত্যাশিত চেকসামের সঙ্গে যাচাই করুন",
      "expectedPlaceholder": "প্রকাশিত SHA-256, SHA-512, SHA-384 বা SHA-1 চেকসাম (বা .sha256sum লাইন) পেস্ট করুন...",
      "verified": "চেকসাম যাচাই হয়েছে! ফাইল প্রত্যাশিত {algorithm} ডাইজেস্টের সঙ্গে হুবহু মিলে গেছে।",
      "mismatch": "চেকসাম মেলেনি! বের করা কোনো ডাইজেস্টই আপনার প্রত্যাশিত মানের সঙ্গে মেলেনি।"
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "কমপ্রেস করার জন্য ইমেজ বেছে নিন (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "HTML5 Canvas দিয়ে লোকাল প্রসেস · কখনো রিমোট সার্ভারে আপলোড হয় না",
      "uploadImageError": "অনুগ্রহ করে PNG, JPG, WebP বা GIF ইমেজ ফাইল আপলোড করুন।",
      "fileTooLarge": "ফাইলটি খুব বড় — প্রতি ফাইলের সীমা ২০ MB। ছোট ইমেজ বেছে নিন।",
      "unableToDecode": "\"{name}\" ডিকোড করা যায়নি।",
      "canvasUnavailable": "Canvas 2D কনটেক্সট উপলভ্য নয়।",
      "compressionFailed": "ব্রাউজার ক্যানভাসে কমপ্রেশন ব্যর্থ হয়েছে।",
      "unableToCompress": "ইমেজ কমপ্রেস করা যায়নি।",
      "unableToRead": "\"{name}\" পড়া যায়নি।",
      "invalidImage": "অবৈধ ইমেজ ফাইল।",
      "outputFormatLabel": "আউটপুট ফরম্যাট",
      "webpOption": "WebP (ওয়েবের জন্য সবচেয়ে ছোট আধুনিক সাইজ)",
      "jpgOption": "JPG (সবচেয়ে ব্যাপক সামঞ্জস্য)",
      "pngOption": "PNG (ক্ষতিহীন স্বচ্ছতা)",
      "maxWidthLabel": "সর্বোচ্চ প্রস্থের সীমা",
      "keepOriginalWidth": "মূল প্রস্থ রাখুন",
      "max1920": "সর্বোচ্চ 1920 px (Full HD)",
      "max1280": "সর্বোচ্চ 1280 px (ব্লগ / হিরো)",
      "max800": "সর্বোচ্চ 800 px (থাম্বনেইল)",
      "qualityLabel": "কোয়ালিটি: ",
      "losslessPng": "ক্ষতিহীন PNG",
      "originalLabel": "মূল",
      "compressedLabel": "কমপ্রেস করা",
      "changeLabel": "পরিবর্তন",
      "outputSummary": "আউটপুট: {w} × {h} px · {ext}",
      "compressing": "কমপ্রেস হচ্ছে...",
      "downloadExt": ".{ext} ডাউনলোড করুন",
      "previewAlt": "কমপ্রেস করা ইমেজের প্রিভিউ"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "বদলানোর জন্য একটি বা একাধিক ইমেজ বেছে নিন",
      "imagesLoaded": "{n}টি ইমেজ লোড হয়েছে — যোগ করতে বা বদলাতে ক্লিক করুন",
      "batchNote": "PNG, JPG, WebP, SVG বা GIF লোকালি ব্যাচে PNG, JPG বা WebP-তে বদলান",
      "convertToLabel": "কোন ফরম্যাটে বদলাবেন",
      "pngOption": "PNG (.png — স্বচ্ছতা বজায় থাকে)",
      "qualityLabel": "ক্ষতিযুক্ত কোয়ালিটি: ",
      "lossless": "ক্ষতিহীন",
      "alphaFillLabel": "আলফা ফিল",
      "converting": "বদলানো হচ্ছে...",
      "reconvert": "আবার বদলান",
      "selectFilesError": "একটি বা বেশি ইমেজ ফাইল বেছে নিন (PNG, JPG, WebP, SVG, GIF)।",
      "filesTooLarge": "{names} বাদ দেওয়া হয়েছে — ২৫ MB প্রতি ফাইলের সীমার চেয়ে বড় ফাইল বদলানো হয় না।",
      "couldNotDecode": "\"{name}\" ডিকোড করা যায়নি।",
      "canvasUnavailable": "Canvas 2D উপলভ্য নয়।",
      "conversionFailed": "\"{name}\"-এর রূপান্তর ব্যর্থ হয়েছে।",
      "batchFailed": "ব্যাচ ইমেজ রূপান্তর ব্যর্থ হয়েছে।",
      "downloadExt": ".{ext} ডাউনলোড করুন"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "আগে থেকে ঠিক করা সাইজে বদলাতে বা ক্রপ করতে ইমেজ বেছে নিন",
      "fileWithDims": "{name} (মূল: {w} × {h} px)",
      "supportsNote": "পিক্সেল রিসাইজ, অ্যাসপেক্ট লক ও মাঝখান থেকে ক্রপসহ সোশ্যাল প্রিসেট সমর্থিত",
      "selectImageError": "PNG, JPG, WebP বা GIF ইমেজ বেছে নিন।",
      "unableToDecode": "\"{name}\" ডিকোড করা যায়নি।",
      "unableToRead": "ইমেজ পড়া যায়নি।",
      "failedLoading": "রিসাইজের জন্য ইমেজ লোড করা যায়নি।",
      "canvasUnavailable": "Canvas 2D উপলভ্য নয়।",
      "failedGenerating": "রিসাইজ করা ইমেজ তৈরি করা যায়নি।",
      "resizeFailed": "রিসাইজ ব্যর্থ হয়েছে।",
      "quickPresets": "দ্রুত প্রিসেট:",
      "presetOg": "OG শেয়ার (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "বর্গ (1080×1080)",
      "presetAvatar": "অ্যাভাটার (512×512)",
      "widthLabel": "প্রস্থ (px)",
      "heightLabel": "উচ্চতা (px)",
      "fitModeLabel": "অ্যাসপেক্ট ফিট মোড",
      "coverCropOption": "মাঝখান থেকে কভার ক্রপ (টান ছাড়া)",
      "exactOption": "সঠিক মাত্রায় স্কেল করুন",
      "outputFormatLabel": "আউটপুট ফরম্যাট",
      "lockAspect": "মাত্রা লেখার সময় মূল অ্যাসপেক্ট অনুপাত লক করুন",
      "resizeButton": "{w} × {h} px-এ রিসাইজ করুন",
      "readySummary": "প্রস্তুত: {w} × {h} px ({ext})",
      "downloadResized": "রিসাইজ করা .{ext} ডাউনলোড করুন",
      "previewAlt": "রিসাইজ করা ইমেজের আউটপুট"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "ঘোরাতে, উল্টাতে বা ফিল্টার দিতে ইমেজ বেছে নিন",
      "loadedReplace": "{name} (বদলাতে ক্লিক করুন)",
      "previewNote": "রিয়েল-টাইম HTML5 Canvas প্রিভিউ ও পিক্সেল এক্সপোর্ট",
      "selectImageError": "অনুগ্রহ করে PNG, JPG, WebP বা GIF ইমেজ বেছে নিন।",
      "failedLoading": "\"{name}\" লোড করা যায়নি।",
      "rotateLeft": "৯০° বামে ঘোরান",
      "rotateRight": "৯০° ডানে ঘোরান",
      "flipHorizontal": "অনুভূমিকভাবে উল্টান",
      "flipVertical": "উল্লম্বভাবে উল্টান",
      "brightnessLabel": "উজ্জ্বলতা: ",
      "contrastLabel": "কনট্রাস্ট: ",
      "grayscaleLabel": "সাদা-কালো (গ্রেস্কেল)",
      "resetAll": "সব রিসেট করুন",
      "exportFormatLabel": "এক্সপোর্ট ফরম্যাট",
      "livePreview": "লাইভ Canvas প্রিভিউ"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "ইমেজ → Base64 Data URI",
      "decodeMode": "Base64 → ইমেজ প্রিভিউ",
      "selectImageError": "ইমেজ ফাইল বেছে নিন (PNG, JPG, WebP, SVG, GIF, ICO)।",
      "unableToRead": "\"{name}\" পড়া যায়নি।",
      "chooseImage": "এনকোড করার জন্য ইমেজ ফাইল বেছে নিন",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Data URI, র Base64, HTML <img> ও CSS ব্যাকগ্রাউন্ড স্নিপেট তৈরি করে",
      "binarySizeLabel": "বাইনারি ফাইলের সাইজ",
      "base64SizeLabel": "Base64 URI সাইজ (~৩৩% বড়)",
      "fullDataUriLabel": "পুরো Data URI",
      "copyDataUri": "Data URI কপি করুন",
      "copyRawBase64": "র Base64 কপি করুন",
      "copyImg": "<img> কপি করুন",
      "copyCss": "CSS কপি করুন",
      "encodedAria": "এনকোড করা Base64 Data URI",
      "encodedAlt": "এনকোড করা প্রিভিউ",
      "pasteLabel": "Base64 ইমেজ স্ট্রিং বা Data URI পেস্ট করুন",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... বা র base64 স্ট্রিং",
      "invalidPayload": "পেস্ট করা Base64 টেক্সট বৈধ এনকোডেড ইমেজ পেলোড নয়।",
      "decodedAlt": "ডিকোড করা Base64 প্রিভিউ",
      "downloadExt": ".{ext} ডাউনলোড করুন"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "খুব শক্তিশালী",
        "strong": "শক্তিশালী",
        "moderate": "মাঝারি",
        "weak": "দুর্বল"
      },
      "randomPasswordMode": "র‍্যান্ডম পাসওয়ার্ড",
      "passphraseMode": "Diceware পাসফ্রেজ",
      "regenerate": "আবার তৈরি করুন",
      "passwordLengthLabel": "পাসওয়ার্ডের দৈর্ঘ্য: ",
      "charsSuffix": " অক্ষর",
      "batchCountLabel": "ব্যাচ সংখ্যা: ",
      "uppercaseLabel": "বড় অক্ষর (A–Z)",
      "lowercaseLabel": "ছোট অক্ষর (a–z)",
      "numbersLabel": "সংখ্যা (০–৯)",
      "symbolsLabel": "চিহ্ন (!@#$%...)",
      "excludeAmbiguousLabel": "বিভ্রান্তিকরগুলো বাদ দিন (0, O, 1, l, I)",
      "wordCountLabel": "শব্দের সংখ্যা: ",
      "wordSeparatorLabel": "শব্দ সেপারেটর",
      "hyphenOption": "হাইফেন (-)",
      "underscoreOption": "আন্ডারস্কোর (_)",
      "periodOption": "পিরিয়ড (.)",
      "spaceOption": "স্পেস ( )",
      "capitalizeWordsLabel": "শব্দের প্রথম অক্ষর বড় করুন",
      "appendDigitLabel": "২ অঙ্কের সংখ্যা যোগ করুন",
      "selectGroupWarning": "পাসওয়ার্ড তৈরি করতে অন্তত একটি অক্ষর গ্রুপ বেছে নিন।",
      "entropyBits": "~{n} বিট এনট্রপি",
      "poolSizeSuffix": " · পুল সাইজ {n}",
      "wordListSuffix": " · {n} শব্দের তালিকা",
      "copyAll": "সব কপি করুন"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "ওয়েবসাইট URL",
        "text": "টেক্সট",
        "wifi": "Wi-Fi কনফিগারেশন",
        "vcard": "vCard যোগাযোগ",
        "email": "ইমেইল ঠিকানা",
        "phone": "ফোন নম্বর",
        "plainText": "সাধারণ টেক্সট"
      },
      "liveCameraCapture": "লাইভ ক্যামেরা ক্যাপচার",
      "scanMode": "QR ইমেজ স্ক্যান / ডিকোড করুন",
      "vcardMode": "vCard যোগাযোগ QR বিল্ডার",
      "uploadQr": "QR কোড ইমেজ আপলোড করুন",
      "uploadQrNote": "PNG, JPG, WebP বা SVG স্ক্রিনশট · ১০০% ক্লায়েন্ট-সাইড",
      "liveCameraTitle": "লাইভ ডিভাইস ক্যামেরা স্ক্যান",
      "liveCameraNote": "শুধু অনুমতি পেলেই লোকাল ক্যামেরা ফিড ব্যবহার করে",
      "startCamera": "ক্যামেরা স্ক্যানার শুরু করুন",
      "stopCamera": "ক্যামেরা থামান",
      "cameraHint": "ক্যামেরা QR কোডের দিকে ধরুন — ডিকোড হলেই ক্যাপচার নিজে থেকে থেমে যাবে।",
      "uploadImageError": "অনুগ্রহ করে QR কোডসহ PNG, JPG, WebP বা SVG ইমেজ আপলোড করুন।",
      "unableToLoad": "\"{name}\" লোড করা যায়নি।",
      "noQrDetected": "এই ইমেজে কোনো QR কোড পাওয়া যায়নি। ফোকাস পরিষ্কার রাখুন, শান্ত-অঞ্চল (quiet-zone) মার্জিন পরিষ্কার রাখুন এবং কনট্রাস্ট বেশি রাখুন।",
      "unableToScan": "ইমেজ স্ক্যান করা যায়নি।",
      "cameraUnsupported": "এই ব্রাউজারে ক্যামেরা স্ক্যানিং সমর্থিত নয়।",
      "cameraDenied": "ক্যামেরার অনুমতি পাওয়া যায়নি বা কোনো ক্যামেরা ডিভাইস উপলভ্য নয়। এর বদলে QR কোড ইমেজ আপলোড করুন।",
      "decodedPayload": "ডিকোড করা পেলোড · {kind}",
      "sourceLabel": "উৎস: ",
      "copyPayload": "পেলোড কপি করুন",
      "decodedAria": "ডিকোড করা QR টেক্সট",
      "detectedLink": "পাওয়া ওয়েব লিংক: ",
      "uploadedPreviewAlt": "আপলোড করা QR কোডের প্রিভিউ",
      "firstNameLabel": "নামের প্রথম অংশ",
      "lastNameLabel": "পদবি",
      "orgLabel": "সংস্থা",
      "jobTitleLabel": "পদ",
      "defaultJobTitle": "প্রোডাক্ট ডিজাইনার",
      "phoneLabel": "ফোন নম্বর",
      "emailLabel": "ইমেইল ঠিকানা",
      "websiteLabel": "ওয়েবসাইট URL",
      "rawVcardLabel": "র vCard 3.0 পেলোড",
      "copyVcard": "vCard কপি করুন",
      "vcardQrAlt": "তৈরি করা vCard QR কোড",
      "downloadPng": "PNG ডাউনলোড করুন",
      "downloadSvg": "SVG ডাউনলোড করুন"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical ও Hreflang ট্যাগ",
      "redirectsMode": "301 রিডাইরেক্ট নিয়ম জেনারেটর",
      "canonicalLabel": "সেলফ-রেফারেন্সিং Canonical URL",
      "alternatesLabel": "ভাষা ও অঞ্চলের বিকল্প",
      "addLocale": "লোকেল যোগ করুন",
      "langCodeAria": "ভাষা কোড",
      "alternateUrlAria": "বিকল্প URL",
      "removeLocaleAria": "লোকেলের সারি সরান",
      "htmlTagsLabel": "HTML <head> লিংক ট্যাগ",
      "copyHtml": "HTML কপি করুন",
      "xmlSnippetLabel": "XML সাইটম্যাপ <xhtml:link> স্নিপেট",
      "copyXml": "XML কপি করুন",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (server block)",
      "copyRules": "{n}টি নিয়ম কপি করুন",
      "pairsLabel": "উৎস → গন্তব্য জোড়া (কমা, ট্যাব, বা “ -> ” দিয়ে আলাদা করুন)",
      "generatedConfigLabel": "তৈরি করা 301 রিডাইরেক্ট কনফিগ",
      "skippedInvalid": "{n}টি লাইন বাদ দেওয়া হয়েছে — গন্তব্য লক্ষ্য পাওয়া যায়নি।",
      "invalidHreflangWarning": "অবৈধ hreflang কোড বাদ দেওয়া হয়েছে: {codes} — ২-অক্ষরের ভাষা কোড ব্যবহার করুন (যেমন en, es), তারপর চাইলে অঞ্চল যোগ করুন (যেমন en-US), বা x-default।"
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "কারিগরি SEO শুরু হয় পরিষ্কার, ক্রল করা যায় এমন URL, সঠিক canonical ট্যাগ ও কাঠামোবদ্ধ XML সাইটম্যাপ দিয়ে। প্রকাশকরা কীওয়ার্ড ভরার বদলে ব্যবহারকারীর উদ্দেশ্যের উপর কেন্দ্র করে সহায়ক কনটেন্ট লিখলে সার্চ ইঞ্জিন বিষয়ের গভীরতা নিজে থেকেই বুঝে নেয়। আপনার হেডিং, মেটা বিবরণ ও ইন্টারনাল লিংক নিয়মিত যাচাই করুন।",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "সম্পাদকীয় নির্দেশনা:",
      "guidanceBody": "আধুনিক সার্চ ইঞ্জিন কোনো নির্দিষ্ট কীওয়ার্ড-ঘনত্বের কোটা পূরণের জন্য পুরস্কার দেয় না। এই বণ্টন অডিট দিয়ে আকস্মিক পুনরাবৃত্তি ধরুন বা নিশ্চিত করুন যে মূল ধারণাগুলো আপনার টেক্সটে পরিষ্কারভাবে দেখা যাচ্ছে।",
      "targetLabel": "লক্ষ্য কীওয়ার্ড / বাক্যাংশ (ঐচ্ছিক)",
      "targetPlaceholder": "যেমন technical seo",
      "phraseLengthLabel": "বাক্যাংশের দৈর্ঘ্য",
      "oneWord": "১ শব্দ",
      "twoWord": "২ শব্দের বাক্যাংশ",
      "threeWord": "৩ শব্দের বাক্যাংশ",
      "stripHtml": "HTML ট্যাগ সরান",
      "ignoreStopWords": "স্টপ ওয়ার্ড বাদ দিন",
      "textLabel": "লেখার খসড়া বা পেস্ট করা HTML কপি",
      "totalWords": "মোট শব্দ",
      "uniqueVocabulary": "অনন্য শব্দভান্ডার",
      "readingTime": "আনুমানিক পড়ার সময়",
      "targetPrefix": "লক্ষ্য: ",
      "hits": "{n} বার ({d}%)",
      "rankHeader": "র‍্যাংক",
      "termHeader": "শব্দ / N-gram",
      "occurrencesHeader": "বার",
      "shareHeader": "অংশ (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – দ্রুত ব্রাউজার-ভিত্তিক অনলাইন ইউটিলিটি টুল",
      "defaultDescription": "টেক্সট এডিটিং, ডেভেলপার এনকোডিং, আর্থিক ক্যালকুলেটর, PDF ওয়ার্কফ্লো ও SEO-র জন্য ৮৩টি দ্রুত, প্রাইভেসি-প্রথম ব্রাউজার টুল দেখুন।",
      "pageTitleLabel": "পেজ টাইটেল (<title> / og:title)",
      "titleChars": "{n} অক্ষর (আদর্শ ৩০–৬০)",
      "metaDescriptionLabel": "মেটা বিবরণ",
      "descChars": "{n} অক্ষর (আদর্শ ১২০–১৬০)",
      "canonicalUrlLabel": "Canonical URL",
      "ogImageLabel": "Open Graph ইমেজ URL (1200×630 প্রস্তাবিত)",
      "siteNameLabel": "সাইটের নাম (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter কার্ড",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots follow নির্দেশ",
      "includeViewportLabel": "charset ও viewport ট্যাগ অন্তর্ভুক্ত করুন",
      "generatedTagsLabel": "তৈরি করা HTML <head> ট্যাগ",
      "copyHtml": "HTML কপি করুন",
      "downloadHtml": ".html ডাউনলোড করুন",
      "socialPreviewLabel": "সোশ্যাল শেয়ার কার্ড প্রিভিউ",
      "socialPreviewFallback": "সোশ্যাল শেয়ার প্রিভিউ",
      "untitledPage": "শিরোনামহীন পেজ",
      "metaSnippetFallback": "মেটা বিবরণের স্নিপেট এখানে দেখা যাবে।"
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "ক্লায়েন্ট-সাইড HTML সোর্স অডিট:",
      "auditBody": "ব্রাউজার যেকোনো তৃতীয় পক্ষের ওয়েবসাইটের ক্রস-অরিজিন স্ক্র্যাপিং (CORS) আটকায় এবং ব্যক্তিগত সার্চ অ্যানালিটিক্সে তাদের পৌঁছানো যায় না। আপনার পেজের HTML সোর্স নিচে পেস্ট করুন (View Page Source) এবং DOM ট্যাগ লোকালি অডিট করুন।",
      "pastedHtmlLabel": "পেস্ট করা HTML সোর্স",
      "loadSampleHtml": "নমুনা HTML লোড করুন",
      "htmlPlaceholder": "র <html>...</html> সোর্স এখানে পেস্ট করুন...",
      "scoreLabel": "DOM অডিট স্কোর",
      "checksPassed": "{passed} / {total}টি যাচাই পাস",
      "linksSummary": "লিংক: {total} ({internal}টি অভ্যন্তরীণ / {external}টি বাহ্যিক)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "ডিফল্ট (index, follow)",
      "headingOutline": "হেডিং রূপরেখা (H1–H4)",
      "emptyState": "টাইটেল, বিবরণ, হেডিং, canonical ও alt ট্যাগ দেখতে বাম দিকে HTML সোর্স পেস্ট করুন।",
      "checkTitle": "টাইটেল ট্যাগ (<title>)",
      "checkMetaDesc": "মেটা বিবরণ",
      "checkH1": "ঠিক একটি <h1> হেডিং",
      "checkCanonical": "Canonical URL (<link rel=\"canonical\">)",
      "checkAlt": "ইমেজ Alt বৈশিষ্ট্য",
      "checkOgJsonLd": "Open Graph ও JSON-LD কাঠামোবদ্ধ ডেটা",
      "titleDetail": "{n} অক্ষর: \"{title}\"",
      "titleMissing": "<head>-এ <title> ট্যাগ পাওয়া যায়নি।",
      "descDetail": "{n} অক্ষর (লক্ষ্য ১২০–১৬০)।",
      "descMissing": "<meta name=\"description\"> পাওয়া যায়নি।",
      "h1Detail": "{n}টি <h1> এলিমেন্ট পাওয়া গেছে।",
      "canonicalMissing": "কোনো canonical ট্যাগ ঘোষণা করা হয়নি।",
      "noImages": "মার্কআপে কোনো <img> এলিমেন্ট নেই।",
      "altDetail": "{with}/{total}টি ইমেজে বর্ণনামূলক alt টেক্সট আছে।",
      "ogDetail": "og:title {presence} · {n}টি JSON-LD ব্লক।",
      "present": "আছে",
      "missing": "পাওয়া যায়নি"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "ইনডেক্সিং নির্দেশ",
      "indexOption": "index (সার্চ ইনডেক্সিংয়ের অনুমতি)",
      "noindexOption": "noindex (SERP থেকে বাইরে রাখুন)",
      "linkCrawlingLabel": "লিংক ক্রলিং",
      "followOption": "follow (লিংক সিগন্যাল পাস করুন)",
      "nofollowOption": "nofollow (লিংক ফলো করবেন না)",
      "largeOption": "large (যোগ্য খোঁজ)",
      "htmlTagLabel": "HTML <head> মেটা ট্যাগ",
      "copyHtmlTag": "HTML ট্যাগ কপি করুন",
      "httpHeaderLabel": "HTTP রেসপন্স হেডার (PDF / নন-HTML)",
      "copyHeader": "হেডার কপি করুন",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare _headers পাথ প্যাটার্ন",
      "copyBlock": "ব্লক কপি করুন"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "শুরুর টেমপ্লেট:",
      "allowAll": "সব ক্রলারকে অনুমতি",
      "standardWebApp": "স্ট্যান্ডার্ড ওয়েব অ্যাপ / SaaS",
      "wordpressClean": "WordPress ক্লিন",
      "stagingBlockAll": "স্টেজিং (সব ব্লক করুন)",
      "crawlerRules": "ক্রলার পাথ নিয়ম",
      "addRule": "নিয়ম যোগ করুন",
      "directiveAria": "নির্দেশ",
      "pathAria": "পাথ",
      "deleteRuleAria": "নিয়ম সরান",
      "crawlDelayLabel": "Crawl-delay (সেকেন্ড, ঐচ্ছিক)",
      "crawlDelayPlaceholder": "কোনোটিই নয়",
      "sitemapUrlsLabel": "সাইটম্যাপ URL (প্রতি লাইনে একটি)",
      "generatedLabel": "তৈরি করা robots.txt",
      "invalidSitemapWarning": "অবৈধ সাইটম্যাপ URL বাদ দেওয়া হয়েছে: {urls} — সাইটম্যাপের লাইনে পুরো http(s) URL থাকতে হবে।"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "দ্রুত ব্রাউজার ইউটিলিটি কীভাবে বানাবেন",
      "defaultFaqQ1": "UtilityFlow টুল কি লোকাল ব্রাউজারে চালায়?",
      "defaultFaqA1": "হ্যাঁ। প্রায় সব ইউটিলিটি সরাসরি ব্রাউজারের মেমরিতে চলে — ইনপুট বাইরের সার্ভারে পাঠানো হয় না।",
      "defaultFaqQ2": "কাঠামোবদ্ধ JSON-LD কি SEO-তে সাহায্য করে?",
      "defaultFaqA2": "হ্যাঁ। বৈধ Schema.org JSON-LD সার্চ ক্রলারের জন্য এনটিটি প্রসঙ্গ পরিষ্কার করে এবং রিচ রেজাল্টের যোগ্যতা বাড়ায়।",
      "defaultProductName": "প্রো এরগোনমিক মেকানিক্যাল কিবোর্ড",
      "defaultProductDesc": "সফটওয়্যার ডেভেলপারদের জন্য তৈরি লো-প্রোফাইল ওয়্যারলেস কিবোর্ড।",
      "defaultCrumbHome": "হোম",
      "defaultCrumbSeo": "SEO টুল",
      "defaultCrumbSchema": "Schema মার্কআপ জেনারেটর",
      "headlineLabel": "হেডলাইন",
      "authorNameLabel": "লেখকের নাম",
      "publisherNameLabel": "প্রকাশকের নাম",
      "datePublishedLabel": "প্রকাশের তারিখ",
      "articleUrlLabel": "লেখার URL",
      "featuredImageLabel": "ফিচার্ড ইমেজ URL",
      "questionLabel": "প্রশ্ন #{n}",
      "removeQuestionAria": "প্রশ্ন {n} সরান",
      "questionPlaceholder": "প্রশ্ন",
      "acceptedAnswerPlaceholder": "গৃহীত উত্তর",
      "addFaqRow": "FAQ সারি যোগ করুন",
      "productNameLabel": "প্রোডাক্টের নাম",
      "descriptionLabel": "বিবরণ",
      "priceLabel": "দাম",
      "currencyLabel": "মুদ্রা",
      "availabilityLabel": "উপলভ্যতা",
      "orgNameLabel": "সংস্থার নাম",
      "websiteUrlLabel": "ওয়েবসাইট URL",
      "logoUrlLabel": "লোগো URL",
      "breadcrumbLabelAria": "ব্রেডক্রাম্ব {n} লেবেল",
      "breadcrumbUrlAria": "ব্রেডক্রাম্ব {n} URL",
      "labelPlaceholder": "লেবেল",
      "addLevel": "স্তর যোগ করুন",
      "jsonLdOutputLabel": "JSON-LD <script> আউটপুট",
      "copyScriptTag": "স্ক্রিপ্ট ট্যাগ কপি করুন"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "ওয়ার্ড কাউন্টার – শব্দ ও অক্ষর গুনুন | UtilityFlow",
      "defaultDescription": "আপনার ব্রাউজারে JSON পেলোড তাৎক্ষণিকভাবে ফরম্যাট, যাচাই, মিনিফাই ও কি সর্ট করুন — লাইন/কলাম সিনট্যাক্স ত্রুটির বিবরণসহ।",
      "desktopSerp": "ডেস্কটপ SERP (~580px টাইটেল)",
      "mobileSerp": "মোবাইল SERP (~120ch বিবরণ)",
      "copyTitleMeta": "টাইটেল ও মেটা কপি করুন",
      "seoTitleLabel": "SEO টাইটেল",
      "titleMetrics": "{chars} অক্ষর · ~{px} px / 580 px সর্বোচ্চ",
      "metaDescriptionLabel": "মেটা বিবরণ",
      "descMetrics": "{chars} অক্ষর · ~{px} px",
      "pageUrlLabel": "পেজ URL (ব্রেডক্রাম্ব প্রিভিউয়ের জন্য)",
      "siteNameLabel": "সাইটের নাম",
      "boldKeywordLabel": "বোল্ড কীওয়ার্ড",
      "optionalPlaceholder": "ঐচ্ছিক",
      "datePrefixLabel": "তারিখের উপসর্গ",
      "datePlaceholder": "যেমন Nov 12, 2025",
      "desktopSimulation": "ডেস্কটপ সার্চ স্নিপেট সিমুলেশন",
      "mobileSimulation": "মোবাইল সার্চ স্নিপেট সিমুলেশন",
      "titleFallback": "আপনার SEO টাইটেল এখানে দেখা যাবে",
      "descFallback": "আপনার মেটা বিবরণের প্রিভিউ এখানে দেখা যাবে।"
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "কারিগরি SEO-র জন্য পরিষ্কার URL স্লাগ কীভাবে বানাবেন!\n২০২৬ সালে ১০টি সেরা Café ও প্রোডাক্টিভিটি টুল\nXML সাইটম্যাপ ও Robots.txt সম্পূর্ণ চেকলিস্ট",
      "domainLabel": "বেস ডোমেইন / সাবফোল্ডার (পুরো URL প্রিভিউয়ের জন্য)",
      "separatorLabel": "শব্দ সেপারেটর",
      "hyphenOption": "হাইফেন (-) — Google-এর সুপারিশ",
      "underscoreOption": "আন্ডারস্কোর (_)",
      "maxLengthLabel": "সর্বোচ্চ স্লাগ দৈর্ঘ্য ({n} অক্ষর)",
      "stripStopWords": "ঐচ্ছিক ইংরেজি স্টপ ওয়ার্ড সরান (a, the, and, of, in, to)",
      "trailingSlash": "শেষে স্ল্যাশ (/) অন্তর্ভুক্ত করুন",
      "titlesLabel": "পেজ হেডলাইন / টাইটেল (ব্যাচ তৈরির জন্য প্রতি লাইনে একটি)",
      "generatedLabel": "তৈরি করা SEO স্লাগ ({n}টি)",
      "copyAllSlugs": "সব স্লাগ কপি করুন",
      "copyAllUrls": "সব পুরো URL কপি করুন",
      "originalTitleHeader": "মূল টাইটেল",
      "slugUrlHeader": "SEO স্লাগ ও পুরো URL",
      "copyHeader": "কপি করুন"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> তারিখ (ঐচ্ছিক)",
      "changefreqLabel": "<changefreq> সংকেত",
      "priorityLabel": "ডিফল্ট <priority>",
      "omitTag": "ট্যাগ বাদ দিন",
      "deduplicateLabel": "হুবহু একই URL সরান",
      "urlsLabel": "Canonical URL (প্রতি লাইনে একটি পুরো https:// URL)",
      "skippedInvalid": "{n}টি অবৈধ URL লাইন বাদ দেওয়া হয়েছে: ",
      "generatedLabel": "তৈরি করা sitemap.xml ({n}টি URL)",
      "copyXml": "XML কপি করুন",
      "downloadXml": ".xml ডাউনলোড করুন",
      "generatedAria": "তৈরি করা XML সাইটম্যাপ"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "মেকার ও টিমের জন্য দ্রুত ব্রাউজার টুল বানাচ্ছি।   \n\nপ্রতি মঙ্গলবার নতুন সাপ্তাহিক ওয়ার্কফ্লো ড্রপ।\n\nনিচের লিংকে বিনামূল্যে ইউটিলিটি চেষ্টা করুন!",
      "modeBraille": "অদৃশ্য স্পেসার (⠀ U+2800)",
      "modeDot": "সবচেয়ে কম ডট স্পেসার (.)",
      "modeClean": "শুধু পেছনের স্পেস পরিষ্কার করুন",
      "collapse": "ভুলে দ্বিগুণ স্পেস সরান",
      "labelRaw": "খসড়া ক্যাপশন বা বায়ো",
      "phRaw": "আপনার ক্যাপশন লিখুন — যেখানে অনুচ্ছেদ বিরতি চান সেখানে খালি লাইন ছাড়ুন...",
      "tip": "টিপ: উপরের লাইনের শেষে পেছনের স্পেস থাকলে সোশ্যাল অ্যাপ প্রায়ই খালি অনুচ্ছেদ মুছে দেয়।",
      "labelOut": "পেস্ট করার জন্য প্রস্তুত আউটপুট",
      "copyFormatted": "ফরম্যাট করা ক্যাপশন কপি করুন",
      "charsLabel": "অক্ষর:",
      "linesLabel": "লাইন:",
      "blankLabel": "খালি বিরতি বাকি:",
      "fitsBio": "Instagram-এর ১৫০ অক্ষরের বায়োতে পড়ে যায়",
      "captionLength": "ক্যাপশনের দৈর্ঘ্য (১৫০ বায়ো সীমার বেশি)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "সমস্যা → উসকানি → সমাধান (PAS)",
        "tutorial": "৩-ধাপের কার্যকর বিবরণ",
        "bab": "আগে → পরে → সেতু",
        "checklist": "লঞ্চ / অডিট চেকলিস্ট",
        "myth": "সাধারণ মিথ বনাম ব্যবহারিক বাস্তবতা"
      },
      "frameworkDescriptions": {
        "pas": "আপনার ওয়ার্কফ্লো সমাধান দেওয়ার আগে সুনির্দিষ্ট কষ্ট তুলে ধরে।",
        "tutorial": "LinkedIn ক্যারোসেল ও সেভের জন্য উপযুক্ত নম্বর দেওয়া how-to কাঠামো।",
        "bab": "পুরনো বাধার সঙ্গে সুশৃঙ্খল ফলাফলের তুলনা করে।",
        "checklist": "বুকমার্ক করার মতো পরিষ্কার যাচাই তালিকা।",
        "myth": "পুরনো পরামর্শকে সরাসরি, সংক্ষিপ্ত বিকল্প দিয়ে চ্যালেঞ্জ করে।"
      },
      "frameworkLabels": {
        "fixesHeading": "আসলে কী ঠিক করে:",
        "beforeLabel": "আগে: ",
        "afterLabel": "পরে: ",
        "bridgeHeading": "সেতু:",
        "mythLabel": "সাধারণ মিথ: ",
        "worksHeading": "ব্যবহারে কী কাজ করে:"
      },
      "sampleHook": "ক্যাম্পেইন লিংক হাতে ফরম্যাট করে ঘণ্টা নষ্ট করা বন্ধ করুন।",
      "sampleContext": "অসঙ্গত UTM প্যারামিটার ও ভাঙা বায়ো স্পেসিং চুপিসারে অ্যানালিটিক্স রিপোর্ট নষ্ট করে দেয়।",
      "samplePoints": "ছোট অক্ষরের utm_source ও utm_medium ট্যাগ একই রাখুন\nপ্রকাশের আগে অক্ষর ফোল্ড যাচাই করুন\nপেছনের স্পেস ছাড়া পরিষ্কার অনুচ্ছেদ বিরতি রাখুন",
      "sampleCta": "আপনার পরের প্রোডাক্ট লঞ্চের জন্য এই চেকলিস্ট বুকমার্ক করুন।",
      "infoTitle": "নির্ধারণমূলক টেমপ্লেট সংমিশ্রণ:",
      "infoBody": "এই টুল সরাসরি আপনার ব্রাউজারে কাঠামোবদ্ধ কপিরাইটিং ফ্রেমওয়ার্ক ব্যবহার করে — কোনো AI মডেল বা বাইরের API ব্যবহার হয় না, এমন দাবিও করা হয় না।",
      "labelHook": "শুরুর হুক (প্রথম ১–২ লাইন)",
      "labelContext": "প্রসঙ্গ / সমস্যার বিবৃতি",
      "labelPoints": "মূল বিষয় (প্রতি লাইনে একটি)",
      "labelCta": "কল-টু-অ্যাকশন (CTA)",
      "labelTags": "হ্যাশট্যাগ",
      "previewTitle": "ফরম্যাট করা ক্যাপশন প্রিভিউ",
      "copyCaption": "ক্যাপশন কপি করুন",
      "charsLabel": "অক্ষর:",
      "wordsLabel": "শব্দ:",
      "fits": "পড়ে যায়",
      "threadNeeded": "থ্রেড দরকার",
      "tooLong": "খুব লম্বা"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "ফরম্যাটিং ও অ্যাক্সেসিবিলিটি কেস",
      "optCamel": "PascalCase (#CamelCase — স্ক্রিন-রিডার উপযোগী)",
      "optLower": "সব ছোট অক্ষর (#lowercase)",
      "optPreserve": "মূল কেস রাখুন",
      "outLabel": "আউটপুট লেআউট",
      "optInline": "এক লাইন (স্পেস দিয়ে আলাদা)",
      "optNewline": "প্রতি লাইনে একটি হ্যাশট্যাগ",
      "optDots": "ক্যাপশন ফোল্ড সেপারেটর (.\n.\n.)",
      "dedupe": "ডুপ্লিকেট হ্যাশট্যাগ সরান",
      "labelRaw": "কীওয়ার্ড বা এলোমেলো হ্যাশট্যাগ (কমা, স্পেস বা লাইন দিয়ে আলাদা)",
      "labelResult": "পরিষ্কার হ্যাশট্যাগ গ্রুপ",
      "copyHashtags": "হ্যাশট্যাগ কপি করুন",
      "statClean": "পরিষ্কার হ্যাশট্যাগ",
      "statDupes": "ডুপ্লিকেট সরানো হয়েছে",
      "statIgMax": "Instagram সর্বোচ্চ (৩০)",
      "statWithin": "IG ৩০ সীমার মধ্যে",
      "statExceeds": "৩০-ট্যাগ সীমার বেশি",
      "statChars": "আউটপুট অক্ষর"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "৪–১৫ অক্ষর · অক্ষর, সংখ্যা, আন্ডারস্কোর",
        "instagram": "১–৩০ অক্ষর · অক্ষর, সংখ্যা, পিরিয়ড, আন্ডারস্কোর",
        "tiktok": "২–২৪ অক্ষর · অক্ষর, সংখ্যা, আন্ডারস্কোর, পিরিয়ড",
        "youtube": "৩–৩০ অক্ষর · অক্ষর, সংখ্যা, _, -, .",
        "threads": "১–৩০ অক্ষর · Instagram-এর সঙ্গে ভাগ করা নেমস্পেস",
        "github": "১–৩৯ অক্ষর · অক্ষর-সংখ্যা ও একক হাইফেন"
      },
      "infoTitle": "নিয়ম যাচাই ও সরাসরি যাচাই লিংক:",
      "infoBodyBefore": "উপলভ্যতা অনুমান না করে, অফলাইনেই হ্যান্ডলের সিনট্যাক্স ও অক্ষরসীমা যাচাই করে। যেকোনো প্ল্যাটফর্মের",
      "infoEm": "প্রোফাইল URL খুলুন",
      "infoBodyAfter": "লিংকে ক্লিক করে লাইভ দাবির অবস্থা সরাসরি যাচাই করুন।",
      "labelBrand": "ব্র্যান্ড, প্রোজেক্ট বা ক্রিয়েটরের নাম",
      "phBrand": "যেমন Utility Hub",
      "labelActive": "যাচাই করার জন্য সক্রিয় হ্যান্ডল",
      "copyAt": "@ কপি করুন",
      "variationsTitle": "সঙ্গতিপূর্ণ হ্যান্ডল বৈচিত্র্য:",
      "thPlatform": "প্ল্যাটফর্ম",
      "thRules": "ফরম্যাট নিয়ম",
      "thStatus": "সিনট্যাক্স অবস্থা",
      "thCheck": "ম্যানুয়াল যাচাই",
      "valid": "বৈধ ফরম্যাট",
      "invalid": "অবৈধ সিনট্যাক্স/দৈর্ঘ্য",
      "checkUrl": "URL যাচাই করুন"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "বোল্ড (Sans-Serif)",
        "sans-italic": "ইটালিক (Sans-Serif)",
        "sans-bold-italic": "বোল্ড ইটালিক (Sans-Serif)",
        "serif-bold": "বোল্ড (Serif)",
        "monospace": "মনোস্পেস",
        "double-struck": "ডাবল-স্ট্রাক (ব্ল্যাকবোর্ড)",
        "script-bold": "স্ক্রিপ্ট বোল্ড",
        "fraktur-bold": "ফ্র্যাকটুর বোল্ড",
        "small-caps": "স্মল ক্যাপস",
        "fullwidth": "ফুলউইডথ অ্যাসথেটিক"
      },
      "styleNotes": {
        "sans-bold": "বায়ো হেডার ও পোস্ট হুকের জন্য পরিষ্কার পাঠযোগ্য",
        "sans-italic": "ক্যাপশনে হালকা জোর",
        "sans-bold-italic": "শক্তিশালী কলআউট ও সেকশন ডিভাইডার",
        "serif-bold": "সম্পাদকীয় ধাঁচের জোর",
        "monospace": "কোড হ্যান্ডল, তারিখ ও কারিগরি ট্যাগ",
        "double-struck": "প্রদর্শন অক্ষর",
        "script-bold": "সাজানো বায়ো স্বাক্ষর",
        "fraktur-bold": "গথিক প্রদর্শন অক্ষর",
        "small-caps": "পরিষ্কার বড়-অক্ষরের মতো প্রোফাইল লেবেল",
        "fullwidth": "চওড়া ফাঁকসহ রেট্রো সোশ্যাল হেডার"
      },
      "sampleText": "নতুন ক্রিয়েটর টুলকিট ২০২৫",
      "accessibilityTitle": "অ্যাক্সেসিবিলিটি নোট:",
      "accessibilityBody": "স্টাইল করা Unicode অক্ষর গাণিতিক চিহ্ন ব্লক থেকে আসে, তাই স্ক্রিন রিডার সেগুলোকে অক্ষর-দর-অক্ষর পড়তে পারে বা বাদ দিতে পারে, আর কিছু সার্চ ইনডেক্স সেগুলো উপেক্ষা করে। পুরো অনুচ্ছেদের বদলে ছোট হাইলাইটের জন্য কম ব্যবহার করুন।",
      "labelInput": "স্টাইল করার টেক্সট",
      "placeholder": "ছোট হেডলাইন, বায়ো লাইন বা CTA লিখুন...",
      "previewEmpty": "প্রিভিউ"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagram বায়ো",
        "linkedinPost": "LinkedIn পোস্ট",
        "newsletter": "নিউজলেটার",
        "youtubeDescription": "YouTube বিবরণ"
      },
      "presetsLabel": "দ্রুত চ্যানেল প্রিসেট:",
      "errorEmpty": "গন্তব্য ওয়েবসাইট URL দিন।",
      "errorInvalid": "বৈধ গন্তব্য URL দিন (যেমন https://example.com/landing)।",
      "labelUrl": "ওয়েবসাইট গন্তব্য URL *",
      "labelSource": "ক্যাম্পেইন উৎস (utm_source) *",
      "phSource": "যেমন instagram, newsletter, google",
      "labelMedium": "ক্যাম্পেইন মাধ্যম (utm_medium) *",
      "phMedium": "যেমন social, cpc, email, video",
      "labelCampaign": "ক্যাম্পেইন নাম (utm_campaign)",
      "phCampaign": "যেমন spring_launch",
      "labelContent": "ক্যাম্পেইন কনটেন্ট (utm_content)",
      "phContent": "যেমন hero_banner, bio_button",
      "labelTerm": "ক্যাম্পেইন শব্দ (utm_term)",
      "phTerm": "ঐচ্ছিক পেইড কীওয়ার্ড বা অডিয়েন্স ট্যাগ",
      "normalizeLabel": "ছোট অক্ষর জোর করুন এবং স্পেসকে আন্ডারস্কোর (`_`) দিয়ে বদলান",
      "generatedTitle": "তৈরি করা ক্যাম্পেইন URL",
      "copyUtm": "UTM URL কপি করুন",
      "thParam": "কোয়েরি প্যারামিটার",
      "thValue": "স্বাভাবিক করা মান"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "শুরুর পেজ নম্বর ১ বা তার বেশি পূর্ণসংখ্যা হতে হবে।",
      "stampedSuccess": (n: number, size: string) => `${n}টি পেজে পেজ নম্বর বসানো হয়েছে (${size})।`,
      "pageOfLabel": (cur: number, total: number) => `পেজ ${cur} / ${total}`,
      "dropTitleEmpty": "পেজ নম্বর যোগ করার জন্য PDF ফাইল বেছে নিন",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages}টি পেজ)`,
      "dropSub": "রিপোর্ট, চুক্তি ও প্যাকেটে পরিষ্কার ভেক্টর পেজ লেবেল বসায়",
      "labelPos": "অবস্থান",
      "optBottomCenter": "নিচে মাঝখানে",
      "optBottomRight": "নিচে ডানে",
      "optBottomLeft": "নিচে বামে",
      "optTopRight": "উপরে ডানে",
      "labelFmt": "লেবেল ফরম্যাট",
      "optPageOf": "পেজ ১ / N",
      "optSlash": "১ / N",
      "optNumberOnly": "১, ২, ৩...",
      "labelStart": "শুরুর নম্বর",
      "labelSize": "ফন্ট সাইজ (pt)",
      "opt9": "৯ pt (হালকা)",
      "opt11": "১১ pt (মানক)",
      "opt14": "১৪ pt (বড়)",
      "skipCover": "কভার পেজ বাদ দিন (নম্বর দেওয়া পেজ ২ থেকে শুরু করুন)",
      "numbering": "পেজে নম্বর বসানো হচ্ছে...",
      "addBtn": "পেজ নম্বর যোগ করুন ও ডাউনলোড করুন"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `ইমেজ "${name}" ডিকোড করা যায়নি।`,
      "errCanvas": "Canvas 2D কনটেক্সট উপলভ্য নয়।",
      "errConvert": (name: string) => `"${name}"-কে PNG-তে বদলানো যায়নি।`,
      "errNotImage": (name: string) => `"${name}" সমর্থিত ইমেজ ফাইল নয় (PNG, JPG, WebP)।`,
      "errRead": (name: string) => `"${name}" পড়া যায়নি।`,
      "errLoad": "ইমেজ লোড করা যায়নি।",
      "errEmpty": "আগে অন্তত একটি ইমেজ যোগ করুন।",
      "errBuild": "ইমেজকে PDF-তে বদলানো যায়নি।",
      "createdSuccess": (n: number, size: string) => `${n} পেজের PDF পরিষ্কারভাবে তৈরি হয়েছে (${size})।`,
      "dropTitle": "PNG, JPG বা WebP ইমেজ বেছে নিন",
      "dropSub": "স্ক্রিনশট, স্ক্যান বা ছবিকে লোকালি এক PDF-এ বদলান",
      "labelSize": "PDF পেজ সাইজ",
      "optA4": "A4 পোর্ট্রেট (210 × 297 mm)",
      "optLetter": "US Letter (8.5 × 11 in)",
      "optFit": "ইমেজের সঠিক মাত্রা",
      "labelMargin": "পেজ মার্জিন",
      "optMargin0": "কোনো মার্জিন নেই (০ pt)",
      "optMargin24": "মানক মার্জিন (২৪ pt)",
      "optMargin48": "চওড়া মার্জিন (৪৮ pt)",
      "labelOut": "আউটপুট ফাইলের নাম",
      "moveUp": (name: string) => `${name} উপরে নিন`,
      "moveDown": (name: string) => `${name} নিচে নিন`,
      "removeFile": (name: string) => `${name} সরান`,
      "building": "PDF তৈরি হচ্ছে...",
      "convertBtn": (n: number) => `${n}টি ইমেজ PDF-তে বদলান`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "বেছে নেওয়া PDF ফাইলগুলো পড়া যায়নি।",
      "errMin2": "মার্জ করতে অন্তত দুটি PDF ফাইল যোগ করুন।",
      "mergedSuccess": (n: number, pages: number, size: string) => `${n}টি PDF পরিষ্কারভাবে মার্জ হয়েছে (${pages}টি পেজ, ${size})।`,
      "dropValidating": "PDF ফাইল যাচাই করা হচ্ছে...",
      "dropTitle": "একাধিক PDF ফাইল বেছে নিন বা ছাড়ুন",
      "dropSub": "১০০% ব্রাউজার-সাইড মার্জিং, pdf-lib দিয়ে · শুধু এনক্রিপশনহীন PDF · কখনো আপলোড হয় না",
      "filesQueued": "ফাইল সারিতে আছে",
      "totalPagesLabel": "মোট পেজ",
      "combinedSize": "সম্মিলিত ইনপুট সাইজ",
      "clearQueue": "সারি পরিষ্কার করুন",
      "pageSingular": "পেজ",
      "pagePlural": "পেজ",
      "moveUp": (name: string) => `${name} উপরে নিন`,
      "moveDown": (name: string) => `${name} নিচে নিন`,
      "removeFile": (name: string) => `${name} সরান`,
      "outName": "আউটপুট ফাইলের নাম",
      "merging": "PDF মার্জ হচ্ছে...",
      "mergeBtn": (n: number) => `${n}টি PDF মার্জ করুন ও ডাউনলোড করুন`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "বদলানো যায় এমন মেটাডেটা ফিল্ড পরিষ্কার করা হয়েছে। প্রয়োগ করতে Save & Download PDF-তে ক্লিক করুন।",
      "savedSuccess": (size: string) => `আপডেট করা PDF মেটাডেটা সংরক্ষণ করা হয়েছে (${size})।`,
      "dropTitleEmpty": "মেটাডেটা দেখতে বা বদলাতে PDF ফাইল বেছে নিন",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages}টি পেজ · ${size})`,
      "dropSub": "নথির বৈশিষ্ট্য দেখুন, লেখক/সফটওয়্যার ট্যাগ পরিষ্কার করুন, বা পরিষ্কার SEO টাইটেল সেট করুন",
      "labelTitle": "নথির টাইটেল",
      "labelAuthor": "লেখক",
      "labelSubject": "বিষয় / সারাংশ",
      "labelKeywords": "কীওয়ার্ড (কমা দিয়ে আলাদা করুন)",
      "labelCreator": "তৈরি করা অ্যাপ্লিকেশন",
      "labelProducer": "PDF প্রোডিউসার",
      "saving": "PDF সংরক্ষণ করা হচ্ছে...",
      "saveBtn": "মেটাডেটা সংরক্ষণ করুন ও PDF ডাউনলোড করুন",
      "stripBtn": "বদলানো যায় এমন ফিল্ড পরিষ্কার করুন"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "ঘোরানোর জন্য কোনো মিলে যাওয়া পেজ পাওয়া যায়নি।",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `${b}টির মধ্যে ${a}টি পেজ ${deg}° দক্ষিণাবর্তে ঘোরানো হয়েছে (${size})।`,
      "dropTitleEmpty": "পেজ ঘোরাতে PDF ফাইল বেছে নিন",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages}টি পেজ)`,
      "dropSub": "সার্ভার আপলোড ছাড়াই, লোকালি সব পেজ বা বেছে নেওয়া পেজ-সীমা ঘোরান",
      "labelAngle": "ঘোরানোর কোণ",
      "opt90": "৯০° দক্ষিণাবর্তে (ডানে)",
      "opt270": "৯০° বামাবর্তে (বামে / ২৭০°)",
      "opt180": "১৮০° উল্টো",
      "labelScope": "কিসের উপর প্রয়োগ করবেন",
      "optAll": (n: number) => `সব পেজ (${n}টি)`,
      "optRange": "নির্দিষ্ট পেজ-সীমা",
      "optOdd": "শুধু বিজোড় পেজ",
      "optEven": "শুধু জোড় পেজ",
      "labelRangeInput": (n: number) => `পেজ নম্বর / সীমা (১–${n})`,
      "phRange": "যেমন ১, ৩-৫",
      "rotating": "পেজ ঘোরানো হচ্ছে...",
      "rotateBtn": "ঘোরানো প্রয়োগ করুন ও PDF ডাউনলোড করুন"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- পেজ ${n} ---`,
      "dropExtracting": "PDF টেক্সট লেয়ার বের করা হচ্ছে...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages}টি পেজ)`,
      "dropTitleEmpty": "টেক্সট বের করতে টেক্সট-ভিত্তিক PDF বেছে নিন",
      "dropSub": "PDF.js দিয়ে লোকালি এমবেডেড Unicode টেক্সট বের করে · কোনো সার্ভার আপলোড নেই",
      "noTextTitle": "বেছে নেওয়ার মতো টেক্সট লেয়ার পাওয়া যায়নি:",
      "noTextBody": "এই PDF-এ স্ক্যান করা ইমেজ বা আউটলাইন করা ভেক্টর পাথ আছে বলে মনে হচ্ছে, এমবেডেড টেক্সট লেয়ার নেই। অফলাইন ক্লায়েন্ট-সাইড অপটিক্যাল ক্যারেক্টার শনাক্তকরণ (OCR) করা হয় না।",
      "markersLabelBefore": "পেজ হেডার মার্কার অন্তর্ভুক্ত করুন (",
      "markersCode": "--- পেজ N ---",
      "markersLabelAfter": ")",
      "copyText": "টেক্সট কপি করুন",
      "downloadTxt": ".txt ডাউনলোড করুন",
      "outputAria": "বের করা PDF টেক্সট আউটপুট",
      "pagesScanned": "স্ক্যান করা পেজ:",
      "wordsExtracted": "বের করা শব্দ:",
      "textSize": "টেক্সট সাইজ:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "ব্রাউজার ক্যানভাস মেমরি দ্রুত ও প্রতিক্রিয়াশীল রাখতে এক ব্যাচে সর্বোচ্চ ২০টি পেজ রেন্ডার করুন।",
      "errCanvas": "Canvas 2D কনটেক্সট উপলভ্য নয়।",
      "dropTitleEmpty": "ইমেজ হিসেবে রেন্ডার করতে PDF বেছে নিন",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages}টি পেজ · ${size})`,
      "dropSub": "PDF.js ক্যানভাস দিয়ে লোকাল রেন্ডার · PNG বা JPG আউটপুট",
      "labelRange": "পেজ (“all” বা ১-৪, ৬-এর মতো সীমা)",
      "labelFormat": "ইমেজ ফরম্যাট",
      "optPng": "PNG (ক্ষতিহীন / পরিষ্কার টেক্সট)",
      "optJpg": "JPG (কমপ্যাক্ট, ছবির জন্য ভালো)",
      "labelScale": "রেন্ডার রেজোলিউশন",
      "optScale1": "১.০× (৭২ DPI দ্রুত প্রিভিউ)",
      "optScale15": "১.৫× (১০৮ DPI মানক)",
      "optScale2": "২.০× (১৪৪ DPI তীক্ষ্ণ)",
      "rendering": "PDF পেজ রেন্ডার হচ্ছে...",
      "renderBtn": "PDF পেজ ইমেজে রেন্ডার করুন",
      "pageAlt": (n: number) => `পেজ ${n} প্রিভিউ`,
      "pageLabel": (n: number, w: number, h: number) => `পেজ ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "নিরপেক্ষ ধূসর",
        "indigo": "ব্র্যান্ড ইনডিগো",
        "red": "স্ট্যাম্প লাল"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "PDF বানানোর আগে ওয়াটারমার্ক টেক্সট দিন।",
      "appliedSuccess": (text: string, n: number, size: string) => `"${text}" ওয়াটারমার্ক ${n}টি পেজে লাগানো হয়েছে (${size})।`,
      "dropTitleEmpty": "ওয়াটারমার্ক লাগাতে PDF ফাইল বেছে নিন",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages}টি পেজ)`,
      "dropSub": "pdf-lib দিয়ে লোকালি পরিষ্কার ভেক্টর টেক্সট স্ট্যাম্প লাগায়",
      "labelText": "ওয়াটারমার্ক টেক্সট",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "স্ট্যাম্পের রং",
      "firstPageOnly": "শুধু প্রথম পেজ",
      "labelSize": "ফন্ট সাইজ:",
      "ptSuffix": (n: number) => `${n} pt`,
      "labelOpacity": "অস্বচ্ছতা:",
      "labelAngle": "ঘোরানো:",
      "applying": "PDF-এ ওয়াটারমার্ক লাগানো হচ্ছে...",
      "applyBtn": "ওয়াটারমার্ক লাগান ও ডাউনলোড করুন"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF-এ অন্তত ১টি পেজ থাকতে হবে।",
      "savedSuccess": (n: number, size: string) => `${n} পেজের আপডেট করা PDF সংরক্ষণ করা হয়েছে (${size})।`,
      "loading": "PDF পেজ ও প্রিভিউ লোড হচ্ছে...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n}টি পেজ সক্রিয়)`,
      "dropTitleEmpty": "পেজের ক্রম বদলাতে বা সরাতে PDF ফাইল বেছে নিন",
      "dropSub": "লোকালি পেজ সরান, শিট ডুপ্লিকেট করুন বা অপ্রয়োজনীয় পেজ সরান",
      "outCount": "আউটপুট পেজ সংখ্যা:",
      "saving": "PDF সংরক্ষণ করা হচ্ছে...",
      "saveBtn": "ক্রম বদলানো PDF সংরক্ষণ করুন",
      "thumbAlt": (n: number) => `মূল পেজ ${n}`,
      "thumbFallback": (n: number) => `মূল পৃ. ${n}`,
      "posLabel": (n: number) => `অবস্থান #${n}`,
      "origLabel": (n: number) => `(মূল ${n})`,
      "moveEarlierTitle": "আগে নিন",
      "moveEarlierAria": (n: number) => `অবস্থান ${n} আগে নিন`,
      "moveLaterTitle": "পরে নিন",
      "moveLaterAria": (n: number) => `অবস্থান ${n} পরে নিন`,
      "dupTitle": "পেজ ডুপ্লিকেট করুন",
      "dupAria": (n: number) => `অবস্থান ${n}-এর পেজ ডুপ্লিকেট করুন`,
      "delTitle": "পেজ সরান",
      "delAria": (n: number) => `অবস্থান ${n}-এর পেজ সরান`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `বার্স্ট স্প্লিটে প্রতিটি পেজের আলাদা ফাইল ডাউনলোড হয়। ২৫ পেজের বড় নথির (${n}টি পেজ এখানে) জন্য সীমা বের করুন, যাতে ব্রাউজার বাল্ক ডাউনলোড ব্লক না করে।`,
      "exportedAll": (n: number) => `${n}টি এক-পেজের PDF ফাইল এক্সপোর্ট হয়েছে।`,
      "errNoMatch": "ওই নির্বাচন থেকে কোনো পেজ মেলেনি (যেমন, জোড় পেজের জন্য ২+ পেজ লাগে)।",
      "extractedSuccess": (a: number, b: number, size: string) => `${b}টির মধ্যে ${a}টি পেজ বের করা হয়েছে (${size})।`,
      "dropTitleEmpty": "স্প্লিট বা বের করতে PDF ফাইল বেছে নিন",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages}টি পেজ · ${size})`,
      "dropSub": "মেমরিতে লোকাল প্রসেস · নথি বদলাতে ক্লিক করুন",
      "modeRange": "পেজ-সীমা বের করুন",
      "modeOdd": "শুধু বিজোড় পেজ",
      "modeEven": "শুধু জোড় পেজ",
      "modeBurst": "সব আলাদা পেজ বের করুন",
      "labelRange": (n: number) => `বের করার পেজ (১–${n})`,
      "phRange": "যেমন ১-৩, ৫, ৮-১০",
      "rangeHintBefore": "কমা ও হাইফেন ব্যবহার করুন (যেমন ",
      "rangeHintAfter": ")।",
      "extracting": "PDF বের করা হচ্ছে...",
      "splitBtn": "স্প্লিট করুন ও PDF ডাউনলোড করুন"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "ওয়েবসাইট URL",
      "tabText": "সাধারণ টেক্সট",
      "tabWifi": "Wi-Fi নেটওয়ার্ক",
      "tabEmail": "ইমেইল লিংক",
      "tabPhone": "ফোন নম্বর",
      "labelUrl": "গন্তব্য URL",
      "labelText": "টেক্সট কনটেন্ট",
      "labelSsid": "নেটওয়ার্কের নাম (SSID)",
      "labelSecurity": "নিরাপত্তার ধরন",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "খোলা (কোনো পাসওয়ার্ড নেই)",
      "labelWifiPass": "Wi-Fi পাসওয়ার্ড",
      "hiddenSsid": "লুকানো SSID নেটওয়ার্ক",
      "labelEmailTo": "প্রাপকের ইমেইল",
      "labelEmailSubject": "বিষয় (ঐচ্ছিক)",
      "labelPhone": "ফোন নম্বর (E.164 ফরম্যাট প্রস্তাবিত)",
      "sizeLabel": (size: number) => `সাইজ (${size}px)`,
      "labelEc": "ত্রুটি সংশোধন",
      "labelFg": "সামনের রং",
      "labelBg": "পেছনের রং",
      "quietZone": "শান্ত অঞ্চল মার্জিন:",
      "modulesLabel": (margin: number) => `${margin}টি মডিউল`,
      "encodedPayload": "এনকোডেড পেলোড স্ট্রিং",
      "copyPayload": "পেলোড কপি করুন",
      "emptyError": "স্ক্যান করা যায় এমন QR কোড বানাতে উপরে কনটেন্ট দিন।",
      "encodeError": "QR পেলোড এনকোড করা যায়নি।",
      "qrAlt": "তৈরি করা স্ক্যানযোগ্য QR কোড",
      "downloadPng": "PNG ডাউনলোড করুন",
      "downloadSvg": "SVG ডাউনলোড করুন",
      "copySvg": "SVG কপি করুন",
      "sampleText": "UtilityFlow-এ আপনাকে স্বাগতম!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "মানক পোস্ট",
        "profileBio": "প্রোফাইল বায়ো",
        "caption": "ক্যাপশন",
        "feedPost": "ফিড পোস্ট",
        "videoCaption": "ভিডিও ক্যাপশন",
        "post": "পোস্ট",
        "videoTitle": "ভিডিও টাইটেল",
        "description": "বিবরণ"
      },
      "sampleText": "দ্রুত শিপিং শুরু হয় ছোট ছোট প্রতিদিনের উন্নতি দিয়ে।\n\nআমাদের ব্রাউজার-ভিত্তিক ক্রিয়েটর ইউটিলিটি https://utilityflow.online/tools/-এ চেষ্টা করুন — সাইন-আপ ছাড়াই।\n\n#CreatorTools #Workflow",
      "labelInput": "সোশ্যাল পোস্ট / বায়ো খসড়া",
      "copyDraft": "খসড়া কপি করুন",
      "placeholder": "আপনার সোশ্যাল ক্যাপশন, পোস্ট, বায়ো বা YouTube টাইটেল লিখুন বা পেস্ট করুন...",
      "charsLabel": "অক্ষর:",
      "wordsLabel": "শব্দ:",
      "hashtagsLabel": "হ্যাশট্যাগ:",
      "mentionsLabel": "মেনশন:",
      "urlsLabel": "পাওয়া URL:",
      "urlsWeighted": "(X-এ ২৩ অক্ষরের সমান)",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} সীমার বেশি`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} বাকি`,
      "foldLabel": (n: number) => `ফোল্ড ~${n} অক্ষর`,
      "foldTitle": "ফিড ট্রাঙ্কেশন / “See More” ফোল্ড প্রিভিউ",
      "foldDesc": (limit: number, platform: string, surface: string) => `“See more” চাপার আগে পাঠক কী দেখেন, তার প্রিভিউ (${platform} ${surface}-এর জন্য ${limit} অক্ষর)।`,
      "selectAria": "ট্রাঙ্কেশন প্রিভিউ প্ল্যাটফর্ম বেছে নিন",
      "previewEmpty": "প্রিভিউ এখানে দেখা যাবে..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "ট্র্যাকিং ছাড়া ৮৩টি দ্রুত ব্রাউজার ইউটিলিটি কীভাবে বানালাম",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "২৪K ভিউ · ২ দিন আগে",
      "errNotImage": "অনুগ্রহ করে PNG, JPG বা WebP ইমেজ ফাইল বেছে নিন।",
      "errDecode": "ব্রাউজারে এই ইমেজ ফাইল ডিকোড করা যায়নি।",
      "previewEyebrow": "1280 × 720 প্রিভিউ",
      "emptyThumb": "ফিড পাঠযোগ্যতা যাচাই করতে আপনার থাম্বনেইল আপলোড করুন",
      "thumbAlt": "আপলোড করা থাম্বনেইলের প্রিভিউ",
      "safeZoneTitle": "টাইমস্ট্যাম্প ব্যাজ ওভারল্যাপ এলাকা",
      "chooseThumb": "লোকাল থাম্বনেইল বেছে নিন (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `বদলান: ${name}`,
      "recommended": "1280×720 (16:9) প্রস্তাবিত, ২ MB-এর কম · কখনো আপলোড হয় না",
      "diagTitle": "ইমেজ স্পেসিফিকেশন যাচাই",
      "dimLabel": "মাত্রা",
      "dimHdOk": "(HD ঠিক আছে)",
      "dimUnder": "(<1280px)",
      "aspectLabel": "অ্যাসপেক্ট অনুপাত",
      "aspectMatch": "16:9 মিলেছে",
      "aspectNo": "16:9 নয় (ক্রপ/লেটারবক্স হতে পারে)",
      "sizeLabel": "ফাইলের সাইজ",
      "sizeOk": "(<২ MB ঠিক আছে)",
      "sizeOver": "(>২ MB সীমা)",
      "titleLabel": (len: number) => `ভিডিও টাইটেল (${len}/১০০ অক্ষর · মোবাইলে ~৬০টি দেখা যায়)`,
      "channelLabel": "চ্যানেলের নাম",
      "durationLabel": "সময়কাল",
      "darkMode": "ডার্ক মোড ফিড প্রিভিউ",
      "safeZone": "টাইমস্ট্যাম্প কোণার এলাকা হাইলাইট করুন",
      "desktopCard": "ডেস্কটপ হোম ফিড কার্ড",
      "sidebar": "ডেস্কটপ ওয়াচ সাইডবার (কমপ্যাক্ট প্রস্তাবিত)",
      "untitled": "শিরোনামহীন ভিডিও"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "ভূমিকা ও সংক্ষিপ্ত বিবরণ"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "মূল আর্কিটেকচার সেটআপ"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "লাইভ ডেমো ও সাধারণ ভুল"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "সারাংশ ও পরের ধাপ"
        }
      ],
      "newChapter": (n: number) => `অধ্যায় ${n}`,
      "defaultChapterTitle": "অধ্যায়",
      "warnInvalid": "এক বা বেশি টাইমস্ট্যাম্পের ফরম্যাট অবৈধ (MM:SS বা HH:MM:SS ব্যবহার করুন)।",
      "warnMin3": "ভিডিও চ্যাপ্টার চালু করতে YouTube-এর ক্রমবর্ধমান ক্রমে অন্তত ৩টি টাইমস্ট্যাম্প লাগে।",
      "warnFirst": "YouTube চ্যাপ্টার চিনতে পারার জন্য প্রথম অধ্যায় ০০:০০ থেকে শুরু হতে হবে।",
      "warnOrder": "অধ্যায় কালানুক্রমের বাইরে আছে (কালানুক্রমে সাজান-এ ক্লিক করুন)।",
      "warnShort": (title: string) => `অধ্যায় "${title}" আগের অধ্যায়ের পর ১০ সেকেন্ডের কম (YouTube-এর সর্বনিম্ন ১০ সেকেন্ড)।`,
      "labelUrl": "YouTube ভিডিও URL বা ভিডিও ID (সরাসরি `?t=` ডিপ লিংকের জন্য)",
      "heading": "ভিডিও অধ্যায়",
      "sortBtn": "কালানুক্রমে সাজান",
      "addBtn": "অধ্যায় যোগ করুন",
      "tsAria": (n: number) => `অধ্যায় ${n}-এর টাইমস্ট্যাম্প`,
      "titleAria": (n: number) => `অধ্যায় ${n}-এর টাইটেল`,
      "phTitle": "অধ্যায়ের টাইটেল",
      "removeAria": (n: number) => `অধ্যায় ${n} সরান`,
      "specTitle": "YouTube চ্যাপ্টার স্পেসিফিকেশন যাচাই:",
      "descBlock": "বিবরণ অধ্যায় ব্লক",
      "copyChapters": "অধ্যায় কপি করুন",
      "emptyChapters": "বিবরণ ব্লক বানাতে উপরে অধ্যায় যোগ করুন।",
      "shareTitle": "টাইমস্ট্যাম্পসহ শেয়ার লিংক",
      "videoIdLabel": (id: string) => `(ভিডিও ID: ${id})`,
      "noVideoId": "(উপরে বৈধ YouTube URL দিন)",
      "noVideoHint": "প্রতিটি অধ্যায়ের জন্য ক্লিকযোগ্য `?t=` জাম্প লিংক বানাতে বৈধ youtube.com বা youtu.be URL পেস্ট করুন।"
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "কোনো ফাইল বেছে নেওয়া হয়নি।",
      "notPdf": (name: string) => `"${name}" PDF ফাইল বলে মনে হচ্ছে না।`,
      "empty": (name: string) => `"${name}" খালি বা অসম্পূর্ণ।`,
      "noHeader": (name: string) => `"${name}"-এ বৈধ %PDF হেডার নেই এবং এটি প্রসেস করা যাবে না।`,
      "enterRanges": "পেজ নম্বর বা সীমা দিন, যেমন \"১-৩, ৫\"।",
      "rangeOutside": (token: string, total: number) => `সীমা "${token}" নথির ১–${total} পেজ সীমার বাইরে।`,
      "rangeReversed": (token: string) => `সীমা "${token}"-এর শুরুর পেজ শেষের পেজের চেয়ে বড়।`,
      "pageMissing": (page: number, total: number) => `পেজ ${page} নেই (নথিতে ${total}টি পেজ আছে)।`,
      "invalidSyntax": (token: string) => `অবৈধ পেজ সিনট্যাক্স "${token}"। "১-৩, ৫"-এর মতো নম্বর ও সীমা ব্যবহার করুন।`,
      "encrypted": "এই PDF এনক্রিপ্ট করা বা পাসওয়ার্ড দিয়ে সুরক্ষিত। লোকালি প্রসেস করার আগে এটি আনলক করুন।",
      "unable": "PDF ফাইল প্রসেস করা যায়নি।",
      "allKeywords": ["all", "সব", "সকল"]
    }
  }
};
