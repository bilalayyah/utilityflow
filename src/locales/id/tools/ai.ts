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
  },
};
