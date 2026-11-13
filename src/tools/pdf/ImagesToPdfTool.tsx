import { ArrowDown, ArrowUp, FileOutput, ImagePlus, Trash2 } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import { useEffect, useState } from 'react';
import { formatBytes, triggerPdfDownload } from './pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    errDecode: (name: string) => `Unable to decode image "${name}".`,
    errCanvas: 'Canvas 2D context unavailable.',
    errConvert: (name: string) => `Failed converting "${name}" to PNG.`,
    errNotImage: (name: string) => `"${name}" is not a supported image file (PNG, JPG, WebP).`,
    errRead: (name: string) => `Unable to read "${name}".`,
    errLoad: 'Unable to load image.',
    errEmpty: 'Add at least one image first.',
    errBuild: 'Failed converting images to PDF.',
    createdSuccess: (n: number, size: string) => `Created ${n}-page PDF (${size}) cleanly.`,
    dropTitle: 'Select PNG, JPG, or WebP Images',
    dropSub: 'Convert screenshots, scans, or photos into a single PDF locally',
    labelSize: 'PDF Page Size',
    optA4: 'A4 Portrait (210 × 297 mm)',
    optLetter: 'US Letter (8.5 × 11 in)',
    optFit: 'Exact Image Dimensions',
    labelMargin: 'Page Margin',
    optMargin0: 'No Margin (0 pt)',
    optMargin24: 'Standard Margin (24 pt)',
    optMargin48: 'Wide Margin (48 pt)',
    labelOut: 'Output Filename',
    moveUp: (name: string) => `Move ${name} up`,
    moveDown: (name: string) => `Move ${name} down`,
    removeFile: (name: string) => `Remove ${name}`,
    building: 'Generating PDF...',
    convertBtn: (n: number) => `Convert ${n} Images to PDF`,
  },
  es: {
    errDecode: (name: string) => `No se pudo decodificar la imagen «${name}».`,
    errCanvas: 'El contexto 2D del lienzo no está disponible.',
    errConvert: (name: string) => `No se pudo convertir «${name}» a PNG.`,
    errNotImage: (name: string) => `«${name}» no es un archivo de imagen compatible (PNG, JPG, WebP).`,
    errRead: (name: string) => `No se pudo leer «${name}».`,
    errLoad: 'No se pudo cargar la imagen.',
    errEmpty: 'Agregue al menos una imagen primero.',
    errBuild: 'No se pudieron convertir las imágenes a PDF.',
    createdSuccess: (n: number, size: string) => `Se creó un PDF de ${n} páginas (${size}) correctamente.`,
    dropTitle: 'Seleccione imágenes PNG, JPG o WebP',
    dropSub: 'Convierta capturas, escaneos o fotos en un solo PDF localmente',
    labelSize: 'Tamaño de página del PDF',
    optA4: 'A4 vertical (210 × 297 mm)',
    optLetter: 'Carta de EE. UU. (8.5 × 11 pulg.)',
    optFit: 'Dimensiones exactas de la imagen',
    labelMargin: 'Margen de página',
    optMargin0: 'Sin margen (0 pt)',
    optMargin24: 'Margen estándar (24 pt)',
    optMargin48: 'Margen amplio (48 pt)',
    labelOut: 'Nombre del archivo de salida',
    moveUp: (name: string) => `Mover ${name} hacia arriba`,
    moveDown: (name: string) => `Mover ${name} hacia abajo`,
    removeFile: (name: string) => `Eliminar ${name}`,
    building: 'Generando PDF...',
    convertBtn: (n: number) => `Convertir ${n} imágenes a PDF`,
  },
  pt: {
    errDecode: (name: string) => `Não foi possível decodificar a imagem "${name}".`,
    errCanvas: 'Contexto 2D do canvas indisponível.',
    errConvert: (name: string) => `Falha ao converter "${name}" para PNG.`,
    errNotImage: (name: string) => `"${name}" não é um arquivo de imagem compatível (PNG, JPG, WebP).`,
    errRead: (name: string) => `Não foi possível ler "${name}".`,
    errLoad: 'Não foi possível carregar a imagem.',
    errEmpty: 'Adicione pelo menos uma imagem primeiro.',
    errBuild: 'Falha ao converter imagens para PDF.',
    createdSuccess: (n: number, size: string) => `PDF de ${n} páginas criado (${size}) com sucesso.`,
    dropTitle: 'Selecione imagens PNG, JPG ou WebP',
    dropSub: 'Converta capturas, digitalizações ou fotos em um único PDF localmente',
    labelSize: 'Tamanho da página do PDF',
    optA4: 'A4 retrato (210 × 297 mm)',
    optLetter: 'Carta dos EUA (8.5 × 11 pol.)',
    optFit: 'Dimensões exatas da imagem',
    labelMargin: 'Margem da página',
    optMargin0: 'Sem margem (0 pt)',
    optMargin24: 'Margem padrão (24 pt)',
    optMargin48: 'Margem ampla (48 pt)',
    labelOut: 'Nome do arquivo de saída',
    moveUp: (name: string) => `Mover ${name} para cima`,
    moveDown: (name: string) => `Mover ${name} para baixo`,
    removeFile: (name: string) => `Remover ${name}`,
    building: 'Gerando PDF...',
    convertBtn: (n: number) => `Converter ${n} imagens para PDF`,
  },
  fr: {
    errDecode: (name: string) => `Impossible de décoder l’image « ${name} ».`,
    errCanvas: 'Contexte 2D du canvas indisponible.',
    errConvert: (name: string) => `Échec de la conversion de « ${name} » en PNG.`,
    errNotImage: (name: string) => `« ${name} » n’est pas un fichier image pris en charge (PNG, JPG, WebP).`,
    errRead: (name: string) => `Impossible de lire « ${name} ».`,
    errLoad: 'Impossible de charger l’image.',
    errEmpty: 'Ajoutez d’abord au moins une image.',
    errBuild: 'Échec de la conversion des images en PDF.',
    createdSuccess: (n: number, size: string) => `PDF de ${n} pages créé (${size}) avec succès.`,
    dropTitle: 'Sélectionnez des images PNG, JPG ou WebP',
    dropSub: 'Convertissez captures, scans ou photos en un seul PDF localement',
    labelSize: 'Taille de page du PDF',
    optA4: 'A4 portrait (210 × 297 mm)',
    optLetter: 'Lettre US (8,5 × 11 po)',
    optFit: 'Dimensions exactes de l’image',
    labelMargin: 'Marge de page',
    optMargin0: 'Sans marge (0 pt)',
    optMargin24: 'Marge standard (24 pt)',
    optMargin48: 'Marge large (48 pt)',
    labelOut: 'Nom du fichier de sortie',
    moveUp: (name: string) => `Déplacer ${name} vers le haut`,
    moveDown: (name: string) => `Déplacer ${name} vers le bas`,
    removeFile: (name: string) => `Supprimer ${name}`,
    building: 'Génération du PDF...',
    convertBtn: (n: number) => `Convertir ${n} images en PDF`,
  },
  de: {
    errDecode: (name: string) => `Das Bild "${name}" konnte nicht decodiert werden.`,
    errCanvas: 'Canvas-2D-Kontext nicht verfügbar.',
    errConvert: (name: string) => `Das Bild "${name}" konnte nicht in PNG umgewandelt werden.`,
    errNotImage: (name: string) => `"${name}" ist keine unterstützte Bilddatei (PNG, JPG, WebP).`,
    errRead: (name: string) => `"${name}" konnte nicht gelesen werden.`,
    errLoad: 'Bild konnte nicht geladen werden.',
    errEmpty: 'Fügen Sie zuerst mindestens ein Bild hinzu.',
    errBuild: 'Die Bilder konnten nicht in ein PDF umgewandelt werden.',
    createdSuccess: (n: number, size: string) => `PDF mit ${n} Seiten erfolgreich erstellt (${size}).`,
    dropTitle: 'PNG-, JPG- oder WebP-Bilder auswählen',
    dropSub: 'Screenshots, Scans oder Fotos lokal in ein einziges PDF umwandeln',
    labelSize: 'PDF-Seitengröße',
    optA4: 'A4 Hochformat (210 × 297 mm)',
    optLetter: 'US Letter (8,5 × 11 Zoll)',
    optFit: 'Exakte Bildmaße',
    labelMargin: 'Seitenrand',
    optMargin0: 'Kein Rand (0 pt)',
    optMargin24: 'Standardrand (24 pt)',
    optMargin48: 'Breiter Rand (48 pt)',
    labelOut: 'Dateiname der Ausgabe',
    moveUp: (name: string) => `${name} nach oben verschieben`,
    moveDown: (name: string) => `${name} nach unten verschieben`,
    removeFile: (name: string) => `${name} entfernen`,
    building: 'PDF wird erstellt...',
    convertBtn: (n: number) => `${n} Bilder in PDF umwandeln`,
  },
  it: {
    errDecode: (name: string) => `Impossibile decodificare l’immagine "${name}".`,
    errCanvas: 'Contesto Canvas 2D non disponibile.',
    errConvert: (name: string) => `Conversione di "${name}" in PNG non riuscita.`,
    errNotImage: (name: string) => `"${name}" non è un file immagine supportato (PNG, JPG, WebP).`,
    errRead: (name: string) => `Impossibile leggere "${name}".`,
    errLoad: 'Impossibile caricare il file immagine.',
    errEmpty: 'Carica prima almeno un file immagine.',
    errBuild: 'Conversione delle immagini in PDF non riuscita.',
    createdSuccess: (n: number, size: string) => `PDF di ${n} pagine creato correttamente (${size}).`,
    dropTitle: 'Seleziona immagini PNG, JPG o WebP',
    dropSub: 'Converti screenshot, scansioni o foto in un unico PDF, in locale',
    labelSize: 'Dimensioni pagina PDF',
    optA4: 'A4 verticale (210 × 297 mm)',
    optLetter: 'Lettera USA (8,5 × 11 pollici)',
    optFit: 'Dimensioni immagine esatte',
    labelMargin: 'Margine pagina',
    optMargin0: 'Nessun margine (0 pt)',
    optMargin24: 'Margine standard (24 pt)',
    optMargin48: 'Margine ampio (48 pt)',
    labelOut: 'Nome file di output',
    moveUp: (name: string) => `Sposta ${name} in alto`,
    moveDown: (name: string) => `Sposta ${name} in basso`,
    removeFile: (name: string) => `Rimuovi ${name}`,
    building: 'Generazione del PDF...',
    convertBtn: (n: number) => `Converti ${n} immagini in PDF`,
  },
  id: {
    errDecode: (name: string) => `Tidak dapat mendecode gambar "${name}".`,
    errCanvas: 'Konteks Canvas 2D tidak tersedia.',
    errConvert: (name: string) => `Gagal mengonversi "${name}" ke PNG.`,
    errNotImage: (name: string) => `"${name}" bukan file gambar yang didukung (PNG, JPG, WebP).`,
    errRead: (name: string) => `Tidak dapat membaca "${name}".`,
    errLoad: 'Tidak dapat memuat gambar.',
    errEmpty: 'Tambahkan setidaknya satu gambar terlebih dahulu.',
    errBuild: 'Gagal mengonversi gambar ke PDF.',
    createdSuccess: (n: number, size: string) => `PDF ${n} halaman (${size}) berhasil dibuat dengan bersih.`,
    dropTitle: 'Pilih Gambar PNG, JPG, atau WebP',
    dropSub: 'Konversi screenshot, pindaian, atau foto menjadi satu PDF secara lokal',
    labelSize: 'Ukuran Halaman PDF',
    optA4: 'A4 Potret (210 × 297 mm)',
    optLetter: 'US Letter (8,5 × 11 in)',
    optFit: 'Dimensi Gambar Tepat',
    labelMargin: 'Margin Halaman',
    optMargin0: 'Tanpa Margin (0 pt)',
    optMargin24: 'Margin Standar (24 pt)',
    optMargin48: 'Margin Lebar (48 pt)',
    labelOut: 'Nama File Hasil',
    moveUp: (name: string) => `Pindahkan ${name} ke atas`,
    moveDown: (name: string) => `Pindahkan ${name} ke bawah`,
    removeFile: (name: string) => `Hapus ${name}`,
    building: 'Membuat PDF...',
    convertBtn: (n: number) => `Konversi ${n} Gambar ke PDF`,
  },
  ru: {
    errDecode: (name: string) => `Не удаётся декодировать изображение «${name}».`,
    errCanvas: 'Контекст Canvas 2D недоступен.',
    errConvert: (name: string) => `Не удалось преобразовать «${name}» в PNG.`,
    errNotImage: (name: string) => `«${name}» — неподдерживаемый файл изображения (PNG, JPG, WebP).`,
    errRead: (name: string) => `Не удаётся прочитать «${name}».`,
    errLoad: 'Не удаётся загрузить изображение.',
    errEmpty: 'Сначала добавьте хотя бы одно изображение.',
    errBuild: 'Не удалось преобразовать изображения в PDF.',
    createdSuccess: (n: number, size: string) => `PDF на ${n} стр. (${size}) успешно создан.`,
    dropTitle: 'Выберите изображения PNG, JPG или WebP',
    dropSub: 'Преобразуйте скриншоты, сканы или фото в один PDF локально',
    labelSize: 'Размер страницы PDF',
    optA4: 'A4 книжная (210 × 297 мм)',
    optLetter: 'US Letter (8,5 × 11 дюймов)',
    optFit: 'Точные размеры изображения',
    labelMargin: 'Поля страницы',
    optMargin0: 'Без полей (0 пт)',
    optMargin24: 'Стандартные поля (24 пт)',
    optMargin48: 'Широкие поля (48 пт)',
    labelOut: 'Имя выходного файла',
    moveUp: (name: string) => `Переместить ${name} вверх`,
    moveDown: (name: string) => `Переместить ${name} вниз`,
    removeFile: (name: string) => `Удалить ${name}`,
    building: 'Создание PDF...',
    convertBtn: (n: number) => `Преобразовать ${n} изображений в PDF`,
  },
};

