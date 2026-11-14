import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the id locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the id locale is selected.
 */
export const idComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Teks yang diubah hurufnya",
      "placeholder": "Ketik atau tempel teks, lalu klik tombol konversi huruf di bawah...",
      "copyResult": "Salin hasil"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Tulis teks yang jelas dan ringkas agar sesuai dengan batas karakter platform tanpa terpotong secara aneh di hasil pencarian atau feed media sosial.",
      "withSpaces": "Dengan Spasi",
      "withoutSpaces": "Tanpa Spasi",
      "words": "Kata",
      "letters": "Huruf",
      "digits": "Angka",
      "utf8Bytes": "Byte UTF-8",
      "copyText": "Salin teks",
      "textToMeasure": "Teks untuk mengukur panjang karakter",
      "placeholder": "Ketik atau tempel teks untuk melihat jumlah karakter yang tepat, ukuran byte, dan batas platform...",
      "whitespaceChars": "Karakter spasi",
      "lines": "Baris",
      "platformLimitsTitle": "Batas Karakter Platform & SEO",
      "over": "lebih",
      "left": "tersisa",
      "platformLimits": [
        {
          "name": "Judul Meta SEO",
          "note": "Panjang judul SERP Google yang disarankan"
        },
        {
          "name": "Deskripsi Meta SEO",
          "note": "Batas standar cuplikan desktop"
        },
        {
          "name": "Segmen SMS",
          "note": "Satu pesan SMS GSM-7"
        },
        {
          "name": "Postingan X / Twitter",
          "note": "Panjang postingan standar"
        },
        {
          "name": "Pratinjau Caption Instagram",
          "note": "Terlihat sebelum pemotongan \"Selengkapnya\""
        },
        {
          "name": "Postingan LinkedIn",
          "note": "Pembaruan feed standar maksimum"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Cari",
      "replaceWith": "Ganti dengan",
      "findPlaceholder": "Teks yang dicari...",
      "replacePlaceholder": "Teks pengganti...",
      "caseSensitive": "Peka huruf besar/kecil",
      "wholeWordOnly": "Hanya kata utuh",
      "useRegex": "Gunakan Ekspresi Reguler (RegExp)",
      "regexError": "Kesalahan regex:",
      "invalidRegex": "Ekspresi reguler tidak valid.",
      "sourceText": "Teks Sumber",
      "updatedOutput": "Hasil yang Diperbarui",
      "match": "cocok",
      "matches": "cocok",
      "replaced": "diganti",
      "sourcePlaceholder": "Tempel teks untuk dicari dan diganti...",
      "outputPlaceholder": "Pratinjau teks yang diganti muncul di sini...",
      "copyResult": "Salin hasil"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Awalan Baris",
      "lineSuffix": "Akhiran Baris",
      "startNumber": "Nomor Awal",
      "numberSeparator": "Pemisah Angka",
      "addLineNumbers": "Tambahkan nomor baris",
      "zeroPad": "Tambahkan nol di depan angka (01, 02)",
      "skipEmptyLines": "Lewati baris kosong",
      "inputLines": "Baris Input",
      "formattedLines": "Baris yang Diformat",
      "copyResult": "Salin hasil",
      "inputPlaceholder": "Tempel satu nilai atau baris per baris...",
      "outputPlaceholder": "Baris bernomor atau terbungkus muncul di sini..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Jumlah",
      "unit": "Satuan",
      "unitLabels": {
        "paragraphs": "paragraf",
        "sentences": "kalimat",
        "words": "kata"
      },
      "startClassic": "Mulai dengan “Lorem ipsum”",
      "wrapHtml": "Bungkus dengan tag <p>",
      "words": "kata",
      "characters": "karakter",
      "regenerate": "Buat Ulang",
      "copyPlaceholder": "Salin teks placeholder",
      "generatedText": "Teks placeholder yang dihasilkan"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Catatan Rilis UtilityFlow\n\nSelamat datang di **Markdown Previewer**, editor sisi klien yang cepat dengan ekspor *HTML* langsung.\n\n## Kemampuan Utama\n\n- Pemformatan instan untuk judul, daftar, dan tautan\n- Escaping HTML yang aman tanpa unggahan jarak jauh\n- Salin dan unduh HTML mentah dengan satu klik\n\n> Simpan dokumentasi dekat dengan pekerjaan dan pratinjau strukturnya sebelum menerbitkan.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nPelajari lebih lanjut di [UtilityFlow](/tools/).",
      "renderedPreview": "Pratinjau yang Dirender",
      "rawHtml": "HTML Mentah",
      "exportHtml": "Ekspor HTML",
      "copyHtml": "Salin HTML",
      "markdownSource": "Sumber Markdown",
      "livePreview": "Pratinjau Langsung",
      "compiledHtml": "HTML yang Dikompilasi",
      "compiledHtmlAria": "Sumber HTML yang dikompilasi",
      "inputPlaceholder": "Tulis Markdown (# Judul, **tebal**, - daftar, [tautan](https://...))...",
      "emptyPreview": "Pratinjau akan muncul saat Anda mengetik Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Penulisan teknis yang jelas menghargai waktu pembaca. Gunakan kata benda yang konkret dan kata kerja aktif sebisa mungkin agar instruksi yang rumit tetap mudah diikuti.\n\nKalimat panjang yang dipenuhi klausa bersarang memaksa pembaca membaca ulang paragraf. Memecah penjelasan yang padat menjadi langkah-langkah yang lebih pendek membuat dokumentasi lebih cepat dipindai dan lebih mudah diterapkan.",
      "level": "Tingkat:",
      "textToCheck": "Teks untuk diperiksa keterbacaannya",
      "placeholder": "Tempel artikel, esai, atau teks landing page Anda untuk menghitung Flesch Reading Ease dan skor tingkat kelas...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "Tingkat Kelas Flesch-Kincaid",
      "usGrade": "Tingkat kelas sekolah AS",
      "gunningFog": "Indeks Gunning Fog",
      "yearsEducation": "Tahun pendidikan",
      "smog": "Indeks SMOG",
      "polysyllable": "Kompleksitas polisilabel",
      "structuralBreakdown": "Rincian Struktural",
      "wordsSentences": "Kata / Kalimat",
      "avgSentenceLength": "Rata-rata panjang kalimat",
      "words": "kata",
      "avgSyllablesPerWord": "Rata-rata suku kata per kata",
      "complexWords": "Kata kompleks (3+ suku kata)",
      "longWordsDetected": "Kata Panjang Terdeteksi (3+ Suku Kata)",
      "noLongWords": "Tidak ditemukan kata dengan 3+ suku kata dalam bagian ini.",
      "emptyState": "Masukkan setidaknya satu kalimat di atas untuk melihat rumus keterbacaan dan rasio struktural.",
      "levels": [
        {
          "level": "Sangat Mudah",
          "audience": "Kelas 5 (10–11 thn)"
        },
        {
          "level": "Mudah",
          "audience": "Kelas 6 (11–12 thn)"
        },
        {
          "level": "Cukup Mudah",
          "audience": "Kelas 7 (12–13 thn)"
        },
        {
          "level": "Standar",
          "audience": "Kelas 8–9 (13–15 thn)"
        },
        {
          "level": "Cukup Sulit",
          "audience": "Kelas 10–12"
        },
        {
          "level": "Sulit",
          "audience": "Tingkat perguruan tinggi"
        },
        {
          "level": "Sangat Sulit",
          "audience": "Lulusan perguruan tinggi / spesialis"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Peka huruf besar/kecil",
      "trimWhitespace": "Pangkas spasi",
      "removeEmptyLines": "Hapus baris kosong",
      "sortAlphabetically": "Urutkan menurut abjad",
      "originalLines": "Baris Asli",
      "lines": "baris",
      "uniqueLines": "Baris Unik",
      "unique": "unik",
      "removed": "dihapus",
      "inputPlaceholder": "Tempel daftar dengan satu item per baris...",
      "outputPlaceholder": "Hasil yang dideduplikasi akan muncul di sini..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Peka huruf besar/kecil",
      "ignoreBlankLines": "Abaikan baris kosong",
      "removeDuplicates": "Hapus duplikat",
      "inputLines": "Baris Input",
      "sortedLines": "Baris yang Diurutkan",
      "copySorted": "Salin hasil urutan",
      "inputPlaceholder": "Masukkan satu item per baris...",
      "outputPlaceholder": "Hasil yang diurutkan muncul di sini...",
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
          "label": "Alami (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Terpendek Dahulu"
        },
        {
          "id": "length-desc",
          "label": "Terpanjang Dahulu"
        },
        {
          "id": "reverse-order",
          "label": "Urutan Terbalik"
        },
        {
          "id": "shuffle",
          "label": "Acak"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Abaikan spasi",
      "ignoreCase": "Abaikan huruf besar/kecil",
      "originalText": "Teks Asli",
      "modifiedText": "Teks yang Diubah",
      "originalPlaceholder": "Tempel teks asli...",
      "modifiedPlaceholder": "Tempel teks yang diperbarui...",
      "lineComparison": "Perbandingan Baris",
      "added": "ditambahkan",
      "removed": "dihapus",
      "unchanged": "tidak berubah",
      "emptyState": "Masukkan teks di kedua kotak di atas untuk membandingkan penambahan dan penghapusan baris."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Baris pertama teks\nBaris kedua teks\nBaris ketiga teks",
      "originalText": "Teks Asli",
      "reversedOutput": "Hasil yang Dibalik",
      "inputPlaceholder": "Masukkan teks atau baris untuk dibalik...",
      "outputPlaceholder": "Teks yang dibalik muncul di sini...",
      "modes": [
        {
          "id": "characters",
          "label": "Balik Karakter"
        },
        {
          "id": "words",
          "label": "Balik Urutan Kata"
        },
        {
          "id": "each-word",
          "label": "Balik Setiap Kata"
        },
        {
          "id": "lines",
          "label": "Balik Urutan Baris"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 Cara Terbaik Memformat JSON Online!\nCafé & Crème: Panduan untuk 2026\nCara Membangun Situs Statis Cepat di Cloudflare Pages",
      "hyphen": "Tanda hubung (-)",
      "underscore": "Garis bawah (_)",
      "forceLowercase": "Paksa huruf kecil",
      "stripStopWords": "Hapus kata henti umum",
      "titlesLabel": "Judul atau Frasa (satu per baris untuk mode batch)",
      "inputPlaceholder": "Masukkan judul blog, nama produk, atau daftar judul...",
      "generatedSlugs": "Slug URL yang Dihasilkan",
      "copySlugs": "Salin slug",
      "outputPlaceholder": "slug-url-bersih-muncul-di-sini"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Baris   pertama dengan   spasi   berlebih.   \n\n   Baris kedua   dengan   tab\tdan   celah.\n\n\nBaris   ketiga di sini.   ",
      "collapseSpaces": "Gabungkan beberapa spasi",
      "trimEdges": "Pangkas tepi baris",
      "tabsToSpaces": "Ubah tab menjadi spasi",
      "lineBreaks": "Jeda baris:",
      "keepBreaks": "Pertahankan jeda baris",
      "removeBlankLines": "Hapus baris kosong",
      "replaceWithSpaces": "Ganti dengan spasi",
      "removeAllBreaks": "Hapus semua jeda",
      "inputText": "Teks Input",
      "chars": "karakter",
      "cleanedText": "Teks yang Dibersihkan",
      "removed": "dihapus",
      "inputPlaceholder": "Tempel teks berantakan dengan spasi berlebih, tab, atau baris kosong...",
      "outputPlaceholder": "Hasil yang dibersihkan muncul secara otomatis..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow memproses setiap perhitungan teks langsung di browser Anda. Baik saat Anda menyusun artikel blog, menyempurnakan pengumuman produk, atau memeriksa esai akademis dengan batas kata yang ketat, hitungan instan membantu Anda mengatur pesan dengan jelas.\n\nKalimat pendek memudahkan pemindaian. Memvariasikan panjang kalimat membuat panduan yang lebih panjang tetap menarik bagi pembaca di layar desktop dan seluler.",
      "words": "Kata",
      "characters": "Karakter",
      "noSpaces": "Tanpa Spasi",
      "sentences": "Kalimat",
      "paragraphs": "Paragraf",
      "readingTime": "Waktu Baca",
      "downloadTxt": "Unduh .txt",
      "copyText": "Salin teks",
      "textToCount": "Teks yang dihitung",
      "placeholder": "Tempel atau ketik teks Anda di sini untuk menghitung kata, karakter, kalimat, dan waktu baca...",
      "deliveryTimingLines": "Waktu Penyampaian & Baris",
      "speakingTime": "Waktu berbicara (130 kpm)",
      "totalLines": "Total baris",
      "avgWordLength": "Rata-rata panjang kata",
      "chars": "karakter",
      "mostFrequentWords": "Kata yang Paling Sering Muncul",
      "emptyKeywords": "Masukkan teks di atas untuk melihat kata yang paling sering diulang."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Audit SEO teknis memeriksa kemampuan perayapan, tautan internal, dan kecepatan halaman. Halaman yang cepat meningkatkan keterlibatan pengguna dan sinyal kecepatan halaman di pencarian seluler. Tautan internal menghubungkan panduan terkait dan memperkuat struktur SEO teknis.",
      "ngramLabels": {
        "1": "1 Kata",
        "2": "Frasa 2 Kata",
        "3": "Frasa 3 Kata"
      },
      "excludeStopWords": "Kecualikan kata henti umum",
      "minLength": "Panjang min:",
      "textForAnalysis": "Teks untuk analisis frekuensi",
      "placeholder": "Tempel teks artikel, deskripsi produk, atau catatan untuk menghitung istilah yang berulang dan kepadatan kata kunci...",
      "totalWords": "Total kata:",
      "uniqueTerms": "Istilah unik:",
      "exportCsv": "Ekspor CSV",
      "copyCsv": "Salin CSV",
      "rank": "#",
      "termPhrase": "Istilah / Frasa",
      "count": "Jumlah",
      "density": "Kepadatan",
      "emptyState": "Masukkan teks di atas untuk memeriksa jumlah kata dan persentase kepadatan kata kunci."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Masukkan tanggal kalender yang valid.",
      "errorDobAfterTarget": "Tanggal lahir tidak boleh setelah tanggal target.",
      "dobLabel": "Tanggal Lahir",
      "targetLabel": "Usia pada Tanggal",
      "exactAge": "Usia Kronologis Tepat",
      "yearsWord": "tahun",
      "monthsWord": "bulan",
      "daysWord": "hari",
      "nextBirthday": "Ulang tahun berikutnya",
      "turning": "menjadi",
      "inWord": "dalam",
      "totalMonths": "Total Bulan",
      "totalWeeks": "Total Minggu",
      "totalDays": "Total Hari",
      "totalHours": "Total Jam (perkiraan)",
      "monthsAbbr": "bln",
      "weeksAbbr": "mgg",
      "daysAbbr": "h",
      "hoursAbbr": "jam"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Kekurangan berat badan",
      "normalWeight": "Berat normal",
      "overweight": "Kelebihan berat badan",
      "obesity": "Obesitas",
      "errorHeightMetric": "Masukkan tinggi antara 50 cm dan 280 cm.",
      "errorWeightMetric": "Masukkan berat antara 15 kg dan 500 kg.",
      "errorHeightImperial": "Masukkan tinggi yang valid antara 2 ft dan 9 ft.",
      "errorWeightImperial": "Masukkan berat antara 30 lbs dan 1100 lbs.",
      "metricTab": "Metrik (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "heightCmLabel": "Tinggi (cm)",
      "weightKgLabel": "Berat (kg)",
      "heightFtLabel": "Tinggi (ft)",
      "heightInLabel": "Tinggi (in)",
      "weightLbsLabel": "Berat (lbs)",
      "bmiLabel": "Indeks Massa Tubuh (IMT)",
      "whoCategory": "Kategori WHO",
      "healthyRange": "Rentang Berat IMT Sehat (18,5–24,9)",
      "disclaimer": "IMT adalah rasio skrining umum dan tidak membedakan massa otot dari lemak tubuh."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Masukkan usia antara 15 dan 100 tahun.",
      "errorHeightMetric": "Masukkan tinggi antara 100 cm dan 250 cm.",
      "errorWeightMetric": "Masukkan berat antara 30 kg dan 350 kg.",
      "errorHeightImperial": "Masukkan tinggi antara 3 ft 4 in dan 8 ft 2 in.",
      "errorWeightImperial": "Masukkan berat antara 66 lbs dan 770 lbs.",
      "metricTab": "Metrik (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "maleTab": "Laki-laki",
      "femaleTab": "Perempuan",
      "ageLabel": "Usia (tahun)",
      "heightCmLabel": "Tinggi (cm)",
      "weightKgLabel": "Berat (kg)",
      "heightFtLabel": "Tinggi (ft)",
      "heightInLabel": "Tinggi (in)",
      "weightLbsLabel": "Berat (lbs)",
      "activityLabel": "Tingkat Aktivitas",
      "activitySedentary": "Sedentari (1,2×)",
      "activitySedentaryDetail": "Pekerjaan meja, sedikit atau tanpa olahraga",
      "activityLight": "Ringan aktif (1,375×)",
      "activityLightDetail": "Olahraga ringan 1–3 hari/minggu",
      "activityModerate": "Cukup aktif (1,55×)",
      "activityModerateDetail": "Olahraga sedang 3–5 hari/minggu",
      "activityVery": "Sangat aktif (1,725×)",
      "activityVeryDetail": "Olahraga berat 6–7 hari/minggu",
      "activityExtra": "Sangat aktif (1,9×)",
      "activityExtraDetail": "Pekerjaan fisik atau latihan dua kali sehari",
      "maintenance": "Kalori Pemeliharaan (TDEE)",
      "mildLoss": "Penurunan Berat Badan Ringan (-0,25 kg/mgg)",
      "mildLossNote": "~250 kkal defisit harian",
      "weightLoss": "Penurunan Berat Badan (-0,5 kg/mgg)",
      "weightLossNote": "~500 kkal defisit harian",
      "leanGain": "Kenaikan Berat Badan Ramping",
      "leanGainNote": "+250 kkal surplus harian",
      "macroHeading": "Pembagian Makro Pemeliharaan Referensi (30% Protein · 40% Karbohidrat · 30% Lemak)",
      "protein": "Protein",
      "carbs": "Karbohidrat",
      "fat": "Lemak Makanan",
      "gramsPerDay": "g/hari",
      "disclaimer": "Dihitung melalui persamaan BMR Mifflin-St Jeor. Kebutuhan energi individu bervariasi berdasarkan komposisi tubuh dan konteks medis; konsultasikan dengan tenaga kesehatan profesional sebelum memulai diet ketat."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Setoran awal tidak boleh negatif.",
      "errorMonthly": "Kontribusi bulanan tidak boleh negatif.",
      "errorRate": "Tingkat pengembalian tahunan harus antara 0% dan 100%.",
      "errorYears": "Jangka waktu harus antara 1 dan 100 tahun.",
      "initialLabel": "Pokok Awal ($)",
      "monthlyLabel": "Penambahan Bulanan ($)",
      "rateLabel": "Pengembalian Tahunan (%)",
      "yearsLabel": "Tahun",
      "compoundingLabel": "Pemajemukan",
      "dailyOption": "Harian (365/thn)",
      "monthlyOption": "Bulanan (12/thn)",
      "quarterlyOption": "Kuartalan (4/thn)",
      "annualOption": "Tahunan (1/thn)",
      "futureBalance": "Saldo Masa Depan",
      "totalContributed": "Total Pokok + Setoran",
      "totalInterest": "Total Bunga Majemuk",
      "yearHeader": "Tahun",
      "totalContributedHeader": "Total yang Dikontribusikan",
      "cumulativeInterestHeader": "Bunga Kumulatif",
      "endingBalanceHeader": "Saldo Akhir",
      "yearPrefix": "Tahun"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Masukkan jumlah 0 atau lebih.",
      "errorRate": "Masukkan kurs positif yang lebih besar dari 0.",
      "errorFee": "Masukkan biaya konversi antara 0% dan 50%.",
      "fetchErrorWithMessage": "Tidak dapat mengambil kurs eksternal ({message}). Lanjutkan dengan memasukkan kurs Anda secara manual di atas.",
      "fetchErrorGeneric": "Tidak dapat menjangkau API kurs eksternal. Masukkan kurs Anda secara manual di atas.",
      "fetchErrorNoPair": "Pasangan mata uang yang dipilih tidak dikembalikan oleh API referensi.",
      "currencyNames": {
        "USD": "Dolar AS",
        "EUR": "Euro",
        "GBP": "Pound Inggris",
        "JPY": "Yen Jepang",
        "CAD": "Dolar Kanada",
        "AUD": "Dolar Australia",
        "CHF": "Franc Swiss",
        "INR": "Rupee India",
        "SGD": "Dolar Singapura",
        "NZD": "Dolar Selandia Baru",
        "MXN": "Peso Meksiko",
        "CNY": "Yuan Tiongkok"
      },
      "rateSourceManualDefault": "Kurs yang dimasukkan pengguna secara manual (default offline)",
      "rateSourceManual": "Kurs yang dimasukkan pengguna secara manual",
      "rateSourceIdentity": "Kurs identitas (1,0000) untuk mata uang yang cocok",
      "rateSourceEcb": "Kurs referensi ECB eksternal melalui API Frankfurter (tanggal: {date})",
      "rateSourceInverted": "Dibalik dari kurs sebelumnya",
      "disclosureTitle": "Pengungkapan Sumber Kurs:",
      "disclosureBody": "Kurs pasar langsung tidak pernah dibuat-buat secara offline. Masukkan kurs yang Anda kutip secara tepat secara manual, atau klik",
      "disclosureBodyAfter": " untuk meminta kurs referensi dari API Frankfurter eksternal.",
      "activeRateSource": "Sumber kurs aktif:",
      "amountLabel": "Jumlah",
      "fromLabel": "Dari Mata Uang",
      "toLabel": "Ke Mata Uang",
      "swapAria": "Tukar mata uang",
      "swapTitle": "Tukar mata uang dan balik kurs",
      "rateLabel": "Kurs",
      "feeLabel": "Biaya FX Bank / Kartu (%)",
      "fetchButton": "Ambil Kurs Referensi ECB",
      "fetchingButton": "Mengambil Kurs ECB...",
      "netConverted": "Jumlah Bersih yang Dikonversi",
      "grossBeforeFee": "Kotor Sebelum Biaya FX",
      "feeLabelShort": "Biaya",
      "inverseRate": "Kurs Balik",
      "perOne": "per 1",
      "amountHeaderSuffix": "Jumlah",
      "netHeaderPrefix": "Bersih",
      "netHeaderSuffix": "(pada kurs & biaya yang dimasukkan)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Pilih tanggal awal dan akhir kalender yang valid.",
      "errorInvalidBase": "Masukkan tanggal awal kalender yang valid.",
      "errorNonNegative": "Masukkan bilangan bulat non-negatif untuk tahun, bulan, dan hari.",
      "differenceTab": "Selisih Antara Tanggal",
      "addSubtractTab": "Tambah / Kurangi Waktu",
      "startLabel": "Tanggal Mulai",
      "endLabel": "Tanggal Akhir",
      "swapTitle": "Tukar tanggal",
      "swapAria": "Tukar tanggal mulai dan akhir",
      "includeEnd": "Sertakan tanggal akhir dalam hitungan (+1 hari kalender)",
      "calendarDuration": "Durasi Kalender",
      "reversedRange": "(Rentang terbalik)",
      "totalSpan": "Total rentang:",
      "calendarDays": "hari kalender",
      "weeksDays": "Minggu & Hari",
      "weekdays": "Hari Kerja (Sen–Jum)",
      "weekendDays": "Hari Akhir Pekan (Sab–Min)",
      "totalHours": "Total Jam",
      "yearsWord": "tahun",
      "monthsWord": "bulan",
      "daysWord": "hari",
      "weeksAbbr": "mgg",
      "daysAbbr": "h",
      "hoursAbbr": "jam",
      "referenceLabel": "Tanggal Referensi",
      "operationLabel": "Operasi",
      "addOption": "Tambah (+)",
      "subtractOption": "Kurangi (-)",
      "yearsLabel": "Tahun",
      "monthsLabel": "Bulan",
      "daysLabel": "Hari",
      "resultingDate": "Tanggal Kalender Hasil",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Harga asli tidak boleh negatif.",
      "errorDiscount": "Diskon harus antara 0% dan 100%.",
      "errorTax": "Pajak penjualan harus antara 0% dan 100%.",
      "errorCost": "Biaya tidak boleh negatif.",
      "errorSelling": "Harga jual harus lebih besar dari 0.",
      "discountTab": "Diskon Penjualan",
      "marginTab": "Margin Laba & Markup",
      "originalPriceLabel": "Harga Asli ($)",
      "discountLabel": "Diskon (%)",
      "salesTaxLabel": "Pajak Penjualan (%)",
      "costLabel": "Biaya Satuan ($)",
      "sellingLabel": "Harga Jual ($)",
      "finalPrice": "Harga Akhir",
      "beforeTax": "Sebelum pajak:",
      "youSave": "Anda Hemat",
      "taxAdded": "Pajak Ditambahkan",
      "grossProfit": "Laba Kotor",
      "profitMargin": "Margin Laba",
      "profitDivSelling": "(Laba ÷ Harga Jual)",
      "markup": "Markup",
      "profitDivCost": "(Laba ÷ Biaya)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Masukkan pokok pinjaman lebih besar dari 0.",
      "errorRate": "Masukkan suku bunga tahunan antara 0% dan 100%.",
      "errorDuration": "Durasi pinjaman harus antara 1 dan 600 bulan.",
      "principalLabel": "Pokok Pinjaman ($)",
      "rateLabel": "Suku Bunga Tahunan (% APR)",
      "termLabel": "Jangka Waktu Pinjaman",
      "termUnitAria": "Satuan jangka waktu pinjaman",
      "yearsOption": "Tahun",
      "monthsOption": "Bulan",
      "monthlyPayment": "Pembayaran Bulanan (EMI)",
      "forPrefix": "untuk",
      "monthlyPayments": "pembayaran bulanan",
      "totalInterest": "Total Bunga",
      "ofTotalCost": "dari total biaya",
      "totalRepayment": "Total Pelunasan",
      "principalWord": "pokok",
      "principalLabelShort": "Pokok",
      "interestLabelShort": "Bunga",
      "showSchedule": "Tampilkan Jadwal Amortisasi",
      "hideSchedule": "Sembunyikan Jadwal Amortisasi",
      "monthHeader": "Bulan",
      "paymentHeader": "Pembayaran",
      "principalHeader": "Pokok",
      "interestHeader": "Bunga",
      "balanceHeader": "Saldo"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Harga rumah harus lebih besar dari 0.",
      "errorDownPayment": "Persentase uang muka harus antara 0% dan 99,9%.",
      "errorRate": "Suku bunga harus antara 0% dan 50%.",
      "errorTerm": "Jangka waktu pinjaman harus antara 1 dan 50 tahun.",
      "homePriceLabel": "Harga Rumah ($)",
      "downPaymentLabel": "Uang Muka (%)",
      "rateLabel": "Suku Bunga (% APR)",
      "termLabel": "Jangka Waktu Pinjaman (Tahun)",
      "yearsWord": "Tahun",
      "taxLabel": "Pajak Properti ($ / tahun)",
      "insuranceLabel": "Asuransi Rumah ($ / tahun)",
      "hoaLabel": "Iuran HOA ($ / bulan)",
      "estimatedMonthly": "Perkiraan Pembayaran Bulanan",
      "loanAmount": "Jumlah Pinjaman",
      "downPayment": "Uang Muka",
      "lifetimeInterest": "Bunga Seumur Hidup",
      "breakdownHeading": "Rincian Pembayaran Bulanan",
      "principalInterest": "Pokok & Bunga (P&I)",
      "propertyTaxes": "Pajak Properti",
      "homeownersInsurance": "Asuransi Pemilik Rumah",
      "hoaDues": "Iuran HOA",
      "pmiLabel": "Perk. PMI (0,5%/thn saat uang muka < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Masukkan angka yang valid.",
      "errorTotalZero": "Total (Y) tidak boleh 0.",
      "errorStartZero": "Nilai awal tidak boleh 0.",
      "heading1": "1. Persentase dari Angka",
      "heading2": "2. Bagian sebagai Persentase dari Keseluruhan",
      "heading3": "3. Kenaikan atau Penurunan Persentase",
      "whatIs": "Berapa",
      "percentOf": "% dari",
      "isWhatPercentOf": "adalah berapa % dari",
      "fromWord": "Dari",
      "toWord": "ke",
      "result": "Hasil:",
      "change": "Perubahan:",
      "formula": "Rumus",
      "difference": "Selisih",
      "ariaPctX": "Persentase X",
      "ariaBaseY": "Angka dasar Y",
      "ariaPartX": "Nilai bagian X",
      "ariaWholeY": "Nilai keseluruhan Y",
      "ariaInitialA": "Nilai awal A",
      "ariaFinalB": "Nilai akhir B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Jumlah kompensasi tidak boleh negatif.",
      "errorHours": "Jam per minggu harus antara 1 dan 168.",
      "errorWeeks": "Minggu per tahun harus antara 1 dan 52.",
      "errorTax": "Tarif pajak efektif harus antara 0% dan 99%.",
      "amountLabel": "Jumlah Gaji ($)",
      "frequencyLabel": "Frekuensi",
      "hourlyOption": "Per Jam",
      "dailyOption": "Harian",
      "weeklyOption": "Mingguan",
      "biweeklyOption": "Dua Mingguan",
      "monthlyOption": "Bulanan",
      "annualOption": "Tahunan",
      "hoursLabel": "Jam / Minggu",
      "weeksLabel": "Minggu / Tahun",
      "taxLabel": "Perk. Tarif Pajak (%)",
      "rowHourly": "Per Jam",
      "rowDaily": "Harian (minggu 5 hari)",
      "rowWeekly": "Mingguan",
      "rowBiweekly": "Dua Mingguan",
      "rowMonthly": "Bulanan",
      "rowAnnual": "Tahunan",
      "payPeriodHeader": "Periode Gaji",
      "grossPayHeader": "Gaji Kotor",
      "estNetPay": "Perk. Gaji Bersih",
      "taxWord": "pajak"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Masukkan waktu mulai dan akhir yang valid.",
      "errorBreakRange": "Masukkan pengurangan istirahat antara 0 dan 1.440 menit.",
      "errorEndEarlier": "Waktu akhir lebih awal dari waktu mulai. Aktifkan pergantian semalam jika melewati tengah malam.",
      "errorBreakExceeds": "Pengurangan istirahat melebihi total waktu yang berlalu.",
      "errorSumFields": "Semua bidang durasi harus berupa angka non-negatif.",
      "betweenTab": "Waktu Berlalu Antara Jam",
      "sumTab": "Tambah Durasi Timesheet",
      "startLabel": "Waktu Mulai",
      "endLabel": "Waktu Akhir",
      "breakLabel": "Istirahat Tak Berbayar (mnt)",
      "overnightLabel": "Perlakukan waktu akhir yang lebih awal dari waktu mulai sebagai hari berikutnya (shift semalam)",
      "netDuration": "Durasi Bersih",
      "overnightTag": "(Semalam)",
      "decimalHours": "Jam Desimal",
      "totalMinutes": "Total Menit",
      "totalSeconds": "Total Detik",
      "hoursAbbr": "jam",
      "minutesAbbr": "mnt",
      "secondsAbbr": "dtk",
      "labelHeader": "Label",
      "hoursHeader": "Jam",
      "minutesHeader": "Menit",
      "secondsHeader": "Detik",
      "removeButton": "Hapus",
      "removeAria": "Hapus",
      "addRowButton": "Tambah Baris Durasi",
      "morningSession": "Sesi pagi",
      "afternoonSession": "Sesi sore",
      "segmentPrefix": "Segmen",
      "combinedTime": "Waktu Gabungan (JJ:MM:DD)",
      "dayEquivalent": "Hari 24 Jam",
      "daysAbbr": "h"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Jumlah tagihan tidak boleh negatif.",
      "errorTip": "Persentase tip harus antara 0% dan 200%.",
      "errorPeople": "Jumlah orang harus antara 1 dan 100.",
      "billLabel": "Subtotal Tagihan ($)",
      "tipLabel": "Persentase Tip (%)",
      "peopleLabel": "Dibagi Antara (Orang)",
      "presetsLabel": "Preset tip:",
      "roundingLabel": "Pembulatan:",
      "exactOption": "Sen yang tepat",
      "totalUpOption": "Bulatkan total ke atas ($)",
      "perPersonUpOption": "Bulatkan per orang ke atas ($)",
      "perPersonTotal": "Total Per Orang",
      "includes": "Termasuk",
      "tipEach": "tip masing-masing",
      "totalTip": "Total Tip",
      "effectiveRate": "Tarif efektif:",
      "totalBill": "Total Tagihan"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Masukkan nilai numerik yang valid untuk dikonversi.",
      "errorAbsoluteZero": "Suhu tidak boleh di bawah nol absolut (-273,15 °C / 0 K).",
      "categoryNames": {
        "length": "Panjang",
        "weight": "Berat & Massa",
        "temperature": "Suhu",
        "area": "Luas",
        "volume": "Volume",
        "speed": "Kecepatan",
        "storage": "Penyimpanan Digital"
      },
      "unitLabels": {
        "mm": "Milimeter",
        "cm": "Sentimeter",
        "m": "Meter",
        "km": "Kilometer",
        "in": "Inci",
        "ft": "Kaki",
        "yd": "Yard",
        "mi": "Mil",
        "mg": "Miligram",
        "g": "Gram",
        "kg": "Kilogram",
        "t": "Ton Metrik",
        "oz": "Ons",
        "lb": "Pound",
        "st": "Stone",
        "C": "Celcius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Sentimeter Persegi",
        "m2": "Meter Persegi",
        "ha": "Hektare",
        "km2": "Kilometer Persegi",
        "ft2": "Kaki Persegi",
        "yd2": "Yard Persegi",
        "acre": "Acre",
        "mi2": "Mil Persegi",
        "mL": "Mililiter",
        "L": "Liter",
        "m3": "Meter Kubik",
        "floz": "Fluid Ounce (AS)",
        "cup": "Cangkir (AS)",
        "pt": "Pint (AS)",
        "qt": "Quart (AS)",
        "gal": "Galon (AS)",
        "ms": "Meter / detik",
        "kmh": "Kilometer / jam",
        "mph": "Mil / jam",
        "knot": "Knot",
        "fts": "Kaki / detik",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Nilai",
      "fromLabel": "Dari Satuan",
      "toLabel": "Ke Satuan",
      "swapAria": "Tukar satuan",
      "swapTitle": "Tukar satuan",
      "toWord": "ke",
      "copyResult": "Salin Hasil",
      "unitHeader": "Satuan",
      "symbolHeader": "Simbol",
      "equivalentHeader": "Nilai Setara"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Jumlah tidak boleh negatif.",
      "errorRate": "Tarif pajak harus antara 0% dan 100%.",
      "addTab": "Tambah Pajak (Netto → Bruto)",
      "removeTab": "Ekstrak Pajak (Bruto → Netto)",
      "commonRates": "Tarif umum:",
      "netAmountLabel": "Jumlah Netto (Tidak Termasuk Pajak) ($)",
      "grossAmountLabel": "Jumlah Bruto (Termasuk Pajak) ($)",
      "rateLabel": "Tarif PPN / Pajak Penjualan (%)",
      "netPrice": "Harga Netto (Tidak Termasuk Pajak)",
      "taxAmount": "Jumlah Pajak",
      "grossPrice": "Harga Bruto (Termasuk Pajak)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Encode ke Base64",
      "decodeTab": "Decode Base64",
      "urlSafe": "URL-safe (- dan _)",
      "omitPadding": "Hilangkan padding = di akhir",
      "swap": "Tukar",
      "decodeError": "Kesalahan decode:",
      "inputLabelEncode": "Teks Biasa (UTF-8)",
      "inputLabelDecode": "String Base64",
      "inputPlaceholderEncode": "Masukkan teks atau JSON untuk di-encode...",
      "inputPlaceholderDecode": "Tempel string Base64 standar atau URL-safe...",
      "outputLabelEncode": "Hasil Base64",
      "outputLabelDecode": "Teks yang Didecode",
      "outputPlaceholder": "Hasil konversi muncul di sini...",
      "copyOutput": "Salin hasil",
      "invalidLength": "Panjang string Base64 tidak valid.",
      "invalidInput": "Input Base64 tidak valid atau urutan byte UTF-8 rusak."
    },
    "tables": {
      "samplePlain": "UtilityFlow: pengodean Base64 yang aman dengan UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Pilih warna",
      "colorPickerAria": "Pemilih warna",
      "copyHex": "Salin HEX",
      "copyRgb": "Salin RGB",
      "copyHsl": "Salin HSL",
      "contrastTitle": "Pemeriksaan Rasio Kontras WCAG 2.1",
      "contrastDesc": "Pratinjau foreground ({color}) dengan warna latar apa pun.",
      "backgroundLabel": "Latar:",
      "bgAria": "Warna latar untuk kontras",
      "sampleTitle": "Contoh Teks Isi & UI",
      "sampleSentence": "Rubah cokelat yang cepat melompati anjing yang malas.",
      "aaNormal": "AA Teks Normal (≥ 4,5:1)",
      "aaaNormal": "AAA Teks Normal (≥ 7,0:1)",
      "aaLarge": "AA Teks Besar (≥ 3,0:1)",
      "pass": "Lolos",
      "fail": "Gagal"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Ekspresi Cron 5 Bidang",
      "copyCron": "Salin cron",
      "humanTitle": "Jadwal yang Mudah Dibaca Manusia",
      "breakdownTitle": "Rincian Bidang",
      "fieldMinute": "Menit (0–59)",
      "fieldHour": "Jam (0–23)",
      "fieldDom": "Hari dalam Bulan (1–31)",
      "fieldMonth": "Bulan (1–12)",
      "fieldDow": "Hari dalam Minggu (0–6)",
      "nextRuns": "{count} Jadwal Berikutnya (Waktu Lokal)",
      "noRuns": "Tidak ditemukan jadwal yang cocok dalam 366 hari ke depan.",
      "fieldsError": "Cron standar membutuhkan 5 bidang (menit jam hari-dalam-bulan bulan hari-dalam-minggu). Ditemukan {count}.",
      "emptySegment": "Segmen kosong dalam \"{token}\"",
      "invalidStep": "Langkah \"{step}\" tidak valid dalam \"{token}\"",
      "outOfRange": "Nilai di luar rentang ({min}–{max}) dalam \"{token}\"",
      "invalidCron": "Ekspresi cron tidak valid.",
      "everyMinutes": "Setiap {n} menit",
      "minuteZeroHour": "Pada menit 0 setiap jam",
      "atTime": "Pada {time}",
      "atFields": "Pada {a}, {b}",
      "dayEveryDay": "setiap hari",
      "dayWeekdays": "pada hari kerja (Senin–Jumat)",
      "dayOfMonth": "pada hari {day} dalam sebulan",
      "dayDow": "pada {dow}",
      "dayBoth": "pada hari {day} atau {dow}",
      "monthIn": " pada {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Setiap 5 menit",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Setiap jam",
          "expr": "0 * * * *"
        },
        {
          "label": "Setiap hari tengah malam",
          "expr": "0 0 * * *"
        },
        {
          "label": "Hari kerja pukul 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Tanggal 1 setiap bulan pukul 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
      ],
      "monthLabels": [
        "",
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ],
      "unitWords": {
        "minute": "menit",
        "hour": "jam",
        "day": "hari",
        "month": "bulan",
        "weekday": "hari kerja"
      },
      "unitPlurals": {
        "minute": "menit",
        "hour": "jam",
        "day": "hari",
        "month": "bulan",
        "weekday": "hari kerja"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Minifikasi CSS",
      "beautifyTab": "Percantik CSS",
      "inputLabel": "CSS Input",
      "bytesLabel": "byte",
      "inputPlaceholder": "Tempel aturan CSS atau stylesheet di sini...",
      "outputLabelMinify": "CSS yang Diminifikasi",
      "outputLabelBeautify": "CSS yang Dipercantik",
      "outputPlaceholder": "CSS yang diproses muncul di sini...",
      "copyCss": "Salin CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Input Teks",
      "fileTab": "Checksum File Lokal",
      "uppercaseHex": "Hex huruf besar",
      "inputLabel": "String Input (UTF-8)",
      "inputPlaceholder": "Masukkan teks untuk menghitung hash SHA-1, SHA-256, SHA-384, dan SHA-512...",
      "chooseFileLabel": "Pilih file lokal untuk di-hash",
      "fileNoteDefault": "File dibaca secara lokal di memori browser dan tidak pernah diunggah.",
      "bytesLabel": "byte",
      "cryptoUnavailable": "Hashing Web Crypto tidak tersedia.",
      "sampleText": "Halo, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Encode Entitas",
      "decodeTab": "Decode Entitas",
      "encodeNonAscii": "Encode simbol non-ASCII (&#...;)",
      "swap": "Tukar",
      "inputLabelEncode": "HTML / Teks Mentah",
      "inputLabelDecode": "String yang Di-encode HTML",
      "inputPlaceholderEncode": "<p>Masukkan tag HTML atau karakter khusus...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Tempel entitas yang di-encode...&lt;/p&gt;",
      "outputLabelEncode": "Entitas yang Di-encode",
      "outputLabelDecode": "Teks yang Didecode",
      "outputPlaceholder": "Entitas yang dikonversi muncul di sini..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Minifikasi JS",
      "beautifyTab": "Percantik JS",
      "indentLabel": "Indentasi:",
      "indent2": "2 spasi",
      "indent4": "4 spasi",
      "inputLabel": "Input JavaScript / TypeScript",
      "bytesLabel": "byte",
      "inputPlaceholder": "Tempel cuplikan JavaScript atau TypeScript...",
      "outputLabelMinify": "Hasil yang Diminifikasi",
      "outputLabelBeautify": "Hasil yang Dipercantik",
      "outputPlaceholder": "JavaScript yang diformat muncul di sini...",
      "copyCode": "Salin kode"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Pemisah:",
      "commaOpt": "Koma (,)",
      "semicolonOpt": "Titik koma (;)",
      "tabOpt": "Tab (TSV)",
      "conversionError": "Kesalahan konversi:",
      "inputLabelJson": "Input JSON",
      "inputLabelCsv": "Input CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Hasil CSV",
      "outputLabelJson": "Hasil JSON",
      "outputPlaceholder": "Data yang dikonversi muncul di sini...",
      "parseFallback": "Tidak dapat mengurai format input."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 Spasi",
      "indent4": "4 Spasi",
      "indentTab": "Tab",
      "indentMinify": "Minifikasi",
      "sortKeys": "Urutkan kunci A–Z",
      "validJson": "JSON Valid",
      "keysLabel": "kunci",
      "depthLabel": "kedalaman",
      "bytesLabel": "byte",
      "invalidJson": "JSON Tidak Valid:",
      "invalidJsonSyntax": "Sintaks JSON tidak valid",
      "lineCol": "Baris {line}, Kolom {col}",
      "inputLabel": "Input JSON Mentah",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Hasil yang Diformat",
      "outputPlaceholder": "JSON yang diformat dan divalidasi muncul di sini...",
      "copyJson": "Salin JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Mendecode header dan payload Base64Url secara lokal di memori browser. Tidak memverifikasi tanda tangan kriptografi.",
      "loadSampleJwt": "Muat contoh JWT",
      "inputLabel": "Token JWT yang Di-encode",
      "inputPlaceholder": "Tempel token JWT (eyJhbGciOi...) untuk memeriksa header dan klaimnya...",
      "invalidJwt": "JWT Tidak Valid:",
      "headerLabel": "Header (Algoritma & Tipe)",
      "payloadLabel": "Payload (Klaim)",
      "copyHeader": "Salin header",
      "copyPayload": "Salin payload",
      "timestampTitle": "Klaim Stempel Waktu",
      "iatLabel": "Diterbitkan Pada (iat)",
      "nbfLabel": "Tidak Sebelum (nbf)",
      "expLabel": "Kedaluwarsa Pada (exp)",
      "expired": "Kedaluwarsa",
      "active": "Aktif (belum kedaluwarsa)",
      "signatureLabel": "Segmen Tanda Tangan (Base64Url)",
      "invalidB64Url": "Panjang segmen Base64Url tidak valid.",
      "segmentCount": "Diharapkan 3 segmen JWT yang dipisahkan titik (header.payload.signature), ditemukan {count}.",
      "parseFallback": "Tidak dapat mengurai segmen JSON Base64Url JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Pola Ekspresi Reguler",
      "patternPlaceholder": "Masukkan pola regex...",
      "flagsLabel": "Flag:",
      "syntaxError": "Kesalahan sintaks:",
      "testStringLabel": "String Uji",
      "testPlaceholder": "Tempel teks contoh untuk diuji dengan pola Anda...",
      "highlightedMatches": "Kecocokan yang Disorot",
      "matchSingular": "cocok",
      "matchPlural": "cocok",
      "highlightEmpty": "Kecocokan disorot di sini secara real time...",
      "capturedTitle": "Kecocokan yang Ditangkap",
      "matchLabel": "Cocok",
      "indexLabel": "indeks",
      "groupsLabel": "Grup:",
      "noMatches": "Tidak ditemukan kecocokan.",
      "replaceLabel": "Pratinjau Template Pengganti",
      "replacePlaceholder": "cth. $1 [at] $2",
      "invalidRegex": "Ekspresi reguler tidak valid."
    },
    "tables": {
      "sampleText": "Kontak utama: support@utilityflow.online\nTim penagihan: billing@example.org\nEmail tidak valid: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (abaikan huruf besar-kecil)"
        },
        {
          "flag": "m",
          "label": "m (multibaris)"
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
      "beautify": "Percantik",
      "minify": "Minifikasi",
      "uppercaseKw": "Kata kunci HURUF BESAR",
      "lowercaseKw": "huruf kecil",
      "indentLabel": "Indentasi:",
      "indent2": "2 spasi",
      "indent4": "4 spasi",
      "inputLabel": "Kueri SQL Mentah",
      "inputPlaceholder": "Tempel kueri SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL yang Diformat",
      "outputPlaceholder": "SQL yang diformat muncul di sini...",
      "copySql": "Salin SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Unix Timestamp Saat Ini (Detik)",
      "useCurrent": "Gunakan waktu saat ini",
      "copyEpoch": "Salin epoch",
      "converter1Label": "Unix Timestamp → Tanggal Manusia",
      "epochPlaceholder": "cth. 1794544800",
      "unitAuto": "otomatis",
      "unitSeconds": "detik",
      "unitMilliseconds": "milidetik",
      "errorNotNumeric": "Masukkan Unix timestamp numerik yang valid.",
      "errorOutOfRange": "Timestamp berada di luar rentang Date JavaScript yang valid.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Zona Waktu Lokal",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relatif",
      "converter2Label": "Tanggal & Waktu Lokal → Unix Timestamp",
      "secondsLabel": "Detik",
      "millisecondsLabel": "Milidetik",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Encode",
      "decode": "Decode",
      "encodeUriPreserve": "encodeURI (pertahankan ://?&)",
      "swap": "Tukar",
      "urlError": "Kesalahan URL:",
      "inputLabel": "String Input atau URL",
      "inputPlaceholder": "Tempel URL, query string, atau nilai parameter...",
      "outputLabelEncode": "Hasil yang Di-encode",
      "outputLabelDecode": "Hasil yang Didecode",
      "outputPlaceholder": "URL yang di-encode atau di-decode muncul di sini...",
      "parsedTitle": "Rincian URL yang Diurai",
      "protocol": "Protokol",
      "host": "Host",
      "pathname": "Pathname",
      "hash": "Hash",
      "noneValue": "(tidak ada)",
      "queryParam": "Parameter Kueri",
      "decodedValue": "Nilai yang Didecode",
      "malformed": "Urutan percent-encoding yang rusak."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Versi UUID",
      "v4": "v4 (Acak)",
      "v7": "v7 (Terurut waktu)",
      "quantity": "Jumlah (1–100)",
      "generate": "Buat UUID",
      "uppercase": "Huruf besar",
      "includeHyphens": "Sertakan tanda hubung",
      "wrapBraces": "Bungkus dalam {braces}",
      "generatedLabel": "UUID yang Dihasilkan",
      "copyAll": "Salin semua"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Indigo di atas Putih",
      "presetSlate": "Tinta Slate",
      "presetEmerald": "Lencana Emerald",
      "presetDark": "Mode Gelap",
      "swapColors": "Tukar Warna",
      "fgTitle": "Warna Foreground / Teks",
      "bgTitle": "Warna Latar",
      "copyHex": "Salin HEX",
      "pickerSuffix": "pemilih",
      "hexInputSuffix": "input HEX",
      "contrastRatioLabel": "Rasio Kontras WCAG 2.1",
      "checkAaNormal": "WCAG AA Teks Normal",
      "checkAaLarge": "WCAG AA Teks Besar / UI",
      "checkAaaNormal": "WCAG AAA Teks Normal",
      "checkAaaLarge": "WCAG AAA Teks Besar",
      "pass": "LOLOS",
      "fail": "GAGAL",
      "livePreviewLabel": "Pratinjau Aksesibilitas Langsung",
      "previewHeading": "Tipografi yang jelas tetap mudah dibaca pada ukuran viewport apa pun.",
      "previewBody": "Teks isi normal (14–16 px) membutuhkan rasio kontras minimal 4,5:1 untuk WCAG Level AA dan 7,0:1 untuk Level AAA. Judul besar (18 pt+ atau tebal 14 pt+) membutuhkan minimal 3,0:1.",
      "outlinedControl": "Kontrol UI Berbingkai",
      "hexOnHex": "{fg} pada {bg}",
      "extractTitle": "Ekstrak Palet Warna dari Gambar",
      "extractBody": "Unggah screenshot, logo, atau foto untuk menarik swatch HEX dominan langsung ke pemeriksaan kontras Anda.",
      "appliesToLabel": "Klik swatch berlaku untuk:",
      "foregroundBtn": "Foreground",
      "backgroundBtn": "Latar",
      "selectImage": "Pilih gambar untuk mengekstrak swatch",
      "loadedReplace": "Dimuat: {name} (Unggah lainnya)",
      "selectImageError": "Pilih gambar PNG, JPG, WebP, atau GIF.",
      "unableToRead": "Tidak dapat membaca \"{name}\".",
      "canvasUnavailable": "Konteks Canvas 2D tidak tersedia.",
      "transparentImage": "Gambar tampak sepenuhnya transparan.",
      "unableToExtract": "Tidak dapat mengekstrak palet.",
      "areaPercent": "~{n}% area"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 Tab Browser",
        "taskbar": "32×32 Taskbar / HiDPI",
        "desktopShortcut": "48×48 Pintasan Desktop",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA Splash"
      },
      "monogramMode": "Pembuat Lencana Monogram",
      "imageMode": "Unggah Gambar Logo",
      "lettersLabel": "Teks / Inisial (1–3 karakter)",
      "cornerShapeLabel": "Bentuk Sudut",
      "roundedSquare": "Kotak Membulat",
      "circle": "Lingkaran",
      "sharpSquare": "Kotak Tajam",
      "square": "Kotak",
      "bgColorLabel": "Warna Latar",
      "textColorLabel": "Warna Teks",
      "chooseLogo": "Pilih logo PNG, JPG, WebP, atau SVG",
      "loadedReplace": "Dimuat: {name} (Klik untuk mengganti)",
      "cropMaskLabel": "Masker Potong",
      "unableToRead": "Tidak dapat membaca \"{name}\".",
      "canvasUnavailable": "Konteks Canvas 2D tidak tersedia.",
      "failedEncode": "Gagal meng-encode PNG favicon.",
      "unableToGenerate": "Tidak dapat membuat favicon.",
      "icoBundleTitle": "Bundel favicon.ico Multi-Ukuran (16px + 32px + 48px)",
      "icoBundleBody": "File .ico biner yang sesuai standar, siap untuk folder root /public/ situs web Anda",
      "downloadIco": "Unduh favicon.ico",
      "faviconPreviewAlt": "Pratinjau Favicon 32x32",
      "iconAlt": "Ikon {size}x{size}",
      "htmlTagsLabel": "Tag Tautan HTML <head>",
      "copyHtml": "Salin HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Pilih File Apa Pun untuk Menghitung Checksum Kriptografi",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Di-hash secara lokal melalui Web Crypto API · Tanpa unggahan file (disarankan di bawah 500 MB)",
      "cryptoUnavailable": "API Web Crypto SubtleCrypto tidak tersedia dalam konteks browser ini.",
      "hashFailed": "Gagal meng-hash file di memori browser (file di atas beberapa ratus MB mungkin melebihi batas RAM).",
      "computing": "Menghitung checksum SHA-1, SHA-256, SHA-384, dan SHA-512 secara lokal...",
      "fileLabel": "File:",
      "sizeLabel": "Ukuran:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Diubah:",
      "bytesSuffix": "{n} byte",
      "downloadSha256": "Unduh .sha256",
      "sha256Label": "SHA-256 (Disarankan)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (Hanya untuk kompatibilitas lama)",
      "verifyLabel": "Verifikasi dengan Checksum yang Diharapkan",
      "expectedPlaceholder": "Tempel checksum SHA-256, SHA-512, SHA-384, atau SHA-1 yang dipublikasikan (atau baris .sha256sum)...",
      "verified": "Checksum Terverifikasi! File cocok persis dengan digest {algorithm} yang diharapkan.",
      "mismatch": "Checksum Tidak Cocok! Tidak ada digest yang dihitung yang cocok dengan nilai yang Anda harapkan."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Pilih Gambar untuk Dikompresi (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Diproses secara lokal melalui HTML5 Canvas · Tidak pernah diunggah ke server jarak jauh",
      "uploadImageError": "Unggah file gambar PNG, JPG, WebP, atau GIF.",
      "unableToDecode": "Tidak dapat mendecode \"{name}\".",
      "canvasUnavailable": "Konteks Canvas 2D tidak tersedia.",
      "compressionFailed": "Kompresi gagal di canvas browser.",
      "unableToCompress": "Tidak dapat mengompresi gambar.",
      "unableToRead": "Tidak dapat membaca \"{name}\".",
      "invalidImage": "File gambar tidak valid.",
      "outputFormatLabel": "Format Hasil",
      "webpOption": "WebP (Ukuran web modern terkecil)",
      "jpgOption": "JPG (Kompatibilitas terluas)",
      "pngOption": "PNG (Transparansi lossless)",
      "maxWidthLabel": "Batas Lebar Maks",
      "keepOriginalWidth": "Pertahankan Lebar Asli",
      "max1920": "Maks 1920 px (Full HD)",
      "max1280": "Maks 1280 px (Blog / Hero)",
      "max800": "Maks 800 px (Thumbnail)",
      "qualityLabel": "Kualitas: ",
      "losslessPng": "PNG Lossless",
      "originalLabel": "Asli",
      "compressedLabel": "Terkompresi",
      "changeLabel": "Perubahan",
      "outputSummary": "Hasil: {w} × {h} px · {ext}",
      "compressing": "Mengompresi...",
      "downloadExt": "Unduh .{ext}",
      "previewAlt": "Pratinjau gambar terkompresi"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Pilih Satu atau Beberapa Gambar untuk Dikonversi",
      "imagesLoaded": "{n} gambar dimuat — Klik untuk menambah atau mengganti",
      "batchNote": "Konversi batch PNG, JPG, WebP, SVG, atau GIF ke PNG, JPG, atau WebP secara lokal",
      "convertToLabel": "Konversi ke Format",
      "pngOption": "PNG (.png — mempertahankan transparansi)",
      "qualityLabel": "Kualitas Lossy: ",
      "lossless": "Lossless",
      "alphaFillLabel": "Isian Alpha",
      "converting": "Mengonversi...",
      "reconvert": "Konversi ulang",
      "selectFilesError": "Pilih satu atau beberapa file gambar (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "Tidak dapat mendecode \"{name}\".",
      "canvasUnavailable": "Canvas 2D tidak tersedia.",
      "conversionFailed": "Konversi gagal untuk \"{name}\".",
      "batchFailed": "Konversi gambar batch gagal.",
      "downloadExt": "Unduh .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Pilih Gambar untuk Diubah Ukuran atau Dipotong ke Dimensi Preset",
      "fileWithDims": "{name} (Asli: {w} × {h} px)",
      "supportsNote": "Mendukung pengubahan ukuran piksel, penguncian aspek, dan preset sosial yang dipotong di tengah",
      "selectImageError": "Pilih gambar PNG, JPG, WebP, atau GIF.",
      "unableToDecode": "Tidak dapat mendecode \"{name}\".",
      "unableToRead": "Tidak dapat membaca gambar.",
      "failedLoading": "Gagal memuat gambar untuk pengubahan ukuran.",
      "canvasUnavailable": "Canvas 2D tidak tersedia.",
      "failedGenerating": "Gagal membuat gambar yang diubah ukurannya.",
      "resizeFailed": "Pengubahan ukuran gagal.",
      "quickPresets": "Preset Cepat:",
      "presetOg": "OG Share (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Kotak (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Lebar (px)",
      "heightLabel": "Tinggi (px)",
      "fitModeLabel": "Mode Penyesuaian Aspek",
      "coverCropOption": "Potong Tengah Cover (Tanpa peregangan)",
      "exactOption": "Skala Dimensi Tepat",
      "outputFormatLabel": "Format Hasil",
      "lockAspect": "Kunci rasio aspek asli saat mengetik dimensi",
      "resizeButton": "Ubah Ukuran ke {w} × {h} px",
      "readySummary": "Siap: {w} × {h} px ({ext})",
      "downloadResized": "Unduh .{ext} yang Diubah Ukuran",
      "previewAlt": "Hasil gambar yang diubah ukurannya"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Pilih Gambar untuk Diputar, Dibalik, atau Difilter",
      "loadedReplace": "{name} (Klik untuk mengganti)",
      "previewNote": "Pratinjau HTML5 Canvas real-time & ekspor piksel",
      "selectImageError": "Pilih gambar PNG, JPG, WebP, atau GIF.",
      "failedLoading": "Gagal memuat \"{name}\".",
      "rotateLeft": "Putar 90° ke Kiri",
      "rotateRight": "Putar 90° ke Kanan",
      "flipHorizontal": "Balik Horizontal",
      "flipVertical": "Balik Vertikal",
      "brightnessLabel": "Kecerahan: ",
      "contrastLabel": "Kontras: ",
      "grayscaleLabel": "Hitam & Putih (Grayscale)",
      "resetAll": "Reset semua",
      "exportFormatLabel": "Format Ekspor",
      "livePreview": "Pratinjau Canvas Langsung"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Gambar → Data URI Base64",
      "decodeMode": "Base64 → Pratinjau Gambar",
      "selectImageError": "Pilih file gambar (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Tidak dapat membaca \"{name}\".",
      "chooseImage": "Pilih File Gambar untuk Di-encode",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Menghasilkan Data URI, Base64 mentah, cuplikan HTML <img>, dan latar CSS",
      "binarySizeLabel": "Ukuran File Biner",
      "base64SizeLabel": "Ukuran URI Base64 (~33% lebih besar)",
      "fullDataUriLabel": "Data URI Lengkap",
      "copyDataUri": "Salin Data URI",
      "copyRawBase64": "Salin Base64 Mentah",
      "copyImg": "Salin <img>",
      "copyCss": "Salin CSS",
      "encodedAria": "Data URI Base64 yang di-encode",
      "encodedAlt": "Pratinjau yang di-encode",
      "pasteLabel": "Tempel String Gambar Base64 atau Data URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... atau string base64 mentah",
      "invalidPayload": "Teks Base64 yang ditempel bukan payload gambar yang di-encode secara valid.",
      "decodedAlt": "Pratinjau Base64 yang didecode",
      "downloadExt": "Unduh .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Sangat Kuat",
        "strong": "Kuat",
        "moderate": "Sedang",
        "weak": "Lemah"
      },
      "randomPasswordMode": "Kata Sandi Acak",
      "passphraseMode": "Passphrase Diceware",
      "regenerate": "Buat Ulang",
      "passwordLengthLabel": "Panjang Kata Sandi: ",
      "charsSuffix": " karakter",
      "batchCountLabel": "Jumlah Batch: ",
      "uppercaseLabel": "Huruf besar (A–Z)",
      "lowercaseLabel": "Huruf kecil (a–z)",
      "numbersLabel": "Angka (0–9)",
      "symbolsLabel": "Simbol (!@#$%...)",
      "excludeAmbiguousLabel": "Kecualikan yang ambigu (0, O, 1, l, I)",
      "wordCountLabel": "Jumlah Kata: ",
      "wordSeparatorLabel": "Pemisah Kata",
      "hyphenOption": "Tanda hubung (-)",
      "underscoreOption": "Garis bawah (_)",
      "periodOption": "Titik (.)",
      "spaceOption": "Spasi ( )",
      "capitalizeWordsLabel": "Kapitalisasi Kata",
      "appendDigitLabel": "Tambahkan angka 2 digit",
      "selectGroupWarning": "Pilih setidaknya satu grup karakter untuk membuat kata sandi.",
      "entropyBits": "~{n} bit entropi",
      "poolSizeSuffix": " · ukuran pool {n}",
      "wordListSuffix": " · daftar {n} kata",
      "copyAll": "Salin Semua"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL Situs Web",
        "text": "Teks",
        "wifi": "Konfigurasi Wi-Fi",
        "vcard": "Kontak vCard",
        "email": "Alamat Email",
        "phone": "Nomor Telepon",
        "plainText": "Teks Biasa"
      },
      "liveCameraCapture": "Pengambilan Kamera Langsung",
      "scanMode": "Pindai / Decode Gambar QR",
      "vcardMode": "Pembuat QR Kontak vCard",
      "uploadQr": "Unggah Gambar Kode QR",
      "uploadQrNote": "Screenshot PNG, JPG, WebP, atau SVG · 100% sisi klien",
      "liveCameraTitle": "Pemindaian Kamera Perangkat Langsung",
      "liveCameraNote": "Hanya menggunakan feed kamera lokal saat izin diberikan",
      "startCamera": "Mulai Pemindai Kamera",
      "stopCamera": "Hentikan Kamera",
      "cameraHint": "Arahkan kamera Anda ke kode QR—pengambilan berhenti otomatis segera setelah ter-decode.",
      "uploadImageError": "Unggah gambar PNG, JPG, WebP, atau SVG yang berisi kode QR.",
      "unableToLoad": "Tidak dapat memuat \"{name}\".",
      "noQrDetected": "Tidak ada kode QR yang dapat dideteksi dalam gambar ini. Pastikan fokus tajam, margin zona tenang yang jelas, dan kontras tinggi.",
      "unableToScan": "Tidak dapat memindai gambar.",
      "cameraUnsupported": "Pemindaian kamera tidak didukung di lingkungan browser ini.",
      "cameraDenied": "Izin kamera ditolak atau tidak ada perangkat kamera yang tersedia. Unggah gambar kode QR sebagai gantinya.",
      "decodedPayload": "Payload yang Didecode · {kind}",
      "sourceLabel": "Sumber: ",
      "copyPayload": "Salin Payload",
      "decodedAria": "Teks QR yang didecode",
      "detectedLink": "Tautan web terdeteksi: ",
      "uploadedPreviewAlt": "Pratinjau kode QR yang diunggah",
      "firstNameLabel": "Nama Depan",
      "lastNameLabel": "Nama Belakang",
      "orgLabel": "Organisasi",
      "jobTitleLabel": "Jabatan",
      "defaultJobTitle": "Desainer Produk",
      "phoneLabel": "Nomor Telepon",
      "emailLabel": "Alamat Email",
      "websiteLabel": "URL Situs Web",
      "rawVcardLabel": "Payload vCard 3.0 Mentah",
      "copyVcard": "Salin vCard",
      "vcardQrAlt": "Kode QR vCard yang Dihasilkan",
      "downloadPng": "Unduh PNG",
      "downloadSvg": "Unduh SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Singkat",
          "ratio": "~10–20% panjang"
        },
        "medium": {
          "label": "Sedang",
          "ratio": "~30–40% panjang"
        },
        "detailed": {
          "label": "Panjang (Detail)",
          "ratio": "~50–60% panjang"
        }
      },
      "loadingLengthLabels": {
        "short": "singkat",
        "medium": "sedang",
        "detailed": "panjang"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Ringkasan Paragraf",
          "hint": "Prosa yang halus dan padu"
        },
        "bullets": {
          "label": "Ringkasan Poin",
          "hint": "Poin yang bersih dan mudah dipindai"
        },
        "key-points": {
          "label": "Ekstraksi Poin Kunci",
          "hint": "Poin-poin penting bernomor"
        },
        "simple": {
          "label": "Bahasa Sederhana",
          "hint": "Kata-kata sehari-hari yang sederhana"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "paragraf",
        "bullets": "poin",
        "key-points": "poin-poin kunci",
        "simple": "sederhana"
      },
      "languageLabels": {
        "Same as original language": "Bahasa yang sama dengan bahasa asli",
        "English (US)": "Bahasa Inggris (AS)",
        "English (UK)": "Bahasa Inggris (UK)",
        "Spanish": "Bahasa Spanyol",
        "French": "Bahasa Prancis",
        "German": "Bahasa Jerman",
        "Portuguese": "Bahasa Portugis",
        "Italian": "Bahasa Italia",
        "Dutch": "Bahasa Belanda",
        "Arabic": "Bahasa Arab",
        "Hindi": "Bahasa Hindi",
        "Urdu": "Bahasa Urdu",
        "Turkish": "Bahasa Turki",
        "Japanese": "Bahasa Jepang",
        "Korean": "Bahasa Korea",
        "Chinese (Simplified)": "Bahasa Mandarin (Sederhana)"
      },
      "sampleArticle": "Pada 2026, tim engineering produk yang tersebar semakin mengandalkan pembaruan tertulis asinkron daripada rapat status harian untuk melindungi waktu pengembangan dengan fokus mendalam. Dalam studi internal selama enam bulan terhadap 140 engineer yang bekerja di London, Berlin, dan Toronto, tim yang mengganti tiga panggilan sinkron mingguan dengan ringkasan tertulis terstruktur pada hari Selasa dan Kamis melaporkan pengurangan fragmentasi kalender sebesar 28% dan menyelesaikan milestone sprint 14% lebih cepat. Yang terpenting, studi ini menemukan bahwa pembaruan tertulis hanya berhasil ketika engineer mengikuti tiga aturan yang konsisten: menyatakan blocker konkret di bagian atas, menautkan langsung ke pull request atau ID issue, dan mencatat tanggal target yang tepat alih-alih frasa samar seperti \"segera\". Manajer tetap mengadakan satu sesi langsung mingguan selama 25 menit yang dikhususkan secara eksklusif untuk trade-off arsitektur terbuka dan check-in tim, menjaga hubungan interpersonal tanpa mengganggu blok coding.",
      "secUnit": "dtk",
      "minUnit": "mnt",
      "title": "Perangkum Teks AI Gratis",
      "noAccount": "Tanpa akun, kredit, atau login",
      "allowanceBefore": "Kuota gratis harian:",
      "allowanceAfter": "tersisa hari ini",
      "allowanceFallback": "Hingga 5 ringkasan gratis / hari",
      "backendTitle": "Kunci backend AI belum aktif di lingkungan ini.",
      "backendEnsureBefore": "Pastikan ",
      "backendEnsureAfter": " sudah dikonfigurasi untuk menjalankan ringkasan AI langsung.",
      "stepLength": "1. Panjang Ringkasan",
      "stepFormat": "2. Format Ringkasan",
      "stepLanguage": "3. Bahasa Hasil",
      "stepText": "4. Teks Sumber untuk Diringkas",
      "lengthAria": "Panjang ringkasan",
      "paste": "Tempel",
      "clipboardUnavailable": "Pembacaan clipboard browser tidak tersedia di sini—gunakan Ctrl/Cmd + V di dalam editor.",
      "clipboardEmpty": "Clipboard Anda saat ini tidak berisi teks apa pun.",
      "clipboardBlocked": "Izin clipboard diblokir—tempel langsung menggunakan Ctrl/Cmd + V.",
      "placeholder": "Tempel artikel, catatan penelitian, transkrip rapat, atau esai di sini (minimal 25 kata / 120 karakter, hingga 25.000 karakter)...",
      "word": "kata",
      "words": "kata",
      "chars": "karakter",
      "estRead": "Perkiraan waktu baca: ",
      "stop": "Berhenti",
      "summarizing": "Meringkas...",
      "summarizeButton": "Ringkas Teks",
      "addMoreBefore": "Tambahkan setidaknya ",
      "addMoreMiddle": " kata lagi (minimal ",
      "addMoreAnd": " kata dan ",
      "addMoreAfter": " karakter) agar AI dapat mengekstrak ringkasan yang bermakna.",
      "generatingSummary": "Membuat ringkasan {length} (format {format})...",
      "errorDailyLimit": "Batas Ringkasan Gratis Harian Tercapai",
      "errorRateLimited": "Harap Sedikit Lebih Lambat",
      "errorGlobal": "Kapasitas Harian Platform Tercapai",
      "errorGeneric": "Tidak Dapat Meringkas Saat Ini",
      "retry": "Coba Lagi",
      "emptyError": "Tempel atau ketik artikel, laporan, atau catatan sebelum meringkas.",
      "tooShortErrorBefore": "Teks Anda terlalu pendek untuk diringkas secara bermakna (",
      "tooShortErrorMiddle": " kata). Masukkan setidaknya ",
      "tooShortErrorAnd": " kata dan ",
      "tooShortErrorAfter": " karakter.",
      "overLimitBefore": "Input melebihi batas ",
      "overLimitMiddle": " karakter. Persingkat teks Anda sebanyak ",
      "overLimitAfter": " karakter lalu coba lagi.",
      "connectionError": "Masalah koneksi sementara saat meringkas. Silakan coba lagi.",
      "resultTitle": "Hasil Ringkasan",
      "shorterSuffix": "% lebih pendek",
      "copySummary": "Salin ringkasan",
      "downloadTxt": "Unduh TXT",
      "originalRead": "Bacaan Asli",
      "summaryRead": "Bacaan Ringkasan",
      "compressionSaved": "Kompresi & Waktu yang Dihemat",
      "savesPrefix": "menghemat ~",
      "tabCompare": "Asli vs. Ringkasan",
      "tabSummary": "Hanya Ringkasan",
      "resultAria": "Ringkasan yang dihasilkan dan perbandingan",
      "originalText": "Teks Asli",
      "summaryOutput": "Hasil Ringkasan",
      "summarizedWith": "Diringkas dengan model Groq tingkat gratis",
      "fallbackNote": " (fallback model otomatis)",
      "preservedNote": ". Nama kunci, tanggal, dan angka dipertahankan persis dari input Anda."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Perkecil gambar di bawah 100KB",
          "query": "Saya ingin memperkecil ukuran gambar saya menjadi 100KB.",
          "categoryId": "image-file"
        },
        {
          "label": "Ubah PDF menjadi gambar",
          "query": "Saya perlu mengubah PDF menjadi gambar.",
          "categoryId": "pdf"
        },
        {
          "label": "Hitung kata esai",
          "query": "Saya ingin menghitung kata dalam esai saya.",
          "categoryId": "text-writing"
        },
        {
          "label": "Buat kode QR",
          "query": "Saya perlu membuat kode QR.",
          "categoryId": "social-media"
        },
        {
          "label": "Ubah dimensi gambar",
          "query": "Saya ingin mengubah dimensi sebuah gambar.",
          "categoryId": "image-file"
        },
        {
          "label": "Perbaiki tata bahasa & tulis ulang email",
          "query": "Saya ingin AI memperbaiki kesalahan tata bahasa dan menulis ulang email secara profesional.",
          "categoryId": "text-writing"
        },
        {
          "label": "Ringkas artikel panjang",
          "query": "Saya perlu meringkas artikel panjang menjadi poin-poin kunci.",
          "categoryId": "text-writing"
        },
        {
          "label": "Cek PDF ke Word",
          "query": "Saya perlu mengubah PDF ke Word.",
          "categoryId": "all"
        }
      ],
      "title": "Pencari Alat Cerdas AI",
      "searchesLine": "Mencari di {count} alat UtilityFlow asli (85 browser + 3 AI)",
      "aiSearchesToday": "Pencarian AI hari ini:",
      "leftUnlimited": "tersisa · Pencarian lokal instan tanpa batas",
      "quotaFallback": "Hingga 10 pencarian AI gratis / hari · Pencarian lokal tanpa batas",
      "backendBefore": "Peringkat semantik AI membutuhkan ",
      "backendAfter": " di server, sementara pencarian kata kunci lokal instan di semua {count} alat langsung berfungsi.",
      "queryLabel": "Jelaskan apa yang ingin Anda lakukan (bahasa sederhana atau kata kunci)",
      "queryPlaceholder": "cth. \"Saya ingin memperkecil ukuran gambar saya menjadi 100KB\" atau \"ubah PDF menjadi PNG\"",
      "categoryLabel": "Kategori Tugas Opsional",
      "allCategories": "Semua Kategori ({count} alat)",
      "characters": "karakter",
      "findButton": "Cari Alat yang Cocok",
      "findingButton": "Mencari Alat Terbaik...",
      "tryTask": "Coba Tugas Nyata atau Pilih Pertanyaan Umum",
      "loadingLine": "Mencocokkan permintaan Anda dengan {count} alat UtilityFlow yang terverifikasi...",
      "errorTitle": "Peringkat Semantik AI Tidak Tersedia",
      "retryAi": "Coba Lagi AI",
      "describeError": "Jelaskan tugas atau masalah yang ingin Anda selesaikan (minimal 2 karakter).",
      "queryTooLongBefore": "Kueri melebihi ",
      "queryTooLongAfter": " karakter. Harap buat deskripsi Anda singkat.",
      "unexpectedFormat": "AI mengembalikan format yang tidak terduga. Kecocokan kata kunci cepat dari inventaris asli kami ditampilkan di bawah.",
      "contactError": "Masalah sementara saat menghubungi peringkat AI. Hasil pencarian kata kunci tetap aktif di bawah.",
      "bestTool": "Alat yang Paling Direkomendasikan",
      "noExact": "Saat Ini Tidak Ada Alat yang Cocok Persis",
      "noMatchFallback": "UtilityFlow saat ini tidak memiliki alat khusus yang secara langsung melakukan \"{query}\". Kami tidak pernah membuat alat atau tautan palsu.",
      "relevantAlt": "Alternatif yang Relevan",
      "relatedTools": "Alat Terkait yang Ada (Hanya Alur Kerja Sebagian)",
      "supportedPrefix": "Didukung: ",
      "openName": "Buka {name}",
      "matchedWith": "Dicocokkan di seluruh inventaris UtilityFlow yang terverifikasi menggunakan model Groq tingkat gratis",
      "fallbackNote": " (fallback otomatis)",
      "instantMatches": "Kecocokan Kata Kunci Instan ({count})",
      "matchedLocally": "Dicocokkan secara lokal dari {count} alat",
      "matchedPrefix": "Cocok: ",
      "suggestionsTitle": "Saran Cerdas",
      "suggestionsAll": "Di Berbagai Tugas Populer",
      "suggestionsCategory": "dalam Kategori yang Dipilih",
      "clickOpen": "Klik alat apa pun untuk membuka langsung",
      "openToolArrow": "Buka alat →",
      "recommendationsAria": "Rekomendasi alat AI",
      "instantAria": "Kecocokan kata kunci instan",
      "suggestionsAria": "Alat yang disarankan secara cerdas saat halaman dimuat"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Perbaiki Tata Bahasa",
          "hint": "Perbaiki tata bahasa & tanda baca"
        },
        "rewrite-text": {
          "label": "Tulis Ulang Teks",
          "hint": "Alur yang halus & frasa alami"
        },
        "improve-writing": {
          "label": "Tingkatkan Penulisan",
          "hint": "Perhalus kejelasan & pilihan kata"
        },
        "make-professional": {
          "label": "Jadikan Profesional",
          "hint": "Kejelasan tempat kerja & eksekutif"
        },
        "make-casual": {
          "label": "Jadikan Santai",
          "hint": "Nada santai sehari-hari"
        },
        "simplify-text": {
          "label": "Sederhanakan Teks",
          "hint": "Kalimat yang jelas dan mudah dibaca"
        },
        "expand-text": {
          "label": "Perluas Teks",
          "hint": "Tambahkan detail bermanfaat berdasarkan input"
        },
        "paraphrase": {
          "label": "Parafrase",
          "hint": "Kata-kata baru, makna sama"
        },
        "fix-spelling": {
          "label": "Perbaiki Ejaan",
          "hint": "Perbaiki typo & kapitalisasi saja"
        },
        "write-email": {
          "label": "Tulis Email",
          "hint": "Email terstruktur dengan baris subjek"
        }
      },
      "tones": {
        "professional": "Profesional",
        "friendly": "Ramah",
        "formal": "Formal",
        "casual": "Santai",
        "academic": "Akademis",
        "persuasive": "Persuasif",
        "simple": "Sederhana"
      },
      "languageLabels": {
        "English (US)": "Bahasa Inggris (AS)",
        "English (UK)": "Bahasa Inggris (UK)",
        "Spanish": "Bahasa Spanyol",
        "French": "Bahasa Prancis",
        "German": "Bahasa Jerman",
        "Portuguese": "Bahasa Portugis",
        "Italian": "Bahasa Italia",
        "Dutch": "Bahasa Belanda",
        "Arabic": "Bahasa Arab",
        "Hindi": "Bahasa Hindi",
        "Urdu": "Bahasa Urdu",
        "Turkish": "Bahasa Turki",
        "Japanese": "Bahasa Jepang",
        "Korean": "Bahasa Korea",
        "Chinese (Simplified)": "Bahasa Mandarin (Sederhana)",
        "Same as original language": "Bahasa yang sama dengan bahasa asli"
      },
      "samples": {
        "default": "Hai tim, saya mau menindaklanjuti rapat kemaren dan membagikan timeline update untuk peluncuran produk Q4 kita. Masih ada dua item yang perlu kita review sebelum jumat, jadi tolong kabari saya kalau ada blocker yang muncul.",
        "write-email": "perlu update klien Daniel tentang peluncuran aplikasi mobile. testing selesai hari ini, 2 bug UI kecil tersisa untuk diperbaiki besok pagi, siap untuk submission ke App Store pada Jumat sore. tanyakan apakah Senin pukul 10 pagi cocok untuk panggilan handoff.",
        "fix-spelling": "Kami sangat senang mengumunkan bahwa jendela maintenence kuartalan berjalan lancar tanpa downtime yang tidak direncanakan di semua server.",
        "expand-text": "Standup async jarak jauh menghemat waktu engineering dan memungkinkan rekan tim global fokus secara mendalam tanpa gangguan kalender yang terus-menerus."
      },
      "title": "Asisten Penulisan AI Gratis",
      "noLogin": "Tanpa login atau kartu",
      "allowanceBefore": "Kuota gratis harian:",
      "allowanceAfter": "tersisa hari ini",
      "allowanceFallback": "Hingga 5 permintaan gratis / hari",
      "backendTitle": "Kunci backend AI belum aktif di lingkungan ini.",
      "backendSet": "Atur",
      "backendRest": " di server atau Worker untuk mengaktifkan pembuatan penulisan AI langsung.",
      "stepTask": "1. Pilih Tugas Penulisan (10 Mode)",
      "stepTone": "2. Nada",
      "stepLanguage": "3. Bahasa Hasil",
      "stepText": "4. Teks Asli Anda",
      "taskSelectorAria": "Pemilih tugas penulisan",
      "placeholder": "Ketik atau tempel paragraf, pesan, catatan, atau draf email Anda di sini (hingga 12.000 karakter)...",
      "word": "kata",
      "words": "kata",
      "characters": "karakter",
      "chars": "karakter",
      "tip": "Tips: Tekan Ctrl + Enter untuk membuat",
      "stop": "Berhenti",
      "generating": "Membuat...",
      "applying": "Menerapkan",
      "tonePhrase": "nada {tone}",
      "applyingIn": "dalam",
      "errorDailyLimit": "Batas Gratis Harian Tercapai",
      "errorRateLimited": "Harap Sedikit Lebih Lambat",
      "errorGlobal": "Kapasitas Harian Platform Tercapai",
      "errorGeneric": "Tidak Dapat Menyelesaikan Permintaan Penulisan",
      "retry": "Coba Lagi",
      "emptyError": "Masukkan atau tempel teks sebelum mengklik Buat.",
      "overLimitBefore": "Input melebihi batas ",
      "overLimitMiddle": " karakter. Persingkat draf Anda sebanyak ",
      "overLimitAfter": " karakter lalu coba lagi.",
      "connectionError": "Masalah koneksi sementara saat membuat. Silakan coba lagi.",
      "resultTitle": "Hasil yang Ditingkatkan",
      "copyResult": "Salin hasil",
      "downloadTxt": "Unduh TXT",
      "editOutput": "Edit hasil lebih lanjut",
      "tabCompare": "Asli vs. Ditingkatkan",
      "tabDiff": "Sorot Perubahan",
      "tabResult": "Hanya Hasil",
      "resultAria": "Hasil penulisan yang ditingkatkan dan perbandingan",
      "originalText": "Teks Asli",
      "improvedText": "Teks yang Ditingkatkan",
      "removed": "Dihapus",
      "added": "Ditambahkan / Diperbarui",
      "processedWith": "Diproses dengan model Groq tingkat gratis",
      "fallbackNote": " (fallback model otomatis)",
      "reviewNote": ". Selalu tinjau teks akhir sebelum mengirim."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Tag Canonical & Hreflang",
      "redirectsMode": "Generator Aturan Redirect 301",
      "canonicalLabel": "URL Kanonis yang Merujuk ke Diri Sendiri",
      "alternatesLabel": "Alternatif Bahasa & Wilayah",
      "addLocale": "Tambah Lokal",
      "langCodeAria": "Kode bahasa",
      "alternateUrlAria": "URL alternatif",
      "removeLocaleAria": "Hapus baris lokal",
      "htmlTagsLabel": "Tag Tautan HTML <head>",
      "copyHtml": "Salin HTML",
      "xmlSnippetLabel": "Cuplikan <xhtml:link> Sitemap XML",
      "copyXml": "Salin XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (blok server)",
      "copyRules": "Salin {n} Aturan",
      "pairsLabel": "Pasangan Sumber → Tujuan (dipisahkan koma, tab, atau “ -> ”)",
      "generatedConfigLabel": "Konfigurasi Redirect 301 yang Dihasilkan",
      "skippedInvalid": "{n} baris dilewati karena tidak ada target tujuan."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "SEO teknis dimulai dengan URL yang bersih dan dapat dirayapi, tag canonical yang akurat, dan sitemap XML terstruktur. Ketika penerbit menulis konten bermanfaat yang berfokus pada maksud pengguna daripada isian kata kunci, mesin pencari memahami kedalaman topik secara alami. Audit judul, deskripsi meta, dan tautan internal Anda secara berkala.",
      "defaultTargetKeyword": "seo teknis",
      "guidanceTitle": "Panduan Editorial:",
      "guidanceBody": "Mesin pencari modern tidak memberi imbalan karena mencapai kuota kepadatan kata kunci yang tetap. Gunakan audit distribusi ini untuk menemukan pengulangan yang tidak disengaja atau memastikan konsep utama muncul jelas dalam teks Anda.",
      "targetLabel": "Kata Kunci / Frasa Target (Opsional)",
      "targetPlaceholder": "cth. seo teknis",
      "phraseLengthLabel": "Panjang Frasa",
      "oneWord": "1 Kata",
      "twoWord": "Frasa 2 Kata",
      "threeWord": "Frasa 3 Kata",
      "stripHtml": "Hapus tag HTML",
      "ignoreStopWords": "Abaikan kata henti",
      "textLabel": "Draf Artikel atau Teks HTML yang Ditempel",
      "totalWords": "Total Kata",
      "uniqueVocabulary": "Kosakata Unik",
      "readingTime": "Perk. Waktu Baca",
      "targetPrefix": "Target: ",
      "hits": "{n} kemunculan ({d}%)",
      "rankHeader": "Peringkat",
      "termHeader": "Istilah / N-gram",
      "occurrencesHeader": "Kemunculan",
      "shareHeader": "Bagian (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Alat Utilitas Online Cepat Berbasis Browser",
      "defaultDescription": "Jelajahi 85 alat browser cepat yang mengutamakan privasi untuk pengeditan teks, encoding developer, kalkulator keuangan, alur kerja PDF, dan SEO.",
      "pageTitleLabel": "Judul Halaman (<title> / og:title)",
      "titleChars": "{n} karakter (ideal 30–60)",
      "metaDescriptionLabel": "Deskripsi Meta",
      "descChars": "{n} karakter (ideal 120–160)",
      "canonicalUrlLabel": "URL Kanonis",
      "ogImageLabel": "URL Gambar Open Graph (disarankan 1200×630)",
      "siteNameLabel": "Nama Situs (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Kartu Twitter",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Direktif follow robots",
      "includeViewportLabel": "Sertakan tag charset & viewport",
      "generatedTagsLabel": "Tag HTML <head> yang Dihasilkan",
      "copyHtml": "Salin HTML",
      "downloadHtml": "Unduh .html",
      "socialPreviewLabel": "Pratinjau Kartu Berbagi Sosial",
      "socialPreviewFallback": "Pratinjau Berbagi Sosial",
      "untitledPage": "Halaman Tanpa Judul",
      "metaSnippetFallback": "Cuplikan deskripsi meta muncul di sini."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Audit Sumber HTML Sisi Klien:",
      "auditBody": "Browser memblokir scraping lintas origin (CORS) dari situs pihak ketiga mana pun dan tidak memiliki akses ke analitik pencarian pribadi. Tempel sumber HTML halaman Anda di bawah (Lihat Sumber Halaman) untuk mengaudit tag DOM secara lokal.",
      "pastedHtmlLabel": "Sumber HTML yang Ditempel",
      "loadSampleHtml": "Muat contoh HTML",
      "htmlPlaceholder": "Tempel sumber <html>...</html> mentah di sini...",
      "scoreLabel": "Skor Audit DOM",
      "checksPassed": "{passed} / {total} pemeriksaan lolos",
      "linksSummary": "Tautan: {total} ({internal} int / {external} ext)",
      "robotsMetaLabel": "Meta robots: ",
      "robotsDefault": "Default (index, follow)",
      "headingOutline": "Kerangka Heading (H1–H4)",
      "emptyState": "Tempel sumber HTML di sebelah kiri untuk memeriksa judul, deskripsi, heading, canonical, dan tag alt.",
      "checkTitle": "Tag Judul (<title>)",
      "checkMetaDesc": "Deskripsi Meta",
      "checkH1": "Tepat Satu Judul <h1>",
      "checkCanonical": "URL Kanonis (<link rel=\"canonical\">)",
      "checkAlt": "Atribut Alt Gambar",
      "checkOgJsonLd": "Open Graph & Data Terstruktur JSON-LD",
      "titleDetail": "{n} karakter: \"{title}\"",
      "titleMissing": "Tidak ada tag <title> dalam <head>.",
      "descDetail": "{n} karakter (target 120–160).",
      "descMissing": "Tidak ada <meta name=\"description\">.",
      "h1Detail": "Ditemukan {n} elemen <h1>.",
      "canonicalMissing": "Tidak ada tag canonical yang dideklarasikan.",
      "noImages": "Tidak ada elemen <img> dalam markup.",
      "altDetail": "{with}/{total} gambar menyertakan teks alt deskriptif.",
      "ogDetail": "og:title {presence} · {n} blok JSON-LD.",
      "present": "ada",
      "missing": "tidak ada"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Direktif Pengindeksan",
      "indexOption": "index (Izinkan pengindeksan pencarian)",
      "noindexOption": "noindex (Kecualikan dari SERP)",
      "linkCrawlingLabel": "Perayapan Tautan",
      "followOption": "follow (Teruskan sinyal tautan)",
      "nofollowOption": "nofollow (Jangan ikuti tautan)",
      "largeOption": "large (Temukan yang memenuhi syarat)",
      "htmlTagLabel": "Tag Meta HTML <head>",
      "copyHtmlTag": "Salin Tag HTML",
      "httpHeaderLabel": "Header Respons HTTP (PDF / Non-HTML)",
      "copyHeader": "Salin Header",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Pola path _headers Cloudflare",
      "copyBlock": "Salin Blok"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Template Awal:",
      "allowAll": "Izinkan Semua Crawler",
      "standardWebApp": "Aplikasi Web / SaaS Standar",
      "wordpressClean": "WordPress Bersih",
      "stagingBlockAll": "Staging (Blokir Semua)",
      "crawlerRules": "Aturan Path Crawler",
      "addRule": "Tambah Aturan",
      "directiveAria": "Direktif",
      "pathAria": "Path",
      "deleteRuleAria": "Hapus aturan",
      "crawlDelayLabel": "Crawl-delay (detik, opsional)",
      "crawlDelayPlaceholder": "Tidak ada",
      "sitemapUrlsLabel": "URL Sitemap (satu per baris)",
      "generatedLabel": "robots.txt yang Dihasilkan"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Cara Membangun Utilitas Browser yang Cepat",
      "defaultFaqQ1": "Apakah UtilityFlow menjalankan alat secara lokal di browser?",
      "defaultFaqA1": "Ya. Hampir semua utilitas berjalan langsung di dalam memori browser tanpa mengirim input ke server eksternal.",
      "defaultFaqQ2": "Apakah JSON-LD terstruktur membantu SEO?",
      "defaultFaqA2": "Ya. JSON-LD Schema.org yang valid memperjelas konteks entitas bagi crawler pencarian dan kelayakan hasil kaya.",
      "defaultProductName": "Keyboard Mekanik Ergonomis Pro",
      "defaultProductDesc": "Keyboard nirkabel low-profile yang dirancang untuk developer perangkat lunak.",
      "defaultCrumbHome": "Beranda",
      "defaultCrumbSeo": "Alat SEO",
      "defaultCrumbSchema": "Generator Markup Schema",
      "headlineLabel": "Judul",
      "authorNameLabel": "Nama Penulis",
      "publisherNameLabel": "Nama Penerbit",
      "datePublishedLabel": "Tanggal Terbit",
      "articleUrlLabel": "URL Artikel",
      "featuredImageLabel": "URL Gambar Unggulan",
      "questionLabel": "Pertanyaan #{n}",
      "removeQuestionAria": "Hapus pertanyaan {n}",
      "questionPlaceholder": "Pertanyaan",
      "acceptedAnswerPlaceholder": "Jawaban yang diterima",
      "addFaqRow": "Tambah Baris FAQ",
      "productNameLabel": "Nama Produk",
      "descriptionLabel": "Deskripsi",
      "priceLabel": "Harga",
      "currencyLabel": "Mata Uang",
      "availabilityLabel": "Ketersediaan",
      "orgNameLabel": "Nama Organisasi",
      "websiteUrlLabel": "URL Situs Web",
      "logoUrlLabel": "URL Logo",
      "breadcrumbLabelAria": "Label breadcrumb {n}",
      "breadcrumbUrlAria": "URL breadcrumb {n}",
      "labelPlaceholder": "Label",
      "addLevel": "Tambah Level",
      "jsonLdOutputLabel": "Hasil <script> JSON-LD",
      "copyScriptTag": "Salin Tag Script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "JSON Formatter & Validator – Pretty Print & Minify | UtilityFlow",
      "defaultDescription": "Format, validasi, minifikasi, dan urutkan kunci dalam payload JSON secara instan di browser Anda dengan detail kesalahan sintaks baris/kolom.",
      "desktopSerp": "SERP Desktop (~580px judul)",
      "mobileSerp": "SERP Seluler (~120 karakter deskripsi)",
      "copyTitleMeta": "Salin Judul & Meta",
      "seoTitleLabel": "Judul SEO",
      "titleMetrics": "{chars} karakter · ~{px} px / maks 580 px",
      "metaDescriptionLabel": "Deskripsi Meta",
      "descMetrics": "{chars} karakter · ~{px} px",
      "pageUrlLabel": "URL Halaman (untuk pratinjau breadcrumb)",
      "siteNameLabel": "Nama Situs",
      "boldKeywordLabel": "Kata Kunci Tebal",
      "optionalPlaceholder": "Opsional",
      "datePrefixLabel": "Awalan Tanggal",
      "datePlaceholder": "cth. 12 Nov 2025",
      "desktopSimulation": "Simulasi Cuplikan Pencarian Desktop",
      "mobileSimulation": "Simulasi Cuplikan Pencarian Seluler",
      "titleFallback": "Judul SEO Anda Muncul di Sini",
      "descFallback": "Pratinjau deskripsi meta Anda muncul di sini."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Cara Membuat Slug URL yang Bersih untuk SEO Teknis!\n10 Alat Café & Produktivitas Terbaik di 2026\nChecklist Lengkap XML Sitemap & Robots.txt",
      "domainLabel": "Domain Dasar / Subfolder (untuk pratinjau URL lengkap)",
      "separatorLabel": "Pemisah Kata",
      "hyphenOption": "Tanda hubung (-) — Direkomendasikan Google",
      "underscoreOption": "Garis bawah (_)",
      "maxLengthLabel": "Panjang Slug Maks ({n} karakter)",
      "stripStopWords": "Hapus kata henti opsional Bahasa Inggris (a, the, and, of, in, to)",
      "trailingSlash": "Sertakan garis miring di akhir (/)",
      "titlesLabel": "Judul / Judul Halaman (Satu per baris untuk pembuatan batch)",
      "generatedLabel": "Slug SEO yang Dihasilkan ({n})",
      "copyAllSlugs": "Salin Semua Slug",
      "copyAllUrls": "Salin Semua URL Lengkap",
      "originalTitleHeader": "Judul Asli",
      "slugUrlHeader": "Slug SEO & URL Lengkap",
      "copyHeader": "Salin"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Tanggal <lastmod> (Opsional)",
      "changefreqLabel": "Petunjuk <changefreq>",
      "priorityLabel": "<priority> Default",
      "omitTag": "Hilangkan tag",
      "deduplicateLabel": "Deduplikasi URL yang persis sama",
      "urlsLabel": "URL Kanonis (Satu URL https:// lengkap per baris)",
      "skippedInvalid": "{n} baris URL tidak valid dilewati: ",
      "generatedLabel": "sitemap.xml yang dihasilkan ({n} URL)",
      "copyXml": "Salin XML",
      "downloadXml": "Unduh .xml",
      "generatedAria": "Sitemap XML yang dihasilkan"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Membangun alat browser cepat untuk kreator & tim.   \n\nRilis alur kerja mingguan baru setiap Selasa.\n\nCoba utilitas gratis di tautan di bawah!",
      "modeBraille": "Spacer Tak Terlihat (⠀ U+2800)",
      "modeDot": "Spacer Titik Minimal (.)",
      "modeClean": "Hanya Spasi di Akhir yang Bersih",
      "collapse": "Gabungkan spasi ganda yang tidak disengaja",
      "labelRaw": "Draf Caption atau Bio",
      "phRaw": "Tulis caption Anda dengan baris kosong di tempat Anda menginginkan jeda paragraf...",
      "tip": "Tips: Aplikasi sosial sering menggabungkan paragraf kosong saat spasi di akhir berada di akhir baris di atasnya.",
      "labelOut": "Hasil Siap Tempel",
      "copyFormatted": "Salin Caption yang Diformat",
      "charsLabel": "Karakter:",
      "linesLabel": "Baris:",
      "blankLabel": "Jeda kosong yang dipertahankan:",
      "fitsBio": "Cocok untuk bio Instagram 150 karakter",
      "captionLength": "Panjang caption (>batas bio 150)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Masalah → Agitasi → Solusi (PAS)",
        "tutorial": "Rincian 3 Langkah yang Dapat Ditindaklanjuti",
        "bab": "Sebelum → Sesudah → Jembatan",
        "checklist": "Checklist Peluncuran / Audit",
        "myth": "Mitos Umum vs. Realitas Praktis"
      },
      "frameworkDescriptions": {
        "pas": "Menonjolkan titik masalah konkret sebelum memberikan perbaikan alur kerja Anda.",
        "tutorial": "Struktur cara bernomor yang cocok untuk carousel dan simpanan LinkedIn.",
        "bab": "Membandingkan gesekan lama dengan hasil yang disederhanakan.",
        "checklist": "Daftar verifikasi berkejelasan tinggi yang dapat disimpan kreator.",
        "myth": "Menantang saran usang dengan alternatif langsung dan ringkas."
      },
      "frameworkLabels": {
        "fixesHeading": "Yang benar-benar memperbaikinya:",
        "beforeLabel": "Sebelum: ",
        "afterLabel": "Setelah: ",
        "bridgeHeading": "Jembatannya:",
        "mythLabel": "Mitos umum: ",
        "worksHeading": "Yang berhasil dalam praktik:"
      },
      "sampleHook": "Berhenti membuang waktu berjam-jam memformat tautan kampanye dengan tangan.",
      "sampleContext": "Parameter UTM yang tidak konsisten dan spasi bio yang rusak diam-diam mendistorsi laporan analitik.",
      "samplePoints": "Standarkan tag utm_source dan utm_medium huruf kecil\nValidasi lipatan karakter sebelum menerbitkan\nPertahankan jeda paragraf yang bersih tanpa spasi di akhir",
      "sampleCta": "Simpan checklist ini untuk peluncuran produk Anda berikutnya.",
      "infoTitle": "Perakitan Template Deterministik:",
      "infoBody": "Alat ini menggunakan kerangka copywriting terstruktur langsung di browser Anda—tidak ada model AI atau API eksternal yang digunakan atau dimaksud.",
      "labelHook": "Hook Pembuka (1–2 baris pertama)",
      "labelContext": "Konteks / Pernyataan Masalah",
      "labelPoints": "Poin Penting (Satu poin per baris)",
      "labelCta": "Ajakan Bertindak (CTA)",
      "labelTags": "Hashtag",
      "previewTitle": "Pratinjau Caption yang Diformat",
      "copyCaption": "Salin Caption",
      "charsLabel": "Karakter:",
      "wordsLabel": "Kata:",
      "fits": "Cocok",
      "threadNeeded": "Perlu thread",
      "tooLong": "Terlalu panjang"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Huruf Pemformatan & Aksesibilitas",
      "optCamel": "PascalCase (#CamelCase — Ramah pembaca layar)",
      "optLower": "semua huruf kecil (#lowercase)",
      "optPreserve": "Pertahankan Huruf Asli",
      "outLabel": "Tata Letak Hasil",
      "optInline": "Satu Baris (dipisahkan spasi)",
      "optNewline": "Satu Hashtag Per Baris",
      "optDots": "Pemisah Lipatan Caption (.\\n.\\n.)",
      "dedupe": "Hapus hashtag duplikat",
      "labelRaw": "Kata Kunci atau Hashtag Berantakan (dipisahkan koma, spasi, atau baris)",
      "labelResult": "Grup Hashtag Bersih",
      "copyHashtags": "Salin Hashtag",
      "statClean": "Hashtag Bersih",
      "statDupes": "Duplikat Dihapus",
      "statIgMax": "Maks Instagram (30)",
      "statWithin": "Dalam batas 30 IG",
      "statExceeds": "Melebihi batas 30 tag",
      "statChars": "Karakter Hasil"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 karakter · huruf, angka, garis bawah",
        "instagram": "1–30 karakter · huruf, angka, titik, garis bawah",
        "tiktok": "2–24 karakter · huruf, angka, garis bawah, titik",
        "youtube": "3–30 karakter · huruf, angka, _, -, .",
        "threads": "1–30 karakter · namespace Instagram bersama",
        "github": "1–39 karakter · alfanumerik dan tanda hubung tunggal"
      },
      "infoTitle": "Validator Aturan & Tautan Pemeriksaan Langsung:",
      "infoBodyBefore": "Memvalidasi sintaks handle dan batas karakter secara offline tanpa menebak ketersediaan. Klik tautan ",
      "infoEm": "Buka URL Profil",
      "infoBodyAfter": " untuk memverifikasi status klaim langsung.",
      "labelBrand": "Nama Merek, Proyek, atau Kreator",
      "phBrand": "cth. Utility Hub",
      "labelActive": "Handle Aktif untuk Divalidasi",
      "copyAt": "Salin @",
      "variationsTitle": "Variasi Handle yang Konsisten:",
      "thPlatform": "Platform",
      "thRules": "Aturan Format",
      "thStatus": "Status Sintaks",
      "thCheck": "Pemeriksaan Manual",
      "valid": "Format valid",
      "invalid": "Sintaks/panjang tidak valid",
      "checkUrl": "Periksa URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Tebal (Sans-Serif)",
        "sans-italic": "Miring (Sans-Serif)",
        "sans-bold-italic": "Tebal Miring (Sans-Serif)",
        "serif-bold": "Tebal (Serif)",
        "monospace": "Monospace",
        "double-struck": "Double-Struck (Papan Tulis)",
        "script-bold": "Script Tebal",
        "fraktur-bold": "Fraktur Tebal",
        "small-caps": "Kapitel Kecil",
        "fullwidth": "Estetika Lebar Penuh"
      },
      "styleNotes": {
        "sans-bold": "Keterbacaan tinggi untuk header bio & hook postingan",
        "sans-italic": "Penekanan halus di dalam caption",
        "sans-bold-italic": "Callout kuat & pemisah bagian",
        "serif-bold": "Penekanan gaya editorial",
        "monospace": "Handle kode, tanggal & tag teknis",
        "double-struck": "Aksen tampilan",
        "script-bold": "Tanda tangan bio dekoratif",
        "fraktur-bold": "Huruf tampilan Gotik",
        "small-caps": "Label profil tampilan huruf besar yang bersih",
        "fullwidth": "Header sosial retro berjarak lebar"
      },
      "sampleText": "Toolkit Kreator Baru 2025",
      "accessibilityTitle": "Catatan Aksesibilitas:",
      "accessibilityBody": "Karakter Unicode bergaya termasuk dalam blok simbol matematika, jadi pembaca layar mungkin membacanya huruf demi huruf atau melewatkannya, dan beberapa indeks pencarian mengabaikannya. Gunakan secukupnya untuk sorotan singkat, bukan paragraf penuh.",
      "labelInput": "Teks untuk Dibuat Gaya",
      "placeholder": "Ketik judul singkat, baris bio, atau CTA...",
      "previewEmpty": "Pratinjau"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Bio Instagram",
        "linkedinPost": "Postingan LinkedIn",
        "newsletter": "Newsletter",
        "youtubeDescription": "Deskripsi YouTube"
      },
      "presetsLabel": "Preset Channel Cepat:",
      "errorEmpty": "Masukkan URL situs web tujuan.",
      "errorInvalid": "Masukkan URL tujuan yang valid (misalnya https://example.com/landing).",
      "labelUrl": "URL Tujuan Situs Web *",
      "labelSource": "Sumber Kampanye (utm_source) *",
      "phSource": "cth. instagram, newsletter, google",
      "labelMedium": "Medium Kampanye (utm_medium) *",
      "phMedium": "cth. social, cpc, email, video",
      "labelCampaign": "Nama Kampanye (utm_campaign)",
      "phCampaign": "cth. spring_launch",
      "labelContent": "Konten Kampanye (utm_content)",
      "phContent": "cth. hero_banner, bio_button",
      "labelTerm": "Istilah Kampanye (utm_term)",
      "phTerm": "Kata kunci berbayar opsional atau tag audiens",
      "normalizeLabel": "Paksa huruf kecil & ubah spasi menjadi garis bawah (`_`)",
      "generatedTitle": "URL Kampanye yang Dihasilkan",
      "copyUtm": "Salin URL UTM",
      "thParam": "Parameter Kueri",
      "thValue": "Nilai yang Dinormalisasi"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'Nomor halaman awal harus bilangan bulat 1 atau lebih.',
      stampedSuccess: (n: number, size: string) => `Nomor halaman dicap pada ${n} halaman (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Halaman ${cur} dari ${total}`,
      dropTitleEmpty: 'Pilih File PDF untuk Menambah Nomor Halaman',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
      dropSub: 'Menyisipkan label halaman vektor yang tajam di seluruh laporan, kontrak, dan paket',
      labelPos: 'Posisi',
      optBottomCenter: 'Tengah Bawah',
      optBottomRight: 'Kanan Bawah',
      optBottomLeft: 'Kiri Bawah',
      optTopRight: 'Kanan Atas',
      labelFmt: 'Format Label',
      optPageOf: 'Halaman 1 dari N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Nomor Awal',
      labelSize: 'Ukuran Font (pt)',
      opt9: '9 pt (Halus)',
      opt11: '11 pt (Standar)',
      opt14: '14 pt (Besar)',
      skipCover: 'Lewati halaman sampul (mulai penomoran pada halaman 2)',
      numbering: 'Menomori Halaman...',
      addBtn: 'Tambah Nomor Halaman & Unduh',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Tidak dapat mendecode gambar "${name}".`,
      errCanvas: 'Konteks Canvas 2D tidak tersedia.',
      errConvert: (name: string) => `Gagal mengonversi "${name}" ke PNG.`,
      errNotImage: (name: string) => `"${name}" bukan file gambar yang didukung (PNG, JPG, WebP).`,
      errRead: (name: string) => `Tidak dapat membaca "${name}".`,
      errLoad: 'Tidak dapat memuat gambar.',
      errEmpty: 'Tambahkan setidaknya satu gambar terlebih dahulu.',
      errBuild: 'Gagal mengonversi gambar ke PDF.',
      createdSuccess: (n: number, size: string) => `PDF ${n} halaman (${size}) berhasil dibuat dengan bersih.`,
      dropTitle: 'Pilih Gambar PNG, JPG, atau WebP',
      dropSub: 'Konversi screenshot, pindaian, atau foto menjadi satu PDF secara lokal',
      labelSize: 'Ukuran Halaman PDF',
      optA4: 'A4 Potret (210 × 297 mm)',
      optLetter: 'US Letter (8,5 × 11 in)',
      optFit: 'Dimensi Gambar Tepat',
      labelMargin: 'Margin Halaman',
      optMargin0: 'Tanpa Margin (0 pt)',
      optMargin24: 'Margin Standar (24 pt)',
      optMargin48: 'Margin Lebar (48 pt)',
      labelOut: 'Nama File Hasil',
      moveUp: (name: string) => `Pindahkan ${name} ke atas`,
      moveDown: (name: string) => `Pindahkan ${name} ke bawah`,
      removeFile: (name: string) => `Hapus ${name}`,
      building: 'Membuat PDF...',
      convertBtn: (n: number) => `Konversi ${n} Gambar ke PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Tidak dapat membaca file PDF yang dipilih.',
      errMin2: 'Tambahkan setidaknya dua file PDF untuk digabungkan.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDF (${pages} halaman, ${size}) berhasil digabungkan dengan bersih.`,
      dropValidating: 'Memvalidasi file PDF...',
      dropTitle: 'Pilih atau Seret Beberapa File PDF',
      dropSub: 'Penggabungan 100% sisi browser via pdf-lib · Hanya PDF tanpa enkripsi · Tidak pernah diunggah',
      filesQueued: 'file dalam antrean',
      totalPagesLabel: 'total halaman',
      combinedSize: 'ukuran input gabungan',
      clearQueue: 'Bersihkan antrean',
      pageSingular: 'halaman',
      pagePlural: 'halaman',
      moveUp: (name: string) => `Pindahkan ${name} ke atas`,
      moveDown: (name: string) => `Pindahkan ${name} ke bawah`,
      removeFile: (name: string) => `Hapus ${name}`,
      outName: 'Nama File Hasil',
      merging: 'Menggabungkan PDF...',
      mergeBtn: (n: number) => `Gabungkan ${n} PDF & Unduh`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Bidang metadata yang dapat diedit dibersihkan. Klik Simpan & Unduh PDF untuk menerapkan.',
      savedSuccess: (size: string) => `Metadata PDF yang diperbarui disimpan (${size}).`,
      dropTitleEmpty: 'Pilih File PDF untuk Memeriksa atau Mengedit Metadata',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} halaman · ${size})`,
      dropSub: 'Periksa properti dokumen, bersihkan tag penulis/perangkat lunak, atau atur judul SEO yang bersih',
      labelTitle: 'Judul Dokumen',
      labelAuthor: 'Penulis',
      labelSubject: 'Subjek / Ringkasan',
      labelKeywords: 'Kata Kunci (dipisahkan koma)',
      labelCreator: 'Aplikasi Pembuat',
      labelProducer: 'Produsen PDF',
      saving: 'Menyimpan PDF...',
      saveBtn: 'Simpan Metadata & Unduh PDF',
      stripBtn: 'Hapus Semua Bidang Metadata',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Tidak ditemukan halaman yang cocok untuk diputar.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${a} dari ${b} halaman diputar ${deg}° searah jarum jam (${size}).`,
      dropTitleEmpty: 'Pilih File PDF untuk Memutar Halaman',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
      dropSub: 'Putar semua halaman atau rentang halaman tertentu secara lokal tanpa unggahan server',
      labelAngle: 'Sudut Rotasi',
      opt90: '90° Searah Jarum Jam (Kanan)',
      opt270: '90° Berlawanan Arah Jarum Jam (Kiri / 270°)',
      opt180: '180° Terbalik',
      labelScope: 'Terapkan Ke',
      optAll: (n: number) => `Semua Halaman (${n})`,
      optRange: 'Rentang Halaman Tertentu',
      optOdd: 'Hanya Halaman Ganjil',
      optEven: 'Hanya Halaman Genap',
      labelRangeInput: (n: number) => `Nomor / Rentang Halaman (1–${n})`,
      phRange: 'cth. 1, 3-5',
      rotating: 'Memutar Halaman...',
      rotateBtn: 'Terapkan Rotasi & Unduh PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Halaman ${n} ---`,
      dropExtracting: 'Mengekstrak lapisan teks PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
      dropTitleEmpty: 'Pilih PDF Berbasis Teks untuk Mengekstrak Teks',
      dropSub: 'Mengekstrak teks Unicode yang tertanam secara lokal via PDF.js · Tanpa unggahan server',
      noTextTitle: 'Tidak Ditemukan Lapisan Teks yang Dapat Dipilih:',
      noTextBody:
        'PDF ini tampaknya berisi gambar hasil pindaian atau jalur vektor bergaris, bukan lapisan teks yang tertanam. Pengenalan karakter optik (OCR) sisi klien tidak dilakukan secara offline.',
      markersLabelBefore: 'Sertakan penanda header halaman (',
      markersCode: '--- Halaman N ---',
      markersLabelAfter: ')',
      copyText: 'Salin Teks',
      downloadTxt: 'Unduh .txt',
      outputAria: 'Hasil teks PDF yang diekstrak',
      pagesScanned: 'Halaman yang dipindai:',
      wordsExtracted: 'Kata yang diekstrak:',
      textSize: 'Ukuran teks:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Render hingga 20 halaman per batch agar memori canvas browser tetap cepat dan responsif.',
      errCanvas: 'Konteks Canvas 2D tidak tersedia.',
      dropTitleEmpty: 'Pilih PDF untuk Dirender sebagai Gambar',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} halaman · ${size})`,
      dropSub: 'Dirender secara lokal via canvas PDF.js · Hasil PNG atau JPG',
      labelRange: 'Halaman (“semua” atau rentang seperti 1-4, 6)',
      labelFormat: 'Format Gambar',
      optPng: 'PNG (Lossless / Teks Tajam)',
      optJpg: 'JPG (Ringkas Ramah Foto)',
      labelScale: 'Resolusi Render',
      optScale1: '1,0× (Pratinjau Cepat 72 DPI)',
      optScale15: '1,5× (Standar 108 DPI)',
      optScale2: '2,0× (Tajam 144 DPI)',
      rendering: 'Merender Halaman PDF...',
      renderBtn: 'Render Halaman PDF ke Gambar',
      pageAlt: (n: number) => `Pratinjau halaman ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Halaman ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Abu-abu Netral',
        indigo: 'Indigo Merek',
        red: 'Merah Cap',
      },
      defaultWatermark: 'RAHASIA',
      errEmpty: 'Masukkan teks watermark sebelum membuat PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Watermark "${text}" diterapkan ke ${n} halaman (${size}).`,
      dropTitleEmpty: 'Pilih File PDF untuk Diberi Watermark',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
      dropSub: 'Menyematkan cap teks vektor yang tajam secara lokal via pdf-lib',
      labelText: 'Teks Watermark',
      phText: 'RAHASIA / DRAF / PENGGUNAAN INTERNAL',
      labelColor: 'Warna Cap',
      firstPageOnly: 'Hanya halaman pertama',
      labelSize: 'Ukuran Font:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Opasitas:',
      labelAngle: 'Rotasi:',
      applying: 'Memberi Watermark pada PDF...',
      applyBtn: 'Terapkan Watermark & Unduh',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'PDF harus mempertahankan setidaknya 1 halaman.',
      savedSuccess: (n: number, size: string) => `PDF yang diperbarui disimpan dengan ${n} halaman (${size}).`,
      loading: 'Memuat halaman & pratinjau PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} halaman aktif)`,
      dropTitleEmpty: 'Pilih File PDF untuk Menyusun Ulang atau Menghapus Halaman',
      dropSub: 'Pindahkan halaman, duplikasi lembar, atau hapus halaman yang tidak diinginkan secara lokal',
      outCount: 'Jumlah halaman hasil:',
      saving: 'Menyimpan PDF...',
      saveBtn: 'Simpan PDF yang Disusun Ulang',
      thumbAlt: (n: number) => `Halaman asli ${n}`,
      thumbFallback: (n: number) => `Asli h.${n}`,
      posLabel: (n: number) => `Pos #${n}`,
      origLabel: (n: number) => `(Asli ${n})`,
      moveEarlierTitle: 'Pindah lebih awal',
      moveEarlierAria: (n: number) => `Pindahkan posisi ${n} lebih awal`,
      moveLaterTitle: 'Pindah lebih akhir',
      moveLaterAria: (n: number) => `Pindahkan posisi ${n} lebih akhir`,
      dupTitle: 'Duplikasi halaman',
      dupAria: (n: number) => `Duplikasi halaman di posisi ${n}`,
      delTitle: 'Hapus halaman',
      delAria: (n: number) => `Hapus halaman di posisi ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `Pemisahan burst mengunduh satu file per halaman. Untuk dokumen lebih dari 25 halaman (${n} halaman di sini), ekstrak rentang sebagai gantinya agar browser Anda tidak memblokir unduhan massal.`,
      exportedAll: (n: number) => `${n} file PDF satu halaman diekspor.`,
      errNoMatch: 'Tidak ada halaman yang cocok dengan pilihan itu (misalnya, Halaman Genap membutuhkan 2+ halaman).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${a} dari ${b} halaman diekstrak (${size}).`,
      dropTitleEmpty: 'Pilih File PDF untuk Dibagi atau Diekstrak',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} halaman · ${size})`,
      dropSub: 'Diproses secara lokal di memori · Klik untuk mengganti dokumen',
      modeRange: 'Ekstrak Rentang Halaman',
      modeOdd: 'Hanya Halaman Ganjil',
      modeEven: 'Hanya Halaman Genap',
      modeBurst: 'Pisahkan Semua Halaman Individu',
      labelRange: (n: number) => `Halaman untuk Diekstrak (1–${n})`,
      phRange: 'cth. 1-3, 5, 8-10',
      rangeHintBefore: 'Gunakan koma dan tanda hubung (misalnya ',
      rangeHintAfter: ').',
      extracting: 'Mengekstrak PDF...',
      splitBtn: 'Bagi & Unduh PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL Situs Web',
      tabText: 'Teks Biasa',
      tabWifi: 'Jaringan Wi-Fi',
      tabEmail: 'Tautan Email',
      tabPhone: 'Nomor Telepon',
      labelUrl: 'URL Tujuan',
      labelText: 'Konten Teks',
      labelSsid: 'Nama Jaringan (SSID)',
      labelSecurity: 'Tipe Keamanan',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Terbuka (Tanpa Kata Sandi)',
      labelWifiPass: 'Kata Sandi Wi-Fi',
      hiddenSsid: 'Jaringan SSID tersembunyi',
      labelEmailTo: 'Email Penerima',
      labelEmailSubject: 'Subjek (Opsional)',
      labelPhone: 'Nomor Telepon (disarankan format E.164)',
      sizeLabel: (size: number) => `Ukuran (${size}px)`,
      labelEc: 'Koreksi Kesalahan',
      labelFg: 'Foreground',
      labelBg: 'Latar',
      quietZone: 'Margin Zona Tenang:',
      modulesLabel: (margin: number) => `${margin} modul`,
      encodedPayload: 'String Payload yang Di-encode',
      copyPayload: 'Salin Payload',
      emptyError: 'Masukkan konten di atas untuk membuat kode QR yang dapat dipindai.',
      encodeError: 'Tidak dapat meng-encode payload QR.',
      qrAlt: 'Kode QR yang dapat dipindai yang dihasilkan',
      downloadPng: 'Unduh PNG',
      downloadSvg: 'Unduh SVG',
      copySvg: 'Salin SVG',
      sampleText: 'Selamat datang di UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Postingan Standar',
        profileBio: 'Bio Profil',
        caption: 'Caption',
        feedPost: 'Postingan Feed',
        videoCaption: 'Caption Video',
        post: 'Postingan',
        videoTitle: 'Judul Video',
        description: 'Deskripsi',
      },
      sampleText:
        'Pengiriman lebih cepat dimulai dengan perbaikan kecil setiap hari.\n\nCoba utilitas kreator berbasis browser kami di https://utilityflow.online/tools/ — tanpa perlu mendaftar.\n\n#CreatorTools #Workflow',
      labelInput: 'Draf Postingan Sosial / Bio',
      copyDraft: 'Salin Draf',
      placeholder: 'Tulis atau tempel caption sosial, postingan, bio, atau judul YouTube Anda...',
      charsLabel: 'Karakter:',
      wordsLabel: 'Kata:',
      hashtagsLabel: 'Hashtag:',
      mentionsLabel: 'Mention:',
      urlsLabel: 'URL terdeteksi:',
      urlsWeighted: '(dihitung 23 karakter di X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} melebihi batas`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)} tersisa`,
      foldLabel: (n: number) => `Lipat ~${n} karakter`,
      foldTitle: 'Pratinjau Pemotongan Feed / Lipatan “Lihat Selengkapnya”',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Pratinjau apa yang dilihat pembaca sebelum mengetuk “Lihat selengkapnya” (${limit} karakter untuk ${platform} ${surface}).`,
      selectAria: 'Pilih platform pratinjau pemotongan',
      previewEmpty: 'Pratinjau muncul di sini...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Cara Kami Membangun 85 Utilitas Browser Cepat Tanpa Pelacakan',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24 rb tampilan · 2 hari lalu',
      errNotImage: 'Pilih file gambar PNG, JPG, atau WebP.',
      errDecode: 'Tidak dapat mendecode file gambar ini di browser.',
      previewEyebrow: 'PRATINJAU 1280 × 720',
      emptyThumb: 'Unggah gambar thumbnail Anda untuk memeriksa keterbacaan feed',
      thumbAlt: 'Pratinjau thumbnail yang diunggah',
      safeZoneTitle: 'Zona tumpang tindih lencana stempel waktu',
      chooseThumb: 'Pilih Thumbnail Lokal (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Ganti: ${name}`,
      recommended: 'Disarankan 1280×720 (16:9), di bawah 2 MB · Tidak pernah diunggah',
      diagTitle: 'Diagnostik Spesifikasi Gambar',
      dimLabel: 'Dimensi',
      dimHdOk: '(HD OK)',
      dimUnder: '(<1280px)',
      aspectLabel: 'Rasio Aspek',
      aspectMatch: 'Cocok 16:9',
      aspectNo: 'Bukan 16:9 (mungkin terpotong/letterbox)',
      sizeLabel: 'Ukuran File',
      sizeOk: '(<2 MB OK)',
      sizeOver: '(>batas 2 MB)',
      titleLabel: (len: number) => `Judul Video (${len}/100 karakter · ~60 terlihat di seluler)`,
      channelLabel: 'Nama Channel',
      durationLabel: 'Durasi',
      darkMode: 'Pratinjau Feed Mode Gelap',
      safeZone: 'Sorot Zona Sudut Stempel Waktu',
      desktopCard: 'Kartu Feed Beranda Desktop',
      sidebar: 'Sidebar Tontonan Desktop (Disarankan Ringkas)',
      untitled: 'Video tanpa judul',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Pendahuluan & Gambaran Umum' },
        { id: 2, time: '01:15', title: 'Penyiapan Arsitektur Inti' },
        { id: 3, time: '04:40', title: 'Demo Langsung & Jebakan Umum' },
        { id: 4, time: '08:20', title: 'Ringkasan & Langkah Selanjutnya' },
      ],
      newChapter: (n: number) => `Bab ${n}`,
      defaultChapterTitle: 'Bab',
      warnInvalid: 'Satu atau beberapa stempel waktu menggunakan format tidak valid (gunakan MM:SS atau HH:MM:SS).',
      warnMin3: 'YouTube membutuhkan setidaknya 3 stempel waktu dalam urutan menaik untuk mengaktifkan Bab Video.',
      warnFirst: 'Bab pertama harus dimulai pada 00:00 agar YouTube mengenali bab.',
      warnOrder: 'Bab tidak dalam urutan kronologis (klik Urutkan Secara Kronologis).',
      warnShort: (title: string) =>
        `Bab "${title}" kurang dari 10 detik setelah bab sebelumnya (minimum YouTube adalah 10 detik).`,
      labelUrl: 'URL Video YouTube atau ID Video (untuk deep link `?t=` langsung)',
      heading: 'Bab Video',
      sortBtn: 'Urutkan Secara Kronologis',
      addBtn: 'Tambah Bab',
      tsAria: (n: number) => `Stempel waktu bab ${n}`,
      titleAria: (n: number) => `Judul bab ${n}`,
      phTitle: 'Judul bab',
      removeAria: (n: number) => `Hapus bab ${n}`,
      specTitle: 'Pemeriksaan Spesifikasi Bab YouTube:',
      descBlock: 'Blok Bab Deskripsi',
      copyChapters: 'Salin Bab',
      emptyChapters: 'Tambahkan bab di atas untuk membuat blok deskripsi Anda.',
      shareTitle: 'Tautan Berbagi dengan Stempel Waktu',
      videoIdLabel: (id: string) => `(ID Video: ${id})`,
      noVideoId: '(Masukkan URL YouTube yang valid di atas)',
      noVideoHint: 'Tempel URL youtube.com atau youtu.be yang valid untuk membuat tautan lompat `?t=` yang dapat diklik untuk setiap bab.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Tidak ada file yang dipilih.',
      notPdf: (name: string) => `"${name}" tampaknya bukan file PDF.`,
      empty: (name: string) => `"${name}" kosong atau terpotong.`,
      noHeader: (name: string) =>
        `"${name}" tidak memiliki header %PDF yang valid dan tidak dapat diproses.`,
      enterRanges: 'Masukkan nomor halaman atau rentang seperti "1-3, 5".',
      rangeOutside: (token: string, total: number) =>
        `Rentang "${token}" berada di luar batas halaman 1–${total} dokumen.`,
      rangeReversed: (token: string) =>
        `Rentang "${token}" memiliki halaman awal yang lebih besar dari halaman akhirnya.`,
      pageMissing: (page: number, total: number) =>
        `Halaman ${page} tidak ada (dokumen memiliki ${total} halaman).`,
      invalidSyntax: (token: string) =>
        `Sintaks halaman tidak valid "${token}". Gunakan angka dan rentang seperti "1-3, 5".`,
      encrypted:
        'PDF ini terenkripsi atau dilindungi kata sandi. Buka kuncinya sebelum memproses secara lokal.',
      unable: 'Tidak dapat memproses file PDF.',
      allKeywords: ['all'],
    },
  },
};
