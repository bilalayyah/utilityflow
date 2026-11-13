import { FileUp, Scissors } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { useState } from 'react';
import {
  formatBytes,
  formatFriendlyPdfError,
  parsePageRanges,
  readValidatedPdfBytes,
  triggerPdfDownload,
} from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errBurst: (n: number) =>
      `Burst splitting downloads one file per page. For documents over 25 pages (${n} pages here), extract ranges instead so your browser does not block bulk downloads.`,
    exportedAll: (n: number) => `Exported ${n} single-page PDF files.`,
    errNoMatch: 'No pages matched that selection (for example, Even Pages requires 2+ pages).',
    extractedSuccess: (a: number, b: number, size: string) =>
      `Extracted ${a} of ${b} pages (${size}).`,
    dropTitleEmpty: 'Choose a PDF File to Split or Extract',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
    dropSub: 'Processed locally in memory · Click to replace document',
    modeRange: 'Extract Page Ranges',
    modeOdd: 'Odd Pages Only',
    modeEven: 'Even Pages Only',
    modeBurst: 'Burst All Individual Pages',
    labelRange: (n: number) => `Pages to Extract (1–${n})`,
    phRange: 'e.g. 1-3, 5, 8-10',
    rangeHintBefore: 'Use commas and hyphens (for example ',
    rangeHintAfter: ').',
    extracting: 'Extracting PDF...',
    splitBtn: 'Split & Download PDF',
  },
  es: {
    errBurst: (n: number) =>
      `La división por ráfaga descarga un archivo por página. Para documentos de más de 25 páginas (${n} páginas aquí), extraiga rangos para que su navegador no bloquee las descargas masivas.`,
    exportedAll: (n: number) => `Se exportaron ${n} archivos PDF de una sola página.`,
    errNoMatch: 'Ninguna página coincidió con esa selección (por ejemplo, Páginas pares requiere 2 o más páginas).',
    extractedSuccess: (a: number, b: number, size: string) =>
      `Se extrajeron ${a} de ${b} páginas (${size}).`,
    dropTitleEmpty: 'Elija un archivo PDF para dividir o extraer',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
    dropSub: 'Procesado localmente en memoria · Haga clic para reemplazar el documento',
    modeRange: 'Extraer rangos de páginas',
    modeOdd: 'Solo páginas impares',
    modeEven: 'Solo páginas pares',
    modeBurst: 'Dividir todas las páginas individuales',
    labelRange: (n: number) => `Páginas para extraer (1–${n})`,
    phRange: 'p. ej., 1-3, 5, 8-10',
    rangeHintBefore: 'Use comas y guiones (por ejemplo ',
    rangeHintAfter: ').',
    extracting: 'Extrayendo PDF...',
    splitBtn: 'Dividir y descargar PDF',
  },
  pt: {
    errBurst: (n: number) =>
      `A divisão em massa baixa um arquivo por página. Para documentos com mais de 25 páginas (${n} páginas aqui), extraia intervalos para que seu navegador não bloqueie downloads em massa.`,
    exportedAll: (n: number) => `${n} arquivos PDF de uma página exportados.`,
    errNoMatch: 'Nenhuma página correspondeu a essa seleção (por exemplo, Páginas pares exige 2 ou mais páginas).',
    extractedSuccess: (a: number, b: number, size: string) =>
      `${a} de ${b} páginas extraídas (${size}).`,
    dropTitleEmpty: 'Escolha um arquivo PDF para dividir ou extrair',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
    dropSub: 'Processado localmente na memória · Clique para substituir o documento',
    modeRange: 'Extrair intervalos de páginas',
    modeOdd: 'Somente páginas ímpares',
    modeEven: 'Somente páginas pares',
    modeBurst: 'Dividir todas as páginas individuais',
    labelRange: (n: number) => `Páginas para extrair (1–${n})`,
    phRange: 'ex.: 1-3, 5, 8-10',
    rangeHintBefore: 'Use vírgulas e hifens (por exemplo ',
    rangeHintAfter: ').',
    extracting: 'Extraindo PDF...',
    splitBtn: 'Dividir e baixar PDF',
  },
  fr: {
    errBurst: (n: number) =>
      `La division en masse télécharge un fichier par page. Pour les documents de plus de 25 pages (${n} pages ici), extrayez plutôt des plages afin que votre navigateur ne bloque pas les téléchargements en masse.`,
    exportedAll: (n: number) => `${n} fichiers PDF d’une seule page exportés.`,
    errNoMatch: 'Aucune page ne correspond à cette sélection (par exemple, Pages paires exige 2 pages ou plus).',
    extractedSuccess: (a: number, b: number, size: string) =>
      `${a} pages sur ${b} extraites (${size}).`,
    dropTitleEmpty: 'Choisissez un fichier PDF à diviser ou à extraire',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
    dropSub: 'Traité localement en mémoire · Cliquez pour remplacer le document',
    modeRange: 'Extraire des plages de pages',
    modeOdd: 'Pages impaires uniquement',
    modeEven: 'Pages paires uniquement',
    modeBurst: 'Éclater toutes les pages individuelles',
    labelRange: (n: number) => `Pages à extraire (1–${n})`,
    phRange: 'p. ex. 1-3, 5, 8-10',
    rangeHintBefore: 'Utilisez des virgules et des traits d’union (par exemple ',
    rangeHintAfter: ').',
    extracting: 'Extraction du PDF...',
    splitBtn: 'Diviser et télécharger le PDF',
  },
};