type PageSizeOption = 'fit' | 'a4' | 'letter';

interface QueuedImage {
  id: number;
  file: File;
  previewUrl: string;
  width: number;
  height: number;
}

export default function ImagesToPdfTool() {
  const { locale } = useLocale();
  const s = STRINGS[locale];
  const [images, setImages] = useState<QueuedImage[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeOption>('a4');
  const [marginPt, setMarginPt] = useState(24);
  const [outputName, setOutputName] = useState('images-bundle.pdf');
  const [isBuilding, setIsBuilding] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fileToPngBytesViaCanvas = async (file: File): Promise<Uint8Array> => {
    const bitmapUrl = URL.createObjectURL(file);
    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.onerror = () => reject(new Error(s.errDecode(file.name)));
        el.src = bitmapUrl;
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error(s.errCanvas);
      ctx.drawImage(img, 0, 0);
      const pngBlob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!pngBlob) throw new Error(s.errConvert(file.name));
      return new Uint8Array(await pngBlob.arrayBuffer());
    } finally {
      URL.revokeObjectURL(bitmapUrl);
    }
  };

  const handleSelectImages = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setError('');
    setStatusMessage('');

    const nextItems: QueuedImage[] = [];
    let nextId = images.reduce((m, i) => Math.max(m, i.id), 0) + 1;

    for (const file of Array.from(fileList)) {
      if (!file.type.startsWith('image/')) {
        setError(s.errNotImage(file.name));
        continue;
      }
      const previewUrl = URL.createObjectURL(file);
      try {
        const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
          const el = new Image();
          el.onload = () => resolve({ w: el.naturalWidth, h: el.naturalHeight });
          el.onerror = () => reject(new Error(s.errRead(file.name)));
          el.src = previewUrl;
        });
        nextItems.push({
          id: nextId++,
          file,
          previewUrl,
          width: dims.w,
          height: dims.h,
        });
      } catch (err) {
        URL.revokeObjectURL(previewUrl);
        setError(err instanceof Error ? err.message : s.errLoad);
      }
    }

    setImages((prev) => [...prev, ...nextItems]);
  };

  const moveImage = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= images.length) return;
    const copy = [...images];
    const [item] = copy.splice(index, 1);
    copy.splice(target, 0, item);
    setImages(copy);
  };

  const removeImage = (id: number) => {
    const target = images.find((i) => i.id === id);
    if (target) URL.revokeObjectURL(target.previewUrl);
    setImages(images.filter((i) => i.id !== id));
  };

  const handleBuildPdf = async () => {
    if (images.length === 0) {
      setError(s.errEmpty);
      return;
    }
    setError('');
    setStatusMessage('');
    setIsBuilding(true);

    try {
      const pdfDoc = await PDFDocument.create();

      for (const item of images) {
        const rawBytes = new Uint8Array(await item.file.arrayBuffer());
        const isJpeg = item.file.type === 'image/jpeg' || /\.jpe?g$/i.test(item.file.name);
        const isPng = item.file.type === 'image/png' || /\.png$/i.test(item.file.name);

        const embedded = isJpeg
          ? await pdfDoc.embedJpg(rawBytes)
          : isPng
          ? await pdfDoc.embedPng(rawBytes)
          : await pdfDoc.embedPng(await fileToPngBytesViaCanvas(item.file));

        if (pageSize === 'fit') {
          const pw = embedded.width + marginPt * 2;
          const ph = embedded.height + marginPt * 2;
          const page = pdfDoc.addPage([pw, ph]);
          page.drawImage(embedded, {
            x: marginPt,
            y: marginPt,
            width: embedded.width,
            height: embedded.height,
          });
        } else {
          // A4 = 595.28 x 841.89 pt, US Letter = 612 x 792 pt
          const pageW = pageSize === 'a4' ? 595.28 : 612;
          const pageH = pageSize === 'a4' ? 841.89 : 792;
          const page = pdfDoc.addPage([pageW, pageH]);
          const maxW = Math.max(10, pageW - marginPt * 2);
          const maxH = Math.max(10, pageH - marginPt * 2);
          const scale = Math.min(maxW / embedded.width, maxH / embedded.height);
          const drawW = embedded.width * scale;
          const drawH = embedded.height * scale;
          page.drawImage(embedded, {
            x: (pageW - drawW) / 2,
            y: (pageH - drawH) / 2,
            width: drawW,
            height: drawH,
          });
        }
      }

      const outBytes = await pdfDoc.save();
      triggerPdfDownload(outBytes, outputName.trim() || 'images-bundle.pdf');
      setStatusMessage(
        s.createdSuccess(images.length, formatBytes(outBytes.byteLength, locale))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : s.errBuild);
    } finally {
      setIsBuilding(false);
    }
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="img2pdf-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {s.dropTitle}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.dropSub}
        </span>
        <input
          id="img2pdf-input"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            void handleSelectImages(e.target.files);
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

      {images.length > 0 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="img2pdf-size" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelSize}
              </label>
              <select
                id="img2pdf-size"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as PageSizeOption)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="a4">{s.optA4}</option>
                <option value="letter">{s.optLetter}</option>
                <option value="fit">{s.optFit}</option>
              </select>
            </div>

            <div>
              <label htmlFor="img2pdf-margin" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelMargin}
              </label>
              <select
                id="img2pdf-margin"
                value={marginPt}
                onChange={(e) => setMarginPt(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value={0}>{s.optMargin0}</option>
                <option value={24}>{s.optMargin24}</option>
                <option value={48}>{s.optMargin48}</option>
              </select>
            </div>

            <div>
              <label htmlFor="img2pdf-name" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.labelOut}
              </label>
              <input
                id="img2pdf-name"
                type="text"
                value={outputName}
                onChange={(e) => setOutputName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
              />
            </div>
          </div>

          <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {images.map((item, idx) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.previewUrl}
                    alt={item.file.name}
                    className="h-12 w-12 rounded-md border border-slate-200 object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">
                      {idx + 1}. {item.file.name}
                    </div>
                    <div className="text-xs text-slate-500 font-mono tabular-nums">
                      {item.width} × {item.height} px · {formatBytes(item.file.size, locale)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveImage(idx, -1)}
                    aria-label={s.moveUp(item.file.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === images.length - 1}
                    onClick={() => moveImage(idx, 1)}
                    aria-label={s.moveDown(item.file.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeImage(item.id)}
                    aria-label={s.removeFile(item.file.name)}
                    className="rounded-md border border-slate-300 bg-white p-1.5 text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            disabled={isBuilding}
            onClick={() => void handleBuildPdf()}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
          >
            <FileOutput className="w-4 h-4" />
            {isBuilding ? s.building : s.convertBtn(images.length)}
          </button>
        </div>
      )}
    </div>
  );
}
