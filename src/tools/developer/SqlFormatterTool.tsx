import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    beautify: 'Beautify',
    minify: 'Minify',
    uppercaseKw: 'UPPERCASE keywords',
    lowercaseKw: 'lowercase',
    indentLabel: 'Indent:',
    indent2: '2 spaces',
    indent4: '4 spaces',
    inputLabel: 'Raw SQL Query',
    inputPlaceholder: 'Paste SQL query (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'Formatted SQL',
    outputPlaceholder: 'Formatted SQL appears here...',
    copySql: 'Copy SQL',
  },
  es: {
    beautify: 'Dar formato',
    minify: 'Minificar',
    uppercaseKw: 'Palabras clave en MAYÚSCULAS',
    lowercaseKw: 'minúsculas',
    indentLabel: 'Sangría:',
    indent2: '2 espacios',
    indent4: '4 espacios',
    inputLabel: 'Consulta SQL sin formato',
    inputPlaceholder: 'Pega una consulta SQL (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'SQL con formato',
    outputPlaceholder: 'El SQL con formato aparece aquí...',
    copySql: 'Copiar SQL',
  },
  pt: {
    beautify: 'Formatar',
    minify: 'Minificar',
    uppercaseKw: 'Palavras-chave em MAIÚSCULAS',
    lowercaseKw: 'minúsculas',
    indentLabel: 'Recuo:',
    indent2: '2 espaços',
    indent4: '4 espaços',
    inputLabel: 'Consulta SQL bruta',
    inputPlaceholder: 'Cole uma consulta SQL (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'SQL formatado',
    outputPlaceholder: 'O SQL formatado aparece aqui...',
    copySql: 'Copiar SQL',
  },
  fr: {
    beautify: 'Embellir',
    minify: 'Minifier',
    uppercaseKw: 'Mots-clés en MAJUSCULES',
    lowercaseKw: 'minuscules',
    indentLabel: 'Indentation :',
    indent2: '2 espaces',
    indent4: '4 espaces',
    inputLabel: 'Requête SQL brute',
    inputPlaceholder: 'Collez une requête SQL (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'SQL formaté',
    outputPlaceholder: 'Le SQL formaté apparaît ici...',
    copySql: 'Copier le SQL',
  },
  de: {
    beautify: 'Formatieren',
    minify: 'Minimieren',
    uppercaseKw: 'Schlüsselwörter in GROSSBUCHSTABEN',
    lowercaseKw: 'Kleinbuchstaben',
    indentLabel: 'Einrückung:',
    indent2: '2 Leerzeichen',
    indent4: '4 Leerzeichen',
    inputLabel: 'Rohe SQL-Abfrage',
    inputPlaceholder: 'SQL-Abfrage einfügen (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'Formatiertes SQL',
    outputPlaceholder: 'Formatiertes SQL erscheint hier...',
    copySql: 'SQL kopieren',
  },
  it: {
    beautify: 'Formatta',
    minify: 'Minimizza',
    uppercaseKw: 'Parole chiave MAIUSCOLE',
    lowercaseKw: 'minuscole',
    indentLabel: 'Rientro:',
    indent2: '2 spazi',
    indent4: '4 spazi',
    inputLabel: 'Query SQL grezza',
    inputPlaceholder: 'Incolla una query SQL (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'SQL formattato',
    outputPlaceholder: 'L\'SQL formattato apparirà qui...',
    copySql: 'Copia SQL',
  },
  id: {
    beautify: 'Percantik',
    minify: 'Minifikasi',
    uppercaseKw: 'Kata kunci HURUF BESAR',
    lowercaseKw: 'huruf kecil',
    indentLabel: 'Indentasi:',
    indent2: '2 spasi',
    indent4: '4 spasi',
    inputLabel: 'Kueri SQL Mentah',
    inputPlaceholder: 'Tempel kueri SQL (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'SQL yang Diformat',
    outputPlaceholder: 'SQL yang diformat muncul di sini...',
    copySql: 'Salin SQL',
  },
  ru: {
    beautify: 'Форматировать',
    minify: 'Минифицировать',
    uppercaseKw: 'Ключевые слова ЗАГЛАВНЫМИ',
    lowercaseKw: 'строчные',
    indentLabel: 'Отступ:',
    indent2: '2 пробела',
    indent4: '4 пробела',
    inputLabel: 'Исходный SQL-запрос',
    inputPlaceholder: 'Вставьте SQL-запрос (SELECT, INSERT, UPDATE, JOIN...)...',
    outputLabel: 'Отформатированный SQL',
    outputPlaceholder: 'Здесь появится отформатированный SQL...',
    copySql: 'Копировать SQL',
  },
};

