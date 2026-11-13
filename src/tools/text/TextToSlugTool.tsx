import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleTitles: `10 Best Ways to Format JSON Online!
Café & Crème: Guide for 2026
How to Build a Fast Static Site on Cloudflare Pages`,
    hyphen: 'Hyphen (-)',
    underscore: 'Underscore (_)',
    forceLowercase: 'Force lowercase',
    stripStopWords: 'Strip common stop words',
    titlesLabel: 'Titles or Phrases (one per line for batch mode)',
    inputPlaceholder: 'Enter a blog title, product name, or list of headings...',
    generatedSlugs: 'Generated URL Slugs',
    copySlugs: 'Copy slugs',
    outputPlaceholder: 'clean-url-slugs-appear-here',
  },
  es: {
    sampleTitles: `¡10 mejores formas de formatear JSON en línea!
Café y crema: guía para 2026
Cómo crear un sitio estático rápido en Cloudflare Pages`,
    hyphen: 'Guion (-)',
    underscore: 'Guion bajo (_)',
    forceLowercase: 'Forzar minúsculas',
    stripStopWords: 'Eliminar palabras vacías comunes',
    titlesLabel: 'Títulos o frases (uno por línea para el modo por lotes)',
    inputPlaceholder: 'Escribe un título de blog, un nombre de producto o una lista de encabezados...',
    generatedSlugs: 'Slugs de URL generados',
    copySlugs: 'Copiar slugs',
    outputPlaceholder: 'los-slugs-de-url-limpios-aparecen-aqui',
  },
  pt: {
    sampleTitles: `10 melhores formas de formatar JSON online!
Café e creme: guia para 2026
Como criar um site estático rápido no Cloudflare Pages`,
    hyphen: 'Hífen (-)',
    underscore: 'Sublinhado (_)',
    forceLowercase: 'Forçar minúsculas',
    stripStopWords: 'Remover palavras vazias comuns',
    titlesLabel: 'Títulos ou frases (um por linha para o modo em lote)',
    inputPlaceholder: 'Digite um título de blog, nome de produto ou lista de títulos...',
    generatedSlugs: 'Slugs de URL gerados',
    copySlugs: 'Copiar slugs',
    outputPlaceholder: 'slugs-de-url-limpos-aparecem-aqui',
  },
  fr: {
    sampleTitles: `10 meilleures façons de formater du JSON en ligne !
Café et crème : guide pour 2026
Comment créer un site statique rapide sur Cloudflare Pages`,
    hyphen: 'Trait d\'union (-)',
    underscore: 'Tiret bas (_)',
    forceLowercase: 'Forcer les minuscules',
    stripStopWords: 'Supprimer les mots vides courants',
    titlesLabel: 'Titres ou phrases (un par ligne pour le mode par lot)',
    inputPlaceholder: 'Saisissez un titre de blog, un nom de produit ou une liste de titres...',
    generatedSlugs: 'Slugs d\'URL générés',
    copySlugs: 'Copier les slugs',
    outputPlaceholder: 'les-slugs-d-url-propres-apparaissent-ici',
  },
  de: {
    sampleTitles: `10 beste Wege, JSON online zu formatieren!
Café & Crème: Leitfaden für 2026
So erstellen Sie eine schnelle statische Website mit Cloudflare Pages`,
    hyphen: 'Bindestrich (-)',
    underscore: 'Unterstrich (_)',
    forceLowercase: 'Kleinbuchstaben erzwingen',
    stripStopWords: 'Gängige Stoppwörter entfernen',
    titlesLabel: 'Titel oder Phrasen (einer pro Zeile für den Stapelmodus)',
    inputPlaceholder: 'Blogtitel, Produktname oder Liste von Überschriften eingeben...',
    generatedSlugs: 'Erzeugte URL-Slugs',
    copySlugs: 'Slugs kopieren',
    outputPlaceholder: 'saubere-url-slugs-erscheinen-hier',
  },
  it: {
    sampleTitles: `10 modi migliori per formattare JSON online!
Café & Crème: guida per il 2026
Come creare un sito statico veloce su Cloudflare Pages`,
    hyphen: 'Trattino (-)',
    underscore: 'Trattino basso (_)',
    forceLowercase: 'Forza minuscole',
    stripStopWords: 'Rimuovi le stop word comuni',
    titlesLabel: 'Titoli o frasi (uno per riga per la modalità batch)',
    inputPlaceholder: 'Inserisci il titolo di un blog, il nome di un prodotto o un elenco di titoli...',
    generatedSlugs: 'Slug URL generati',
    copySlugs: 'Copia gli slug',
    outputPlaceholder: 'slug-url-puliti-appaiono-qui',
  },
  id: {
    sampleTitles: `10 Cara Terbaik Memformat JSON Online!
Café & Crème: Panduan untuk 2026
Cara Membangun Situs Statis Cepat di Cloudflare Pages`,
    hyphen: 'Tanda hubung (-)',
    underscore: 'Garis bawah (_)',
    forceLowercase: 'Paksa huruf kecil',
    stripStopWords: 'Hapus kata henti umum',
    titlesLabel: 'Judul atau Frasa (satu per baris untuk mode batch)',
    inputPlaceholder: 'Masukkan judul blog, nama produk, atau daftar judul...',
    generatedSlugs: 'Slug URL yang Dihasilkan',
    copySlugs: 'Salin slug',
    outputPlaceholder: 'slug-url-bersih-muncul-di-sini',
  },
  ru: {
    sampleTitles: `10 лучших способов форматировать JSON онлайн!
Café & Crème: руководство на 2026 год
Как создать быстрый статический сайт на Cloudflare Pages`,
    hyphen: 'Дефис (-)',
    underscore: 'Подчёркивание (_)',
    forceLowercase: 'Принудительно в нижний регистр',
    stripStopWords: 'Удалять общие стоп-слова',
    titlesLabel: 'Заголовки или фразы (по одному в строке для пакетного режима)',
    inputPlaceholder: 'Введите заголовок блога, название продукта или список заголовков...',
    generatedSlugs: 'Сгенерированные URL-слаги',
    copySlugs: 'Копировать слаги',
    outputPlaceholder: 'чистые-url-слаги-появятся-здесь',
  },
};

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'or', 'the', 'to', 'with',
]);

