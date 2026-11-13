import { RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleText:
      'Write clear, concise copy that fits platform character limits without awkward truncation in search results or social feeds.',
    withSpaces: 'With Spaces',
    withoutSpaces: 'Without Spaces',
    words: 'Words',
    letters: 'Letters',
    digits: 'Digits',
    utf8Bytes: 'UTF-8 Bytes',
    copyText: 'Copy text',
    textToMeasure: 'Text to measure character length',
    placeholder:
      'Type or paste text to inspect exact character counts, byte size, and platform limits...',
    whitespaceChars: 'Whitespace characters',
    lines: 'Lines',
    platformLimitsTitle: 'Platform & SEO Character Limits',
    over: 'over',
    left: 'left',
    platformLimits: [
      { name: 'SEO Meta Title', note: 'Recommended Google SERP title length' },
      { name: 'SEO Meta Description', note: 'Standard desktop snippet threshold' },
      { name: 'SMS Segment', note: 'Single GSM-7 SMS message' },
      { name: 'X / Twitter Post', note: 'Standard post length' },
      { name: 'Instagram Caption Preview', note: 'Visible before "More" truncation' },
      { name: 'LinkedIn Post', note: 'Maximum standard feed update' },
    ],
  },
  es: {
    sampleText:
      'Escribe textos claros y concisos que se ajusten a los límites de caracteres de cada plataforma, sin cortes incómodos en los resultados de búsqueda ni en las redes sociales.',
    withSpaces: 'Con espacios',
    withoutSpaces: 'Sin espacios',
    words: 'Palabras',
    letters: 'Letras',
    digits: 'Dígitos',
    utf8Bytes: 'Bytes UTF-8',
    copyText: 'Copiar texto',
    textToMeasure: 'Texto para medir la longitud de caracteres',
    placeholder:
      'Escribe o pega texto para ver conteos exactos de caracteres, tamaño en bytes y límites de plataformas...',
    whitespaceChars: 'Caracteres de espacio en blanco',
    lines: 'Líneas',
    platformLimitsTitle: 'Límites de caracteres de plataformas y SEO',
    over: 'de más',
    left: 'restantes',
    platformLimits: [
      { name: 'Título meta SEO', note: 'Longitud recomendada del título en Google' },
      { name: 'Descripción meta SEO', note: 'Límite estándar del fragmento en escritorio' },
      { name: 'Segmento SMS', note: 'Un solo mensaje SMS GSM-7' },
      { name: 'Publicación de X / Twitter', note: 'Longitud estándar de publicación' },
      { name: 'Vista previa de pie de foto de Instagram', note: 'Visible antes del corte de «Más»' },
      { name: 'Publicación de LinkedIn', note: 'Actualización estándar máxima del feed' },
    ],
  },
  pt: {
    sampleText:
      'Escreva textos claros e concisos que caibam nos limites de caracteres das plataformas, sem cortes estranhos nos resultados de pesquisa ou nas redes sociais.',
    withSpaces: 'Com espaços',
    withoutSpaces: 'Sem espaços',
    words: 'Palavras',
    letters: 'Letras',
    digits: 'Dígitos',
    utf8Bytes: 'Bytes UTF-8',
    copyText: 'Copiar texto',
    textToMeasure: 'Texto para medir o comprimento em caracteres',
    placeholder:
      'Digite ou cole texto para ver contagens exatas de caracteres, tamanho em bytes e limites de plataformas...',
    whitespaceChars: 'Caracteres de espaço em branco',
    lines: 'Linhas',
    platformLimitsTitle: 'Limites de caracteres de plataformas e SEO',
    over: 'acima',
    left: 'restantes',
    platformLimits: [
      { name: 'Meta título SEO', note: 'Comprimento recomendado do título no Google' },
      { name: 'Meta descrição SEO', note: 'Limite padrão do snippet em desktop' },
      { name: 'Segmento SMS', note: 'Uma única mensagem SMS GSM-7' },
      { name: 'Post no X / Twitter', note: 'Comprimento padrão de post' },
      { name: 'Prévia da legenda do Instagram', note: 'Visível antes do corte em "Mais"' },
      { name: 'Post no LinkedIn', note: 'Atualização padrão máxima do feed' },
    ],
  },
  fr: {
    sampleText:
      'Rédigez des textes clairs et concis qui respectent les limites de caractères des plateformes, sans coupure gênante dans les résultats de recherche ou les flux sociaux.',
    withSpaces: 'Avec espaces',
    withoutSpaces: 'Sans espaces',
    words: 'Mots',
    letters: 'Lettres',
    digits: 'Chiffres',
    utf8Bytes: 'Octets UTF-8',
    copyText: 'Copier le texte',
    textToMeasure: 'Texte pour mesurer la longueur en caractères',
    placeholder:
      'Saisissez ou collez du texte pour voir les nombres exacts de caractères, la taille en octets et les limites des plateformes...',
    whitespaceChars: 'Caractères d\'espacement',
    lines: 'Lignes',
    platformLimitsTitle: 'Limites de caractères des plateformes et du SEO',
    over: 'en trop',
    left: 'restants',
    platformLimits: [
      { name: 'Meta titre SEO', note: 'Longueur recommandée du titre Google' },
      { name: 'Meta description SEO', note: 'Seuil standard de l\'extrait sur ordinateur' },
      { name: 'Segment SMS', note: 'Un seul message SMS GSM-7' },
      { name: 'Publication X / Twitter', note: 'Longueur standard de publication' },
      { name: 'Aperçu de légende Instagram', note: 'Visible avant la troncature « Plus »' },
      { name: 'Publication LinkedIn', note: 'Mise à jour standard maximale du fil' },
    ],
  },
  de: {
    sampleText:
      'Schreiben Sie klare, prägnante Texte, die die Zeichenlimits der Plattformen einhalten, ohne dass sie in Suchergebnissen oder sozialen Feeds ungünstig abgeschnitten werden.',
    withSpaces: 'Mit Leerzeichen',
    withoutSpaces: 'Ohne Leerzeichen',
    words: 'Wörter',
    letters: 'Buchstaben',
    digits: 'Ziffern',
    utf8Bytes: 'UTF-8-Bytes',
    copyText: 'Text kopieren',
    textToMeasure: 'Text zur Messung der Zeichenlänge',
    placeholder:
      'Text eingeben oder einfügen, um exakte Zeichenzahlen, Bytegröße und Plattformlimits zu prüfen...',
    whitespaceChars: 'Leerzeichen',
    lines: 'Zeilen',
    platformLimitsTitle: 'Zeichenlimits für Plattformen und SEO',
    over: 'darüber',
    left: 'übrig',
    platformLimits: [
      { name: 'SEO-Meta-Titel', note: 'Empfohlene Länge des Google-Titels in den Suchergebnissen' },
      { name: 'SEO-Meta-Beschreibung', note: 'Standard-Schwellenwert für Snippets auf dem Desktop' },
      { name: 'SMS-Segment', note: 'Eine einzelne GSM-7-SMS-Nachricht' },
      { name: 'X-/Twitter-Beitrag', note: 'Standardlänge eines Beitrags' },
      { name: 'Instagram-Bildunterschrift (Vorschau)', note: 'Sichtbar vor dem Kürzen mit „Mehr“' },
      { name: 'LinkedIn-Beitrag', note: 'Maximale Standard-Feed-Aktualisierung' },
    ],
  },
  it: {
    sampleText:
      'Scrivi testi chiari e concisi che rispettino i limiti di caratteri delle piattaforme, senza troncamenti scomodi nei risultati di ricerca o nei feed social.',
    withSpaces: 'Con spazi',
    withoutSpaces: 'Senza spazi',
    words: 'Parole',
    letters: 'Lettere',
    digits: 'Cifre',
    utf8Bytes: 'Byte UTF-8',
    copyText: 'Copia il testo',
    textToMeasure: 'Testo per misurare la lunghezza in caratteri',
    placeholder:
      'Digita o incolla il testo per controllare il numero esatto di caratteri, la dimensione in byte e i limiti delle piattaforme...',
    whitespaceChars: 'Caratteri di spaziatura',
    lines: 'Righe',
    platformLimitsTitle: 'Limiti di caratteri per piattaforme e SEO',
    over: 'in più',
    left: 'rimasti',
    platformLimits: [
      { name: 'Meta title SEO', note: 'Lunghezza consigliata del titolo nei risultati Google' },
      { name: 'Meta description SEO', note: 'Soglia standard dello snippet su desktop' },
      { name: 'Segmento SMS', note: 'Un singolo messaggio SMS GSM-7' },
      { name: 'Post su X / Twitter', note: 'Lunghezza standard di un post' },
      { name: 'Anteprima didascalia Instagram', note: 'Visibile prima del troncamento con "Altro"' },
      { name: 'Post su LinkedIn', note: 'Aggiornamento standard massimo del feed' },
    ],
  },
  id: {
    sampleText:
      'Tulis teks yang jelas dan ringkas agar sesuai dengan batas karakter platform tanpa terpotong secara aneh di hasil pencarian atau feed media sosial.',
    withSpaces: 'Dengan Spasi',
    withoutSpaces: 'Tanpa Spasi',
    words: 'Kata',
    letters: 'Huruf',
    digits: 'Angka',
    utf8Bytes: 'Byte UTF-8',
    copyText: 'Salin teks',
    textToMeasure: 'Teks untuk mengukur panjang karakter',
    placeholder:
      'Ketik atau tempel teks untuk melihat jumlah karakter yang tepat, ukuran byte, dan batas platform...',
    whitespaceChars: 'Karakter spasi',
    lines: 'Baris',
    platformLimitsTitle: 'Batas Karakter Platform & SEO',
    over: 'lebih',
    left: 'tersisa',
    platformLimits: [
      { name: 'Judul Meta SEO', note: 'Panjang judul SERP Google yang disarankan' },
      { name: 'Deskripsi Meta SEO', note: 'Batas standar cuplikan desktop' },
      { name: 'Segmen SMS', note: 'Satu pesan SMS GSM-7' },
      { name: 'Postingan X / Twitter', note: 'Panjang postingan standar' },
      { name: 'Pratinjau Caption Instagram', note: 'Terlihat sebelum pemotongan "Selengkapnya"' },
      { name: 'Postingan LinkedIn', note: 'Pembaruan feed standar maksimum' },
    ],
  },
  ru: {
    sampleText:
      'Пишите чёткий и лаконичный текст, который укладывается в ограничения символов платформ и не обрывается неловко в результатах поиска или лентах соцсетей.',
    withSpaces: 'С пробелами',
    withoutSpaces: 'Без пробелов',
    words: 'Слова',
    letters: 'Буквы',
    digits: 'Цифры',
    utf8Bytes: 'Байты UTF-8',
    copyText: 'Копировать текст',
    textToMeasure: 'Текст для измерения длины в символах',
    placeholder:
      'Введите или вставьте текст, чтобы узнать точное число символов, размер в байтах и лимиты платформ...',
    whitespaceChars: 'Пробельные символы',
    lines: 'Строки',
    platformLimitsTitle: 'Лимиты символов платформ и SEO',
    over: 'превышение',
    left: 'осталось',
    platformLimits: [
      { name: 'SEO-заголовок Meta', note: 'Рекомендуемая длина заголовка в выдаче Google' },
      { name: 'SEO-описание Meta', note: 'Стандартный порог сниппета на компьютере' },
      { name: 'Сегмент SMS', note: 'Одно SMS-сообщение GSM-7' },
      { name: 'Пост X / Twitter', note: 'Стандартная длина поста' },
      { name: 'Предпросмотр подписи Instagram', note: 'Видно до обрезки «Ещё»' },
      { name: 'Пост LinkedIn', note: 'Максимальное стандартное обновление ленты' },
    ],
  },
};

