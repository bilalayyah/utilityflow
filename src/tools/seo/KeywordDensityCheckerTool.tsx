import { Info } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleContent:
      'Technical SEO starts with clean crawlable URLs, accurate canonical tags, and structured XML sitemaps. When publishers write helpful content focused on user intent rather than keyword stuffing, search engines understand topic depth naturally. Audit your headings, meta descriptions, and internal links regularly.',
    defaultTargetKeyword: 'technical seo',
    guidanceTitle: 'Editorial Guidance:',
    guidanceBody:
      'Modern search engines do not reward hitting a fixed keyword-density quota. Use this distribution audit to spot accidental repetition or confirm that primary concepts appear clearly in your copy.',
    targetLabel: 'Target Keyword / Phrase (Optional)',
    targetPlaceholder: 'e.g. technical seo',
    phraseLengthLabel: 'Phrase Length',
    oneWord: '1-Word',
    twoWord: '2-Word Phrases',
    threeWord: '3-Word Phrases',
    stripHtml: 'Strip HTML tags',
    ignoreStopWords: 'Ignore stop words',
    textLabel: 'Article Draft or Pasted HTML Copy',
    totalWords: 'Total Words',
    uniqueVocabulary: 'Unique Vocabulary',
    readingTime: 'Est. Reading Time',
    targetPrefix: 'Target: ',
    hits: '{n} hits ({d}%)',
    rankHeader: 'Rank',
    termHeader: 'Term / N-gram',
    occurrencesHeader: 'Occurrences',
    shareHeader: 'Share (%)',
  },
  es: {
    sampleContent:
      'El SEO técnico comienza con URL limpias y rastreables, etiquetas canónicas precisas y sitemaps XML estructurados. Cuando los editores escriben contenido útil centrado en la intención del usuario en lugar de rellenar palabras clave, los motores de búsqueda comprenden la profundidad del tema de forma natural. Audita tus encabezados, metadescripciones y enlaces internos con regularidad.',
    defaultTargetKeyword: 'seo técnico',
    guidanceTitle: 'Orientación editorial:',
    guidanceBody:
      'Los motores de búsqueda modernos no premian alcanzar una cuota fija de densidad de palabras clave. Usa esta auditoría de distribución para detectar repeticiones accidentales o confirmar que los conceptos principales aparecen con claridad en tu texto.',
    targetLabel: 'Palabra clave / frase objetivo (opcional)',
    targetPlaceholder: 'p. ej., seo técnico',
    phraseLengthLabel: 'Longitud de la frase',
    oneWord: '1 palabra',
    twoWord: 'Frases de 2 palabras',
    threeWord: 'Frases de 3 palabras',
    stripHtml: 'Eliminar etiquetas HTML',
    ignoreStopWords: 'Ignorar palabras vacías',
    textLabel: 'Borrador de artículo o texto HTML pegado',
    totalWords: 'Palabras totales',
    uniqueVocabulary: 'Vocabulario único',
    readingTime: 'Tiempo estimado de lectura',
    targetPrefix: 'Objetivo: ',
    hits: '{n} coincidencias ({d}%)',
    rankHeader: 'Posición',
    termHeader: 'Término / N-grama',
    occurrencesHeader: 'Ocurrencias',
    shareHeader: 'Porcentaje (%)',
  },
};

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in',
  'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the',
  'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with',
  'you', 'your', 'our', 'we', 'from', 'can',
]);

