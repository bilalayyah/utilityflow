import type { ToolLocaleOverride } from "../../types";

/**
 * Indonesian overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Same shape as src/locales/de/tools/batch5.ts.
 */
export const ID_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "meta-tag-generator": {
    slug: "generator-meta-tag",
    name: "Generator Meta Tag & Open Graph",
    shortDescription:
      "Buat tag title HTML, meta description, canonical, robots, Open Graph, dan Twitter/X Card dengan pratinjau kartu langsung.",
    keywords: [
      "generator meta tag",
      "generator open graph",
      "generator twitter card",
      "tag seo head html",
      "meta tag open graph",
      "generator meta tag seo",
      "generator meta description",
      "pembuat meta tag html",
      "meta tag media sosial",
    ],
    seo: {
      title: "Generator Meta Tag – Open Graph & Twitter | UtilityFlow",
      description:
        "Buat tag title, description, canonical, Open Graph, dan Twitter Card dengan pemeriksaan panjang langsung dan pratinjau kartu sosial — gratis di browser.",
      primaryKeyword: "generator meta tag",
      secondaryKeywords: [
        "generator tag open graph",
        "generator meta media sosial",
        "pembuat seo head html",
        "generator meta twitter card",
      ],
      longTailKeywords: [
        "buat meta tag html open graph dan twitter card gratis",
        "cek panjang meta title dan description dengan pratinjau sosial",
        "unduh tag meta head seo siap tempel sebagai html",
        "buat meta tag website dengan pratinjau open graph gratis",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Susun metadata HTML <head> yang sesuai standar — meliputi <title>, <meta name=\"description\">, URL canonical, perintah pengindeksan, tag Open Graph (og:*), dan markup Twitter/X Card — dengan escaping atribut dan pratinjau kartu media sosial secara langsung.",
  },
  "serp-snippet-preview": {
    slug: "pratinjau-snippet-serp",
    name: "Pratinjau Snippet SERP",
    shortDescription:
      "Simulasikan hasil pencarian Google di desktop dan ponsel dengan pemeriksaan lebar piksel judul memakai Canvas dan penebalan kata kunci yang cocok.",
    keywords: [
      "alat pratinjau serp",
      "simulator snippet google",
      "pemeriksa lebar piksel judul seo",
      "pratinjau meta description",
      "pratinjau serp google",
      "alat pratinjau hasil pencarian",
      "pemeriksa snippet seo",
      "pemeriksa judul google",
      "pemeriksa panjang meta description",
    ],
    seo: {
      title: "Pratinjau Snippet SERP – Cek Lebar Piksel | UtilityFlow",
      description:
        "Lihat pratinjau snippet pencarian Google Anda di desktop dan ponsel — dengan pemeriksaan lebar piksel judul, penebalan kata kunci, dan peringatan pemotongan.",
      primaryKeyword: "pratinjau snippet serp",
      secondaryKeywords: [
        "simulator serp google",
        "cek lebar piksel judul seo",
        "pratinjau hasil pencarian ponsel",
        "alat pratinjau serp desktop",
      ],
      longTailKeywords: [
        "cek lebar piksel judul seo google 580px online",
        "pratinjau pemotongan snippet pencarian desktop dan ponsel",
        "uji penebalan kata kunci di meta description",
        "pratinjau snippet hasil pencarian google sebelum terbit",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "Ukur apakah judul SEO Anda muat dalam batas tampilan Google sekitar 580 px memakai perhitungan metrik font HTML5 Canvas secara langsung, bukan sekadar tebakan jumlah karakter — dan lihat kartu pencarian Desktop vs. Ponsel dengan penebalan kata kunci.",
  },
  "xml-sitemap-generator": {
    slug: "generator-sitemap-xml",
    name: "Generator Sitemap XML",
    shortDescription:
      "Buat file XML yang valid sesuai Sitemaps.org dari daftar URL — dengan deduplikasi, <lastmod>, <changefreq>, dan unduhan .xml.",
    keywords: [
      "generator sitemap xml",
      "pembuat sitemap.xml",
      "buat sitemap xml online",
      "pembuat sitemap seo",
      "generator sitemap gratis",
      "pembuat sitemap xml online",
      "buat sitemap.xml",
      "alat pembuat sitemap",
      "generator sitemap website",
    ],
    seo: {
      title: "Generator Sitemap XML – Buat Sitemap.xml | UtilityFlow",
      description:
        "Ubah daftar URL canonical menjadi sitemap.xml yang valid — dengan deduplikasi, tanggal lastmod, petunjuk changefreq, dan escaping XML, gratis di browser Anda.",
      primaryKeyword: "generator sitemap xml",
      secondaryKeywords: [
        "pembuat sitemap xml",
        "buat sitemap.xml gratis",
        "alat sitemap url canonical",
        "generator file sitemap.xml",
      ],
      longTailKeywords: [
        "buat sitemap xml valid dari daftar url secara offline",
        "buat sitemap.xml dengan tag lastmod dan changefreq",
        "escape karakter khusus di url sitemap xml",
        "buat sitemap xml untuk website kecil gratis online",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Ubah daftar URL canonical https:// apa pun menjadi sitemap.xml yang valid sesuai skema Sitemaps 0.9 — lengkap dengan penyaringan URL tidak valid, deduplikasi otomatis, escaping karakter XML, dan ekspor .xml.",
  },
  "robots-txt-generator": {
    slug: "generator-robots-txt",
    name: "Generator Robots.txt",
    shortDescription:
      "Buat aturan crawler robots.txt yang valid, dikelompokkan per User-agent — dengan path Allow/Disallow, Crawl-delay, dan perintah Sitemap.",
    keywords: [
      "generator robots.txt",
      "buat robots txt",
      "pembuat allow disallow crawler",
      "generator perintah sitemap",
      "pembuat robots txt online",
      "generator file robots.txt",
      "blokir crawler pencarian",
      "allow disallow robots txt",
      "pembuat pemeriksa robots.txt",
    ],
    seo: {
      title: "Generator Robots.txt – Aturan untuk Crawler | UtilityFlow",
      description:
        "Buat robots.txt yang valid dengan grup User-agent, aturan Allow dan Disallow, crawl-delay, dan tautan sitemap memakai preset awal — gratis di browser.",
      primaryKeyword: "generator robots.txt",
      secondaryKeywords: [
        "pembuat robots txt",
        "path disallow crawler",
        "robots.txt wordpress dan spa",
        "pembuat file robots.txt",
      ],
      longTailKeywords: [
        "buat robots.txt bersih untuk react vite dan cloudflare pages",
        "tambahkan beberapa perintah sitemap ke robots.txt",
        "blokir lingkungan staging dari crawler pencarian robots.txt",
        "buat robots.txt untuk memblokir crawler ai",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Buat perintah robots.txt yang bersih dan dikelompokkan dengan preset awal untuk situs terbuka, aplikasi web SaaS, WordPress, atau penguncian staging — mendukung baris User-agent kustom, Allow/Disallow, Crawl-delay, dan deklarasi Sitemap:.",
  },
  "schema-markup-generator": {
    slug: "generator-markup-schema",
    name: "Generator Markup Schema (JSON-LD)",
    shortDescription:
      "Buat skrip JSON-LD Schema.org yang valid untuk markup Article, FAQPage, Product, Organization, dan BreadcrumbList.",
    keywords: [
      "generator markup schema",
      "generator json ld",
      "generator schema faq",
      "pembuat structured data",
      "generator structured data",
      "alat json-ld schema.org",
      "generator schema rich snippet",
      "generator schema faqpage",
      "markup schema produk",
    ],
    seo: {
      title: "Generator Markup Schema – JSON-LD untuk SEO | UtilityFlow",
      description:
        "Buat JSON-LD Schema.org yang valid untuk Article, FAQPage, Product, Organization, dan BreadcrumbList — dengan escaping HTML aman dan ekspor .jsonld gratis.",
      primaryKeyword: "generator markup schema",
      secondaryKeywords: [
        "generator json-ld online",
        "alat structured data faqpage",
        "pembuat schema produk",
        "alat markup structured data",
      ],
      longTailKeywords: [
        "buat tag script json-ld schema.org valid gratis",
        "buat structured data faqpage dan breadcrumb dinamis",
        "escape json-ld dengan aman untuk tag script html",
        "buat markup schema json-ld untuk artikel dan produk",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Buat blok data terstruktur JSON-LD Schema.org yang bersih untuk Article, FAQPage, Product, Organization, dan BreadcrumbList — lengkap dengan pembuat baris dinamis, escaping < yang aman untuk HTML di dalam tag script, dan ekspor .jsonld.",
  },
  "url-slug-generator": {
    slug: "generator-slug-url",
    name: "Generator Slug URL",
    shortDescription:
      "Ubah judul artikel menjadi slug URL SEO yang bersih dengan transliterasi aksen secara massal, lengkap dengan penyaringan stop word.",
    keywords: [
      "generator slug url",
      "pembuat slug seo",
      "generator permalink bersih",
      "konverter slug massal",
      "generator url ramah seo",
      "konverter judul blog ke slug",
      "pembuat slug permalink",
      "penghapus stop word untuk url",
      "konverter aksen ke ascii slug",
    ],
    seo: {
      title: "Generator Slug URL – Pembuat Permalink SEO | UtilityFlow",
      description:
        "Ubah judul artikel menjadi slug SEO huruf kecil secara massal — dengan transliterasi aksen, penghapusan stop word, dan pemotongan di batas kata, di browser.",
      primaryKeyword: "generator slug url",
      secondaryKeywords: [
        "generator url ramah seo",
        "judul ke slug massal",
        "pembersih slug stop word",
        "pembuat slug permalink",
      ],
      longTailKeywords: [
        "ubah judul blog menjadi slug url seo bersih massal",
        "transliterasi karakter beraksen menjadi slug url ascii",
        "potong slug url panjang di batas kata yang bersih",
        "buat permalink bersih dengan stop word dihapus online",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "Standarkan permalink yang mudah dibaca dan memakai tanda hubung di seluruh postingan tunggal atau kalender konten massal. Mentransliterasi diakritik dengan bersih (Café → cafe), secara opsional memangkas stop word pengisi, menegakkan panjang maksimum yang bersih tanpa memotong di tengah kata, dan menampilkan pratinjau URL lengkap.",
  },
  "keyword-density-checker": {
    slug: "pemeriksa-kepadatan-kata-kunci",
    name: "Pemeriksa Kepadatan Kata Kunci",
    shortDescription:
      "Audit jumlah kata, kepadatan kata kunci target, waktu baca, dan frekuensi frasa 1, 2, dan 3 kata teratas secara lokal.",
    keywords: [
      "pemeriksa kepadatan kata kunci",
      "penganalisis konten seo",
      "penganalisis frekuensi n-gram",
      "audit pengulangan frasa",
      "cek kepadatan kata kunci online",
      "alat frekuensi kata kunci konten",
      "penganalisis teks seo gratis",
      "kalkulator kepadatan kata kunci target",
      "penganalisis bigram trigram",
    ],
    seo: {
      title: "Pemeriksa Kepadatan Kata Kunci – Audit Konten | UtilityFlow",
      description:
        "Tempel draf artikel atau HTML untuk memeriksa jumlah kata, waktu baca, kepadatan kata kunci target, dan frasa 1, 2, dan 3 kata teratas — privat, di browser.",
      primaryKeyword: "pemeriksa kepadatan kata kunci",
      secondaryKeywords: [
        "penganalisis frekuensi salinan seo",
        "penghitung ngram 2 kata 3 kata",
        "cek pengulangan kata kunci online",
        "kalkulator kepadatan kata kunci target",
      ],
      longTailKeywords: [
        "analisis konten html yang ditempel untuk kepadatan kata kunci tanpa unggah",
        "temukan frasa 2 kata dan 3 kata yang terlalu sering dipakai di draf blog",
        "cek frekuensi kata kunci target dengan bersih di browser",
        "cara cek kepadatan kata kunci draf blog online",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "Periksa draf konten atau salinan HTML yang ditempel untuk kedalaman kosakata, waktu baca, jumlah kemunculan frasa target yang tepat, dan frekuensi n-gram 1 kata, 2 kata, dan 3 kata teratas — dirancang untuk menemukan pengulangan yang tidak disengaja, bukan mengejar kuota kata kunci yang sudah ketinggalan zaman.",
  },
  "canonical-hreflang-generator": {
    slug: "generator-kanonis-hreflang",
    name: "Pembuat Canonical, Hreflang & Pengalihan 301",
    shortDescription:
      "Buat tag hreflang & canonical HTML/XML atau susun pengalihan 301 untuk Cloudflare Pages _redirects, Apache, dan Nginx.",
    keywords: [
      "generator hreflang",
      "pembuat tag canonical",
      "generator pengalihan 301",
      "pembuat _redirects cloudflare",
      "generator url canonical",
      "generator tag hreflang",
      "tag seo multibahasa",
      "generator aturan pengalihan 301",
      "pembuat pengalihan htaccess apache",
    ],
    seo: {
      title: "Canonical, Hreflang & Pengalihan 301 | UtilityFlow",
      description:
        "Generator tag hreflang dan canonical untuk halaman multibahasa, plus aturan pengalihan 301 untuk Cloudflare Pages, Apache, dan Nginx.",
      primaryKeyword: "generator hreflang",
      secondaryKeywords: [
        "generator tag tautan canonical",
        "pembuat konfigurasi pengalihan 301",
        "generator pengalihan cloudflare pages",
        "generator url canonical",
      ],
      longTailKeywords: [
        "buat tag hreflang html dan tautan xhtml sitemap xml",
        "ubah daftar url lama menjadi aturan 301 _redirects cloudflare pages",
        "buat pengalihan 301 apache htaccess dan nginx online",
        "buat tag hreflang x-default untuk halaman internasional",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Tangani dua migrasi SEO teknis yang penting di satu tempat: buat anotasi hreflang + canonical multi-wilayah (untuk <head> HTML maupun sitemap XML), atau ubah daftar pemetaan URL menjadi konfigurasi pengalihan 301 yang siap diterapkan untuk Cloudflare Pages, Apache, dan Nginx.",
  },
  "on-page-seo-checker": {
    slug: "pemeriksa-seo-on-page",
    name: "Pemeriksa Audit SEO On-Page HTML",
    shortDescription:
      "Audit sumber HTML yang ditempel secara lokal dengan DOMParser untuk panjang judul, meta description, hierarki H1–H4, teks alt, dan JSON-LD.",
    keywords: [
      "pemeriksa seo on page",
      "penganalisis seo html",
      "pemeriksa hierarki judul",
      "alat audit alt gambar",
      "alat audit seo gratis",
      "pemeriksa panjang meta description",
      "pemeriksa panjang tag title",
      "pemeriksa tag seo html",
      "pemeriksa json-ld",
    ],
    seo: {
      title: "Pemeriksa SEO On-Page – Audit HTML Gratis | UtilityFlow",
      description:
        "Tempel sumber HTML halaman apa pun untuk mengaudit judul, meta description, judul, canonical, teks alt gambar, tautan, dan JSON-LD — gratis di browser.",
      primaryKeyword: "pemeriksa seo on page",
      secondaryKeywords: [
        "audit seo sumber html",
        "pemeriksa struktur judul h1 h2",
        "cek atribut alt gambar hilang",
        "pemeriksa panjang meta description",
      ],
      longTailKeywords: [
        "audit sumber html yang ditempel untuk tag seo on page offline",
        "cek kerangka judul h1 sampai h4 dan tautan canonical di html",
        "inspektur seo dom sisi klien tanpa perayapan eksternal",
        "tempel sumber html untuk cek judul meta description dan judul",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Jalankan pemeriksaan SEO teknis & on-page tingkat DOM secara instan pada sumber HTML apa pun yang ditempel (Lihat Sumber Halaman) langsung di browser Anda — memeriksa <title>, meta description, canonical, hierarki judul H1–H4, teks alt gambar yang hilang, tautan internal/eksternal, Open Graph, dan JSON-LD.",
  },
  "robots-meta-tag-generator": {
    slug: "generator-meta-tag-robots",
    name: "Pembuat Meta Tag Robots & X-Robots-Tag",
    shortDescription:
      "Buat perintah noindex, nofollow, noarchive, max-snippet, max-image-preview, dan aturan _headers Cloudflare yang terperinci.",
    keywords: [
      "generator meta tag robots",
      "pembuat x-robots-tag",
      "meta tag noindex nofollow",
      "tag max-image-preview large",
      "generator tag noindex",
      "pembuat meta tag robots",
      "generator header robots",
      "generator _headers cloudflare",
      "meta tag nosnippet",
    ],
    seo: {
      title: "Generator Meta Tag Robots & X-Robots-Tag | UtilityFlow",
      description:
        "Buat meta tag robots HTML dan header X-Robots-Tag dengan noindex, nofollow, max-snippet, dan max-image-preview — plus keluaran _headers Cloudflare online.",
      primaryKeyword: "generator meta tag robots",
      secondaryKeywords: [
        "generator header x-robots-tag",
        "pembuat meta tag noindex",
        "google max-image-preview large",
        "generator tag noindex",
      ],
      longTailKeywords: [
        "buat header x-robots-tag noindex untuk file pdf di cloudflare pages",
        "buat meta tag robots dengan max-snippet dan max-image-preview large",
        "perbedaan robots.txt dan meta robots noindex",
        "buat meta tag robots dengan noindex nofollow dan max-snippet",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Buat perintah crawler tingkat halaman yang presisi — termasuk index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet, dan max-image-preview:large — sekaligus sebagai tag HTML <meta name=\"robots\">, header HTTP X-Robots-Tag, dan blok _headers Cloudflare Pages.",
  },
  "image-compressor": {
    slug: "kompresor-gambar",
    name: "Kompresor Gambar",
    shortDescription:
      "Kompres gambar PNG, JPG, dan WebP secara lokal lewat HTML5 Canvas dengan penggeser kualitas kustom, batas lebar maksimum, dan metrik penghematan byte instan.",
    keywords: [
      "kompresor gambar",
      "kompres gambar online",
      "perkecil ukuran file gambar",
      "pengoptimal gambar webp",
      "kompres png ke ukuran lebih kecil",
      "perkecil ukuran file jpg online",
      "pengecil ukuran gambar gratis",
      "optimalkan gambar untuk web",
      "perkecil ukuran file foto",
    ],
    seo: {
      title: "Kompresor Gambar – Kecilkan PNG, JPG & WebP | UtilityFlow",
      description:
        "Kompres gambar di browser dengan Kompresor Gambar. Atur kualitas, batasi lebar maksimum, bandingkan ukuran sebelum dan sesudah, lalu unduh — tanpa unggahan.",
      primaryKeyword: "kompresor gambar",
      secondaryKeywords: [
        "kompres png jpg webp online",
        "perkecil ukuran file foto gratis",
        "pengoptimal gambar sisi klien",
        "perkecil ukuran gambar untuk website",
      ],
      longTailKeywords: [
        "kompres gambar besar untuk web core vitals tanpa unggah server",
        "ubah dan perkecil foto jpg menjadi format webp ringan",
        "batasi lebar maksimum dan optimalkan kualitas gambar offline",
        "perkecil ukuran file gambar sebelum lampiran email",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "Perkecil aset PNG, JPG, dan WebP yang berat untuk pemuatan halaman lebih cepat dan lampiran email yang lebih ringkas langsung di browser Anda — sesuaikan kualitas kompresi lossy, terapkan batas lebar opsional, dan bandingkan penghematan byte yang tepat tanpa unggahan file jarak jauh.",
  },
  "image-resizer": {
    slug: "pengubah-ukuran-gambar",
    name: "Pengubah Ukuran & Pemotong Gambar",
    shortDescription:
      "Ubah ukuran gambar ke dimensi piksel yang tepat atau preset sosial/OG dengan penguncian rasio aspek, pemotongan cover tengah yang cerdas, dan ekspor PNG/JPG/WebP.",
    keywords: [
      "pengubah ukuran gambar",
      "ubah ukuran gambar piksel",
      "pemotong gambar online",
      "pengubah ukuran gambar og 1200x630",
      "ubah ukuran gambar online gratis",
      "ubah dimensi gambar",
      "ubah ukuran foto untuk instagram",
      "potong gambar sesuai ukuran",
      "ubah ukuran gambar ke 1200x630",
    ],
    seo: {
      title: "Pengubah Ukuran Gambar – Piksel Tepat Gratis | UtilityFlow",
      description:
        "Ubah ukuran foto ke piksel yang tepat dengan Pengubah Ukuran Gambar. Pakai preset, kunci rasio aspek, potong cover, dan ekspor PNG, JPG, atau WebP privat.",
      primaryKeyword: "pengubah ukuran gambar",
      secondaryKeywords: [
        "ubah ukuran foto ke piksel tepat",
        "alat potong cover rasio aspek",
        "pengubah ukuran preset gambar sosial",
        "ubah ukuran gambar untuk media sosial",
      ],
      longTailKeywords: [
        "ubah ukuran gambar ke dimensi open graph 1200x630 tanpa regang",
        "potong cover tengah foto menjadi persegi 1080x1080 lokal",
        "ubah lebar dan tinggi piksel gambar di browser gratis",
        "ubah ukuran foto potret menjadi persegi 1080x1080 instagram",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "Skalakan grafik dan foto ke dimensi piksel yang tepat — atau klik preset bawaan Open Graph (1200×630), YouTube HD (1280×720), Persegi (1080×1080), dan Avatar (512×512) — memakai resampling Canvas berkualitas tinggi dan Cover-Crop Tengah opsional untuk menghindari distorsi.",
  },
  "image-format-converter": {
    slug: "konverter-format-gambar",
    name: "Konverter Format Gambar (PNG / JPG / WebP)",
    shortDescription:
      "Ubah gambar PNG, JPG, WebP, GIF, dan SVG secara massal menjadi PNG, JPG, atau WebP secara lokal dengan kontrol kualitas dan pengisian matte latar JPG kustom.",
    keywords: [
      "konverter format gambar",
      "konverter png ke webp",
      "konverter webp ke png",
      "konverter svg ke png browser",
      "ubah jpg ke png",
      "ubah png ke jpg",
      "konverter gambar massal",
      "konverter webp ke jpg",
      "konverter gambar online gratis",
    ],
    seo: {
      title: "Konverter Format Gambar – PNG, JPG & WebP | UtilityFlow",
      description:
        "Ubah gambar antara PNG, JPG, dan WebP dengan Konverter Format Gambar. Ubah massal, atur kualitas JPG, dan isi latar transparan sebelum mengekspor, gratis.",
      primaryKeyword: "konverter format gambar",
      secondaryKeywords: [
        "ubah webp ke jpg atau png",
        "konverter png ke webp massal",
        "png transparan ke jpg isi latar",
        "ubah jpg ke png gratis",
      ],
      longTailKeywords: [
        "ubah massal beberapa gambar png dan jpg ke webp offline",
        "ubah tangkapan layar webp ke png standar tanpa unggah",
        "isi warna latar png transparan saat ubah ke jpg",
        "ubah format gambar dari png ke jpg di browser",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "Ubah file PNG, JPG, WebP, GIF, dan SVG secara massal menjadi WebP yang siap web, JPG universal, atau PNG transparan lossless sepenuhnya di browser Anda — lengkap dengan pengisian matte latar kustom saat meratakan transparansi ke JPEG.",
  },
  "image-rotate-flip": {
    slug: "putar-balik-gambar",
    name: "Putar, Balik & Filter Gambar",
    shortDescription:
      "Putar gambar 90°/180°/270°, balik horizontal atau vertikal, dan terapkan filter skala abu-abu, kecerahan, dan kontras langsung di browser Anda.",
    keywords: [
      "putar gambar online",
      "balik gambar horizontal",
      "filter gambar skala abu-abu",
      "sesuaikan kecerahan kontras gambar",
      "putar foto 90 derajat",
      "balik foto online",
      "cerminkan gambar online",
      "luruskan gambar online",
      "editor filter foto online",
    ],
    seo: {
      title: "Putar Gambar Online – Balik & Filter Foto | UtilityFlow",
      description:
        "Putar gambar online 90, 180, atau 270 derajat, balik foto horizontal atau vertikal, dan sesuaikan kecerahan, kontras, serta skala abu-abu — gratis di browser.",
      primaryKeyword: "putar gambar online",
      secondaryKeywords: [
        "balik gambar horizontal vertikal",
        "ubah foto ke skala abu-abu online",
        "sesuaikan kecerahan dan kontras browser",
        "putar foto 90 derajat online",
      ],
      longTailKeywords: [
        "perbaiki rotasi foto miring 90 derajat offline di browser",
        "cerminkan gambar selfie horizontal tanpa photoshop",
        "terapkan filter hitam putih skala abu-abu dan ekspor png",
        "putar gambar dokumen hasil pindai ke orientasi benar",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "Perbaiki orientasi miring, cerminkan selfie secara horizontal atau vertikal, ubah foto menjadi skala abu-abu hitam-putih, dan sesuaikan kecerahan serta kontras secara real time memakai transformasi Canvas 2D HTML5 lokal.",
  },
  "image-to-base64": {
    slug: "gambar-ke-base64",
    name: "Konverter Gambar ke Base64 & Data URI",
    shortDescription:
      "Encode gambar PNG, JPG, WebP, SVG, dan ICO menjadi Data URI Base64, tag <img> HTML, dan aturan CSS — atau decode string Base64 kembali menjadi pratinjau.",
    keywords: [
      "gambar ke base64",
      "dekoder base64 gambar",
      "generator data uri",
      "gambar base64 latar css",
      "ubah gambar ke data uri",
      "encoder base64 gambar",
      "gambar ke base64 online gratis",
      "encode png ke base64",
      "konverter base64 ke gambar",
    ],
    seo: {
      title: "Gambar ke Base64 – Konverter & Dekoder URI | UtilityFlow",
      description:
        "Pakai konverter gambar ke base64 ini untuk membuat Data URI, Base64 mentah, tag img HTML, dan cuplikan latar CSS — atau decode Base64 kembali ke pratinjau.",
      primaryKeyword: "gambar ke base64",
      secondaryKeywords: [
        "encoder uri data gambar",
        "pratinjau base64 ke gambar",
        "sematan svg atau png di css",
        "gambar ke base64 online gratis",
      ],
      longTailKeywords: [
        "ubah ikon png menjadi data uri background-image css offline",
        "decode string base64 mentah menjadi pratinjau gambar unduhan",
        "bandingkan ukuran byte biner gambar vs ukuran string base64",
        "encode gambar logo kecil ke base64 untuk email html",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Ubah ikon kecil, logo, dan grafik email menjadi URI data:image/...;base64,... yang mandiri, tag HTML <img> yang siap salin, dan deklarasi CSS background-image — atau beralih mode untuk memeriksa dan mengunduh muatan gambar Base64 mentah.",
  },
  "color-contrast-checker": {
    slug: "pemeriksa-kontras-warna",
    name: "Pemeriksa Kontras Warna & Ekstraktor Palet",
    shortDescription:
      "Uji rasio kontras warna WCAG 2.1 AA/AAA, ubah nilai HEX/RGB/HSL, dan ekstrak palet warna dominan dari gambar yang diunggah.",
    keywords: [
      "pemeriksa kontras warna wcag",
      "rasio kontras aksesibilitas",
      "ekstraktor palet warna gambar",
      "pemilih warna hex rgb hsl",
      "kalkulator rasio kontras wcag aa",
      "pemeriksa kontras aaa online",
      "kombinasi warna aksesibel",
      "uji kontras teks latar",
      "pemeriksa aksesibilitas warna",
    ],
    seo: {
      title: "Pemeriksa Kontras Warna – WCAG 2.1 AA/AAA | UtilityFlow",
      description:
        "Periksa rasio kontras WCAG 2.1 AA dan AAA untuk pasangan warna teks dan latar, ubah HEX, RGB, dan HSL, serta ekstrak palet dari gambar, gratis di browser.",
      primaryKeyword: "pemeriksa kontras warna",
      secondaryKeywords: [
        "kalkulator rasio kontras wcag aa aaa",
        "ekstrak palet warna dari gambar",
        "pemeriksa warna teks latar aksesibel",
        "rasio kontras wcag teks normal dan besar",
      ],
      longTailKeywords: [
        "uji rasio kontras teks normal dan besar wcag 2.1 online",
        "tarik swatch hex dominan dari tangkapan layar ke pemeriksa kontras",
        "cek aksesibilitas warna latar depan latar belakang ui mode gelap",
        "berapa rasio kontras yang lulus wcag aa untuk teks isi",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "Validasi pasangan warna UI terhadap ambang luminansi relatif dan kontras WCAG 2.1 resmi (AA 4.5:1, AA Besar 3.0:1, AAA 7.0:1), edit nilai HEX/RGB/HSL yang tersinkron, dan unggah tangkapan layar atau logo untuk menarik swatch HEX dominan langsung ke slot Latar Depan atau Latar Belakang Anda.",
  },
  "qr-code-scanner": {
    slug: "pemindai-kode-qr",
    name: "Pemindai Kode QR & Studio QR vCard",
    shortDescription:
      "Decode kode QR dari gambar yang diunggah atau kamera perangkat Anda secara privat di browser, atau buat kode QR Kontak vCard yang dapat diunduh sebagai PNG/SVG.",
    keywords: [
      "pemindai kode qr online",
      "decode kode qr dari gambar",
      "generator kode qr vcard",
      "pembaca qr kamera browser",
      "pindai kode qr dari tangkapan layar",
      "pembaca kode qr tanpa aplikasi",
      "decode kode qr png jpg",
      "pemindai kode qr wifi",
      "pembaca kode qr online",
    ],
    seo: {
      title: "Pemindai Kode QR – Dekode Gambar & vCard | UtilityFlow",
      description:
        "Pindai dan decode kode QR dari tangkapan layar, foto, atau webcam Anda langsung di browser, atau buat kode QR kontak vCard yang dapat diunduh PNG dan SVG.",
      primaryKeyword: "pemindai kode qr",
      secondaryKeywords: [
        "pembaca gambar kode qr online",
        "pindai qr dari tangkapan layar gratis",
        "buat kode qr kontak vcard",
        "pembaca kode qr webcam browser",
      ],
      longTailKeywords: [
        "decode kode qr dari tangkapan layar png atau jpg offline",
        "pindai kode qr dengan webcam laptop tanpa instal aplikasi",
        "buat kode qr kontak vcard 3.0 svg dan png unduhan",
        "baca kode qr mode gelap terbalik dari tangkapan layar",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "Baca isi kode QR dari tangkapan layar, foto, atau aliran kamera live opsional langsung di dalam browser Anda — dengan klasifikasi muatan otomatis (URL, Wi-Fi, vCard, Teks) — plus pendamping Pembuat QR Kontak vCard yang mengekspor kartu kontak PNG dan SVG yang tajam.",
  },
  "password-generator": {
    slug: "generator-kata-sandi",
    name: "Generator Kata Sandi & Frasa Sandi Kriptografis",
    shortDescription:
      "Buat kata sandi acak tanpa bias dan frasa sandi ala Diceware memakai rejection sampling crypto.getRandomValues dengan perhitungan entropi yang tepat.",
    keywords: [
      "generator kata sandi kriptografis",
      "generator kata sandi acak aman",
      "generator frasa sandi diceware",
      "kata sandi crypto getrandomvalues",
      "pembuat kata sandi kuat online",
      "generator frasa sandi acak",
      "pemeriksa entropi kata sandi",
      "buat kata sandi aman gratis",
      "generator kata sandi tanpa bias",
    ],
    seo: {
      title: "Generator Kata Sandi – Kata Sandi Acak Aman | UtilityFlow",
      description:
        "Buat kata sandi acak yang kuat dan frasa sandi Diceware yang mudah diingat secara lokal di browser dengan Web Crypto, skor entropi tepat, tanpa penyimpanan.",
      primaryKeyword: "generator kata sandi",
      secondaryKeywords: [
        "generator kata sandi aman kriptografis",
        "generator frasa sandi mudah diingat online",
        "kalkulator entropi kata sandi",
        "pembuat kata sandi acak dengan simbol",
      ],
      longTailKeywords: [
        "buat kata sandi acak memakai crypto getrandomvalues tanpa bias modulo",
        "buat frasa sandi diceware 5 kata secara lokal offline",
        "kecualikan karakter ambigu 0 o 1 l i generator kata sandi",
        "berapa bit entropi kata sandi 18 karakter",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "Buat kata sandi berentropi tinggi dan frasa sandi multi-kata yang mudah diingat 100% lokal memakai CSPRNG browser Anda yang didukung perangkat keras (window.crypto.getRandomValues) dengan rejection sampling untuk menghilangkan bias modulo dan pengacakan Fisher-Yates untuk mencegah posisi karakter yang dapat diprediksi.",
  },
  "file-hash-verifier": {
    slug: "verifikator-hash-file",
    name: "Verifikator Hash & Checksum File",
    shortDescription:
      "Hitung checksum file biner SHA-256, SHA-512, SHA-384, dan SHA-1 secara lokal lewat Web Crypto SubtleCrypto dan verifikasi unduhan terhadap hash yang diterbitkan.",
    keywords: [
      "verifikator hash file",
      "pemeriksa checksum sha256 file",
      "verifikasi hash file unduhan online",
      "generator hash file sha512",
      "kalkulator checksum sha256",
      "cek integritas file online",
      "bandingkan checksum file",
      "pemeriksa hash sha384 sha1",
      "verifikasi checksum iso",
    ],
    seo: {
      title: "Verifikator Hash File – Pemeriksa SHA-256 | UtilityFlow",
      description:
        "Hitung digest SHA-256, SHA-512, SHA-384, dan SHA-1 untuk file lokal apa pun di browser dan bandingkan dengan checksum yang diterbitkan — tanpa unggahan, gratis.",
      primaryKeyword: "verifikator hash file",
      secondaryKeywords: [
        "kalkulator checksum sha256 file",
        "verifikasi sha256sum file online",
        "digest file subtlecrypto browser",
        "verifikator checksum sha512",
      ],
      longTailKeywords: [
        "cek hash sha-256 installer unduhan tanpa terminal",
        "bandingkan checksum biner file dengan string sha256sum yang diharapkan",
        "hitung sha256 dan sha512 lokal tanpa unggah file",
        "verifikasi checksum sha256 iso linux di browser",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "Verifikasi integritas dan keaslian installer perangkat lunak, arsip, dataset, dan dokumen secara lokal — menghitung digest SHA-256, SHA-512, SHA-384, dan SHA-1 lewat Web Crypto subtle.digest yang dipercepat perangkat keras dengan perbandingan checksum yang diharapkan secara instan.",
  },
  "favicon-generator": {
    slug: "generator-favicon",
    name: "Generator Favicon & Ikon Aplikasi (.ico & PNG)",
    shortDescription:
      "Buat ikon PNG multi-ukuran yang tajam (16×16 hingga 512×512) dan favicon.ico biner multi-frame asli dari lencana monogram kustom atau logo yang diunggah.",
    keywords: [
      "generator favicon",
      "buat favicon.ico online",
      "generator ikon sentuh apple",
      "teks ke favicon monogram",
      "pembuat favicon ico gratis",
      "generator ikon pwa 192 512",
      "pembuat favicon website",
      "konverter png ke favicon",
      "pembuat ikon aplikasi online",
    ],
    seo: {
      title: "Generator Favicon – Ikon .ico & PNG Aplikasi | UtilityFlow",
      description:
        "Buat favicon.ico multi-frame asli plus ikon PNG 16–512px, Apple Touch, dan PWA dari logo atau lencana monogram kustom Anda — gratis, di browser Anda sendiri.",
      primaryKeyword: "generator favicon",
      secondaryKeywords: [
        "konverter png ke ico multi ukuran",
        "pembuat favicon monogram",
        "generator ikon pwa dan apple touch",
        "pembuat favicon ico online gratis",
      ],
      longTailKeywords: [
        "buat favicon.ico biner asli dengan frame 16x16 32x32 48x48 gratis",
        "buat favicon website dan tag tautan html dari inisial teks",
        "potong logo persegi ke ikon sentuh apple lingkaran 180x180",
        "buat ikon pwa 192x192 dan 512x512 untuk manifes web",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "Rancang ikon monogram yang bersih dalam hitungan detik — atau unggah logo merek Anda yang sudah ada — untuk merender aset PNG 16×16, 32×32, 48×48, Apple Touch 180×180, dan PWA 192×192 / 512×512 yang tajam piksel plus favicon.ico biner multi-gambar yang sesuai standar dan markup <link> HTML yang siap tempel.",
  },
};