interface PlatformLimit {
  name: string;
  limit: number;
  note: string;
}

const PLATFORM_LIMIT_NUMBERS = [60, 160, 160, 280, 125, 3000];

export default function CharacterCounterTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [text, setText] = useState('');

  const platformLimits: PlatformLimit[] = s.platformLimits.map((item, i) => ({
    name: item.name,
    limit: PLATFORM_LIMIT_NUMBERS[i],
    note: item.note,
  }));

  const metrics = useMemo(() => {
    const withSpaces = text.length;
    const withoutSpaces = text.replace(/\s/g, '').length;
    const spacesOnly = withSpaces - withoutSpaces;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;
    const utf8Bytes = new TextEncoder().encode(text).length;
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
    const lines = text ? text.split(/\r?\n/).length : 0;

    return {
      withSpaces,
      withoutSpaces,
      spacesOnly,
      letters,
      digits,
      utf8Bytes,
      words,
      lines,
    };
  }, [text]);

  return (
    <div className="space-y-6">
      <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.withSpaces}</dt>
          <dd className="mt-1 text-2xl font-bold text-indigo-600 tabular-nums">
            {metrics.withSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.withoutSpaces}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.withoutSpaces.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.words}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.words.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.letters}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.letters.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.digits}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.digits.toLocaleString(locale)}
          </dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
          <dt className="text-xs text-slate-500">{s.utf8Bytes}</dt>
          <dd className="mt-1 text-2xl font-bold text-slate-900 tabular-nums">
            {metrics.utf8Bytes.toLocaleString(locale)}
          </dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setText(s.sampleText)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:text-slate-400 disabled:bg-slate-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>

        <CopyButton text={text} label={s.copyText} copiedLabel={t.common.copied} />
      </div>

      <div>
        <label htmlFor="character-counter-input" className="sr-only">
          {s.textToMeasure}
        </label>
        <textarea
          id="character-counter-input"
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={s.placeholder}
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm sm:text-base leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
        />
        <p className="mt-2 text-xs text-slate-500 tabular-nums">
          {s.whitespaceChars}: {metrics.spacesOnly.toLocaleString(locale)} · {s.lines}:{' '}
          {metrics.lines.toLocaleString(locale)}
        </p>
      </div>

      {/* Platform Limit Progress Bars */}
      <div className="pt-2">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">
          {s.platformLimitsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {platformLimits.map((item) => {
            const count = metrics.withSpaces;
            const remaining = item.limit - count;
            const pct = Math.min(100, Math.round((count / item.limit) * 100));
            const isOver = count > item.limit;

            return (
              <div
                key={item.name}
                className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5"
              >
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  <span
                    className={`font-mono text-xs tabular-nums font-medium ${
                      isOver ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    {count} / {item.limit} ({isOver ? `${Math.abs(remaining)} ${s.over}` : `${remaining} ${s.left}`})
                  </span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-150 ${
                      isOver ? 'bg-red-600' : pct >= 85 ? 'bg-amber-500' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-500">{item.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
