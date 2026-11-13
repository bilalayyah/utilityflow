import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    ignoreWhitespace: 'Ignore whitespace',
    ignoreCase: 'Ignore case',
    originalText: 'Original Text',
    modifiedText: 'Modified Text',
    originalPlaceholder: 'Paste original text...',
    modifiedPlaceholder: 'Paste updated text...',
    lineComparison: 'Line Comparison',
    added: 'added',
    removed: 'removed',
    unchanged: 'unchanged',
    emptyState: 'Enter text in both boxes above to compare line additions and removals.',
  },
  es: {
    ignoreWhitespace: 'Ignorar espacios en blanco',
    ignoreCase: 'Ignorar mayúsculas y minúsculas',
    originalText: 'Texto original',
    modifiedText: 'Texto modificado',
    originalPlaceholder: 'Pega el texto original...',
    modifiedPlaceholder: 'Pega el texto actualizado...',
    lineComparison: 'Comparación de líneas',
    added: 'agregadas',
    removed: 'eliminadas',
    unchanged: 'sin cambios',
    emptyState:
      'Escribe texto en ambos cuadros de arriba para comparar las líneas agregadas y eliminadas.',
  },
  pt: {
    ignoreWhitespace: 'Ignorar espaços em branco',
    ignoreCase: 'Ignorar maiúsculas e minúsculas',
    originalText: 'Texto original',
    modifiedText: 'Texto modificado',
    originalPlaceholder: 'Cole o texto original...',
    modifiedPlaceholder: 'Cole o texto atualizado...',
    lineComparison: 'Comparação de linhas',
    added: 'adicionadas',
    removed: 'removidas',
    unchanged: 'sem alterações',
    emptyState: 'Digite texto nas duas caixas acima para comparar as linhas adicionadas e removidas.',
  },
  fr: {
    ignoreWhitespace: 'Ignorer les espaces',
    ignoreCase: 'Ignorer la casse',
    originalText: 'Texte d\'origine',
    modifiedText: 'Texte modifié',
    originalPlaceholder: 'Collez le texte d\'origine...',
    modifiedPlaceholder: 'Collez le texte mis à jour...',
    lineComparison: 'Comparaison des lignes',
    added: 'ajoutées',
    removed: 'supprimées',
    unchanged: 'inchangées',
    emptyState: 'Saisissez du texte dans les deux zones ci-dessus pour comparer les lignes ajoutées et supprimées.',
  },
};

interface DiffLine {
  type: 'unchanged' | 'added' | 'removed';
  text: string;
  oldLine?: number;
  newLine?: number;
}

const SAMPLE_LEFT = `Server Port: 3000
Cache TTL: 600
Log Level: info
Enable Compression: false
Region: eu-west-2`;

const SAMPLE_RIGHT = `Server Port: 3000
Cache TTL: 1800
Log Level: warn
Enable Compression: true
Metrics Enabled: true
Region: eu-west-2`;

function computeLineDiff(
  leftText: string,
  rightText: string,
  ignoreCase: boolean,
  ignoreWhitespace: boolean
): DiffLine[] {
  const leftLines = leftText.split(/\r?\n/);
  const rightLines = rightText.split(/\r?\n/);

  const normalize = (line: string) => {
    let val = ignoreWhitespace ? line.replace(/\s+/g, ' ').trim() : line;
    if (ignoreCase) val = val.toLowerCase();
    return val;
  };

  const m = leftLines.length;
  const n = rightLines.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = m - 1; i >= 0; i -= 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      if (normalize(leftLines[i]) === normalize(rightLines[j])) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  const result: DiffLine[] = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (normalize(leftLines[i]) === normalize(rightLines[j])) {
      result.push({ type: 'unchanged', text: rightLines[j], oldLine: i + 1, newLine: j + 1 });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: 'removed', text: leftLines[i], oldLine: i + 1 });
      i += 1;
    } else {
      result.push({ type: 'added', text: rightLines[j], newLine: j + 1 });
      j += 1;
    }
  }

  while (i < m) {
    result.push({ type: 'removed', text: leftLines[i], oldLine: i + 1 });
    i += 1;
  }
  while (j < n) {
    result.push({ type: 'added', text: rightLines[j], newLine: j + 1 });
    j += 1;
  }

  return result;
}

export default function TextDiffCheckerTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [originalText, setOriginalText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);

  const hasContent = originalText.length > 0 || modifiedText.length > 0;

  const diffResult = useMemo(() => {
    if (!hasContent) return [];
    return computeLineDiff(originalText, modifiedText, ignoreCase, ignoreWhitespace);
  }, [originalText, modifiedText, ignoreCase, ignoreWhitespace, hasContent]);

  const counts = useMemo(() => {
    let added = 0;
    let removed = 0;
    let unchanged = 0;
    for (const row of diffResult) {
      if (row.type === 'added') added += 1;
      else if (row.type === 'removed') removed += 1;
      else unchanged += 1;
    }
    return { added, removed, unchanged };
  }, [diffResult]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={ignoreWhitespace}
              onChange={(e) => setIgnoreWhitespace(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.ignoreWhitespace}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.ignoreCase}</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setOriginalText(SAMPLE_LEFT);
              setModifiedText(SAMPLE_RIGHT);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setOriginalText('');
              setModifiedText('');
            }}
            disabled={!hasContent}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="diff-original" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.originalText}
          </label>
          <textarea
            id="diff-original"
            rows={8}
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder={s.originalPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="diff-modified" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.modifiedText}
          </label>
          <textarea
            id="diff-modified"
            rows={8}
            value={modifiedText}
            onChange={(e) => setModifiedText(e.target.value)}
            placeholder={s.modifiedPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      </div>

      {/* Diff Output */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 px-4 py-2.5 border-b border-slate-200 text-xs font-mono">
          <span className="font-sans font-semibold text-slate-900">{s.lineComparison}</span>
          <div className="flex items-center gap-4 tabular-nums">
            <span className="text-emerald-700">+ {counts.added} {s.added}</span>
            <span className="text-red-700">- {counts.removed} {s.removed}</span>
            <span className="text-slate-600">{counts.unchanged} {s.unchanged}</span>
          </div>
        </div>

        {hasContent ? (
          <div className="divide-y divide-slate-100 font-mono text-xs sm:text-sm max-h-96 overflow-y-auto bg-white">
            {diffResult.map((line, index) => (
              <div
                key={`${index}-${line.type}`}
                className={`flex items-start gap-3 px-4 py-1.5 ${
                  line.type === 'added'
                    ? 'bg-emerald-50 text-emerald-950'
                    : line.type === 'removed'
                    ? 'bg-red-50 text-red-950'
                    : 'bg-white text-slate-700'
                }`}
              >
                <span className="w-8 shrink-0 text-right text-slate-400 tabular-nums select-none">
                  {line.oldLine ?? ''}
                </span>
                <span className="w-8 shrink-0 text-right text-slate-400 tabular-nums select-none">
                  {line.newLine ?? ''}
                </span>
                <span className="w-4 shrink-0 font-bold select-none">
                  {line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}
                </span>
                <span className="whitespace-pre-wrap break-all flex-1">{line.text || ' '}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-sm text-slate-500 bg-white">
            {s.emptyState}
          </div>
        )}
      </div>
    </div>
  );
}
