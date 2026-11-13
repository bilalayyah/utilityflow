import { RotateCcw, Sparkles, Upload } from 'lucide-react';
import { useEffect, useState, type ChangeEvent } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    textInputTab: 'Text Input',
    fileTab: 'Local File Checksum',
    uppercaseHex: 'Uppercase hex',
    inputLabel: 'Input String (UTF-8)',
    inputPlaceholder: 'Enter text to compute SHA-1, SHA-256, SHA-384, and SHA-512 hashes...',
    chooseFileLabel: 'Choose local file to hash',
    fileNoteDefault: 'File is read locally in browser memory and never uploaded.',
    bytesLabel: 'bytes',
    cryptoUnavailable: 'Web Crypto hashing is unavailable.',
    sampleText: 'Hello, UtilityFlow!',
  },
  es: {
    textInputTab: 'Entrada de texto',
    fileTab: 'Checksum de archivo local',
    uppercaseHex: 'Hex en mayúsculas',
    inputLabel: 'Cadena de entrada (UTF-8)',
    inputPlaceholder: 'Escribe texto para calcular los hashes SHA-1, SHA-256, SHA-384 y SHA-512...',
    chooseFileLabel: 'Elegir archivo local para calcular el hash',
    fileNoteDefault: 'El archivo se lee localmente en la memoria del navegador y nunca se sube.',
    bytesLabel: 'bytes',
    cryptoUnavailable: 'El hash con Web Crypto no está disponible.',
    sampleText: '¡Hola, UtilityFlow!',
  },
};

type DigestAlgorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

const ALGORITHMS: DigestAlgorithm[] = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];

function bufferToHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function bufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export default function HashGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [inputMode, setInputMode] = useState<'text' | 'file'>('text');
  const [text, setText] = useState('UtilityFlow');
  const [fileName, setFileName] = useState('');
  const [fileBytes, setFileBytes] = useState<ArrayBuffer | null>(null);
  const [encoding, setEncoding] = useState<'hex' | 'base64'>('hex');
  const [uppercase, setUppercase] = useState(false);
  const [hashes, setHashes] = useState<Record<DigestAlgorithm, string>>({
    'SHA-1': '',
    'SHA-256': '',
    'SHA-384': '',
    'SHA-512': '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function computeAll() {
      try {
        setError('');
        let payload: ArrayBuffer;

        if (inputMode === 'file') {
          if (!fileBytes) {
            setHashes({ 'SHA-1': '', 'SHA-256': '', 'SHA-384': '', 'SHA-512': '' });
            return;
          }
          payload = fileBytes;
        } else {
          payload = new TextEncoder().encode(text).buffer;
        }

        const results = await Promise.all(
          ALGORITHMS.map(async (alg) => {
            const digest = await crypto.subtle.digest(alg, payload);
            let formatted = encoding === 'hex' ? bufferToHex(digest) : bufferToBase64(digest);
            if (encoding === 'hex' && uppercase) {
              formatted = formatted.toUpperCase();
            }
            return [alg, formatted] as const;
          })
        );

        if (!active) return;
        const map = Object.fromEntries(results) as Record<DigestAlgorithm, string>;
        setHashes(map);
      } catch (err) {
        if (!active) return;
        setError(err instanceof Error ? err.message : s.cryptoUnavailable);
      }
    }

    computeAll();
    return () => {
      active = false;
    };
  }, [inputMode, text, fileBytes, encoding, uppercase, s.cryptoUnavailable]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(`${file.name} (${file.size.toLocaleString(locale)} ${s.bytesLabel})`);
    const buf = await file.arrayBuffer();
    setFileBytes(buf);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setInputMode('text')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                inputMode === 'text' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.textInputTab}
            </button>
            <button
              type="button"
              onClick={() => setInputMode('file')}
              className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                inputMode === 'file' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.fileTab}
            </button>
          </div>

          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setEncoding('hex')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                encoding === 'hex' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Hex
            </button>
            <button
              type="button"
              onClick={() => setEncoding('base64')}
              className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer ${
                encoding === 'base64' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Base64
            </button>
          </div>

          {encoding === 'hex' && (
            <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span>{s.uppercaseHex}</span>
            </label>
          )}
        </div>

        {inputMode === 'text' && (
          <div className="flex items-center gap-2">
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
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.common.clear}</span>
            </button>
          </div>
        )}
      </div>

      {inputMode === 'text' ? (
        <div>
          <label htmlFor="hash-text-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.inputLabel}
          </label>
          <textarea
            id="hash-text-input"
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <Upload className="w-6 h-6 text-indigo-600 mx-auto mb-2" aria-hidden="true" />
          <label
            htmlFor="hash-file-input"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 cursor-pointer"
          >
            {s.chooseFileLabel}
          </label>
          <input
            id="hash-file-input"
            type="file"
            onChange={handleFileChange}
            className="sr-only"
          />
          <p className="mt-2 text-xs text-slate-600">
            {fileName || s.fileNoteDefault}
          </p>
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-800">
          {error}
        </div>
      )}

      <div className="space-y-3">
        {ALGORITHMS.map((alg) => (
          <div
            key={alg}
            className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-slate-600 mb-1">{alg}</div>
              <div className="font-mono text-xs text-slate-900 break-all">
                {hashes[alg] || '—'}
              </div>
            </div>
            <CopyButton text={hashes[alg]} label={t.common.copy} copiedLabel={t.common.copied} />
          </div>
        ))}
      </div>
    </div>
  );
}
