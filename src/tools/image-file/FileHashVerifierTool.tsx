import { CheckCircle2, FileCheck2, Upload, XCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { formatBytes } from '../pdf/pdfUtils';

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
      setError('Web Crypto SubtleCrypto API is unavailable in this browser context.');
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
          : 'Failed to hash file in browser memory (files over several hundred MB may exceed RAM limits).'
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
            ? `${file.name} (${formatBytes(file.size)})`
            : 'Choose Any File to Compute Cryptographic Checksums'}
        </span>
        <span className="mt-1 text-xs text-slate-500">
          Hashed locally via Web Crypto API · Zero file upload (recommended under 500 MB)
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
          Computing SHA-1, SHA-256, SHA-384, and SHA-512 checksums locally...
        </div>
      )}

      {file && hashes && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700">
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <span>
                <strong>File:</strong> {file.name}
              </span>
              <span>
                <strong>Size:</strong> {formatBytes(file.size)} ({file.size.toLocaleString()} bytes)
              </span>
              <span>
                <strong>MIME:</strong> {file.type || 'application/octet-stream'}
              </span>
              <span>
                <strong>Modified:</strong> {new Date(file.lastModified).toLocaleDateString()}
              </span>
            </div>
            <button
              type="button"
              onClick={downloadChecksumFile}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Download .sha256
            </button>
          </div>

          <div className="space-y-3">
            {[
              { label: 'SHA-256 (Recommended)', value: hashes.sha256 },
              { label: 'SHA-512', value: hashes.sha512 },
              { label: 'SHA-384', value: hashes.sha384 },
              { label: 'SHA-1 (Legacy compatibility only)', value: hashes.sha1 },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-800">{row.label}</span>
                  <CopyButton text={row.value} />
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
              Verify Against Expected Checksum
            </label>
            <input
              id="expected-hash"
              type="text"
              value={expectedInput}
              onChange={(e) => setExpectedInput(e.target.value)}
              placeholder="Paste published SHA-256, SHA-512, SHA-384, or SHA-1 checksum (or .sha256sum line)..."
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
                      Checksum Verified! File matches the expected {matchResult.algorithm} digest exactly.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>
                      Checksum Mismatch! None of the computed digests match your expected value.
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
