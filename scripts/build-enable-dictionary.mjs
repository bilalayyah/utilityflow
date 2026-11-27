#!/usr/bin/env node
/**
 * build-enable-dictionary.mjs
 *
 * Downloads the ENABLE word list (dolph/dictionary `enable1.txt`) and
 * generates `src/tools/text/dictionary/enableWords.ts` — a single
 * newline-separated string constant the Alphabets to Word Generator
 * loads via dynamic `import()`, so the dictionary stays out of the
 * initial page bundle.
 *
 * Source: https://github.com/dolph/dictionary (enable1.txt)
 * License: PUBLIC DOMAIN — "The ENABLE master word list, WORD.LST, is
 * herewith formally released into the Public Domain. Anyone is free to
 * use it or distribute it in any manner they see fit." Zero attribution
 * required. Built for word games; no proper nouns, no abbreviations.
 *
 * Cleaning applied (in order):
 *   1. lowercase + trim
 *   2. drop any entry containing a character outside a-z
 *   3. dedupe
 *   4. keep length 2–15 only (a word longer than 15 letters can never
 *      match an input capped at MAX_INPUT_LETTERS = 15)
 *   5. offensive-word blocklist (see OFFENSIVE_WORD_BLOCKLIST below)
 *
 * The raw 1.7 MB text file is NEVER shipped into the repo — only the
 * generated TS module.
 *
 * Regenerate with:  node scripts/build-enable-dictionary.mjs
 * (run from the repo root; the script resolves paths from its own
 * location, so it also works from anywhere else.)
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(SCRIPT_DIR, '..');
const OUT_FILE = join(REPO_ROOT, 'src', 'tools', 'text', 'dictionary', 'enableWords.ts');

const SOURCES = [
  'https://cdn.jsdelivr.net/gh/dolph/dictionary@master/enable1.txt',
  'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt',
];

const MIN_LENGTH = 2;
const MAX_LENGTH = 15;

/**
 * OFFENSIVE-WORD BLOCKLIST
 *
 * Purpose: ENABLE is a word-game list and contains well-known slurs and
 * profanity. A family-friendly word generator must never surface those
 * as results, so they are removed at build time — before the list ever
 * reaches the shipped bundle. This is a functional content filter, not
 * a judgement on the source list: the entries are genuine English words,
 * they are simply not words this tool will ever suggest.
 *
 * The list is deliberately short and conservative: only unambiguous
 * slurs and profanity (plus their common inflected forms). Mild words,
 * words with a common innocent meaning (e.g. "cracker" as food,
 * "queer" as "strange"), and reclaimed terms are NOT blocked — the
 * filter targets words whose primary everyday use is as an insult.
 * Entries that are not present in ENABLE are harmless no-ops; the
 * script reports exactly how many entries were actually removed.
 */
const OFFENSIVE_WORD_BLOCKLIST = new Set([
  // Racial / ethnic slurs
  'nigger', 'niggers', 'nigga', 'niggas',
  'kike', 'kikes',
  'chink', 'chinks',
  'spic', 'spics',
  'wetback', 'wetbacks',
  'gook', 'gooks',
  'coon', 'coons',
  'towelhead', 'towelheads',
  'raghead', 'ragheads',
  'beaner', 'beaners',
  // Homophobic slurs
  'faggot', 'faggots', 'fag', 'fags',
  'dyke', 'dykes',
  // Profanity
  'fuck', 'fucks', 'fucked', 'fucker', 'fuckers', 'fucking',
  'shit', 'shits', 'shitty',
  'bitch', 'bitches',
  'bastard', 'bastards',
  'cunt', 'cunts',
  'dick', 'dicks',
  'cock', 'cocks',
  'pussy', 'pussies',
  'whore', 'whores',
  'slut', 'sluts',
  'wank', 'wanker', 'wankers',
  'bollocks',
  'bugger', 'buggers',
  'retard', 'retards',
  'piss', 'pissed',
  'motherfucker', 'motherfuckers',
  'cocksucker', 'cocksuckers',
  'asshole', 'assholes',
  'twat', 'twats',
  'prick', 'pricks',
]);

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'UtilityFlow build-enable-dictionary.mjs' },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function downloadEnable() {
  let lastError;
  for (const url of SOURCES) {
    try {
      console.log(`Fetching ${url} ...`);
      const text = await fetchText(url);
      console.log(`OK (${(text.length / 1024).toFixed(0)} KB)`);
      return text;
    } catch (error) {
      console.warn(`FAILED: ${url} — ${error.message}`);
      lastError = error;
    }
  }
  throw new Error(`Could not download enable1.txt from any source: ${lastError.message}`);
}

