import { Download, ImagePlus } from 'lucide-react';
import { useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    encodeMode: 'Image → Base64 Data URI',
    decodeMode: 'Base64 → Image Preview',
    selectImageError: 'Select an image file (PNG, JPG, WebP, SVG, GIF, ICO).',
    unableToRead: 'Unable to read "{name}".',
    chooseImage: 'Choose an Image File to Encode',
    fileWithSize: '{name} ({size})',
    generatesNote: 'Generates Data URI, raw Base64, HTML <img>, and CSS background snippets',
    binarySizeLabel: 'Binary File Size',
    base64SizeLabel: 'Base64 URI Size (~33% larger)',
    fullDataUriLabel: 'Full Data URI',
    copyDataUri: 'Copy Data URI',
    copyRawBase64: 'Copy Raw Base64',
    copyImg: 'Copy <img>',
    copyCss: 'Copy CSS',
    encodedAria: 'Encoded Base64 Data URI',
    encodedAlt: 'Encoded preview',
    pasteLabel: 'Paste Base64 Image String or Data URI',
    pastePlaceholder: 'data:image/png;base64,iVBORw0KGgo... or raw base64 string',
    invalidPayload: 'The pasted Base64 text is not a valid encoded image payload.',
    decodedAlt: 'Decoded Base64 preview',
    downloadExt: 'Download .{ext}',
  },
  es: {
    encodeMode: 'Imagen → URI de datos Base64',
    decodeMode: 'Base64 → vista previa de imagen',
    selectImageError: 'Selecciona un archivo de imagen (PNG, JPG, WebP, SVG, GIF, ICO).',
    unableToRead: 'No se pudo leer "{name}".',
    chooseImage: 'Elige un archivo de imagen para codificar',
    fileWithSize: '{name} ({size})',
    generatesNote: 'Genera URI de datos, Base64 sin procesar, fragmentos HTML <img> y de fondo CSS',
    binarySizeLabel: 'Tamaño del archivo binario',
    base64SizeLabel: 'Tamaño del URI Base64 (~33 % más grande)',
    fullDataUriLabel: 'URI de datos completo',
    copyDataUri: 'Copiar URI de datos',
    copyRawBase64: 'Copiar Base64 sin procesar',
    copyImg: 'Copiar <img>',
    copyCss: 'Copiar CSS',
    encodedAria: 'URI de datos Base64 codificado',
    encodedAlt: 'Vista previa codificada',
    pasteLabel: 'Pega una cadena de imagen Base64 o un URI de datos',
    pastePlaceholder: 'data:image/png;base64,iVBORw0KGgo... o cadena base64 sin formato',
    invalidPayload: 'El texto Base64 pegado no es una carga útil de imagen codificada válida.',
    decodedAlt: 'Vista previa Base64 decodificada',
    downloadExt: 'Descargar .{ext}',
  },
  pt: {
    encodeMode: 'Imagem → URI de dados Base64',
    decodeMode: 'Base64 → pré-visualização de imagem',
    selectImageError: 'Selecione um arquivo de imagem (PNG, JPG, WebP, SVG, GIF, ICO).',
    unableToRead: 'Não foi possível ler "{name}".',
    chooseImage: 'Escolha um arquivo de imagem para codificar',
    fileWithSize: '{name} ({size})',
    generatesNote: 'Gera URI de dados, Base64 puro, trechos HTML <img> e de plano de fundo CSS',
    binarySizeLabel: 'Tamanho do arquivo binário',
    base64SizeLabel: 'Tamanho do URI Base64 (~33% maior)',
    fullDataUriLabel: 'URI de dados completo',
    copyDataUri: 'Copiar URI de dados',
    copyRawBase64: 'Copiar Base64 puro',
    copyImg: 'Copiar <img>',
    copyCss: 'Copiar CSS',
    encodedAria: 'URI de dados Base64 codificado',
    encodedAlt: 'Pré-visualização codificada',
    pasteLabel: 'Cole uma string de imagem Base64 ou URI de dados',
    pastePlaceholder: 'data:image/png;base64,iVBORw0KGgo... ou string base64 pura',
    invalidPayload: 'O texto Base64 colado não é uma carga de imagem codificada válida.',
    decodedAlt: 'Pré-visualização Base64 decodificada',
    downloadExt: 'Baixar .{ext}',
  },
  fr: {
    encodeMode: 'Image → URI de données Base64',
    decodeMode: 'Base64 → aperçu de l\'image',
    selectImageError: 'Sélectionnez un fichier image (PNG, JPG, WebP, SVG, GIF, ICO).',
    unableToRead: 'Impossible de lire « {name} ».',
    chooseImage: 'Choisissez un fichier image à encoder',
    fileWithSize: '{name} ({size})',
    generatesNote: 'Génère un URI de données, du Base64 brut, des extraits HTML <img> et d\'arrière-plan CSS',
    binarySizeLabel: 'Taille du fichier binaire',
    base64SizeLabel: 'Taille de l\'URI Base64 (~33 % plus grande)',
    fullDataUriLabel: 'URI de données complet',
    copyDataUri: 'Copier l\'URI de données',
    copyRawBase64: 'Copier le Base64 brut',
    copyImg: 'Copier <img>',
    copyCss: 'Copier le CSS',
    encodedAria: 'URI de données Base64 encodé',
    encodedAlt: 'Aperçu encodé',
    pasteLabel: 'Collez une chaîne d\'image Base64 ou un URI de données',
    pastePlaceholder: 'data:image/png;base64,iVBORw0KGgo... ou chaîne base64 brute',
    invalidPayload: 'Le texte Base64 collé n\'est pas une charge d\'image encodée valide.',
    decodedAlt: 'Aperçu Base64 décodé',
    downloadExt: 'Télécharger le .{ext}',
  },
};

