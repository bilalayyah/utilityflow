import type { CategoryLocaleOverride } from '../types';

/**
 * Indonesian overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.id in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5 — exactly the Indonesian tool names).
 */
export const ID_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'alat-teks-dan-penulisan',
    name: 'Alat Teks & Penulisan',
    shortName: 'Teks & Penulisan',
    description:
      'Analisis jumlah kata, format teks, bersihkan spasi berlebih, ubah huruf besar-kecil, dan periksa keterbacaan langsung di browser Anda.',
    longDescription:
      'Utilitas penulisan dan manipulasi string yang presisi untuk penulis, editor, tim konten, dan pelajar. Setiap operasi teks berjalan instan di perangkat Anda tanpa mengunggah draf ke server.',
    intro:
      'Pilih alat di bawah, tempel atau ketik teks Anda, dan hasilnya langsung muncul. Tidak ada yang perlu diinstal dan tidak ada yang perlu diunggah — draf Anda tetap di perangkat Anda, karena setiap alat berjalan sepenuhnya di browser Anda.',
    faqs: [
      {
        question: 'Apakah alat teks dan penulisan ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah teks saya keluar dari browser saya?',
        answer: 'Tidak. Setiap alat berjalan 100% di browser Anda, jadi teks yang Anda tempel atau ketik tidak pernah diunggah ke server atau disimpan di mana pun.',
      },
      {
        question: 'Apakah saya perlu membuat akun?',
        answer: 'Tidak. Anda bisa membuka alat apa pun dan langsung mulai menggunakannya — tanpa akun, tanpa email, dan tanpa instalasi.',
      },
      {
        question: 'Alat apa yang harus saya gunakan untuk menghitung kata dalam teks saya?',
        answer: 'Gunakan Penghitung Kata. Tempel teks Anda ke dalamnya dan alat ini langsung menampilkan jumlah kata dan karakter.',
      },
    ],
    seo: {
      title: 'Alat Teks & Penulisan – Utilitas Kata Online | UtilityFlow',
      description:
        'Jelajahi alat teks dan penulisan berbasis browser: penghitung kata, pengubah huruf, pengurut baris, dan pembersih teks dengan pemrosesan lokal instan.',
      keywords: [
        'alat teks',
        'utilitas penulisan',
        'penghitung kata',
        'penghitung karakter',
        'pengubah huruf',
      ],
    },
    sampleToolNames: [
      'Penghitung Kata',
      'Penghitung Karakter',
      'Pengubah Huruf',
      'Hapus Baris Duplikat',
      'Pemeriksa Perbedaan Teks',
    ],
  },
  developer: {
    slug: 'alat-pengembang',
    name: 'Alat Pengembang',
    shortName: 'Pengembang',
    description:
      'Format JSON, encode Base64, uji ekspresi reguler, decode JWT, dan buat hash tanpa perlu ke server.',
    longDescription:
      'Utilitas rekayasa sehari-hari untuk debugging cepat dan transformasi data yang bersih. Tempel payload, periksa format terstruktur, dan validasi sintaks secara lokal agar token sensitif tidak pernah meninggalkan perangkat Anda.',
    intro:
      'Pilih alat yang Anda butuhkan, tempel kode atau data Anda, dan periksa hasilnya seketika. Semuanya diproses di perangkat Anda sendiri, jadi token, payload, dan cuplikan konfigurasi tidak pernah meninggalkan perangkat Anda.',
    faqs: [
      {
        question: 'Apakah alat pengembang ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah saya bisa menempel token atau kunci API ke alat-alat ini dengan aman?',
        answer: 'Ya. Alat seperti decoder JWT dan encoder Base64 berjalan sepenuhnya di browser Anda, jadi teks yang Anda tempel tidak pernah dikirim ke server.',
      },
      {
        question: 'Apakah saya perlu membuat akun?',
        answer: 'Tidak. Anda bisa membuka alat apa pun dan langsung mulai menggunakannya — tanpa akun, tanpa email, dan tanpa instalasi.',
      },
      {
        question: 'Alat apa yang harus saya gunakan untuk memeriksa apakah JSON saya valid?',
        answer: 'Gunakan Pemformat JSON & Validator. Tempel JSON Anda ke dalamnya dan alat ini akan memformat kode serta menampilkan kesalahan apa pun.',
      },
    ],
    seo: {
      title: 'Alat Pengembang – JSON, Regex & Hash Online | UtilityFlow',
      description:
        'Utilitas pengembang sisi klien untuk memformat JSON, menguji regex, mengodekan Base64 dan URL, memeriksa JWT, serta membuat UUID dengan aman di browser Anda.',
      keywords: [
        'alat pengembang',
        'pemformat json',
        'encoder base64',
        'penguji regex',
        'decoder jwt',
      ],
    },
    sampleToolNames: [
      'Pemformat JSON & Validator',
      'Encoder / Decoder Base64',
      'Encoder / Decoder URL',
      'Generator UUID (v4 & v7)',
      'Penguji Regex',
    ],
  },
  calculators: {
    slug: 'kalkulator',
    name: 'Kalkulator',
    shortName: 'Kalkulator',
    description:
      'Hitung umur, persentase, jadwal pinjaman, BMI, konversi satuan, dan margin bisnis dengan presisi yang pasti.',
    longDescription:
      'Kalkulator keuangan, tanggal, kesehatan, dan matematika yang akurat dan mudah dipahami. Lihat rincian langkah demi langkah, hasil tabel yang rapi, dan perhitungan ulang instan saat Anda mengubah input.',
    intro:
      'Pilih kalkulator, masukkan angka Anda, dan hasilnya langsung diperbarui saat Anda mengubah input. Tidak perlu mendaftar, dan tidak ada yang Anda masukkan dikirim ke mana pun — setiap perhitungan terjadi di browser Anda.',
    faqs: [
      {
        question: 'Apakah kalkulator ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah data yang saya masukkan keluar dari browser saya?',
        answer: 'Tidak. Setiap perhitungan berjalan 100% di browser Anda, jadi angka yang Anda masukkan tidak pernah diunggah ke server atau disimpan di mana pun.',
      },
      {
        question: 'Apakah kalkulator ini berfungsi di ponsel?',
        answer: 'Ya. Kalkulator ini berfungsi di browser modern mana pun, jadi Anda bisa menggunakannya di ponsel, tablet, atau komputer.',
      },
      {
        question: 'Kalkulator apa yang harus saya gunakan untuk cicilan pinjaman bulanan?',
        answer: 'Gunakan Kalkulator Pinjaman & EMI. Masukkan jumlah pinjaman, suku bunga, dan durasi untuk melihat cicilan bulanan dan jadwal pembayaran lengkap.',
      },
    ],
    seo: {
      title: 'Kalkulator Online – Keuangan, Tanggal & Satuan | UtilityFlow',
      description:
        'Gunakan kalkulator online yang cepat dan transparan untuk menghitung umur, persentase, cicilan pinjaman, margin bisnis, dan konversi satuan dengan hasil instan.',
      keywords: [
        'kalkulator online',
        'kalkulator umur',
        'kalkulator persentase',
        'kalkulator pinjaman',
        'konverter satuan',
      ],
    },
    sampleToolNames: [
      'Kalkulator Umur',
      'Kalkulator Persentase',
      'Kalkulator Pinjaman & EMI',
      'Kalkulator Diskon & Margin',
      'Kalkulator Selisih Tanggal',
    ],
  },
  'social-media': {
    slug: 'alat-media-sosial',
    name: 'Alat Media Sosial',
    shortName: 'Media Sosial',
    description:
      'Buat tautan pelacak UTM, pratinjau panjang postingan, buat kode QR, dan format caption untuk kanal sosial modern.',
    longDescription:
      'Pembantu pemasaran dan penerbitan praktis untuk kreator, tim pertumbuhan, dan pengelola komunitas. Standarisasi parameter pelacakan kampanye, periksa batas karakter platform, dan buat kode QR yang bisa dipindai kapan saja.',
    intro:
      'Buka alat di bawah, masukkan tautan atau teks Anda, lalu salin hasilnya langsung ke postingan atau kampanye Anda. Semuanya berjalan di browser Anda, jadi tautan dan caption Anda tidak pernah diunggah ke server.',
    faqs: [
      {
        question: 'Apakah alat media sosial ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah yang saya masukkan diunggah ke server?',
        answer: 'Tidak. Setiap alat berjalan 100% di browser Anda, jadi tautan, caption, dan teks Anda tidak pernah meninggalkan perangkat Anda.',
      },
      {
        question: 'Apakah saya perlu membuat akun?',
        answer: 'Tidak. Anda bisa membuka alat apa pun dan langsung mulai menggunakannya — tanpa akun, tanpa email, dan tanpa instalasi.',
      },
      {
        question: 'Alat apa yang membuat kode QR untuk tautan saya?',
        answer: 'Gunakan Generator Kode QR. Masukkan tautan Anda dan alat ini membuat kode QR yang bisa dipindai, yang dapat Anda unduh dan bagikan.',
      },
    ],
    seo: {
      title: 'Alat Media Sosial – Kode QR, UTM & Postingan | UtilityFlow',
      description:
        'Buat tautan UTM, hasilkan kode QR, periksa batas karakter media sosial, serta format hashtag dan bio dengan utilitas browser yang bersih, cepat, dan gratis.',
      keywords: [
        'alat media sosial',
        'generator kode qr',
        'pembuat utm',
        'pemformat hashtag',
        'penghitung caption',
      ],
    },
    sampleToolNames: [
      'Generator Kode QR',
      'Pembuat Tautan UTM',
      'Pemeriksa Batas Karakter Media Sosial',
      'Generator Teks Unicode',
      'Pemformat Jeda Baris Bio',
    ],
  },
  pdf: {
    slug: 'alat-pdf',
    name: 'Alat PDF',
    shortName: 'Alat PDF',
    description:
      'Gabung, pisah, susun ulang, beri watermark, dan konversi dokumen PDF di browser tanpa mengunggah file pribadi.',
    longDescription:
      'Alur kerja dokumen yang dirancang untuk kerahasiaan. Proses kontrak, faktur, dan materi belajar langsung di memori klien menggunakan WebAssembly dan API canvas browser, bukan server jarak jauh.',
    intro:
      'Pilih alat, pilih file PDF Anda, dan hasilnya siap di browser Anda dalam beberapa saat. Dokumen Anda tidak pernah meninggalkan perangkat Anda — dokumen diproses secara lokal, bukan diunggah ke server mana pun.',
    faqs: [
      {
        question: 'Apakah alat PDF ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah file PDF saya diunggah ke mana pun?',
        answer: 'Tidak. File Anda diproses langsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda dan tidak pernah disimpan di server.',
      },
      {
        question: 'Apakah alat PDF berfungsi di ponsel?',
        answer: 'Ya. Kalkulator ini berfungsi di browser modern mana pun, jadi Anda bisa menggunakannya di ponsel, tablet, atau komputer.',
      },
      {
        question: 'Alat apa yang menggabungkan beberapa file PDF menjadi satu?',
        answer: 'Gunakan Gabung PDF. Pilih file yang ingin Anda gabungkan dan alat ini menyatukannya menjadi satu dokumen PDF.',
      },
    ],
    seo: {
      title: 'Alat PDF – Utilitas PDF Pribadi di Browser | UtilityFlow',
      description:
        'Gabung, pisah, putar, dan konversi file PDF secara lokal di browser Anda tanpa mengunggah dokumen sensitif ke server pihak ketiga mana pun, sepenuhnya gratis.',
      keywords: [
        'alat pdf',
        'gabung pdf',
        'pisah pdf',
        'gambar ke pdf',
        'editor pdf browser',
      ],
    },
    sampleToolNames: [
      'Gabung PDF',
      'Pisah PDF',
      'Gambar ke PDF',
      'Pemutar Halaman PDF',
      'Editor Metadata PDF',
    ],
  },
  seo: {
    slug: 'alat-seo',
    name: 'Alat SEO',
    shortName: 'Alat SEO',
    description:
      'Pratinjau snippet SERP, hasilkan tag OpenGraph, buat robots.txt dan sitemap XML, serta periksa kepadatan kata kunci.',
    longDescription:
      'Utilitas optimasi pencarian teknis dan on-page untuk penerbit, pendiri indie, dan spesialis SEO. Validasi panjang judul, susun metadata terstruktur, dan buat slug URL yang bersih dalam hitungan detik.',
    intro:
      'Pilih alat, masukkan judul halaman, URL, atau konten Anda, dan periksa hasilnya seketika. Semua pemeriksaan berjalan di browser Anda, jadi halaman yang belum diterbitkan dan draf Anda tetap pribadi.',
    faqs: [
      {
        question: 'Apakah alat SEO ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah konten saya keluar dari browser saya?',
        answer: 'Tidak. Setiap alat berjalan 100% di browser Anda, jadi judul, URL, dan konten yang Anda masukkan tidak pernah diunggah ke server atau disimpan di mana pun.',
      },
      {
        question: 'Apakah saya perlu membuat akun?',
        answer: 'Tidak. Anda bisa membuka alat apa pun dan langsung mulai menggunakannya — tanpa akun, tanpa email, dan tanpa instalasi.',
      },
      {
        question: 'Alat apa yang menampilkan pratinjau tampilan halaman saya di hasil pencarian?',
        answer: 'Gunakan Pratinjau Snippet SERP. Masukkan judul dan deskripsi Anda untuk melihat bagaimana halaman Anda mungkin muncul di hasil pencarian Google.',
      },
    ],
    seo: {
      title: 'Alat SEO – Pratinjau SERP, Meta & Slug | UtilityFlow',
      description:
        'Optimalkan halaman web Anda dengan utilitas SEO gratis: pratinjau snippet SERP, generator meta tag, pembuat robots.txt, dan pemeriksa kepadatan kata kunci.',
      keywords: [
        'alat seo',
        'generator meta tag',
        'pratinjau serp',
        'generator robots.txt',
        'generator slug',
      ],
    },
    sampleToolNames: [
      'Generator Meta Tag & Open Graph',
      'Pratinjau Snippet SERP',
      'Generator Slug URL & Pengoptimal Jalur SEO',
      'Generator Robots.txt',
      'Generator Markup Schema (JSON-LD)',
    ],
  },
  'image-file': {
    slug: 'alat-gambar-dan-file',
    name: 'Alat Gambar & File',
    shortName: 'Gambar & File',
    description:
      'Kompres gambar, ubah ukuran, konversi PNG/JPG/WebP, uji kontras WCAG, pindai kode QR, hash file, dan buat favicon secara lokal.',
    longDescription:
      'Utilitas media, kriptografi, dan file yang cepat, didukung HTML5 Canvas, Web Crypto API, dan File API sisi klien. Optimalkan aset web untuk Core Web Vitals, verifikasi checksum SHA-256 file, ekstrak palet gambar, dan buat favicon tanpa mengunggah file.',
    intro:
      'Pilih alat di bawah, pilih file Anda, dan dapatkan hasilnya segera. Gambar dan file Anda tidak pernah meninggalkan perangkat Anda — semuanya diproses secara lokal di browser Anda.',
    faqs: [
      {
        question: 'Apakah alat gambar dan file ini gratis?',
        answer: 'Ya, semuanya gratis digunakan, tanpa pendaftaran dan tanpa perlu akun.',
      },
      {
        question: 'Apakah gambar saya diunggah ke server?',
        answer: 'Tidak. File Anda diproses langsung di browser Anda, jadi file tidak pernah meninggalkan perangkat Anda dan tidak pernah disimpan di server.',
      },
      {
        question: 'Apakah alat ini berfungsi di ponsel?',
        answer: 'Ya. Kalkulator ini berfungsi di browser modern mana pun, jadi Anda bisa menggunakannya di ponsel, tablet, atau komputer.',
      },
      {
        question: 'Alat apa yang harus saya gunakan untuk memperkecil ukuran file gambar?',
        answer: 'Gunakan Kompresor Gambar. Pilih gambar Anda dan alat ini mengurangi ukuran file sambil tetap membuatnya siap untuk web.',
      },
    ],
    seo: {
      title: 'Alat Gambar & File – Kompresi, QR & File | UtilityFlow',
      description:
        'Kompres, ubah ukuran, putar, dan konversi gambar PNG, JPG, dan WebP secara lokal, verifikasi checksum file, pindai kode QR, periksa kontras, dan buat favicon.',
      keywords: [
        'alat gambar',
        'kompresor gambar',
        'pengubah ukuran gambar',
        'konverter webp',
        'pemeriksa kontras warna',
      ],
    },
    sampleToolNames: [
      'Kompresor Gambar',
      'Pengubah Ukuran & Pemotong Gambar',
      'Konverter Format Gambar (PNG / JPG / WebP)',
      'Pemeriksa Kontras Warna & Ekstraktor Palet',
      'Generator Kata Sandi & Frasa Sandi Kriptografis',
    ],
  },
};