function clean(rawText) {
  const stats = {
    rawLines: 0,
    nonAlphaDropped: 0,
    duplicatesDropped: 0,
    tooShortDropped: 0,
    tooLongDropped: 0,
    blocklistRemoved: 0,
  };

  const seen = new Set();
  const words = [];

  for (const rawLine of rawText.split('\n')) {
    const word = rawLine.trim().toLowerCase();
    stats.rawLines += 1;
    if (word === '') continue;
    if (!/^[a-z]+$/.test(word)) {
      stats.nonAlphaDropped += 1;
      continue;
    }
    if (seen.has(word)) {
      stats.duplicatesDropped += 1;
      continue;
    }
    seen.add(word);
    if (word.length < MIN_LENGTH) {
      stats.tooShortDropped += 1;
      continue;
    }
    if (word.length > MAX_LENGTH) {
      stats.tooLongDropped += 1;
      continue;
    }
    if (OFFENSIVE_WORD_BLOCKLIST.has(word)) {
      stats.blocklistRemoved += 1;
      continue;
    }
    words.push(word);
  }

  // ENABLE ships sorted; keep the source order (already alphabetical).
  return { words, stats };
}

function renderModule(words, stats) {
  const header = [
    '/**',
    ' * ENABLE word list — generated file. DO NOT EDIT BY HAND.',
    ' *',
    ' * Source: dolph/dictionary `enable1.txt`',
    ' *   https://github.com/dolph/dictionary/blob/master/enable1.txt',
    ' * License: PUBLIC DOMAIN — "The ENABLE master word list, WORD.LST,',
    ' *   is herewith formally released into the Public Domain. Anyone is',
    ' *   free to use it or distribute it in any manner they see fit."',
    ' *   Zero attribution required. Built for word games; no proper',
    ' *   nouns, no abbreviations.',
    ' *',
    ` * Words after cleaning: ${words.length.toLocaleString('en-US')} (from ${stats.rawLines.toLocaleString('en-US')} raw lines)`,
    ' * Filtering applied:',
    ` *   - lowercase, a-z only (dropped ${stats.nonAlphaDropped})`,
    ` *   - deduped (dropped ${stats.duplicatesDropped})`,
    ` *   - length ${MIN_LENGTH}–${MAX_LENGTH} only (dropped ${stats.tooShortDropped} shorter, ${stats.tooLongDropped} longer)`,
    ` *   - offensive-word blocklist (removed ${stats.blocklistRemoved} slurs/profanity)`,
    ' *     — see OFFENSIVE_WORD_BLOCKLIST in scripts/build-enable-dictionary.mjs',
    ' *',
    ' * Regenerate with:  node scripts/build-enable-dictionary.mjs',
    ' * The raw 1.7 MB text file is intentionally NOT shipped in the repo;',
    ' * only this generated module is committed.',
    ' *',
    ' * Loaded by the tool via dynamic import() (see wordGenerator.ts',
    ' * loadDictionary) so the dictionary is a separate chunk and never',
    ' * enters the initial page bundle.',
    ' */',
    '',
  ].join('\n');

  // One newline-separated string: the most compact shippable form.
  // JSON.stringify escapes safely (content is a-z + \n only).
  return (
    header +
    `export const ENABLE_WORDS_TXT: string = ${JSON.stringify(words.join('\n'))};\n\n` +
    `export const ENABLE_WORD_COUNT = ${words.length};\n`
  );
}

async function main() {
  const rawText = await downloadEnable();
  const { words, stats } = clean(rawText);

  if (words.length === 0) {
    throw new Error('Cleaning produced zero words — refusing to write an empty dictionary.');
  }

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, renderModule(words, stats), 'utf8');

  console.log(`\nWrote ${OUT_FILE}`);
  console.log(`  raw lines:          ${stats.rawLines.toLocaleString('en-US')}`);
  console.log(`  non a-z dropped:    ${stats.nonAlphaDropped}`);
  console.log(`  duplicates dropped: ${stats.duplicatesDropped}`);
  console.log(`  too short (<2):     ${stats.tooShortDropped}`);
  console.log(`  too long (>15):     ${stats.tooLongDropped}`);
  console.log(`  blocklist removed:  ${stats.blocklistRemoved}`);
  console.log(`  FINAL WORD COUNT:   ${words.length.toLocaleString('en-US')}`);
}

main().catch((error) => {
  console.error(`\nERROR: ${error.message}`);
  process.exit(1);
});
