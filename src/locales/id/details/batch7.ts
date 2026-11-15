// Detail content for ID tools — split out of
// src/locales/id/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
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
  'image-resizer': {
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
  'image-format-converter': {
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
  'image-rotate-flip': {
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
  'image-to-base64': {
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
  'color-contrast-checker': {
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
  'qr-code-scanner': {
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
  'password-generator': {
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
  'file-hash-verifier': {
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
  'favicon-generator': {
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
