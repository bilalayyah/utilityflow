import { KeyRound, RefreshCw, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    strength: {
      veryStrong: 'Very Strong',
      strong: 'Strong',
      moderate: 'Moderate',
      weak: 'Weak',
    },
    randomPasswordMode: 'Random Password',
    passphraseMode: 'Diceware Passphrase',
    regenerate: 'Regenerate',
    passwordLengthLabel: 'Password Length: ',
    charsSuffix: ' chars',
    batchCountLabel: 'Batch Count: ',
    uppercaseLabel: 'Uppercase (A–Z)',
    lowercaseLabel: 'Lowercase (a–z)',
    numbersLabel: 'Numbers (0–9)',
    symbolsLabel: 'Symbols (!@#$%...)',
    excludeAmbiguousLabel: 'Exclude ambiguous (0, O, 1, l, I)',
    wordCountLabel: 'Word Count: ',
    wordSeparatorLabel: 'Word Separator',
    hyphenOption: 'Hyphen (-)',
    underscoreOption: 'Underscore (_)',
    periodOption: 'Period (.)',
    spaceOption: 'Space ( )',
    capitalizeWordsLabel: 'Capitalize Words',
    appendDigitLabel: 'Append 2-digit number',
    selectGroupWarning: 'Select at least one character group to generate passwords.',
    entropyBits: '~{n} bits of entropy',
    poolSizeSuffix: ' · pool size {n}',
    wordListSuffix: ' · {n}-word list',
    copyAll: 'Copy All',
  },
  es: {
    strength: {
      veryStrong: 'Muy fuerte',
      strong: 'Fuerte',
      moderate: 'Moderada',
      weak: 'Débil',
    },
    randomPasswordMode: 'Contraseña aleatoria',
    passphraseMode: 'Frase de contraseña Diceware',
    regenerate: 'Regenerar',
    passwordLengthLabel: 'Longitud de la contraseña: ',
    charsSuffix: ' caracteres',
    batchCountLabel: 'Cantidad por lote: ',
    uppercaseLabel: 'Mayúsculas (A–Z)',
    lowercaseLabel: 'Minúsculas (a–z)',
    numbersLabel: 'Números (0–9)',
    symbolsLabel: 'Símbolos (!@#$%...)',
    excludeAmbiguousLabel: 'Excluir caracteres ambiguos (0, O, 1, l, I)',
    wordCountLabel: 'Cantidad de palabras: ',
    wordSeparatorLabel: 'Separador de palabras',
    hyphenOption: 'Guion (-)',
    underscoreOption: 'Guion bajo (_)',
    periodOption: 'Punto (.)',
    spaceOption: 'Espacio ( )',
    capitalizeWordsLabel: 'Palabras con mayúscula inicial',
    appendDigitLabel: 'Agregar número de 2 dígitos',
    selectGroupWarning: 'Selecciona al menos un grupo de caracteres para generar contraseñas.',
    entropyBits: '~{n} bits de entropía',
    poolSizeSuffix: ' · tamaño del conjunto: {n}',
    wordListSuffix: ' · lista de {n} palabras',
    copyAll: 'Copiar todo',
  },
  pt: {
    strength: {
      veryStrong: 'Muito forte',
      strong: 'Forte',
      moderate: 'Moderada',
      weak: 'Fraca',
    },
    randomPasswordMode: 'Senha aleatória',
    passphraseMode: 'Frase-senha Diceware',
    regenerate: 'Gerar novamente',
    passwordLengthLabel: 'Comprimento da senha: ',
    charsSuffix: ' caracteres',
    batchCountLabel: 'Quantidade por lote: ',
    uppercaseLabel: 'Maiúsculas (A–Z)',
    lowercaseLabel: 'Minúsculas (a–z)',
    numbersLabel: 'Números (0–9)',
    symbolsLabel: 'Símbolos (!@#$%...)',
    excludeAmbiguousLabel: 'Excluir ambíguos (0, O, 1, l, I)',
    wordCountLabel: 'Quantidade de palavras: ',
    wordSeparatorLabel: 'Separador de palavras',
    hyphenOption: 'Hífen (-)',
    underscoreOption: 'Sublinhado (_)',
    periodOption: 'Ponto (.)',
    spaceOption: 'Espaço ( )',
    capitalizeWordsLabel: 'Palavras com inicial maiúscula',
    appendDigitLabel: 'Adicionar número de 2 dígitos',
    selectGroupWarning: 'Selecione pelo menos um grupo de caracteres para gerar senhas.',
    entropyBits: '~{n} bits de entropia',
    poolSizeSuffix: ' · tamanho do conjunto: {n}',
    wordListSuffix: ' · lista de {n} palavras',
    copyAll: 'Copiar tudo',
  },
  fr: {
    strength: {
      veryStrong: 'Très fort',
      strong: 'Fort',
      moderate: 'Moyen',
      weak: 'Faible',
    },
    randomPasswordMode: 'Mot de passe aléatoire',
    passphraseMode: 'Phrase secrète Diceware',
    regenerate: 'Régénérer',
    passwordLengthLabel: 'Longueur du mot de passe : ',
    charsSuffix: ' caractères',
    batchCountLabel: 'Nombre par lot : ',
    uppercaseLabel: 'Majuscules (A–Z)',
    lowercaseLabel: 'Minuscules (a–z)',
    numbersLabel: 'Chiffres (0–9)',
    symbolsLabel: 'Symboles (!@#$%...)',
    excludeAmbiguousLabel: 'Exclure les caractères ambigus (0, O, 1, l, I)',
    wordCountLabel: 'Nombre de mots : ',
    wordSeparatorLabel: 'Séparateur de mots',
    hyphenOption: 'Trait d\'union (-)',
    underscoreOption: 'Tiret bas (_)',
    periodOption: 'Point (.)',
    spaceOption: 'Espace ( )',
    capitalizeWordsLabel: 'Mots avec majuscule initiale',
    appendDigitLabel: 'Ajouter un nombre à 2 chiffres',
    selectGroupWarning: 'Sélectionnez au moins un groupe de caractères pour générer des mots de passe.',
    entropyBits: '~{n} bits d\'entropie',
    poolSizeSuffix: ' · taille du jeu : {n}',
    wordListSuffix: ' · liste de {n} mots',
    copyAll: 'Tout copier',
  },
  de: {
    strength: {
      veryStrong: 'Sehr stark',
      strong: 'Stark',
      moderate: 'Mittel',
      weak: 'Schwach',
    },
    randomPasswordMode: 'Zufälliges Passwort',
    passphraseMode: 'Diceware-Passphrase',
    regenerate: 'Neu generieren',
    passwordLengthLabel: 'Passwortlänge: ',
    charsSuffix: ' Zeichen',
    batchCountLabel: 'Stapelanzahl: ',
    uppercaseLabel: 'Großbuchstaben (A–Z)',
    lowercaseLabel: 'Kleinbuchstaben (a–z)',
    numbersLabel: 'Zahlen (0–9)',
    symbolsLabel: 'Symbole (!@#$%...)',
    excludeAmbiguousLabel: 'Mehrdeutige Zeichen ausschließen (0, O, 1, l, I)',
    wordCountLabel: 'Wortanzahl: ',
    wordSeparatorLabel: 'Worttrennzeichen',
    hyphenOption: 'Bindestrich (-)',
    underscoreOption: 'Unterstrich (_)',
    periodOption: 'Punkt (.)',
    spaceOption: 'Leerzeichen ( )',
    capitalizeWordsLabel: 'Wörter großschreiben',
    appendDigitLabel: '2-stellige Zahl anhängen',
    selectGroupWarning: 'Wählen Sie mindestens eine Zeichengruppe aus, um Passwörter zu generieren.',
    entropyBits: '~{n} Bit Entropie',
    poolSizeSuffix: ' · Zeichenvorrat {n}',
    wordListSuffix: ' · Wortliste mit {n} Wörtern',
    copyAll: 'Alle kopieren',
  },
  it: {
    strength: {
      veryStrong: 'Molto forte',
      strong: 'Forte',
      moderate: 'Media',
      weak: 'Debole',
    },
    randomPasswordMode: 'Password casuale',
    passphraseMode: 'Passphrase Diceware',
    regenerate: 'Rigenera',
    passwordLengthLabel: 'Lunghezza password: ',
    charsSuffix: ' caratteri',
    batchCountLabel: 'Numero in batch: ',
    uppercaseLabel: 'Maiuscole (A–Z)',
    lowercaseLabel: 'Minuscole (a–z)',
    numbersLabel: 'Numeri (0–9)',
    symbolsLabel: 'Simboli (!@#$%...)',
    excludeAmbiguousLabel: 'Escludi caratteri ambigui (0, O, 1, l, I)',
    wordCountLabel: 'Numero di parole: ',
    wordSeparatorLabel: 'Separatore di parole',
    hyphenOption: 'Trattino (-)',
    underscoreOption: 'Trattino basso (_)',
    periodOption: 'Punto (.)',
    spaceOption: 'Spazio ( )',
    capitalizeWordsLabel: 'Parole con iniziale maiuscola',
    appendDigitLabel: 'Aggiungi numero a 2 cifre',
    selectGroupWarning: 'Seleziona almeno un gruppo di caratteri per generare le password.',
    entropyBits: '~{n} bit di entropia',
    poolSizeSuffix: ' · pool di {n} caratteri',
    wordListSuffix: ' · lista di {n} parole',
    copyAll: 'Copia tutto',
  },
};

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?';
const AMBIGUOUS = new Set(['0', 'O', '1', 'l', 'I']);