const SAMPLE_SQL = `select u.id, u.email, count(o.id) as order_count, sum(o.total) as revenue from users u left join orders o on o.user_id = u.id where u.active = 1 and o.created_at >= '2026-01-01' group by u.id, u.email having count(o.id) > 2 order by revenue desc limit 25;`;

const CLAUSE_KEYWORDS = [
  'SELECT DISTINCT',
  'SELECT',
  'FROM',
  'LEFT OUTER JOIN',
  'RIGHT OUTER JOIN',
  'FULL OUTER JOIN',
  'INNER JOIN',
  'LEFT JOIN',
  'RIGHT JOIN',
  'CROSS JOIN',
  'JOIN',
  'ON',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'ORDER BY',
  'LIMIT',
  'OFFSET',
  'INSERT INTO',
  'VALUES',
  'UPDATE',
  'SET',
  'DELETE FROM',
  'UNION ALL',
  'UNION',
  'RETURNING',
];

const ALL_KEYWORDS = new Set([
  ...CLAUSE_KEYWORDS.flatMap((c) => c.split(' ')),
  'AS',
  'AND',
  'OR',
  'NOT',
  'IN',
  'IS',
  'NULL',
  'ASC',
  'DESC',
  'CASE',
  'WHEN',
  'THEN',
  'ELSE',
  'END',
  'COUNT',
  'SUM',
  'AVG',
  'MIN',
  'MAX',
  'CREATE',
  'TABLE',
  'ALTER',
  'DROP',
  'IF',
  'EXISTS',
  'PRIMARY',
  'KEY',
  'DEFAULT',
  'BETWEEN',
  'LIKE',
]);

