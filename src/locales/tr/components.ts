import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the tr locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the tr locale is selected.
 */
export const trComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "Büyük/küçük harf dönüştürülecek metin",
      "placeholder": "Metin yazın veya yapıştırın, sonra aşağıdaki harf dönüştürme düğmelerinden birine tıklayın...",
      "copyResult": "Sonucu kopyala"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Her platformun karakter sınırına sığan, net ve öz metinler yazın — ne arama sonuçlarında garip kesilsin, ne sosyal medyada.",
      "withSpaces": "Boşluklu",
      "withoutSpaces": "Boşluksuz",
      "words": "Kelime",
      "letters": "Harf",
      "digits": "Rakam",
      "utf8Bytes": "UTF-8 bayt",
      "copyText": "Metni kopyala",
      "textToMeasure": "Karakter uzunluğu ölçülecek metin",
      "placeholder": "Tam karakter sayısını, bayt boyutunu ve platform sınırlarını görmek için metin yazın veya yapıştırın...",
      "whitespaceChars": "Boşluk karakterleri",
      "lines": "Satır",
      "platformLimitsTitle": "Platform ve SEO karakter sınırları",
      "over": "fazla",
      "left": "kaldı",
      "platformLimits": [
        {
          "name": "SEO Meta Başlığı",
          "note": "Google SERP başlığı için önerilen uzunluk"
        },
        {
          "name": "SEO Meta Açıklaması",
          "note": "Masaüstü snippet için yaygın sınır"
        },
        {
          "name": "SMS Segmenti",
          "note": "Tek bir GSM-7 SMS mesajı"
        },
        {
          "name": "X / Twitter Gönderisi",
          "note": "Gönderi için yaygın uzunluk"
        },
        {
          "name": "Instagram Altyazı Önizlemesi",
          "note": "\"Daha fazla\" öncesinde görünen bölüm"
        },
        {
          "name": "LinkedIn Gönderisi",
          "note": "Akış güncellemesi için yaygın azami uzunluk"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Bul",
      "replaceWith": "Şununla değiştir",
      "findPlaceholder": "Aranacak metin...",
      "replacePlaceholder": "Değiştirilecek metin...",
      "caseSensitive": "Büyük/küçük harfe duyarlı",
      "wholeWordOnly": "Yalnızca tam kelime",
      "useRegex": "Normal ifade (RegExp) kullan",
      "regexError": "Regex hatası:",
      "invalidRegex": "Geçersiz normal ifade.",
      "sourceText": "Kaynak metin",
      "updatedOutput": "Değiştirilmiş sonuç",
      "match": "Eşleşme",
      "matches": "Eşleşme",
      "replaced": "değiştirildi",
      "sourcePlaceholder": "Bulmak ve değiştirmek için metin yapıştırın...",
      "outputPlaceholder": "Değiştirilmiş metin burada görünecek...",
      "copyResult": "Sonucu kopyala"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Satır öneki",
      "lineSuffix": "Satır son eki",
      "startNumber": "Başlangıç numarası",
      "numberSeparator": "Numara ayırıcı",
      "addLineNumbers": "Satır numarası ekle",
      "zeroPad": "Sıfırla doldur (01, 02)",
      "skipEmptyLines": "Boş satırları atla",
      "inputLines": "Girdi satırları",
      "formattedLines": "Biçimlendirilmiş satırlar",
      "copyResult": "Sonucu kopyala",
      "inputPlaceholder": "Her satıra bir değer veya satır yapıştırın...",
      "outputPlaceholder": "Numaralandırılmış veya sarılmış satırlar burada görünecek..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Miktar",
      "unit": "Birim",
      "unitLabels": {
        "paragraphs": "Paragraf",
        "sentences": "Cümle",
        "words": "Kelime"
      },
      "startClassic": "“Lorem ipsum” ile başla",
      "wrapHtml": "<p> etiketleriyle sar",
      "words": "Kelime",
      "characters": "Karakter",
      "regenerate": "Yeniden oluştur",
      "copyPlaceholder": "Yer tutucu metni kopyala",
      "generatedText": "Oluşturulan yer tutucu metin"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow Sürüm Notları\n\n**Markdown Önizleyici**'ye hoş geldiniz — canlı *HTML* çıktısı olan hızlı, tarayıcıda çalışan bir düzenleyici.\n\n## Öne çıkan özellikler\n\n- Başlıklar, listeler ve bağlantılar için anında biçimlendirme\n- Uzak sunucuya yükleme olmadan güvenli HTML kaçışı\n- Ham HTML'yi tek tıkla kopyalama ve indirme\n\n> Belgelerinizi işinize yakın tutun ve yayınlamadan önce yapıyı kontrol edin.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n[UtilityFlow](/tools/) üzerinden daha fazlasını öğrenin.",
      "renderedPreview": "Oluşturulan önizleme",
      "rawHtml": "Ham HTML",
      "exportHtml": "HTML olarak dışa aktar",
      "copyHtml": "HTML'yi kopyala",
      "markdownSource": "Markdown kaynağı",
      "livePreview": "Canlı önizleme",
      "compiledHtml": "Derlenmiş HTML",
      "compiledHtmlAria": "Derlenmiş HTML kaynağı",
      "inputPlaceholder": "Markdown yazın (# başlık, **kalın**, - liste, [bağlantı](https://...))...",
      "emptyPreview": "Markdown yazdıkça önizleme burada görünecek..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Net teknik yazı, okuyucunun zamanına saygı duyar. Karmaşık talimatların anlaşılır kalması için mümkün olduğunca somut isimler ve etken fiiller kullanın.\n\nİç içe yan cümlelerle dolu uzun cümleler, okuyucuyu paragrafı yeniden okumaya zorlar. Yoğun açıklamaları küçük adımlara bölmek, belgelerin daha hızlı taranmasını ve daha kolay uygulanmasını sağlar.",
      "level": "Seviye:",
      "textToCheck": "Okunabilirliği kontrol edilecek metin",
      "placeholder": "Flesch Okuma Kolaylığı ve sınıf düzeyi puanlarını öğrenmek için makalenizi, denemenizi veya açılış sayfası metninizi yapıştırın...",
      "fleschEase": "Flesch Okuma Kolaylığı",
      "fleschKincaid": "Flesch-Kincaid Sınıf Düzeyi",
      "usGrade": "ABD okul sınıf düzeyi",
      "gunningFog": "Gunning Fog Endeksi",
      "yearsEducation": "Eğitim yılı",
      "smog": "SMOG Endeksi",
      "polysyllable": "Çok heceli karmaşıklık",
      "structuralBreakdown": "Yapısal döküm",
      "wordsSentences": "Kelime / Cümle",
      "avgSentenceLength": "Ortalama cümle uzunluğu",
      "words": "Kelime",
      "avgSyllablesPerWord": "Kelime başına ortalama hece",
      "complexWords": "Karmaşık kelimeler (3+ hece)",
      "longWordsDetected": "Uzun kelimeler bulundu (3+ hece)",
      "noLongWords": "Bu parçada 3+ heceli kelime bulunamadı.",
      "emptyState": "Okunabilirlik formüllerini ve yapısal oranları görmek için yukarıya en az bir cümle yazın.",
      "levels": [
        {
          "level": "Çok Kolay",
          "audience": "5. sınıf (10–11 yaş)"
        },
        {
          "level": "Kolay",
          "audience": "6. sınıf (11–12 yaş)"
        },
        {
          "level": "Oldukça Kolay",
          "audience": "7. sınıf (12–13 yaş)"
        },
        {
          "level": "Normal",
          "audience": "8.–9. sınıf (13–15 yaş)"
        },
        {
          "level": "Oldukça Zor",
          "audience": "10.–12. sınıf"
        },
        {
          "level": "Zor",
          "audience": "Üniversite düzeyi"
        },
        {
          "level": "Çok Zor",
          "audience": "Üniversite mezunu / Uzman düzeyi"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Büyük/küçük harfe duyarlı",
      "trimWhitespace": "Boşlukları kırp",
      "removeEmptyLines": "Boş satırları kaldır",
      "sortAlphabetically": "Alfabetik sırala",
      "originalLines": "Orijinal satırlar",
      "lines": "Satır",
      "uniqueLines": "Benzersiz satırlar",
      "unique": "Benzersiz",
      "removed": "kaldırıldı",
      "inputPlaceholder": "Her satıra bir öğe gelecek şekilde liste yapıştırın...",
      "outputPlaceholder": "Yinelenenleri kaldırılmış sonuç burada görünecek..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Büyük/küçük harfe duyarlı",
      "ignoreBlankLines": "Boş satırları yoksay",
      "removeDuplicates": "Yinelenenleri kaldır",
      "inputLines": "Girdi satırları",
      "sortedLines": "Sıralanmış satırlar",
      "copySorted": "Sıralanmışı kopyala",
      "inputPlaceholder": "Her satıra bir öğe yazın...",
      "outputPlaceholder": "Sıralanmış sonuç burada görünecek...",
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
          "label": "Doğal (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "En kısa önce"
        },
        {
          "id": "length-desc",
          "label": "En uzun önce"
        },
        {
          "id": "reverse-order",
          "label": "Ters sıra"
        },
        {
          "id": "shuffle",
          "label": "Karıştır"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Boşlukları yoksay",
      "ignoreCase": "Büyük/küçük harfi yoksay",
      "originalText": "Orijinal metin",
      "modifiedText": "Değiştirilmiş metin",
      "originalPlaceholder": "Orijinal metni yapıştırın...",
      "modifiedPlaceholder": "Değiştirilmiş metni yapıştırın...",
      "lineComparison": "Satır karşılaştırması",
      "added": "Eklenen",
      "removed": "Kaldırılan",
      "unchanged": "Değişmemiş",
      "emptyState": "Eklenen veya kaldırılan satırları görmek için her iki kutuya da metin yazın."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Metnin ilk satırı\nMetnin ikinci satırı\nMetnin üçüncü satırı",
      "originalText": "Orijinal metin",
      "reversedOutput": "Tersine çevrilmiş sonuç",
      "inputPlaceholder": "Tersine çevirmek için metin veya satırlar yazın...",
      "outputPlaceholder": "Tersine çevrilmiş metin burada görünecek...",
      "modes": [
        {
          "id": "characters",
          "label": "Karakterleri ters çevir"
        },
        {
          "id": "words",
          "label": "Kelime sırasını ters çevir"
        },
        {
          "id": "each-word",
          "label": "Her kelimeyi ters çevir"
        },
        {
          "id": "lines",
          "label": "Satır sırasını ters çevir"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSON'u çevrimiçi biçimlendirmenin 10 harika yolu!\nCafé ve Crème: 2026 rehberi\nCloudflare Pages ile hızlı statik site nasıl kurulur",
      "hyphen": "Tire (-)",
      "underscore": "Alt çizgi (_)",
      "forceLowercase": "Tamamını küçük harf yap",
      "stripStopWords": "Yaygın durak kelimeleri kaldır",
      "titlesLabel": "Başlık veya ifade (toplu mod için her satıra bir tane)",
      "inputPlaceholder": "Blog başlığı, ürün adı veya başlık listesi yazın...",
      "generatedSlugs": "Oluşturulan URL slug'ları",
      "copySlugs": "Slug'ları kopyala",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Fazla   boşluklu   ilk   satır.   \n\n   Sekme\tve   boşluklu   ikinci satır.\n\n\nÜçüncü   satır burada.   ",
      "collapseSpaces": "Birden fazla boşluğu teke indir",
      "trimEdges": "Satır kenarlarını kırp",
      "tabsToSpaces": "Sekmeleri boşluğa dönüştür",
      "lineBreaks": "Satır sonu:",
      "keepBreaks": "Satır sonlarını koru",
      "removeBlankLines": "Boş satırları kaldır",
      "replaceWithSpaces": "Boşlukla değiştir",
      "removeAllBreaks": "Tüm sonları kaldır",
      "inputText": "Girdi metni",
      "chars": "Karakter",
      "cleanedText": "Temizlenmiş metin",
      "removed": "kaldırıldı",
      "inputPlaceholder": "Fazla boşluk, sekme veya boş satır içeren dağınık metni yapıştırın...",
      "outputPlaceholder": "Temizlenmiş sonuç otomatik olarak görünecek..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow, tüm metin sayımlarını doğrudan tarayıcınızda yapar. İster blog yazısı yazıyor, ister ürün duyurusunu kısaltıyor, ister katı bir kelime sınırına karşı akademik makale kontrol ediyor olun — anında sayım, mesajınızı net tutmayı kolaylaştırır.\n\nKısa cümleler taramayı kolaylaştırır. Cümle uzunluğunu değiştirmek, uzun rehberleri masaüstünde ve mobilde okumayı ilgi çekici tutar.",
      "words": "Kelime",
      "characters": "Karakter",
      "noSpaces": "Boşluksuz",
      "sentences": "Cümle",
      "paragraphs": "Paragraf",
      "readingTime": "Okuma süresi",
      "downloadTxt": ".txt indir",
      "copyText": "Metni kopyala",
      "textToCount": "Sayılacak metin",
      "placeholder": "Kelime, karakter, cümle ve okuma süresini saymak için metin yapıştırın veya yazın...",
      "deliveryTimingLines": "Konuşma süresi ve satırlar",
      "speakingTime": "Konuşma süresi (130 kelime/dakika)",
      "totalLines": "Toplam satır",
      "avgWordLength": "Ortalama kelime uzunluğu",
      "chars": "Karakter",
      "mostFrequentWords": "En sık geçen kelimeler",
      "emptyKeywords": "En çok tekrarlanan kelimeleri görmek için yukarıya metin yazın."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Teknik SEO denetimleri taranabilirliği, iç bağlantıları ve sayfa hızını kontrol eder. Hızlı sayfalar kullanıcı etkileşimini ve mobil aramada sayfa hızı sinyalini iyileştirir. İç bağlantılar ilgili rehberleri birbirine bağlar ve teknik SEO yapısını güçlendirir.",
      "ngramLabels": {
        "1": "1 kelime",
        "2": "2 kelimelik ifadeler",
        "3": "3 kelimelik ifadeler"
      },
      "excludeStopWords": "Yaygın durak kelimeleri hariç tut",
      "minLength": "Asgari uzunluk:",
      "textForAnalysis": "Frekans analizi için metin",
      "placeholder": "Tekrarlanan kelimeleri ve anahtar kelime yoğunluğunu saymak için makale, ürün açıklaması veya not yapıştırın...",
      "totalWords": "Toplam kelime:",
      "uniqueTerms": "Benzersiz terim:",
      "exportCsv": "CSV olarak dışa aktar",
      "copyCsv": "CSV kopyala",
      "rank": "#",
      "termPhrase": "Kelime / İfade",
      "count": "Sayı",
      "density": "Yoğunluk",
      "emptyState": "Kelime sayılarını ve anahtar kelime yoğunluğu yüzdelerini görmek için yukarıya metin yazın."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Lütfen geçerli takvim tarihleri girin.",
      "errorDobAfterTarget": "Doğum tarihi, hedef tarihten sonra olamaz.",
      "dobLabel": "Doğum tarihi",
      "targetLabel": "Şu tarihteki yaş",
      "exactAge": "Tam yaş",
      "yearsWord": "Yıl",
      "monthsWord": "Ay",
      "daysWord": "Gün",
      "nextBirthday": "Sonraki doğum günü",
      "turning": "yaşına girecek",
      "inWord": "içinde",
      "totalMonths": "Toplam ay",
      "totalWeeks": "Toplam hafta",
      "totalDays": "Toplam gün",
      "totalHours": "Toplam saat (yaklaşık)",
      "monthsAbbr": "Ay",
      "weeksAbbr": "Hafta",
      "daysAbbr": "Gün",
      "hoursAbbr": "Saat"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Zayıf",
      "normalWeight": "Normal kilo",
      "overweight": "Fazla kilolu",
      "obesity": "Obezite",
      "errorHeightMetric": "Boyu 50 cm ile 280 cm arasında girin.",
      "errorWeightMetric": "Kiloyu 15 kg ile 500 kg arasında girin.",
      "errorHeightImperial": "Geçerli bir boy girin — 2 ft ile 9 ft arasında.",
      "errorWeightImperial": "Kiloyu 30 lbs ile 1100 lbs arasında girin.",
      "metricTab": "Metrik (cm / kg)",
      "imperialTab": "İmparatorluk (ft, in / lbs)",
      "heightCmLabel": "Boy (cm)",
      "weightKgLabel": "Kilo (kg)",
      "heightFtLabel": "Boy (ft)",
      "heightInLabel": "Boy (in)",
      "weightLbsLabel": "Kilo (lbs)",
      "bmiLabel": "Vücut Kitle İndeksi (VKİ)",
      "whoCategory": "DSÖ kategorisi",
      "healthyRange": "Sağlıklı VKİ kilo aralığı (18,5–24,9)",
      "disclaimer": "VKİ genel bir tarama oranıdır — kas ağırlığı ile vücut yağını ayırt etmez."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Yaşı 15 ile 100 arasında girin.",
      "errorHeightMetric": "Boyu 100 cm ile 250 cm arasında girin.",
      "errorWeightMetric": "Kiloyu 30 kg ile 350 kg arasında girin.",
      "errorHeightImperial": "Boyu 3 ft 4 in ile 8 ft 2 in arasında girin.",
      "errorWeightImperial": "Kiloyu 66 lbs ile 770 lbs arasında girin.",
      "metricTab": "Metrik (cm / kg)",
      "imperialTab": "İmparatorluk (ft, in / lbs)",
      "maleTab": "Erkek",
      "femaleTab": "Kadın",
      "ageLabel": "Yaş (yıl)",
      "heightCmLabel": "Boy (cm)",
      "weightKgLabel": "Kilo (kg)",
      "heightFtLabel": "Boy (ft)",
      "heightInLabel": "Boy (in)",
      "weightLbsLabel": "Kilo (lbs)",
      "activityLabel": "Aktivite düzeyi",
      "activitySedentary": "Hareketsiz (1,2×)",
      "activitySedentaryDetail": "Masa başı iş, çok az veya hiç egzersiz yok",
      "activityLight": "Az aktif (1,375×)",
      "activityLightDetail": "Hafif egzersiz, haftada 1–3 gün",
      "activityModerate": "Orta düzeyde aktif (1,55×)",
      "activityModerateDetail": "Orta düzeyde egzersiz, haftada 3–5 gün",
      "activityVery": "Çok aktif (1,725×)",
      "activityVeryDetail": "Yoğun egzersiz, haftada 6–7 gün",
      "activityExtra": "Aşırı aktif (1,9×)",
      "activityExtraDetail": "Fiziksel iş veya günde iki antrenman",
      "maintenance": "Koruma kalorisi (TDEE)",
      "mildLoss": "Hafif kilo kaybı (-0,25 kg/hafta)",
      "mildLossNote": "~250 kcal günlük açık",
      "weightLoss": "Kilo kaybı (-0,5 kg/hafta)",
      "weightLossNote": "~500 kcal günlük açık",
      "leanGain": "Yağsız kilo alımı",
      "leanGainNote": "+250 kcal günlük fazla",
      "macroHeading": "Koruma makro dağılımı (referans) (%30 protein · %40 karbonhidrat · %30 yağ)",
      "protein": "Protein",
      "carbs": "Karbonhidrat",
      "fat": "Besin yağı",
      "gramsPerDay": "g/gün",
      "disclaimer": "Mifflin-St Jeor BMR denklemiyle hesaplanmıştır. Herkesin enerji ihtiyacı vücut yapısına ve sağlık durumuna göre değişir; sıkı bir diyete başlamadan önce yetkili bir sağlık uzmanına danışın."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Başlangıç yatırımı negatif olamaz.",
      "errorMonthly": "Aylık katkı negatif olamaz.",
      "errorRate": "Yıllık getiri oranı %0 ile %100 arasında olmalıdır.",
      "errorYears": "Süre 1 ile 100 yıl arasında olmalıdır.",
      "initialLabel": "Başlangıç anapara ($)",
      "monthlyLabel": "Aylık katkı ($)",
      "rateLabel": "Yıllık getiri (%)",
      "yearsLabel": "Yıl",
      "compoundingLabel": "Bileşik faiz",
      "dailyOption": "Günlük (365/yıl)",
      "monthlyOption": "Aylık (12/yıl)",
      "quarterlyOption": "Üç aylık (4/yıl)",
      "annualOption": "Yıllık (1/yıl)",
      "futureBalance": "Gelecekteki bakiye",
      "totalContributed": "Toplam anapara + katkı",
      "totalInterest": "Toplam bileşik faiz",
      "yearHeader": "Yıl",
      "totalContributedHeader": "Toplam katkı",
      "cumulativeInterestHeader": "Birikimli faiz",
      "endingBalanceHeader": "Kapanış bakiyesi",
      "yearPrefix": "Yıl"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Lütfen geçerli başlangıç ve bitiş takvim tarihleri seçin.",
      "errorInvalidBase": "Lütfen geçerli bir başlangıç takvim tarihi girin.",
      "errorNonNegative": "Yıl, ay ve gün için sıfır veya daha büyük tam sayılar girin.",
      "differenceTab": "Tarihler arası fark",
      "addSubtractTab": "Süre ekle / çıkar",
      "startLabel": "Başlangıç tarihi",
      "endLabel": "Bitiş tarihi",
      "swapTitle": "Tarihleri değiştir",
      "swapAria": "Başlangıç ve bitiş tarihlerini değiştir",
      "includeEnd": "Sayıma bitiş tarihini de ekle (+1 takvim günü)",
      "calendarDuration": "Takvim süresi",
      "reversedRange": "(ters aralık)",
      "totalSpan": "Toplam süre:",
      "calendarDays": "Takvim günü",
      "weeksDays": "Hafta ve gün",
      "weekdays": "Hafta içi günleri (Pzt–Cum)",
      "weekendDays": "Hafta sonu günleri (Cmt–Paz)",
      "totalHours": "Toplam saat",
      "yearsWord": "Yıl",
      "monthsWord": "Ay",
      "daysWord": "Gün",
      "weeksAbbr": "Hafta",
      "daysAbbr": "Gün",
      "hoursAbbr": "Saat",
      "referenceLabel": "Referans tarih",
      "operationLabel": "İşlem",
      "addOption": "Ekle (+)",
      "subtractOption": "Çıkar (-)",
      "yearsLabel": "Yıl",
      "monthsLabel": "Ay",
      "daysLabel": "Gün",
      "resultingDate": "Ortaya çıkan takvim tarihi",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Orijinal fiyat negatif olamaz.",
      "errorDiscount": "İndirim %0 ile %100 arasında olmalıdır.",
      "errorTax": "Satış vergisi %0 ile %100 arasında olmalıdır.",
      "errorCost": "Maliyet negatif olamaz.",
      "errorSelling": "Satış fiyatı 0'dan büyük olmalıdır.",
      "discountTab": "Satış indirimi",
      "marginTab": "Kâr marjı ve kâr payı",
      "originalPriceLabel": "Orijinal fiyat ($)",
      "discountLabel": "İndirim (%)",
      "salesTaxLabel": "Satış vergisi (%)",
      "costLabel": "Birim maliyet ($)",
      "sellingLabel": "Satış fiyatı ($)",
      "finalPrice": "Son fiyat",
      "beforeTax": "Vergi öncesi:",
      "youSave": "Kazancınız",
      "taxAdded": "Eklenen vergi",
      "grossProfit": "Brüt kâr",
      "profitMargin": "Kâr marjı",
      "profitDivSelling": "(kâr ÷ satış fiyatı)",
      "markup": "Kâr payı",
      "profitDivCost": "(kâr ÷ maliyet)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "0'dan büyük bir kredi anaparası girin.",
      "errorRate": "Yıllık faiz oranını %0 ile %100 arasında girin.",
      "errorDuration": "Kredi süresi 1 ile 600 ay arasında olmalıdır.",
      "principalLabel": "Kredi anaparası ($)",
      "rateLabel": "Yıllık faiz oranı (% APR)",
      "termLabel": "Kredi süresi",
      "termUnitAria": "Kredi süresi birimi",
      "yearsOption": "Yıl",
      "monthsOption": "Ay",
      "monthlyPayment": "Aylık taksit (EMI)",
      "forPrefix": "için",
      "monthlyPayments": "Aylık taksitler",
      "totalInterest": "Toplam faiz",
      "ofTotalCost": "toplam maliyetin",
      "totalRepayment": "Toplam geri ödeme",
      "principalWord": "Anapara",
      "principalLabelShort": "Anapara",
      "interestLabelShort": "Faiz",
      "showSchedule": "Geri ödeme planını göster",
      "hideSchedule": "Geri ödeme planını gizle",
      "monthHeader": "Ay",
      "paymentHeader": "Taksit",
      "principalHeader": "Anapara",
      "interestHeader": "Faiz",
      "balanceHeader": "Kalan"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Ev fiyatı 0'dan büyük olmalıdır.",
      "errorDownPayment": "Peşinat yüzdesi %0 ile %99,9 arasında olmalıdır.",
      "errorRate": "Faiz oranı %0 ile %50 arasında olmalıdır.",
      "errorTerm": "Kredi süresi 1 ile 50 yıl arasında olmalıdır.",
      "homePriceLabel": "Ev fiyatı ($)",
      "downPaymentLabel": "Peşinat (%)",
      "rateLabel": "Faiz oranı (% APR)",
      "termLabel": "Kredi süresi (yıl)",
      "yearsWord": "Yıl",
      "taxLabel": "Emlak vergisi ($ / yıl)",
      "insuranceLabel": "Ev sigortası ($ / yıl)",
      "hoaLabel": "HOA aidatı ($ / ay)",
      "estimatedMonthly": "Tahmini aylık ödeme",
      "loanAmount": "Kredi tutarı",
      "downPayment": "Peşinat",
      "lifetimeInterest": "Toplam faiz",
      "breakdownHeading": "Aylık ödeme dökümü",
      "principalInterest": "Anapara ve faiz (P&I)",
      "propertyTaxes": "Emlak vergisi",
      "homeownersInsurance": "Ev sahibi sigortası",
      "hoaDues": "HOA aidatı",
      "pmiLabel": "Tahmini PMI (peşinat %20'den azsa yıllık %0,5)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Geçerli sayılar girin.",
      "errorTotalZero": "Toplam (Y) 0 olamaz.",
      "errorStartZero": "Başlangıç değeri 0 olamaz.",
      "heading1": "1. Bir sayının yüzdesi",
      "heading2": "2. Parçanın bütüne oranı",
      "heading3": "3. Yüzde artış veya azalış",
      "whatIs": "nedir",
      "percentOf": "%'i",
      "isWhatPercentOf": "'nin yüzde kaçı",
      "fromWord": "'den",
      "toWord": "'e",
      "result": "Sonuç:",
      "change": "Değişim:",
      "formula": "Formül",
      "difference": "Fark",
      "ariaPctX": "Yüzde X",
      "ariaBaseY": "Taban sayı Y",
      "ariaPartX": "Parça değeri X",
      "ariaWholeY": "Bütün değeri Y",
      "ariaInitialA": "Başlangıç değeri A",
      "ariaFinalB": "Son değer B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Maaş tutarı negatif olamaz.",
      "errorHours": "Haftalık saat 1 ile 168 arasında olmalıdır.",
      "errorWeeks": "Yıllık hafta 1 ile 52 arasında olmalıdır.",
      "errorTax": "Tahmini vergi oranı %0 ile %99 arasında olmalıdır.",
      "amountLabel": "Maaş tutarı ($)",
      "frequencyLabel": "Sıklık",
      "hourlyOption": "Saatlik",
      "dailyOption": "Günlük",
      "weeklyOption": "Haftalık",
      "biweeklyOption": "İki haftada bir",
      "monthlyOption": "Aylık",
      "annualOption": "Yıllık",
      "hoursLabel": "Saat / hafta",
      "weeksLabel": "Hafta / yıl",
      "taxLabel": "Tahmini vergi oranı (%)",
      "rowHourly": "Saatlik",
      "rowDaily": "Günlük (5 günlük hafta)",
      "rowWeekly": "Haftalık",
      "rowBiweekly": "İki haftada bir",
      "rowMonthly": "Aylık",
      "rowAnnual": "Yıllık",
      "payPeriodHeader": "Ödeme dönemi",
      "grossPayHeader": "Brüt ücret",
      "estNetPay": "Tahmini net ücret",
      "taxWord": "Vergi"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Geçerli başlangıç ve bitiş saati girin.",
      "errorBreakRange": "Mola kesintisini 0 ile 1440 dakika arasında girin.",
      "errorEndEarlier": "Bitiş saati başlangıç saatinden önce. Gece yarısını geçiyorsa gece devrini açın.",
      "errorBreakExceeds": "Mola kesintisi toplam geçen süreden fazla.",
      "errorSumFields": "Süre alanlarının tamamında sıfır veya daha büyük sayılar olmalıdır.",
      "betweenTab": "İki saat arası geçen süre",
      "sumTab": "Zaman çizelgesi sürelerini topla",
      "startLabel": "Başlangıç saati",
      "endLabel": "Bitiş saati",
      "breakLabel": "Ücretsiz mola (dakika)",
      "overnightLabel": "Bitiş saati başlangıçtan önceyse onu ertesi gün say (gece vardiyası)",
      "netDuration": "Net süre",
      "overnightTag": "(gece boyunca)",
      "decimalHours": "Ondalık saat",
      "totalMinutes": "Toplam dakika",
      "totalSeconds": "Toplam saniye",
      "hoursAbbr": "Saat",
      "minutesAbbr": "Dakika",
      "secondsAbbr": "Saniye",
      "labelHeader": "Etiket",
      "hoursHeader": "Saat",
      "minutesHeader": "Dakika",
      "secondsHeader": "Saniye",
      "removeButton": "Kaldır",
      "removeAria": "Kaldır",
      "addRowButton": "Süre satırı ekle",
      "morningSession": "Sabah oturumu",
      "afternoonSession": "Öğleden sonra oturumu",
      "segmentPrefix": "Bölüm",
      "combinedTime": "Birleşik süre (SS:DD:SS)",
      "dayEquivalent": "24 saatlik gün",
      "daysAbbr": "Gün"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Hesap tutarı negatif olamaz.",
      "errorTip": "Bahşiş yüzdesi %0 ile %200 arasında olmalıdır.",
      "errorPeople": "Kişi sayısı 1 ile 100 arasında olmalıdır.",
      "billLabel": "Hesap toplamı ($)",
      "tipLabel": "Bahşiş yüzdesi (%)",
      "peopleLabel": "Paylaştır (kişi)",
      "presetsLabel": "Bahşiş hazır ayarları:",
      "roundingLabel": "Yuvarlama:",
      "exactOption": "Tam kuruş",
      "totalUpOption": "Toplamı yukarı yuvarla ($)",
      "perPersonUpOption": "Kişi başına yukarı yuvarla ($)",
      "perPersonTotal": "Kişi başına toplam",
      "includes": "içerir",
      "tipEach": "Kişi başına bahşiş",
      "totalTip": "Toplam bahşiş",
      "effectiveRate": "Etkin oran:",
      "totalBill": "Toplam hesap"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Dönüştürmek için geçerli bir sayı girin.",
      "errorAbsoluteZero": "Sıcaklık mutlak sıfırın altına inemez (-273,15 °C / 0 K).",
      "categoryNames": {
        "length": "Uzunluk",
        "weight": "Ağırlık ve kütle",
        "temperature": "Sıcaklık",
        "area": "Alan",
        "volume": "Hacim",
        "speed": "Hız",
        "storage": "Dijital depolama"
      },
      "unitLabels": {
        "mm": "Milimetre",
        "cm": "Santimetre",
        "m": "Metre",
        "km": "Kilometre",
        "in": "İnç",
        "ft": "Fit",
        "yd": "Yarda",
        "mi": "Mil",
        "mg": "Miligram",
        "g": "Gram",
        "kg": "Kilogram",
        "t": "Metrik ton",
        "oz": "Ons",
        "lb": "Pound",
        "st": "Stone",
        "C": "Santigrat",
        "F": "Fahrenhayt",
        "K": "Kelvin",
        "cm2": "Santimetrekare",
        "m2": "Metrekare",
        "ha": "Hektar",
        "km2": "Kilometrekare",
        "ft2": "Fitkare",
        "yd2": "Yardakare",
        "acre": "Akre",
        "mi2": "Milkare",
        "mL": "Mililitre",
        "L": "Litre",
        "m3": "Metreküp",
        "floz": "Sıvı ons (ABD)",
        "cup": "Su bardağı (ABD)",
        "pt": "Pint (ABD)",
        "qt": "Kuart (ABD)",
        "gal": "Galon (ABD)",
        "ms": "Metre / saniye",
        "kmh": "Kilometre / saat",
        "mph": "Mil / saat",
        "knot": "Knot",
        "fts": "Fit / saniye",
        "B": "Bayt",
        "KB": "Kilobayt (10³)",
        "MB": "Megabayt (10⁶)",
        "GB": "Gigabayt (10⁹)",
        "TB": "Terabayt (10¹²)",
        "KiB": "Kibibayt (2¹⁰)",
        "MiB": "Mebibayt (2²⁰)",
        "GiB": "Gibibayt (2³⁰)"
      },
      "valueLabel": "Değer",
      "fromLabel": "Hangi birimden",
      "toLabel": "Hangi birime",
      "swapAria": "Birimleri değiştir",
      "swapTitle": "Birimleri değiştir",
      "toWord": "olarak",
      "copyResult": "Sonucu kopyala",
      "unitHeader": "Birim",
      "symbolHeader": "Sembol",
      "equivalentHeader": "Eşdeğer değer"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Tutar negatif olamaz.",
      "errorRate": "Vergi oranı %0 ile %100 arasında olmalıdır.",
      "addTab": "Vergi ekle (net → brüt)",
      "removeTab": "Vergi çıkar (brüt → net)",
      "commonRates": "Yaygın oranlar:",
      "netAmountLabel": "Net tutar (vergi hariç) ($)",
      "grossAmountLabel": "Brüt tutar (vergi dahil) ($)",
      "rateLabel": "KDV / satış vergisi oranı (%)",
      "netPrice": "Net fiyat (vergi hariç)",
      "taxAmount": "Vergi tutarı",
      "grossPrice": "Brüt fiyat (vergi dahil)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64 ile kodla",
      "decodeTab": "Base64 çöz",
      "urlSafe": "URL güvenli (- ve _)",
      "omitPadding": "Sondaki = dolgusunu kaldır",
      "swap": "Değiştir",
      "decodeError": "Kod çözme hatası:",
      "inputLabelEncode": "Düz metin (UTF-8)",
      "inputLabelDecode": "Base64 dizesi",
      "inputPlaceholderEncode": "Kodlanacak metni veya JSON'u yazın...",
      "inputPlaceholderDecode": "Standart veya URL güvenli Base64 dizesi yapıştırın...",
      "outputLabelEncode": "Base64 çıktısı",
      "outputLabelDecode": "Çözülmüş metin",
      "outputPlaceholder": "Dönüştürülmüş çıktı burada görünecek...",
      "copyOutput": "Çıktıyı kopyala",
      "invalidLength": "Base64 dizesinin uzunluğu geçersiz.",
      "invalidInput": "Geçersiz Base64 girdisi veya hatalı UTF-8 bayt dizisi."
    },
    "tables": {
      "samplePlain": "UtilityFlow: UTF-8 güvenli Base64 kodlama ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Renk seç",
      "colorPickerAria": "Renk seçici",
      "copyHex": "HEX kopyala",
      "copyRgb": "RGB kopyala",
      "copyHsl": "HSL kopyala",
      "contrastTitle": "WCAG 2.1 kontrast oranı denetimi",
      "contrastDesc": "Ön planı ({color}) herhangi bir arka plan renginde görün.",
      "backgroundLabel": "Arka plan:",
      "bgAria": "Kontrast için arka plan rengi",
      "sampleTitle": "Gövde ve arayüz metni örneği",
      "sampleSentence": "Çevik kahverengi tilki, tembel köpeğin üzerinden atladı.",
      "aaNormal": "AA normal metin (≥ 4,5:1)",
      "aaaNormal": "AAA normal metin (≥ 7,0:1)",
      "aaLarge": "AA büyük metin (≥ 3,0:1)",
      "pass": "Geçti",
      "fail": "Kaldı"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5 alanlı Cron ifadesi",
      "copyCron": "Cron'u kopyala",
      "humanTitle": "Sade dille zamanlama",
      "breakdownTitle": "Alan dökümü",
      "fieldMinute": "Dakika (0–59)",
      "fieldHour": "Saat (0–23)",
      "fieldDom": "Ayın günü (1–31)",
      "fieldMonth": "Ay (1–12)",
      "fieldDow": "Haftanın günü (0–6)",
      "nextRuns": "Sonraki {count} planlı çalıştırma (yerel saat)",
      "noRuns": "Sonraki 366 günde eşleşen çalıştırma bulunamadı.",
      "fieldsError": "Standart cron 5 alan ister (dakika saat ayın-günü ay haftanın-günü). Bulunan: {count}.",
      "emptySegment": "\"{token}\" içinde boş bölüm",
      "invalidStep": "\"{token}\" içinde geçersiz adım \"{step}\"",
      "outOfRange": "\"{token}\" içinde değer aralık dışında ({min}–{max})",
      "invalidCron": "Geçersiz cron ifadesi.",
      "everyMinutes": "Her {n} dakikada",
      "minuteZeroHour": "Her saatin 0. dakikasında",
      "atTime": "{time} saatinde",
      "atFields": "{a}, {b} saatinde",
      "dayEveryDay": "Her gün",
      "dayWeekdays": "Hafta içi günlerde (Pazartesi–Cuma)",
      "dayOfMonth": "Ayın {day}. günü",
      "dayDow": "{dow} günü",
      "dayBoth": "{day}. gün veya {dow} günü",
      "monthIn": " {months} ayında"
    },
    "tables": {
      "presets": [
        {
          "label": "Her 5 dakikada",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Her saat",
          "expr": "0 * * * *"
        },
        {
          "label": "Her gün gece yarısı",
          "expr": "0 0 * * *"
        },
        {
          "label": "Hafta içi 09:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Ayın 1'inde 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
      ],
      "monthLabels": [
        "",
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ],
      "unitWords": {
        "minute": "Dakika",
        "hour": "Saat",
        "day": "Gün",
        "month": "Ay",
        "weekday": "Haftanın günü"
      },
      "unitPlurals": {
        "minute": "Dakika",
        "hour": "Saat",
        "day": "Gün",
        "month": "Ay",
        "weekday": "Haftanın günleri"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS küçült",
      "beautifyTab": "CSS güzelleştir",
      "inputLabel": "Girdi CSS",
      "bytesLabel": "Bayt",
      "inputPlaceholder": "CSS kurallarını veya stil sayfasını buraya yapıştırın...",
      "outputLabelMinify": "Küçültülmüş CSS",
      "outputLabelBeautify": "Güzelleştirilmiş CSS",
      "outputPlaceholder": "İşlenmiş CSS burada görünecek...",
      "copyCss": "CSS kopyala"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Metin girdisi",
      "fileTab": "Yerel dosya sağlama toplamı",
      "uppercaseHex": "Büyük harf hex",
      "inputLabel": "Girdi dizesi (UTF-8)",
      "inputPlaceholder": "SHA-1, SHA-256, SHA-384 ve SHA-512 özetlerini çıkarmak için metin yazın...",
      "chooseFileLabel": "Özetlenecek yerel dosyayı seçin",
      "fileNoteDefault": "Dosya yalnızca tarayıcı belleğinde okunur, asla yüklenmez.",
      "bytesLabel": "Bayt",
      "cryptoUnavailable": "Web Crypto özetleme kullanılamıyor.",
      "sampleText": "Merhaba, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Varlıkları kodla",
      "decodeTab": "Varlıkları çöz",
      "encodeNonAscii": "ASCII olmayan karakterleri kodla (&#...;)",
      "swap": "Değiştir",
      "inputLabelEncode": "Ham HTML / Metin",
      "inputLabelDecode": "HTML kodlanmış dize",
      "inputPlaceholderEncode": "<p>HTML etiketi veya özel karakter yazın...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Kodlanmış varlık yapıştırın...&lt;/p&gt;",
      "outputLabelEncode": "Kodlanmış varlık",
      "outputLabelDecode": "Çözülmüş metin",
      "outputPlaceholder": "Dönüştürülmüş varlıklar burada görünecek..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS küçült",
      "beautifyTab": "JS güzelleştir",
      "indentLabel": "Girinti:",
      "indent2": "2 boşluk",
      "indent4": "4 boşluk",
      "inputLabel": "JavaScript / TypeScript girdisi",
      "bytesLabel": "Bayt",
      "inputPlaceholder": "JavaScript veya TypeScript parçacığı yapıştırın...",
      "outputLabelMinify": "Küçültülmüş çıktı",
      "outputLabelBeautify": "Güzelleştirilmiş çıktı",
      "outputPlaceholder": "Biçimlendirilmiş JavaScript burada görünecek...",
      "copyCode": "Kodu kopyala"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Ayırıcı:",
      "commaOpt": "Virgül (,)",
      "semicolonOpt": "Noktalı virgül (;)",
      "tabOpt": "Sekme (TSV)",
      "conversionError": "Dönüştürme hatası:",
      "inputLabelJson": "JSON girdisi",
      "inputLabelCsv": "CSV girdisi",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "CSV çıktısı",
      "outputLabelJson": "JSON çıktısı",
      "outputPlaceholder": "Dönüştürülmüş veri burada görünecek...",
      "parseFallback": "Girdi biçimi ayrıştırılamadı."
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Base64Url başlığını ve yükünü yalnızca tarayıcı belleğinde çözer. Kriptografik imzayı doğrulamaz.",
      "loadSampleJwt": "Örnek JWT yükle",
      "inputLabel": "Kodlanmış JWT belirteci",
      "inputPlaceholder": "Başlık ve talepleri görmek için JWT belirteci yapıştırın (eyJhbGciOi...)...",
      "invalidJwt": "Geçersiz JWT:",
      "headerLabel": "Başlık (algoritma ve tür)",
      "payloadLabel": "Yük (talepler)",
      "copyHeader": "Başlığı kopyala",
      "copyPayload": "Yükü kopyala",
      "timestampTitle": "Zaman damgası talepleri",
      "iatLabel": "Veriliş (iat)",
      "nbfLabel": "Öncesinde değil (nbf)",
      "expLabel": "Sona erme (exp)",
      "expired": "Süresi doldu",
      "active": "Etkin (henüz süresi dolmadı)",
      "signatureLabel": "İmza bölümü (Base64Url)",
      "invalidB64Url": "Base64Url bölümünün uzunluğu geçersiz.",
      "segmentCount": "3 nokta ile ayrılmış JWT bölümü gerekir (header.payload.signature), bulunan: {count}.",
      "parseFallback": "JWT Base64Url JSON bölümleri ayrıştırılamadı."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Normal ifade deseni",
      "patternPlaceholder": "Regex deseni yazın...",
      "flagsLabel": "Bayraklar:",
      "syntaxError": "Sözdizimi hatası:",
      "testStringLabel": "Test dizesi",
      "testPlaceholder": "Deseninizi test etmek için örnek metin yapıştırın...",
      "highlightedMatches": "Vurgulanan eşleşmeler",
      "matchSingular": "Eşleşme",
      "matchPlural": "Eşleşme",
      "highlightEmpty": "Eşleşmeler burada gerçek zamanlı olarak vurgulanacak...",
      "capturedTitle": "Yakalanan eşleşmeler",
      "matchLabel": "Eşleşme",
      "indexLabel": "Dizin",
      "groupsLabel": "Gruplar:",
      "noMatches": "Eşleşme bulunamadı.",
      "replaceLabel": "Değiştirme şablonu önizlemesi",
      "replacePlaceholder": "ör. $1 [at] $2",
      "invalidRegex": "Geçersiz normal ifade."
    },
    "tables": {
      "sampleText": "Ana iletişim: support@utilityflow.online\nFaturalandırma ekibi: billing@example.org\nGeçersiz e-posta: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (genel)"
        },
        {
          "flag": "i",
          "label": "i (büyük/küçük harfi yoksay)"
        },
        {
          "flag": "m",
          "label": "m (çok satırlı)"
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
      "beautify": "Güzelleştir",
      "minify": "Küçült",
      "uppercaseKw": "Büyük harf anahtar kelimeler",
      "lowercaseKw": "Küçük harf",
      "indentLabel": "Girinti:",
      "indent2": "2 boşluk",
      "indent4": "4 boşluk",
      "inputLabel": "Ham SQL sorgusu",
      "inputPlaceholder": "SQL sorgusu yapıştırın (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "Biçimlendirilmiş SQL",
      "outputPlaceholder": "Biçimlendirilmiş SQL burada görünecek...",
      "copySql": "SQL kopyala"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Geçerli Unix zaman damgası (saniye)",
      "useCurrent": "Geçerli saati kullan",
      "copyEpoch": "Epoch kopyala",
      "converter1Label": "Unix zaman damgası → insan tarihi",
      "epochPlaceholder": "ör. 1794544800",
      "unitAuto": "Otomatik",
      "unitSeconds": "Saniye",
      "unitMilliseconds": "Milisaniye",
      "errorNotNumeric": "Geçerli sayısal bir Unix zaman damgası girin.",
      "errorOutOfRange": "Zaman damgası geçerli JavaScript Date aralığının dışında.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Yerel saat dilimi",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Göreli",
      "converter2Label": "Yerel tarih ve saat → Unix zaman damgası",
      "secondsLabel": "Saniye",
      "millisecondsLabel": "Milisaniye",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Kodla",
      "decode": "Çöz",
      "encodeUriPreserve": "encodeURI (://?& koru)",
      "swap": "Değiştir",
      "urlError": "URL hatası:",
      "inputLabel": "Girdi dizesi veya URL",
      "inputPlaceholder": "URL, sorgu dizesi veya parametre değeri yapıştırın...",
      "outputLabelEncode": "Kodlanmış çıktı",
      "outputLabelDecode": "Çözülmüş çıktı",
      "outputPlaceholder": "Kodlanmış veya çözülmüş URL burada görünecek...",
      "parsedTitle": "URL'nin ayrıştırılmış dökümü",
      "protocol": "Protokol",
      "host": "Ana bilgisayar",
      "pathname": "Yol adı",
      "hash": "Hash",
      "noneValue": "(yok)",
      "queryParam": "Sorgu parametresi",
      "decodedValue": "Çözülmüş değer",
      "malformed": "Hatalı yüzde kodlama dizisi."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID sürümü",
      "v4": "v4 (rastgele)",
      "v7": "v7 (zamana göre sıralı)",
      "quantity": "Miktar (1–100)",
      "generate": "UUID oluştur",
      "uppercase": "Büyük harf",
      "includeHyphens": "Tireleri dahil et",
      "wrapBraces": "{süslü parantez} ile sar",
      "generatedLabel": "Oluşturulan UUID'ler",
      "copyAll": "Tümünü kopyala"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Beyaz üzerine indigo",
      "presetSlate": "Arduvaz mürekkep",
      "presetEmerald": "Zümrüt rozet",
      "presetDark": "Koyu mod",
      "swapColors": "Renkleri değiştir",
      "fgTitle": "Ön plan / metin rengi",
      "bgTitle": "Arka plan rengi",
      "copyHex": "HEX kopyala",
      "pickerSuffix": "seçici",
      "hexInputSuffix": "HEX girdisi",
      "contrastRatioLabel": "WCAG 2.1 kontrast oranı",
      "checkAaNormal": "WCAG AA normal metin",
      "checkAaLarge": "WCAG AA büyük metin / arayüz",
      "checkAaaNormal": "WCAG AAA normal metin",
      "checkAaaLarge": "WCAG AAA büyük metin",
      "pass": "Geçti",
      "fail": "Kaldı",
      "livePreviewLabel": "Canlı erişilebilirlik önizlemesi",
      "previewHeading": "Net tipografi her ekran boyutunda kolayca okunur.",
      "previewBody": "Normal gövde metni (14–16 px) için WCAG AA düzeyinde en az 4,5:1 ve AAA düzeyinde 7,0:1 kontrast oranı gerekir. Büyük başlıklar (18 pt+ veya kalın 14 pt+) için en az 3,0:1 gerekir.",
      "outlinedControl": "Çerçeveli arayüz denetimi",
      "hexOnHex": "{fg} üzerinde {bg}",
      "extractTitle": "Görüntüden renk paleti çıkar",
      "extractBody": "Ekran görüntüsü, logo veya fotoğraf yükleyin — ana HEX örnekleri doğrudan kontrast denetiminize gelsin.",
      "appliesToLabel": "Örneğe tıklayınca uygulanacak:",
      "foregroundBtn": "Ön plan",
      "backgroundBtn": "Arka plan",
      "selectImage": "Örnek çıkarmak için görüntü seçin",
      "loadedReplace": "Yüklendi: {name} (başka yükleyin)",
      "selectImageError": "Lütfen PNG, JPG, WebP veya GIF görüntü seçin.",
      "unableToRead": "\"{name}\" okunamadı.",
      "canvasUnavailable": "Canvas 2D bağlamı kullanılamıyor.",
      "transparentImage": "Görüntü tamamen saydam görünüyor.",
      "unableToExtract": "Palet çıkarılamadı.",
      "areaPercent": "~%{n} alan"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 tarayıcı sekmesi",
        "taskbar": "32×32 görev çubuğu / HiDPI",
        "desktopShortcut": "48×48 masaüstü kısayolu",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA açılış ekranı"
      },
      "monogramMode": "Monogram rozet oluşturucu",
      "imageMode": "Logo görüntüsü yükle",
      "lettersLabel": "Metin / baş harfler (1–3 harf)",
      "cornerShapeLabel": "Köşe şekli",
      "roundedSquare": "Yuvarlak köşeli kare",
      "circle": "Daire",
      "sharpSquare": "Keskin kare",
      "square": "Kare",
      "bgColorLabel": "Arka plan rengi",
      "textColorLabel": "Metin rengi",
      "chooseLogo": "PNG, JPG, WebP veya SVG logo seçin",
      "loadedReplace": "Yüklendi: {name} (değiştirmek için tıklayın)",
      "cropMaskLabel": "Kırpma maskesi",
      "unableToRead": "\"{name}\" okunamadı.",
      "canvasUnavailable": "Canvas 2D bağlamı kullanılamıyor.",
      "failedEncode": "Favicon PNG kodlanamadı.",
      "unableToGenerate": "Favicon oluşturulamadı.",
      "icoBundleTitle": "Çok boyutlu favicon.ico paketi (16px + 32px + 48px)",
      "icoBundleBody": "Web sitenizin kök /public/ klasörü için hazır, standartlara uygun ikili .ico dosyası",
      "downloadIco": "favicon.ico indir",
      "faviconPreviewAlt": "Favicon 32x32 önizlemesi",
      "iconAlt": "{size}x{size} simge",
      "htmlTagsLabel": "HTML <head> bağlantı etiketleri",
      "copyHtml": "HTML kopyala"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Kriptografik sağlama toplamı çıkarmak için herhangi bir dosya seçin",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Web Crypto API ile yerel özet · Hiçbir dosya yüklenmez (500 MB altı önerilir)",
      "cryptoUnavailable": "Bu tarayıcıda Web Crypto SubtleCrypto API kullanılamıyor.",
      "hashFailed": "Dosya tarayıcı belleğinde özetlenemedi (birkaç yüz MB üzeri dosyalar RAM sınırını aşabilir).",
      "computing": "SHA-1, SHA-256, SHA-384 ve SHA-512 sağlama toplamları yerel olarak çıkarılıyor...",
      "fileLabel": "Dosya:",
      "sizeLabel": "Boyut:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Değiştirilme:",
      "bytesSuffix": "{n} bayt",
      "downloadSha256": ".sha256 indir",
      "sha256Label": "SHA-256 (önerilen)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (yalnızca eski uyumluluk için)",
      "verifyLabel": "Beklenen sağlama toplamıyla doğrula",
      "expectedPlaceholder": "Yayınlanmış SHA-256, SHA-512, SHA-384 veya SHA-1 sağlama toplamını (veya .sha256sum satırını) yapıştırın...",
      "verified": "Sağlama toplamı doğrulandı! Dosya, beklenen {algorithm} özeti ile tam olarak eşleşiyor.",
      "mismatch": "Sağlama toplamı eşleşmiyor! Çıkarılan özetlerden hiçbiri beklenen değerle eşleşmiyor."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Sıkıştırmak için görüntü seçin (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "HTML5 Canvas ile yerel işleme · Asla uzak sunucuya yüklenmez",
      "uploadImageError": "Lütfen PNG, JPG, WebP veya GIF görüntü dosyası yükleyin.",
      "fileTooLarge": "Dosya çok büyük — dosya başına sınır 20 MB. Lütfen daha küçük bir görüntü seçin.",
      "unableToDecode": "\"{name}\" çözülemedi.",
      "canvasUnavailable": "Canvas 2D bağlamı kullanılamıyor.",
      "compressionFailed": "Tarayıcı canvas'ında sıkıştırma başarısız oldu.",
      "unableToCompress": "Görüntü sıkıştırılamadı.",
      "unableToRead": "\"{name}\" okunamadı.",
      "invalidImage": "Geçersiz görüntü dosyası.",
      "outputFormatLabel": "Çıktı biçimi",
      "webpOption": "WebP (web için en küçük modern boyut)",
      "jpgOption": "JPG (en geniş uyumluluk)",
      "pngOption": "PNG (kayıpsız saydamlık)",
      "maxWidthLabel": "Azami genişlik sınırı",
      "keepOriginalWidth": "Orijinal genişliği koru",
      "max1920": "Azami 1920 px (Full HD)",
      "max1280": "Azami 1280 px (blog / hero)",
      "max800": "Azami 800 px (küçük resim)",
      "qualityLabel": "Kalite: ",
      "losslessPng": "Kayıpsız PNG",
      "originalLabel": "Orijinal",
      "compressedLabel": "Sıkıştırılmış",
      "changeLabel": "Değişim",
      "outputSummary": "Çıktı: {w} × {h} px · {ext}",
      "compressing": "Sıkıştırılıyor...",
      "downloadExt": ".{ext} indir",
      "previewAlt": "Sıkıştırılmış görüntü önizlemesi"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Dönüştürmek için bir veya birden fazla görüntü seçin",
      "imagesLoaded": "{n} görüntü yüklendi — eklemek veya değiştirmek için tıklayın",
      "batchNote": "PNG, JPG, WebP, SVG veya GIF'i yerel olarak toplu hâlde PNG, JPG veya WebP'ye dönüştürün",
      "convertToLabel": "Dönüştürülecek biçim",
      "pngOption": "PNG (.png — saydamlık korunur)",
      "qualityLabel": "Kayıplı kalite: ",
      "lossless": "Kayıpsız",
      "alphaFillLabel": "Alfa dolgu",
      "converting": "Dönüştürülüyor...",
      "reconvert": "Yeniden dönüştür",
      "selectFilesError": "Bir veya daha fazla görüntü dosyası seçin (PNG, JPG, WebP, SVG, GIF).",
      "filesTooLarge": "{names} atlandı — 25 MB dosya başına sınırını aşan dosyalar dönüştürülmez.",
      "couldNotDecode": "\"{name}\" çözülemedi.",
      "canvasUnavailable": "Canvas 2D kullanılamıyor.",
      "conversionFailed": "\"{name}\" dönüştürme başarısız oldu.",
      "batchFailed": "Toplu görüntü dönüştürme başarısız oldu.",
      "downloadExt": ".{ext} indir"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Önceden tanımlı boyuta getirmek veya kırpmak için görüntü seçin",
      "fileWithDims": "{name} (orijinal: {w} × {h} px)",
      "supportsNote": "Piksel yeniden boyutlandırma, en boy kilidi ve ortadan kırpma içeren sosyal hazır ayarlar desteklenir",
      "selectImageError": "PNG, JPG, WebP veya GIF görüntü seçin.",
      "unableToDecode": "\"{name}\" çözülemedi.",
      "unableToRead": "Görüntü okunamadı.",
      "failedLoading": "Yeniden boyutlandırmak için görüntü yüklenemedi.",
      "canvasUnavailable": "Canvas 2D kullanılamıyor.",
      "failedGenerating": "Yeniden boyutlandırılmış görüntü oluşturulamadı.",
      "resizeFailed": "Yeniden boyutlandırma başarısız oldu.",
      "quickPresets": "Hızlı hazır ayarlar:",
      "presetOg": "OG paylaşım (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Kare (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Genişlik (px)",
      "heightLabel": "Yükseklik (px)",
      "fitModeLabel": "En boy uydurma modu",
      "coverCropOption": "Ortadan kaplama kırpma (esnetmeden)",
      "exactOption": "Tam boyutlara ölçekle",
      "outputFormatLabel": "Çıktı biçimi",
      "lockAspect": "Boyutları yazarken orijinal en boy oranını kilitle",
      "resizeButton": "{w} × {h} px olarak yeniden boyutlandır",
      "readySummary": "Hazır: {w} × {h} px ({ext})",
      "downloadResized": "Yeniden boyutlandırılmış .{ext} indir",
      "previewAlt": "Yeniden boyutlandırılmış görüntü çıktısı"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Döndürmek, çevirmek veya filtre uygulamak için görüntü seçin",
      "loadedReplace": "{name} (değiştirmek için tıklayın)",
      "previewNote": "Gerçek zamanlı HTML5 Canvas önizlemesi ve piksel dışa aktarımı",
      "selectImageError": "Lütfen PNG, JPG, WebP veya GIF görüntü seçin.",
      "failedLoading": "\"{name}\" yüklenemedi.",
      "rotateLeft": "90° sola döndür",
      "rotateRight": "90° sağa döndür",
      "flipHorizontal": "Yatay çevir",
      "flipVertical": "Dikey çevir",
      "brightnessLabel": "Parlaklık: ",
      "contrastLabel": "Kontrast: ",
      "grayscaleLabel": "Siyah beyaz (gri tonlama)",
      "resetAll": "Tümünü sıfırla",
      "exportFormatLabel": "Dışa aktarma biçimi",
      "livePreview": "Canlı Canvas önizlemesi"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Görüntü → Base64 Data URI",
      "decodeMode": "Base64 → Görüntü önizlemesi",
      "selectImageError": "Görüntü dosyası seçin (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "\"{name}\" okunamadı.",
      "chooseImage": "Kodlanacak görüntü dosyasını seçin",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Data URI, ham Base64, HTML <img> ve CSS arka plan parçacıkları oluşturur",
      "binarySizeLabel": "İkili dosya boyutu",
      "base64SizeLabel": "Base64 URI boyutu (~%33 daha büyük)",
      "fullDataUriLabel": "Tam Data URI",
      "copyDataUri": "Data URI kopyala",
      "copyRawBase64": "Ham Base64 kopyala",
      "copyImg": "<img> kopyala",
      "copyCss": "CSS kopyala",
      "encodedAria": "Kodlanmış Base64 Data URI",
      "encodedAlt": "Kodlanmış önizleme",
      "pasteLabel": "Base64 görüntü dizesi veya Data URI yapıştırın",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... veya ham base64 dizesi",
      "invalidPayload": "Yapıştırılan Base64 metni geçerli bir kodlanmış görüntü yükü değil.",
      "decodedAlt": "Çözülmüş Base64 önizlemesi",
      "downloadExt": ".{ext} indir"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Çok güçlü",
        "strong": "Güçlü",
        "moderate": "Orta",
        "weak": "Zayıf"
      },
      "randomPasswordMode": "Rastgele şifre",
      "passphraseMode": "Diceware parola cümlesi",
      "regenerate": "Yeniden oluştur",
      "passwordLengthLabel": "Şifre uzunluğu: ",
      "charsSuffix": " karakter",
      "batchCountLabel": "Toplu sayı: ",
      "uppercaseLabel": "Büyük harf (A–Z)",
      "lowercaseLabel": "Küçük harf (a–z)",
      "numbersLabel": "Sayılar (0–9)",
      "symbolsLabel": "Semboller (!@#$%...)",
      "excludeAmbiguousLabel": "Karışıklığa yol açanları hariç tut (0, O, 1, l, I)",
      "wordCountLabel": "Kelime sayısı: ",
      "wordSeparatorLabel": "Kelime ayırıcı",
      "hyphenOption": "Tire (-)",
      "underscoreOption": "Alt çizgi (_)",
      "periodOption": "Nokta (.)",
      "spaceOption": "Boşluk ( )",
      "capitalizeWordsLabel": "Kelime baş harflerini büyüt",
      "appendDigitLabel": "2 basamaklı sayı ekle",
      "selectGroupWarning": "Şifre oluşturmak için en az bir karakter grubu seçin.",
      "entropyBits": "~{n} bit entropi",
      "poolSizeSuffix": " · havuz boyutu {n}",
      "wordListSuffix": " · {n} kelimelik liste",
      "copyAll": "Tümünü kopyala"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "Web sitesi URL'si",
        "text": "Metin",
        "wifi": "Wi-Fi yapılandırması",
        "vcard": "vCard kişi",
        "email": "E-posta adresi",
        "phone": "Telefon numarası",
        "plainText": "Düz metin"
      },
      "liveCameraCapture": "Canlı kamera yakalama",
      "scanMode": "QR görüntüsü tara / çöz",
      "vcardMode": "vCard kişi QR oluşturucu",
      "uploadQr": "QR kod görüntüsü yükle",
      "uploadQrNote": "PNG, JPG, WebP veya SVG ekran görüntüsü · %100 istemci tarafı",
      "liveCameraTitle": "Canlı cihaz kamerası taraması",
      "liveCameraNote": "Yalnızca izin verildiğinde yerel kamera akışını kullanır",
      "startCamera": "Kamera tarayıcısını başlat",
      "stopCamera": "Kamerayı durdur",
      "cameraHint": "Kamerayı QR koda doğrultun — kod çözülür çözülmez yakalama otomatik olarak durur.",
      "uploadImageError": "Lütfen QR kod içeren PNG, JPG, WebP veya SVG görüntü yükleyin.",
      "unableToLoad": "\"{name}\" yüklenemedi.",
      "noQrDetected": "Bu görüntüde QR kod bulunamadı. Odağı net tutun, sessiz bölge (quiet-zone) kenar boşluğunu temiz tutun ve kontrastı yüksek tutun.",
      "unableToScan": "Görüntü taranamadı.",
      "cameraUnsupported": "Bu tarayıcıda kamera taraması desteklenmiyor.",
      "cameraDenied": "Kamera izni verilmedi veya kullanılabilir kamera cihazı yok. Bunun yerine QR kod görüntüsü yükleyin.",
      "decodedPayload": "Çözülmüş yük · {kind}",
      "sourceLabel": "Kaynak: ",
      "copyPayload": "Yükü kopyala",
      "decodedAria": "Çözülmüş QR metni",
      "detectedLink": "Bulunan web bağlantısı: ",
      "uploadedPreviewAlt": "Yüklenen QR kodunun önizlemesi",
      "firstNameLabel": "Ad",
      "lastNameLabel": "Soyad",
      "orgLabel": "Kuruluş",
      "jobTitleLabel": "Ünvan",
      "defaultJobTitle": "Ürün tasarımcısı",
      "phoneLabel": "Telefon numarası",
      "emailLabel": "E-posta adresi",
      "websiteLabel": "Web sitesi URL'si",
      "rawVcardLabel": "Ham vCard 3.0 yükü",
      "copyVcard": "vCard kopyala",
      "vcardQrAlt": "Oluşturulan vCard QR kodu",
      "downloadPng": "PNG indir",
      "downloadSvg": "SVG indir"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical ve Hreflang etiketleri",
      "redirectsMode": "301 yönlendirme kuralı oluşturucu",
      "canonicalLabel": "Kendine referanslı Canonical URL",
      "alternatesLabel": "Dil ve bölge alternatifleri",
      "addLocale": "Yerel ayar ekle",
      "langCodeAria": "Dil kodu",
      "alternateUrlAria": "Alternatif URL",
      "removeLocaleAria": "Yerel ayar satırını kaldır",
      "htmlTagsLabel": "HTML <head> bağlantı etiketleri",
      "copyHtml": "HTML kopyala",
      "xmlSnippetLabel": "XML site haritası <xhtml:link> parçacığı",
      "copyXml": "XML kopyala",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (server block)",
      "copyRules": "{n} kuralı kopyala",
      "pairsLabel": "Kaynak → hedef çiftleri (virgül, sekme veya “ -> ” ile ayırın)",
      "generatedConfigLabel": "Oluşturulan 301 yönlendirme yapılandırması",
      "skippedInvalid": "{n} satır atlandı — hedef bulunamadı.",
      "invalidHreflangWarning": "Geçersiz hreflang kodları atlandı: {codes} — 2 harfli dil kodu kullanın (ör. en, es), dilerseniz bölge ekleyin (ör. en-US) veya x-default."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "Teknik SEO, temiz ve taranabilir URL'ler, doğru canonical etiketleri ve yapılandırılmış bir XML site haritasıyla başlar. Yayıncılar anahtar kelime doldurmak yerine kullanıcı niyetine odaklanan yararlı içerik yazdığında, arama motorları konunun derinliğini kendiliğinden anlar. Başlıklarınızı, meta açıklamalarınızı ve iç bağlantılarınızı düzenli olarak kontrol edin.",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "Editoryal rehberlik:",
      "guidanceBody": "Modern arama motorları, belirli bir anahtar kelime yoğunluğu kotasını doldurduğunuz için ödül vermez. Bu dağılım denetimiyle kazara tekrarları yakalayın veya ana kavramların metninizde net göründüğünü doğrulayın.",
      "targetLabel": "Hedef anahtar kelime / ifade (isteğe bağlı)",
      "targetPlaceholder": "ör. technical seo",
      "phraseLengthLabel": "İfade uzunluğu",
      "oneWord": "1 kelime",
      "twoWord": "2 kelimelik ifadeler",
      "threeWord": "3 kelimelik ifadeler",
      "stripHtml": "HTML etiketlerini kaldır",
      "ignoreStopWords": "Durak kelimeleri yoksay",
      "textLabel": "Makale taslağı veya yapıştırılmış HTML kopyası",
      "totalWords": "Toplam kelime",
      "uniqueVocabulary": "Benzersiz kelime dağarcığı",
      "readingTime": "Tahmini okuma süresi",
      "targetPrefix": "Hedef: ",
      "hits": "{n} kez (%{d})",
      "rankHeader": "Sıra",
      "termHeader": "Kelime / N-gram",
      "occurrencesHeader": "Kez",
      "shareHeader": "Pay (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Hızlı tarayıcı tabanlı çevrimiçi yardımcı araçlar",
      "defaultDescription": "Metin düzenleme, geliştirici kodlama, finans hesaplayıcıları, PDF iş akışları ve SEO için 84 hızlı, gizlilik öncelikli tarayıcı aracına göz atın.",
      "pageTitleLabel": "Sayfa başlığı (<title> / og:title)",
      "titleChars": "{n} karakter (ideal 30–60)",
      "metaDescriptionLabel": "Meta açıklama",
      "descChars": "{n} karakter (ideal 120–160)",
      "canonicalUrlLabel": "Canonical URL",
      "ogImageLabel": "Open Graph görüntü URL'si (1200×630 önerilir)",
      "siteNameLabel": "Site adı (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter kartı",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots follow yönergesi",
      "includeViewportLabel": "Charset ve viewport etiketlerini dahil et",
      "generatedTagsLabel": "Oluşturulan HTML <head> etiketleri",
      "copyHtml": "HTML kopyala",
      "downloadHtml": ".html indir",
      "socialPreviewLabel": "Sosyal paylaşım kartı önizlemesi",
      "socialPreviewFallback": "Sosyal paylaşım önizlemesi",
      "untitledPage": "Başlıksız sayfa",
      "metaSnippetFallback": "Meta açıklama parçacığı burada görünecek."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "İstemci tarafı HTML kaynak denetimi:",
      "auditBody": "Tarayıcılar, herhangi bir üçüncü taraf web sitesinin çapraz kaynak (CORS) kazınmasını engeller ve özel arama analitiğine erişimleri yoktur. Sayfanızın HTML kaynağını aşağıya yapıştırın (Sayfa Kaynağını Görüntüle) ve DOM etiketlerini yerel olarak denetleyin.",
      "pastedHtmlLabel": "Yapıştırılan HTML kaynağı",
      "loadSampleHtml": "Örnek HTML yükle",
      "htmlPlaceholder": "Ham <html>...</html> kaynağını buraya yapıştırın...",
      "scoreLabel": "DOM denetim puanı",
      "checksPassed": "{passed} / {total} denetim geçti",
      "linksSummary": "Bağlantılar: {total} ({internal} iç / {external} dış)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "Varsayılan (index, follow)",
      "headingOutline": "Başlık ana hatları (H1–H4)",
      "emptyState": "Başlık, açıklama, başlıklar, canonical ve alt etiketleri görmek için sol tarafa HTML kaynağı yapıştırın.",
      "checkTitle": "Başlık etiketi (<title>)",
      "checkMetaDesc": "Meta açıklama",
      "checkH1": "Tam bir <h1> başlığı",
      "checkCanonical": "Canonical URL (<link rel=\"canonical\">)",
      "checkAlt": "Görüntü Alt özellikleri",
      "checkOgJsonLd": "Open Graph ve JSON-LD yapılandırılmış veri",
      "titleDetail": "{n} karakter: \"{title}\"",
      "titleMissing": "<head> içinde <title> etiketi bulunamadı.",
      "descDetail": "{n} karakter (hedef 120–160).",
      "descMissing": "<meta name=\"description\"> bulunamadı.",
      "h1Detail": "{n} <h1> öğesi bulundu.",
      "canonicalMissing": "Bildirilen canonical etiketi yok.",
      "noImages": "İşaretlemede <img> öğesi yok.",
      "altDetail": "{with}/{total} görüntüde açıklayıcı alt metin var.",
      "ogDetail": "og:title {presence} · {n} JSON-LD bloğu.",
      "present": "Mevcut",
      "missing": "Bulunamadı"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Dizin oluşturma yönergesi",
      "indexOption": "index (arama dizinine izin ver)",
      "noindexOption": "noindex (SERP dışında tut)",
      "linkCrawlingLabel": "Bağlantı taraması",
      "followOption": "follow (bağlantı sinyalini geçir)",
      "nofollowOption": "nofollow (bağlantıyı izleme)",
      "largeOption": "large (uygun aramalar)",
      "htmlTagLabel": "HTML <head> meta etiketi",
      "copyHtmlTag": "HTML etiketini kopyala",
      "httpHeaderLabel": "HTTP yanıt başlığı (PDF / HTML dışı)",
      "copyHeader": "Başlığı kopyala",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare _headers yol deseni",
      "copyBlock": "Bloğu kopyala"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Başlangıç şablonları:",
      "allowAll": "Tüm tarayıcılara izin ver",
      "standardWebApp": "Standart web uygulaması / SaaS",
      "wordpressClean": "WordPress temiz",
      "stagingBlockAll": "Hazırlık (tümünü engelle)",
      "crawlerRules": "Tarayıcı yol kuralları",
      "addRule": "Kural ekle",
      "directiveAria": "Yönerge",
      "pathAria": "Yol",
      "deleteRuleAria": "Kuralı sil",
      "crawlDelayLabel": "Crawl-delay (saniye, isteğe bağlı)",
      "crawlDelayPlaceholder": "Yok",
      "sitemapUrlsLabel": "Site haritası URL'leri (her satıra bir tane)",
      "generatedLabel": "Oluşturulan robots.txt",
      "invalidSitemapWarning": "Geçersiz site haritası URL'leri atlandı: {urls} — site haritası satırlarında tam http(s) URL'leri olmalıdır."
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Hızlı tarayıcı yardımcı araçları nasıl oluşturulur",
      "defaultFaqQ1": "UtilityFlow araçları yerel tarayıcıda mı çalışıyor?",
      "defaultFaqA1": "Evet. Neredeyse tüm yardımcı araçlar doğrudan tarayıcı belleğinde çalışır — girdiler harici sunuculara gönderilmez.",
      "defaultFaqQ2": "Yapılandırılmış JSON-LD SEO'ya yardımcı olur mu?",
      "defaultFaqA2": "Evet. Geçerli Schema.org JSON-LD, arama tarayıcıları için varlık bağlamını netleştirir ve zengin sonuç uygunluğunu artırır.",
      "defaultProductName": "Pro ergonomik mekanik klavye",
      "defaultProductDesc": "Yazılım geliştiricileri için üretilmiş düşük profilli kablosuz klavye.",
      "defaultCrumbHome": "Ana sayfa",
      "defaultCrumbSeo": "SEO araçları",
      "defaultCrumbSchema": "Schema işaretleme oluşturucu",
      "headlineLabel": "Başlık",
      "authorNameLabel": "Yazar adı",
      "publisherNameLabel": "Yayıncı adı",
      "datePublishedLabel": "Yayın tarihi",
      "articleUrlLabel": "Makale URL'si",
      "featuredImageLabel": "Öne çıkan görüntü URL'si",
      "questionLabel": "Soru #{n}",
      "removeQuestionAria": "Soru {n} kaldır",
      "questionPlaceholder": "Soru",
      "acceptedAnswerPlaceholder": "Kabul edilen yanıt",
      "addFaqRow": "SSS satırı ekle",
      "productNameLabel": "Ürün adı",
      "descriptionLabel": "Açıklama",
      "priceLabel": "Fiyat",
      "currencyLabel": "Para birimi",
      "availabilityLabel": "Kullanılabilirlik",
      "orgNameLabel": "Kuruluş adı",
      "websiteUrlLabel": "Web sitesi URL'si",
      "logoUrlLabel": "Logo URL'si",
      "breadcrumbLabelAria": "İçerik haritası {n} etiketi",
      "breadcrumbUrlAria": "İçerik haritası {n} URL'si",
      "labelPlaceholder": "Etiket",
      "addLevel": "Düzey ekle",
      "jsonLdOutputLabel": "JSON-LD <script> çıktısı",
      "copyScriptTag": "Komut dosyası etiketini kopyala"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Kelime Sayacı – Kelime ve karakter sayın | UtilityFlow",
      "defaultDescription": "Tarayıcınızda JSON yüklerini anında biçimlendirin, doğrulayın, küçültün ve anahtarları sıralayın — satır/sütun sözdizimi hatası ayrıntılarıyla.",
      "desktopSerp": "Masaüstü SERP (~580px başlık)",
      "mobileSerp": "Mobil SERP (~120 karakter açıklama)",
      "copyTitleMeta": "Başlık ve metayı kopyala",
      "seoTitleLabel": "SEO başlığı",
      "titleMetrics": "{chars} karakter · ~{px} px / 580 px azami",
      "metaDescriptionLabel": "Meta açıklama",
      "descMetrics": "{chars} karakter · ~{px} px",
      "pageUrlLabel": "Sayfa URL'si (içerik haritası önizlemesi için)",
      "siteNameLabel": "Site adı",
      "boldKeywordLabel": "Kalın anahtar kelime",
      "optionalPlaceholder": "İsteğe bağlı",
      "datePrefixLabel": "Tarih öneki",
      "datePlaceholder": "ör. Nov 12, 2025",
      "desktopSimulation": "Masaüstü arama parçacığı simülasyonu",
      "mobileSimulation": "Mobil arama parçacığı simülasyonu",
      "titleFallback": "SEO başlığınız burada görünecek",
      "descFallback": "Meta açıklamanızın önizlemesi burada görünecek."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Temiz URL slug'ları ile teknik SEO nasıl yapılır!\n2026'nın en iyi 10 Café ve verimlilik aracı\nXML site haritası ve Robots.txt tam kontrol listesi",
      "domainLabel": "Temel alan adı / alt klasör (tam URL önizlemesi için)",
      "separatorLabel": "Kelime ayırıcı",
      "hyphenOption": "Tire (-) — Google'ın önerisi",
      "underscoreOption": "Alt çizgi (_)",
      "maxLengthLabel": "Azami slug uzunluğu ({n} karakter)",
      "stripStopWords": "İsteğe bağlı İngilizce durak kelimeleri kaldır (a, the, and, of, in, to)",
      "trailingSlash": "Sonda eğik çizgi (/) ekle",
      "titlesLabel": "Sayfa başlığı / başlık (toplu oluşturmak için her satıra bir tane)",
      "generatedLabel": "Oluşturulan SEO slug'ları ({n})",
      "copyAllSlugs": "Tüm slug'ları kopyala",
      "copyAllUrls": "Tüm tam URL'leri kopyala",
      "originalTitleHeader": "Orijinal başlık",
      "slugUrlHeader": "SEO slug ve tam URL",
      "copyHeader": "Kopyala"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> tarihi (isteğe bağlı)",
      "changefreqLabel": "<changefreq> ipucu",
      "priorityLabel": "Varsayılan <priority>",
      "omitTag": "Etiketi atla",
      "deduplicateLabel": "Tamamen aynı URL'leri kaldır",
      "urlsLabel": "Canonical URL (her satıra bir tam https:// URL)",
      "skippedInvalid": "{n} geçersiz URL satırı atlandı: ",
      "generatedLabel": "Oluşturulan sitemap.xml ({n} URL)",
      "copyXml": "XML kopyala",
      "downloadXml": ".xml indir",
      "generatedAria": "Oluşturulan XML site haritası"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Oluşturucular ve ekipler için hızlı tarayıcı araçları yapıyoruz.   \n\nHer salı yeni haftalık iş akışı yayında.\n\nAşağıdaki bağlantıdan ücretsiz yardımcı araçları deneyin!",
      "modeBraille": "Görünmez boşluk (⠀ U+2800)",
      "modeDot": "En az nokta boşluk (.)",
      "modeClean": "Yalnızca sondaki boşlukları temizle",
      "collapse": "Kazara çift boşlukları kaldır",
      "labelRaw": "Taslak altyazı veya biyografi",
      "phRaw": "Altyazınızı yazın — paragraf sonu istediğiniz yerde boş satır bırakın...",
      "tip": "İpucu: Üst satırın sonunda sondaki boşluklar varsa sosyal uygulamalar genellikle boş paragrafları kaldırır.",
      "labelOut": "Yapıştırmaya hazır çıktı",
      "copyFormatted": "Biçimlendirilmiş altyazıyı kopyala",
      "charsLabel": "Karakter:",
      "linesLabel": "Satır:",
      "blankLabel": "Kalan boş sonlar:",
      "fitsBio": "Instagram 150 karakterlik biyografiye sığıyor",
      "captionLength": "Altyazı uzunluğu (150 biyografi sınırını aşıyor)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Sorun → Kışkırt → Çözüm (PAS)",
        "tutorial": "3 adımlı uygulanabilir açıklama",
        "bab": "Önce → Sonra → Köprü",
        "checklist": "Lansman / denetim kontrol listesi",
        "myth": "Yaygın efsane ve pratik gerçek"
      },
      "frameworkDescriptions": {
        "pas": "İş akışı çözümünüzü sunmadan önce somut sıkıntıyı ortaya çıkarır.",
        "tutorial": "LinkedIn karuselleri ve kaydetmeler için uygun numaralandırılmış nasıl yapılır yapısı.",
        "bab": "Eski tıkanıklığı düzenli sonuçla karşılaştırır.",
        "checklist": "Yer imlerine eklemeye değer net kontrol listesi.",
        "myth": "Eski tavsiyeyi doğrudan, özlü alternatiflerle sorgular."
      },
      "frameworkLabels": {
        "fixesHeading": "Aslında neyi düzeltir:",
        "beforeLabel": "Önce: ",
        "afterLabel": "Sonra: ",
        "bridgeHeading": "Köprü:",
        "mythLabel": "Yaygın efsane: ",
        "worksHeading": "Uygulamada ne işe yarar:"
      },
      "sampleHook": "Kampanya bağlantılarını elle biçimlendirerek saatler harcamayı bırakın.",
      "sampleContext": "Tutarsız UTM parametreleri ve bozuk biyografi boşlukları, analitik raporları sessizce bozar.",
      "samplePoints": "utm_source ve utm_medium etiketlerini küçük harfle tutarlı tutun\nYayınlamadan önce karakter katlanmasını kontrol edin\nSondaki boşluk olmadan temiz paragraf sonları bırakın",
      "sampleCta": "Bir sonraki ürün lansmanınız için bu kontrol listesini yer imlerine ekleyin.",
      "infoTitle": "Belirleyici şablon birleşimi:",
      "infoBody": "Bu araç, doğrudan tarayıcınızda yapılandırılmış metin yazarlığı çerçeveleri kullanır — hiçbir yapay zekâ modeli veya harici API kullanılmaz, böyle bir iddia da yoktur.",
      "labelHook": "Açılış cümlesi (ilk 1–2 satır)",
      "labelContext": "Bağlam / sorun ifadesi",
      "labelPoints": "Ana noktalar (her satıra bir tane)",
      "labelCta": "Eylem çağrısı (CTA)",
      "labelTags": "Etiketler",
      "previewTitle": "Biçimlendirilmiş altyazı önizlemesi",
      "copyCaption": "Altyazıyı kopyala",
      "charsLabel": "Karakter:",
      "wordsLabel": "Kelime:",
      "fits": "Sığıyor",
      "threadNeeded": "Konu dizisi gerekli",
      "tooLong": "Çok uzun"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Biçimlendirme ve erişilebilirlik durumu",
      "optCamel": "PascalCase (#CamelCase — ekran okuyucu dostu)",
      "optLower": "Tamamı küçük harf (#lowercase)",
      "optPreserve": "Orijinal durumu koru",
      "outLabel": "Çıktı düzeni",
      "optInline": "Tek satır (boşlukla ayrılmış)",
      "optNewline": "Her satıra bir etiket",
      "optDots": "Altyazı katlanma ayırıcı (.\n.\n.)",
      "dedupe": "Yinelenen etiketleri kaldır",
      "labelRaw": "Anahtar kelimeler veya dağınık etiketler (virgül, boşluk veya satırla ayrılmış)",
      "labelResult": "Temiz etiket grubu",
      "copyHashtags": "Etiketleri kopyala",
      "statClean": "Temiz etiket",
      "statDupes": "Yinelenenler kaldırıldı",
      "statIgMax": "Instagram azami (30)",
      "statWithin": "IG 30 sınırı içinde",
      "statExceeds": "30 etiket sınırını aşıyor",
      "statChars": "Çıktı karakteri"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 karakter · harf, rakam, alt çizgi",
        "instagram": "1–30 karakter · harf, rakam, nokta, alt çizgi",
        "tiktok": "2–24 karakter · harf, rakam, alt çizgi, nokta",
        "youtube": "3–30 karakter · harf, rakam, _, -, .",
        "threads": "1–30 karakter · Instagram ile paylaşılan ad alanı",
        "github": "1–39 karakter · alfasayısal ve tek tire"
      },
      "infoTitle": "Kural denetimi ve doğrudan denetim bağlantıları:",
      "infoBodyBefore": "Kullanılabilirliği tahmin etmeden, çevrimdışı olarak kullanıcı adı sözdizimini ve karakter sınırını denetler. Herhangi bir platformun",
      "infoEm": "Profil URL'sini açın",
      "infoBodyAfter": "bağlantısına tıklayarak canlı sahiplik durumunu doğrudan denetleyin.",
      "labelBrand": "Marka, proje veya içerik üretici adı",
      "phBrand": "ör. Utility Hub",
      "labelActive": "Denetlenecek etkin kullanıcı adı",
      "copyAt": "@ kopyala",
      "variationsTitle": "Uyumlu kullanıcı adı çeşitleri:",
      "thPlatform": "Platform",
      "thRules": "Biçim kuralları",
      "thStatus": "Sözdizimi durumu",
      "thCheck": "Manuel denetim",
      "valid": "Geçerli biçim",
      "invalid": "Geçersiz sözdizimi/uzunluk",
      "checkUrl": "URL'yi denetle"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Kalın (Sans-Serif)",
        "sans-italic": "İtalik (Sans-Serif)",
        "sans-bold-italic": "Kalın italik (Sans-Serif)",
        "serif-bold": "Kalın (Serif)",
        "monospace": "Tek aralıklı",
        "double-struck": "Çift çizgili (tahta)",
        "script-bold": "El yazısı kalın",
        "fraktur-bold": "Fraktur kalın",
        "small-caps": "Küçük büyük harfler",
        "fullwidth": "Tam genişlik estetiği"
      },
      "styleNotes": {
        "sans-bold": "Biyografi başlıkları ve gönderi kancaları için net okunabilirlik",
        "sans-italic": "Altyazılarda hafif vurgu",
        "sans-bold-italic": "Güçlü vurgular ve bölüm ayırıcılar",
        "serif-bold": "Editoryal tarzda vurgu",
        "monospace": "Kod kullanıcı adları, tarihler ve teknik etiketler",
        "double-struck": "Gösterişli harfler",
        "script-bold": "Süslemeli biyografi imzası",
        "fraktur-bold": "Gotik gösterişli harfler",
        "small-caps": "Temiz büyük harf görünümlü profil etiketleri",
        "fullwidth": "Geniş aralıklı retro sosyal başlıklar"
      },
      "sampleText": "Yeni içerik üretici araç seti 2025",
      "accessibilityTitle": "Erişilebilirlik notu:",
      "accessibilityBody": "Biçimlendirilmiş Unicode karakterler matematiksel sembol bloklarından gelir, bu nedenle ekran okuyucular onları harf harf okuyabilir veya atlayabilir; bazı arama dizinleri onları yok sayar. Tüm paragraflar yerine kısa vurgular için az kullanın.",
      "labelInput": "Biçimlendirilecek metin",
      "placeholder": "Kısa başlık, biyografi satırı veya CTA yazın...",
      "previewEmpty": "Önizleme"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagram biyografisi",
        "linkedinPost": "LinkedIn gönderisi",
        "newsletter": "Bülten",
        "youtubeDescription": "YouTube açıklaması"
      },
      "presetsLabel": "Hızlı kanal hazır ayarları:",
      "errorEmpty": "Hedef web sitesi URL'sini girin.",
      "errorInvalid": "Geçerli bir hedef URL girin (ör. https://example.com/landing).",
      "labelUrl": "Web sitesi hedef URL'si *",
      "labelSource": "Kampanya kaynağı (utm_source) *",
      "phSource": "ör. instagram, newsletter, google",
      "labelMedium": "Kampanya aracı (utm_medium) *",
      "phMedium": "ör. social, cpc, email, video",
      "labelCampaign": "Kampanya adı (utm_campaign)",
      "phCampaign": "ör. spring_launch",
      "labelContent": "Kampanya içeriği (utm_content)",
      "phContent": "ör. hero_banner, bio_button",
      "labelTerm": "Kampanya terimi (utm_term)",
      "phTerm": "İsteğe bağlı ücretli anahtar kelime veya kitle etiketi",
      "normalizeLabel": "Küçük harfe zorla ve boşlukları alt çizgi (`_`) ile değiştir",
      "generatedTitle": "Oluşturulan kampanya URL'si",
      "copyUtm": "UTM URL'sini kopyala",
      "thParam": "Sorgu parametresi",
      "thValue": "Normalleştirilmiş değer"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "Başlangıç sayfa numarası 1 veya daha büyük bir tam sayı olmalıdır.",
      "stampedSuccess": (n: number, size: string) => `${n} sayfaya sayfa numarası eklendi (${size}).`,
      "pageOfLabel": (cur: number, total: number) => `Sayfa ${cur} / ${total}`,
      "dropTitleEmpty": "Sayfa numarası eklemek için PDF dosyası seçin",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} sayfa)`,
      "dropSub": "Raporlara, sözleşmelere ve paketlere temiz vektör sayfa etiketleri ekler",
      "labelPos": "Konum",
      "optBottomCenter": "Alt orta",
      "optBottomRight": "Alt sağ",
      "optBottomLeft": "Alt sol",
      "optTopRight": "Üst sağ",
      "labelFmt": "Etiket biçimi",
      "optPageOf": "Sayfa 1 / N",
      "optSlash": "1 / N",
      "optNumberOnly": "1, 2, 3...",
      "labelStart": "Başlangıç numarası",
      "labelSize": "Yazı tipi boyutu (pt)",
      "opt9": "9 pt (ince)",
      "opt11": "11 pt (standart)",
      "opt14": "14 pt (büyük)",
      "skipCover": "Kapak sayfasını atla (numaralandırmaya sayfa 2'den başla)",
      "numbering": "Sayfalara numara ekleniyor...",
      "addBtn": "Sayfa numarası ekle ve indir"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `"${name}" görüntüsü çözülemedi.`,
      "errCanvas": "Canvas 2D bağlamı kullanılamıyor.",
      "errConvert": (name: string) => `"${name}" PNG'ye dönüştürülemedi.`,
      "errNotImage": (name: string) => `"${name}" desteklenen bir görüntü dosyası değil (PNG, JPG, WebP).`,
      "errRead": (name: string) => `"${name}" okunamadı.`,
      "errLoad": "Görüntü yüklenemedi.",
      "errEmpty": "Önce en az bir görüntü ekleyin.",
      "errBuild": "Görüntüler PDF'ye dönüştürülemedi.",
      "createdSuccess": (n: number, size: string) => `${n} sayfalık PDF düzgünce oluşturuldu (${size}).`,
      "dropTitle": "PNG, JPG veya WebP görüntü seçin",
      "dropSub": "Ekran görüntülerini, taramaları veya fotoğrafları yerel olarak tek bir PDF'ye dönüştürün",
      "labelSize": "PDF sayfa boyutu",
      "optA4": "A4 dikey (210 × 297 mm)",
      "optLetter": "US Letter (8,5 × 11 in)",
      "optFit": "Görüntünün tam boyutları",
      "labelMargin": "Sayfa kenar boşluğu",
      "optMargin0": "Kenar boşluğu yok (0 pt)",
      "optMargin24": "Standart kenar boşluğu (24 pt)",
      "optMargin48": "Geniş kenar boşluğu (48 pt)",
      "labelOut": "Çıktı dosya adı",
      "moveUp": (name: string) => `${name} yukarı taşı`,
      "moveDown": (name: string) => `${name} aşağı taşı`,
      "removeFile": (name: string) => `${name} kaldır`,
      "building": "PDF oluşturuluyor...",
      "convertBtn": (n: number) => `${n} görüntüyü PDF'ye dönüştür`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "Seçilen PDF dosyaları okunamadı.",
      "errMin2": "Birleştirmek için en az iki PDF dosyası ekleyin.",
      "mergedSuccess": (n: number, pages: number, size: string) => `${n} PDF düzgünce birleştirildi (${pages} sayfa, ${size}).`,
      "dropValidating": "PDF dosyaları doğrulanıyor...",
      "dropTitle": "Birden fazla PDF dosyası seçin veya bırakın",
      "dropSub": "%100 tarayıcı içi birleştirme, pdf-lib ile · Yalnızca şifresiz PDF · Asla yüklenmez",
      "filesQueued": "Sıradaki dosyalar",
      "totalPagesLabel": "Toplam sayfa",
      "combinedSize": "Birleşik girdi boyutu",
      "clearQueue": "Sırayı temizle",
      "pageSingular": "Sayfa",
      "pagePlural": "Sayfa",
      "moveUp": (name: string) => `${name} yukarı taşı`,
      "moveDown": (name: string) => `${name} aşağı taşı`,
      "removeFile": (name: string) => `${name} kaldır`,
      "outName": "Çıktı dosya adı",
      "merging": "PDF'ler birleştiriliyor...",
      "mergeBtn": (n: number) => `${n} PDF birleştir ve indir`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "Değiştirilebilir meta veri alanları temizlendi. Uygulamak için Meta Verileri Kaydet ve PDF İndir'e tıklayın.",
      "savedSuccess": (size: string) => `Güncellenmiş PDF meta verileri kaydedildi (${size}).`,
      "dropTitleEmpty": "Meta verileri görüntülemek veya değiştirmek için PDF dosyası seçin",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} sayfa · ${size})`,
      "dropSub": "Belge özelliklerini görüntüleyin, yazar/yazılım etiketlerini temizleyin veya temiz bir SEO başlığı ayarlayın",
      "labelTitle": "Belge başlığı",
      "labelAuthor": "Yazar",
      "labelSubject": "Konu / özet",
      "labelKeywords": "Anahtar kelimeler (virgülle ayırın)",
      "labelCreator": "Oluşturan uygulama",
      "labelProducer": "PDF üreticisi",
      "saving": "PDF kaydediliyor...",
      "saveBtn": "Meta verileri kaydet ve PDF indir",
      "stripBtn": "Değiştirilebilir alanları temizle"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "Döndürülecek eşleşen sayfa bulunamadı.",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `${b} sayfadan ${a} sayfa ${deg}° saat yönünde döndürüldü (${size}).`,
      "dropTitleEmpty": "Sayfa döndürmek için PDF dosyası seçin",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} sayfa)`,
      "dropSub": "Sunucuya yüklemeden, yerel olarak tüm sayfaları veya seçilen sayfa aralığını döndürün",
      "labelAngle": "Döndürme açısı",
      "opt90": "90° saat yönünde (sağa)",
      "opt270": "90° saat yönünün tersi (sola / 270°)",
      "opt180": "180° ters",
      "labelScope": "Uygulanacak sayfalar",
      "optAll": (n: number) => `Tüm sayfalar (${n})`,
      "optRange": "Belirli sayfa aralıkları",
      "optOdd": "Yalnızca tek sayfalar",
      "optEven": "Yalnızca çift sayfalar",
      "labelRangeInput": (n: number) => `Sayfa numaraları / aralıklar (1–${n})`,
      "phRange": "ör. 1, 3-5",
      "rotating": "Sayfalar döndürülüyor...",
      "rotateBtn": "Döndürmeyi uygula ve PDF indir"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- Sayfa ${n} ---`,
      "dropExtracting": "PDF metin katmanı çıkarılıyor...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} sayfa)`,
      "dropTitleEmpty": "Metin çıkarmak için metin tabanlı PDF seçin",
      "dropSub": "PDF.js ile yerel olarak gömülü Unicode metni çıkarır · Sunucuya yükleme yok",
      "noTextTitle": "Seçilebilir metin katmanı bulunamadı:",
      "noTextBody": "Bu PDF, gömülü metin katmanı yerine taranmış görüntüler veya ana hatları çıkarılmış vektör yolları içeriyor gibi görünüyor. Çevrimdışı istemci tarafı optik karakter tanıma (OCR) yapılmaz.",
      "markersLabelBefore": "Sayfa başlığı işaretlerini dahil et (",
      "markersCode": "--- Sayfa N ---",
      "markersLabelAfter": ")",
      "copyText": "Metni kopyala",
      "downloadTxt": ".txt indir",
      "outputAria": "Çıkarılan PDF metni çıktısı",
      "pagesScanned": "Taranan sayfalar:",
      "wordsExtracted": "Çıkarılan kelimeler:",
      "textSize": "Metin boyutu:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "Tarayıcı canvas belleğini hızlı ve duyarlı tutmak için bir grupta en fazla 20 sayfa oluşturun.",
      "errCanvas": "Canvas 2D bağlamı kullanılamıyor.",
      "dropTitleEmpty": "Görüntü olarak oluşturmak için PDF seçin",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} sayfa · ${size})`,
      "dropSub": "PDF.js canvas ile yerel oluşturma · PNG veya JPG çıktısı",
      "labelRange": "Sayfa (“all” veya 1-4, 6 gibi aralık)",
      "labelFormat": "Görüntü biçimi",
      "optPng": "PNG (kayıpsız / net metin)",
      "optJpg": "JPG (sıkıştırılmış, fotoğraflar için iyi)",
      "labelScale": "Oluşturma çözünürlüğü",
      "optScale1": "1,0× (72 DPI hızlı önizleme)",
      "optScale15": "1,5× (108 DPI standart)",
      "optScale2": "2,0× (144 DPI keskin)",
      "rendering": "PDF sayfaları oluşturuluyor...",
      "renderBtn": "PDF sayfalarını görüntüye dönüştür",
      "pageAlt": (n: number) => `Sayfa ${n} önizlemesi`,
      "pageLabel": (n: number, w: number, h: number) => `Sayfa ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "Nötr gri",
        "indigo": "Marka indigo",
        "red": "Damga kırmızısı"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "PDF oluşturmadan önce filigran metni girin.",
      "appliedSuccess": (text: string, n: number, size: string) => `"${text}" filigranı ${n} sayfaya uygulandı (${size}).`,
      "dropTitleEmpty": "Filigran eklemek için PDF dosyası seçin",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} sayfa)`,
      "dropSub": "pdf-lib ile yerel olarak temiz vektör metin damgası ekler",
      "labelText": "Filigran metni",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "Damga rengi",
      "firstPageOnly": "Yalnızca ilk sayfa",
      "labelSize": "Yazı tipi boyutu:",
      "ptSuffix": (n: number) => `${n} pt`,
      "labelOpacity": "Opaklık:",
      "labelAngle": "Döndürme:",
      "applying": "PDF'ye filigran uygulanıyor...",
      "applyBtn": "Filigran uygula ve indir"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF'de en az 1 sayfa kalmalıdır.",
      "savedSuccess": (n: number, size: string) => `${n} sayfalık güncellenmiş PDF kaydedildi (${size}).`,
      "loading": "PDF sayfaları ve önizlemeler yükleniyor...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n} sayfa etkin)`,
      "dropTitleEmpty": "Sayfa sırasını değiştirmek veya silmek için PDF dosyası seçin",
      "dropSub": "Yerel olarak sayfaları taşıyın, sayfaları çoğaltın veya istenmeyen sayfaları kaldırın",
      "outCount": "Çıktı sayfa sayısı:",
      "saving": "PDF kaydediliyor...",
      "saveBtn": "Sırası değiştirilmiş PDF'yi kaydet",
      "thumbAlt": (n: number) => `Orijinal sayfa ${n}`,
      "thumbFallback": (n: number) => `Orj. sf. ${n}`,
      "posLabel": (n: number) => `Konum #${n}`,
      "origLabel": (n: number) => `(orijinal ${n})`,
      "moveEarlierTitle": "Öne taşı",
      "moveEarlierAria": (n: number) => `Konum ${n} öne taşı`,
      "moveLaterTitle": "Sonra taşı",
      "moveLaterAria": (n: number) => `Konum ${n} sonra taşı`,
      "dupTitle": "Sayfayı çoğalt",
      "dupAria": (n: number) => `Konum ${n} sayfasını çoğalt`,
      "delTitle": "Sayfayı sil",
      "delAria": (n: number) => `Konum ${n} sayfasını sil`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `Toplu ayırmada her sayfa ayrı dosya olarak indirilir. 25 sayfadan büyük belgeler (burada ${n} sayfa) için aralıklar çıkarın, böylece tarayıcı toplu indirmeyi engellemez.`,
      "exportedAll": (n: number) => `${n} tek sayfalık PDF dosyası dışa aktarıldı.`,
      "errNoMatch": "Bu seçimle eşleşen sayfa yok (ör. çift sayfalar için 2+ sayfa gerekir).",
      "extractedSuccess": (a: number, b: number, size: string) => `${b} sayfadan ${a} sayfa çıkarıldı (${size}).`,
      "dropTitleEmpty": "Ayırmak veya çıkarmak için PDF dosyası seçin",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} sayfa · ${size})`,
      "dropSub": "Bellekte yerel işleme · Belgeyi değiştirmek için tıklayın",
      "modeRange": "Sayfa aralıklarını çıkar",
      "modeOdd": "Yalnızca tek sayfalar",
      "modeEven": "Yalnızca çift sayfalar",
      "modeBurst": "Tüm sayfaları ayrı ayrı çıkar",
      "labelRange": (n: number) => `Çıkarılacak sayfalar (1–${n})`,
      "phRange": "ör. 1-3, 5, 8-10",
      "rangeHintBefore": "Virgül ve tire kullanın (ör. ",
      "rangeHintAfter": ").",
      "extracting": "PDF çıkarılıyor...",
      "splitBtn": "Ayır ve PDF indir"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "Web sitesi URL'si",
      "tabText": "Düz metin",
      "tabWifi": "Wi-Fi ağı",
      "tabEmail": "E-posta bağlantısı",
      "tabPhone": "Telefon numarası",
      "labelUrl": "Hedef URL",
      "labelText": "Metin içeriği",
      "labelSsid": "Ağ adı (SSID)",
      "labelSecurity": "Güvenlik türü",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "Açık (şifre yok)",
      "labelWifiPass": "Wi-Fi şifresi",
      "hiddenSsid": "Gizli SSID ağı",
      "labelEmailTo": "Alıcı e-postası",
      "labelEmailSubject": "Konu (isteğe bağlı)",
      "labelPhone": "Telefon numarası (E.164 biçimi önerilir)",
      "sizeLabel": (size: number) => `Boyut (${size}px)`,
      "labelEc": "Hata düzeltme",
      "labelFg": "Ön plan",
      "labelBg": "Arka plan",
      "quietZone": "Sessiz bölge kenar boşluğu:",
      "modulesLabel": (margin: number) => `${margin} modül`,
      "encodedPayload": "Kodlanmış yük dizesi",
      "copyPayload": "Yükü kopyala",
      "emptyError": "Taranabilir QR kod oluşturmak için yukarıya içerik girin.",
      "encodeError": "QR yükü kodlanamadı.",
      "qrAlt": "Oluşturulan taranabilir QR kodu",
      "downloadPng": "PNG indir",
      "downloadSvg": "SVG indir",
      "copySvg": "SVG kopyala",
      "sampleText": "UtilityFlow'a hoş geldiniz!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "Standart gönderi",
        "profileBio": "Profil biyografisi",
        "caption": "Altyazı",
        "feedPost": "Akış gönderisi",
        "videoCaption": "Video altyazısı",
        "post": "Gönderi",
        "videoTitle": "Video başlığı",
        "description": "Açıklama"
      },
      "sampleText": "Hızlı gönderim, küçük günlük iyileştirmelerle başlar.\n\nTarayıcı tabanlı içerik üretici yardımcı araçlarımızı https://utilityflow.online/tools/ adresinde deneyin — kayıt gerekmez.\n\n#CreatorTools #Workflow",
      "labelInput": "Sosyal gönderi / biyografi taslağı",
      "copyDraft": "Taslağı kopyala",
      "placeholder": "Sosyal altyazınızı, gönderinizi, biyografinizi veya YouTube başlığınızı yazın veya yapıştırın...",
      "charsLabel": "Karakter:",
      "wordsLabel": "Kelime:",
      "hashtagsLabel": "Etiket:",
      "mentionsLabel": "Bahsetme:",
      "urlsLabel": "Bulunan URL'ler:",
      "urlsWeighted": "(X'te 23 karakter sayılır)",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} sınırın üzerinde`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} kaldı`,
      "foldLabel": (n: number) => `Katlanma ~${n} karakter`,
      "foldTitle": "Akış kesme / “Daha Fazla Gör” katlanma önizlemesi",
      "foldDesc": (limit: number, platform: string, surface: string) => `Okuyucuların “Daha fazla gör”e basmadan önce ne gördüğünün önizlemesi (${platform} ${surface} için ${limit} karakter).`,
      "selectAria": "Kesme önizleme platformunu seçin",
      "previewEmpty": "Önizleme burada görünecek..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "Takip olmadan 84 hızlı tarayıcı yardımcı aracı nasıl oluşturduk",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "24 B görüntülenme · 2 gün önce",
      "errNotImage": "Lütfen PNG, JPG veya WebP görüntü dosyası seçin.",
      "errDecode": "Bu görüntü dosyası tarayıcıda çözülemedi.",
      "previewEyebrow": "1280 × 720 önizleme",
      "emptyThumb": "Akış okunabilirliğini denetlemek için küçük resminizi yükleyin",
      "thumbAlt": "Yüklenen küçük resmin önizlemesi",
      "safeZoneTitle": "Zaman damgası rozeti çakışma bölgesi",
      "chooseThumb": "Yerel küçük resim seçin (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `Değiştir: ${name}`,
      "recommended": "1280×720 (16:9) önerilir, 2 MB altı · Asla yüklenmez",
      "diagTitle": "Görüntü özellik denetimi",
      "dimLabel": "Boyutlar",
      "dimHdOk": "(HD uygun)",
      "dimUnder": "(<1280px)",
      "aspectLabel": "En boy oranı",
      "aspectMatch": "16:9 eşleşme",
      "aspectNo": "16:9 değil (kırpma/harf kutusu olabilir)",
      "sizeLabel": "Dosya boyutu",
      "sizeOk": "(<2 MB uygun)",
      "sizeOver": "(>2 MB sınır)",
      "titleLabel": (len: number) => `Video başlığı (${len}/100 karakter · mobilde ~60 görünür)`,
      "channelLabel": "Kanal adı",
      "durationLabel": "Süre",
      "darkMode": "Koyu mod akış önizlemesi",
      "safeZone": "Zaman damgası köşe bölgesini vurgula",
      "desktopCard": "Masaüstü ana sayfa akış kartı",
      "sidebar": "Masaüstü izleme kenar çubuğu (kompakt önerilen)",
      "untitled": "Başlıksız video"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "Giriş ve genel bakış"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "Ana mimari kurulumu"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "Canlı demo ve yaygın hatalar"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "Özet ve sonraki adımlar"
        }
      ],
      "newChapter": (n: number) => `Bölüm ${n}`,
      "defaultChapterTitle": "Bölüm",
      "warnInvalid": "Bir veya daha fazla zaman damgasının biçimi geçersiz (DD:SS veya SS:DD:SS kullanın).",
      "warnMin3": "Video bölümlerini etkinleştirmek için YouTube, artan sırada en az 3 zaman damgası ister.",
      "warnFirst": "YouTube bölümleri tanıyabilmesi için ilk bölüm 00:00 ile başlamalıdır.",
      "warnOrder": "Bölümler kronolojik sırada değil (kronolojik sıralaya tıklayın).",
      "warnShort": (title: string) => `"${title}" bölümü, önceki bölümden sonra 10 saniyeden kısa (YouTube asgari 10 saniye).`,
      "labelUrl": "YouTube video URL'si veya video kimliği (doğrudan `?t=` derin bağlantı için)",
      "heading": "Video bölümleri",
      "sortBtn": "Kronolojik sırala",
      "addBtn": "Bölüm ekle",
      "tsAria": (n: number) => `Bölüm ${n} zaman damgası`,
      "titleAria": (n: number) => `Bölüm ${n} başlığı`,
      "phTitle": "Bölüm başlığı",
      "removeAria": (n: number) => `Bölüm ${n} kaldır`,
      "specTitle": "YouTube bölüm özellik denetimi:",
      "descBlock": "Açıklama bölüm bloğu",
      "copyChapters": "Bölümleri kopyala",
      "emptyChapters": "Açıklama bloğu oluşturmak için yukarıya bölüm ekleyin.",
      "shareTitle": "Zaman damgalı paylaşım bağlantıları",
      "videoIdLabel": (id: string) => `(Video kimliği: ${id})`,
      "noVideoId": "(Yukarıya geçerli YouTube URL'si girin)",
      "noVideoHint": "Her bölüm için tıklanabilir `?t=` atlama bağlantısı oluşturmak üzere geçerli bir youtube.com veya youtu.be URL'si yapıştırın."
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "Dosya seçilmedi.",
      "notPdf": (name: string) => `"${name}" PDF dosyası gibi görünmüyor.`,
      "empty": (name: string) => `"${name}" boş veya eksik.`,
      "noHeader": (name: string) => `"${name}" içinde geçerli %PDF başlığı yok ve işlenemez.`,
      "enterRanges": "Sayfa numaraları veya aralıkları girin, ör. \"1-3, 5\".",
      "rangeOutside": (token: string, total: number) => `"${token}" aralığı, belgenin 1–${total} sayfa aralığının dışında.`,
      "rangeReversed": (token: string) => `"${token}" aralığının başlangıç sayfası, bitiş sayfasından büyük.`,
      "pageMissing": (page: number, total: number) => `Sayfa ${page} mevcut değil (belgede ${total} sayfa var).`,
      "invalidSyntax": (token: string) => `Geçersiz sayfa sözdizimi "${token}". "1-3, 5" gibi sayılar ve aralıklar kullanın.`,
      "encrypted": "Bu PDF şifreli veya parola korumalı. Yerel olarak işlemeden önce kilidini açın.",
      "unable": "PDF dosyası işlenemedi.",
      "allKeywords": ["all", "tümü", "hepsi"]
    }
  }
};
