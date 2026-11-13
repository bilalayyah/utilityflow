import { RotateCcw, Sparkles } from 'lucide-react';
import { Fragment, useMemo, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    patternLabel: 'Regular Expression Pattern',
    patternPlaceholder: 'Enter regex pattern...',
    flagsLabel: 'Flags:',
    syntaxError: 'Syntax error:',
    testStringLabel: 'Test String',
    testPlaceholder: 'Paste sample text to test against your pattern...',
    highlightedMatches: 'Highlighted Matches',
    matchSingular: 'match',
    matchPlural: 'matches',
    highlightEmpty: 'Matches highlight here in real time...',
    capturedTitle: 'Captured Matches',
    matchLabel: 'Match',
    indexLabel: 'index',
    groupsLabel: 'Groups:',
    noMatches: 'No matches found.',
    replaceLabel: 'Replacement Template Preview',
    replacePlaceholder: 'e.g. $1 [at] $2',
    invalidRegex: 'Invalid regular expression.',
  },
  es: {
    patternLabel: 'Patrón de expresión regular',
    patternPlaceholder: 'Escribe el patrón regex...',
    flagsLabel: 'Modificadores:',
    syntaxError: 'Error de sintaxis:',
    testStringLabel: 'Cadena de prueba',
    testPlaceholder: 'Pega un texto de ejemplo para probar tu patrón...',
    highlightedMatches: 'Coincidencias resaltadas',
    matchSingular: 'coincidencia',
    matchPlural: 'coincidencias',
    highlightEmpty: 'Las coincidencias se resaltan aquí en tiempo real...',
    capturedTitle: 'Coincidencias capturadas',
    matchLabel: 'Coincidencia',
    indexLabel: 'índice',
    groupsLabel: 'Grupos:',
    noMatches: 'No se encontraron coincidencias.',
    replaceLabel: 'Vista previa de la plantilla de reemplazo',
    replacePlaceholder: 'p. ej., $1 [at] $2',
    invalidRegex: 'Expresión regular no válida.',
  },
  pt: {
    patternLabel: 'Padrão de expressão regular',
    patternPlaceholder: 'Digite o padrão regex...',
    flagsLabel: 'Flags:',
    syntaxError: 'Erro de sintaxe:',
    testStringLabel: 'String de teste',
    testPlaceholder: 'Cole um texto de exemplo para testar seu padrão...',
    highlightedMatches: 'Correspondências destacadas',
    matchSingular: 'correspondência',
    matchPlural: 'correspondências',
    highlightEmpty: 'As correspondências são destacadas aqui em tempo real...',
    capturedTitle: 'Correspondências capturadas',
    matchLabel: 'Correspondência',
    indexLabel: 'índice',
    groupsLabel: 'Grupos:',
    noMatches: 'Nenhuma correspondência encontrada.',
    replaceLabel: 'Prévia do modelo de substituição',
    replacePlaceholder: 'ex.: $1 [at] $2',
    invalidRegex: 'Expressão regular inválida.',
  },
  fr: {
    patternLabel: 'Motif d\'expression régulière',
    patternPlaceholder: 'Saisissez le motif regex...',
    flagsLabel: 'Drapeaux :',
    syntaxError: 'Erreur de syntaxe :',
    testStringLabel: 'Chaîne de test',
    testPlaceholder: 'Collez un exemple de texte pour tester votre motif...',
    highlightedMatches: 'Correspondances surlignées',
    matchSingular: 'correspondance',
    matchPlural: 'correspondances',
    highlightEmpty: 'Les correspondances sont surlignées ici en temps réel...',
    capturedTitle: 'Correspondances capturées',
    matchLabel: 'Correspondance',
    indexLabel: 'indice',
    groupsLabel: 'Groupes :',
    noMatches: 'Aucune correspondance trouvée.',
    replaceLabel: 'Aperçu du modèle de remplacement',
    replacePlaceholder: 'p. ex. $1 [at] $2',
    invalidRegex: 'Expression régulière invalide.',
  },
  de: {
    patternLabel: 'Muster für regulären Ausdruck',
    patternPlaceholder: 'Regex-Muster eingeben...',
    flagsLabel: 'Flags:',
    syntaxError: 'Syntaxfehler:',
    testStringLabel: 'Testzeichenkette',
    testPlaceholder: 'Beispieltext zum Testen des Musters hier einfügen...',
    highlightedMatches: 'Hervorgehobene Treffer',
    matchSingular: 'Treffer',
    matchPlural: 'Treffer',
    highlightEmpty: 'Treffer werden hier in Echtzeit hervorgehoben...',
    capturedTitle: 'Erfasste Treffer',
    matchLabel: 'Treffer',
    indexLabel: 'Index',
    groupsLabel: 'Gruppen:',
    noMatches: 'Keine Treffer gefunden.',
    replaceLabel: 'Vorschau der Ersetzungsvorlage',
    replacePlaceholder: 'z. B. $1 [at] $2',
    invalidRegex: 'Ungültiger regulärer Ausdruck.',
  },
  it: {
    patternLabel: 'Pattern di espressione regolare',
    patternPlaceholder: 'Inserisci il pattern regex...',
    flagsLabel: 'Flag:',
    syntaxError: 'Errore di sintassi:',
    testStringLabel: 'Stringa di test',
    testPlaceholder: 'Incolla il testo di esempio da testare con il pattern...',
    highlightedMatches: 'Corrispondenze evidenziate',
    matchSingular: 'corrispondenza',
    matchPlural: 'corrispondenze',
    highlightEmpty: 'Le corrispondenze verranno evidenziate qui in tempo reale...',
    capturedTitle: 'Corrispondenze acquisite',
    matchLabel: 'Corrispondenza',
    indexLabel: 'indice',
    groupsLabel: 'Gruppi:',
    noMatches: 'Nessuna corrispondenza trovata.',
    replaceLabel: 'Anteprima del modello di sostituzione',
    replacePlaceholder: 'es. $1 [at] $2',
    invalidRegex: 'Espressione regolare non valida.',
  },
  id: {
    patternLabel: 'Pola Ekspresi Reguler',
    patternPlaceholder: 'Masukkan pola regex...',
    flagsLabel: 'Flag:',
    syntaxError: 'Kesalahan sintaks:',
    testStringLabel: 'String Uji',
    testPlaceholder: 'Tempel teks contoh untuk diuji dengan pola Anda...',
    highlightedMatches: 'Kecocokan yang Disorot',
    matchSingular: 'cocok',
    matchPlural: 'cocok',
    highlightEmpty: 'Kecocokan disorot di sini secara real time...',
    capturedTitle: 'Kecocokan yang Ditangkap',
    matchLabel: 'Cocok',
    indexLabel: 'indeks',
    groupsLabel: 'Grup:',
    noMatches: 'Tidak ditemukan kecocokan.',
    replaceLabel: 'Pratinjau Template Pengganti',
    replacePlaceholder: 'cth. $1 [at] $2',
    invalidRegex: 'Ekspresi reguler tidak valid.',
  },
  ru: {
    patternLabel: 'Шаблон регулярного выражения',
    patternPlaceholder: 'Введите шаблон регулярного выражения...',
    flagsLabel: 'Флаги:',
    syntaxError: 'Ошибка синтаксиса:',
    testStringLabel: 'Тестовая строка',
    testPlaceholder: 'Вставьте пример текста для проверки по вашему шаблону...',
    highlightedMatches: 'Подсвеченные совпадения',
    matchSingular: 'совпадение',
    matchPlural: 'совпадений',
    highlightEmpty: 'Совпадения будут подсвечиваться здесь в реальном времени...',
    capturedTitle: 'Захваченные совпадения',
    matchLabel: 'Совпадение',
    indexLabel: 'индекс',
    groupsLabel: 'Группы:',
    noMatches: 'Совпадений не найдено.',
    replaceLabel: 'Предпросмотр шаблона замены',
    replacePlaceholder: 'напр. $1 [at] $2',
    invalidRegex: 'Недопустимое регулярное выражение.',
  },
};