function tokenizeSql(sql: string): Array<{ type: 'str' | 'comment' | 'word' | 'punct' | 'ws'; value: string }> {
  const tokens: Array<{ type: 'str' | 'comment' | 'word' | 'punct' | 'ws'; value: string }> = [];
  let i = 0;

  while (i < sql.length) {
    const ch = sql[i];
    const next = sql[i + 1];

    if (/\s/.test(ch)) {
      let end = i + 1;
      while (end < sql.length && /\s/.test(sql[end])) end += 1;
      tokens.push({ type: 'ws', value: sql.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === '-' && next === '-') {
      let end = i + 2;
      while (end < sql.length && sql[end] !== '\n') end += 1;
      tokens.push({ type: 'comment', value: sql.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === '/' && next === '*') {
      let end = i + 2;
      while (end < sql.length && !(sql[end] === '*' && sql[end + 1] === '/')) end += 1;
      end = Math.min(sql.length, end + 2);
      tokens.push({ type: 'comment', value: sql.slice(i, end) });
      i = end;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      let end = i + 1;
      while (end < sql.length) {
        if (sql[end] === quote && sql[end + 1] === quote) {
          end += 2;
          continue;
        }
        if (sql[end] === quote) {
          end += 1;
          break;
        }
        end += 1;
      }
      tokens.push({ type: 'str', value: sql.slice(i, end) });
      i = end;
      continue;
    }

    if (/[a-zA-Z0-9_$.]/.test(ch)) {
      let end = i + 1;
      while (end < sql.length && /[a-zA-Z0-9_$.]/.test(sql[end])) end += 1;
      tokens.push({ type: 'word', value: sql.slice(i, end) });
      i = end;
      continue;
    }

    tokens.push({ type: 'punct', value: ch });
    i += 1;
  }

  return tokens;
}

function formatSql(
  sql: string,
  mode: 'beautify' | 'minify',
  keywordCase: 'upper' | 'lower',
  indentSize: number
): string {
  if (!sql.trim()) return '';
  const tokens = tokenizeSql(sql);
  const nonWs = tokens.filter((t) => t.type !== 'ws' && (mode !== 'minify' || t.type !== 'comment'));

  const transformWord = (w: string) => {
    const upper = w.toUpperCase();
    if (!ALL_KEYWORDS.has(upper)) return w;
    return keywordCase === 'upper' ? upper : w.toLowerCase();
  };

  if (mode === 'minify') {
    const parts: string[] = [];
    for (let i = 0; i < nonWs.length; i += 1) {
      const tok = nonWs[i];
      const val = tok.type === 'word' ? transformWord(tok.value) : tok.value;
      const prev = parts[parts.length - 1];
      if (
        prev &&
        !/[.(]$/.test(prev) &&
        !/^[),;.]$/.test(val) &&
        !(val === '(' && prev.toUpperCase() === 'COUNT')
      ) {
        parts.push(' ');
      }
      parts.push(val);
    }
    return parts.join('').trim();
  }

  const indentStr = ' '.repeat(indentSize);
  const lines: string[] = [];
  let currentLine = '';
  let parenDepth = 0;

  const pushLine = () => {
    if (currentLine.trim()) {
      lines.push(currentLine.trimEnd());
    }
    currentLine = '';
  };

  for (let i = 0; i < nonWs.length; i += 1) {
    const tok = nonWs[i];
    if (tok.type === 'comment') {
      pushLine();
      lines.push(tok.value);
      continue;
    }

    if (tok.type === 'word') {
      const next1 = nonWs[i + 1]?.type === 'word' ? nonWs[i + 1].value.toUpperCase() : '';
      const next2 = nonWs[i + 2]?.type === 'word' ? nonWs[i + 2].value.toUpperCase() : '';
      const three = `${tok.value.toUpperCase()} ${next1} ${next2}`;
      const two = `${tok.value.toUpperCase()} ${next1}`;
      const one = tok.value.toUpperCase();

      let matchedClause = '';
      let consume = 0;
      if (CLAUSE_KEYWORDS.includes(three)) {
        matchedClause = three;
        consume = 2;
      } else if (CLAUSE_KEYWORDS.includes(two)) {
        matchedClause = two;
        consume = 1;
      } else if (CLAUSE_KEYWORDS.includes(one)) {
        matchedClause = one;
        consume = 0;
      }

      if (matchedClause && parenDepth === 0) {
        pushLine();
        const formattedClause =
          keywordCase === 'upper' ? matchedClause : matchedClause.toLowerCase();
        currentLine = formattedClause;
        i += consume;
        continue;
      }

      if ((one === 'AND' || one === 'OR') && parenDepth === 0) {
        pushLine();
        currentLine = `${indentStr}${transformWord(tok.value)}`;
        continue;
      }

      const wordVal = transformWord(tok.value);
      if (currentLine && !currentLine.endsWith('(')) {
        currentLine += ' ';
      }
      currentLine += wordVal;
      continue;
    }

    if (tok.value === '(') {
      parenDepth += 1;
      if (currentLine && !/[A-Za-z0-9_]$/.test(currentLine)) {
        currentLine += ' ';
      }
      currentLine += '(';
      continue;
    }

    if (tok.value === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      currentLine += ')';
      continue;
    }

    if (tok.value === ',' && parenDepth === 0) {
      currentLine += ',';
      pushLine();
      currentLine = indentStr;
      continue;
    }

    if (tok.value === ';') {
      currentLine += ';';
      pushLine();
      lines.push('');
      continue;
    }

    if (currentLine && !currentLine.endsWith('(') && !currentLine.endsWith(' ')) {
      currentLine += ' ';
    }
    currentLine += tok.value;
  }

  pushLine();
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

export default function SqlFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'beautify' | 'minify'>('beautify');
  const [keywordCase, setKeywordCase] = useState<'upper' | 'lower'>('upper');
  const [indentSize, setIndentSize] = useState<2 | 4>(2);

  const output = useMemo(
    () => formatSql(input, mode, keywordCase, indentSize),
    [input, mode, keywordCase, indentSize]
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('beautify')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'beautify' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.beautify}
            </button>
            <button
              type="button"
              onClick={() => setMode('minify')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'minify' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.minify}
            </button>
          </div>

          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setKeywordCase('upper')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                keywordCase === 'upper' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.uppercaseKw}
            </button>
            <button
              type="button"
              onClick={() => setKeywordCase('lower')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                keywordCase === 'lower' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.lowercaseKw}
            </button>
          </div>

          {mode === 'beautify' && (
            <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700">
              <span>{s.indentLabel}</span>
              <select
                value={indentSize}
                onChange={(e) => setIndentSize(Number(e.target.value) as 2 | 4)}
                className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs sm:text-sm"
              >
                <option value={2}>{s.indent2}</option>
                <option value={4}>{s.indent4}</option>
              </select>
            </label>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(SAMPLE_SQL)}
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
          <label htmlFor="sql-in" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.inputLabel}
          </label>
          <textarea
            id="sql-in"
            rows={11}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="sql-out" className="text-sm font-semibold text-slate-900">
              {s.outputLabel}
            </label>
            <CopyButton text={output} label={s.copySql} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="sql-out"
            rows={11}
            readOnly
            value={output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