const DICEWARE_WORDS = [
  'amber', 'anchor', 'apple', 'apron', 'arch', 'arrow', 'aspen', 'atlas',
  'atom', 'autumn', 'badge', 'baker', 'bamboo', 'banner', 'barge', 'basil',
  'basket', 'beacon', 'beaver', 'bench', 'berry', 'birch', 'bison', 'blade',
  'blaze', 'bloom', 'bluff', 'board', 'boat', 'bolt', 'bonus', 'book',
  'border', 'boulder', 'branch', 'brass', 'brave', 'bread', 'breeze', 'brick',
  'bridge', 'bright', 'brook', 'brush', 'bubble', 'bucket', 'budget', 'buffer',
  'cabin', 'cable', 'cactus', 'cairn', 'camel', 'camera', 'camp', 'canal',
  'candle', 'cannon', 'canoe', 'canvas', 'canyon', 'carbon', 'card', 'cargo',
  'carpet', 'carrot', 'castle', 'cedar', 'cellar', 'chalk', 'chance', 'charm',
  'chart', 'chase', 'cherry', 'chess', 'chime', 'chord', 'cider', 'circle',
  'citadel', 'citrus', 'clamp', 'clarity', 'cliff', 'climate', 'climb', 'clock',
  'cloud', 'clover', 'cobalt', 'cobble', 'coffee', 'comet', 'compass', 'copper',
  'coral', 'corner', 'cosmic', 'cotton', 'cove', 'craft', 'crane', 'crater',
  'creek', 'crest', 'cricket', 'crimson', 'crisp', 'crown', 'crystal', 'current',
  'curve', 'cycle', 'cypress', 'dagger', 'daisy', 'dancer', 'delta', 'denim',
  'desert', 'desk', 'dial', 'diamond', 'diesel', 'digit', 'diner', 'dolphin',
  'domain', 'domino', 'donkey', 'draft', 'dragon', 'drift', 'drum', 'dune',
  'eagle', 'earth', 'echo', 'eclipse', 'eddy', 'elbow', 'elder', 'ember',
  'emerald', 'engine', 'envoy', 'epoch', 'equator', 'ermine', 'etch', 'ever',
  'fable', 'falcon', 'fathom', 'feather', 'fender', 'fern', 'ferry', 'field',
  'fig', 'filter', 'finch', 'fjord', 'flame', 'flannel', 'flash', 'fleet',
  'flint', 'flora', 'flour', 'flute', 'focus', 'folio', 'forest', 'forge',
  'fossil', 'fountain', 'fox', 'frame', 'frost', 'fruit', 'funnel', 'fusion',
  'galaxy', 'garden', 'garlic', 'garnet', 'gate', 'gazelle', 'gecko', 'gem',
  'geyser', 'ginger', 'glacier', 'glade', 'glass', 'gleam', 'glide', 'globe',
  'glove', 'gold', 'gopher', 'grain', 'granite', 'grape', 'graph', 'gravel',
  'green', 'griddle', 'griffin', 'groove', 'grove', 'guitar', 'gull', 'harbor',
  'harp', 'harvest', 'haven', 'hawk', 'hazel', 'hearth', 'heather', 'helix',
  'helmet', 'heron', 'hickory', 'hill', 'hollow', 'honey', 'horizon', 'horn',
  'hotel', 'hound', 'hover', 'huckle', 'humor', 'husky', 'hybrid', 'iceberg',
  'icicle', 'icon', 'igloo', 'indigo', 'ingot', 'inlet', 'iris', 'iron',
  'island', 'ivory', 'jacket', 'jade', 'jaguar', 'jasper', 'javelin', 'jazz',
];