type Mode = 'encode' | 'decode';

export default function ImageToBase64Tool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [mode, setMode] = useState<Mode>('encode');
  const [fileName, setFileName] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [dataUri, setDataUri] = useState('');
  const [rawBase64, setRawBase64] = useState('');
  const [decodeInput, setDecodeInput] = useState('');
  const [decodeError, setDecodeError] = useState('');
  const [error, setError] = useState('');

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(s.selectImageError);
      return;
    }
    setError('');
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      const commaIdx = result.indexOf(',');
      setFileName(file.name);
      setOriginalSize(file.size);
      setDataUri(result);
      setRawBase64(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = () => setError(s.unableToRead.replace('{name}', file.name));
    reader.readAsDataURL(file);
  };

  const normalizedDecodeUri = (() => {
    const trimmed = decodeInput.trim();
    if (!trimmed) return '';
    if (/^data:image\/[a-z0-9.+-]+;base64,/i.test(trimmed)) {
      return trimmed;
    }
    const clean = trimmed.replace(/\s+/g, '');
    return `data:image/png;base64,${clean}`;
  })();

  const decodedExt = (() => {
    const m = /^data:image\/([a-z0-9.+-]+);base64,/i.exec(normalizedDecodeUri);
    if (!m) return 'png';
    const sub = m[1].toLowerCase();
    if (sub === 'jpeg') return 'jpg';
    if (sub.startsWith('svg')) return 'svg';
    return sub;
  })();

  const imgTagSnippet = dataUri ? `<img src="${dataUri}" alt="${fileName || 'image'}" />` : '';
  const cssSnippet = dataUri ? `background-image: url('${dataUri}');` : '';

  return (
    <div className="space-y-6">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode('encode')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'encode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.encodeMode}
        </button>
        <button
          type="button"
          onClick={() => setMode('decode')}
          className={`rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium cursor-pointer ${
            mode === 'decode' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
          }`}
        >
          {s.decodeMode}
        </button>
      </div>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {mode === 'encode' ? (
        <div className="space-y-5">
          <label
            htmlFor="i2b-input"
            className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
          >
            <ImagePlus className="w-8 h-8 text-indigo-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">
              {fileName
                ? s.fileWithSize.replace('{name}', fileName).replace('{size}', formatBytes(originalSize, locale))
                : s.chooseImage}
            </span>
            <span className="mt-1 text-xs text-slate-500">
              {s.generatesNote}
            </span>
            <input
              id="i2b-input"
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleFile(e.target.files?.[0]);
                e.target.value = '';
              }}
              className="sr-only"
            />
          </label>

          {dataUri && (
            <div className="space-y-4">
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 tabular-nums text-xs sm:text-sm">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500">{s.binarySizeLabel}</dt>
                  <dd className="mt-1 font-mono font-bold text-slate-900">{formatBytes(originalSize, locale)}</dd>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <dt className="text-xs text-slate-500">{s.base64SizeLabel}</dt>
                  <dd className="mt-1 font-mono font-bold text-indigo-700">{formatBytes(dataUri.length, locale)}</dd>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2 flex items-center justify-center col-span-2 sm:col-span-1">
                  <img src={dataUri} alt={s.encodedAlt} className="max-h-14 max-w-full object-contain" />
                </div>
              </dl>

              <div className="space-y-3">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-slate-700">{s.fullDataUriLabel}</span>
                    <div className="flex flex-wrap gap-2">
                      <CopyButton text={dataUri} label={s.copyDataUri} copiedLabel={t.common.copied} />
                      <CopyButton text={rawBase64} label={s.copyRawBase64} copiedLabel={t.common.copied} />
                      <CopyButton text={imgTagSnippet} label={s.copyImg} copiedLabel={t.common.copied} />
                      <CopyButton text={cssSnippet} label={s.copyCss} copiedLabel={t.common.copied} />
                    </div>
                  </div>
                  <textarea
                    aria-label={s.encodedAria}
                    rows={5}
                    readOnly
                    value={dataUri}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-900"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label htmlFor="b2i-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
              {s.pasteLabel}
            </label>
            <textarea
              id="b2i-input"
              rows={5}
              value={decodeInput}
              onChange={(e) => {
                setDecodeInput(e.target.value);
                setDecodeError('');
              }}
              placeholder={s.pastePlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs"
            />
          </div>

          {decodeError && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {decodeError}
            </div>
          )}

          {normalizedDecodeUri && !decodeError && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-2 flex items-center justify-center min-h-24 min-w-24 max-w-xs">
                <img
                  src={normalizedDecodeUri}
                  alt={s.decodedAlt}
                  onLoad={() => setDecodeError('')}
                  onError={() =>
                    setDecodeError(s.invalidPayload)
                  }
                  className="max-h-48 max-w-full object-contain"
                />
              </div>
              <a
                href={normalizedDecodeUri}
                download={`decoded-image.${decodedExt}`}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                <Download className="w-4 h-4" />
                {s.downloadExt.replace('{ext}', decodedExt.toUpperCase())}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
