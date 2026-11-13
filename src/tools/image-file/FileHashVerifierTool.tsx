import { CheckCircle2, FileCheck2, Upload, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { formatBytes } from '../pdf/pdfUtils';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    chooseFile: 'Choose Any File to Compute Cryptographic Checksums',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Hashed locally via Web Crypto API · Zero file upload (recommended under 500 MB)',
    cryptoUnavailable: 'Web Crypto SubtleCrypto API is unavailable in this browser context.',
    hashFailed: 'Failed to hash file in browser memory (files over several hundred MB may exceed RAM limits).',
    computing: 'Computing SHA-1, SHA-256, SHA-384, and SHA-512 checksums locally...',
    fileLabel: 'File:',
    sizeLabel: 'Size:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Modified:',
    bytesSuffix: '{n} bytes',
    downloadSha256: 'Download .sha256',
    sha256Label: 'SHA-256 (Recommended)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (Legacy compatibility only)',
    verifyLabel: 'Verify Against Expected Checksum',
    expectedPlaceholder:
      'Paste published SHA-256, SHA-512, SHA-384, or SHA-1 checksum (or .sha256sum line)...',
    verified: 'Checksum Verified! File matches the expected {algorithm} digest exactly.',
    mismatch: 'Checksum Mismatch! None of the computed digests match your expected value.',
  },
  es: {
    chooseFile: 'Elige cualquier archivo para calcular sumas de verificación criptográficas',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Se calcula localmente con la API Web Crypto · Sin subir archivos (se recomienda menos de 500 MB)',
    cryptoUnavailable: 'La API Web Crypto SubtleCrypto no está disponible en este contexto del navegador.',
    hashFailed: 'No se pudo calcular el hash del archivo en la memoria del navegador (los archivos de varios cientos de MB pueden superar los límites de RAM).',
    computing: 'Calculando sumas de verificación SHA-1, SHA-256, SHA-384 y SHA-512 localmente...',
    fileLabel: 'Archivo:',
    sizeLabel: 'Tamaño:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Modificado:',
    bytesSuffix: '{n} bytes',
    downloadSha256: 'Descargar .sha256',
    sha256Label: 'SHA-256 (recomendado)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (solo para compatibilidad heredada)',
    verifyLabel: 'Verificar con la suma de verificación esperada',
    expectedPlaceholder:
      'Pega la suma de verificación SHA-256, SHA-512, SHA-384 o SHA-1 publicada (o una línea .sha256sum)...',
    verified: '¡Suma de verificación confirmada! El archivo coincide exactamente con el resumen {algorithm} esperado.',
    mismatch: '¡La suma de verificación no coincide! Ninguno de los resúmenes calculados coincide con el valor esperado.',
  },
  pt: {
    chooseFile: 'Escolha qualquer arquivo para calcular somas de verificação criptográficas',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Calculado localmente via Web Crypto API · Nenhum upload de arquivo (recomendado abaixo de 500 MB)',
    cryptoUnavailable: 'A API Web Crypto SubtleCrypto não está disponível neste contexto do navegador.',
    hashFailed: 'Falha ao calcular o hash do arquivo na memória do navegador (arquivos com várias centenas de MB podem exceder os limites de RAM).',
    computing: 'Calculando somas de verificação SHA-1, SHA-256, SHA-384 e SHA-512 localmente...',
    fileLabel: 'Arquivo:',
    sizeLabel: 'Tamanho:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Modificado:',
    bytesSuffix: '{n} bytes',
    downloadSha256: 'Baixar .sha256',
    sha256Label: 'SHA-256 (recomendado)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (somente compatibilidade legada)',
    verifyLabel: 'Verificar com a soma de verificação esperada',
    expectedPlaceholder: 'Cole a soma de verificação SHA-256, SHA-512, SHA-384 ou SHA-1 publicada (ou uma linha .sha256sum)...',
    verified: 'Soma de verificação confirmada! O arquivo corresponde exatamente ao resumo {algorithm} esperado.',
    mismatch: 'Soma de verificação divergente! Nenhum dos resumos calculados corresponde ao valor esperado.',
  },
  fr: {
    chooseFile: 'Choisissez n\'importe quel fichier pour calculer des sommes de contrôle cryptographiques',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Calculé localement via l\'API Web Crypto · Aucun envoi de fichier (recommandé en dessous de 500 Mo)',
    cryptoUnavailable: 'L\'API Web Crypto SubtleCrypto n\'est pas disponible dans ce contexte de navigateur.',
    hashFailed: 'Échec du calcul du hash du fichier dans la mémoire du navigateur (les fichiers de plusieurs centaines de Mo peuvent dépasser les limites de RAM).',
    computing: 'Calcul des sommes de contrôle SHA-1, SHA-256, SHA-384 et SHA-512 localement...',
    fileLabel: 'Fichier :',
    sizeLabel: 'Taille :',
    mimeLabel: 'MIME :',
    modifiedLabel: 'Modifié :',
    bytesSuffix: '{n} octets',
    downloadSha256: 'Télécharger le .sha256',
    sha256Label: 'SHA-256 (recommandé)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (compatibilité héritée uniquement)',
    verifyLabel: 'Vérifier par rapport à la somme de contrôle attendue',
    expectedPlaceholder: 'Collez la somme de contrôle SHA-256, SHA-512, SHA-384 ou SHA-1 publiée (ou une ligne .sha256sum)...',
    verified: 'Somme de contrôle vérifiée ! Le fichier correspond exactement à l\'empreinte {algorithm} attendue.',
    mismatch: 'Somme de contrôle non concordante ! Aucune des empreintes calculées ne correspond à la valeur attendue.',
  },
  de: {
    chooseFile: 'Beliebige Datei zum Berechnen kryptografischer Prüfsummen auswählen',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Lokal gehasht via Web-Crypto-API · Kein Datei-Upload (empfohlen unter 500 MB)',
    cryptoUnavailable: 'Die Web-Crypto-SubtleCrypto-API ist in diesem Browserkontext nicht verfügbar.',
    hashFailed: 'Datei konnte im Browser-Arbeitsspeicher nicht gehasht werden (Dateien über mehrere hundert MB können die RAM-Grenzen überschreiten).',
    computing: 'SHA-1-, SHA-256-, SHA-384- und SHA-512-Prüfsummen werden lokal berechnet...',
    fileLabel: 'Datei:',
    sizeLabel: 'Größe:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Geändert:',
    bytesSuffix: '{n} Byte',
    downloadSha256: '.sha256 herunterladen',
    sha256Label: 'SHA-256 (empfohlen)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (nur Legacy-Kompatibilität)',
    verifyLabel: 'Mit erwarteter Prüfsumme abgleichen',
    expectedPlaceholder:
      'Veröffentlichte SHA-256-, SHA-512-, SHA-384- oder SHA-1-Prüfsumme einfügen (oder .sha256sum-Zeile)...',
    verified: 'Prüfsumme verifiziert! Die Datei stimmt exakt mit dem erwarteten {algorithm}-Digest überein.',
    mismatch: 'Prüfsummen stimmen nicht überein! Keiner der berechneten Digests entspricht Ihrem erwarteten Wert.',
  },
  it: {
    chooseFile: 'Scegli un file qualsiasi per calcolare checksum crittografici',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Hash calcolato in locale con Web Crypto API · Nessun caricamento di file (consigliato sotto 500 MB)',
    cryptoUnavailable: 'La Web Crypto SubtleCrypto API non è disponibile in questo contesto browser.',
    hashFailed: 'Calcolo hash del file nella memoria del browser non riuscito (i file di diverse centinaia di MB possono superare i limiti di RAM).',
    computing: 'Calcolo locale dei checksum SHA-1, SHA-256, SHA-384 e SHA-512...',
    fileLabel: 'File:',
    sizeLabel: 'Dimensione:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Modificato:',
    bytesSuffix: '{n} byte',
    downloadSha256: 'Scarica .sha256',
    sha256Label: 'SHA-256 (consigliato)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (solo compatibilità legacy)',
    verifyLabel: 'Verifica con il checksum atteso',
    expectedPlaceholder:
      'Incolla il checksum SHA-256, SHA-512, SHA-384 o SHA-1 pubblicato (o una riga .sha256sum)...',
    verified: 'Checksum verificato! Il file corrisponde esattamente al digest {algorithm} atteso.',
    mismatch: 'Checksum non corrispondente! Nessuno dei digest calcolati corrisponde al valore atteso.',
  },
  id: {
    chooseFile: 'Pilih File Apa Pun untuk Menghitung Checksum Kriptografi',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Di-hash secara lokal melalui Web Crypto API · Tanpa unggahan file (disarankan di bawah 500 MB)',
    cryptoUnavailable: 'API Web Crypto SubtleCrypto tidak tersedia dalam konteks browser ini.',
    hashFailed: 'Gagal meng-hash file di memori browser (file di atas beberapa ratus MB mungkin melebihi batas RAM).',
    computing: 'Menghitung checksum SHA-1, SHA-256, SHA-384, dan SHA-512 secara lokal...',
    fileLabel: 'File:',
    sizeLabel: 'Ukuran:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Diubah:',
    bytesSuffix: '{n} byte',
    downloadSha256: 'Unduh .sha256',
    sha256Label: 'SHA-256 (Disarankan)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (Hanya untuk kompatibilitas lama)',
    verifyLabel: 'Verifikasi dengan Checksum yang Diharapkan',
    expectedPlaceholder:
      'Tempel checksum SHA-256, SHA-512, SHA-384, atau SHA-1 yang dipublikasikan (atau baris .sha256sum)...',
    verified: 'Checksum Terverifikasi! File cocok persis dengan digest {algorithm} yang diharapkan.',
    mismatch: 'Checksum Tidak Cocok! Tidak ada digest yang dihitung yang cocok dengan nilai yang Anda harapkan.',
  },
  ru: {
    chooseFile: 'Выберите любой файл для вычисления криптографических контрольных сумм',
    fileWithSize: '{name} ({size})',
    hashedLocally: 'Хешировано локально через Web Crypto API · Без загрузки файла (рекомендуется до 500 МБ)',
    cryptoUnavailable: 'API Web Crypto SubtleCrypto недоступен в этом контексте браузера.',
    hashFailed: 'Не удалось хешировать файл в памяти браузера (файлы больше нескольких сотен МБ могут превышать лимиты ОЗУ).',
    computing: 'Локальное вычисление контрольных сумм SHA-1, SHA-256, SHA-384 и SHA-512...',
    fileLabel: 'Файл:',
    sizeLabel: 'Размер:',
    mimeLabel: 'MIME:',
    modifiedLabel: 'Изменён:',
    bytesSuffix: '{n} байт',
    downloadSha256: 'Скачать .sha256',
    sha256Label: 'SHA-256 (рекомендуется)',
    sha512Label: 'SHA-512',
    sha384Label: 'SHA-384',
    sha1Label: 'SHA-1 (только для обратной совместимости)',
    verifyLabel: 'Проверить по ожидаемой контрольной сумме',
    expectedPlaceholder:
      'Вставьте опубликованную контрольную сумму SHA-256, SHA-512, SHA-384 или SHA-1 (или строку .sha256sum)...',
    verified: 'Контрольная сумма подтверждена! Файл точно соответствует ожидаемому дайджесту {algorithm}.',
    mismatch: 'Несовпадение контрольной суммы! Ни один из вычисленных дайджестов не совпадает с ожидаемым значением.',
  },
};