/**
 * Unbiased cryptographically secure integer in [0, max) using rejection sampling
 * with window.crypto.getRandomValues so there is zero modulo bias.
 */
export function secureRandomInt(max: number): number {
  if (!Number.isInteger(max) || max <= 0 || max > 0xffffffff) {
    throw new Error('max must be an integer between 1 and 2^32 - 1');
  }
  const cryptoObj = globalThis.crypto;
  if (!cryptoObj || typeof cryptoObj.getRandomValues !== 'function') {
    throw new Error('Cryptographic RNG (crypto.getRandomValues) is unavailable.');
  }
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  while (true) {
    cryptoObj.getRandomValues(buf);
    if (buf[0] < limit) {
      return buf[0] % max;
    }
  }
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function strengthLabel(
  entropyBits: number,
  labels: typeof STRINGS.en.strength
): { label: string; colorClass: string } {
  if (entropyBits >= 100) return { label: labels.veryStrong, colorClass: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
  if (entropyBits >= 72) return { label: labels.strong, colorClass: 'text-indigo-700 bg-indigo-50 border-indigo-200' };
  if (entropyBits >= 50) return { label: labels.moderate, colorClass: 'text-amber-700 bg-amber-50 border-amber-200' };
  return { label: labels.weak, colorClass: 'text-rose-700 bg-rose-50 border-rose-200' };
}

export default function PasswordGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [mode, setMode] = useState<'password' | 'passphrase'>('password');

  // Password mode state
  const [length, setLength] = useState(18);
  const [count, setCount] = useState(5);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);

  // Passphrase mode state
  const [wordCount, setWordCount] = useState(5);
  const [separator, setSeparator] = useState('-');
  const [capitalizeWords, setCapitalizeWords] = useState(true);
  const [appendDigit, setAppendDigit] = useState(true);

  const [seedTick, setSeedTick] = useState(0);

  const passwordResult = useMemo(() => {
    void seedTick;
    const filterSet = (chars: string) =>
      excludeAmbiguous ? chars.split('').filter((c) => !AMBIGUOUS.has(c)).join('') : chars;

    const groups = [
      useUpper ? filterSet(UPPERCASE) : '',
      useLower ? filterSet(LOWERCASE) : '',
      useDigits ? filterSet(DIGITS) : '',
      useSymbols ? SYMBOLS : '',
    ].filter(Boolean);

    if (groups.length === 0) {
      return { items: [] as string[], poolSize: 0, entropyBits: 0 };
    }

    const fullPool = groups.join('');
    const items: string[] = [];

    for (let k = 0; k < count; k++) {
      const chars: string[] = [];
      for (const grp of groups) {
        if (chars.length < length) {
          chars.push(grp[secureRandomInt(grp.length)]);
        }
      }
      while (chars.length < length) {
        chars.push(fullPool[secureRandomInt(fullPool.length)]);
      }
      items.push(shuffleArray(chars).join(''));
    }

    const entropyBits = length * Math.log2(fullPool.length);
    return { items, poolSize: fullPool.length, entropyBits };
  }, [length, count, useUpper, useLower, useDigits, useSymbols, excludeAmbiguous, seedTick]);

  const passphraseResult = useMemo(() => {
    void seedTick;
    const items: string[] = [];
    for (let k = 0; k < count; k++) {
      const words: string[] = [];
      for (let w = 0; w < wordCount; w++) {
        let picked = DICEWARE_WORDS[secureRandomInt(DICEWARE_WORDS.length)];
        if (capitalizeWords) {
          picked = picked.charAt(0).toUpperCase() + picked.slice(1);
        }
        words.push(picked);
      }
      if (appendDigit) {
        words[words.length - 1] += String(10 + secureRandomInt(90));
      }
      items.push(words.join(separator));
    }

    const entropyBits =
      wordCount * Math.log2(DICEWARE_WORDS.length) + (appendDigit ? Math.log2(90) : 0);
    return { items, entropyBits };
  }, [wordCount, separator, capitalizeWords, appendDigit, count, seedTick]);

  const activeItems = mode === 'password' ? passwordResult.items : passphraseResult.items;
  const activeEntropy = mode === 'password' ? passwordResult.entropyBits : passphraseResult.entropyBits;
  const badge = strengthLabel(activeEntropy, s.strength);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('password')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
              mode === 'password'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            {s.randomPasswordMode}
          </button>
          <button
            type="button"
            onClick={() => setMode('passphrase')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer ${
              mode === 'passphrase'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {s.passphraseMode}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setSeedTick((t) => t + 1)}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          {s.regenerate}
        </button>
      </div>

      {mode === 'password' ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pw-len" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.passwordLengthLabel}
                <span className="font-mono">{length}{s.charsSuffix}</span>
              </label>
              <input
                id="pw-len"
                type="range"
                min={8}
                max={64}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="pw-count" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.batchCountLabel}
                <span className="font-mono">{count}</span>
              </label>
              <input
                id="pw-count"
                type="range"
                min={1}
                max={10}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-800">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="rounded text-indigo-600" />
              {s.uppercaseLabel}
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="rounded text-indigo-600" />
              {s.lowercaseLabel}
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={useDigits} onChange={(e) => setUseDigits(e.target.checked)} className="rounded text-indigo-600" />
              {s.numbersLabel}
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="rounded text-indigo-600" />
              {s.symbolsLabel}
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={excludeAmbiguous} onChange={(e) => setExcludeAmbiguous(e.target.checked)} className="rounded text-indigo-600" />
              {s.excludeAmbiguousLabel}
            </label>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="pp-words" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.wordCountLabel}
                <span className="font-mono">{wordCount}</span>
              </label>
              <input
                id="pp-words"
                type="range"
                min={3}
                max={8}
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="pp-sep" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.wordSeparatorLabel}
              </label>
              <select
                id="pp-sep"
                value={separator}
                onChange={(e) => setSeparator(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                <option value="-">{s.hyphenOption}</option>
                <option value="_">{s.underscoreOption}</option>
                <option value=".">{s.periodOption}</option>
                <option value=" ">{s.spaceOption}</option>
              </select>
            </div>

            <div>
              <label htmlFor="pp-count" className="block text-xs font-semibold text-slate-800 mb-1.5">
                {s.batchCountLabel}
                <span className="font-mono">{count}</span>
              </label>
              <input
                id="pp-count"
                type="range"
                min={1}
                max={10}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-xs sm:text-sm text-slate-800">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={capitalizeWords}
                onChange={(e) => setCapitalizeWords(e.target.checked)}
                className="rounded text-indigo-600"
              />
              {s.capitalizeWordsLabel}
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={appendDigit}
                onChange={(e) => setAppendDigit(e.target.checked)}
                className="rounded text-indigo-600"
              />
              {s.appendDigitLabel}
            </label>
          </div>
        </div>
      )}

      {activeItems.length === 0 ? (
        <div role="alert" className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {s.selectGroupWarning}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className={`rounded-md border px-2.5 py-1 font-bold ${badge.colorClass}`}>
                {badge.label}
              </span>
              <span className="font-mono text-slate-600 tabular-nums">
                {s.entropyBits.replace('{n}', activeEntropy.toFixed(1))}
                {mode === 'password'
                  ? s.poolSizeSuffix.replace('{n}', String(passwordResult.poolSize))
                  : s.wordListSuffix.replace('{n}', String(DICEWARE_WORDS.length))}
              </span>
            </div>
            <CopyButton text={activeItems.join('\n')} label={s.copyAll} copiedLabel={t.common.copied} />
          </div>

          <ul className="space-y-2">
            {activeItems.map((item, idx) => (
              <li
                key={`${idx}-${item}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <code className="font-mono text-sm sm:text-base text-slate-900 break-all select-all">
                  {item}
                </code>
                <CopyButton text={item} label={t.common.copy} copiedLabel={t.common.copied} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
