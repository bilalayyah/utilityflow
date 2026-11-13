import { FileUp, Hash } from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useState } from 'react';
import { formatBytes, formatFriendlyPdfError, readValidatedPdfBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errStart: 'Starting page number must be a whole number of 1 or higher.',
    stampedSuccess: (n: number, size: string) => `Stamped page numbers on ${n} page(s) (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Page ${cur} of ${total}`,
    dropTitleEmpty: 'Choose a PDF File to Add Page Numbers',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropSub: 'Inserts crisp vector page labels across reports, contracts, and packets',
    labelPos: 'Position',
    optBottomCenter: 'Bottom Center',
    optBottomRight: 'Bottom Right',
    optBottomLeft: 'Bottom Left',
    optTopRight: 'Top Right',
    labelFmt: 'Label Format',
    optPageOf: 'Page 1 of N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Start Number',
    labelSize: 'Font Size (pt)',
    opt9: '9 pt (Subtle)',
    opt11: '11 pt (Standard)',
    opt14: '14 pt (Large)',
    skipCover: 'Skip cover page (start numbering on page 2)',
    numbering: 'Numbering Pages...',
    addBtn: 'Add Page Numbers & Download',
  },
  es: {
    errStart: 'El número de página inicial debe ser un número entero de 1 o mayor.',
    stampedSuccess: (n: number, size: string) => `Se estamparon números de página en ${n} página(s) (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Página ${cur} de ${total}`,
    dropTitleEmpty: 'Elija un archivo PDF para agregar números de página',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropSub: 'Inserta etiquetas de página vectoriales nítidas en informes, contratos y paquetes',
    labelPos: 'Posición',
    optBottomCenter: 'Inferior centrada',
    optBottomRight: 'Inferior derecha',
    optBottomLeft: 'Inferior izquierda',
    optTopRight: 'Superior derecha',
    labelFmt: 'Formato de etiqueta',
    optPageOf: 'Página 1 de N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Número inicial',
    labelSize: 'Tamaño de fuente (pt)',
    opt9: '9 pt (sutil)',
    opt11: '11 pt (estándar)',
    opt14: '14 pt (grande)',
    skipCover: 'Omitir la portada (comenzar la numeración en la página 2)',
    numbering: 'Numerando páginas...',
    addBtn: 'Agregar números de página y descargar',
  },
  pt: {
    errStart: 'O número da página inicial deve ser um número inteiro de 1 ou maior.',
    stampedSuccess: (n: number, size: string) => `Números de página estampados em ${n} página(s) (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Página ${cur} de ${total}`,
    dropTitleEmpty: 'Escolha um arquivo PDF para adicionar números de página',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
    dropSub: 'Insere rótulos de página vetoriais nítidos em relatórios, contratos e pacotes',
    labelPos: 'Posição',
    optBottomCenter: 'Inferior centralizada',
    optBottomRight: 'Inferior direita',
    optBottomLeft: 'Inferior esquerda',
    optTopRight: 'Superior direita',
    labelFmt: 'Formato do rótulo',
    optPageOf: 'Página 1 de N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Número inicial',
    labelSize: 'Tamanho da fonte (pt)',
    opt9: '9 pt (sutil)',
    opt11: '11 pt (padrão)',
    opt14: '14 pt (grande)',
    skipCover: 'Pular a capa (começar a numeração na página 2)',
    numbering: 'Numerando páginas...',
    addBtn: 'Adicionar números de página e baixar',
  },
  fr: {
    errStart: 'Le numéro de la première page doit être un nombre entier de 1 ou plus.',
    stampedSuccess: (n: number, size: string) => `Numéros de page apposés sur ${n} page(s) (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Page ${cur} sur ${total}`,
    dropTitleEmpty: 'Choisissez un fichier PDF pour ajouter des numéros de page',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pages)`,
    dropSub: 'Insère des étiquettes de page vectorielles nettes dans les rapports, contrats et dossiers',
    labelPos: 'Position',
    optBottomCenter: 'Bas centré',
    optBottomRight: 'Bas droit',
    optBottomLeft: 'Bas gauche',
    optTopRight: 'Haut droit',
    labelFmt: 'Format de l’étiquette',
    optPageOf: 'Page 1 sur N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Numéro de départ',
    labelSize: 'Taille de police (pt)',
    opt9: '9 pt (discret)',
    opt11: '11 pt (standard)',
    opt14: '14 pt (grand)',
    skipCover: 'Ignorer la page de couverture (commencer la numérotation à la page 2)',
    numbering: 'Numérotation des pages...',
    addBtn: 'Ajouter les numéros de page et télécharger',
  },
  de: {
    errStart: 'Die Startseitenzahl muss eine ganze Zahl ab 1 sein.',
    stampedSuccess: (n: number, size: string) => `Seitenzahlen auf ${n} Seite(n) gestempelt (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Seite ${cur} von ${total}`,
    dropTitleEmpty: 'PDF-Datei zum Hinzufügen von Seitenzahlen auswählen',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} Seiten)`,
    dropSub: 'Fügt gestochen scharfe Vektor-Seitenlabels in Berichte, Verträge und Unterlagen ein',
    labelPos: 'Position',
    optBottomCenter: 'Unten mittig',
    optBottomRight: 'Unten rechts',
    optBottomLeft: 'Unten links',
    optTopRight: 'Oben rechts',
    labelFmt: 'Label-Format',
    optPageOf: 'Seite 1 von N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Startnummer',
    labelSize: 'Schriftgröße (pt)',
    opt9: '9 pt (dezent)',
    opt11: '11 pt (Standard)',
    opt14: '14 pt (groß)',
    skipCover: 'Deckblatt überspringen (Nummerierung ab Seite 2)',
    numbering: 'Seiten werden nummeriert...',
    addBtn: 'Seitenzahlen hinzufügen & herunterladen',
  },
  it: {
    errStart: 'Il numero della pagina iniziale deve essere un numero intero pari o superiore a 1.',
    stampedSuccess: (n: number, size: string) => `Numeri di pagina aggiunti su ${n} pagina/e (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Pagina ${cur} di ${total}`,
    dropTitleEmpty: 'Scegli un file PDF per aggiungere i numeri di pagina',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} pagine)`,
    dropSub: 'Inserisce etichette di pagina vettoriali nitide in report, contratti e fascicoli',
    labelPos: 'Posizione',
    optBottomCenter: 'In basso al centro',
    optBottomRight: 'In basso a destra',
    optBottomLeft: 'In basso a sinistra',
    optTopRight: 'In alto a destra',
    labelFmt: 'Formato etichetta',
    optPageOf: 'Pagina 1 di N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Numero iniziale',
    labelSize: 'Dimensione carattere (pt)',
    opt9: '9 pt (discreto)',
    opt11: '11 pt (standard)',
    opt14: '14 pt (grande)',
    skipCover: 'Salta la copertina (la numerazione inizia da pagina 2)',
    numbering: 'Numerazione delle pagine...',
    addBtn: 'Aggiungi numeri di pagina e scarica',
  },
  id: {
    errStart: 'Nomor halaman awal harus bilangan bulat 1 atau lebih.',
    stampedSuccess: (n: number, size: string) => `Nomor halaman dicap pada ${n} halaman (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Halaman ${cur} dari ${total}`,
    dropTitleEmpty: 'Pilih File PDF untuk Menambah Nomor Halaman',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} halaman)`,
    dropSub: 'Menyisipkan label halaman vektor yang tajam di seluruh laporan, kontrak, dan paket',
    labelPos: 'Posisi',
    optBottomCenter: 'Tengah Bawah',
    optBottomRight: 'Kanan Bawah',
    optBottomLeft: 'Kiri Bawah',
    optTopRight: 'Kanan Atas',
    labelFmt: 'Format Label',
    optPageOf: 'Halaman 1 dari N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Nomor Awal',
    labelSize: 'Ukuran Font (pt)',
    opt9: '9 pt (Halus)',
    opt11: '11 pt (Standar)',
    opt14: '14 pt (Besar)',
    skipCover: 'Lewati halaman sampul (mulai penomoran pada halaman 2)',
    numbering: 'Menomori Halaman...',
    addBtn: 'Tambah Nomor Halaman & Unduh',
  },
  ru: {
    errStart: 'Начальный номер страницы должен быть целым числом от 1 и выше.',
    stampedSuccess: (n: number, size: string) => `Номера страниц проставлены на ${n} стр. (${size}).`,
    pageOfLabel: (cur: number, total: number) => `Страница ${cur} из ${total}`,
    dropTitleEmpty: 'Выберите PDF-файл для добавления номеров страниц',
    dropTitleFile: (name: string, pages: number) => `${name} (${pages} стр.)`,
    dropSub: 'Вставляет чёткие векторные подписи страниц в отчёты, договоры и пакеты',
    labelPos: 'Положение',
    optBottomCenter: 'Внизу по центру',
    optBottomRight: 'Внизу справа',
    optBottomLeft: 'Внизу слева',
    optTopRight: 'Вверху справа',
    labelFmt: 'Формат подписи',
    optPageOf: 'Страница 1 из N',
    optSlash: '1 / N',
    optNumberOnly: '1, 2, 3...',
    labelStart: 'Начальный номер',
    labelSize: 'Размер шрифта (пт)',
    opt9: '9 пт (незаметный)',
    opt11: '11 пт (стандартный)',
    opt14: '14 пт (крупный)',
    skipCover: 'Пропустить обложку (начать нумерацию со страницы 2)',
    numbering: 'Нумерация страниц...',
    addBtn: 'Добавить номера страниц и скачать',
  },
};

