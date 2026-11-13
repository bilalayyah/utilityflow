import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleText: `UtilityFlow processes every text calculation right inside your browser. Whether you are drafting a blog article, tightening a product announcement, or checking an academic essay against a strict word limit, instant counts help you pace your message clearly.

Short sentences improve scanning. Varying sentence length keeps longer guides engaging for readers across desktop and mobile screens.`,
    words: 'Words',
    characters: 'Characters',
    noSpaces: 'No Spaces',
    sentences: 'Sentences',
    paragraphs: 'Paragraphs',
    readingTime: 'Reading Time',
    downloadTxt: 'Download .txt',
    copyText: 'Copy text',
    textToCount: 'Text to count',
    placeholder:
      'Paste or type your text here to count words, characters, sentences, and reading time...',
    deliveryTimingLines: 'Delivery Timing & Lines',
    speakingTime: 'Speaking time (130 wpm)',
    totalLines: 'Total lines',
    avgWordLength: 'Average word length',
    chars: 'chars',
    mostFrequentWords: 'Most Frequent Words',
    emptyKeywords: 'Enter text above to inspect top repeated words.',
  },
  es: {
    sampleText: `UtilityFlow procesa cada cálculo de texto directamente en tu navegador. Ya sea que estés redactando un artículo de blog, afinando un anuncio de producto o revisando un ensayo académico con un límite estricto de palabras, los conteos instantáneos te ayudan a organizar tu mensaje con claridad.

Las oraciones cortas facilitan la lectura rápida. Variar la longitud de las oraciones mantiene las guías largas atractivas para los lectores en pantallas de escritorio y móviles.`,
    words: 'Palabras',
    characters: 'Caracteres',
    noSpaces: 'Sin espacios',
    sentences: 'Oraciones',
    paragraphs: 'Párrafos',
    readingTime: 'Tiempo de lectura',
    downloadTxt: 'Descargar .txt',
    copyText: 'Copiar texto',
    textToCount: 'Texto para contar',
    placeholder:
      'Pega o escribe tu texto aquí para contar palabras, caracteres, oraciones y tiempo de lectura...',
    deliveryTimingLines: 'Tiempo de entrega y líneas',
    speakingTime: 'Tiempo de habla (130 ppm)',
    totalLines: 'Total de líneas',
    avgWordLength: 'Longitud promedio de palabra',
    chars: 'caracteres',
    mostFrequentWords: 'Palabras más frecuentes',
    emptyKeywords: 'Escribe texto arriba para ver las palabras más repetidas.',
  },
  pt: {
    sampleText: `O UtilityFlow processa cada cálculo de texto diretamente no seu navegador. Seja para redigir um artigo de blog, ajustar um anúncio de produto ou revisar um ensaio acadêmico com um limite rígido de palavras, as contagens instantâneas ajudam você a organizar sua mensagem com clareza.

Frases curtas melhoram a leitura. Variar o tamanho das frases mantém guias longos interessantes para leitores em telas de desktop e dispositivos móveis.`,
    words: 'Palavras',
    characters: 'Caracteres',
    noSpaces: 'Sem espaços',
    sentences: 'Frases',
    paragraphs: 'Parágrafos',
    readingTime: 'Tempo de leitura',
    downloadTxt: 'Baixar .txt',
    copyText: 'Copiar texto',
    textToCount: 'Texto para contar',
    placeholder:
      'Cole ou digite seu texto aqui para contar palavras, caracteres, frases e tempo de leitura...',
    deliveryTimingLines: 'Tempo de entrega e linhas',
    speakingTime: 'Tempo de fala (130 ppm)',
    totalLines: 'Total de linhas',
    avgWordLength: 'Comprimento médio da palavra',
    chars: 'caracteres',
    mostFrequentWords: 'Palavras mais frequentes',
    emptyKeywords: 'Digite texto acima para ver as palavras mais repetidas.',
  },
  fr: {
    sampleText: `UtilityFlow traite chaque calcul de texte directement dans votre navigateur. Que vous rédigiez un article de blog, peaufiniez une annonce produit ou vérifiiez un essai académique avec une limite stricte de mots, les comptes instantanés vous aident à rythmer votre message clairement.

Les phrases courtes améliorent la lecture. Varier la longueur des phrases rend les guides longs attrayants pour les lecteurs sur ordinateur et mobile.`,
    words: 'Mots',
    characters: 'Caractères',
    noSpaces: 'Sans espaces',
    sentences: 'Phrases',
    paragraphs: 'Paragraphes',
    readingTime: 'Temps de lecture',
    downloadTxt: 'Télécharger .txt',
    copyText: 'Copier le texte',
    textToCount: 'Texte à compter',
    placeholder:
      'Collez ou saisissez votre texte ici pour compter les mots, les caractères, les phrases et le temps de lecture...',
    deliveryTimingLines: 'Temps de lecture et lignes',
    speakingTime: 'Temps de parole (130 mpm)',
    totalLines: 'Nombre total de lignes',
    avgWordLength: 'Longueur moyenne des mots',
    chars: 'caractères',
    mostFrequentWords: 'Mots les plus fréquents',
    emptyKeywords: 'Saisissez du texte ci-dessus pour voir les mots les plus répétés.',
  },
};