function slugifyLine(
  line: string,
  separator: '-' | '_',
  lowercase: boolean,
  removeStopWords: boolean
): string {
  const normalized = line
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9\s_-]+/g, ' ')
    .trim();

  let parts = normalized.split(/[\s_-]+/).filter(Boolean);
  if (removeStopWords && parts.length > 1) {
    const filtered = parts.filter((word) => !STOP_WORDS.has(word.toLowerCase()));
    if (filtered.length > 0) parts = filtered;
  }

  const joined = parts.join(separator);
  return lowercase ? joined.toLowerCase() : joined;
}

export default function TextToSlugTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [separator, setSeparator] = useState<'-' | '_'>('-');
  const [lowercase, setLowercase] = useState(true);
  const [removeStopWords, setRemoveStopWords] = useState(false);

  const output = useMemo(() => {
    if (!input.trim()) return '';
    return input
      .split(/\r?\n/)
      .map((line) => slugifyLine(line, separator, lowercase, removeStopWords))
      .filter(Boolean)
      .join('\n');
  }, [input, separator, lowercase, removeStopWords]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setSeparator('-')}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                separator === '-' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.hyphen}
            </button>
            <button
              type="button"
              onClick={() => setSeparator('_')}
              className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                separator === '_' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.underscore}
            </button>
          </div>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.forceLowercase}</span>
          </label>

          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeStopWords}
              onChange={(e) => setRemoveStopWords(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.stripStopWords}</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(s.sampleTitles)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setInput('')}
            disabled={!input}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="slug-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.titlesLabel}
          </label>
          <textarea
            id="slug-input"
            rows={7}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="slug-output" className="text-sm font-semibold text-slate-900">
              {s.generatedSlugs}
            </label>
            <CopyButton text={output} label={s.copySlugs} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="slug-output"
            rows={7}
            readOnly
            value={output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-indigo-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
