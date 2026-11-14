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
    instructions: [
      {
        title: "Masukkan judul halaman dan meta description",
        description:
          "Isi Judul Halaman (usahakan 30–60 karakter) dan Meta Description (120–160 karakter) sambil memperhatikan indikator panjang yang tampil langsung.",
      },
      {
        title: "Atur URL canonical dan perintah pengindeksan",
        description:
          "Masukkan URL canonical lengkap untuk halaman tersebut dan pilih apakah crawler boleh mengindeksnya serta mengikuti tautannya.",
      },
      {
        title: "Tambahkan tag Open Graph",
        description:
          "Isi judul, deskripsi, jenis, dan URL gambar Open Graph (disarankan 1200×630 piksel) agar tautan terlihat bagus saat dibagikan.",
      },
      {
        title: "Konfigurasikan Twitter/X Card",
        description:
          "Pilih summary atau summary_large_image lalu periksa judul, deskripsi, dan gambar kartu yang akan ditampilkan X.",
      },
      {
        title: "Periksa pratinjau kartu media sosial langsung",
        description:
          "Lihat panel pratinjau untuk mengetahui persis bagaimana tautan akan tampil di umpan media sosial, dan perbaiki pemotongan atau gambar yang hilang sebelum diterbitkan.",
      },
      {
        title: "Salin atau unduh cuplikan HTML",
        description:
          "Salin HTML yang sudah di-escape ke dalam <head> halaman Anda, atau unduh meta-tags.html dan gunakan kembali blok tersebut di berbagai template.",
      },
    ],
    examples: [
      {
        title: "Blok Open Graph & canonical standar untuk website",
        input: "Judul: UtilityFlow · Jenis: website · Kartu: summary_large_image",
        output: "<title>...</title>, <meta name=\"description\" ...>, <link rel=\"canonical\" ...>, og:* dan twitter:*",
        explanation: "Meng-escape tanda kutip ganda dan karakter & di dalam nilai atribut dengan benar.",
      },
      {
        title: "Meta tag untuk artikel blog",
        input: "Judul: Panduan SEO 2026 · Jenis: article · Gambar: 1200×630",
        output: "Blok <head> lengkap dengan og:type article, og:image, dan twitter:card summary_large_image",
        explanation: "Jenis article memberi tahu platform untuk menampilkan format pratinjau yang cocok untuk postingan blog.",
      },
    ],
    benefits: [
      "Secara otomatis meng-escape karakter &, \", <, dan > di dalam atribut tag",
      "Menggabungkan tag head SEO, tag Open Graph, dan Twitter/X Card dalam satu cuplikan yang konsisten",
      "Menampilkan pratinjau tampilan tautan yang dibagikan di media sosial sebelum diterbitkan",
      "Mendukung pengunduhan cuplikan mandiri sebagai meta-tags.html",
    ],
    useCases: [
      "Menerbitkan landing page peluncuran, microsite pemasaran, dan halaman produk SaaS",
      "Menyeragamkan ukuran gambar Open Graph dan jenis kartu di semua artikel",
      "Memverifikasi perintah index/noindex dan URL canonical sebelum rilis produksi",
      "Menyerahkan template <head> yang rapi dari tim pemasaran ke pengembang frontend",
    ],
    faqs: [
      {
        question: "Apakah saya perlu tag terpisah untuk Open Graph dan Twitter/X?",
        answer:
          "X akan memakai Open Graph untuk judul dan deskripsi bila diperlukan, tetapi dengan menetapkan twitter:card (summary_large_image) secara eksplisit bersama og:* Anda menjamin pratinjau gambar lebar yang dapat diprediksi di semua tempat.",
      },
      {
        question: "Seberapa besar sebaiknya og:image saya?",
        answer:
          "Gunakan gambar berukuran 1200×630 piksel (rasio aspek 1,91:1) yang di-host di URL HTTPS dan tidak diblokir oleh robots.txt.",
      },
      {
        question: "Apakah menambahkan <meta name=\"keywords\"> masih membantu peringkat Google?",
        answer:
          "Mesin pencari besar mengabaikan meta keywords karena penyalahgunaan di masa lalu, jadi generator ini menjaga <head> Anda tetap bersih dengan judul, deskripsi, canonical, dan tag sosial yang berdampak.",
      },
      {
        question: "Apakah Generator Meta Tag gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis dan berjalan sepenuhnya di browser Anda, sehingga judul, deskripsi, dan URL Anda tidak pernah diunggah ke server.",
      },
      {
        question: "Apakah saya perlu menginstal sesuatu untuk memakai Generator Meta Tag?",
        answer:
          "Tidak. Alat ini berfungsi di browser modern apa pun tanpa instalasi, dan Anda dapat membuat tag di desktop maupun ponsel.",
      },
      {
        question: "Berapa panjang ideal untuk meta title?",
        answer:
          "Usahakan 30–60 karakter agar judul lengkap tetap terlihat di hasil pencarian dan kartu media sosial tanpa terpotong dengan elipsis.",
      },
      {
        question: "Berapa panjang ideal untuk meta description?",
        answer:
          "Pertahankan antara 120–160 karakter agar seluruh ringkasan tetap terlihat di hasil pencarian pada desktop dan ponsel.",
      },
      {
        question: "Bagaimana Generator Meta Tag menangani karakter khusus dalam judul?",
        answer:
          "Alat ini secara otomatis meng-escape &, \", <, dan > di dalam nilai atribut sehingga tanda kutip dan karakter & tidak pernah merusak markup halaman Anda.",
      },
      {
        question: "Apa itu URL canonical dan mengapa generator menyertakannya?",
        answer:
          "URL canonical memberi tahu mesin pencari versi halaman mana yang merupakan versi asli ketika ada halaman serupa, sehingga mencegah kebingungan akibat konten duplikat.",
      },
      {
        question: "Apa perbedaan tag Open Graph dan Twitter Card?",
        answer:
          "Tag Open Graph mengatur pratinjau tautan di Facebook, LinkedIn, dan aplikasi pesan, sedangkan tag Twitter Card mengatur tampilan tautan yang sama di X.",
      },
      {
        question: "Jenis kartu Twitter mana yang sebaiknya saya pilih di Generator Meta Tag?",
        answer:
          "Gunakan summary_large_image untuk halaman yang mengandalkan gambar seperti artikel dan halaman produk, serta summary untuk halaman teks biasa yang cukup dengan gambar mini kecil.",
      },
      {
        question: "Bisakah saya melihat pratinjau tampilan tautan saya saat dibagikan?",
        answer:
          "Ya. Pratinjau kartu media sosial langsung menampilkan judul, deskripsi, dan gambar persis seperti yang akan muncul di umpan media sosial sebelum Anda menerbitkannya.",
      },
      {
        question: "Apakah Generator Meta Tag mengunggah konten halaman saya ke mana pun?",
        answer:
          "Tidak. Semuanya berjalan lokal di browser Anda dan tidak ada yang Anda ketik meninggalkan perangkat Anda.",
      },
      {
        question: "Bagaimana cara menambahkan meta tag hasil generator ke website saya?",
        answer:
          "Salin cuplikannya lalu tempel di dalam bagian <head> template halaman Anda, atau unduh meta-tags.html dan gunakan kembali blok tersebut di berbagai halaman.",
      },
      {
        question: "Kapan sebaiknya saya memakai perintah robots noindex dengan Generator Meta Tag?",
        answer:
          "Gunakan noindex hanya untuk halaman yang tidak boleh muncul di hasil pencarian, seperti halaman terima kasih, hasil pencarian internal, atau salinan staging dari halaman live.",
      },
      {
        question: "Bisakah saya memakai Generator Meta Tag untuk postingan blog atau halaman produk?",
        answer:
          "Ya. Atur og:type ke article untuk postingan blog atau product untuk halaman toko agar setiap platform menampilkan format pratinjau yang tepat.",
      },
      {
        question: "Apa yang terjadi jika URL og:image saya salah atau gambarnya hilang?",
        answer:
          "Platform media sosial akan menampilkan tanpa gambar atau pratinjau yang rusak, jadi selalu gunakan URL gambar HTTPS langsung dan periksa pratinjaunya sebelum menerbitkan.",
      },
      {
        question: "Apakah Generator Meta Tag mendukung halaman berbahasa lain?",
        answer:
          "Alat ini membuat tag untuk satu halaman dalam satu waktu, jadi atur og:locale sesuai bahasa halaman dan buat rangkaian tag terpisah untuk setiap versi terjemahan.",
      },
      {
        question: "Bisakah saya mengunduh meta tag yang dihasilkan sebagai file?",
        answer:
          "Ya. Tombol unduh menyimpan file mandiri meta-tags.html yang berisi cuplikan lengkap yang sudah di-escape.",
      },
      {
        question: "Apakah Generator Meta Tag akan meningkatkan peringkat Google saya dengan sendirinya?",
        answer:
          "Tidak ada alat yang menjamin peringkat, tetapi judul, deskripsi, dan tag sosial yang akurat meningkatkan rasio klik dan cara halaman Anda ditampilkan.",
      },
    ],
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
    instructions: [
      {
        title: "Masukkan judul, deskripsi, dan URL",
        description:
          "Ketik Judul SEO, Meta Description, URL Halaman, serta Nama Situs atau tanggal publikasi bila perlu.",
      },
      {
        title: "Ukur lebar piksel",
        description:
          "Periksa angka px langsung di samping Judul SEO — huruf lebar seperti W dan M memakai piksel horizontal jauh lebih banyak daripada l dan i.",
      },
      {
        title: "Periksa pratinjau desktop",
        description:
          "Tinjau kartu pencarian desktop untuk melihat judul lengkap, URL breadcrumb, dan deskripsi persis seperti yang dilihat pengguna desktop.",
      },
      {
        title: "Beralih ke pratinjau ponsel",
        description:
          "Beralih ke tampilan Ponsel untuk memeriksa titik pemotongan yang lebih pendek dan memastikan pesan utama tetap terlihat di layar kecil.",
      },
      {
        title: "Uji penebalan kata kunci",
        description:
          "Masukkan kueri pencarian target Anda di kolom Kata Kunci Tebal untuk melihat kata mana yang akan ditebalkan Google di dalam snippet Anda.",
      },
      {
        title: "Salin tag yang sudah jadi",
        description:
          "Jika pratinjaunya sudah bagus, salin tag <title> dan <meta name=\"description\"> yang siap tempel ke halaman Anda.",
      },
    ],
    examples: [
      {
        title: "Menangkap pemotongan judul berkarakter lebar",
        input: "Judul 60 karakter yang dipenuhi huruf besar W dan M",
        output: "Menandai luapan >580 px meski di bawah 60 karakter agar Anda memangkasnya sebelum terpotong elipsis.",
        explanation: "Metrik teks Canvas mendekati lebar rendering hasil pencarian yang sebenarnya.",
      },
      {
        title: "Pratinjau ponsel menampilkan deskripsi yang terpotong",
        input: "Judul: 55 karakter · Deskripsi: 155 karakter · Tampilan: Ponsel",
        output: "Kartu ponsel hanya menampilkan sekitar 120 karakter pertama — pesan utama di awal tetap terlihat.",
        explanation: "Tampilan ponsel menunjukkan mengapa kata terpenting harus diletakkan di awal deskripsi.",
      },
    ],
    benefits: [
      "Menggunakan lebar piksel Canvas measureText() sebagai tambahan dari jumlah karakter",
      "Memformat domain dan segmen path secara otomatis menjadi jejak breadcrumb yang rapi",
      "Mensimulasikan kata kueri tebal di dalam meta description untuk meninjau rasio klik",
      "Menyalin tag <title> dan <meta name=\"description\"> yang siap tempel dalam satu klik",
    ],
    useCases: [
      "Menyempurnakan judul blog dan judul halaman produk agar tidak terpotong di tengah kata dengan '...'",
      "Menulis meta description dengan rasio klik lebih tinggi dalam batas lipatan ponsel sekitar 120 karakter",
      "Memeriksa pengaruh tanggal publikasi terhadap panjang deskripsi yang terlihat",
      "Meninjau snippet landing page selama pemeriksaan kualitas editorial",
    ],
    faqs: [
      {
        question: "Mengapa lebar piksel lebih penting daripada jumlah karakter yang ketat?",
        answer:
          "Mesin pencari memotong judul berdasarkan lebar piksel wadah (sekitar 580–600 px di desktop), bukan jumlah karakter tetap. Huruf besar dan karakter lebar seperti W atau M membutuhkan lebar hampir dua kali lipat dibanding i atau l.",
      },
      {
        question: "Bisakah Google tetap menulis ulang judul atau meta description saya di hasil pencarian live?",
        answer:
          "Ya. Google terkadang menulis ulang snippet secara dinamis agar cocok dengan kueri pencarian tertentu atau judul H1, meskipun judul yang ringkas dan akurat mengurangi penulisan ulang yang tidak diinginkan.",
      },
      {
        question: "Apakah alat ini mengambil peringkat live dari Google?",
        answer:
          "Tidak. Alat ini adalah simulator visual snippet SERP offline yang berjalan sepenuhnya di browser Anda.",
      },
      {
        question: "Apakah Pratinjau Snippet SERP gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis dan berjalan sepenuhnya di browser Anda, sehingga tidak ada yang Anda ketik diunggah ke mana pun.",
      },
      {
        question: "Berapa panjang judul ideal untuk hasil pencarian Google?",
        answer:
          "Usahakan di bawah sekitar 580 piksel di desktop, yang biasanya berarti 50–60 karakter tergantung lebar hurufnya.",
      },
      {
        question: "Bagaimana Pratinjau Snippet SERP mengukur lebar piksel?",
        answer:
          "Alat ini memakai API Canvas measureText() di browser untuk menghitung lebar rendering judul Anda yang sebenarnya dalam gaya font yang sama seperti yang dipakai hasil pencarian.",
      },
      {
        question: "Mengapa judul saya terpotong padahal kurang dari 60 karakter?",
        answer:
          "Mesin pencari memotong berdasarkan lebar piksel, bukan jumlah karakter, sehingga huruf lebar seperti W dan M memakan ruang jauh lebih banyak daripada huruf sempit seperti i dan l.",
      },
      {
        question: "Berapa panjang meta description ideal untuk desktop dan ponsel?",
        answer:
          "Desktop menampilkan sekitar 155–160 karakter sedangkan ponsel melipat pada sekitar 120 karakter, jadi letakkan kata terpenting dan kata kunci di bagian paling depan.",
      },
      {
        question: "Bisakah saya melihat pratinjau hasil pencarian desktop dan ponsel?",
        answer:
          "Ya. Beralihlah antara tampilan Desktop dan Ponsel untuk melihat tampilan judul dan deskripsi yang sama di setiap ukuran layar.",
      },
      {
        question: "Apa fungsi fitur penebalan kata kunci di Pratinjau Snippet SERP?",
        answer:
          "Masukkan kueri pencarian target dan pratinjau akan menebalkan kata yang cocok di dalam judul dan deskripsi Anda, sama seperti Google menyorot istilah kueri di hasil sebenarnya.",
      },
      {
        question: "Apakah Pratinjau Snippet SERP menampilkan peringkat Google saya yang sebenarnya?",
        answer:
          "Tidak. Alat ini adalah simulator offline yang menunjukkan seperti apa tampilan snippet, bukan data peringkat live dari Google.",
      },
      {
        question: "Apakah Pratinjau Snippet SERP mengunggah judul atau URL saya ke mana pun?",
        answer:
          "Tidak. Semua pratinjau dan pengukuran dilakukan lokal di browser Anda. Alat ini hanya menampilkan simulasi tampilan hasil pencarian tanpa mengambil data peringkat dari Google.",
      },
      {
        question: "Bagaimana cara menyalin judul dan meta description setelah pratinjau?",
        answer:
          "Gunakan tombol salin sekali klik untuk mendapatkan tag <title> dan <meta name=\"description\"> yang siap tempel untuk halaman Anda.",
      },
      {
        question: "Mengapa Google terkadang menulis ulang judul saya di hasil live?",
        answer:
          "Google dapat mengganti judul dengan H1 atau teks halaman lain ketika menganggap teks itu lebih cocok dengan kueri pencarian, meskipun judul yang ringkas dan akurat mengurangi penulisan ulang.",
      },
      {
        question: "Haruskah saya menyertakan nama merek atau situs di judul?",
        answer:
          "Sering kali ya. Letakkan di akhir setelah pemisah agar kata kunci utama tetap di depan dan merek tetap tampil di hasil.",
      },
      {
        question: "Apa perbedaan antara tag title dan judul H1?",
        answer:
          "Tag title muncul di hasil pencarian dan tab browser, sedangkan H1 adalah judul utama yang terlihat di halaman itu sendiri.",
      },
      {
        question: "Bisakah saya menguji beberapa judul dengan cepat di Pratinjau Snippet SERP?",
        answer:
          "Ya. Ubah kolom judul dan pratinjau, lebar piksel, serta peringatan pemotongan akan diperbarui langsung saat Anda mengetik.",
      },
      {
        question: "Apakah Pratinjau Snippet SERP memperhitungkan tanggal publikasi?",
        answer:
          "Ya. Menambahkan tanggal menunjukkan bagaimana tanggal itu memperpendek deskripsi yang terlihat, yang penting untuk berita dan postingan blog.",
      },
      {
        question: "Apa yang harus saya lakukan jika deskripsi saya terpotong di ponsel?",
        answer:
          "Pindahkan pesan utama dan kata kunci target ke bagian paling depan deskripsi agar tampilan ponsel yang terlipat tetap masuk akal.",
      },
      {
        question: "Apakah pemeriksaan lebar piksel di Pratinjau Snippet SERP akurat untuk semua bahasa?",
        answer:
          "Alat ini mendekati rendering pencarian sebenarnya berdasarkan font browser Anda, sehingga hasilnya paling akurat untuk aksara Latin dan dapat berbeda untuk sistem penulisan lain.",
      },
    ],
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
    instructions: [
      {
        title: "Tempel URL canonical",
        description:
          "Masukkan satu URL https:// (atau http://) lengkap per baris ke dalam editor; baris yang salah format akan ditandai dengan jelas.",
      },
      {
        title: "Periksa baris tidak valid yang ditandai",
        description:
          "Periksa baris yang disorot untuk kesalahan ketik atau awalan https:// yang hilang dan perbaiki sebelum membuat, karena URL tidak valid dikeluarkan dari XML.",
      },
      {
        title: "Konfigurasikan tag opsional",
        description:
          "Atur <lastmod>, petunjuk <changefreq>, dan <priority> bila perlu (atau hilangkan tag opsional agar file lebih bersih).",
      },
      {
        title: "Periksa deduplikasi",
        description:
          "Periksa jumlah duplikat yang ditampilkan alat agar sitemap akhir mencantumkan setiap URL canonical tepat satu kali.",
      },
      {
        title: "Pratinjau XML yang dihasilkan",
        description:
          "Periksa keluaran XML untuk memastikan urlset, entri <loc>, dan nilai <lastmod> opsional terlihat benar.",
      },
      {
        title: "Salin atau unduh sitemap.xml",
        description:
          "Klik Salin XML atau Unduh .xml untuk meletakkannya langsung di folder root /public/ situs Anda.",
      },
    ],
    examples: [
      {
        title: "Membuat sitemap untuk situs statis di Cloudflare Pages",
        input: "5 URL canonical · lastmod: 2026-11-12 · Deduplikasi: Aktif",
        output: "Valid <?xml version=\"1.0\"?> <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">...</urlset>",
        explanation: "Meng-escape entitas XML (&, <, >, tanda kutip) dengan bersih di dalam setiap elemen <loc>.",
      },
      {
        title: "Menghapus duplikat dari daftar URL hasil ekspor",
        input: "12 URL dari ekspor CMS, termasuk 3 entri ganda",
        output: "Sitemap.xml bersih dengan 9 URL unik — duplikat dihapus otomatis.",
        explanation: "Deduplikasi memastikan setiap URL canonical hanya muncul satu kali di sitemap.",
      },
    ],
    benefits: [
      "Memvalidasi setiap baris dengan parsing URL bawaan browser sebelum mengeluarkan XML",
      "Secara otomatis meng-escape & dan karakter khusus kueri di dalam URL <loc>",
      "Menghapus URL ganda secara otomatis agar sitemap tidak membengkak",
      "Memungkinkan penghilangan <priority> dan <changefreq> dengan bersih bila diinginkan (Google mengabaikan keduanya)",
    ],
    useCases: [
      "Membuat sitemap awal untuk landing page statis atau microsite dokumentasi",
      "Menyiapkan file pengiriman URL yang bersih setelah migrasi website",
      "Membuat sitemap tambahan tanpa gambar dan berita untuk situs bisnis kecil",
      "Mengekspor XML yang terformat langsung untuk dipakai berdampingan dengan robots.txt",
    ],
    faqs: [
      {
        question: "Haruskah saya menyertakan URL non-canonical, yang dialihkan, atau noindex di sitemap?",
        answer:
          "Tidak. Sitemap sebaiknya hanya mencantumkan URL canonical yang mengembalikan HTTP 200 dan ingin Anda indeks oleh mesin pencari.",
      },
      {
        question: "Apakah Google masih memakai <priority> dan <changefreq>?",
        answer:
          "Google mengabaikan tag <priority> dan <changefreq> dan lebih berfokus pada <loc> serta tanggal <lastmod> yang akurat ketika diperbarui secara bermakna.",
      },
      {
        question: "Apakah generator ini otomatis merayapi website live saya?",
        answer:
          "Tidak. Halaman sisi klien tidak dapat merayapi website lain lintas origin karena keamanan CORS browser; tempel daftar rute hasil ekspor Anda di sini untuk langsung mendapatkan XML yang valid.",
      },
      {
        question: "Apakah Generator Sitemap XML gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis dan berjalan sepenuhnya di browser Anda, sehingga daftar URL Anda tidak pernah diunggah ke server.",
      },
      {
        question: "Berapa banyak URL yang bisa saya masukkan ke dalam satu sitemap?",
        answer:
          "Protokol Sitemaps mengizinkan hingga 50.000 URL atau 50 MB tanpa kompresi per file, jadi situs yang lebih besar sebaiknya membagi ke beberapa sitemap atau memakai indeks sitemap.",
      },
      {
        question: "Apa perbedaan antara sitemap dan robots.txt?",
        answer:
          "Sitemap mencantumkan URL yang Anda ingin ditemukan mesin pencari, sedangkan robots.txt berisi aturan crawler tentang path mana yang boleh atau tidak boleh dikunjungi.",
      },
      {
        question: "Ke mana saya mengunggah file sitemap.xml?",
        answer:
          "Letakkan di folder root situs Anda, misalnya https://example.com/sitemap.xml, agar crawler dapat menemukannya di lokasi standar.",
      },
      {
        question: "Apakah saya perlu mengirimkan sitemap saya ke Google?",
        answer:
          "Disarankan. Kirimkan di Google Search Console dan rujuk juga dengan baris Sitemap: di robots.txt agar crawler lain menemukannya.",
      },
      {
        question: "Format URL apa yang diterima Generator Sitemap XML?",
        answer:
          "Masukkan satu URL https:// atau http:// lengkap per baris, termasuk domainnya. Alat akan menandai setiap baris yang bukan URL valid.",
      },
      {
        question: "Apa yang terjadi dengan URL ganda di sitemap saya?",
        answer:
          "Duplikat dihapus otomatis sehingga sitemap akhir berisi setiap URL canonical tepat satu kali.",
      },
      {
        question: "Apa yang terjadi dengan URL tidak valid atau salah format di Generator Sitemap XML?",
        answer:
          "Baris tidak valid ditandai dengan jelas dan dikeluarkan dari XML, sehingga kesalahan ketik di satu baris tidak pernah merusak seluruh file.",
      },
      {
        question: "Bagaimana Generator Sitemap XML menangani karakter khusus di URL?",
        answer:
          "Alat ini meng-escape & dan karakter khusus lain di dalam elemen <loc> sebagai XML agar query string dan path yang di-encode tetap valid.",
      },
      {
        question: "Haruskah saya menyertakan URL gambar atau video di sitemap biasa?",
        answer:
          "Sitemap standar hanya mencantumkan URL halaman. URL gambar dan video memerlukan ekstensi sitemap sendiri jika ingin diindeks terpisah.",
      },
      {
        question: "Haruskah saya mencantumkan URL paginasi atau filter di sitemap saya?",
        answer:
          "Tidak. Cantumkan hanya halaman canonical yang dapat diindeks dan hilangkan paginasi, parameter pengurutan, serta halaman hasil pencarian internal.",
      },
      {
        question: "Apa itu <lastmod> dan haruskah saya mengaturnya di sitemap?",
        answer:
          "Tag ini mencatat tanggal terakhir halaman diubah. Atur hanya bila tanggalnya akurat, karena Google memakainya untuk menilai seberapa baru sebuah halaman.",
      },
      {
        question: "Apakah Generator Sitemap XML berfungsi offline?",
        answer:
          "Ya. Alat ini berjalan sepenuhnya di browser Anda tanpa unggahan, sehingga Anda dapat membuat sitemap tanpa koneksi internet setelah halaman dimuat.",
      },
      {
        question: "Bisakah saya membuat ulang sitemap setelah menambah halaman baru?",
        answer:
          "Ya. Tempel daftar URL yang diperbarui, unduh sitemap.xml yang baru, lalu unggah kembali ke folder root website Anda.",
      },
      {
        question: "Apa itu file indeks sitemap?",
        answer:
          "File ini mencantumkan beberapa file sitemap, dipakai situs besar untuk mengatur ribuan URL di berbagai bagian atau bahasa.",
      },
      {
        question: "Apakah sitemap menjamin Google mengindeks halaman saya?",
        answer:
          "Tidak. Sitemap membantu mesin pencari menemukan URL, tetapi pengindeksan tetap bergantung pada kualitas halaman, tautan, dan anggaran perayapan.",
      },
      {
        question: "Bisakah saya memakai Generator Sitemap XML untuk situs WordPress atau Shopify?",
        answer:
          "Ya. Ekspor atau salin daftar URL canonical Anda dari platform apa pun, tempel di sini, dan alat akan membuat sitemap.xml standar.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih preset awal atau ubah aturan",
        description:
          "Klik Izinkan Semua, Aplikasi Web / SaaS Standar, WordPress Bersih, atau Staging (Blokir Semua) untuk memuat aturan umum.",
      },
      {
        title: "Sesuaikan User-agent dan path",
        description:
          "Tambahkan path Allow atau Disallow untuk * atau crawler tertentu seperti Googlebot, Bingbot, atau GPTBot.",
      },
      {
        title: "Atur Crawl-delay bila diperlukan",
        description:
          "Tambahkan nilai Crawl-delay untuk crawler yang menghormatinya, seperti Bingbot, untuk memperlambat permintaan pada server kecil atau bersama.",
      },
      {
        title: "Lampirkan URL sitemap",
        description:
          "Masukkan URL lengkap sitemap XML Anda agar crawler dapat menemukannya lewat robots.txt, dan tambahkan baris lain bila Anda memakai beberapa sitemap.",
      },
      {
        title: "Periksa keluaran yang dikelompokkan",
        description:
          "Periksa apakah setiap blok User-agent sudah dikelompokkan dengan benar dan tidak ada aturan Disallow yang tanpa sengaja memblokir CSS, JavaScript, atau halaman publik.",
      },
      {
        title: "Salin, unduh, dan uji",
        description:
          "Salin atau unduh robots.txt, letakkan di folder root domain Anda, dan verifikasi dengan penguji robots.txt di Google Search Console.",
      },
    ],
    examples: [
      {
        title: "Aplikasi web SaaS yang memblokir /api/ dan /admin/",
        input: "User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/",
        output: "File robots.txt yang dikelompokkan dan diakhiri Sitemap: https://example.com/sitemap.xml",
        explanation: "Mengelompokkan User-agent yang cocok dengan rapi dalam blok tunggal.",
      },
      {
        title: "Memblokir seluruh lingkungan staging dari crawler",
        input: "Preset: Staging (blokir semua) · Sitemap: tidak ada",
        output: "User-agent: * · Disallow: / — memblokir perayapan seluruh domain staging.",
        explanation: "Preset staging mencegah halaman yang belum selesai terindeks sebelum peluncuran.",
      },
    ],
    benefits: [
      "Secara otomatis mengelompokkan aturan per blok User-agent yang cocok sesuai praktik terbaik RFC 9309",
      "Berisi template awal terverifikasi agar aset CSS/JS tidak terblokir tanpa sengaja",
      "Mendukung beberapa deklarasi Sitemap: untuk indeks sitemap atau file yang dilokalkan",
      "Unduhan sekali klik menghasilkan file robots.txt yang siap dipakai",
    ],
    useCases: [
      "Mencegah crawler membuang anggaran untuk /api/, /admin/, atau URL pencarian internal",
      "Mengumumkan lokasi sitemap XML di root domain",
      "Menambahkan aturan khusus untuk bot tertentu seperti AdsBot atau scraper AI",
      "Mengonfigurasi lingkungan staging sebelum peluncuran DNS",
    ],
    faqs: [
      {
        question: "Apakah Disallow: /admin/ di robots.txt menjauhkan halaman dari Pencarian Google atau melindungi rahasia?",
        answer:
          "Perbedaan penting: robots.txt menghentikan perayapan, bukan berarti menghentikan pengindeksan jika situs lain menautkan langsung ke URL tersebut — dan robots.txt dapat dibaca publik. Gunakan autentikasi untuk rute sensitif dan <meta name=\"robots\" content=\"noindex\"> untuk mencegah pengindeksan.",
      },
      {
        question: "Di mana robots.txt harus di-host?",
        answer:
          "File ini harus berada tepat di path root host Anda (https://domainanda.com/robots.txt) dan mengembalikan HTTP 200.",
      },
      {
        question: "Apakah Google menghormati Crawl-delay?",
        answer:
          "Googlebot mengabaikan Crawl-delay (gunakan pengaturan Search Console bila perlu), sedangkan Bing dan crawler lain masih menghormati interval Crawl-delay numerik.",
      },
      {
        question: "Apakah Generator Robots.txt gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis dan berjalan sepenuhnya di browser Anda, sehingga aturan situs Anda tidak diunggah ke mana pun.",
      },
      {
        question: "Apa perbedaan antara robots.txt dan tag meta robots noindex?",
        answer:
          "Robots.txt memberi tahu crawler untuk tidak mengunjungi sebuah path, sedangkan tag noindex memberi tahu mesin pencari untuk tidak menampilkan halaman yang sudah dirayapi di hasil. Keduanya menyelesaikan masalah yang berbeda.",
      },
      {
        question: "Bisakah robots.txt memblokir crawler AI seperti GPTBot?",
        answer:
          "Ya. Tambahkan grup User-agent: GPTBot dengan Disallow: / untuk menjauhkan crawler itu, dan ulangi pola yang sama untuk bot AI lain yang ingin Anda blokir.",
      },
      {
        question: "Apa arti 'User-agent: *' di robots.txt?",
        answer:
          "Artinya aturan dalam grup itu berlaku untuk setiap crawler yang mengunjungi situs Anda, kecuali ada grup User-agent yang lebih spesifik yang menimpanya.",
      },
      {
        question: "Apa perbedaan Allow dan Disallow di robots.txt?",
        answer:
          "Allow mengizinkan perayapan sebuah path dan Disallow memblokirnya. Ketika aturan tumpang tindih, aturan yang paling spesifik dan cocok yang menang.",
      },
      {
        question: "Bisakah saya memblokir satu halaman atau folder dengan Generator Robots.txt?",
        answer:
          "Ya. Tambahkan Disallow: /halaman/ untuk satu halaman atau Disallow: /folder/ untuk memblokir seluruh direktori beserta isinya.",
      },
      {
        question: "Haruskah saya memblokir file CSS dan JavaScript di robots.txt?",
        answer:
          "Tidak. Mesin pencari membutuhkan CSS dan JavaScript Anda untuk merender halaman dengan benar, dan memblokirnya dapat merusak peringkat.",
      },
      {
        question: "Preset awal apa saja yang disertakan Generator Robots.txt?",
        answer:
          "Alat ini menyertakan Izinkan Semua, Aplikasi Web / SaaS Standar, WordPress Bersih, dan Staging (Blokir Semua), sehingga Anda memulai dari template yang terbukti, bukan file kosong.",
      },
      {
        question: "Bagaimana cara menambahkan sitemap saya ke robots.txt?",
        answer:
          "Tambahkan baris seperti Sitemap: https://example.com/sitemap.xml di akhir file agar crawler menemukan sitemap Anda dari root.",
      },
      {
        question: "Bisakah saya memiliki beberapa baris Sitemap dalam satu file robots.txt?",
        answer:
          "Ya. Anda dapat mencantumkan beberapa URL sitemap — berguna untuk indeks sitemap atau sitemap terpisah per bahasa atau bagian.",
      },
      {
        question: "Apakah Generator Robots.txt mengunggah aturan saya ke mana pun?",
        answer:
          "Tidak. Semuanya berjalan lokal di browser Anda, dan file dibuat di perangkat Anda.",
      },
      {
        question: "Bagaimana cara menguji robots.txt saya setelah diterbitkan?",
        answer:
          "Unggah ke folder root domain Anda, lalu periksa dengan penguji robots.txt di Google Search Console atau dengan mengambilnya sebagai Googlebot.",
      },
      {
        question: "Apa yang terjadi jika saya tanpa sengaja memblokir seluruh website di robots.txt?",
        answer:
          "Mesin pencari akan berhenti merayapi halaman Anda. Hapus baris Disallow: /, unggah ulang file, dan minta perayapan ulang di Search Console.",
      },
      {
        question: "Apakah robots.txt menyembunyikan halaman admin saya dari peretas?",
        answer:
          "Tidak. Robots.txt dapat dibaca publik, sehingga siapa pun dapat melihat path mana yang Anda blokir. Lindungi halaman sensitif dengan kata sandi atau autentikasi.",
      },
      {
        question: "Apa itu Crawl-delay dan haruskah saya memakainya di robots.txt?",
        answer:
          "Crawl-delay meminta crawler menunggu sejumlah detik di antara permintaan. Googlebot mengabaikannya, tetapi Bing dan beberapa crawler lain menghormatinya.",
      },
      {
        question: "Bisakah saya menulis aturan robots.txt yang berbeda untuk Googlebot dan Bingbot?",
        answer:
          "Ya. Buat grup User-agent terpisah untuk setiap crawler dengan baris Allow dan Disallow masing-masing.",
      },
      {
        question: "Ke mana saya mengunggah robots.txt di Cloudflare Pages atau situs statis?",
        answer:
          "Letakkan file di folder public/ atau root keluaran build Anda agar disajikan di https://domainanda.com/robots.txt.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih jenis Schema.org",
        description:
          "Pilih Article, FAQPage, Product, Organization, atau BreadcrumbList dari pengalih di atas.",
      },
      {
        title: "Isi properti entitas",
        description:
          "Masukkan judul, pasangan tanya-jawab, penawaran harga, detail organisasi, atau jejak breadcrumb.",
      },
      {
        title: "Tambahkan baris ekstra untuk daftar",
        description:
          "Tambahkan pasangan tanya-jawab ekstra untuk FAQPage atau item jejak ekstra untuk BreadcrumbList, dan hapus baris yang tidak Anda perlukan.",
      },
      {
        title: "Periksa JSON-LD yang dihasilkan",
        description:
          "Periksa keluaran JSON langsung untuk nama dan nilai kolom yang benar, dan pastikan properti opsional yang kosong dihilangkan otomatis.",
      },
      {
        title: "Salin tag <script> atau ekspor .jsonld",
        description:
          "Salin blok lengkap <script type=\"application/ld+json\"> ke dalam <head> halaman Anda atau unduh file .jsonld.",
      },
      {
        title: "Validasi sebelum menerbitkan",
        description:
          "Tempel keluaran ke Rich Results Test atau validator Schema untuk menemukan kesalahan sintaks, karena JSON-LD yang tidak valid diabaikan mesin pencari.",
      },
    ],
    examples: [
      {
        title: "Membuat structured data FAQPage dinamis",
        input: "2 pasangan Tanya/Jawab di bawah skema FAQPage",
        output: "Blok skrip JSON-LD FAQPage yang valid dengan @context https://schema.org",
        explanation: "Memakai serialisasi JSON yang aman dengan escaping \\u003c untuk mencegah penutupan </script> yang prematur.",
      },
      {
        title: "Schema produk dengan harga dan ketersediaan",
        input: "Nama produk, Harga: Rp49.000, Mata uang: IDR, Ketersediaan: tersedia",
        output: "Blok JSON-LD Product yang valid dengan offers, price, dan availability",
        explanation: "Kolom harga, mata uang, dan ketersediaan adalah kolom inti untuk hasil belanja.",
      },
    ],
    benefits: [
      "Mendukung 5 jenis data terstruktur Schema.org yang paling berdampak",
      "Meng-escape karakter '<' dengan bersih di dalam JSON-LD untuk mencegah kerusakan skrip HTML",
      "Menghilangkan properti opsional yang kosong secara otomatis demi sintaks yang bersih",
      "Bekerja baik dengan JSON Formatter & Validator untuk ekstensi kustom",
    ],
    useCases: [
      "Menambahkan metadata penulis dan tanggal terbit artikel ke template blog editorial",
      "Menstrukturkan harga produk, mata uang, dan ketersediaan stok untuk umpan merchant",
      "Mendeklarasikan identitas merek dan URL logo di seluruh situs lewat Organization",
      "Menyematkan jejak hierarki BreadcrumbList di halaman kategori dan alat",
    ],
    faqs: [
      {
        question: "Di mana sebaiknya saya menempatkan data terstruktur JSON-LD di halaman web?",
        answer:
          "Anda dapat menempatkan <script type=\"application/ld+json\"> di dalam <head> maupun di dalam <body>; penempatan yang rapi di <head> adalah praktik standar.",
      },
      {
        question: "Mengapa generator meng-escape '<' sebagai '\\u003c' dalam keluaran JSON?",
        answer:
          "Jika jawaban FAQ pengguna mengandung '</script>', browser akan menutup blok skrip HTML lebih awal kecuali '<' di-escape sebagai '\\u003c', yang tetap merupakan JSON yang 100% valid.",
      },
      {
        question: "Apakah menambahkan markup Schema menjamin rich snippet di Google?",
        answer:
          "Tidak. Data terstruktur yang valid membuat halaman memenuhi syarat untuk fitur pencarian yang ditingkatkan, sedangkan mesin pencari memutuskan kelayakan tampilan berdasarkan kualitas halaman secara keseluruhan dan pedoman.",
      },
      {
        question: "Apakah Generator Markup Schema gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis dan berjalan sepenuhnya di browser Anda, sehingga konten Anda tidak pernah diunggah ke server.",
      },
      {
        question: "Jenis Schema.org apa yang didukung Generator Markup Schema?",
        answer:
          "Alat ini mendukung Article, FAQPage, Product, Organization, dan BreadcrumbList, yang mencakup kasus penggunaan rich result paling umum.",
      },
      {
        question: "Apa perbedaan antara JSON-LD dan Microdata?",
        answer:
          "JSON-LD adalah blok <script> terpisah yang Anda tempel ke halaman Anda, sedangkan Microdata menambahkan atribut langsung ke elemen HTML Anda yang terlihat.",
      },
      {
        question: "Bagaimana cara menambahkan JSON-LD yang dihasilkan ke website saya?",
        answer:
          "Salin blok lengkap <script type=\"application/ld+json\"> lalu tempel ke dalam <head> halaman yang sesuai. Setelah ditempel, validasi markup dengan Rich Results Test untuk memastikan Google dapat membacanya dengan benar.",
      },
      {
        question: "Bagaimana cara menguji markup schema saya setelah dibuat?",
        answer:
          "Tempel URL halaman atau kode ke Rich Results Test atau validator Schema.org untuk memeriksa kesalahan dan peningkatan yang memenuhi syarat.",
      },
      {
        question: "Bisakah saya menggabungkan beberapa jenis schema dalam satu halaman?",
        answer:
          "Ya. Satu halaman dapat memuat markup Article, BreadcrumbList, dan FAQPage sekaligus sebagai blok JSON-LD terpisah.",
      },
      {
        question: "Apa itu schema FAQPage dan kapan sebaiknya saya memakainya?",
        answer:
          "Gunakan pada halaman yang menampilkan daftar pertanyaan dan jawaban yang terlihat, seperti halaman bantuan, agar mesin pencari dapat menampilkannya sebagai hasil yang dapat diperluas.",
      },
      {
        question: "Kolom schema Product apa yang didukung generator?",
        answer:
          "Alat ini mencakup nama produk, harga, mata uang, dan ketersediaan, yang merupakan kolom inti yang dipakai mesin pencari untuk hasil belanja.",
      },
      {
        question: "Untuk apa schema BreadcrumbList dipakai?",
        answer:
          "Schema ini menjelaskan hierarki navigasi sebuah halaman, seperti Beranda > Panduan > Topik, agar mesin pencari dapat menampilkan jejak breadcrumb di hasil.",
      },
      {
        question: "Untuk apa schema Organization dipakai?",
        answer:
          "Schema ini mendeklarasikan identitas merek Anda, termasuk nama, logo, dan situs web resmi, agar mesin pencari dapat menampilkan panel pengetahuan yang konsisten.",
      },
      {
        question: "Apakah Generator Markup Schema mengunggah konten saya ke mana pun?",
        answer:
          "Tidak. Semua markup dibuat lokal di browser Anda dan tidak ada yang Anda masukkan meninggalkan perangkat Anda.",
      },
      {
        question: "Bisakah saya mengekspor schema sebagai file .jsonld?",
        answer:
          "Ya. Tombol ekspor mengunduh file .jsonld mandiri yang dapat Anda simpan, versikan, atau serahkan ke pengembang.",
      },
      {
        question: "Apa yang terjadi jika JSON-LD saya mengandung kesalahan sintaks?",
        answer:
          "Seluruh blok dapat diabaikan mesin pencari, jadi selalu validasi keluaran dengan Rich Results Test sebelum menerbitkan.",
      },
      {
        question: "Bisakah saya memakai Generator Markup Schema untuk halaman resep atau acara?",
        answer:
          "Generator hanya mencakup lima jenis, jadi halaman Recipe dan Event memerlukan JSON-LD yang ditulis manual, yang dapat Anda validasi dengan alat yang sama.",
      },
      {
        question: "Haruskah jawaban FAQ di schema sama dengan teks halaman yang terlihat?",
        answer:
          "Ya. Google mengharuskan data terstruktur cocok dengan konten yang benar-benar dapat dilihat pengguna di halaman, atau markup dapat diabaikan.",
      },
      {
        question: "Bisakah saya mengedit JSON-LD yang dihasilkan secara manual?",
        answer:
          "Ya. JSON-LD adalah JSON standar, sehingga Anda dapat menambah atau mengubah kolom di editor apa pun lalu memvalidasi ulang hasilnya sebelum menerbitkan.",
      },
      {
        question: "Apakah Generator Markup Schema berfungsi offline?",
        answer:
          "Ya. Alat ini berjalan sepenuhnya di browser Anda tanpa unggahan, sehingga Anda dapat membuat markup schema tanpa koneksi internet setelah halaman dimuat.",
      },
    ],
  },
  "url-slug-generator": {
    slug: "generator-slug-url",
    name: "Generator Slug URL & Pengoptimal Jalur SEO",
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
    instructions: [
      {
        title: "Masukkan judul atau nama halaman",
        description:
          "Tempel satu atau beberapa judul (satu per baris) ke dalam kolom Judul Halaman.",
      },
      {
        title: "Konfigurasikan aturan pemformatan slug",
        description:
          "Masukkan Domain Dasar, pilih tanda hubung (-) atau garis bawah (_), atur Panjang Slug Maksimum, dan aktifkan opsi stop word atau garis miring akhir.",
      },
      {
        title: "Pratinjau slug yang dihasilkan",
        description:
          "Periksa tabel hasil untuk melihat transliterasi aksen, penghapusan stop word, dan di mana slug panjang dipotong pada batas kata.",
      },
      {
        title: "Sesuaikan panjang atau pengaturan stop word",
        description:
          "Jika sebuah slug kehilangan maknanya atau terpotong janggal, naikkan panjang slug maksimum atau matikan penghapusan stop word, lalu buat ulang.",
      },
      {
        title: "Salin slug satuan atau daftar massal",
        description:
          "Salin slug satu per satu dari tabel atau ekspor semua slug maupun URL lengkap dalam satu klik.",
      },
      {
        title: "Jangan pernah mengganti nama slug live tanpa pengalihan",
        description:
          "Jika Anda mengubah slug pada halaman yang sudah terindeks, tambahkan pengalihan 301 dari URL lama agar backlink dan peringkat berpindah ke URL baru.",
      },
    ],
    examples: [
      {
        title: "Memangkas stop word dan diakritik dari judul",
        input: "10 Best Café & Productivity Tools in 2026",
        output: "10-best-cafe-and-productivity-tools-2026",
        explanation: "Mentransliterasi é → e, mengembangkan & → and, menghapus 'in', dan menggabungkan token huruf kecil dengan tanda hubung.",
      },
      {
        title: "Mengubah kalender editorial menjadi slug sekaligus",
        input: "5 judul blog, satu per baris · Pemisah: tanda hubung · Stop word: dihapus",
        output: "Tabel 5 slug bersih beserta URL lengkap dengan domain dasar Anda",
        explanation: "Pemrosesan massal menjaga seluruh kalender tetap memakai aturan slug yang sama dalam satu kali jalan.",
      },
    ],
    benefits: [
      "Memproses puluhan judul kalender editorial secara massal sekaligus",
      "Memotong slug yang terlalu panjang pada batas tanda hubung/kata, bukan di tengah kata",
      "Mempertahankan makna inti dengan menjaga slug pendek tetap utuh meski penghapusan stop word aktif",
      "Mengikuti rekomendasi struktur URL Google (tanda hubung ASCII UTF-8, bukan garis bawah)",
    ],
    useCases: [
      "Merencanakan struktur URL yang bersih sebelum meluncurkan kategori blog atau koleksi CMS",
      "Membersihkan judul produk internasional beraksen menjadi slug yang aman ASCII",
      "Meng audit permalink CMS yang terlalu panjang menjadi jalur 4–6 kata yang ringkas",
      "Menyiapkan daftar target canonical untuk dimasukkan ke Generator Sitemap XML",
    ],
    faqs: [
      {
        question: "Haruskah slug URL SEO memakai tanda hubung (-) atau garis bawah (_)?",
        answer:
          "Google merekomendasikan tanda hubung (-) sebagai pemisah kata di URL karena parser pencarian memperlakukan tanda hubung sebagai spasi, sedangkan garis bawah menggabungkan kata yang bersebelahan.",
      },
      {
        question: "Apakah menghapus stop word merusak keterbacaan?",
        answer:
          "Menghapus kata pengisi pendek seperti 'a', 'the', atau 'of' membuat slug blog yang sangat panjang lebih ringkas. Pertahankan stop word jika menghapusnya mengubah makna inti (misalnya 'how to').",
      },
      {
        question: "Haruskah saya mengubah slug pada URL live yang sudah terindeks?",
        answer:
          "Hanya jika Anda menerapkan pengalihan permanen 301 dari slug lama ke slug baru (memakai Generator Canonical & Pengalihan 301 kami) agar backlink dan peringkat berpindah dengan bersih.",
      },
      {
        question: "Apakah Generator Slug URL gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis, tanpa pendaftaran dan tanpa batas jumlah judul yang Anda ubah dalam satu sesi.",
      },
      {
        question: "Bisakah saya membuat slug untuk banyak judul sekaligus?",
        answer:
          "Ya. Tempel satu judul per baris dan alat mengubah seluruh batch dalam satu tabel, sehingga Anda dapat membuat slug untuk seluruh kalender editorial sekaligus.",
      },
      {
        question: "Bagaimana karakter beraksen ditangani dalam slug?",
        answer:
          "Diakritik ditransliterasi ke ASCII biasa — é menjadi e, ü menjadi u, ñ menjadi n — agar URL tetap mudah dibaca dan aman di semua browser dan server.",
      },
      {
        question: "Apa yang terjadi dengan simbol seperti & dan @ dalam slug?",
        answer:
          "Karakter & (dan) dikembangkan menjadi 'and' dan sebagian besar tanda baca lain dihapus, karena simbol di URL dapat merusak tautan atau terlihat berantakan saat dibagikan.",
      },
      {
        question: "Apa itu stop word, dan mengapa saya menghapusnya?",
        answer:
          "Stop word adalah kata pengisi pendek seperti 'a', 'the', 'of', dan 'in'. Menghapusnya memperpendek slug blog yang panjang tanpa mengubah makna inti.",
      },
      {
        question: "Bisakah saya mempertahankan stop word di slug saya?",
        answer:
          "Ya. Matikan tombol penghapusan stop word dan generator akan mempertahankan setiap kata dari judul Anda, termasuk kata pengisi pendek.",
      },
      {
        question: "Berapa panjang ideal untuk slug SEO?",
        answer:
          "Usahakan 3 sampai 6 kata yang bermakna. Gunakan pengaturan Panjang Slug Maksimum agar slug tetap pendek, dan alat memotong di batas kata sehingga kata tidak pernah terbelah di tengah.",
      },
      {
        question: "Haruskah slug URL memakai huruf kecil?",
        answer:
          "Ya. Slug huruf kecil menghindari masalah konten duplikat, karena beberapa server memperlakukan /Blog-Post dan /blog-post sebagai halaman yang berbeda.",
      },
      {
        question: "Bisakah saya memakai garis bawah, bukan tanda hubung, di slug?",
        answer:
          "Anda dapat memilih garis bawah di pengaturan, tetapi tanda hubung disarankan karena mesin pencari memperlakukan tanda hubung sebagai pemisah kata dan garis bawah sebagai penggabung.",
      },
      {
        question: "Apakah judul saya diunggah ke mana pun?",
        answer:
          "Tidak. Generator Slug URL berjalan sepenuhnya di browser Anda, sehingga judul Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Bagaimana cara melihat pratinjau URL lengkap dengan domain saya?",
        answer:
          "Masukkan domain Anda di kolom Domain Dasar dan tabel hasil akan menampilkan setiap slug sebagai URL lengkap yang dapat Anda salin.",
      },
      {
        question: "Haruskah slug saya diakhiri garis miring?",
        answer:
          "Ini opsional, tetapi konsistenlah: gunakan tombol garis miring akhir agar sesuai dengan gaya URL yang sudah dipakai situs Anda, sehingga Anda tidak membuat versi duplikat.",
      },
      {
        question: "Bisakah saya memakai alat ini untuk halaman produk dan kategori?",
        answer:
          "Ya. Alat ini berfungsi untuk nama halaman apa pun — judul produk, nama kategori, landing page, dan judul dokumentasi semuanya diubah dengan cara yang sama.",
      },
      {
        question: "Mengapa slug saya terpotong lebih pendek dari panjang maksimum yang saya atur?",
        answer:
          "Alat memotong pada tanda hubung terdekat sebelum batas, bukan memotong di tengah kata, sehingga slug dapat berakhir beberapa karakter lebih pendek dari maksimum.",
      },
      {
        question: "Apa yang terjadi dengan judul yang ditulis dalam aksara non-Latin?",
        answer:
          "Hanya diakritik Latin yang ditransliterasi; karakter dari aksara lain dihapus, sehingga judul yang seluruhnya ditulis dalam aksara lain dapat menghasilkan slug yang sangat pendek. Tambahkan versi Latin dari kata kunci untuk hasil terbaik.",
      },
      {
        question: "Bisakah saya mengekspor semua slug saya sekaligus?",
        answer:
          "Ya. Gunakan tombol salin massal untuk menyalin setiap slug, atau setiap URL lengkap, dalam satu klik, bukan menyalin satu per satu.",
      },
      {
        question: "Apa perbedaan antara slug dan permalink?",
        answer:
          "Slug adalah bagian akhir URL yang mudah dibaca, seperti 'best-cafe-tools', sedangkan permalink adalah URL lengkap termasuk domain dan folder apa pun.",
      },
    ],
  },
  "keyword-density-checker": {
    slug: "pemeriksa-kepadatan-kata-kunci",
    name: "Pemeriksa Kepadatan Kata Kunci & Penganalisis Konten",
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
    instructions: [
      {
        title: "Tempel draf artikel atau HTML",
        description:
          "Masukkan teks biasa atau HTML mentah (tetap aktifkan Hapus Tag HTML untuk mengabaikan tag markup serta blok script/style).",
      },
      {
        title: "Masukkan frasa target dan ukuran n-gram",
        description:
          "Tentukan Kata Kunci/Frasa Target opsional dan beralih antara analisis frasa 1 Kata, 2 Kata, dan 3 Kata.",
      },
      {
        title: "Tinjau tabel frekuensi",
        description:
          "Periksa istilah teratas dan persentasenya (%) untuk memastikan fokus topikal dan memangkas pengulangan frasa yang tidak alami.",
      },
      {
        title: "Periksa jumlah kata, waktu baca, dan kosakata",
        description:
          "Gunakan total kata, persentase kata unik, dan waktu baca untuk menilai apakah draf terlalu tipis, terlalu panjang, atau terlalu berulang.",
      },
      {
        title: "Tulis ulang frasa yang terlalu sering dipakai secara alami",
        description:
          "Ketika frasa 2 atau 3 kata yang sama mendominasi tabel, variasikan dengan sinonim dan kata ganti, bukan menghapus kata kunci topik Anda sepenuhnya.",
      },
      {
        title: "Perbaiki jumlah yang janggal sebelum mempercayai hasil",
        description:
          "Jika angkanya terlihat salah, pastikan Hapus Tag HTML aktif dan menu navigasi, blok kode, atau footer tidak ikut tertempel bersama salinan.",
      },
    ],
    examples: [
      {
        title: "Menemukan pengulangan frasa yang tidak disengaja dalam draf 500 kata",
        input: "Draf artikel + Target: 'technical seo' + Frasa 2 Kata",
        output: "Memeringkat bigram teratas ('technical seo', 'meta descriptions', 'canonical tags') beserta persentasenya %.",
        explanation: "Menyoroti keselarasan topik utama sekaligus pengulangan frasa yang dapat Anda variasikan secara alami.",
      },
      {
        title: "Memeriksa kepadatan frasa target dalam panduan 1.200 kata",
        input: "Draf 1.200 kata + Target: 'panduan seo teknis' muncul 12 kali",
        output: "Kepadatan frasa target 1% — 12 kemunculan dari 1.200 kata, tanpa tanda pengulangan berlebihan.",
        explanation: "12 dibagi 1.200 sama dengan 1%, sehingga persentase dihitung langsung dari jumlah kata sebenarnya.",
      },
    ],
    benefits: [
      "Menganalisis frasa multi-kata (bigram dan trigram), bukan hanya kata tunggal",
      "Menghapus <script>, <style>, dan tag HTML dengan aman sebelum menghitung salinan",
      "Menyertakan panduan jujur yang menyarankan agar tidak melakukan penjejalan kata kunci secara mekanis",
      "Menjaga draf yang belum diterbitkan dan brief klien tetap di dalam memori browser",
    ],
    useCases: [
      "Mengedit panduan panjang agar topik utama tampil jelas tanpa penjejalan yang janggal",
      "Meng audit draf bebas pesaing untuk keseimbangan kosakata topikal",
      "Meninjau salinan landing page yang dibersihkan dari HTML hasil ekspor",
      "Memeriksa rata-rata waktu baca bersama Penghitung Kata dan Pemeriksa Keterbacaan",
    ],
    faqs: [
      {
        question: "Apakah ada persentase kepadatan kata kunci ideal untuk Google?",
        answer:
          "Tidak. Google secara eksplisit menyatakan tidak ada ambang kepadatan kata kunci yang tetap. Tulislah secara alami untuk pembaca dan gunakan audit kepadatan hanya untuk memeriksa cakupan topik serta menghindari pengulangan yang tidak alami.",
      },
      {
        question: "Bagaimana Hapus Tag HTML menangani elemen <script> dan <style>?",
        answer:
          "Alat ini menghapus seluruh blok <script> dan <style> sebelum menghapus tag HTML yang tersisa, sehingga token JavaScript atau CSS tidak pernah mengotori statistik kata.",
      },
      {
        question: "Bisakah saya menganalisis URL pesaing live dengan mengetik domain di sini?",
        answer:
          "Tidak. Tempel teks atau sumber HTML secara langsung — aplikasi browser tidak dapat mengambil situs web pihak ketiga lintas origin tanpa proxy server.",
      },
      {
        question: "Apakah Pemeriksa Kepadatan Kata Kunci gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis, tanpa pendaftaran, dan Anda dapat menganalisis draf sebanyak yang Anda mau.",
      },
      {
        question: "Apa sebenarnya kepadatan kata kunci?",
        answer:
          "Kepadatan kata kunci adalah seberapa sering sebuah kata atau frasa muncul sebagai persentase dari total kata dalam sebuah teks. Frasa yang dipakai 5 kali dalam 500 kata memiliki kepadatan 1%.",
      },
      {
        question: "Apa yang dimaksud penjejalan kata kunci?",
        answer:
          "Penjejalan kata kunci adalah pengulangan frasa secara tidak alami hanya demi peringkat lebih tinggi. Cara ini terbaca buruk bagi pengunjung dan dapat merusak peringkat, jadi gunakan alat ini untuk menemukan pengulangan, bukan untuk mencapai angka target.",
      },
      {
        question: "Apa itu n-gram, dan mengapa memeriksa frasa 2 dan 3 kata?",
        answer:
          "N-gram adalah rangkaian n kata — bigram adalah frasa 2 kata dan trigram adalah frasa 3 kata. Memeriksanya mengungkap frasa berulang yang tidak terlihat dari hitungan kata tunggal.",
      },
      {
        question: "Berapa banyak kata yang saya perlukan untuk pemeriksaan kepadatan yang bermakna?",
        answer:
          "Teks pendek menghasilkan persentase yang berisik, jadi usahakan setidaknya 300 kata untuk hasil yang stabil. Cuplikan yang sangat pendek masih dapat menampilkan jumlah mentah, tetapi perlakukan persentasenya dengan hati-hati.",
      },
      {
        question: "Apakah alat menghitung kata di dalam judul dan daftar?",
        answer:
          "Ya. Semua teks terlihat yang Anda tempel dihitung, termasuk judul, daftar berpoin, dan keterangan, karena mesin pencari juga melihat konten itu.",
      },
      {
        question: "Mengapa frasa target saya menunjukkan 0%?",
        answer:
          "Periksa ejaan dan susunan kata yang tepat — bentuk jamak, tanda hubung, dan urutan kata harus cocok. Pastikan juga Hapus Tag HTML aktif jika Anda menempel HTML.",
      },
      {
        question: "Bisakah saya memeriksa kepadatan untuk beberapa kata kunci sekaligus?",
        answer:
          "Setiap jalan hanya melacak satu frasa target. Untuk memeriksa kata kunci lain, ubah frasa target dan jalankan analisis lagi pada teks yang sama.",
      },
      {
        question: "Apakah pemeriksa menghitung stop word seperti 'the' dan 'and'?",
        answer:
          "Ya, kata-kata itu muncul di tabel frekuensi 1 kata, tetapi fokuslah pada kata dan frasa topikal — stop word secara alami sering muncul di setiap teks dan memberi tahu sedikit tentang SEO.",
      },
      {
        question: "Apakah draf saya diunggah ke mana pun?",
        answer:
          "Tidak. Pemeriksa Kepadatan Kata Kunci berjalan sepenuhnya di browser Anda, sehingga draf yang belum diterbitkan dan salinan klien tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Berapa waktu baca yang baik untuk postingan blog?",
        answer:
          "Tergantung topiknya, tetapi alat menampilkan waktu baca agar Anda dapat menilai apakah sebuah postingan sesuai harapan pembaca — panduan cepat mungkin 3 menit, tutorial mendalam 10 menit atau lebih.",
      },
      {
        question: "Bisakah saya menempel HTML yang disalin dari CMS saya?",
        answer:
          "Ya. Tempel HTML mentah dan tetap aktifkan Hapus Tag HTML agar tag, skrip, dan gaya dihapus sebelum kata dihitung.",
      },
      {
        question: "Apakah pemeriksa berfungsi dengan teks non-Inggris?",
        answer:
          "Ya. Penghitungan kata berfungsi untuk bahasa apa pun yang memisahkan kata dengan spasi, dan tabel n-gram akan mencantumkan frasa yang paling sering muncul dalam bahasa itu.",
      },
      {
        question: "Bagaimana cara menurunkan kepadatan tanpa menghapus topik saya?",
        answer:
          "Gunakan sinonim, kata ganti, dan variasi frasa, bukan mengulang kata kunci yang sama persis. Topik tetap jelas sementara teks terbaca alami.",
      },
      {
        question: "Apa arti keragaman kosakata?",
        answer:
          "Keragaman kosakata adalah persentase kata unik dibandingkan total kata. Persentase yang lebih tinggi biasanya berarti tulisan yang lebih kaya dan bervariasi; persentase yang sangat rendah dapat menandakan salinan yang berulang.",
      },
      {
        question: "Bisakah saya menganalisis dokumen PDF atau Word?",
        answer:
          "Alat ini menerima teks yang ditempel, jadi salin teks dari file PDF atau Word Anda lalu tempel di sini — pemformatan tidak diperlukan untuk pemeriksaan kepadatan.",
      },
      {
        question: "Mengapa persentase berubah ketika saya mengganti ukuran n-gram?",
        answer:
          "Setiap ukuran n-gram memiliki totalnya sendiri: teks 500 kata memiliki 500 kata tunggal tetapi hanya 499 frasa dua kata, sehingga jumlah frasa yang sama menghasilkan persentase yang sedikit berbeda.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih Hreflang atau Pengalihan 301",
        description:
          "Pilih Tag Canonical & Hreflang untuk SEO internasional atau Generator Aturan Pengalihan 301 untuk migrasi URL.",
      },
      {
        title: "Masukkan lokal atau pasangan migrasi URL",
        description:
          "Tambahkan kode bahasa-wilayah ISO (en-US, en-GB, x-default) beserta URL, atau tempel pasangan path lama ke baru.",
      },
      {
        title: "Tinjau tag atau aturan yang dihasilkan",
        description:
          "Periksa setiap kode lokal, URL, dan pasangan pengalihan dari kesalahan ketik sebelum menyalin — satu kode yang salah dapat merusak seluruh rangkaian hreflang.",
      },
      {
        title: "Tambahkan x-default dan canonical yang merujuk diri sendiri",
        description:
          "Sertakan lokal fallback x-default dan pastikan setiap halaman mencantumkan dirinya sendiri sebagai canonical-nya.",
      },
      {
        title: "Salin konfigurasi yang siap untuk platform",
        description:
          "Salin tag <link> HTML, baris XML <xhtml:link>, atau aturan _redirects / .htaccess / nginx secara langsung.",
      },
      {
        title: "Validasi setelah diterapkan",
        description:
          "Setelah live, lihat sumber halaman atau gunakan validator hreflang untuk memastikan tag ada, saling berbalasan, dan mengarah ke URL yang benar.",
      },
    ],
    examples: [
      {
        title: "Aturan migrasi 301 Cloudflare Pages",
        input: "/old-blog-post, /blog/new-post/",
        output: "/old-blog-post /blog/new-post/ 301",
        explanation: "Menghasilkan sintaks _redirects Cloudflare Pages yang tepat dengan status permanen 301 yang eksplisit.",
      },
      {
        title: "Rangkaian hreflang Inggris–Spanyol dengan x-default",
        input: "en: /en/page · es: /es/pagina · x-default: /en/page",
        output: "Tag <link rel=\"alternate\" hreflang=\"en\">, hreflang=\"es\", dan hreflang=\"x-default\" yang saling berbalasan",
        explanation: "Setiap versi bahasa mencantumkan dirinya sendiri dan semua versi lain, sehingga mesin pencari tidak mengabaikan anotasi.",
      },
    ],
    benefits: [
      "Menghasilkan format HTML <link rel=\"alternate\"> dan XML <xhtml:link> secara konsisten",
      "Mendukung sintaks _redirects Cloudflare Pages, .htaccess Apache, dan server Nginx",
      "Mendorong canonical yang merujuk diri sendiri dan lokal fallback x-default",
      "Menormalkan garis miring awal pada path sumber pengalihan secara otomatis",
    ],
    useCases: [
      "Meluncurkan halaman regional Inggris/Spanyol/Prancis dengan bersih tanpa penalti duplikat",
      "Mempertahankan ekuitas backlink saat mengganti nama slug selama desain ulang",
      "Membuat file penerapan /public/_redirects Cloudflare Pages dalam hitungan detik",
      "Memverifikasi rangkaian hreflang yang saling berbalasan sebelum mengirimkan sitemap internasional",
    ],
    faqs: [
      {
        question: "Haruskah tag hreflang bersifat dua arah / saling berbalasan?",
        answer:
          "Ya. Jika Halaman A menautkan ke Halaman B dengan hreflang='es', Halaman B harus menautkan kembali ke Halaman A dengan hreflang='en' (dan ke dirinya sendiri), jika tidak mesin pencari mengabaikan anotasi tersebut.",
      },
      {
        question: "Kapan sebaiknya saya memakai x-default di hreflang?",
        answer:
          "Gunakan hreflang='x-default' untuk menetapkan halaman internasional fallback Anda bagi pengunjung yang bahasa/wilayah browsernya tidak cocok dengan alternatif spesifik apa pun.",
      },
      {
        question: "Haruskah URL canonical mengarah lintas bahasa (misalnya es → en)?",
        answer:
          "Tidak. Setiap versi bahasa terjemahan harus mendeklarasikan canonical yang merujuk diri sendiri dan mengarah ke dirinya sendiri, sedangkan hreflang menghubungkan padanan yang dilokalkan.",
      },
      {
        question: "Apakah Generator Hreflang gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis, tanpa pendaftaran, dan Anda dapat membuat rangkaian hreflang serta aturan pengalihan sebanyak yang Anda perlukan.",
      },
      {
        question: "Apa itu hreflang dan mengapa penting?",
        answer:
          "Hreflang adalah anotasi HTML atau XML yang memberi tahu mesin pencari versi bahasa dan regional halaman mana yang ditampilkan kepada setiap pengunjung, sehingga pengguna Inggris melihat halaman Inggris dan pengguna Spanyol melihat halaman Spanyol.",
      },
      {
        question: "Format apa yang harus dipakai kode bahasa-wilayah?",
        answer:
          "Gunakan kode bahasa ISO dengan wilayah ISO opsional, seperti en, es, fr-CA, atau en-GB. Bahasa didahulukan, lalu tanda hubung, lalu wilayah dengan huruf besar.",
      },
      {
        question: "Apakah saya memerlukan hreflang jika situs saya hanya satu bahasa?",
        answer:
          "Tidak. Hreflang hanya berguna ketika konten yang sama ada dalam lebih dari satu bahasa atau versi regional.",
      },
      {
        question: "Bisakah saya menaruh hreflang di sitemap XML, bukan HTML?",
        answer:
          "Ya. Alat ini menghasilkan kedua format: tag tautan HTML untuk head halaman dan blok xhtml:link untuk sitemap XML Anda. Pilih satu tempat dan pertahankan konsistensinya.",
      },
      {
        question: "Apa itu canonical yang merujuk diri sendiri?",
        answer:
          "Canonical yang merujuk diri sendiri adalah tag canonical pada sebuah halaman yang mengarah ke halaman itu sendiri. Setiap versi halaman harus menyertakannya, termasuk setiap versi terjemahan.",
      },
      {
        question: "Kapan sebaiknya saya memakai pengalihan 301, bukan tag canonical?",
        answer:
          "Gunakan pengalihan 301 ketika sebuah halaman telah berpindah permanen ke URL baru. Gunakan tag canonical ketika dua halaman serupa harus tetap live dan Anda ingin mesin pencari lebih memilih salah satunya.",
      },
      {
        question: "Apa perbedaan antara pengalihan 301 dan 302?",
        answer:
          "Pengalihan 301 bersifat permanen dan meneruskan sebagian besar sinyal peringkat ke URL baru; 302 bersifat sementara dan memberi tahu mesin pencari bahwa URL lama dapat kembali, sehingga pilihan yang salah untuk perpindahan permanen.",
      },
      {
        question: "Bagaimana cara kerja _redirects Cloudflare Pages?",
        answer:
          "Anda menaruh file _redirects di folder public situs dengan satu aturan per baris — path lama, path baru, dan kode status — lalu Cloudflare menerapkan pengalihan saat situs diterapkan.",
      },
      {
        question: "Bisakah saya mengalihkan seluruh folder dengan satu aturan?",
        answer:
          "Alat ini menghasilkan satu aturan per pasangan URL. Untuk perpindahan seluruh folder, gunakan aturan wildcard atau splat di Cloudflare Pages atau Apache, atau buat daftar pasangan lengkap di sini.",
      },
      {
        question: "Apakah pengalihan 301 meneruskan sinyal peringkat ke halaman baru?",
        answer:
          "Ya. Pengalihan 301 meneruskan sebagian besar sinyal peringkat dan nilai tautan halaman lama ke URL baru, sehingga menjadi pilihan standar untuk perpindahan permanen.",
      },
      {
        question: "Haruskah URL lama tetap ada di sitemap saya setelah pengalihan 301?",
        answer:
          "Tidak. Hapus URL yang dialihkan dari sitemap Anda dan cantumkan hanya URL tujuan baru, agar mesin pencari merayapi halaman yang berlaku.",
      },
      {
        question: "Berapa lama sebaiknya saya mempertahankan pengalihan 301?",
        answer:
          "Pertahankan setidaknya selama satu tahun, dan idealnya permanen. Menghapusnya terlalu cepat dapat merusak backlink dan bookmark lama yang masih mengarah ke URL lama.",
      },
      {
        question: "Bisakah hreflang memperbaiki masalah konten duplikat?",
        answer:
          "Tidak dengan sendirinya. Hreflang memberi tahu mesin pencari versi mana yang ditampilkan kepada setiap audiens, tetapi halaman yang benar-benar duplikat dalam bahasa yang sama tetap memerlukan tag canonical atau konsolidasi.",
      },
      {
        question: "Apa yang terjadi jika saya memakai kode lokal yang salah?",
        answer:
          "Mesin pencari mengabaikan kode yang tidak valid, sehingga kesalahan ketik seperti en-UK, bukan en-GB, secara diam-diam merusak versi bahasa itu. Periksa kembali setiap kode sebelum diterapkan.",
      },
      {
        question: "Apakah daftar URL saya diunggah ke mana pun?",
        answer:
          "Tidak. Pembuat Canonical, Hreflang & Pengalihan 301 berjalan sepenuhnya di browser Anda, sehingga URL dan rencana migrasi Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Bisakah saya membuat tag hreflang untuk lebih dari dua bahasa?",
        answer:
          "Ya. Tambahkan baris lokal sebanyak yang didukung situs Anda — alat akan membuat rangkaian berbalasan lengkap yang mencakup setiap versi bahasa yang Anda masukkan.",
      },
    ],
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
    instructions: [
      {
        title: "Salin sumber HTML dari halaman Anda",
        description:
          "Buka Lihat Sumber Halaman (atau periksa dist/index.html hasil build) dan tempel HTML ke kolom sumber.",
      },
      {
        title: "Tinjau Skor Audit DOM & daftar periksa",
        description:
          "Periksa indikator lulus/peringatan untuk judul, meta description, H1 tunggal, tautan canonical, teks alt, dan data terstruktur.",
      },
      {
        title: "Verifikasi kerangka judul & tautan",
        description:
          "Telusuri pohon H1–H4 yang diekstrak serta hitungan tautan internal/eksternal untuk memperbaiki level yang dilewati atau tag yang hilang.",
      },
      {
        title: "Perbaiki peringatan sesuai urutan prioritas",
        description:
          "Mulailah dengan judul yang hilang atau terlalu panjang dan meta description, lalu tag H1 ganda, kemudian teks alt gambar yang hilang.",
      },
      {
        title: "Tempel ulang dan audit ulang setelah perbaikan",
        description:
          "Tempel HTML yang diperbarui dan jalankan audit lagi untuk memastikan skor membaik dan tidak ada peringatan baru.",
      },
      {
        title: "Audit halaman yang dirender JavaScript dengan cara yang benar",
        description:
          "Jika tag meta hilang dari Lihat Sumber mentah pada halaman React atau SPA, salin outerHTML live dari panel Elements DevTools browser Anda.",
      },
    ],
    examples: [
      {
        title: "Meng audit ekspor HTML statis yang dirender",
        input: "Dokumen <html> lengkap dengan <title>, <meta description>, H1/H2, dan JSON-LD",
        output: "6/6 pemeriksaan lulus · Kerangka H1–H4 + rincian tautan internal/eksternal",
        explanation: "Memakai DOMParser bawaan browser dengan bersih tanpa mengeksekusi skrip yang tidak tepercaya.",
      },
      {
        title: "Menemukan meta description yang hilang di template blog",
        input: "HTML template blog tanpa tag <meta name=\"description\">",
        output: "Peringatan: meta description hilang — skor turun; tambahkan deskripsi 150–160 karakter lalu audit ulang.",
        explanation: "Pemeriksa menandai tag yang hilang sebelum halaman diterbitkan, sehingga perbaikan dapat dilakukan lebih awal.",
      },
    ],
    benefits: [
      "Memakai DOMParser bawaan (tidak pernah mengeksekusi tag <script> yang ditempel atau muatan eksternal)",
      "Jujur tentang batas CORS browser — tidak pernah berpura-pura mengambil URL jarak jauh yang diblokir",
      "Mengekstrak kerangka dokumen H1–H4 lengkap dengan bersih",
      "Memverifikasi keberadaan Open Graph dan JSON-LD bersama tag SEO klasik",
    ],
    useCases: [
      "QA pra-penerapan pada build staging dan ekspor HTML statis",
      "Memeriksa template blog CMS untuk tag <h1> ganda yang tidak disengaja atau atribut alt yang kosong",
      "Memverifikasi bahwa halaman yang dirender server mengeluarkan tag canonical dan meta dengan bersih",
      "Memeriksa halaman localhost atau halaman yang memerlukan login yang tidak dapat dijangkau crawler cloud",
    ],
    faqs: [
      {
        question: "Mengapa alat ini meminta saya menempel sumber HTML, bukan mengetik URL website?",
        answer:
          "Browser menegakkan kebijakan Cross-Origin Resource Sharing (CORS) yang memblokir JavaScript sisi klien membaca website eksternal sembarangan, dan URL localhost/staging privat tidak dapat dijangkau dari server publik. Menempel Lihat Sumber Halaman membuat audit lokal 100% andal dan privat.",
      },
      {
        question: "Bisakah SPA yang dirender JavaScript diaudit dengan benar memakai Lihat Sumber mentah?",
        answer:
          "Untuk SPA yang dirender klien di mana React menyuntikkan tag meta saat runtime, salin outerHTML live dari panel Elements DevTools Chrome/Firefox, bukan Lihat Sumber mentah.",
      },
      {
        question: "Apakah DOMParser mengeksekusi skrip di dalam HTML yang ditempel?",
        answer:
          "Tidak. DOMParser.parseFromString(..., 'text/html') membangun pohon DOM yang inert hanya untuk pemeriksaan tanpa menjalankan JavaScript atau memuat gambar eksternal.",
      },
      {
        question: "Apakah Pemeriksa SEO On-Page gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis, tanpa pendaftaran, dan Anda dapat mengaudit halaman sebanyak yang Anda mau.",
      },
      {
        question: "Berapa panjang tag title yang ideal?",
        answer:
          "Usahakan 50 sampai 60 karakter. Judul yang lebih panjang terpotong di hasil pencarian, sedangkan judul yang sangat pendek menyia-nyiakan kesempatan untuk menjelaskan halaman dengan jelas.",
      },
      {
        question: "Berapa panjang meta description yang ideal?",
        answer:
          "Usahakan 150 sampai 160 karakter. Panjang itu biasanya tampil penuh di hasil pencarian tanpa terpotong.",
      },
      {
        question: "Berapa banyak tag H1 yang sebaiknya dimiliki sebuah halaman?",
        answer:
          "Satu. Satu H1 menyatakan topik utama halaman; subtopik berada di judul H2 dan H3 di bawahnya.",
      },
      {
        question: "Bisakah saya melewati level judul, misalnya H1 lalu H3?",
        answer:
          "Hindari. Jaga hierarki tetap berurutan — H1, lalu H2, lalu H3 — agar mesin pencari dan pembaca layar dapat mengikuti struktur halaman.",
      },
      {
        question: "Apa yang terjadi jika halaman saya tidak memiliki tag canonical?",
        answer:
          "Mesin pencari akan memilih sendiri URL canonical, yang mungkin bukan versi yang Anda inginkan. Menambahkannya secara eksplisit menghilangkan tebakan.",
      },
      {
        question: "Mengapa teks alt gambar penting untuk SEO?",
        answer:
          "Teks alt menjelaskan gambar kepada mesin pencari dan pembaca layar, membantu gambar mendapat peringkat di pencarian gambar, dan menjaga halaman tetap dapat dipakai saat gambar gagal dimuat.",
      },
      {
        question: "Apa itu JSON-LD dan mengapa saya harus memeriksanya?",
        answer:
          "JSON-LD adalah blok data terstruktur yang menjelaskan konten halaman Anda kepada mesin pencari, mendukung rich result seperti rating, FAQ, dan breadcrumb. Pemeriksa memastikan keberadaannya.",
      },
      {
        question: "Apakah pemeriksa mengaudit tag Open Graph?",
        answer:
          "Ya. Alat ini melaporkan apakah tag Open Graph seperti og:title dan og:image ada, sehingga halaman Anda tampil benar saat dibagikan di media sosial.",
      },
      {
        question: "Bisakah saya mengaudit halaman yang memerlukan login?",
        answer:
          "Ya. Karena Anda sendiri yang menempel HTML, Anda dapat mengaudit halaman privat, staging, dan localhost yang tidak dapat dijangkau crawler publik.",
      },
      {
        question: "Apakah HTML saya diunggah ke mana pun?",
        answer:
          "Tidak. Pemeriksa SEO On-Page berjalan sepenuhnya di browser Anda, sehingga sumber halaman Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Skor audit saya rendah — apa yang harus saya perbaiki dulu?",
        answer:
          "Perbaiki masalah dalam urutan ini: judul yang hilang atau terlalu panjang, meta description yang hilang, tag H1 ganda, lalu teks alt gambar yang hilang.",
      },
      {
        question: "Apakah pemeriksa menghitung tautan internal dan eksternal?",
        answer:
          "Ya. Alat ini menghitung tautan internal dan eksternal secara terpisah, sehingga Anda dapat melihat apakah sebuah halaman cukup menaut keluar dan apakah navigasi internal ada.",
      },
      {
        question: "Bisakah saya mengaudit beranda dan postingan blog saya dengan alat yang sama?",
        answer:
          "Ya. Tempel sumber HTML setiap halaman satu per satu dan audit satu per satu — setiap halaman mendapat skor dan daftar periksanya sendiri.",
      },
      {
        question: "Mengapa beberapa pemeriksaan menampilkan peringatan, bukan kegagalan?",
        answer:
          "Peringatan menandai masalah praktik terbaik yang layak diperbaiki tetapi bukan kesalahan kritis, seperti judul yang sedikit panjang atau level judul yang dilewati.",
      },
      {
        question: "Apakah alat ini berfungsi untuk halaman WordPress?",
        answer:
          "Ya. Buka Lihat Sumber Halaman pada halaman WordPress apa pun, salin HTML-nya dan tempel di sini — pemeriksa berfungsi dengan keluaran CMS apa pun.",
      },
      {
        question: "Seberapa sering saya harus menjalankan audit SEO on-page?",
        answer:
          "Jalankan setiap kali Anda mengubah template, menerbitkan jenis halaman baru, atau setelah desain ulang — dan audit ulang setelah perbaikan untuk memastikan skor membaik.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih perintah pengindeksan & tautan",
        description:
          "Atur index/noindex, follow/nofollow, dan batasan opsional seperti noarchive, nosnippet, atau noimageindex.",
      },
      {
        title: "Sesuaikan batas cuplikan & pratinjau",
        description:
          "Konfigurasikan max-snippet (-1 untuk tanpa batas), max-image-preview (large untuk Google Discover), dan max-video-preview.",
      },
      {
        title: "Salin tag HTML atau header HTTP",
        description:
          "Gunakan tag meta HTML di dalam <head>, atau terapkan blok header X-Robots-Tag untuk PDF dan unduhan non-HTML.",
      },
      {
        title: "Pilih format keluaran yang tepat",
        description:
          "Gunakan tag meta HTML untuk halaman biasa, X-Robots-Tag untuk PDF dan file non-HTML lain, serta blok _headers untuk aturan path Cloudflare.",
      },
      {
        title: "Tempatkan keluaran di tempat yang benar",
        description:
          "Letakkan tag meta di dalam <head> halaman Anda, atau tambahkan aturan header ke konfigurasi server atau file _headers Cloudflare Anda, lalu terapkan.",
      },
      {
        title: "Halaman masih muncul di pencarian?",
        description:
          "Noindex hanya berfungsi setelah mesin pencari merayapi ulang halaman, yang dapat memakan waktu berhari-hari. Periksa bahwa robots.txt tidak memblokir perayapan, lalu konfirmasi di Search Console.",
      },
    ],
    examples: [
      {
        title: "Mengecualikan unduhan PDF privat lewat _headers Cloudflare Pages",
        input: "noindex, nofollow · Path: /private/*",
        output: "/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1",
        explanation: "X-Robots-Tag HTTP berfungsi untuk PDF, gambar, dan file non-HTML yang tidak memiliki elemen <head>.",
      },
      {
        title: "Menandai halaman terima kasih dengan noindex",
        input: "noindex, follow · Halaman: /terima-kasih/",
        output: "<meta name=\"robots\" content=\"noindex, follow\">",
        explanation: "Halaman tetap dapat dikunjungi tetapi tidak muncul di hasil pencarian, sementara tautannya tetap diikuti.",
      },
    ],
    benefits: [
      "Menghasilkan HTML <meta>, X-Robots-Tag HTTP generik, dan _headers Cloudflare Pages secara bersamaan",
      "Menyertakan default max-image-preview:large yang direkomendasikan Google Discover",
      "Mencegah kombinasi yang saling bertentangan secara otomatis (menonaktifkan penggeser cuplikan/gambar saat nosnippet/noimageindex aktif)",
      "Membuat penghapusan indeks PDF/aset non-HTML menjadi mudah lewat header HTTP",
    ],
    useCases: [
      "Mencegah halaman terima kasih, hasil pencarian internal, atau portal anggota masuk ke indeks Google",
      "Menghapus indeks brosur PDF atau aset whitepaper yang di-host lewat header X-Robots-Tag",
      "Mengaktifkan max-image-preview:large untuk artikel editorial yang menargetkan Google Discover",
      "Menambahkan batas noarchive atau panjang cuplikan yang ketat pada dokumentasi berbayar atau sensitif",
    ],
    faqs: [
      {
        question: "Kapan sebaiknya saya memakai X-Robots-Tag, bukan <meta name=\"robots\">?",
        answer:
          "Gunakan header HTTP X-Robots-Tag untuk file non-HTML (seperti PDF, spreadsheet, atau gambar) atau saat menerapkan aturan pengindeksan ke seluruh path folder lewat aturan CDN.",
      },
      {
        question: "Haruskah saya menggabungkan Disallow robots.txt dengan <meta name=\"robots\" content=\"noindex\">?",
        answer:
          "Tidak! Jika URL diblokir di robots.txt, bot pencarian tidak dapat merayapi halaman untuk membaca tag HTML <meta name=\"robots\" content=\"noindex\"> di dalamnya. Izinkan perayapan jika Anda mengandalkan meta noindex.",
      },
      {
        question: "Apa arti max-snippet:-1?",
        answer:
          "Nilai -1 membiarkan mesin pencari memilih panjang cuplikan apa pun yang dianggap membantu, sedangkan 0 mencegah cuplikan teks dan bilangan bulat positif (seperti 160) membatasi panjang karakter cuplikan.",
      },
      {
        question: "Apakah Generator Meta Tag Robots gratis digunakan?",
        answer:
          "Ya. Alat ini sepenuhnya gratis, tanpa pendaftaran, dan Anda dapat membuat tag dan aturan header sebanyak yang Anda perlukan.",
      },
      {
        question: "Apa fungsi noindex?",
        answer:
          "Noindex memberi tahu mesin pencari untuk tidak menyertakan sebuah halaman di hasil pencarian. Halaman tetap live dan dapat dikunjungi, tetapi tidak akan muncul di Google atau Bing.",
      },
      {
        question: "Apa fungsi nofollow?",
        answer:
          "Nofollow memberi tahu mesin pencari untuk tidak mengikuti tautan di sebuah halaman atau meneruskan sinyal peringkat melaluinya. Ini berguna untuk halaman dengan tautan yang tidak tepercaya atau berbayar.",
      },
      {
        question: "Apa perbedaan antara robots.txt dan meta tag robots?",
        answer:
          "Robots.txt memblokir perayapan URL, sedangkan meta tag robots mengontrol apakah halaman yang dirayapi diindeks. Keduanya menyelesaikan masalah yang berbeda dan tidak boleh digabung sembarangan.",
      },
      {
        question: "Berapa lama noindex mulai bekerja?",
        answer:
          "Noindex hanya berlaku setelah mesin pencari merayapi ulang halaman, yang dapat memakan waktu berhari-hari atau berminggu-minggu tergantung seberapa sering halaman dikunjungi.",
      },
      {
        question: "Apa itu max-image-preview:large?",
        answer:
          "Tag ini mengizinkan mesin pencari menampilkan pratinjau gambar besar untuk halaman Anda, yang direkomendasikan Google untuk halaman yang menargetkan Google Discover.",
      },
      {
        question: "Apa fungsi nosnippet?",
        answer:
          "Nosnippet mencegah mesin pencari menampilkan cuplikan teks apa pun untuk halaman di hasil pencarian, sehingga hanya judul dan URL yang muncul.",
      },
      {
        question: "Apa fungsi noarchive?",
        answer:
          "Noarchive menghentikan mesin pencari menawarkan salinan cache halaman Anda, yang berguna untuk konten yang sensitif terhadap waktu atau sering berubah.",
      },
      {
        question: "Apa fungsi noimageindex?",
        answer:
          "Noimageindex memberi tahu mesin pencari untuk tidak mengindeks gambar di sebuah halaman, sedangkan halaman itu sendiri tetap dapat muncul di hasil pencarian biasa.",
      },
      {
        question: "Bisakah saya memberi noindex pada file PDF?",
        answer:
          "Ya. PDF tidak memiliki head HTML, jadi gunakan header HTTP X-Robots-Tag — alat ini menghasilkan blok header yang tepat untuk Anda.",
      },
      {
        question: "Haruskah saya memberi noindex pada halaman terima kasih dan checkout?",
        answer:
          "Ya. Halaman terima kasih, langkah checkout, hasil pencarian internal, dan area anggota biasanya tidak menambah nilai pencarian dan umumnya diatur ke noindex.",
      },
      {
        question: "Bisakah saya menggabungkan noindex dan nofollow di halaman yang sama?",
        answer:
          "Ya. Keduanya mengontrol hal yang berbeda — pengindeksan dan pengikutan tautan — dan sering dipakai bersama di halaman privat atau utilitas.",
      },
      {
        question: "Apa itu file _headers Cloudflare?",
        answer:
          "File ini berada di folder public situs Anda dan memetakan path URL ke header respons HTTP. Alat ini menghasilkan blok siap tempel untuk path apa pun yang Anda pilih.",
      },
      {
        question: "Apakah meta tag robots berfungsi di Bing dan mesin pencari lain?",
        answer:
          "Ya. Sebagian besar mesin pencari besar menghormati perintah robots standar, meskipun beberapa hanya mendukung sebagian — gunakan perintah umum untuk cakupan terluas.",
      },
      {
        question: "Apakah konfigurasi saya diunggah ke mana pun?",
        answer:
          "Tidak. Generator Meta Tag Robots berjalan sepenuhnya di browser Anda, sehingga pengaturan Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Apa yang terjadi jika saya memilih perintah yang saling bertentangan?",
        answer:
          "Alat mencegah kombinasi yang saling bertentangan secara otomatis — misalnya, alat menonaktifkan penggeser cuplikan dan pratinjau gambar ketika nosnippet atau noimageindex aktif.",
      },
      {
        question: "Haruskah saya memakai noindex atau sekadar menghapus halaman?",
        answer:
          "Jika halaman harus hilang selamanya, hapus dan biarkan mengembalikan status 404 atau 410. Gunakan noindex ketika halaman harus tetap live tetapi tidak boleh muncul di hasil pencarian.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih gambar sumber",
        description:
          "Pilih gambar PNG, JPG, WebP, atau GIF apa pun dari perangkat Anda untuk membaca dimensi dan ukuran byte aslinya.",
      },
      {
        title: "Pilih format target, batas lebar, dan kualitas",
        description:
          "Pilih WebP atau JPG untuk penghematan byte yang dramatis, secara opsional terapkan batas lebar maksimum (seperti 1920 px atau 1280 px), dan atur penggeser kualitas dari 10% hingga 100%.",
      },
      {
        title: "Jalankan kompresi",
        description:
          "Klik Kompres untuk meng-encode ulang gambar secara lokal di browser Anda dan langsung melihat ukuran byte yang baru.",
      },
      {
        title: "Bandingkan sebelum dan sesudah",
        description:
          "Periksa pratinjau berdampingan serta penghematan byte dan persentase yang tepat untuk memastikan kualitasnya masih terlihat bagus.",
      },
      {
        title: "Unduh file yang dikompres",
        description:
          "Klik Unduh untuk menyimpan gambar yang dioptimalkan ke perangkat Anda, lalu ulangi proses untuk file lain kapan pun Anda perlu.",
      },
      {
        title: "Tips: keluaran lebih besar dari masukan?",
        description:
          "Jika PNG kecil membesar setelah kompresi, ubah format keluaran ke WebP atau JPG, atau turunkan sedikit penggeser kualitas, lalu kompres lagi.",
      },
    ],
    examples: [
      {
        title: "Mengoptimalkan foto hero 2,4 MB untuk artikel blog",
        input: "JPG 3840×2160 · Keluaran: WebP · Lebar Maks: 1280 px · Kualitas: 80%",
        output: "WebP 1280×720 biasanya ~85–140 KB (pengurangan muatan -94%)",
        explanation: "Menggabungkan pembatasan dimensi dengan kompresi WebP modern mempercepat Largest Contentful Paint secara dramatis.",
      },
      {
        title: "Mengecilkan tangkapan layar PNG untuk email",
        input: "PNG 1920×1080, 1,8 MB · Keluaran: WebP · Kualitas: 75%",
        output: "WebP yang jauh lebih kecil, biasanya di bawah 300 KB, siap dilampirkan ke email",
        explanation: "Tangkapan layar dengan area warna datar terkompres sangat baik ke WebP tanpa kehilangan keterbacaan.",
      },
    ],
    benefits: [
      "Tanpa unggahan server sehingga grafik produk yang belum dirilis dan foto privat tetap sepenuhnya lokal",
      "Mendukung WebP, JPEG (dengan pengisian matte alfa putih otomatis), dan peng-encode-an ulang PNG",
      "Menampilkan ukuran byte sebelum dan sesudah yang sebenarnya serta persentase penghematan secara instan",
      "Batas lebar maksimum opsional mengubah ukuran foto kamera yang terlalu besar dalam satu langkah",
    ],
    useCases: [
      "Memperkecil banner hero dan tangkapan layar untuk meningkatkan Core Web Vitals dan LCP",
      "Menyiapkan lampiran yang lebih ringan untuk email, portal, dan unggahan CMS",
      "Mengubah tangkapan layar mentah yang berat menjadi aset WebP yang ringan",
      "Memeriksa dengan cepat trade-off kualitas optimal vs. ketepatan visual",
    ],
    faqs: [
      {
        question: "Mengapa mengompres PNG kecil menjadi PNG terkadang menambah ukurannya?",
        answer:
          "Canvas browser meng-encode ulang PNG memakai aliran DEFLATE lossless standar tanpa alat kuantisasi palet khusus seperti pngquant. Mengubah Format Keluaran ke WebP atau JPG biasanya memangkas ukuran file secara dramatis.",
      },
      {
        question: "Apakah foto saya diunggah ke server kompresi eksternal?",
        answer:
          "Tidak. Semua decoding, pengubahan ukuran, dan peng-encode-an ulang Canvas berjalan sepenuhnya di dalam memori browser Anda.",
      },
      {
        question: "Apa yang terjadi dengan latar transparan jika saya memilih JPG?",
        answer:
          "Karena JPEG tidak mendukung transparansi alfa, area transparan diisi bersih dengan putih solid (#ffffff) sebelum di-encode.",
      },
      {
        question: "Apakah Kompresor Gambar gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran, tanpa watermark, dan tanpa batas jumlah gambar yang Anda kompres.",
      },
      {
        question: "Format gambar apa yang bisa saya kompres?",
        answer:
          "Anda dapat mengompres gambar PNG, JPG, WebP, dan GIF, lalu mengunduh hasilnya sebagai WebP, JPG, atau PNG.",
      },
      {
        question: "Seberapa besar Kompresor Gambar dapat mengecilkan foto saya?",
        answer:
          "Penghematan bergantung pada format asli dan pengaturan kualitas, tetapi foto yang diubah ke WebP pada kualitas 80% sering menyusut 50–90%.",
      },
      {
        question: "Apakah mengompres gambar saya akan menurunkan kualitasnya?",
        answer:
          "Format lossy seperti WebP dan JPG menukar sedikit detail dengan file yang jauh lebih kecil. Gunakan penggeser kualitas dan pratinjau untuk menemukan keseimbangan yang Anda sukai, atau pertahankan PNG untuk hasil lossless.",
      },
      {
        question: "Apakah Kompresor Gambar mengubah ukuran dimensi gambar saya?",
        answer:
          "Hanya jika Anda mengatur batas lebar maksimum. Jika tidak, dimensi piksel tetap sama dan hanya ukuran file yang berubah.",
      },
      {
        question: "Bisakah saya mengompres gambar untuk lampiran email?",
        answer:
          "Ya, mengompres terlebih dahulu membuat foto besar cukup kecil untuk muat dalam batas lampiran email tanpa membaginya ke beberapa pesan.",
      },
      {
        question: "Pengaturan kualitas apa yang sebaiknya saya pilih untuk gambar website?",
        answer:
          "Kualitas 75–85% dalam WebP biasanya terlihat hampir identik dengan aslinya sambil menjaga file cukup kecil untuk pemuatan halaman yang cepat.",
      },
      {
        question: "Mengapa saya harus mengubah JPG menjadi WebP saat mengompres?",
        answer:
          "WebP memakai kompresi yang lebih efisien daripada JPG, sehingga foto yang sama pada kualitas visual yang sama biasanya jauh lebih kecil.",
      },
      {
        question: "Bisakah saya mengompres beberapa gambar sekaligus?",
        answer:
          "Kompresor memproses satu gambar dalam satu waktu agar Anda dapat menyempurnakan kualitas, lebar, dan format untuk setiap foto sebelum mengunduhnya.",
      },
      {
        question: "Apakah kompresi berfungsi offline?",
        answer:
          "Ya, setelah halaman dimuat, semua kompresi berjalan lokal di browser Anda, sehingga berfungsi tanpa koneksi internet.",
      },
      {
        question: "Apakah gambar saya yang dikompres akan memiliki watermark?",
        answer:
          "Tidak, gambar yang diunduh tidak pernah menyertakan watermark atau branding. Semua kompresi berjalan lokal di browser Anda, jadi hasil unduhan tetap bersih tanpa logo tambahan apa pun.",
      },
      {
        question: "Format apa yang terbaik untuk mengompres tangkapan layar?",
        answer:
          "WebP biasanya menghasilkan file terkecil untuk tangkapan layar. Gunakan PNG hanya ketika Anda memerlukan kualitas lossless yang sempurna piksel demi piksel.",
      },
      {
        question: "Bisakah saya mengompres gambar tanpa mengubah dimensinya?",
        answer:
          "Ya, biarkan batas lebar maksimum tidak diatur dan alat mempertahankan lebar dan tinggi asli sambil hanya mengurangi ukuran file.",
      },
      {
        question: "Apakah Kompresor Gambar menyimpan metadata gambar?",
        answer:
          "Peng-encode-an ulang Canvas browser umumnya menghapus metadata EXIF seperti pengaturan kamera dan lokasi, yang juga membantu mengecilkan file.",
      },
      {
        question: "Bisakah saya memakai Kompresor Gambar di ponsel saya?",
        answer:
          "Ya, alat ini berfungsi di browser ponsel modern. Pilih gambar dari galeri foto Anda dan unduh hasil kompresinya dengan cara yang sama.",
      },
      {
        question: "Berapa ukuran gambar maksimum yang bisa saya kompres?",
        answer:
          "Tidak ada batas server yang tetap karena tidak ada yang diunggah. Gambar yang sangat besar hanya dibatasi memori perangkat dan ukuran Canvas browser Anda.",
      },
      {
        question: "Bagaimana cara mengompres gambar hingga di bawah 100 KB?",
        answer:
          "Pilih keluaran WebP, atur lebar maksimum seperti 1280 px, dan turunkan penggeser kualitas selangkah demi selangkah hingga ukuran file yang ditampilkan turun di bawah 100 KB.",
      },
    ],
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
    instructions: [
      {
        title: "Muat gambar Anda",
        description:
          "Unggah gambar PNG, JPG, WebP, atau GIF apa pun untuk membaca lebar dan tinggi piksel aslinya.",
      },
      {
        title: "Atur lebar, tinggi, dan mode fit",
        description:
          "Masukkan piksel kustom (dengan Kunci Rasio Aspek opsional) atau pilih preset sosial, lalu pilih Cover-Crop Tengah atau Regang/Skala Tepat.",
      },
      {
        title: "Pilih format keluaran",
        description:
          "Pilih PNG untuk transparansi, JPG untuk foto, atau WebP untuk file terkecil sebelum merender.",
      },
      {
        title: "Render gambar yang diubah ukurannya",
        description:
          "Klik Render Gambar yang Diubah Ukuran untuk menghasilkan versi baru pada dimensi piksel yang tepat.",
      },
      {
        title: "Tinjau hasil dan unduh",
        description:
          "Periksa pratinjau untuk ketajaman dan pemotongan, periksa ukuran file, lalu klik Unduh untuk menyimpannya.",
      },
      {
        title: "Tips: gambar terlihat meregang atau buram?",
        description:
          "Aktifkan Kunci Rasio Aspek atau beralih ke Cover-Crop Tengah untuk menghindari distorsi, dan hindari memperbesar jauh melampaui ukuran asli.",
      },
    ],
    examples: [
      {
        title: "Memotong tangkapan layar tinggi menjadi kartu Open Graph 1200×630",
        input: "Tangkapan layar 1440×1600 · Preset: OG Share (1200×630) · Fit: Cover-Crop Tengah",
        output: "Kartu 1200×630 yang tajam dan terpusat vertikal tanpa gepeng atau distorsi.",
        explanation: "Cover-crop menskalakan secara proporsional hingga bingkai target terisi, memangkas tepi berlebih secara merata.",
      },
      {
        title: "Membuat foto profil avatar persegi 512×512",
        input: "Foto potret 3024×4032 · Preset: Avatar (512×512) · Fit: Cover-Crop Tengah",
        output: "Avatar persegi 512×512 yang terpusat pada wajah tanpa regangan.",
        explanation: "Preset avatar memotong sisi berlebih secara merata sehingga wajah tetap di tengah bingkai persegi.",
      },
    ],
    benefits: [
      "Preset piksel sekali klik untuk Open Graph, YouTube HD, Persegi, dan Avatar",
      "Cover-Crop Tengah mencegah regangan yang janggal saat mengubah rasio aspek",
      "Kualitas imageSmoothingQuality Canvas yang tinggi menjaga tipografi dan garis tetap tajam",
      "Mengekspor langsung ke PNG, JPG, atau WebP dengan pembacaan ukuran file yang sebenarnya",
    ],
    useCases: [
      "Membuat kartu og:image 1200×630 untuk postingan blog dan landing page",
      "Menyiapkan foto produk 1080×1080 dan avatar profil 512×512",
      "Mengecilkan tangkapan layar DPI tinggi sebelum menambahkannya ke dokumentasi",
      "Membuat dimensi hero yang tepat sesuai kebutuhan template CMS",
    ],
    faqs: [
      {
        question: "Apa perbedaan antara Cover-Crop Tengah dan Regang / Skala Tepat?",
        answer:
          "Cover-Crop Tengah mempertahankan proporsi alami dan memangkas tepi yang meluap secara simetris ketika rasio aspek baru berbeda. Skala Tepat memaksa seluruh gambar asli ke dalam lebar dan tinggi target.",
      },
      {
        question: "Bisakah saya memperbesar foto kecil menjadi 4K dengan bersih?",
        answer:
          "Interpolasi Canvas dapat mengekspor grid piksel yang lebih besar, meskipun memperbesar melampaui resolusi asli tidak dapat menciptakan detail halus yang hilang.",
      },
      {
        question: "Berapa dimensi keluaran maksimum yang didukung?",
        answer:
          "Masukan dibatasi hingga 8000 px per sumbu agar tetap aman di dalam batas memori Canvas browser.",
      },
      {
        question: "Apakah Pengubah Ukuran Gambar gratis digunakan?",
        answer:
          "Ya, alat ini gratis tanpa pendaftaran, tanpa watermark, dan tanpa batas jumlah gambar yang Anda ubah ukurannya.",
      },
      {
        question: "Apa perbedaan antara mengubah ukuran dan memotong gambar?",
        answer:
          "Mengubah ukuran mengubah seluruh dimensi piksel gambar, sedangkan memotong membuang sebagian gambar. Alat ini dapat melakukan keduanya, termasuk cover-crop tengah.",
      },
      {
        question: "Bisakah Pengubah Ukuran Gambar membuat gambar 1200x630 untuk berbagi sosial?",
        answer:
          "Ya, pilih preset Open Graph (1200×630) dan alat akan mengatur ukuran gambar Anda tepat untuk pratinjau tautan di platform sosial.",
      },
      {
        question: "Bagaimana cara mengubah ukuran gambar tanpa meregangkannya?",
        answer:
          "Tetap aktifkan Kunci Rasio Aspek atau gunakan Cover-Crop Tengah, agar alat menskalakan secara proporsional, bukan menekan gambar.",
      },
      {
        question: "Bisakah saya mengubah ukuran gambar menjadi persegi 1080x1080?",
        answer:
          "Ya, pilih preset Persegi atau masukkan 1080 untuk lebar dan tinggi dengan Cover-Crop Tengah aktif.",
      },
      {
        question: "Apakah mengubah ukuran gambar mengurangi ukuran filenya?",
        answer:
          "Biasanya ya, karena piksel yang lebih sedikit berarti data yang lebih sedikit, terutama ketika Anda juga mengekspor sebagai WebP atau JPG.",
      },
      {
        question: "Format gambar apa yang bisa saya ubah ukurannya?",
        answer:
          "Anda dapat mengubah ukuran gambar PNG, JPG, WebP, dan GIF lalu mengekspornya sebagai PNG, JPG, atau WebP.",
      },
      {
        question: "Apakah mengubah ukuran akan membuat gambar saya buram?",
        answer:
          "Mengecilkan biasanya tetap tajam berkat penghalusan Canvas berkualitas tinggi. Memperbesar melampaui ukuran asli dapat melembutkan detail halus.",
      },
      {
        question: "Bisakah saya mengubah ukuran gambar untuk foto profil?",
        answer:
          "Ya, gunakan preset Avatar (512×512) dengan Cover-Crop Tengah untuk mendapatkan foto profil persegi yang sempurna.",
      },
      {
        question: "Apa itu Cover-Crop Tengah di Pengubah Ukuran Gambar?",
        answer:
          "Alat ini menskalakan gambar hingga mengisi bingkai target, lalu memangkas tepi yang meluap secara merata dari tengah sehingga tidak ada yang terlihat meregang.",
      },
      {
        question: "Apakah Pengubah Ukuran Gambar mengunggah foto saya ke mana pun?",
        answer:
          "Tidak, semua pengubahan ukuran dilakukan lokal di browser Anda dan gambar Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Bisakah saya mengubah ukuran gambar di ponsel saya?",
        answer:
          "Ya, alat ini berfungsi di browser ponsel. Unggah foto, masukkan dimensi baru, dan unduh hasilnya.",
      },
      {
        question: "Apa yang terjadi dengan transparansi saat saya mengubah ukuran PNG?",
        answer:
          "Transparansi dipertahankan selama Anda mengekspor sebagai PNG atau WebP. Mengekspor sebagai JPG akan mengisi area transparan dengan putih.",
      },
      {
        question: "Bisakah saya mengubah ukuran beberapa gambar ke ukuran yang sama?",
        answer:
          "Alat ini mengubah ukuran satu gambar dalam satu waktu. Ulangi preset atau dimensi yang sama untuk setiap gambar agar tetap konsisten.",
      },
      {
        question: "Berapa gambar terbesar yang dapat ditangani Pengubah Ukuran Gambar?",
        answer:
          "Masukan dibatasi hingga 8000 px per sisi agar tetap dalam batas memori Canvas browser.",
      },
      {
        question: "Bagaimana cara mengubah ukuran gambar untuk thumbnail YouTube?",
        answer:
          "Pilih preset YouTube HD (1280×720) agar thumbnail Anda cocok dengan ukuran 16:9 yang disarankan.",
      },
      {
        question: "Mengapa file gambar saya yang diubah ukurannya masih besar?",
        answer:
          "Ukuran piksel hanya sebagian cerita. Ekspor sebagai WebP atau JPG, bukan PNG, atau gunakan Kompresor Gambar setelahnya untuk mengecilkan file lebih lanjut.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih format target dan opsi",
        description:
          "Pilih keluaran PNG, JPG, atau WebP, atur kualitas lossy bila berlaku, dan pilih warna matte latar saat mengubah gambar transparan menjadi JPG.",
      },
      {
        title: "Pilih satu atau beberapa gambar",
        description:
          "Muat satu file atau batch multi-file untuk merender setiap gambar dengan bersih pada resolusi asli penuh.",
      },
      {
        title: "Periksa pratinjau setiap file",
        description:
          "Tinjau dimensi dan perkiraan ukuran setiap gambar yang diubah sebelum mengunduh apa pun.",
      },
      {
        title: "Ubah batch",
        description:
          "Alat merender setiap gambar pada resolusi asli penuh dalam format yang Anda pilih, langsung di browser Anda.",
      },
      {
        title: "Unduh aset yang diubah",
        description:
          "Bandingkan dimensi dan ukuran byte baru setiap file, lalu unduh gambar hasil konversi Anda satu per satu.",
      },
      {
        title: "Tips: area transparan berubah hitam?",
        description:
          "Jika PNG yang diubah ke JPG menampilkan hitam di area yang tadinya transparan, ubah lagi dengan warna pengisi matte seperti putih atau warna merek Anda.",
      },
    ],
    examples: [
      {
        title: "Meratakan logo PNG transparan ke latar putih untuk JPG",
        input: "logo.png transparan · Target: JPG (90%) · Isi: #FFFFFF",
        output: "logo.jpg dengan latar putih bersih dan tanpa artefak hitam dari transparansi",
        explanation: "Mengisi Canvas matte secara eksplisit sebelum menggambar mencegah halo hitam saat mengubah PNG alfa ke JPEG.",
      },
      {
        title: "Mengubah unduhan WebP menjadi PNG untuk aplikasi lama",
        input: "3 file .webp dari web · Target: PNG",
        output: "3 file PNG yang dapat dibuka di aplikasi lama mana pun tanpa kehilangan ketajaman",
        explanation: "PNG lossless menjaga setiap piksel tetap utuh saat Anda memerlukan kompatibilitas universal.",
      },
    ],
    benefits: [
      "Memproses batch beberapa gambar pada resolusi penuh tanpa antrean server",
      "Warna isi latar JPEG yang dapat dikonfigurasi menghindari pengisian transparan hitam yang jelek",
      "Mengubah unduhan WebP kembali menjadi file PNG atau JPG yang diterima secara universal",
      "Merender file SVG vektor langsung menjadi gambar raster PNG atau WebP yang tajam",
    ],
    useCases: [
      "Mengubah file .webp yang diunduh menjadi .png atau .jpg untuk perangkat lunak lama",
      "Memproduksi aset .webp modern secara massal untuk situs statis dan CDN",
      "Mengekspor PNG yang tajam dari ikon merek SVG untuk slide atau postingan sosial",
      "Memeriksa perbedaan ukuran format di PNG, JPG, dan WebP secara berdampingan",
    ],
    faqs: [
      {
        question: "Bisakah alat ini mengubah foto HEIC Apple?",
        answer:
          "Decoding HEIC bergantung pada dukungan browser yang mendasarinya (Safari mendukung HEIC secara bawaan, sedangkan Chrome/Firefox umumnya memerlukan masukan PNG, JPG, WebP, SVG, atau GIF).",
      },
      {
        question: "Apakah mengubah JPG menjadi PNG meningkatkan detail foto yang hilang?",
        answer:
          "Tidak. Mengubah JPG yang sudah dikompres menjadi PNG mempertahankannya secara lossless ke depannya, meskipun tidak dapat memulihkan artefak kompresi JPEG sebelumnya.",
      },
      {
        question: "Apakah batas file diberlakukan?",
        answer:
          "Hanya RAM perangkat Anda yang berlaku; semua peng-encode-an terjadi lokal tanpa batas ukuran file server.",
      },
      {
        question: "Apakah Konverter Format Gambar gratis?",
        answer:
          "Ya, alat ini gratis dipakai tanpa akun, tanpa watermark, dan tanpa batas jumlah konversi.",
      },
      {
        question: "Format apa yang bisa saya ubah dari dan ke?",
        answer:
          "Anda dapat mengubah file PNG, JPG, WebP, GIF, dan SVG menjadi keluaran PNG, JPG, atau WebP.",
      },
      {
        question: "Mengapa mengubah PNG menjadi WebP?",
        answer:
          "File WebP biasanya jauh lebih kecil daripada PNG pada kualitas visual yang serupa, sehingga halaman web dimuat lebih cepat.",
      },
      {
        question: "Mengapa mengubah WebP menjadi JPG atau PNG?",
        answer:
          "Beberapa aplikasi lama, printer, dan formulir unggahan tidak menerima WebP, jadi mengubah kembali ke JPG atau PNG memulihkan kompatibilitas universal.",
      },
      {
        question: "Bisakah saya mengubah beberapa gambar sekaligus?",
        answer:
          "Ya, Anda dapat memuat batch gambar dan mengubah semuanya ke format target yang sama dalam satu jalan.",
      },
      {
        question: "Apakah mengubah ke JPG menghilangkan transparansi?",
        answer:
          "Ya, JPG tidak memiliki kanal alfa, sehingga area transparan diisi dengan warna matte yang Anda pilih, seperti putih.",
      },
      {
        question: "Warna matte apa yang sebaiknya saya pakai saat mengubah PNG transparan ke JPG?",
        answer:
          "Putih adalah default paling aman. Cocokkan dengan warna latar website atau slide Anda untuk tampilan yang mulus.",
      },
      {
        question: "Bisakah saya mengubah foto menjadi WebP dan menjaga kualitasnya?",
        answer:
          "Ya, WebP pada kualitas 85–90% biasanya terlihat identik dengan JPG asli sambil menghasilkan file yang jauh lebih kecil.",
      },
      {
        question: "Bisakah saya mengubah logo SVG menjadi PNG?",
        answer:
          "Ya, alat ini mengubah file SVG menjadi gambar PNG atau WebP yang tajam pada dimensi aslinya.",
      },
      {
        question: "Apakah Konverter Format Gambar mengunggah gambar saya?",
        answer:
          "Tidak, setiap konversi berjalan lokal di browser Anda dan file Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Kualitas apa yang sebaiknya saya pakai saat mengubah ke JPG?",
        answer:
          "Kualitas 85–90% menjaga foto tetap terlihat bersih sambil jauh lebih kecil daripada PNG. Turunkan untuk file yang lebih kecil.",
      },
      {
        question: "Bisakah saya mengubah GIF animasi dengan alat ini?",
        answer:
          "File GIF dapat dimuat, tetapi konversi merender satu bingkai diam, bukan mempertahankan animasinya.",
      },
      {
        question: "Mengapa PNG hasil konversi saya lebih besar daripada JPG aslinya?",
        answer:
          "PNG bersifat lossless, sehingga foto yang diubah dari JPG terkompres menjadi PNG menyimpan setiap piksel tanpa kompresi dan biasanya membesar.",
      },
      {
        question: "Apakah konverter menjaga dimensi gambar asli?",
        answer:
          "Ya, gambar hasil konversi mempertahankan resolusi asli penuh kecuali Anda mengubah ukurannya secara terpisah dengan Pengubah Ukuran Gambar.",
      },
      {
        question: "Bisakah saya memakai Konverter Format Gambar di ponsel saya?",
        answer:
          "Ya, alat ini berfungsi di browser ponsel. Pilih gambar dari perangkat Anda dan unduh file hasil konversi.",
      },
      {
        question: "Format apa yang terbaik untuk gambar website?",
        answer:
          "WebP biasanya terbaik untuk foto dan grafik di web, sedangkan PNG lebih baik ketika Anda memerlukan transparansi atau kualitas lossless.",
      },
      {
        question: "Apakah gambar hasil konversi menyertakan watermark?",
        answer:
          "Tidak, file hasil konversi adalah salinan bersih tanpa watermark atau branding yang ditambahkan.",
      },
    ],
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
    instructions: [
      {
        title: "Unggah gambar",
        description:
          "Pilih gambar PNG, JPG, WebP, atau GIF apa pun untuk memuatnya ke pratinjau Canvas interaktif.",
      },
      {
        title: "Putar, balik, atau terapkan filter",
        description:
          "Gunakan tombol Putar Kiri/Kanan, tombol Balik Horizontal/Vertikal, sakelar Skala Abu-abu, serta penggeser Kecerahan/Kontras.",
      },
      {
        title: "Pratinjau hasil secara langsung",
        description:
          "Periksa pratinjau Canvas setelah setiap perubahan untuk memastikan orientasi dan kekuatan filter terlihat benar.",
      },
      {
        title: "Setel ulang bila perlu",
        description:
          "Gunakan tombol Setel Ulang untuk membatalkan semua rotasi, balikan, dan perubahan filter lalu mulai lagi dari gambar asli.",
      },
      {
        title: "Pilih format keluaran",
        description:
          "Pilih PNG untuk menjaga transparansi, JPG untuk foto, atau WebP untuk file yang lebih kecil sebelum mengekspor.",
      },
      {
        title: "Ekspor gambar yang diedit",
        description:
          "Klik Unduh untuk menyimpan gambar Anda yang sudah diputar, dibalik, atau difilter ke perangkat Anda.",
      },
    ],
    examples: [
      {
        title: "Memperbaiki foto ponsel yang miring dan meningkatkan kecerahan",
        input: "Foto 3024×4032 diputar 90° searah jarum jam · Kecerahan: 110% · Kontras: 105%",
        output: "Gambar tegak 4032×3024 diekspor bersih dengan orientasi EXIF yang dibakar ke piksel.",
        explanation: "Canvas menukar lebar dan tinggi secara otomatis pada putaran 90° dan 270°.",
      },
      {
        title: "Mencerminkan selfie yang terbalik secara horizontal",
        input: "Selfie yang tampak terbalik · Balik Horizontal: Aktif",
        output: "Selfie yang sudah dicerminkan dengan teks di latar yang terbaca benar.",
        explanation: "Balik horizontal membalik gambar seperti cermin tanpa mengubah dimensinya.",
      },
    ],
    benefits: [
      "Pratinjau piksel langsung diperbarui seketika tanpa latensi unggahan",
      "Membakar orientasi dengan bersih ke koordinat piksel aktual, bukan flag EXIF yang rapuh",
      "Menggabungkan rotasi, pencerminan, dan penyesuaian warna/nada dalam satu ruang kerja yang bersih",
      "Tombol Setel Ulang yang non-destruktif memulihkan default kapan saja",
    ],
    useCases: [
      "Meluruskan dokumen atau struk hasil pindai yang tertangkap miring",
      "Membatalkan cermin tangkapan webcam yang terbalik atau tangkapan layar yang terbalik",
      "Membuat grafik skala abu-abu berkontras tinggi untuk cetak atau dokumentasi",
      "Mencerahkan foto produk yang kurang cahaya dengan cepat sebelum dicantumkan",
    ],
    faqs: [
      {
        question: "Apakah memutar gambar meng-encode ulang pikselnya?",
        answer:
          "Ya. Menggambar ke Canvas HTML5 membakar orientasi baru dan penyesuaian filter secara permanen ke setiap piksel sehingga semua aplikasi menampilkannya tegak.",
      },
      {
        question: "Bisakah saya mempertahankan latar transparan saat memutar atau membalik?",
        answer:
          "Ya — tetap atur Format Keluaran ke PNG atau WebP untuk mempertahankan transparansi alfa penuh di sekitar grafik yang diputar/dibalik.",
      },
      {
        question: "Apakah hasil edit disimpan di server Anda?",
        answer:
          "Tidak. Semuanya berjalan di dalam tab browser Anda sendiri dan dibuang saat Anda menutup halaman.",
      },
      {
        question: "Apakah alat putar gambar gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran, tanpa watermark, dan tanpa batas.",
      },
      {
        question: "Bagaimana cara memutar gambar 90 derajat?",
        answer:
          "Unggah gambar Anda lalu klik Putar Kanan atau Putar Kiri. Setiap klik memutar gambar sebesar 90 derajat.",
      },
      {
        question: "Bisakah saya memutar gambar 180 derajat?",
        answer:
          "Ya, klik Putar dua kali ke arah yang sama untuk membalik gambar hingga terbalik.",
      },
      {
        question: "Bagaimana cara membalik gambar secara horizontal?",
        answer:
          "Gunakan tombol Balik Horizontal untuk mencerminkan gambar dari kiri ke kanan, yang berguna untuk memperbaiki selfie yang tercermin.",
      },
      {
        question: "Apa perbedaan antara membalik dan memutar gambar?",
        answer:
          "Memutar menggerakkan gambar mengelilingi pusatnya, sedangkan membalik mencerminkannya seperti pantulan di cermin.",
      },
      {
        question: "Bisakah saya memutar foto tanpa kehilangan kualitas?",
        answer:
          "Alat meng-encode ulang gambar lewat Canvas, sehingga mengekspor sebagai PNG menjaga kualitas lossless. Ekspor JPG menerapkan kompresi ringan.",
      },
      {
        question: "Apakah memutar gambar mengubah dimensinya?",
        answer:
          "Rotasi 90 atau 270 derajat menukar lebar dan tinggi. Rotasi 180 derajat mempertahankan dimensi yang sama.",
      },
      {
        question: "Bisakah saya membuat foto menjadi hitam putih?",
        answer:
          "Ya, aktifkan sakelar Skala Abu-abu untuk mengubah foto Anda menjadi hitam putih secara instan.",
      },
      {
        question: "Bagaimana cara mencerahkan foto yang gelap?",
        answer:
          "Geser Kecerahan di atas 100% dan tambahkan sedikit Kontras agar gambar tidak terlihat pudar.",
      },
      {
        question: "Bisakah saya memutar PNG dan menjaga transparansinya?",
        answer:
          "Ya, ekspor sebagai PNG atau WebP untuk mempertahankan area transparan setelah memutar atau membalik.",
      },
      {
        question: "Apakah foto hasil edit saya diunggah ke server?",
        answer:
          "Tidak, semua rotasi, pembalikan, dan penyaringan berjalan lokal di browser Anda dan tidak ada yang diunggah.",
      },
      {
        question: "Bisakah saya memutar gambar di ponsel saya?",
        answer:
          "Ya, alat ini berfungsi di browser ponsel. Unggah foto yang miring, putar hingga tegak, dan unduh versi yang diperbaiki.",
      },
      {
        question: "Mengapa foto saya miring setelah diunggah?",
        answer:
          "Beberapa ponsel menyimpan orientasi sebagai flag EXIF yang tidak dibaca setiap aplikasi. Alat ini membakar orientasi yang benar ke dalam piksel sehingga tampil tegak di mana saja.",
      },
      {
        question: "Bisakah saya membatalkan rotasi atau filter?",
        answer:
          "Ya, tombol Setel Ulang memulihkan gambar asli dan pengaturan filter default kapan saja.",
      },
      {
        question: "Apakah alat memperbaiki foto yang miring sedikit?",
        answer:
          "Alat memutar dalam langkah 90 derajat, sehingga memperbaiki foto yang miring atau terbalik. Koreksi kemiringan kecil tidak didukung.",
      },
      {
        question: "Format gambar apa yang bisa saya putar dan balik?",
        answer:
          "Anda dapat mengedit gambar PNG, JPG, WebP, dan GIF lalu mengekspornya sebagai PNG, JPG, atau WebP.",
      },
      {
        question: "Bisakah saya memutar dan membalik gambar sekaligus?",
        answer:
          "Ya, Anda dapat menggabungkan rotasi, balikan horizontal atau vertikal, dan filter sebelum mengekspor satu gambar akhir.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih mode Encode atau Decode",
        description:
          "Gunakan Gambar → Data URI Base64 untuk meng-encode file, atau Base64 → Pratinjau Gambar untuk merender muatan Base64 yang ditempel.",
      },
      {
        title: "Muat gambar atau tempel teks Base64",
        description:
          "Pilih aset PNG, JPG, WebP, SVG, GIF, atau ICO apa pun (atau tempel string data:image/... lengkap maupun teks Base64 mentah).",
      },
      {
        title: "Periksa perbandingan ukuran",
        description:
          "Bandingkan ukuran file asli dengan ukuran string Base64 untuk melihat overhead sekitar 33% sebelum menyematkannya.",
      },
      {
        title: "Pilih format keluaran yang Anda perlukan",
        description:
          "Pilih Data URI lengkap, string Base64 mentah, tag <img> HTML, atau cuplikan background-image CSS.",
      },
      {
        title: "Salin cuplikan atau unduh pratinjau",
        description:
          "Salin Data URI, Base64 mentah, tag <img> HTML, atau cuplikan latar CSS — atau unduh gambar pratinjau hasil decode.",
      },
      {
        title: "Tips: Base64 yang ditempel tidak berfungsi?",
        description:
          "Pastikan Anda menempel string lengkap tanpa jeda baris, dan periksa bahwa dekoder menambahkan awalan data:image/... yang benar untuk format Anda.",
      },
    ],
    examples: [
      {
        title: "Menyematkan centang SVG 2 KB di dalam CSS",
        input: "check.svg (2.048 byte)",
        output: "data:image/svg+xml;base64,... (~2,7 KB) + aturan background-image CSS yang siap tempel",
        explanation: "Menghemat satu perjalanan HTTP ekstra untuk ikon UI mungil dan email HTML file tunggal offline.",
      },
      {
        title: "Mendekode string Base64 dari API menjadi gambar",
        input: "String Base64 mentah tanpa awalan data:image/png;base64,",
        output: "Pratinjau gambar yang dirender dan dapat diunduh sebagai file PNG biasa",
        explanation: "Dekoder menambahkan awalan Data URI PNG standar secara otomatis bila header tidak ada.",
      },
    ],
    benefits: [
      "Perbandingan instan ukuran file biner vs. overhead string Base64 sekitar 33%",
      "Menghasilkan Data URI, Base64 mentah, <img> HTML, dan cuplikan latar CSS secara bersamaan",
      "Secara otomatis menambahkan awalan data URI PNG jika Anda menempel Base64 mentah tanpa header",
      "Menjaga aset milik sendiri dan blob respons API tetap offline di dalam browser Anda",
    ],
    useCases: [
      "Menyematkan ikon mungil di dalam bundel CSS atau laporan HTML mandiri",
      "Men-debug Data URI gambar yang dikembalikan JSON API atau webhook",
      "Menyematkan lencana merek kecil di template email HTML transaksional",
      "Memeriksa muatan gambar ter-encode yang disalin dari DevTools browser",
    ],
    faqs: [
      {
        question: "Kapan sebaiknya saya memakai gambar Base64, bukan URL gambar biasa?",
        answer:
          "Gunakan Data URI Base64 secukupnya untuk ikon yang sangat kecil (biasanya di bawah 5–10 KB) atau ekspor HTML file tunggal. Base64 memperbesar ukuran data sekitar 33% dan tidak dapat di-cache secara terpisah di berbagai halaman seperti URL biasa.",
      },
      {
        question: "Bisakah dekoder menampilkan pratinjau string Base64 mentah tanpa awalan 'data:image/png;base64,'?",
        answer:
          "Ya! Beralih ke Base64 → Pratinjau Gambar akan otomatis menghapus spasi dan menambahkan header Data URI PNG standar jika belum ada.",
      },
      {
        question: "Apakah alat ini berfungsi dengan SVG vektor?",
        answer:
          "Ya. Mengunggah file .svg akan menghasilkan URI data:image/svg+xml;base64,... yang valid beserta cuplikan HTML dan CSS.",
      },
      {
        question: "Apakah konverter gambar ke Base64 gratis?",
        answer:
          "Ya, alat ini gratis tanpa pendaftaran, tanpa watermark, dan tanpa batas jumlah gambar yang Anda encode atau decode.",
      },
      {
        question: "Apa itu Data URI Base64?",
        answer:
          "Data URI menyematkan gambar langsung di dalam halaman web, stylesheet, atau email sebagai teks, diawali data:image/...;base64, diikuti data yang di-encode.",
      },
      {
        question: "Mengapa string Base64 lebih besar daripada gambar saya?",
        answer:
          "Peng-encode-an Base64 merepresentasikan data biner dengan karakter teks, yang menambah overhead sekitar 33% dari ukuran file asli.",
      },
      {
        question: "Ukuran gambar berapa yang paling baik untuk peng-encode-an Base64?",
        answer:
          "Jaga gambar Base64 tetap kecil, biasanya di bawah 5–10 KB, seperti ikon dan logo. Gambar yang lebih besar membengkakkan HTML atau CSS Anda dan tidak dapat di-cache terpisah.",
      },
      {
        question: "Bisakah saya mengubah JPG menjadi Base64?",
        answer:
          "Ya, file JPG, PNG, WebP, SVG, GIF, dan ICO semuanya dapat di-encode menjadi Data URI Base64.",
      },
      {
        question: "Bagaimana cara memakai gambar Base64 di HTML?",
        answer:
          "Salin tag <img> HTML yang dihasilkan dan tempel ke halaman Anda. Atribut src sudah berisi Data URI lengkap.",
      },
      {
        question: "Bagaimana cara memakai gambar Base64 di CSS?",
        answer:
          "Salin cuplikan background-image CSS dan tempel ke stylesheet Anda untuk menampilkan gambar tanpa permintaan file terpisah.",
      },
      {
        question: "Bisakah saya mendekode string Base64 kembali menjadi gambar?",
        answer:
          "Ya, beralih ke Base64 → Pratinjau Gambar, tempel stringnya, dan alat akan merender gambar agar Anda dapat melihat pratinjau atau mengunduhnya.",
      },
      {
        question: "Apakah saya memerlukan awalan data:image/png;base64, saat mendekode?",
        answer:
          "Tidak, jika Anda menempel Base64 mentah tanpa header, alat secara otomatis menambahkan awalan Data URI PNG standar.",
      },
      {
        question: "Apakah alat gambar ke Base64 mengunggah file saya?",
        answer:
          "Tidak, peng-encode-an dan decoding berjalan sepenuhnya di browser Anda dan gambar Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Bisakah saya meng-encode SVG ke Base64?",
        answer:
          "Ya, file SVG menghasilkan URI data:image/svg+xml;base64,... yang valid beserta cuplikan HTML dan CSS yang cocok.",
      },
      {
        question: "Apa perbedaan antara Base64 mentah dan Data URI?",
        answer:
          "Base64 mentah hanya teks yang di-encode, sedangkan Data URI menambahkan header data:image/...;base64, agar browser mengetahui jenis gambarnya.",
      },
      {
        question: "Bisakah saya memakai gambar Base64 di email?",
        answer:
          "Ya, gambar Base64 kecil berfungsi baik di email HTML mandiri, meskipun beberapa klien email membatasi dukungan Data URI, jadi uji sebelum mengirim.",
      },
      {
        question: "Apakah ada batas ukuran file untuk peng-encode-an?",
        answer:
          "Tidak ada batas server karena tidak ada yang diunggah. Gambar yang sangat besar hanya dibatasi memori browser Anda, dan string Base64 yang sangat besar tidak praktis untuk ditempel.",
      },
      {
        question: "Bisakah saya mengubah gambar Base64 menjadi file yang dapat diunduh?",
        answer:
          "Ya, decode string di mode Base64 → Pratinjau Gambar lalu gunakan opsi unduh untuk menyimpannya sebagai file gambar biasa.",
      },
      {
        question: "Apakah peng-encode-an Base64 mengubah kualitas gambar?",
        answer:
          "Tidak, Base64 adalah representasi teks lossless dari byte yang sama persis, sehingga gambar hasil decode identik dengan aslinya.",
      },
      {
        question: "Bisakah saya memakai konverter gambar ke Base64 di ponsel saya?",
        answer:
          "Ya, alat ini berfungsi di browser ponsel. Encode gambar dari galeri foto Anda atau tempel string Base64 untuk melihat pratinjaunya.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih warna Latar Depan dan Latar Belakang",
        description:
          "Gunakan pemilih warna, masukan HEX, atau masukan R/G/B satuan — atau mulai dari preset aksesibel dan tukar warna dengan satu klik.",
      },
      {
        title: "Sesuaikan nuansa hingga rasio lulus",
        description:
          "Ubah kecerahan atau kanal RGB satuan dan perhatikan rasio diperbarui langsung hingga pasangan Anda mencapai ambang AA atau AAA yang diperlukan.",
      },
      {
        title: "Tinjau kartu skor WCAG 2.1",
        description:
          "Periksa rasio kontras yang tepat (misalnya 12,63 : 1) dan status LULUS/GAGAL instan di seluruh tolok ukur AA Normal, AA Besar/UI, AAA Normal, dan AAA Besar.",
      },
      {
        title: "Pratinjau pasangan dalam teks UI nyata",
        description:
          "Baca pratinjau tipografi langsung dan kartu kontrol UI berbingkai untuk melihat tampilan warna Anda sebagai teks isi, judul, dan tombol.",
      },
      {
        title: "Ekstrak swatch dari gambar (opsional)",
        description:
          "Unggah tangkapan layar atau logo merek apa pun di bagian bawah untuk mengekstrak hingga 8 warna dominan berbeda dan menerapkannya langsung ke Latar Depan atau Latar Belakang.",
      },
      {
        title: "Salin warna dan perbaiki pasangan yang gagal",
        description:
          "Salin nilai HEX, RGB, atau HSL yang tersinkron ke CSS Anda. Jika pasangan gagal, gelapkan teks atau cerahkan latar hingga kartu skor berubah hijau.",
      },
    ],
    examples: [
      {
        title: "Meng audit keterbacaan tombol CTA utama",
        input: "Latar Depan: #FFFFFF · Latar Belakang: #4F46E5",
        output: "Rasio Kontras 6,29 : 1 — Lulus WCAG AA Normal, AA Besar, dan AAA Besar",
        explanation: "Memakai luminansi relatif sRGB resmi yang dilinearisasi gamma (0,2126R + 0,7152G + 0,0722B).",
      },
      {
        title: "Memeriksa teks hitam di latar putih",
        input: "Latar Depan: #000000 · Latar Belakang: #FFFFFF",
        output: "Rasio Kontras 21 : 1 — Lulus semua tolok ukur AA dan AAA",
        explanation: "Hitam di atas putih adalah kontras maksimum yang mungkin dan lulus setiap ambang WCAG.",
      },
    ],
    benefits: [
      "Rumus luminansi relatif sRGB WCAG 2.1 yang tepat — tanpa pendekatan",
      "Pratinjau langsung tipografi dan kartu kontrol UI berbingkai untuk pasangan aktif",
      "Kuantisasi warna gambar Canvas bawaan menarik swatch merek tanpa alat ekstra",
      "Menampilkan string HEX, RGB, dan HSL yang tersinkron dan siap tempel ke CSS",
    ],
    useCases: [
      "Meng audit sistem desain, dashboard SaaS, dan tema mode gelap untuk kepatuhan WCAG AA/AAA",
      "Menarik warna merek dominan dari logo klien langsung ke palet UI yang aksesibel",
      "Memperbaiki pasangan lencana, placeholder, atau label tombol berkontras rendah sebelum peluncuran",
      "Mengajarkan hierarki visual yang aksesibel dengan pratinjau langsung teks besar vs. normal",
    ],
    faqs: [
      {
        question: "Berapa rasio kontras yang diperlukan untuk WCAG Level AA vs. Level AAA?",
        answer:
          "WCAG 2.1 Level AA memerlukan setidaknya 4.5:1 untuk teks isi normal dan 3.0:1 untuk teks besar (18 pt+ atau tebal 14 pt+) dan komponen UI. Level AAA menaikkan ambang ini menjadi 7.0:1 untuk teks normal dan 4.5:1 untuk teks besar.",
      },
      {
        question: "Bagaimana cara kerja ekstraktor palet gambar?",
        answer:
          "Alat ini menggambar gambar yang Anda unggah ke Canvas HTML5 di luar layar, mengabaikan piksel transparan, mengelompokkan bucket RGB yang berdekatan, dan menampilkan hingga 8 swatch dominan yang berbeda secara visual berdasarkan cakupan area.",
      },
      {
        question: "Apakah Pemeriksa Kontras Warna juga mengubah antara HEX, RGB, dan HSL?",
        answer:
          "Ya. Memperbarui pemilih warna, masukan HEX, atau kolom R/G/B apa pun akan menghitung ulang representasi HEX, rgb(), dan hsl() secara otomatis.",
      },
      {
        question: "Apa yang dihitung sebagai teks besar menurut aturan kontras WCAG?",
        answer:
          "Teks besar adalah 18 pt (24 px) atau lebih besar, atau 14 pt (18,66 px) tebal atau lebih besar. Teks besar hanya memerlukan rasio 3.0:1 untuk AA dan 4.5:1 untuk AAA, sedangkan teks normal memerlukan 4.5:1 untuk AA dan 7.0:1 untuk AAA.",
      },
      {
        question: "Apakah Pemeriksa Kontras Warna gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran. Semua pemeriksaan berjalan lokal di browser Anda, sehingga Anda dapat menguji pasangan warna sebanyak yang Anda mau.",
      },
      {
        question: "Apakah gambar yang saya unggah meninggalkan perangkat saya?",
        answer:
          "Tidak. Ekstraksi palet dilakukan sepenuhnya di browser Anda memakai canvas di luar layar, dan gambar Anda tidak pernah diunggah ke server mana pun.",
      },
      {
        question: "Bagaimana rasio kontras dihitung?",
        answer:
          "Alat ini memakai rumus resmi WCAG 2.1: luminansi relatif setiap warna dihitung dari nilai sRGB yang dilinearisasi gamma, dan rasionya adalah (L1 + 0,05) / (L2 + 0,05), di mana L1 adalah warna yang lebih terang.",
      },
      {
        question: "Bisakah saya memeriksa kontras untuk desain mode gelap?",
        answer:
          "Ya. Masukkan latar gelap dan warna teks terang Anda dengan cara yang sama, dan kartu skor menunjukkan apakah pasangan itu lulus AA dan AAA untuk teks normal maupun besar.",
      },
      {
        question: "Mengapa pasangan warna saya gagal AA padahal terlihat mudah dibaca bagi saya?",
        answer:
          "Keterbacaan yang dirasakan dan kontras luminansi yang terukur adalah hal yang berbeda. Warna yang terlihat berbeda bagi Anda mungkin tetap berdekatan dalam luminansi, terutama rona nada tengah, jadi percayalah pada rasio dan sesuaikan kecerahan hingga lulus.",
      },
      {
        question: "Apa yang harus saya lakukan jika warna merek saya gagal dalam uji kontras?",
        answer:
          "Pertahankan warna merek untuk judul besar atau elemen dekoratif, dan gunakan nuansa yang lebih gelap untuk teks isi. Anda juga dapat mencerahkan latar atau menambahkan overlay semi-transparan di belakang teks.",
      },
      {
        question: "Apakah pemeriksa berfungsi untuk komponen UI seperti tombol dan ikon?",
        answer:
          "Ya. WCAG 2.1 memerlukan rasio 3.0:1 untuk komponen UI non-teks seperti batas tombol, garis input, dan ikon yang bermakna, dan kolom AA Besar/UI pada kartu skor mencakup tepat hal itu.",
      },
      {
        question: "Bisakah saya menguji teks placeholder dan status nonaktif dengan alat ini?",
        answer:
          "Ya, masukkan warna placeholder atau status nonaktif sebagai latar depan. Perhatikan bahwa kontrol nonaktif dikecualikan dari persyaratan kontras WCAG, tetapi teks placeholder yang menyampaikan informasi tidak dikecualikan.",
      },
      {
        question: "Berapa banyak warna yang dapat ditarik ekstraktor palet dari gambar?",
        answer:
          "Hingga 8 warna dominan yang berbeda. Nuansa yang serupa dikelompokkan, sehingga swatch mewakili warna yang paling menonjol secara visual dalam gambar, bukan setiap nuansa yang ada.",
      },
      {
        question: "Bisakah saya menerapkan swatch hasil ekstraksi langsung sebagai latar depan atau latar belakang saya?",
        answer:
          "Ya. Setiap swatch hasil ekstraksi memiliki tombol untuk mengirimnya langsung ke slot Latar Depan atau Latar Belakang, sehingga Anda dapat mengujinya terhadap warna lain Anda seketika.",
      },
      {
        question: "Format gambar apa yang berfungsi dengan ekstraktor palet?",
        answer:
          "Gambar apa pun yang dapat ditampilkan browser Anda, termasuk tangkapan layar atau logo PNG, JPG, WebP, dan SVG. Piksel transparan diabaikan saat mengelompokkan warna.",
      },
      {
        question: "Apakah Pemeriksa Kontras Warna menguji buta warna?",
        answer:
          "Tidak, alat ini hanya mengukur kontras luminansi. Kontras adalah satu bagian dari aksesibilitas; untuk keamanan buta warna, hindari juga hanya mengandalkan warna untuk menyampaikan makna dan periksa palet Anda dengan simulator buta warna.",
      },
      {
        question: "Bisakah saya memakai nilai HEX, RGB, dan HSL di CSS saya?",
        answer:
          "Ya. Ketiga format tetap sinkron saat Anda mengedit, dan Anda dapat menyalin salah satunya langsung ke stylesheet, token desain, atau konfigurasi Tailwind Anda.",
      },
      {
        question: "Apa perbedaan antara AA dan AAA dalam praktik?",
        answer:
          "AA adalah standar hukum dan praktis yang ditargetkan sebagian besar situs, sedangkan AAA lebih ketat dan sering sulit dipenuhi untuk teks isi berwarna merek. Usahakan AAA bila memungkinkan, tetapi jangan pernah meluncurkan di bawah AA untuk teks.",
      },
      {
        question: "Apakah alat menyimpan pilihan warna atau gambar saya?",
        answer:
          "Tidak. Semuanya berjalan lokal di tab browser Anda, tidak ada yang diunggah, dan warna serta gambar Anda hilang saat Anda menutup atau memuat ulang halaman.",
      },
      {
        question: "Bisakah saya memeriksa lebih dari satu pasangan warna sekaligus?",
        answer:
          "Pemeriksa menguji satu pasangan latar depan/latar belakang dalam satu waktu, tetapi Anda dapat menukar warna dalam satu klik dan menguji ulang pasangan sebanyak yang diperlukan dalam hitungan detik.",
      },
    ],
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
    instructions: [
      {
        title: "Unggah gambar QR atau aktifkan pemindaian kamera",
        description:
          "Jatuhkan atau pilih tangkapan layar QR PNG, JPG, WebP, atau SVG apa pun — atau klik Mulai Pemindai Kamera saat Anda ingin membaca kode QR tercetak secara live.",
      },
      {
        title: "Biarkan pemindai mendekode kode",
        description:
          "Alat menjalankan decoding multi-skala yang peka terhadap inversi secara lokal di browser Anda, sehingga kode QR mode gelap atau terbalik pun terbaca tanpa mengunggah apa pun.",
      },
      {
        title: "Periksa dan salin teks hasil decode",
        description:
          "Tinjau muatan hasil decode, kategori muatan yang terdeteksi, dan pratinjau tautan yang aman (hanya URL http/https yang menjadi tautan yang dapat diklik), lalu salin dengan satu klik.",
      },
      {
        title: "Periksa jenis muatan sebelum bertindak",
        description:
          "Lihat apakah QR berisi URL, kredensial Wi-Fi, kontak vCard, atau teks biasa, dan verifikasi tujuannya terlihat benar sebelum mengunjungi atau menghubungkan.",
      },
      {
        title: "Beralih ke Pembuat QR Kontak vCard (opsional)",
        description:
          "Buat kode QR kartu nama VCF 3.0 dengan nama, organisasi, telepon, email, dan website, lalu unduh sebagai PNG atau SVG.",
      },
      {
        title: "Unduh, cetak, atau atasi pemindaian yang gagal",
        description:
          "Unduh QR vCard Anda atau unggah ulang tangkapan layar yang lebih tajam dan terang jika decoding gagal — kode QR yang terpotong, buram, atau terlalu kecil adalah penyebab paling umum.",
      },
    ],
    examples: [
      {
        title: "Memverifikasi tangkapan layar flyer pemasaran tercetak sebelum memesan cetakan",
        input: "Unggah flyer-qr.png (PNG 600×600)",
        output: "Muatan Terdecode · URL Website: https://example.com/?utm_source=print",
        explanation: "Menjalankan decoding multi-skala yang peka terhadap inversi secara lokal sehingga kode QR mode gelap terbalik juga terdecode dengan andal.",
      },
      {
        title: "Membaca kode QR Wi-Fi dari foto",
        input: "Unggah foto kode QR Wi-Fi dari kafe",
        output: "Muatan Terdecode · Wi-Fi: SSID dan kata sandi terklasifikasi sebagai kredensial Wi-Fi",
        explanation: "Klasifikasi muatan otomatis membedakan kredensial Wi-Fi dari URL dan teks biasa sebelum Anda bertindak.",
      },
    ],
    benefits: [
      "Mendekode tangkapan layar QR normal dan terbalik warna dengan bersih tanpa aplikasi ponsel",
      "Aliran kamera opsional berhenti segera setelah decode atau saat tab ditutup",
      "Mengklasifikasikan muatan hasil decode dengan bersih tanpa mengalihkan secara otomatis",
      "Menyertakan pembuatan QR vCard 3.0 PNG & SVG lengkap untuk kartu nama digital",
    ],
    useCases: [
      "Memeriksa ulang URL tujuan UTM di dalam aset QR sebelum mencetak poster",
      "Mengekstrak string Wi-Fi atau token teks dari tangkapan layar desktop",
      "Memindai kode QR fisik di laptop memakai webcam bawaan Anda",
      "Membuat kode QR kontak vCard yang dapat dipindai untuk resume, lencana, dan presentasi",
    ],
    faqs: [
      {
        question: "Bagaimana jika perangkat saya tidak memiliki kamera atau menolak izin kamera?",
        answer:
          "Anda tidak pernah memerlukan kamera untuk memakai alat ini — cukup ambil tangkapan layar atau foto lalu unggah lewat Unggah Gambar Kode QR, yang berjalan sama persis tanpa izin kamera.",
      },
      {
        question: "Apakah memindai kode QR otomatis membuka website berbahaya?",
        answer:
          "Tidak. Teks hasil decode ditampilkan dengan aman di dalam textarea hanya-baca terlebih dahulu agar Anda dapat memeriksa URL apa pun sebelum memilih untuk mengunjunginya.",
      },
      {
        question: "Perlu generator QR URL, Wi-Fi, atau warna kustom, bukan vCard?",
        answer:
          "Coba alat Generator Kode QR khusus kami di Alat Media Sosial untuk warna latar depan/latar belakang kustom, level koreksi kesalahan, dan kode QR URL/teks.",
      },
      {
        question: "Apakah Pemindai Kode QR gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan pemindaian maupun pembuatan QR vCard berjalan lokal di browser Anda.",
      },
      {
        question: "Apakah gambar QR yang saya unggah dikirim ke server?",
        answer:
          "Tidak. Decoding dilakukan sepenuhnya di browser Anda memakai jsQR, sehingga tangkapan layar dan foto Anda tidak pernah meninggalkan perangkat Anda.",
      },
      {
        question: "Format gambar apa yang dapat dibaca Pemindai Kode QR?",
        answer:
          "Gambar PNG, JPG, WebP, dan SVG semuanya berfungsi. Tangkapan layar yang diambil di ponsel atau komputer adalah cara paling umum untuk menyediakan kode QR.",
      },
      {
        question: "Mengapa kode QR saya gagal dipindai?",
        answer:
          "Penyebab umumnya adalah gambar buram atau beresolusi rendah, kode QR yang terpotong terlalu rapat, silau pada kode tercetak, atau kode yang terlalu kecil dalam bingkai. Unggah ulang tangkapan yang lebih tajam, lebih besar, dan terang.",
      },
      {
        question: "Bisakah pemindai membaca kode QR terbalik atau mode gelap?",
        answer:
          "Ya. Dekoder peka terhadap inversi, sehingga kode QR dengan modul terang di latar gelap terdecode sama andalnya dengan kode hitam-putih standar.",
      },
      {
        question: "Jenis muatan QR apa yang dapat dideteksinya?",
        answer:
          "Alat ini mengklasifikasikan konten hasil decode secara otomatis, termasuk URL website, kredensial jaringan Wi-Fi, kontak vCard, dan teks biasa, sehingga Anda tahu apa yang dilakukan kode sebelum bertindak.",
      },
      {
        question: "Apakah aman memindai kode QR yang saya temukan di tempat umum?",
        answer:
          "Memindai aman di sini karena tidak ada yang terbuka otomatis — Anda melihat teks hasil decode terlebih dahulu. Selalu baca URL dengan cermat dan hindari memasukkan kata sandi atau detail pembayaran di halaman yang dituju kode QR acak.",
      },
      {
        question: "Bisakah saya memindai kode QR dengan webcam laptop saya?",
        answer:
          "Ya. Klik Mulai Pemindai Kamera, izinkan akses kamera saat browser meminta, dan pegang kode tercetak di depan kamera. Aliran berhenti otomatis setelah kode terdecode atau saat Anda meninggalkan tab.",
      },
      {
        question: "Apakah kamera terus merekam setelah pemindaian?",
        answer:
          "Tidak. Aliran kamera berhenti segera setelah decode berhasil, dan juga berhenti jika Anda berpindah tab atau menutup pemindai.",
      },
      {
        question: "Apa itu kode QR vCard?",
        answer:
          "Kode QR vCard menyimpan detail kontak — nama, organisasi, telepon, email, dan website — dalam format standar VCF 3.0, sehingga memindainya dengan ponsel akan menawarkan penyimpanan kontak secara langsung.",
      },
      {
        question: "Bisakah saya mengunduh kode QR vCard saya sebagai PNG dan SVG?",
        answer:
          "Ya. Pembuat vCard mengekspor kedua format: PNG untuk dokumen dan presentasi, dan SVG untuk pencetakan yang tajam pada ukuran apa pun.",
      },
      {
        question: "Apakah kode QR vCard berfungsi di iPhone maupun Android?",
        answer:
          "Ya. Kedua platform mengenali kode QR vCard VCF 3.0 standar dan menawarkan penambahan kontak saat dipindai dengan kamera bawaan.",
      },
      {
        question: "Bisakah saya memindai kode QR dari video atau rekaman layar?",
        answer:
          "Tidak langsung, tetapi Anda dapat menjeda video, mengambil tangkapan layar dari bingkai yang menampilkan kode QR, dan mengunggah tangkapan layar itu ke pemindai.",
      },
      {
        question: "Apakah Pemindai Kode QR berfungsi offline?",
        answer:
          "Setelah halaman dimuat, decoding berjalan sepenuhnya di browser Anda tanpa permintaan jaringan, sehingga Anda dapat memindai gambar yang diunggah bahkan tanpa koneksi internet.",
      },
      {
        question: "Bisakah saya memindai beberapa kode QR dalam satu gambar?",
        answer:
          "Pemindai mendekode satu kode QR dalam satu waktu. Jika sebuah gambar berisi beberapa kode, potong gambar agar setiap kode diunggah terpisah.",
      },
      {
        question: "Apa yang harus saya periksa sebelum mencetak kode QR di flyer?",
        answer:
          "Unggah tangkapan layar dari desain akhir dan pindai di sini untuk memastikan URL tujuan, parameter UTM, dan muatan sudah tepat sebelum Anda memesan cetakan.",
      },
      {
        question: "Apakah alat menyimpan kode QR hasil pindaian atau gambar kamera saya?",
        answer:
          "Tidak. Tidak ada yang diunggah, dicatat, atau disimpan. Hasil decode hanya ada di tab browser Anda saat ini dan hilang saat Anda menutupnya.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih Kata Sandi Acak atau Frasa Sandi Diceware",
        description:
          "Gunakan Kata Sandi Acak untuk kepadatan rangkaian karakter maksimum atau Frasa Sandi Diceware agar lebih mudah diketik manusia dengan entropi multi-kata yang kuat.",
      },
      {
        title: "Sesuaikan panjang, rangkaian karakter, dan jumlah batch",
        description:
          "Sesuaikan panjang (8–64 karakter), aktifkan Huruf Besar/Huruf Kecil/Angka/Simbol, secara opsional kecualikan karakter yang mirip (0/O/1/l/I), atau pilih 3–8 kata Diceware.",
      },
      {
        title: "Buat kata sandi atau frasa sandi Anda",
        description:
          "Klik buat untuk menghasilkan keluaran baru memakai CSPRNG browser Anda yang didukung perangkat keras dengan rejection sampling, sehingga setiap karakter memiliki peluang yang persis sama.",
      },
      {
        title: "Periksa skor entropi",
        description:
          "Periksa bit entropi Shannon yang tepat (~72–118+ bit disarankan) untuk melihat seberapa besar usaha tebakan yang diwakili hasil sebelum Anda memakainya.",
      },
      {
        title: "Buat ulang dan salin dengan aman",
        description:
          "Tidak puas dengan hasilnya? Buat ulang untuk mendapatkan yang baru, lalu salin satu kata sandi atau seluruh batch dengan satu klik.",
      },
      {
        title: "Simpan di pengelola kata sandi dan muat ulang untuk menghapus",
        description:
          "Tempel hasilnya ke pengelola kata sandi Anda segera. Memuat ulang halaman akan menghapus kata sandi yang dibuat dari memori, jadi jangan pernah mengandalkan tab untuk mengingatnya.",
      },
    ],
    examples: [
      {
        title: "Kata sandi campuran 18 karakter dengan kumpulan karakter penuh",
        input: "Panjang: 18 · Huruf Besar + Kecil + Angka + Simbol (Kumpulan: 88 karakter)",
        output: "~116,3 bit entropi kriptografis · Menjamin >= 1 karakter dari setiap kelas yang diaktifkan",
        explanation: "Memakai rejection sampling (membuang sampel uint32 >= floor(2^32 / kumpulan) * kumpulan) untuk keseragaman yang ketat.",
      },
      {
        title: "Frasa sandi Diceware 5 kata yang mudah diketik",
        input: "Frasa sandi Diceware · 5 kata dari daftar kata 7.776 kata",
        output: "~64,6 bit entropi · Mudah diketik dan diingat, cukup kuat untuk kunci Wi-Fi atau enkripsi disk",
        explanation: "Setiap kata Diceware menyumbang sekitar 12,9 bit entropi (log2 7.776), sehingga 5 kata menghasilkan sekitar 64,6 bit.",
      },
    ],
    benefits: [
      "Menghindari Math.random() yang tidak aman secara ketat — memakai window.crypto.getRandomValues yang di-seed perangkat keras",
      "Menghilangkan bias modulo lewat rejection sampling sejati dan pengacakan Fisher-Yates tanpa bias",
      "Menjamin setidaknya satu karakter dari setiap kelas karakter yang dipilih tanpa slot tetap",
      "Tidak ada yang dicatat, disimpan, atau dikirim lewat jaringan",
    ],
    useCases: [
      "Mengamankan akun cloud, kunci SSH, kredensial database, dan brankas utama pengelola kata sandi",
      "Membuat frasa sandi Diceware yang dapat diketik manusia untuk enkripsi disk atau kunci tamu Wi-Fi",
      "Menyediakan kredensial sementara saat onboarding secara massal (hingga 10 per klik)",
      "Membandingkan dampak entropi bit dari 12 vs. 18 vs. 24 karakter",
    ],
    faqs: [
      {
        question: "Mengapa rejection sampling dengan crypto.getRandomValues penting?",
        answer:
          "Menghitung randomUint32 % poolSize begitu saja sedikit menguntungkan karakter berindeks rendah ketika 2^32 tidak habis dibagi poolSize (bias modulo). Rejection sampling membuang hasil di luar jangkauan sehingga setiap karakter dalam kumpulan memiliki peluang yang sama persis secara matematis.",
      },
      {
        question: "Haruskah saya memakai kata sandi acak atau frasa sandi?",
        answer:
          "Keduanya sangat baik bila cukup panjang: 16+ karakter campuran berfungsi di mana saja di pengelola kata sandi, sedangkan frasa sandi 5 hingga 6 kata jauh lebih mudah diketik manual di TV, ponsel, atau perintah dekripsi disk.",
      },
      {
        question: "Apakah kata sandi yang dibuat disimpan di mana pun?",
        answer:
          "Tidak pernah. Kata sandi hanya hidup di memori React sementara di tab Anda dan hilang saat dimuat ulang.",
      },
      {
        question: "Apakah Generator Kata Sandi gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran. Anda dapat membuat kata sandi dan frasa sandi sebanyak yang diperlukan, langsung di browser Anda.",
      },
      {
        question: "Bagaimana kata sandi dibuat di sini?",
        answer:
          "Kata sandi dibuat lokal di browser Anda memakai window.crypto.getRandomValues, generator angka acak yang aman secara kriptografis dan didukung perangkat keras di browser Anda, dengan rejection sampling untuk menghilangkan bias modulo.",
      },
      {
        question: "Apakah kata sandi yang saya buat dikirim ke server?",
        answer:
          "Tidak. Pembuatan dilakukan sepenuhnya di perangkat Anda, dan tidak ada yang disimpan, dicatat, atau dikirim lewat jaringan.",
      },
      {
        question: "Seberapa panjang sebaiknya kata sandi saya?",
        answer:
          "Untuk akun penting, gunakan setidaknya 16 karakter dengan kelas karakter campuran, yang memberikan sekitar 100+ bit entropi. Kata sandi yang lebih pendek hanya baik untuk akun bernilai rendah, dan panjang lebih penting daripada kerumitan.",
      },
      {
        question: "Apa itu entropi kata sandi, dan berapa bit yang saya perlukan?",
        answer:
          "Entropi mengukur seberapa besar usaha tebakan yang diwakili kata sandi. Sekitar 70–80 bit sudah kuat untuk sebagian besar akun, sedangkan 100+ bit disarankan untuk kata sandi utama, kunci enkripsi, dan akun bernilai tinggi.",
      },
      {
        question: "Apa itu frasa sandi Diceware?",
        answer:
          "Frasa sandi Diceware adalah beberapa kata acak yang dipilih dari daftar kata tetap, seperti 'correct horse battery staple'. Lima atau enam kata acak memberikan entropi yang kuat sambil jauh lebih mudah diketik dan diingat daripada karakter acak.",
      },
      {
        question: "Haruskah saya mengecualikan karakter ambigu seperti 0, O, 1, l, dan I?",
        answer:
          "Ya, ketika Anda akan mengetik kata sandi dengan tangan atau membacakannya. Mengecualikan karakter yang mirip mencegah kesalahan ketik saat login, dan dengan kata sandi yang cukup panjang, kehilangan entropi yang kecil dapat diabaikan.",
      },
      {
        question: "Bisakah saya membuat beberapa kata sandi sekaligus?",
        answer:
          "Ya. Anda dapat membuat batch hingga 10 kata sandi dalam satu klik, yang berguna saat menyediakan akun atau onboarding anggota tim baru.",
      },
      {
        question: "Apakah generator menjamin setidaknya satu karakter dari setiap kelas yang dipilih?",
        answer:
          "Ya. Setiap kata sandi yang dibuat menyertakan setidaknya satu karakter dari setiap kelas karakter yang Anda aktifkan, tanpa menempatkan karakter itu pada posisi tetap yang dapat diprediksi.",
      },
      {
        question: "Bisakah saya memakai kata sandi ini untuk kata sandi utama pengelola kata sandi saya?",
        answer:
          "Frasa sandi yang panjang berfungsi baik sebagai kata sandi utama karena Anda harus mengetiknya dari ingatan. Buat frasa sandi Diceware 6 kata, hafalkan, dan simpan kata sandi lain Anda di pengelola.",
      },
      {
        question: "Mengapa tidak memakai Math.random() untuk kata sandi?",
        answer:
          "Math.random() tidak aman secara kriptografis: keluarannya dapat diprediksi jika penyerang mempelajari keadaan internalnya. Alat ini hanya memakai window.crypto.getRandomValues, yang dirancang untuk keacakan yang sensitif terhadap keamanan.",
      },
      {
        question: "Apakah kata sandi yang dibuat akan berfungsi di setiap website?",
        answer:
          "Hampir selalu. Jika sebuah situs menolak simbol atau membatasi panjang, kurangi panjangnya atau nonaktifkan kelas simbol lalu buat ulang hingga situs menerimanya.",
      },
      {
        question: "Bisakah saya memakai ulang kata sandi yang dibuat di beberapa situs?",
        answer:
          "Sebaiknya tidak. Memakai ulang kata sandi berarti satu kebocoran mengekspos setiap akun yang memakai kata sandi itu, jadi buat kata sandi unik untuk setiap situs dan simpan di pengelola kata sandi.",
      },
      {
        question: "Apa yang terjadi pada kata sandi saya jika saya memuat ulang halaman?",
        answer:
          "Kata sandi hilang. Kata sandi yang dibuat hanya ada di memori sementara tab, jadi salin atau simpan di pengelola kata sandi sebelum memuat ulang atau menutup halaman.",
      },
      {
        question: "Apakah Generator Kata Sandi berfungsi offline?",
        answer:
          "Ya. Setelah halaman dimuat, pembuatan berjalan sepenuhnya di browser Anda tanpa permintaan jaringan, sehingga berfungsi offline.",
      },
      {
        question: "Bagaimana cara memilih antara kata sandi dan frasa sandi untuk Wi-Fi?",
        answer:
          "Gunakan frasa sandi untuk kunci Wi-Fi yang Anda ketik di banyak perangkat, karena kata lebih mudah dimasukkan dengan benar, dan kata sandi karakter acak ketika pengelola kata sandi akan mengisinya untuk Anda.",
      },
      {
        question: "Apakah kata sandi yang dibuat dijamin tidak dapat diretas?",
        answer:
          "Tidak ada kata sandi yang dapat dijamin tidak dapat diretas — sebuah situs tetap dapat dibobol atau ditipu lewat phishing. Namun kata sandi yang panjang, unik, dan dibuat acak lalu disimpan di pengelola kata sandi adalah salah satu pertahanan praktis terkuat yang dapat Anda pakai.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih file dari perangkat Anda",
        description:
          "Pilih arsip, installer, PDF, atau aset biner. File hanya dibaca ke memori browser lokal (disarankan di bawah 500 MB) dan tidak pernah diunggah.",
      },
      {
        title: "Tunggu digest dihitung",
        description:
          "Browser menghitung SHA-256, SHA-512, SHA-384, dan SHA-1 secara paralel memakai Web Crypto yang dipercepat perangkat keras. File yang lebih besar memerlukan beberapa detik.",
      },
      {
        title: "Periksa digest kriptografis yang dihitung",
        description:
          "Tinjau hash heksadesimal SHA-256, SHA-512, SHA-384, dan SHA-1 lama beserta metadata file dan unduh file teks .sha256 standar bila perlu.",
      },
      {
        title: "Verifikasi terhadap checksum yang diterbitkan",
        description:
          "Tempel string SHA-256/512/384/1 yang diharapkan — atau seluruh baris '<hash>  nama file' dari file .sha256sum — untuk memastikan kecocokan yang tepat atau menangkap kerusakan/pengubahan.",
      },
      {
        title: "Salin atau ekspor hash",
        description:
          "Salin digest apa pun dengan satu klik, atau unduh file teks .sha256 standar untuk disertakan bersama rilis atau disimpan sebagai catatan verifikasi.",
      },
      {
        title: "Bertindak atas ketidakcocokan atau file besar",
        description:
          "Jika hash tidak cocok, hapus file dan unduh ulang dari sumber resmi. Untuk file di atas ~500 MB, gunakan shasum -a 256 atau certutil, karena browser memuat seluruh file ke memori.",
      },
    ],
    examples: [
      {
        title: "Memverifikasi biner rilis yang diunduh terhadap .sha256sum vendor",
        input: "File: app-v2.tar.gz · Diharapkan: 'e3b0c442...  app-v2.tar.gz'",
        output: "Checksum Terverifikasi! Cocok dengan digest SHA-256 yang dihitung secara bersih.",
        explanation: "Secara otomatis mengekstrak token hash di awal, mengabaikan huruf besar/kecil, dan membandingkan dengan keempat algoritma yang dihitung.",
      },
      {
        title: "Memverifikasi ISO Linux sebelum instalasi",
        input: "File: ubuntu-24.04.iso (~5 GB) · Diharapkan: hash SHA-256 dari situs resmi Ubuntu",
        output: "File terlalu besar untuk browser — gunakan shasum -a 256 di terminal untuk ISO multi-gigabyte.",
        explanation: "Browser memuat seluruh file ke memori, sehingga ISO besar sebaiknya diverifikasi dengan alat baris perintah bawaan.",
      },
    ],
    benefits: [
      "Memakai Web Crypto SubtleCrypto bawaan browser yang dipercepat perangkat keras",
      "Mendukung penempelan baris '<hash>  nama file' lengkap dari manifes rilis .sha256sum",
      "Mengekspor file verifikasi filename.sha256 standar dalam satu klik",
      "Tanpa unggahan file sehingga build rahasia dan kontrak tetap privat",
    ],
    useCases: [
      "Memverifikasi ISO Linux, biner CLI, atau tarball sumber terbuka tanpa membuka terminal",
      "Mengonfirmasi pengiriman arsip legal atau keuangan yang tepat byte demi byte",
      "Membuat manifes rilis .sha256 untuk kiriman klien kecil",
      "Mendeteksi unduhan yang terpotong atau rusak sebelum ekstraksi",
    ],
    faqs: [
      {
        question: "Apakah ada batas ukuran file maksimum?",
        answer:
          "Karena File.arrayBuffer() browser memuat seluruh file ke RAM klien sekaligus, file hingga ~300–500 MB berfungsi lancar, sedangkan ISO multi-gigabyte dapat melebihi kuota memori browser — untuk file multi-GB, alat CLI bawaan (shasum -a 256 atau certutil) disarankan.",
      },
      {
        question: "Mengapa SHA-1 dilabeli hanya untuk kompatibilitas lama?",
        answer:
          "SHA-1 memiliki kelemahan tabrakan praktis yang diketahui dan tidak boleh dipercaya untuk jaminan keamanan yang bersifat adversarial; pilih SHA-256 atau SHA-512 bila memungkinkan.",
      },
      {
        question: "Ingin meng-hash string teks mentah, bukan file biner?",
        answer:
          "Periksa alat Hash Generator kami di Alat Pengembang untuk hashing teks UTF-8 instan.",
      },
      {
        question: "Apakah Verifikator Hash File gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan Anda dapat memverifikasi file sebanyak yang Anda mau.",
      },
      {
        question: "Apakah file saya diunggah ke mana pun saat saya memverifikasinya?",
        answer:
          "Tidak. Hashing dilakukan sepenuhnya di browser Anda memakai Web Crypto API, sehingga file Anda tidak pernah meninggalkan perangkat Anda — inilah alasan alat ini aman untuk build dan kontrak rahasia.",
      },
      {
        question: "Apa itu hash file, dan mengapa saya harus memeriksanya?",
        answer:
          "Hash adalah sidik jari dengan panjang tetap yang dihitung dari byte persis sebuah file. Jika satu byte saja berubah, hash berubah sepenuhnya, sehingga membandingkan hash membuktikan unduhan tiba utuh dan tidak diubah.",
      },
      {
        question: "Algoritma hash mana yang sebaiknya saya pakai: SHA-256, SHA-512, atau SHA-1?",
        answer:
          "Gunakan SHA-256 untuk verifikasi umum — standar ini yang disediakan penerbit. SHA-512 sama kuat dan lebih cepat di sistem 64-bit, sedangkan SHA-1 hanya untuk lama dan tidak boleh dipercaya untuk keamanan.",
      },
      {
        question: "Di mana saya menemukan checksum resmi untuk dibandingkan?",
        answer:
          "Penerbit biasanya mencantumkannya di halaman unduhan atau dalam file .sha256 / .sha256sum di samping unduhan. Selalu salin dari situs vendor sendiri, bukan dari mirror atau postingan forum.",
      },
      {
        question: "Apa yang harus saya lakukan jika hash tidak cocok?",
        answer:
          "Jangan jalankan atau ekstrak file. Hapus dan unduh ulang dari sumber resmi; ketidakcocokan berarti unduhan rusak, terpotong, atau mungkin diubah.",
      },
      {
        question: "Bisakah saya menempel seluruh baris .sha256sum, bukan hanya hash-nya?",
        answer:
          "Ya. Verifikator menerima baris '<hash>  nama file' lengkap dari manifes rilis — alat mengekstrak token hash di awal secara otomatis, mengabaikan huruf besar/kecil, dan membandingkannya dengan keempat algoritma yang dihitung.",
      },
      {
        question: "Apakah hash bergantung pada nama file?",
        answer:
          "Tidak. Digest dihitung hanya dari isi file, sehingga mengganti nama file tidak pernah mengubah hash-nya. Dua file dengan byte yang sama selalu menghasilkan hash yang sama.",
      },
      {
        question: "Bisakah saya memverifikasi ISO Linux atau installer besar dengan alat ini?",
        answer:
          "Ya, hingga sekitar 300–500 MB. Untuk ISO multi-gigabyte, gunakan alat bawaan seperti shasum -a 256 di macOS/Linux atau certutil -hashfile di Windows, karena browser memuat seluruh file ke memori.",
      },
      {
        question: "Apa perbedaan antara SHA-256 dan SHA-512?",
        answer:
          "Keduanya adalah anggota keluarga SHA-2 yang aman; SHA-256 menghasilkan digest hex 64 karakter dan SHA-512 menghasilkan 128 karakter. SHA-512 sedikit lebih kuat dan lebih cepat di perangkat keras 64-bit, tetapi SHA-256 adalah checksum yang lebih banyak diterbitkan.",
      },
      {
        question: "Bisakah alat ini mendeteksi virus atau malware dalam file?",
        answer:
          "Tidak. Hash yang cocok hanya membuktikan file identik dengan yang dirilis penerbit. Jika file penerbit sendiri berbahaya, hash tetap akan cocok, jadi verifikasi unduhan hanya dari sumber yang Anda percayai.",
      },
      {
        question: "Bagaimana cara mengunduh file .sha256 untuk rilis saya sendiri?",
        answer:
          "Hash file rilis Anda di sini, lalu unduh file teks filename.sha256 standar yang dibuat alat dan terbitkan bersama unduhan Anda agar pengguna dapat memverifikasinya.",
      },
      {
        question: "Mengapa hashing memerlukan beberapa detik untuk file besar?",
        answer:
          "Browser harus membaca dan memproses setiap byte file. File yang lebih besar membutuhkan waktu lebih lama, dan waktu bertambah seiring ukuran file, bukan algoritma yang Anda pilih.",
      },
      {
        question: "Apakah Verifikator Hash File berfungsi offline?",
        answer:
          "Ya. Setelah halaman dimuat, semua hashing berjalan lokal di browser Anda tanpa permintaan jaringan, sehingga Anda dapat memverifikasi file tanpa koneksi internet.",
      },
      {
        question: "Bisakah saya memverifikasi beberapa file sekaligus?",
        answer:
          "Alat ini memverifikasi satu file dalam satu waktu. Hash setiap file secara terpisah dan bandingkan dengan checksum-nya yang diterbitkan.",
      },
      {
        question: "Apakah hash yang cocok merupakan bukti file itu autentik?",
        answer:
          "Hash yang cocok membuktikan file identik byte demi byte dengan yang di-hash penerbit. Hash tidak membuktikan penerbit adalah pihak yang diklaimnya, jadi dapatkan hash yang diharapkan dari kanal resmi penerbit.",
      },
      {
        question: "Apakah alat menyimpan file atau hash saya?",
        answer:
          "Tidak. Tidak ada yang diunggah atau disimpan, dan hash yang dihitung hanya ada di tab browser Anda saat ini hingga Anda menutup atau memuat ulangnya.",
      },
    ],
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
    instructions: [
      {
        title: "Pilih Lencana Monogram atau Unggah Logo",
        description:
          "Masukkan 1–3 inisial merek dengan warna latar/teks kustom, atau beralih ke Unggah Gambar Logo untuk memotong tengah mark PNG/SVG/JPG yang sudah ada.",
      },
      {
        title: "Atur gaya ikon Anda",
        description:
          "Pilih huruf monogram dan warnanya, atau sesuaikan potongan logo yang diunggah agar mark berada di tengah dengan padding yang merata di setiap sisi.",
      },
      {
        title: "Pilih bentuk sudut",
        description:
          "Pilih pembingkaian Persegi Membulat (gaya iOS/macOS), Lingkaran, atau Persegi Tajam.",
      },
      {
        title: "Pratinjau setiap ukuran",
        description:
          "Periksa pratinjau 16×16 dan 32×32 dengan cermat — mark yang terlihat bagus saat besar dapat berubah buram pada ukuran tab, jadi sederhanakan huruf atau detail bila perlu.",
      },
      {
        title: "Unduh favicon.ico, PNG, dan cuplikan HTML",
        description:
          "Unduh bundel favicon.ico multi-frame bersama ukuran PNG satuan dan salin tag tautan <head> ke proyek Anda.",
      },
      {
        title: "Pasang ikon dan bersihkan cache",
        description:
          "Letakkan file di folder /public/ Anda, tempel tag tautan ke index.html, lalu muat ulang secara keras atau bersihkan cache browser — browser menyimpan favicon secara agresif, sehingga ikon lama biasanya berarti ikon yang di-cache.",
      },
    ],
    examples: [
      {
        title: "Menyiapkan ikon untuk aplikasi React atau Cloudflare Pages baru",
        input: "Monogram 'UH' · Latar #4F46E5 · Bentuk: Persegi Membulat",
        output: "Favicon.ico biner (frame PNG 16+32+48 px) + 6 ukuran PNG + cuplikan <link> HTML",
        explanation: "Membangun header biner ICONDIR dan ICONDIRENTRY yang valid langsung di dalam buffer Uint8Array.",
      },
      {
        title: "Membuat ikon Apple Touch dari logo persegi",
        input: "Logo PNG persegi 512×512 · Bentuk: Lingkaran · Target: Apple Touch 180×180",
        output: "PNG 180×180 yang tajam dengan logo terpusat dan padding merata, siap untuk layar beranda iOS",
        explanation: "Pemotongan tengah menjaga mark tetap utuh sementara bentuk lingkaran cocok dengan gaya ikon iOS.",
      },
    ],
    benefits: [
      "Membangun file .ico biner multi-frame asli (16×16, 32×32, dan 48×48), bukan PNG yang diganti nama",
      "Mencakup tab desktop, Apple Touch (180×180), dan ikon Web Manifest (192/512 px)",
      "Mode Monogram instan tidak memerlukan perangkat lunak desain untuk proyek sampingan dan MVP",
      "Menghasilkan boilerplate <link rel=\"icon\"> HTML5 yang bersih dan siap tempel ke index.html",
    ],
    useCases: [
      "Mengirim favicon dan ikon Apple Touch yang hilang sebelum peluncuran SaaS atau microsite",
      "Membuat ikon tab berkontras tinggi untuk dashboard staging vs. produksi",
      "Mengubah mark merek SVG/PNG persegi menjadi rangkaian ikon PWA lengkap",
      "Membuat pratinjau 16×16 dan 32×32 yang tajam untuk memverifikasi keterbacaan ukuran kecil",
    ],
    faqs: [
      {
        question: "Apakah favicon.ico yang diunduh merupakan file biner ICO asli?",
        answer:
          "Ya. Alat ini menulis header ICONDIR ICO standar Windows dan entri direktori yang berisi tiga frame berkode PNG yang tajam (16×16, 32×32, dan 48×48) yang didukung semua browser dan sistem operasi modern.",
      },
      {
        question: "Ukuran ikon apa yang sebenarnya diperlukan website modern?",
        answer:
          "Favicon.ico plus PNG 32×32, ikon Apple Touch 180×180, dan PNG Web Manifest 192×192 / 512×512 mencakup hampir setiap browser desktop, iOS seluler, dan Android.",
      },
      {
        question: "Di mana saya harus menaruh file ini dalam proyek React + Vite?",
        answer:
          "Letakkan favicon.ico dan ikon PNG di dalam folder /public/ proyek Anda lalu tempel tag <link> HTML di dalam <head> index.html.",
      },
      {
        question: "Apakah Generator Favicon gratis digunakan?",
        answer:
          "Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan semua ikon dibuat lokal di browser Anda.",
      },
      {
        question: "Apakah logo yang saya unggah dikirim ke server?",
        answer:
          "Tidak. Logo Anda diproses sepenuhnya di browser Anda dan tidak pernah diunggah, sehingga aset merek Anda tetap privat.",
      },
      {
        question: "Apa perbedaan antara favicon.ico dan favicon PNG?",
        answer:
          "Favicon.ico adalah wadah yang menyimpan beberapa ukuran ikon dalam satu file biner, yang didukung browser selama puluhan tahun. Favicon PNG adalah gambar ukuran tunggal; browser modern menerima keduanya, tetapi .ico tetap menjadi default paling aman.",
      },
      {
        question: "Apa itu ikon Apple Touch?",
        answer:
          "Ikon ini adalah ikon PNG 180×180 yang dipakai iOS saat seseorang menambahkan situs Anda ke layar beranda. Tanpa ikon ini, iOS mengambil tangkapan layar halaman Anda, yang biasanya terlihat buruk.",
      },
      {
        question: "Untuk apa ikon PWA 192×192 dan 512×512?",
        answer:
          "Ikon-ikon ini dicantumkan dalam manifes aplikasi web Anda untuk Progressive Web App yang dapat diinstal. Android dan Chrome memakainya untuk ikon layar beranda, layar splash, dan peluncur aplikasi.",
      },
      {
        question: "Bisakah saya membuat favicon dari teks tanpa logo?",
        answer:
          "Ya. Mode Monogram mengubah 1–3 huruf, seperti inisial merek Anda, menjadi lencana bersih dengan pilihan warna latar, warna teks, dan bentuk sudut — tanpa perangkat lunak desain.",
      },
      {
        question: "File logo apa yang sebaiknya saya unggah untuk hasil terbaik?",
        answer:
          "Unggah PNG atau SVG persegi dengan latar transparan berukuran 512×512 atau lebih besar. Gambar sumber persegi terpotong bersih; logo yang lebar atau tinggi akan terpotong tengah, yang dapat memotong tepinya.",
      },
      {
        question: "Mengapa favicon baru saya tidak muncul setelah diterapkan?",
        answer:
          "Browser menyimpan favicon dengan sangat agresif. Muat ulang secara keras dengan Ctrl+Shift+R (atau Cmd+Shift+R di Mac), bersihkan cache situs, atau uji di jendela privat untuk melihat ikon baru.",
      },
      {
        question: "Haruskah favicon sama persis dengan logo saya?",
        answer:
          "Pada ukuran besar ya, tetapi pada 16×16 detail halus menghilang. Sederhanakan mark untuk ukuran terkecil — inisial tebal atau satu bentuk tebal terbaca jauh lebih baik daripada logo yang detail.",
      },
      {
        question: "Bentuk sudut apa yang sebaiknya saya pilih?",
        answer:
          "Persegi Membulat cocok dengan gaya ikon aplikasi iOS dan macOS, Lingkaran cocok untuk avatar dan mark gaya sosial, dan Persegi Tajam paling baik untuk mark merek geometris atau teknis.",
      },
      {
        question: "Apakah saya perlu menambahkan tag tautan HTML untuk ikon?",
        answer:
          "Ya untuk hasil yang andal. Browser mencari /favicon.ico secara default, tetapi ikon Apple Touch dan PWA hanya dimuat ketika Anda mendeklarasikannya dengan tag <link> di <head> halaman Anda, yang dibuat alat ini untuk Anda.",
      },
      {
        question: "Bisakah saya memakai ikon yang dihasilkan untuk aplikasi ponsel juga?",
        answer:
          "PNG 192×192 dan 512×512 berfungsi untuk instalasi PWA, tetapi aplikasi iOS dan Android bawaan memerlukan rangkaian ikon sendiri dengan ukuran dan format tertentu, yang tidak dibuat alat yang berfokus pada web ini.",
      },
      {
        question: "Apakah Generator Favicon berfungsi offline?",
        answer:
          "Ya. Setelah halaman dimuat, pembuatan ikon berjalan sepenuhnya di browser Anda tanpa permintaan jaringan.",
      },
      {
        question: "Warna latar apa yang paling baik untuk favicon monogram?",
        answer:
          "Warna merek solid berkontras tinggi dengan huruf putih atau hampir putih paling baik, karena tetap terbaca pada 16×16. Hindari teks terang di latar terang dan gradien yang ramai.",
      },
      {
        question: "Bisakah saya membuat ulang ikon setelah mengubah warna merek saya?",
        answer:
          "Ya. Perbarui saja warnanya atau unggah logo baru lalu unduh rangkaian baru — alat tidak menyimpan apa pun dari sesi sebelumnya, sehingga setiap jalan dimulai bersih.",
      },
      {
        question: "Apakah favicon berfungsi di tab browser mode gelap?",
        answer:
          "Favicon dengan warna latar solid tampil sama di tab terang dan gelap. Jika mark Anda gelap di atas transparan, tambahkan latar terang atau garis luar agar tetap terlihat pada chrome browser gelap.",
      },
      {
        question: "Apakah alat menyimpan logo atau ikon hasil saya?",
        answer:
          "Tidak. Semuanya berjalan lokal di tab browser Anda, tidak ada yang diunggah atau disimpan, dan file Anda hilang saat Anda menutup atau memuat ulang halaman.",
      },
    ],
  },
};
