import { ArrowLeftRight, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import type { LocaleCode } from '../../locales/config';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    encodeTab: 'Encode to Base64',
    decodeTab: 'Decode Base64',
    urlSafe: 'URL-safe (- and _)',
    omitPadding: 'Omit trailing = padding',
    swap: 'Swap',
    decodeError: 'Decode error:',
    inputLabelEncode: 'Plain Text (UTF-8)',
    inputLabelDecode: 'Base64 String',
    inputPlaceholderEncode: 'Enter text or JSON to encode...',
    inputPlaceholderDecode: 'Paste standard or URL-safe Base64 string...',
    outputLabelEncode: 'Base64 Output',
    outputLabelDecode: 'Decoded Text',
    outputPlaceholder: 'Converted output appears here...',
    copyOutput: 'Copy output',
    invalidLength: 'Invalid Base64 string length.',
    invalidInput: 'Invalid Base64 input or malformed UTF-8 byte sequence.',
  },
  es: {
    encodeTab: 'Codificar a Base64',
    decodeTab: 'Decodificar Base64',
    urlSafe: 'Compatible con URL (- y _)',
    omitPadding: 'Omitir el relleno = final',
    swap: 'Intercambiar',
    decodeError: 'Error de decodificación:',
    inputLabelEncode: 'Texto sin formato (UTF-8)',
    inputLabelDecode: 'Cadena Base64',
    inputPlaceholderEncode: 'Escribe texto o JSON para codificar...',
    inputPlaceholderDecode: 'Pega una cadena Base64 estándar o compatible con URL...',
    outputLabelEncode: 'Salida Base64',
    outputLabelDecode: 'Texto decodificado',
    outputPlaceholder: 'La salida convertida aparece aquí...',
    copyOutput: 'Copiar salida',
    invalidLength: 'Longitud de cadena Base64 no válida.',
    invalidInput: 'Entrada Base64 no válida o secuencia de bytes UTF-8 incorrecta.',
  },
  pt: {
    encodeTab: 'Codificar para Base64',
    decodeTab: 'Decodificar Base64',
    urlSafe: 'Seguro para URL (- e _)',
    omitPadding: 'Omitir o preenchimento = final',
    swap: 'Trocar',
    decodeError: 'Erro de decodificação:',
    inputLabelEncode: 'Texto simples (UTF-8)',
    inputLabelDecode: 'String Base64',
    inputPlaceholderEncode: 'Digite texto ou JSON para codificar...',
    inputPlaceholderDecode: 'Cole uma string Base64 padrão ou segura para URL...',
    outputLabelEncode: 'Saída Base64',
    outputLabelDecode: 'Texto decodificado',
    outputPlaceholder: 'A saída convertida aparece aqui...',
    copyOutput: 'Copiar saída',
    invalidLength: 'Comprimento de string Base64 inválido.',
    invalidInput: 'Entrada Base64 inválida ou sequência de bytes UTF-8 malformada.',
  },
  fr: {
    encodeTab: 'Encoder en Base64',
    decodeTab: 'Décoder Base64',
    urlSafe: 'Compatible URL (- et _)',
    omitPadding: 'Omettre le remplissage = final',
    swap: 'Échanger',
    decodeError: 'Erreur de décodage :',
    inputLabelEncode: 'Texte brut (UTF-8)',
    inputLabelDecode: 'Chaîne Base64',
    inputPlaceholderEncode: 'Saisissez du texte ou du JSON à encoder...',
    inputPlaceholderDecode: 'Collez une chaîne Base64 standard ou compatible URL...',
    outputLabelEncode: 'Sortie Base64',
    outputLabelDecode: 'Texte décodé',
    outputPlaceholder: 'La sortie convertie apparaît ici...',
    copyOutput: 'Copier la sortie',
    invalidLength: 'Longueur de chaîne Base64 invalide.',
    invalidInput: 'Entrée Base64 invalide ou séquence d\'octets UTF-8 mal formée.',
  },
  de: {
    encodeTab: 'In Base64 kodieren',
    decodeTab: 'Base64 dekodieren',
    urlSafe: 'URL-sicher (- und _)',
    omitPadding: 'Abschließendes =-Padding weglassen',
    swap: 'Tauschen',
    decodeError: 'Dekodierungsfehler:',
    inputLabelEncode: 'Klartext (UTF-8)',
    inputLabelDecode: 'Base64-Zeichenkette',
    inputPlaceholderEncode: 'Text oder JSON zum Kodieren eingeben...',
    inputPlaceholderDecode: 'Standard- oder URL-sichere Base64-Zeichenkette einfügen...',
    outputLabelEncode: 'Base64-Ausgabe',
    outputLabelDecode: 'Dekodierter Text',
    outputPlaceholder: 'Die konvertierte Ausgabe erscheint hier...',
    copyOutput: 'Ausgabe kopieren',
    invalidLength: 'Ungültige Länge der Base64-Zeichenkette.',
    invalidInput: 'Ungültige Base64-Eingabe oder fehlerhafte UTF-8-Bytesequenz.',
  },
  it: {
    encodeTab: 'Codifica in Base64',
    decodeTab: 'Decodifica Base64',
    urlSafe: 'URL-safe (- e _)',
    omitPadding: 'Ometti il padding = finale',
    swap: 'Scambia',
    decodeError: 'Errore di decodifica:',
    inputLabelEncode: 'Testo in chiaro (UTF-8)',
    inputLabelDecode: 'Stringa Base64',
    inputPlaceholderEncode: 'Inserisci testo o JSON da codificare...',
    inputPlaceholderDecode: 'Incolla una stringa Base64 standard o URL-safe...',
    outputLabelEncode: 'Output Base64',
    outputLabelDecode: 'Testo decodificato',
    outputPlaceholder: 'L\'output convertito apparirà qui...',
    copyOutput: 'Copia l\'output',
    invalidLength: 'Lunghezza della stringa Base64 non valida.',
    invalidInput: 'Input Base64 non valido o sequenza di byte UTF-8 malformata.',
  },
  id: {
    encodeTab: 'Encode ke Base64',
    decodeTab: 'Decode Base64',
    urlSafe: 'URL-safe (- dan _)',
    omitPadding: 'Hilangkan padding = di akhir',
    swap: 'Tukar',
    decodeError: 'Kesalahan decode:',
    inputLabelEncode: 'Teks Biasa (UTF-8)',
    inputLabelDecode: 'String Base64',
    inputPlaceholderEncode: 'Masukkan teks atau JSON untuk di-encode...',
    inputPlaceholderDecode: 'Tempel string Base64 standar atau URL-safe...',
    outputLabelEncode: 'Hasil Base64',
    outputLabelDecode: 'Teks yang Didecode',
    outputPlaceholder: 'Hasil konversi muncul di sini...',
    copyOutput: 'Salin hasil',
    invalidLength: 'Panjang string Base64 tidak valid.',
    invalidInput: 'Input Base64 tidak valid atau urutan byte UTF-8 rusak.',
  },
  ru: {
    encodeTab: 'Кодировать в Base64',
    decodeTab: 'Декодировать Base64',
    urlSafe: 'URL-safe (- и _)',
    omitPadding: 'Убирать конечный padding =',
    swap: 'Поменять местами',
    decodeError: 'Ошибка декодирования:',
    inputLabelEncode: 'Обычный текст (UTF-8)',
    inputLabelDecode: 'Строка Base64',
    inputPlaceholderEncode: 'Введите текст или JSON для кодирования...',
    inputPlaceholderDecode: 'Вставьте стандартную или URL-safe строку Base64...',
    outputLabelEncode: 'Вывод Base64',
    outputLabelDecode: 'Декодированный текст',
    outputPlaceholder: 'Здесь появится преобразованный результат...',
    copyOutput: 'Копировать результат',
    invalidLength: 'Недопустимая длина строки Base64.',
    invalidInput: 'Недопустимый ввод Base64 или повреждённая последовательность байтов UTF-8.',
  },
};

