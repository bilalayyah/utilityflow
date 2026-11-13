import { Info, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';

function decodeBase64UrlToUtf8(segment: string): string {
  let base64 = segment.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4;
  if (pad === 2) base64 += '==';
  else if (pad === 3) base64 += '=';
  else if (pad === 1) throw new Error('Invalid Base64Url segment length.');

  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

function encodeBase64Url(obj: Record<string, unknown>): string {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function createSampleJwt(): string {
  const nowSec = Math.floor(Date.now() / 1000);
  const header = encodeBase64Url({ alg: 'HS256', typ: 'JWT' });
  const payload = encodeBase64Url({
    sub: 'usr_2026_demo',
    name: 'Jordan Patel',
    role: 'editor',
    iat: nowSec - 300,
    exp: nowSec + 3600,
    iss: 'https://utilityflow.online',
  });
  return `${header}.${payload}.sample_signature_not_verified`;
}

function formatClaimTimestamp(val: unknown): string | null {
  if (typeof val !== 'number' || !Number.isFinite(val)) return null;
  const date = new Date(val * 1000);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().replace('T', ' ').replace('.000Z', ' UTC');
}

export default function JwtDecoderTool() {
  const [token, setToken] = useState('');

  const decoded = useMemo(() => {
    const trimmed = token.trim();
    if (!trimmed) {
      return { valid: null as boolean | null, error: '', headerJson: '', payloadJson: '', signature: '', payloadObj: null as Record<string, unknown> | null };
    }

    const parts = trimmed.split('.');
    if (parts.length !== 3) {
      return {
        valid: false,
        error: `Expected 3 dot-separated JWT segments (header.payload.signature), found ${parts.length}.`,
        headerJson: '',
        payloadJson: '',
        signature: '',
        payloadObj: null,
      };
    }

    try {
      const headerObj = JSON.parse(decodeBase64UrlToUtf8(parts[0]));
      const payloadObj = JSON.parse(decodeBase64UrlToUtf8(parts[1])) as Record<string, unknown>;
      return {
        valid: true,
        error: '',
        headerJson: JSON.stringify(headerObj, null, 2),
        payloadJson: JSON.stringify(payloadObj, null, 2),
        signature: parts[2],
        payloadObj,
      };
    } catch (err) {
      return {
        valid: false,
        error: err instanceof Error ? err.message : 'Unable to parse JWT Base64Url JSON segments.',
        headerJson: '',
        payloadJson: '',
        signature: '',
        payloadObj: null,
      };
    }
  }, [token]);

  const timeClaims = useMemo(() => {
    if (!decoded.payloadObj) return [];
    const nowSec = Math.floor(Date.now() / 1000);
    const items: Array<{ key: string; label: string; raw: number; formatted: string; note?: string }> = [];

    const keys: Array<{ key: string; label: string }> = [
      { key: 'iat', label: 'Issued At (iat)' },
      { key: 'nbf', label: 'Not Before (nbf)' },
      { key: 'exp', label: 'Expires At (exp)' },
    ];

    for (const k of keys) {
      const val = decoded.payloadObj[k.key];
      const formatted = formatClaimTimestamp(val);
      if (typeof val === 'number' && formatted) {
        let note: string | undefined;
        if (k.key === 'exp') {
          note = val < nowSec ? 'Expired' : 'Active (not yet expired)';
        }
        items.push({ key: k.key, label: k.label, raw: val, formatted, note });
      }
    }
    return items;
  }, [decoded.payloadObj]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Decodes Base64Url header and payload locally in browser memory. Does not verify
            cryptographic signatures.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setToken(createSampleJwt())}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>Load sample JWT</span>
          </button>
          <button
            type="button"
            onClick={() => setToken('')}
            disabled={!token}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="jwt-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
          Encoded JWT Token
        </label>
        <textarea
          id="jwt-input"
          rows={4}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste a JWT token (eyJhbGciOi...) to inspect its header and claims..."
          className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm break-all text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {decoded.valid === false && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800">
          Invalid JWT: {decoded.error}
        </div>
      )}

      {decoded.valid === true && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-900">Header (Algorithm &amp; Type)</span>
                <CopyButton text={decoded.headerJson} label="Copy header" />
              </div>
              <pre className="min-h-[160px] overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs text-slate-900">
                {decoded.headerJson}
              </pre>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-900">Payload (Claims)</span>
                <CopyButton text={decoded.payloadJson} label="Copy payload" />
              </div>
              <pre className="min-h-[160px] overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs text-slate-900">
                {decoded.payloadJson}
              </pre>
            </div>
          </div>

          {timeClaims.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2.5">Timestamp Claims</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {timeClaims.map((claim) => (
                  <div key={claim.key} className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                    <dt className="font-semibold text-slate-700">{claim.label}</dt>
                    <dd className="mt-1 font-mono text-slate-900 tabular-nums">{claim.formatted}</dd>
                    {claim.note && (
                      <dd
                        className={`mt-1 font-medium ${
                          claim.note === 'Expired' ? 'text-red-700' : 'text-emerald-700'
                        }`}
                      >
                        {claim.note}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <span className="block text-xs font-semibold text-slate-700 mb-1">
              Signature Segment (Base64Url)
            </span>
            <p className="font-mono text-xs text-slate-600 break-all">{decoded.signature}</p>
          </div>
        </>
      )}
    </div>
  );
}
