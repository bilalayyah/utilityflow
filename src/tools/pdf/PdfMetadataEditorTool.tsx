import { Eraser, FileCheck2, FileUp } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    clearedMsg: 'Cleared editable metadata fields. Click Save & Download PDF to apply.',
    savedSuccess: (size: string) => `Saved updated PDF metadata (${size}).`,
    dropTitleEmpty: 'Choose a PDF File to Inspect or Edit Metadata',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} pages · ${size})`,
    dropSub: 'Inspect document properties, sanitize author/software tags, or set clean SEO titles',
    labelTitle: 'Document Title',
    labelAuthor: 'Author',
    labelSubject: 'Subject / Summary',
    labelKeywords: 'Keywords (comma separated)',
    labelCreator: 'Creator Application',
    labelProducer: 'PDF Producer',
    saving: 'Saving PDF...',
    saveBtn: 'Save Metadata & Download PDF',
    stripBtn: 'Strip All Metadata Fields',
  },
  es: {
    clearedMsg: 'Se borraron los campos de metadatos editables. Haga clic en Guardar y descargar PDF para aplicar los cambios.',
    savedSuccess: (size: string) => `Se guardaron los metadatos actualizados del PDF (${size}).`,
    dropTitleEmpty: 'Elija un archivo PDF para inspeccionar o editar metadatos',
    dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
    dropSub: 'Inspeccione las propiedades del documento, limpie las etiquetas de autor/software o establezca títulos SEO limpios',
    labelTitle: 'Título del documento',
    labelAuthor: 'Autor',
    labelSubject: 'Asunto / resumen',
    labelKeywords: 'Palabras clave (separadas por comas)',
    labelCreator: 'Aplicación creadora',
    labelProducer: 'Productor del PDF',
    saving: 'Guardando PDF...',
    saveBtn: 'Guardar metadatos y descargar PDF',
    stripBtn: 'Eliminar todos los campos de metadatos',
  },
};

export default function PdfMetadataEditorTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [firstPageSize, setFirstPageSize] = useState('');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [keywords, setKeywords] = useState('');
  const [creator, setCreator] = useState('');
  const [producer, setProducer] = useState('');

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    setStatusMessage('');

    try {
      const bytes = await readValidatedPdfBytes(file, locale);
      const doc = await PDFDocument.load(bytes);
      const firstPage = doc.getPageCount() > 0 ? doc.getPage(0).getSize() : null;

      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(doc.getPageCount());
      setFirstPageSize(
        firstPage ? `${Math.round(firstPage.width)} × ${Math.round(firstPage.height)} pt` : '—'
      );

      setTitle(doc.getTitle() ?? '');
      setAuthor(doc.getAuthor() ?? '');
      setSubject(doc.getSubject() ?? '');
      setKeywords(doc.getKeywords() ?? '');
      setCreator(doc.getCreator() ?? '');
      setProducer(doc.getProducer() ?? '');
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, locale));
    }
  };

  const handleClearFields = () => {
    setTitle('');
    setAuthor('');
    setSubject('');
    setKeywords('');
    setCreator('');
    setProducer('');
    setStatusMessage(s.clearedMsg);
  };

  const handleSave = async () => {
    if (!pdfBytes) return;
    setError('');
    setStatusMessage('');
    setIsSaving(true);

    try {
      const doc = await PDFDocument.load(pdfBytes);
      doc.setTitle(title.trim());
      doc.setAuthor(author.trim());
      doc.setSubject(subject.trim());
      doc.setKeywords(
        keywords
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean)
      );
      doc.setCreator(creator.trim());
      doc.setProducer(producer.trim());

      const outBytes = await doc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-metadata.pdf`);
      setStatusMessage(
        s.savedSuccess(formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, locale));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="meta-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName
            ? s.dropTitleFile(fileName, pageCount, firstPageSize)
            : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="meta-pdf-input"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="meta-title" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelTitle}
              </label>
              <input
                id="meta-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="meta-author" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelAuthor}
              </label>
              <input
                id="meta-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="meta-subject" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelSubject}
              </label>
              <input
                id="meta-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="meta-keywords" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelKeywords}
              </label>
              <input
                id="meta-keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="meta-creator" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelCreator}
              </label>
              <input
                id="meta-creator"
                type="text"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="meta-producer" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.labelProducer}
              </label>
              <input
                id="meta-producer"
                type="text"
                value={producer}
                onChange={(e) => setProducer(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={isSaving}
              onClick={() => void handleSave()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4" />
              {isSaving ? s.saving : s.saveBtn}
            </button>

            <button
              type="button"
              onClick={handleClearFields}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <Eraser className="w-4 h-4" />
              {s.stripBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
