import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    caseLabel: 'Formatting & Accessibility Case',
    optCamel: 'PascalCase (#CamelCase — Screen-reader friendly)',
    optLower: 'all lowercase (#lowercase)',
    optPreserve: 'Preserve Original Case',
    outLabel: 'Output Layout',
    optInline: 'Single Line (space separated)',
    optNewline: 'One Hashtag Per Line',
    optDots: 'Caption Fold Separator (.\\n.\\n.)',
    dedupe: 'Remove duplicate hashtags',
    labelRaw: 'Keywords or Messy Hashtags (comma, space, or line separated)',
    labelResult: 'Clean Hashtag Group',
    copyHashtags: 'Copy Hashtags',
    statClean: 'Clean Hashtags',
    statDupes: 'Duplicates Removed',
    statIgMax: 'Instagram Max (30)',
    statWithin: 'Within IG 30 cap',
    statExceeds: 'Exceeds 30-tag limit',
    statChars: 'Output Characters',
  },
  es: {
    caseLabel: 'Mayúsculas y minúsculas de formato y accesibilidad',
    optCamel: 'PascalCase (#CamelCase: compatible con lectores de pantalla)',
    optLower: 'todo en minúsculas (#minusculas)',
    optPreserve: 'Conservar mayúsculas originales',
    outLabel: 'Diseño de salida',
    optInline: 'Una sola línea (separadas por espacios)',
    optNewline: 'Un hashtag por línea',
    optDots: 'Separador de pliegue de descripción (.\\n.\\n.)',
    dedupe: 'Eliminar hashtags duplicados',
    labelRaw: 'Palabras clave o hashtags desordenados (separados por coma, espacio o línea)',
    labelResult: 'Grupo de hashtags limpio',
    copyHashtags: 'Copiar hashtags',
    statClean: 'Hashtags limpios',
    statDupes: 'Duplicados eliminados',
    statIgMax: 'Máximo de Instagram (30)',
    statWithin: 'Dentro del límite de 30 de IG',
    statExceeds: 'Supera el límite de 30 etiquetas',
    statChars: 'Caracteres de salida',
  },
  pt: {
    caseLabel: 'Formatação e caixa para acessibilidade',
    optCamel: 'PascalCase (#CamelCase — compatível com leitores de tela)',
    optLower: 'tudo em minúsculas (#minusculas)',
    optPreserve: 'Preservar caixa original',
    outLabel: 'Layout de saída',
    optInline: 'Uma linha (separadas por espaço)',
    optNewline: 'Uma hashtag por linha',
    optDots: 'Separador de dobra de legenda (.\\n.\\n.)',
    dedupe: 'Remover hashtags duplicadas',
    labelRaw: 'Palavras-chave ou hashtags bagunçadas (separadas por vírgula, espaço ou linha)',
    labelResult: 'Grupo de hashtags limpo',
    copyHashtags: 'Copiar hashtags',
    statClean: 'Hashtags limpas',
    statDupes: 'Duplicatas removidas',
    statIgMax: 'Máximo do Instagram (30)',
    statWithin: 'Dentro do limite de 30 do IG',
    statExceeds: 'Excede o limite de 30 tags',
    statChars: 'Caracteres de saída',
  },
  fr: {
    caseLabel: 'Casse de formatage et d’accessibilité',
    optCamel: 'PascalCase (#CamelCase — compatible avec les lecteurs d’écran)',
    optLower: 'tout en minuscules (#minuscules)',
    optPreserve: 'Conserver la casse d’origine',
    outLabel: 'Mise en page de sortie',
    optInline: 'Une seule ligne (séparées par des espaces)',
    optNewline: 'Un hashtag par ligne',
    optDots: 'Séparateur de repli de légende (.\\n.\\n.)',
    dedupe: 'Supprimer les hashtags en double',
    labelRaw: 'Mots-clés ou hashtags en désordre (séparés par virgule, espace ou ligne)',
    labelResult: 'Groupe de hashtags propre',
    copyHashtags: 'Copier les hashtags',
    statClean: 'Hashtags propres',
    statDupes: 'Doublons supprimés',
    statIgMax: 'Maximum Instagram (30)',
    statWithin: 'Dans la limite de 30 d’IG',
    statExceeds: 'Dépasse la limite de 30 tags',
    statChars: 'Caractères de sortie',
  },
  de: {
    caseLabel: 'Formatierung & Groß-/Kleinschreibung für Barrierefreiheit',
    optCamel: 'PascalCase (#CamelCase — screenreaderfreundlich)',
    optLower: 'alles klein (#kleinbuchstaben)',
    optPreserve: 'Originale Groß-/Kleinschreibung beibehalten',
    outLabel: 'Ausgabe-Layout',
    optInline: 'Eine Zeile (durch Leerzeichen getrennt)',
    optNewline: 'Ein Hashtag pro Zeile',
    optDots: 'Caption-Trennzeichen (.\n.\n.)',
    dedupe: 'Doppelte Hashtags entfernen',
    labelRaw: 'Keywords oder unordentliche Hashtags (durch Komma, Leerzeichen oder Zeile getrennt)',
    labelResult: 'Saubere Hashtag-Gruppe',
    copyHashtags: 'Hashtags kopieren',
    statClean: 'Saubere Hashtags',
    statDupes: 'Duplikate entfernt',
    statIgMax: 'Instagram-Maximum (30)',
    statWithin: 'Innerhalb des IG-Limits von 30',
    statExceeds: 'Übersteigt das Limit von 30 Tags',
    statChars: 'Zeichen der Ausgabe',
  },
  it: {
    caseLabel: 'Formattazione e maiuscole per accessibilità',
    optCamel: 'PascalCase (#CamelCase — compatibile con screen reader)',
    optLower: 'tutto minuscolo (#minuscolo)',
    optPreserve: 'Mantieni maiuscole originali',
    outLabel: 'Layout output',
    optInline: 'Riga singola (separati da spazi)',
    optNewline: 'Un hashtag per riga',
    optDots: 'Separatore di piega didascalia (.\n.\n.)',
    dedupe: 'Rimuovi hashtag duplicati',
    labelRaw: 'Parole chiave o hashtag disordinati (separati da virgola, spazio o riga)',
    labelResult: 'Gruppo di hashtag pulito',
    copyHashtags: 'Copia hashtag',
    statClean: 'Hashtag puliti',
    statDupes: 'Duplicati rimossi',
    statIgMax: 'Massimo Instagram (30)',
    statWithin: 'Entro il limite IG di 30',
    statExceeds: 'Supera il limite di 30 tag',
    statChars: 'Caratteri output',
  },
  id: {
    caseLabel: 'Huruf Pemformatan & Aksesibilitas',
    optCamel: 'PascalCase (#CamelCase — Ramah pembaca layar)',
    optLower: 'semua huruf kecil (#lowercase)',
    optPreserve: 'Pertahankan Huruf Asli',
    outLabel: 'Tata Letak Hasil',
    optInline: 'Satu Baris (dipisahkan spasi)',
    optNewline: 'Satu Hashtag Per Baris',
    optDots: 'Pemisah Lipatan Caption (.\\n.\\n.)',
    dedupe: 'Hapus hashtag duplikat',
    labelRaw: 'Kata Kunci atau Hashtag Berantakan (dipisahkan koma, spasi, atau baris)',
    labelResult: 'Grup Hashtag Bersih',
    copyHashtags: 'Salin Hashtag',
    statClean: 'Hashtag Bersih',
    statDupes: 'Duplikat Dihapus',
    statIgMax: 'Maks Instagram (30)',
    statWithin: 'Dalam batas 30 IG',
    statExceeds: 'Melebihi batas 30 tag',
    statChars: 'Karakter Hasil',
  },
  ru: {
    caseLabel: 'Регистр форматирования и доступности',
    optCamel: 'PascalCase (#CamelCase — удобно для скринридеров)',
    optLower: 'все строчные (#lowercase)',
    optPreserve: 'Сохранять исходный регистр',
    outLabel: 'Формат вывода',
    optInline: 'Одна строка (через пробел)',
    optNewline: 'По одному хештегу в строке',
    optDots: 'Разделитель свёртки подписи (.\\n.\\n.)',
    dedupe: 'Удалять дублирующиеся хештеги',
    labelRaw: 'Ключевые слова или неупорядоченные хештеги (через запятую, пробел или строку)',
    labelResult: 'Чистая группа хештегов',
    copyHashtags: 'Копировать хештеги',
    statClean: 'Чистых хештегов',
    statDupes: 'Дубликатов удалено',
    statIgMax: 'Максимум Instagram (30)',
    statWithin: 'В пределах лимита IG в 30',
    statExceeds: 'Превышает лимит в 30 тегов',
    statChars: 'Символов на выходе',
  },
};

