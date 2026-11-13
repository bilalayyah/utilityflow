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
    instructions: [
      {
        title: 'Tempel atau ketik draf Anda',
        description:
          'Masukkan teks langsung ke editor atau klik Muat contoh untuk melihat bagaimana hitungan berubah.',
      },
      {
        title: 'Periksa total struktur secara langsung',
        description:
          'Lihat kata, karakter dengan dan tanpa spasi, kalimat, paragraf, serta estimasi waktu baca di bilah ringkasan.',
      },
      {
        title: 'Periksa waktu baca dan waktu bicara',
        description:
          'Lihat estimasi waktu baca pada 225 kata per menit dan waktu bicara pada 130 kata per menit agar Anda bisa mengatur tempo esai, pidato, dan naskah video sebelum diterbitkan.',
      },
      {
        title: 'Periksa kata yang berulang',
        description:
          'Lihat panel kata yang paling sering muncul untuk menemukan pengulangan yang tidak disengaja dan perketat pilihan kata Anda sebelum menyelesaikan draf.',
      },
      {
        title: 'Salin atau unduh teks Anda',
        description:
          'Gunakan tombol salin atau unduh cadangan .txt dari draf Anda setelah Anda puas dengan hasil hitungannya.',
      },
      {
        title: 'Atasi hitungan yang tampak salah',
        description:
          'Jika hitungan tampak keliru, periksa karakter tersembunyi atau baris kosong tambahan yang ikut tertempel; menghapus jeda baris berlebih biasanya memperbaiki total paragraf dan kalimat.',
      },
    ],
    examples: [
      {
        title: 'Pemeriksaan panjang pengantar blog',
        input: 'Situs web statis yang cepat mengurangi latensi server. Pembaca tetap tertarik saat teksnya ringkas.',
        output: '14 kata · 99 karakter · 2 kalimat · 4 dtk waktu baca',
        explanation:
          'Ideal untuk memeriksa tempo judul dan paragraf pembuka sebelum diterbitkan.',
      },
      {
        title: 'Verifikasi batas kata esai',
        input: 'Paragraf 1 (240 kata)\n\nParagraf 2 (255 kata)',
        output: '495 kata · 2 paragraf · 2 mnt 12 dtk waktu baca',
        explanation: 'Memastikan target 500 kata untuk beasiswa atau tugas dengan sisa yang cukup.',
      },
    ],
    benefits: [
      'Memperbarui hasil secara instan pada setiap ketikan di memori browser',
      'Menghitung waktu baca (225 kpm) dan waktu bicara (130 kpm)',
      'Menampilkan enam kata yang paling sering muncul untuk menangkap frasa berulang',
      'Mengekspor cadangan teks biasa langsung sebagai berkas .txt',
    ],
    useCases: [
      'Memenuhi target kata yang ketat untuk esai akademik dan pengajuan hibah',
      'Mengatur durasi pidato konferensi, naskah video, dan pengantar podcast',
      'Mengaudit draf artikel dan halaman arahan agar strukturnya ringkas',
      'Memeriksa panjang teks buletin sebelum kampanye dijadwalkan',
    ],
    faqs: [
      {
        question: 'Bagaimana Penghitung Kata menghitung waktu baca dan waktu bicara?',
        answer:
          'Waktu baca menggunakan kecepatan rata-rata membaca dalam hati orang dewasa, yaitu 225 kata per menit, sedangkan waktu bicara menggunakan kecepatan presentasi percakapan, yaitu 130 kata per menit.',
      },
      {
        question: 'Apakah kata berstrip dihitung sebagai satu kata atau dua kata?',
        answer:
          'Token yang dipisahkan spasi standar dihitung sebagai satu kata, sesuai dengan perilaku sebagian besar pengolah kata di desktop.',
      },
      {
        question: 'Apakah tulisan saya disimpan atau dikirim ke mana pun?',
        answer:
          'Tidak. Semua penghitungan berjalan secara lokal di dalam tab browser Anda, dan teks Anda hilang begitu Anda menghapus atau menutup halaman.',
      },
      {
        question: 'Apa perbedaan Penghitung Kata dan Penghitung Karakter?',
        answer:
          'Penghitung Kata berfokus pada total kata, paragraf, durasi bicara, dan kata yang paling sering diulang, sedangkan Penghitung Karakter menguraikan ukuran byte UTF-8 dan batas karakter media sosial serta SEO.',
      },
      {
        question: 'Apakah Penghitung Kata gratis digunakan?',
        answer:
          'Ya. Penghitung Kata sepenuhnya gratis tanpa pendaftaran, tanpa batas jumlah kata, dan tanpa perlu akun.',
      },
      {
        question: 'Apakah Penghitung Kata berfungsi offline?',
        answer:
          'Ya. Setelah halaman dimuat, semua penghitungan berjalan secara lokal di browser Anda, sehingga tetap berfungsi tanpa koneksi internet.',
      },
      {
        question: 'Bagaimana kalimat dihitung?',
        answer:
          'Kalimat dihitung pada tanda baca akhir kalimat seperti titik, tanda seru, dan tanda tanya, sehingga singkatan seperti Dr. dapat menambah satu kalimat.',
      },
      {
        question: 'Apa yang dihitung sebagai kata dalam Penghitung Kata?',
        answer:
          'Setiap rangkaian karakter yang dipisahkan spasi dihitung sebagai satu kata, termasuk angka, istilah berstrip, dan kata dengan apostrof.',
      },
      {
        question: 'Bisakah saya menghitung kata dalam berkas PDF atau dokumen Word?',
        answer:
          'Tidak secara langsung. Salin teks dari dokumen Anda lalu tempelkan ke Penghitung Kata untuk melihat hasil hitungannya secara instan.',
      },
      {
        question: 'Apakah Penghitung Kata menghitung karakter dengan spasi?',
        answer:
          'Ya. Alat ini menampilkan karakter dengan dan tanpa spasi, sehingga Anda bisa memeriksa batas yang menghitung dengan salah satu cara.',
      },
      {
        question: 'Seberapa akurat estimasi waktu baca?',
        answer:
          'Ini adalah estimasi berdasarkan kecepatan rata-rata membaca dalam hati, yaitu 225 kata per menit; pembaca lain bisa lebih cepat atau lebih lambat.',
      },
      {
        question: 'Estimasi waktu bicara didasarkan pada apa?',
        answer:
          'Waktu bicara menggunakan kecepatan presentasi percakapan, yaitu 130 kata per menit, yang cocok untuk pidato, naskah video, dan pengantar podcast.',
      },
      {
        question: 'Apakah Penghitung Kata menangani bahasa lain?',
        answer:
          'Ya. Alat ini menghitung kata yang dipisahkan spasi dalam bahasa apa pun, meskipun estimasi waktu baca dikalibrasi untuk teks berbahasa Inggris.',
      },
      {
        question: 'Bisakah saya memeriksa batas kata untuk esai atau tugas?',
        answer:
          'Ya. Tempelkan esai Anda dan bandingkan total kata secara langsung dengan target Anda; bilah ringkasan menampilkan hitungan tepat saat Anda mengedit.',
      },
      {
        question: 'Apakah Penghitung Kata menghitung angka sebagai kata?',
        answer:
          'Ya. Angka yang berdiri sendiri dan dipisahkan spasi dihitung sebagai kata, sama seperti kebanyakan pengolah kata di desktop.',
      },
      {
        question: 'Mengapa hitungan saya berbeda dari Microsoft Word atau Google Docs?',
        answer:
          'Setiap alat memisahkan kata berstrip, tanda hubung em, dan angka dengan cara yang sedikit berbeda, sehingga selisih kecil beberapa kata adalah hal yang wajar.',
      },
      {
        question: 'Untuk apa kata yang paling sering muncul ditampilkan?',
        answer:
          'Panel tersebut mencantumkan enam kata Anda yang paling sering diulang agar Anda bisa menemukan istilah yang terlalu sering dipakai dan memvariasikan kosakata sebelum menerbitkan.',
      },
      {
        question: 'Bisakah saya menghitung kata hanya dalam satu paragraf tertentu?',
        answer:
          'Ya. Tempelkan hanya paragraf tersebut ke editor dan total langsung akan mencerminkan hanya teks yang Anda masukkan.',
      },
      {
        question: 'Bisakah saya menggunakan Penghitung Kata untuk takarir media sosial?',
        answer:
          'Ya. Tempelkan takarir Anda untuk memeriksa total kata dan waktu bacanya, dan gunakan Penghitung Karakter jika Anda juga perlu memeriksa batas karakter.',
      },
      {
        question: 'Bisakah saya menggunakan Penghitung Kata di ponsel?',
        answer:
          'Ya. Alat ini berfungsi di browser seluler modern mana pun dengan hitungan langsung, waktu baca, dan pilihan salin yang sama.',
      },
    ],
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
    instructions: [
      {
        title: 'Masukkan atau tempel teks Anda',
        description:
          'Ketik judul meta, takarir media sosial, peringatan SMS, atau string kolom formulir ke dalam kotak teks.',
      },
      {
        title: 'Periksa metrik karakter dan byte',
        description:
          'Bandingkan total karakter dengan spasi, karakter tanpa spasi, huruf, angka, dan bobot byte UTF-8.',
      },
      {
        title: 'Verifikasi ambang batas platform',
        description:
          'Tinjau meter progres langsung untuk memastikan teks Anda sesuai dengan batas SEO, SMS, X, Instagram, atau LinkedIn.',
      },
      {
        title: 'Gunakan ukuran byte untuk batas teknis',
        description:
          'Periksa total byte UTF-8 saat memvalidasi kolom basis data, muatan API, atau kolom berkas yang membatasi berdasarkan byte, bukan karakter.',
      },
      {
        title: 'Bandingkan dengan dan tanpa spasi',
        description:
          'Beralih antara total dengan spasi dan tanpa spasi saat formulir atau platform hanya menghitung karakter non-spasi.',
      },
      {
        title: 'Atasi hitungan yang tampak salah',
        description:
          'Jika hitungan tampak keliru, periksa karakter tak terlihat seperti spasi di akhir atau jeda baris yang ikut tertempel, yang dihitung dalam total dengan spasi.',
      },
    ],
    examples: [
      {
        title: 'Pemeriksaan judul meta',
        input: 'Penghitung Kata – Hitung Kata, Kalimat & Waktu Baca',
        output: '51 / 60 karakter (tersisa 9)',
        explanation: 'Pas dengan nyaman di bawah jendela tampilan judul mesin pencari yang biasanya 60 karakter.',
      },
      {
        title: 'Pemeriksaan byte emoji multi-byte',
        input: 'Hari peluncuran 🚀',
        output: '18 unit kode UTF-16 · 20 byte UTF-8',
        explanation: 'Menunjukkan perbedaan ukuran byte yang tepat saat karakter non-ASCII disertakan.',
      },
    ],
    benefits: [
      'Melacak karakter dengan spasi dan jumlah karakter non-spasi',
      'Mengukur panjang byte UTF-8 yang tepat untuk batas kolom basis data dan muatan API',
      'Menyertakan indikator batas visual untuk tag SEO, SMS, X, Instagram, dan LinkedIn',
      'Tanpa unggahan ke server atau pencatatan karakter',
    ],
    useCases: [
      'Menulis tag judul dan meta description mesin pencari tanpa terpotong',
      'Menyusun notifikasi SMS dalam batas satu segmen 160 karakter',
      'Memvalidasi panjang kolom VARCHAR basis data dalam byte UTF-8',
      'Merangkai takarir media sosial yang ringkas sebelum bagian lipat',
    ],
    faqs: [
      {
        question: 'Mengapa byte UTF-8 terkadang lebih tinggi daripada jumlah karakter?',
        answer:
          'Karakter ASCII Inggris standar membutuhkan 1 byte per karakter dalam UTF-8, sedangkan karakter beraksen, aksara non-Latin, dan emoji membutuhkan 2 hingga 4 byte per karakter.',
      },
      {
        question: 'Apakah penghitung karakter menyertakan jeda baris?',
        answer:
          'Ya. Karakter baris baru dihitung dalam metrik "Dengan Spasi" dan dikecualikan dari metrik "Tanpa Spasi".',
      },
      {
        question: 'Apa yang terjadi jika saya melampaui bilah batas platform?',
        answer:
          'Indikator progres berubah menjadi merah dan menampilkan jumlah karakter yang melebihi batas, sehingga Anda tahu berapa banyak yang harus dipangkas.',
      },
      {
        question: 'Apakah Penghitung Karakter gratis digunakan?',
        answer:
          'Ya. Penghitung Karakter sepenuhnya gratis tanpa pendaftaran, tanpa batas karakter, dan tanpa perlu akun.',
      },
      {
        question: 'Apa perbedaan karakter dengan dan tanpa spasi?',
        answer:
          'Karakter dengan spasi mencakup setiap spasi di antara kata, sedangkan karakter tanpa spasi mengecualikannya, yang penting saat platform hanya menghitung karakter yang terlihat.',
      },
      {
        question: 'Apakah Penghitung Karakter menghitung emoji?',
        answer:
          'Ya. Setiap emoji dihitung sebagai karakter, dan karena sebagian besar emoji menggunakan beberapa byte UTF-8, total byte akan lebih tinggi daripada jumlah karakter.',
      },
      {
        question: 'Berapa banyak karakter yang bisa saya tempelkan ke Penghitung Karakter?',
        answer:
          'Tidak ada batas yang ditetapkan. Penghitungan berjalan sepenuhnya di browser Anda, sehingga dokumen yang sangat panjang pun diukur secara instan.',
      },
      {
        question: 'Berapa batas karakter judul meta SEO?',
        answer:
          'Mesin pencari biasanya menampilkan sekitar 50 hingga 60 karakter dari tag judul, jadi menjaga judul dalam rentang itu menghindari pemotongan di hasil pencarian.',
      },
      {
        question: 'Berapa batas karakter meta description?',
        answer:
          'Mesin pencari biasanya menampilkan sekitar 150 hingga 160 karakter dari meta description, jadi alat ini memantau progres Anda menuju rentang tersebut.',
      },
      {
        question: 'Berapa karakter yang muat dalam satu SMS?',
        answer:
          'Satu segmen SMS standar menampung 160 karakter dengan alfabet GSM dasar; pesan yang lebih panjang dibagi menjadi beberapa segmen.',
      },
      {
        question: 'Apakah Penghitung Karakter menghitung tab dan jeda baris?',
        answer:
          'Ya. Tab dan jeda baris dihitung dalam total dengan spasi, sehingga teks yang ditempel dengan baris kosong tambahan akan menunjukkan jumlah yang lebih tinggi.',
      },
      {
        question: 'Apakah Penghitung Karakter menyertakan tanda baca dalam hitungan?',
        answer:
          'Ya. Tanda baca dihitung sebagai karakter, dan disertakan dalam total dengan spasi maupun tanpa spasi.',
      },
      {
        question: 'Batas karakter apa yang digunakan X (Twitter)?',
        answer:
          'Postingan X dibatasi 280 karakter untuk sebagian besar akun, dan bilah batas di alat ini menunjukkan progres Anda menuju ambang tersebut.',
      },
      {
        question: 'Bisakah saya memeriksa panjang takarir Instagram?',
        answer:
          'Ya. Tempelkan takarir Anda dan perhatikan meter batas Instagram; takarir dibatasi hingga 2.200 karakter.',
      },
      {
        question: 'Apakah Penghitung Karakter berfungsi dengan teks non-Inggris?',
        answer:
          'Ya. Alat ini menghitung karakter dalam aksara apa pun, dan total byte UTF-8 menunjukkan ukuran penyimpanan sebenarnya untuk huruf beraksen dan karakter non-Latin.',
      },
      {
        question: 'Bisakah saya menggunakan Penghitung Karakter untuk postingan LinkedIn?',
        answer:
          'Ya. Tempelkan postingan Anda dan periksa meter batas LinkedIn, yang memantau batas postingan 3.000 karakter.',
      },
      {
        question: 'Apakah Penghitung Karakter menyimpan atau mengunggah teks saya?',
        answer:
          'Tidak. Semua penghitungan dilakukan secara lokal di browser Anda, dan teks Anda tidak pernah diunggah, disimpan, atau dibagikan.',
      },
      {
        question: 'Mengapa hitungan saya berbeda dari Microsoft Word?',
        answer:
          'Setiap alat memperlakukan jeda baris, tab, dan karakter pemformatan tersembunyi secara berbeda, sehingga perbedaan kecil antar penghitung adalah hal yang wajar.',
      },
      {
        question: 'Apa yang dihitung sebagai huruf dan apa yang dihitung sebagai angka?',
        answer:
          'Huruf adalah karakter alfabet dalam aksara apa pun, sedangkan angka adalah karakter numerik dari 0 hingga 9; keduanya ditampilkan sebagai total terpisah.',
      },
      {
        question: 'Bisakah saya memeriksa jumlah karakter untuk kolom kata sandi atau nama pengguna?',
        answer:
          'Ya. Tempelkan nilai tersebut ke alat ini untuk memastikan nilai tersebut memenuhi syarat panjang minimum atau maksimum sebelum mengirim formulir.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel atau ketik teks Anda',
        description:
          'Masukkan judul, paragraf, atau string pengenal ke dalam editor.',
      },
      {
        title: 'Pilih gaya huruf',
        description:
          'Klik tombol transformasi apa pun—seperti Title Case, Sentence case, camelCase, atau snake_case—untuk memperbarui teks secara langsung.',
      },
      {
        title: 'Salin hasil yang diformat',
        description:
          'Gunakan tombol Salin hasil untuk memindahkan teks yang sudah diubah ke papan klip Anda.',
      },
      {
        title: 'Perbaiki teks HURUF BESAR dalam satu klik',
        description:
          'Tempelkan teks yang terketik dengan Caps Lock menyala dan pilih Sentence case untuk mengembalikan kapitalisasi normal di setiap kalimat.',
      },
      {
        title: 'Ubah pengenal untuk kode',
        description:
          'Tempelkan label biasa seperti "status akun pengguna" dan pilih camelCase, PascalCase, snake_case, atau kebab-case untuk mendapatkan nama variabel yang siap dipakai.',
      },
      {
        title: 'Atasi kapitalisasi yang aneh',
        description:
          'Jika Title Case membiarkan sebuah kata tetap huruf kecil, kemungkinan kata itu adalah kata kecil seperti "dan" atau "dari"; ketik ulang atau terapkan Huruf Besar pada kata itu saja.',
      },
    ],
    examples: [
      {
        title: 'Memperbaiki prosa huruf besar yang tidak disengaja',
        input: 'LAPORAN INI MERINGKAS HASIL Q4. SEMUA METRIK SUDAH FINAL.',
        output: 'Laporan ini meringkas hasil q4. Semua metrik sudah final.',
        explanation: 'Sentence case menurunkan semua huruf dan mengapitalisasi awal setiap kalimat.',
      },
      {
        title: 'Memformat pengenal kode',
        input: 'status penagihan akun pengguna',
        output: 'statusPenagihanAkunPengguna (camelCase) / status_penagihan_akun_pengguna (snake_case)',
        explanation: 'Mengubah label bahasa Indonesia biasa langsung menjadi konvensi pemrograman standar.',
      },
    ],
    benefits: [
      'Mendukung 10 format huruf untuk prosa dan pengembang dalam satu tempat',
      'Title Case yang cerdas menjaga preposisi dan konjungsi kecil tetap huruf kecil',
      'Menangani paragraf multi-kalimat dan jeda baris dengan rapi',
      'Berjalan secara lokal di browser Anda dengan salinan satu klik yang instan',
    ],
    useCases: [
      'Mengubah email HURUF BESAR yang tidak sengaja terketik kembali ke Sentence case',
      'Memformat judul blog dan judul YouTube secara konsisten',
      'Mengganti nama kolom basis data, kelas CSS, atau variabel JavaScript',
      'Menormalkan header spreadsheet sebelum mengimpor berkas CSV',
    ],
    faqs: [
      {
        question: 'Bagaimana Title Case menangani kata pendek seperti "dan" atau "dari"?',
        answer:
          'Pemformat Title Case mengapitalisasi kata pertama dan terakhir dari judul sambil menjaga artikel, konjungsi, dan preposisi pendek standar (seperti a, an, dan, dari, di, ke) tetap huruf kecil.',
      },
      {
        question: 'Bisakah saya mengubah pengenal snake_case atau camelCase yang sudah ada ke format lain?',
        answer:
          'Ya. Batas kata pada garis bawah, strip, dan transisi camelCase dipisahkan secara otomatis sebelum aturan huruf baru diterapkan.',
      },
      {
        question: 'Apakah Sentence case mempertahankan beberapa paragraf?',
        answer:
          'Ya. Kapitalisasi diatur ulang di awal teks, setelah tanda baca akhir kalimat, dan di awal baris baru.',
      },
      {
        question: 'Apakah Pengubah Huruf gratis digunakan?',
        answer:
          'Ya. Pengubah Huruf sepenuhnya gratis tanpa pendaftaran, tanpa batas panjang teks, dan tanpa perlu akun.',
      },
      {
        question: 'Apa perbedaan Title Case dan Sentence case?',
        answer:
          'Title Case mengapitalisasi sebagian besar kata dalam judul, sedangkan Sentence case hanya mengapitalisasi kata pertama setiap kalimat dan nama diri, seperti kalimat biasa.',
      },
      {
        question: 'Untuk apa camelCase digunakan?',
        answer:
          'camelCase adalah gaya penamaan standar untuk variabel dan fungsi dalam JavaScript dan banyak bahasa pemrograman lain, misalnya statusAkunPengguna.',
      },
      {
        question: 'Untuk apa snake_case digunakan?',
        answer:
          'snake_case memisahkan kata dengan garis bawah dan umum digunakan untuk variabel Python, kolom basis data, dan nama berkas, misalnya status_akun_pengguna.',
      },
      {
        question: 'Untuk apa kebab-case digunakan?',
        answer:
          'kebab-case memisahkan kata dengan strip dan umum digunakan untuk URL, nama kelas CSS, dan atribut HTML, misalnya status-akun-pengguna.',
      },
      {
        question: 'Untuk apa PascalCase digunakan?',
        answer:
          'PascalCase mengapitalisasi setiap kata tanpa pemisah dan umum digunakan untuk nama kelas dan nama komponen, misalnya StatusAkunPengguna.',
      },
      {
        question: 'Bisakah Pengubah Huruf memperbaiki teks yang terketik HURUF BESAR SEMUA?',
        answer:
          'Ya. Tempelkan teks huruf besar tersebut dan pilih Sentence case atau huruf kecil untuk mengembalikan kapitalisasi normal dalam satu klik.',
      },
      {
        question: 'Apakah Pengubah Huruf berfungsi dengan angka dan simbol?',
        answer:
          'Ya. Angka, tanda baca, dan simbol diteruskan tanpa perubahan; hanya huruf yang diubah.',
      },
      {
        question: 'Bisakah saya mengubah satu paragraf utuh sekaligus?',
        answer:
          'Ya. Tempelkan seluruh paragraf dan pengubah menerapkan huruf yang dipilih ke semua kalimat dan jeda barisnya.',
      },
      {
        question: 'Apakah Title Case mengapitalisasi kata setelah titik dua?',
        answer:
          'Kata setelah titik dua diperlakukan seperti kata lain dalam judul, jadi kata utama dikapitalisasi dan kata kecil tetap huruf kecil.',
      },
      {
        question: 'Apakah Pengubah Huruf menangani bahasa lain?',
        answer:
          'Ya. Alat ini mengubah huruf dalam bahasa apa pun yang menggunakan bentuk huruf besar dan huruf kecil, meskipun aturan kata kecil Title Case didasarkan pada bahasa Inggris.',
      },
      {
        question: 'Bisakah saya mengubah snake_case kembali menjadi kata biasa?',
        answer:
          'Ya. Tempelkan pengenal tersebut dan pilih Sentence case atau Title Case; garis bawah diperlakukan sebagai pemisah kata dan diganti dengan spasi.',
      },
      {
        question: 'Apa yang terjadi pada jeda baris saat saya mengubah huruf?',
        answer:
          'Jeda baris dipertahankan persis seperti semula, sehingga teks multi-baris tetap mempertahankan strukturnya setelah diubah.',
      },
      {
        question: 'Apakah Pengubah Huruf menyimpan atau mengunggah teks saya?',
        answer:
          'Tidak. Pengubahan berjalan secara lokal di browser Anda, dan teks Anda tidak pernah diunggah, disimpan, atau dibagikan.',
      },
      {
        question: 'Bisakah saya mengubah teks yang sudah memiliki huruf campuran?',
        answer:
          'Ya. Pengubah terlebih dahulu memisahkan kata pada garis bawah, strip, dan transisi huruf, sehingga masukan huruf campuran diubah dengan rapi.',
      },
      {
        question: 'Bisakah saya menggunakan Pengubah Huruf untuk judul YouTube?',
        answer:
          'Ya. Tempelkan judul video Anda dan terapkan Title Case untuk gaya judul yang konsisten dan profesional.',
      },
      {
        question: 'Apakah Pengubah Huruf berfungsi di ponsel saya?',
        answer:
          'Ya. Alat ini berfungsi di browser seluler modern mana pun dengan pengubahan satu klik dan tombol salin yang sama.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel daftar Anda yang dipisah baris',
        description:
          'Masukkan daftar apa pun dengan satu item per baris ke dalam kotak Baris Asli.',
      },
      {
        title: 'Atur aturan pencocokan',
        description:
          'Aktifkan Peka huruf besar-kecil, Pangkas spasi, Hapus baris kosong, atau Urutkan alfabetis, tergantung seberapa ketat pencocokan yang Anda inginkan.',
      },
      {
        title: 'Salin baris unik',
        description:
          'Periksa berapa banyak duplikat yang dihapus di header ringkasan, lalu klik Salin untuk mengambil daftar yang sudah bersih.',
      },
      {
        title: 'Urutkan daftar yang sudah bersih secara alfabetis',
        description:
          'Aktifkan Urutkan alfabetis jika Anda ingin baris unik diurutkan A sampai Z, bukan mempertahankan urutan kemunculan pertama aslinya.',
      },
      {
        title: 'Periksa jumlah ringkasan',
        description:
          'Tinjau jumlah baris asli, jumlah unik, dan duplikat yang dihapus di header ringkasan untuk memastikan pembersihan berjalan sesuai harapan.',
      },
      {
        title: 'Atasi baris yang tidak terhapus duplikatnya',
        description:
          'Jika dua baris yang tampak sama tetap ada, periksa spasi di akhir yang tersembunyi atau perbedaan kapitalisasi, lalu aktifkan Pangkas spasi atau matikan Peka huruf besar-kecil dan jalankan lagi.',
      },
    ],
    examples: [
      {
        title: 'Pembersihan daftar email',
        input: 'alex@contoh.com\nsam@contoh.com\nAlex@contoh.com\n  sam@contoh.com  ',
        output: 'alex@contoh.com\nsam@contoh.com',
        explanation:
          'Dengan pemangkasan spasi aktif dan peka huruf mati, spasi di akhir dan variasi kapitalisasi menyatu dengan rapi.',
      },
      {
        title: 'Pembersihan daftar URL',
        input: 'https://contoh.com/a\nhttps://contoh.com/b\nhttps://contoh.com/a',
        output: 'https://contoh.com/a\nhttps://contoh.com/b',
        explanation: 'URL yang berulang dihapus sambil mempertahankan urutan kemunculan pertama.',
      },
    ],
    benefits: [
      'Mempertahankan urutan kemunculan pertama secara default atau mengurutkan alfabetis sesuai permintaan',
      'Menampilkan jumlah baris asli, jumlah unik, dan duplikat yang dihapus secara tepat',
      'Menangani daftar ribuan baris dengan lancar di memori klien',
      'Menjaga daftar pribadi dan ekspor pelanggan jauh dari server pihak ketiga',
    ],
    useCases: [
      'Menghapus duplikat dari ekspor riset kata kunci dan daftar URL',
      'Membersihkan daftar email pelanggan sebelum diimpor ke CRM',
      'Menghapus jejak tumpukan atau entri IP yang berulang dari berkas log',
      'Menyiapkan daftar tag atau SKU unik untuk spreadsheet',
    ],
    faqs: [
      {
        question: 'Apakah Hapus Baris Duplikat mempertahankan urutan asli saya?',
        answer:
          'Ya. Secara default alat ini mempertahankan kemunculan pertama setiap baris unik dalam urutan aslinya. Anda bisa mengaktifkan "Urutkan alfabetis" kapan pun Anda juga menginginkan urutan A–Z.',
      },
      {
        question: 'Bagaimana Pangkas spasi memengaruhi deteksi duplikat?',
        answer:
          'Saat Pangkas spasi dicentang, spasi di awal dan akhir dihapus sebelum memeriksa keunikan, sehingga item seperti "apel " dan "apel" tidak diperlakukan sebagai berbeda.',
      },
      {
        question: 'Bagaimana jika saya ingin mempertahankan variasi huruf seperti "USA" dan "usa"?',
        answer:
          'Aktifkan kotak centang "Peka huruf besar-kecil" agar baris dengan kapitalisasi berbeda tetap menjadi entri terpisah.',
      },
      {
        question: 'Apakah alat Hapus Baris Duplikat gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa batas baris, dan tanpa perlu akun.',
      },
      {
        question: 'Apa yang dihitung sebagai baris duplikat?',
        answer:
          'Dua baris adalah duplikat bila teksnya cocok persis sesuai pengaturan Anda saat ini, termasuk pilihan peka huruf besar-kecil dan pemangkasan spasi yang Anda pilih.',
      },
      {
        question: 'Apakah alat ini berfungsi dengan daftar yang dipisah koma?',
        answer:
          'Tidak secara langsung. Alat ini membandingkan seluruh baris, jadi pisahkan daftar yang dipisah koma menjadi satu item per baris terlebih dahulu, lalu tempelkan.',
      },
      {
        question: 'Bisakah saya menghapus baris duplikat dari berkas CSV?',
        answer:
          'Ya. Salin kolom atau baris dari CSV Anda, tempelkan sebagai baris, hapus duplikatnya, lalu tempelkan daftar yang bersih kembali ke spreadsheet Anda.',
      },
      {
        question: 'Apa yang terjadi pada baris kosong?',
        answer:
          'Baris kosong diperlakukan seperti baris lainnya, jadi mengaktifkan "Hapus baris kosong" akan menghapusnya dari keluaran bersama dengan duplikat.',
      },
      {
        question: 'Bisakah saya menghapus duplikat dari daftar URL?',
        answer:
          'Ya. Tempelkan satu URL per baris dan alat ini menghapus URL yang berulang, yang berguna untuk membersihkan ekspor kata kunci dan daftar peta situs.',
      },
      {
        question: 'Berapa banyak baris yang bisa saya hapus duplikatnya sekaligus?',
        answer:
          'Tidak ada batas yang ditetapkan. Penghapusan duplikat berjalan sepenuhnya di browser Anda, sehingga daftar ribuan baris ditangani dengan lancar di memori klien.',
      },
      {
        question: 'Apakah alat ini mempertahankan kemunculan pertama atau terakhir dari duplikat?',
        answer:
          'Alat ini mempertahankan kemunculan pertama setiap baris unik dan menghapus pengulangan berikutnya, sehingga urutan asli Anda terjaga.',
      },
      {
        question: 'Bisakah saya menghapus alamat email duplikat dari daftar?',
        answer:
          'Ya. Tempelkan satu alamat per baris dengan peka huruf mati dan pemangkasan spasi aktif, dan alamat yang duplikat akan menyatu menjadi satu entri.',
      },
      {
        question: 'Apakah pengurutan mengubah baris mana yang dipertahankan?',
        answer:
          'Tidak. Pengurutan hanya menyusun ulang baris unik secara alfabetis setelah penghapusan duplikat; pengurutan tidak mengubah baris mana yang dianggap duplikat.',
      },
      {
        question: 'Apakah alat ini menghapus kata duplikat di dalam satu baris?',
        answer:
          'Tidak. Alat ini membandingkan seluruh baris, sehingga duplikat dalam satu baris tidak tersentuh; gunakan alat Cari dan Ganti untuk pembersihan tingkat kata.',
      },
      {
        question: 'Apakah alat ini berfungsi dengan angka atau alamat IP?',
        answer:
          'Ya. Isi baris apa pun bisa dipakai, termasuk angka, alamat IP, SKU, dan kode, asalkan setiap item berada di barisnya sendiri.',
      },
      {
        question: 'Bisakah saya menghapus baris duplikat dari log server?',
        answer:
          'Ya. Tempelkan baris log dan hapus duplikatnya untuk mengisolasi kesalahan unik atau entri IP yang berulang agar pemecahan masalah lebih cepat.',
      },
      {
        question: 'Apakah Hapus Baris Duplikat menyimpan atau mengunggah daftar saya?',
        answer:
          'Tidak. Penghapusan duplikat berjalan secara lokal di browser Anda, dan daftar Anda tidak pernah diunggah, disimpan, atau dibagikan.',
      },
      {
        question: 'Bagaimana jika daftar saya menggunakan titik koma, bukan jeda baris?',
        answer:
          'Alat ini memperlakukan setiap baris sebagai satu item, jadi ganti titik koma dengan jeda baris terlebih dahulu, lalu tempelkan daftar untuk menghapus duplikatnya.',
      },
      {
        question: 'Bisakah saya menghapus duplikat sambil mempertahankan baris kosong?',
        answer:
          'Ya. Biarkan "Hapus baris kosong" tidak dicentang dan baris kosong akan dipertahankan dalam keluaran bersama item yang sudah dihapus duplikatnya.',
      },
      {
        question: 'Apakah alat ini berfungsi di ponsel saya?',
        answer:
          'Ya. Alat ini berfungsi di browser seluler modern mana pun dengan pilihan penghapusan duplikat dan tombol salin yang sama.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel kedua versi',
        description:
          'Letakkan salinan dasar di Teks Asli dan versi revisi di Teks yang Diubah.',
      },
      {
        title: 'Sesuaikan pilihan perbandingan',
        description:
          'Aktifkan Abaikan spasi atau Abaikan huruf jika Anda ingin melewati perubahan yang hanya pemformatan.',
      },
      {
        title: 'Tinjau perubahan yang disorot',
        description:
          'Pindai panel Perbandingan Baris dengan penanda + ditambahkan, - dihapus, dan nomor baris.',
      },
      {
        title: 'Periksa ringkasan perubahan',
        description:
          'Baca jumlah baris yang ditambahkan, dihapus, dan tidak berubah untuk mendapatkan gambaran cepat seberapa banyak yang berubah antara kedua versi.',
      },
      {
        title: 'Bandingkan hanya bagian tertentu',
        description:
          'Tempelkan hanya bagian yang Anda pedulikan ke kedua kotak untuk membandingkan satu paragraf atau blok konfigurasi tanpa sisa dokumen.',
      },
      {
        title: 'Atasi diff yang tampak salah',
        description:
          'Jika hampir setiap baris tampak berubah, kedua teks mungkin menggunakan akhir baris atau indentasi yang berbeda; aktifkan Abaikan spasi dan periksa apakah kedua tempelan dimulai pada baris yang sama.',
      },
    ],
    examples: [
      {
        title: 'Pemeriksaan revisi konfigurasi',
        input: 'Asli: TTL Cache: 600\nDiubah: TTL Cache: 1800',
        output: '- TTL Cache: 600\n+ TTL Cache: 1800',
        explanation: 'Mengisolasi baris yang berubah dengan jelas beserta nomor baris lama dan baru.',
      },
      {
        title: 'Pemeriksaan perubahan harga',
        input: 'Asli: Harga: Rp50.000\nDiubah: Harga: Rp75.000',
        output: '- Harga: Rp50.000\n+ Harga: Rp75.000',
        explanation: 'Menunjukkan dengan jelas nilai lama yang dihapus dan nilai baru yang ditambahkan.',
      },
    ],
    benefits: [
      'Menggunakan penyelarasan Longest Common Subsequence (LCS), bukan pencocokan indeks yang naif',
      'Memasangkan penyorotan warna dengan simbol + / - untuk aksesibilitas buta warna',
      'Melacak nomor baris asli dan yang diubah secara berdampingan',
      'Menjaga draf rahasia dan berkas konfigurasi sepenuhnya di memori browser lokal',
    ],
    useCases: [
      'Meninjau pengeditan antara dua revisi artikel atau kontrak',
      'Memeriksa perubahan dalam cuplikan konfigurasi .env, JSON, atau YAML',
      'Memverifikasi pembaruan terjemahan atau revisi kebijakan hukum',
      'Memeriksa revisi draf siswa atau tim dengan cepat',
    ],
    faqs: [
      {
        question: 'Bagaimana algoritma diff menangani baris yang disisipkan di tengah berkas?',
        answer:
          'Karena alat ini menggunakan algoritma perbandingan baris Longest Common Subsequence (LCS), penyisipan baris menggeser nomor baris berikutnya tanpa menandai sisa berkas sebagai berubah.',
      },
      {
        question: 'Apa fungsi "Abaikan spasi"?',
        answer:
          'Opsi ini memangkas spasi di awal dan akhir serta menggabungkan beberapa spasi berurutan sebelum membandingkan baris, yang membantu berfokus pada pengeditan konten, bukan perubahan indentasi.',
      },
      {
        question: 'Apakah ada batas karakter untuk membandingkan teks?',
        answer:
          'Perbandingan berjalan langsung di browser Anda tanpa batas server; dokumen biasa hingga beberapa ribu baris dibandingkan hampir seketika.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks gratis digunakan?',
        answer:
          'Ya. Pemeriksa Perbedaan Teks sepenuhnya gratis tanpa pendaftaran, tanpa batas perbandingan, dan tanpa perlu akun.',
      },
      {
        question: 'Apa perbedaan antara baris yang ditambahkan dan baris yang dihapus?',
        answer:
          'Baris yang ditambahkan hanya muncul dalam teks yang diubah dan ditandai dengan simbol +, sedangkan baris yang dihapus hanya muncul dalam teks asli dan ditandai dengan simbol -.',
      },
      {
        question: 'Bisakah saya membandingkan dua berkas, bukan teks yang ditempel?',
        answer:
          'Tidak secara langsung. Salin isi setiap berkas dan tempelkan ke kotak Teks Asli dan Teks yang Diubah untuk membandingkannya.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks berfungsi dengan kode?',
        answer:
          'Ya. Alat ini membandingkan teks berbasis baris apa pun, termasuk kode sumber, sehingga Anda bisa menemukan baris yang berubah antara dua versi skrip atau stylesheet.',
      },
      {
        question: 'Bisakah saya membandingkan berkas konfigurasi JSON atau YAML?',
        answer:
          'Ya. Tempelkan setiap versi ke kedua kotak dan diff akan menyoroti kunci, nilai, dan baris yang berubah dalam konfigurasi Anda.',
      },
      {
        question: 'Apa fungsi "Abaikan huruf"?',
        answer:
          'Opsi ini memperlakukan huruf besar dan huruf kecil sebagai sama selama perbandingan, sehingga baris yang hanya berubah kapitalisasinya tidak ditandai sebagai berbeda.',
      },
      {
        question: 'Bisakah saya membandingkan teks dalam bahasa yang berbeda?',
        answer:
          'Ya. Perbandingan berfungsi pada teks apa pun, meskipun baris dalam bahasa yang berbeda tentu akan tampak berubah karena isinya berbeda.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks menunjukkan perubahan tingkat karakter?',
        answer:
          'Tidak. Perbandingan bekerja baris demi baris, sehingga satu kata yang berubah menandai seluruh barisnya sebagai berubah; untuk detail yang lebih halus, bandingkan kedua baris tersebut secara terpisah.',
      },
      {
        question: 'Bisakah saya membandingkan dokumen dengan versi lamanya?',
        answer:
          'Ya. Tempelkan versi lama sebagai Teks Asli dan versi baru sebagai Teks yang Diubah untuk melihat setiap penambahan dan penghapusan.',
      },
      {
        question: 'Bagaimana nomor baris ditampilkan dalam perbandingan?',
        answer:
          'Setiap baris mempertahankan nomornya sendiri dari teks aslinya, sehingga Anda bisa melacak baris yang berubah kembali ke posisi tepatnya di salah satu versi.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks menyimpan atau mengunggah teks saya?',
        answer:
          'Tidak. Perbandingan berjalan secara lokal di browser Anda, dan teks Anda tidak pernah diunggah, disimpan, atau dibagikan.',
      },
      {
        question: 'Bisakah saya membandingkan kontrak hukum dengan Pemeriksa Perbedaan Teks?',
        answer:
          'Ya. Tempelkan kedua versi kontrak untuk menemukan klausul yang berubah, meskipun Anda tetap harus meminta pengacara meninjau perubahan hukum yang penting.',
      },
      {
        question: 'Apa yang terjadi jika saya menempelkan teks yang sama di kedua kotak?',
        answer:
          'Perbandingan akan menunjukkan nol baris yang ditambahkan dan nol baris yang dihapus, yang memastikan kedua teks identik.',
      },
      {
        question: 'Bisakah saya membandingkan teks dengan akhir baris yang berbeda?',
        answer:
          'Ya. Jika akhir baris berbeda, diff dapat menandai baris sebagai berubah; mengaktifkan Abaikan spasi biasanya menghilangkan perbedaan yang hanya pemformatan ini.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks berfungsi dengan dokumen besar?',
        answer:
          'Ya. Dokumen hingga beberapa ribu baris dibandingkan hampir seketika di browser, tanpa unggahan ke server.',
      },
      {
        question: 'Bisakah saya menggunakan Pemeriksa Perbedaan Teks untuk tinjauan terjemahan?',
        answer:
          'Ya. Tempelkan terjemahan asli dan terjemahan revisi untuk meninjau setiap baris yang diedit secara berdampingan.',
      },
      {
        question: 'Apakah Pemeriksa Perbedaan Teks berfungsi di ponsel saya?',
        answer:
          'Ya. Alat ini berfungsi di browser seluler modern mana pun dengan perbandingan berdampingan dan penyorotan yang sama.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel teks yang belum diformat',
        description:
          'Masukkan teks yang berisi spasi ganda, tab liar, atau pembungkus baris yang rusak ke dalam Teks Masukan.',
      },
      {
        title: 'Pilih cara spasi dan tab ditangani',
        description:
          'Gabungkan rangkaian beberapa spasi menjadi satu, ubah tab menjadi spasi tunggal, dan pangkas spasi di awal dan akhir setiap baris.',
      },
      {
        title: 'Pilih opsi jeda baris',
        description:
          'Pertahankan jeda paragraf, hapus hanya baris kosong, ganti jeda baris dengan spasi untuk menyambung kembali kalimat yang terpotong, atau hapus semua jeda untuk membuat satu baris berkelanjutan.',
      },
      {
        title: 'Tinjau keluaran yang sudah bersih',
        description:
          'Periksa hasil di panel keluaran dan jumlah karakter yang menunjukkan persis berapa banyak karakter yang dihapus selama pembersihan.',
      },
      {
        title: 'Salin teks yang sudah bersih',
        description:
          'Gunakan tombol salin untuk menyalin hasil yang sudah dinormalkan, lalu tempelkan ke dokumen, formulir, atau kolom CMS Anda.',
      },
      {
        title: 'Perbaiki kalimat yang menyatu',
        description:
          'Jika kata dari baris terpisah menyatu tanpa spasi, beralihlah ke "Ganti dengan spasi". Jika paragraf menyatu menjadi satu blok, kembali ke "Hapus baris kosong" sebagai gantinya.',
      },
    ],
    examples: [
      {
        title: 'Membersihkan salinan PDF',
        input: '   Baris   pertama dengan   spasi berlebih.\n\n\nBaris   kedua   di sini.   ',
        output: 'Baris pertama dengan spasi berlebih.\nBaris kedua di sini.',
        explanation: 'Menggabungkan spasi ganda, memangkas tepi, dan menghapus baris kosong pemisah.',
      },
      {
        title: 'Meratakan alamat menjadi satu baris',
        input: 'Jl. Merdeka No. 10\nJakarta Pusat\n10110',
        output: 'Jl. Merdeka No. 10 Jakarta Pusat 10110',
        explanation: 'Mengganti jeda baris dengan spasi tunggal agar alamat menjadi satu baris.',
      },
    ],
    benefits: [
      'Memperbaiki pembungkus baris yang rusak dari dokumen PDF dalam satu klik',
      'Menghitung jumlah karakter yang dihapus selama pembersihan secara tepat',
      'Mendukung mempertahankan paragraf sambil hanya menghapus spasi berlebih',
      'Memproses semuanya secara lokal di browser',
    ],
    useCases: [
      'Memperbaiki teks rusak yang disalin dari PDF multi-kolom',
      'Menghapus spasi di akhir sebelum ditempel ke kolom CMS',
      'Meratakan alamat atau cuplikan multi-baris menjadi satu baris',
      'Menormalkan catatan berindentasi tab menjadi teks bersih berspasi tunggal',
    ],
    faqs: [
      {
        question: 'Opsi jeda baris mana yang harus saya pilih untuk teks yang disalin dari PDF?',
        answer:
          'Pilih "Ganti dengan spasi" saat pembungkus baris keras memotong kalimat di tengah baris, atau "Hapus baris kosong" jika setiap baris sudah merupakan paragraf atau item daftar yang berbeda.',
      },
      {
        question: 'Apakah penggabungan spasi memengaruhi spasi tunggal di antara kata?',
        answer:
          'Tidak. Hanya rangkaian dua spasi berurutan atau lebih yang digabungkan menjadi satu spasi.',
      },
      {
        question: 'Apakah alat ini juga menghapus tab?',
        answer:
          'Ya, saat "Ubah tab menjadi spasi" diaktifkan, karakter tab diubah menjadi spasi tunggal dan digabungkan dengan spasi di sekitarnya.',
      },
      {
        question: 'Apakah Penghapus Spasi gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa akun, dan tanpa batas berapa kali Anda membersihkan teks.',
      },
      {
        question: 'Apakah teks saya keluar dari browser saat saya menggunakan Penghapus Spasi?',
        answer:
          'Tidak. Semua pembersihan dilakukan secara lokal di browser Anda, sehingga teks Anda tidak pernah diunggah ke server.',
      },
      {
        question: 'Apa fungsi opsi "Hapus baris kosong"?',
        answer:
          'Opsi ini menghapus baris kosong dari teks Anda sambil mempertahankan setiap baris yang berisi konten, sehingga paragraf dan item daftar tetap berurutan.',
      },
      {
        question: 'Bisakah saya mempertahankan jeda paragraf sambil menghapus spasi berlebih?',
        answer:
          'Ya. Pilih opsi yang mempertahankan jeda baris dan hanya menggabungkan spasi berlebih, sehingga paragraf Anda tetap terpisah sementara spasi di dalamnya diperbaiki.',
      },
      {
        question: 'Apa perbedaan antara "Ganti dengan spasi" dan menghapus semua jeda baris?',
        answer:
          '"Ganti dengan spasi" menyambung baris dengan satu spasi agar kalimat yang terpotong terbaca dengan benar, sedangkan menghapus semua jeda menyambung baris secara langsung tanpa spasi di antaranya.',
      },
      {
        question: 'Apakah Penghapus Spasi menghapus spasi di akhir baris?',
        answer:
          'Ya. Spasi dan tab di akhir setiap baris dipangkas, yang berguna sebelum menempelkan teks ke kolom formulir atau kode.',
      },
      {
        question: 'Apakah alat ini menghapus spasi di awal baris dan indentasi?',
        answer:
          'Ya. Spasi di awal setiap baris dipangkas, sehingga teks yang ditempel dengan indentasi atau tidak sejajar menjadi rapi.',
      },
      {
        question: 'Bisakah saya membersihkan teks yang disalin dari spreadsheet dengan Penghapus Spasi?',
        answer:
          'Ya. Tab di antara sel spreadsheet diubah menjadi spasi tunggal, dan baris kosong berlebih dari rentang yang disalin dihapus.',
      },
      {
        question: 'Bagaimana cara mengubah teks multi-baris menjadi satu baris?',
        answer:
          'Tempelkan teks Anda, lalu pilih opsi yang mengganti jeda baris dengan spasi atau menghapus semua jeda, lalu salin keluaran satu baris yang dihasilkan.',
      },
      {
        question: 'Apakah Penghapus Spasi mengubah tanda baca, huruf, atau angka?',
        answer:
          'Tidak. Alat ini hanya mengubah karakter spasi seperti spasi, tab, dan jeda baris; kata, tanda baca, dan angka Anda tetap persis seperti semula.',
      },
      {
        question: 'Bisakah saya menggunakan Penghapus Spasi untuk membersihkan teks sebelum ditempel ke formulir?',
        answer:
          'Ya. Alat ini ideal untuk menghapus spasi di akhir dan jeda baris liar dari alamat, nama, atau deskripsi sebelum dimasukkan ke formulir web atau kolom CMS.',
      },
      {
        question: 'Apa arti jumlah karakter yang ditampilkan setelah pembersihan?',
        answer:
          'Jumlah tersebut menunjukkan berapa banyak karakter yang dihapus selama pembersihan, sehingga Anda bisa melihat persis berapa banyak spasi berlebih yang dihapus alat ini dari teks Anda.',
      },
      {
        question: 'Apakah Penghapus Spasi berfungsi pada dokumen yang sangat panjang?',
        answer:
          'Ya. Karena berjalan secara lokal di browser Anda, Anda bisa menempelkan dokumen panjang, meskipun blok teks yang sangat besar mungkin membutuhkan waktu sejenak untuk diproses.',
      },
      {
        question: 'Bisakah saya membatalkan pembersihan jika saya memilih opsi yang salah?',
        answer:
          'Teks asli Anda tetap berada di kolom masukan, sehingga Anda cukup memilih opsi lain dan keluaran diperbarui tanpa kehilangan teks yang ditempel.',
      },
      {
        question: 'Apakah Penghapus Spasi menghapus spasi di dalam kata?',
        answer:
          'Tidak. Spasi di dalam kata adalah spasi tunggal, sehingga dibiarkan tidak tersentuh; hanya rangkaian dua spasi atau lebih yang digabungkan.',
      },
      {
        question: 'Jenis spasi apa saja yang dibersihkan alat ini?',
        answer:
          'Alat ini membersihkan spasi biasa, karakter tab, spasi di awal dan akhir baris, baris kosong, dan jeda baris yang tidak diinginkan.',
      },
      {
        question: 'Bisakah saya menggunakan Penghapus Spasi pada kode?',
        answer:
          'Alat ini berfungsi untuk prosa, tetapi berhati-hatilah dengan kode yang peka terhadap indentasi seperti Python, karena memangkas spasi di awal dapat mengubah cara kode berperilaku.',
      },
    ],
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
    instructions: [
      {
        title: 'Masukkan satu item per baris',
        description:
          'Tempelkan daftar Anda ke kolom Baris Masukan, dengan setiap item di barisnya sendiri.',
      },
      {
        title: 'Pilih urutan pengurutan',
        description:
          'Pilih A → Z, Z → A, Alami (1, 2, 10), Terpendek/Terpanjang Dahulu, Urutan Terbalik, atau Acak.',
      },
      {
        title: 'Atur peka huruf besar-kecil',
        description:
          'Aktifkan perbandingan peka huruf jika huruf besar dan huruf kecil harus diurutkan terpisah; jika tidak, "apel" dan "Apel" diperlakukan sama.',
      },
      {
        title: 'Aktifkan pilihan pembersihan',
        description:
          'Secara opsional hapus baris kosong atau hapus duplikat dalam sekali jalan agar daftar yang diurutkan keluar bersih.',
      },
      {
        title: 'Tinjau dan salin daftar yang diurutkan',
        description:
          'Periksa keluaran yang diurutkan secara berurutan, lalu salin dengan satu klik untuk ditempel ke dokumen, spreadsheet, atau berkas kode Anda.',
      },
      {
        title: 'Perbaiki item bernomor yang urutannya salah',
        description:
          'Jika "Butir 10" muncul sebelum "Butir 2", beralihlah dari A → Z ke pengurutan Alami, yang membandingkan angka di dalam setiap baris secara numerik.',
      },
    ],
    examples: [
      {
        title: 'Pengurutan numerik alami vs pengurutan teks standar',
        input: 'Butir 10\nButir 2\nButir 1',
        output: 'Butir 1\nButir 2\nButir 10',
        explanation:
          'Mode alami membandingkan angka yang tersemat secara numerik sehingga Butir 2 mendahului Butir 10.',
      },
      {
        title: 'Pengurutan alfabetis dengan penghapusan duplikat',
        input: 'pisang\napel\nmangga\napel',
        output: 'apel\nmangga\npisang',
        explanation: 'Duplikat dihapus terlebih dahulu, lalu baris unik yang tersisa diurutkan A sampai Z.',
      },
    ],
    benefits: [
      'Menyertakan collator yang peka terhadap locale dan pengurutan numerik alami',
      'Menggabungkan pengurutan dengan penghapusan baris kosong dan penghapusan duplikat',
      'Mendukung pengurutan berdasarkan panjang untuk tabel UI dan pemeriksaan teks',
      'Salinan satu klik yang instan dari hasil yang diurutkan',
    ],
    useCases: [
      'Mengurutkan bibliografi, glosarium, dan daftar referensi secara alfabetis',
      'Mengurutkan berkas bernomor atau kasus uji secara alami (Butir 1, 2, 10)',
      'Mengurutkan properti CSS, impor, atau kunci environment',
      'Mengacak entri undian atau soal kuis dengan Acak',
    ],
    faqs: [
      {
        question: 'Apa perbedaan antara A → Z dan pengurutan Alami?',
        answer:
          'Pengurutan alfabetis standar menempatkan "Butir 10" sebelum "Butir 2" karena "1" muncul sebelum "2". Pengurutan alami mengurai angka di dalam string sehingga "Butir 2" muncul sebelum "Butir 10".',
      },
      {
        question: 'Bisakah saya menghapus entri duplikat saat mengurutkan?',
        answer:
          'Ya. Centang opsi "Hapus duplikat" untuk menghapus duplikat dan mengurutkan daftar Anda secara bersamaan.',
      },
      {
        question: 'Apa perbedaan Urutan Terbalik dengan Z → A?',
        answer:
          'Z → A mengurutkan alfabetis secara menurun, sedangkan Urutan Terbalik membalik urutan baris Anda yang sudah ada dari bawah ke atas tanpa mengurutkan secara alfabetis.',
      },
      {
        question: 'Apakah alat Urutkan Baris gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa akun, dan tanpa batas berapa banyak daftar yang Anda urutkan.',
      },
      {
        question: 'Apakah daftar saya keluar dari browser saat saya mengurutkannya?',
        answer:
          'Tidak. Pengurutan dilakukan secara lokal di browser Anda, sehingga daftar Anda tidak pernah diunggah ke server.',
      },
      {
        question: 'Apa itu pengurutan alami dan kapan saya harus menggunakannya?',
        answer:
          'Pengurutan alami membandingkan angka di dalam teks secara numerik, jadi gunakan untuk item bernomor seperti "Bab 2" dan "Bab 10" agar tetap dalam urutan numerik yang benar.',
      },
      {
        question: 'Bisakah saya mengurutkan daftar dari Z ke A?',
        answer:
          'Ya. Pilih opsi Z → A untuk mengurutkan baris Anda dalam urutan alfabetis terbalik.',
      },
      {
        question: 'Bisakah saya mengurutkan baris berdasarkan panjang, bukan alfabetis?',
        answer:
          'Ya. Pilih Terpendek Dahulu atau Terpanjang Dahulu untuk mengurutkan baris berdasarkan panjang karakter, yang berguna untuk memeriksa tabel UI atau menyelaraskan teks.',
      },
      {
        question: 'Apa fungsi opsi Acak dalam alat Urutkan Baris?',
        answer:
          'Acak mengacak urutan baris Anda, yang berguna untuk entri undian, soal kuis, atau daftar apa pun yang Anda inginkan dalam urutan acak.',
      },
      {
        question: 'Apakah alat Urutkan Baris menghapus baris kosong?',
        answer:
          'Ya, jika Anda mengaktifkan opsi baris kosong. Jika tidak, baris kosong dipertahankan dalam keluaran.',
      },
      {
        question: 'Bisakah saya mengurutkan dengan peka huruf besar-kecil menggunakan alat Urutkan Baris?',
        answer:
          'Ya. Aktifkan perbandingan peka huruf untuk mengurutkan huruf besar dan huruf kecil secara terpisah; jika mati, "apel" dan "Apel" diperlakukan sama.',
      },
      {
        question: 'Apakah alat Urutkan Baris berfungsi dengan angka dan tanggal?',
        answer:
          'Ya. Pengurutan alami mengurutkan angka yang tersemat dengan benar, dan tanggal diurutkan dengan benar saat ditulis dalam format YYYY-MM-DD; format tanggal lain diurutkan sebagai teks biasa.',
      },
      {
        question: 'Bisakah saya mengurutkan kolom di dalam baris, seperti nilai CSV?',
        answer:
          'Tidak. Alat ini mengurutkan seluruh baris, jadi setiap baris bergerak sebagai satu kesatuan; alat ini tidak menyusun ulang nilai yang dipisah koma di dalam satu baris.',
      },
      {
        question: 'Apa yang terjadi pada baris duplikat saat saya mengurutkan?',
        answer:
          'Duplikat tetap ada dalam daftar kecuali Anda mengaktifkan "Hapus duplikat", yang hanya mempertahankan kemunculan pertama setiap baris sebelum mengurutkan.',
      },
      {
        question: 'Bisakah saya membalik daftar tanpa mengurutkannya secara alfabetis?',
        answer:
          'Ya. Gunakan Urutan Terbalik untuk membalik daftar Anda dari bawah ke atas sambil menjaga teks di dalam setiap baris tidak berubah.',
      },
      {
        question: 'Apakah alat Urutkan Baris menangani huruf beraksen dan bahasa lain?',
        answer:
          'Ya. Alat ini menggunakan collator yang peka terhadap locale, sehingga karakter beraksen dan huruf non-Inggris diurutkan dengan urutan yang masuk akal, bukan berdasarkan kode karakter mentah.',
      },
      {
        question: 'Bisakah saya mengurutkan daftar bernomor seperti "1. Apel, 2. Pisang, 10. Ceri"?',
        answer:
          'Ya. Pengurutan alami membaca angka di awal setiap baris, sehingga "2. Pisang" benar-benar muncul sebelum "10. Ceri".',
      },
      {
        question: 'Seberapa besar daftar yang bisa ditangani alat Urutkan Baris?',
        answer:
          'Alat ini berjalan secara lokal di browser Anda dan menangani daftar panjang dengan mudah, meskipun tempelan yang sangat besar dengan puluhan ribu baris mungkin membutuhkan waktu sejenak.',
      },
      {
        question: 'Apakah pengurutan mengubah teks di dalam setiap baris?',
        answer:
          'Tidak. Pengurutan hanya mengubah urutan baris; kata, angka, dan tanda baca di dalam setiap baris tetap persis sama.',
      },
      {
        question: 'Bisakah saya membatalkan pengurutan jika saya memilih urutan yang salah?',
        answer:
          'Daftar asli Anda tetap berada di kolom masukan, sehingga Anda bisa memilih urutan pengurutan lain dan keluaran diperbarui tanpa kehilangan daftar yang ditempel.',
      },
    ],
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
    instructions: [
      {
        title: 'Masukkan istilah Cari dan Ganti',
        description:
          'Ketik teks atau pola yang ingin Anda cocokkan di Cari, dan string target di Ganti dengan.',
      },
      {
        title: 'Atur bendera pencocokan',
        description:
          'Aktifkan Peka huruf besar-kecil, Hanya kata utuh, atau Gunakan Ekspresi Reguler (RegExp) untuk pencocokan pola.',
      },
      {
        title: 'Tempel teks yang akan diedit',
        description:
          'Tempelkan dokumen lengkap, cuplikan CSV, atau blok kode ke kolom teks sumber agar setiap kemunculan tercakup dalam sekali jalan.',
      },
      {
        title: 'Periksa jumlah kecocokan langsung',
        description:
          'Lihat jumlah langsung kemunculan yang diganti untuk memastikan kecocokan mengenai tepat tempat yang Anda harapkan sebelum menyalin.',
      },
      {
        title: 'Tinjau keluaran dan salin',
        description:
          'Pindai teks yang diperbarui untuk perubahan yang tidak disengaja, lalu salin dengan satu klik untuk ditempel kembali ke dokumen atau editor Anda.',
      },
      {
        title: 'Perbaiki kecocokan yang tidak mengganti apa pun',
        description:
          'Jika jumlahnya nol, periksa peka huruf, matikan Hanya kata utuh, atau escape karakter khusus seperti . dan ( dalam mode RegExp; pola yang tidak valid menampilkan pesan kesalahan sintaks.',
      },
    ],
    examples: [
      {
        title: 'Pemformatan ulang grup tangkap regex',
        input: 'Cari: Pesanan #(\\d+)  |  Ganti: Ref-$1\nSumber: Pesanan #1042 dikirim.',
        output: 'Ref-1042 dikirim.',
        explanation: 'Menggunakan grup tangkap RegExp ($1) untuk mempertahankan ID pesanan numerik sambil mengubah awalannya.',
      },
      {
        title: 'Memperbaiki salah ketik yang berulang',
        input: 'Cari: tehknologi  |  Ganti: teknologi\nSumber: tehknologi baru mengubah cara kita bekerja dengan tehknologi.',
        output: 'teknologi baru mengubah cara kita bekerja dengan teknologi.',
        explanation: 'Mengganti semua kemunculan salah ketik sekaligus dan menampilkan jumlah kecocokan.',
      },
    ],
    benefits: [
      'Menampilkan jumlah kecocokan langsung dan umpan balik kesalahan sintaks yang jelas untuk pola RegExp yang tidak valid',
      'Opsi kata utuh mencegah kecocokan sebagian yang tidak disengaja di dalam kata yang lebih panjang',
      'Mendukung grup tangkap RegExp ($1, $2) untuk penulisan ulang teks terstruktur',
      'Berjalan secara lokal sehingga cuplikan pribadi dan kredensial tetap di perangkat Anda',
    ],
    useCases: [
      'Menukar nama merek, URL, atau tanggal di seluruh dokumen panjang',
      'Memformat ulang ID atau tanggal dengan grup tangkap ekspresi reguler',
      'Memperbarui pemisah atau variabel placeholder dalam templat',
      'Membersihkan salah ketik yang berulang sebelum diterbitkan',
    ],
    faqs: [
      {
        question: 'Bisakah saya menggunakan grup tangkap seperti $1 dalam mode RegExp?',
        answer:
          'Ya. Saat "Gunakan Ekspresi Reguler (RegExp)" dicentang, grup dalam tanda kurung di Cari dapat dirujuk sebagai $1, $2, dan seterusnya di kolom Ganti.',
      },
      {
        question: 'Mengapa "Hanya kata utuh" dinonaktifkan dalam mode RegExp?',
        answer:
          'Dalam mode RegExp Anda memiliki kontrol langsung atas batas kata menggunakan \\b di dalam pola Anda.',
      },
      {
        question: 'Apakah mengosongkan "Ganti dengan" menghapus teks yang cocok?',
        answer:
          'Ya. Mengosongkan kolom Ganti akan menghapus setiap kemunculan yang cocok dengan rapi.',
      },
      {
        question: 'Apakah alat Cari & Ganti gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa akun, dan tanpa batas berapa banyak penggantian yang Anda buat.',
      },
      {
        question: 'Apakah teks saya keluar dari browser saat saya menggunakan Cari & Ganti?',
        answer:
          'Tidak. Semuanya berjalan secara lokal di browser Anda, sehingga cuplikan pribadi, dokumen, dan kode tetap berada di perangkat Anda.',
      },
      {
        question: 'Apa yang ditunjukkan jumlah kecocokan langsung?',
        answer:
          'Jumlah tersebut menunjukkan berapa banyak kemunculan istilah Cari Anda yang diganti, sehingga Anda bisa memastikan penggantian mengenai tepat tempat yang Anda harapkan.',
      },
      {
        question: 'Bisakah saya mengganti hanya kata utuh, bukan bagian dari kata yang lebih panjang?',
        answer:
          'Ya. Aktifkan "Hanya kata utuh" agar "kucing" diganti tetapi "kucingku" dibiarkan tidak tersentuh; dalam mode RegExp, gunakan batas kata \\b sebagai gantinya.',
      },
      {
        question: 'Apakah Cari & Ganti peka terhadap huruf besar-kecil?',
        answer:
          'Hanya jika Anda mengaktifkan opsi Peka huruf besar-kecil. Jika mati, "Apel" dan "apel" diperlakukan sebagai kecocokan yang sama.',
      },
      {
        question: 'Bisakah saya mengganti teks di beberapa baris sekaligus?',
        answer:
          'Ya. Alat ini memproses seluruh teks yang Anda tempel dalam sekali jalan, sehingga kecocokan di setiap baris diganti bersamaan.',
      },
      {
        question: 'Apa yang terjadi jika ekspresi reguler saya tidak valid?',
        answer:
          'Alat ini menampilkan pesan kesalahan sintaks yang jelas, bukan menghasilkan keluaran yang salah, sehingga Anda bisa memperbaiki pola sebelum menyalin apa pun.',
      },
      {
        question: 'Bisakah saya mencocokkan karakter khusus seperti jeda baris atau tab dalam Cari & Ganti?',
        answer:
          'Ya, dalam mode RegExp Anda bisa menggunakan escape seperti \\n untuk jeda baris dan \\t untuk tab di dalam pola Anda.',
      },
      {
        question: 'Bisakah saya menukar dua kata menggunakan grup tangkap?',
        answer:
          'Ya. Misalnya, cari (\\w+) (\\w+) dan ganti dengan $2 $1 untuk membalik "Budi Santoso" menjadi "Santoso Budi".',
      },
      {
        question: 'Bisakah saya menyisipkan seluruh teks yang cocok ke dalam pengganti?',
        answer:
          'Ya. Dalam mode RegExp, $& di kolom Ganti menyisipkan seluruh teks yang cocok, yang berguna untuk membungkus kecocokan dalam tanda kutip atau tag.',
      },
      {
        question: 'Bisakah saya mengganti URL atau tanggal di seluruh dokumen?',
        answer:
          'Ya. Tempelkan dokumen lengkap dan gunakan satu kali Cari & Ganti untuk menukar setiap URL lama, nama merek, atau tanggal sekaligus.',
      },
      {
        question: 'Apakah Cari & Ganti hanya mengubah kemunculan pertama atau semuanya?',
        answer:
          'Alat ini mengganti semua kecocokan dalam teks yang ditempel sekaligus; untuk mengubah hanya satu kemunculan, edit tempat itu secara manual setelah menyalin hasilnya.',
      },
      {
        question: 'Apakah Cari & Ganti berfungsi pada kode?',
        answer:
          'Ya. Alat ini berfungsi pada blok kode, templat, dan cuplikan konfigurasi, sehingga Anda bisa mengganti nama variabel, memperbarui placeholder, atau mengubah pemisah secara massal.',
      },
      {
        question: 'Bisakah saya memperbaiki salah ketik yang berulang dengan Cari & Ganti?',
        answer:
          'Ya. Masukkan kata yang salah eja di Cari dan ejaan yang benar di Ganti, lalu periksa jumlah kecocokan untuk melihat berapa banyak salah ketik yang diperbaiki.',
      },
      {
        question: 'Ragam ekspresi reguler apa yang digunakan alat ini?',
        answer:
          'Alat ini menggunakan JavaScript RegExp, sintaks pola yang sama yang digunakan di browser, dengan grup tangkap, kelas karakter, dan quantifier.',
      },
      {
        question: 'Bisakah saya membatalkan penggantian jika saya membuat kesalahan?',
        answer:
          'Teks asli Anda tetap berada di kolom masukan, sehingga Anda bisa mengubah istilah Cari atau Ganti dan keluaran diperbarui tanpa kehilangan teks sumber Anda.',
      },
      {
        question: 'Apakah ada batas berapa banyak teks yang bisa saya proses dengan Cari & Ganti?',
        answer:
          'Tidak ada batas yang ditetapkan. Alat ini berjalan secara lokal di browser Anda dan menangani dokumen panjang, meskipun tempelan yang sangat besar mungkin membutuhkan waktu sejenak untuk diproses.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih mode pembalikan',
        description:
          'Pilih Balik Karakter, Balik Urutan Kata, Balik Setiap Kata, atau Balik Urutan Baris.',
      },
      {
        title: 'Masukkan teks Anda',
        description:
          'Ketik atau tempel teks ke Teks Asli untuk melihat keluaran yang dibalik secara langsung.',
      },
      {
        title: 'Periksa pratinjau langsung',
        description:
          'Keluaran diperbarui saat Anda mengetik, sehingga Anda bisa langsung melihat bagaimana mode yang dipilih mengubah teks Anda.',
      },
      {
        title: 'Bandingkan mode secara berdampingan',
        description:
          'Beralih antar mode pada masukan yang sama untuk membandingkan pembalikan karakter, pembalikan urutan kata, dan pembalikan baris sebelum memilih satu.',
      },
      {
        title: 'Salin keluaran',
        description:
          'Gunakan tombol Salin untuk menyalin teks yang sudah diubah, lalu tempelkan ke dokumen, teka-teki, atau pesan Anda.',
      },
      {
        title: 'Perbaiki baris yang terbalik dengan cara yang salah',
        description:
          'Jika kata di dalam setiap baris ikut terbalik padahal Anda hanya ingin daftarnya dibalik, beralihlah ke Balik Urutan Baris, yang memindahkan baris tanpa menyentuh teks di dalamnya.',
      },
    ],
    examples: [
      {
        title: 'Membandingkan mode pembalikan',
        input: 'Halo Dunia',
        output: 'Karakter: ainuD olaH · Urutan Kata: Dunia Halo · Setiap Kata: olaH ainuD',
        explanation: 'Menunjukkan bagaimana setiap mode mengubah penempatan karakter vs token.',
      },
      {
        title: 'Membalik urutan daftar',
        input: 'Pertama\nKedua\nKetiga',
        output: 'Ketiga\nKedua\nPertama',
        explanation: 'Mode Balik Urutan Baris membalik daftar dari bawah ke atas tanpa mengubah teks di dalamnya.',
      },
    ],
    benefits: [
      'Pemisahan karakter yang aman Unicode menjaga emoji dan pasangan surrogate tetap utuh',
      'Empat mode berbeda mencakup pembalikan string maupun pembalikan daftar',
      'Pratinjau langsung tanpa klik saat Anda mengetik',
      'Eksekusi ringan di sisi browser',
    ],
    useCases: [
      'Membalik log atau daftar kronologis dari terlama-dahulu menjadi terbaru-dahulu',
      'Menguji string palindrom dan kasus tepi karakter kanan-ke-kiri',
      'Membalik daftar nama "Nama Depan Nama Belakang" atau urutan kata',
      'Membuat teka-teki, sandi, dan permainan kata',
    ],
    faqs: [
      {
        question: 'Apakah Balik Karakter merusak emoji atau karakter Unicode beraksen?',
        answer:
          'Alat ini menggunakan iterasi code-point Array.from(), bukan pengindeksan UTF-16 yang naif, sehingga karakter multi-byte dan emoji standar tetap utuh.',
      },
      {
        question: 'Bagaimana cara membalik daftar baris tanpa membalik kata-katanya?',
        answer:
          'Pilih "Balik Urutan Baris" untuk memindahkan baris bawah ke atas sambil menjaga teks di dalam setiap baris tidak berubah.',
      },
      {
        question: 'Apa perbedaan antara "Balik Urutan Kata" dan "Balik Setiap Kata"?',
        answer:
          '"Balik Urutan Kata" mengubah "satu dua tiga" menjadi "tiga dua satu", sedangkan "Balik Setiap Kata" mempertahankan posisi kata dan membalik huruf menjadi "utas aud agit".',
      },
      {
        question: 'Apakah Pembalik Teks gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa akun, dan tanpa batas berapa banyak teks yang Anda balik.',
      },
      {
        question: 'Apakah teks saya keluar dari browser saat saya menggunakan Pembalik Teks?',
        answer:
          'Tidak. Pembalikan dilakukan secara lokal di browser Anda, sehingga teks Anda tidak pernah diunggah atau disimpan di mana pun.',
      },
      {
        question: 'Apa saja empat mode pembalikan dalam Pembalik Teks?',
        answer:
          'Balik Karakter membalik setiap karakter, Balik Urutan Kata membalik urutan kata, Balik Setiap Kata mencerminkan huruf di dalam setiap kata, dan Balik Urutan Baris membalik urutan baris.',
      },
      {
        question: 'Bisakah saya membalik satu paragraf utuh dengan Pembalik Teks?',
        answer:
          'Ya. Tempelkan paragraf dan pilih Balik Karakter untuk membalik seluruh blok, atau Balik Urutan Baris untuk membalik teks multi-baris baris demi baris.',
      },
      {
        question: 'Bisakah saya menggunakan Pembalik Teks untuk membuat efek cermin?',
        answer:
          'Ya. Balik Karakter menghasilkan teks yang tampak seperti cermin dan terbaca terbalik, yang cocok untuk teka-teki, sandi, dan pesan yang menyenangkan.',
      },
      {
        question: 'Apakah Pembalik Teks berfungsi dengan huruf beraksen?',
        answer:
          'Ya. Alat ini menangani karakter Unicode berdasarkan code point, sehingga huruf beraksen seperti é dan ü dibalik dengan benar tanpa terpecah.',
      },
      {
        question: 'Apakah Pembalik Teks berfungsi dengan teks dalam bahasa lain?',
        answer:
          'Ya. Alat ini berfungsi pada teks Unicode apa pun, termasuk aksara non-Latin, karena pembalikan dilakukan karakter demi karakter, bukan berdasarkan aturan bahasa.',
      },
      {
        question: 'Apa itu palindrom dan bisakah Pembalik Teks membantu memeriksanya?',
        answer:
          'Palindrom terbaca sama dari depan dan belakang, seperti "katak". Balik teks Anda dan bandingkan dengan aslinya untuk memeriksa.',
      },
      {
        question: 'Bisakah saya menggunakan Pembalik Teks untuk teka-teki dan permainan kata?',
        answer:
          'Ya. Kata dan kalimat terbalik adalah format teka-teki klasik, dan pratinjau langsung memudahkan pembuatan petunjuk dan jawaban dengan cepat.',
      },
      {
        question: 'Apakah membalik teks menambah atau menghapus spasi?',
        answer:
          'Balik Karakter membalik semuanya termasuk spasi, sedangkan mode berbasis kata mempertahankan spasi tunggal di antara kata agar keluaran tetap mudah dibaca.',
      },
      {
        question: 'Bisakah saya membalik blok teks yang sangat panjang?',
        answer:
          'Ya. Alat ini berjalan secara lokal di browser Anda dan menangani tempelan panjang, meskipun blok yang sangat besar mungkin membutuhkan waktu sejenak untuk diperbarui di pratinjau langsung.',
      },
      {
        question: 'Apakah Pembalik Teks menyimpan teks saya?',
        answer:
          'Tidak. Tidak ada yang disimpan atau dikirim ke server; teks Anda hanya ada di tab browser Anda selama Anda menggunakan alat ini.',
      },
      {
        question: 'Bagaimana cara membalik nama "Nama Depan Nama Belakang" menjadi "Nama Belakang Nama Depan"?',
        answer:
          'Gunakan Balik Urutan Kata, yang mengubah "Budi Santoso" menjadi "Santoso Budi" sambil menjaga setiap nama dieja dengan benar.',
      },
      {
        question: 'Bisakah Pembalik Teks membalik angka?',
        answer:
          'Ya. Dalam mode Balik Karakter, "12345" menjadi "54321", yang berguna untuk menguji string numerik dan kode.',
      },
      {
        question: 'Apa yang terjadi pada jeda baris saat saya membalik karakter?',
        answer:
          'Jeda baris ikut terbalik bersama sisa teks, sehingga baris berakhir dalam urutan yang berlawanan juga; gunakan Balik Urutan Baris jika Anda ingin baris dibalik tetapi teks di dalamnya tidak tersentuh.',
      },
      {
        question: 'Bisakah saya membatalkan pembalikan?',
        answer:
          'Ya. Teks asli Anda tetap berada di kolom masukan, dan membalik keluaran untuk kedua kalinya dengan mode yang sama akan mengembalikan teks asli.',
      },
      {
        question: 'Apakah teks terbalik bisa dibaca?',
        answer:
          'Tidak, teks terbalik terbaca mundur sesuai rancangannya. Tempelkan kembali ke alat ini dan balik lagi untuk mengembalikan kata-kata aslinya.',
      },
    ],
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
    instructions: [
      {
        title: 'Pilih satuan dan jumlah',
        description:
          'Pilih Paragraf, Kalimat, atau Kata, lalu masukkan jumlah yang diinginkan.',
      },
      {
        title: 'Sesuaikan pemformatan',
        description:
          'Pilih apakah akan memulai dengan kalimat klasik "Lorem ipsum dolor sit amet..." dan apakah akan membungkus paragraf dalam tag <p> HTML.',
      },
      {
        title: 'Hasilkan teks placeholder',
        description:
          'Teks dihasilkan secara instan di browser Anda, tanpa menunggu dan tanpa panggilan jaringan.',
      },
      {
        title: 'Periksa jumlah kata dan karakter',
        description:
          'Gunakan penghitung kata dan karakter langsung untuk memastikan teks yang dihasilkan sesuai dengan tata letak Anda sebelum ditempel ke desain.',
      },
      {
        title: 'Hasilkan ulang atau salin',
        description:
          'Klik Hasilkan Ulang untuk variasi kalimat yang baru atau Salin teks placeholder untuk ditempel ke desain Anda.',
      },
      {
        title: 'Sesuaikan panjang teks dengan tata letak Anda',
        description:
          'Jika kartu meluap atau tampak kosong, beralihlah ke satuan Kata dan hasilkan jumlah kata yang tepat sesuai ruangnya, lalu hasilkan ulang hingga kecocokannya tampak pas.',
      },
    ],
    examples: [
      {
        title: 'Cuplikan mockup HTML',
        input: 'Satuan: Paragraf · Jumlah: 1 · Bungkus dengan tag <p>: Dicentang',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation: 'Siap ditempel langsung ke templat HTML atau tampilan kode CMS.',
      },
      {
        title: 'Teks pengisi 100 kata',
        input: 'Satuan: Kata · Jumlah: 100 · Bungkus dengan tag <p>: Tidak dicentang',
        output: 'Lorem ipsum dolor sit amet... (tepat 100 kata)',
        explanation: 'Menghasilkan jumlah kata yang tepat untuk menguji kartu atau kolom yang sempit.',
      },
    ],
    benefits: [
      'Menghasilkan jumlah kata, kalimat, atau paragraf yang tepat sesuai permintaan',
      'Pembungkusan tag <p> opsional menghemat waktu untuk prototipe front-end',
      'Penghitung kata dan karakter langsung memastikan kecocokan tata letak sebelum ditempel',
      'Pembuatan ulang instan tanpa panggilan jaringan eksternal',
    ],
    useCases: [
      'Menguji tinggi kartu dan pembungkus baris dalam tata letak UI responsif',
      'Mempratinjau pasangan font, tinggi baris, dan lebar ukuran',
      'Mengisi templat wireframe dan mockup halaman editorial',
      'Menguji perilaku pemotongan dan luapan dalam komponen CSS',
    ],
    faqs: [
      {
        question: 'Bisakah saya menghasilkan jumlah kata yang tepat, bukan paragraf?',
        answer:
          'Ya. Beralihlah ke pemilih satuan "Kata" dan masukkan angka apa pun hingga 500 kata.',
      },
      {
        question: 'Mengapa menggunakan Lorem Ipsum, bukan mengulang satu frasa?',
        answer:
          'Teks placeholder Latin klasik mendekati distribusi panjang kata dan ritme huruf bahasa Inggris yang alami tanpa mengalihkan perhatian pemangku kepentingan dengan teks yang bisa dibaca.',
      },
      {
        question: 'Apakah opsi tag <p> berfungsi dengan mode Kalimat dan Kata?',
        answer:
          'Ya. Dalam mode Paragraf setiap paragraf mendapatkan pembungkus <p>...</p> sendiri, sedangkan Kalimat dan Kata membungkus blok yang dihasilkan dalam satu elemen <p>.',
      },
      {
        question: 'Apakah Generator Lorem Ipsum gratis digunakan?',
        answer:
          'Ya. Alat ini sepenuhnya gratis tanpa pendaftaran, tanpa akun, dan tanpa batas berapa banyak teks placeholder yang Anda hasilkan.',
      },
      {
        question: 'Apakah saya memerlukan akun atau koneksi internet untuk menghasilkan Lorem Ipsum?',
        answer:
          'Tidak. Generator berjalan sepenuhnya di browser Anda tanpa pendaftaran dan tanpa panggilan jaringan, sehingga berfungsi seketika kapan pun halaman dimuat.',
      },
      {
        question: 'Apa itu Lorem Ipsum?',
        answer:
          'Lorem Ipsum adalah teks placeholder mirip Latin yang diacak dan telah digunakan desainer sejak era typesetting cetak untuk mengisi tata letak sebelum teks asli siap.',
      },
      {
        question: 'Bisakah saya menghasilkan satu kalimat Lorem Ipsum?',
        answer:
          'Ya. Pilih satuan Kalimat, masukkan 1, dan generator menghasilkan satu kalimat placeholder.',
      },
      {
        question: 'Bisakah saya memulai teks dengan kalimat klasik "Lorem ipsum dolor sit amet..."?',
        answer:
          'Ya. Aktifkan opsi pembuka klasik dan teks yang Anda hasilkan dimulai dengan kalimat "Lorem ipsum dolor sit amet..." yang sudah dikenal.',
      },
      {
        question: 'Bisakah saya menempelkan teks yang dihasilkan langsung ke HTML?',
        answer:
          'Ya. Aktifkan opsi tag <p> dan keluaran dibungkus tag paragraf HTML, siap ditempel ke templat atau tampilan kode CMS.',
      },
      {
        question: 'Bisakah saya menghasilkan tepat 100 kata Lorem Ipsum?',
        answer:
          'Ya. Pilih satuan Kata, masukkan 100, dan generator menghasilkan tepat 100 kata teks placeholder.',
      },
      {
        question: 'Apakah teks Lorem Ipsum yang dihasilkan selalu sama?',
        answer:
          'Tidak. Klik Hasilkan Ulang untuk menghasilkan variasi baru dengan struktur kalimat yang berbeda, sehingga blok yang berulang tidak tampak identik.',
      },
      {
        question: 'Apakah Lorem Ipsum bahasa Latin asli?',
        answer:
          'Tidak. Teks ini adalah pseudo-Latin yang diacak dan terdiri dari kata-kata mirip Latin; tampak seperti bahasa asli tetapi tidak memiliki makna sebenarnya.',
      },
      {
        question: 'Bisakah saya menggunakan Lorem Ipsum di situs web yang diterbitkan?',
        answer:
          'Teks ini dimaksudkan sebagai teks placeholder sementara, jadi gantilah dengan konten asli sebelum menerbitkan, jika tidak pengunjung akan melihat teks dummy.',
      },
      {
        question: 'Untuk apa Lorem Ipsum digunakan?',
        answer:
          'Teks ini mengisi wireframe, mockup, dan prototipe agar desainer bisa menguji tipografi, spasi, dan tata letak tanpa menunggu teks final.',
      },
      {
        question: 'Bisakah saya mengontrol panjang setiap kalimat?',
        answer:
          'Tidak. Anda mengontrol jumlah total dalam paragraf, kalimat, atau kata, sedangkan generator memvariasikan panjang kalimat secara alami; hasilkan ulang jika ritmenya tidak sesuai dengan tata letak Anda.',
      },
      {
        question: 'Apakah Generator Lorem Ipsum berfungsi untuk desain cetak juga?',
        answer:
          'Ya. Salin teks yang dihasilkan ke alat cetak, dek slide, atau perangkat lunak tata letak halaman untuk mempratinjau bagaimana teks asli akan mengalir dalam desain.',
      },
      {
        question: 'Bagaimana cara menguji pemotongan teks dengan Lorem Ipsum?',
        answer:
          'Hasilkan jumlah kata yang tepat sesuai ruang Anda, tempelkan ke komponen, dan perhatikan apakah teks terpotong atau meluap pada berbagai ukuran layar.',
      },
      {
        question: 'Bisakah saya menghasilkan Lorem Ipsum dalam bahasa lain?',
        answer:
          'Tidak. Alat ini hanya menghasilkan teks placeholder klasik mirip Latin; untuk teks yang bisa dibaca dalam bahasa lain, tulis atau terjemahkan teks asli sebagai gantinya.',
      },
      {
        question: 'Apakah Generator Lorem Ipsum menyimpan teks yang saya hasilkan?',
        answer:
          'Tidak. Semuanya berjalan secara lokal di browser Anda dan tidak ada yang disimpan atau dikirim ke server.',
      },
      {
        question: 'Mengapa teks placeholder membantu klien berfokus pada desain?',
        answer:
          'Teks draf yang bisa dibaca menarik perhatian ke kata-katanya sendiri, sedangkan Lorem Ipsum yang netral membuat peninjau tetap berfokus pada tata letak, tipografi, dan spasi.',
      },
    ],
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
    instructions: [
      {
        title: 'Tempel artikel atau bagian teks Anda',
        description:
          'Masukkan setidaknya satu kalimat lengkap ke editor, atau klik Muat contoh untuk mencoba dengan teks contoh.',
      },
      {
        title: 'Periksa empat kartu skor',
        description:
          'Tinjau Flesch Reading Ease (0–100, semakin tinggi semakin mudah) plus estimasi tingkat kelas Flesch-Kincaid, Gunning Fog, dan SMOG secara berdampingan.',
      },
      {
        title: 'Baca rincian kalimat dan suku kata',
        description:
          'Periksa rata-rata kata per kalimat, suku kata per kata, dan jumlah kata panjang atau kompleks di balik setiap skor.',
      },
      {
        title: 'Temukan kata-kata kompleks',
        description:
          'Pindai daftar kata dengan 3+ suku kata yang ditandai alat dan catat mana yang bisa Anda ganti dengan istilah sehari-hari yang lebih sederhana.',
      },
      {
        title: 'Pendekkan kalimat panjang dan periksa ulang',
        description:
          'Pecah kalimat padat multi-klausa, tempelkan kembali teks revisi, dan saksikan skor diperbarui secara instan.',
      },
      {
        title: 'Atasi hasil yang tampak aneh',
        description:
          'Jika skor tampak salah, periksa titik yang hilang, singkatan, atau fragmen poin, karena formula menghitung kalimat dan suku kata dari tanda baca.',
      },
    ],
    examples: [
      {
        title: 'Panduan bahasa sederhana',
        input: 'Short sentences keep instructions clear. Use simple words when explaining steps.',
        output: 'Flesch Ease ~78 (Fairly Easy) · Grade ~5.2',
        explanation:
          'Rata-rata panjang kalimat yang lebih pendek dan kata bersuku banyak yang lebih sedikit menghasilkan kemudahan baca yang lebih tinggi. Keempat formula dirancang untuk bahasa Inggris.',
      },
      {
        title: 'Memeriksa draf artikel panjang',
        input: 'Paste a full article of at least 100 words to get reliable scores.',
        output: 'Flesch Ease, Flesch-Kincaid, Gunning Fog, and SMOG scores with complex-word list',
        explanation: 'Sampel yang lebih panjang memberikan hasil yang lebih andal untuk semua formula.',
      },
    ],
    benefits: [
      'Menghitung empat indeks keterbacaan yang banyak digunakan secara bersamaan',
      'Mencantumkan contoh kata dengan 3+ suku kata yang ditemukan dalam bagian teks Anda',
      'Menampilkan rata-rata kata per kalimat dan suku kata per kata secara tepat',
      'Berjalan sepenuhnya offline di memori browser untuk draf yang belum diterbitkan',
    ],
    useCases: [
      'Mengedit dokumentasi, teks UX, dan artikel pusat bantuan agar jelas',
      'Memeriksa materi ajar terhadap tingkat kelas siswa target',
      'Menyederhanakan komunikasi hukum, kesehatan, atau keuangan kepada pelanggan',
      'Meningkatkan keterbacaan cepat postingan blog dan halaman arahan',
    ],
    faqs: [
      {
        question: 'Berapa skor Flesch Reading Ease yang bagus untuk artikel web?',
        answer:
          'Sebagian besar konten web untuk khalayak umum menargetkan skor Flesch Reading Ease antara 60 dan 75, yang kurang lebih setara dengan tingkat bacaan kelas 7 hingga 9.',
      },
      {
        question: 'Bagaimana cara menaikkan skor keterbacaan yang rendah?',
        answer:
          'Pecah kalimat panjang multi-klausa menjadi pernyataan yang lebih pendek dan ganti jargon bersuku 3+ yang tidak perlu dengan kata sehari-hari yang konkret.',
      },
      {
        question: 'Mengapa alat ini menyebut jumlah kalimat untuk SMOG?',
        answer:
          'Formula SMOG standar bergantung pada sampel multi-kalimat, sehingga cuplikan pendek 1–2 kalimat menggunakan estimasi yang diskalakan hingga tersedia 3 kalimat atau lebih.',
      },
      {
        question: 'Untuk apa Pemeriksa Keterbacaan digunakan?',
        answer:
          'Alat ini mengukur seberapa mudah suatu bagian teks dipahami dengan menghitung empat formula keterbacaan standar dan menampilkan statistik kalimat serta suku kata.',
      },
      {
        question: 'Apakah Pemeriksa Keterbacaan gratis digunakan?',
        answer:
          'Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan berjalan di browser Anda sehingga teks Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apa itu Flesch-Kincaid Grade Level?',
        answer:
          'Tingkat ini memperkirakan jenjang sekolah AS yang diperlukan untuk memahami sebuah teks; misalnya, skor 8.0 berarti siswa kelas delapan seharusnya bisa membacanya dengan nyaman.',
      },
      {
        question: 'Apa yang diukur Gunning Fog Index?',
        answer:
          'Indeks ini memperkirakan tahun pendidikan formal yang diperlukan untuk memahami suatu bagian teks pada bacaan pertama, berdasarkan panjang kalimat dan proporsi kata kompleks.',
      },
      {
        question: 'Apa itu indeks SMOG?',
        answer:
          'Indeks SMOG memperkirakan tahun pendidikan yang diperlukan untuk memahami sebuah teks sepenuhnya, dengan menghitung kata bersuku banyak dalam sampel kalimat.',
      },
      {
        question: 'Skor Flesch Reading Ease berapa yang harus saya targetkan?',
        answer:
          'Khalayak umum biasanya menargetkan 60–70, sedangkan konten publik berbahasa sederhana sering menargetkan 70 atau lebih tinggi; tulisan teknis untuk spesialis bisa mendapat skor lebih rendah.',
      },
      {
        question: 'Berapa banyak kata yang saya perlukan untuk skor keterbacaan yang akurat?',
        answer:
          'Sampel yang lebih panjang, setidaknya 100 kata, memberikan hasil yang lebih andal, meskipun alat ini berfungsi pada bagian teks yang lebih pendek dengan estimasi SMOG yang diskalakan.',
      },
      {
        question: 'Apakah Pemeriksa Keterbacaan menyimpan atau mengunggah teks saya?',
        answer:
          'Tidak. Semua perhitungan dilakukan secara lokal di browser Anda, sehingga draf, artikel yang belum diterbitkan, dan dokumen pribadi tetap berada di perangkat Anda.',
      },
      {
        question: 'Mengapa keempat skor saling berbeda?',
        answer:
          'Setiap formula memberi bobot yang berbeda pada panjang kalimat dan jumlah suku kata, jadi perlakukan skor-skor tersebut sebagai estimasi yang saling melengkapi, bukan satu tingkat yang pasti.',
      },
      {
        question: 'Bagaimana suku kata dihitung dalam Pemeriksa Keterbacaan?',
        answer:
          'Alat ini memperkirakan suku kata dari huruf dalam setiap kata, yang akurat untuk sebagian besar kata umum bahasa Inggris tetapi bisa salah menghitung nama yang tidak biasa, singkatan, atau istilah teknis.',
      },
      {
        question: 'Bisakah saya memeriksa keterbacaan untuk teks non-Inggris?',
        answer:
          'Keempat formula dirancang untuk bahasa Inggris, sehingga skor untuk bahasa lain bisa menyesatkan meskipun alat ini tetap menghitungnya.',
      },
      {
        question: 'Apa yang dihitung sebagai kata kompleks?',
        answer:
          'Kata kompleks umumnya adalah kata dengan tiga suku kata atau lebih, tidak termasuk sufiks umum dan nama diri, dan alat ini mencantumkan contoh yang ditemukannya dalam bagian teks Anda.',
      },
      {
        question: 'Apakah tanda baca memengaruhi skor keterbacaan saya?',
        answer:
          'Ya. Batas kalimat berasal dari titik, tanda tanya, dan tanda seru, sehingga tanda baca yang hilang dapat menggabungkan kalimat dan mengacaukan hasilnya.',
      },
      {
        question: 'Bisakah Pemeriksa Keterbacaan membantu SEO?',
        answer:
          'Konten yang lebih jelas dan mudah dibaca membuat pengunjung bertahan lebih lama, yang mendukung SEO secara tidak langsung, meskipun keterbacaan hanyalah salah satu dari banyak faktor peringkat.',
      },
      {
        question: 'Apakah skor Flesch Reading Ease yang lebih tinggi selalu lebih baik?',
        answer:
          'Tidak selalu. Sesuaikan skor dengan audiens Anda: instruksi sederhana seharusnya mendapat skor tinggi, sedangkan pembaca akademik atau hukum spesialis mungkin mengharapkan bahasa yang lebih padat.',
      },
      {
        question: 'Mengapa skor saya berubah saat saya menambahkan judul?',
        answer:
          'Skor dihitung dari seluruh teks yang Anda tempel, sehingga menyertakan judul, label navigasi, atau fragmen kode dapat menggeser rata-rata; periksa teks isi saja untuk hasil yang paling konsisten.',
      },
      {
        question: 'Bisakah saya menggunakan Pemeriksa Keterbacaan untuk esai siswa?',
        answer:
          'Ya. Guru dan siswa bisa menggunakannya untuk memeriksa apakah sebuah esai sesuai dengan tingkat kelas yang dituju sebelum dikumpulkan.',
      },
    ],
  },
  'word-frequency-counter': {
    slug: 'penghitung-frekuensi-kata',
    name: 'Penghitung Frekuensi Kata & Kepadatan Kata Kunci',
    shortDescription:
      'Analisis frekuensi frasa 1 kata, 2 kata, dan 3 kata serta persentase kepadatannya dengan ekspor CSV.',
    keywords: [
      'penghitung frekuensi kata',
      'pemeriksa kepadatan kata kunci',
      'penghitung ngram',
      'analisis pengulangan kata',
      'analisis frekuensi frasa',
      'kalkulator kepadatan kata kunci',
      'hitung kata berulang online',
      'penghitung kemunculan kata',
      'analisis frekuensi teks',
    ],
    seo: {
      title: 'Penghitung Frekuensi Kata & Kepadatan | UtilityFlow',
      description:
        'Analisis frekuensi kata dan kepadatan kata kunci untuk frasa 1, 2, dan 3 kata dengan persentase, penyaringan kata henti, dan ekspor CSV — gratis, di browser.',
      primaryKeyword: 'penghitung frekuensi kata',
      secondaryKeywords: ['pemeriksa kepadatan kata kunci', 'analisis frekuensi frasa', 'alat kemunculan kata', 'penghitung frekuensi ngram'],
      longTailKeywords: ['hitung frekuensi kata dan persentase kepadatan online', 'analisis frasa 2 kata dan 3 kata dalam teks', 'ekspor tabel frekuensi kata ke csv', 'cek penjejalan kata kunci dalam draf artikel'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audit draf konten untuk keseimbangan kata kunci, frasa yang terlalu sering dipakai, dan pola n-gram multi-kata dengan tabel frekuensi instan, penyaringan kata henti, dan laporan CSV yang bisa diunduh.',
    instructions: [
      {
        title: 'Tempel konten Anda',
        description:
          'Masukkan draf artikel, transkrip, teks produk, atau jawaban survei ke dalam kotak teks.',
      },
      {
        title: 'Pilih frasa 1 kata, 2 kata, atau 3 kata',
        description:
          'Beralih antara kata tunggal dan n-gram multi-kata untuk melihat istilah individual atau frasa yang berulang.',
      },
      {
        title: 'Saring kata henti dan atur panjang minimum',
        description:
          'Aktifkan pengecualian kata henti untuk menyembunyikan kata pengisi seperti "yang" dan "dan", dan naikkan panjang kata minimum untuk berfokus pada istilah yang bermakna.',
      },
      {
        title: 'Tinjau jumlah dan persentase kepadatan',
        description:
          'Urutkan tabel untuk melihat kata dan frasa mana yang paling sering muncul dan berapa bagian teks yang diambil masing-masing.',
      },
      {
        title: 'Temukan penggunaan berlebih atau penjejalan kata kunci',
        description:
          'Bandingkan istilah teratas Anda dengan kata kunci target dan tulis ulang bagian di mana satu istilah mendominasi teks.',
      },
      {
        title: 'Salin atau ekspor hasil sebagai CSV',
        description:
          'Klik Ekspor CSV untuk mengunduh tabel ke spreadsheet, atau Salin CSV untuk menempelkannya langsung ke laporan.',
      },
    ],
    examples: [
      {
        title: 'Pemeriksaan kepadatan frasa',
        input: 'Halaman cepat meningkatkan keterlibatan pengguna dan kecepatan halaman.',
        output: 'halaman: 2 · kecepatan halaman: 1 · keterlibatan pengguna: 1',
        explanation:
          'Menampilkan frekuensi istilah individual dan frasa topikal multi-kata.',
      },
      {
        title: 'Menemukan kata yang terlalu sering dipakai',
        input: 'Sangat penting untuk memahami bahwa sangat penting untuk berlatih setiap hari.',
        output: 'sangat: 2 · penting: 2 · sangat penting: 2',
        explanation: 'Menunjukkan pengulangan kata dan frasa yang bisa divariasikan agar tulisan lebih segar.',
      },
    ],
    benefits: [
      'Mendukung analisis n-gram 1 kata, 2 kata, dan 3 kata',
      'Filter kata henti opsional menghapus kata pengisi seperti "yang" dan "dan"',
      'Ambang panjang kata minimum yang bisa disesuaikan',
      'Mengekspor tabel CSV yang bersih dan siap untuk spreadsheet',
    ],
    useCases: [
      'Memeriksa draf artikel agar tidak terjadi penjejalan kata kunci yang tidak disengaja',
      'Menemukan kebiasaan verbal yang berulang dalam pidato atau transkrip',
      'Mengidentifikasi tema yang berulang dalam umpan balik pelanggan atau jawaban survei',
      'Membandingkan keseimbangan frasa multi-kata di seluruh teks halaman arahan',
    ],
    faqs: [
      {
        question: 'Bagaimana persentase kepadatan kata kunci dihitung?',
        answer:
          'Kepadatan sama dengan (kemunculan istilah × kata dalam frasa ÷ total kata dalam teks) × 100, yang memberikan bagian dokumen yang akurat.',
      },
      {
        question: 'Apa itu kata henti?',
        answer:
          'Kata henti adalah kata tata bahasa yang sangat sering muncul seperti "yang", "dan", "dari", "di", dan "ke" yang biasanya membawa sedikit makna topikal dalam audit frekuensi.',
      },
      {
        question: 'Bisakah saya mengekspor hasil frekuensi ke Excel atau Google Sheets?',
        answer:
          'Ya. Klik "Ekspor CSV" untuk mengunduh berkas standar yang dipisah koma atau "Salin CSV" untuk menempelkannya langsung.',
      },
      {
        question: 'Untuk apa Penghitung Frekuensi Kata digunakan?',
        answer:
          'Alat ini menghitung seberapa sering setiap kata atau frasa muncul dalam sebuah teks sehingga Anda bisa menemukan pengulangan, memeriksa keseimbangan kata kunci, dan menemukan tema yang berulang.',
      },
      {
        question: 'Apakah Penghitung Frekuensi Kata gratis digunakan?',
        answer:
          'Ya, alat ini gratis tanpa pendaftaran, dan berjalan sepenuhnya di browser Anda sehingga teks Anda tidak pernah diunggah.',
      },
      {
        question: 'Apa itu kepadatan kata kunci dan mengapa penting?',
        answer:
          'Kepadatan kata kunci adalah persentase teks yang terdiri dari suatu istilah; kepadatan yang alami membantu mesin pencari memahami topik, sedangkan kepadatan yang terlalu tinggi tampak seperti penjejalan.',
      },
      {
        question: 'Berapa persentase kepadatan kata kunci yang bagus?',
        answer:
          'Tidak ada target resmi, tetapi sebagian besar editor menargetkan 1–2% yang alami untuk kata kunci utama dan berfokus pada tulisan yang mudah dibaca dan bermanfaat, bukan mengejar angka.',
      },
      {
        question: 'Apa itu n-gram dalam Penghitung Frekuensi Kata?',
        answer:
          'N-gram adalah rangkaian satu, dua, atau tiga kata berurutan, seperti "kecepatan halaman" atau "keterlibatan pengguna", yang dihitung sebagai frasa tunggal.',
      },
      {
        question: 'Mengapa saya harus menganalisis frasa 2 kata dan 3 kata?',
        answer:
          'Kata tunggal bisa menyesatkan, sedangkan frasa multi-kata mengungkapkan topik sebenarnya dan ungkapan yang berulang dalam konten Anda.',
      },
      {
        question: 'Bagaimana cara kerja filter kata henti?',
        answer:
          'Saat diaktifkan, filter ini menghapus kata tata bahasa umum seperti "yang", "dan", dan "dari" sehingga tabel menyoroti kata topikal, bukan kata pengisi.',
      },
      {
        question: 'Bisakah saya mengubah kata mana yang dihitung sebagai kata henti?',
        answer:
          'Alat ini menggunakan daftar bawaan kata henti umum bahasa Inggris, dan Anda bisa mengaktifkan atau menonaktifkan filter kapan pun Anda ingin melihat tabel lengkapnya.',
      },
      {
        question: 'Apa fungsi pengaturan panjang kata minimum?',
        answer:
          'Pengaturan ini mengecualikan kata yang lebih pendek dari panjang yang Anda pilih, yang membantu menyembunyikan singkatan dan huruf tunggal dari tabel frekuensi.',
      },
      {
        question: 'Apakah Penghitung Frekuensi Kata mengunggah teks saya?',
        answer:
          'Tidak. Semua penghitungan dilakukan secara lokal di browser Anda, sehingga draf pribadi dan transkrip tetap berada di perangkat Anda.',
      },
      {
        question: 'Bisakah saya menghitung frekuensi kata dalam dokumen yang panjang?',
        answer:
          'Ya. Tempelkan artikel atau transkrip yang panjang dan alat ini menghitung setiap kemunculan, meskipun teks yang sangat besar mungkin membutuhkan waktu sejenak untuk diproses.',
      },
      {
        question: 'Bagaimana persentase kepadatan dihitung untuk frasa?',
        answer:
          'Kepadatan sama dengan kemunculan frasa dikali kata dalam frasa, dibagi total kata dalam teks, lalu dikali 100.',
      },
      {
        question: 'Bisakah Penghitung Frekuensi Kata menemukan frasa yang berulang dalam transkrip?',
        answer:
          'Ya. Beralihlah ke mode 2 kata atau 3 kata untuk menemukan kebiasaan verbal dan frasa yang diulang pembicara tanpa disadari.',
      },
      {
        question: 'Apakah tanda baca memengaruhi jumlah kata?',
        answer:
          'Alat ini menghapus tanda baca sebelum menghitung, sehingga "kecepatan," dan "kecepatan" dihitung sebagai kata yang sama.',
      },
      {
        question: 'Apakah kata huruf besar dan huruf kecil dihitung bersama?',
        answer:
          'Ya. Kata diubah menjadi huruf kecil sebelum dihitung, sehingga "Halaman" dan "halaman" dihitung sebagai satu istilah.',
      },
      {
        question: 'Bisakah saya mengekspor tabel frekuensi ke Excel?',
        answer:
          'Ya. Gunakan Ekspor CSV untuk mengunduh berkas yang terbuka langsung di Excel atau Google Sheets, atau Salin CSV untuk menempelkan tabel di mana saja.',
      },
      {
        question: 'Bagaimana cara menggunakan frekuensi kata untuk meningkatkan tulisan saya?',
        answer:
          'Carilah kata yang Anda ulangi tanpa sengaja, ganti dengan sinonim yang bervariasi, dan periksa apakah kata kunci topik utama Anda muncul secara konsisten tetapi alami.',
      },
    ],
  },
  'text-to-slug': {
    slug: 'teks-ke-slug',
    name: 'Pengubah Teks ke Slug',
    shortDescription:
      'Ubah judul dan heading menjadi slug URL yang bersih dan ramah SEO dengan transliterasi aksen dan mode massal.',
    keywords: [
      'teks ke slug',
      'generator slug url',
      'slugify online',
      'pemformat url seo',
      'konverter slug',
      'buat slug url',
      'konverter judul ke slug',
      'pembuat slug url bersih',
      'generator slug massal',
    ],
    seo: {
      title: 'Pengubah Teks ke Slug – URL SEO Bersih | UtilityFlow',
      description:
        'Ubah judul dan heading menjadi slug URL yang bersih dan ramah SEO dengan transliterasi aksen, pemisah strip atau garis bawah, dan mode baris massal — gratis.',
      primaryKeyword: 'pengubah teks ke slug',
      secondaryKeywords: ['generator slug url', 'slugify string', 'generator url bersih', 'alat judul ke slug'],
      longTailKeywords: ['ubah judul artikel jadi slug url ramah seo', 'ubah banyak judul jadi slug secara massal', 'slugify karakter beraksen jadi ascii online', 'pemisah slug strip atau garis bawah'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ubah judul blog, nama produk, dan kalender konten multi-baris menjadi slug ASCII yang bersih dan aman untuk URL dengan transliterasi aksen otomatis, kontrol pemisah, dan penghapusan kata henti opsional.',
    instructions: [
      {
        title: 'Masukkan satu atau beberapa judul',
        description:
          'Ketik satu judul atau tempelkan beberapa baris untuk menghasilkan slug untuk masing-masing dalam mode massal.',
      },
      {
        title: 'Pilih pemisah',
        description:
          'Pilih strip (-) untuk URL yang ramah SEO atau garis bawah (_) untuk nama berkas dan kunci basis data.',
      },
      {
        title: 'Sesuaikan huruf kecil dan kata henti',
        description:
          'Pertahankan huruf kecil untuk URL yang bersih dan secara opsional hapus kata henti umum seperti "yang" dan "dan" untuk slug yang lebih pendek.',
      },
      {
        title: 'Tinjau slug yang dihasilkan',
        description:
          'Periksa apakah setiap slug mudah dibaca, mempertahankan kata kuncinya, dan tidak mengandung tanda baca liar atau pemisah ganda.',
      },
      {
        title: 'Salin slug ke CMS atau kode Anda',
        description:
          'Salin slug individual atau seluruh batch ke sistem konten, tabel routing, atau nama berkas Anda.',
      },
      {
        title: 'Perbaiki slug yang tampak salah',
        description:
          'Jika sebuah karakter tampak aneh, periksa simbol yang tidak biasa atau aksara non-Latin dalam judul asli dan sederhanakan sebelum mengubah lagi.',
      },
    ],
    examples: [
      {
        title: 'Normalisasi judul beraksen',
        input: 'Café & Crème: Panduan 2026!',
        output: 'cafe-and-creme-panduan-2026',
        explanation:
          'Mentransliterasi huruf Latin beraksen, memperluas "&" menjadi "and", dan menghapus tanda baca.',
      },
      {
        title: 'Konversi massal beberapa judul',
        input: 'Cara Membuat Kopi\nPanduan Memulai Berkebun',
        output: 'cara-membuat-kopi\npanduan-memulai-berkebun',
        explanation: 'Setiap baris diubah menjadi slugnya sendiri dalam sekali jalan.',
      },
    ],
    benefits: [
      'Menormalkan karakter beraksen (é, ñ, ü) menjadi padanan ASCII yang bersih',
      'Mendukung konversi massal multi-baris dalam sekali jalan',
      'Menawarkan penghapusan kata henti opsional untuk URL yang lebih pendek',
      'Mengganti "&" dengan rapi menjadi "and", bukan menghilangkan maknanya',
    ],
    useCases: [
      'Menghasilkan URL postingan blog dan dokumentasi yang mudah dibaca',
      'Membuat nama berkas yang konsisten untuk aset dan gambar yang bisa diunduh',
      'Menyiapkan slug rute secara massal untuk situs statis dan katalog e-commerce',
      'Menstandarkan pengenal kategori atau tag dalam basis data',
    ],
    faqs: [
      {
        question: 'Haruskah saya menggunakan strip atau garis bawah dalam slug URL?',
        answer:
          'Mesin pencari umumnya merekomendasikan strip (-) sebagai pemisah kata dalam URL, sedangkan garis bawah (_) umum digunakan untuk nama berkas atau kunci basis data.',
      },
      {
        question: 'Bagaimana alat ini menangani karakter beraksen seperti "café"?',
        answer:
          'Alat ini menerapkan normalisasi Unicode NFD untuk memisahkan tanda diakritik dan menghapusnya dengan rapi, mengubah "café" menjadi "cafe", bukan menghapus hurufnya.',
      },
      {
        question: 'Bisakah saya mengubah 50 judul sekaligus?',
        answer:
          'Ya. Tempelkan satu judul per baris dan setiap baris akan diubah menjadi slug yang sesuai di sebelah kanan.',
      },
      {
        question: 'Apa itu Pengubah Teks ke Slug?',
        answer:
          'Alat ini mengubah judul atau frasa menjadi slug yang bersih dan aman untuk URL dengan mengubahnya menjadi huruf kecil, menghapus tanda baca, dan mengganti spasi dengan strip atau garis bawah.',
      },
      {
        question: 'Apakah Pengubah Teks ke Slug gratis digunakan?',
        answer:
          'Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan berjalan di browser Anda sehingga judul Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Apa yang membuat slug ramah SEO?',
        answer:
          'Slug yang bagus itu pendek, mudah dibaca, huruf kecil, dan dibangun dari kata-kata asli yang mendeskripsikan halaman, dengan strip yang memisahkan kata-katanya.',
      },
      {
        question: 'Seberapa panjang seharusnya slug URL?',
        answer:
          'Targetkan tiga hingga lima kata yang bermakna; slug yang lebih panjang terpotong di hasil pencarian dan lebih sulit diingat pembaca.',
      },
      {
        question: 'Mengapa slug ditulis huruf kecil?',
        answer:
          'URL huruf kecil menghindari masalah konten duplikat, karena beberapa server memperlakukan "/Panduan" dan "/panduan" sebagai halaman yang berbeda.',
      },
      {
        question: 'Apa yang terjadi pada angka dalam slug?',
        answer:
          'Angka dipertahankan apa adanya, sehingga judul seperti "Panduan untuk 2026" menjadi "panduan-untuk-2026".',
      },
      {
        question: 'Bagaimana karakter khusus ditangani dalam slug?',
        answer:
          'Tanda baca dan simbol dihapus, "&" menjadi "and", dan huruf beraksen seperti é ditransliterasi menjadi padanan ASCII biasa.',
      },
      {
        question: 'Bisakah Pengubah Teks ke Slug menangani judul non-Inggris?',
        answer:
          'Karakter beraksen berbasis Latin ditransliterasi dengan rapi, tetapi aksara non-Latin bisa terhapus, jadi periksa keluarannya sebelum diterbitkan.',
      },
      {
        question: 'Apa itu kata henti dalam slug?',
        answer:
          'Kata henti adalah kata umum seperti "a", "the", dan "of" yang menambah panjang tanpa makna; menghapusnya membuat URL yang lebih pendek dan bersih.',
      },
      {
        question: 'Haruskah saya menghapus kata henti dari setiap slug?',
        answer:
          'Tidak selalu. Pertahankan kata henti saat diperlukan untuk kejelasan, seperti dalam panduan "cara-", dan hapus hanya saat slug tetap mudah dibaca tanpanya.',
      },
      {
        question: 'Bisakah saya mengubah banyak judul sekaligus?',
        answer:
          'Ya. Tempelkan satu judul per baris dan alat ini menghasilkan slug yang cocok untuk setiap baris dalam sekali jalan.',
      },
      {
        question: 'Apakah Pengubah Teks ke Slug mengunggah judul saya?',
        answer:
          'Tidak. Semua konversi dilakukan secara lokal di browser Anda, sehingga judul dan nama produk yang belum diterbitkan tetap privat.',
      },
      {
        question: 'Mengapa slug saya memiliki strip ganda?',
        answer:
          'Strip ganda biasanya berasal dari tanda baca atau spasi berurutan dalam judul asli; bersihkan judul atau hapus tanda baca berlebih lalu ubah lagi.',
      },
      {
        question: 'Bisakah saya menggunakan slug untuk nama berkas juga?',
        answer:
          'Ya. Slug membuat nama berkas yang aman dan mudah dibaca, dan opsi pemisah garis bawah cocok untuk sistem berkas dan kunci basis data.',
      },
      {
        question: 'Apa perbedaan antara slug dan URL?',
        answer:
          'Slug adalah ekor URL yang bisa dibaca, seperti "panduan-kompresor-gambar" dalam contoh.com/panduan-kompresor-gambar.',
      },
      {
        question: 'Apakah slug memengaruhi peringkat pencarian?',
        answer:
          'Slug yang jelas membantu mesin pencari dan pembaca memahami halaman sekilas, meskipun slug hanyalah satu bagian kecil dari SEO.',
      },
      {
        question: 'Bisakah saya mengubah slug setelah halaman diterbitkan?',
        answer:
          'Ya, tetapi siapkan pengalihan dari URL lama ke URL baru agar tautan yang ada dan daftar pencarian tidak rusak.',
      },
    ],
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
    instructions: [
      {
        title: 'Tulis atau tempel Markdown',
        description:
          'Gunakan sintaks standar (# heading, **tebal**, *miring*, daftar, kutipan blok, tautan, dan blok kode berpagar) di panel kiri.',
      },
      {
        title: 'Saksikan pratinjau langsung',
        description:
          'Panel kanan merender pemformatan Anda secara instan saat Anda mengetik, sehingga Anda bisa memeriksa heading, daftar, dan tautan tanpa menyegarkan.',
      },
      {
        title: 'Beralih ke tab HTML Mentah',
        description:
          'Beralih di atas panel kanan untuk memeriksa markup HTML yang dikompilasi, yang menjadi dasar pratinjau.',
      },
      {
        title: 'Periksa blok kode dan tautan',
        description:
          'Gulir pratinjau untuk memastikan blok kode berpagar dirender dengan benar dan tautan mengarah ke tempat yang Anda harapkan.',
      },
      {
        title: 'Salin HTML atau ekspor berkas',
        description:
          'Klik Salin HTML untuk cuplikan yang ditempel ke CMS atau email, atau Ekspor HTML untuk mengunduh dokumen HTML5 mandiri.',
      },
      {
        title: 'Perbaiki pemformatan yang tampak salah',
        description:
          'Jika daftar atau blok kode tidak dirender, periksa baris kosong yang hilang sebelumnya atau pagar backtick yang tidak tertutup, lalu periksa lagi pratinjaunya.',
      },
    ],
    examples: [
      {
        title: 'Konversi heading dan daftar',
        input: '## Daftar Periksa\n- **Verifikasi** tautan\n- Terbitkan draf',
        output: '<h2>Daftar Periksa</h2><ul><li><strong>Verifikasi</strong> tautan</li><li>Terbitkan draf</li></ul>',
        explanation: 'Mengubah sintaks Markdown yang bersih langsung menjadi elemen HTML semantik.',
      },
      {
        title: 'Pratinjau README sebelum commit',
        input: '# Proyek Saya\n\nPanduan singkat untuk memulai.',
        output: '<h1>Proyek Saya</h1><p>Panduan singkat untuk memulai.</p>',
        explanation: 'Memeriksa bagaimana README akan tampil di GitHub sebelum Anda melakukan commit.',
      },
    ],
    benefits: [
      'Meng-escape HTML mentah dan membersihkan skema tautan untuk mencegah markup pratinjau yang tidak aman',
      'Mendukung heading, tebal/miring, coret, kutipan blok, daftar, tautan, dan blok kode',
      'Beralih dengan mudah antara pratinjau visual dan sumber HTML mentah',
      'Mengunduh berkas .html mandiri yang lengkap dalam satu klik',
    ],
    useCases: [
      'Mempratinjau berkas README.md GitHub sebelum commit',
      'Mengubah catatan Markdown menjadi HTML bersih untuk email atau blok CMS',
      'Menyusun tutorial teknis dan catatan rilis secara offline',
      'Memeriksa pemformatan tautan dan pagar kode dengan cepat',
    ],
    faqs: [
      {
        question: 'Apakah Pratinjau Markdown menjalankan JavaScript yang disematkan?',
        answer:
          'Tidak. Tag HTML mentah dalam masukan di-escape dan protokol tautan dibatasi pada skema web yang aman, relatif, jangkar, dan mailto.',
      },
      {
        question: 'Bisakah saya menyalin hanya fragmen HTML yang dikompilasi tanpa boilerplate <html>?',
        answer:
          'Ya. Tombol "Salin HTML" menyalin markup isi HTML yang dikompilasi, sedangkan "Ekspor HTML" membungkusnya dalam dokumen HTML5 mandiri.',
      },
      {
        question: 'Apakah blok kode berpagar didukung?',
        answer:
          'Ya. Bungkus cuplikan kode multi-baris dalam tiga backtick (```) untuk merender blok <pre><code> yang diformat.',
      },
      {
        question: 'Apa itu Pratinjau Markdown?',
        answer:
          'Alat ini merender teks Markdown menjadi HTML yang diformat secara real time sehingga Anda bisa melihat persis bagaimana heading, daftar, tautan, dan kode akan tampil sebelum diterbitkan.',
      },
      {
        question: 'Apakah Pratinjau Markdown gratis digunakan?',
        answer:
          'Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan berjalan di browser Anda sehingga draf Anda tidak pernah diunggah.',
      },
      {
        question: 'Sintaks Markdown apa yang didukung pratinjau ini?',
        answer:
          'Alat ini mendukung heading, tebal, miring, coret, kutipan blok, daftar berurutan dan tidak berurutan, tautan, gambar, dan blok kode berpagar.',
      },
      {
        question: 'Bisakah saya mempratinjau README GitHub dengan alat ini?',
        answer:
          'Ya. Tempelkan konten README.md Anda ke editor untuk memeriksa tampilannya di GitHub sebelum Anda melakukan commit.',
      },
      {
        question: 'Apakah Pratinjau Markdown mendukung tabel?',
        answer:
          'Dukungan tabel bergantung pada ragam Markdown; periksa pratinjau untuk melihat apakah tabel pipa Anda dirender, dan sederhanakan jika tidak.',
      },
      {
        question: 'Apa perbedaan antara Salin HTML dan Ekspor HTML?',
        answer:
          'Salin HTML hanya menyalin markup isi yang dikompilasi untuk ditempel di tempat lain, sedangkan Ekspor HTML mengunduh dokumen HTML5 mandiri yang lengkap.',
      },
      {
        question: 'Apakah HTML yang diekspor merupakan halaman web yang lengkap?',
        answer:
          'Ya. Ekspor membungkus konten Anda dalam dokumen HTML5 lengkap dengan tag head dan body, siap dibuka di browser apa pun.',
      },
      {
        question: 'Apakah Pratinjau Markdown menjalankan JavaScript dari masukan saya?',
        answer:
          'Tidak. Tag HTML mentah di-escape dan protokol tautan dibatasi pada skema web yang aman, jalur relatif, jangkar, dan mailto.',
      },
      {
        question: 'Bisakah saya menggunakan Pratinjau Markdown secara offline?',
        answer:
          'Editor dan pratinjau berjalan sepenuhnya di browser Anda tanpa unggahan, sehingga draf Anda tetap berada di perangkat Anda saat Anda bekerja.',
      },
      {
        question: 'Apakah Pratinjau Markdown menyimpan pekerjaan saya?',
        answer:
          'Alat ini tidak menyimpan teks Anda di server mana pun, jadi salin atau ekspor apa pun yang penting sebelum menutup tab.',
      },
      {
        question: 'Bagaimana cara menambahkan gambar dalam Markdown?',
        answer:
          'Gunakan sintaks ![teks alt](url-gambar) dan gambar akan dirender dalam pratinjau saat URL-nya bisa dijangkau.',
      },
      {
        question: 'Mengapa blok kode saya tidak dirender?',
        answer:
          'Pastikan pagar pembuka dan penutup menggunakan tiga backtick pada barisnya sendiri, dengan baris kosong sebelum pagar pembuka.',
      },
      {
        question: 'Bisakah saya mengubah Markdown menjadi HTML untuk email?',
        answer:
          'Ya. Salin fragmen HTML yang dikompilasi dan tempelkan ke editor email yang menerima HTML, atau ekspor dokumen lengkapnya terlebih dahulu.',
      },
      {
        question: 'Bisakah saya menulis blok kode dengan tag bahasa?',
        answer:
          'Ya. Tambahkan nama bahasa setelah backtick pembuka, misalnya ```js, dan blok tersebut dirender sebagai kode yang diformat.',
      },
      {
        question: 'Bisakah saya menempelkan Markdown yang disalin dari editor lain?',
        answer:
          'Ya. Tempelkan Markdown dari editor atau aplikasi catatan apa pun dan pratinjau diperbarui secara langsung.',
      },
      {
        question: 'Apa yang terjadi pada tautan dalam pratinjau?',
        answer:
          'Tautan dirender sebagai jangkar yang bisa diklik dalam pratinjau, dan hanya protokol aman seperti https, jalur relatif, jangkar, dan mailto yang diizinkan.',
      },
      {
        question: 'Bisakah saya mencetak pratinjau yang dirender?',
        answer:
          'Ya. Ekspor berkas HTML dan buka di browser Anda, lalu gunakan fungsi cetak browser untuk mencetaknya atau menyimpannya sebagai PDF.',
      },
    ],
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
    instructions: [
      {
        title: 'Atur awalan dan akhiran Anda',
        description:
          'Masukkan teks apa pun untuk ditambahkan sebelum atau sesudah setiap baris, seperti tanda kutip pembuka, poin, atau tag penutup.',
      },
      {
        title: 'Aktifkan nomor baris jika diperlukan',
        description:
          'Aktifkan Tambah nomor baris dan atur nomor awal serta pemisah, misalnya "1. " atau "01: ".',
      },
      {
        title: 'Tempel baris Anda',
        description:
          'Masukkan satu item per baris di Baris Masukan, atau klik Muat contoh untuk melihat pengutipan gaya SQL beraksi.',
      },
      {
        title: 'Pilih cara baris kosong ditangani',
        description:
          'Biarkan Lewati baris kosong tetap dicentang agar baris kosong pemisah dipertahankan tanpa penomoran atau karakter tambahan.',
      },
      {
        title: 'Tinjau keluaran yang diformat',
        description:
          'Periksa apakah tanda kutip, koma, dan angka sejajar di setiap baris sebelum Anda menggunakan hasilnya.',
      },
      {
        title: 'Salin baris yang diformat',
        description:
          'Salin seluruh blok ke papan klip Anda dan tempelkan ke kueri SQL, berkas kode, atau dokumen Anda.',
      },
    ],
    examples: [
      {
        title: 'Memformat nilai untuk klausa SQL IN',
        input: 'Awalan: \'  |  Akhiran: \',  |  Baris: jakarta / bandung',
        output: "'jakarta',\n'bandung',",
        explanation: 'Membungkus item teks biasa dalam tanda kutip tunggal dan koma di akhir secara instan.',
      },
      {
        title: 'Langkah bernomor dengan nol di depan',
        input: 'Nomor baris: Aktif · Isi nol: Aktif · Pemisah: ": "',
        output: '01: Langkah satu\n02: Langkah dua',
        explanation: 'Membuat daftar bernomor yang sejajar untuk kerangka atau dokumentasi.',
      },
    ],
    benefits: [
      'Menggabungkan awalan, akhiran, dan penomoran baris berurutan dalam satu alat',
      'Pengisian nol opsional menjaga daftar multi-digit tetap sejajar secara visual',
      'Melewati baris kosong secara otomatis saat diaktifkan agar penghitung tetap akurat',
      'Tanpa unggahan ke server untuk ID atau nilai kueri yang sensitif',
    ],
    useCases: [
      'Membungkus ID spreadsheet dalam tanda kutip dan koma untuk kueri SQL IN (...)',
      'Mengubah item teks biasa menjadi poin Markdown atau tag <li> HTML',
      'Menambahkan nomor langkah berurutan ke daftar periksa dan kerangka',
      'Membangun array string untuk JavaScript, Python, atau JSON',
    ],
    faqs: [
      {
        question: 'Bisakah saya menambahkan hanya nomor baris tanpa awalan atau akhiran?',
        answer:
          'Ya. Kosongkan masukan Awalan Baris dan Akhiran Baris, aktifkan "Tambah nomor baris", dan atur nomor awal serta pemisah yang Anda sukai.',
      },
      {
        question: 'Bagaimana cara melewati penomoran baris kosong pemisah?',
        answer:
          'Biarkan "Lewati baris kosong" tetap dicentang agar baris kosong dipertahankan tanpa menambah penghitung baris atau menerima awalan/akhiran.',
      },
      {
        question: 'Bisakah saya memulai penomoran dari 0 atau angka kustom apa pun?',
        answer:
          'Ya. Masukkan bilangan bulat apa pun di kolom Nomor Awal untuk mulai menghitung dari 0, 1, 100, atau offset lainnya.',
      },
      {
        question: 'Apa itu alat Tambah Nomor Baris & Awalan/Akhiran?',
        answer:
          'Alat ini menambahkan awalan kustom, akhiran, atau nomor baris berurutan ke setiap baris daftar, sehingga Anda bisa memformat teks secara massal, bukan mengedit setiap baris dengan tangan.',
      },
      {
        question: 'Apakah alat awalan dan akhiran baris gratis digunakan?',
        answer:
          'Ya, alat ini sepenuhnya gratis tanpa pendaftaran, dan berjalan di browser Anda sehingga teks Anda tidak pernah keluar dari perangkat Anda.',
      },
      {
        question: 'Bisakah saya menambahkan awalan tanpa akhiran?',
        answer:
          'Ya. Isi hanya kolom Awalan Baris dan biarkan akhiran kosong, atau sebaliknya, dan hanya bagian yang Anda masukkan yang akan diterapkan.',
      },
      {
        question: 'Bagaimana cara membungkus baris dalam tanda kutip untuk klausa SQL IN?',
        answer:
          'Masukkan tanda kutip tunggal sebagai awalan dan "\'," sebagai akhiran, dan setiap baris menjadi nilai yang dikutip diikuti koma.',
      },
      {
        question: 'Bisakah saya menambahkan koma di akhir setiap baris?',
        answer:
          'Ya. Letakkan koma di kolom Akhiran Baris dan setiap baris non-kosong akan berakhir dengan koma.',
      },
      {
        question: 'Bagaimana cara kerja pengisian nol untuk nomor baris?',
        answer:
          'Saat isi nol diaktifkan, angka diisi hingga lebar yang sama, sehingga daftar 100 baris menampilkan 001, 002, dan seterusnya, bukan 1, 2, dan 100.',
      },
      {
        question: 'Pemisah apa yang harus saya gunakan untuk baris bernomor?',
        answer:
          'Pilihan umum adalah ". " untuk daftar bernomor biasa, ": " untuk langkah berlabel, dan ") " untuk penomoran gaya kerangka.',
      },
      {
        question: 'Bisakah saya memberi nomor baris mulai dari angka selain 1?',
        answer:
          'Ya. Masukkan bilangan bulat apa pun di kolom Nomor Awal untuk memulai dari 0, 100, atau offset lain yang Anda perlukan.',
      },
      {
        question: 'Apa yang terjadi pada baris kosong dalam daftar saya?',
        answer:
          'Dengan Lewati baris kosong diaktifkan, baris kosong dipertahankan apa adanya tanpa angka atau imbuhan; jika mati, baris kosong diperlakukan seperti baris lainnya.',
      },
      {
        question: 'Bisakah saya menggunakan alat ini untuk membuat daftar poin Markdown?',
        answer:
          'Ya. Masukkan "- " sebagai awalan dan setiap baris menjadi poin Markdown.',
      },
      {
        question: 'Bisakah saya mengubah baris menjadi item daftar HTML?',
        answer:
          'Ya. Gunakan "<li>" sebagai awalan dan "</li>" sebagai akhiran untuk membungkus setiap baris dalam tag item daftar.',
      },
      {
        question: 'Apakah alat ini mengunggah teks saya ke server?',
        answer:
          'Tidak. Semua pemformatan dilakukan secara lokal di browser Anda, yang menjaga ID, nilai kueri, dan kode sensitif tetap privat.',
      },
      {
        question: 'Bisakah saya memformat baris untuk array JavaScript atau Python?',
        answer:
          'Ya. Bungkus baris dalam tanda kutip dengan koma di akhir dan tempelkan hasilnya langsung ke literal array.',
      },
      {
        question: 'Apakah ada batas berapa banyak baris yang bisa saya format?',
        answer:
          'Alat ini menangani daftar panjang dengan nyaman, meskipun tempelan yang sangat besar mungkin membutuhkan waktu sejenak untuk diproses di browser.',
      },
      {
        question: 'Mengapa beberapa baris tidak diberi nomor?',
        answer:
          'Periksa apakah Lewati baris kosong diaktifkan, karena baris kosong dilewati sesuai rancangan dan tidak akan menerima nomor.',
      },
      {
        question: 'Bisakah saya menambahkan awalan yang berbeda ke baris yang berbeda?',
        answer:
          'Tidak. Alat ini menerapkan awalan dan akhiran yang sama ke setiap baris; untuk pemformatan campuran, jalankan setiap grup melalui alat ini secara terpisah.',
      },
      {
        question: 'Bagaimana cara menghapus awalan yang saya tambahkan karena kesalahan?',
        answer:
          'Tempelkan teks yang diformat ke alat Cari dan Ganti atau jalankan ulang daftar asli dengan pengaturan yang benar, karena alat ini hanya menambahkan teks dan tidak menghapusnya.',
      },
    ],
  },
};