interface RegexMatchItem {
  fullMatch: string;
  index: number;
  groups: string[];
}

const SAMPLE_PATTERN = '([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,})';
const SAMPLE_TEXT = {
  en: `Primary contact: support@utilityflow.online
Billing team: billing@example.org
Invalid email: not-an-email@`,
  es: `Contacto principal: support@utilityflow.online
Equipo de facturación: billing@example.org
Correo no válido: not-an-email@`,
  pt: `Contato principal: support@utilityflow.online
Equipe de faturamento: billing@example.org
E-mail inválido: not-an-email@`,
  fr: `Contact principal : support@utilityflow.online
Équipe de facturation : billing@example.org
E-mail invalide : not-an-email@`,
  de: `Hauptkontakt: support@utilityflow.online
Abrechnungsteam: billing@example.org
Ungültige E-Mail: not-an-email@`,
  it: `Contatto principale: support@utilityflow.online
Team di fatturazione: billing@example.org
Email non valida: not-an-email@`,
  id: `Kontak utama: support@utilityflow.online
Tim penagihan: billing@example.org
Email tidak valid: not-an-email@`,
  ru: `Основной контакт: support@utilityflow.online
Команда биллинга: billing@example.org
Неверный email: not-an-email@`,
} as const;

const FLAG_DEFS = {
  en: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (ignore case)' },
    { flag: 'm', label: 'm (multiline)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  es: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (ignorar mayúsculas)' },
    { flag: 'm', label: 'm (multilínea)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  pt: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (ignorar maiúsculas/minúsculas)' },
    { flag: 'm', label: 'm (multilinha)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  fr: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (ignorer la casse)' },
    { flag: 'm', label: 'm (multiligne)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  de: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (Groß-/Kleinschreibung ignorieren)' },
    { flag: 'm', label: 'm (mehrzeilig)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  it: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (ignora maiuscole/minuscole)' },
    { flag: 'm', label: 'm (multilinea)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  id: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (abaikan huruf besar-kecil)' },
    { flag: 'm', label: 'm (multibaris)' },
    { flag: 's', label: 's (dotAll)' },
  ],
  ru: [
    { flag: 'g', label: 'g (global)' },
    { flag: 'i', label: 'i (без учёта регистра)' },
    { flag: 'm', label: 'm (многострочный)' },
    { flag: 's', label: 's (dotAll)' },
  ],
} as const;