type CaseStyle = 'camel' | 'lowercase' | 'preserve';
type OutputStyle = 'inline' | 'newline' | 'spaced-dots';

function toHashtagToken(raw: string, caseStyle: CaseStyle): string | null {
  const cleaned = raw.replace(/^#+/, '').replace(/[^\p{L}\p{N}_\s-]/gu, ' ').trim();
  if (!cleaned) return null;

  const words = cleaned.split(/[\s_-]+/).filter(Boolean);
  if (words.length === 0) return null;

  if (caseStyle === 'camel') {
    const joined = words
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
    return `#${joined}`;
  }
  if (caseStyle === 'lowercase') {
    return `#${words.join('').toLowerCase()}`;
  }
  return `#${words.join('')}`;
}

export default function HashtagFormatterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [rawInput, setRawInput] = useState(
    'content marketing, #socialMediaTools, productivity hacks, content marketing, #BrowserTools, web-dev'
  );
  const [caseStyle, setCaseStyle] = useState<CaseStyle>('camel');
  const [outputStyle, setOutputStyle] = useState<OutputStyle>('inline');
  const [deduplicate, setDeduplicate] = useState(true);

  const result = useMemo(() => {
    const rawItems = rawInput
      .split(/[\n,;]+|(?=\s#)/g)
      .map((s) => s.trim())
      .filter(Boolean);

    const tags: string[] = [];
    const seen = new Set<string>();
    let duplicatesRemoved = 0;

    for (const item of rawItems) {
      const formatted = toHashtagToken(item, caseStyle);
      if (!formatted) continue;
      const key = formatted.toLowerCase();
      if (deduplicate && seen.has(key)) {
        duplicatesRemoved += 1;
        continue;
      }
      seen.add(key);
      tags.push(formatted);
    }

    let outputText = '';
    if (outputStyle === 'inline') {
      outputText = tags.join(' ');
    } else if (outputStyle === 'newline') {
      outputText = tags.join('\n');
    } else {
      outputText = tags.length > 0 ? `.\n.\n.\n${tags.join(' ')}` : '';
    }

    return {
      tags,
      duplicatesRemoved,
      outputText,
      charCount: outputText.length,
    };
  }, [rawInput, caseStyle, outputStyle, deduplicate]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="ht-case" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.caseLabel}
          </label>
          <select
            id="ht-case"
            value={caseStyle}
            onChange={(e) => setCaseStyle(e.target.value as CaseStyle)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="camel">{s.optCamel}</option>
            <option value="lowercase">{s.optLower}</option>
            <option value="preserve">{s.optPreserve}</option>
          </select>
        </div>

        <div>
          <label htmlFor="ht-out" className="block text-xs font-semibold text-slate-800 mb-1.5">
            {s.outLabel}
          </label>
          <select
            id="ht-out"
            value={outputStyle}
            onChange={(e) => setOutputStyle(e.target.value as OutputStyle)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            <option value="inline">{s.optInline}</option>
            <option value="newline">{s.optNewline}</option>
            <option value="spaced-dots">{s.optDots}</option>
          </select>
        </div>

        <div className="flex items-end pb-2">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={deduplicate}
              onChange={(e) => setDeduplicate(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.dedupe}
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ht-raw" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelRaw}
          </label>
          <textarea
            id="ht-raw"
            rows={7}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label htmlFor="ht-result" className="text-sm font-semibold text-slate-900">
              {s.labelResult}
            </label>
            <CopyButton text={result.outputText} label={s.copyHashtags} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="ht-result"
            rows={7}
            readOnly
            value={result.outputText}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 font-mono text-sm text-slate-900"
          />
        </div>
      </div>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm tabular-nums">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">{s.statClean}</dt>
          <dd className={`mt-1 text-xl font-bold font-mono ${result.tags.length > 30 ? 'text-red-700' : 'text-slate-900'}`}>
            {result.tags.length}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">{s.statDupes}</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">{result.duplicatesRemoved}</dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">{s.statIgMax}</dt>
          <dd className={`mt-1 text-sm font-semibold ${result.tags.length <= 30 ? 'text-emerald-700' : 'text-red-700'}`}>
            {result.tags.length <= 30 ? s.statWithin : s.statExceeds}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
          <dt className="text-xs text-slate-500">{s.statChars}</dt>
          <dd className="mt-1 text-xl font-bold font-mono text-slate-900">{result.charCount}</dd>
        </div>
      </dl>
    </div>
  );
}
