import type { UiStrings } from '../ui';

/**
 * Indonesian chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural standard Bahasa Indonesia;
 * brand names, URLs, email addresses and code values kept identical
 * to English.
 */
export const idStrings: UiStrings = {
  nav: {
    tools: 'Alat',
    categories: 'Kategori',
    aiTools: 'Alat AI',
    about: 'Tentang',
    contact: 'Kontak',
    blog: 'Blog',
    allTools: 'Semua Alat',
    freeAiTools: 'Alat AI Gratis',
    viewAiSection: 'Lihat bagian AI di Beranda →',
    searchPlaceholder: 'Cari 88 alat...',
    searchTools: 'Cari alat',
    closeSearch: 'Tutup pencarian',
    openMenu: 'Buka menu navigasi',
    closeMenu: 'Tutup menu navigasi',
    skipToContent: 'Lewati ke konten',
    language: 'Bahasa',
    chooseLanguage: 'Pilih bahasa',
    aiWriting: {
      label: 'Asisten Penulisan AI',
      desc: 'Tata bahasa, penulisan ulang, nada & draf email',
    },
    aiSummarizer: {
      label: 'Perangkum Teks AI',
      desc: 'Ringkasan singkat, sedang & berpoin',
    },
    aiFinder: {
      label: 'Pencari Alat Cerdas AI',
      desc: 'Temukan alat yang tepat dengan bahasa sederhana',
    },
  },
  footer: {
    tagline:
      'Koleksi utilitas sehari-hari yang cepat dan berbasis browser untuk penulis, insinyur, pemasar, dan analis. Dibangun untuk berjalan secara lokal dengan beban minimal.',
    categories: 'Kategori',
    platformAi: 'Platform & AI',
    trustLegal: 'Kepercayaan & Hukum',
    home: 'Beranda',
    allToolsDirectory: 'Direktori Semua Alat',
    blog: 'Blog',
    aboutUs: 'Tentang Kami',
    contact: 'Kontak',
    privacyPolicy: 'Kebijakan Privasi',
    termsOfService: 'Syarat Layanan',
    xmlSitemap: 'Peta Situs XML',
    rightsReserved: 'Hak cipta dilindungi.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Kami menggunakan cookie dan analitik untuk memahami cara situs digunakan dan meningkatkannya. Anda dapat menerima atau menolak.',
    accept: 'Terima',
    decline: 'Tolak',
    cookieSettings: 'Pengaturan cookie',
  },
  common: {
    copy: 'Salin',
    copied: 'Disalin',
    download: 'Unduh',
    clear: 'Hapus',
    loadSample: 'Muat contoh',
    reset: 'Atur Ulang',
    search: 'Cari',
    close: 'Tutup',
    cancel: 'Batal',
    save: 'Simpan',
    submit: 'Kirim',
    loading: 'Memuat...',
    processing: 'Memproses...',
    upload: 'Unggah',
    chooseFile: 'Pilih file',
    dragDrop: 'Seret & letakkan file Anda di sini',
    tryAgain: 'Coba lagi',
    openTool: 'Buka alat',
    browserSide: 'Berbasis browser',
    freeAiTool: 'Alat AI Gratis',
    externalApi: 'API Eksternal',
  },
  home: {
    seoTitle: 'UtilityFlow – Alat Utilitas Online Cepat Berbasis Browser',
    seoDescription:
      'Alat utilitas online gratis, cepat, dan mengutamakan privasi untuk analisis teks, pemformatan developer, kalkulator, PDF, pemeriksaan SEO, dan gambar.',
    seoKeywords: [
      'alat utilitas online',
      'alat browser',
      'alat teks',
      'alat developer',
      'kalkulator online',
      'alat pdf',
      'alat seo',
    ],
    eyebrow: 'Platform UtilityFlow · 7 Kategori Inti · {count} Utilitas Aktif',
    h1: 'Utilitas online praktis yang dibuat untuk kecepatan dan privasi.',
    heroDescription:
      'UtilityFlow mengorganisasi 84 utilitas berbasis browser plus penulisan AI gratis, perangkuman, dan penemuan alat cerdas untuk alur kerja teks, developer, kalkulator, media sosial, PDF, SEO, dan gambar.',
    exploreCategories: 'Jelajahi Kategori',
    openDirectory: 'Buka Direktori Lengkap',
    aiWriting: 'Penulisan AI',
    aiSummarizer: 'Perangkum AI',
    aiFinder: 'Pencari Alat AI',
    metrics: {
      toolCategories: 'Kategori Alat',
      browserUtilities: 'Utilitas Browser',
      liveTools: 'Alat Aktif',
      accountRequired: 'Akun Diperlukan',
      none: 'Tidak Ada',
    },
    aiSpotlight: {
      badge: 'Suite AI Gratis · Tanpa Login',
      title: 'Alat AI Gratis',
      description:
        'Tingkatkan draf, ringkas dokumen panjang, atau temukan alat yang tepat dalam hitungan detik tanpa mendaftar.',
    },
    popular: {
      title: 'Alat Populer',
      description: 'Utilitas sehari-hari yang paling sering digunakan untuk menulis, pengembangan, dan perhitungan.',
      viewDirectory: 'Lihat direktori alat',
    },
    categories: {
      title: 'Kategori Alat',
      description:
        'Tujuh suite khusus yang dirancang untuk mencakup alur kerja penulisan, pengkodean, matematika, penerbitan, dokumen, optimasi pencarian, dan media.',
      includes: 'Termasuk: {names}',
    },
    directory: {
      title: 'Direktori Semua Alat',
      description:
        'Filter berdasarkan kategori atau kata kunci untuk langsung menuju utilitas aktif atau hub kategori mana pun.',
      filterPlaceholder: 'Filter kategori atau alat...',
      allCategories: 'Semua Kategori',
      noMatch: 'Tidak ada kategori atau alat yang cocok dengan "{query}".',
      resetFilters: 'Atur ulang filter',
      upcomingUtilities: 'Utilitas mendatang: {names}',
      toolsActive: '{count} alat aktif',
      openCategory: 'Buka halaman kategori',
    },
    why: {
      title: 'Mengapa Memilih UtilityFlow',
      description: 'Dirancang sebagai alternatif yang bersih dan andal untuk situs utilitas yang penuh iklan.',
      items: [
        {
          title: 'Privasi berbasis browser',
          description:
            'Perhitungan inti, transformasi string, dan pemformatan berjalan langsung di memori klien sehingga draf sensitif dan payload JSON Anda tetap berada di perangkat Anda.',
        },
        {
          title: 'Pengiriman cepat dan ringan',
          description:
            'Modul alat yang dipecah berdasarkan kode dan dependensi runtime minimal menjaga pemuatan halaman awal tetap ringan dan Core Web Vitals responsif di koneksi apa pun.',
        },
        {
          title: 'URL bersih permanen',
          description:
            'Setiap utilitas berada di jalurnya sendiri yang khusus dengan metadata terstruktur, contoh penggunaan, dan keandalan tautan langsung saat penyegaran browser.',
        },
        {
          title: 'Hasil yang dapat diprediksi dan diverifikasi',
          description:
            'Alat berfokus pada keluaran deterministik, instruksi transparan, dan kontrol yang mudah diakses tanpa popup yang mengganggu atau indikator yang menyesatkan.',
        },
      ],
    },
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      description:
        'Detail penting tentang cara UtilityFlow beroperasi dan apa yang diharapkan dari alat baru.',
    },
    faqs: [
      {
        question: 'Apakah alat UtilityFlow gratis digunakan tanpa membuat akun?',
        answer:
          'Ya. Semua 84 utilitas browser, 3 alat AI, dan Kalkulator Mata Uang di UtilityFlow tersedia gratis tanpa registrasi, dinding masuk, kredit, atau langganan.',
      },
      {
        question: 'Apakah UtilityFlow mengunggah teks, kode, atau file saya ke server?',
        answer:
          'Semua 84 utilitas browser inti berjalan secara lokal di browser web Anda tanpa mengunggah input. Tiga alat AI Gratis opsional kami (Asisten Penulisan AI, Perangkum Teks AI, dan Pencari Alat Cerdas AI) memproses prompt secara aman melalui inferensi Groq di sisi server tanpa menyimpan teks Anda.',
      },
      {
        question: 'Bagaimana 88 alat diatur di seluruh platform?',
        answer:
          'UtilityFlow mencakup tujuh kategori inti (Teks & Penulisan, Developer, Kalkulator, Media Sosial, PDF, SEO, dan Alat Gambar & File) dengan total 84 alat browser, 3 alat AI Gratis, dan Kalkulator Mata Uang yang terintegrasi ke dalam platform.',
      },
      {
        question: 'Bisakah saya menandai atau membagikan tautan langsung ke alat tertentu?',
        answer:
          'Ya. Setiap alat dan kategori mendapatkan URL permanen yang bersih (seperti /word-counter/, /ai-writing-assistant/, atau /category/developer-tools/) yang dapat dimuat langsung dan berfungsi saat penyegaran browser.',
      },
      {
        question: 'Apakah UtilityFlow berfungsi dengan lancar di ponsel dan tablet?',
        answer:
          'Ya. Semua tata letak, kontrol navigasi, dan ruang kerja interaktif—termasuk Mode Terang dan Mode Gelap—dirancang mobile-first dengan target sentuh yang mudah diakses dan grid responsif.',
      },
    ],
    trustLine: 'Semua alat gratis • Tanpa perlu mendaftar • Berjalan di browser Anda',
  },
  directory: {
    seoTitle: 'Direktori Semua Alat Utilitas Online | UtilityFlow',
    seoDescription:
      'Jelajahi dan cari semua utilitas berbasis browser dan kategori di UtilityFlow, yang disusun untuk penulisan, pengembangan, kalkulator, PDF, SEO, dan gambar.',
    seoKeywords: ['direktori alat utilitas', 'semua alat online', 'alat browser gratis'],
    title: 'Direktori Semua Alat',
    description:
      'Jelajahi semua {count} utilitas aktif yang terdaftar di UtilityFlow atau telusuri tujuh hub kategori untuk alur kerja browser dan AI gratis.',
    searchPlaceholder: 'Cari berdasarkan nama alat, kata kunci, atau kategori...',
    showing: 'Menampilkan {tools} alat aktif di {categories} kategori',
    all: 'Semua',
    availableTools: 'Alat Tersedia',
    categorySuites: 'Suite Kategori',
    visitHub: 'Kunjungi hub {name}',
    plannedToolsInclude: 'Alat dalam kategori ini meliputi: {names}',
    noMatch: 'Tidak ada kategori atau alat yang cocok dengan filter Anda.',
    clearFilters: 'Hapus filter',
  },
  category: {
    plannedCount: '{count} alat',
    toolsCount: '{count} alat',
    toolsLive: '{count} alat aktif',
    ofToolsLive: '{count} dari {total} alat aktif',
    availableTools: '{name} Tersedia',
    exploreOther: 'Jelajahi Kategori Lain',
    scheduledTitle: 'Alat lainnya segera hadir',
    scheduledDescription:
      'Hub kategori ini aktif dan terindeks dalam arsitektur {name}. Halaman alat individual khusus dengan fungsionalitas berbasis browser akan segera ditambahkan di sini.',
    plannedToolsTitle: 'Alat dalam kategori ini:',
  },
  toolPage: {
    howToUse: 'Cara Menggunakan {name}',
    practicalExamples: 'Contoh Praktis',
    faqs: 'Pertanyaan yang Sering Diajukan',
    keyBenefits: 'Manfaat Utama',
    commonUseCases: 'Kasus Penggunaan Umum',
    runsLocally: 'Berjalan secara lokal di browser Anda',
    externalApi: 'Integrasi API eksternal',
    freeAiTool: 'Alat AI Gratis · Tanpa Login',
    loadingWorkspace: 'Memuat ruang kerja {name}...',
    input: 'Input',
    output: 'Output',
    relatedTitle: 'Alat Terkait',
    relatedDescription: 'Lanjutkan alur kerja Anda dengan utilitas pelengkap.',
    browseAll: 'Jelajahi semua {name}',
    moreToolsIn: 'Alat lainnya di',
    willAppear: 'akan segera muncul di sini.',
    bylineAuthor: 'Oleh Bilal',
    lastUpdated: 'Terakhir diperbarui: November 2026',
  },
  blog: {
    seoTitle: 'Panduan, Tutorial & Sumber Daya | Blog UtilityFlow',
    seoDescription:
      'Panduan praktis, tutorial langkah demi langkah, dan sumber daya untuk setiap alat UtilityFlow — teks, pengembang, kalkulator, PDF, SEO, media sosial, dan gambar.',
    title: 'Panduan, Tutorial & Sumber Daya',
    description:
      'Panduan praktis dan tutorial langkah demi langkah untuk setiap alat UtilityFlow. Pelajari fungsi setiap alat, cara menggunakannya dengan baik, dan cara mendapatkan hasil terbaik.',
    searchPlaceholder: 'Cari artikel...',
    searchArticles: 'Cari artikel',
    noResults: 'Tidak ada artikel yang ditemukan.',
    featured: 'Artikel unggulan',
    latest: 'Artikel terbaru',
    browseByCategory: 'Jelajahi berdasarkan kategori',
    relatedArticles: 'Artikel terkait',
    relatedTools: 'Alat terkait',
    readingTime: '{minutes} mnt baca',
    publishedOn: 'Diterbitkan pada {date}',
    updatedOn: 'Diperbarui pada {date}',
    byEditorial: 'Oleh tim editorial UtilityFlow',
    tableOfContents: 'Daftar isi',
    prevArticle: 'Artikel sebelumnya',
    nextArticle: 'Artikel berikutnya',
    share: 'Bagikan',
    tryTool: 'Coba alatnya',
    guidesInCategory: 'Panduan dalam kategori ini',
    categoryGuidesWord: 'Panduan',
    noArticlesYet: 'Belum ada artikel',
    noArticlesYetDescription: 'Panduan untuk bagian ini sedang disiapkan. Silakan kembali lagi nanti.',
    backToBlog: 'Kembali ke blog',
    allArticles: 'Semua artikel',
    notAvailableInLanguage: 'Artikel ini belum tersedia dalam bahasa ini.',
    minRead: 'mnt baca',
  },
  comments: {
    title: 'Komentar',
    note: 'Bagikan pendapat Anda — tanpa perlu akun. Cukup tulis nama Anda dan kirim.',
    namePlaceholder: 'Nama Anda',
    commentPlaceholder: 'Tulis komentar…',
    postButton: 'Kirim komentar',
    posting: 'Mengirim…',
    empty: 'Belum ada komentar — jadilah yang pertama berbagi pendapat.',
    loadError: 'Komentar tidak dapat dimuat saat ini, tetapi Anda tetap dapat mengirim komentar di bawah.',
    postError: 'Komentar Anda tidak dapat dikirim. Silakan coba lagi sebentar lagi.',
  },
  search: {
    placeholder:
      'Cari alat atau kategori (mis., penghitung kata, JSON, PDF, kalkulator)...',
    search: 'Cari',
    tools: 'Alat',
    categories: 'Kategori',
    noResults: 'Tidak ditemukan alat atau kategori yang cocok untuk "{query}".',
    viewDirectory: 'Lihat direktori lengkap',
    clearSearch: 'Hapus pencarian',
    ariaLabel: 'Cari alat atau kategori',
  },
  notFound: {
    seoTitle: 'Halaman Tidak Ditemukan (404) | UtilityFlow',
    seoDescription:
      'Alat atau halaman yang diminta tidak dapat ditemukan di UtilityFlow. Cari di direktori utilitas kami atau jelajahi kategori.',
    eyebrow: '404 · Tidak Ditemukan',
    title: 'Kami tidak dapat menemukan halaman itu.',
    description:
      'URL mungkin telah berpindah, atau utilitas ini belum dirilis. Cari di bawah atau jelajahi kategori kami untuk menemukan yang Anda butuhkan.',
    returnHome: 'Kembali ke Beranda',
    browseDirectory: 'Jelajahi Direktori',
    browseCategories: 'Jelajahi Kategori',
  },
  about: {
    seoTitle: 'Tentang UtilityFlow – Platform Alat Online Berbasis Browser',
    seoDescription:
      'Pelajari cara UtilityFlow membangun utilitas browser yang mengutamakan privasi dalam tujuh kategori tanpa akun, kekacauan, atau unggahan data yang tidak perlu.',
    title: 'Tentang UtilityFlow',
    intro:
      'UtilityFlow adalah platform web independen yang membangun 88 utilitas yang fokus dan andal untuk pekerjaan digital sehari-hari.',
    whyTitle: 'Mengapa Kami Membangun UtilityFlow',
    whyP1:
      'Tugas online rutin—menghitung kata, memvalidasi JSON, memeriksa batas karakter, menghitung pembayaran pinjaman, atau mengompresi gambar—sering memaksa orang ke situs lambat yang penuh overlay mengganggu, unduhan membingungkan, atau pendaftaran wajib.',
    whyP2:
      'Tujuan kami sederhana: memberikan setiap utilitas halaman khusus yang bersih, memuat dengan cepat, menjelaskan dengan jelas cara kerja alat, dan berjalan langsung di dalam browser Anda kapan pun standar web memungkinkan.',
    orgTitle: 'Siapa yang Menjalankan UtilityFlow',
    orgP1:
      'UtilityFlow adalah proyek independen yang dibuat dan dikelola oleh Bilal, seorang pembuat yang membangun alat web gratis di waktu luangnya. Tidak ada perusahaan di balik situs ini, tidak ada pendanaan investor, dan tidak ada tim karyawan — setiap alat, panduan, dan halaman bantuan dirancang, dibangun, dan diuji oleh satu orang. Ke-88 alat tetap gratis digunakan tanpa akun atau langganan. Kredit di footer menyebut Shaheen, yang dorongannya menginspirasi proyek ini dan yang namanya muncul di setiap halaman sebagai pengingat dari mana ide ini bermula.',
    orgP2:
      'Karena proyek ini kecil dan independen, keputusan tetap sederhana: jika sebuah alat lambat, membingungkan, atau salah, alat itu diperbaiki. Umpan balik yang dikirim melalui halaman kontak langsung sampai ke orang yang dapat mengubah kodenya, dan saran dari pengunjung telah membentuk alat baru serta berbagai perbaikan di seluruh situs.',
    howTitle: 'Cara Alat Kami Dibangun dan Diuji',
    howP1:
      'Setiap utilitas berawal dari satu tugas yang jelas — menghitung kata, menggabungkan PDF, memformat JSON — dan dibangun sebagai halaman yang fokus untuk melakukan tugas itu dengan baik. Di mana pun standar web memungkinkan, pekerjaan berlangsung sepenuhnya di dalam browser Anda, sehingga teks dan file Anda tidak perlu meninggalkan perangkat Anda. Setiap halaman alat menjelaskan langkah-langkahnya dengan panduan singkat, menunjukkan contoh yang sudah dikerjakan, dan menjawab pertanyaan yang paling sering diajukan, sehingga Anda dapat menilai hasilnya sendiri alih-alih mempercayai kotak hitam.',
    howP2:
      'Sebelum sebuah alat diluncurkan, alat itu diuji dengan input nyata di browser desktop dan seluler, termasuk kasus tepi seperti input kosong, teks yang sangat panjang, dan jenis file yang tidak biasa. Ketika sesuatu rusak atau perhitungan tampak salah, perbaikannya dikirim sebagai pembaruan situs dan halaman tersebut diperiksa ulang. Tiga alat AI opsional adalah satu-satunya yang mengirim teks ke server, dan halaman mereka mengatakannya dengan jelas sebelum Anda menggunakannya.',
    whoTitle: 'Untuk Siapa UtilityFlow Dibuat',
    whoP1:
      'UtilityFlow dibuat untuk siapa pun yang membutuhkan jawaban cepat dari sebuah alat tanpa memasang perangkat lunak atau membuat akun: pelajar yang memeriksa jumlah kata esai, penulis yang memformat draf, developer yang memvalidasi JSON atau mengenkode URL, pemasar yang memeriksa batas karakter, dan pemilik usaha kecil yang menghitung pinjaman atau diskon. Jika sebuah tugas memakan waktu kurang dari satu menit, alat untuk tugas itu juga seharusnya memakan waktu kurang dari satu menit — itulah standar yang berlaku untuk setiap halaman di situs ini.',
    principlesTitle: 'Prinsip Rekayasa Inti',
    principles: [
      {
        title: 'Eksekusi Sisi Klien',
        description:
          'Utilitas teks, kode, matematika, dan file lokal memproses input di memori browser sehingga data kerja Anda tidak dikirim ke server jarak jauh.',
      },
      {
        title: 'Pemberitahuan API Transparan',
        description:
          'Jika utilitas khusus memerlukan pencarian eksternal atau panggilan server, kami mengungkapkannya secara eksplisit di halaman alat tersebut sebelum Anda menjalankan apa pun.',
      },
      {
        title: 'Antarmuka yang Mudah Diakses',
        description:
          'Navigasi keyboard, kontras yang mudah dibaca, umpan balik kesalahan yang jelas, dan kontrol seluler responsif dibangun ke dalam setiap templat.',
      },
      {
        title: 'Peluncuran Modular',
        description:
          'Alat dikirim dan diverifikasi berdasarkan kategori sehingga setiap utilitas menerima pengujian fungsional dan dokumentasi yang menyeluruh.',
      },
    ],
    categoriesTitle: 'Tujuh Kategori Alat',
    feedbackTitle: 'Punya Umpan Balik atau Permintaan?',
    feedbackBefore:
      'Jika Anda melihat kasus tepi perhitungan, masalah aksesibilitas, atau ingin menyarankan utilitas baru, hubungi kami melalui',
    feedbackLink: 'Halaman kontak',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Hubungi UtilityFlow – Dukungan, Laporan Bug & Saran',
    seoDescription:
      'Hubungi tim UtilityFlow untuk melaporkan masalah, menyarankan alat utilitas baru, atau mengajukan pertanyaan tentang privasi dan syarat layanan kami.',
    title: 'Hubungi Kami',
    intro:
      'Kirim laporan bug, saran alat, atau pertanyaan umum. Kami membaca setiap kiriman dan memprioritaskan perbaikan yang meningkatkan akurasi alat dan aksesibilitas.',
    aboutTitle: 'Apa yang Dapat Anda Tulis',
    aboutP1:
      'Gunakan formulir ini untuk apa pun yang terkait dengan situs. Laporkan bug dan beri tahu kami alat apa yang Anda gunakan, apa yang Anda masukkan, dan apa yang Anda harapkan terjadi — semakin detail informasi yang Anda sertakan, semakin cepat masalah dapat direproduksi dan diperbaiki. Sarankan alat baru dan jelaskan tugas yang seharusnya dilakukan alat itu; ide yang banyak diminta pengunjung akan menjadi prioritas. Anda juga dapat menunjukkan perhitungan yang salah, petunjuk yang membingungkan, atau kesalahan terjemahan di halaman mana pun.',
    aboutP2:
      'Pertanyaan privasi dan hukum juga kami sambut. Jika komentar yang Anda posting perlu dihapus, sertakan halaman alat dan nama yang Anda gunakan, dan komentar itu akan diturunkan. Untuk hal lain — ide kemitraan, pertanyaan pers, atau komentar umum tentang situs — formulir yang sama dapat digunakan, atau Anda dapat mengirim email langsung menggunakan alamat di halaman ini.',
    responseTitle: 'Apa yang Terjadi Setelah Anda Mengirim Pesan',
    responseP1:
      'Setiap pesan dibaca oleh orang yang membangun dan mengelola UtilityFlow — tidak ada meja bantuan dan tidak ada antrean balasan otomatis. Laporan bug dan hasil yang salah diperiksa terlebih dahulu, karena alat yang rusak memengaruhi semua orang yang menggunakannya. Saran alat dikumpulkan dan ditimbang berdasarkan berapa banyak orang yang akan menggunakannya dan seberapa cocok alat itu dengan pendekatan situs yang mengutamakan browser.',
    responseP2:
      'Anda tidak memerlukan akun untuk menghubungi kami, dan kami hanya akan menggunakan alamat email Anda untuk membalas pesan Anda. Jika Anda lebih suka tidak menggunakan formulir, alamat email langsung di halaman ini menuju ke kotak masuk yang sama.',
    name: 'Nama',
    email: 'Alamat email',
    topic: 'Topik',
    message: 'Pesan',
    submit: 'Kirim Pesan',
    sending: 'Mengirim…',
    sendError: 'Pesan Anda tidak dapat dikirim. Silakan coba lagi.',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Jelaskan alat, bug, atau pertanyaan secara detail...',
    topics: [
      'Saran alat',
      'Laporan bug',
      'Koreksi SEO atau konten',
      'Pertanyaan privasi atau hukum',
      'Pertanyaan umum',
    ],
    errors: {
      name: 'Silakan masukkan nama Anda.',
      emailEmpty: 'Silakan masukkan alamat email Anda.',
      emailInvalid: 'Silakan masukkan alamat email yang valid.',
      subject: 'Silakan pilih atau masukkan topik.',
      message: 'Silakan sertakan setidaknya 10 karakter dalam pesan Anda.',
    },
    successTitle: 'Pesan terkirim',
    successThanks:
      'Terima kasih, {name}. Pesan Anda telah terkirim dan kami akan segera menghubungi Anda kembali.',
    successNote:
      'Jika Anda perlu menambahkan sesuatu, Anda juga dapat menghubungi kami langsung di',
    sendAnother: 'Kirim pesan lain',
    directEmail: 'Email Langsung',
    directEmailText: 'Lebih suka menulis langsung? Kirim email ke tim kami di:',
  },
  privacy: {
    seoTitle: 'Kebijakan Privasi – Data Anda di UtilityFlow | UtilityFlow',
    seoDescription:
      'Baca Kebijakan Privasi UtilityFlow tentang eksekusi alat sisi browser, cookie, log server, dan analitik.',
    title: 'Kebijakan Privasi',
    lastUpdated: 'Terakhir diperbarui: November 2026',
    sections: [
      {
        title: '1. Gambaran Umum',
        paragraphs: [
          'UtilityFlow dirancang dengan pemrosesan sisi klien di browser. Kebijakan Privasi ini menjelaskan informasi apa yang diproses saat Anda mengunjungi situs web kami, bagaimana utilitas kami menangani input, dan bagaimana cookie serta analitik dapat beroperasi.',
        ],
      },
      {
        title: '2. Input Alat, Pemrosesan Browser & Alat AI Gratis',
        paragraphs: [
          'Teks, angka, cuplikan kode, dan file yang dimasukkan ke dalam 84 alat berbasis browser kami diproses secara lokal di dalam sesi browser Anda tanpa meninggalkan perangkat Anda.',
          'Tiga alat AI Gratis opsional kami (Asisten Penulisan AI, Perangkum Teks AI, dan Pencari Alat Cerdas AI) mengirim teks yang dikirimkan melalui backend kami yang terlindungi ke Groq untuk inferensi waktu nyata. Kami tidak menyimpan atau mencatat prompt Anda, dan batas laju harian gratis hanya menggunakan hash SHA-256 bertanggal UTC sehingga alamat IP mentah pengunjung tidak pernah disimpan.',
          'Komentar yang diposting di bawah alat kami hanya meminta nama dan teks komentar. Nama dan teks yang Anda kirimkan disimpan di platform hosting kami dan ditampilkan secara publik di halaman alat tersebut, beserta tanggalnya. Kami tidak meminta alamat email atau akun untuk berkomentar, dan kami tidak menggunakan data komentar untuk iklan. Jika Anda ingin sebuah komentar dihapus, hubungi kami dengan menyebutkan halaman dan nama yang digunakan, dan kami akan menghapusnya.',
        ],
      },
      {
        title: '3. Log Hosting & Telemetri Teknis',
        paragraphs: [
          'UtilityFlow dihosting di Cloudflare Pages. Seperti penyedia hosting web standar, jaringan edge kami dapat secara otomatis memproses metadata permintaan HTTP standar (seperti alamat IP, user-agent browser, URL yang diminta, dan stempel waktu) untuk mengirimkan halaman secara andal, mengurangi penyalahgunaan, dan menjaga keamanan.',
          'Kami tidak menggabungkan log hosting dengan data lain untuk mengidentifikasi pengunjung secara individual, dan kami tidak menjual atau membagikan data log kepada pengiklan. Log hanya ada untuk menjaga layanan tetap berjalan dan aman.',
        ],
      },
      {
        title: '4. Cookie & Analitik',
        paragraphs: [
          'UtilityFlow saat ini tidak menampilkan iklan pihak ketiga.',
          'Kami juga menggunakan Google Analytics 4 untuk memahami, secara agregat, bagaimana situs digunakan; layanan ini hanya berjalan setelah Anda menerima cookie di banner.',
        ],
      },
      {
        title: '5. Tautan Eksternal',
        paragraphs: [
          'Dokumentasi atau halaman alat kami dapat menautkan ke situs web eksternal. Kami tidak bertanggung jawab atas praktik privasi atau konten situs web pihak ketiga.',
          'Tautan eksternal dibuka di tab baru jika memungkinkan. Sebelum memasukkan informasi pribadi di situs yang ditautkan, harap tinjau kebijakan privasi situs tersebut.',
        ],
      },
      {
        title: '6. Penyimpanan Data',
        paragraphs: [
          'Informasi yang diproses di browser Anda tidak pernah dikirim kepada kami, jadi tidak ada yang perlu disimpan. Teks yang dikirim ke alat AI opsional diproses untuk permintaan tersebut dan tidak disimpan. Komentar disimpan hingga dihapus, baik oleh kami maupun atas permintaan Anda. Log hosting dan catatan keamanan hanya disimpan selama periode terbatas yang dibutuhkan penyedia hosting kami untuk mengoperasikan dan melindungi layanan.',
        ],
      },
      {
        title: '7. Hak dan Pilihan Anda',
        paragraphs: [
          'Anda dapat memblokir atau menghapus cookie di pengaturan browser Anda kapan saja. Jika Anda pernah memposting komentar, Anda dapat meminta penghapusannya dengan menghubungi kami. Karena alat kami berjalan di browser Anda dan kami tidak menyimpan akun atau profil, tidak ada berkas data pribadi yang dapat diunduh atau dikoreksi — tetapi pertanyaan apa pun tentang data Anda akan dijawab jika Anda menulis kepada kami.',
        ],
      },
      {
        title: '8. Privasi Anak',
        paragraphs: [
          'UtilityFlow adalah situs untuk keperluan umum dan tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda adalah orang tua atau wali dan yakin seorang anak telah memposting komentar di situs ini, hubungi kami dan kami akan menghapusnya.',
        ],
      },
      {
        title: '9. Perubahan pada Kebijakan Ini',
        paragraphs: [
          'Kami dapat memperbarui Kebijakan Privasi ini ketika kami menambahkan alat, mengganti penyedia, atau menyesuaikan cara kerja situs. Tanggal "Terakhir diperbarui" di bagian atas halaman ini menunjukkan kapan kebijakan ini terakhir direvisi. Terus menggunakan situs setelah perubahan berarti Anda menerima kebijakan yang diperbarui.',
        ],
      },
    ],
    contactTitle: '10. Kontak',
    contactBefore:
      'Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui',
    contactLink: 'Halaman kontak',
    contactMiddle: 'atau email',
  },
  terms: {
    seoTitle: 'Syarat Layanan – Ketentuan Alat UtilityFlow | UtilityFlow',
    seoDescription:
      'Tinjau Syarat Layanan yang mengatur penggunaan utilitas browser UtilityFlow, kekayaan intelektual, penafian akurasi, dan batasan tanggung jawab.',
    title: 'Syarat Layanan',
    lastUpdated: 'Terakhir diperbarui: November 2026',
    sections: [
      {
        title: '2. Penggunaan yang Diizinkan',
        paragraphs: [
          'Anda dapat menggunakan UtilityFlow untuk tugas produktivitas pribadi, pendidikan, dan komersial. Anda setuju untuk tidak mengotomatisasi lalu lintas yang kasar, mencoba mengganggu pengiriman situs, merekayasa balik perlindungan keamanan, atau menggunakan utilitas apa pun untuk aktivitas yang melanggar hukum.',
          'Anda dapat menautkan ke alat kami dan membagikan hasilnya. Anda tidak boleh menampilkan alat kami sebagai milik Anda, menyalin desain atau konten situs dan menerbitkannya ulang sebagai layanan pesaing, atau menggunakan situs dengan cara yang menyesatkan orang lain tentang asal suatu hasil.',
        ],
      },
      {
        title: '3. Akurasi & Penafian Informasi',
        paragraphs: [
          'Meskipun kami menguji setiap utilitas dengan cermat, semua alat, perhitungan, konversi, dan pemeriksaan SEO disediakan "sebagaimana adanya" dan "sebagaimana tersedia". Keluaran harus diverifikasi secara independen sebelum membuat keputusan keuangan, hukum, medis, atau rekayasa produksi.',
          'Perhitungan seperti pembayaran pinjaman, estimasi pajak, dan konversi mata uang adalah alat bantu perencanaan, bukan nasihat profesional. Angka dapat berubah mengikuti tarif, aturan, dan pembulatan, jadi konfirmasikan angka penting dengan profesional yang berkualifikasi atau sumber resmi sebelum bertindak berdasarkan angka tersebut.',
        ],
      },
      {
        title: '4. Kekayaan Intelektual',
        paragraphs: [
          'Antarmuka, aset merek, dokumentasi, dan kode sumber UtilityFlow dilindungi oleh hukum kekayaan intelektual yang berlaku. Anda tetap memiliki kepemilikan penuh atas teks, kode, dokumen, atau gambar apa pun yang Anda proses menggunakan utilitas sisi klien kami.',
          'UtilityFlow adalah proyek independen dan tidak berafiliasi dengan, didukung oleh, atau terhubung dengan YouTube, Instagram, Google, atau merek pihak ketiga lainnya yang disebutkan di situs ini.',
        ],
      },
      {
        title: '5. Batasan Tanggung Jawab',
        paragraphs: [
          'Sejauh maksimum yang diizinkan oleh hukum, UtilityFlow dan kontributornya tidak bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan Anda, atau ketidakmampuan Anda menggunakan, platform ini.',
        ],
      },
      {
        title: '6. Konten Pengguna dan Komentar',
        paragraphs: [
          'Anda tetap memiliki kepemilikan penuh atas apa pun yang Anda ketik ke dalam alat kami atau posting sebagai komentar. Dengan memposting komentar, Anda memberi kami izin untuk menampilkannya secara publik di halaman alat yang relevan. Jangan memposting apa pun yang melanggar hukum, menyesatkan, atau membahayakan orang lain, dan jangan memposting informasi pribadi orang lain. Kami dapat menghapus komentar yang melanggar aturan ini atau yang dilaporkan kepada kami, tanpa pemberitahuan.',
        ],
      },
      {
        title: '7. Layanan Pihak Ketiga',
        paragraphs: [
          'Beberapa fitur bergantung pada layanan pihak ketiga yang independen: ketiga alat AI mengirim teks ke Groq untuk diproses, formulir kontak dikirimkan oleh FormSubmit, situs dihosting di Cloudflare, Kalkulator Mata Uang mengambil kurs tukar langsung dari Frankfurter. Masing-masing layanan ini memiliki syarat dan kebijakan privasinya sendiri, dan penggunaan Anda atas layanan tersebut diatur oleh dokumen-dokumen itu. UtilityFlow tidak bertanggung jawab atas ketersediaan atau praktik layanan pihak ketiga.',
        ],
      },
      {
        title: '8. Ketersediaan Layanan',
        paragraphs: [
          'UtilityFlow adalah layanan gratis dan kami tidak menjamin bahwa setiap alat akan selalu tersedia. Alat dapat diubah, ditingkatkan, atau dihapus, dan situs dapat sementara tidak tersedia untuk pemeliharaan. Kami berusaha menjaga layanan tetap berjalan dengan lancar, tetapi kami tidak bertanggung jawab atas gangguan atau kerugian apa pun yang disebabkan oleh waktu henti.',
        ],
      },
    ],
    acceptanceTitle: '1. Penerimaan Syarat',
    acceptanceBefore:
      'Dengan mengakses atau menggunakan UtilityFlow, Anda setuju untuk terikat oleh Syarat Layanan ini dan',
    acceptanceLink: 'Kebijakan Privasi',
    acceptanceAfter:
      '. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, silakan berhenti menggunakan situs web ini.',
    changesTitle: '9. Perubahan & Kontak',
    changesBefore:
      'Kami dapat memperbarui Syarat Layanan ini saat alat baru dirilis. Pertanyaan dapat ditujukan ke',
    changesLink: 'Halaman kontak',
    changesAfter: '.',
  },
};
