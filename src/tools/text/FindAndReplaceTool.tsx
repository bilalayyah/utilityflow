import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    find: 'Find',
    replaceWith: 'Replace with',
    findPlaceholder: 'Text to search for...',
    replacePlaceholder: 'Replacement text...',
    caseSensitive: 'Case-sensitive',
    wholeWordOnly: 'Whole word only',
    useRegex: 'Use Regular Expression (RegExp)',
    regexError: 'Regex error:',
    invalidRegex: 'Invalid regular expression.',
    sourceText: 'Source Text',
    updatedOutput: 'Updated Output',
    match: 'match',
    matches: 'matches',
    replaced: 'replaced',
    sourcePlaceholder: 'Paste text to search and replace...',
    outputPlaceholder: 'Replaced text preview appears here...',
    copyResult: 'Copy result',
  },
  es: {
    find: 'Buscar',
    replaceWith: 'Reemplazar con',
    findPlaceholder: 'Texto para buscar...',
    replacePlaceholder: 'Texto de reemplazo...',
    caseSensitive: 'Distinguir mayúsculas y minúsculas',
    wholeWordOnly: 'Solo palabras completas',
    useRegex: 'Usar expresión regular (RegExp)',
    regexError: 'Error de regex:',
    invalidRegex: 'Expresión regular no válida.',
    sourceText: 'Texto original',
    updatedOutput: 'Resultado actualizado',
    match: 'coincidencia',
    matches: 'coincidencias',
    replaced: 'reemplazadas',
    sourcePlaceholder: 'Pega el texto para buscar y reemplazar...',
    outputPlaceholder: 'La vista previa del texto reemplazado aparece aquí...',
    copyResult: 'Copiar resultado',
  },
  pt: {
    find: 'Buscar',
    replaceWith: 'Substituir por',
    findPlaceholder: 'Texto a ser buscado...',
    replacePlaceholder: 'Texto de substituição...',
    caseSensitive: 'Diferenciar maiúsculas de minúsculas',
    wholeWordOnly: 'Somente palavras inteiras',
    useRegex: 'Usar expressão regular (RegExp)',
    regexError: 'Erro de regex:',
    invalidRegex: 'Expressão regular inválida.',
    sourceText: 'Texto original',
    updatedOutput: 'Saída atualizada',
    match: 'correspondência',
    matches: 'correspondências',
    replaced: 'substituídas',
    sourcePlaceholder: 'Cole o texto para buscar e substituir...',
    outputPlaceholder: 'A prévia do texto substituído aparece aqui...',
    copyResult: 'Copiar resultado',
  },
  fr: {
    find: 'Rechercher',
    replaceWith: 'Remplacer par',
    findPlaceholder: 'Texte à rechercher...',
    replacePlaceholder: 'Texte de remplacement...',
    caseSensitive: 'Respecter la casse',
    wholeWordOnly: 'Mots entiers uniquement',
    useRegex: 'Utiliser une expression régulière (RegExp)',
    regexError: 'Erreur regex :',
    invalidRegex: 'Expression régulière invalide.',
    sourceText: 'Texte source',
    updatedOutput: 'Sortie mise à jour',
    match: 'correspondance',
    matches: 'correspondances',
    replaced: 'remplacées',
    sourcePlaceholder: 'Collez le texte à rechercher et remplacer...',
    outputPlaceholder: 'L\'aperçu du texte remplacé apparaît ici...',
    copyResult: 'Copier le résultat',
  },
  de: {
    find: 'Suchen',
    replaceWith: 'Ersetzen durch',
    findPlaceholder: 'Zu suchender Text...',
    replacePlaceholder: 'Ersatztext...',
    caseSensitive: 'Groß-/Kleinschreibung beachten',
    wholeWordOnly: 'Nur ganze Wörter',
    useRegex: 'Regulären Ausdruck (RegExp) verwenden',
    regexError: 'Regex-Fehler:',
    invalidRegex: 'Ungültiger regulärer Ausdruck.',
    sourceText: 'Quelltext',
    updatedOutput: 'Aktualisierte Ausgabe',
    match: 'Treffer',
    matches: 'Treffer',
    replaced: 'ersetzt',
    sourcePlaceholder: 'Text zum Suchen und Ersetzen einfügen...',
    outputPlaceholder: 'Vorschau des ersetzten Texts erscheint hier...',
    copyResult: 'Ergebnis kopieren',
  },
  it: {
    find: 'Trova',
    replaceWith: 'Sostituisci con',
    findPlaceholder: 'Testo da cercare...',
    replacePlaceholder: 'Testo sostitutivo...',
    caseSensitive: 'Distingui maiuscole/minuscole',
    wholeWordOnly: 'Solo parole intere',
    useRegex: 'Usa espressione regolare (RegExp)',
    regexError: 'Errore regex:',
    invalidRegex: 'Espressione regolare non valida.',
    sourceText: 'Testo di origine',
    updatedOutput: 'Output aggiornato',
    match: 'corrispondenza',
    matches: 'corrispondenze',
    replaced: 'sostituite',
    sourcePlaceholder: 'Incolla il testo da cercare e sostituire...',
    outputPlaceholder: 'L\'anteprima del testo sostituito apparirà qui...',
    copyResult: 'Copia il risultato',
  },
};

