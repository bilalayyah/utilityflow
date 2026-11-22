import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the ar locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the ar locale is selected.
 */
export const arComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "النص المراد تحويل حالته",
      "placeholder": "اكتب أو الصق نصًا، ثم انقر أي زر حالة أدناه...",
      "copyResult": "نسخ النتيجة"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "اكتب نصًا واضحًا وموجزًا يتناسب مع حد الأحرف في كل منصة — فلا يُقطع بشكل غريب في نتائج البحث ولا في وسائل التواصل الاجتماعي.",
      "withSpaces": "مع المسافات",
      "withoutSpaces": "بدون مسافات",
      "words": "كلمات",
      "letters": "أحرف",
      "digits": "أرقام",
      "utf8Bytes": "بايت UTF-8",
      "copyText": "نسخ النص",
      "textToMeasure": "النص المراد قياس طوله بالأحرف",
      "placeholder": "اكتب أو الصق نصًا لعرض العدد الدقيق للأحرف وحجم البايت وحدود المنصات...",
      "whitespaceChars": "أحرف المسافات البيضاء",
      "lines": "أسطر",
      "platformLimitsTitle": "حدود الأحرف للمنصات وتحسين محركات البحث",
      "over": "تجاوز",
      "left": "متبقٍ",
      "platformLimits": [
        {
          "name": "عنوان SEO الوصفي",
          "note": "الطول المقترح لعنوان Google في نتائج البحث"
        },
        {
          "name": "وصف SEO الوصفي",
          "note": "الحد الشائع لمقتطف سطح المكتب"
        },
        {
          "name": "مقطع SMS",
          "note": "رسالة SMS واحدة بنظام GSM-7"
        },
        {
          "name": "منشور X / تويتر",
          "note": "الطول الشائع للمنشور"
        },
        {
          "name": "معاينة تعليق إنستغرام",
          "note": "الجزء الظاهر قبل «المزيد»"
        },
        {
          "name": "منشور لينكدإن",
          "note": "أقصى طول شائع لتحديث الخلاصة"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "بحث",
      "replaceWith": "استبدال بـ",
      "findPlaceholder": "النص المراد البحث عنه...",
      "replacePlaceholder": "النص البديل...",
      "caseSensitive": "حساس لحالة الأحرف",
      "wholeWordOnly": "الكلمات الكاملة فقط",
      "useRegex": "استخدام التعبير النمطي (RegExp)",
      "regexError": "خطأ في التعبير النمطي:",
      "invalidRegex": "تعبير نمطي غير صالح.",
      "sourceText": "النص الأصلي",
      "updatedOutput": "النتيجة بعد الاستبدال",
      "match": "مطابقة",
      "matches": "مطابقات",
      "replaced": "تم استبدالها",
      "sourcePlaceholder": "الصق النص للبحث والاستبدال فيه...",
      "outputPlaceholder": "سيظهر النص بعد الاستبدال هنا...",
      "copyResult": "نسخ النتيجة"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "بادئة السطر",
      "lineSuffix": "لاحقة السطر",
      "startNumber": "رقم البداية",
      "numberSeparator": "فاصل الأرقام",
      "addLineNumbers": "إضافة أرقام الأسطر",
      "zeroPad": "إضافة أصفار بادئة (01، 02)",
      "skipEmptyLines": "تخطي الأسطر الفارغة",
      "inputLines": "أسطر الإدخال",
      "formattedLines": "الأسطر المنسقة",
      "copyResult": "نسخ النتيجة",
      "inputPlaceholder": "الصق قيمة أو سطرًا في كل صف...",
      "outputPlaceholder": "ستظهر الأسطر المرقمة أو المغلّفة هنا..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "الكمية",
      "unit": "الوحدة",
      "unitLabels": {
        "paragraphs": "فقرات",
        "sentences": "جمل",
        "words": "كلمات"
      },
      "startClassic": "ابدأ بـ «Lorem ipsum»",
      "wrapHtml": "غلّف بوسوم <p>",
      "words": "كلمات",
      "characters": "أحرف",
      "regenerate": "إعادة الإنشاء",
      "copyPlaceholder": "نسخ النص المؤقت",
      "generatedText": "النص المؤقت المُنشأ"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# ملاحظات إصدار UtilityFlow\n\nمرحبًا بك في **عارض Markdown** — محرر سريع يعمل في المتصفح مع تصدير HTML مباشر.\n\n## المزايا الرئيسية\n\n- تنسيق فوري للعناوين والقوائم والروابط\n- ترميز HTML آمن دون أي رفع عن بُعد\n- نسخ HTML الخام وتنزيله بنقرة واحدة\n\n> أبقِ مستنداتك قريبة من عملك وتحقّق من بنيتها قبل النشر.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nاعرف المزيد على [UtilityFlow](/tools/).",
      "renderedPreview": "المعاينة المعروضة",
      "rawHtml": "HTML الخام",
      "exportHtml": "تصدير HTML",
      "copyHtml": "نسخ HTML",
      "markdownSource": "مصدر Markdown",
      "livePreview": "معاينة مباشرة",
      "compiledHtml": "HTML المُجمَّع",
      "compiledHtmlAria": "مصدر HTML المُجمَّع",
      "inputPlaceholder": "اكتب Markdown (عناوين #، **عريض**، قوائم -، [رابط](https://...))...",
      "emptyPreview": "ستظهر المعاينة هنا بمجرد كتابة Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "الكتابة التقنية الواضحة تحترم وقت القارئ. اجعل التعليمات المعقدة سهلة، واستخدم حيثما أمكن أسماءً ملموسة وأفعالًا مبنية للمعلوم.\n\nالجمل الطويلة المليئة بالجمل الفرعية المتداخلة تجبر القارئ على إعادة قراءة الفقرة. قسّم الشروحات الكثيفة إلى خطوات قصيرة ليصبح المستند أسرع في التصفح وأسهل في التطبيق.",
      "level": "المستوى:",
      "textToCheck": "النص المراد فحص سهولة قراءته",
      "placeholder": "الصق نص مقالك أو مقالتك أو صفحة الهبوط لمعرفة نتيجة Flesch Reading Ease ومستوى الصف الدراسي...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "مستوى Flesch-Kincaid الدراسي",
      "usGrade": "المستوى الدراسي الأمريكي",
      "gunningFog": "مؤشر Gunning Fog",
      "yearsEducation": "سنوات التعليم",
      "smog": "مؤشر SMOG",
      "polysyllable": "تعقيد متعدد المقاطع",
      "structuralBreakdown": "التفصيل البنيوي",
      "wordsSentences": "كلمات / جمل",
      "avgSentenceLength": "متوسط طول الجملة",
      "words": "كلمات",
      "avgSyllablesPerWord": "متوسط المقاطع لكل كلمة",
      "complexWords": "كلمات معقدة (3+ مقاطع)",
      "longWordsDetected": "كلمات طويلة رُصدت (3+ مقاطع)",
      "noLongWords": "لم تُرصد كلمات من 3 مقاطع أو أكثر في هذا المقطع.",
      "emptyState": "اكتب جملة واحدة على الأقل أعلاه لعرض معادلات سهولة القراءة والنسب البنيوية.",
      "levels": [
        {
          "level": "سهل جدًا",
          "audience": "الصف الخامس (10–11 سنة)"
        },
        {
          "level": "سهل",
          "audience": "الصف السادس (11–12 سنة)"
        },
        {
          "level": "سهل إلى حد ما",
          "audience": "الصف السابع (12–13 سنة)"
        },
        {
          "level": "عادي",
          "audience": "الصف الثامن–التاسع (13–15 سنة)"
        },
        {
          "level": "صعب إلى حد ما",
          "audience": "الصف العاشر–الثاني عشر"
        },
        {
          "level": "صعب",
          "audience": "مستوى الكلية"
        },
        {
          "level": "صعب جدًا",
          "audience": "خريج كلية / مستوى متخصص"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "حساس لحالة الأحرف",
      "trimWhitespace": "إزالة المسافات البيضاء",
      "removeEmptyLines": "إزالة الأسطر الفارغة",
      "sortAlphabetically": "ترتيب أبجدي",
      "originalLines": "الأسطر الأصلية",
      "lines": "أسطر",
      "uniqueLines": "الأسطر الفريدة",
      "unique": "فريدة",
      "removed": "أُزيلت",
      "inputPlaceholder": "الصق قائمة، عنصر في كل سطر...",
      "outputPlaceholder": "ستظهر النتيجة بعد إزالة التكرار هنا..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "حساس لحالة الأحرف",
      "ignoreBlankLines": "تجاهل الأسطر الفارغة",
      "removeDuplicates": "إزالة التكرار",
      "inputLines": "أسطر الإدخال",
      "sortedLines": "الأسطر المرتبة",
      "copySorted": "نسخ المرتبة",
      "inputPlaceholder": "اكتب عنصرًا في كل سطر...",
      "outputPlaceholder": "ستظهر النتيجة المرتبة هنا...",
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
          "label": "طبيعي (1، 2، 10)"
        },
        {
          "id": "length-asc",
          "label": "الأقصر أولًا"
        },
        {
          "id": "length-desc",
          "label": "الأطول أولًا"
        },
        {
          "id": "reverse-order",
          "label": "ترتيب معكوس"
        },
        {
          "id": "shuffle",
          "label": "خلط"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "تجاهل المسافات البيضاء",
      "ignoreCase": "تجاهل حالة الأحرف",
      "originalText": "النص الأصلي",
      "modifiedText": "النص المعدّل",
      "originalPlaceholder": "الصق النص الأصلي...",
      "modifiedPlaceholder": "الصق النص المعدّل...",
      "lineComparison": "مقارنة الأسطر",
      "added": "أُضيفت",
      "removed": "أُزيلت",
      "unchanged": "دون تغيير",
      "emptyState": "اكتب نصًا في المربعين لعرض الأسطر المضافة أو المحذوفة."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "السطر الأول من النص\nالسطر الثاني من النص\nالسطر الثالث من النص",
      "originalText": "النص الأصلي",
      "reversedOutput": "النتيجة المعكوسة",
      "inputPlaceholder": "اكتب نصًا أو أسطرًا لعكسها...",
      "outputPlaceholder": "سيظهر النص المعكوس هنا...",
      "modes": [
        {
          "id": "characters",
          "label": "عكس الأحرف"
        },
        {
          "id": "words",
          "label": "عكس ترتيب الكلمات"
        },
        {
          "id": "each-word",
          "label": "عكس كل كلمة"
        },
        {
          "id": "lines",
          "label": "عكس ترتيب الأسطر"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 طرق رائعة لتنسيق JSON عبر الإنترنت!\nكافيه وكريم: دليل 2026\nكيف تبني موقعًا ثابتًا سريعًا على Cloudflare Pages",
      "hyphen": "واصلة (-)",
      "underscore": "شرطة سفلية (_)",
      "forceLowercase": "تحويل الكل إلى أحرف صغيرة",
      "stripStopWords": "إزالة الكلمات الشائعة",
      "titlesLabel": "عناوين أو عبارات (عنوان في كل سطر للوضع الجماعي)",
      "inputPlaceholder": "اكتب عناوين مدونة أو أسماء منتجات أو قائمة عناوين...",
      "generatedSlugs": "الروابط المختصرة المُنشأة",
      "copySlugs": "نسخ الروابط المختصرة",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   السطر الأول وفيه   مسافات   زائدة.   \n\n   السطر الثاني   وفيه   علامات جدولة\tوفجوات.\n\n\nالسطر الثالث هنا.   ",
      "collapseSpaces": "دمج المسافات المتعددة في واحدة",
      "trimEdges": "قص أطراف السطر",
      "tabsToSpaces": "تحويل علامات الجدولة إلى مسافات",
      "lineBreaks": "فواصل الأسطر:",
      "keepBreaks": "الاحتفاظ بفواصل الأسطر",
      "removeBlankLines": "إزالة الأسطر الفارغة",
      "replaceWithSpaces": "استبدال بمسافات",
      "removeAllBreaks": "إزالة كل الفواصل",
      "inputText": "نص الإدخال",
      "chars": "أحرف",
      "cleanedText": "النص المنظَّف",
      "removed": "أُزيلت",
      "inputPlaceholder": "الصق نصًا فوضويًا فيه مسافات زائدة أو علامات جدولة أو أسطر فارغة...",
      "outputPlaceholder": "ستظهر النتيجة المنظَّفة تلقائيًا هنا..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "يُجري UtilityFlow كل عدّ للنص مباشرة في متصفحك. سواء كنت تكتب مقال مدونة أو تشدّد إعلان منتج أو تتحقق من مقال أكاديمي مقابل حد صارم للكلمات، فإن العدّ الفوري يجعل رسالتك واضحة ومرتبة.\n\nالجمل القصيرة أسهل في التصفح. وتنويع طول الجمل يُبقي الأدلة الطويلة ممتعة للقراءة على سطح المكتب والجوال معًا.",
      "words": "كلمات",
      "characters": "أحرف",
      "noSpaces": "بدون مسافات",
      "sentences": "جمل",
      "paragraphs": "فقرات",
      "readingTime": "وقت القراءة",
      "downloadTxt": "تنزيل .txt",
      "copyText": "نسخ النص",
      "textToCount": "النص المراد عدّه",
      "placeholder": "الصق نصًا أو اكتبه لعدّ الكلمات والأحرف والجمل ووقت القراءة...",
      "deliveryTimingLines": "وقت التحدث والأسطر",
      "speakingTime": "وقت التحدث (130 كلمة/دقيقة)",
      "totalLines": "إجمالي الأسطر",
      "avgWordLength": "متوسط طول الكلمة",
      "chars": "أحرف",
      "mostFrequentWords": "أكثر الكلمات تكرارًا",
      "emptyKeywords": "اكتب نصًا أعلاه لعرض أكثر الكلمات تكرارًا."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "تفحص عمليات تدقيق تحسين محركات البحث التقنية قابلية الزحف والروابط الداخلية وسرعة الصفحة. الصفحات السريعة تحسّن تفاعل المستخدم وإشارة سرعة الصفحة في البحث على الجوال. الروابط الداخلية تربط الأدلة المتصلة وتقوّي بنية تحسين محركات البحث التقنية.",
      "ngramLabels": {
        "1": "كلمة واحدة",
        "2": "عبارات من كلمتين",
        "3": "عبارات من 3 كلمات"
      },
      "excludeStopWords": "استبعاد الكلمات الشائعة",
      "minLength": "الحد الأدنى للطول:",
      "textForAnalysis": "النص المراد تحليله تردديًا",
      "placeholder": "الصق مقالًا أو وصف منتج أو ملاحظات لعدّ الكلمات المكررة وكثافة الكلمات المفتاحية...",
      "totalWords": "إجمالي الكلمات:",
      "uniqueTerms": "المصطلحات الفريدة:",
      "exportCsv": "تصدير CSV",
      "copyCsv": "نسخ CSV",
      "rank": "#",
      "termPhrase": "كلمة / عبارة",
      "count": "العدد",
      "density": "الكثافة",
      "emptyState": "اكتب نصًا أعلاه لعرض عدد الكلمات ونسب كثافة الكلمات المفتاحية."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "يرجى إدخال تواريخ تقويم صالحة.",
      "errorDobAfterTarget": "لا يمكن أن يكون تاريخ الميلاد بعد التاريخ المستهدف.",
      "dobLabel": "تاريخ الميلاد",
      "targetLabel": "العمر في هذا التاريخ",
      "exactAge": "العمر الدقيق",
      "yearsWord": "سنة",
      "monthsWord": "أشهر",
      "daysWord": "أيام",
      "nextBirthday": "عيد الميلاد القادم",
      "turning": "سيصبح عمرك",
      "inWord": "في",
      "totalMonths": "إجمالي الأشهر",
      "totalWeeks": "إجمالي الأسابيع",
      "totalDays": "إجمالي الأيام",
      "totalHours": "إجمالي الساعات (تقريبي)",
      "monthsAbbr": "شهر",
      "weeksAbbr": "أسبوع",
      "daysAbbr": "يوم",
      "hoursAbbr": "ساعة"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "نقص الوزن",
      "normalWeight": "وزن طبيعي",
      "overweight": "زيادة الوزن",
      "obesity": "سمنة",
      "errorHeightMetric": "أدخل الطول بين 50 سم و280 سم.",
      "errorWeightMetric": "أدخل الوزن بين 15 كغ و500 كغ.",
      "errorHeightImperial": "أدخل طولًا صالحًا — بين 2 قدم و9 أقدام.",
      "errorWeightImperial": "أدخل الوزن بين 30 رطلًا و1100 رطل.",
      "metricTab": "متري (سم / كغ)",
      "imperialTab": "إمبراطوري (قدم، بوصة / رطل)",
      "heightCmLabel": "الطول (سم)",
      "weightKgLabel": "الوزن (كغ)",
      "heightFtLabel": "الطول (قدم)",
      "heightInLabel": "الطول (بوصة)",
      "weightLbsLabel": "الوزن (رطل)",
      "bmiLabel": "مؤشر كتلة الجسم (BMI)",
      "whoCategory": "فئة منظمة الصحة العالمية",
      "healthyRange": "نطاق الوزن الصحي لمؤشر BMI ‏(18.5–24.9)",
      "disclaimer": "مؤشر BMI نسبة فحص عامة — لا يفرّق بين وزن العضلات ودهون الجسم."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "أدخل العمر بين 15 و100 سنة.",
      "errorHeightMetric": "أدخل الطول بين 100 سم و250 سم.",
      "errorWeightMetric": "أدخل الوزن بين 30 كغ و350 كغ.",
      "errorHeightImperial": "أدخل الطول بين 3 أقدام و4 بوصات و8 أقدام وبوصتين.",
      "errorWeightImperial": "أدخل الوزن بين 66 رطلًا و770 رطلًا.",
      "metricTab": "متري (سم / كغ)",
      "imperialTab": "إمبراطوري (قدم، بوصة / رطل)",
      "maleTab": "ذكر",
      "femaleTab": "أنثى",
      "ageLabel": "العمر (بالسنوات)",
      "heightCmLabel": "الطول (سم)",
      "weightKgLabel": "الوزن (كغ)",
      "heightFtLabel": "الطول (قدم)",
      "heightInLabel": "الطول (بوصة)",
      "weightLbsLabel": "الوزن (رطل)",
      "activityLabel": "مستوى النشاط",
      "activitySedentary": "خامل (1.2×)",
      "activitySedentaryDetail": "وظيفة مكتبية، تمرين قليل جدًا أو معدوم",
      "activityLight": "نشاط خفيف (1.375×)",
      "activityLightDetail": "تمرين خفيف، 1–3 أيام أسبوعيًا",
      "activityModerate": "نشاط معتدل (1.55×)",
      "activityModerateDetail": "تمرين معتدل، 3–5 أيام أسبوعيًا",
      "activityVery": "نشاط كبير (1.725×)",
      "activityVeryDetail": "تمرين شاق، 6–7 أيام أسبوعيًا",
      "activityExtra": "نشاط مفرط (1.9×)",
      "activityExtraDetail": "عمل بدني أو تدريب مرتين يوميًا",
      "maintenance": "سعرات الحفاظ على الوزن (TDEE)",
      "mildLoss": "فقدان وزن خفيف (-0.25 كغ/أسبوع)",
      "mildLossNote": "عجز ~250 سعرة حرارية يوميًا",
      "weightLoss": "فقدان الوزن (-0.5 كغ/أسبوع)",
      "weightLossNote": "عجز ~500 سعرة حرارية يوميًا",
      "leanGain": "زيادة وزن خالٍ من الدهون",
      "leanGainNote": "+250 سعرة حرارية يوميًا إضافية",
      "macroHeading": "توزيع المغذيات الكبرى للحفاظ على الوزن (مرجعي) (30% بروتين · 40% كربوهيدرات · 30% دهون)",
      "protein": "بروتين",
      "carbs": "كربوهيدرات",
      "fat": "دهون غذائية",
      "gramsPerDay": "غ/يوم",
      "disclaimer": "حُسبت بمعادلة Mifflin-St Jeor لمعدل الأيض الأساسي (BMR). تختلف احتياجات الطاقة لكل شخص حسب بنية الجسم والحالة الصحية؛ استشر أخصائي صحة مؤهلًا قبل البدء في نظام غذائي صارم."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "لا يمكن أن تكون الوديعة الأولية سالبة.",
      "errorMonthly": "لا يمكن أن تكون المساهمة الشهرية سالبة.",
      "errorRate": "يجب أن يكون معدل العائد السنوي بين 0% و100%.",
      "errorYears": "يجب أن تكون المدة الزمنية بين 1 و100 سنة.",
      "initialLabel": "المبلغ الأولي ($)",
      "monthlyLabel": "الإضافة الشهرية ($)",
      "rateLabel": "العائد السنوي (%)",
      "yearsLabel": "سنوات",
      "compoundingLabel": "التراكم",
      "dailyOption": "يوميًا (365/سنة)",
      "monthlyOption": "شهريًا (12/سنة)",
      "quarterlyOption": "ربع سنوي (4/سنة)",
      "annualOption": "سنويًا (1/سنة)",
      "futureBalance": "الرصيد المستقبلي",
      "totalContributed": "إجمالي رأس المال + الإيداعات",
      "totalInterest": "إجمالي الفائدة المركبة",
      "yearHeader": "السنة",
      "totalContributedHeader": "إجمالي الإيداعات",
      "cumulativeInterestHeader": "الفائدة التراكمية",
      "endingBalanceHeader": "الرصيد الختامي",
      "yearPrefix": "السنة"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "يرجى اختيار تواريخ تقويم صالحة للبداية والنهاية.",
      "errorInvalidBase": "يرجى إدخال تاريخ تقويم صالح للبداية.",
      "errorNonNegative": "أدخل أعدادًا صحيحة صفرية أو أكبر للسنوات والأشهر والأيام.",
      "differenceTab": "الفرق بين تاريخين",
      "addSubtractTab": "إضافة / طرح الوقت",
      "startLabel": "تاريخ البداية",
      "endLabel": "تاريخ النهاية",
      "swapTitle": "تبديل التاريخين",
      "swapAria": "تبديل تاريخي البداية والنهاية",
      "includeEnd": "تضمين تاريخ النهاية في العدّ (+1 يوم تقويمي)",
      "calendarDuration": "المدة التقويمية",
      "reversedRange": "(نطاق معكوس)",
      "totalSpan": "إجمالي المدة:",
      "calendarDays": "أيام تقويمية",
      "weeksDays": "أسابيع وأيام",
      "weekdays": "أيام العمل (الاثنين–الجمعة)",
      "weekendDays": "أيام عطلة نهاية الأسبوع (السبت–الأحد)",
      "totalHours": "إجمالي الساعات",
      "yearsWord": "سنة",
      "monthsWord": "أشهر",
      "daysWord": "أيام",
      "weeksAbbr": "أسبوع",
      "daysAbbr": "يوم",
      "hoursAbbr": "ساعة",
      "referenceLabel": "التاريخ المرجعي",
      "operationLabel": "العملية",
      "addOption": "إضافة (+)",
      "subtractOption": "طرح (-)",
      "yearsLabel": "سنوات",
      "monthsLabel": "أشهر",
      "daysLabel": "أيام",
      "resultingDate": "التاريخ التقويمي الناتج",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "لا يمكن أن يكون السعر الأصلي سالبًا.",
      "errorDiscount": "يجب أن تكون نسبة الخصم بين 0% و100%.",
      "errorTax": "يجب أن تكون ضريبة المبيعات بين 0% و100%.",
      "errorCost": "لا يمكن أن تكون التكلفة سالبة.",
      "errorSelling": "يجب أن يكون سعر البيع أكبر من 0.",
      "discountTab": "خصم البيع",
      "marginTab": "هامش الربح والزيادة السعرية",
      "originalPriceLabel": "السعر الأصلي ($)",
      "discountLabel": "الخصم (%)",
      "salesTaxLabel": "ضريبة المبيعات (%)",
      "costLabel": "تكلفة الوحدة ($)",
      "sellingLabel": "سعر البيع ($)",
      "finalPrice": "السعر النهائي",
      "beforeTax": "قبل الضريبة:",
      "youSave": "توفيرك",
      "taxAdded": "الضريبة المضافة",
      "grossProfit": "إجمالي الربح",
      "profitMargin": "هامش الربح",
      "profitDivSelling": "(الربح ÷ سعر البيع)",
      "markup": "الزيادة السعرية",
      "profitDivCost": "(الربح ÷ التكلفة)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "أدخل مبلغ قرض أكبر من 0.",
      "errorRate": "أدخل معدل فائدة سنويًا بين 0% و100%.",
      "errorDuration": "يجب أن تكون مدة القرض بين 1 و600 شهر.",
      "principalLabel": "مبلغ القرض ($)",
      "rateLabel": "معدل الفائدة السنوي (% APR)",
      "termLabel": "مدة القرض",
      "termUnitAria": "وحدة مدة القرض",
      "yearsOption": "سنوات",
      "monthsOption": "أشهر",
      "monthlyPayment": "القسط الشهري (EMI)",
      "forPrefix": "لمدة",
      "monthlyPayments": "أقساط شهرية",
      "totalInterest": "إجمالي الفائدة",
      "ofTotalCost": "من التكلفة الإجمالية",
      "totalRepayment": "إجمالي السداد",
      "principalWord": "المبلغ الأصلي",
      "principalLabelShort": "المبلغ الأصلي",
      "interestLabelShort": "الفائدة",
      "showSchedule": "إظهار جدول السداد",
      "hideSchedule": "إخفاء جدول السداد",
      "monthHeader": "الشهر",
      "paymentHeader": "القسط",
      "principalHeader": "المبلغ الأصلي",
      "interestHeader": "الفائدة",
      "balanceHeader": "الرصيد"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "يجب أن يكون سعر المنزل أكبر من 0.",
      "errorDownPayment": "يجب أن تكون نسبة الدفعة الأولى بين 0% و99.9%.",
      "errorRate": "يجب أن يكون معدل الفائدة بين 0% و50%.",
      "errorTerm": "يجب أن تكون مدة القرض بين 1 و50 سنة.",
      "homePriceLabel": "سعر المنزل ($)",
      "downPaymentLabel": "الدفعة الأولى (%)",
      "rateLabel": "معدل الفائدة (% APR)",
      "termLabel": "مدة القرض (بالسنوات)",
      "yearsWord": "سنة",
      "taxLabel": "ضريبة العقار ($ / سنة)",
      "insuranceLabel": "تأمين المنزل ($ / سنة)",
      "hoaLabel": "رسوم جمعية الملاك ($ / شهر)",
      "estimatedMonthly": "الدفعة الشهرية المقدرة",
      "loanAmount": "مبلغ القرض",
      "downPayment": "الدفعة الأولى",
      "lifetimeInterest": "فائدة مدة القرض كاملة",
      "breakdownHeading": "تفصيل الدفعة الشهرية",
      "principalInterest": "المبلغ الأصلي والفائدة (P&I)",
      "propertyTaxes": "ضريبة العقار",
      "homeownersInsurance": "تأمين مالك المنزل",
      "hoaDues": "رسوم جمعية الملاك",
      "pmiLabel": "تأمين الرهن الخاص المقدر (0.5%/سنة عندما تكون الدفعة الأولى أقل من 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "أدخل أرقامًا صالحة.",
      "errorTotalZero": "لا يمكن أن يكون الإجمالي (Y) صفرًا.",
      "errorStartZero": "لا يمكن أن تكون القيمة الأولية صفرًا.",
      "heading1": "1. نسبة مئوية من عدد",
      "heading2": "2. نسبة الجزء إلى الكل",
      "heading3": "3. الزيادة أو النقصان بالنسبة المئوية",
      "whatIs": "ما هي",
      "percentOf": "% من",
      "isWhatPercentOf": "ما نسبة % من",
      "fromWord": "من",
      "toWord": "إلى",
      "result": "النتيجة:",
      "change": "التغير:",
      "formula": "الصيغة",
      "difference": "الفرق",
      "ariaPctX": "النسبة المئوية X",
      "ariaBaseY": "العدد الأساسي Y",
      "ariaPartX": "قيمة الجزء X",
      "ariaWholeY": "قيمة الكل Y",
      "ariaInitialA": "القيمة الأولية A",
      "ariaFinalB": "القيمة النهائية B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "لا يمكن أن يكون مبلغ الراتب سالبًا.",
      "errorHours": "يجب أن تكون ساعات الأسبوع بين 1 و168.",
      "errorWeeks": "يجب أن تكون أسابيع السنة بين 1 و52.",
      "errorTax": "يجب أن يكون معدل الضريبة الفعلي بين 0% و99%.",
      "amountLabel": "مبلغ الراتب ($)",
      "frequencyLabel": "التكرار",
      "hourlyOption": "بالساعة",
      "dailyOption": "يوميًا",
      "weeklyOption": "أسبوعيًا",
      "biweeklyOption": "كل أسبوعين",
      "monthlyOption": "شهريًا",
      "annualOption": "سنويًا",
      "hoursLabel": "ساعات / أسبوع",
      "weeksLabel": "أسابيع / سنة",
      "taxLabel": "معدل الضريبة المقدر (%)",
      "rowHourly": "بالساعة",
      "rowDaily": "يوميًا (أسبوع من 5 أيام)",
      "rowWeekly": "أسبوعيًا",
      "rowBiweekly": "كل أسبوعين",
      "rowMonthly": "شهريًا",
      "rowAnnual": "سنويًا",
      "payPeriodHeader": "فترة الدفع",
      "grossPayHeader": "إجمالي الراتب",
      "estNetPay": "صافي الراتب المقدر",
      "taxWord": "الضريبة"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "أدخل وقت بداية ونهاية صالحين.",
      "errorBreakRange": "أدخل خصم الاستراحة بين 0 و1,440 دقيقة.",
      "errorEndEarlier": "وقت النهاية قبل وقت البداية. فعّل الترحيل لما بعد منتصف الليل إذا كان يمتد بعدها.",
      "errorBreakExceeds": "خصم الاستراحة أكبر من إجمالي الوقت المنقضي.",
      "errorSumFields": "يجب أن تحتوي كل حقول المدة على أعداد صفرية أو أكبر.",
      "betweenTab": "الوقت المنقضي بين وقتين",
      "sumTab": "جمع مدد جدول الدوام",
      "startLabel": "وقت البداية",
      "endLabel": "وقت النهاية",
      "breakLabel": "استراحة غير مدفوعة (بالدقائق)",
      "overnightLabel": "اعتبر وقت النهاية في اليوم التالي إذا كان قبل وقت البداية (وردية ليلية)",
      "netDuration": "المدة الصافية",
      "overnightTag": "(طوال الليل)",
      "decimalHours": "ساعات عشرية",
      "totalMinutes": "إجمالي الدقائق",
      "totalSeconds": "إجمالي الثواني",
      "hoursAbbr": "ساعة",
      "minutesAbbr": "دقيقة",
      "secondsAbbr": "ثانية",
      "labelHeader": "التسمية",
      "hoursHeader": "ساعات",
      "minutesHeader": "دقائق",
      "secondsHeader": "ثوانٍ",
      "removeButton": "إزالة",
      "removeAria": "إزالة",
      "addRowButton": "إضافة صف مدة",
      "morningSession": "جلسة الصباح",
      "afternoonSession": "جلسة بعد الظهر",
      "segmentPrefix": "مقطع",
      "combinedTime": "الوقت المجمع (HH:MM:SS)",
      "dayEquivalent": "أيام 24 ساعة",
      "daysAbbr": "أيام"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "لا يمكن أن يكون مبلغ الفاتورة سالبًا.",
      "errorTip": "يجب أن تكون نسبة الإكرامية بين 0% و200%.",
      "errorPeople": "يجب أن يكون عدد الأشخاص بين 1 و100.",
      "billLabel": "إجمالي الفاتورة ($)",
      "tipLabel": "نسبة الإكرامية (%)",
      "peopleLabel": "تقسيم على (أشخاص)",
      "presetsLabel": "إعدادات الإكرامية المسبقة:",
      "roundingLabel": "التقريب:",
      "exactOption": "سنتات دقيقة",
      "totalUpOption": "تقريب الإجمالي لأعلى ($)",
      "perPersonUpOption": "تقريب حصة الفرد لأعلى ($)",
      "perPersonTotal": "الإجمالي للفرد",
      "includes": "يشمل",
      "tipEach": "إكرامية الفرد",
      "totalTip": "إجمالي الإكرامية",
      "effectiveRate": "المعدل الفعلي:",
      "totalBill": "إجمالي الفاتورة"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "أدخل عددًا صالحًا للتحويل.",
      "errorAbsoluteZero": "لا يمكن أن تكون درجة الحرارة أقل من الصفر المطلق (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "الطول",
        "weight": "الوزن والكتلة",
        "temperature": "درجة الحرارة",
        "area": "المساحة",
        "volume": "الحجم",
        "speed": "السرعة",
        "storage": "التخزين الرقمي"
      },
      "unitLabels": {
        "mm": "مليمتر",
        "cm": "سنتيمتر",
        "m": "متر",
        "km": "كيلومتر",
        "in": "بوصة",
        "ft": "قدم",
        "yd": "ياردة",
        "mi": "ميل",
        "mg": "مليغرام",
        "g": "غرام",
        "kg": "كيلوغرام",
        "t": "طن متري",
        "oz": "أونصة",
        "lb": "رطل",
        "st": "ستون",
        "C": "مئوية",
        "F": "فهرنهايت",
        "K": "كلفن",
        "cm2": "سنتيمتر مربع",
        "m2": "متر مربع",
        "ha": "هكتار",
        "km2": "كيلومتر مربع",
        "ft2": "قدم مربعة",
        "yd2": "ياردة مربعة",
        "acre": "فدان",
        "mi2": "ميل مربع",
        "mL": "مليلتر",
        "L": "لتر",
        "m3": "متر مكعب",
        "floz": "أونصة سائلة (أمريكية)",
        "cup": "كوب (أمريكي)",
        "pt": "باينت (أمريكي)",
        "qt": "كوارت (أمريكي)",
        "gal": "غالون (أمريكي)",
        "ms": "متر / ثانية",
        "kmh": "كيلومتر / ساعة",
        "mph": "ميل / ساعة",
        "knot": "عقدة",
        "fts": "قدم / ثانية",
        "B": "بايت",
        "KB": "كيلوبايت (10³)",
        "MB": "ميغابايت (10⁶)",
        "GB": "غيغابايت (10⁹)",
        "TB": "تيرابايت (10¹²)",
        "KiB": "كيبيبايت (2¹⁰)",
        "MiB": "ميبيبايت (2²⁰)",
        "GiB": "غيبيبايت (2³⁰)"
      },
      "valueLabel": "القيمة",
      "fromLabel": "من وحدة",
      "toLabel": "إلى وحدة",
      "swapAria": "تبديل الوحدات",
      "swapTitle": "تبديل الوحدات",
      "toWord": "إلى",
      "copyResult": "نسخ النتيجة",
      "unitHeader": "الوحدة",
      "symbolHeader": "الرمز",
      "equivalentHeader": "القيمة المكافئة"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "لا يمكن أن يكون المبلغ سالبًا.",
      "errorRate": "يجب أن تكون نسبة الضريبة بين 0% و100%.",
      "addTab": "إضافة الضريبة (من الصافي إلى الإجمالي)",
      "removeTab": "إزالة الضريبة (من الإجمالي إلى الصافي)",
      "commonRates": "النسب الشائعة:",
      "netAmountLabel": "المبلغ الصافي (بدون ضريبة) ($)",
      "grossAmountLabel": "المبلغ الإجمالي (شامل الضريبة) ($)",
      "rateLabel": "نسبة ضريبة القيمة المضافة / ضريبة المبيعات (%)",
      "netPrice": "السعر الصافي (بدون ضريبة)",
      "taxAmount": "مبلغ الضريبة",
      "grossPrice": "السعر الإجمالي (شامل الضريبة)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "ترميز إلى Base64",
      "decodeTab": "فك ترميز Base64",
      "urlSafe": "آمن للروابط (- و _)",
      "omitPadding": "إزالة حشوة = النهائية",
      "swap": "تبديل",
      "decodeError": "خطأ في فك الترميز:",
      "inputLabelEncode": "نص عادي (UTF-8)",
      "inputLabelDecode": "سلسلة Base64",
      "inputPlaceholderEncode": "اكتب نصًا أو JSON لترميزه...",
      "inputPlaceholderDecode": "الصق سلسلة Base64 قياسية أو آمنة للروابط...",
      "outputLabelEncode": "مخرجات Base64",
      "outputLabelDecode": "النص بعد فك الترميز",
      "outputPlaceholder": "ستظهر المخرجات المحوَّلة هنا...",
      "copyOutput": "نسخ المخرجات",
      "invalidLength": "طول سلسلة Base64 غير صالح.",
      "invalidInput": "إدخال Base64 غير صالح أو تسلسل بايت UTF-8 خاطئ."
    },
    "tables": {
      "samplePlain": "UtilityFlow: ترميز Base64 آمن UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "اختر لونًا",
      "colorPickerAria": "منتقي الألوان",
      "copyHex": "نسخ HEX",
      "copyRgb": "نسخ RGB",
      "copyHsl": "نسخ HSL",
      "contrastTitle": "فحص نسبة التباين WCAG 2.1",
      "contrastDesc": "اعرض اللون الأمامي ({color}) على أي لون خلفية.",
      "backgroundLabel": "الخلفية:",
      "bgAria": "لون الخلفية للتباين",
      "sampleTitle": "عينة من نص الجسم وواجهة المستخدم",
      "sampleSentence": "الثعلب البني السريع يقفز فوق الكلب الكسول.",
      "aaNormal": "AA للنص العادي (≥ 4.5:1)",
      "aaaNormal": "AAA للنص العادي (≥ 7.0:1)",
      "aaLarge": "AA للنص الكبير (≥ 3.0:1)",
      "pass": "ناجح",
      "fail": "فاشل"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "تعبير Cron من 5 حقول",
      "copyCron": "نسخ cron",
      "humanTitle": "الجدول بلغة سهلة",
      "breakdownTitle": "تفصيل الحقول",
      "fieldMinute": "الدقيقة (0–59)",
      "fieldHour": "الساعة (0–23)",
      "fieldDom": "يوم الشهر (1–31)",
      "fieldMonth": "الشهر (1–12)",
      "fieldDow": "يوم الأسبوع (0–6)",
      "nextRuns": "العمليات {count} التالية المجدولة (بالتوقيت المحلي)",
      "noRuns": "لم يُعثر على عملية مطابقة خلال 366 يومًا القادمة.",
      "fieldsError": "يحتاج cron القياسي إلى 5 حقول (الدقيقة الساعة يوم-الشهر الشهر يوم-الأسبوع). وُجد {count}.",
      "emptySegment": "مقطع فارغ في «{token}»",
      "invalidStep": "خطوة «{step}» غير صالحة في «{token}»",
      "outOfRange": "قيمة خارج النطاق في «{token}» ({min}–{max})",
      "invalidCron": "تعبير cron غير صالح.",
      "everyMinutes": "كل {n} دقائق",
      "minuteZeroHour": "في الدقيقة 0 من كل ساعة",
      "atTime": "في {time}",
      "atFields": "في {a}، {b}",
      "dayEveryDay": "كل يوم",
      "dayWeekdays": "في أيام العمل (الاثنين–الجمعة)",
      "dayOfMonth": "في اليوم {day} من الشهر",
      "dayDow": "في {dow}",
      "dayBoth": "في اليوم {day} أو {dow}",
      "monthIn": " في {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "كل 5 دقائق",
          "expr": "*/5 * * * *"
        },
        {
          "label": "كل ساعة",
          "expr": "0 * * * *"
        },
        {
          "label": "كل يوم عند منتصف الليل",
          "expr": "0 0 * * *"
        },
        {
          "label": "9:00 صباحًا في أيام العمل",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "08:30 في اليوم الأول من الشهر",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "monthLabels": [
        "",
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر"
      ],
      "unitWords": {
        "minute": "دقيقة",
        "hour": "ساعة",
        "day": "يوم",
        "month": "شهر",
        "weekday": "يوم الأسبوع"
      },
      "unitPlurals": {
        "minute": "دقائق",
        "hour": "ساعات",
        "day": "أيام",
        "month": "أشهر",
        "weekday": "أيام الأسبوع"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "تصغير CSS",
      "beautifyTab": "تجميل CSS",
      "inputLabel": "CSS المدخلة",
      "bytesLabel": "بايت",
      "inputPlaceholder": "الصق قواعد CSS أو ورقة أنماط هنا...",
      "outputLabelMinify": "CSS المصغَّرة",
      "outputLabelBeautify": "CSS المجمَّلة",
      "outputPlaceholder": "ستظهر CSS المعالَجة هنا...",
      "copyCss": "نسخ CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "إدخال نصي",
      "fileTab": "مجموع اختباري لملف محلي",
      "uppercaseHex": "أحرف هكس كبيرة",
      "inputLabel": "سلسلة الإدخال (UTF-8)",
      "inputPlaceholder": "اكتب نصًا لاستخراج بصمات SHA-1 وSHA-256 وSHA-384 وSHA-512...",
      "chooseFileLabel": "اختر ملفًا محليًا لاستخراج بصمته",
      "fileNoteDefault": "يُقرأ الملف في ذاكرة المتصفح فقط، ولا يُرفع أبدًا.",
      "bytesLabel": "بايت",
      "cryptoUnavailable": "ترميز Web Crypto غير متاح.",
      "sampleText": "مرحبًا، UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "ترميز الكيانات",
      "decodeTab": "فك ترميز الكيانات",
      "encodeNonAscii": "ترميز الرموز غير ASCII (&#...;)",
      "swap": "تبديل",
      "inputLabelEncode": "HTML / نص خام",
      "inputLabelDecode": "سلسلة مرمَّزة بـ HTML",
      "inputPlaceholderEncode": "<p>اكتب وسوم HTML أو أحرفًا خاصة...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;الصق كيانات مرمَّزة...&lt;/p&gt;",
      "outputLabelEncode": "الكيانات المرمَّزة",
      "outputLabelDecode": "النص بعد فك الترميز",
      "outputPlaceholder": "ستظهر الكيانات المحوَّلة هنا..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "تصغير JS",
      "beautifyTab": "تجميل JS",
      "indentLabel": "المسافة البادئة:",
      "indent2": "مسافتان",
      "indent4": "4 مسافات",
      "inputLabel": "إدخال JavaScript / TypeScript",
      "bytesLabel": "بايت",
      "inputPlaceholder": "الصق مقتطف JavaScript أو TypeScript...",
      "outputLabelMinify": "المخرجات المصغَّرة",
      "outputLabelBeautify": "المخرجات المجمَّلة",
      "outputPlaceholder": "سيظهر JavaScript المنسَّق هنا...",
      "copyCode": "نسخ الشيفرة"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "الفاصل:",
      "commaOpt": "فاصلة (,)",
      "semicolonOpt": "فاصلة منقوطة (;)",
      "tabOpt": "علامة جدولة (TSV)",
      "conversionError": "خطأ في التحويل:",
      "inputLabelJson": "إدخال JSON",
      "inputLabelCsv": "إدخال CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "مخرجات CSV",
      "outputLabelJson": "مخرجات JSON",
      "outputPlaceholder": "ستظهر البيانات المحوَّلة هنا...",
      "parseFallback": "تعذّر تحليل تنسيق الإدخال."
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "يفك ترميز ترويسة Base64Url والحمولة في ذاكرة المتصفح فقط. لا يتحقق من التوقيع التشفيري.",
      "loadSampleJwt": "تحميل JWT نموذجي",
      "inputLabel": "رمز JWT المرمَّز",
      "inputPlaceholder": "الصق رمز JWT لعرض الترويسة والمطالبات (eyJhbGciOi...)...",
      "invalidJwt": "JWT غير صالح:",
      "headerLabel": "الترويسة (الخوارزمية والنوع)",
      "payloadLabel": "الحمولة (المطالبات)",
      "copyHeader": "نسخ الترويسة",
      "copyPayload": "نسخ الحمولة",
      "timestampTitle": "مطالبات الطابع الزمني",
      "iatLabel": "أُصدر في (iat)",
      "nbfLabel": "ليس قبل (nbf)",
      "expLabel": "الانتهاء (exp)",
      "expired": "منتهٍ",
      "active": "نشط (لم ينتهِ بعد)",
      "signatureLabel": "مقطع التوقيع (Base64Url)",
      "invalidB64Url": "طول مقطع Base64Url غير صالح.",
      "segmentCount": "يتطلب JWT 3 مقاطع مفصولة بنقاط (header.payload.signature)، وُجد {count}.",
      "parseFallback": "تعذّر تحليل مقاطع JSON في Base64Url الخاصة بـ JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "نمط التعبير النمطي",
      "patternPlaceholder": "اكتب نمط regex...",
      "flagsLabel": "الأعلام:",
      "syntaxError": "خطأ في الصياغة:",
      "testStringLabel": "سلسلة الاختبار",
      "testPlaceholder": "الصق نصًا نموذجيًا لاختبار نمطك عليه...",
      "highlightedMatches": "المطابقات المميَّزة",
      "matchSingular": "مطابقة",
      "matchPlural": "مطابقات",
      "highlightEmpty": "ستظهر المطابقات مميَّزة هنا في الوقت الفعلي...",
      "capturedTitle": "المطابقات الملتقطة",
      "matchLabel": "المطابقة",
      "indexLabel": "الفهرس",
      "groupsLabel": "المجموعات:",
      "noMatches": "لم يُعثر على أي مطابقة.",
      "replaceLabel": "معاينة قالب الاستبدال",
      "replacePlaceholder": "مثل $1 [at] $2",
      "invalidRegex": "تعبير نمطي غير صالح."
    },
    "tables": {
      "sampleText": "جهة الاتصال الرئيسية: support@utilityflow.online\nفريق الفوترة: billing@example.org\nبريد إلكتروني غير صالح: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (عام)"
        },
        {
          "flag": "i",
          "label": "i (تجاهل الحالة)"
        },
        {
          "flag": "m",
          "label": "m (متعدد الأسطر)"
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
      "beautify": "تجميل",
      "minify": "تصغير",
      "uppercaseKw": "كلمات مفتاحية كبيرة",
      "lowercaseKw": "أحرف صغيرة",
      "indentLabel": "المسافة البادئة:",
      "indent2": "مسافتان",
      "indent4": "4 مسافات",
      "inputLabel": "استعلام SQL خام",
      "inputPlaceholder": "الصق استعلام SQL ‏(SELECT، INSERT، UPDATE، JOIN...)...",
      "outputLabel": "SQL المنسَّقة",
      "outputPlaceholder": "ستظهر SQL المنسَّقة هنا...",
      "copySql": "نسخ SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "طابع Unix الزمني الحالي (بالثواني)",
      "useCurrent": "استخدام الوقت الحالي",
      "copyEpoch": "نسخ epoch",
      "converter1Label": "طابع Unix الزمني ← تاريخ بشري",
      "epochPlaceholder": "مثل 1794544800",
      "unitAuto": "تلقائي",
      "unitSeconds": "ثوانٍ",
      "unitMilliseconds": "مللي ثوانٍ",
      "errorNotNumeric": "أدخل طابع Unix زمنيًا رقميًا صالحًا.",
      "errorOutOfRange": "طابع الوقت خارج نطاق Date الصالح في JavaScript.",
      "isoLabel": "ISO 8601 ‏(UTC)",
      "localLabel": "المنطقة الزمنية المحلية",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "نسبي",
      "converter2Label": "التاريخ والوقت المحليان ← طابع Unix الزمني",
      "secondsLabel": "ثوانٍ",
      "millisecondsLabel": "مللي ثوانٍ",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "ترميز",
      "decode": "فك الترميز",
      "encodeUriPreserve": "encodeURI ‏(احتفظ بـ ://?&)",
      "swap": "تبديل",
      "urlError": "خطأ في URL:",
      "inputLabel": "سلسلة إدخال أو URL",
      "inputPlaceholder": "الصق URL أو سلسلة استعلام أو قيمة معامل...",
      "outputLabelEncode": "المخرجات المرمَّزة",
      "outputLabelDecode": "المخرجات بعد فك الترميز",
      "outputPlaceholder": "ستظهر URL المرمَّزة أو بعد فك ترميزها هنا...",
      "parsedTitle": "تفصيل URL بعد تحليله",
      "protocol": "البروتوكول",
      "host": "المضيف",
      "pathname": "اسم المسار",
      "hash": "الهاش",
      "noneValue": "(لا يوجد)",
      "queryParam": "معامل الاستعلام",
      "decodedValue": "القيمة بعد فك الترميز",
      "malformed": "تسلسل ترميز بالنسبة المئوية مشوَّه."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "إصدار UUID",
      "v4": "v4 (عشوائي)",
      "v7": "v7 (مرتَّب زمنيًا)",
      "quantity": "الكمية (1–100)",
      "generate": "إنشاء UUID",
      "uppercase": "أحرف كبيرة",
      "includeHyphens": "تضمين الواصلات",
      "wrapBraces": "غلّف بـ {أقواس}",
      "generatedLabel": "UUID المُنشأة",
      "copyAll": "نسخ الكل"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "أبيض على نيلي",
      "presetSlate": "حبر رمادي مزرق",
      "presetEmerald": "شارة زمردية",
      "presetDark": "الوضع الداكن",
      "swapColors": "تبديل اللونين",
      "fgTitle": "لون المقدمة / النص",
      "bgTitle": "لون الخلفية",
      "copyHex": "نسخ HEX",
      "pickerSuffix": "المنتقي",
      "hexInputSuffix": "إدخال HEX",
      "contrastRatioLabel": "نسبة التباين WCAG 2.1",
      "checkAaNormal": "WCAG AA للنص العادي",
      "checkAaLarge": "WCAG AA للنص الكبير / واجهة المستخدم",
      "checkAaaNormal": "WCAG AAA للنص العادي",
      "checkAaaLarge": "WCAG AAA للنص الكبير",
      "pass": "ناجح",
      "fail": "فاشل",
      "livePreviewLabel": "معاينة مباشرة لإمكانية الوصول",
      "previewHeading": "الطباعة الواضحة سهلة القراءة على أي حجم شاشة.",
      "previewBody": "يحتاج نص الجسم العادي (14–16 بكسل) إلى نسبة تباين لا تقل عن 4.5:1 لمستوى AA و7.0:1 لمستوى AAA في WCAG. أما العناوين الكبيرة (18 نقطة فأكثر أو عريض 14 نقطة فأكثر) فيكفيها 3.0:1 على الأقل.",
      "outlinedControl": "عنصر تحكم في واجهة المستخدم ذو حدود",
      "hexOnHex": "{fg} على {bg}",
      "extractTitle": "استخراج لوحة ألوان من صورة",
      "extractBody": "ارفع لقطة شاشة أو شعارًا أو صورة — وستدخل عينات HEX الرئيسية مباشرة في فحص التباين.",
      "appliesToLabel": "سيُطبَّق عند النقر على عينة:",
      "foregroundBtn": "المقدمة",
      "backgroundBtn": "الخلفية",
      "selectImage": "اختر صورة لاستخراج العينات",
      "loadedReplace": "تم التحميل: {name} (ارفع أخرى)",
      "selectImageError": "يرجى اختيار صورة PNG أو JPG أو WebP أو GIF.",
      "unableToRead": "تعذّرت قراءة «{name}».",
      "canvasUnavailable": "سياق Canvas 2D غير متاح.",
      "transparentImage": "يبدو أن الصورة شفافة بالكامل.",
      "unableToExtract": "تعذّر استخراج اللوحة.",
      "areaPercent": "~{n}% من المساحة"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 علامة تبويب المتصفح",
        "taskbar": "32×32 شريط المهام / HiDPI",
        "desktopShortcut": "48×48 اختصار سطح المكتب",
        "appleTouch": "180×180 لمسة Apple",
        "androidChrome": "192×192 كروم أندرويد",
        "pwaSplash": "512×512 شاشة بدء PWA"
      },
      "monogramMode": "منشئ شارة الأحرف الأولى",
      "imageMode": "ارفع صورة شعار",
      "lettersLabel": "النص / الأحرف الأولى (1–3 أحرف)",
      "cornerShapeLabel": "شكل الزاوية",
      "roundedSquare": "مربع بزوايا مستديرة",
      "circle": "دائرة",
      "sharpSquare": "مربع حاد",
      "square": "مربع",
      "bgColorLabel": "لون الخلفية",
      "textColorLabel": "لون النص",
      "chooseLogo": "اختر شعار PNG أو JPG أو WebP أو SVG",
      "loadedReplace": "تم التحميل: {name} (انقر للاستبدال)",
      "cropMaskLabel": "قناع القص",
      "unableToRead": "تعذّرت قراءة «{name}».",
      "canvasUnavailable": "سياق Canvas 2D غير متاح.",
      "failedEncode": "تعذّر ترميز PNG الخاص بالأيقونة المفضلة.",
      "unableToGenerate": "تعذّر إنشاء الأيقونات المفضلة.",
      "icoBundleTitle": "حزمة favicon.ico متعددة الأحجام (16 بكسل + 32 بكسل + 48 بكسل)",
      "icoBundleBody": "ملف ‎.ico‎ ثنائي متوافق مع المعايير، جاهز لمجلد /public/ في موقعك",
      "downloadIco": "تنزيل favicon.ico",
      "faviconPreviewAlt": "معاينة الأيقونة المفضلة 32×32",
      "iconAlt": "أيقونة {size}×{size}",
      "htmlTagsLabel": "وسوم رابط HTML في <head>",
      "copyHtml": "نسخ HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "اختر أي ملف لاستخراج مجموع اختباري تشفيري",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "ترميز محلي عبر Web Crypto API · لا يُرفع أي ملف (يُفضَّل أقل من 500 ميغابايت)",
      "cryptoUnavailable": "واجهة Web Crypto SubtleCrypto API غير متاحة في هذا المتصفح.",
      "hashFailed": "تعذّر ترميز الملف في ذاكرة المتصفح (الملفات الأكبر من عدة مئات من الميغابايت قد تتجاوز حد الذاكرة).",
      "computing": "جارٍ استخراج المجاميع الاختبارية SHA-1 وSHA-256 وSHA-384 وSHA-512 محليًا...",
      "fileLabel": "الملف:",
      "sizeLabel": "الحجم:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "آخر تعديل:",
      "bytesSuffix": "{n} بايت",
      "downloadSha256": "تنزيل .sha256",
      "sha256Label": "SHA-256 (مقترح)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (للتوافق القديم فقط)",
      "verifyLabel": "تحقق مقابل مجموع اختباري متوقع",
      "expectedPlaceholder": "الصق مجموع SHA-256 أو SHA-512 أو SHA-384 أو SHA-1 منشورًا (أو سطر .sha256sum)...",
      "verified": "تم التحقق من المجموع الاختباري! الملف يطابق تمامًا البصمة {algorithm} المتوقعة.",
      "mismatch": "المجموع الاختباري غير مطابق! لا تطابق أي بصمة مستخرجة قيمتك المتوقعة."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "اختر صورة لضغطها (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "معالجة محلية عبر HTML5 Canvas · لا تُرفع إلى خادم بعيد أبدًا",
      "uploadImageError": "يرجى رفع ملف صورة PNG أو JPG أو WebP أو GIF.",
      "fileTooLarge": "الملف كبير جدًا — الحد 20 ميغابايت لكل ملف. يرجى اختيار صورة أصغر.",
      "unableToDecode": "تعذّر فك ترميز «{name}».",
      "canvasUnavailable": "سياق Canvas 2D غير متاح.",
      "compressionFailed": "فشل الضغط في قماش المتصفح.",
      "unableToCompress": "تعذّر ضغط الصورة.",
      "unableToRead": "تعذّرت قراءة «{name}».",
      "invalidImage": "ملف صورة غير صالح.",
      "outputFormatLabel": "تنسيق المخرجات",
      "webpOption": "WebP (أصغر حجم حديث للويب)",
      "jpgOption": "JPG (أوسع توافق)",
      "pngOption": "PNG (شفافية دون فقدان)",
      "maxWidthLabel": "حد العرض الأقصى",
      "keepOriginalWidth": "الاحتفاظ بالعرض الأصلي",
      "max1920": "بحد أقصى 1920 بكسل (Full HD)",
      "max1280": "بحد أقصى 1280 بكسل (مدونة / رئيسية)",
      "max800": "بحد أقصى 800 بكسل (مصغّرة)",
      "qualityLabel": "الجودة: ",
      "losslessPng": "PNG دون فقدان",
      "originalLabel": "الأصلية",
      "compressedLabel": "المضغوطة",
      "changeLabel": "التغير",
      "outputSummary": "المخرجات: {w} × {h} بكسل · {ext}",
      "compressing": "جارٍ الضغط...",
      "downloadExt": "تنزيل .{ext}",
      "previewAlt": "معاينة الصورة المضغوطة"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "اختر صورة أو عدة صور للتحويل",
      "imagesLoaded": "تم تحميل {n} صور — انقر للإضافة أو الاستبدال",
      "batchNote": "حوّل PNG أو JPG أو WebP أو SVG أو GIF محليًا وبشكل جماعي إلى PNG أو JPG أو WebP",
      "convertToLabel": "التحويل إلى تنسيق",
      "pngOption": "PNG (.png — تبقى الشفافية)",
      "qualityLabel": "الجودة مع فقدان: ",
      "lossless": "دون فقدان",
      "alphaFillLabel": "تعبئة ألفا",
      "converting": "جارٍ التحويل...",
      "reconvert": "إعادة التحويل",
      "selectFilesError": "اختر ملف صورة واحدًا أو أكثر (PNG أو JPG أو WebP أو SVG أو GIF).",
      "filesTooLarge": "تم تخطي {names} — الملفات الأكبر من حد 25 ميغابايت لكل ملف لا تُحوَّل.",
      "couldNotDecode": "تعذّر فك ترميز «{name}».",
      "canvasUnavailable": "Canvas 2D غير متاح.",
      "conversionFailed": "فشل تحويل «{name}».",
      "batchFailed": "فشل تحويل الصور الجماعي.",
      "downloadExt": "تنزيل .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "اختر صورة لتغيير حجمها أو قصّها إلى أحجام جاهزة",
      "fileWithDims": "{name} (الأصلية: {w} × {h} بكسل)",
      "supportsNote": "يدعم تغيير حجم البكسل وقفل نسبة العرض إلى الارتفاع والقص من المنتصف مع إعدادات اجتماعية مسبقة",
      "selectImageError": "اختر صورة PNG أو JPG أو WebP أو GIF.",
      "unableToDecode": "تعذّر فك ترميز «{name}».",
      "unableToRead": "تعذّرت قراءة الصورة.",
      "failedLoading": "تعذّر تحميل الصورة لتغيير حجمها.",
      "canvasUnavailable": "Canvas 2D غير متاح.",
      "failedGenerating": "تعذّر إنشاء الصورة بعد تغيير حجمها.",
      "resizeFailed": "فشل تغيير الحجم.",
      "quickPresets": "إعدادات سريعة:",
      "presetOg": "مشاركة OG ‏(1200×630)",
      "presetYoutube": "YouTube HD ‏(1280×720)",
      "presetSquare": "مربعة (1080×1080)",
      "presetAvatar": "صورة رمزية (512×512)",
      "widthLabel": "العرض (بكسل)",
      "heightLabel": "الارتفاع (بكسل)",
      "fitModeLabel": "وضع ملاءمة نسبة العرض إلى الارتفاع",
      "coverCropOption": "قص تغطية من المنتصف (دون تمديد)",
      "exactOption": "تحجيم إلى الأبعاد الدقيقة",
      "outputFormatLabel": "تنسيق المخرجات",
      "lockAspect": "قفل نسبة العرض إلى الارتفاع الأصلية عند كتابة الأبعاد",
      "resizeButton": "تغيير الحجم إلى {w} × {h} بكسل",
      "readySummary": "جاهزة: {w} × {h} بكسل ({ext})",
      "downloadResized": "تنزيل .{ext} بعد تغيير حجمها",
      "previewAlt": "مخرجات الصورة بعد تغيير حجمها"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "اختر صورة لتدويرها أو قلبها أو تطبيق مرشحات عليها",
      "loadedReplace": "{name} (انقر للاستبدال)",
      "previewNote": "معاينة HTML5 Canvas فورية وتصدير بالبكسل",
      "selectImageError": "يرجى اختيار صورة PNG أو JPG أو WebP أو GIF.",
      "failedLoading": "تعذّر تحميل «{name}».",
      "rotateLeft": "تدوير 90° يسارًا",
      "rotateRight": "تدوير 90° يمينًا",
      "flipHorizontal": "قلب أفقي",
      "flipVertical": "قلب عمودي",
      "brightnessLabel": "السطوع: ",
      "contrastLabel": "التباين: ",
      "grayscaleLabel": "أسود وأبيض (تدرج رمادي)",
      "resetAll": "إعادة تعيين الكل",
      "exportFormatLabel": "تنسيق التصدير",
      "livePreview": "معاينة Canvas مباشرة"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "صورة ← Data URI بصيغة Base64",
      "decodeMode": "Base64 ← معاينة الصورة",
      "selectImageError": "اختر ملف صورة (PNG أو JPG أو WebP أو SVG أو GIF أو ICO).",
      "unableToRead": "تعذّرت قراءة «{name}».",
      "chooseImage": "اختر ملف صورة لترميزه",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "ينشئ Data URI وBase64 خامًا ومقتطفات HTML <img> وخلفية CSS",
      "binarySizeLabel": "حجم الملف الثنائي",
      "base64SizeLabel": "حجم Base64 URI (أكبر بنحو 33%)",
      "fullDataUriLabel": "Data URI الكاملة",
      "copyDataUri": "نسخ Data URI",
      "copyRawBase64": "نسخ Base64 الخام",
      "copyImg": "نسخ <img>",
      "copyCss": "نسخ CSS",
      "encodedAria": "Data URI بصيغة Base64 المرمَّزة",
      "encodedAlt": "المعاينة المرمَّزة",
      "pasteLabel": "الصق سلسلة صورة Base64 أو Data URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... أو سلسلة base64 خام",
      "invalidPayload": "النص Base64 الملصوق ليس حمولة صورة مرمَّزة صالحة.",
      "decodedAlt": "معاينة Base64 بعد فك الترميز",
      "downloadExt": "تنزيل .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "قوية جدًا",
        "strong": "قوية",
        "moderate": "متوسطة",
        "weak": "ضعيفة"
      },
      "randomPasswordMode": "كلمة مرور عشوائية",
      "passphraseMode": "عبارة مرور Diceware",
      "regenerate": "إعادة الإنشاء",
      "passwordLengthLabel": "طول كلمة المرور: ",
      "charsSuffix": " حرفًا",
      "batchCountLabel": "عدد الدفعة: ",
      "uppercaseLabel": "أحرف كبيرة (A–Z)",
      "lowercaseLabel": "أحرف صغيرة (a–z)",
      "numbersLabel": "أرقام (0–9)",
      "symbolsLabel": "رموز (!@#$%...)",
      "excludeAmbiguousLabel": "استبعاد الملتبسة (0، O، 1، l، I)",
      "wordCountLabel": "عدد الكلمات: ",
      "wordSeparatorLabel": "فاصل الكلمات",
      "hyphenOption": "واصلة (-)",
      "underscoreOption": "شرطة سفلية (_)",
      "periodOption": "نقطة (.)",
      "spaceOption": "مسافة ( )",
      "capitalizeWordsLabel": "تكبير الحرف الأول من الكلمات",
      "appendDigitLabel": "إلحاق رقم من خانتين",
      "selectGroupWarning": "اختر مجموعة أحرف واحدة على الأقل لإنشاء كلمة مرور.",
      "entropyBits": "~{n} بت من الإنتروبيا",
      "poolSizeSuffix": " · حجم التجمع {n}",
      "wordListSuffix": " · قائمة من {n} كلمة",
      "copyAll": "نسخ الكل"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "رابط موقع",
        "text": "نص",
        "wifi": "إعدادات Wi-Fi",
        "vcard": "جهة اتصال vCard",
        "email": "عنوان بريد إلكتروني",
        "phone": "رقم هاتف",
        "plainText": "نص عادي"
      },
      "liveCameraCapture": "التقاط بالكاميرا المباشرة",
      "scanMode": "مسح / فك ترميز صورة QR",
      "vcardMode": "منشئ QR لجهة اتصال vCard",
      "uploadQr": "ارفع صورة رمز QR",
      "uploadQrNote": "لقطة شاشة PNG أو JPG أو WebP أو SVG · 100% على جانب العميل",
      "liveCameraTitle": "مسح بالكاميرا المباشرة للجهاز",
      "liveCameraNote": "يستخدم بث الكاميرا المحلي فقط بعد منح الإذن",
      "startCamera": "بدء ماسح الكاميرا",
      "stopCamera": "إيقاف الكاميرا",
      "cameraHint": "وجّه الكاميرا نحو رمز QR — سيتوقف الالتقاط تلقائيًا فور فك الترميز.",
      "uploadImageError": "يرجى رفع صورة PNG أو JPG أو WebP أو SVG تحتوي على رمز QR.",
      "unableToLoad": "تعذّر تحميل «{name}».",
      "noQrDetected": "لم يُعثر على رمز QR في هذه الصورة. حافظ على تركيز واضح وهوامش منطقة هادئة نظيفة وتباين عالٍ.",
      "unableToScan": "تعذّر مسح الصورة.",
      "cameraUnsupported": "مسح الكاميرا غير مدعوم في هذا المتصفح.",
      "cameraDenied": "لم يُمنح إذن الكاميرا أو لا يوجد جهاز كاميرا متاح. ارفع صورة رمز QR بدلًا من ذلك.",
      "decodedPayload": "الحمولة بعد فك الترميز · {kind}",
      "sourceLabel": "المصدر: ",
      "copyPayload": "نسخ الحمولة",
      "decodedAria": "نص QR بعد فك الترميز",
      "detectedLink": "رابط الويب المكتشف: ",
      "uploadedPreviewAlt": "معاينة رمز QR المرفوع",
      "firstNameLabel": "الاسم الأول",
      "lastNameLabel": "اسم العائلة",
      "orgLabel": "المنظمة",
      "jobTitleLabel": "المسمى الوظيفي",
      "defaultJobTitle": "مصمم منتجات",
      "phoneLabel": "رقم الهاتف",
      "emailLabel": "عنوان البريد الإلكتروني",
      "websiteLabel": "رابط الموقع",
      "rawVcardLabel": "حمولة vCard 3.0 الخام",
      "copyVcard": "نسخ vCard",
      "vcardQrAlt": "رمز QR الخاص بـ vCard المُنشأ",
      "downloadPng": "تنزيل PNG",
      "downloadSvg": "تنزيل SVG"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "وسوم Canonical وHreflang",
      "redirectsMode": "منشئ قواعد إعادة توجيه 301",
      "canonicalLabel": "URL Canonical ذاتية الإشارة",
      "alternatesLabel": "بدائل اللغة والمنطقة",
      "addLocale": "إضافة لغة",
      "langCodeAria": "رمز اللغة",
      "alternateUrlAria": "URL البديل",
      "removeLocaleAria": "إزالة صف اللغة",
      "htmlTagsLabel": "وسوم رابط HTML في <head>",
      "copyHtml": "نسخ HTML",
      "xmlSnippetLabel": "مقتطف <xhtml:link> في خريطة موقع XML",
      "copyXml": "نسخ XML",
      "cloudflareFormat": "Cloudflare Pages ‏(_redirects)",
      "htaccessFormat": "Apache ‏(.htaccess)",
      "nginxFormat": "Nginx ‏(كتلة server)",
      "copyRules": "نسخ {n} قواعد",
      "pairsLabel": "أزواج المصدر ← الوجهة (افصل بفاصلة أو علامة جدولة أو « -> »)",
      "generatedConfigLabel": "إعداد إعادة التوجيه 301 المُنشأ",
      "skippedInvalid": "تم تخطي {n} أسطر — لم يُعثر على وجهة مستهدفة.",
      "invalidHreflangWarning": "تم تخطي رموز hreflang غير الصالحة: {codes} — استخدم رمز لغة من حرفين (مثل en أو es)، ثم أضف منطقة إن شئت (مثل en-US)، أو x-default."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "يبدأ تحسين محركات البحث التقنية بروابط URL واضحة قابلة للزحف ووسوم canonical دقيقة وخريطة موقع XML منظمة. عندما يكتب الناشرون محتوى مفيدًا يركز على نية المستخدم بدلًا من حشو الكلمات المفتاحية، تفهم محركات البحث عمق الموضوع تلقائيًا. راجع عناوينك وأوصافك الوصفية وروابطك الداخلية بانتظام.",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "إرشادات تحريرية:",
      "guidanceBody": "لا تكافئ محركات البحث الحديثة الالتزام بحصة ثابتة لكثافة الكلمات المفتاحية. استخدم تدقيق التوزيع هذا لرصد التكرار العرضي أو للتأكد من ظهور المفاهيم الرئيسية بوضوح في نصك.",
      "targetLabel": "الكلمة / العبارة المستهدفة (اختياري)",
      "targetPlaceholder": "مثل technical seo",
      "phraseLengthLabel": "طول العبارة",
      "oneWord": "كلمة واحدة",
      "twoWord": "عبارات من كلمتين",
      "threeWord": "عبارات من 3 كلمات",
      "stripHtml": "إزالة وسوم HTML",
      "ignoreStopWords": "تجاهل الكلمات الشائعة",
      "textLabel": "مسودة مقال أو نسخة HTML ملصوقة",
      "totalWords": "إجمالي الكلمات",
      "uniqueVocabulary": "المفردات الفريدة",
      "readingTime": "وقت القراءة المقدر",
      "targetPrefix": "الهدف: ",
      "hits": "{n} مرة ({d}%)",
      "rankHeader": "الترتيب",
      "termHeader": "الكلمة / N-gram",
      "occurrencesHeader": "مرات",
      "shareHeader": "الحصة (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – أدوات ويب سريعة تعمل في المتصفح",
      "defaultDescription": "تصفح 83 أداة متصفح سريعة تحترم الخصوصية لتحرير النصوص وترميز المطورين وحاسبات التمويل وسير عمل PDF وتحسين محركات البحث.",
      "pageTitleLabel": "عنوان الصفحة (<title> / og:title)",
      "titleChars": "{n} حرفًا (المثالي 30–60)",
      "metaDescriptionLabel": "الوصف الوصفي",
      "descChars": "{n} حرفًا (المثالي 120–160)",
      "canonicalUrlLabel": "URL Canonical",
      "ogImageLabel": "رابط صورة Open Graph ‏(يُقترح 1200×630)",
      "siteNameLabel": "اسم الموقع (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "بطاقة تويتر",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "تعليمات follow الخاصة بـ Robots",
      "includeViewportLabel": "تضمين وسومي charset وviewport",
      "generatedTagsLabel": "وسوم HTML في <head> المُنشأة",
      "copyHtml": "نسخ HTML",
      "downloadHtml": "تنزيل .html",
      "socialPreviewLabel": "معاينة بطاقة المشاركة الاجتماعية",
      "socialPreviewFallback": "معاينة المشاركة الاجتماعية",
      "untitledPage": "صفحة بلا عنوان",
      "metaSnippetFallback": "سيظهر مقتطف الوصف الوصفي هنا."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "تدقيق مصدر HTML على جانب العميل:",
      "auditBody": "تمنع المتصفحات الكشط عبر المصادر من أي موقع تابع لجهة خارجية، ولا تصل إلى تحليلات بحث خاصة. الصق مصدر HTML لصفحتك أدناه (عرض مصدر الصفحة) ودقّق وسوم DOM محليًا.",
      "pastedHtmlLabel": "مصدر HTML الملصوق",
      "loadSampleHtml": "تحميل HTML نموذجي",
      "htmlPlaceholder": "الصق مصدر <html>...</html> الخام هنا...",
      "scoreLabel": "نتيجة تدقيق DOM",
      "checksPassed": "{passed} / {total} فحوصات ناجحة",
      "linksSummary": "الروابط: {total} ({internal} داخلية / {external} خارجية)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "افتراضي (index, follow)",
      "headingOutline": "مخطط العناوين (H1–H4)",
      "emptyState": "الصق مصدر HTML على اليسار لعرض العنوان والوصف والعناوين وcanonical ووسوم alt.",
      "checkTitle": "وسم العنوان (<title>)",
      "checkMetaDesc": "الوصف الوصفي",
      "checkH1": "عنوان <h1> واحد بالضبط",
      "checkCanonical": "URL Canonical (<link rel=\"canonical\">)",
      "checkAlt": "خصائص Alt للصور",
      "checkOgJsonLd": "بيانات Open Graph وJSON-LD المنظمة",
      "titleDetail": "{n} حرفًا: \"{title}\"",
      "titleMissing": "لم يُعثر على وسم <title> في <head>.",
      "descDetail": "{n} حرفًا (الهدف 120–160).",
      "descMissing": "لم يُعثر على <meta name=\"description\">.",
      "h1Detail": "وُجد {n} عنصر <h1>.",
      "canonicalMissing": "لم يُعلن عن أي وسم canonical.",
      "noImages": "لا يوجد عنصر <img> في الترميز.",
      "altDetail": "{with}/{total} صورة تحتوي على نص alt وصفي.",
      "ogDetail": "og:title {presence} · {n} كتلة JSON-LD.",
      "present": "موجود",
      "missing": "غير موجود"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "تعليمات الفهرسة",
      "indexOption": "index (السماح بالفهرسة في البحث)",
      "noindexOption": "noindex (إبعاد عن نتائج البحث)",
      "linkCrawlingLabel": "زحف الروابط",
      "followOption": "follow (تمرير إشارة الرابط)",
      "nofollowOption": "nofollow (عدم تتبع الروابط)",
      "largeOption": "large (عمليات بحث مؤهلة)",
      "htmlTagLabel": "وسم meta في HTML <head>",
      "copyHtmlTag": "نسخ وسم HTML",
      "httpHeaderLabel": "ترويسة استجابة HTTP ‏(PDF / غير HTML)",
      "copyHeader": "نسخ الترويسة",
      "cloudflareHeadersLabel": "Cloudflare Pages ‏_headers",
      "cloudflarePathAria": "نمط مسار _headers في Cloudflare",
      "copyBlock": "نسخ الكتلة"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "قوالب البداية:",
      "allowAll": "السماح لكل الزواحف",
      "standardWebApp": "تطبيق ويب / SaaS قياسي",
      "wordpressClean": "ووردبريس نظيف",
      "stagingBlockAll": "بيئة تجريبية (حظر الكل)",
      "crawlerRules": "قواعد مسارات الزاحف",
      "addRule": "إضافة قاعدة",
      "directiveAria": "التعليم",
      "pathAria": "المسار",
      "deleteRuleAria": "حذف القاعدة",
      "crawlDelayLabel": "Crawl-delay (بالثواني، اختياري)",
      "crawlDelayPlaceholder": "لا يوجد",
      "sitemapUrlsLabel": "روابط خريطة الموقع (رابط في كل سطر)",
      "generatedLabel": "ملف robots.txt المُنشأ",
      "invalidSitemapWarning": "تم تخطي روابط خريطة موقع غير صالحة: {urls} — يجب أن تحتوي أسطر خريطة الموقع على روابط http(s) كاملة."
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "كيف تبني أدوات متصفح سريعة",
      "defaultFaqQ1": "هل يشغّل UtilityFlow الأدوات في المتصفح المحلي؟",
      "defaultFaqA1": "نعم. تعمل كل الأدوات تقريبًا مباشرة في ذاكرة المتصفح — فلا تُرسل المدخلات إلى خوادم خارجية.",
      "defaultFaqQ2": "هل يساعد JSON-LD المنظم في تحسين محركات البحث؟",
      "defaultFaqA2": "نعم. يوضح JSON-LD الصالح من Schema.org سياق الكيانات لزواحف البحث ويزيد أهلية النتائج الغنية.",
      "defaultProductName": "لوحة مفاتيح ميكانيكية مريحة احترافية",
      "defaultProductDesc": "لوحة مفاتيح لاسلكية منخفضة الارتفاع صُممت لمطوري البرمجيات.",
      "defaultCrumbHome": "الرئيسية",
      "defaultCrumbSeo": "أدوات SEO",
      "defaultCrumbSchema": "منشئ ترميز Schema",
      "headlineLabel": "العنوان الرئيسي",
      "authorNameLabel": "اسم الكاتب",
      "publisherNameLabel": "اسم الناشر",
      "datePublishedLabel": "تاريخ النشر",
      "articleUrlLabel": "رابط المقال",
      "featuredImageLabel": "رابط الصورة المميزة",
      "questionLabel": "السؤال #{n}",
      "removeQuestionAria": "حذف السؤال {n}",
      "questionPlaceholder": "السؤال",
      "acceptedAnswerPlaceholder": "الإجابة المقبولة",
      "addFaqRow": "إضافة صف أسئلة شائعة",
      "productNameLabel": "اسم المنتج",
      "descriptionLabel": "الوصف",
      "priceLabel": "السعر",
      "currencyLabel": "العملة",
      "availabilityLabel": "التوفر",
      "orgNameLabel": "اسم المنظمة",
      "websiteUrlLabel": "رابط الموقع",
      "logoUrlLabel": "رابط الشعار",
      "breadcrumbLabelAria": "تسمية مسار التنقل {n}",
      "breadcrumbUrlAria": "رابط مسار التنقل {n}",
      "labelPlaceholder": "التسمية",
      "addLevel": "إضافة مستوى",
      "jsonLdOutputLabel": "مخرجات <script> بصيغة JSON-LD",
      "copyScriptTag": "نسخ وسم السكربت"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "عدّاد الكلمات – عدّ الكلمات والأحرف | UtilityFlow",
      "defaultDescription": "نسّق حمولات JSON وتحقق منها وصغّرها ورتّب مفاتيحها فورًا في متصفحك — مع تفاصيل أخطاء الصياغة بالسطر والعمود.",
      "desktopSerp": "نتائج بحث سطح المكتب (عنوان ~580 بكسل)",
      "mobileSerp": "نتائج بحث الجوال (وصف ~120 حرفًا)",
      "copyTitleMeta": "نسخ العنوان والوصف",
      "seoTitleLabel": "عنوان SEO",
      "titleMetrics": "{chars} حرفًا · ~{px} بكسل / 580 بكسل كحد أقصى",
      "metaDescriptionLabel": "الوصف الوصفي",
      "descMetrics": "{chars} حرفًا · ~{px} بكسل",
      "pageUrlLabel": "رابط الصفحة (لمعاينة مسار التنقل)",
      "siteNameLabel": "اسم الموقع",
      "boldKeywordLabel": "الكلمة المفتاحية العريضة",
      "optionalPlaceholder": "اختياري",
      "datePrefixLabel": "بادئة التاريخ",
      "datePlaceholder": "مثل Nov 12, 2025",
      "desktopSimulation": "محاكاة مقتطف بحث سطح المكتب",
      "mobileSimulation": "محاكاة مقتطف بحث الجوال",
      "titleFallback": "سيظهر عنوان SEO الخاص بك هنا",
      "descFallback": "ستظهر معاينة وصفك الوصفي هنا."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "كيف تنشئ روابط URL نظيفة لتحسين محركات البحث التقنية!\n10 أدوات مقاهٍ وإنتاجية رائعة في 2026\nقائمة تحقق كاملة لخريطة موقع XML وملف Robots.txt",
      "domainLabel": "النطاق الأساسي / المجلد الفرعي (لمعاينة URL الكاملة)",
      "separatorLabel": "فاصل الكلمات",
      "hyphenOption": "واصلة (-) — توصية Google",
      "underscoreOption": "شرطة سفلية (_)",
      "maxLengthLabel": "أقصى طول للرابط المختصر ({n} حرفًا)",
      "stripStopWords": "إزالة الكلمات الشائعة الإنجليزية الاختيارية (a, the, and, of, in, to)",
      "trailingSlash": "تضمين شرطة مائلة في النهاية (/)",
      "titlesLabel": "عناوين / عناوين الصفحات (عنوان في كل سطر للإنشاء الجماعي)",
      "generatedLabel": "روابط SEO المختصرة المُنشأة ({n})",
      "copyAllSlugs": "نسخ كل الروابط المختصرة",
      "copyAllUrls": "نسخ كل الروابط الكاملة",
      "originalTitleHeader": "العنوان الأصلي",
      "slugUrlHeader": "رابط SEO المختصر والرابط الكامل",
      "copyHeader": "نسخ"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "تاريخ <lastmod> (اختياري)",
      "changefreqLabel": "إشارة <changefreq>",
      "priorityLabel": "قيمة <priority> الافتراضية",
      "omitTag": "حذف الوسم",
      "deduplicateLabel": "إزالة الروابط المكررة تمامًا",
      "urlsLabel": "روابط Canonical (رابط https:// كامل في كل سطر)",
      "skippedInvalid": "تم تخطي {n} أسطر روابط غير صالحة: ",
      "generatedLabel": "ملف sitemap.xml المُنشأ ({n} رابطًا)",
      "copyXml": "نسخ XML",
      "downloadXml": "تنزيل .xml",
      "generatedAria": "خريطة موقع XML المُنشأة"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "نبني أدوات متصفح سريعة للصنّاع والفرق.   \n\nسير عمل أسبوعي جديد كل ثلاثاء.\n\nجرّب الأدوات المجانية من الرابط أدناه!",
      "modeBraille": "فاصل غير مرئي (⠀ U+2800)",
      "modeDot": "فاصل بنقطة بسيطة (.)",
      "modeClean": "تنظيف المسافات الخلفية فقط",
      "collapse": "إزالة المسافات المزدوجة العرضية",
      "labelRaw": "مسودة تعليق أو سيرة ذاتية",
      "phRaw": "اكتب تعليقك — اترك سطرًا فارغًا حيث تريد فاصل فقرة...",
      "tip": "تلميح: إذا كانت هناك مسافات خلفية في نهاية السطر أعلاه، فغالبًا ما تحذف التطبيقات الاجتماعية الفقرات الفارغة.",
      "labelOut": "المخرجات الجاهزة للصق",
      "copyFormatted": "نسخ التعليق المنسَّق",
      "charsLabel": "الأحرف:",
      "linesLabel": "الأسطر:",
      "blankLabel": "فواصل فارغة متبقية:",
      "fitsBio": "يتناسب مع سيرة إنستغرام المحدودة بـ 150 حرفًا",
      "captionLength": "طول التعليق (يتجاوز حد السيرة البالغ 150 حرفًا)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "المشكلة ← الإثارة ← الحل (PAS)",
        "tutorial": "شرح من 3 خطوات قابل للتنفيذ",
        "bab": "قبل ← بعد ← الجسر",
        "checklist": "قائمة تحقق للإطلاق / التدقيق",
        "myth": "خرافة شائعة مقابل واقع عملي"
      },
      "frameworkDescriptions": {
        "pas": "يسلّط الضوء على إزعاج ملموس قبل تقديم حل سير العمل.",
        "tutorial": "بنية إرشادية مرقّمة تناسب عروض LinkedIn الشرائحية والمحفوظات.",
        "bab": "يقارن عائقًا قديمًا بنتيجة منظمة.",
        "checklist": "قائمة تحقق واضحة تستحق الحفظ.",
        "myth": "يتحدى نصيحة قديمة ببدائل مباشرة وموجزة."
      },
      "frameworkLabels": {
        "fixesHeading": "ما الذي يصلحه فعلًا:",
        "beforeLabel": "قبل: ",
        "afterLabel": "بعد: ",
        "bridgeHeading": "الجسر:",
        "mythLabel": "خرافة شائعة: ",
        "worksHeading": "ما الذي يعمل عمليًا:"
      },
      "sampleHook": "توقف عن إضاعة ساعات في تنسيق روابط الحملات يدويًا.",
      "sampleContext": "معاملات UTM غير المتسقة وتباعد السيرة المعطوب يفسدان تقارير التحليلات بصمت.",
      "samplePoints": "حافظ على اتساق وسوم utm_source وutm_medium بأحرف صغيرة\nتحقق من طي الأحرف قبل النشر\nحافظ على فواصل فقرات نظيفة دون مسافات خلفية",
      "sampleCta": "احفظ قائمة التحقق هذه لإطلاق منتجك القادم.",
      "infoTitle": "دمج قوالب حتمي:",
      "infoBody": "تستخدم هذه الأداة أطر كتابة إعلانية منظمة مباشرة في متصفحك — دون أي نموذج ذكاء اصطناعي أو واجهة برمجة تطبيقات خارجية، ودون ادعاء ذلك.",
      "labelHook": "الخطاف الافتتاحي (أول سطر أو سطرين)",
      "labelContext": "السياق / بيان المشكلة",
      "labelPoints": "النقاط الرئيسية (نقطة في كل سطر)",
      "labelCta": "الدعوة إلى اتخاذ إجراء (CTA)",
      "labelTags": "الوسوم",
      "previewTitle": "معاينة التعليق المنسَّق",
      "copyCaption": "نسخ التعليق",
      "charsLabel": "الأحرف:",
      "wordsLabel": "الكلمات:",
      "fits": "يتناسب",
      "threadNeeded": "يلزم سلسلة",
      "tooLong": "طويل جدًا"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "حالة التنسيق وإمكانية الوصول",
      "optCamel": "PascalCase ‏(#CamelCase — مناسب لقارئات الشاشة)",
      "optLower": "أحرف صغيرة كلها (#lowercase)",
      "optPreserve": "الاحتفاظ بالحالة الأصلية",
      "outLabel": "تخطيط المخرجات",
      "optInline": "سطر واحد (مفصول بمسافات)",
      "optNewline": "وسم في كل سطر",
      "optDots": "فاصل طي التعليق (.\n.\n.)",
      "dedupe": "إزالة الوسوم المكررة",
      "labelRaw": "كلمات مفتاحية أو وسوم فوضوية (مفصولة بفواصل أو مسافات أو أسطر)",
      "labelResult": "مجموعة وسوم نظيفة",
      "copyHashtags": "نسخ الوسوم",
      "statClean": "وسوم نظيفة",
      "statDupes": "تكرارات أُزيلت",
      "statIgMax": "حد إنستغرام الأقصى (30)",
      "statWithin": "ضمن حد 30 وسمًا في إنستغرام",
      "statExceeds": "يتجاوز حد 30 وسمًا",
      "statChars": "أحرف المخرجات"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 حرفًا · أحرف وأرقام وشرطات سفلية",
        "instagram": "1–30 حرفًا · أحرف وأرقام ونقاط وشرطات سفلية",
        "tiktok": "2–24 حرفًا · أحرف وأرقام وشرطات سفلية ونقاط",
        "youtube": "3–30 حرفًا · أحرف وأرقام و_ و- و.",
        "threads": "1–30 حرفًا · مساحة أسماء مشتركة مع إنستغرام",
        "github": "1–39 حرفًا · أحرف وأرقام وواصلات مفردة"
      },
      "infoTitle": "فحص القواعد وروابط التحقق المباشرة:",
      "infoBodyBefore": "يفحص صياغة المعرّف وحد الأحرف دون اتصال، دون تخمين التوفر. انقر رابط",
      "infoEm": "فتح رابط الملف الشخصي",
      "infoBodyAfter": "لأي منصة للتحقق من حالة المطالبة المباشرة.",
      "labelBrand": "اسم العلامة التجارية أو المشروع أو المنشئ",
      "phBrand": "مثل Utility Hub",
      "labelActive": "المعرّف النشط المراد فحصه",
      "copyAt": "نسخ @",
      "variationsTitle": "تنويعات معرّف متوافقة:",
      "thPlatform": "المنصة",
      "thRules": "قواعد التنسيق",
      "thStatus": "حالة الصياغة",
      "thCheck": "تحقق يدوي",
      "valid": "تنسيق صالح",
      "invalid": "صياغة / طول غير صالح",
      "checkUrl": "فحص الرابط"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "عريض (Sans-Serif)",
        "sans-italic": "مائل (Sans-Serif)",
        "sans-bold-italic": "عريض مائل (Sans-Serif)",
        "serif-bold": "عريض (Serif)",
        "monospace": "أحادي المسافة",
        "double-struck": "مزدوج الضرب (لوح أسود)",
        "script-bold": "خط يد عريض",
        "fraktur-bold": "فراكتور عريض",
        "small-caps": "أحرف صغيرة كبيرة",
        "fullwidth": "جمالية العرض الكامل"
      },
      "styleNotes": {
        "sans-bold": "واضح وسهل القراءة لترويسات السيرة وخطافات المنشورات",
        "sans-italic": "تأكيد خفيف في التعليقات",
        "sans-bold-italic": "دعوات قوية وفواصل أقسام",
        "serif-bold": "تأكيد بأسلوب تحريري",
        "monospace": "معرّفات الشيفرة والتواريخ والوسوم التقنية",
        "double-struck": "أحرف عرض",
        "script-bold": "توقيع سيرة زخرفي",
        "fraktur-bold": "أحرف عرض قوطية",
        "small-caps": "تسميات ملف شخصي نظيفة بأحرف كبيرة",
        "fullwidth": "ترويسات اجتماعية عريضة بتباعد واسع بأسلوب قديم"
      },
      "sampleText": "مجموعة أدوات المنشئين الجديدة 2025",
      "accessibilityTitle": "ملاحظة إمكانية الوصول:",
      "accessibilityBody": "تأتي أحرف Unicode المنمّقة من كتل الرموز الرياضية، لذا قد تقرأها قارئات الشاشة حرفًا حرفًا أو تتخطاها، وبعض فهارس البحث تتجاهلها. استخدمها باعتدال للتأكيدات القصيرة بدلًا من فقرات كاملة.",
      "labelInput": "النص المراد تنميقه",
      "placeholder": "اكتب عنوانًا قصيرًا أو سطر سيرة أو دعوة إلى اتخاذ إجراء...",
      "previewEmpty": "المعاينة"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "سيرة إنستغرام",
        "linkedinPost": "منشور لينكدإن",
        "newsletter": "نشرة بريدية",
        "youtubeDescription": "وصف يوتيوب"
      },
      "presetsLabel": "إعدادات قناة سريعة:",
      "errorEmpty": "أدخل رابط موقع الوجهة.",
      "errorInvalid": "أدخل رابط وجهة صالحًا (مثل https://example.com/landing).",
      "labelUrl": "رابط موقع الوجهة *",
      "labelSource": "مصدر الحملة (utm_source) *",
      "phSource": "مثل instagram أو newsletter أو google",
      "labelMedium": "وسيط الحملة (utm_medium) *",
      "phMedium": "مثل social أو cpc أو email أو video",
      "labelCampaign": "اسم الحملة (utm_campaign)",
      "phCampaign": "مثل spring_launch",
      "labelContent": "محتوى الحملة (utm_content)",
      "phContent": "مثل hero_banner أو bio_button",
      "labelTerm": "كلمة الحملة (utm_term)",
      "phTerm": "كلمة مفتاحية مدفوعة أو وسم جمهور اختياري",
      "normalizeLabel": "فرض الأحرف الصغيرة وتحويل المسافات إلى شرطات سفلية (`_`)",
      "generatedTitle": "رابط الحملة المُنشأ",
      "copyUtm": "نسخ رابط UTM",
      "thParam": "معامل الاستعلام",
      "thValue": "القيمة المطبَّعة"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "يجب أن يكون رقم صفحة البداية عددًا صحيحًا 1 أو أكبر.",
      "stampedSuccess": (n: number, size: string) => `تمت إضافة أرقام الصفحات إلى ${n} صفحات (${size}).`,
      "pageOfLabel": (cur: number, total: number) => `الصفحة ${cur} / ${total}`,
      "dropTitleEmpty": "اختر ملف PDF لإضافة أرقام الصفحات",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "يضع تسميات صفحات متجهية نظيفة في التقارير والعقود والحزم",
      "labelPos": "الموضع",
      "optBottomCenter": "أسفل في المنتصف",
      "optBottomRight": "أسفل يمينًا",
      "optBottomLeft": "أسفل يسارًا",
      "optTopRight": "أعلى يمينًا",
      "labelFmt": "تنسيق التسمية",
      "optPageOf": "صفحة 1 / N",
      "optSlash": "1 / N",
      "optNumberOnly": "1، 2، 3...",
      "labelStart": "رقم البداية",
      "labelSize": "حجم الخط (نقطة)",
      "opt9": "9 نقاط (خفيف)",
      "opt11": "11 نقطة (قياسي)",
      "opt14": "14 نقطة (كبير)",
      "skipCover": "تخطي صفحة الغلاف (ابدأ الترقيم من الصفحة 2)",
      "numbering": "جارٍ ترقيم الصفحات...",
      "addBtn": "إضافة أرقام الصفحات وتنزيلها"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `تعذّر فك ترميز الصورة «${name}».`,
      "errCanvas": "سياق Canvas 2D غير متاح.",
      "errConvert": (name: string) => `تعذّر تحويل «${name}» إلى PNG.`,
      "errNotImage": (name: string) => `«${name}» ليست ملف صورة مدعومًا (PNG أو JPG أو WebP).`,
      "errRead": (name: string) => `تعذّرت قراءة «${name}».`,
      "errLoad": "تعذّر تحميل الصور.",
      "errEmpty": "أضف صورة واحدة على الأقل أولًا.",
      "errBuild": "تعذّر تحويل الصور إلى PDF.",
      "createdSuccess": (n: number, size: string) => `تم إنشاء PDF نظيف من ${n} صفحات (${size}).`,
      "dropTitle": "اختر صور PNG أو JPG أو WebP",
      "dropSub": "حوّل لقطات الشاشة أو المسح الضوئي أو الصور محليًا إلى ملف PDF واحد",
      "labelSize": "حجم صفحة PDF",
      "optA4": "A4 عمودي (210 × 297 مم)",
      "optLetter": "US Letter ‏(8.5 × 11 بوصة)",
      "optFit": "الأبعاد الدقيقة للصورة",
      "labelMargin": "هامش الصفحة",
      "optMargin0": "بلا هامش (0 نقطة)",
      "optMargin24": "هامش قياسي (24 نقطة)",
      "optMargin48": "هامش عريض (48 نقطة)",
      "labelOut": "اسم ملف المخرجات",
      "moveUp": (name: string) => `نقل ${name} لأعلى`,
      "moveDown": (name: string) => `نقل ${name} لأسفل`,
      "removeFile": (name: string) => `حذف ${name}`,
      "building": "جارٍ إنشاء PDF...",
      "convertBtn": (n: number) => `تحويل ${n} صور إلى PDF`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "تعذّرت قراءة ملفات PDF المختارة.",
      "errMin2": "أضف ملفي PDF على الأقل للدمج.",
      "mergedSuccess": (n: number, pages: number, size: string) => `تم دمج ${n} ملفات PDF بنظافة (${pages} صفحات، ${size}).`,
      "dropValidating": "جارٍ التحقق من ملفات PDF...",
      "dropTitle": "اختر عدة ملفات PDF أو أسقطها",
      "dropSub": "دمج 100% في المتصفح عبر pdf-lib · ملفات PDF غير المشفرة فقط · لا تُرفع أبدًا",
      "filesQueued": "ملفات في الانتظار",
      "totalPagesLabel": "إجمالي الصفحات",
      "combinedSize": "الحجم الإجمالي للمدخلات",
      "clearQueue": "مسح الانتظار",
      "pageSingular": "صفحة",
      "pagePlural": "صفحات",
      "moveUp": (name: string) => `نقل ${name} لأعلى`,
      "moveDown": (name: string) => `نقل ${name} لأسفل`,
      "removeFile": (name: string) => `حذف ${name}`,
      "outName": "اسم ملف المخرجات",
      "merging": "جارٍ دمج ملفات PDF...",
      "mergeBtn": (n: number) => `دمج ${n} ملفات PDF وتنزيلها`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "تم مسح حقول البيانات الوصفية القابلة للتغيير. انقر «حفظ وتنزيل PDF» للتطبيق.",
      "savedSuccess": (size: string) => `تم حفظ PDF ببيانات وصفية محدَّثة (${size}).`,
      "dropTitleEmpty": "اختر ملف PDF لعرض بياناته الوصفية أو تغييرها",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "اعرض خصائص المستند، وامسح وسوم المؤلف/البرنامج، أو عيّن عنوان SEO نظيفًا",
      "labelTitle": "عنوان المستند",
      "labelAuthor": "المؤلف",
      "labelSubject": "الموضوع / الملخص",
      "labelKeywords": "الكلمات المفتاحية (مفصولة بفواصل)",
      "labelCreator": "التطبيق المنشئ",
      "labelProducer": "منتج PDF",
      "saving": "جارٍ حفظ PDF...",
      "saveBtn": "حفظ البيانات الوصفية وتنزيل PDF",
      "stripBtn": "مسح الحقول القابلة للتغيير"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "لم يُعثر على صفحات مطابقة للتدوير.",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `تم تدوير ${a} من ${b} صفحات بمقدار ${deg}° باتجاه عقارب الساعة (${size}).`,
      "dropTitleEmpty": "اختر ملف PDF لتدوير صفحاته",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "دوّر كل الصفحات أو نطاق صفحات مختار محليًا، دون رفع إلى خادم",
      "labelAngle": "زاوية التدوير",
      "opt90": "90° باتجاه عقارب الساعة (يمينًا)",
      "opt270": "90° عكس عقارب الساعة (يسارًا / 270°)",
      "opt180": "180° مقلوبًا",
      "labelScope": "التطبيق على",
      "optAll": (n: number) => `كل الصفحات (${n})`,
      "optRange": "نطاقات صفحات محددة",
      "optOdd": "الصفحات الفردية فقط",
      "optEven": "الصفحات الزوجية فقط",
      "labelRangeInput": (n: number) => `أرقام / نطاقات الصفحات (1–${n})`,
      "phRange": "مثل 1، 3-5",
      "rotating": "جارٍ تدوير الصفحات...",
      "rotateBtn": "تطبيق التدوير وتنزيل PDF"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- الصفحة ${n} ---`,
      "dropExtracting": "جارٍ استخراج طبقة نص PDF...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropTitleEmpty": "اختر ملف PDF نصيًا لاستخراج نصه",
      "dropSub": "يستخرج نص Unicode المضمّن محليًا عبر PDF.js · بلا رفع إلى خادم",
      "noTextTitle": "لم يُعثر على طبقة نص قابلة للتحديد:",
      "noTextBody": "يبدو أن ملف PDF هذا يحتوي على صور ممسوحة ضوئيًا أو مسارات متجهية محددة، وليس طبقة نص مضمّنة. لا يُجرى تعرّف ضوئي على الأحرف (OCR) دون اتصال على جانب العميل.",
      "markersLabelBefore": "تضمين علامات ترويسة الصفحات (",
      "markersCode": "--- الصفحة N ---",
      "markersLabelAfter": ")",
      "copyText": "نسخ النص",
      "downloadTxt": "تنزيل .txt",
      "outputAria": "مخرجات نص PDF المستخرج",
      "pagesScanned": "الصفحات الممسوحة:",
      "wordsExtracted": "الكلمات المستخرجة:",
      "textSize": "حجم النص:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "للحفاظ على ذاكرة قماش المتصفح سريعة ومتجاوبة، اعرض 20 صفحة كحد أقصى في دفعة واحدة.",
      "errCanvas": "سياق Canvas 2D غير متاح.",
      "dropTitleEmpty": "اختر ملف PDF لعرضه كصور",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "عرض محلي عبر قماش PDF.js · مخرجات PNG أو JPG",
      "labelRange": "الصفحات («all» أو نطاق مثل 1-4، 6)",
      "labelFormat": "تنسيق الصورة",
      "optPng": "PNG (دون فقدان / نص واضح)",
      "optJpg": "JPG (مضغوط، جيد للصور)",
      "labelScale": "دقة العرض",
      "optScale1": "1.0× ‏(72 DPI معاينة سريعة)",
      "optScale15": "1.5× ‏(108 DPI قياسي)",
      "optScale2": "2.0× ‏(144 DPI حاد)",
      "rendering": "جارٍ عرض صفحات PDF...",
      "renderBtn": "عرض صفحات PDF كصور",
      "pageAlt": (n: number) => `معاينة الصفحة ${n}`,
      "pageLabel": (n: number, w: number, h: number) => `الصفحة ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "رمادي محايد",
        "indigo": "نيلي العلامة",
        "red": "أحمر الختم"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "أدخل نص العلامة المائية قبل إنشاء PDF.",
      "appliedSuccess": (text: string, n: number, size: string) => `تم تطبيق العلامة المائية «${text}» على ${n} صفحات (${size}).`,
      "dropTitleEmpty": "اختر ملف PDF لتطبيق علامة مائية",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} صفحات)`,
      "dropSub": "يضع ختم نص متجهي نظيف محليًا عبر pdf-lib",
      "labelText": "نص العلامة المائية",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "لون الختم",
      "firstPageOnly": "الصفحة الأولى فقط",
      "labelSize": "حجم الخط:",
      "ptSuffix": (n: number) => `${n} نقطة`,
      "labelOpacity": "العتامة:",
      "labelAngle": "التدوير:",
      "applying": "جارٍ تطبيق العلامة المائية على PDF...",
      "applyBtn": "تطبيق العلامة المائية وتنزيلها"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "يجب أن يبقى في PDF صفحة واحدة على الأقل.",
      "savedSuccess": (n: number, size: string) => `تم حفظ PDF المحدَّث من ${n} صفحات (${size}).`,
      "loading": "جارٍ تحميل صفحات PDF والمعاينات...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n} صفحات نشطة)`,
      "dropTitleEmpty": "اختر ملف PDF لإعادة ترتيب صفحاته أو حذفها",
      "dropSub": "انقل الصفحات محليًا أو كرّر ورقة أو احذف صفحات غير مرغوبة",
      "outCount": "عدد صفحات المخرجات:",
      "saving": "جارٍ حفظ PDF...",
      "saveBtn": "حفظ PDF بعد إعادة الترتيب",
      "thumbAlt": (n: number) => `الصفحة الأصلية ${n}`,
      "thumbFallback": (n: number) => `ص. أصلية ${n}`,
      "posLabel": (n: number) => `الموضع #${n}`,
      "origLabel": (n: number) => `(الأصلية ${n})`,
      "moveEarlierTitle": "النقل إلى قبل",
      "moveEarlierAria": (n: number) => `نقل الموضع ${n} إلى قبل`,
      "moveLaterTitle": "النقل إلى بعد",
      "moveLaterAria": (n: number) => `نقل الموضع ${n} إلى بعد`,
      "dupTitle": "تكرار الصفحة",
      "dupAria": (n: number) => `تكرار صفحة الموضع ${n}`,
      "delTitle": "حذف الصفحة",
      "delAria": (n: number) => `حذف صفحة الموضع ${n}`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `في التقسيم الانفجاري تُنزَّل كل صفحة كملف منفصل. بالنسبة إلى مستندات أكبر من 25 صفحة (${n} صفحة هنا)، أزل الحدود حتى لا يحظر المتصفح التنزيلات الجماعية.`,
      "exportedAll": (n: number) => `تم تصدير ${n} ملفات PDF من صفحة واحدة.`,
      "errNoMatch": "لم يطابق أي صفحة ذلك التحديد (مثلًا، تحتاج الصفحات الزوجية إلى صفحتين أو أكثر).",
      "extractedSuccess": (a: number, b: number, size: string) => `تم استخراج ${a} من ${b} صفحات (${size}).`,
      "dropTitleEmpty": "اختر ملف PDF لتقسيمه أو استخراج صفحات منه",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} صفحات · ${size})`,
      "dropSub": "معالجة محلية في الذاكرة · انقر لتغيير المستند",
      "modeRange": "استخراج نطاقات صفحات",
      "modeOdd": "الصفحات الفردية فقط",
      "modeEven": "الصفحات الزوجية فقط",
      "modeBurst": "استخراج كل صفحة على حدة",
      "labelRange": (n: number) => `الصفحات المراد استخراجها (1–${n})`,
      "phRange": "مثل 1-3، 5، 8-10",
      "rangeHintBefore": "استخدم الفواصل والواصلات (مثل ",
      "rangeHintAfter": ").",
      "extracting": "جارٍ استخراج PDF...",
      "splitBtn": "تقسيم PDF وتنزيله"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "رابط موقع",
      "tabText": "نص عادي",
      "tabWifi": "شبكة Wi-Fi",
      "tabEmail": "رابط بريد إلكتروني",
      "tabPhone": "رقم هاتف",
      "labelUrl": "رابط الوجهة",
      "labelText": "المحتوى النصي",
      "labelSsid": "اسم الشبكة (SSID)",
      "labelSecurity": "نوع الأمان",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "مفتوحة (بلا كلمة مرور)",
      "labelWifiPass": "كلمة مرور Wi-Fi",
      "hiddenSsid": "شبكة SSID مخفية",
      "labelEmailTo": "البريد الإلكتروني للمستلم",
      "labelEmailSubject": "الموضوع (اختياري)",
      "labelPhone": "رقم الهاتف (يُقترح تنسيق E.164)",
      "sizeLabel": (size: number) => `الحجم (${size} بكسل)`,
      "labelEc": "تصحيح الأخطاء",
      "labelFg": "المقدمة",
      "labelBg": "الخلفية",
      "quietZone": "هامش المنطقة الهادئة:",
      "modulesLabel": (margin: number) => `${margin} وحدات`,
      "encodedPayload": "سلسلة الحمولة المرمَّزة",
      "copyPayload": "نسخ الحمولة",
      "emptyError": "أدخل محتوى أعلاه لإنشاء رمز QR قابل للمسح.",
      "encodeError": "تعذّر ترميز حمولة QR.",
      "qrAlt": "رمز QR قابل للمسح تم إنشاؤه",
      "downloadPng": "تنزيل PNG",
      "downloadSvg": "تنزيل SVG",
      "copySvg": "نسخ SVG",
      "sampleText": "مرحبًا بك في UtilityFlow!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "منشور قياسي",
        "profileBio": "السيرة الذاتية للملف الشخصي",
        "caption": "تعليق",
        "feedPost": "منشور خلاصة",
        "videoCaption": "تعليق فيديو",
        "post": "منشور",
        "videoTitle": "عنوان فيديو",
        "description": "وصف"
      },
      "sampleText": "يبدأ الشحن السريع بتحسينات صغيرة يومية.\n\nجرّب أدوات المنشئين في المتصفح على https://utilityflow.online/tools/ — دون تسجيل.\n\n#CreatorTools #Workflow",
      "labelInput": "مسودة منشور / سيرة اجتماعية",
      "copyDraft": "نسخ المسودة",
      "placeholder": "اكتب تعليقك أو منشورك أو سيرتك الاجتماعية أو عنوان يوتيوب أو الصقه...",
      "charsLabel": "الأحرف:",
      "wordsLabel": "الكلمات:",
      "hashtagsLabel": "الوسوم:",
      "mentionsLabel": "الإشارات:",
      "urlsLabel": "الروابط المكتشفة:",
      "urlsWeighted": "(يعادل 23 حرفًا على X)",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} فوق الحد`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} متبقية`,
      "foldLabel": (n: number) => `الطي ~${n} حرفًا`,
      "foldTitle": "معاينة اقتطاع الخلاصة / طي «عرض المزيد»",
      "foldDesc": (limit: number, platform: string, surface: string) => `معاينة ما يراه القارئ قبل الضغط على «عرض المزيد» (${limit} حرفًا لمنشور ${platform} ${surface}).`,
      "selectAria": "اختر منصة معاينة الاقتطاع",
      "previewEmpty": "ستظهر المعاينة هنا..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "كيف بنينا 83 أداة متصفح سريعة دون تتبع",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "24 ألف مشاهدة · قبل يومين",
      "errNotImage": "يرجى اختيار ملف صورة PNG أو JPG أو WebP.",
      "errDecode": "تعذّر فك ترميز ملف الصورة هذا في المتصفح.",
      "previewEyebrow": "معاينة 1280 × 720",
      "emptyThumb": "ارفع مصغّرتك لفحص وضوحها في الخلاصة",
      "thumbAlt": "معاينة المصغّرة المرفوعة",
      "safeZoneTitle": "منطقة تداخل شارة الطابع الزمني",
      "chooseThumb": "اختر مصغّرة محلية (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `استبدال: ${name}`,
      "recommended": "يُقترح 1280×720 (16:9)، أقل من 2 ميغابايت · لا تُرفع أبدًا",
      "diagTitle": "فحص مواصفات الصورة",
      "dimLabel": "الأبعاد",
      "dimHdOk": "(HD جيد)",
      "dimUnder": "(<1280 بكسل)",
      "aspectLabel": "نسبة العرض إلى الارتفاع",
      "aspectMatch": "مطابقة 16:9",
      "aspectNo": "ليست 16:9 (قد تُقص أو تُحاط بأشرطة)",
      "sizeLabel": "حجم الملف",
      "sizeOk": "(<2 ميغابايت جيد)",
      "sizeOver": "(>2 ميغابايت الحد)",
      "titleLabel": (len: number) => `عنوان الفيديو (${len}/100 حرفًا · يظهر ~60 منها على الجوال)`,
      "channelLabel": "اسم القناة",
      "durationLabel": "المدة",
      "darkMode": "معاينة خلاصة الوضع الداكن",
      "safeZone": "تمييز منطقة زاوية الطابع الزمني",
      "desktopCard": "بطاقة خلاصة الرئيسية على سطح المكتب",
      "sidebar": "شريط جانبي للمشاهدة على سطح المكتب (مقترحات مضغوطة)",
      "untitled": "فيديو بلا عنوان"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "المقدمة والنظرة العامة"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "إعداد البنية الرئيسية"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "عرض حي وأخطاء شائعة"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "الملخص والخطوات التالية"
        }
      ],
      "newChapter": (n: number) => `الفصل ${n}`,
      "defaultChapterTitle": "الفصل",
      "warnInvalid": "تنسيق طابع زمني واحد أو أكثر غير صالح (استخدم MM:SS أو HH:MM:SS).",
      "warnMin3": "يتطلب يوتيوب 3 طوابع زمنية على الأقل بترتيب تصاعدي لتفعيل فصول الفيديو.",
      "warnFirst": "يجب أن يبدأ الفصل الأول عند 00:00 حتى يتعرف يوتيوب على الفصول.",
      "warnOrder": "الفصول خارج الترتيب الزمني (انقر «ترتيب زمنيًا»).",
      "warnShort": (title: string) => `الفصل «${title}» أقصر من 10 ثوانٍ بعد الفصل السابق (الحد الأدنى في يوتيوب 10 ثوانٍ).`,
      "labelUrl": "رابط فيديو يوتيوب أو معرّف الفيديو (لروابط `?t=` المباشرة)",
      "heading": "فصول الفيديو",
      "sortBtn": "ترتيب زمنيًا",
      "addBtn": "إضافة فصل",
      "tsAria": (n: number) => `الطابع الزمني للفصل ${n}`,
      "titleAria": (n: number) => `عنوان الفصل ${n}`,
      "phTitle": "عنوان الفصل",
      "removeAria": (n: number) => `حذف الفصل ${n}`,
      "specTitle": "فحص مواصفات فصول يوتيوب:",
      "descBlock": "كتلة فصول الوصف",
      "copyChapters": "نسخ الفصول",
      "emptyChapters": "أضف فصولًا أعلاه لإنشاء كتلة الوصف.",
      "shareTitle": "روابط مشاركة بالطوابع الزمنية",
      "videoIdLabel": (id: string) => `(معرّف الفيديو: ${id})`,
      "noVideoId": "(أدخل رابط يوتيوب صالحًا أعلاه)",
      "noVideoHint": "الصق رابط youtube.com أو youtu.be صالحًا لإنشاء روابط قفز `?t=` قابلة للنقر لكل فصل."
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "لم يُختر أي ملف.",
      "notPdf": (name: string) => `«${name}» لا يبدو ملف PDF.`,
      "empty": (name: string) => `«${name}» فارغ أو غير مكتمل.`,
      "noHeader": (name: string) => `لا يحتوي «${name}» على ترويسة %PDF صالحة ولا يمكن معالجته.`,
      "enterRanges": "أدخل أرقام صفحات أو نطاقات، مثل «1-3، 5».",
      "rangeOutside": (token: string, total: number) => `النطاق «${token}» خارج نطاق صفحات المستند 1–${total}.`,
      "rangeReversed": (token: string) => `صفحة بداية النطاق «${token}» أكبر من صفحة نهايته.`,
      "pageMissing": (page: number, total: number) => `الصفحة ${page} غير موجودة (يحتوي المستند على ${total} صفحات).`,
      "invalidSyntax": (token: string) => `صياغة صفحة غير صالحة «${token}». استخدم أرقامًا ونطاقات مثل «1-3، 5».`,
      "encrypted": "ملف PDF هذا مشفر أو محمي بكلمة مرور. ألغِ قفله قبل المعالجة المحلية.",
      "unable": "تعذّرت معالجة ملف PDF.",
      "allKeywords": ["all", "الكل", "جميع"]
    }
  }
};
