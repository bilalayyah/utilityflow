import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the ur locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the ur locale is selected.
 */
export const urComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "وہ متن جس کا انداز بدلنا ہے",
      "placeholder": "متن لکھیں یا پیسٹ کریں، پھر نیچے کسی بھی انداز کے بٹن پر کلک کریں...",
      "copyResult": "نتیجہ کاپی کریں"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "واضح اور مختصر متن لکھیں جو ہر پلیٹفارم کی کریکٹر حد میں آ جائے — تاکہ سرچ رزلٹ یا سوشل میڈیا میں عجیب انداز میں کٹ نہ جائے۔",
      "withSpaces": "خالی جگہوں سمیت",
      "withoutSpaces": "خالی جگہوں کے بغیر",
      "words": "الفاظ",
      "letters": "حروف",
      "digits": "ہندسے",
      "utf8Bytes": "UTF-8 بائٹس",
      "copyText": "متن کاپی کریں",
      "textToMeasure": "وہ متن جس کی لمبائی حروف میں ناپنی ہے",
      "placeholder": "متن لکھیں یا پیسٹ کریں تاکہ حروف کی درست تعداد، بائٹ سائز اور پلیٹفارم کی حدیں نظر آئیں...",
      "whitespaceChars": "خالی جگہ کے حروف",
      "lines": "لائنیں",
      "platformLimitsTitle": "پلیٹفارمز اور SEO کی کریکٹر حدیں",
      "over": "زیادہ",
      "left": "باقی",
      "platformLimits": [
        {
          "name": "SEO عنوان",
          "note": "گوگل سرچ رزلٹ میں عنوان کی تجویز کردہ لمبائی"
        },
        {
          "name": "SEO تفصیل",
          "note": "ڈیسک ٹاپ سنیپٹ کی عام حد"
        },
        {
          "name": "SMS کا حصہ",
          "note": "GSM-7 کی ایک SMS"
        },
        {
          "name": "X / ٹوئٹر پوسٹ",
          "note": "پوسٹ کی عام لمبائی"
        },
        {
          "name": "انسٹاگرام کیپشن کا پیش نظارہ",
          "note": "«مزید» سے پہلے نظر آنے والا حصہ"
        },
        {
          "name": "لنکڈان پوسٹ",
          "note": "فیڈ اپ ڈیٹ کی زیادہ سے زیادہ عام لمبائی"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "تلاش کریں",
      "replaceWith": "اس سے بدل دیں",
      "findPlaceholder": "تلاش کرنے والا متن...",
      "replacePlaceholder": "متبادل متن...",
      "caseSensitive": "حروف کے انداز کا خیال رکھیں",
      "wholeWordOnly": "صرف مکمل الفاظ",
      "useRegex": "ریگولر ایکسپریشن (RegExp) استعمال کریں",
      "regexError": "ریگولر ایکسپریشن میں خرابی:",
      "invalidRegex": "غلط ریگولر ایکسپریشن۔",
      "sourceText": "اصل متن",
      "updatedOutput": "تبدیلی کے بعد کا نتیجہ",
      "match": "مماثلت",
      "matches": "مماثلتیں",
      "replaced": "بدل دی گئیں",
      "sourcePlaceholder": "تلاش اور تبدیلی کے لیے متن پیسٹ کریں...",
      "outputPlaceholder": "تبدیلی کے بعد متن یہاں نظر آئے گا...",
      "copyResult": "نتیجہ کاپی کریں"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "لائن کا سابقہ",
      "lineSuffix": "لائن کا لاحقہ",
      "startNumber": "شروع کا نمبر",
      "numberSeparator": "نمبر کا جداکار",
      "addLineNumbers": "لائن نمبر شامل کریں",
      "zeroPad": "شروع میں صفر لگائیں (01، 02)",
      "skipEmptyLines": "خالی لائنیں چھوڑ دیں",
      "inputLines": "ان پٹ لائنیں",
      "formattedLines": "فارمیٹ شدہ لائنیں",
      "copyResult": "نتیجہ کاپی کریں",
      "inputPlaceholder": "ہر لائن میں ایک قیمت یا سطر پیسٹ کریں...",
      "outputPlaceholder": "نمبر والی یا لپیٹی ہوئی لائنیں یہاں نظر آئیں گی..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "مقدار",
      "unit": "اکائی",
      "unitLabels": {
        "paragraphs": "پیراگراف",
        "sentences": "جملے",
        "words": "الفاظ"
      },
      "startClassic": "«Lorem ipsum» سے شروع کریں",
      "wrapHtml": "<p> ٹیگ میں لپیٹیں",
      "words": "الفاظ",
      "characters": "حروف",
      "regenerate": "دوبارہ بنائیں",
      "copyPlaceholder": "عارضی متن کاپی کریں",
      "generatedText": "بنایا گیا عارضی متن"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow ریلیز نوٹس\n\n**مارک ڈاؤن پری ویوور** میں خوش آمدید — براؤزر میں چلنے والا تیز ایڈیٹر جس میں HTML براہ راست ایکسپورٹ ہوتا ہے۔\n\n## اہم خصوصیات\n\n- سرخیوں، فہرستوں اور لنکس کی فوری فارمیٹنگ\n- بغیر کسی ریموٹ اپ لوڈ کے محفوظ HTML انکوڈنگ\n- خام HTML ایک کلک میں کاپی اور ڈاؤن لوڈ کریں\n\n> اپنی دستاویزات اپنے کام کے قریب رکھیں اور شائع کرنے سے پہلے ان کی ساخت چیک کریں۔\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nمزید جانیں [UtilityFlow](/tools/) پر۔",
      "renderedPreview": "دکھایا گیا پیش نظارہ",
      "rawHtml": "خام HTML",
      "exportHtml": "HTML ایکسپورٹ کریں",
      "copyHtml": "HTML کاپی کریں",
      "markdownSource": "مارک ڈاؤن سورس",
      "livePreview": "براہ راست پیش نظارہ",
      "compiledHtml": "مرتب شدہ HTML",
      "compiledHtmlAria": "مرتب شدہ HTML کا سورس",
      "inputPlaceholder": "مارک ڈاؤن لکھیں (سرخی #، **بولڈ**، فہرست -، [لنک](https://...))...",
      "emptyPreview": "مارک ڈاؤن لکھتے ہی پیش نظارہ یہاں نظر آئے گا..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "واضح تکنیکی تحریر قاری کے وقت کا احترام کرتی ہے۔ پیچیدہ ہدایات آسان بنائیں، اور جہاں ممکن ہو ٹھوس نام اور فعال افعال استعمال کریں۔\n\nلمبے جملے جن میں اندر جملے گھسے ہوں، قاری کو پیراگراف دوبارہ پڑھنے پر مجبور کرتے ہیں۔ گھنی وضاحتوں کو چھوٹے قدموں میں توڑ دیں تاکہ دستاویز جلد اسکین ہو اور آسانی سے سمجھ آئے۔",
      "level": "سطح:",
      "textToCheck": "وہ متن جس کی پڑھنے کی آسانی جانچنی ہے",
      "placeholder": "اپنے مضمون، آرٹیکل یا لینڈنگ پیج کا متن پیسٹ کریں تاکہ Flesch Reading Ease اسکور اور گریڈ لیول معلوم ہو...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "Flesch-Kincaid گریڈ لیول",
      "usGrade": "امریکی گریڈ لیول",
      "gunningFog": "Gunning Fog انڈیکس",
      "yearsEducation": "تعلیم کے سال",
      "smog": "SMOG انڈیکس",
      "polysyllable": "کثیر المقاطع پیچیدگی",
      "structuralBreakdown": "ساختی تفصیل",
      "wordsSentences": "الفاظ / جملے",
      "avgSentenceLength": "جملے کی اوسط لمبائی",
      "words": "الفاظ",
      "avgSyllablesPerWord": "فی لفظ اوسط مقاطع",
      "complexWords": "پیچیدہ الفاظ (3+ مقاطع)",
      "longWordsDetected": "لمبے الفاظ ملے (3+ مقاطع)",
      "noLongWords": "اس اقتباس میں 3 یا زیادہ مقاطع والا کوئی لفظ نہیں ملا۔",
      "emptyState": "پڑھنے کی آسانی کے فارمولے اور ساختی تناسب دیکھنے کے لیے اوپر کم از کم ایک جملہ لکھیں۔",
      "levels": [
        {
          "level": "بہت آسان",
          "audience": "پانچویں جماعت (10–11 سال)"
        },
        {
          "level": "آسان",
          "audience": "چھٹی جماعت (11–12 سال)"
        },
        {
          "level": "کچھ آسان",
          "audience": "ساتویں جماعت (12–13 سال)"
        },
        {
          "level": "عام",
          "audience": "آٹھویں–نویں جماعت (13–15 سال)"
        },
        {
          "level": "کچھ مشکل",
          "audience": "دسویں–بارہویں جماعت"
        },
        {
          "level": "مشکل",
          "audience": "کالج لیول"
        },
        {
          "level": "بہت مشکل",
          "audience": "کالج گریجویٹ / ماہرین کا لیول"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "حروف کے انداز کا خیال رکھیں",
      "trimWhitespace": "خالی جگہیں ہٹائیں",
      "removeEmptyLines": "خالی لائنیں ہٹائیں",
      "sortAlphabetically": "حروف تہجی کے حساب سے ترتیب دیں",
      "originalLines": "اصل لائنیں",
      "lines": "لائنیں",
      "uniqueLines": "منفرد لائنیں",
      "unique": "منفرد",
      "removed": "ہٹا دی گئیں",
      "inputPlaceholder": "فہرست پیسٹ کریں، ہر لائن میں ایک آئٹم...",
      "outputPlaceholder": "دہراؤ ہٹانے کے بعد نتیجہ یہاں نظر آئے گا..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "حروف کے انداز کا خیال رکھیں",
      "ignoreBlankLines": "خالی لائنیں نظرانداز کریں",
      "removeDuplicates": "دہراؤ ہٹائیں",
      "inputLines": "ان پٹ لائنیں",
      "sortedLines": "ترتیب شدہ لائنیں",
      "copySorted": "ترتیب شدہ کاپی کریں",
      "inputPlaceholder": "ہر لائن میں ایک آئٹم لکھیں...",
      "outputPlaceholder": "ترتیب شدہ نتیجہ یہاں نظر آئے گا...",
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
          "label": "قدرتی (1، 2، 10)"
        },
        {
          "id": "length-asc",
          "label": "چھوٹا پہلے"
        },
        {
          "id": "length-desc",
          "label": "بڑا پہلے"
        },
        {
          "id": "reverse-order",
          "label": "الٹی ترتیب"
        },
        {
          "id": "shuffle",
          "label": "ملا دیں"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "خالی جگہیں نظرانداز کریں",
      "ignoreCase": "حروف کا انداز نظرانداز کریں",
      "originalText": "اصل متن",
      "modifiedText": "تبدیل شدہ متن",
      "originalPlaceholder": "اصل متن پیسٹ کریں...",
      "modifiedPlaceholder": "تبدیل شدہ متن پیسٹ کریں...",
      "lineComparison": "لائنوں کا موازنہ",
      "added": "شامل کی گئیں",
      "removed": "ہٹا دی گئیں",
      "unchanged": "بدلی نہیں",
      "emptyState": "شامل یا حذف شدہ لائنیں دیکھنے کے لیے دونوں خانوں میں متن لکھیں۔"
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "متن کی پہلی لائن\nمتن کی دوسری لائن\nمتن کی تیسری لائن",
      "originalText": "اصل متن",
      "reversedOutput": "الٹا کیا گیا نتیجہ",
      "inputPlaceholder": "الٹنے کے لیے متن یا لائنیں لکھیں...",
      "outputPlaceholder": "الٹا ہوا متن یہاں نظر آئے گا...",
      "modes": [
        {
          "id": "characters",
          "label": "حروف الٹ دیں"
        },
        {
          "id": "words",
          "label": "الفاظ کی ترتیب الٹ دیں"
        },
        {
          "id": "each-word",
          "label": "ہر لفظ الٹ دیں"
        },
        {
          "id": "lines",
          "label": "لائنوں کی ترتیب الٹ دیں"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSON آن لائن فارمیٹ کرنے کے 10 شاندار طریقے!\nکافی اور کریم: 2026 کی گائیڈ\nCloudflare Pages پر تیز جامد ویب سائٹ کیسے بنائیں",
      "hyphen": "ہائفن (-)",
      "underscore": "انڈر اسکور (_)",
      "forceLowercase": "سب کو چھوٹے حروف میں کر دیں",
      "stripStopWords": "عام الفاظ ہٹا دیں",
      "titlesLabel": "عنوان یا جملے (بلک موڈ کے لیے ہر لائن میں ایک عنوان)",
      "inputPlaceholder": "بلاگ کے عنوان، پروڈکٹ کے نام یا عنوانوں کی فہرست لکھیں...",
      "generatedSlugs": "بنائے گئے سلگ",
      "copySlugs": "سلگ کاپی کریں",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   پہلی لائن میں   اضافی   خالی جگہیں ہیں۔   \n\n   دوسری لائن   میں   ٹیب\tاور خلا ہیں۔\n\n\nتیسری لائن یہاں ہے۔   ",
      "collapseSpaces": "کئی خالی جگہوں کو ایک میں ملا دیں",
      "trimEdges": "لائن کے کنارے تراش دیں",
      "tabsToSpaces": "ٹیب کو خالی جگہوں میں بدل دیں",
      "lineBreaks": "لائن بریک:",
      "keepBreaks": "لائن بریک برقرار رکھیں",
      "removeBlankLines": "خالی لائنیں ہٹا دیں",
      "replaceWithSpaces": "خالی جگہوں سے بدل دیں",
      "removeAllBreaks": "تمام بریک ہٹا دیں",
      "inputText": "ان پٹ متن",
      "chars": "حروف",
      "cleanedText": "صاف کیا گیا متن",
      "removed": "ہٹا دی گئیں",
      "inputPlaceholder": "گندا متن پیسٹ کریں جس میں اضافی خالی جگہیں، ٹیب یا خالی لائنیں ہوں...",
      "outputPlaceholder": "صاف شدہ نتیجہ خود بخود یہاں نظر آئے گا..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow متن کی گنتی براہ راست آپ کے براؤزر میں کرتا ہے۔ چاہے آپ بلاگ کا مضمون لکھ رہے ہوں، پروڈکٹ کا اشتہار سخت کر رہے ہوں یا تعلیمی مقالے کو الفاظ کی سخت حد سے چیک کر رہے ہوں، فوری گنتی آپ کے پیغام کو واضح اور مرتب رکھتی ہے۔\n\nچھوٹے جملے اسکین کرنے میں آسان ہوتے ہیں۔ جملوں کی لمبائی میں تنوع طویل گائیڈز کو ڈیسک ٹاپ اور موبائل دونوں پر پڑھنے میں دلچسپ رکھتا ہے۔",
      "words": "الفاظ",
      "characters": "حروف",
      "noSpaces": "خالی جگہوں کے بغیر",
      "sentences": "جملے",
      "paragraphs": "پیراگراف",
      "readingTime": "پڑھنے کا وقت",
      "downloadTxt": ".txt ڈاؤن لوڈ کریں",
      "copyText": "متن کاپی کریں",
      "textToCount": "وہ متن جسے گننا ہے",
      "placeholder": "الفاظ، حروف، جملے اور پڑھنے کا وقت گننے کے لیے متن پیسٹ کریں یا لکھیں...",
      "deliveryTimingLines": "بولنے کا وقت اور لائنیں",
      "speakingTime": "بولنے کا وقت (130 الفاظ/منٹ)",
      "totalLines": "کل لائنیں",
      "avgWordLength": "لفظ کی اوسط لمبائی",
      "chars": "حروف",
      "mostFrequentWords": "سب سے زیادہ بار آنے والے الفاظ",
      "emptyKeywords": "سب سے زیادہ بار آنے والے الفاظ دیکھنے کے لیے اوپر متن لکھیں۔"
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "تکنیکی SEO کا آڈٹ کرال کی اہلیت، اندرونی لنکس اور صفحے کی رفتار سے شروع ہوتا ہے۔ تیز صفحات صارف کی دلچسپی اور موبائل سرچ میں صفحے کی رفتار کے اشارے کو بہتر بناتے ہیں۔ اندرونی لنکس متعلقہ گائیڈز کو جوڑتے ہیں اور تکنیکی SEO کی ساخت مضبوط کرتے ہیں۔",
      "ngramLabels": {
        "1": "ایک لفظ",
        "2": "دو الفاظ کے جملے",
        "3": "3 الفاظ کے جملے"
      },
      "excludeStopWords": "عام الفاظ خارج کر دیں",
      "minLength": "کم سے کم لمبائی:",
      "textForAnalysis": "وہ متن جس کا تعدد تجزیہ کرنا ہے",
      "placeholder": "دہرائے جانے والے الفاظ اور کی ورڈ ڈینسٹی گننے کے لیے مضمون، پروڈکٹ کی تفصیل یا نوٹس پیسٹ کریں...",
      "totalWords": "کل الفاظ:",
      "uniqueTerms": "منفرد اصطلاحات:",
      "exportCsv": "CSV ایکسپورٹ کریں",
      "copyCsv": "CSV کاپی کریں",
      "rank": "#",
      "termPhrase": "لفظ / جملہ",
      "count": "تعداد",
      "density": "کثافت",
      "emptyState": "الفاظ کی تعداد اور کی ورڈ ڈینسٹی کا فیصد دیکھنے کے لیے اوپر متن لکھیں۔"
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "براہ کرم درست کیلنڈر تاریخیں درج کریں۔",
      "errorDobAfterTarget": "تاریخ پیدائش ہدف کی تاریخ کے بعد نہیں ہو سکتی۔",
      "dobLabel": "تاریخ پیدائش",
      "targetLabel": "اس تاریخ کو عمر",
      "exactAge": "درست عمر",
      "yearsWord": "سال",
      "monthsWord": "مہینے",
      "daysWord": "دن",
      "nextBirthday": "اگلی سالگرہ",
      "turning": "آپ کی عمر ہو جائے گی",
      "inWord": "میں",
      "totalMonths": "کل مہینے",
      "totalWeeks": "کل ہفتے",
      "totalDays": "کل دن",
      "totalHours": "کل گھنٹے (تقریباً)",
      "monthsAbbr": "مہینہ",
      "weeksAbbr": "ہفتہ",
      "daysAbbr": "دن",
      "hoursAbbr": "گھنٹہ"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "کم وزن",
      "normalWeight": "عام وزن",
      "overweight": "زیادہ وزن",
      "obesity": "موٹاپا",
      "errorHeightMetric": "قد 50 سینٹی میٹر اور 280 سینٹی میٹر کے درمیان درج کریں۔",
      "errorWeightMetric": "وزن 15 کلوگرام اور 500 کلوگرام کے درمیان درج کریں۔",
      "errorHeightImperial": "درست قد درج کریں — 2 فٹ اور 9 فٹ کے درمیان۔",
      "errorWeightImperial": "وزن 30 پاؤنڈ اور 1100 پاؤنڈ کے درمیان درج کریں۔",
      "metricTab": "میٹرک (سینٹی میٹر / کلوگرام)",
      "imperialTab": "امپیریل (فٹ، انچ / پاؤنڈ)",
      "heightCmLabel": "قد (سینٹی میٹر)",
      "weightKgLabel": "وزن (کلوگرام)",
      "heightFtLabel": "قد (فٹ)",
      "heightInLabel": "قد (انچ)",
      "weightLbsLabel": "وزن (پاؤنڈ)",
      "bmiLabel": "باڈی ماس انڈیکس (BMI)",
      "whoCategory": "WHO کی کیٹیگری",
      "healthyRange": "BMI ‏(18.5–24.9) کے لیے صحت مند وزن کی حد",
      "disclaimer": "BMI ایک عام اسکریننگ تناسب ہے — یہ پٹھوں کے وزن اور جسم کی چربی میں فرق نہیں کرتا۔"
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "عمر 15 اور 100 سال کے درمیان درج کریں۔",
      "errorHeightMetric": "قد 100 سینٹی میٹر اور 250 سینٹی میٹر کے درمیان درج کریں۔",
      "errorWeightMetric": "وزن 30 کلوگرام اور 350 کلوگرام کے درمیان درج کریں۔",
      "errorHeightImperial": "قد 3 فٹ 4 انچ اور 8 فٹ 2 انچ کے درمیان درج کریں۔",
      "errorWeightImperial": "وزن 66 پاؤنڈ اور 770 پاؤنڈ کے درمیان درج کریں۔",
      "metricTab": "میٹرک (سینٹی میٹر / کلوگرام)",
      "imperialTab": "امپیریل (فٹ، انچ / پاؤنڈ)",
      "maleTab": "مرد",
      "femaleTab": "عورت",
      "ageLabel": "عمر (سال)",
      "heightCmLabel": "قد (سینٹی میٹر)",
      "weightKgLabel": "وزن (کلوگرام)",
      "heightFtLabel": "قد (فٹ)",
      "heightInLabel": "قد (انچ)",
      "weightLbsLabel": "وزن (پاؤنڈ)",
      "activityLabel": "سرگرمی کی سطح",
      "activitySedentary": "بیٹھا ہوا (1.2×)",
      "activitySedentaryDetail": "دفتری کام، بہت کم یا کوئی ورزش نہیں",
      "activityLight": "ہلکی سرگرمی (1.375×)",
      "activityLightDetail": "ہلکی ورزش، ہفتے میں 1–3 دن",
      "activityModerate": "معتدل سرگرمی (1.55×)",
      "activityModerateDetail": "معتدل ورزش، ہفتے میں 3–5 دن",
      "activityVery": "بہت سرگرمی (1.725×)",
      "activityVeryDetail": "سخت ورزش، ہفتے میں 6–7 دن",
      "activityExtra": "انتہائی سرگرمی (1.9×)",
      "activityExtraDetail": "جسمانی کام یا دن میں دو بار ٹریننگ",
      "maintenance": "وزن برقرار رکھنے کی کیلوریز (TDEE)",
      "mildLoss": "ہلکا وزن کم کرنا (-0.25 کلوگرام/ہفتہ)",
      "mildLossNote": "روزانہ ~250 کیلوریز کا خسارہ",
      "weightLoss": "وزن کم کرنا (-0.5 کلوگرام/ہفتہ)",
      "weightLossNote": "روزانہ ~500 کیلوریز کا خسارہ",
      "leanGain": "دبلا وزن بڑھانا",
      "leanGainNote": "روزانہ +250 کیلوریز اضافی",
      "macroHeading": "وزن برقرار رکھنے کے لیے میکرو تقسیم (حوالہ) (30% پروٹین · 40% کاربوہائیڈریٹ · 30% چربی)",
      "protein": "پروٹین",
      "carbs": "کاربوہائیڈریٹ",
      "fat": "غذائی چربی",
      "gramsPerDay": "گرام/دن",
      "disclaimer": "Mifflin-St Jeor فارمولے سے BMR کی بنیاد پر حساب کیا گیا۔ ہر شخص کی توانائی کی ضرورت جسمانی ساخت اور صحت کے لحاظ سے مختلف ہوتی ہے؛ سخت غذا شروع کرنے سے پہلے کسی مستند صحت کے ماہر سے مشورہ کریں۔"
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "ابتدائی جمع منفی نہیں ہو سکتی۔",
      "errorMonthly": "ماہانہ شراکت منفی نہیں ہو سکتی۔",
      "errorRate": "سالانہ منافع کی شرح 0% اور 100% کے درمیان ہونی چاہیے۔",
      "errorYears": "مدت 1 اور 100 سال کے درمیان ہونی چاہیے۔",
      "initialLabel": "ابتدائی رقم ($)",
      "monthlyLabel": "ماہانہ اضافہ ($)",
      "rateLabel": "سالانہ منافع (%)",
      "yearsLabel": "سال",
      "compoundingLabel": "مرکب سود",
      "dailyOption": "روزانہ (365/سال)",
      "monthlyOption": "ماہانہ (12/سال)",
      "quarterlyOption": "سہ ماہی (4/سال)",
      "annualOption": "سالانہ (1/سال)",
      "futureBalance": "مستقبل کا بیلنس",
      "totalContributed": "کل اصل رقم + جمع",
      "totalInterest": "کل مرکب سود",
      "yearHeader": "سال",
      "totalContributedHeader": "کل جمع",
      "cumulativeInterestHeader": "مجموعی سود",
      "endingBalanceHeader": "آخری بیلنس",
      "yearPrefix": "سال"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "براہ کرم شروع اور اختتام کی درست کیلنڈر تاریخیں منتخب کریں۔",
      "errorInvalidBase": "براہ کرم شروع کی درست کیلنڈر تاریخ درج کریں۔",
      "errorNonNegative": "سال، مہینوں اور دنوں کے لیے صفر یا اس سے بڑے صحیح اعداد درج کریں۔",
      "differenceTab": "دو تاریخوں کے درمیان فرق",
      "addSubtractTab": "وقت شامل / کم کریں",
      "startLabel": "شروع کی تاریخ",
      "endLabel": "اختتام کی تاریخ",
      "swapTitle": "دونوں تاریخیں بدل دیں",
      "swapAria": "شروع اور اختتام کی تاریخیں بدل دیں",
      "includeEnd": "گنتی میں اختتام کی تاریخ شامل کریں (+1 کیلنڈر دن)",
      "calendarDuration": "کیلنڈر مدت",
      "reversedRange": "(الٹی حد)",
      "totalSpan": "کل مدت:",
      "calendarDays": "کیلنڈر دن",
      "weeksDays": "ہفتے اور دن",
      "weekdays": "کام کے دن (پیر–جمعہ)",
      "weekendDays": "ہفتے کے آخر کے دن (ہفتہ–اتوار)",
      "totalHours": "کل گھنٹے",
      "yearsWord": "سال",
      "monthsWord": "مہینے",
      "daysWord": "دن",
      "weeksAbbr": "ہفتہ",
      "daysAbbr": "دن",
      "hoursAbbr": "گھنٹہ",
      "referenceLabel": "حوالہ تاریخ",
      "operationLabel": "عمل",
      "addOption": "شامل کریں (+)",
      "subtractOption": "کم کریں (-)",
      "yearsLabel": "سال",
      "monthsLabel": "مہینے",
      "daysLabel": "دن",
      "resultingDate": "نتیجے میں آنے والی کیلنڈر تاریخ",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "اصل قیمت منفی نہیں ہو سکتی۔",
      "errorDiscount": "ڈسکاؤنٹ کا فیصد 0% اور 100% کے درمیان ہونا چاہیے۔",
      "errorTax": "سیلز ٹیکس 0% اور 100% کے درمیان ہونا چاہیے۔",
      "errorCost": "لاگت منفی نہیں ہو سکتی۔",
      "errorSelling": "فروخت کی قیمت 0 سے زیادہ ہونی چاہیے۔",
      "discountTab": "فروخت پر ڈسکاؤنٹ",
      "marginTab": "منافع کا مارجن اور مارک اپ",
      "originalPriceLabel": "اصل قیمت ($)",
      "discountLabel": "ڈسکاؤنٹ (%)",
      "salesTaxLabel": "سیلز ٹیکس (%)",
      "costLabel": "فی یونٹ لاگت ($)",
      "sellingLabel": "فروخت کی قیمت ($)",
      "finalPrice": "حتمی قیمت",
      "beforeTax": "ٹیکس سے پہلے:",
      "youSave": "آپ کی بچت",
      "taxAdded": "شامل شدہ ٹیکس",
      "grossProfit": "مجموعی منافع",
      "profitMargin": "منافع کا مارجن",
      "profitDivSelling": "(منافع ÷ فروخت کی قیمت)",
      "markup": "مارک اپ",
      "profitDivCost": "(منافع ÷ لاگت)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "0 سے زیادہ قرض کی رقم درج کریں۔",
      "errorRate": "0% اور 100% کے درمیان سالانہ شرح سود درج کریں۔",
      "errorDuration": "قرض کی مدت 1 اور 600 مہینوں کے درمیان ہونی چاہیے۔",
      "principalLabel": "قرض کی رقم ($)",
      "rateLabel": "سالانہ شرح سود (% APR)",
      "termLabel": "قرض کی مدت",
      "termUnitAria": "قرض کی مدت کی اکائی",
      "yearsOption": "سال",
      "monthsOption": "مہینے",
      "monthlyPayment": "ماہانہ قسط (EMI)",
      "forPrefix": "مدت کے لیے",
      "monthlyPayments": "ماہانہ اقساط",
      "totalInterest": "کل سود",
      "ofTotalCost": "کل لاگت کا",
      "totalRepayment": "کل ادائیگی",
      "principalWord": "اصل رقم",
      "principalLabelShort": "اصل رقم",
      "interestLabelShort": "سود",
      "showSchedule": "ادائیگی کا جدول دکھائیں",
      "hideSchedule": "ادائیگی کا جدول چھپائیں",
      "monthHeader": "مہینہ",
      "paymentHeader": "قسط",
      "principalHeader": "اصل رقم",
      "interestHeader": "سود",
      "balanceHeader": "بیلنس"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "گھر کی قیمت 0 سے زیادہ ہونی چاہیے۔",
      "errorDownPayment": "پہلی ادائیگی کا فیصد 0% اور 99.9% کے درمیان ہونا چاہیے۔",
      "errorRate": "شرح سود 0% اور 50% کے درمیان ہونی چاہیے۔",
      "errorTerm": "قرض کی مدت 1 اور 50 سال کے درمیان ہونی چاہیے۔",
      "homePriceLabel": "گھر کی قیمت ($)",
      "downPaymentLabel": "پہلی ادائیگی (%)",
      "rateLabel": "شرح سود (% APR)",
      "termLabel": "قرض کی مدت (سال)",
      "yearsWord": "سال",
      "taxLabel": "پراپرٹی ٹیکس ($ / سال)",
      "insuranceLabel": "گھر کا بیمہ ($ / سال)",
      "hoaLabel": "مالکان ایسوسی ایشن کی فیس ($ / مہینہ)",
      "estimatedMonthly": "متوقع ماہانہ ادائیگی",
      "loanAmount": "قرض کی رقم",
      "downPayment": "پہلی ادائیگی",
      "lifetimeInterest": "قرض کی پوری مدت کا سود",
      "breakdownHeading": "ماہانہ ادائیگی کی تفصیل",
      "principalInterest": "اصل رقم اور سود (P&I)",
      "propertyTaxes": "پراپرٹی ٹیکس",
      "homeownersInsurance": "گھر کے مالک کا بیمہ",
      "hoaDues": "مالکان ایسوسی ایشن کی فیس",
      "pmiLabel": "متوقع پرائیویٹ مورگیج انشورنس (0.5%/سال جب پہلی ادائیگی 20% سے کم ہو)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "درست اعداد درج کریں۔",
      "errorTotalZero": "کل (Y) صفر نہیں ہو سکتا۔",
      "errorStartZero": "ابتدائی قیمت صفر نہیں ہو سکتی۔",
      "heading1": "1. کسی عدد کا فیصد",
      "heading2": "2. حصے کا کل سے فیصد",
      "heading3": "3. فیصد میں اضافہ یا کمی",
      "whatIs": "کیا ہے",
      "percentOf": "% از",
      "isWhatPercentOf": "کا کتنا % ہے",
      "fromWord": "سے",
      "toWord": "تک",
      "result": "نتیجہ:",
      "change": "تبدیلی:",
      "formula": "فارمولا",
      "difference": "فرق",
      "ariaPctX": "فیصد X",
      "ariaBaseY": "بنیادی عدد Y",
      "ariaPartX": "حصے کی قیمت X",
      "ariaWholeY": "کل کی قیمت Y",
      "ariaInitialA": "ابتدائی قیمت A",
      "ariaFinalB": "حتمی قیمت B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "تنخواہ کی رقم منفی نہیں ہو سکتی۔",
      "errorHours": "ہفتے کے گھنٹے 1 اور 168 کے درمیان ہونے چاہییں۔",
      "errorWeeks": "سال کے ہفتے 1 اور 52 کے درمیان ہونے چاہییں۔",
      "errorTax": "متوقع ٹیکس کی شرح 0% اور 99% کے درمیان ہونی چاہیے۔",
      "amountLabel": "تنخواہ کی رقم ($)",
      "frequencyLabel": "تعدد",
      "hourlyOption": "فی گھنٹہ",
      "dailyOption": "روزانہ",
      "weeklyOption": "ہفتہ وار",
      "biweeklyOption": "ہر دو ہفتے",
      "monthlyOption": "ماہانہ",
      "annualOption": "سالانہ",
      "hoursLabel": "گھنٹے / ہفتہ",
      "weeksLabel": "ہفتے / سال",
      "taxLabel": "متوقع ٹیکس کی شرح (%)",
      "rowHourly": "فی گھنٹہ",
      "rowDaily": "روزانہ (5 دن کا ہفتہ)",
      "rowWeekly": "ہفتہ وار",
      "rowBiweekly": "ہر دو ہفتے",
      "rowMonthly": "ماہانہ",
      "rowAnnual": "سالانہ",
      "payPeriodHeader": "ادائیگی کی مدت",
      "grossPayHeader": "مجموعی تنخواہ",
      "estNetPay": "متوقع خالص تنخواہ",
      "taxWord": "ٹیکس"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "درست شروع اور اختتام کا وقت درج کریں۔",
      "errorBreakRange": "وقفے کی کٹوتی 0 اور 1,440 منٹ کے درمیان درج کریں۔",
      "errorEndEarlier": "اختتام کا وقت شروع کے وقت سے پہلے ہے۔ اگر یہ آدھی رات کے بعد تک جاتا ہے تو اگلے دن کا آپشن آن کریں۔",
      "errorBreakExceeds": "وقفے کی کٹوتی گزرے ہوئے کل وقت سے زیادہ ہے۔",
      "errorSumFields": "مدت کے تمام خانوں میں صفر یا اس سے بڑے اعداد ہونے چاہییں۔",
      "betweenTab": "دو اوقات کے درمیان گزرا ہوا وقت",
      "sumTab": "ڈیوٹی شیڈول کی مدتیں جمع کریں",
      "startLabel": "شروع کا وقت",
      "endLabel": "اختتام کا وقت",
      "breakLabel": "بغیر تنخواہ وقفہ (منٹ)",
      "overnightLabel": "اگر اختتام کا وقت شروع سے پہلے ہو تو اسے اگلے دن کا سمجھیں (رات کی شفٹ)",
      "netDuration": "خالص مدت",
      "overnightTag": "(رات بھر)",
      "decimalHours": "اعشاری گھنٹے",
      "totalMinutes": "کل منٹ",
      "totalSeconds": "کل سیکنڈ",
      "hoursAbbr": "گھنٹہ",
      "minutesAbbr": "منٹ",
      "secondsAbbr": "سیکنڈ",
      "labelHeader": "لیبل",
      "hoursHeader": "گھنٹے",
      "minutesHeader": "منٹ",
      "secondsHeader": "سیکنڈ",
      "removeButton": "ہٹائیں",
      "removeAria": "ہٹائیں",
      "addRowButton": "مدت کی قطار شامل کریں",
      "morningSession": "صبح کا سیشن",
      "afternoonSession": "دوپہر کا سیشن",
      "segmentPrefix": "حصہ",
      "combinedTime": "مشترکہ وقت (HH:MM:SS)",
      "dayEquivalent": "24 گھنٹے کے دن",
      "daysAbbr": "دن"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "بل کی رقم منفی نہیں ہو سکتی۔",
      "errorTip": "ٹپ کا فیصد 0% اور 200% کے درمیان ہونا چاہیے۔",
      "errorPeople": "افراد کی تعداد 1 اور 100 کے درمیان ہونی چاہیے۔",
      "billLabel": "بل کا کل ($)",
      "tipLabel": "ٹپ کا فیصد (%)",
      "peopleLabel": "تقسیم کریں (افراد)",
      "presetsLabel": "ٹپ کی پہلے سے سیٹ قیمتیں:",
      "roundingLabel": "گول کرنا:",
      "exactOption": "درست سینٹ",
      "totalUpOption": "کل کو اوپر گول کریں ($)",
      "perPersonUpOption": "فی فرد حصہ اوپر گول کریں ($)",
      "perPersonTotal": "فی فرد کل",
      "includes": "شامل ہے",
      "tipEach": "فی فرد ٹپ",
      "totalTip": "کل ٹپ",
      "effectiveRate": "موثر شرح:",
      "totalBill": "بل کا کل"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "کنورٹ کرنے کے لیے درست عدد درج کریں۔",
      "errorAbsoluteZero": "درجہ حرارت مطلق صفر سے کم نہیں ہو سکتا (-273.15 °C / 0 K)۔",
      "categoryNames": {
        "length": "لمبائی",
        "weight": "وزن اور کمیت",
        "temperature": "درجہ حرارت",
        "area": "رقبہ",
        "volume": "حجم",
        "speed": "رفتار",
        "storage": "ڈیجیٹل اسٹوریج"
      },
      "unitLabels": {
        "mm": "ملی میٹر",
        "cm": "سینٹی میٹر",
        "m": "میٹر",
        "km": "کلومیٹر",
        "in": "انچ",
        "ft": "فٹ",
        "yd": "گز",
        "mi": "میل",
        "mg": "ملی گرام",
        "g": "گرام",
        "kg": "کلوگرام",
        "t": "میٹرک ٹن",
        "oz": "اونس",
        "lb": "پاؤنڈ",
        "st": "اسٹون",
        "C": "سیلسیس",
        "F": "فارن ہائیٹ",
        "K": "کیلون",
        "cm2": "مربع سینٹی میٹر",
        "m2": "مربع میٹر",
        "ha": "ہیکٹر",
        "km2": "مربع کلومیٹر",
        "ft2": "مربع فٹ",
        "yd2": "مربع گز",
        "acre": "ایکڑ",
        "mi2": "مربع میل",
        "mL": "ملی لیٹر",
        "L": "لیٹر",
        "m3": "مکعب میٹر",
        "floz": "سیال اونس (امریکی)",
        "cup": "کپ (امریکی)",
        "pt": "پائنٹ (امریکی)",
        "qt": "کوارٹ (امریکی)",
        "gal": "گیلن (امریکی)",
        "ms": "میٹر / سیکنڈ",
        "kmh": "کلومیٹر / گھنٹہ",
        "mph": "میل / گھنٹہ",
        "knot": "ناٹ",
        "fts": "فٹ / سیکنڈ",
        "B": "بائٹ",
        "KB": "کیلوبائٹ (10³)",
        "MB": "میگابائٹ (10⁶)",
        "GB": "گیگابائٹ (10⁹)",
        "TB": "ٹیرابائٹ (10¹²)",
        "KiB": "کیبی بائٹ (2¹⁰)",
        "MiB": "میبی بائٹ (2²⁰)",
        "GiB": "گیبی بائٹ (2³⁰)"
      },
      "valueLabel": "قیمت",
      "fromLabel": "کس یونٹ سے",
      "toLabel": "کس یونٹ میں",
      "swapAria": "یونٹ بدل دیں",
      "swapTitle": "یونٹ بدل دیں",
      "toWord": "میں",
      "copyResult": "نتیجہ کاپی کریں",
      "unitHeader": "یونٹ",
      "symbolHeader": "علامت",
      "equivalentHeader": "مساوی قیمت"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "رقم منفی نہیں ہو سکتی۔",
      "errorRate": "ٹیکس کا فیصد 0% اور 100% کے درمیان ہونا چاہیے۔",
      "addTab": "ٹیکس شامل کریں (خالص سے مجموعی)",
      "removeTab": "ٹیکس ہٹائیں (مجموعی سے خالص)",
      "commonRates": "عام شرحیں:",
      "netAmountLabel": "خالص رقم (بغیر ٹیکس) ($)",
      "grossAmountLabel": "مجموعی رقم (ٹیکس سمیت) ($)",
      "rateLabel": "VAT / سیلز ٹیکس کی شرح (%)",
      "netPrice": "خالص قیمت (بغیر ٹیکس)",
      "taxAmount": "ٹیکس کی رقم",
      "grossPrice": "مجموعی قیمت (ٹیکس سمیت)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64 میں انکوڈ کریں",
      "decodeTab": "Base64 ڈی کوڈ کریں",
      "urlSafe": "لنک کے لیے محفوظ (- اور _)",
      "omitPadding": "آخر کی = پیڈنگ ہٹا دیں",
      "swap": "بدل دیں",
      "decodeError": "ڈی کوڈ کرنے میں خرابی:",
      "inputLabelEncode": "سادہ متن (UTF-8)",
      "inputLabelDecode": "Base64 اسٹرنگ",
      "inputPlaceholderEncode": "انکوڈ کرنے کے لیے متن یا JSON لکھیں...",
      "inputPlaceholderDecode": "معیاری یا لنک کے لیے محفوظ Base64 اسٹرنگ پیسٹ کریں...",
      "outputLabelEncode": "Base64 آؤٹ پٹ",
      "outputLabelDecode": "ڈی کوڈ شدہ متن",
      "outputPlaceholder": "تبدیل شدہ آؤٹ پٹ یہاں نظر آئے گا...",
      "copyOutput": "آؤٹ پٹ کاپی کریں",
      "invalidLength": "Base64 اسٹرنگ کی لمبائی غلط ہے۔",
      "invalidInput": "غلط Base64 ان پٹ یا خراب UTF-8 بائٹ ترتیب۔"
    },
    "tables": {
      "samplePlain": "UtilityFlow: محفوظ UTF-8 Base64 انکوڈنگ ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "رنگ منتخب کریں",
      "colorPickerAria": "رنگ منتخب کرنے والا",
      "copyHex": "HEX کاپی کریں",
      "copyRgb": "RGB کاپی کریں",
      "copyHsl": "HSL کاپی کریں",
      "contrastTitle": "WCAG 2.1 کنٹراسٹ تناسب چیک",
      "contrastDesc": "سامنے کا رنگ ({color}) کسی بھی پس منظر کے رنگ پر دکھائیں۔",
      "backgroundLabel": "پس منظر:",
      "bgAria": "کنٹراسٹ کے لیے پس منظر کا رنگ",
      "sampleTitle": "جسم اور انٹرفیس کے متن کا نمونہ",
      "sampleSentence": "تیز بھوری لومڑی سست کتے کے اوپر سے چھلانگ لگاتی ہے۔",
      "aaNormal": "عام متن کے لیے AA (≥ 4.5:1)",
      "aaaNormal": "عام متن کے لیے AAA (≥ 7.0:1)",
      "aaLarge": "بڑے متن کے لیے AA (≥ 3.0:1)",
      "pass": "پاس",
      "fail": "فیل"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5 خانوں والا Cron ایکسپریشن",
      "copyCron": "cron کاپی کریں",
      "humanTitle": "آسان زبان میں شیڈول",
      "breakdownTitle": "خانوں کی تفصیل",
      "fieldMinute": "منٹ (0–59)",
      "fieldHour": "گھنٹہ (0–23)",
      "fieldDom": "مہینے کا دن (1–31)",
      "fieldMonth": "مہینہ (1–12)",
      "fieldDow": "ہفتے کا دن (0–6)",
      "nextRuns": "اگلے {count} شیڈول شدہ رن (مقامی وقت)",
      "noRuns": "اگلے 366 دنوں میں کوئی مماثل رن نہیں ملا۔",
      "fieldsError": "معیاری cron میں 5 خانے چاہییں (منٹ گھنٹہ مہینے کا دن مہینہ ہفتے کا دن)۔ {count} ملے۔",
      "emptySegment": "«{token}» میں خالی حصہ",
      "invalidStep": "«{token}» میں غلط قدم «{step}»",
      "outOfRange": "«{token}» میں حد سے باہر قیمت ({min}–{max})",
      "invalidCron": "غلط cron ایکسپریشن۔",
      "everyMinutes": "ہر {n} منٹ بعد",
      "minuteZeroHour": "ہر گھنٹے کے 0 منٹ پر",
      "atTime": "{time} پر",
      "atFields": "{a}، {b} پر",
      "dayEveryDay": "ہر دن",
      "dayWeekdays": "کام کے دنوں میں (پیر–جمعہ)",
      "dayOfMonth": "مہینے کے دن {day} کو",
      "dayDow": "{dow} کو",
      "dayBoth": "دن {day} یا {dow} کو",
      "monthIn": " {months} میں"
    },
    "tables": {
      "presets": [
        {
          "label": "ہر 5 منٹ بعد",
          "expr": "*/5 * * * *"
        },
        {
          "label": "ہر گھنٹے",
          "expr": "0 * * * *"
        },
        {
          "label": "ہر دن آدھی رات کو",
          "expr": "0 0 * * *"
        },
        {
          "label": "کام کے دنوں میں صبح 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "مہینے کے پہلے دن 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "اتوار",
        "پیر",
        "منگل",
        "بدھ",
        "جمعرات",
        "جمعہ",
        "ہفتہ"
      ],
      "monthLabels": [
        "",
        "جنوری",
        "فروری",
        "مارچ",
        "اپریل",
        "مئی",
        "جون",
        "جولائی",
        "اگست",
        "ستمبر",
        "اکتوبر",
        "نومبر",
        "دسمبر"
      ],
      "unitWords": {
        "minute": "منٹ",
        "hour": "گھنٹہ",
        "day": "دن",
        "month": "مہینہ",
        "weekday": "ہفتے کا دن"
      },
      "unitPlurals": {
        "minute": "منٹ",
        "hour": "گھنٹے",
        "day": "دن",
        "month": "مہینے",
        "weekday": "ہفتے کے دن"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS چھوٹی کریں",
      "beautifyTab": "CSS خوبصورت کریں",
      "inputLabel": "ان پٹ CSS",
      "bytesLabel": "بائٹس",
      "inputPlaceholder": "CSS رولز یا اسٹائل شیٹ یہاں پیسٹ کریں...",
      "outputLabelMinify": "چھوٹی کی گئی CSS",
      "outputLabelBeautify": "خوبصورت کی گئی CSS",
      "outputPlaceholder": "پروسیس شدہ CSS یہاں نظر آئے گی...",
      "copyCss": "CSS کاپی کریں"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "متن ان پٹ",
      "fileTab": "مقامی فائل کا ہیش",
      "uppercaseHex": "بڑے حروف میں ہیکس",
      "inputLabel": "ان پٹ اسٹرنگ (UTF-8)",
      "inputPlaceholder": "SHA-1، SHA-256، SHA-384 اور SHA-512 فنگر پرنٹ نکالنے کے لیے متن لکھیں...",
      "chooseFileLabel": "ہیش نکالنے کے لیے مقامی فائل منتخب کریں",
      "fileNoteDefault": "فائل صرف براؤزر کی میموری میں پڑھی جاتی ہے، کبھی اپ لوڈ نہیں ہوتی۔",
      "bytesLabel": "بائٹس",
      "cryptoUnavailable": "Web Crypto دستیاب نہیں ہے۔",
      "sampleText": "سلام، UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "اینٹیٹیز انکوڈ کریں",
      "decodeTab": "اینٹیٹیز ڈی کوڈ کریں",
      "encodeNonAscii": "غیر ASCII علامات انکوڈ کریں (&#...;)",
      "swap": "بدل دیں",
      "inputLabelEncode": "HTML / خام متن",
      "inputLabelDecode": "HTML سے انکوڈ شدہ اسٹرنگ",
      "inputPlaceholderEncode": "<p>HTML ٹیگ یا خاص حروف لکھیں...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;انکوڈ شدہ اینٹیٹیز پیسٹ کریں...&lt;/p&gt;",
      "outputLabelEncode": "انکوڈ شدہ اینٹیٹیز",
      "outputLabelDecode": "ڈی کوڈ شدہ متن",
      "outputPlaceholder": "تبدیل شدہ اینٹیٹیز یہاں نظر آئیں گی..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS چھوٹی کریں",
      "beautifyTab": "JS خوبصورت کریں",
      "indentLabel": "انڈینٹ:",
      "indent2": "2 خالی جگہیں",
      "indent4": "4 خالی جگہیں",
      "inputLabel": "JavaScript / TypeScript ان پٹ",
      "bytesLabel": "بائٹس",
      "inputPlaceholder": "JavaScript یا TypeScript کا ٹکڑا پیسٹ کریں...",
      "outputLabelMinify": "چھوٹی کی گئی آؤٹ پٹ",
      "outputLabelBeautify": "خوبصورت کی گئی آؤٹ پٹ",
      "outputPlaceholder": "فارمیٹ شدہ JavaScript یہاں نظر آئے گا...",
      "copyCode": "کوڈ کاپی کریں"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "جداکار:",
      "commaOpt": "کوما (,)",
      "semicolonOpt": "سیمی کولن (;)",
      "tabOpt": "ٹیب (TSV)",
      "conversionError": "کنورژن میں خرابی:",
      "inputLabelJson": "JSON ان پٹ",
      "inputLabelCsv": "CSV ان پٹ",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "CSV آؤٹ پٹ",
      "outputLabelJson": "JSON آؤٹ پٹ",
      "outputPlaceholder": "تبدیل شدہ ڈیٹا یہاں نظر آئے گا...",
      "parseFallback": "ان پٹ فارمیٹ پارس نہیں ہو سکا۔"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "صرف براؤزر کی میموری میں Base64Url ہیڈر اور پے لوڈ ڈی کوڈ کرتا ہے۔ کرپٹوگرافک دستخط کی تصدیق نہیں کرتا۔",
      "loadSampleJwt": "نمونہ JWT لوڈ کریں",
      "inputLabel": "انکوڈ شدہ JWT ٹوکن",
      "inputPlaceholder": "ہیڈر اور کلیمز دیکھنے کے لیے JWT ٹوکن پیسٹ کریں (eyJhbGciOi...)...",
      "invalidJwt": "غلط JWT:",
      "headerLabel": "ہیڈر (الگورتھم اور قسم)",
      "payloadLabel": "پے لوڈ (کلیمز)",
      "copyHeader": "ہیڈر کاپی کریں",
      "copyPayload": "پے لوڈ کاپی کریں",
      "timestampTitle": "ٹائم اسٹیمپ کلیمز",
      "iatLabel": "جاری ہوا (iat)",
      "nbfLabel": "اس سے پہلے نہیں (nbf)",
      "expLabel": "ختم ہوگا (exp)",
      "expired": "ختم شدہ",
      "active": "فعال (ابھی ختم نہیں ہوا)",
      "signatureLabel": "دستخط کا حصہ (Base64Url)",
      "invalidB64Url": "Base64Url حصے کی لمبائی غلط ہے۔",
      "segmentCount": "JWT میں 3 حصے چاہییں جو نقطوں سے الگ ہوں (header.payload.signature)، {count} ملے۔",
      "parseFallback": "JWT کے Base64Url JSON حصے پارس نہیں ہو سکے۔"
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "ریگولر ایکسپریشن پیٹرن",
      "patternPlaceholder": "regex پیٹرن لکھیں...",
      "flagsLabel": "فلیگز:",
      "syntaxError": "نحو میں خرابی:",
      "testStringLabel": "ٹیسٹ اسٹرنگ",
      "testPlaceholder": "اپنا پیٹرن جانچنے کے لیے نمونہ متن پیسٹ کریں...",
      "highlightedMatches": "نمایاں مماثلتیں",
      "matchSingular": "مماثلت",
      "matchPlural": "مماثلتیں",
      "highlightEmpty": "مماثلتیں یہاں براہ راست نمایاں نظر آئیں گی...",
      "capturedTitle": "پکڑی گئی مماثلتیں",
      "matchLabel": "مماثلت",
      "indexLabel": "انڈیکس",
      "groupsLabel": "گروپس:",
      "noMatches": "کوئی مماثلت نہیں ملی۔",
      "replaceLabel": "تبدیلی کے ٹیمپلیٹ کا پیش نظارہ",
      "replacePlaceholder": "جیسے $1 [at] $2",
      "invalidRegex": "غلط ریگولر ایکسپریشن۔"
    },
    "tables": {
      "sampleText": "مرکزی رابطہ: support@utilityflow.online\nبلنگ ٹیم: billing@example.org\nغلط ای میل: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (عالمگیر)"
        },
        {
          "flag": "i",
          "label": "i (انداز نظرانداز کریں)"
        },
        {
          "flag": "m",
          "label": "m (کئی لائنیں)"
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
      "beautify": "خوبصورت کریں",
      "minify": "چھوٹی کریں",
      "uppercaseKw": "بڑے حروف میں کی ورڈز",
      "lowercaseKw": "چھوٹے حروف",
      "indentLabel": "انڈینٹ:",
      "indent2": "2 خالی جگہیں",
      "indent4": "4 خالی جگہیں",
      "inputLabel": "خام SQL کوئری",
      "inputPlaceholder": "SQL کوئری پیسٹ کریں ‏(SELECT، INSERT، UPDATE، JOIN...)...",
      "outputLabel": "فارمیٹ شدہ SQL",
      "outputPlaceholder": "فارمیٹ شدہ SQL یہاں نظر آئے گی...",
      "copySql": "SQL کاپی کریں"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "موجودہ Unix ٹائم اسٹیمپ (سیکنڈ میں)",
      "useCurrent": "موجودہ وقت استعمال کریں",
      "copyEpoch": "epoch کاپی کریں",
      "converter1Label": "Unix ٹائم اسٹیمپ ← انسانی تاریخ",
      "epochPlaceholder": "جیسے 1794544800",
      "unitAuto": "خودکار",
      "unitSeconds": "سیکنڈ",
      "unitMilliseconds": "ملی سیکنڈ",
      "errorNotNumeric": "درست عددی Unix ٹائم اسٹیمپ درج کریں۔",
      "errorOutOfRange": "وقت JavaScript Date کی درست حد سے باہر ہے۔",
      "isoLabel": "ISO 8601 ‏(UTC)",
      "localLabel": "مقامی ٹائم زون",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "نسبتی",
      "converter2Label": "مقامی تاریخ اور وقت ← Unix ٹائم اسٹیمپ",
      "secondsLabel": "سیکنڈ",
      "millisecondsLabel": "ملی سیکنڈ",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "انکوڈ کریں",
      "decode": "ڈی کوڈ کریں",
      "encodeUriPreserve": "encodeURI ‏(://?& برقرار رکھیں)",
      "swap": "بدل دیں",
      "urlError": "URL میں خرابی:",
      "inputLabel": "ان پٹ اسٹرنگ یا URL",
      "inputPlaceholder": "URL، کوئری اسٹرنگ یا پیرامیٹر کی قیمت پیسٹ کریں...",
      "outputLabelEncode": "انکوڈ شدہ آؤٹ پٹ",
      "outputLabelDecode": "ڈی کوڈ شدہ آؤٹ پٹ",
      "outputPlaceholder": "انکوڈ شدہ یا ڈی کوڈ شدہ URL یہاں نظر آئے گا...",
      "parsedTitle": "پارس شدہ URL کی تفصیل",
      "protocol": "پروٹوکول",
      "host": "ہوسٹ",
      "pathname": "پاتھ کا نام",
      "hash": "ہیش",
      "noneValue": "(کوئی نہیں)",
      "queryParam": "کوئری پیرامیٹر",
      "decodedValue": "ڈی کوڈ شدہ قیمت",
      "malformed": "فیصد انکوڈنگ کی خراب ترتیب۔"
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID ورژن",
      "v4": "v4 (بے ترتیب)",
      "v7": "v7 (وقت کے حساب سے ترتیب شدہ)",
      "quantity": "مقدار (1–100)",
      "generate": "UUID بنائیں",
      "uppercase": "بڑے حروف",
      "includeHyphens": "ہائفن شامل کریں",
      "wrapBraces": "{بریکٹس} میں لپیٹیں",
      "generatedLabel": "بنائے گئے UUID",
      "copyAll": "سب کاپی کریں"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "نیلے پر سفید",
      "presetSlate": "نیلی سرمئی سیاہی",
      "presetEmerald": "زمردی بیج",
      "presetDark": "ڈارک موڈ",
      "swapColors": "دونوں رنگ بدل دیں",
      "fgTitle": "سامنے کا رنگ / متن",
      "bgTitle": "پس منظر کا رنگ",
      "copyHex": "HEX کاپی کریں",
      "pickerSuffix": "منتخب کرنے والا",
      "hexInputSuffix": "HEX ان پٹ",
      "contrastRatioLabel": "WCAG 2.1 کنٹراسٹ تناسب",
      "checkAaNormal": "عام متن کے لیے WCAG AA",
      "checkAaLarge": "بڑے متن / انٹرفیس کے لیے WCAG AA",
      "checkAaaNormal": "عام متن کے لیے WCAG AAA",
      "checkAaaLarge": "بڑے متن کے لیے WCAG AAA",
      "pass": "پاس",
      "fail": "فیل",
      "livePreviewLabel": "رسائی کا براہ راست پیش نظارہ",
      "previewHeading": "واضح ٹائپوگرافی کسی بھی اسکرین سائز پر پڑھنے میں آسان ہوتی ہے۔",
      "previewBody": "عام جسم کے متن (14–16 پکسل) کو WCAG میں AA لیول کے لیے کم از کم 4.5:1 اور AAA لیول کے لیے 7.0:1 کنٹراسٹ تناسب چاہیے۔ بڑی سرخیوں (18 پوائنٹ یا اس سے زیادہ، یا بولڈ 14 پوائنٹ یا اس سے زیادہ) کے لیے کم از کم 3.0:1 کافی ہے۔",
      "outlinedControl": "بارڈر والا انٹرفیس کنٹرول",
      "hexOnHex": "{fg} پر {bg}",
      "extractTitle": "تصویر سے رنگوں کا پیلیٹ نکالیں",
      "extractBody": "اسکرین شاٹ، لوگو یا تصویر اپ لوڈ کریں — اہم HEX نمونے سیدھے کنٹراسٹ چیک میں آ جائیں گے۔",
      "appliesToLabel": "نمونے پر کلک کرنے پر لاگو ہوگا:",
      "foregroundBtn": "سامنے",
      "backgroundBtn": "پس منظر",
      "selectImage": "نمونے نکالنے کے لیے تصویر منتخب کریں",
      "loadedReplace": "لوڈ ہو گئی: {name} (دوسری اپ لوڈ کریں)",
      "selectImageError": "براہ کرم PNG، JPG، WebP یا GIF تصویر منتخب کریں۔",
      "unableToRead": "«{name}» پڑھی نہیں جا سکی۔",
      "canvasUnavailable": "Canvas 2D سیاق دستیاب نہیں ہے۔",
      "transparentImage": "تصویر مکمل طور پر شفاف لگتی ہے۔",
      "unableToExtract": "پیلیٹ نکالا نہیں جا سکا۔",
      "areaPercent": "رقبے کا ~{n}%"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 براؤزر ٹیب",
        "taskbar": "32×32 ٹاسک بار / HiDPI",
        "desktopShortcut": "48×48 ڈیسک ٹاپ شارٹ کٹ",
        "appleTouch": "180×180 ایپل ٹچ",
        "androidChrome": "192×192 اینڈرائیڈ کروم",
        "pwaSplash": "512×512 PWA اسپلش اسکرین"
      },
      "monogramMode": "ابتدائی حروف کا بیج بنانے والا",
      "imageMode": "لوگو تصویر اپ لوڈ کریں",
      "lettersLabel": "متن / ابتدائی حروف (1–3 حروف)",
      "cornerShapeLabel": "کونے کی شکل",
      "roundedSquare": "گول کونوں والا مربع",
      "circle": "دائرہ",
      "sharpSquare": "تیز مربع",
      "square": "مربع",
      "bgColorLabel": "پس منظر کا رنگ",
      "textColorLabel": "متن کا رنگ",
      "chooseLogo": "PNG، JPG، WebP یا SVG لوگو منتخب کریں",
      "loadedReplace": "لوڈ ہو گیا: {name} (بدلنے کے لیے کلک کریں)",
      "cropMaskLabel": "کراپ ماسک",
      "unableToRead": "«{name}» پڑھا نہیں جا سکا۔",
      "canvasUnavailable": "Canvas 2D سیاق دستیاب نہیں ہے۔",
      "failedEncode": "فیویکن کی PNG انکوڈنگ ناکام ہوئی۔",
      "unableToGenerate": "فیویکن بنائے نہیں جا سکے۔",
      "icoBundleTitle": "کئی سائز والا favicon.ico بنڈل (16 پکسل + 32 پکسل + 48 پکسل)",
      "icoBundleBody": "معیار کے مطابق بائنری ‎.ico‎ فائل، آپ کی سائٹ کے /public/ فولڈر کے لیے تیار",
      "downloadIco": "favicon.ico ڈاؤن لوڈ کریں",
      "faviconPreviewAlt": "32×32 فیویکن کا پیش نظارہ",
      "iconAlt": "{size}×{size} آئیکن",
      "htmlTagsLabel": "<head> میں HTML لنک ٹیگز",
      "copyHtml": "HTML کاپی کریں"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "کرپٹوگرافک ہیش نکالنے کے لیے کوئی بھی فائل منتخب کریں",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Web Crypto API سے مقامی ہیشنگ · کوئی فائل اپ لوڈ نہیں ہوتی (500 میگابائٹ سے کم بہتر ہے)",
      "cryptoUnavailable": "اس براؤزر میں Web Crypto SubtleCrypto API دستیاب نہیں ہے۔",
      "hashFailed": "فائل براؤزر کی میموری میں ہیش نہیں ہو سکی (کئی سو میگابائٹ سے بڑی فائلیں میموری کی حد سے تجاوز کر سکتی ہیں)۔",
      "computing": "SHA-1، SHA-256، SHA-384 اور SHA-512 ہیش مقامی طور پر نکالے جا رہے ہیں...",
      "fileLabel": "فائل:",
      "sizeLabel": "سائز:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "آخری ترمیم:",
      "bytesSuffix": "{n} بائٹس",
      "downloadSha256": ".sha256 ڈاؤن لوڈ کریں",
      "sha256Label": "SHA-256 (تجویز کردہ)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (صرف پرانی مطابقت کے لیے)",
      "verifyLabel": "متوقع ہیش سے تصدیق کریں",
      "expectedPlaceholder": "شائع شدہ SHA-256، SHA-512، SHA-384 یا SHA-1 ہیش پیسٹ کریں (یا .sha256sum کی لائن)...",
      "verified": "ہیش کی تصدیق ہو گئی! فائل متوقع {algorithm} فنگر پرنٹ سے بالکل میل کھاتی ہے۔",
      "mismatch": "ہیش میل نہیں کھاتا! نکالا گیا کوئی بھی فنگر پرنٹ آپ کی متوقع قیمت سے میل نہیں کھاتا۔"
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "کمپریس کرنے کے لیے تصویر منتخب کریں (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "HTML5 Canvas سے مقامی پروسیسنگ · کبھی کسی دور دراز سرور پر اپ لوڈ نہیں ہوتی",
      "uploadImageError": "براہ کرم PNG، JPG، WebP یا GIF تصویر فائل اپ لوڈ کریں۔",
      "fileTooLarge": "فائل بہت بڑی ہے — فی فائل حد 20 میگابائٹ ہے۔ براہ کرم چھوٹی تصویر منتخب کریں۔",
      "unableToDecode": "«{name}» ڈی کوڈ نہیں ہو سکی۔",
      "canvasUnavailable": "Canvas 2D سیاق دستیاب نہیں ہے۔",
      "compressionFailed": "براؤزر کینوس میں کمپریشن ناکام ہوئی۔",
      "unableToCompress": "تصویر کمپریس نہیں ہو سکی۔",
      "unableToRead": "«{name}» پڑھی نہیں جا سکی۔",
      "invalidImage": "غلط تصویر فائل۔",
      "outputFormatLabel": "آؤٹ پٹ فارمیٹ",
      "webpOption": "WebP (ویب کے لیے جدید، سب سے چھوٹا سائز)",
      "jpgOption": "JPG (سب سے زیادہ مطابقت)",
      "pngOption": "PNG (بغیر نقصان، شفافیت)",
      "maxWidthLabel": "زیادہ سے زیادہ چوڑائی کی حد",
      "keepOriginalWidth": "اصل چوڑائی برقرار رکھیں",
      "max1920": "زیادہ سے زیادہ 1920 پکسل (Full HD)",
      "max1280": "زیادہ سے زیادہ 1280 پکسل (بلاگ / ہیڈر)",
      "max800": "زیادہ سے زیادہ 800 پکسل (تھمب نیل)",
      "qualityLabel": "کوالٹی: ",
      "losslessPng": "بغیر نقصان والی PNG",
      "originalLabel": "اصل",
      "compressedLabel": "کمپریس شدہ",
      "changeLabel": "تبدیلی",
      "outputSummary": "آؤٹ پٹ: {w} × {h} پکسل · {ext}",
      "compressing": "کمپریس ہو رہی ہے...",
      "downloadExt": ".{ext} ڈاؤن لوڈ کریں",
      "previewAlt": "کمپریس شدہ تصویر کا پیش نظارہ"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "کنورٹ کرنے کے لیے ایک یا کئی تصاویر منتخب کریں",
      "imagesLoaded": "{n} تصاویر لوڈ ہو گئیں — شامل کرنے یا بدلنے کے لیے کلک کریں",
      "batchNote": "PNG، JPG، WebP، SVG یا GIF کو مقامی طور پر، بلک میں، PNG، JPG یا WebP میں کنورٹ کریں",
      "convertToLabel": "کس فارمیٹ میں کنورٹ کریں",
      "pngOption": "PNG (.png — شفافیت برقرار رہتی ہے)",
      "qualityLabel": "نقصان والی کوالٹی: ",
      "lossless": "بغیر نقصان",
      "alphaFillLabel": "الفا بھرائی",
      "converting": "کنورٹ ہو رہی ہے...",
      "reconvert": "دوبارہ کنورٹ کریں",
      "selectFilesError": "ایک یا زیادہ تصویر فائلیں منتخب کریں (PNG، JPG، WebP، SVG یا GIF)۔",
      "filesTooLarge": "{names} چھوڑ دی گئیں — فی فائل 25 میگابائٹ کی حد سے بڑی فائلیں کنورٹ نہیں ہوتیں۔",
      "couldNotDecode": "«{name}» ڈی کوڈ نہیں ہو سکی۔",
      "canvasUnavailable": "Canvas 2D دستیاب نہیں ہے۔",
      "conversionFailed": "«{name}» کنورٹ ناکام ہوئی۔",
      "batchFailed": "بلک تصویر کنورژن ناکام ہوئی۔",
      "downloadExt": ".{ext} ڈاؤن لوڈ کریں"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "تیار سائز میں ری سائز یا کراپ کرنے کے لیے تصویر منتخب کریں",
      "fileWithDims": "{name} (اصل: {w} × {h} پکسل)",
      "supportsNote": "پکسل ری سائز، اسپیکٹ ریشو لاک اور مرکز سے کراپ کو سوشل پری سیٹس کے ساتھ سپورٹ کرتا ہے",
      "selectImageError": "PNG، JPG، WebP یا GIF تصویر منتخب کریں۔",
      "unableToDecode": "«{name}» ڈی کوڈ نہیں ہو سکی۔",
      "unableToRead": "تصویر پڑھی نہیں جا سکی۔",
      "failedLoading": "ری سائز کے لیے تصویر لوڈ نہیں ہو سکی۔",
      "canvasUnavailable": "Canvas 2D دستیاب نہیں ہے۔",
      "failedGenerating": "ری سائز شدہ تصویر بنائی نہیں جا سکی۔",
      "resizeFailed": "ری سائز ناکام ہوا۔",
      "quickPresets": "فوری پری سیٹس:",
      "presetOg": "OG شیئر ‏(1200×630)",
      "presetYoutube": "YouTube HD ‏(1280×720)",
      "presetSquare": "مربع (1080×1080)",
      "presetAvatar": "اواتار (512×512)",
      "widthLabel": "چوڑائی (پکسل)",
      "heightLabel": "اونچائی (پکسل)",
      "fitModeLabel": "اسپیکٹ ریشو فٹ موڈ",
      "coverCropOption": "مرکز سے کور کراپ (بغیر کھینچے)",
      "exactOption": "بالکل ان ابعاد میں سائز کریں",
      "outputFormatLabel": "آؤٹ پٹ فارمیٹ",
      "lockAspect": "ابعاد لکھتے وقت اصل اسپیکٹ ریشو لاک کریں",
      "resizeButton": "{w} × {h} پکسل میں ری سائز کریں",
      "readySummary": "تیار: {w} × {h} پکسل ({ext})",
      "downloadResized": "ری سائز شدہ .{ext} ڈاؤن لوڈ کریں",
      "previewAlt": "ری سائز شدہ تصویر کی آؤٹ پٹ"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "گھمانے، پلٹنے یا فلٹر لگانے کے لیے تصویر منتخب کریں",
      "loadedReplace": "{name} (بدلنے کے لیے کلک کریں)",
      "previewNote": "فوری HTML5 Canvas پیش نظارہ اور پکسل ایکسپورٹ",
      "selectImageError": "براہ کرم PNG، JPG، WebP یا GIF تصویر منتخب کریں۔",
      "failedLoading": "«{name}» لوڈ نہیں ہو سکی۔",
      "rotateLeft": "90° بائیں گھمائیں",
      "rotateRight": "90° دائیں گھمائیں",
      "flipHorizontal": "افقی پلٹیں",
      "flipVertical": "عمودی پلٹیں",
      "brightnessLabel": "چمک: ",
      "contrastLabel": "کنٹراسٹ: ",
      "grayscaleLabel": "سیاہ اور سفید (گرے اسکیل)",
      "resetAll": "سب ری سیٹ کریں",
      "exportFormatLabel": "ایکسپورٹ فارمیٹ",
      "livePreview": "براہ راست Canvas پیش نظارہ"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "تصویر ← Base64 Data URI",
      "decodeMode": "Base64 ← تصویر کا پیش نظارہ",
      "selectImageError": "تصویر فائل منتخب کریں (PNG، JPG، WebP، SVG، GIF یا ICO)۔",
      "unableToRead": "«{name}» پڑھی نہیں جا سکی۔",
      "chooseImage": "انکوڈ کرنے کے لیے تصویر فائل منتخب کریں",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Data URI، خام Base64، HTML <img> اسنیپٹ اور CSS بیک گراؤنڈ بناتا ہے",
      "binarySizeLabel": "بائنری فائل کا سائز",
      "base64SizeLabel": "Base64 URI کا سائز (تقریباً 33% بڑا)",
      "fullDataUriLabel": "مکمل Data URI",
      "copyDataUri": "Data URI کاپی کریں",
      "copyRawBase64": "خام Base64 کاپی کریں",
      "copyImg": "<img> کاپی کریں",
      "copyCss": "CSS کاپی کریں",
      "encodedAria": "انکوڈ شدہ Base64 Data URI",
      "encodedAlt": "انکوڈ شدہ پیش نظارہ",
      "pasteLabel": "Base64 تصویر اسٹرنگ یا Data URI پیسٹ کریں",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... یا خام base64 اسٹرنگ",
      "invalidPayload": "پیسٹ شدہ Base64 متن درست انکوڈ شدہ تصویر پے لوڈ نہیں ہے۔",
      "decodedAlt": "ڈی کوڈ شدہ Base64 پیش نظارہ",
      "downloadExt": ".{ext} ڈاؤن لوڈ کریں"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "بہت مضبوط",
        "strong": "مضبوط",
        "moderate": "درمیانی",
        "weak": "کمزور"
      },
      "randomPasswordMode": "بے ترتیب پاس ورڈ",
      "passphraseMode": "Diceware پاس فریز",
      "regenerate": "دوبارہ بنائیں",
      "passwordLengthLabel": "پاس ورڈ کی لمبائی: ",
      "charsSuffix": " حروف",
      "batchCountLabel": "بیچ کی تعداد: ",
      "uppercaseLabel": "بڑے حروف (A–Z)",
      "lowercaseLabel": "چھوٹے حروف (a–z)",
      "numbersLabel": "اعداد (0–9)",
      "symbolsLabel": "علامات (!@#$%...)",
      "excludeAmbiguousLabel": "مشتبہ حروف خارج کریں (0، O، 1، l، I)",
      "wordCountLabel": "الفاظ کی تعداد: ",
      "wordSeparatorLabel": "الفاظ کا جداکار",
      "hyphenOption": "ہائفن (-)",
      "underscoreOption": "انڈر اسکور (_)",
      "periodOption": "نقطہ (.)",
      "spaceOption": "خالی جگہ ( )",
      "capitalizeWordsLabel": "الفاظ کا پہلا حرف بڑا کریں",
      "appendDigitLabel": "دو ہندسوں کا عدد آخر میں لگائیں",
      "selectGroupWarning": "پاس ورڈ بنانے کے لیے کم از کم ایک حرفوں کا گروپ منتخب کریں۔",
      "entropyBits": "~{n} بٹ اینٹراپی",
      "poolSizeSuffix": " · پول کا سائز {n}",
      "wordListSuffix": " · {n} الفاظ کی فہرست",
      "copyAll": "سب کاپی کریں"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "ویب سائٹ کا لنک",
        "text": "متن",
        "wifi": "Wi-Fi سیٹنگز",
        "vcard": "vCard رابطہ",
        "email": "ای میل ایڈریس",
        "phone": "فون نمبر",
        "plainText": "سادہ متن"
      },
      "liveCameraCapture": "براہ راست کیمرے سے کیپچر",
      "scanMode": "QR تصویر اسکین / ڈی کوڈ کریں",
      "vcardMode": "vCard QR بنانے والا",
      "uploadQr": "QR کوڈ کی تصویر اپ لوڈ کریں",
      "uploadQrNote": "PNG، JPG، WebP یا SVG اسکرین شاٹ · 100% کلائنٹ سائیڈ",
      "liveCameraTitle": "ڈیوائس کے براہ راست کیمرے سے اسکین",
      "liveCameraNote": "اجازت ملنے کے بعد صرف مقامی کیمرہ اسٹریم استعمال کرتا ہے",
      "startCamera": "کیمرہ اسکینر شروع کریں",
      "stopCamera": "کیمرہ بند کریں",
      "cameraHint": "کیمرہ QR کوڈ کی طرف کریں — ڈی کوڈ ہوتے ہی کیپچر خود بخود رک جائے گا۔",
      "uploadImageError": "براہ کرم QR کوڈ والی PNG، JPG، WebP یا SVG تصویر اپ لوڈ کریں۔",
      "unableToLoad": "«{name}» لوڈ نہیں ہو سکی۔",
      "noQrDetected": "اس تصویر میں QR کوڈ نہیں ملا۔ واضح فوکس، صاف پرسکون زون کے حاشیے اور تیز کنٹراسٹ رکھیں۔",
      "unableToScan": "تصویر اسکین نہیں ہو سکی۔",
      "cameraUnsupported": "اس براؤزر میں کیمرہ اسکین سپورٹ نہیں ہوتا۔",
      "cameraDenied": "کیمرے کی اجازت نہیں ملی یا کوئی کیمرہ ڈیوائس دستیاب نہیں ہے۔ اس کے بجائے QR کوڈ کی تصویر اپ لوڈ کریں۔",
      "decodedPayload": "ڈی کوڈ شدہ پے لوڈ · {kind}",
      "sourceLabel": "ماخذ: ",
      "copyPayload": "پے لوڈ کاپی کریں",
      "decodedAria": "ڈی کوڈ شدہ QR متن",
      "detectedLink": "پایا گیا ویب لنک: ",
      "uploadedPreviewAlt": "اپ لوڈ شدہ QR کوڈ کا پیش نظارہ",
      "firstNameLabel": "پہلا نام",
      "lastNameLabel": "خاندانی نام",
      "orgLabel": "تنظیم",
      "jobTitleLabel": "عہدہ",
      "defaultJobTitle": "پروڈکٹ ڈیزائنر",
      "phoneLabel": "فون نمبر",
      "emailLabel": "ای میل ایڈریس",
      "websiteLabel": "ویب سائٹ کا لنک",
      "rawVcardLabel": "خام vCard 3.0 پے لوڈ",
      "copyVcard": "vCard کاپی کریں",
      "vcardQrAlt": "بنایا گیا vCard QR کوڈ",
      "downloadPng": "PNG ڈاؤن لوڈ کریں",
      "downloadSvg": "SVG ڈاؤن لوڈ کریں"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical اور Hreflang ٹیگز",
      "redirectsMode": "301 ری ڈائریکٹ رول بنانے والا",
      "canonicalLabel": "خود کی طرف اشارہ کرنے والا Canonical URL",
      "alternatesLabel": "زبان اور علاقے کے متبادل",
      "addLocale": "زبان شامل کریں",
      "langCodeAria": "زبان کا کوڈ",
      "alternateUrlAria": "متبادل URL",
      "removeLocaleAria": "زبان کی قطار ہٹائیں",
      "htmlTagsLabel": "<head> میں HTML لنک ٹیگز",
      "copyHtml": "HTML کاپی کریں",
      "xmlSnippetLabel": "XML سائٹ میپ میں <xhtml:link> اسنیپٹ",
      "copyXml": "XML کاپی کریں",
      "cloudflareFormat": "Cloudflare Pages ‏(_redirects)",
      "htaccessFormat": "Apache ‏(.htaccess)",
      "nginxFormat": "Nginx ‏(server بلاک)",
      "copyRules": "{n} رولز کاپی کریں",
      "pairsLabel": "ماخذ ← منزل کے جوڑے (کوما، ٹیب یا « -> » سے الگ کریں)",
      "generatedConfigLabel": "بنائی گئی 301 ری ڈائریکٹ کنفیگ",
      "skippedInvalid": "{n} لائنیں چھوڑ دی گئیں — کوئی منزل نہیں ملی۔",
      "invalidHreflangWarning": "غلط hreflang کوڈ چھوڑ دیے گئے: {codes} — دو حرفوں کا زبان کا کوڈ استعمال کریں (جیسے en یا es)، پھر چاہیں تو علاقہ شامل کریں (جیسے en-US)، یا x-default۔"
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "تکنیکی SEO واضح، کرال کیے جانے والے URLs، درست canonical ٹیگز اور منظم XML سائٹ میپ سے شروع ہوتی ہے۔ جب پبلشر صارف کی نیت پر مرکوز مفید مواد لکھتے ہیں بجائے کی ورڈ بھرنے کے، تو سرچ انجن خود بخود موضوع کی گہرائی سمجھ لیتے ہیں۔ اپنے عنوان، میٹا تفصیل اور اندرونی لنکس کا باقاعدگی سے جائزہ لیں۔",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "ادارتی رہنمائی:",
      "guidanceBody": "جدید سرچ انجن کی ورڈ ڈینسٹی کے کسی مقررہ حصے پر عمل کرنے پر انعام نہیں دیتے۔ اس تقسیم کے آڈٹ کو حادثاتی تکرار پر نظر رکھنے یا یہ یقینی بنانے کے لیے استعمال کریں کہ اہم تصورات آپ کے متن میں واضح طور پر ظاہر ہوں۔",
      "targetLabel": "ہدف لفظ / جملہ (اختیاری)",
      "targetPlaceholder": "جیسے technical seo",
      "phraseLengthLabel": "جملے کی لمبائی",
      "oneWord": "ایک لفظ",
      "twoWord": "دو الفاظ کے جملے",
      "threeWord": "3 الفاظ کے جملے",
      "stripHtml": "HTML ٹیگز ہٹا دیں",
      "ignoreStopWords": "عام الفاظ نظرانداز کریں",
      "textLabel": "مضمون کا مسودہ یا پیسٹ شدہ HTML کاپی",
      "totalWords": "کل الفاظ",
      "uniqueVocabulary": "منفرد الفاظ",
      "readingTime": "متوقع پڑھنے کا وقت",
      "targetPrefix": "ہدف: ",
      "hits": "{n} بار ({d}%)",
      "rankHeader": "درجہ",
      "termHeader": "لفظ / N-gram",
      "occurrencesHeader": "بار",
      "shareHeader": "حصہ (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – براؤزر میں چلنے والے تیز ویب ٹولز",
      "defaultDescription": "متن کی تدوین، ڈویلپر انکوڈنگ، مالی کیلکولیٹر، PDF ورک فلو اور SEO کے لیے 83 تیز، پرائیویسی کا احترام کرنے والے براؤزر ٹولز دیکھیں۔",
      "pageTitleLabel": "صفحے کا عنوان (<title> / og:title)",
      "titleChars": "{n} حروف (مثالی 30–60)",
      "metaDescriptionLabel": "میٹا تفصیل",
      "descChars": "{n} حروف (مثالی 120–160)",
      "canonicalUrlLabel": "Canonical URL",
      "ogImageLabel": "Open Graph تصویر کا لنک ‏(1200×630 تجویز کردہ)",
      "siteNameLabel": "سائٹ کا نام (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "ٹوئٹر کارڈ",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots کی follow ہدایت",
      "includeViewportLabel": "charset اور viewport ٹیگز شامل کریں",
      "generatedTagsLabel": "بنائے گئے <head> HTML ٹیگز",
      "copyHtml": "HTML کاپی کریں",
      "downloadHtml": ".html ڈاؤن لوڈ کریں",
      "socialPreviewLabel": "سوشل شیئر کارڈ کا پیش نظارہ",
      "socialPreviewFallback": "سوشل شیئر کا پیش نظارہ",
      "untitledPage": "بغیر عنوان صفحہ",
      "metaSnippetFallback": "میٹا تفصیل کا سنیپٹ یہاں نظر آئے گا۔"
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "کلائنٹ سائیڈ HTML سورس آڈٹ:",
      "auditBody": "براؤزر کسی بھی بیرونی سائٹ سے کراس اوریجن اسکریپنگ روکتے ہیں، اور نجی سرچ اینالیٹکس تک رسائی نہیں رکھتے۔ اپنے صفحے کا HTML سورس نیچے پیسٹ کریں (صفحے کا سورس دیکھیں) اور DOM ٹیگز مقامی طور پر آڈٹ کریں۔",
      "pastedHtmlLabel": "پیسٹ شدہ HTML سورس",
      "loadSampleHtml": "نمونہ HTML لوڈ کریں",
      "htmlPlaceholder": "خام <html>...</html> سورس یہاں پیسٹ کریں...",
      "scoreLabel": "DOM آڈٹ اسکور",
      "checksPassed": "{passed} / {total} چیک پاس",
      "linksSummary": "لنکس: {total} ({internal} اندرونی / {external} بیرونی)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "طے شدہ (index, follow)",
      "headingOutline": "سرخیوں کا خاکہ (H1–H4)",
      "emptyState": "عنوان، تفصیل، سرخیاں، canonical اور alt ٹیگز دیکھنے کے لیے بائیں طرف HTML سورس پیسٹ کریں۔",
      "checkTitle": "عنوان ٹیگ (<title>)",
      "checkMetaDesc": "میٹا تفصیل",
      "checkH1": "بالکل ایک <h1> سرخی",
      "checkCanonical": "Canonical URL (<link rel=\"canonical\">)",
      "checkAlt": "تصاویر کی Alt خصوصیات",
      "checkOgJsonLd": "Open Graph اور JSON-LD منظم ڈیٹا",
      "titleDetail": "{n} حروف: \"{title}\"",
      "titleMissing": "<head> میں کوئی <title> ٹیگ نہیں ملا۔",
      "descDetail": "{n} حروف (ہدف 120–160)۔",
      "descMissing": "کوئی <meta name=\"description\"> نہیں ملا۔",
      "h1Detail": "{n} <h1> عناصر ملے۔",
      "canonicalMissing": "کوئی canonical ٹیگ اعلان نہیں ہوا۔",
      "noImages": "مارک اپ میں کوئی <img> عنصر نہیں ہے۔",
      "altDetail": "{with}/{total} تصاویر میں وضاحتی alt متن ہے۔",
      "ogDetail": "og:title {presence} · {n} JSON-LD بلاکس۔",
      "present": "موجود",
      "missing": "موجود نہیں"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "انڈیکسنگ ہدایات",
      "indexOption": "index (سرچ میں انڈیکس کی اجازت دیں)",
      "noindexOption": "noindex (سرچ رزلٹ سے دور رکھیں)",
      "linkCrawlingLabel": "لنک کرالنگ",
      "followOption": "follow (لنک سگنل آگے بھیجیں)",
      "nofollowOption": "nofollow (لنکس کو فالو نہ کریں)",
      "largeOption": "large (اہل سرچ)",
      "htmlTagLabel": "<head> میں HTML meta ٹیگ",
      "copyHtmlTag": "HTML ٹیگ کاپی کریں",
      "httpHeaderLabel": "HTTP جوابی ہیڈر ‏(PDF / غیر HTML)",
      "copyHeader": "ہیڈر کاپی کریں",
      "cloudflareHeadersLabel": "Cloudflare Pages ‏_headers",
      "cloudflarePathAria": "Cloudflare _headers پاتھ پیٹرن",
      "copyBlock": "بلاک کاپی کریں"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "شروع کے ٹیمپلیٹس:",
      "allowAll": "تمام کرالرز کو اجازت دیں",
      "standardWebApp": "معیاری ویب ایپ / SaaS",
      "wordpressClean": "صاف ورڈپریس",
      "stagingBlockAll": "اسٹیجنگ (سب بلاک کریں)",
      "crawlerRules": "کرالر پاتھ رولز",
      "addRule": "رول شامل کریں",
      "directiveAria": "ہدایت",
      "pathAria": "پاتھ",
      "deleteRuleAria": "رول حذف کریں",
      "crawlDelayLabel": "Crawl-delay (سیکنڈ میں، اختیاری)",
      "crawlDelayPlaceholder": "کوئی نہیں",
      "sitemapUrlsLabel": "سائٹ میپ لنکس (ہر لائن میں ایک لنک)",
      "generatedLabel": "بنائی گئی robots.txt فائل",
      "invalidSitemapWarning": "غلط سائٹ میپ لنکس چھوڑ دیے گئے: {urls} — سائٹ میپ کی لائنوں میں مکمل http(s) لنکس ہونے چاہییں۔"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "تیز براؤزر ٹولز کیسے بنائیں",
      "defaultFaqQ1": "کیا UtilityFlow ٹولز مقامی براؤزر میں چلاتا ہے؟",
      "defaultFaqA1": "جی ہاں۔ تقریباً تمام ٹولز براہ راست براؤزر کی میموری میں چلتے ہیں — ان پٹ بیرونی سرورز کو نہیں بھیجے جاتے۔",
      "defaultFaqQ2": "کیا منظم JSON-LD SEO میں مدد کرتا ہے؟",
      "defaultFaqA2": "جی ہاں۔ درست Schema.org JSON-LD سرچ کرالرز کو اداروں کا سیاق واضح کرتا ہے اور رچ رزلٹ کی اہلیت بڑھاتا ہے۔",
      "defaultProductName": "پیشہ ورانہ آرام دہ مکینیکل کی بورڈ",
      "defaultProductDesc": "سافٹ ویئر ڈویلپرز کے لیے ڈیزائن کیا گیا کم پروفائل وائرلیس کی بورڈ۔",
      "defaultCrumbHome": "ہوم",
      "defaultCrumbSeo": "SEO ٹولز",
      "defaultCrumbSchema": "Schema مارک اپ بنانے والا",
      "headlineLabel": "مرکزی سرخی",
      "authorNameLabel": "مصنف کا نام",
      "publisherNameLabel": "ناشر کا نام",
      "datePublishedLabel": "اشاعت کی تاریخ",
      "articleUrlLabel": "مضمون کا لنک",
      "featuredImageLabel": "نمایاں تصویر کا لنک",
      "questionLabel": "سوال #{n}",
      "removeQuestionAria": "سوال {n} حذف کریں",
      "questionPlaceholder": "سوال",
      "acceptedAnswerPlaceholder": "قبول شدہ جواب",
      "addFaqRow": "عمومی سوال کی قطار شامل کریں",
      "productNameLabel": "پروڈکٹ کا نام",
      "descriptionLabel": "تفصیل",
      "priceLabel": "قیمت",
      "currencyLabel": "کرنسی",
      "availabilityLabel": "دستیابی",
      "orgNameLabel": "تنظیم کا نام",
      "websiteUrlLabel": "ویب سائٹ کا لنک",
      "logoUrlLabel": "لوگو کا لنک",
      "breadcrumbLabelAria": "بریڈ کرمب لیبل {n}",
      "breadcrumbUrlAria": "بریڈ کرمب لنک {n}",
      "labelPlaceholder": "لیبل",
      "addLevel": "سطح شامل کریں",
      "jsonLdOutputLabel": "JSON-LD <script> آؤٹ پٹ",
      "copyScriptTag": "اسکرپٹ ٹیگ کاپی کریں"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "ورڈ کاؤنٹر – الفاظ اور حروف گنیں | UtilityFlow",
      "defaultDescription": "JSON پے لوڈ فوراً اپنے براؤزر میں فارمیٹ، تصدیق، چھوٹا اور ترتیب دیں — لائن اور کالم کے ساتھ نحو کی خرابی کی تفصیل سمیت۔",
      "desktopSerp": "ڈیسک ٹاپ سرچ رزلٹ (عنوان ~580 پکسل)",
      "mobileSerp": "موبائل سرچ رزلٹ (تفصیل ~120 حروف)",
      "copyTitleMeta": "عنوان اور تفصیل کاپی کریں",
      "seoTitleLabel": "SEO عنوان",
      "titleMetrics": "{chars} حروف · ~{px} پکسل / زیادہ سے زیادہ 580 پکسل",
      "metaDescriptionLabel": "میٹا تفصیل",
      "descMetrics": "{chars} حروف · ~{px} پکسل",
      "pageUrlLabel": "صفحے کا لنک (بریڈ کرمب پیش نظارے کے لیے)",
      "siteNameLabel": "سائٹ کا نام",
      "boldKeywordLabel": "بولڈ کی ورڈ",
      "optionalPlaceholder": "اختیاری",
      "datePrefixLabel": "تاریخ کا سابقہ",
      "datePlaceholder": "جیسے Nov 12, 2025",
      "desktopSimulation": "ڈیسک ٹاپ سرچ سنیپٹ کی نقل",
      "mobileSimulation": "موبائل سرچ سنیپٹ کی نقل",
      "titleFallback": "آپ کا SEO عنوان یہاں نظر آئے گا",
      "descFallback": "آپ کی تفصیل کا پیش نظارہ یہاں نظر آئے گا۔"
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "تکنیکی SEO کے لیے صاف URLs کیسے بنائیں!\n2026 میں کافی اور پیداواریت کے 10 شاندار ٹولز\nXML سائٹ میپ اور Robots.txt کی مکمل چیک لسٹ",
      "domainLabel": "بنیادی ڈومین / سب فولڈر (مکمل URL پیش نظارے کے لیے)",
      "separatorLabel": "الفاظ کا جداکار",
      "hyphenOption": "ہائفن (-) — گوگل کی سفارش",
      "underscoreOption": "انڈر اسکور (_)",
      "maxLengthLabel": "سلگ کی زیادہ سے زیادہ لمبائی ({n} حروف)",
      "stripStopWords": "اختیاری انگریزی عام الفاظ ہٹا دیں (a, the, and, of, in, to)",
      "trailingSlash": "آخر میں سلیش شامل کریں (/)",
      "titlesLabel": "عنوان / صفحے کی سرخیاں (بلک بنانے کے لیے ہر لائن میں ایک عنوان)",
      "generatedLabel": "بنائے گئے SEO سلگ ({n})",
      "copyAllSlugs": "تمام سلگ کاپی کریں",
      "copyAllUrls": "تمام مکمل لنکس کاپی کریں",
      "originalTitleHeader": "اصل عنوان",
      "slugUrlHeader": "SEO سلگ اور مکمل لنک",
      "copyHeader": "کاپی کریں"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> تاریخ (اختیاری)",
      "changefreqLabel": "<changefreq> اشارہ",
      "priorityLabel": "طے شدہ <priority> قیمت",
      "omitTag": "ٹیگ چھوڑ دیں",
      "deduplicateLabel": "بالکل ایک جیسے لنکس ہٹا دیں",
      "urlsLabel": "Canonical لنکس (ہر لائن میں ایک مکمل https:// لنک)",
      "skippedInvalid": "{n} غلط لنک لائنیں چھوڑ دی گئیں: ",
      "generatedLabel": "بنائی گئی sitemap.xml فائل ({n} لنکس)",
      "copyXml": "XML کاپی کریں",
      "downloadXml": ".xml ڈاؤن لوڈ کریں",
      "generatedAria": "بنائی گئی XML سائٹ میپ"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "ہم تخلیق کاروں اور ٹیموں کے لیے تیز براؤزر ٹولز بناتے ہیں۔   \n\nہر منگل کو نیا ہفتہ وار ورک فلو۔\n\nنیچے دیے گئے لنک سے مفت ٹولز آزمائیں!",
      "modeBraille": "غیر مرئی جداکار (⠀ U+2800)",
      "modeDot": "سادہ نقطے والا جداکار (.)",
      "modeClean": "صرف آخر کی خالی جگہیں صاف کریں",
      "collapse": "حادثاتی دہری خالی جگہیں ہٹا دیں",
      "labelRaw": "کیپشن یا بائیو کا مسودہ",
      "phRaw": "اپنا کیپشن لکھیں — جہاں پیراگراف کا وقفہ چاہیں وہاں خالی لائن چھوڑیں...",
      "tip": "اشارہ: اگر اوپر لائن کے آخر میں خالی جگہیں ہوں تو سوشل ایپس اکثر خالی پیراگراف حذف کر دیتی ہیں۔",
      "labelOut": "پیسٹ کے لیے تیار آؤٹ پٹ",
      "copyFormatted": "فارمیٹ شدہ کیپشن کاپی کریں",
      "charsLabel": "حروف:",
      "linesLabel": "لائنیں:",
      "blankLabel": "باقی خالی وقفے:",
      "fitsBio": "150 حروف والی انسٹاگرام بائیو کی حد میں آتا ہے",
      "captionLength": "کیپشن کی لمبائی (بائیو کی 150 حروف کی حد سے زیادہ)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "مسئلہ ← اشتعال ← حل (PAS)",
        "tutorial": "3 قدموں والا قابل عمل ٹیوٹوریل",
        "bab": "پہلے ← بعد ← پل",
        "checklist": "لانچ / آڈٹ چیک لسٹ",
        "myth": "عام غلط فہمی بمقابلہ عملی حقیقت"
      },
      "frameworkDescriptions": {
        "pas": "ورک فلو کا حل پیش کرنے سے پہلے ایک ٹھوس پریشانی اجاگر کرتا ہے۔",
        "tutorial": "نمبر والی ہدایتی ساخت، LinkedIn کی سلائیڈز اور محفوظ پوسٹس کے لیے موزوں۔",
        "bab": "پرانی رکاوٹ کا منظم نتیجے سے موازنہ کرتا ہے۔",
        "checklist": "محفوظ کرنے کے قابل واضح چیک لسٹ۔",
        "myth": "پرانی نصیحت کو سیدھے، مختصر متبادلوں سے چیلنج کرتا ہے۔"
      },
      "frameworkLabels": {
        "fixesHeading": "یہ واقعی کیا ٹھیک کرتا ہے:",
        "beforeLabel": "پہلے: ",
        "afterLabel": "بعد: ",
        "bridgeHeading": "پل:",
        "mythLabel": "عام غلط فہمی: ",
        "worksHeading": "عملی طور پر کیا کام کرتا ہے:"
      },
      "sampleHook": "مہم کے لنکس ہاتھ سے فارمیٹ کرنے میں گھنٹے ضائع کرنا بند کریں۔",
      "sampleContext": "غیر مستقل UTM پیرامیٹرز اور خراب بائیو وقفہ خاموشی سے اینالیٹکس رپورٹس خراب کر دیتے ہیں۔",
      "samplePoints": "utm_source اور utm_medium ٹیگز چھوٹے حروف میں مستقل رکھیں\nشائع کرنے سے پہلے کریکٹر فولڈ چیک کریں\nبغیر آخر کی خالی جگہوں کے صاف پیراگراف وقفے رکھیں",
      "sampleCta": "اپنی اگلی پروڈکٹ لانچ کے لیے یہ چیک لسٹ محفوظ کریں۔",
      "infoTitle": "طے شدہ ٹیمپلیٹ انضمام:",
      "infoBody": "یہ ٹول براہ راست آپ کے براؤزر میں منظم کاپی رائٹنگ فریم ورک استعمال کرتا ہے — بغیر کسی AI ماڈل یا بیرونی API کے، اور اس کا دعویٰ بھی نہیں کرتا۔",
      "labelHook": "افتتاحی ہک (پہلی ایک یا دو لائنیں)",
      "labelContext": "سیاق / مسئلے کا بیان",
      "labelPoints": "اہم نکات (ہر لائن میں ایک نکتہ)",
      "labelCta": "عمل کی دعوت (CTA)",
      "labelTags": "ٹیگز",
      "previewTitle": "فارمیٹ شدہ کیپشن کا پیش نظارہ",
      "copyCaption": "کیپشن کاپی کریں",
      "charsLabel": "حروف:",
      "wordsLabel": "الفاظ:",
      "fits": "آتا ہے",
      "threadNeeded": "تھریڈ درکار",
      "tooLong": "بہت لمبا"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "فارمیٹنگ کا انداز اور رسائی",
      "optCamel": "PascalCase ‏(#CamelCase — اسکرین ریڈرز کے لیے موزوں)",
      "optLower": "سب چھوٹے حروف (#lowercase)",
      "optPreserve": "اصل انداز برقرار رکھیں",
      "outLabel": "آؤٹ پٹ کی ترتیب",
      "optInline": "ایک لائن (خالی جگہوں سے الگ)",
      "optNewline": "ہر لائن میں ایک ٹیگ",
      "optDots": "کیپشن فولڈ جداکار (.\n.\n.)",
      "dedupe": "دہرائے گئے ٹیگز ہٹا دیں",
      "labelRaw": "گندے کی ورڈز یا ٹیگز (کوما، خالی جگہ یا لائنوں سے الگ)",
      "labelResult": "صاف ٹیگ سیٹ",
      "copyHashtags": "ٹیگز کاپی کریں",
      "statClean": "صاف ٹیگز",
      "statDupes": "دہراؤ ہٹائے گئے",
      "statIgMax": "انسٹاگرام کی زیادہ سے زیادہ حد (30)",
      "statWithin": "انسٹاگرام کی 30 ٹیگز کی حد کے اندر",
      "statExceeds": "30 ٹیگز کی حد سے زیادہ",
      "statChars": "آؤٹ پٹ کے حروف"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 حروف · حروف، اعداد اور انڈر اسکور",
        "instagram": "1–30 حروف · حروف، اعداد، نقطے اور انڈر اسکور",
        "tiktok": "2–24 حروف · حروف، اعداد، انڈر اسکور اور نقطے",
        "youtube": "3–30 حروف · حروف، اعداد اور _ و - و .",
        "threads": "1–30 حروف · انسٹاگرام کے ساتھ مشترکہ نام کی جگہ",
        "github": "1–39 حروف · حروف، اعداد اور اکیلی ہائفن"
      },
      "infoTitle": "قواعد کی جانچ اور براہ راست تصدیق کے لنکس:",
      "infoBodyBefore": "دستیابی کا اندازہ لگائے بغیر، آف لائن انداز اور حروف کی حد چیک کرتا ہے۔ براہ راست دعوے کی حیثیت چیک کرنے کے لیے کسی بھی پلیٹفارم کا",
      "infoEm": "پروفائل لنک کھولیں",
      "infoBodyAfter": "لنک پر کلک کریں۔",
      "labelBrand": "برانڈ، پروجیکٹ یا تخلیق کار کا نام",
      "phBrand": "جیسے Utility Hub",
      "labelActive": "جانچنے والا فعال ہینڈل",
      "copyAt": "@ کاپی کریں",
      "variationsTitle": "مطابق ہینڈل کی مختلف صورتیں:",
      "thPlatform": "پلیٹفارم",
      "thRules": "فارمیٹنگ قواعد",
      "thStatus": "انداز کی حیثیت",
      "thCheck": "دستی چیک",
      "valid": "درست فارمیٹ",
      "invalid": "غلط انداز / لمبائی",
      "checkUrl": "لنک چیک کریں"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "بولڈ (Sans-Serif)",
        "sans-italic": "ترچھا (Sans-Serif)",
        "sans-bold-italic": "بولڈ ترچھا (Sans-Serif)",
        "serif-bold": "بولڈ (Serif)",
        "monospace": "مونو اسپیس",
        "double-struck": "ڈبل اسٹرک (بلیک بورڈ)",
        "script-bold": "بولڈ ہاتھ کی تحریر",
        "fraktur-bold": "بولڈ فراکٹور",
        "small-caps": "چھوٹے بڑے حروف",
        "fullwidth": "مکمل چوڑائی کی جمالیات"
      },
      "styleNotes": {
        "sans-bold": "بائیو سرخیوں اور پوسٹ ہکس کے لیے واضح اور پڑھنے میں آسان",
        "sans-italic": "کیپشن میں ہلکا زور",
        "sans-bold-italic": "مضبوط دعوتیں اور سیکشن جداکار",
        "serif-bold": "ادارتی انداز میں زور",
        "monospace": "کوڈ شناخت، تاریخیں اور تکنیکی ٹیگز",
        "double-struck": "نمائشی حروف",
        "script-bold": "آرائشی بائیو دستخط",
        "fraktur-bold": "گوتھک نمائشی حروف",
        "small-caps": "بڑے حروف میں صاف پروفائل لیبل",
        "fullwidth": "پرانے انداز میں وسیع وقفے والی چوڑی سوشل سرخیاں"
      },
      "sampleText": "تخلیق کاروں کا نیا ٹول سیٹ 2025",
      "accessibilityTitle": "رسائی کا نوٹ:",
      "accessibilityBody": "سجے ہوئے Unicode حروف ریاضی کی علامتوں کے بلاکس سے آتے ہیں، اس لیے اسکرین ریڈرز انہیں حرف بہ حرف پڑھ سکتے ہیں یا چھوڑ سکتے ہیں، اور کچھ سرچ انڈیکس انہیں نظرانداز کرتے ہیں۔ انہیں پورے پیراگراف کی بجائے مختصر زور کے لیے کم استعمال کریں۔",
      "labelInput": "سجانے والا متن",
      "placeholder": "مختصر سرخی، بائیو لائن یا عمل کی دعوت لکھیں...",
      "previewEmpty": "پیش نظارہ"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "انسٹاگرام بائیو",
        "linkedinPost": "لنکڈان پوسٹ",
        "newsletter": "نیوز لیٹر",
        "youtubeDescription": "یوٹیوب تفصیل"
      },
      "presetsLabel": "چینل کے فوری پری سیٹس:",
      "errorEmpty": "منزل کی ویب سائٹ کا لنک درج کریں۔",
      "errorInvalid": "درست منزل کا لنک درج کریں (جیسے https://example.com/landing)۔",
      "labelUrl": "منزل کی ویب سائٹ کا لنک *",
      "labelSource": "مہم کا ماخذ (utm_source) *",
      "phSource": "جیسے instagram یا newsletter یا google",
      "labelMedium": "مہم کا ذریعہ (utm_medium) *",
      "phMedium": "جیسے social یا cpc یا email یا video",
      "labelCampaign": "مہم کا نام (utm_campaign)",
      "phCampaign": "جیسے spring_launch",
      "labelContent": "مہم کا مواد (utm_content)",
      "phContent": "جیسے hero_banner یا bio_button",
      "labelTerm": "مہم کا لفظ (utm_term)",
      "phTerm": "ادا شدہ کی ورڈ یا اختیاری سامعین ٹیگ",
      "normalizeLabel": "چھوٹے حروف لازمی کریں اور خالی جگہوں کو انڈر اسکور (`_`) میں بدل دیں",
      "generatedTitle": "بنایا گیا مہم کا لنک",
      "copyUtm": "UTM لنک کاپی کریں",
      "thParam": "کوئری پیرامیٹر",
      "thValue": "لاگو شدہ قیمت"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "شروع کا صفحہ نمبر 1 یا اس سے بڑا صحیح عدد ہونا چاہیے۔",
      "stampedSuccess": (n: number, size: string) => `${n} صفحات پر صفحہ نمبر شامل کر دیے گئے (${size})۔`,
      "pageOfLabel": (cur: number, total: number) => `صفحہ ${cur} / ${total}`,
      "dropTitleEmpty": "صفحہ نمبر شامل کرنے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "رپورٹس، معاہدوں اور بنڈلز میں صاف ویکٹر صفحہ لیبل لگاتا ہے",
      "labelPos": "موضع",
      "optBottomCenter": "نیچے درمیان میں",
      "optBottomRight": "نیچے دائیں",
      "optBottomLeft": "نیچے بائیں",
      "optTopRight": "اوپر دائیں",
      "labelFmt": "لیبل کا فارمیٹ",
      "optPageOf": "صفحہ 1 / N",
      "optSlash": "1 / N",
      "optNumberOnly": "1، 2، 3...",
      "labelStart": "شروع کا نمبر",
      "labelSize": "فونٹ سائز (پوائنٹ)",
      "opt9": "9 پوائنٹ (ہلکا)",
      "opt11": "11 پوائنٹ (معیاری)",
      "opt14": "14 پوائنٹ (بڑا)",
      "skipCover": "کور صفحہ چھوڑ دیں (نمبر صفحہ 2 سے شروع کریں)",
      "numbering": "صفحات پر نمبر لگائے جا رہے ہیں...",
      "addBtn": "صفحہ نمبر شامل کریں اور ڈاؤن لوڈ کریں"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `تصویر «${name}» ڈی کوڈ نہیں ہو سکی۔`,
      "errCanvas": "Canvas 2D سیاق دستیاب نہیں ہے۔",
      "errConvert": (name: string) => `«${name}» PNG میں کنورٹ نہیں ہو سکی۔`,
      "errNotImage": (name: string) => `«${name}» سپورٹ شدہ تصویر فائل نہیں ہے (PNG، JPG یا WebP)۔`,
      "errRead": (name: string) => `«${name}» پڑھی نہیں جا سکی۔`,
      "errLoad": "تصاویر لوڈ نہیں ہو سکیں۔",
      "errEmpty": "پہلے کم از کم ایک تصویر شامل کریں۔",
      "errBuild": "تصاویر سے PDF بنائی نہیں جا سکی۔",
      "createdSuccess": (n: number, size: string) => `${n} صفحات کی صاف PDF بنا دی گئی (${size})۔`,
      "dropTitle": "PNG، JPG یا WebP تصاویر منتخب کریں",
      "dropSub": "اسکرین شاٹس، اسکین یا تصاویر مقامی طور پر ایک PDF فائل میں بدلیں",
      "labelSize": "PDF صفحے کا سائز",
      "optA4": "A4 عمودی (210 × 297 ملی میٹر)",
      "optLetter": "US Letter ‏(8.5 × 11 انچ)",
      "optFit": "تصویر کے بالکل ابعاد",
      "labelMargin": "صفحے کا حاشیہ",
      "optMargin0": "بغیر حاشیے (0 پوائنٹ)",
      "optMargin24": "معیاری حاشیہ (24 پوائنٹ)",
      "optMargin48": "چوڑا حاشیہ (48 پوائنٹ)",
      "labelOut": "آؤٹ پٹ فائل کا نام",
      "moveUp": (name: string) => `${name} کو اوپر لے جائیں`,
      "moveDown": (name: string) => `${name} کو نیچے لے جائیں`,
      "removeFile": (name: string) => `${name} حذف کریں`,
      "building": "PDF بنائی جا رہی ہے...",
      "convertBtn": (n: number) => `${n} تصاویر کو PDF میں کنورٹ کریں`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "منتخب PDF فائلیں پڑھی نہیں جا سکیں۔",
      "errMin2": "مرج کرنے کے لیے کم از کم 2 PDF فائلیں شامل کریں۔",
      "mergedSuccess": (n: number, pages: number, size: string) => `${n} PDF فائلیں صاف طور پر مرج کر دی گئیں (${pages} صفحات، ${size})۔`,
      "dropValidating": "PDF فائلوں کی تصدیق ہو رہی ہے...",
      "dropTitle": "کئی PDF فائلیں منتخب کریں یا ڈراپ کریں",
      "dropSub": "100% براؤزر میں pdf-lib سے مرج · صرف غیر انکرپٹ شدہ PDF · کبھی اپ لوڈ نہیں ہوتیں",
      "filesQueued": "قطار میں فائلیں",
      "totalPagesLabel": "کل صفحات",
      "combinedSize": "ان پٹ کا مشترکہ سائز",
      "clearQueue": "قطار صاف کریں",
      "pageSingular": "صفحہ",
      "pagePlural": "صفحات",
      "moveUp": (name: string) => `${name} کو اوپر لے جائیں`,
      "moveDown": (name: string) => `${name} کو نیچے لے جائیں`,
      "removeFile": (name: string) => `${name} حذف کریں`,
      "outName": "آؤٹ پٹ فائل کا نام",
      "merging": "PDF فائلیں مرج ہو رہی ہیں...",
      "mergeBtn": (n: number) => `${n} PDF فائلیں مرج کریں اور ڈاؤن لوڈ کریں`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "بدلے جا سکنے والے میٹا ڈیٹا خانے صاف کر دیے گئے۔ لاگو کرنے کے لیے «محفوظ کریں اور PDF ڈاؤن لوڈ کریں» پر کلک کریں۔",
      "savedSuccess": (size: string) => `اپ ڈیٹ شدہ میٹا ڈیٹا والی PDF محفوظ کر دی گئی (${size})۔`,
      "dropTitleEmpty": "میٹا ڈیٹا دیکھنے یا بدلنے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "دستاویز کی خصوصیات دیکھیں، مصنف/سافٹ ویئر ٹیگز صاف کریں یا صاف SEO عنوان سیٹ کریں",
      "labelTitle": "دستاویز کا عنوان",
      "labelAuthor": "مصنف",
      "labelSubject": "موضوع / خلاصہ",
      "labelKeywords": "کی ورڈز (کوما سے الگ)",
      "labelCreator": "بنانے والی ایپلیکیشن",
      "labelProducer": "PDF پروڈیوسر",
      "saving": "PDF محفوظ ہو رہی ہے...",
      "saveBtn": "میٹا ڈیٹا محفوظ کریں اور PDF ڈاؤن لوڈ کریں",
      "stripBtn": "بدلے جا سکنے والے خانے صاف کریں"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "گھمانے کے لیے کوئی مماثل صفحہ نہیں ملا۔",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `${b} میں سے ${a} صفحات ${deg}° گھڑی کی سمت گھما دیے گئے (${size})۔`,
      "dropTitleEmpty": "صفحات گھمانے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "تمام صفحات یا منتخب صفحہ حد مقامی طور پر گھمائیں، بغیر سرور اپ لوڈ",
      "labelAngle": "گھمانے کا زاویہ",
      "opt90": "90° گھڑی کی سمت (دائیں)",
      "opt270": "90° گھڑی کی مخالف سمت (بائیں / 270°)",
      "opt180": "180° الٹا",
      "labelScope": "لاگو کریں",
      "optAll": (n: number) => `تمام صفحات (${n})`,
      "optRange": "مخصوص صفحہ حدود",
      "optOdd": "صرف طاق صفحات",
      "optEven": "صرف جفت صفحات",
      "labelRangeInput": (n: number) => `صفحہ نمبر / حدود (1–${n})`,
      "phRange": "جیسے 1، 3-5",
      "rotating": "صفحات گھمائے جا رہے ہیں...",
      "rotateBtn": "گھماؤ لاگو کریں اور PDF ڈاؤن لوڈ کریں"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- صفحہ ${n} ---`,
      "dropExtracting": "PDF کی متن پرت نکالی جا رہی ہے...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropTitleEmpty": "متن نکالنے کے لیے متنی PDF فائل منتخب کریں",
      "dropSub": "PDF.js سے مقامی طور پر ایمبیڈ شدہ Unicode متن نکالتا ہے · بغیر سرور اپ لوڈ",
      "noTextTitle": "منتخب کیے جانے والی متن پرت نہیں ملی:",
      "noTextBody": "لگتا ہے اس PDF میں اسکین شدہ تصاویر یا مخصوص ویکٹر پاتھ ہیں، ایمبیڈ شدہ متن پرت نہیں۔ کلائنٹ سائیڈ آف لائن OCR نہیں کیا جاتا۔",
      "markersLabelBefore": "صفحہ ہیڈر مارکر شامل کریں (",
      "markersCode": "--- صفحہ N ---",
      "markersLabelAfter": ")",
      "copyText": "متن کاپی کریں",
      "downloadTxt": ".txt ڈاؤن لوڈ کریں",
      "outputAria": "نکالا گیا PDF متن آؤٹ پٹ",
      "pagesScanned": "اسکین شدہ صفحات:",
      "wordsExtracted": "نکالے گئے الفاظ:",
      "textSize": "متن کا سائز:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "براؤزر کینوس کی میموری تیز اور جوابدہ رکھنے کے لیے، ایک بیچ میں زیادہ سے زیادہ 20 صفحات رینڈر کریں۔",
      "errCanvas": "Canvas 2D سیاق دستیاب نہیں ہے۔",
      "dropTitleEmpty": "تصاویر کے طور پر رینڈر کرنے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "PDF.js کینوس سے مقامی رینڈرنگ · PNG یا JPG آؤٹ پٹ",
      "labelRange": "صفحات («all» یا حد جیسے 1-4، 6)",
      "labelFormat": "تصویر کا فارمیٹ",
      "optPng": "PNG (بغیر نقصان / واضح متن)",
      "optJpg": "JPG (کمپریس شدہ، تصاویر کے لیے اچھا)",
      "labelScale": "رینڈر ریزولوشن",
      "optScale1": "1.0× ‏(72 DPI تیز پیش نظارہ)",
      "optScale15": "1.5× ‏(108 DPI معیاری)",
      "optScale2": "2.0× ‏(144 DPI تیز)",
      "rendering": "PDF صفحات رینڈر ہو رہے ہیں...",
      "renderBtn": "PDF صفحات کو تصاویر کے طور پر رینڈر کریں",
      "pageAlt": (n: number) => `صفحہ ${n} کا پیش نظارہ`,
      "pageLabel": (n: number, w: number, h: number) => `صفحہ ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "غیر جانبدار سرمئی",
        "indigo": "برانڈ نیلا",
        "red": "مہر کا سرخ"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "PDF بنانے سے پہلے واٹر مارک کا متن درج کریں۔",
      "appliedSuccess": (text: string, n: number, size: string) => `واٹر مارک «${text}» ${n} صفحات پر لگا دیا گیا (${size})۔`,
      "dropTitleEmpty": "واٹر مارک لگانے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "pdf-lib سے مقامی طور پر صاف ویکٹر متن مہر لگاتا ہے",
      "labelText": "واٹر مارک کا متن",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "مہر کا رنگ",
      "firstPageOnly": "صرف پہلا صفحہ",
      "labelSize": "فونٹ سائز:",
      "ptSuffix": (n: number) => `${n} پوائنٹ`,
      "labelOpacity": "شفافیت:",
      "labelAngle": "گھماؤ:",
      "applying": "PDF پر واٹر مارک لگایا جا رہا ہے...",
      "applyBtn": "واٹر مارک لگائیں اور ڈاؤن لوڈ کریں"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF میں کم از کم ایک صفحہ باقی رہنا چاہیے۔",
      "savedSuccess": (n: number, size: string) => `اپ ڈیٹ شدہ ${n} صفحات والی PDF محفوظ کر دی گئی (${size})۔`,
      "loading": "PDF صفحات اور پیش نظارے لوڈ ہو رہے ہیں...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n} فعال صفحات)`,
      "dropTitleEmpty": "صفحات دوبارہ ترتیب دینے یا حذف کرنے کے لیے PDF فائل منتخب کریں",
      "dropSub": "صفحات مقامی طور پر منتقل کریں، ورق نقل کریں یا ناپسندیدہ صفحات حذف کریں",
      "outCount": "آؤٹ پٹ صفحات کی تعداد:",
      "saving": "PDF محفوظ ہو رہی ہے...",
      "saveBtn": "دوبارہ ترتیب دی گئی PDF محفوظ کریں",
      "thumbAlt": (n: number) => `اصل صفحہ ${n}`,
      "thumbFallback": (n: number) => `اصل ص. ${n}`,
      "posLabel": (n: number) => `موضع #${n}`,
      "origLabel": (n: number) => `(اصل ${n})`,
      "moveEarlierTitle": "پہلے منتقل کریں",
      "moveEarlierAria": (n: number) => `موضع ${n} کو پہلے منتقل کریں`,
      "moveLaterTitle": "بعد میں منتقل کریں",
      "moveLaterAria": (n: number) => `موضع ${n} کو بعد میں منتقل کریں`,
      "dupTitle": "صفحہ نقل کریں",
      "dupAria": (n: number) => `موضع ${n} کا صفحہ نقل کریں`,
      "delTitle": "صفحہ حذف کریں",
      "delAria": (n: number) => `موضع ${n} کا صفحہ حذف کریں`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `برسٹ اسپلٹ میں ہر صفحہ الگ فائل کے طور پر ڈاؤن لوڈ ہوتا ہے۔ ${n} صفحات والی بڑی دستاویزات کے لیے، حدیں ہٹا دیں تاکہ براؤزر بلک ڈاؤن لوڈ بلاک نہ کرے۔`,
      "exportedAll": (n: number) => `ایک صفحے والی ${n} PDF فائلیں ایکسپورٹ کر دی گئیں۔`,
      "errNoMatch": "اس انتخاب سے کوئی صفحہ میل نہیں کھاتا (جیسے، جفت صفحات کے لیے کم از کم 2 صفحات چاہییں)۔",
      "extractedSuccess": (a: number, b: number, size: string) => `${b} میں سے ${a} صفحات نکال لیے گئے (${size})۔`,
      "dropTitleEmpty": "اسپلٹ کرنے یا صفحات نکالنے کے لیے PDF فائل منتخب کریں",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "میموری میں مقامی پروسیسنگ · دستاویز بدلنے کے لیے کلک کریں",
      "modeRange": "صفحہ حدود نکالیں",
      "modeOdd": "صرف طاق صفحات",
      "modeEven": "صرف جفت صفحات",
      "modeBurst": "ہر صفحہ الگ سے نکالیں",
      "labelRange": (n: number) => `نکالنے والے صفحات (1–${n})`,
      "phRange": "جیسے 1-3، 5، 8-10",
      "rangeHintBefore": "کوما اور ہائفن استعمال کریں (جیسے ",
      "rangeHintAfter": ")۔",
      "extracting": "PDF نکالی جا رہی ہے...",
      "splitBtn": "PDF اسپلٹ کریں اور ڈاؤن لوڈ کریں"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "ویب سائٹ کا لنک",
      "tabText": "سادہ متن",
      "tabWifi": "Wi-Fi نیٹ ورک",
      "tabEmail": "ای میل لنک",
      "tabPhone": "فون نمبر",
      "labelUrl": "منزل کا لنک",
      "labelText": "متن کا مواد",
      "labelSsid": "نیٹ ورک کا نام (SSID)",
      "labelSecurity": "سیکیورٹی کی قسم",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "کھلا (بغیر پاس ورڈ)",
      "labelWifiPass": "Wi-Fi پاس ورڈ",
      "hiddenSsid": "چھپا ہوا SSID نیٹ ورک",
      "labelEmailTo": "وصول کنندہ کا ای میل",
      "labelEmailSubject": "موضوع (اختیاری)",
      "labelPhone": "فون نمبر (E.164 فارمیٹ تجویز کردہ)",
      "sizeLabel": (size: number) => `سائز (${size} پکسل)`,
      "labelEc": "خرابی کی اصلاح",
      "labelFg": "سامنے",
      "labelBg": "پس منظر",
      "quietZone": "پرسکون زون کا حاشیہ:",
      "modulesLabel": (margin: number) => `${margin} ماڈیولز`,
      "encodedPayload": "انکوڈ شدہ پے لوڈ اسٹرنگ",
      "copyPayload": "پے لوڈ کاپی کریں",
      "emptyError": "اسکین کیے جانے والا QR کوڈ بنانے کے لیے اوپر مواد درج کریں۔",
      "encodeError": "QR پے لوڈ انکوڈ نہیں ہو سکا۔",
      "qrAlt": "بنایا گیا اسکین کیے جانے والا QR کوڈ",
      "downloadPng": "PNG ڈاؤن لوڈ کریں",
      "downloadSvg": "SVG ڈاؤن لوڈ کریں",
      "copySvg": "SVG کاپی کریں",
      "sampleText": "UtilityFlow میں خوش آمدید!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "معیاری پوسٹ",
        "profileBio": "پروفائل بائیو",
        "caption": "کیپشن",
        "feedPost": "فیڈ پوسٹ",
        "videoCaption": "ویڈیو کیپشن",
        "post": "پوسٹ",
        "videoTitle": "ویڈیو کا عنوان",
        "description": "تفصیل"
      },
      "sampleText": "تیز شپنگ چھوٹی روزانہ بہتریوں سے شروع ہوتی ہے۔\n\nhttps://utilityflow.online/tools/ پر براؤزر میں تخلیق کاروں کے ٹولز آزمائیں — بغیر سائن اپ۔\n\n#CreatorTools #Workflow",
      "labelInput": "پوسٹ / بائیو کا مسودہ",
      "copyDraft": "مسودہ کاپی کریں",
      "placeholder": "اپنا کیپشن، پوسٹ، سوشل بائیو یا یوٹیوب عنوان لکھیں یا پیسٹ کریں...",
      "charsLabel": "حروف:",
      "wordsLabel": "الفاظ:",
      "hashtagsLabel": "ٹیگز:",
      "mentionsLabel": "مینشن:",
      "urlsLabel": "پائے گئے لنکس:",
      "urlsWeighted": "(X پر 23 حروف کے برابر)",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} حد سے زیادہ`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} باقی`,
      "foldLabel": (n: number) => `فولڈ ~${n} حروف`,
      "foldTitle": "فیڈ میں کٹنے / «مزید دکھائیں» فولڈ کا پیش نظارہ",
      "foldDesc": (limit: number, platform: string, surface: string) => `«مزید دکھائیں» دبانے سے پہلے قاری کیا دیکھے گا اس کا پیش نظارہ (${platform} ${surface} پوسٹ کے لیے ${limit} حروف)۔`,
      "selectAria": "کٹنے کا پیش نظارہ کرنے کے لیے پلیٹفارم منتخب کریں",
      "previewEmpty": "پیش نظارہ یہاں نظر آئے گا..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "بغیر ٹریکنگ کے 83 تیز براؤزر ٹولز کیسے بنائے",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "24 ہزار ویوز · 2 دن پہلے",
      "errNotImage": "براہ کرم PNG، JPG یا WebP تصویر فائل منتخب کریں۔",
      "errDecode": "یہ تصویر فائل براؤزر میں ڈی کوڈ نہیں ہو سکی۔",
      "previewEyebrow": "1280 × 720 پیش نظارہ",
      "emptyThumb": "فیڈ میں وضاحت چیک کرنے کے لیے اپنا تھمب نیل اپ لوڈ کریں",
      "thumbAlt": "اپ لوڈ شدہ تھمب نیل کا پیش نظارہ",
      "safeZoneTitle": "ٹائم اسٹیمپ بیج کے اوورلیپ کا علاقہ",
      "chooseThumb": "مقامی تھمب نیل منتخب کریں (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `بدلیں: ${name}`,
      "recommended": "1280×720 (16:9) تجویز کردہ، 2 میگابائٹ سے کم · کبھی اپ لوڈ نہیں ہوتا",
      "diagTitle": "تصویر کی تفصیل کی جانچ",
      "dimLabel": "ابعاد",
      "dimHdOk": "(HD اچھا)",
      "dimUnder": "(1280 پکسل سے کم)",
      "aspectLabel": "اسپیکٹ ریشو",
      "aspectMatch": "16:9 سے میل کھاتا ہے",
      "aspectNo": "16:9 نہیں ہے (کراپ یا بارز ہو سکتے ہیں)",
      "sizeLabel": "فائل کا سائز",
      "sizeOk": "(2 میگابائٹ سے کم اچھا)",
      "sizeOver": "(2 میگابائٹ کی حد سے زیادہ)",
      "titleLabel": (len: number) => `ویڈیو کا عنوان (${len}/100 حروف · موبائل پر ~60 نظر آتے ہیں)`,
      "channelLabel": "چینل کا نام",
      "durationLabel": "مدت",
      "darkMode": "ڈارک موڈ فیڈ کا پیش نظارہ",
      "safeZone": "ٹائم اسٹیمپ کونے کا علاقہ نمایاں کریں",
      "desktopCard": "ڈیسک ٹاپ ہوم فیڈ کارڈ",
      "sidebar": "ڈیسک ٹاپ واچ سائیڈ بار (کمپیکٹ تجاویز)",
      "untitled": "بغیر عنوان ویڈیو"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "تعارف اور جائزہ"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "مرکزی ساخت سیٹ کرنا"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "براہ راست ڈیمو اور عام غلطیاں"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "خلاصہ اور اگلے قدم"
        }
      ],
      "newChapter": (n: number) => `باب ${n}`,
      "defaultChapterTitle": "باب",
      "warnInvalid": "ایک یا زیادہ ٹائم اسٹیمپ کا فارمیٹ غلط ہے (MM:SS یا HH:MM:SS استعمال کریں)۔",
      "warnMin3": "یوٹیوب ویڈیو چیپٹرز چالو کرنے کے لیے بڑھتی ترتیب میں کم از کم 3 ٹائم اسٹیمپ چاہتا ہے۔",
      "warnFirst": "یوٹیوب چیپٹرز پہچاننے کے لیے پہلا باب 00:00 پر شروع ہونا چاہیے۔",
      "warnOrder": "ابواب وقت کی ترتیب سے باہر ہیں («وقت کے حساب سے ترتیب دیں» پر کلک کریں)۔",
      "warnShort": (title: string) => `باب «${title}» پچھلے باب سے 10 سیکنڈ سے کم ہے (یوٹیوب کی کم سے کم حد 10 سیکنڈ ہے)۔`,
      "labelUrl": "یوٹیوب ویڈیو لنک یا ویڈیو ID (براہ راست `?t=` لنکس کے لیے)",
      "heading": "ویڈیو ابواب",
      "sortBtn": "وقت کے حساب سے ترتیب دیں",
      "addBtn": "باب شامل کریں",
      "tsAria": (n: number) => `باب ${n} کا ٹائم اسٹیمپ`,
      "titleAria": (n: number) => `باب ${n} کا عنوان`,
      "phTitle": "باب کا عنوان",
      "removeAria": (n: number) => `باب ${n} حذف کریں`,
      "specTitle": "یوٹیوب چیپٹرز کی تفصیل کی جانچ:",
      "descBlock": "تفصیل کا چیپٹر بلاک",
      "copyChapters": "ابواب کاپی کریں",
      "emptyChapters": "تفصیل کا بلاک بنانے کے لیے اوپر ابواب شامل کریں۔",
      "shareTitle": "ٹائم اسٹیمپ والے شیئر لنکس",
      "videoIdLabel": (id: string) => `(ویڈیو ID: ${id})`,
      "noVideoId": "(اوپر درست یوٹیوب لنک درج کریں)",
      "noVideoHint": "ہر باب کے لیے کلک کیے جانے والے `?t=` جمپ لنکس بنانے کے لیے درست youtube.com یا youtu.be لنک پیسٹ کریں۔"
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "کوئی فائل منتخب نہیں ہوئی۔",
      "notPdf": (name: string) => `«${name}» PDF فائل نہیں لگتی۔`,
      "empty": (name: string) => `«${name}» خالی یا نامکمل ہے۔`,
      "noHeader": (name: string) => `«${name}» میں درست %PDF ہیڈر نہیں ہے اور اسے پروسیس نہیں کیا جا سکتا۔`,
      "enterRanges": "صفحہ نمبر یا حدود درج کریں، جیسے «1-3، 5»۔",
      "rangeOutside": (token: string, total: number) => `حد «${token}» دستاویز کی صفحہ حد 1–${total} سے باہر ہے۔`,
      "rangeReversed": (token: string) => `حد «${token}» کا شروع کا صفحہ اختتام کے صفحے سے بڑا ہے۔`,
      "pageMissing": (page: number, total: number) => `صفحہ ${page} موجود نہیں ہے (دستاویز میں ${total} صفحات ہیں)۔`,
      "invalidSyntax": (token: string) => `غلط صفحہ نحو «${token}»۔ اعداد اور حدود استعمال کریں جیسے «1-3، 5»۔`,
      "encrypted": "یہ PDF انکرپٹ شدہ یا پاس ورڈ سے محفوظ ہے۔ مقامی پروسیسنگ سے پہلے اسے ان لاک کریں۔",
      "unable": "PDF فائل پروسیس نہیں ہو سکی۔",
      "allKeywords": ["all", "تمام", "سب"]
    }
  }
};
