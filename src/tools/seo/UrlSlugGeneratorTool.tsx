import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleTitles:
      'How to Build a Clean URL Slug for Technical SEO!\n10 Best Café & Productivity Tools in 2026\nXML Sitemap & Robots.txt Complete Checklist',
    domainLabel: 'Base Domain / Subfolder (for full URL preview)',
    separatorLabel: 'Word Separator',
    hyphenOption: 'Hyphen (-) — Google Recommended',
    underscoreOption: 'Underscore (_)',
    maxLengthLabel: 'Max Slug Length ({n} chars)',
    stripStopWords: 'Strip optional English stop words (a, the, and, of, in, to)',
    trailingSlash: 'Include trailing slash (/)',
    titlesLabel: 'Page Headlines / Titles (One per line for batch generation)',
    generatedLabel: 'Generated SEO Slugs ({n})',
    copyAllSlugs: 'Copy All Slugs',
    copyAllUrls: 'Copy All Full URLs',
    originalTitleHeader: 'Original Title',
    slugUrlHeader: 'SEO Slug & Full URL',
    copyHeader: 'Copy',
  },
  es: {
    sampleTitles:
      '¡Cómo crear un slug de URL limpio para SEO técnico!\n10 mejores herramientas de café y productividad en 2026\nLista de verificación completa de sitemap XML y robots.txt',
    domainLabel: 'Dominio base / subcarpeta (para la vista previa de la URL completa)',
    separatorLabel: 'Separador de palabras',
    hyphenOption: 'Guion (-) — recomendado por Google',
    underscoreOption: 'Guion bajo (_)',
    maxLengthLabel: 'Longitud máxima del slug ({n} caracteres)',
    stripStopWords: 'Eliminar palabras vacías opcionales en inglés (a, the, and, of, in, to)',
    trailingSlash: 'Incluir barra final (/)',
    titlesLabel: 'Titulares / títulos de página (uno por línea para generación por lotes)',
    generatedLabel: 'Slugs SEO generados ({n})',
    copyAllSlugs: 'Copiar todos los slugs',
    copyAllUrls: 'Copiar todas las URL completas',
    originalTitleHeader: 'Título original',
    slugUrlHeader: 'Slug SEO y URL completa',
    copyHeader: 'Copiar',
  },
  pt: {
    sampleTitles: 'Como criar um slug de URL limpo para SEO técnico!\n10 melhores ferramentas de café e produtividade em 2026\nChecklist completo de sitemap XML e robots.txt',
    domainLabel: 'Domínio base / subpasta (para pré-visualizar a URL completa)',
    separatorLabel: 'Separador de palavras',
    hyphenOption: 'Hífen (-) — recomendado pelo Google',
    underscoreOption: 'Sublinhado (_)',
    maxLengthLabel: 'Comprimento máximo do slug ({n} caracteres)',
    stripStopWords: 'Remover stop words opcionais em inglês (a, the, and, of, in, to)',
    trailingSlash: 'Incluir barra final (/)',
    titlesLabel: 'Títulos de página (um por linha para geração em lote)',
    generatedLabel: 'Slugs de SEO gerados ({n})',
    copyAllSlugs: 'Copiar todos os slugs',
    copyAllUrls: 'Copiar todas as URLs completas',
    originalTitleHeader: 'Título original',
    slugUrlHeader: 'Slug de SEO e URL completa',
    copyHeader: 'Copiar',
  },
  fr: {
    sampleTitles: 'Comment créer un slug d\'URL propre pour le SEO technique !\n10 meilleurs outils café et productivité en 2026\nListe de contrôle complète du sitemap XML et du robots.txt',
    domainLabel: 'Domaine de base / sous-dossier (pour l\'aperçu de l\'URL complète)',
    separatorLabel: 'Séparateur de mots',
    hyphenOption: 'Trait d\'union (-) — recommandé par Google',
    underscoreOption: 'Tiret bas (_)',
    maxLengthLabel: 'Longueur maximale du slug ({n} caractères)',
    stripStopWords: 'Supprimer les mots vides facultatifs en anglais (a, the, and, of, in, to)',
    trailingSlash: 'Inclure la barre oblique finale (/)',
    titlesLabel: 'Titres de page (un par ligne pour la génération en lot)',
    generatedLabel: 'Slugs SEO générés ({n})',
    copyAllSlugs: 'Copier tous les slugs',
    copyAllUrls: 'Copier toutes les URL complètes',
    originalTitleHeader: 'Titre d\'origine',
    slugUrlHeader: 'Slug SEO et URL complète',
    copyHeader: 'Copier',
  },
  de: {
    sampleTitles:
      'So erstellt man einen sauberen URL-Slug für technisches SEO!\n10 beste Café- & Produktivitätstools 2026\nXML-Sitemap- & Robots.txt-Komplettcheckliste',
    domainLabel: 'Basis-Domain / Unterordner (für vollständige URL-Vorschau)',
    separatorLabel: 'Worttrennzeichen',
    hyphenOption: 'Bindestrich (-) — von Google empfohlen',
    underscoreOption: 'Unterstrich (_)',
    maxLengthLabel: 'Max. Slug-Länge ({n} Zeichen)',
    stripStopWords: 'Optionale englische Stoppwörter entfernen (a, the, and, of, in, to)',
    trailingSlash: 'Schrägstrich am Ende einfügen (/)',
    titlesLabel: 'Seitenüberschriften / Titel (einer pro Zeile für Stapelverarbeitung)',
    generatedLabel: 'Generierte SEO-Slugs ({n})',
    copyAllSlugs: 'Alle Slugs kopieren',
    copyAllUrls: 'Alle vollständigen URLs kopieren',
    originalTitleHeader: 'Originaltitel',
    slugUrlHeader: 'SEO-Slug & vollständige URL',
    copyHeader: 'Kopieren',
  },
  it: {
    sampleTitles:
      'Come creare uno slug URL pulito per la SEO tecnica!\nI 10 migliori strumenti per caffè e produttività nel 2026\nChecklist completa di sitemap XML e robots.txt',
    domainLabel: 'Dominio base / sottocartella (per anteprima URL completa)',
    separatorLabel: 'Separatore di parole',
    hyphenOption: 'Trattino (-) — consigliato da Google',
    underscoreOption: 'Trattino basso (_)',
    maxLengthLabel: 'Lunghezza max slug ({n} caratteri)',
    stripStopWords: 'Rimuovi le stop word inglesi facoltative (a, the, and, of, in, to)',
    trailingSlash: 'Includi barra finale (/)',
    titlesLabel: 'Titoli di pagina (uno per riga per generazione in batch)',
    generatedLabel: 'Slug SEO generati ({n})',
    copyAllSlugs: 'Copia tutti gli slug',
    copyAllUrls: 'Copia tutti gli URL completi',
    originalTitleHeader: 'Titolo originale',
    slugUrlHeader: 'Slug SEO e URL completo',
    copyHeader: 'Copia',
  },
  id: {
    sampleTitles:
      'Cara Membuat Slug URL yang Bersih untuk SEO Teknis!\n10 Alat Café & Produktivitas Terbaik di 2026\nChecklist Lengkap XML Sitemap & Robots.txt',
    domainLabel: 'Domain Dasar / Subfolder (untuk pratinjau URL lengkap)',
    separatorLabel: 'Pemisah Kata',
    hyphenOption: 'Tanda hubung (-) — Direkomendasikan Google',
    underscoreOption: 'Garis bawah (_)',
    maxLengthLabel: 'Panjang Slug Maks ({n} karakter)',
    stripStopWords: 'Hapus kata henti opsional Bahasa Inggris (a, the, and, of, in, to)',
    trailingSlash: 'Sertakan garis miring di akhir (/)',
    titlesLabel: 'Judul / Judul Halaman (Satu per baris untuk pembuatan batch)',
    generatedLabel: 'Slug SEO yang Dihasilkan ({n})',
    copyAllSlugs: 'Salin Semua Slug',
    copyAllUrls: 'Salin Semua URL Lengkap',
    originalTitleHeader: 'Judul Asli',
    slugUrlHeader: 'Slug SEO & URL Lengkap',
    copyHeader: 'Salin',
  },
  ru: {
    sampleTitles:
      'Как создать чистый URL-слаг для технического SEO!\n10 лучших инструментов Café и продуктивности в 2026 году\nПолный чек-лист XML Sitemap и Robots.txt',
    domainLabel: 'Базовый домен / подпапка (для предпросмотра полного URL)',
    separatorLabel: 'Разделитель слов',
    hyphenOption: 'Дефис (-) — рекомендуется Google',
    underscoreOption: 'Подчёркивание (_)',
    maxLengthLabel: 'Макс. длина слага ({n} симв.)',
    stripStopWords: 'Удалять необязательные английские стоп-слова (a, the, and, of, in, to)',
    trailingSlash: 'Включать завершающий слеш (/)',
    titlesLabel: 'Заголовки страниц (по одному в строке для пакетной генерации)',
    generatedLabel: 'Сгенерированные SEO-слаги ({n})',
    copyAllSlugs: 'Копировать все слаги',
    copyAllUrls: 'Копировать все полные URL',
    originalTitleHeader: 'Исходный заголовок',
    slugUrlHeader: 'SEO-слаг и полный URL',
    copyHeader: 'Копировать',
  },
};