export default function WordCounterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const wordsArray = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const wordCount = wordsArray.length;
    const charsWithSpaces = text.length;
    const charsWithoutSpaces = text.replace(/\s/g, '').length;
    const sentences = trimmed
      ? trimmed.split(/[.!?]+(?:\s|$)/).filter((s) => s.trim().length > 0).length
      : 0;
    const paragraphs = trimmed
      ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
      : 0;
    const lines = text ? text.split(/\r?\n/).length : 0;

    // 225 wpm reading, 130 wpm speaking
    const readingSeconds = wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / 225) * 60));
    const speakingSeconds = wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / 130) * 60));

    const freqMap = new Map<string, number>();
    for (const raw of wordsArray) {
      const cleaned = raw.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, '');
      if (cleaned.length >= 2) {
        freqMap.set(cleaned, (freqMap.get(cleaned) || 0) + 1);
      }
    }

    const topKeywords = Array.from(freqMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([word, count]) => ({
        word,
        count,
        pct: wordCount > 0 ? ((count / wordCount) * 100).toFixed(1) : '0.0',
      }));

    return {
      wordCount,
      charsWithSpaces,
      charsWithoutSpaces,
      sentences,
      paragraphs,
      lines,
      readingSeconds,
      speakingSeconds,
      topKeywords,
    };
  }, [text]);

  const formatDuration = (seconds: number) => {
    if (seconds === 0) return '0s';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return secs === 0 ? `${mins}m` : `${mins}m ${secs}s`;
  };

  const handleDownload = () => {
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'word-counter-text.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Live Metrics Grid */}
      <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.words}</dt>
          <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
            {stats.wordCount.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.characters}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.charsWithSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.noSpaces}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.charsWithoutSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.sentences}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.sentences.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.paragraphs}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {stats.paragraphs.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.readingTime}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {formatDuration(stats.readingSeconds)}
          </dd>
        </div>
      </dl>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setText(s.sampleText)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownload}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.downloadTxt}</span>
          </button>
          <CopyButton text={text} label={s.copyText} copiedLabel={t.common.copied} />
        </div>
      </div>

      {/* Textarea */}
      <div>
        <label htmlFor="word-counter-input" className="sr-only">
          {s.textToCount}
        </label>
        <textarea
          id="word-counter-input"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {/* Secondary Stats + Top Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">{s.deliveryTimingLines}</h3>
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">{s.speakingTime}</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {formatDuration(stats.speakingSeconds)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">{s.totalLines}</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {stats.lines.toLocaleString(locale)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">{s.avgWordLength}</dt>
              <dd className="font-mono font-medium text-slate-900 tabular-nums">
                {stats.wordCount > 0
                  ? (stats.charsWithoutSpaces / stats.wordCount).toFixed(1)
                  : '0.0'}{' '}
                {s.chars}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">{s.mostFrequentWords}</h3>
          {stats.topKeywords.length > 0 ? (
            <ul className="space-y-1.5 text-sm">
              {stats.topKeywords.map((item) => (
                <li key={item.word} className="flex items-center justify-between">
                  <span className="font-mono text-slate-800">{item.word}</span>
                  <span className="font-mono text-xs text-slate-600 tabular-nums">
                    {item.count} ({item.pct}%)
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">{s.emptyKeywords}</p>
          )}
        </div>
      </div>
    </div>
  );
}
