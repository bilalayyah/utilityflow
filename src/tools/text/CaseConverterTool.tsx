import { RotateCcw, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    textToConvert: 'Text to convert case',
    placeholder: 'Type or paste text, then click any case conversion button below...',
    copyResult: 'Copy result',
  },
  es: {
    textToConvert: 'Texto para convertir mayúsculas y minúsculas',
    placeholder: 'Escribe o pega texto y luego haz clic en cualquier botón de conversión...',
    copyResult: 'Copiar resultado',
  },
  pt: {
    textToConvert: 'Texto para converter maiúsculas e minúsculas',
    placeholder: 'Digite ou cole texto e clique em qualquer botão de conversão abaixo...',
    copyResult: 'Copiar resultado',
  },
  fr: {
    textToConvert: 'Texte à convertir (casse)',
    placeholder: 'Saisissez ou collez du texte, puis cliquez sur un bouton de conversion ci-dessous...',
    copyResult: 'Copier le résultat',
  },
  de: {
    textToConvert: 'Text zur Umwandlung der Groß-/Kleinschreibung',
    placeholder: 'Text eingeben oder einfügen und dann unten auf eine Umwandlungsschaltfläche klicken...',
    copyResult: 'Ergebnis kopieren',
  },
  it: {
    textToConvert: 'Testo da convertire',
    placeholder: 'Digita o incolla il testo, poi fai clic su uno dei pulsanti di conversione qui sotto...',
    copyResult: 'Copia il risultato',
  },
  id: {
    textToConvert: 'Teks yang diubah hurufnya',
    placeholder: 'Ketik atau tempel teks, lalu klik tombol konversi huruf di bawah...',
    copyResult: 'Salin hasil',
  },
  ru: {
    textToConvert: 'Текст для изменения регистра',
    placeholder: 'Введите или вставьте текст, затем нажмите любую кнопку преобразования регистра ниже...',
    copyResult: 'Копировать результат',
  },
};

const SAMPLE_TEXT = 'welcome to utilityFlow: fast text_case formatting & clean URLs';

const MINOR_TITLE_WORDS = new Set([
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'in',
  'nor',
  'of',
  'on',
  'or',
  'per',
  'the',
  'to',
  'via',
  'vs',
]);

function splitWords(input: string): string[] {
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function toTitleCase(input: string): string {
  const words = input.toLowerCase().split(/(\s+)/);
  let wordIndex = 0;
  const totalWords = words.filter((token) => token.trim().length > 0).length;

  return words
    .map((token) => {
      if (!token.trim()) return token;
      const isFirst = wordIndex === 0;
      const isLast = wordIndex === totalWords - 1;
      wordIndex += 1;

      if (!isFirst && !isLast && MINOR_TITLE_WORDS.has(token)) {
        return token;
      }
      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join('');
}

function toSentenceCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/(^\s*[a-z])|([.!?]\s+[a-z])|(\n\s*[a-z])/g, (match) => match.toUpperCase());
}

function toCamelCase(input: string): string {
  const words = splitWords(input).map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''));
  const filtered = words.filter(Boolean);
  return filtered
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

function toPascalCase(input: string): string {
  const words = splitWords(input).map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''));
  return words
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toSnakeCase(input: string): string {
  return splitWords(input)
    .map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''))
    .filter(Boolean)
    .join('_');
}

function toKebabCase(input: string): string {
  return splitWords(input)
    .map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, ''))
    .filter(Boolean)
    .join('-');
}

function toConstantCase(input: string): string {
  return toSnakeCase(input).toUpperCase();
}

function toAlternatingCase(input: string): string {
  let upper = false;
  return Array.from(input)
    .map((ch) => {
      if (!/[a-zA-Z]/.test(ch)) return ch;
      upper = !upper;
      return upper ? ch.toUpperCase() : ch.toLowerCase();
    })
    .join('');
}

export default function CaseConverterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');

  const applyTransform = (fn: (val: string) => string) => {
    setText((prev) => fn(prev));
  };

  const transforms: Array<{ label: string; fn: (val: string) => string }> = [
    { label: 'UPPERCASE', fn: (v) => v.toUpperCase() },
    { label: 'lowercase', fn: (v) => v.toLowerCase() },
    { label: 'Title Case', fn: toTitleCase },
    { label: 'Sentence case', fn: toSentenceCase },
    { label: 'camelCase', fn: toCamelCase },
    { label: 'PascalCase', fn: toPascalCase },
    { label: 'snake_case', fn: toSnakeCase },
    { label: 'kebab-case', fn: toKebabCase },
    { label: 'CONSTANT_CASE', fn: toConstantCase },
    { label: 'aLtErNaTiNg', fn: toAlternatingCase },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setText(SAMPLE_TEXT)}
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

        <CopyButton text={text} label={s.copyResult} copiedLabel={t.common.copied} />
      </div>

      <div>
        <label htmlFor="case-converter-input" className="sr-only">
          {s.textToConvert}
        </label>
        <textarea
          id="case-converter-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {transforms.map((item) => (
          <button
            key={item.label}
            type="button"
            disabled={!text}
            onClick={() => applyTransform(item.fn)}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
