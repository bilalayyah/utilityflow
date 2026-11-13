import type { ToolLocaleOverride } from "../../types";

/**
 * Indonesian overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/de/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Fixed Indonesian slugs (STATIC_PATHS):
 * asisten-penulisan-ai, peringkas-teks-ai, pencari-alat-ai.
 */
export const ID_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "ai-writing-assistant": {
    slug: "asisten-penulisan-ai",
    name: "Asisten Penulisan AI",
    shortDescription:
      "Perbaiki tata bahasa, tulis ulang kalimat, sesuaikan nada, parafrase, kembangkan ide, dan buat draf email yang jelas — gratis, tanpa pendaftaran.",
    keywords: [
      "asisten penulisan ai",
      "pemeriksa tata bahasa gratis",
      "penulis ulang kalimat",
      "parafrase teks",
      "pengubah nada",
      "asisten penulisan email",
      "koreksi ejaan",
      "penyederhana kalimat",
      "alat tulis ai gratis",
    ],
    seo: {
      title: "Asisten Penulisan AI – Tata Bahasa & Nada | UtilityFlow",
      description:
        "Perbaiki tata bahasa, tulis ulang kalimat, sesuaikan nada, sederhanakan atau kembangkan paragraf, dan tulis email yang jelas — gratis, tanpa pendaftaran.",
      primaryKeyword: "asisten penulisan ai",
      secondaryKeywords: [
        "pemeriksa tata bahasa ai gratis",
        "penulis ulang kalimat ai",
        "parafrase teks ai",
        "asisten penulisan email ai",
      ],
      longTailKeywords: [
        "asisten penulisan ai gratis tanpa login",
        "buat teks lebih profesional dengan alat ai",
        "tulis ulang paragraf dan pertahankan makna gratis",
        "perbaiki tata bahasa dan ejaan online gratis",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    apiNotice:
      "100% gratis, tanpa login, langganan, atau kredit. Jatah gratis: hingga 5 permintaan penulisan per hari per pengunjung (maksimal 12.000 karakter), didukung inferensi Groq tingkat gratis tanpa menyimpan teks Anda.",
    intro:
      "Sempurnakan draf Anda dengan bersih dalam hitungan detik tanpa membuat akun. Pilih dari 10 tugas penulisan — termasuk koreksi tata bahasa, parafrase, perubahan nada, penyederhanaan kalimat, dan pembuatan draf email — sambil menjaga makna dan fakta asli Anda secara ketat.",
    instructions: [
      {
        title: "Tempel atau tulis teks Anda",
        description:
          "Masukkan hingga 12.000 karakter ke dalam editor. Gunakan penghitung kata dan karakter langsung untuk memeriksa panjang draf sebelum membuat.",
      },
      {
        title: "Pilih tugas penulisan, nada, dan bahasa",
        description:
          "Pilih satu dari 10 tugas penulisan (seperti Perbaiki Tata Bahasa, Buat Lebih Profesional, Parafrase, atau Tulis Email), sesuaikan nada dari Profesional hingga Sederhana, dan pilih bahasa keluaran target Anda.",
      },
      {
        title: "Klik Buat untuk memproses permintaan Anda",
        description:
          "Tekan Buat dan tunggu beberapa detik sementara permintaan dikirim ke Groq untuk inferensi. Indikator kemajuan menunjukkan saat teks Anda yang ditingkatkan sedang dibuat.",
      },
      {
        title: "Tinjau dan bandingkan teks asli vs. teks yang ditingkatkan",
        description:
          "Periksa tampilan berdampingan atau sorotan perubahan tingkat kata untuk melihat tepat apa yang berubah, dan pastikan nama, angka, dan tanggal tetap utuh.",
      },
      {
        title: "Salin atau unduh hasilnya",
        description:
          "Gunakan tombol Salin untuk memindahkan teks yang ditingkatkan ke clipboard Anda, atau unduh sebagai file TXT untuk dokumen atau klien email Anda.",
      },
      {
        title: "Coba tugas atau nada lain bila perlu",
        description:
          "Jika hasilnya belum tepat, ganti tugas atau nada lalu buat lagi — misalnya, coba Buat Lebih Sederhana setelah Buat Lebih Profesional — sambil memperhatikan batas permintaan gratis harian.",
      },
    ],
    examples: [
      {
        title: "Pembersihan Tata Bahasa & Ejaan",
        input:
          "Hi team, i wanted to folow up on yesterday meeting and share the update timeline for Q4 launch.",
        output:
          "Hi team, I wanted to follow up on yesterday’s meeting and share the updated timeline for the Q4 launch.",
        explanation:
          "Tugas: Perbaiki Tata Bahasa · Nada: Profesional. Memperbaiki kapitalisasi, kesesuaian kata kerja, dan ejaan sambil menjaga gaya Anda yang tepat.",
      },
      {
        title: "Catatan Kasar menjadi Email yang Siap Kirim",
        input:
          "ask client sarah if thursday 2pm works for design review call, mention mockup v2 ready and link attached",
        output:
          "Subject: Design Review Call & Mockup v2\n\nHi Sarah,\n\nI wanted to let you know that Mockup v2 is ready and attached for your review. Would Thursday at 2:00 PM work for a quick design review call?\n\nBest regards,",
        explanation:
          "Tugas: Tulis Email · Nada: Ramah. Menstrukturkan catatan berpoin menjadi email yang sopan dan faktual tanpa mengarang detail.",
      },
    ],
    benefits: [
      "Akses 100% gratis tanpa pendaftaran, login, atau hambatan langganan",
      "10 mode penulisan khusus plus 7 preset nada dan keluaran multi-bahasa",
      "Mempertahankan nama, angka, tanggal, dan makna tanpa mengarang fakta",
      "Perbandingan berdampingan dan pelacakan perubahan tingkat kata yang disorot",
    ],
    useCases: [
      "Memoles email, proposal, dan pembaruan status klien sebelum mengirim",
      "Memperbaiki kesalahan tata bahasa, tanda baca, dan ejaan dalam esai atau laporan",
      "Menyederhanakan paragraf teknis yang padat untuk audiens yang lebih luas",
      "Mengubah draf obrolan santai menjadi komunikasi tempat kerja yang formal",
    ],
    faqs: [
      {
        question: "Apakah Asisten Penulisan AI sepenuhnya gratis tanpa pendaftaran?",
        answer:
          "Ya. Anda tidak perlu membuat akun, memasukkan alamat email, atau menambahkan kartu pembayaran. Pengunjung menerima hingga 5 permintaan penulisan gratis per hari UTC.",
      },
      {
        question: "Apakah AI mengarang fakta baru saat menulis ulang atau mengembangkan teks?",
        answer:
          "Tidak. Perintah sistem kami menginstruksikan model untuk mempertahankan semua fakta, nama, tanggal, dan angka asli secara ketat dan menghindari pembuatan statistik atau klaim.",
      },
      {
        question: "Apakah tulisan saya disimpan atau dicatat oleh UtilityFlow?",
        answer:
          "UtilityFlow tidak menyimpan, mencatat, atau menjual teks Anda. Permintaan dikirim dengan aman melalui backend kami ke Groq untuk inferensi, dan pelacakan kuota pengunjung hanya memakai hash SHA-256 harian yang diberi garam.",
      },
      {
        question: "Apa yang terjadi jika saya mencapai batas permintaan gratis harian?",
        answer:
          "Batas harian direset otomatis pada tengah malam UTC. Sementara itu, semua 85+ utilitas browser lokal — termasuk Penghitung Kata, Pemeriksa Keterbacaan, dan Pemeriksa Perbedaan Teks — berfungsi tanpa batas.",
      },
      {
        question: "Tugas penulisan apa yang dapat ditangani Asisten Penulisan AI?",
        answer:
          "Alat ini menawarkan 10 tugas, termasuk Perbaiki Tata Bahasa, Buat Lebih Profesional, Parafrase, Sederhanakan, Kembangkan, Ringkas, Tulis Email, Tingkatkan Kejelasan, Ubah Nada, dan Koreksi Ejaan.",
      },
      {
        question: "Seberapa panjang teks saya di Asisten Penulisan AI?",
        answer:
          "Setiap permintaan menerima hingga 12.000 karakter. Untuk dokumen yang lebih panjang, bagi teks menjadi beberapa bagian dan proses satu per satu.",
      },
      {
        question: "Nada apa yang dapat saya pilih untuk teks hasil tulis ulang saya?",
        answer:
          "Anda dapat memilih dari 7 preset nada, termasuk Profesional, Ramah, Formal, Santai, Sederhana, Percaya Diri, dan Ringkas, tergantung audiens Anda.",
      },
      {
        question: "Apakah Asisten Penulisan AI mengirim teks saya ke layanan eksternal?",
        answer:
          "Ya. Teks Anda dikirim dengan aman ke Groq untuk inferensi AI melalui worker backend kami, karena tugas penulisan memerlukan model bahasa. Teks tidak disimpan atau dicatat oleh UtilityFlow.",
      },
      {
        question: "Bisakah Asisten Penulisan AI menulis email lengkap dari catatan kasar?",
        answer:
          "Ya. Pilih tugas Tulis Email, tempel poin-poin atau catatan kasar Anda, dan alat akan menstrukturkannya menjadi email yang sopan dengan baris subjek dan salam.",
      },
      {
        question: "Apakah Asisten Penulisan AI mengubah makna teks saya?",
        answer:
          "Alat ini diinstruksikan untuk mempertahankan makna, fakta, nama, tanggal, dan angka asli Anda. Selalu tinjau perbandingan berdampingan sebelum memakai hasilnya.",
      },
      {
        question: "Bisakah saya memakai Asisten Penulisan AI untuk esai akademik?",
        answer:
          "Ya, alat ini dapat memperbaiki tata bahasa dan meningkatkan kejelasan esai dan laporan. Periksa aturan institusi Anda terlebih dahulu, karena beberapa sekolah membatasi penulisan berbantuan AI.",
      },
      {
        question: "Apakah Asisten Penulisan AI berfungsi dalam bahasa selain Inggris?",
        answer:
          "Ya. Anda dapat memilih bahasa keluaran target, dan alat akan menghasilkan teks yang ditingkatkan dalam bahasa itu sambil menjaga fakta Anda tidak berubah.",
      },
      {
        question: "Bagaimana cara melihat tepat apa yang diubah AI dalam teks saya?",
        answer:
          "Tampilan hasil menyorot perubahan tingkat kata dan menampilkan teks asli dan teks yang ditingkatkan Anda berdampingan, sehingga Anda dapat menerima atau menolak setiap edit secara mental sebelum menyalin.",
      },
      {
        question: "Bisakah Asisten Penulisan AI memparafrase teks untuk menghindari pengulangan?",
        answer:
          "Ya. Tugas Parafrase menulis ulang kalimat dengan pilihan kata yang berbeda sambil mempertahankan makna yang sama — berguna untuk draf yang bervariasi dan ringkasan.",
      },
      {
        question: "Apa yang harus saya lakukan jika teks yang dihasilkan mengandung kesalahan?",
        answer:
          "Edit hasilnya secara langsung, atau jalankan teks lagi dengan tugas atau nada yang berbeda. Keluaran AI dapat mengandung kesalahan, jadi baca ulang teks penting sebelum mengirimnya.",
      },
      {
        question: "Apakah ada batas kata per permintaan di Asisten Penulisan AI?",
        answer:
          "Batasnya adalah 12.000 karakter per permintaan, yang mencakup sekitar 1.800 hingga 2.000 kata Inggris. Teks yang lebih pendek biasanya menghasilkan keluaran yang lebih cepat dan lebih akurat.",
      },
      {
        question: "Apa perbedaan Asisten Penulisan AI dengan Penghitung Kata?",
        answer:
          "Penghitung Kata hanya mengukur kata, karakter, dan waktu baca secara lokal, sedangkan Asisten Penulisan AI menulis ulang dan meningkatkan teks Anda memakai model bahasa Groq.",
      },
      {
        question: "Bisakah Asisten Penulisan AI membuat teks saya lebih pendek atau lebih panjang?",
        answer:
          "Ya. Gunakan tugas Sederhanakan untuk memendekkan paragraf yang padat, atau Kembangkan untuk menambah detail dan penjelasan sambil menjaga fakta asli Anda tetap utuh.",
      },
      {
        question: "Bisakah saya mengunduh teks saya yang ditingkatkan sebagai file?",
        answer:
          "Ya. Setelah membuat, klik opsi unduh untuk menyimpan teks yang ditingkatkan sebagai file TXT di perangkat Anda.",
      },
      {
        question: "Apa yang terjadi jika permintaan saya gagal atau kehabisan waktu?",
        answer:
          "Periksa koneksi internet Anda dan coba lagi. Jika batas gratis harian tercapai, alat akan memberi tahu Anda, dan batas direset pada tengah malam UTC.",
      },
    ],
  },
  "ai-text-summarizer": {
    slug: "peringkas-teks-ai",
    name: "Peringkas Teks AI",
    shortDescription:
      "Padatkan artikel, laporan, dan catatan menjadi ringkasan pendek, sedang, atau panjang dengan poin-poin dan kesimpulan utama — gratis.",
    keywords: [
      "peringkas teks ai",
      "peringkas artikel gratis",
      "ringkasan poin-poin",
      "ekstraktor poin utama",
      "peringkas paragraf",
      "ringkasan bahasa sederhana",
      "kalkulator waktu baca",
      "ringkas teks panjang online",
      "generator ringkasan ai gratis",
    ],
    seo: {
      title: "Peringkas Teks AI – Ringkas Teks Panjang | UtilityFlow",
      description:
        "Ringkas artikel panjang, catatan penelitian, dan laporan menjadi paragraf pendek, poin-poin, atau kesimpulan utama — gratis, cepat, dan tanpa pendaftaran.",
      primaryKeyword: "peringkas teks ai",
      secondaryKeywords: [
        "peringkas artikel gratis",
        "peringkas teks poin-poin",
        "ekstrak poin utama ai",
        "generator ringkasan paragraf",
      ],
      longTailKeywords: [
        "peringkas teks ai gratis tanpa login",
        "ringkas artikel panjang dan pertahankan angka dan fakta",
        "peringkas teks pendek sedang panjang online",
        "ringkas makalah penelitian menjadi poin-poin",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    apiNotice:
      "100% gratis, tanpa login, langganan, atau kredit. Jatah gratis: hingga 5 ringkasan per hari per pengunjung (hingga 25.000 karakter per permintaan), didukung inferensi Groq tingkat gratis tanpa menyimpan teks Anda.",
    intro:
      "Saring artikel panjang, laporan, esai, dan transkrip rapat menjadi ringkasan yang ringkas tanpa membuat akun. Pilih panjang Pendek (10–20%), Sedang (30–40%), atau Panjang (50–60%) dalam format paragraf, poin-poin, poin utama, dan bahasa sederhana sambil mempertahankan nama, angka, dan tanggal.",
    instructions: [
      {
        title: "Tempel atau ketik teks sumber Anda",
        description:
          "Masukkan setidaknya 25 kata (120+ karakter) hingga 25.000 karakter. Periksa jumlah kata langsung dan perkiraan waktu baca di bawah editor.",
      },
      {
        title: "Pilih panjang ringkasan, format, dan bahasa",
        description:
          "Pilih kompresi Pendek, Sedang, atau Panjang (Detail), pilih format Paragraf, Poin-poin, Poin Utama, atau Bahasa Sederhana, dan pilih bahasa keluaran.",
      },
      {
        title: "Klik Ringkas untuk membuat ringkasan",
        description:
          "Tekan Ringkas Teks dan tunggu beberapa detik sementara teks Anda dikirim ke Groq untuk inferensi AI. Indikator kemajuan menunjukkan saat ringkasan sedang dibuat.",
      },
      {
        title: "Bandingkan waktu baca dan periksa hasilnya",
        description:
          "Tinjau waktu baca yang dihemat, bandingkan ringkasan dengan teks asli, dan pastikan nama, angka, dan tanggal penting masih benar.",
      },
      {
        title: "Salin atau unduh ringkasan",
        description:
          "Gunakan tombol Salin untuk memindahkan ringkasan ke clipboard Anda, atau unduh sebagai file TXT untuk catatan, laporan, atau materi belajar Anda.",
      },
      {
        title: "Coba panjang atau format lain bila perlu",
        description:
          "Jika ringkasan terlalu pendek atau terlalu detail, ganti panjang atau formatnya lalu ringkas lagi — misalnya, coba Poin-poin setelah ringkasan Paragraf.",
      },
    ],
    examples: [
      {
        title: "Ringkasan Poin-poin untuk Eksekutif",
        input:
          "Studi teknik 160 kata yang membandingkan pembaruan tertulis dua kali seminggu dengan rapat harian di 140 insinyur.",
        output:
          "- Studi terhadap 140 insinyur di London, Berlin, dan Toronto selama enam bulan.\n- Mengganti tiga sinkronisasi mingguan dengan ringkasan dua kali seminggu memangkas fragmentasi kalender 28% dan meningkatkan pengiriman sprint 14%.\n- Keberhasilan bergantung pada blocker awal, tautan PR, dan tanggal yang tepat.",
        explanation:
          "Panjang: Pendek · Format: Ringkasan Poin-poin. Mempertahankan ukuran sampel, lokasi, dan persentase yang tepat.",
      },
      {
        title: "Ringkasan panjang dari laporan penelitian",
        input:
          "Laporan penelitian 3.000 kata tentang kebiasaan belajar dan keberhasilan akademik.",
        output:
          "Ringkasan panjang (50–60%) dalam bentuk paragraf yang mempertahankan metodologi, temuan utama, dan angka kunci.",
        explanation:
          "Panjang: Panjang · Format: Paragraf. Mempertahankan detail metodologi dan temuan untuk pengulangan yang lengkap.",
      },
    ],
    benefits: [
      "Akses anonim gratis tanpa akun, langganan, atau kredit",
      "Kontrol ringkasan Pendek (10–20%), Sedang (30–40%), dan Panjang (50–60%)",
      "Mode Paragraf, Poin-poin, Ekstraksi Poin Utama, dan Bahasa Sederhana",
      "Mempertahankan nama, statistik, tanggal, dan fakta tanpa mengarang detail",
    ],
    useCases: [
      "Mengubah artikel panjang atau brief penelitian menjadi catatan cepat berpoin",
      "Meringkas transkrip rapat dan mengekstrak poin aksi bernomor",
      "Menerjemahkan dan memadatkan dokumen multi-paragraf menjadi kesimpulan yang jelas",
      "Memperkirakan penghematan waktu baca sebelum membagikan ringkasan eksekutif",
    ],
    faqs: [
      {
        question: "Mengapa Peringkas Teks AI memerlukan setidaknya 25 kata?",
        answer:
          "Teks di bawah 25 kata atau 120 karakter terlalu singkat untuk dikompres secara bermakna tanpa kehilangan konteks penting, sehingga alat meminta Anda menambahkan lebih banyak teks sumber terlebih dahulu.",
      },
      {
        question: "Apakah peringkas mengubah nama, angka, atau tanggal?",
        answer:
          "Tidak. Instruksi peringkasan kami secara ketat mengharuskan menjaga angka, tanggal, nama, dan hubungan faktual asli tetap utuh tanpa menambahkan klaim eksternal.",
      },
      {
        question: "Bagaimana perkiraan waktu baca dihitung?",
        answer:
          "Perkiraan waktu baca memakai kecepatan baca diam rata-rata 200 kata per menit untuk teks asli Anda maupun ringkasan yang dihasilkan, sehingga Anda dapat melihat waktu yang dihemat sekilas.",
      },
      {
        question: "Apakah ada batas atau biaya untuk memakai Peringkas Teks AI?",
        answer:
          "Alat ini sepenuhnya gratis tanpa penagihan atau pendaftaran. Pengunjung menerima hingga 5 ringkasan gratis per hari UTC, dan semua 85 alat browser lokal tetap tidak terbatas.",
      },
      {
        question: "Panjang ringkasan apa yang ditawarkan Peringkas Teks AI?",
        answer:
          "Anda dapat memilih ringkasan Pendek (10–20% dari aslinya), Sedang (30–40%), atau Panjang (50–60%), tergantung seberapa banyak detail yang ingin Anda pertahankan.",
      },
      {
        question: "Format ringkasan apa yang dapat saya pilih?",
        answer:
          "Alat ini menawarkan format Paragraf, Poin-poin, Ekstraksi Poin Utama, dan Bahasa Sederhana, sehingga Anda dapat menyesuaikan ringkasan dengan catatan, laporan, atau materi belajar.",
      },
      {
        question: "Seberapa panjang teks yang dapat saya ringkas?",
        answer:
          "Setiap permintaan menerima antara 25 kata dan 25.000 karakter. Untuk dokumen yang lebih panjang, bagi menjadi beberapa bagian dan ringkas setiap bagian secara terpisah.",
      },
      {
        question: "Apakah Peringkas Teks AI mengirim teks saya ke layanan eksternal?",
        answer:
          "Ya. Teks Anda dikirim dengan aman ke Groq untuk inferensi AI melalui worker backend kami, karena peringkasan memerlukan model bahasa. Teks tidak disimpan atau dicatat oleh UtilityFlow.",
      },
      {
        question: "Bisakah Peringkas Teks AI meringkas transkrip rapat?",
        answer:
          "Ya. Tempel transkrip dan pilih format Poin Utama atau Poin-poin untuk mengekstrak keputusan, poin aksi, dan poin diskusi utama dengan cepat.",
      },
      {
        question: "Apakah ringkasan mempertahankan fakta dan angka asli?",
        answer:
          "Peringkas diinstruksikan untuk mempertahankan nama, statistik, tanggal, dan hubungan faktual. Meski demikian, tinjau ringkasan terhadap aslinya untuk dokumen penting.",
      },
      {
        question: "Bisakah saya meringkas makalah penelitian dengan Peringkas Teks AI?",
        answer:
          "Ya. Tempel abstrak atau teks lengkap dan gunakan format Panjang untuk mempertahankan detail metodologi dan temuan, atau format Pendek untuk gambaran cepat.",
      },
      {
        question: "Apakah Peringkas Teks AI berfungsi dalam bahasa selain Inggris?",
        answer:
          "Ya. Anda dapat memilih bahasa keluaran, dan ringkasan akan dibuat dalam bahasa itu sambil menjaga fakta asli tidak berubah.",
      },
      {
        question: "Bagaimana waktu baca yang dihemat dihitung di Peringkas Teks AI?",
        answer:
          "Alat ini membandingkan perkiraan waktu baca teks asli Anda dengan ringkasannya, memakai kecepatan baca diam rata-rata 200 kata per menit.",
      },
      {
        question: "Bisakah Peringkas Teks AI membuat versi bahasa sederhana dari sebuah teks?",
        answer:
          "Ya. Pilih format Bahasa Sederhana untuk mendapatkan versi yang sederhana dan mudah dibaca dari tulisan yang kompleks atau teknis — berguna bagi pelajar dan non-ahli.",
      },
      {
        question: "Apa yang harus saya lakukan jika ringkasan melewatkan poin penting?",
        answer:
          "Coba format Panjang atau format Poin Utama, yang mempertahankan lebih banyak detail. Anda juga dapat membagi teks dan meringkas bagian yang terlewat secara terpisah.",
      },
      {
        question: "Apakah Peringkas Teks AI baik untuk belajar dan revisi ujian?",
        answer:
          "Ya. Ringkas bab atau catatan kuliah menjadi poin-poin dan kesimpulan utama, lalu tinjau versi pendek sebelum ujian untuk menyegarkan ide utama.",
      },
      {
        question: "Apa perbedaan Peringkas Teks AI dengan Asisten Penulisan AI?",
        answer:
          "Peringkas memadatkan teks panjang menjadi versi yang lebih pendek, sedangkan Asisten Penulisan memperbaiki tata bahasa, menulis ulang kalimat, dan mengubah nada tanpa memendekkan teks.",
      },
      {
        question: "Apa yang terjadi ketika saya mencapai batas ringkasan harian?",
        answer:
          "Batas direset otomatis pada tengah malam UTC. Sampai saat itu, Anda dapat memakai alat browser lokal, seperti Penghitung Kata dan Pemeriksa Kepadatan Kata Kunci, tanpa batas.",
      },
      {
        question: "Bisakah Peringkas Teks AI menangani PDF atau halaman web secara langsung?",
        answer:
          "Tidak. Tempel teks itu sendiri ke dalam editor. Untuk PDF, gunakan Ekstraktor Teks PDF terlebih dahulu untuk menyalin teks, lalu tempel ke peringkas.",
      },
      {
        question: "Apakah Peringkas Teks AI menambahkan informasi baru ke ringkasan saya?",
        answer:
          "Tidak. Alat ini diinstruksikan untuk hanya meringkas apa yang ada di teks Anda dan tidak menambahkan klaim eksternal, tetapi Anda tetap harus memeriksa hasilnya untuk akurasi.",
      },
    ],
  },
  "ai-tool-finder": {
    slug: "pencari-alat-ai",
    name: "Pencari Alat AI Cerdas",
    shortDescription:
      "Jelaskan tugas Anda dalam bahasa Indonesia yang sederhana — dengan kesalahan ketik atau frasa alami — untuk menemukan alat UtilityFlow yang paling cocok secara instan.",
    keywords: [
      "pencari alat ai",
      "pencarian alat cerdas",
      "temukan alat utilitas",
      "rekomendasi alat online",
      "pencarian alat bahasa alami",
      "temukan alat gratis online",
      "perekomendasi alat utilitas",
      "cari alat berdasarkan tugas",
      "pencarian alat ai online",
    ],
    seo: {
      title: "Pencari Alat AI – Temukan Alat yang Tepat | UtilityFlow",
      description:
        "Jelaskan apa yang Anda perlukan dalam bahasa sederhana untuk menemukan alat yang tepat di UtilityFlow — cepat, gratis, dan tanpa tautan yang dibuat-buat.",
      primaryKeyword: "pencari alat ai",
      secondaryKeywords: [
        "pencari alat online",
        "temukan alat utilitas yang tepat",
        "perekomendasi alat ai",
        "pencarian alat utilityflow",
      ],
      longTailKeywords: [
        "temukan alat online gratis untuk tugas saya",
        "cari alat utilitas berdasarkan masalah bahasa sederhana",
        "penemuan alat ai tanpa login",
        "alat online apa yang saya perlukan untuk pdf",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    apiNotice:
      "100% gratis, tanpa login, langganan, atau kredit. Mencari inventaris terverifikasi kami yang berisi 85 alat browser + 2 alat AI (hingga 10 pencarian AI per hari + pencocokan kata kunci instan tanpa batas).",
    intro:
      "Tidak yakin alat mana yang menangani tugas Anda? Jelaskan tujuan Anda dalam bahasa sederhana — bahkan dengan kesalahan ejaan atau susunan kata informal — dan pencocok kata kunci + AI Groq hibrida kami merekomendasikan alat terverifikasi dari katalog live UtilityFlow dengan penjelasan yang jelas.",
    instructions: [
      {
        title: "Jelaskan tugas Anda atau pilih perintah cepat",
        description:
          "Ketik permintaan berbahasa sederhana seperti 'Saya ingin mengecilkan ukuran gambar saya menjadi 100KB' atau 'ubah PDF menjadi PNG', atau klik preset tugas cepat apa pun.",
      },
      {
        title: "Filter berdasarkan kategori bila perlu",
        description:
          "Persempit rekomendasi ke alat Teks & Penulisan, Pengembang, Kalkulator, Media Sosial, PDF, SEO, atau Gambar & File — atau cari di semua 87 alat sekaligus.",
      },
      {
        title: "Jalankan pencarian dan tinjau kecocokan",
        description:
          "Kirim permintaan Anda untuk mendapatkan kecocokan kata kunci instan, atau gunakan pencarian berbantuan AI untuk pencocokan semantik. Hasil diurutkan berdasarkan relevansi dengan tugas Anda.",
      },
      {
        title: "Periksa penjelasan dan alternatif",
        description:
          "Baca penjelasan satu kalimat untuk setiap rekomendasi dan periksa daftar alternatif untuk membandingkan alat serupa sebelum memilih.",
      },
      {
        title: "Buka alat yang terverifikasi",
        description:
          "Klik Buka Alat untuk meluncurkan alat yang direkomendasikan segera. Setiap tautan diverifikasi terhadap registri live, sehingga selalu membuka alat yang nyata.",
      },
      {
        title: "Coba susunan kata lain bila tidak ada kecocokan",
        description:
          "Jika pencari melaporkan tidak ada kecocokan yang tepat, susun ulang tugas Anda dengan kata yang lebih sederhana atau filter kategori yang berbeda, dan periksa catatan jujur tanpa kecocokan untuk opsi terdekat.",
      },
    ],
    examples: [
      {
        title: "Mengompres Gambar menjadi 100KB",
        input: "Saya ingin mengecilkan ukuran gambar saya menjadi 100KB.",
        output: "Direkomendasikan: Kompresor Gambar (/id/kompresor-gambar/)",
        explanation:
          "Cocok dengan Kompresor Gambar sisi klien dan menyarankan Pengubah Ukuran & Pemotong Gambar atau Konverter Format Gambar sebagai alternatif.",
      },
      {
        title: "Penanganan Jujur Tanpa Kecocokan",
        input: "Saya perlu mengubah PDF menjadi Word.",
        output: "Tidak ada konverter PDF-ke-DOCX yang tepat; Ekstraktor Teks PDF disarankan untuk teks mentah.",
        explanation:
          "Tidak pernah mengarang alat yang hilang atau berpura-pura alat mendukung format yang tidak didukungnya.",
      },
    ],
    benefits: [
      "Pencarian bahasa alami gratis di semua 85 alat browser dan 2 alat AI",
      "Pencocokan kata kunci lokal instan yang toleran terhadap kesalahan ketik plus peringkat semantik AI Groq",
      "Verifikasi inventaris yang ketat menjamin nol alat yang dibuat-buat atau tautan rusak",
      "Menampilkan penjelasan satu kalimat yang jelas dan hingga 3 alternatif",
    ],
    useCases: [
      "Menemukan utilitas PDF, gambar, atau teks yang tepat tanpa menjelajahi setiap kategori",
      "Mencocokkan tujuan berbahasa sederhana dengan alat browser yang tepat dan format yang didukung",
      "Memeriksa dengan jujur apakah UtilityFlow saat ini mendukung format file khusus",
      "Membandingkan beberapa alat serupa sebelum memutuskan mana yang dipakai untuk sebuah tugas",
    ],
    faqs: [
      {
        question: "Apakah Pencari Alat AI Cerdas pernah merekomendasikan alat yang tidak ada?",
        answer:
          "Tidak. Setiap rekomendasi yang dikembalikan AI diperiksa secara ketat terhadap registri alat live kami sebelum ditampilkan. Jika tidak ada alat yang cocok, pencari akan memberi tahu Anda dengan jujur.",
      },
      {
        question: "Apa yang terjadi jika saya membuat kesalahan ejaan dalam pencarian saya?",
        answer:
          "Peringkat kata kunci lokal kami menyertakan toleransi kesalahan ketik lewat jarak edit dan sinonim tugas, dan peringkat AI Groq menafsirkan frasa alami dan kesalahan ejaan secara otomatis.",
      },
      {
        question: "Berapa banyak pencarian yang dapat saya jalankan secara gratis?",
        answer:
          "Pencocokan kata kunci lokal instan tidak terbatas, dan pengunjung menerima hingga 10 pencarian berbantuan AI gratis per hari UTC tanpa pendaftaran atau pembayaran.",
      },
      {
        question: "Bagaimana Pencari Alat AI Cerdas memahami permintaan saya?",
        answer:
          "Alat ini menggabungkan pencocokan kata kunci lokal instan dengan peringkat semantik AI Groq, sehingga memahami tujuan berbahasa sederhana, sinonim, dan frasa alami — bukan hanya nama alat yang tepat.",
      },
      {
        question: "Alat apa yang dapat direkomendasikan Pencari Alat AI Cerdas?",
        answer:
          "Alat ini mencari seluruh katalog UtilityFlow yang berisi 88 alat: 85 alat browser di kategori teks, pengembang, kalkulator, sosial, PDF, SEO, dan gambar, plus Asisten Penulisan AI dan Peringkas Teks AI.",
      },
      {
        question: "Apakah Pencari Alat AI Cerdas mengirim pencarian saya ke layanan eksternal?",
        answer:
          "Pencarian berbantuan AI mengirim teks permintaan Anda ke Groq untuk pencocokan semantik melalui worker backend kami. Pencocokan kata kunci instan berjalan lokal di browser Anda dan tidak mengirim apa pun.",
      },
      {
        question: "Bisakah saya mencari alat berdasarkan format file, seperti PDF atau PNG?",
        answer:
          "Ya. Sebutkan formatnya dalam permintaan Anda, misalnya 'ubah PDF menjadi PNG', dan pencari akan merekomendasikan alat yang mendukung format itu, seperti PDF ke Gambar.",
      },
      {
        question: "Apa yang dilakukan Pencari Alat AI Cerdas jika tidak ada alat yang cocok dengan tugas saya?",
        answer:
          "Alat ini memberi tahu Anda dengan jujur bahwa tidak ada kecocokan yang tepat dan menyarankan alat terdekat yang tersedia, bukan mengarang alat atau tautan rusak.",
      },
      {
        question: "Bisakah saya memfilter rekomendasi alat berdasarkan kategori?",
        answer:
          "Ya. Gunakan filter kategori untuk membatasi hasil ke alat Teks & Penulisan, Pengembang, Kalkulator, Media Sosial, PDF, SEO, atau Gambar & File sebelum mencari.",
      },
      {
        question: "Bagaimana cara kerja preset tugas cepat di Pencari Alat AI Cerdas?",
        answer:
          "Preset cepat adalah contoh permintaan sekali klik, seperti mengecilkan gambar menjadi 100KB, yang menunjukkan cara menyusun tugas dan langsung mengembalikan alat yang cocok.",
      },
      {
        question: "Mengapa setiap rekomendasi menyertakan penjelasan?",
        answer:
          "Setiap hasil menampilkan penjelasan satu kalimat mengapa alat itu cocok dengan tujuan Anda, termasuk format yang didukung, sehingga Anda dapat menilai kecocokannya sebelum membukanya.",
      },
      {
        question: "Bisakah Pencari Alat AI Cerdas merekomendasikan alat AI juga?",
        answer:
          "Ya. Alat ini dapat merekomendasikan Asisten Penulisan AI untuk tata bahasa dan penulisan ulang, serta Peringkas Teks AI untuk memadatkan teks panjang, ketika tugas Anda cocok dengan alat tersebut.",
      },
      {
        question: "Apakah Pencari Alat AI Cerdas gratis digunakan?",
        answer:
          "Ya. Pencocokan kata kunci tidak terbatas dan gratis, dan pencarian berbantuan AI gratis hingga 10 per hari per pengunjung, tanpa akun, login, atau pembayaran.",
      },
      {
        question: "Apa yang harus saya lakukan jika rekomendasi teratas tidak sepenuhnya tepat?",
        answer:
          "Periksa daftar alternatif di bawah hasil teratas, atau susun ulang permintaan Anda dengan lebih banyak detail — misalnya, sebutkan format file atau keluaran tepat yang Anda perlukan.",
      },
      {
        question: "Bisakah saya memakai Pencari Alat AI Cerdas untuk menemukan kalkulator?",
        answer:
          "Ya. Jelaskan perhitungan dengan kata sederhana, seperti 'hitung cicilan pinjaman bulanan saya', dan alat akan merekomendasikan Kalkulator EMI Pinjaman atau kalkulator terkait.",
      },
      {
        question: "Apa perbedaan Pencari Alat AI Cerdas dengan halaman direktori Alat?",
        answer:
          "Halaman direktori Alat mencantumkan semua 88 alat berdasarkan kategori untuk dijelajahi, sedangkan Pencari Alat mencocokkan tugas berbahasa sederhana Anda dengan alat terbaik dan menjelaskan mengapa alat itu cocok.",
      },
      {
        question: "Bisakah Pencari Alat AI Cerdas membantu tugas SEO?",
        answer:
          "Ya. Tanyakan hal-hal seperti 'cek panjang meta description' atau 'buat sitemap', dan alat akan mengarahkan Anda ke Generator Meta Tag, Generator Sitemap XML, atau Pemeriksa SEO On-Page.",
      },
      {
        question: "Apa yang terjadi ketika saya mencapai batas pencarian AI harian?",
        answer:
          "Batas pencarian AI direset pada tengah malam UTC. Sampai saat itu, pencocokan kata kunci instan tetap berfungsi tanpa batas, sehingga Anda masih dapat menemukan alat lewat kata kunci.",
      },
      {
        question: "Bisakah Pencari Alat AI Cerdas merekomendasikan alat untuk pengeditan gambar?",
        answer:
          "Ya. Jelaskan tugas gambar Anda, seperti 'kompres foto ini' atau 'ubah ukuran gambar', dan alat akan merekomendasikan Kompresor Gambar, Pengubah Ukuran Gambar, atau Konverter Format Gambar.",
      },
      {
        question: "Apakah tautan dari Pencari Alat AI Cerdas selalu berfungsi?",
        answer:
          "Ya. Setiap rekomendasi diperiksa terhadap registri alat live sebelum ditampilkan, sehingga tautan selalu membuka halaman alat UtilityFlow yang nyata dan berfungsi.",
      },
    ],
  },
};
