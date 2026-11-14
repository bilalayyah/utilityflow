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
  'json-formatter': {
    slug: 'pemformat-json',
    name: 'Pemformat JSON & Validator',
    shortDescription:
      'Format, minify, urutkan kunci, dan validasi sintaks JSON dengan penunjuk kesalahan baris dan kolom.',
    keywords: [
      'pemformat json',
      'validator json',
      'json beautifier',
      'json minifier',
      'cetak json rapi',
      'pencetak json rapi',
      'format json online',
      'pemeriksa sintaks json',
      'json lint',
    ],
    seo: {
      title: 'Pemformat JSON & Validator – Cetak JSON Rapi | UtilityFlow',
      description:
        'Format, validasi, minify, dan urutkan kunci dalam payload JSON secara instan di browser Anda, dengan detail kesalahan sintaks baris dan kolom untuk debug cepat.',
      primaryKeyword: 'pemformat json',
      secondaryKeywords: ['validator json', 'json beautifier', 'json minifier', 'cetak json rapi'],
      longTailKeywords: ['validasi dan cetak json rapi online gratis', 'urutkan kunci json alfabetis di browser', 'minify payload json tanpa unggah server', 'format json bersarang dengan indentasi online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Validasi payload JSON yang cacat dengan umpan balik baris dan kolom, format struktur bersarang dengan indentasi 2 spasi, 4 spasi, atau tab, urutkan kunci secara alfabetis, atau minify untuk pengiriman produksi.',
    instructions: [
      {
        title: 'Tempel JSON mentah',
        description:
          'Masukkan objek atau array JSON apa pun ke Masukan JSON Mentah, atau klik Muat contoh untuk memeriksa payload contoh.',
      },
      {
        title: 'Pilih mode pemformatan',
        description:
          'Beralih antara 2 Spasi, 4 Spasi, Tab, atau Minify, dan secara opsional aktifkan Urutkan kunci A–Z.',
      },
      {
        title: 'Perbaiki kesalahan sintaks dengan petunjuk baris dan kolom',
        description:
          'Jika validator melaporkan kesalahan, baca baris dan kolom tepat yang ditampilkan, perbaiki koma, tanda kutip, atau kurung yang bermasalah dalam masukan Anda, dan spanduk status diperbarui secara instan.',
      },
      {
        title: 'Tinjau keluaran yang diformat dan statistik',
        description:
          'Konfirmasi spanduk status JSON Valid yang menampilkan total kunci, kedalaman bersarang, dan jumlah byte, lalu gulir keluaran yang diformat untuk memeriksa apakah struktur bersarang tampak benar.',
      },
      {
        title: 'Salin atau unduh hasilnya',
        description:
          'Klik Salin untuk meletakkan JSON yang diformat di papan klip Anda, atau Unduh untuk menyimpannya sebagai berkas .json untuk proyek Anda.',
      },
      {
        title: 'Tips: bandingkan ukuran dan bersihkan diff',
        description:
          'Tempelkan payload yang sama lagi setelah minify untuk membandingkan ukuran byte, atau aktifkan Urutkan kunci A–Z sebelum git diff agar hanya perubahan nyata yang muncul.',
      },
    ],
    examples: [
      {
        title: 'Memformat respons API yang diminify',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation: 'Mengembangkan payload API satu baris yang ringkas menjadi JSON berindentasi yang mudah dibaca.',
      },
      {
        title: 'Mengurutkan kunci secara alfabetis',
        input: '{"z": 1, "a": 2}',
        output: '{\n  "a": 2,\n  "z": 1\n}',
        explanation: 'Mengurutkan kunci secara rekursif agar diff git lebih bersih.',
      },
    ],
    benefits: [
      'Melaporkan posisi kesalahan sintaks dengan konteks baris dan kolom',
      'Mengurutkan kunci objek bersarang secara alfabetis secara rekursif untuk diff yang bersih',
      'Menghitung total kunci, kedalaman bersarang maksimum, dan ukuran byte keluaran',
      'Menjaga respons API dan token privat sepenuhnya di memori browser',
    ],
    useCases: [
      'Men-debug payload API REST dan GraphQL selama pengembangan',
      'Menormalkan package.json atau berkas konfigurasi sebelum git diff',
      'Mem-minify fixture JSON dan dataset statis',
      'Memvalidasi isi webhook sebelum menulis parser',
    ],
    faqs: [
      {
        question: 'Apakah pengurutan kunci mengubah urutan elemen array?',
        answer:
          'Tidak. Urutkan kunci A–Z hanya menyusun ulang kunci di dalam objek JSON sambil mempertahankan urutan persis elemen array.',
      },
      {
        question: 'Mengapa JSON dengan koma di akhir menampilkan kesalahan sintaks?',
        answer:
          'JSON RFC 8259 yang ketat tidak mengizinkan koma di akhir atau kunci bertanda kutip tunggal. Validator menandai baris dan kolom yang tepat agar Anda bisa memperbaikinya sebelum menerapkan.',
      },
      {
        question: 'Apakah payload JSON saya dicatat di mana pun?',
        answer:
          'Tidak pernah. Penguraian dan pemformatan berjalan sepenuhnya melalui JavaScript di tab browser Anda.',
      },
      {
        question: 'Apakah Pemformat JSON gratis digunakan?',
        answer:
          'Ya, Pemformat JSON sepenuhnya gratis tanpa pendaftaran, tanpa batas penggunaan, dan tanpa watermark pada keluaran.',
      },
      {
        question: 'Apa perbedaan antara memformat dan mem-minify JSON?',
        answer:
          'Pemformatan menambahkan indentasi dan jeda baris agar JSON mudah dibaca, sedangkan minify menghapus semua spasi yang tidak perlu agar payload sekecil mungkin untuk pengiriman.',
      },
      {
        question: 'Bisakah Pemformat JSON menangani berkas JSON besar?',
        answer:
          'Ya. Karena semua pemrosesan dilakukan secara lokal di browser Anda, tidak ada batas unggahan server, meskipun payload yang sangat besar bergantung pada memori browser Anda.',
      },
      {
        question: 'Opsi indentasi apa yang ditawarkan Pemformat JSON?',
        answer:
          'Anda bisa memformat dengan 2 spasi, 4 spasi, atau karakter tab, sehingga keluaran sesuai dengan gaya codebase Anda.',
      },
      {
        question: 'Apakah Pemformat JSON mendukung array JSON di tingkat teratas?',
        answer:
          'Ya. Array tingkat teratas adalah JSON yang valid, sehingga Anda bisa menempel dan memformat array sama seperti objek.',
      },
      {
        question: 'Bagaimana cara memperbaiki kesalahan "Unexpected token" dalam JSON saya?',
        answer:
          'Lihat baris dan kolom yang dilaporkan validator. Penyebab paling umum adalah koma yang hilang, kurung yang tidak tertutup, atau tanda kutip tunggal di tempat yang membutuhkan tanda kutip ganda.',
      },
      {
        question: 'Bisakah saya memformat JSON dengan komentar atau koma di akhir?',
        answer:
          'Tidak. Komentar dan koma di akhir bukan bagian dari JSON yang ketat, jadi hapus terlebih dahulu dan pemformat akan menerima masukan yang sudah dibersihkan.',
      },
      {
        question: 'Apa arti statistik kedalaman bersarang dalam Pemformat JSON?',
        answer:
          'Kedalaman bersarang menghitung berapa tingkat nilai yang paling dalam berada di dalam objek dan array, yang membantu Anda menilai seberapa kompleks sebuah payload.',
      },
      {
        question: 'Apakah Pemformat JSON mempertahankan urutan kunci objek?',
        answer:
          'Ya, kecuali Anda mengaktifkan Urutkan kunci A–Z. Secara default pemformat mempertahankan urutan kunci asli Anda persis seperti yang ditempel.',
      },
      {
        question: 'Bisakah saya mengurutkan kunci dalam objek JSON bersarang juga?',
        answer:
          'Ya. Pengurutan diterapkan secara rekursif, sehingga kunci di dalam setiap objek bersarang disusun ulang secara alfabetis sementara urutan array tetap tidak tersentuh.',
      },
      {
        question: 'Format berkas apa yang dihasilkan unduhan Pemformat JSON?',
        answer:
          'Unduhan menyimpan hasil Anda yang diformat atau diminify sebagai berkas teks .json standar yang bisa dibuka di editor apa pun.',
      },
      {
        question: 'Apakah Pemformat JSON berfungsi offline?',
        answer:
          'Ya. Setelah halaman dimuat, pemformatan dan validasi berjalan sepenuhnya di browser Anda tanpa permintaan jaringan.',
      },
      {
        question: 'Mengapa objek JavaScript saya yang valid ditolak sebagai JSON?',
        answer:
          'JSON lebih ketat daripada JavaScript: kunci harus menggunakan tanda kutip ganda, nilai tidak boleh undefined atau fungsi, dan koma di akhir tidak diizinkan.',
      },
      {
        question: 'Bisakah Pemformat JSON memvalidasi JSON dari respons API?',
        answer:
          'Ya. Tempelkan isi respons mentah ke masukan dan validator akan memastikan apakah itu JSON yang valid dan menunjukkan kesalahan sintaks apa pun.',
      },
      {
        question: 'Berapa ukuran JSON maksimum yang bisa saya tempelkan ke Pemformat JSON?',
        answer:
          'Tidak ada batas ukuran tetap karena tidak ada yang diunggah ke server. Batas praktis hanya berasal dari memori browser Anda dan seberapa besar kotak teks yang bisa ditanganinya dengan lancar.',
      },
      {
        question: 'Apakah mem-minify JSON mengubah maknanya?',
        answer:
          'Tidak. Minify hanya menghapus spasi, sehingga data, kunci, dan nilai tetap persis sama sementara berkas menjadi lebih kecil.',
      },
      {
        question: 'Bagaimana cara menyalin JSON yang diformat tanpa spasi berlebih?',
        answer:
          'Beralihlah ke mode Minify terlebih dahulu, lalu klik Salin. Papan klip akan berisi JSON satu baris yang ringkas tanpa spasi atau jeda baris tambahan.',
      },
    ],
  },
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
    instructions: [
      {
        title: 'Pilih Encode atau Decode',
        description:
          'Pilih Encode ke Base64 atau Decode Base64 di bagian atas ruang kerja.',
      },
      {
        title: 'Tempel teks atau string Base64 Anda',
        description:
          'Masukkan teks UTF-8 yang ingin Anda encode, atau string Base64 yang ingin Anda decode, ke dalam kotak masukan.',
      },
      {
        title: 'Atur opsi Base64',
        description:
          'Dalam mode Encode, secara opsional aktifkan keluaran aman-URL (- dan _) atau hilangkan karakter padding = di akhir.',
      },
      {
        title: 'Periksa keluaran dan validasi',
        description:
          'Tinjau hasil yang diubah secara instan. Jika decode gagal, periksa padding yang hilang atau karakter di luar alfabet Base64.',
      },
      {
        title: 'Salin atau tukar',
        description:
          'Salin hasilnya ke papan klip Anda atau klik Tukar untuk membalik arah menggunakan keluaran Anda saat ini.',
      },
      {
        title: 'Tips: menangani token aman-URL',
        description:
          'Saat menempelkan token dari URL, gunakan mode aman-URL agar - dan _ ditangani dengan benar. Ingat bahwa Base64 adalah encoding, bukan enkripsi, jadi jangan pernah memperlakukannya sebagai penyimpanan yang aman.',
      },
    ],
    examples: [
      {
        title: 'Encoding string UTF-8',
        input: 'Halo UtilityFlow: UTF-8 ✓',
        output: 'SGFsbyBVdGlsaXR5RmxvdzogVVRGLTgg4pyT',
        explanation: 'Menggunakan serialisasi byte UTF-8 TextEncoder sebelum konversi Base64.',
      },
      {
        title: 'Decoding Base64 kembali ke teks',
        input: 'SGFsbyBVdGlsaXR5RmxvdzogVVRGLTgg4pyT',
        output: 'Halo UtilityFlow: UTF-8 ✓',
        explanation: 'Mengembalikan string Base64 menjadi teks UTF-8 asli, termasuk tanda centang.',
      },
    ],
    benefits: [
      'Encoding/decoding yang aman UTF-8 menghindari crash Unicode btoa/atob lama',
      'Mendukung alfabet aman-URL RFC 4648 (- dan _) dan decoding tanpa padding',
      'Tukar satu klik memindahkan keluaran ke masukan dan membalik mode',
      'Eksekusi lokal yang aman untuk kunci API dan header Basic Auth',
    ],
    useCases: [
      'Meng-encode kredensial HTTP Basic Authentication secara lokal',
      'Memeriksa payload JSON atau data URI yang di-encode Base64',
      'Menyiapkan token Base64 aman-URL untuk parameter kueri',
      'Men-decode cuplikan isi email atau webhook Base64',
    ],
    faqs: [
      {
        question: 'Mengapa btoa() standar gagal pada karakter Unicode?',
        answer:
          'Fungsi btoa() bawaan hanya menerima code point Latin-1 satu byte. Alat ini mengubah teks menjadi byte UTF-8 melalui TextEncoder terlebih dahulu sehingga semua aksara internasional dan emoji di-encode dengan rapi.',
      },
      {
        question: 'Bisakah decoder menangani Base64 aman-URL tanpa padding "="?',
        answer:
          'Ya. Decoder secara otomatis menormalkan "-" dan "_" kembali menjadi "+" dan "/" serta mengembalikan padding "=" yang hilang sebelum men-decode.',
      },
      {
        question: 'Apakah Base64 itu enkripsi?',
        answer:
          'Tidak. Base64 adalah format encoding untuk merepresentasikan data biner atau teks dalam ASCII, bukan enkripsi kriptografis.',
      },
      {
        question: 'Apakah Encoder Base64 gratis digunakan?',
        answer:
          'Ya, Encoder Base64 sepenuhnya gratis tanpa pendaftaran dan tanpa batas berapa banyak string yang Anda ubah.',
      },
      {
        question: 'Karakter apa yang diizinkan dalam string Base64?',
        answer:
          'Base64 standar menggunakan A–Z, a–z, 0–9, ditambah + dan /, dengan = untuk padding. Varian aman-URL mengganti + dan / dengan - dan _.',
      },
      {
        question: 'Mengapa keluaran Base64 saya lebih panjang daripada masukan?',
        answer:
          'Base64 merepresentasikan setiap 3 byte masukan sebagai 4 karakter ASCII, sehingga keluaran yang di-encode kira-kira sepertiga lebih panjang daripada teks asli.',
      },
      {
        question: 'Bisakah saya meng-encode emoji dan teks non-Inggris ke Base64?',
        answer:
          'Ya. Alat ini meng-encode teks sebagai byte UTF-8 terlebih dahulu, sehingga emoji, huruf beraksen, dan aksara non-Latin semuanya di-encode dan di-decode dengan benar.',
      },
      {
        question: 'Apa itu Base64 aman-URL dan kapan saya harus menggunakannya?',
        answer:
          'Base64 aman-URL mengganti + dan / dengan - dan _ sehingga string yang di-encode bisa berada di dalam URL atau nama berkas tanpa di-percent-encode. Gunakan untuk token yang diteruskan dalam parameter kueri.',
      },
      {
        question: 'Bagaimana cara men-decode string Base64 tanpa padding?',
        answer:
          'Tempelkan langsung. Decoder mendeteksi padding = yang hilang dan mengembalikannya secara otomatis sebelum men-decode.',
      },
      {
        question: 'Bisakah Encoder Base64 menangani berkas biner?',
        answer:
          'Tidak, alat ini hanya meng-encode teks. Untuk meng-encode berkas, Anda perlu membaca byte-nya terlebih dahulu, yang tidak dilakukan alat berbasis teks ini.',
      },
      {
        question: 'Apa perbedaan antara Base64 dan Base64URL?',
        answer:
          'Base64URL adalah varian aman-URL dari Base64: varian ini menukar + dengan - dan / dengan _, dan biasanya menghilangkan padding =, sehingga hasilnya aman dalam URL dan nama berkas.',
      },
      {
        question: 'Mengapa teks Base64 yang saya decode menampilkan karakter aneh?',
        answer:
          'Teks asli kemungkinan di-encode dari encoding byte selain UTF-8, atau string Base64-nya rusak. Coba encode ulang sumbernya sebagai UTF-8 dan bandingkan.',
      },
      {
        question: 'Bisakah saya meng-encode kata sandi atau rahasia dengan Base64?',
        answer:
          'Anda bisa, tetapi Anda tidak boleh mengandalkannya untuk keamanan. Base64 mudah dibalik, sehingga siapa pun yang melihat string yang di-encode bisa men-decode-nya secara instan.',
      },
      {
        question: 'Bagaimana cara meng-encode teks untuk header Basic Auth?',
        answer:
          'Gabungkan nama pengguna dan kata sandi sebagai nama-pengguna:kata-sandi, encode string tersebut ke Base64, dan gunakan sebagai Authorization: Basic <nilai yang di-encode> dalam permintaan Anda.',
      },
      {
        question: 'Apakah Encoder Base64 berfungsi offline?',
        answer:
          'Ya. Setelah halaman dimuat, encoding dan decoding berjalan sepenuhnya di browser Anda tanpa permintaan jaringan.',
      },
      {
        question: 'Apa yang terjadi jika saya menempelkan string Base64 yang tidak valid ke decoder?',
        answer:
          'Decoder melaporkan kesalahan, bukan menebak. Periksa karakter di luar alfabet Base64, padding yang hilang, atau spasi dan jeda baris liar.',
      },
      {
        question: 'Bisakah saya men-decode data URI Base64 dengan alat ini?',
        answer:
          'Ya, jika Anda menempelkan hanya bagian Base64 setelah koma. Hapus awalan data:...;base64, terlebih dahulu, karena awalan itu bukan bagian dari data yang di-encode.',
      },
      {
        question: 'Mengapa beberapa string Base64 diakhiri tanda "="?',
        answer:
          'Tanda = adalah padding yang ditambahkan saat panjang masukan bukan kelipatan tiga byte. Tanda itu memberi tahu decoder persis berapa banyak byte yang diwakili grup terakhir.',
      },
      {
        question: 'Apakah teks saya diunggah ke server saat saya meng-encode-nya?',
        answer:
          'Tidak. Encoding dan decoding berjalan secara lokal di browser Anda, sehingga string sensitif seperti kunci API tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Bagaimana cara mengubah Base64 kembali menjadi teks asli?',
        answer:
          'Beralihlah ke mode Decode, tempelkan string Base64, dan alat ini mengembalikan teks UTF-8 asli, yang kemudian bisa Anda salin.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih Encode atau Decode',
        description:
          'Beralih antara Encode dan Decode, lalu pilih encodeURIComponent (untuk nilai parameter tunggal) atau encodeURI (untuk mempertahankan pemisah ://?&).',
      },
      {
        title: 'Tempel URL atau string parameter',
        description:
          'Masukkan URL apa pun atau cuplikan yang di-percent-encode ke String Masukan atau URL.',
      },
      {
        title: 'Tinjau hasil yang di-encode atau di-decode',
        description:
          'Periksa kotak keluaran untuk memastikan karakter khusus seperti spasi, & dan = di-encode atau di-decode persis seperti yang diharapkan.',
      },
      {
        title: 'Periksa parameter yang diurai',
        description:
          'Saat URL lengkap yang valid terdeteksi, tinjau tabel Rincian URL yang Diurai di bawah untuk pasangan kunci-nilai kueri yang di-decode.',
      },
      {
        title: 'Salin hasilnya',
        description:
          'Klik Salin untuk menggunakan URL yang di-encode dalam kode, tautan, atau permintaan API Anda tanpa mengetik ulang.',
      },
      {
        title: 'Pemecahan masalah: urutan % yang cacat',
        description:
          'Jika Anda melihat kesalahan tentang urutan % yang cacat, carilah % tunggal yang tidak diikuti dua digit hex, seperti %2, dan perbaiki sebelum men-decode lagi.',
      },
    ],
    examples: [
      {
        title: 'Meng-encode nilai kueri',
        input: 'pemformat json & validator',
        output: 'pemformat%20json%20%26%20validator',
        explanation: 'Menggunakan encodeURIComponent meng-escape "&" sehingga tidak memisahkan string kueri Anda.',
      },
      {
        title: 'Men-decode string kueri',
        input: 'pemformat%20json%20%26%20validator',
        output: 'pemformat json & validator',
        explanation: 'Mengembalikan nilai yang di-percent-encode menjadi teks yang bisa dibaca.',
      },
    ],
    benefits: [
      'Menjelaskan perilaku encodeURIComponent vs encodeURI secara berdampingan',
      'Secara otomatis mengurai URL yang valid menjadi baris protokol, host, jalur, hash, dan kueri',
      'Menangani encoding spasi "+" dengan rapi saat men-decode string kueri formulir',
      'Melaporkan urutan % yang cacat dengan jelas',
    ],
    useCases: [
      'Men-debug URI pengalihan OAuth dan parameter callback',
      'Meng-escape kueri pencarian atau string JSON yang diteruskan dalam parameter kueri',
      'Mengaudit tautan kampanye UTM dengan banyak parameter pelacakan',
      'Men-decode URL log akses server untuk tinjauan manusia',
    ],
    faqs: [
      {
        question: 'Kapan saya harus menggunakan encodeURIComponent, bukan encodeURI?',
        answer:
          'Gunakan encodeURIComponent saat meng-encode nilai parameter kueri tunggal (agar karakter seperti & dan = di-escape). Gunakan encodeURI saat meng-encode seluruh URL dan Anda ingin mempertahankan https://, /, ?, dan &.',
      },
      {
        question: 'Mengapa URL yang saya decode mengubah "+" menjadi spasi?',
        answer:
          'Dalam string kueri application/x-www-form-urlencoded, "+" mewakili spasi. Decoding komponen menormalkan "+" menjadi spasi secara otomatis.',
      },
      {
        question: 'Apakah pengurai URL memvalidasi apakah domain bisa dijangkau?',
        answer:
          'Tidak. Penguraian menggunakan API URL browser secara lokal tanpa mengirim permintaan jaringan apa pun ke host target.',
      },
      {
        question: 'Apakah Encoder URL gratis digunakan?',
        answer:
          'Ya, Encoder URL sepenuhnya gratis tanpa pendaftaran dan tanpa batas berapa banyak URL yang Anda encode atau decode.',
      },
      {
        question: 'Karakter apa yang diubah encoding URL?',
        answer:
          'Encoding URL mengubah karakter yang dicadangkan dan tidak aman, seperti spasi, &, =, ?, #, dan huruf non-ASCII, menjadi % diikuti dua digit hex.',
      },
      {
        question: 'Apa perbedaan antara %20 dan + untuk spasi dalam URL?',
        answer:
          'Keduanya bisa mewakili spasi dalam string kueri, tetapi %20 adalah percent-encoding standar, sedangkan + hanya berarti spasi dalam string kueri yang di-encode formulir, bukan dalam jalur.',
      },
      {
        question: 'Bisakah Encoder URL meng-encode URL lengkap dengan https:// tetap utuh?',
        answer:
          'Ya. Pilih mode encodeURI dan skema, garis miring, serta pemisah tetap tidak tersentuh sementara hanya karakter yang tidak aman yang di-encode.',
      },
      {
        question: 'Bagaimana cara meng-encode ampersand dalam nilai kueri?',
        answer:
          'Gunakan mode encodeURIComponent pada nilai saja. Mode ini mengubah & menjadi %26 sehingga ampersand diperlakukan sebagai data, bukan memisahkan string kueri Anda.',
      },
      {
        question: 'Mengapa URL yang saya decode masih mengandung tanda %?',
        answer:
          'Tanda % yang diikuti dua digit hex di-decode sekali, sehingga nilai yang di-encode ganda seperti %2520 menjadi %20 setelah satu decode. Jalankan decode lagi jika Anda memerlukan bentuk yang sepenuhnya di-decode.',
      },
      {
        question: 'Bisakah saya men-decode URL dengan banyak parameter kueri?',
        answer:
          'Ya. Decoder menangani seluruh string kueri, dan tabel rincian yang diurai mencantumkan setiap pasangan kunci-nilai secara terpisah untuk pemeriksaan yang mudah.',
      },
      {
        question: 'Apakah Encoder URL menangani karakter Unicode?',
        answer:
          'Ya. Karakter non-ASCII terlebih dahulu diubah menjadi byte UTF-8 lalu di-percent-encode, sehingga huruf beraksen dan aksara lain di-encode dengan benar.',
      },
      {
        question: 'Apa itu percent-encoding dalam URL?',
        answer:
          'Percent-encoding mengganti sebuah karakter dengan tanda % diikuti nilai byte heksadesimal dua digitnya, yang menjaga URL tetap valid saat mengandung spasi atau simbol khusus.',
      },
      {
        question: 'Bagaimana cara meng-encode URL untuk digunakan dalam email atau dokumen?',
        answer:
          'Tempelkan URL, pilih mode encodeURI, dan salin hasilnya. Tautan yang di-encode tetap bisa diklik dan tidak akan rusak karena pembungkus baris dalam teks biasa.',
      },
      {
        question: 'Apakah Decoder URL memvalidasi URL?',
        answer:
          'Alat ini memeriksa apakah masukan adalah URL yang terbentuk dengan baik dan apakah setiap urutan % valid, tetapi tidak memeriksa apakah domain ada atau halaman dimuat.',
      },
      {
        question: 'Bisakah saya meng-encode spasi sebagai %20, bukan +?',
        answer:
          'Ya. Encoder selalu menggunakan %20 untuk spasi. Bentuk + hanya muncul saat men-decode masukan yang di-encode formulir, di mana + sudah berarti spasi.',
      },
      {
        question: 'Apa yang terjadi jika saya meng-encode URL yang sudah di-encode?',
        answer:
          'Tanda % itu sendiri di-encode menjadi %25, menghasilkan encoding ganda seperti %2520. Decode sekali untuk kembali ke bentuk encoding tunggal.',
      },
      {
        question: 'Apakah URL saya diunggah ke server saat saya meng-encode-nya?',
        answer:
          'Tidak. Encoding, decoding, dan penguraian semuanya berjalan secara lokal di browser Anda, sehingga tautan dan token privat tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Bagaimana cara meng-encode fragmen atau hash URL?',
        answer:
          'Encode hanya nilai fragmen dengan encodeURIComponent, lalu tambahkan sendiri setelah #, sehingga pemisah hash tidak ikut di-encode.',
      },
      {
        question: 'Mengapa beberapa URL yang di-encode tampak jauh lebih panjang?',
        answer:
          'Setiap karakter khusus atau non-ASCII menjadi tiga karakter (% ditambah dua digit hex), sehingga URL dengan banyak spasi atau karakter Unicode tumbuh secara nyata.',
      },
      {
        question: 'Bisakah Encoder URL menangani URL yang sangat panjang?',
        answer:
          'Ya. Pemrosesan berjalan secara lokal tanpa batas unggahan server, sehingga URL panjang di-encode dan di-decode di browser Anda selama browser Anda bisa menampung teksnya.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih UUID v4 atau v7',
        description:
          'Pilih v4 untuk pengenal acak standar atau v7 untuk kunci utama basis data yang bisa diurutkan dengan awalan stempel waktu.',
      },
      {
        title: 'Atur jumlah dan pemformatan',
        description:
          'Masukkan antara 1 dan 100 ID dan aktifkan Huruf Besar, Sertakan strip, atau Bungkus dengan {kurung kurawal}.',
      },
      {
        title: 'Hasilkan batch baru',
        description:
          'Klik Hasilkan UUID untuk membuat batch baru. Setiap klik menghasilkan rangkaian pengenal acak yang sepenuhnya baru.',
      },
      {
        title: 'Tinjau ID yang dihasilkan',
        description:
          'Pindai daftar untuk memastikan versi, huruf, dan format strip sesuai dengan yang diharapkan basis data atau kode Anda.',
      },
      {
        title: 'Salin atau unduh daftar',
        description:
          'Klik Salin semua untuk meletakkan setiap ID di papan klip Anda, atau unduh batch sebagai berkas .txt untuk mengisi rekaman atau fixture pengujian.',
      },
      {
        title: 'Tips: memilih v7 untuk basis data',
        description:
          'Jika Anda menyimpan ID sebagai kunci utama, pilih v7 agar baris baru terurut secara kronologis dan indeks Anda tetap efisien. Gunakan v4 saat urutan tidak penting.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 huruf kecil standar',
        input: 'Versi: v4 · Strip: Aktif · Huruf besar: Mati',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: 'Pengenal RFC 4122 128-bit yang cocok untuk kunci utama terdistribusi.',
      },
      {
        title: 'UUID v4 tanpa strip dan huruf besar',
        input: 'Versi: v4 · Strip: Mati · Huruf besar: Aktif',
        output: '550E8400E29B41D4A716446655440000',
        explanation: 'String hex 32 karakter yang ringkas untuk konstanta atau token yang ringkas.',
      },
    ],
    benefits: [
      'Menggunakan crypto.randomUUID / crypto.getRandomValues browser (CSPRNG)',
      'Mendukung UUID v7 RFC 9562 modern dengan awalan stempel waktu milidetik 48-bit',
      'Menghasilkan hingga 100 ID unik sekaligus dalam batch',
      'Memformat huruf besar, hex ringkas tanpa strip, atau string GUID dalam kurung kurawal',
    ],
    useCases: [
      'Mengisi fixture basis data dan rekaman pengujian migrasi',
      'Menghasilkan ID korelasi, kunci API, dan ID pengujian webhook',
      'Membandingkan UUID v7 yang ramah indeks B-tree vs UUID v4 acak',
      'Membuat konstanta GUID Windows/C# dalam kurung kurawal',
    ],
    faqs: [
      {
        question: 'Apa keunggulan UUID v7 dibandingkan UUID v4?',
        answer:
          'UUID v7 meng-encode stempel waktu milidetik Unix dalam bit paling signifikannya, sehingga ID bisa diurutkan secara kronologis dan mengurangi fragmentasi indeks B-tree dalam basis data SQL.',
      },
      {
        question: 'Apakah UUID ini dihasilkan dengan Math.random()?',
        answer:
          'Tidak. Setiap UUID menggunakan keacakan yang kuat secara kriptografis dari Web Crypto API.',
      },
      {
        question: 'Bagaimana cara mendapatkan ID hex 32 karakter tanpa strip?',
        answer:
          'Hapus centang "Sertakan strip" untuk menghapus strip dengan segera di seluruh batch yang dihasilkan.',
      },
      {
        question: 'Apakah Generator UUID gratis digunakan?',
        answer:
          'Ya, Generator UUID sepenuhnya gratis tanpa pendaftaran, dan Anda bisa menghasilkan batch sebanyak yang Anda perlukan.',
      },
      {
        question: 'Apa itu UUID dan untuk apa digunakan?',
        answer:
          'UUID adalah pengenal unik 128-bit, biasanya ditulis sebagai 32 digit hex dalam lima grup. UUID digunakan untuk kunci utama basis data, ID korelasi, token sesi, dan nama berkas.',
      },
      {
        question: 'Bisakah dua UUID yang dihasilkan sama?',
        answer:
          'Dalam praktik, tidak. Dengan 122 bit acak dalam UUID v4, tabrakan sangat tidak mungkin sehingga Anda bisa memperlakukan ID yang dihasilkan sebagai unik.',
      },
      {
        question: 'Apa perbedaan antara UUID v4 dan UUID v7?',
        answer:
          'UUID v4 sepenuhnya acak, sedangkan UUID v7 dimulai dengan stempel waktu milidetik sehingga ID yang lebih baru terurut setelah ID yang lebih lama. Keduanya adalah pengenal 128-bit.',
      },
      {
        question: 'Berapa banyak UUID yang bisa saya hasilkan sekaligus?',
        answer:
          'Anda bisa menghasilkan antara 1 dan 100 UUID dalam satu batch. Klik Hasilkan lagi untuk batch baru lain dengan ukuran yang sama.',
      },
      {
        question: 'Apa arti "diurutkan berdasarkan waktu" untuk UUID v7?',
        answer:
          'Diurutkan berdasarkan waktu berarti bagian pertama UUID adalah stempel waktu milidetik Unix, sehingga mengurutkan ID secara alfabetis juga mengurutkannya berdasarkan waktu pembuatan.',
      },
      {
        question: 'Bisakah saya menghasilkan UUID tanpa strip?',
        answer:
          'Ya. Matikan Sertakan strip dan setiap UUID dalam batch ditampilkan sebagai string hex 32 karakter yang ringkas.',
      },
      {
        question: 'Apa itu GUID dalam kurung kurawal dan kapan saya memerlukannya?',
        answer:
          'GUID dalam kurung kurawal membungkus UUID dalam kurung kurawal, seperti {550e8400-...}. Beberapa alat Microsoft dan kode C# mengharapkan format ini untuk konstanta GUID.',
      },
      {
        question: 'Apakah UUID yang dihasilkan di sini aman untuk penggunaan produksi?',
        answer:
          'Ya. UUID ini menggunakan Web Crypto API browser, yang menyediakan keacakan yang kuat secara kriptografis dan cocok untuk pengenal produksi.',
      },
      {
        question: 'Bisakah saya menghasilkan UUID huruf besar?',
        answer:
          'Ya. Aktifkan tombol Huruf Besar dan seluruh batch ditampilkan dengan huruf hex A–F dalam huruf kapital.',
      },
      {
        question: 'Apakah saya memerlukan koneksi internet untuk menghasilkan UUID?',
        answer:
          'Hanya untuk memuat halaman. Setelah dimuat, pembuatan berjalan sepenuhnya di browser Anda tanpa permintaan jaringan.',
      },
      {
        question: 'Apakah daftar UUID yang saya hasilkan disimpan atau diunggah ke mana pun?',
        answer:
          'Tidak. Pembuatan dilakukan secara lokal di browser Anda, sehingga ID Anda tidak pernah dikirim ke server atau disimpan di mana pun.',
      },
      {
        question: 'Bisakah saya menggunakan UUID sebagai kunci API?',
        answer:
          'Anda bisa menggunakannya sebagai token buram, tetapi UUID adalah pengenal, bukan rahasia yang dirancang untuk autentikasi. Untuk kunci API asli, gunakan sistem rahasia yang tepat dengan rotasi.',
      },
      {
        question: 'Apa perbedaan antara UUID dan GUID?',
        answer:
          'Keduanya adalah format 128-bit yang sama. GUID adalah nama yang digunakan Microsoft, sedangkan UUID adalah nama standar terbuka yang digunakan di tempat lain.',
      },
      {
        question: 'Mengapa saya memilih UUID v7 untuk kunci utama basis data?',
        answer:
          'Karena ID v7 diurutkan berdasarkan waktu pembuatan, baris baru mendarat berdekatan dalam indeks B-tree, yang menjaga penyisipan tetap cepat dan mengurangi fragmentasi indeks dibandingkan ID v4 acak.',
      },
      {
        question: 'Bisakah saya menghasilkan UUID yang sama dua kali?',
        answer:
          'Tidak. Setiap pembuatan menggunakan keacakan kriptografis yang baru, sehingga Anda tidak akan pernah mendapatkan UUID yang sama lagi. Simpan ID apa pun yang perlu Anda gunakan kembali.',
      },
      {
        question: 'Bagaimana cara menyalin semua UUID yang dihasilkan sekaligus?',
        answer:
          'Klik Salin semua untuk meletakkan seluruh batch di papan klip Anda, satu UUID per baris, siap ditempel ke kode, spreadsheet, atau skrip SQL Anda.',
      },
    ],
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
    instructions: [
      {
        title: 'Masukkan pola dan bendera Anda',
        description:
          'Ketik pola RegExp di antara garis miring dan aktifkan bendera g, i, m, atau s.',
      },
      {
        title: 'Berikan teks contoh',
        description:
          'Tempelkan string pengujian ke String Uji untuk melihat substring yang cocok disorot di sebelah kanan.',
      },
      {
        title: 'Tinjau kecocokan yang disorot',
        description:
          'Periksa substring yang disorot dan jumlah kecocokan untuk memastikan pola Anda menemukan persis yang Anda harapkan, dan tidak lebih.',
      },
      {
        title: 'Periksa grup dan penggantian',
        description:
          'Tinjau indeks kecocokan yang tepat dan grup tangkap $1/$2, atau uji templat penggantian di bawah.',
      },
      {
        title: 'Perbaiki kesalahan pola',
        description:
          'Jika kesalahan sintaks muncul, baca pesannya, periksa kurung atau tanda kurung yang tidak tertutup, dan sesuaikan pola hingga kecocokan muncul.',
      },
      {
        title: 'Tips: uji kasus tepi sebelum merilis',
        description:
          'Coba string kosong, karakter yang tidak biasa, dan masukan multi-baris sebelum menggunakan pola dalam produksi, dan aktifkan bendera i untuk memeriksa peka huruf.',
      },
    ],
    examples: [
      {
        title: 'Mengekstrak bagian lokal dan domain email',
        input: 'Pola: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Teks: support@utilityflow.online',
        output: 'Cocok #1 · $1="support" · $2="utilityflow.online"',
        explanation: 'Grup dalam tanda kurung menampilkan substring yang ditangkap satu per satu.',
      },
      {
        title: 'Memvalidasi format tanggal',
        input: 'Pola: ^\\d{4}-\\d{2}-\\d{2}$ · Teks: 2026-11-13',
        output: 'Cocok #1 · "2026-11-13"',
        explanation: 'Pola tanggal yang ketat hanya cocok dengan tanggal dalam format YYYY-MM-DD.',
      },
    ],
    benefits: [
      'Melindungi dari loop tak berujung pada kecocokan panjang nol secara otomatis',
      'Menampilkan indeks karakter yang tepat dan nilai grup yang ditangkap per kecocokan',
      'Menyertakan pratinjau templat penggantian langsung menggunakan $1, $2, dan $&',
      'Melaporkan kesalahan sintaks RegExp dengan rapi tanpa crash',
    ],
    useCases: [
      'Memvalidasi pola email, slug, atau masukan formulir sebelum merilis',
      'Mengekstrak token terstruktur dari baris log atau cuplikan HTML',
      'Menguji templat tangkap cari-dan-ganti',
      'Memverifikasi perilaku bendera multi-baris (^ / $) dan peka huruf',
    ],
    faqs: [
      {
        question: 'Mesin regex apa yang digunakan penguji ini?',
        answer:
          'Alat ini menggunakan mesin RegExp ECMAScript (JavaScript) bawaan browser Anda, sehingga perilakunya cocok dengan kode JS sisi klien dan Node.js secara identik.',
      },
      {
        question: 'Mengapa mode global ("g") penting?',
        answer:
          'Tanpa bendera "g", RegExp berhenti setelah kecocokan pertama. Mengaktifkan "g" menemukan dan menyoroti setiap kecocokan di seluruh string pengujian.',
      },
      {
        question: 'Bagaimana cara mencocokkan karakter baris baru dengan "."?',
        answer:
          'Aktifkan bendera "s" (dotAll) agar metakarakter titik "." juga mencocokkan karakter baris baru.',
      },
      {
        question: 'Apakah Penguji Regex gratis digunakan?',
        answer:
          'Ya, Penguji Regex sepenuhnya gratis tanpa pendaftaran dan tanpa batas berapa banyak pola atau string pengujian yang Anda coba.',
      },
      {
        question: 'Ragam regex apa yang digunakan Penguji Regex?',
        answer:
          'Alat ini menggunakan ragam regex JavaScript (ECMAScript), mesin yang sama yang berjalan di browser dan Node.js, sehingga pola berperilaku sama dalam kode Anda.',
      },
      {
        question: 'Bagaimana cara menguji regex untuk validasi email?',
        answer:
          'Tempelkan pola seperti ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) dan coba alamat yang valid dan tidak valid dalam string pengujian untuk melihat mana yang cocok.',
      },
      {
        question: 'Apa fungsi bendera g, i, m, dan s dalam Penguji Regex?',
        answer:
          'Bendera g menemukan semua kecocokan, i membuat pencocokan tidak peka huruf, m membuat ^ dan $ cocok pada batas baris, dan s membuat . mencocokkan karakter baris baru.',
      },
      {
        question: 'Bagaimana cara kerja grup tangkap dalam Penguji Regex?',
        answer:
          'Teks di dalam tanda kurung membentuk grup tangkap bernomor. Setelah kecocokan, setiap grup dicantumkan sebagai $1, $2, dan seterusnya dengan substring persis yang ditangkapnya.',
      },
      {
        question: 'Apa perbedaan antara .* dan .*? dalam regex?',
        answer:
          'Quantifier .* bersifat rakus dan mencocokkan sebanyak mungkin, sedangkan .*? bersifat malas dan mencocokkan sesedikit mungkin. Gunakan bentuk malas saat Anda menginginkan kecocokan terpendek.',
      },
      {
        question: 'Bagaimana cara mencocokkan titik atau tanda kurung literal dalam regex?',
        answer:
          'Escape dengan garis miring terbalik, seperti \\. untuk titik atau \\( untuk tanda kurung, sehingga karakter diperlakukan sebagai teks literal, bukan metakarakter.',
      },
      {
        question: 'Mengapa regex saya mencocokkan terlalu banyak teks?',
        answer:
          'Anda mungkin menggunakan quantifier rakus seperti .* yang menelan segalanya hingga kecocokan terakhir yang mungkin. Beralihlah ke quantifier malas seperti .*? atau persempit kelas karakternya.',
      },
      {
        question: 'Bagaimana cara menggunakan $1 dan $2 dalam penggantian?',
        answer:
          'Ketik templat penggantian seperti $2@$1 dan penguji mengganti setiap $n dengan teks yang ditangkap oleh grup bernomor tersebut dalam setiap kecocokan.',
      },
      {
        question: 'Bisakah Penguji Regex mencocokkan di beberapa baris?',
        answer:
          'Ya. Aktifkan bendera m agar ^ dan $ berfungsi per baris, dan bendera s jika Anda memerlukan . untuk melintasi jeda baris.',
      },
      {
        question: 'Apa itu lookahead dalam regex?',
        answer:
          'Lookahead seperti (?=...) memeriksa apakah sebuah pola mengikuti posisi saat ini tanpa mengonsumsinya, sehingga Anda bisa mensyaratkan suatu kondisi, seperti angka di depan, tanpa menyertakannya dalam kecocokan.',
      },
      {
        question: 'Mengapa pola saya tidak menunjukkan kecocokan?',
        answer:
          'Periksa kesalahan sintaks, karakter khusus yang tidak di-escape, atau kelas karakter yang mengecualikan masukan Anda. Coba sederhanakan pola dan tambahkan satu bagian demi satu bagian.',
      },
      {
        question: 'Bagaimana cara menguji regex terhadap banyak baris sekaligus?',
        answer:
          'Tempelkan seluruh sampel multi-baris ke string pengujian dan aktifkan bendera g. Setiap baris yang cocok disorot dan dicantumkan beserta indeksnya.',
      },
      {
        question: 'Apakah Penguji Regex mendukung karakter Unicode?',
        answer:
          'Ya. Regex JavaScript menangani teks Unicode, dan Anda bisa menggunakan escape seperti \\u{1F600} atau bendera u untuk pencocokan yang sepenuhnya sadar Unicode.',
      },
      {
        question: 'Apakah regex atau teks pengujian saya diunggah ke mana pun?',
        answer:
          'Tidak. Pengujian berjalan sepenuhnya di browser Anda, sehingga pola dan data contoh Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apa itu catastrophic backtracking dan bagaimana cara menghindarinya?',
        answer:
          'Hal ini terjadi saat quantifier bersarang seperti (a+)+ memaksa mesin mencoba kombinasi yang sangat banyak. Hindari quantifier yang tumpang tindih dan gunakan pola gaya atomik atau kelas karakter yang lebih sederhana.',
      },
      {
        question: 'Bisakah saya menyimpan atau membagikan pola regex saya?',
        answer:
          'Tidak ada fitur simpan bawaan, jadi salin pola dan string pengujian Anda ke berkas cuplikan atau komentar kode. Anda juga bisa menempelkan pola langsung ke kode sumber Anda.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel string JWT Anda',
        description:
          'Tempelkan token tiga segmen standar (header.payload.signature) ke kotak masukan, atau klik Muat contoh JWT untuk mencoba token demo.',
      },
      {
        title: 'Tinjau JSON Header dan Payload',
        description:
          'Periksa metadata algoritma (`alg`, `typ`) dan kolom klaim yang di-decode dalam panel JSON yang diformat.',
      },
      {
        title: 'Periksa Klaim Stempel Waktu',
        description:
          'Verifikasi konversi tanggal UTC untuk `iat`, `nbf`, dan `exp` beserta status aktif/kedaluwarsa.',
      },
      {
        title: 'Periksa klaim seperti sub, roles, dan scopes',
        description:
          'Carilah klaim identitas dan izin seperti sub, iss, aud, roles, dan scope untuk memastikan token membawa apa yang diharapkan API Anda.',
      },
      {
        title: 'Salin JSON yang di-decode atau satu klaim',
        description:
          'Salin seluruh JSON header atau payload yang diformat, atau salin nilai klaim individual untuk ditempel ke kode, pengujian, atau tiket dukungan Anda.',
      },
      {
        title: 'Atasi token yang tidak bisa di-decode',
        description:
          'Hapus spasi berlebih, jeda baris, atau tanda kutip di sekitar token. Token lima segmen adalah JWE terenkripsi, bukan JWT, dan tidak bisa di-decode tanpa kunci dekripsinya.',
      },
    ],
    examples: [
      {
        title: 'Memeriksa kedaluwarsa token',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Header: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation: 'Men-decode segmen Base64Url dan menerjemahkan klaim epoch numerik menjadi tanggal UTC.',
      },
      {
        title: 'Memeriksa klaim peran',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsInJvbGUiOiJhZG1pbiJ9.sig',
        output: 'Payload: { "sub": "usr_1", "role": "admin" }',
        explanation: 'Menampilkan klaim identitas dan peran dari payload yang di-decode.',
      },
    ],
    benefits: [
      'Tanpa transmisi jaringan—token tidak pernah keluar dari tab browser Anda',
      'Menerjemahkan klaim numerik iat, nbf, dan exp menjadi tanggal UTC yang bisa dibaca',
      'Menyoroti apakah stempel waktu kedaluwarsa token sudah lewat',
      'Menjelaskan dengan jelas bahwa verifikasi tanda tangan kriptografis memerlukan kunci penandatanganan Anda',
    ],
    useCases: [
      'Men-debug token akses dan ID OAuth2 / OIDC selama integrasi API',
      'Memverifikasi klaim peran, scope, dan tenant yang dikeluarkan penyedia autentikasi',
      'Memeriksa mengapa API menolak token bearer yang kedaluwarsa',
      'Memvalidasi struktur JWT dalam pengujian integrasi',
    ],
    faqs: [
      {
        question: 'Apakah Decoder JWT ini memverifikasi apakah tanda tangan token asli?',
        answer:
          'Tidak. Men-decode JWT hanya mengurai segmen header dan payload Base64Url-nya. Memverifikasi tanda tangan memerlukan rahasia server atau kunci JWKS publik Anda dan harus selalu dilakukan di backend Anda.',
      },
      {
        question: 'Apakah aman menempelkan token autentikasi di sini?',
        answer:
          'Semua decoding berjalan secara lokal dalam JavaScript sisi klien tanpa mencatat atau mengirim token. Meski begitu, hindari menempelkan kredensial produksi di komputer bersama yang tidak tepercaya.',
      },
      {
        question: 'Mengapa token saya gagal jika memiliki 5 segmen, bukan 3?',
        answer:
          'Token 5 segmen adalah JWE terenkripsi (JSON Web Encryption), bukan JWT yang ditandatangani JWS, sehingga payload-nya tidak bisa di-decode tanpa kunci dekripsi.',
      },
      {
        question: 'Apa itu JWT dan apa yang ditampilkan decoder ini?',
        answer:
          'JSON Web Token adalah string ringkas dengan tiga segmen Base64Url: header, payload, dan tanda tangan. Decoder ini menampilkan JSON header, klaim payload, dan tanggal yang bisa dibaca manusia untuk klaim stempel waktu.',
      },
      {
        question: 'Apakah Decoder JWT gratis digunakan?',
        answer:
          'Ya. Decoder JWT sepenuhnya gratis tanpa pendaftaran, tanpa batas penggunaan, dan tanpa perlu akun. Alat ini berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Bisakah saya men-decode JWT tanpa rahasia penandatanganan?',
        answer:
          'Ya. Decoding hanya membaca header dan payload Base64Url, yang tidak dienkripsi. Rahasia penandatanganan hanya diperlukan untuk memverifikasi bahwa tanda tangannya asli.',
      },
      {
        question: 'Apa arti kolom header alg dan typ dalam JWT?',
        answer:
          'Kolom alg menyebutkan algoritma penandatanganan, seperti HS256 atau RS256, dan typ biasanya menyatakan JWT untuk mengidentifikasi jenis token. Kedua kolom berada di segmen header.',
      },
      {
        question: 'Klaim apa yang biasanya ada dalam payload JWT?',
        answer:
          'Klaim payload umum meliputi sub untuk subjek atau id pengguna, iss untuk penerbit, aud untuk audiens, iat untuk waktu penerbitan, nbf untuk waktu tidak-sebelum, dan exp untuk waktu kedaluwarsa, ditambah klaim kustom seperti roles atau scopes.',
      },
      {
        question: 'Bagaimana cara mengetahui apakah JWT saya sudah kedaluwarsa?',
        answer:
          'Bandingkan klaim exp dengan waktu saat ini. Decoder ini mengubah exp menjadi tanggal UTC biasa dan menandai apakah token masih aktif atau sudah kedaluwarsa.',
      },
      {
        question: 'Apa perbedaan antara iat, nbf, dan exp dalam JWT?',
        answer:
          'Klaim iat mencatat kapan token diterbitkan, nbf mencatat waktu paling awal token menjadi valid, dan exp mencatat kapan token berhenti valid. Ketiganya adalah stempel waktu Unix dalam detik.',
      },
      {
        question: 'Mengapa payload JWT yang saya decode tampak berbeda dari JSON asli?',
        answer:
          'Decoding hanya membalikkan encoding Base64Url, sehingga payload seharusnya cocok dengan klaim asli. Jika tampak kacau, token mungkin terpotong, terbungkus di beberapa baris, atau disalin dengan karakter tambahan.',
      },
      {
        question: 'Bisakah saya men-decode JWT yang tidak memiliki tanda tangan?',
        answer:
          'Ya. Token yang tidak ditandatangani menggunakan alg none dan memiliki segmen ketiga yang kosong, dan header serta payload-nya tetap di-decode secara normal. Token yang tidak ditandatangani tidak boleh dipercaya dalam produksi.',
      },
      {
        question: 'Apa artinya jika token saya hanya memiliki dua segmen?',
        answer:
          'Token dua segmen cacat atau tidak lengkap, biasanya karena sebagian terpotong saat disalin. JWT yang ditandatangani dan valid selalu memiliki tiga segmen yang dipisah titik.',
      },
      {
        question: 'Apakah Decoder JWT menyimpan atau mengirim token saya ke mana pun?',
        answer:
          'Tidak. Decoding dilakukan sepenuhnya di tab browser Anda dan tidak ada yang diunggah, dicatat, atau disimpan di server. Menutup tab akan menghapus token dari memori.',
      },
      {
        question: 'Mengapa JWT saya tidak bisa di-decode sama sekali?',
        answer:
          'Periksa spasi berlebih, jeda baris, atau tanda kutip di sekitar token, dan pastikan token memiliki tepat tiga segmen yang dipisah titik. Token yang disalin dari keluaran log sering menyertakan tanda baca di akhir yang merusak decoding.',
      },
      {
        question: 'Bisakah saya menggunakan Decoder JWT ini untuk token akses OAuth2?',
        answer:
          'Ya, selama token akses tersebut adalah JWT. Banyak penyedia OAuth2 dan OpenID Connect mengeluarkan token akses dan ID JWT, dan alat ini men-decode klaimnya dengan cara yang sama.',
      },
      {
        question: 'Apa itu JWE dan mengapa saya tidak bisa men-decode-nya di sini?',
        answer:
          'JWE adalah token JSON Web Encryption terenkripsi dengan lima segmen. Payload-nya terenkripsi, sehingga hanya bisa dibaca dengan kunci dekripsi yang dimiliki penerima yang dituju.',
      },
      {
        question: 'Bagaimana cara memeriksa klaim JWT seperti roles dan scopes?',
        answer:
          'Tempelkan token dan baca panel payload yang di-decode. Peran, scope, izin, dan klaim tenant muncul di sana sebagai kolom JSON biasa yang bisa Anda periksa atau salin.',
      },
      {
        question: 'Apakah men-decode JWT membuktikan token tersebut valid?',
        answer:
          'Tidak. Decoding hanya menunjukkan isi token. Siapa pun bisa membuat token dengan klaim apa pun, jadi validitas harus dikonfirmasi dengan memeriksa tanda tangan dan klaim exp di server Anda.',
      },
      {
        question: 'Bisakah saya men-decode JWT di komputer bersama atau publik?',
        answer:
          'Anda bisa, karena decoding bersifat lokal dan tidak ada yang diunggah, tetapi tetap lebih baik menghindari menempelkan token produksi yang aktif di komputer yang tidak Anda kendalikan.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih Masukan Teks atau Checksum Berkas Lokal',
        description:
          'Pilih Masukan Teks untuk meng-hash string atau Checksum Berkas Lokal untuk memverifikasi biner yang diunduh tanpa mengunggahnya.',
      },
      {
        title: 'Masukkan teks atau pilih berkas lokal',
        description:
          'Ketik atau tempelkan teks Anda ke kotak masukan, atau pilih berkas dari perangkat Anda. Berkas hanya dibaca di dalam browser Anda dan tidak pernah diunggah.',
      },
      {
        title: 'Pilih encoding keluaran',
        description:
          'Beralih antara pemformatan digest Hex (huruf kecil atau besar) dan Base64.',
      },
      {
        title: 'Tinjau keempat digest sekaligus',
        description:
          'SHA-1, SHA-256, SHA-384, dan SHA-512 dihitung secara bersamaan, sehingga Anda bisa membandingkan algoritma secara berdampingan tanpa menjalankan ulang alat ini.',
      },
      {
        title: 'Salin digest apa pun',
        description:
          'Klik Salin di samping SHA-1, SHA-256, SHA-384, atau SHA-512 untuk menyalin hash yang dihitung.',
      },
      {
        title: 'Atasi checksum yang tidak cocok',
        description:
          'Jika checksum berkas berbeda dari nilai yang diterbitkan, unduh ulang berkas dan periksa baris baru atau spasi di akhir dalam masukan teks, karena satu karakter tambahan saja mengubah hash sepenuhnya.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 dari "UtilityFlow"',
        input: 'UtilityFlow',
        output: 'add08e8a98d7c6eab5960b60a34ebe020497dc0334bd314cf5e4b45aae39e90e',
        explanation: 'Digest SHA-256 64 karakter hex (256 bit); satu karakter yang berubah menghasilkan digest yang sama sekali berbeda.',
      },
      {
        title: 'Memverifikasi checksum berkas unduhan',
        input: 'Mode: Checksum Berkas Lokal · Berkas: installer.zip',
        output: 'SHA-256 berkas dibandingkan dengan checksum yang diterbitkan vendor',
        explanation: 'Nilai yang cocok berarti berkas utuh; nilai yang berbeda berarti unduhan rusak atau diubah.',
      },
    ],
    benefits: [
      'Menggunakan Web Crypto SubtleCrypto bawaan yang dipercepat perangkat keras',
      'Memverifikasi checksum SHA-256 berkas lokal tanpa mengunggah berkas',
      'Menghasilkan format Hex (besar/kecil) dan Base64',
      'Menghitung keempat algoritma SHA secara bersamaan',
    ],
    useCases: [
      'Memverifikasi checksum SHA-256 pada installer perangkat lunak atau arsip yang diunduh',
      'Menghasilkan hash Base64 Subresource Integrity (SRI) untuk skrip/gaya',
      'Menguji ekspektasi digest HMAC atau payload webhook',
      'Membuat sidik jari konten yang deterministik',
    ],
    faqs: [
      {
        question: 'Bisakah saya membalikkan hash SHA-256 kembali menjadi teks asli?',
        answer:
          'Tidak. Fungsi hash kriptografis adalah digest matematis satu arah yang dirancang agar masukan asli tidak bisa diturunkan dari hash.',
      },
      {
        question: 'Mengapa SHA-256 dan SHA-512 lebih disukai daripada SHA-1?',
        answer:
          'SHA-1 memiliki kelemahan tabrakan yang diketahui dan sudah tidak digunakan lagi untuk tanda tangan keamanan; SHA-256 dan SHA-512 termasuk keluarga SHA-2 yang lebih kuat.',
      },
      {
        question: 'Apakah berkas yang diunggah dikirim ke server?',
        answer:
          'Tidak. Berkas yang dipilih dibaca ke dalam ArrayBuffer di dalam tab browser Anda dan di-hash secara lokal.',
      },
      {
        question: 'Untuk apa generator hash digunakan?',
        answer:
          'Generator hash mengubah teks atau berkas menjadi sidik jari dengan panjang tetap yang disebut digest. Pengembang menggunakan digest untuk memverifikasi unduhan, memeriksa integritas data, dan membangun nilai Subresource Integrity.',
      },
      {
        question: 'Apakah Generator Hash gratis digunakan?',
        answer:
          'Ya. Generator Hash sepenuhnya gratis tanpa pendaftaran dan tanpa batas penggunaan. Semua hashing berjalan secara lokal di browser Anda.',
      },
      {
        question: 'Apa perbedaan antara SHA-1, SHA-256, SHA-384, dan SHA-512?',
        answer:
          'Keempatnya adalah anggota keluarga SHA dengan panjang digest yang berbeda: SHA-1 menghasilkan 160 bit, SHA-256 menghasilkan 256 bit, SHA-384 menghasilkan 384 bit, dan SHA-512 menghasilkan 512 bit. Digest yang lebih panjang umumnya lebih kuat.',
      },
      {
        question: 'Bagaimana cara memverifikasi checksum berkas yang diunduh dengan alat ini?',
        answer:
          'Beralihlah ke mode Checksum Berkas Lokal, pilih berkas yang diunduh, dan bandingkan nilai SHA-256 yang dihitung dengan checksum yang diterbitkan vendor perangkat lunak. Nilai yang cocok berarti berkas utuh.',
      },
      {
        question: 'Apa yang harus saya lakukan jika checksum berkas saya tidak cocok?',
        answer:
          'Jangan instal atau jalankan berkas tersebut. Unduh ulang dari sumber resmi dan hash lagi, karena ketidakcocokan bisa berarti unduhan yang rusak atau diubah.',
      },
      {
        question: 'Apa perbedaan antara keluaran hash hex dan Base64?',
        answer:
          'Keluaran hex menampilkan digest sebagai karakter heksadesimal, sedangkan keluaran Base64 menampilkan digest yang sama dalam string Base64 yang lebih pendek. Keduanya mewakili byte hash yang persis sama.',
      },
      {
        question: 'Apakah mengubah satu karakter benar-benar mengubah seluruh hash?',
        answer:
          'Ya. Fungsi hash memiliki efek avalanche, sehingga mengubah satu huruf, spasi, atau baris baru menghasilkan digest yang sama sekali berbeda tanpa pola yang terlihat.',
      },
      {
        question: 'Bisakah dua berkas yang berbeda menghasilkan hash SHA-256 yang sama?',
        answer:
          'Secara teori tabrakan mungkin terjadi, tetapi dengan SHA-256 hal itu sangat tidak mungkin dalam praktik sehingga hash yang cocok diperlakukan sebagai bukti bahwa berkasnya identik.',
      },
      {
        question: 'Bisakah saya meng-hash berkas tanpa mengunggahnya?',
        answer:
          'Ya. Alat ini membaca berkas ke dalam memori browser Anda dan meng-hash-nya dengan Web Crypto API. Berkas tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apa itu hash Subresource Integrity dan bagaimana cara membuatnya?',
        answer:
          'Hash Subresource Integrity (SRI) adalah digest SHA Base64 yang ditambahkan ke tag script atau link agar browser menolak berkas yang diubah. Pilih keluaran Base64 di sini dan salin digest SHA-256 atau SHA-384 ke atribut integrity Anda.',
      },
      {
        question: 'Mengapa teks yang sama selalu menghasilkan hash yang sama?',
        answer:
          'Fungsi hash bersifat deterministik: masukan yang identik selalu menghasilkan digest yang identik. Itulah yang membuat hash berguna untuk memverifikasi berkas dan mendeteksi perubahan.',
      },
      {
        question: 'Apakah SHA-1 masih aman digunakan?',
        answer:
          'SHA-1 baik-baik saja untuk checksum sederhana pada data yang tidak sensitif, tetapi tidak boleh digunakan untuk tanda tangan keamanan atau sertifikat karena ada serangan tabrakan praktis terhadapnya.',
      },
      {
        question: 'Berapa panjang hash SHA-256 dalam karakter hex?',
        answer:
          'Digest SHA-256 adalah 256 bit, yang tampil sebagai 64 karakter heksadesimal. SHA-1 menampilkan 40 karakter hex, SHA-384 menampilkan 96, dan SHA-512 menampilkan 128.',
      },
      {
        question: 'Apakah Generator Hash berfungsi offline?',
        answer:
          'Ya, setelah halaman dimuat. Hashing menggunakan Web Crypto API bawaan di browser Anda, sehingga tidak diperlukan koneksi jaringan saat Anda meng-hash teks atau berkas.',
      },
      {
        question: 'Bisakah saya meng-hash teks dengan karakter khusus atau emoji?',
        answer:
          'Ya. Teks di-encode sebagai UTF-8 sebelum di-hash, sehingga huruf beraksen, simbol, dan emoji semuanya ditangani secara konsisten.',
      },
      {
        question: 'Apa perbedaan antara hash dan enkripsi?',
        answer:
          'Enkripsi bisa dibalik dengan kunci, sedangkan hashing adalah digest satu arah yang tidak bisa dibalik. Hash memverifikasi integritas; enkripsi melindungi kerahasiaan.',
      },
      {
        question: 'Bisakah saya menggunakan Generator Hash untuk memeriksa kata sandi?',
        answer:
          'Anda bisa meng-hash kata sandi untuk membandingkannya dengan digest yang tersimpan, tetapi kata sandi harus di-hash dengan algoritma kata sandi yang lambat seperti bcrypt atau Argon2, bukan SHA-256 biasa, dalam aplikasi nyata.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih Encode atau Decode',
        description:
          'Pilih Encode Entitas untuk meng-escape markup HTML atau Decode Entitas untuk membatalkan escape entitas yang ada.',
      },
      {
        title: 'Tempel HTML atau teks Anda',
        description:
          'Tempelkan cuplikan, nilai atribut, atau string yang di-escape ke kotak masukan. Blok kode yang besar ditempel persis seperti adanya.',
      },
      {
        title: 'Aktifkan encoding non-ASCII',
        description:
          'Dalam mode Encode, tentukan apakah karakter di atas ASCII 127 juga harus diubah menjadi entitas numerik &#...;.',
      },
      {
        title: 'Tinjau keluaran yang diubah',
        description:
          'Periksa apakah tag, tanda kutip, dan simbol berubah seperti yang diharapkan, dan pastikan tidak ada bagian cuplikan Anda yang diubah atau hilang.',
      },
      {
        title: 'Salin atau tukar',
        description:
          'Salin teks yang diubah atau klik Tukar untuk membalik alur kerja Anda.',
      },
      {
        title: 'Atasi entitas yang di-encode ganda',
        description:
          'Jika Anda melihat &amp;lt; dalam keluaran, teks tersebut di-encode dua kali. Decode sekali untuk mengembalikannya ke entitas normal, lalu encode satu kali saja.',
      },
    ],
    examples: [
      {
        title: 'Meng-escape cuplikan HTML untuk dokumentasi',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: 'Mencegah browser menafsirkan tag contoh sebagai elemen DOM yang aktif.',
      },
      {
        title: 'Men-decode entitas HTML kembali ke teks',
        input: '&lt;p&gt;Halo &amp; selamat datang&lt;/p&gt;',
        output: '<p>Halo & selamat datang</p>',
        explanation: 'Mengembalikan entitas bernama menjadi karakter aslinya.',
      },
    ],
    benefits: [
      'Meng-escape kelima karakter HTML/XML yang dicadangkan (&, <, >, ", \')',
      'Encoding entitas numerik opsional untuk simbol internasional dan tanda baca',
      'Men-decode entitas bernama (&mdash;, &copy;) maupun numerik (&#8212;, &#x2014;)',
      'Menggunakan ekstraksi teks DOMParser yang aman saat men-decode',
    ],
    useCases: [
      'Menyiapkan contoh kode HTML untuk artikel blog dan dokumentasi',
      'Membersihkan teks yang di-encode HTML dari umpan RSS atau API XML',
      'Meng-escape nilai atribut dalam templat HTML statis',
      'Memeriksa bagaimana simbol khusus dirender dengan aman di halaman UTF-8 atau ASCII',
    ],
    faqs: [
      {
        question: 'Lima karakter apa yang harus selalu di-escape dalam teks dan atribut HTML?',
        answer:
          'Ampersand (&), kurang-dari (<), lebih-dari (>), tanda kutip ganda ("), dan tanda kutip tunggal (\') harus di-escape untuk mencegah ambiguitas markup atau masalah XSS.',
      },
      {
        question: 'Kapan saya harus mematikan encoding non-ASCII?',
        answer:
          'Jika halaman web Anda menggunakan <meta charset="UTF-8">, karakter internasional dan simbol standar dirender langsung tanpa memerlukan entitas numerik &#...;.',
      },
      {
        question: 'Apakah decoder menangani entitas heksadesimal seperti &#x27;?',
        answer:
          'Ya. Entitas desimal (&#39;) dan heksadesimal (&#x27;) serta entitas bernama standar (&amp;, &nbsp;, &copy;) di-decode dengan benar.',
      },
      {
        question: 'Apa itu entitas HTML?',
        answer:
          'Entitas HTML adalah kode teks yang mewakili karakter khusus, seperti &lt; untuk < atau &amp; untuk &. Entitas memungkinkan Anda menampilkan karakter yang dicadangkan tanpa browser memperlakukannya sebagai markup.',
      },
      {
        question: 'Apakah Encoder Entitas HTML gratis digunakan?',
        answer:
          'Ya. Encoder Entitas HTML sepenuhnya gratis tanpa pendaftaran dan tanpa batas penggunaan. Semua encoding dan decoding berjalan secara lokal di browser Anda.',
      },
      {
        question: 'Mengapa saya perlu meng-escape karakter HTML sama sekali?',
        answer:
          'Browser menafsirkan <, > dan & sebagai markup. Meng-escape-nya menampilkan karakter sebagai teks yang terlihat, yang penting untuk contoh kode, konten pengguna, dan templat yang aman.',
      },
      {
        question: 'Apa perbedaan antara entitas HTML bernama dan numerik?',
        answer:
          'Entitas bernama menggunakan nama yang bisa dibaca seperti &copy; untuk simbol hak cipta, sedangkan entitas numerik menggunakan code point seperti &#169; atau &#xA9;. Keduanya merender karakter yang sama.',
      },
      {
        question: 'Kapan saya harus meng-encode karakter non-ASCII sebagai entitas?',
        answer:
          'Encode karakter tersebut saat halaman atau sistem email tidak mendukung UTF-8 dengan andal, atau saat Anda memerlukan keluaran ASCII murni. Pada halaman UTF-8 modern, huruf beraksen dan simbol bisa tetap sebagai karakter biasa.',
      },
      {
        question: 'Seperti apa HTML yang di-encode ganda?',
        answer:
          'Encoding ganda mengubah &lt; menjadi &amp;lt;, sehingga browser menampilkan teks literal &lt;, bukan <. Decode sekali untuk memperbaikinya, lalu encode hanya satu kali.',
      },
      {
        question: 'Bisakah saya men-decode entitas HTML dari halaman web yang di-scrape?',
        answer:
          'Ya. Tempelkan teks yang di-escape dari umpan RSS, API XML, atau halaman yang di-scrape dan decode untuk mendapatkan kembali teks biasa yang bisa dibaca dengan karakter asli.',
      },
      {
        question: 'Apakah meng-encode entitas HTML mencegah serangan XSS?',
        answer:
          'Meng-escape masukan pengguna adalah lapisan penting pertahanan XSS, tetapi bukan solusi lengkap dengan sendirinya. Selalu gabungkan dengan encoding keluaran yang tepat, validasi, dan kebijakan keamanan konten.',
      },
      {
        question: 'Apa entitas HTML untuk spasi non-breaking?',
        answer:
          'Spasi non-breaking adalah &nbsp; atau &#160;. Entitas ini menjaga dua kata tetap di baris yang sama dan umum digunakan untuk mempertahankan spasi dalam tata letak HTML.',
      },
      {
        question: 'Bagaimana cara meng-escape tanda kutip di dalam atribut HTML?',
        answer:
          'Gunakan &quot; untuk tanda kutip ganda dan &#39; atau &apos; untuk tanda kutip tunggal. Meng-escape tanda kutip mencegah nilai atribut berakhir lebih awal dan merusak markup Anda.',
      },
      {
        question: 'Bisakah alat ini meng-encode emoji dan simbol Unicode lainnya?',
        answer:
          'Ya. Dengan encoding non-ASCII diaktifkan, emoji dan simbol internasional menjadi entitas numerik seperti &#128512;. Jika mati, emoji tetap sebagai karakter Unicode biasa.',
      },
      {
        question: 'Apa perbedaan antara meng-escape HTML dan encoding URL?',
        answer:
          'Escaping HTML mengubah karakter markup yang dicadangkan menjadi entitas untuk ditampilkan di halaman, sedangkan encoding URL mengubah karakter menjadi kode persen seperti %20 untuk digunakan di dalam tautan dan string kueri.',
      },
      {
        question: 'Apakah encoder mengubah huruf dan angka biasa?',
        answer:
          'Tidak. Huruf biasa, angka, dan sebagian besar tanda baca diteruskan tanpa perubahan. Hanya karakter yang dicadangkan dan, secara opsional, simbol non-ASCII yang diubah.',
      },
      {
        question: 'Mengapa teks yang saya decode menampilkan karakter aneh?',
        answer:
          'Sumbernya kemungkinan di-encode dengan kumpulan karakter yang berbeda, atau sebuah entitas cacat. Coba decode lagi dari teks yang di-escape asli dan periksa apakah halaman mendeklarasikan UTF-8.',
      },
      {
        question: 'Bisakah saya meng-encode seluruh dokumen HTML dengan alat ini?',
        answer:
          'Ya. Anda bisa menempelkan dokumen lengkap dan meng-encode-nya, tetapi hasilnya dimaksudkan untuk ditampilkan sebagai contoh kode, bukan disimpan sebagai halaman web yang berfungsi.',
      },
      {
        question: 'Apakah HTML yang saya tempel dikirim ke server?',
        answer:
          'Tidak. Encoding dan decoding dilakukan sepenuhnya di browser Anda, sehingga kode dan teks Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apa entitas HTML untuk karakter ampersand?',
        answer:
          'Ampersand itu sendiri adalah &amp; atau &#38;. Selalu encode & literal terlebih dahulu, karena ampersand yang tidak di-encode bisa membuat browser salah membaca entitas yang mengikutinya.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih arah konversi',
        description:
          'Pilih JSON → CSV atau CSV → JSON dan pilih Koma (,), Titik koma (;), atau Tab (TSV) sebagai pemisah Anda.',
      },
      {
        title: 'Tempel data JSON atau CSV Anda',
        description:
          'Masukkan data ke editor kiri atau klik Muat contoh untuk menguji kolom yang dikutip.',
      },
      {
        title: 'Periksa header kolom',
        description:
          'Tinjau header yang dihasilkan sebelum mengonversi. Objek bersarang menjadi kolom yang dipisah titik seperti address.city, dan kunci yang hilang meninggalkan sel kosong.',
      },
      {
        title: 'Ubah data Anda',
        description:
          'Jalankan konversi dan periksa pratinjaunya. Koma yang dikutip, tanda kutip yang tersemat, dan baris baru di dalam sel dipertahankan persis seperti yang disyaratkan RFC 4180.',
      },
      {
        title: 'Salin atau unduh hasilnya',
        description:
          'Salin keluaran yang diubah atau unduh langsung sebagai berkas .csv atau .json.',
      },
      {
        title: 'Atasi kesalahan konversi',
        description:
          'Jika konversi gagal, validasi sintaks JSON Anda terlebih dahulu: periksa koma di akhir, tanda kutip yang hilang, dan kurung yang tidak cocok. Untuk CSV, pastikan Anda memilih pemisah yang benar-benar digunakan berkas Anda.',
      },
    ],
    examples: [
      {
        title: 'Menangani koma di dalam nilai CSV',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation: 'Secara otomatis mengutip kolom yang berisi pemisah atau tanda kutip ganda sesuai RFC 4180.',
      },
      {
        title: 'Mengubah CSV kembali menjadi JSON',
        input: 'id,nama\n1,Budi\n2,Sari',
        output: '[{"id": 1, "nama": "Budi"}, {"id": 2, "nama": "Sari"}]',
        explanation: 'Baris pertama menjadi kunci objek dan setiap baris berikutnya menjadi satu objek JSON.',
      },
    ],
    benefits: [
      'Konversi dua arah JSON ↔ CSV dalam satu ruang kerja',
      'Meratakan objek JSON bersarang menggunakan header kolom notasi titik',
      'Parser RFC-4180 yang tepat mempertahankan koma yang dikutip dan baris baru yang tersemat',
      'Mendukung pemisah koma, titik koma (Excel Eropa), dan tab',
    ],
    useCases: [
      'Mengekspor daftar JSON API REST ke Excel atau Google Sheets',
      'Mengubah ekspor data spreadsheet menjadi berkas seed JSON untuk aplikasi web',
      'Menyiapkan dataset TSV untuk ilmu data atau impor SQL',
      'Memeriksa ekspor CSV yang dipisah titik koma dengan rapi',
    ],
    faqs: [
      {
        question: 'Bagaimana JSON ke CSV menangani objek dengan properti bersarang?',
        answer:
          'Objek bersarang diratakan menjadi nama kolom yang dipisah titik (misalnya, address.city), dan array diserialkan sebagai string JSON yang ringkas.',
      },
      {
        question: 'Bagaimana jika objek JSON yang berbeda memiliki kunci yang sedikit berbeda?',
        answer:
          'Konverter memindai semua objek dalam array untuk membangun gabungan header kolom dan membiarkan sel kosong di tempat kunci tidak ada.',
      },
      {
        question: 'Apakah parser CSV rusak jika sel berisi koma di dalam tanda kutip?',
        answer:
          'Tidak. Parser state-machine melacak sel yang dikutip ganda dan tanda kutip "" yang di-escape secara akurat.',
      },
      {
        question: 'Untuk apa Konverter JSON ke CSV digunakan?',
        answer:
          'Alat ini mengubah data JSON dari API dan aplikasi menjadi spreadsheet CSV yang bisa Anda buka di Excel atau Google Sheets, dan mengubah berkas CSV kembali menjadi JSON untuk kode dan basis data.',
      },
      {
        question: 'Apakah Konverter JSON ke CSV gratis digunakan?',
        answer:
          'Ya. Konverter JSON ke CSV sepenuhnya gratis tanpa pendaftaran dan tanpa batas penggunaan. Semua konversi berjalan secara lokal di browser Anda.',
      },
      {
        question: 'Bisakah saya mengubah satu objek JSON, bukan array?',
        answer:
          'Ya. Satu objek diperlakukan sebagai satu baris dengan kunci-kuncinya sebagai header kolom, sehingga Anda tetap mendapatkan berkas CSV yang valid dengan satu baris data.',
      },
      {
        question: 'Bagaimana array JSON di dalam objek diubah menjadi CSV?',
        answer:
          'Nilai array diserialkan sebagai string JSON yang ringkas di dalam satu sel, sehingga datanya dipertahankan dan bisa diurai kembali menjadi array nanti.',
      },
      {
        question: 'Pemisah mana yang harus saya pilih untuk berkas CSV saya?',
        answer:
          'Gunakan koma untuk CSV standar, titik koma untuk ekspor Excel Eropa di mana koma adalah pemisah desimal, dan tab untuk berkas TSV yang digunakan dalam alat data.',
      },
      {
        question: 'Apakah konverter mempertahankan angka dan boolean dengan benar?',
        answer:
          'Ya. Angka dan boolean ditulis sebagai nilai biasa dalam CSV. Saat diubah kembali ke JSON, nilai yang tampak seperti angka atau boolean diurai menjadi tipe JSON yang cocok.',
      },
      {
        question: 'Apa yang terjadi pada nilai kosong atau null dalam JSON ke CSV?',
        answer:
          'String kosong, nilai null, dan kunci yang hilang semuanya menjadi sel kosong dalam CSV, yang menjaga baris tetap sejajar dengan header kolom.',
      },
      {
        question: 'Bisakah saya mengubah CSV kembali menjadi JSON dengan alat ini?',
        answer:
          'Ya. Beralihlah ke mode CSV ke JSON, tempelkan data CSV atau TSV Anda, dan pilih pemisahnya. Baris pertama menjadi kunci objek dan setiap baris berikutnya menjadi satu objek JSON.',
      },
      {
        question: 'Mengapa CSV saya terbuka dengan semua data dalam satu kolom Excel?',
        answer:
          'Excel mungkin mengharapkan pemisah yang berbeda dari yang digunakan berkas Anda. Ekspor ulang dengan pemisah koma, atau gunakan opsi titik koma untuk pengaturan locale Eropa.',
      },
      {
        question: 'Apakah Konverter JSON ke CSV menangani berkas besar?',
        answer:
          'Ya, dalam batas memori browser. Konversi berjalan secara lokal, sehingga dataset yang sangat besar mungkin membutuhkan beberapa detik, tetapi data Anda tidak pernah diunggah ke server.',
      },
      {
        question: 'Apakah data JSON atau CSV saya dikirim ke server?',
        answer:
          'Tidak. Konversi dilakukan sepenuhnya di tab browser Anda, sehingga data Anda tetap berada di perangkat Anda dan dihapus saat Anda menutup tab.',
      },
      {
        question: 'Apa itu RFC 4180 dan mengapa penting untuk CSV?',
        answer:
          'RFC 4180 adalah format standar untuk berkas CSV. Standar ini menentukan bagaimana kolom dengan koma, tanda kutip, atau baris baru harus dibungkus tanda kutip ganda, yang menjaga aplikasi spreadsheet membaca berkas Anda dengan benar.',
      },
      {
        question: 'Bisakah saya mengubah berkas TSV menjadi JSON?',
        answer:
          'Ya. Pilih pemisah Tab (TSV) dalam mode CSV ke JSON dan tempelkan data yang dipisah tab Anda. Tab umum dalam ekspor data dan berfungsi sama seperti koma.',
      },
      {
        question: 'Mengapa konversi JSON ke CSV saya gagal?',
        answer:
          'Penyebab paling umum adalah JSON yang tidak valid, seperti koma di akhir atau tanda kutip yang hilang, dan menempelkan objek JSON yang bukan array objek. Perbaiki sintaksnya dan coba lagi.',
      },
      {
        question: 'Bagaimana cara mengekspor data JSON API ke Excel?',
        answer:
          'Salin array JSON dari respons API Anda, tempelkan di sini, ubah menjadi CSV, dan unduh berkasnya. Buka CSV yang diunduh langsung di Excel atau impor ke Google Sheets.',
      },
      {
        question: 'Apakah konverter mempertahankan urutan asli kunci JSON saya?',
        answer:
          'Urutan kolom mengikuti urutan kunci pertama kali muncul di seluruh objek Anda. Objek pertama menetapkan urutan awal dan kunci baru dari objek berikutnya ditambahkan.',
      },
      {
        question: 'Bisakah saya mengunduh berkas yang diubah, bukan menyalinnya?',
        answer:
          'Ya. Gunakan tombol unduh untuk menyimpan hasilnya sebagai berkas .csv atau .json di perangkat Anda, siap dibuka di spreadsheet atau diimpor ke aplikasi Anda.',
      },
    ],
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
    instructions: [
      {
        title: 'Lihat atau salin waktu Unix saat ini',
        description:
          'Gunakan penghitung langsung yang berdetak di atas untuk mengambil epoch Unix saat ini dalam detik.',
      },
      {
        title: 'Ubah Stempel Waktu Unix → Tanggal Manusia',
        description:
          'Masukkan epoch numerik apa pun; mode Otomatis mendeteksi detik vs milidetik secara otomatis, atau paksa satuannya.',
      },
      {
        title: 'Tinjau format ISO, UTC, dan lokal',
        description:
          'Bandingkan keluaran ISO 8601, UTC, RFC 2822, dan waktu lokal secara berdampingan, ditambah waktu relatif seperti 2 jam yang lalu, untuk memilih format yang Anda perlukan.',
      },
      {
        title: 'Ubah Tanggal & Waktu Lokal → Stempel Waktu Unix',
        description:
          'Pilih tanggal dan waktu di panel bawah untuk mendapatkan detik, milidetik, dan keluaran ISO 8601 yang tepat.',
      },
      {
        title: 'Salin stempel waktu yang Anda perlukan',
        description:
          'Salin nilai detik untuk API dan basis data, nilai milidetik untuk objek Date JavaScript, atau string ISO untuk log dan JSON.',
      },
      {
        title: 'Atasi tanggal yang tampak salah',
        description:
          'Jika tanggal jatuh pada 1970 atau tahun 5000, Anda mungkin mencampur detik dan milidetik. Ubah pemilih satuan dari Otomatis ke satuan yang benar dan ubah lagi.',
      },
    ],
    examples: [
      {
        title: 'Mendeteksi detik vs milidetik',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (detik)',
        explanation: 'Angka 10 digit ditafsirkan sebagai detik; angka 13 digit sebagai milidetik.',
      },
      {
        title: 'Mengubah tanggal menjadi stempel waktu Unix',
        input: '2026-11-13 04:40:00 UTC',
        output: '1794544800 detik · 1794544800000 milidetik',
        explanation: 'Tanggal yang sama dalam detik dan milidetik untuk API dan objek Date JavaScript.',
      },
    ],
    benefits: [
      'Jam Unix langsung yang berdetak dan disinkronkan dengan waktu sistem Anda',
      'Deteksi otomatis detik vs milidetik dengan penggantian manual',
      'Menghasilkan ISO 8601, waktu lokal, RFC 2822 GMT, dan waktu relatif secara bersamaan',
      'Menyertakan pemilih tanggal dua arah ke konverter detik/ms Unix',
    ],
    useCases: [
      'Memeriksa klaim `iat` / `exp` JWT dan stempel waktu created_at API',
      'Men-debug stempel waktu bilangan bulat basis data di PostgreSQL atau SQLite',
      'Menghasilkan stempel waktu epoch masa depan untuk TTL cache atau pengujian',
      'Mengubah penanda epoch berkas log menjadi waktu lokal yang bisa dibaca',
    ],
    faqs: [
      {
        question: 'Bagaimana mode Otomatis membedakan detik dan milidetik?',
        answer:
          'Nilai dengan magnitudo ≥ 100.000.000.000 (1e11, sekitar 1973 dalam milidetik atau tahun 5138 dalam detik) diperlakukan sebagai milidetik; nilai yang lebih kecil diperlakukan sebagai detik.',
      },
      {
        question: 'Apakah waktu Unix dipengaruhi zona waktu?',
        answer:
          'Tidak. Waktu epoch Unix selalu mengukur detik yang berlalu sejak 1970-01-01T00:00:00Z (UTC), terlepas dari zona waktu lokal Anda.',
      },
      {
        question: 'Bisakah saya mengubah stempel waktu sebelum 1970?',
        answer:
          'Ya. Masukkan stempel waktu Unix negatif (seperti -86400 untuk 31 Desember 1969) untuk memeriksa tanggal sebelum 1970.',
      },
      {
        question: 'Apa itu stempel waktu Unix?',
        answer:
          'Stempel waktu Unix, juga disebut waktu epoch, adalah jumlah detik yang telah berlalu sejak 1 Januari 1970 pukul 00:00:00 UTC. Ini adalah cara sederhana bagi komputer untuk menyimpan tanggal sebagai satu angka.',
      },
      {
        question: 'Apakah Konverter Stempel Waktu Unix gratis digunakan?',
        answer:
          'Ya. Konverter Stempel Waktu Unix sepenuhnya gratis tanpa pendaftaran dan tanpa batas penggunaan. Semua konversi berjalan secara lokal di browser Anda.',
      },
      {
        question: 'Apa perbedaan antara detik Unix dan milidetik Unix?',
        answer:
          'Detik Unix menghitung seluruh detik sejak 1970 dan biasanya panjangnya 10 digit, sedangkan milidetik menghitung seperseribu detik dan biasanya panjangnya 13 digit. Objek Date JavaScript menggunakan milidetik.',
      },
      {
        question: 'Berapa stempel waktu Unix saat ini?',
        answer:
          'Penghitung langsung di bagian atas alat ini berdetak setiap detik dan menampilkan waktu Unix saat ini dalam detik. Salin kapan pun Anda memerlukan nilai tepat untuk pengujian atau pencatatan.',
      },
      {
        question: 'Bagaimana cara mengubah stempel waktu Unix menjadi tanggal yang bisa dibaca?',
        answer:
          'Tempelkan angka epoch ke konverter dan alat ini menampilkan tanggal yang cocok dalam ISO 8601, UTC, RFC 2822, dan zona waktu lokal Anda, ditambah waktu relatif seperti 3 hari yang lalu.',
      },
      {
        question: 'Bagaimana cara mengubah tanggal menjadi stempel waktu Unix?',
        answer:
          'Gunakan pemilih tanggal dan waktu di panel bawah, lalu baca detik dan milidetik Unix yang tepat untuk tanggal yang Anda pilih dalam zona waktu lokal Anda.',
      },
      {
        question: 'Mengapa stempel waktu saya menampilkan tanggal pada 1970?',
        answer:
          'Anda mungkin memasukkan nilai milidetik sementara alat mengharapkan detik, atau angka yang sangat kecil. Nilai kecil berarti hanya beberapa detik setelah awal epoch 1970.',
      },
      {
        question: 'Mengapa stempel waktu saya menampilkan tanggal pada tahun 5000?',
        answer:
          'Anda mungkin memasukkan nilai detik sementara alat memperlakukannya sebagai milidetik, atau memasukkan milidetik di kolom detik. Ubah pemilih satuan ke satuan yang benar dan ubah lagi.',
      },
      {
        question: 'Apa format ISO 8601 untuk stempel waktu Unix?',
        answer:
          'ISO 8601 menulis tanggal sebagai YYYY-MM-DDTHH:MM:SS, misalnya 2026-11-13T04:40:00.000Z. Huruf Z di akhir berarti waktu tersebut dalam UTC.',
      },
      {
        question: 'Apakah stempel waktu Unix menyertakan detik kabisat?',
        answer:
          'Tidak. Waktu Unix menghitung setiap hari sebagai tepat 86.400 detik dan mengabaikan detik kabisat, sehingga melenceng sedikit dari waktu astronomis sebenarnya selama periode panjang.',
      },
      {
        question: 'Bisakah saya menggunakan stempel waktu Unix untuk tanggal masa depan?',
        answer:
          'Ya. Masukkan tanggal masa depan di pemilih tanggal untuk mendapatkan stempel waktu Unix-nya, yang berguna untuk mengatur waktu kedaluwarsa cache, pekerjaan terjadwal, dan data pengujian.',
      },
      {
        question: 'Berapa stempel waktu Unix maksimum?',
        answer:
          'Pada sistem 32-bit, batas klasik adalah 2.147.483.647 detik, yaitu 19 Januari 2038. Sistem 64-bit modern menangani nilai yang jauh lebih besar, dan alat ini menerimanya.',
      },
      {
        question: 'Bagaimana cara memeriksa stempel waktu kedaluwarsa JWT dengan konverter ini?',
        answer:
          'Salin klaim exp dari JWT yang Anda decode dan tempelkan di sini. Konverter menampilkan tanggal dan waktu UTC yang tepat saat token kedaluwarsa.',
      },
      {
        question: 'Apakah Konverter Stempel Waktu Unix berfungsi offline?',
        answer:
          'Ya, setelah halaman dimuat. Konversi adalah aritmetika sederhana di browser Anda, dan jam langsung membaca waktu sistem Anda, sehingga tidak diperlukan koneksi jaringan.',
      },
      {
        question: 'Apa perbedaan antara UTC dan waktu lokal dalam hasil?',
        answer:
          'UTC adalah waktu referensi universal tanpa offset, sedangkan waktu lokal menerapkan offset zona waktu Anda. Keduanya menggambarkan saat yang sama, hanya ditampilkan dalam zona yang berbeda.',
      },
      {
        question: 'Bisakah saya mengubah stempel waktu Unix dari basis data atau berkas log?',
        answer:
          'Ya. Salin stempel waktu bilangan bulat dari baris basis data atau baris log Anda dan tempelkan di sini untuk melihat tanggal yang bisa dibaca manusia, yang membuat debugging jauh lebih cepat.',
      },
      {
        question: 'Apakah data stempel waktu saya dikirim ke server?',
        answer:
          'Tidak. Konversi dilakukan sepenuhnya di browser Anda, sehingga stempel waktu dan tanggal yang Anda masukkan tidak pernah keluar dari perangkat Anda.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel kueri SQL Anda',
        description:
          'Masukkan kueri SELECT, INSERT, UPDATE, DELETE, atau DDL apa pun ke Kueri SQL Mentah, termasuk pernyataan multi-baris atau satu baris.',
      },
      {
        title: 'Pilih mode Percantik atau Minify',
        description:
          'Pilih Percantik untuk mengembangkan kueri menjadi klausa berindentasi yang mudah dibaca, atau Minify untuk menggabungkannya menjadi satu baris untuk log dan kode.',
      },
      {
        title: 'Atur huruf kata kunci dan indentasi',
        description:
          'Pilih kata kunci SQL HURUF BESAR atau huruf kecil dan pilih indentasi 2 spasi atau 4 spasi agar sesuai dengan panduan gaya tim Anda.',
      },
      {
        title: 'Tinjau keluaran yang diformat',
        description:
          'Periksa apakah jeda klausa, JOIN, dan subkueri sejajar seperti yang diharapkan dan apakah string serta komentar tidak tersentuh.',
      },
      {
        title: 'Salin atau gunakan kembali SQL yang diformat',
        description:
          'Gunakan Salin SQL untuk memindahkan kueri yang sudah distandarkan kembali ke editor, berkas migrasi, atau pull request Anda.',
      },
      {
        title: 'Perbaiki masalah pemformatan',
        description:
          'Jika keluaran tampak salah, periksa tanda kutip yang tidak seimbang atau titik koma yang hilang dalam masukan Anda, lalu tempel ulang dan format lagi.',
      },
    ],
    examples: [
      {
        title: 'Memformat kueri multi-join',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Memecah klausa SQL utama ke baris khusus dan menormalkan huruf kata kunci.',
      },
      {
        title: 'Mem-minify kueri menjadi satu baris',
        input: 'SELECT id\nFROM users;',
        output: 'SELECT id FROM users;',
        explanation: 'Menggabungkan kueri multi-baris menjadi satu baris ringkas untuk log atau skrip CLI.',
      },
    ],
    benefits: [
      'Mempertahankan literal string bertanda kutip tunggal dan komentar SQL tanpa disentuh',
      'Mendukung klausa multi-kata seperti LEFT OUTER JOIN, GROUP BY, dan ORDER BY',
      'Beralih dengan mudah antara mode Percantik dan Minify',
      'Berjalan secara lokal sehingga nama tabel dan skema milik sendiri tetap privat',
    ],
    useCases: [
      'Membersihkan log SQL yang dihasilkan ORM untuk debugging performa',
      'Menstandarkan skrip SQL sebelum tinjauan pull-request',
      'Memadatkan kueri multi-baris menjadi string satu baris untuk skrip CLI',
      'Menyelaraskan huruf kata kunci di seluruh panduan gaya SQL tim',
    ],
    faqs: [
      {
        question: 'Apakah Pemformat SQL mengubah nama tabel atau teks di dalam tanda kutip?',
        answer:
          'Tidak. Tokenizer mengisolasi literal string dan komentar sehingga pemformatan huruf besar/kecil kata kunci hanya berlaku pada kata kunci SQL yang dikenali.',
      },
      {
        question: 'Dialek SQL apa yang didukung?',
        answer:
          'Klausa SQL ANSI standar (PostgreSQL, MySQL, SQLite, SQL Server) termasuk SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE, dan DELETE didukung.',
      },
      {
        question: 'Bisakah saya mem-minify kueri yang diformat kembali menjadi satu baris?',
        answer:
          'Ya. Ubah tombol mode ke Minify untuk menghapus komentar dan menggabungkan spasi berlebih dengan aman.',
      },
      {
        question: 'Apakah Pemformat SQL gratis digunakan?',
        answer:
          'Ya. Pemformat SQL sepenuhnya gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Apakah Pemformat SQL mengirim kueri saya ke server?',
        answer:
          'Tidak. Semua pemformatan dilakukan secara lokal di browser Anda, sehingga nama tabel, detail skema, dan nilai data dalam kueri Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Bisakah saya memformat SQL dengan subkueri dan CTE?',
        answer:
          'Ya. Pernyataan SELECT bersarang dan common table expression (WITH ... AS) diformat dengan tingkat indentasi masing-masing sehingga strukturnya tetap mudah dibaca.',
      },
      {
        question: 'Apakah Pemformat SQL menangani pernyataan INSERT, UPDATE, dan DELETE?',
        answer:
          'Ya. Pernyataan INSERT, UPDATE, dan DELETE diformat bersama kueri SELECT, dengan klausanya dipecah ke baris terpisah.',
      },
      {
        question: 'Bisakah saya memformat pernyataan DDL seperti CREATE TABLE?',
        answer:
          'Ya. Pernyataan DDL seperti CREATE TABLE, ALTER TABLE, dan DROP TABLE bisa ditempel dan diformat dengan aturan huruf kata kunci dan indentasi yang sama.',
      },
      {
        question: 'Opsi indentasi apa yang ditawarkan Pemformat SQL?',
        answer:
          'Anda bisa memilih indentasi 2 spasi atau 4 spasi untuk kueri yang dipercantik, sehingga keluaran sesuai dengan editor atau panduan gaya tim Anda.',
      },
      {
        question: 'Apakah pemformatan mengubah apa yang dilakukan kueri SQL saya?',
        answer:
          'Tidak. Pemformatan hanya mengubah spasi dan huruf kata kunci; pemformatan tidak menambah, menghapus, atau menyusun ulang bagian logika kueri apa pun.',
      },
      {
        question: 'Bisakah saya memformat beberapa kueri SQL sekaligus?',
        answer:
          'Ya. Anda bisa menempelkan beberapa pernyataan yang dipisah titik koma dan memformatnya bersamaan dalam sekali jalan.',
      },
      {
        question: 'Apakah Pemformat SQL berfungsi dengan sintaks MySQL, PostgreSQL, dan SQL Server?',
        answer:
          'Ya. Alat ini menangani SQL ANSI standar yang digunakan MySQL, PostgreSQL, SQLite, dan SQL Server, termasuk kata kunci klausa umumnya.',
      },
      {
        question: 'Apakah komentar dalam SQL saya dipertahankan saat memformat?',
        answer:
          'Ya. Komentar satu baris dan blok dipertahankan oleh tokenizer, meskipun mode Minify menghapus komentar untuk menghasilkan keluaran terkecil.',
      },
      {
        question: 'Apa yang terjadi jika SQL saya memiliki kesalahan sintaks?',
        answer:
          'Pemformat tetap memproses teks sebaik mungkin, karena bekerja pada token, bukan mengeksekusi kueri, tetapi Anda harus memperbaiki kesalahan sebelum menjalankan SQL di basis data Anda.',
      },
      {
        question: 'Bisakah saya mem-minify SQL untuk digunakan dalam kode aplikasi atau log?',
        answer:
          'Ya. Mode Minify menggabungkan kueri menjadi satu baris sambil mempertahankan literal string, yang ideal untuk menyematkan SQL dalam kode atau mencatatnya secara ringkas.',
      },
      {
        question: 'Apakah Pemformat SQL mendukung fungsi window?',
        answer:
          'Ya. Fungsi window seperti ROW_NUMBER() OVER (PARTITION BY ...) diformat sebagai bagian dari daftar SELECT dengan klausa OVER-nya tetap utuh.',
      },
      {
        question: 'Apakah ada batas ukuran SQL yang bisa saya format?',
        answer:
          'Tidak ada batas karakter tetap dalam alat ini, karena berjalan di browser Anda, meskipun kueri yang sangat panjang mungkin membutuhkan waktu sejenak pada perangkat yang lebih lambat.',
      },
      {
        question: 'Bisakah saya menggunakan Pemformat SQL di ponsel saya?',
        answer:
          'Ya. Alat ini berfungsi di browser seluler modern mana pun, sehingga Anda bisa menempel dan memformat SQL di ponsel atau tablet Anda tanpa menginstal apa pun.',
      },
      {
        question: 'Apakah Pemformat SQL mempertahankan jeda baris di dalam literal string?',
        answer:
          'Ya. Teks di dalam literal string bertanda kutip tunggal dibiarkan tidak tersentuh, sehingga string multi-baris mempertahankan jeda baris aslinya.',
      },
      {
        question: 'Bagaimana cara menstandarkan huruf kata kunci di seluruh tim saya dengan Pemformat SQL?',
        answer:
          'Sepakati satu gaya huruf, seperti kata kunci HURUF BESAR, dan jalankan setiap kueri melalui pemformat dengan pengaturan itu sebelum memasukkannya ke repositori Anda.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih Minify atau Beautify',
        description:
          'Pilih Minify CSS untuk mengecilkan bobot berkas untuk produksi atau Beautify CSS untuk mengembalikan indentasi pada stylesheet yang terkompresi.',
      },
      {
        title: 'Tempel stylesheet Anda',
        description:
          'Masukkan aturan CSS, properti kustom, atau blok `@media` ke CSS Masukan, termasuk stylesheet lengkap atau cuplikan tunggal.',
      },
      {
        title: 'Jalankan alat dan periksa statistik',
        description:
          'Keluaran diperbarui saat Anda mengetik; dalam mode Minify, periksa byte masukan, byte keluaran, dan persentase yang dihemat secara tepat.',
      },
      {
        title: 'Tinjau keluaran dengan cermat',
        description:
          'Pastikan blok @media, string yang dikutip, dan nilai url(...) tetap utuh dan aturan bersarang berindentasi dengan benar dalam mode Beautify.',
      },
      {
        title: 'Salin atau unduh CSS',
        description:
          'Klik Salin CSS untuk menempelkan hasilnya ke stylesheet, blok <style> sebaris, atau langkah build deployment Anda.',
      },
      {
        title: 'Perbaiki keluaran yang datar atau rusak',
        description:
          'Jika keluaran Beautify tampak datar atau aturan menyatu, periksa kurung kurawal penutup yang hilang dalam masukan Anda dan tambahkan sebelum mencoba lagi.',
      },
    ],
    examples: [
      {
        title: 'Mengompresi aturan kartu',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Menghapus baris baru, spasi di sekitar tanda baca, dan titik koma terakhir di dalam blok.',
      },
      {
        title: 'Mempercantik CSS yang diminify',
        input: '.card{padding:16px}',
        output: '.card {\n  padding: 16px;\n}',
        explanation: 'Mengembangkan aturan satu baris menjadi blok berindentasi yang mudah dibaca.',
      },
    ],
    benefits: [
      'Tokenizer mempertahankan string yang dikutip (seperti content: "..." atau url(...))',
      'Menghapus komentar /* ... */ dan spasi yang tidak perlu dengan aman',
      'Menampilkan byte masukan, byte keluaran, dan persentase yang dihemat secara tepat',
      'Menyertakan mode Beautify untuk memeriksa CSS yang diminify dari pihak ketiga',
    ],
    useCases: [
      'Mengompresi cuplikan <style> sebaris untuk email HTML dan halaman arahan',
      'Membongkar bundle CSS produksi selama debugging visual',
      'Memeriksa penghematan bobot stylesheet sebelum deployment',
      'Membersihkan ketidakkonsistenan spasi dalam stylesheet lama',
    ],
    faqs: [
      {
        question: 'Apakah minifikasi CSS merusak spasi di dalam string content: "..."?',
        answer:
          'Tidak. Literal string bertanda kutip tunggal dan ganda dipertahankan kata demi kata oleh tokenizer.',
      },
      {
        question: 'Mengapa Minify menghapus titik koma terakhir sebelum "}"?',
        answer:
          'Dalam sintaks CSS, deklarasi terakhir sebelum kurung kurawal penutup tidak memerlukan titik koma di akhir, sehingga menghemat 1 byte per blok aturan.',
      },
      {
        question: 'Apakah alat ini mendukung blok @media bersarang dalam mode Beautify?',
        answer:
          'Ya. Kedalaman kurung kurawal dilacak di seluruh blok @media dan @supports sehingga aturan di dalamnya berindentasi dengan benar.',
      },
      {
        question: 'Apakah Minifier CSS gratis digunakan?',
        answer:
          'Ya. Minifier CSS sepenuhnya gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Apakah Minifier CSS mengunggah stylesheet saya ke mana pun?',
        answer:
          'Tidak. Semua minifikasi dan beautify dilakukan secara lokal di browser Anda, sehingga CSS Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Seberapa kecil CSS saya setelah di-minify?',
        answer:
          'Tergantung berapa banyak komentar dan spasi berlebih yang ada dalam stylesheet Anda; alat ini menampilkan jumlah byte dan persentase yang dihemat secara tepat untuk masukan Anda.',
      },
      {
        question: 'Apakah minifikasi CSS menghapus kueri @media?',
        answer:
          'Tidak. Kueri @media dan kondisinya dipertahankan persis, karena menghapusnya akan mengubah cara halaman Anda merespons ukuran layar.',
      },
      {
        question: 'Bisakah saya mem-minify CSS yang menggunakan properti kustom (variabel)?',
        answer:
          'Ya. Properti kustom seperti --brand-color dan referensi var()-nya diperlakukan sebagai deklarasi biasa dan dipertahankan utuh.',
      },
      {
        question: 'Apakah Minifier CSS mempertahankan url(...) dan string content?',
        answer:
          'Ya. String yang dikutip di dalam url(...) dan properti content dipertahankan kata demi kata, sehingga jalur gambar dan teks yang dihasilkan tetap benar.',
      },
      {
        question: 'Apakah CSS yang diminify tetap berfungsi di semua browser?',
        answer:
          'Ya. Minifikasi hanya menghapus komentar dan spasi yang tidak perlu, yang memang diabaikan browser, sehingga hasil rendernya identik.',
      },
      {
        question: 'Bisakah saya mempercantik CSS dari bundle produksi?',
        answer:
          'Ya. Tempelkan stylesheet yang diminify ke mode Beautify untuk mengembangkannya menjadi aturan berindentasi yang mudah dibaca untuk debugging.',
      },
      {
        question: 'Apakah Minifier CSS menangani @keyframes dan @font-face?',
        answer:
          'Ya. At-rule seperti @keyframes, @font-face, dan @import dipertahankan, dengan blok dalamnya berindentasi dengan benar dalam mode Beautify.',
      },
      {
        question: 'Apa perbedaan antara minify dan beautify dalam Minifier CSS?',
        answer:
          'Minify mengecilkan CSS dengan menghapus komentar dan spasi untuk produksi, sedangkan Beautify mengembangkan CSS yang terkompresi menjadi aturan berindentasi yang mudah dibaca untuk pengeditan dan debugging.',
      },
      {
        question: 'Bisakah saya mem-minify beberapa stylesheet sekaligus?',
        answer:
          'Ya. Anda bisa menempelkan beberapa stylesheet bersamaan ke satu masukan, meskipun menjaga berkas terkait tetap terpisah membuat keluaran lebih mudah dikelola.',
      },
      {
        question: 'Apakah Minifier CSS menghapus aturan CSS yang tidak digunakan?',
        answer:
          'Tidak. Alat ini hanya menghapus komentar dan spasi; alat ini tidak menganalisis selektor mana yang digunakan HTML Anda, sehingga aturan yang tidak digunakan tetap ada dalam keluaran.',
      },
      {
        question: 'Apakah persentase penghematan byte yang ditampilkan Minifier CSS tepat?',
        answer:
          'Ya. Persentase dihitung dari jumlah byte aktual masukan dan keluaran Anda, sehingga persentase mencerminkan penghematan nyata Anda.',
      },
      {
        question: 'Bisakah saya menggunakan Minifier CSS untuk cuplikan <style> sebaris?',
        answer:
          'Ya. Cuplikan kecil di-minify dengan cara yang sama seperti stylesheet lengkap, yang berguna untuk email HTML dan halaman arahan dengan gaya sebaris.',
      },
      {
        question: 'Apakah Minifier CSS mendukung CSS modern seperti grid dan nesting?',
        answer:
          'Ya. Properti modern seperti grid dan flexbox diteruskan tanpa perubahan, dan aturan bersarang diindentasi berdasarkan kedalaman kurung kurawal dalam mode Beautify.',
      },
      {
        question: 'Apa yang terjadi jika CSS saya memiliki kesalahan sintaks?',
        answer:
          'Alat ini tetap memproses teks, tetapi kurung kurawal yang hilang atau string yang tidak tertutup bisa mengacaukan keluaran, jadi perbaiki kesalahan sintaks sebelum mem-minify untuk produksi.',
      },
      {
        question: 'Bisakah saya mem-minify CSS di ponsel saya?',
        answer:
          'Ya. Minifier CSS berfungsi di browser seluler modern mana pun, sehingga Anda bisa menempel dan mem-minify stylesheet tanpa menginstal apa pun.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih Minify JS atau Beautify JS',
        description:
          'Pilih Minify JS untuk menghapus komentar dan spasi demi keluaran yang ringkas, atau Beautify JS dengan 2 atau 4 spasi untuk mengembalikan indentasi yang mudah dibaca.',
      },
      {
        title: 'Tempel cuplikan kode Anda',
        description:
          'Masukkan kode JavaScript atau TypeScript ke editor kiri, dari satu fungsi hingga blok skrip lengkap.',
      },
      {
        title: 'Atur indentasi untuk mode Beautify',
        description:
          'Pilih indentasi 2 spasi atau 4 spasi agar kode yang dipercantik sesuai dengan editor atau gaya proyek Anda.',
      },
      {
        title: 'Tinjau penghematan byte dan keluaran',
        description:
          'Verifikasi pengurangan byte dalam mode Minify dan pindai keluaran untuk memastikan string, template literal, dan pola regex tetap utuh.',
      },
      {
        title: 'Salin kode yang diproses',
        description:
          'Gunakan tombol salin untuk memindahkan kode yang diminify atau dipercantik ke editor, bookmarklet, atau skrip sebaris Anda.',
      },
      {
        title: 'Perbaiki masalah minifikasi',
        description:
          'Jika kode yang diminify berperilaku aneh, tambahkan titik koma yang hilang ke masukan Anda terlebih dahulu, karena penyisipan titik koma otomatis bisa ambigu setelah spasi dihapus.',
      },
    ],
    examples: [
      {
        title: 'Menghapus komentar dan spasi',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Menghapus komentar dan spasi di sekitar kurung kurawal tanpa menyentuh logika.',
      },
      {
        title: 'Mempercantik kode yang ringkas',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: 'Mengembangkan kode satu baris menjadi fungsi berindentasi yang mudah dibaca.',
      },
    ],
    benefits: [
      'Tokenizer leksikal melindungi string bertanda kutip tunggal, ganda, dan template backtick',
      'Menghapus komentar // satu baris dan /* */ blok dalam mode Minify',
      'Melaporkan persentase pengurangan byte secara langsung',
      'Eksekusi cepat hanya di browser tanpa kode yang dikirim ke luar',
    ],
    useCases: [
      'Menyiapkan skrip sebaris atau bookmarklet yang ringkas',
      'Membongkar cuplikan satu baris yang terkompresi agar mudah dibaca',
      'Menghapus komentar pengembang sebelum membagikan contoh kode',
      'Mengindentasi ulang fungsi JS yang ditempel dengan cepat',
    ],
    faqs: [
      {
        question: 'Apakah alat ini mengganti nama variabel (mangle) seperti Terser atau esbuild?',
        answer:
          'Tidak. Alat ini hanya melakukan minifikasi spasi dan komentar yang aman tanpa mengganti nama pengenal atau mengubah semantik AST, sehingga keluarannya mudah diperiksa.',
      },
      {
        question: 'Apakah literal string yang berisi "//" (seperti URL) aman?',
        answer:
          'Ya. String yang dikutip dan template literal di-tokenisasi sebelum deteksi komentar sehingga URL di dalam tanda kutip tidak pernah diperlakukan sebagai komentar.',
      },
      {
        question: 'Haruskah saya menggunakan titik koma saat mem-minify JS multi-pernyataan?',
        answer:
          'Menyertakan titik koma standar disarankan sebelum mem-minify cuplikan JavaScript apa pun untuk menghindari ambiguitas ASI (Automatic Semicolon Insertion).',
      },
      {
        question: 'Apakah Minifier JavaScript gratis digunakan?',
        answer:
          'Ya. Minifier JavaScript sepenuhnya gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Apakah Minifier JavaScript mengunggah kode saya ke server?',
        answer:
          'Tidak. Semua minifikasi dan pemformatan dilakukan secara lokal di browser Anda, sehingga kode Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apakah Minifier JavaScript berfungsi dengan kode TypeScript?',
        answer:
          'Ya. Cuplikan TypeScript bisa ditempel dan di-minify atau dipercantik dengan cara yang sama, karena tokenizer menangani sintaks JS dan TS standar.',
      },
      {
        question: 'Apakah minifikasi akan merusak JavaScript saya?',
        answer:
          'Tidak, selama kode Anda menggunakan titik koma standar. Hanya komentar dan spasi berlebih yang dihapus, sehingga logikanya tetap identik.',
      },
      {
        question: 'Apakah Minifier JavaScript menghapus pernyataan console.log?',
        answer:
          'Tidak. Alat ini hanya menghapus komentar dan spasi, sehingga panggilan console.log dan pernyataan lain tetap ada dalam keluaran.',
      },
      {
        question: 'Bisakah saya mempercantik kode yang diminify dari bundle produksi?',
        answer:
          'Ya. Tempelkan kode satu baris yang ringkas ke mode Beautify untuk mengindentasi ulang menjadi baris yang mudah dibaca untuk debugging.',
      },
      {
        question: 'Apakah Minifier JavaScript menangani template literal dengan ekspresi ${}?',
        answer:
          'Ya. Template literal backtick, termasuk interpolasi ${}, di-tokenisasi sebagai string dan dipertahankan persis.',
      },
      {
        question: 'Apa perbedaan antara minify dan beautify dalam Minifier JavaScript?',
        answer:
          'Minify menghapus komentar dan spasi untuk mengecilkan kode bagi penggunaan sebaris, sedangkan Beautify mengindentasi ulang kode ringkas menjadi baris yang mudah dibaca untuk pengeditan.',
      },
      {
        question: 'Bisakah saya mem-minify kode ES6 dengan arrow function dan class?',
        answer:
          'Ya. Arrow function, class, destructuring, dan sintaks ES6 modern lainnya ditangani oleh tokenizer tanpa mengubah kode.',
      },
      {
        question: 'Apakah Minifier JavaScript mendukung kode JSX atau React?',
        answer:
          'JSX tidak didukung secara khusus, karena kurung sudut dalam JSX bisa salah dibaca oleh tokenizer. Gunakan untuk JavaScript atau TypeScript biasa dan pemformat khusus untuk JSX.',
      },
      {
        question: 'Seberapa kecil JavaScript saya setelah di-minify?',
        answer:
          'Tergantung berapa banyak komentar dan jeda baris yang dimiliki kode Anda; alat ini menampilkan jumlah byte dan persentase yang dihemat secara tepat untuk cuplikan Anda.',
      },
      {
        question: 'Bisakah saya mem-minify beberapa berkas JavaScript sekaligus?',
        answer:
          'Alat ini memproses satu cuplikan dalam satu waktu, jadi tempelkan setiap berkas secara terpisah. Untuk proyek utuh, gunakan bundler seperti esbuild atau Terser sebagai gantinya.',
      },
      {
        question: 'Apakah Minifier JavaScript mempertahankan ekspresi reguler?',
        answer:
          'Ya. Literal ekspresi reguler dikenali oleh tokenizer dan dipertahankan utuh, termasuk karakter // apa pun di dalam polanya.',
      },
      {
        question: 'Apa yang terjadi jika JavaScript saya memiliki kesalahan sintaks?',
        answer:
          'Alat ini tetap memproses teks, tetapi kurung kurawal yang tidak seimbang atau string yang tidak tertutup bisa menghasilkan keluaran yang aneh, jadi perbaiki kesalahan sintaks sebelum mem-minify.',
      },
      {
        question: 'Bisakah saya menggunakan Minifier JavaScript untuk bookmarklet?',
        answer:
          'Ya. Mode Minify ideal untuk bookmarklet, karena menggabungkan cuplikan menjadi satu baris ringkas yang bisa Anda tempelkan ke URL bookmark.',
      },
      {
        question: 'Apakah keluaran yang diminify aman ditempel ke tag script HTML?',
        answer:
          'Umumnya ya, tetapi hindari urutan literal "</script>" di dalam string Anda, karena browser akan memperlakukannya sebagai akhir blok script.',
      },
      {
        question: 'Bisakah saya memformat JavaScript di ponsel saya?',
        answer:
          'Ya. Minifier JavaScript berfungsi di browser seluler modern mana pun, sehingga Anda bisa menempel dan memformat kode tanpa menginstal apa pun.',
      },
    ],
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
    instructions: [
      {
        title: 'Masukkan ekspresi cron 5 kolom atau pilih preset',
        description:
          'Ketik ekspresi cron apa pun seperti `0 9 * * 1-5` atau klik tombol preset jadwal umum untuk memulai dari pola yang dikenal.',
      },
      {
        title: 'Periksa ringkasan bahasa sederhana dan rincian kolom',
        description:
          'Verifikasi apakah kolom menit, jam, tanggal-bulan, bulan, dan hari-minggu sesuai dengan maksud Anda sebelum mempercayai jadwalnya.',
      },
      {
        title: 'Verifikasi 8 waktu jalan berikutnya',
        description:
          'Tinjau stempel waktu eksekusi lokal mendatang yang dihitung untuk memastikan tugas berjalan saat Anda mengharapkannya.',
      },
      {
        title: 'Sesuaikan kolom dengan langkah, rentang, dan daftar',
        description:
          'Sempurnakan jadwal menggunakan nilai langkah seperti */15, rentang seperti 1-5, atau daftar seperti 1,15, lalu periksa lagi ringkasan dan waktu jalannya.',
      },
      {
        title: 'Salin ekspresi untuk penjadwal Anda',
        description:
          'Salin ekspresi yang sudah diverifikasi ke crontab, alur kerja GitHub Actions, atau pemicu cron Cloudflare Worker Anda.',
      },
      {
        title: 'Waspadai tanggal-bulan vs hari-minggu',
        description:
          'Jika kedua kolom hari dibatasi, cron standar berjalan saat salah satu cocok. Gunakan * di salah satunya jika Anda hanya ingin satu kondisi berlaku.',
      },
    ],
    examples: [
      {
        title: 'Tugas pagi jam kerja',
        input: '0 9 * * 1-5',
        output: 'Pada 09:00, hari kerja 1-5 (Senin–Jumat).',
        explanation: 'Berjalan pada pukul 09:00 setiap Senin hingga Jumat.',
      },
      {
        title: 'Tugas setiap 15 menit',
        input: '*/15 * * * *',
        output: 'Setiap 15 menit.',
        explanation: 'Sintaks langkah */15 di kolom menit menjalankan tugas pada :00, :15, :30, dan :45.',
      },
    ],
    benefits: [
      'Mendukung wildcard (*), langkah (*/5), rentang (1-5), daftar (1,15), dan nama (SEN-JUM)',
      'Menghitung 8 stempel waktu eksekusi berikutnya yang konkret dalam zona waktu lokal Anda',
      'Menandai nilai di luar rentang atau kolom yang hilang dengan segera',
      'Menyertakan preset satu klik untuk interval umum',
    ],
    useCases: [
      'Memverifikasi `schedule.cron` GitHub Actions dan Cron Trigger Cloudflare Workers',
      'Men-debug jadwal cadangan atau pembersihan crontab Linux',
      'Memeriksa ulang logika hari-minggu (0–6) vs tanggal-bulan (1–31)',
      'Mendokumentasikan jadwal tugas berulang untuk runbook operasi',
    ],
    faqs: [
      {
        question: 'Apakah pengurai ini mendukung ekspresi cron 6 kolom dengan detik?',
        answer:
          'Alat ini mengurai ekspresi crontab Unix 5 kolom standar (menit, jam, tanggal-bulan, bulan, hari-minggu), yang digunakan Linux cron, GitHub Actions, dan Cloudflare Workers.',
      },
      {
        question: 'Apa yang terjadi jika Hari Bulan dan Hari Minggu sama-sama bukan wildcard?',
        answer:
          'Mengikuti perilaku cron Vixie/Unix standar, saat kedua kolom hari dibatasi, jalan dipicu jika Hari Bulan ATAU Hari Minggu cocok.',
      },
      {
        question: 'Apakah nama SEN–JUM dan JAN–DES didukung?',
        answer:
          'Ya. Singkatan bulan dan hari kerja 3 huruf bahasa Inggris standar serta angka 0 atau 7 untuk Minggu didukung.',
      },
      {
        question: 'Apakah Pengurai Ekspresi Cron gratis digunakan?',
        answer:
          'Ya. Pengurai Ekspresi Cron sepenuhnya gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Apa itu ekspresi cron?',
        answer:
          'Ekspresi cron adalah string jadwal 5 kolom yang ringkas yang memberi tahu sistem kapan menjalankan tugas secara otomatis, seperti setiap jam atau setiap hari kerja pukul 9 pagi.',
      },
      {
        question: 'Apa arti 5 kolom dalam ekspresi cron?',
        answer:
          'Dari kiri ke kanan, kolom tersebut adalah menit (0-59), jam (0-23), tanggal-bulan (1-31), bulan (1-12), dan hari-minggu (0-7, di mana 0 dan 7 sama-sama berarti Minggu).',
      },
      {
        question: 'Bagaimana cara menjalankan tugas cron setiap 5 menit?',
        answer:
          'Gunakan sintaks langkah di kolom menit: */5 * * * * menjalankan tugas setiap 5 menit, pada :00, :05, :10, dan seterusnya.',
      },
      {
        question: 'Bagaimana cara menjadwalkan tugas cron pukul 9 pagi pada hari kerja?',
        answer:
          'Gunakan 0 9 * * 1-5, yang berarti menit 0, jam 9, tanggal-bulan apa pun, bulan apa pun, dan hari kerja Senin hingga Jumat.',
      },
      {
        question: 'Apa arti */15 dalam ekspresi cron?',
        answer:
          'Sintaks langkah */15 berarti setiap 15 satuan kolom tersebut, jadi */15 di kolom menit menjalankan tugas setiap 15 menit.',
      },
      {
        question: 'Apa perbedaan antara 0 dan 7 untuk Minggu dalam cron?',
        answer:
          'Tidak ada perbedaan; 0 dan 7 sama-sama mewakili Minggu dalam kolom hari-minggu, jadi Anda bisa menggunakan mana pun yang Anda sukai.',
      },
      {
        question: 'Bisakah saya menggunakan Pengurai Ekspresi Cron ini untuk jadwal GitHub Actions?',
        answer:
          'Ya. GitHub Actions menggunakan sintaks cron 5 kolom yang sama, sehingga Anda bisa memverifikasi jadwal di sini sebelum menempelkannya ke berkas alur kerja Anda.',
      },
      {
        question: 'Apakah Pengurai Ekspresi Cron memperhitungkan zona waktu saya?',
        answer:
          '8 waktu jalan berikutnya ditampilkan dalam zona waktu browser lokal Anda, tetapi ingat bahwa cron sendiri berjalan dalam zona waktu server, jadi periksa juga pengaturan server Anda.',
      },
      {
        question: 'Apa yang terjadi jika saya memasukkan ekspresi cron yang tidak valid?',
        answer:
          'Pengurai menandai nilai di luar rentang atau kolom yang hilang dengan segera, sehingga Anda bisa memperbaiki ekspresi sebelum menerapkannya.',
      },
      {
        question: 'Bisakah saya menjadwalkan tugas cron untuk hari terakhir bulan?',
        answer:
          'Cron 5 kolom standar tidak memiliki sintaks hari terakhir. Solusi umum adalah menjadwalkan pada tanggal 28-31 dan membiarkan tugas itu sendiri memeriksa apakah hari itu hari terakhir.',
      },
      {
        question: 'Apa arti L dan W dalam ekspresi cron?',
        answer:
          'L (terakhir) dan W (hari kerja) adalah ekstensi gaya Quartz, bukan bagian dari cron Unix standar, sehingga tidak didukung oleh pengurai ini.',
      },
      {
        question: 'Bagaimana cara menjalankan tugas cron dua kali sehari?',
        answer:
          'Cantumkan kedua jam dalam kolom jam, misalnya 0 6,18 * * * menjalankan tugas pada pukul 6 pagi dan 6 sore setiap hari.',
      },
      {
        question: 'Apakah Pengurai Ekspresi Cron mendukung detik atau ekspresi 6 kolom?',
        answer:
          'Tidak. Alat ini hanya mendukung ekspresi Unix 5 kolom standar; penjadwal yang memerlukan detik menggunakan format 6 kolom yang berbeda.',
      },
      {
        question: 'Bisakah saya mempratinjau jalan cron untuk rentang tanggal tertentu?',
        answer:
          'Alat ini mempratinjau 8 waktu jalan mendatang berikutnya dari sekarang. Alat ini tidak menawarkan tampilan rentang tanggal kustom, tetapi 8 jalan berikutnya biasanya mengungkapkan kesalahan penjadwalan.',
      },
      {
        question: 'Mengapa tugas cron saya berjalan pada hari yang tidak terduga?',
        answer:
          'Penyebab paling umum adalah membatasi tanggal-bulan dan hari-minggu sekaligus, yang memicu jalan saat salah satu cocok. Atur salah satunya ke * untuk memperbaikinya.',
      },
      {
        question: 'Bisakah saya menggunakan preset cron untuk jadwal umum?',
        answer:
          'Ya. Alat ini menyertakan preset satu klik untuk interval umum seperti setiap jam, harian, mingguan, dan bulanan, yang kemudian bisa Anda sesuaikan.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih atau ketik warna',
        description:
          'Gunakan pemilih warna, masukkan kode HEX 3 atau 6 digit, atau sesuaikan saluran R/G/B atau H/S/L individual untuk mengatur warna latar depan Anda.',
      },
      {
        title: 'Tinjau nilai HEX, RGB, dan HSL',
        description:
          'Periksa nilai yang disinkronkan dalam ketiga notasi dan pastikan contoh warna langsung cocok dengan warna yang Anda maksud.',
      },
      {
        title: 'Salin nilai warna CSS',
        description:
          'Klik Salin HEX, Salin RGB, atau Salin HSL untuk mengambil string CSS yang siap dipakai untuk stylesheet atau token desain Anda.',
      },
      {
        title: 'Pilih warna latar belakang',
        description:
          'Pilih warna latar belakang di bawah untuk membandingkannya dengan warna latar depan Anda untuk pemeriksaan kontras.',
      },
      {
        title: 'Periksa hasil kontras WCAG',
        description:
          'Baca rasio kontras yang tepat dan status Lolos/Gagal untuk teks AA Normal, AAA Normal, dan AA Besar sebelum merilis pasangan tersebut.',
      },
      {
        title: 'Perbaiki pasangan kontras yang gagal',
        description:
          'Jika pasangan gagal, turunkan Lightness dalam HSL untuk menggelapkan teks (atau mencerahkan latar belakang) hingga rasionya mencapai setidaknya 4.5:1 untuk teks normal.',
      },
    ],
    examples: [
      {
        title: 'Biru kobalt yang mudah diakses pada putih',
        input: 'Latar depan: #2563EB · Latar belakang: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Kontras: 5.17:1 (AA Lolos)',
        explanation: 'Memenuhi syarat WCAG AA 4.5:1 untuk teks isi standar.',
      },
      {
        title: 'Kontras maksimum putih pada hitam',
        input: 'Latar depan: #FFFFFF · Latar belakang: #000000',
        output: 'RGB: rgb(255, 255, 255) · Kontras: 21:1 (AAA Lolos)',
        explanation: 'Putih pada hitam memberikan rasio kontras tertinggi yang mungkin.',
      },
    ],
    benefits: [
      'Menyinkronkan saluran HEX, RGB, dan HSL secara dua arah secara real time',
      'Kalkulator kontras luminance relatif WCAG 2.1 bawaan',
      'Menguji ambang AA Normal (4.5:1), AAA Normal (7.0:1), dan AA Besar (3.0:1)',
      'Salinan satu klik untuk string warna CSS yang valid',
    ],
    useCases: [
      'Memverifikasi kontras teks tombol dan tautan selama implementasi UI',
      'Mengubah palet HEX merek menjadi HSL untuk Tailwind atau variabel CSS',
      'Menyempurnakan lightness dan saturasi tanpa keluar dari browser',
      'Mengaudit kepatuhan aksesibilitas sebelum serah terima desain',
    ],
    faqs: [
      {
        question: 'Rasio kontras berapa yang diperlukan untuk teks isi WCAG 2.1 AA?',
        answer:
          'WCAG 2.1 AA memerlukan setidaknya 4.5:1 untuk teks normal dan 3.0:1 untuk teks besar (18pt / 24px reguler atau 14pt / 18.66px tebal).',
      },
      {
        question: 'Bisakah saya memasukkan kode HEX singkatan 3 digit seperti #09f?',
        answer:
          'Ya. Kode HEX tiga karakter diperluas secara otomatis menjadi padanan 6 karakternya.',
      },
      {
        question: 'Mengapa HSL membuat penyesuaian tema lebih mudah daripada RGB?',
        answer:
          'HSL memisahkan Hue, Saturation, dan Lightness, sehingga Anda bisa menggelapkan atau mencerahkan warna merek hanya dengan mengubah persentase Lightness.',
      },
      {
        question: 'Apakah Konverter Warna gratis digunakan?',
        answer:
          'Ya. Konverter Warna sepenuhnya gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda.',
      },
      {
        question: 'Apakah Konverter Warna menyimpan warna saya?',
        answer:
          'Tidak. Konversi dan pemeriksaan kontras dilakukan secara lokal di browser Anda, sehingga pilihan palet Anda tidak pernah diunggah atau disimpan.',
      },
      {
        question: 'Bagaimana cara mengubah HEX menjadi RGB dengan Konverter Warna?',
        answer:
          'Masukkan kode HEX seperti #2563EB dan nilai RGB muncul secara instan, siap disalin sebagai string CSS rgb().',
      },
      {
        question: 'Bagaimana cara mengubah RGB menjadi HSL?',
        answer:
          'Masukkan nilai RGB atau sesuaikan saluran R, G, dan B, dan nilai HSL yang cocok diperbarui secara langsung di panel yang sama.',
      },
      {
        question: 'Apa perbedaan antara HEX, RGB, dan HSL?',
        answer:
          'HEX adalah kode ringkas untuk sebuah warna, RGB mendefinisikannya berdasarkan jumlah merah, hijau, dan biru, dan HSL mendefinisikannya berdasarkan hue, saturasi, dan lightness. Ketiganya mendeskripsikan warna yang sama dalam notasi yang berbeda.',
      },
      {
        question: 'Rasio kontras berapa yang saya perlukan untuk WCAG AAA?',
        answer:
          'WCAG AAA memerlukan setidaknya 7.0:1 untuk teks normal dan 4.5:1 untuk teks besar, yang lebih ketat daripada level AA.',
      },
      {
        question: 'Apa yang dihitung sebagai teks besar untuk kontras WCAG?',
        answer:
          'Teks besar adalah 18pt (24px) atau lebih besar dengan bobot reguler, atau 14pt (18.66px) atau lebih besar dengan bobot tebal. Teks besar hanya memerlukan rasio 3.0:1 untuk AA.',
      },
      {
        question: 'Bisakah saya mengubah warna dengan transparansi (alpha) dalam Konverter Warna?',
        answer:
          'Konverter ini menangani warna solid tanpa saluran alpha. Untuk transparansi, ambil nilai RGB yang sudah diubah dan gunakan di dalam fungsi rgba().',
      },
      {
        question: 'Apakah Konverter Warna mendukung kode HEX 8 digit dengan alpha?',
        answer:
          'Tidak. Konverter menerima kode HEX 3 dan 6 digit standar; untuk transparansi, gunakan keluaran RGB dengan nilai alpha dalam rgba().',
      },
      {
        question: 'Bisakah saya mengambil warna dari gambar dengan Konverter Warna?',
        answer:
          'Tidak. Alat ini tidak mengambil sampel gambar; masukkan nilai HEX dari warna yang Anda inginkan atau pilih dengan pemilih warna bawaan.',
      },
      {
        question: 'Bagaimana rasio kontras WCAG dihitung?',
        answer:
          'Rasio dihitung dari luminance relatif warna latar depan dan latar belakang menggunakan formula yang didefinisikan dalam spesifikasi WCAG 2.1.',
      },
      {
        question: 'Mengapa warna merek saya gagal kontras AA pada putih?',
        answer:
          'Warna merek yang terang atau bernada menengah sering berada di bawah ambang 4.5:1 terhadap putih. Gelapkan warnanya atau gunakan hanya untuk teks besar dan elemen dekoratif.',
      },
      {
        question: 'Bisakah saya menyalin warna sebagai variabel CSS dari Konverter Warna?',
        answer:
          'Ya. Salin nilai HEX, RGB, atau HSL dan tempelkan ke properti kustom CSS, misalnya --brand: #2563EB, lalu rujuk dengan var(--brand).',
      },
      {
        question: 'Apa perbedaan antara HSL dan HSV?',
        answer:
          'HSL mendeskripsikan warna berdasarkan hue, saturasi, dan lightness, sedangkan HSV menggunakan hue, saturasi, dan value (kecerahan). HSL umumnya lebih mudah untuk membuat varian tema terang dan gelap yang mudah diakses.',
      },
      {
        question: 'Bisakah saya mengubah warna CSS bernama seperti "red" dalam Konverter Warna?',
        answer:
          'Masukkan nilai HEX untuk warna bernama tersebut, misalnya red adalah #FF0000. Alat ini menerima masukan HEX, RGB, dan HSL.',
      },
      {
        question: 'Bagaimana cara menemukan nuansa yang lebih gelap dari warna merek saya?',
        answer:
          'Ubah warna menjadi HSL, pertahankan hue dan saturasi yang sama, dan turunkan persentase Lightness hingga Anda mencapai nuansa yang diinginkan.',
      },
      {
        question: 'Bisakah saya menggunakan Konverter Warna di ponsel saya?',
        answer:
          'Ya. Konverter Warna berfungsi di browser seluler modern mana pun, sehingga Anda bisa mengubah warna dan memeriksa kontras tanpa menginstal apa pun.',
      },
    ],
  },
};
