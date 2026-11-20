import type { ToolLocaleOverride } from '../../types';

/**
 * Indonesian overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are unique, lowercase, hyphenated, and do not collide with
 * English slugs or reserved paths.
 */
export const ID_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'encoder-decoder-base64',
    name: 'Encoder / Decoder Base64',
    shortDescription:
      'Encode teks ke Base64 standar atau aman-URL dan decode string Base64 UTF-8 dengan aman di memori browser.',
    keywords: [
      'encoder base64',
      'decoder base64',
      'base64 utf8',
      'base64 aman url',
      'encode base64 online',
      'decode base64 online',
      'encode teks ke base64',
      'decode base64 ke teks',
      'konverter base64',
    ],
    seo: {
      title: 'Encoder & Decoder Base64 – UTF-8 & URL-Safe | UtilityFlow',
      description:
        'Encode teks UTF-8 ke Base64 atau decode Base64 kembali menjadi teks yang bisa dibaca, dengan opsi aman-URL dan tanpa padding, diproses lokal di browser Anda.',
      primaryKeyword: 'encoder decoder base64',
      secondaryKeywords: ['decode base64 online', 'encode base64 utf8', 'base64 aman url', 'base64 ke teks'],
      longTailKeywords: ['encode emoji utf8 ke base64 online', 'decode base64 aman url tanpa padding', 'konverter base64 sisi klien', 'decode string base64 dengan emoji online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ubah string UTF-8—termasuk karakter beraksen dan emoji—menjadi Base64 standar atau Base64 aman-URL RFC 4648, atau decode string Base64 kembali menjadi teks biasa dengan validasi instan.',
  },
  'url-encoder-decoder': {
    slug: 'encoder-decoder-url',
    name: 'Encoder / Decoder URL',
    shortDescription:
      'Encode nilai kueri atau URL lengkap dengan persen dan periksa host, jalur, serta parameter kueri yang diurai.',
    keywords: [
      'encoder url',
      'decoder url',
      'percent encoding',
      'pengurai url',
      'encode url online',
      'decode url online',
      'alat encode url',
      'encodeuricomponent',
      'encoder string kueri',
    ],
    seo: {
      title: 'Encoder & Decoder URL – Alat Percent Encoding | UtilityFlow',
      description:
        'Encode atau decode URL dengan mode encodeURIComponent dan encodeURI sambil memeriksa protokol, host, jalur, dan parameter kueri secara lokal di browser Anda.',
      primaryKeyword: 'encoder decoder url',
      secondaryKeywords: ['percent encoding online', 'alat decode url', 'pengurai string kueri', 'encodeuricomponent online'],
      longTailKeywords: ['perbedaan antara encodeuri dan encodeuricomponent', 'decode parameter kueri url tabel online', 'percent encode karakter khusus untuk url', 'encode nilai kueri url tanpa merusak ampersand'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Encode nilai parameter kueri atau URL lengkap dengan aman, decode string yang di-percent-encode (`%20`, `%3A`, `+`), dan periksa rincian langsung setiap parameter kueri dalam tabel.',
  },
  'uuid-generator': {
    slug: 'generator-uuid',
    name: 'Generator UUID (v4 & v7)',
    shortDescription:
      'Hasilkan UUID v4 acak kriptografis dan UUID v7 RFC 9562 yang diurutkan berdasarkan waktu dalam batch.',
    keywords: [
      'generator uuid',
      'generator guid',
      'uuid v4',
      'pembuat uuid v7',
      'pembuat uuid v4 online',
      'hasilkan uuid online',
      'pembuat uuid acak',
      'pembuat uuid massal',
      'pembuat uuid gratis',
    ],
    seo: {
      title: 'Generator UUID – ID v4 & v7 Massal Gratis | UtilityFlow',
      description:
        'Hasilkan hingga 100 pengenal UUID v4 acak atau UUID v7 RFC 9562 yang diurutkan berdasarkan waktu dengan opsi huruf besar, strip, dan kurung kurawal di browser.',
      primaryKeyword: 'generator uuid',
      secondaryKeywords: ['generator guid online', 'pembuat uuid v4', 'uuid v7 online', 'pembuat uuid massal'],
      longTailKeywords: ['hasilkan uuid v4 dan v7 massal online', 'pembuat uuid v7 urutan waktu rfc 9562', 'uuid tanpa strip huruf besar', 'hasilkan 100 uuid sekaligus online gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Buat batch tunggal atau massal UUID v4 acak kriptografis dan UUID v7 RFC 9562 yang diurutkan berdasarkan stempel waktu langsung melalui API Web Crypto, lengkap dengan tombol pemformatan.',
  },
  'regex-tester': {
    slug: 'penguji-regex',
    name: 'Penguji Regex',
    shortDescription:
      'Uji ekspresi reguler JavaScript dengan penyorotan kecocokan langsung, grup tangkap, bendera, dan keluaran penggantian.',
    keywords: [
      'penguji regex',
      'penguji ekspresi reguler',
      'regex javascript',
      'penyorot kecocokan regex',
      'penguji regex online',
      'uji regex online',
      'debugger regex',
      'penguji kecocokan regex',
      'penguji regex javascript',
    ],
    seo: {
      title: 'Penguji Regex – Kecocokan RegExp JS Langsung | UtilityFlow',
      description:
        'Uji ekspresi reguler secara langsung dengan bendera g/i/m/s, penyorotan kecocokan sebaris, inspeksi grup tangkap, dan pratinjau penggantian di browser Anda.',
      primaryKeyword: 'penguji regex',
      secondaryKeywords: ['penguji ekspresi reguler', 'debugger regex js', 'grup tangkap regex', 'penguji ganti regex'],
      longTailKeywords: ['uji grup tangkap regex javascript online', 'penyorot kecocokan ekspresi reguler langsung', 'pratinjau ganti regex dengan grup tangkap $1', 'debug regex javascript dengan penyorotan langsung online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Debug ekspresi reguler JavaScript secara interaktif dengan kecocokan yang disorot langsung, posisi indeks kecocokan, inspeksi grup tangkap bernomor, tombol bendera, dan pratinjau penggantian.',
  },
  'jwt-decoder': {
    slug: 'decoder-jwt',
    name: 'Decoder JWT',
    shortDescription:
      'Decode header, klaim payload, dan stempel waktu kedaluwarsa JSON Web Token dengan aman di dalam browser Anda.',
    keywords: [
      'decoder jwt',
      'decode json web token',
      'pemeriksa jwt',
      'stempel waktu exp jwt',
      'decoder token jwt',
      'decode payload jwt',
      'pemeriksa kedaluwarsa jwt',
      'penampil klaim jwt',
      'cek kedaluwarsa jwt',
    ],
    seo: {
      title: 'Decoder JWT – Decode Token & Cek Kedaluwarsa | UtilityFlow',
      description:
        'Decode header dan klaim payload JWT di browser Anda dan periksa stempel waktu iat, nbf, dan exp dalam tanggal UTC biasa. Gratis, privat, tanpa unggah.',
      primaryKeyword: 'decoder jwt',
      secondaryKeywords: ['decode jwt online', 'penampil payload jwt', 'pemeriksa json web token', 'pemeriksa kedaluwarsa jwt'],
      longTailKeywords: ['decode token jwt secara lokal tanpa unggah server', 'cek stempel waktu kedaluwarsa exp jwt online', 'periksa header dan klaim jwt base64url', 'baca klaim payload jwt di browser'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Periksa JSON Web Token (JWT) dengan aman di memori browser lokal—lihat objek JSON Header dan Payload yang diformat dan periksa status kedaluwarsa `iat`, `nbf`, dan `exp` yang bisa dibaca manusia.',
  },
  'hash-generator': {
    slug: 'generator-hash',
    name: 'Generator Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Hitung hash kriptografis SHA-1, SHA-256, SHA-384, dan SHA-512 untuk teks atau berkas lokal melalui Web Crypto.',
    keywords: [
      'generator hash',
      'generator sha256',
      'hash sha512',
      'checksum berkas sha256',
      'generator hash sha1',
      'hash sha384 online',
      'kalkulator checksum',
      'verifikasi checksum berkas',
      'generator hash aman online',
    ],
    seo: {
      title: 'Generator Hash – SHA-1, SHA-256 & SHA-512 | UtilityFlow',
      description:
        'Hasilkan digest SHA-1, SHA-256, SHA-384, dan SHA-512 dalam hex atau Base64 untuk teks dan berkas lokal, langsung di browser Anda. Gratis, privat, tanpa unggah.',
      primaryKeyword: 'generator hash',
      secondaryKeywords: ['hash sha256 online', 'verifikator checksum berkas', 'generator sha512', 'kalkulator checksum'],
      longTailKeywords: ['hitung checksum sha256 berkas lokal di browser', 'hasilkan hash sha256 dalam hex dan base64', 'generator hash web crypto api online', 'verifikasi checksum sha256 berkas unduhan'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Hitung digest SHA-1, SHA-256, SHA-384, dan SHA-512 secara bersamaan menggunakan Web Crypto API bawaan browser (`crypto.subtle.digest`) untuk teks UTF-8 maupun checksum berkas lokal.',
  },
  'html-entity-encoder': {
    slug: 'encoder-entitas-html',
    name: 'Encoder & Decoder Entitas HTML',
    shortDescription:
      'Escape karakter HTML yang dicadangkan (<, >, &, tanda kutip) dan simbol non-ASCII atau decode entitas HTML dengan rapi.',
    keywords: [
      'encoder entitas html',
      'decoder html',
      'escape html online',
      'unescape entitas html',
      'encode karakter html',
      'alat escape html',
      'ubah ke entitas html',
      'decode entitas html online',
      'escape karakter khusus html',
    ],
    seo: {
      title: 'Encoder Entitas HTML – Escape & Decode HTML | UtilityFlow',
      description:
        'Encode karakter HTML yang dicadangkan dan simbol non-ASCII menjadi entitas, atau decode entitas bernama dan numerik kembali menjadi teks biasa. Gratis.',
      primaryKeyword: 'encoder entitas html',
      secondaryKeywords: ['alat escape html', 'decoder entitas html', 'unescape html', 'encode karakter html'],
      longTailKeywords: ['escape tag html untuk cuplikan kode online', 'decode entitas html bernama dan numerik', 'ubah karakter khusus jadi entitas html', 'escape tanda kutip dan ampersand html online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escape `<`, `>`, `&`, tanda kutip, dan simbol Unicode internasional menjadi entitas HTML dengan aman untuk menyematkan cuplikan kode di halaman web, atau decode string yang di-escape HTML kembali menjadi teks yang bisa dibaca.',
  },
  'json-csv-converter': {
    slug: 'konverter-json-ke-csv',
    name: 'Konverter JSON ke CSV / CSV ke JSON',
    shortDescription:
      'Ubah array JSON menjadi spreadsheet CSV RFC-4180 dan urai berkas CSV yang dikutip kembali menjadi JSON yang bersih.',
    keywords: [
      'json ke csv',
      'csv ke json',
      'konverter json csv',
      'ubah array json ke csv',
      'ekspor json ke csv',
      'json ke csv online gratis',
      'konverter csv ke json',
      'konverter json ke tsv',
      'ubah csv ke array json',
    ],
    seo: {
      title: 'Konverter JSON ke CSV – JSON & CSV Mudah | UtilityFlow',
      description:
        'Ubah array JSON menjadi spreadsheet CSV dengan perataan objek bersarang, atau urai berkas CSV dan TSV kembali menjadi JSON terstruktur. Gratis dan lokal.',
      primaryKeyword: 'konverter json ke csv',
      secondaryKeywords: ['konverter csv ke json', 'ekspor json sebagai csv', 'tsv ke json', 'json ke csv online gratis'],
      longTailKeywords: ['ubah objek json bersarang jadi kolom csv online', 'urai csv dikutip dengan koma jadi array json', 'pengunduh json ke csv sisi klien', 'ubah array json jadi spreadsheet csv gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ubah array JSON API menjadi spreadsheet CSV yang bersih—secara otomatis meratakan kunci objek bersarang—atau urai berkas CSV/TSV yang dipisah dengan koma yang dikutip kembali menjadi JSON yang diformat.',
  },
  'unix-timestamp-converter': {
    slug: 'konverter-stempel-waktu-unix',
    name: 'Konverter Stempel Waktu Unix',
    shortDescription:
      'Ubah detik atau milidetik epoch Unix menjadi tanggal ISO 8601, UTC, dan lokal—dan sebaliknya.',
    keywords: [
      'konverter stempel waktu unix',
      'konverter epoch',
      'epoch ke tanggal',
      'stempel waktu ke iso 8601',
      'konverter waktu unix',
      'ubah epoch ke tanggal',
      'tanggal ke stempel waktu unix',
      'waktu unix saat ini',
      'konverter epoch milidetik',
    ],
    seo: {
      title: 'Konverter Timestamp Unix – Epoch ke Tanggal | UtilityFlow',
      description:
        'Ubah stempel waktu epoch Unix dalam detik atau milidetik menjadi ISO 8601, UTC, RFC 2822, dan waktu lokal, atau ubah tanggal apa pun kembali menjadi waktu Unix.',
      primaryKeyword: 'konverter stempel waktu unix',
      secondaryKeywords: ['konverter epoch', 'waktu unix ke tanggal', 'tanggal ke stempel waktu unix', 'konverter epoch milidetik'],
      longTailKeywords: ['ubah epoch milidetik unix jadi tanggal iso 8601', 'waktu unix saat ini dalam detik langsung', 'ubah tanggal dan waktu lokal jadi epoch unix', 'stempel waktu unix ke tanggal utc online gratis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ubah bilangan bulat epoch Unix (detik atau milidetik) menjadi string ISO 8601, UTC, dan zona waktu lokal dengan offset relatif, atau ubah tanggal dan waktu kalender apa pun kembali menjadi stempel waktu epoch.',
  },
  'sql-formatter': {
    slug: 'pemformat-sql',
    name: 'Pemformat SQL',
    shortDescription:
      'Format, indentasi, dan standarkan kueri SQL dengan kata kunci huruf besar/kecil atau minify kueri menjadi satu baris.',
    keywords: [
      'pemformat sql',
      'sql beautifier',
      'format kueri sql',
      'minifier sql',
      'format sql online',
      'pempercantik kueri sql',
      'cetak sql rapi',
      'pemformat sql online',
      'indentasi kueri sql',
    ],
    seo: {
      title: 'Pemformat SQL – Percantik & Minify Kueri SQL | UtilityFlow',
      description:
        'Format kueri SQL dengan jeda klausa yang bersih, huruf kata kunci, dan indentasi 2/4 spasi, atau minify menjadi satu baris — tanpa daftar, gratis, di browser.',
      primaryKeyword: 'pemformat sql',
      secondaryKeywords: ['sql beautifier online', 'cetak sql rapi', 'minifier sql', 'format kueri sql online'],
      longTailKeywords: ['format kueri sql select join group by online', 'ubah kata kunci sql jadi huruf besar dengan rapi', 'minify kueri sql dengan string literal utuh', 'indentasi kueri sql 2 atau 4 spasi online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Ubah kueri SQL satu baris yang padat menjadi pernyataan yang mudah dibaca dan terstruktur dengan penyelarasan `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY`, dan `ORDER BY` yang jelas sambil mempertahankan string yang dikutip dan komentar.',
  },
  'css-minifier': {
    slug: 'minifier-css',
    name: 'Minifier CSS & Beautifier',
    shortDescription:
      'Minify stylesheet CSS untuk mengurangi ukuran bundle atau percantik aturan CSS yang terkompresi dengan indentasi yang rapi.',
    keywords: [
      'minifier css',
      'beautifier css',
      'kompres css online',
      'format css',
      'kompresor css',
      'minify css online',
      'unminify css',
      'pemformat css',
      'kurangi ukuran berkas css',
    ],
    seo: {
      title: 'Minifier CSS & Beautifier – Kompres CSS Cepat | UtilityFlow',
      description:
        'Minify CSS dengan menghapus komentar dan spasi berlebih, dengan statistik penghematan byte, atau percantik stylesheet yang diminify menjadi aturan rapi.',
      primaryKeyword: 'minifier css',
      secondaryKeywords: ['beautifier css', 'kompres css', 'pemformat css online', 'minify css online'],
      longTailKeywords: ['minify css dengan string dikutip dan media query utuh', 'unminify stylesheet css terkompresi online', 'hitung persentase kompresi css di browser', 'kurangi ukuran berkas css sebelum deployment'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Kompres stylesheet CSS dengan menghapus komentar, spasi berlebih, dan titik koma di akhir sebelum kurung kurawal penutup—atau kembangkan CSS satu baris yang diminify kembali menjadi blok berindentasi yang mudah dibaca.',
  },
  'js-formatter': {
    slug: 'pemformat-js',
    name: 'Minifier & Pemformat JavaScript / TypeScript',
    shortDescription:
      'Minify cuplikan JavaScript dengan menghapus komentar dan spasi berlebih atau percantik blok kode yang ringkas.',
    keywords: [
      'minifier javascript',
      'pemformat js',
      'beautifier js',
      'kompres javascript online',
      'pemformat javascript',
      'minifier js online',
      'percantik javascript',
      'minifier typescript',
      'pemformat kode js',
    ],
    seo: {
      title: 'Minifier JavaScript & Pemformat – Kompres JS | UtilityFlow',
      description:
        'Minify JavaScript dan TypeScript dengan menghapus komentar dan spasi berlebih, atau percantik kode ringkas dengan indentasi 2/4 spasi — gratis, di browser.',
      primaryKeyword: 'minifier javascript',
      secondaryKeywords: ['beautifier js', 'format javascript online', 'kompresor js', 'pemformat javascript'],
      longTailKeywords: ['minify cuplikan javascript dengan string dan template literal utuh', 'unminify kode javascript ringkas dengan indentasi', 'pemformat dan minifier js sisi klien', 'percantik kode javascript dengan indentasi 2 atau 4 spasi'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Padatkan cuplikan JavaScript untuk bookmarklet dan skrip sebaris dengan menghapus komentar dan spasi berlebih—sambil menjaga literal string tetap utuh—atau indentasi ulang kode yang terkompresi dengan rapi.',
  },
  'cron-expression-parser': {
    slug: 'pengurai-ekspresi-cron',
    name: 'Pengurai Ekspresi Cron & Pratinjau Jadwal',
    shortDescription:
      'Terjemahkan ekspresi cron 5 kolom menjadi bahasa Inggris sederhana, jelajahi preset, dan pratinjau 8 waktu jalan berikutnya.',
    keywords: [
      'pengurai ekspresi cron',
      'generator crontab',
      'penguji jadwal cron',
      'waktu jalan cron berikutnya',
      'pengurai crontab',
      'penguji ekspresi cron',
      'pratinjau jadwal cron',
      'cron ke bahasa sederhana',
      'penjadwal tugas cron',
    ],
    seo: {
      title: 'Pengurai Cron – Bahasa Sederhana & Jadwal | UtilityFlow',
      description:
        'Urai ekspresi cron 5 kolom menjadi jadwal bahasa sederhana, periksa setiap kolom, coba preset umum, dan pratinjau 8 waktu jalan berikutnya — gratis, di browser.',
      primaryKeyword: 'pengurai ekspresi cron',
      secondaryKeywords: ['alternatif crontab guru', 'pratinjau jadwal cron', 'pembuat cron', 'penguji ekspresi cron'],
      longTailKeywords: ['terjemahkan ekspresi cron 5 kolom ke bahasa sederhana', 'hitung 8 stempel waktu eksekusi cron berikutnya', 'uji ekspresi cron hari kerja dan langkah online', 'contoh ekspresi cron setiap hari kerja jam 9 pagi'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decode ekspresi crontab Unix 5 kolom (`menit jam tanggal-bulan bulan hari-minggu`) menjadi ringkasan yang jelas dan bisa dibaca manusia, verifikasi rentang kolom, dan periksa 8 stempel waktu jalan terjadwal berikutnya.',
  },
  'color-converter': {
    slug: 'konverter-warna',
    name: 'Konverter Warna (HEX / RGB / HSL & Kontras WCAG)',
    shortDescription:
      'Ubah warna antara HEX, RGB, dan HSL dengan pemilih warna langsung dan pemeriksaan kontras WCAG 2.1 AA/AAA.',
    keywords: [
      'konverter warna',
      'hex ke rgb',
      'rgb ke hsl',
      'pemeriksa kontras wcag',
      'hex ke hsl',
      'rgb ke hex',
      'pemilih warna online',
      'konverter warna hex',
      'hsl ke rgb',
    ],
    seo: {
      title: 'Konverter Warna – HEX, RGB, HSL & WCAG | UtilityFlow',
      description:
        'Ubah warna antara HEX, RGB, dan HSL secara instan, lalu uji rasio kontras latar depan dan latar belakang untuk kepatuhan WCAG 2.1 AA dan AAA — gratis.',
      primaryKeyword: 'konverter warna',
      secondaryKeywords: ['konverter hex ke rgb', 'pemilih warna hsl', 'pemeriksa kontras wcag', 'konverter rgb ke hex'],
      longTailKeywords: ['ubah warna hex jadi nilai css rgb dan hsl', 'cek rasio kontras teks wcag 2.1 aa dan aaa', 'alat warna hex rgb hsl interaktif untuk pengembang', 'ubah hex ke hsl untuk variabel css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Terjemahkan warna dengan mulus antara notasi CSS HEX, RGB, dan HSL dengan contoh warna langsung dan pemeriksa rasio kontras WCAG 2.1 bawaan untuk desain UI yang mudah diakses.',
  },
};
