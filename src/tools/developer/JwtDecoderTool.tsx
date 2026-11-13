import { Info, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import type { LocaleCode } from '../../locales/config';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    infoNote:
      'Decodes Base64Url header and payload locally in browser memory. Does not verify cryptographic signatures.',
    loadSampleJwt: 'Load sample JWT',
    inputLabel: 'Encoded JWT Token',
    inputPlaceholder: 'Paste a JWT token (eyJhbGciOi...) to inspect its header and claims...',
    invalidJwt: 'Invalid JWT:',
    headerLabel: 'Header (Algorithm & Type)',
    payloadLabel: 'Payload (Claims)',
    copyHeader: 'Copy header',
    copyPayload: 'Copy payload',
    timestampTitle: 'Timestamp Claims',
    iatLabel: 'Issued At (iat)',
    nbfLabel: 'Not Before (nbf)',
    expLabel: 'Expires At (exp)',
    expired: 'Expired',
    active: 'Active (not yet expired)',
    signatureLabel: 'Signature Segment (Base64Url)',
    invalidB64Url: 'Invalid Base64Url segment length.',
    segmentCount: 'Expected 3 dot-separated JWT segments (header.payload.signature), found {count}.',
    parseFallback: 'Unable to parse JWT Base64Url JSON segments.',
  },
  es: {
    infoNote:
      'Decodifica el encabezado y el contenido (payload) Base64Url localmente en la memoria del navegador. No verifica las firmas criptográficas.',
    loadSampleJwt: 'Cargar JWT de ejemplo',
    inputLabel: 'Token JWT codificado',
    inputPlaceholder: 'Pega un token JWT (eyJhbGciOi...) para inspeccionar su encabezado y sus claims...',
    invalidJwt: 'JWT no válido:',
    headerLabel: 'Encabezado (algoritmo y tipo)',
    payloadLabel: 'Contenido (claims)',
    copyHeader: 'Copiar encabezado',
    copyPayload: 'Copiar contenido',
    timestampTitle: 'Claims de marca de tiempo',
    iatLabel: 'Emitido el (iat)',
    nbfLabel: 'No válido antes de (nbf)',
    expLabel: 'Vence el (exp)',
    expired: 'Vencido',
    active: 'Activo (aún no vencido)',
    signatureLabel: 'Segmento de firma (Base64Url)',
    invalidB64Url: 'Longitud de segmento Base64Url no válida.',
    segmentCount: 'Se esperaban 3 segmentos JWT separados por puntos (header.payload.signature); se encontraron {count}.',
    parseFallback: 'No se pudieron analizar los segmentos JSON Base64Url del JWT.',
  },
  pt: {
    infoNote:
      'Decodifica o cabeçalho e o payload Base64Url localmente na memória do navegador. Não verifica assinaturas criptográficas.',
    loadSampleJwt: 'Carregar JWT de exemplo',
    inputLabel: 'Token JWT codificado',
    inputPlaceholder: 'Cole um token JWT (eyJhbGciOi...) para inspecionar seu cabeçalho e suas claims...',
    invalidJwt: 'JWT inválido:',
    headerLabel: 'Cabeçalho (algoritmo e tipo)',
    payloadLabel: 'Payload (claims)',
    copyHeader: 'Copiar cabeçalho',
    copyPayload: 'Copiar payload',
    timestampTitle: 'Claims de timestamp',
    iatLabel: 'Emitido em (iat)',
    nbfLabel: 'Válido a partir de (nbf)',
    expLabel: 'Expira em (exp)',
    expired: 'Expirado',
    active: 'Ativo (ainda não expirado)',
    signatureLabel: 'Segmento de assinatura (Base64Url)',
    invalidB64Url: 'Comprimento de segmento Base64Url inválido.',
    segmentCount: 'Esperados 3 segmentos JWT separados por pontos (header.payload.signature); encontrados {count}.',
    parseFallback: 'Não foi possível analisar os segmentos JSON Base64Url do JWT.',
  },
  fr: {
    infoNote:
      'Décode l\'en-tête et la charge utile Base64Url localement dans la mémoire du navigateur. Ne vérifie pas les signatures cryptographiques.',
    loadSampleJwt: 'Charger un JWT d\'exemple',
    inputLabel: 'Jeton JWT encodé',
    inputPlaceholder: 'Collez un jeton JWT (eyJhbGciOi...) pour inspecter son en-tête et ses claims...',
    invalidJwt: 'JWT invalide :',
    headerLabel: 'En-tête (algorithme et type)',
    payloadLabel: 'Charge utile (claims)',
    copyHeader: 'Copier l\'en-tête',
    copyPayload: 'Copier la charge utile',
    timestampTitle: 'Claims d\'horodatage',
    iatLabel: 'Émis le (iat)',
    nbfLabel: 'Valide à partir du (nbf)',
    expLabel: 'Expire le (exp)',
    expired: 'Expiré',
    active: 'Actif (pas encore expiré)',
    signatureLabel: 'Segment de signature (Base64Url)',
    invalidB64Url: 'Longueur de segment Base64Url invalide.',
    segmentCount: '3 segments JWT séparés par des points attendus (header.payload.signature), {count} trouvés.',
    parseFallback: 'Impossible d\'analyser les segments JSON Base64Url du JWT.',
  },
  de: {
    infoNote:
      'Dekodiert Base64Url-Header und -Payload lokal im Browser-Speicher. Verifiziert keine kryptografischen Signaturen.',
    loadSampleJwt: 'Beispiel-JWT laden',
    inputLabel: 'Kodiertes JWT-Token',
    inputPlaceholder: 'JWT-Token einfügen (eyJhbGciOi...), um Header und Claims zu prüfen...',
    invalidJwt: 'Ungültiges JWT:',
    headerLabel: 'Header (Algorithmus und Typ)',
    payloadLabel: 'Payload (Claims)',
    copyHeader: 'Header kopieren',
    copyPayload: 'Payload kopieren',
    timestampTitle: 'Zeitstempel-Claims',
    iatLabel: 'Ausgestellt am (iat)',
    nbfLabel: 'Gültig ab (nbf)',
    expLabel: 'Läuft ab am (exp)',
    expired: 'Abgelaufen',
    active: 'Aktiv (noch nicht abgelaufen)',
    signatureLabel: 'Signatursegment (Base64Url)',
    invalidB64Url: 'Ungültige Länge des Base64Url-Segments.',
    segmentCount: '3 durch Punkte getrennte JWT-Segmente (Header.Payload.Signatur) erwartet, {count} gefunden.',
    parseFallback: 'JWT-Base64Url-JSON-Segmente konnten nicht geparst werden.',
  },
  it: {
    infoNote:
      'Decodifica header e payload Base64Url localmente nella memoria del browser. Non verifica le firme crittografiche.',
    loadSampleJwt: 'Carica un JWT di esempio',
    inputLabel: 'Token JWT codificato',
    inputPlaceholder: 'Incolla un token JWT (eyJhbGciOi...) per ispezionarne header e claim...',
    invalidJwt: 'JWT non valido:',
    headerLabel: 'Header (algoritmo e tipo)',
    payloadLabel: 'Payload (claim)',
    copyHeader: 'Copia l\'header',
    copyPayload: 'Copia il payload',
    timestampTitle: 'Claim di marca temporale',
    iatLabel: 'Emesso il (iat)',
    nbfLabel: 'Valido da (nbf)',
    expLabel: 'Scade il (exp)',
    expired: 'Scaduto',
    active: 'Attivo (non ancora scaduto)',
    signatureLabel: 'Segmento della firma (Base64Url)',
    invalidB64Url: 'Lunghezza del segmento Base64Url non valida.',
    segmentCount: 'Previsti 3 segmenti JWT separati da punti (header.payload.signature), trovati {count}.',
    parseFallback: 'Impossibile analizzare i segmenti JSON Base64Url del JWT.',
  },
  id: {
    infoNote:
      'Mendecode header dan payload Base64Url secara lokal di memori browser. Tidak memverifikasi tanda tangan kriptografi.',
    loadSampleJwt: 'Muat contoh JWT',
    inputLabel: 'Token JWT yang Di-encode',
    inputPlaceholder: 'Tempel token JWT (eyJhbGciOi...) untuk memeriksa header dan klaimnya...',
    invalidJwt: 'JWT Tidak Valid:',
    headerLabel: 'Header (Algoritma & Tipe)',
    payloadLabel: 'Payload (Klaim)',
    copyHeader: 'Salin header',
    copyPayload: 'Salin payload',
    timestampTitle: 'Klaim Stempel Waktu',
    iatLabel: 'Diterbitkan Pada (iat)',
    nbfLabel: 'Tidak Sebelum (nbf)',
    expLabel: 'Kedaluwarsa Pada (exp)',
    expired: 'Kedaluwarsa',
    active: 'Aktif (belum kedaluwarsa)',
    signatureLabel: 'Segmen Tanda Tangan (Base64Url)',
    invalidB64Url: 'Panjang segmen Base64Url tidak valid.',
    segmentCount: 'Diharapkan 3 segmen JWT yang dipisahkan titik (header.payload.signature), ditemukan {count}.',
    parseFallback: 'Tidak dapat mengurai segmen JSON Base64Url JWT.',
  },
  ru: {
    infoNote:
      'Декодирует заголовок и полезную нагрузку Base64Url локально в памяти браузера. Не проверяет криптографические подписи.',
    loadSampleJwt: 'Загрузить пример JWT',
    inputLabel: 'Закодированный JWT-токен',
    inputPlaceholder: 'Вставьте JWT-токен (eyJhbGciOi...), чтобы проверить его заголовок и утверждения...',
    invalidJwt: 'Недопустимый JWT:',
    headerLabel: 'Заголовок (алгоритм и тип)',
    payloadLabel: 'Полезная нагрузка (утверждения)',
    copyHeader: 'Копировать заголовок',
    copyPayload: 'Копировать полезную нагрузку',
    timestampTitle: 'Утверждения с метками времени',
    iatLabel: 'Выдан (iat)',
    nbfLabel: 'Действителен с (nbf)',
    expLabel: 'Истекает (exp)',
    expired: 'Истёк',
    active: 'Активен (ещё не истёк)',
    signatureLabel: 'Сегмент подписи (Base64Url)',
    invalidB64Url: 'Недопустимая длина сегмента Base64Url.',
    segmentCount: 'Ожидалось 3 JWT-сегмента, разделённых точками (header.payload.signature), найдено: {count}.',
    parseFallback: 'Не удаётся разобрать JSON-сегменты Base64Url JWT.',
  },
};