const SAMPLE_TEXT = `Order #1042 shipped via Express Courier.
Order #1043 shipped via Standard Ground.
Contact support@old-domain.com for Order #1044 updates.`;

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function FindAndReplaceTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');
  const [findQuery, setFindQuery] = useState('');
  const [replaceWith, setReplaceWith] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [useRegex, setUseRegex] = useState(false);

  const computed = useMemo(() => {
    if (!findQuery) {
      return { output: text, matchCount: 0, error: '' };
    }

    try {
      const patternBody = useRegex
        ? findQuery
        : wholeWord
        ? `\\b${escapeRegExp(findQuery)}\\b`
        : escapeRegExp(findQuery);

      const flags = caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(patternBody, flags);

      let matchCount = 0;
      const matches = text.match(regex);
      if (matches) {
        matchCount = matches.length;
      }

      const output = text.replace(regex, replaceWith);
      return { output, matchCount, error: '' };
    } catch (err) {
      return {
        output: text,
        matchCount: 0,
        error: err instanceof Error ? err.message : s.invalidRegex,
      };
    }
  }, [text, findQuery, replaceWith, caseSensitive, wholeWord, useRegex, s.invalidRegex]);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="find-query" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.find}
          </label>
          <input
            id="find-query"
            type="text"
            value={findQuery}
            onChange={(e) => setFindQuery(e.target.value)}
            placeholder={useRegex ? 'e.g. Order #(\\d+)' : s.findPlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <label htmlFor="replace-query" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.replaceWith}
          </label>
          <input
            id="replace-query"
            type="text"
            value={replaceWith}
            onChange={(e) => setReplaceWith(e.target.value)}
            placeholder={useRegex ? 'e.g. Ref-$1' : s.replacePlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.caseSensitive}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={wholeWord}
              disabled={useRegex}
              onChange={(e) => setWholeWord(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 disabled:opacity-50"
            />
            <span className={useRegex ? 'text-slate-400' : ''}>{s.wholeWordOnly}</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={useRegex}
              onChange={(e) => setUseRegex(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{s.useRegex}</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setText(SAMPLE_TEXT);
              setFindQuery('old-domain.com');
              setReplaceWith('utilityflow.online');
              setUseRegex(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setText('');
              setFindQuery('');
              setReplaceWith('');
            }}
            disabled={!text && !findQuery && !replaceWith}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      {computed.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs sm:text-sm text-red-700">
          {s.regexError} {computed.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fr-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.sourceText}
          </label>
          <textarea
            id="fr-input"
            rows={9}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={s.sourcePlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="fr-output" className="text-sm font-semibold text-slate-900">
              {s.updatedOutput}
            </label>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                {computed.matchCount} {computed.matchCount === 1 ? s.match : s.matches} {s.replaced}
              </span>
              <CopyButton text={computed.output} label={s.copyResult} copiedLabel={t.common.copied} />
            </div>
          </div>
          <textarea
            id="fr-output"
            rows={9}
            readOnly
            value={computed.output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
