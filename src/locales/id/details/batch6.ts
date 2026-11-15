// Detail content for ID tools — split out of
// src/locales/id/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
  'serp-snippet-preview': {
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
  'xml-sitemap-generator': {
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
  'robots-txt-generator': {
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
  'schema-markup-generator': {
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
  'url-slug-generator': {
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
          "Slug adalah bagian akhir URL yang mudah dibaca, seperti 'best-cafe-tools', sedangkan permalink adalah URL lengkap termasuk domain dan folder apa pun. Untuk konversi teks cepat bagi developer dengan pemisah garis bawah, lihat Pengubah Teks ke Slug.",
      },
    ],
  },
  'keyword-density-checker': {
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
          "Kepadatan kata kunci adalah seberapa sering sebuah kata atau frasa muncul sebagai persentase dari total kata dalam sebuah teks. Frasa yang dipakai 5 kali dalam 500 kata memiliki kepadatan 1%. Untuk tabel frekuensi lengkap dengan ekspor CSV, lihat Penghitung Frekuensi Kata.",
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
  'canonical-hreflang-generator': {
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
  'on-page-seo-checker': {
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
  'robots-meta-tag-generator': {
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
};