interface FileHashes {
  sha256: string;
  sha512: string;
  sha384: string;
  sha1: string;
}

function bufferToHex(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, '0');
  }
  return hex;
}

export default function FileHashVerifierTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [file, setFile] = useState<File | null>(null);
  const [hashes, setHashes] = useState<FileHashes | null>(null);
  const [expectedInput, setExpectedInput] = useState('');
  const [isHashing, setIsHashing] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (picked: File | undefined) => {
    if (!picked) return;
    setError('');
    setHashes(null);

    if (!globalThis.crypto?.subtle) {
      setError(s.cryptoUnavailable);
      return;
    }

    setFile(picked);
    setIsHashing(true);
    try {
      const arrayBuffer = await picked.arrayBuffer();
      const [s256, s512, s384, s1] = await Promise.all([
        crypto.subtle.digest('SHA-256', arrayBuffer),
        crypto.subtle.digest('SHA-512', arrayBuffer),
        crypto.subtle.digest('SHA-384', arrayBuffer),
        crypto.subtle.digest('SHA-1', arrayBuffer),
      ]);

      setHashes({
        sha256: bufferToHex(s256),
        sha512: bufferToHex(s512),
        sha384: bufferToHex(s384),
        sha1: bufferToHex(s1),
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : s.hashFailed
      );
    } finally {
      setIsHashing(false);
    }
  };

  // Support lines pasted from standard `.sha256sum` files like `<hash>  filename.iso`
  const normalizedExpected = useMemo(() => {
    const trimmed = expectedInput.trim();
    if (!trimmed) return '';
    const firstToken = trimmed.split(/\s+/)[0];
    return firstToken.toLowerCase();
  }, [expectedInput]);

  const matchResult = useMemo(() => {
    if (!hashes || !normalizedExpected) return null;
    if (normalizedExpected === hashes.sha256) return { matched: true, algorithm: 'SHA-256' };
    if (normalizedExpected === hashes.sha512) return { matched: true, algorithm: 'SHA-512' };
    if (normalizedExpected === hashes.sha384) return { matched: true, algorithm: 'SHA-384' };
    if (normalizedExpected === hashes.sha1) return { matched: true, algorithm: 'SHA-1' };
    return { matched: false, algorithm: null };
  }, [hashes, normalizedExpected]);

  const downloadChecksumFile = () => {
    if (!hashes || !file) return;
    const content = `${hashes.sha256}  ${file.name}\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file.name}.sha256`;
    a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="space-y-6">
      <label
        htmlFor="file-hash-input"
        className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors"
      >
        <Upload className="w-8 h-8 text-indigo-600 mb-2" />
        <span className="text-sm font-semibold text-slate-900">
          {file
            ? s.fileWithSize.replace('{name}', file.name).replace('{size}', formatBytes(file.size, locale))
            : s.chooseFile}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          {s.hashedLocally}
        </span>
        <input
          id="file-hash-input"
          type="file"
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

      {isHashing && (
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
          {s.computing}
        </div>
      )}

      {file && hashes && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700">
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <span>
                <strong>{s.fileLabel}</strong> {file.name}
              </span>
              <span>
                <strong>{s.sizeLabel}</strong> {formatBytes(file.size, locale)} (
                {s.bytesSuffix.replace('{n}', file.size.toLocaleString(locale))})
              </span>
              <span>
                <strong>{s.mimeLabel}</strong> {file.type || 'application/octet-stream'}
              </span>
              <span>
                <strong>{s.modifiedLabel}</strong> {new Date(file.lastModified).toLocaleDateString()}
              </span>
            </div>
            <button
              type="button"
              onClick={downloadChecksumFile}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              {s.downloadSha256}
            </button>
          </div>

          <div className="space-y-3">
            {[
              { label: s.sha256Label, value: hashes.sha256 },
              { label: s.sha512Label, value: hashes.sha512 },
              { label: s.sha384Label, value: hashes.sha384 },
              { label: s.sha1Label, value: hashes.sha1 },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-800">{row.label}</span>
                  <CopyButton text={row.value} label={t.common.copy} copiedLabel={t.common.copied} />
                </div>
                <div className="font-mono text-xs text-slate-900 break-all select-all">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Expected Checksum Comparator */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <label htmlFor="expected-hash" className="block text-sm font-semibold text-slate-900">
              {s.verifyLabel}
            </label>
            <input
              id="expected-hash"
              type="text"
              value={expectedInput}
              onChange={(e) => setExpectedInput(e.target.value)}
              placeholder={s.expectedPlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs sm:text-sm"
            />

            {matchResult && (
              <div
                role="status"
                className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold ${
                  matchResult.matched
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                    : 'border-rose-200 bg-rose-50 text-rose-900'
                }`}
              >
                {matchResult.matched ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      {matchResult.algorithm
                        ? s.verified.replace('{algorithm}', matchResult.algorithm)
                        : s.verified}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>
                      {s.mismatch}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