export default function RegexTesterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [pattern, setPattern] = useState(SAMPLE_PATTERN);
  const [flags, setFlags] = useState<string[]>(['g', 'i']);
  const [testText, setTestText] = useState<string>(SAMPLE_TEXT[locale]);
  const [replaceTemplate, setReplaceTemplate] = useState('$1 [at] $2');

  const toggleFlag = (f: string) => {
    setFlags((prev) => (prev.includes(f) ? prev.filter((item) => item !== f) : [...prev, f]));
  };

  const evaluation = useMemo(() => {
    if (!pattern) {
      return {
        error: '',
        matches: [] as RegexMatchItem[],
        segments: [{ text: testText, highlighted: false }],
        replaced: testText,
      };
    }

    try {
      const flagString = flags.join('');
      const regex = new RegExp(pattern, flagString);
      const matches: RegexMatchItem[] = [];

      if (flags.includes('g')) {
        let match: RegExpExecArray | null;
        let guard = 0;
        while ((match = regex.exec(testText)) !== null && guard < 1000) {
          matches.push({
            fullMatch: match[0],
            index: match.index,
            groups: match.slice(1),
          });
          if (match[0].length === 0) {
            regex.lastIndex += 1;
          }
          guard += 1;
        }
      } else {
        const match = regex.exec(testText);
        if (match) {
          matches.push({
            fullMatch: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      const segments: Array<{ text: string; highlighted: boolean }> = [];
      let cursor = 0;
      for (const m of matches) {
        if (m.index > cursor) {
          segments.push({ text: testText.slice(cursor, m.index), highlighted: false });
        }
        if (m.fullMatch.length > 0) {
          segments.push({ text: m.fullMatch, highlighted: true });
        }
        cursor = m.index + m.fullMatch.length;
      }
      if (cursor < testText.length) {
        segments.push({ text: testText.slice(cursor), highlighted: false });
      }

      const replaced = testText.replace(new RegExp(pattern, flagString), replaceTemplate);

      return { error: '', matches, segments, replaced };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : s.invalidRegex,
        matches: [] as RegexMatchItem[],
        segments: [{ text: testText, highlighted: false }],
        replaced: testText,
      };
    }
  }, [pattern, flags, testText, replaceTemplate, s.invalidRegex]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex-1 min-w-[260px]">
          <label htmlFor="regex-pattern" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.patternLabel}
          </label>
          <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/20">
            <span className="font-mono text-slate-400 select-none">/</span>
            <input
              id="regex-pattern"
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder={s.patternPlaceholder}
              className="w-full px-1.5 font-mono text-sm text-slate-900 focus:outline-none"
            />
            <span className="font-mono text-slate-400 select-none">/{flags.join('')}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setPattern(SAMPLE_PATTERN);
              setFlags(['g', 'i']);
              setTestText(SAMPLE_TEXT[locale]);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPattern('');
              setTestText('');
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700">
        <span className="font-semibold text-slate-900">{s.flagsLabel}</span>
        {FLAG_DEFS[locale].map((item) => (
          <label key={item.flag} className="inline-flex items-center gap-1.5 cursor-pointer font-mono">
            <input
              type="checkbox"
              checked={flags.includes(item.flag)}
              onChange={() => toggleFlag(item.flag)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      {evaluation.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800 font-mono">
          {s.syntaxError} {evaluation.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="regex-text" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.testStringLabel}
          </label>
          <textarea
            id="regex-text"
            rows={8}
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            placeholder={s.testPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-semibold text-slate-900">{s.highlightedMatches}</span>
            <span className="text-xs font-mono text-indigo-700 tabular-nums font-semibold">
              {evaluation.matches.length}{' '}
              {evaluation.matches.length === 1 ? s.matchSingular : s.matchPlural}
            </span>
          </div>
          <div className="h-[196px] overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words text-slate-800">
            {testText ? (
              evaluation.segments.map((seg, i) => (
                <Fragment key={i}>
                  {seg.highlighted ? (
                    <mark className="rounded bg-indigo-100 px-0.5 text-indigo-950 font-semibold ring-1 ring-indigo-300">
                      {seg.text}
                    </mark>
                  ) : (
                    seg.text
                  )}
                </Fragment>
              ))
            ) : (
              <span className="text-slate-400">{s.highlightEmpty}</span>
            )}
          </div>
        </div>
      </div>

      {/* Match Details & Replacement Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">{s.capturedTitle}</h3>
          {evaluation.matches.length > 0 ? (
            <div className="max-h-48 overflow-y-auto divide-y divide-slate-100 font-mono text-xs">
              {evaluation.matches.map((m, idx) => (
                <div key={`${m.index}-${idx}`} className="py-2 space-y-1">
                  <div className="flex justify-between text-slate-500">
                    <span>{s.matchLabel} #{idx + 1}</span>
                    <span className="tabular-nums">{s.indexLabel} {m.index}</span>
                  </div>
                  <div className="text-slate-900 font-semibold break-all">{m.fullMatch}</div>
                  {m.groups.length > 0 && (
                    <div className="text-slate-600">
                      {s.groupsLabel}{' '}
                      {m.groups.map((g, gi) => `$${gi + 1}="${g ?? ''}"`).join(' · ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-slate-500">{s.noMatches}</p>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
          <label htmlFor="regex-replace" className="block text-sm font-semibold text-slate-900">
            {s.replaceLabel}
          </label>
          <input
            id="regex-replace"
            type="text"
            value={replaceTemplate}
            onChange={(e) => setReplaceTemplate(e.target.value)}
            placeholder={s.replacePlaceholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
          <pre className="max-h-32 overflow-y-auto rounded-lg bg-slate-50 border border-slate-200 p-3 font-mono text-xs text-slate-800 whitespace-pre-wrap break-words">
            {evaluation.replaced}
          </pre>
        </div>
      </div>
    </div>
  );
}
