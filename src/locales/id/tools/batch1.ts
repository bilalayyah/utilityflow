import type { ToolLocaleOverride } from '../../types';

/**
 * Indonesian overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const ID_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'penghitung-kata',
    name: 'Penghitung Kata',
    shortDescription:
      'Hitung kata, karakter, kalimat, paragraf, waktu baca, dan kata kunci yang paling sering muncul secara instan.',
    keywords: [
      'penghitung kata',
      'hitung kata online',
      'hitung jumlah kata dalam teks',
      'kalkulator waktu baca',
      'penghitung kalimat',
      'penghitung paragraf',
      'penghitung kata gratis',
      'kalkulator waktu bicara',
      'hitung karakter dan kata',
    ],
    seo: {
      title: 'Penghitung Kata: Hitung Kata & Waktu Baca | UtilityFlow',
      description:
        'Hitung kata, karakter, kalimat, dan paragraf secara instan dan lihat estimasi waktu baca dan waktu bicara, semuanya dihitung di browser tanpa perlu mengunggah.',
      primaryKeyword: 'penghitung kata',
      secondaryKeywords: ['penghitung kata online', 'alat hitung kata', 'estimasi waktu baca', 'penghitung paragraf'],
      longTailKeywords: ['hitung kata dan karakter online gratis', 'estimasi waktu bicara dan baca dari teks', 'penghitung kata di browser tanpa unggah', 'cek jumlah kata untuk esai online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ukur jumlah kata yang tepat, total karakter, kepadatan kalimat, serta estimasi durasi membaca dan berbicara secara real time tanpa mengunggah draf Anda ke server mana pun.',
  },
  'character-counter': {
    slug: 'penghitung-karakter',
    name: 'Penghitung Karakter',
    shortDescription:
      'Ukur panjang karakter yang tepat dengan dan tanpa spasi, byte UTF-8, serta batas karakter media sosial dan SEO.',
    keywords: [
      'penghitung karakter',
      'penghitung huruf',
      'pemeriksa panjang meta description',
      'penghitung byte utf8',
      'alat batas karakter',
      'hitung karakter online',
      'pemeriksa panjang teks',
      'pemeriksa panjang judul seo',
      'penghitung karakter sms',
    ],
    seo: {
      title: 'Penghitung Karakter: Cek Batas & Ukuran Byte | UtilityFlow',
      description:
        'Hitung karakter dengan dan tanpa spasi, huruf, angka, dan byte UTF-8 sambil memantau progres terhadap batas SEO dan media sosial, semuanya di browser Anda.',
      primaryKeyword: 'penghitung karakter',
      secondaryKeywords: ['hitung karakter online', 'kalkulator panjang string', 'panjang judul meta', 'pemeriksa panjang teks'],
      longTailKeywords: ['hitung karakter tanpa spasi online', 'cek batas karakter meta description seo', 'hitung panjang byte utf8 dari teks', 'cek batas karakter twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lacak jumlah karakter yang tepat, huruf, angka, spasi, dan ukuran byte UTF-8 sambil memantau bilah progres langsung untuk cuplikan SEO, segmen SMS, dan umpan media sosial.',
  },
  'case-converter': {
    slug: 'pengubah-huruf',
    name: 'Pengubah Huruf',
    shortDescription:
      'Ubah teks antara HURUF BESAR, huruf kecil, Title Case, Sentence case, camelCase, snake_case, dan kebab-case.',
    keywords: [
      'pengubah huruf',
      'konverter title case',
      'huruf besar ke huruf kecil',
      'konverter camelcase',
      'generator snake case',
      'konverter huruf besar',
      'konverter huruf kecil',
      'konverter sentence case',
      'konverter pascalcase',
    ],
    seo: {
      title: 'Pengubah Huruf: Title, Sentence & camelCase | UtilityFlow',
      description:
        'Ubah teks antara huruf besar, huruf kecil, Title Case, Sentence case, camelCase, PascalCase, snake_case, dan kebab-case dalam satu klik, di browser Anda.',
      primaryKeyword: 'pengubah huruf',
      secondaryKeywords: ['konverter title case', 'alat sentence case', 'ubah huruf teks', 'huruf besar ke kecil'],
      longTailKeywords: ['ubah teks huruf besar jadi sentence case', 'ubah string ke camelcase dan snake_case', 'alat kapitalisasi title case online', 'ubah huruf besar jadi kecil online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Perbaiki teks yang tidak sengaja terketik dengan Caps Lock, standarkan judul artikel dalam Title Case, atau format pengenal variabel menjadi camelCase, PascalCase, snake_case, atau kebab-case dengan satu klik.',
  },
  'remove-duplicate-lines': {
    slug: 'hapus-baris-duplikat',
    name: 'Hapus Baris Duplikat',
    shortDescription:
      'Hapus duplikat dari daftar dan log dengan pilihan peka huruf besar-kecil, pemangkasan spasi, dan pengurutan alfabet.',
    keywords: [
      'hapus baris duplikat',
      'hapus duplikat daftar online',
      'filter baris unik',
      'hapus baris berulang',
      'hapus duplikat dari daftar',
      'hapus duplikat daftar email',
      'baris unik online',
      'hapus baris yang sama',
      'bersihkan entri duplikat',
    ],
    seo: {
      title: 'Hapus Baris Duplikat – Bersihkan Daftar | UtilityFlow',
      description:
        'Hapus baris yang berulang dari daftar, ekspor email, URL, atau log secara instan dengan pemangkasan spasi, peka huruf, dan pengurutan opsional, di browser Anda.',
      primaryKeyword: 'hapus baris duplikat',
      secondaryKeywords: ['penghapus baris duplikat', 'hapus duplikat daftar teks', 'alat baris unik', 'hapus entri duplikat'],
      longTailKeywords: ['hapus baris duplikat dengan urutan asli', 'hapus duplikat daftar email tanpa peka huruf', 'bersihkan baris berulang dari teks online', 'hapus duplikat dari daftar email online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bersihkan daftar yang berantakan, kata kunci hasil ekspor, alamat email, atau log server dengan menghapus entri duplikat sambil mengontrol pemangkasan spasi, peka huruf besar-kecil, dan urutan keluaran.',
  },
  'text-diff-checker': {
    slug: 'pemeriksa-perbedaan-teks',
    name: 'Pemeriksa Perbedaan Teks',
    shortDescription:
      'Bandingkan dua blok teks baris demi baris untuk menemukan penambahan, penghapusan, dan baris yang tidak berubah.',
    keywords: [
      'pemeriksa perbedaan teks',
      'bandingkan dua teks',
      'alat diff online',
      'perbandingan teks',
      'bandingkan dua berkas teks',
      'pemeriksa diff online',
      'cari perbedaan antar teks',
      'alat banding teks',
      'alat diff teks online',
    ],
    seo: {
      title: 'Pemeriksa Perbedaan Teks – Bandingkan Dua Teks | UtilityFlow',
      description:
        'Bandingkan dua versi teks, kode, atau berkas konfigurasi berdampingan dengan penanda baris yang ditambahkan dan dihapus, di browser Anda tanpa perlu unggah.',
      primaryKeyword: 'pemeriksa perbedaan teks',
      secondaryKeywords: ['bandingkan teks online', 'pemeriksa diff', 'alat perbedaan teks', 'alat diff online'],
      longTailKeywords: ['bandingkan dua berkas teks baris demi baris online', 'pemeriksa diff abaikan spasi dan huruf', 'alat perbandingan teks sisi klien', 'bandingkan dua versi dokumen online gratis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Temukan setiap penyisipan, penghapusan, dan pengeditan antara dua versi artikel, klausul kontrak, atau cuplikan konfigurasi menggunakan mesin diff baris longest-common-subsequence.',
  },
  'whitespace-remover': {
    slug: 'penghapus-spasi',
    name: 'Penghapus Spasi & Jeda Baris',
    shortDescription:
      'Hapus spasi berlebih, tab, baris kosong, dan jeda baris yang tidak diinginkan dari teks salinan PDF atau web.',
    keywords: [
      'penghapus spasi',
      'hapus spasi berlebih',
      'penghapus jeda baris',
      'hapus baris kosong',
      'bersihkan teks salinan pdf',
      'hapus spasi di akhir',
      'perbaiki jeda baris pdf',
      'gabungkan beberapa spasi',
      'bersihkan teks online',
    ],
    seo: {
      title: 'Penghapus Spasi: Bersihkan Spasi Berlebih | UtilityFlow',
      description:
        'Hapus spasi berlebih, tab, spasi di akhir, baris kosong, dan jeda baris PDF yang rusak di browser Anda — cepat, gratis, dan sepenuhnya privat, tanpa daftar.',
      primaryKeyword: 'penghapus spasi',
      secondaryKeywords: ['hapus spasi berlebih', 'hapus jeda baris', 'bersihkan spasi teks', 'hapus baris kosong'],
      longTailKeywords: ['hapus spasi berlebih dan baris kosong online', 'perbaiki jeda baris saat menyalin dari pdf', 'ubah tab dan spasi ganda jadi satu spasi', 'hapus spasi di akhir dari teks salinan'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bersihkan salinan berantakan yang ditempel dari PDF, email, spreadsheet, atau halaman web dengan menggabungkan spasi berulang, mengubah tab, memangkas tepi baris, dan menormalkan jeda baris.',
  },
  'sort-lines': {
    slug: 'urutkan-baris',
    name: 'Urutkan Baris Alfabetis',
    shortDescription:
      'Urutkan daftar A–Z, Z–A, secara alami (1, 2, 10), berdasarkan panjang karakter, terbalik, atau acak.',
    keywords: [
      'urutkan baris alfabetis',
      'urutkan daftar alfabet online',
      'alat urut alami',
      'urutkan teks berdasarkan panjang',
      'urutkan daftar a sampai z',
      'alat urutan alfabetis',
      'acak baris online',
      'urutkan baris z sampai a',
      'balik urutan baris',
    ],
    seo: {
      title: 'Urutkan Baris Alfabetis – A-Z & Alami | UtilityFlow',
      description:
        'Urutkan baris A sampai Z, Z sampai A, secara numerik alami, berdasarkan panjang, terbalik, atau diacak — dengan penghapusan duplikat dan baris kosong opsional.',
      primaryKeyword: 'urutkan baris alfabetis',
      secondaryKeywords: ['urutkan daftar alfabet', 'pengurut baris teks', 'urut alami online', 'urutkan baris a sampai z'],
      longTailKeywords: ['urutkan daftar alfabet dengan angka urutan alami', 'urutkan baris berdasarkan panjang terpendek ke terpanjang', 'urutkan alfabet dan hapus baris duplikat', 'balik urutan baris online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Susun daftar, bibliografi, SKU inventaris, atau impor kode secara alfabetis, numerik dengan pengurutan alami, berdasarkan panjang karakter, atau dalam urutan terbalik.',
  },
  'find-and-replace': {
    slug: 'cari-dan-ganti',
    name: 'Cari & Ganti Teks',
    shortDescription:
      'Cari dan ganti string di seluruh teks dengan peka huruf besar-kecil, pencocokan kata utuh, dan dukungan RegExp.',
    keywords: [
      'cari dan ganti teks',
      'ganti teks massal',
      'cari dan ganti regex',
      'cari dan ganti online',
      'ganti teks online',
      'cari ganti kata',
      'ganti regex online',
      'ganti semua kemunculan',
      'alat pengganti teks',
    ],
    seo: {
      title: 'Cari & Ganti Teks – Alat Massal & Regex | UtilityFlow',
      description:
        'Cari dan ganti teks di browser Anda dengan jumlah kecocokan langsung, peka huruf, pencocokan kata utuh, dan dukungan grup tangkap RegExp — tanpa daftar.',
      primaryKeyword: 'cari dan ganti teks',
      secondaryKeywords: ['cari dan ganti online', 'alat ganti regex', 'ganti teks massal', 'ganti teks online'],
      longTailKeywords: ['cari dan ganti kata utuh saja online', 'cari dan ganti regex dengan grup tangkap', 'ganti string teks massal di browser', 'ganti semua kemunculan dalam teks online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Lakukan pengeditan cari-dan-ganti massal yang cepat di seluruh prosa, cuplikan CSV, atau blok kode menggunakan pencocokan teks persis, batas kata utuh, atau grup tangkap ekspresi reguler.',
  },
  'text-reverser': {
    slug: 'pembalik-teks',
    name: 'Pembalik Teks',
    shortDescription:
      'Balik seluruh string teks, balik urutan kata, balik huruf per kata, atau balik urutan baris.',
    keywords: [
      'pembalik teks',
      'balik string online',
      'balik kata',
      'balik baris',
      'balik karakter teks',
      'balik teks online',
      'generator teks cermin',
      'balik urutan kalimat',
      'generator teks terbalik',
    ],
    seo: {
      title: 'Pembalik Teks: Balik Kata, Huruf & Baris | UtilityFlow',
      description:
        'Balik karakter, balik urutan kata, cerminkan setiap kata, atau balik urutan baris secara instan — aman Unicode, gratis, dan sepenuhnya privat di browser Anda.',
      primaryKeyword: 'pembalik teks',
      secondaryKeywords: ['balik teks online', 'balik urutan kata', 'balik baris', 'balik karakter online'],
      longTailKeywords: ['balik setiap kata dalam kalimat online', 'balik urutan baris dalam berkas teks', 'pembalik string aman unicode', 'balik karakter teks online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Balik rangkaian karakter, balik urutan kata per baris, cerminkan huruf di dalam kata individual, atau balik daftar multi-baris dari bawah ke atas dengan penanganan yang sadar Unicode.',
  },
  'lorem-ipsum-generator': {
    slug: 'generator-lorem-ipsum',
    name: 'Generator Lorem Ipsum',
    shortDescription:
      'Hasilkan paragraf, kalimat, atau jumlah kata placeholder kustom dengan tag <p> HTML opsional.',
    keywords: [
      'generator lorem ipsum',
      'generator teks placeholder',
      'teks dummy',
      'lorem ipsum html',
      'teks lorem ipsum',
      'generator teks dummy',
      'paragraf placeholder',
      'kata lorem ipsum',
      'generator teks pengisi',
    ],
    seo: {
      title: 'Generator Lorem Ipsum – Teks Pengisi | UtilityFlow',
      description:
        'Hasilkan teks placeholder Lorem Ipsum berdasarkan paragraf, kalimat, atau jumlah kata yang tepat, dengan tag paragraf HTML opsional untuk mockup dan tata letak.',
      primaryKeyword: 'generator lorem ipsum',
      secondaryKeywords: ['teks placeholder', 'generator salinan dummy', 'paragraf lorem ipsum', 'generator teks dummy'],
      longTailKeywords: ['hasilkan lorem ipsum berdasarkan jumlah kata', 'generator lorem ipsum dengan tag p html', 'teks placeholder bersih untuk mockup ui', 'generator lorem ipsum untuk mockup situs web'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Buat teks placeholder yang bersih dan disesuaikan dengan jumlah paragraf, kalimat, atau kata yang tepat untuk wireframe, pengujian tipografi, dan prototipe tata letak—dengan tag paragraf HTML opsional.',
  },
  'readability-checker': {
    slug: 'pemeriksa-keterbacaan',
    name: 'Pemeriksa Skor Keterbacaan',
    shortDescription:
      'Hitung skor Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, dan SMOG.',
    keywords: [
      'pemeriksa keterbacaan',
      'flesch reading ease',
      'flesch kincaid grade level',
      'kalkulator gunning fog',
      'indeks keterbacaan smog',
      'pemeriksa tingkat bacaan',
      'pemeriksa skor keterbacaan',
      'keterbacaan tingkat kelas',
      'cek keterbacaan teks online',
    ],
    seo: {
      title: 'Pemeriksa Keterbacaan: Skor Flesch-Kincaid | UtilityFlow',
      description:
        'Periksa skor Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, dan SMOG dengan pemeriksa skor keterbacaan kami — gratis, privat, di browser Anda.',
      primaryKeyword: 'pemeriksa skor keterbacaan',
      secondaryKeywords: ['kalkulator flesch reading ease', 'pemeriksa tingkat kelas', 'alat tingkat bacaan', 'kalkulator indeks gunning fog'],
      longTailKeywords: ['cek flesch kincaid grade level online', 'hitung gunning fog dan indeks keterbacaan smog', 'tingkatkan skor keterbacaan artikel alat browser', 'berapa skor flesch reading ease yang bagus'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nilai seberapa mudah tulisan Anda dipahami menggunakan empat formula keterbacaan yang sudah mapan—Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog, dan SMOG—beserta deteksi kata kompleks.',
  },
  'word-frequency-counter': {
    slug: 'penghitung-frekuensi-kata',
    name: 'Penghitung Frekuensi Kata',
    shortDescription:
      'Hitung frekuensi frasa 1, 2, dan 3 kata dengan penyaringan kata henti dan ekspor CSV sekali klik untuk spreadsheet.',
    keywords: [
      'penghitung frekuensi kata',
      'penghitung frekuensi frasa',
      'penghitung ngram',
      'analisis pengulangan kata',
      'analisis frekuensi frasa',
      'alat frekuensi kata',
      'hitung kata berulang online',
      'penghitung kemunculan kata',
      'analisis frekuensi teks',
    ],
    seo: {
      title: 'Penghitung Frekuensi Kata & Ekspor CSV | UtilityFlow',
      description:
        'Hitung seberapa sering frasa 1, 2, dan 3 kata muncul dalam teks apa pun, dengan penyaringan kata henti dan ekspor CSV sekali klik untuk spreadsheet.',
      primaryKeyword: 'penghitung frekuensi kata',
      secondaryKeywords: ['penganalisis frekuensi kata', 'analisis frekuensi frasa', 'alat kemunculan kata', 'penghitung frekuensi ngram'],
      longTailKeywords: ['hitung frekuensi kata dan persentase kepadatan online', 'analisis frasa 2 kata dan 3 kata dalam teks', 'ekspor tabel frekuensi kata ke csv', 'temukan frasa berulang dalam teks online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audit draf konten untuk keseimbangan kata kunci, frasa yang terlalu sering dipakai, dan pola n-gram multi-kata dengan tabel frekuensi instan, penyaringan kata henti, dan laporan CSV yang bisa diunduh.',
  },
  'text-to-slug': {
    slug: 'teks-ke-slug',
    name: 'Pengubah Teks ke Slug',
    shortDescription:
      'Ubah teks apa pun menjadi slug URL yang bersih untuk kode, nama file, dan kunci database, dengan transliterasi aksen dan mode massal.',
    keywords: [
      'teks ke slug',
      'slugify teks online',
      'slugify online',
      'pemformat url seo',
      'konverter slug',
      'buat slug url',
      'konverter judul ke slug',
      'pembuat slug url bersih',
      'generator slug massal',
    ],
    seo: {
      title: 'Pengubah Teks ke Slug untuk Developer | UtilityFlow',
      description:
        'Ubah teks apa pun menjadi slug URL yang bersih untuk kode, nama file, dan kunci database — dengan transliterasi aksen, pemisah garis bawah, dan mode massal.',
      primaryKeyword: 'pengubah teks ke slug',
      secondaryKeywords: ['slugify teks', 'slugify string', 'generator url bersih', 'alat judul ke slug'],
      longTailKeywords: ['ubah judul artikel jadi slug url ramah seo', 'ubah banyak judul jadi slug secara massal', 'slugify karakter beraksen jadi ascii online', 'pemisah slug strip atau garis bawah'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ubah judul blog, nama produk, dan kalender konten multi-baris menjadi slug ASCII yang bersih dan aman untuk URL dengan transliterasi aksen otomatis, kontrol pemisah, dan penghapusan kata henti opsional.',
  },
  'markdown-previewer': {
    slug: 'pratinjau-markdown',
    name: 'Pratinjau Markdown & Eksportir HTML',
    shortDescription:
      'Tulis Markdown dalam editor split langsung, periksa pemformatan yang dirender dengan aman, lalu salin atau ekspor HTML yang bersih.',
    keywords: [
      'pratinjau markdown',
      'markdown ke html',
      'editor markdown online',
      'penampil markdown langsung',
      'penampil markdown online',
      'render markdown online',
      'konverter markdown ke html',
      'pratinjau markdown readme',
      'eksportir html markdown',
    ],
    seo: {
      title: 'Pratinjau Markdown – Ekspor HTML Langsung | UtilityFlow',
      description:
        'Tulis Markdown dan saksikan rendernya secara langsung, periksa sumber HTML yang dikompilasi, lalu salin atau unduh dokumen HTML mandiri — gratis, di browser.',
      primaryKeyword: 'pratinjau markdown',
      secondaryKeywords: ['konverter markdown ke html', 'editor markdown online', 'penampil markdown', 'editor markdown langsung'],
      longTailKeywords: ['pratinjau markdown langsung dengan ekspor html', 'ubah markdown readme jadi html online', 'editor markdown browser tanpa unggah', 'pratinjau readme github sebelum commit'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Susun berkas README, dokumentasi, dan catatan berformat dalam editor Markdown yang responsif dengan pratinjau render langsung, escape HTML yang aman, inspeksi HTML mentah, dan ekspor HTML satu klik.',
  },
  'line-prefix-suffix': {
    slug: 'awalan-akhiran-baris',
    name: 'Tambah Nomor Baris & Awalan/Akhiran',
    shortDescription:
      'Tambahkan nomor baris, awalan kustom, dan akhiran ke setiap baris untuk daftar, klausa SQL, dan kode.',
    keywords: [
      'tambah awalan dan akhiran ke baris',
      'tambah nomor baris ke teks',
      'bungkus baris dengan tanda kutip',
      'pemformat baris massal',
      'tambah teks di awal setiap baris',
      'tambah teks di akhir baris',
      'generator nomor baris',
      'pemformat klausa in sql',
      'tambah koma ke setiap baris',
    ],
    seo: {
      title: 'Tambah Awalan & Akhiran Baris – Nomor | UtilityFlow',
      description:
        'Tambahkan nomor baris, awalan kustom, dan akhiran ke setiap baris teks untuk daftar, kueri SQL, dan array kode — gratis, instan, dan privat di browser.',
      primaryKeyword: 'tambah awalan dan akhiran ke baris',
      secondaryKeywords: ['tambah nomor baris online', 'alat awalan akhiran baris', 'bungkus baris tanda kutip', 'pemformat baris massal'],
      longTailKeywords: ['bungkus setiap baris dengan kutip tunggal dan koma untuk sql', 'tambah awalan daftar bernomor ke baris teks', 'tambah teks di awal dan akhir setiap baris secara massal', 'tambah nomor baris mulai dari nol'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tambahkan nomor baris berurutan, karakter poin, atau tanda kutip pembuka di awal dan koma, titik koma, atau tag penutup di akhir setiap baris daftar dalam hitungan detik.',
  },
};