type SplitMode = 'range' | 'every-page' | 'odd' | 'even';

export default function SplitPdfTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [mode, setMode] = useState<SplitMode>('range');
  const [rangeInput, setRangeInput] = useState('1-2');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');

    try {
      const bytes = await readValidatedPdfBytes(file, locale);
      const doc = await PDFDocument.load(bytes);
      const total = doc.getPageCount();
      setPdfBytes(bytes);
      setFileName(file.name);
      setFileSize(file.size);
      setPageCount(total);
      setRangeInput(total > 1 ? `1-${Math.min(2, total)}` : '1');
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, locale));
    }
  };

  const handleSplit = async () => {
    if (!pdfBytes || pageCount === 0) return;
    setError('');
    setStatusMessage('');
    setIsProcessing(true);

    try {
      const srcDoc = await PDFDocument.load(pdfBytes);
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';

      if (mode === 'every-page') {
        if (pageCount > 25) {
          setError(s.errBurst(pageCount));
          setIsProcessing(false);
          return;
        }
        for (let i = 0; i < pageCount; i += 1) {
          const single = await PDFDocument.create();
          const [copied] = await single.copyPages(srcDoc, [i]);
          single.addPage(copied);
          const out = await single.save();
          triggerPdfDownload(out, `${baseName}-page-${i + 1}.pdf`);
        }
        setStatusMessage(s.exportedAll(pageCount));
      } else {
        let indices: number[] = [];
        if (mode === 'range') {
          const parsed = parsePageRanges(rangeInput, pageCount, locale);
          if (parsed.error) {
            setError(parsed.error);
            setIsProcessing(false);
            return;
          }
          indices = parsed.indices;
        } else if (mode === 'odd') {
          indices = Array.from({ length: pageCount }, (_, i) => i).filter((i) => i % 2 === 0);
        } else {
          indices = Array.from({ length: pageCount }, (_, i) => i).filter((i) => i % 2 === 1);
        }

        if (indices.length === 0) {
          setError(s.errNoMatch);
          setIsProcessing(false);
          return;
        }

        const extracted = await PDFDocument.create();
        const copied = await extracted.copyPages(srcDoc, indices);
        copied.forEach((p) => extracted.addPage(p));
        const outBytes = await extracted.save();
        triggerPdfDownload(outBytes, `${baseName}-extracted.pdf`);
        setStatusMessage(
          s.extractedSuccess(indices.length, pageCount, formatBytes(outBytes.byteLength, locale))
        );
      }
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, locale));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="split-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? s.dropTitleFile(fileName, pageCount, formatBytes(fileSize, locale)) : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="split-pdf-input"
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => {
            void handleFile(e.target.files?.[0]);
            e.target.value = '';
          }}
          className="sr-only"
        />
      </label>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {statusMessage && (
        <div role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {statusMessage}
        </div>
      )}

      {pdfBytes && (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-1.5 rounded-lg bg-slate-100 p-1.5">
            {(
              [
                ['range', s.modeRange],
                ['odd', s.modeOdd],
                ['even', s.modeEven],
                ['every-page', s.modeBurst],
              ] as [SplitMode, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={`rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
                  mode === id ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {mode === 'range' && (
            <div>
              <label htmlFor="split-range" className="block text-sm font-semibold text-slate-900 mb-1.5">
                {s.labelRange(pageCount)}
              </label>
              <input
                id="split-range"
                type="text"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder={s.phRange}
                className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
              />
              <p className="mt-1 text-xs text-slate-500">
                {s.rangeHintBefore}<code className="font-mono">1-3, 5</code>{s.rangeHintAfter}
              </p>
            </div>
          )}

          <button
            type="button"
            disabled={isProcessing}
            onClick={() => void handleSplit()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <Scissors className="w-4 h-4" />
            {isProcessing ? s.extracting : s.splitBtn}
          </button>
        </div>
      )}
    </div>
  );
}