const SAMPLE_PLAIN = {
  en: 'UtilityFlow: UTF-8 safe Base64 encoding ✓',
  es: 'UtilityFlow: codificación Base64 segura con UTF-8 ✓',
  pt: 'UtilityFlow: codificação Base64 segura com UTF-8 ✓',
  fr: 'UtilityFlow : encodage Base64 sûr en UTF-8 ✓',
  de: 'UtilityFlow: UTF-8-sichere Base64-Kodierung ✓',
  it: 'UtilityFlow: codifica Base64 sicura con UTF-8 ✓',
  id: 'UtilityFlow: pengodean Base64 yang aman dengan UTF-8 ✓',
  ru: 'UtilityFlow: безопасное кодирование Base64 с UTF-8 ✓',
} as const;

function encodeUtf8Base64(text: string, urlSafe: boolean, omitPadding: boolean): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  let base64 = btoa(binary);
  if (urlSafe) {
    base64 = base64.replace(/\+/g, '-').replace(/\//g, '_');
  }
  if (omitPadding) {
    base64 = base64.replace(/=+$/, '');
  }
  return base64;
}

function decodeUtf8Base64(raw: string, locale: LocaleCode): string {
  let normalized = raw.trim().replace(/-/g, '+').replace(/_/g, '/');
  const mod = normalized.length % 4;
  if (mod === 2) normalized += '==';
  else if (mod === 3) normalized += '=';
  else if (mod === 1) throw new Error(STRINGS[locale].invalidLength);

  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

export default function Base64Tool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('');
  const [urlSafe, setUrlSafe] = useState(false);
  const [omitPadding, setOmitPadding] = useState(false);

  const result = useMemo(() => {
    if (!input) return { output: '', error: '' };
    try {
      if (mode === 'encode') {
        return { output: encodeUtf8Base64(input, urlSafe, omitPadding), error: '' };
      }
      return { output: decodeUtf8Base64(input, locale), error: '' };
    } catch (err) {
      return {
        output: '',
        error:
          err instanceof Error
            ? err.message
            : s.invalidInput,
      };
    }
  }, [input, mode, urlSafe, omitPadding, locale, s.invalidInput]);

  const handleSwap = () => {
    if (!result.output) return;
    setMode((m) => (m === 'encode' ? 'decode' : 'encode'));
    setInput(result.output);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode('encode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'encode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.encodeTab}
            </button>
            <button
              type="button"
              onClick={() => setMode('decode')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                mode === 'decode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.decodeTab}
            </button>
          </div>

          {mode === 'encode' && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={urlSafe}
                  onChange={(e) => setUrlSafe(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span>{s.urlSafe}</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={omitPadding}
                  onChange={(e) => setOmitPadding(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span>{s.omitPadding}</span>
              </label>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSwap}
            disabled={!result.output}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.swap}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('encode');
              setInput(SAMPLE_PLAIN[locale]);
            }}
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

      {result.error && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800"
        >
          {s.decodeError} {result.error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="b64-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {mode === 'encode' ? s.inputLabelEncode : s.inputLabelDecode}
          </label>
          <textarea
            id="b64-input"
            rows={9}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === 'encode'
                ? s.inputPlaceholderEncode
                : s.inputPlaceholderDecode
            }
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="b64-output" className="text-sm font-semibold text-slate-900">
              {mode === 'encode' ? s.outputLabelEncode : s.outputLabelDecode}
            </label>
            <CopyButton text={result.output} label={s.copyOutput} copiedLabel={t.common.copied} />
          </div>
          <textarea
            id="b64-output"
            rows={9}
            readOnly
            value={result.output}
            placeholder={s.outputPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