type PositionOption = 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-right';
type FormatOption = 'page-of' | 'slash' | 'number-only';

export default function AddPdfPageNumbersTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const [position, setPosition] = useState<PositionOption>('bottom-center');
  const [labelFormat, setLabelFormat] = useState<FormatOption>('page-of');
  const [startNumber, setStartNumber] = useState('1');
  const [fontSize, setFontSize] = useState(11);
  const [skipFirstPage, setSkipFirstPage] = useState(false);

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
      setPdfBytes(bytes);
      setFileName(file.name);
      setPageCount(doc.getPageCount());
    } catch (err) {
      setPdfBytes(null);
      setError(formatFriendlyPdfError(err, file.name, locale));
    }
  };

  const handleApplyNumbers = async () => {
    if (!pdfBytes || pageCount === 0) return;
    const startVal = Number(startNumber);
    if (!Number.isInteger(startVal) || startVal < 1) {
      setError(s.errStart);
      return;
    }

    setError('');
    setStatusMessage('');
    setIsProcessing(true);

    try {
      const doc = await PDFDocument.load(pdfBytes);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      const totalNumbered = skipFirstPage ? Math.max(1, pages.length - 1) : pages.length;
      const margin = 28;

      pages.forEach((page, index) => {
        if (skipFirstPage && index === 0) return;

        const currentNum = startVal + (skipFirstPage ? index - 1 : index);
        const totalNum = startVal + totalNumbered - 1;

        let text = `${currentNum}`;
        if (labelFormat === 'page-of') {
          text = s.pageOfLabel(currentNum, totalNum);
        } else if (labelFormat === 'slash') {
          text = `${currentNum} / ${totalNum}`;
        }

        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);

        let x = (width - textWidth) / 2;
        let y = margin;

        if (position === 'bottom-right') {
          x = width - textWidth - margin;
          y = margin;
        } else if (position === 'bottom-left') {
          x = margin;
          y = margin;
        } else if (position === 'top-right') {
          x = width - textWidth - margin;
          y = height - margin - fontSize;
        }

        page.drawText(text, {
          x: Math.max(12, x),
          y: Math.max(12, y),
          size: fontSize,
          font,
          color: rgb(0.22, 0.25, 0.32),
        });
      });

      const outBytes = await doc.save();
      const baseName = fileName.replace(/\.pdf$/i, '') || 'document';
      triggerPdfDownload(outBytes, `${baseName}-numbered.pdf`);
      setStatusMessage(
        s.stampedSuccess(skipFirstPage ? Math.max(0, pageCount - 1) : pageCount, formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(formatFriendlyPdfError(err, fileName, locale));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="num-pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <FileUp className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {fileName ? s.dropTitleFile(fileName, pageCount) : s.dropTitleEmpty}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="num-pdf-input"
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
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="num-pos" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelPos}
              </label>
              <select
                id="num-pos"
                value={position}
                onChange={(e) => setPosition(e.target.value as PositionOption)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="bottom-center">{s.optBottomCenter}</option>
                <option value="bottom-right">{s.optBottomRight}</option>
                <option value="bottom-left">{s.optBottomLeft}</option>
                <option value="top-right">{s.optTopRight}</option>
              </select>
            </div>

            <div>
              <label htmlFor="num-fmt" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelFmt}
              </label>
              <select
                id="num-fmt"
                value={labelFormat}
                onChange={(e) => setLabelFormat(e.target.value as FormatOption)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="page-of">{s.optPageOf}</option>
                <option value="slash">{s.optSlash}</option>
                <option value="number-only">{s.optNumberOnly}</option>
              </select>
            </div>

            <div>
              <label htmlFor="num-start" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelStart}
              </label>
              <input
                id="num-start"
                type="number"
                min={1}
                value={startNumber}
                onChange={(e) => setStartNumber(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm tabular-nums"
              />
            </div>

            <div>
              <label htmlFor="num-size" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelSize}
              </label>
              <select
                id="num-size"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={9}>{s.opt9}</option>
                <option value={11}>{s.opt11}</option>
                <option value={14}>{s.opt14}</option>
              </select>
            </div>
          </div>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={skipFirstPage}
              onChange={(e) => setSkipFirstPage(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.skipCover}
          </label>

          <div>
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => void handleApplyNumbers()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
            >
              <Hash className="w-4 h-4" />
              {isProcessing ? s.numbering : s.addBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