export default function KeywordDensityCheckerTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [content, setContent] = useState(s.sampleContent);
  const [targetKeyword, setTargetKeyword] = useState(s.defaultTargetKeyword);
  const [stripHtml, setStripHtml] = useState(true);
  const [ignoreStopWords, setIgnoreStopWords] = useState(true);
  const [ngramSize, setNgramSize] = useState<1 | 2 | 3>(1);

  const analysis = useMemo(() => {
    const plain = stripHtml
      ? content
          .replace(/<script[\s\S]*?<\/script>/gi, ' ')
          .replace(/<style[\s\S]*?<\/style>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
      : content;

    const rawTokens = plain
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
      .split(/\s+/)
      .map((w) => w.replace(/^['-]+|['-]+$/g, ''))
      .filter(Boolean);

    const totalWords = rawTokens.length;
    const uniqueWords = new Set(rawTokens).size;
    const readingMins = totalWords > 0 ? Math.max(1, Math.ceil(totalWords / 225)) : 0;

    // Target keyword check (exact phrase match over cleaned text)
    const cleanTarget = targetKeyword.trim().toLowerCase();
    let targetHits = 0;
    let targetDensity = 0;
    if (cleanTarget && totalWords > 0) {
      const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
      const joinedClean = rawTokens.join(' ');
      const escaped = cleanTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matches = joinedClean.match(new RegExp(`\\b${escaped}\\b`, 'gi'));
      targetHits = matches ? matches.length : 0;
      targetDensity = (targetHits * targetWords.length * 100) / totalWords;
    }

    // Build N-grams
    const counts = new Map<string, number>();
    if (ngramSize === 1) {
      for (const word of rawTokens) {
        if (ignoreStopWords && STOP_WORDS.has(word)) continue;
        counts.set(word, (counts.get(word) ?? 0) + 1);
      }
    } else {
      for (let i = 0; i <= rawTokens.length - ngramSize; i += 1) {
        const slice = rawTokens.slice(i, i + ngramSize);
        if (ignoreStopWords && slice.every((w) => STOP_WORDS.has(w))) continue;
        const phrase = slice.join(' ');
        counts.set(phrase, (counts.get(phrase) ?? 0) + 1);
      }
    }

    const denominator = Math.max(1, totalWords);
    const topTerms = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 15)
      .map(([term, count]) => ({
        term,
        count,
        density: (count * ngramSize * 100) / denominator,
      }));

    return {
      totalWords,
      uniqueWords,
      readingMins,
      targetHits,
      targetDensity,
      topTerms,
    };
  }, [content, targetKeyword, stripHtml, ignoreStopWords, ngramSize]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
        <Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" />
        <p>
          <strong>{s.guidanceTitle}</strong> {s.guidanceBody}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label htmlFor="kd-target" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.targetLabel}
          </label>
          <input
            id="kd-target"
            type="text"
            value={targetKeyword}
            onChange={(e) => setTargetKeyword(e.target.value)}
            placeholder={s.targetPlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          />
        </div>

        <div>
          <span className="block text-xs font-semibold text-slate-800 mb-1.5">{s.phraseLengthLabel}</span>
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {([1, 2, 3] as (1 | 2 | 3)[]).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNgramSize(n)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                  ngramSize === n ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {n === 1 ? s.oneWord : n === 2 ? s.twoWord : s.threeWord}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pb-1">
          <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={stripHtml}
              onChange={(e) => setStripHtml(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.stripHtml}
          </label>
          <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={ignoreStopWords}
              onChange={(e) => setIgnoreStopWords(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.ignoreStopWords}
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="kd-text" className="block text-sm font-semibold text-slate-900 mb-1.5">
          {s.textLabel}
        </label>
        <textarea
          id="kd-text"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm leading-relaxed"
        />
      </div>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 tabular-nums">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">{s.totalWords}</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">
            {analysis.totalWords.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">{s.uniqueVocabulary}</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">
            {analysis.uniqueWords.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <dt className="text-xs text-slate-500">{s.readingTime}</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">
            ~{analysis.readingMins} min
          </dd>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/70 p-4">
          <dt className="text-xs text-indigo-700 truncate">
            {s.targetPrefix}
            {targetKeyword.trim() || '—'}
          </dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">
            {s.hits.replace('{n}', String(analysis.targetHits)).replace('{d}', analysis.targetDensity.toFixed(2))}
          </dd>
        </div>
      </dl>

      {analysis.topTerms.length > 0 && (
        <div className="rounded-xl border border-slate-200 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">{s.rankHeader}</th>
                <th className="py-2.5 px-4 font-semibold">{s.termHeader}</th>
                <th className="py-2.5 px-4 font-semibold text-right">{s.occurrencesHeader}</th>
                <th className="py-2.5 px-4 font-semibold text-right">{s.shareHeader}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 tabular-nums">
              {analysis.topTerms.map((item, idx) => (
                <tr key={item.term}>
                  <td className="py-2 px-4 font-mono text-slate-500">#{idx + 1}</td>
                  <td className="py-2 px-4 font-semibold text-slate-900">{item.term}</td>
                  <td className="py-2 px-4 text-right font-mono text-slate-700">{item.count}</td>
                  <td className="py-2 px-4 text-right font-mono text-indigo-700 font-semibold">
                    {item.density.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
