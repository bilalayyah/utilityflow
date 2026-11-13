import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleText: `First line of text
Second line of text
Third line of text`,
    originalText: 'Original Text',
    reversedOutput: 'Reversed Output',
    inputPlaceholder: 'Enter text or lines to reverse...',
    outputPlaceholder: 'Reversed text appears here...',
    modes: [
      { id: 'characters', label: 'Reverse Characters' },
      { id: 'words', label: 'Reverse Word Order' },
      { id: 'each-word', label: 'Reverse Each Word' },
      { id: 'lines', label: 'Reverse Line Order' },
    ],
  },
  es: {
    sampleText: `Primera línea de texto
Segunda línea de texto
Tercera línea de texto`,
    originalText: 'Texto original',
    reversedOutput: 'Resultado invertido',
    inputPlaceholder: 'Escribe texto o líneas para invertir...',
    outputPlaceholder: 'El texto invertido aparece aquí...',
    modes: [
      { id: 'characters', label: 'Invertir caracteres' },
      { id: 'words', label: 'Invertir orden de palabras' },
      { id: 'each-word', label: 'Invertir cada palabra' },
      { id: 'lines', label: 'Invertir orden de líneas' },
    ],
  },
  pt: {
    sampleText: `Primeira linha de texto
Segunda linha de texto
Terceira linha de texto`,
    originalText: 'Texto original',
    reversedOutput: 'Saída invertida',
    inputPlaceholder: 'Digite texto ou linhas para inverter...',
    outputPlaceholder: 'O texto invertido aparece aqui...',
    modes: [
      { id: 'characters', label: 'Inverter caracteres' },
      { id: 'words', label: 'Inverter ordem das palavras' },
      { id: 'each-word', label: 'Inverter cada palavra' },
      { id: 'lines', label: 'Inverter ordem das linhas' },
    ],
  },
  fr: {
    sampleText: `Première ligne de texte
Deuxième ligne de texte
Troisième ligne de texte`,
    originalText: 'Texte d\'origine',
    reversedOutput: 'Sortie inversée',
    inputPlaceholder: 'Saisissez du texte ou des lignes à inverser...',
    outputPlaceholder: 'Le texte inversé apparaît ici...',
    modes: [
      { id: 'characters', label: 'Inverser les caractères' },
      { id: 'words', label: 'Inverser l\'ordre des mots' },
      { id: 'each-word', label: 'Inverser chaque mot' },
      { id: 'lines', label: 'Inverser l\'ordre des lignes' },
    ],
  },
  de: {
    sampleText: `Erste Textzeile
Zweite Textzeile
Dritte Textzeile`,
    originalText: 'Originaltext',
    reversedOutput: 'Umgekehrte Ausgabe',
    inputPlaceholder: 'Text oder Zeilen zum Umkehren eingeben...',
    outputPlaceholder: 'Umgekehrter Text erscheint hier...',
    modes: [
      { id: 'characters', label: 'Zeichen umkehren' },
      { id: 'words', label: 'Wortreihenfolge umkehren' },
      { id: 'each-word', label: 'Jedes Wort umkehren' },
      { id: 'lines', label: 'Zeilenreihenfolge umkehren' },
    ],
  },
  it: {
    sampleText: `Prima riga di testo
Seconda riga di testo
Terza riga di testo`,
    originalText: 'Testo originale',
    reversedOutput: 'Output invertito',
    inputPlaceholder: 'Inserisci testo o righe da invertire...',
    outputPlaceholder: 'Il testo invertito apparirà qui...',
    modes: [
      { id: 'characters', label: 'Inverti i caratteri' },
      { id: 'words', label: 'Inverti ordine delle parole' },
      { id: 'each-word', label: 'Inverti ogni parola' },
      { id: 'lines', label: 'Inverti ordine delle righe' },
    ],
  },
  id: {
    sampleText: `Baris pertama teks
Baris kedua teks
Baris ketiga teks`,
    originalText: 'Teks Asli',
    reversedOutput: 'Hasil yang Dibalik',
    inputPlaceholder: 'Masukkan teks atau baris untuk dibalik...',
    outputPlaceholder: 'Teks yang dibalik muncul di sini...',
    modes: [
      { id: 'characters', label: 'Balik Karakter' },
      { id: 'words', label: 'Balik Urutan Kata' },
      { id: 'each-word', label: 'Balik Setiap Kata' },
      { id: 'lines', label: 'Balik Urutan Baris' },
    ],
  },
  ru: {
    sampleText: `Первая строка текста
Вторая строка текста
Третья строка текста`,
    originalText: 'Исходный текст',
    reversedOutput: 'Перевёрнутый результат',
    inputPlaceholder: 'Введите текст или строки для переворота...',
    outputPlaceholder: 'Здесь появится перевёрнутый текст...',
    modes: [
      { id: 'characters', label: 'Перевернуть символы' },
      { id: 'words', label: 'Перевернуть порядок слов' },
      { id: 'each-word', label: 'Перевернуть каждое слово' },
      { id: 'lines', label: 'Перевернуть порядок строк' },
    ],
  },
};

type ReverseMode = 'characters' | 'words' | 'each-word' | 'lines';

export default function TextReverserTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<ReverseMode>('characters');

  const output = useMemo(() => {
    if (!input) return '';

    switch (mode) {
      case 'characters':
        return Array.from(input).reverse().join('');
      case 'words':
        return input
          .split(/\r?\n/)
          .map((line) => line.trim().split(/\s+/).reverse().join(' '))
          .join('\n');
      case 'each-word':
        return input.replace(/\S+/g, (word) => Array.from(word).reverse().join(''));
      case 'lines':
        return input.split(/\r?\n/).reverse().join('\n');
    }
  }, [input, mode]);

  const modes: Array<{ id: ReverseMode; label: string }> = s.modes as Array<{
    id: ReverseMode;
    label: string;
  }>;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                mode === m.id
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setInput(s.sampleText)}
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
          <label htmlFor="reverse-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.originalText}
          </label>
          <textarea
            id="reverse-input"
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="reverse-output" className="text-sm font-semibold text-slate-900">
              {s.reversedOutput}
            </label>
            <CopyButton text={output} label={t.common.copy} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="reverse-output"
            rows={8}
            readOnly
            value={output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