function decodeBase64UrlToUtf8(segment: string, locale: LocaleCode): string {
  let base64 = segment.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4;
  if (pad === 2) base64 += '==';
  else if (pad === 3) base64 += '=';
  else if (pad === 1) throw new Error(STRINGS[locale].invalidB64Url);

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
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
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
        error: s.segmentCount.replace('{count}', String(parts.length)),
        headerJson: '',
        payloadJson: '',
        signature: '',
        payloadObj: null,
      };
    }

    try {
      const headerObj = JSON.parse(decodeBase64UrlToUtf8(parts[0], locale));
      const payloadObj = JSON.parse(decodeBase64UrlToUtf8(parts[1], locale)) as Record<string, unknown>;
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
        error: err instanceof Error ? err.message : s.parseFallback,
        headerJson: '',
        payloadJson: '',
        signature: '',
        payloadObj: null,
      };
    }
  }, [token, locale, s.segmentCount, s.parseFallback]);

  const timeClaims = useMemo(() => {
    if (!decoded.payloadObj) return [];
    const nowSec = Math.floor(Date.now() / 1000);
    const items: Array<{ key: string; label: string; raw: number; formatted: string; note?: string }> = [];

    const keys: Array<{ key: string; label: string }> = [
      { key: 'iat', label: s.iatLabel },
      { key: 'nbf', label: s.nbfLabel },
      { key: 'exp', label: s.expLabel },
    ];

    for (const k of keys) {
      const val = decoded.payloadObj[k.key];
      const formatted = formatClaimTimestamp(val);
      if (typeof val === 'number' && formatted) {
        let note: string | undefined;
        if (k.key === 'exp') {
          note = val < nowSec ? s.expired : s.active;
        }
        items.push({ key: k.key, label: k.label, raw: val, formatted, note });
      }
    }
    return items;
  }, [decoded.payloadObj, s.iatLabel, s.nbfLabel, s.expLabel, s.expired, s.active]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            {s.infoNote}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setToken(createSampleJwt())}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{s.loadSampleJwt}</span>
          </button>
          <button
            type="button"
            onClick={() => setToken('')}
            disabled={!token}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="jwt-input" className="block text-sm font-semibold text-slate-900 mb-1.5">
          {s.inputLabel}
        </label>
        <textarea
          id="jwt-input"
          rows={4}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder={s.inputPlaceholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-3.5 font-mono text-xs sm:text-sm break-all text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
      </div>

      {decoded.valid === false && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-xs sm:text-sm text-red-800">
          {s.invalidJwt} {decoded.error}
        </div>
      )}

      {decoded.valid === true && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-900">{s.headerLabel}</span>
                <CopyButton text={decoded.headerJson} label={s.copyHeader} copiedLabel={t.common.copied} />
              </div>
              <pre className="min-h-[160px] overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs text-slate-900">
                {decoded.headerJson}
              </pre>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-900">{s.payloadLabel}</span>
                <CopyButton text={decoded.payloadJson} label={s.copyPayload} copiedLabel={t.common.copied} />
              </div>
              <pre className="min-h-[160px] overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-3.5 font-mono text-xs text-slate-900">
                {decoded.payloadJson}
              </pre>
            </div>
          </div>

          {timeClaims.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2.5">{s.timestampTitle}</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {timeClaims.map((claim) => (
                  <div key={claim.key} className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                    <dt className="font-semibold text-slate-700">{claim.label}</dt>
                    <dd className="mt-1 font-mono text-slate-900 tabular-nums">{claim.formatted}</dd>
                    {claim.note && (
                      <dd
                        className={`mt-1 font-medium ${
                          claim.note === s.expired ? 'text-red-700' : 'text-emerald-700'
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
              {s.signatureLabel}
            </span>
            <p className="font-mono text-xs text-slate-600 break-all">{decoded.signature}</p>
          </div>
        </>
      )}
    </div>
  );
}