const SEO_STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how',
  'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'this', 'to', 'with',
]);

function makeSeoSlug(
  raw: string,
  options: { removeStopWords: boolean; separator: '-' | '_'; maxLength: number }
): string {
  const normalized = raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim();

  if (!normalized) return '';

  let tokens = normalized.split(/[\s_-]+/).filter(Boolean);
  if (options.removeStopWords && tokens.length > 2) {
    const filtered = tokens.filter((t) => !SEO_STOP_WORDS.has(t));
    if (filtered.length > 0) tokens = filtered;
  }

  let slug = tokens.join(options.separator);
  if (options.maxLength > 0 && slug.length > options.maxLength) {
    const sliced = slug.slice(0, options.maxLength);
    const lastSep = sliced.lastIndexOf(options.separator);
    slug = lastSep > 8 ? sliced.slice(0, lastSep) : sliced;
  }
  return slug;
}

export default function UrlSlugGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [domainBase, setDomainBase] = useState('https://utilityflow.online');
  const [titlesInput, setTitlesInput] = useState(s.sampleTitles);
  const [removeStopWords, setRemoveStopWords] = useState(true);
  const [separator, setSeparator] = useState<'-' | '_'>('-');
  const [maxLength, setMaxLength] = useState(60);
  const [trailingSlash, setTrailingSlash] = useState(true);

  const results = useMemo(() => {
    const cleanBase = domainBase.trim().replace(/\/+$/, '');
    const lines = titlesInput.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    return lines.map((line) => {
      const slug = makeSeoSlug(line, { removeStopWords, separator, maxLength });
      const suffix = trailingSlash ? '/' : '';
      const fullUrl = cleanBase ? `${cleanBase}/${slug}${suffix}` : `/${slug}${suffix}`;
      return { original: line, slug, fullUrl };
    });
  }, [domainBase, titlesInput, removeStopWords, separator, maxLength, trailingSlash]);

  const allSlugs = results.map((r) => r.slug).filter(Boolean).join('\n');
  const allUrls = results.map((r) => r.fullUrl).filter(Boolean).join('\n');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="usg-domain" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.domainLabel}
          </label>
          <input
            id="usg-domain"
            type="text"
            value={domainBase}
            onChange={(e) => setDomainBase(e.target.value)}
            placeholder="https://example.com/blog"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="usg-sep" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.separatorLabel}
          </label>
          <select
            id="usg-sep"
            value={separator}
            onChange={(e) => setSeparator(e.target.value as '-' | '_')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="-">{s.hyphenOption}</option>
            <option value="_">{s.underscoreOption}</option>
          </select>
        </div>

        <div>
          <label htmlFor="usg-len" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.maxLengthLabel.replace('{n}', String(maxLength))}
          </label>
          <input
            id="usg-len"
            type="number"
            min={15}
            max={120}
            value={maxLength}
            onChange={(e) => setMaxLength(Number(e.target.value) || 60)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={removeStopWords}
            onChange={(e) => setRemoveStopWords(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          {s.stripStopWords}
        </label>

        <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input
            type="checkbox"
            checked={trailingSlash}
            onChange={(e) => setTrailingSlash(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600"
          />
          {s.trailingSlash}
        </label>
      </div>

      <div>
        <label htmlFor="usg-titles" className="block text-sm font-semibold text-slate-900 mb-1.5">
          {s.titlesLabel}
        </label>
        <textarea
          id="usg-titles"
          rows={4}
          value={titlesInput}
          onChange={(e) => setTitlesInput(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
        />
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-600">
              {s.generatedLabel.replace('{n}', String(results.length))}
            </span>
            <div className="flex items-center gap-2">
              <CopyButton text={allSlugs} label={s.copyAllSlugs} copiedLabel={t.common.copied} />
              <CopyButton text={allUrls} label={s.copyAllUrls} copiedLabel={t.common.copied} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">{s.originalTitleHeader}</th>
                  <th className="py-2.5 px-4 font-semibold">{s.slugUrlHeader}</th>
                  <th className="py-2.5 px-4 font-semibold text-right">{s.copyHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {results.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2.5 px-4 text-slate-700 max-w-xs truncate">{row.original}</td>
                    <td className="py-2.5 px-4">
                      <div className="font-mono font-semibold text-indigo-700">{row.slug || '—'}</div>
                      <div className="font-mono text-xs text-slate-500 truncate max-w-md">
                        {row.fullUrl}
                      </div>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <CopyButton text={row.slug} label={t.common.copy} copiedLabel={t.common.copied} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
