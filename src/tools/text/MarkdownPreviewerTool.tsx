import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    sampleMarkdown: `# UtilityFlow Release Notes

Welcome to **Markdown Previewer**, a fast client-side editor with live *HTML* export.

## Key Capabilities

- Instant formatting for headings, lists, and links
- Safe HTML escaping with zero remote uploads
- One-click raw HTML copy and download

> Keep documentation close to the work and preview structure before publishing.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Learn more at [UtilityFlow](/tools/).`,
    renderedPreview: 'Rendered Preview',
    rawHtml: 'Raw HTML',
    exportHtml: 'Export HTML',
    copyHtml: 'Copy HTML',
    markdownSource: 'Markdown Source',
    livePreview: 'Live Preview',
    compiledHtml: 'Compiled HTML',
    compiledHtmlAria: 'Compiled HTML source',
    inputPlaceholder: 'Write Markdown (# Heading, **bold**, - list, [link](https://...))...',
    emptyPreview: 'Preview will appear as you type Markdown...',
  },
  es: {
    sampleMarkdown: `# Notas de la versión de UtilityFlow

Bienvenido a **Markdown Previewer**, un editor rápido del lado del cliente con exportación *HTML* en vivo.

## Capacidades clave

- Formato instantáneo para encabezados, listas y enlaces
- Escape seguro de HTML sin subidas remotas
- Copia y descarga de HTML sin procesar con un clic

> Mantén la documentación cerca del trabajo y revisa la estructura antes de publicar.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Obtén más información en [UtilityFlow](/tools/).`,
    renderedPreview: 'Vista previa renderizada',
    rawHtml: 'HTML sin procesar',
    exportHtml: 'Exportar HTML',
    copyHtml: 'Copiar HTML',
    markdownSource: 'Fuente Markdown',
    livePreview: 'Vista previa en vivo',
    compiledHtml: 'HTML compilado',
    compiledHtmlAria: 'Código fuente HTML compilado',
    inputPlaceholder: 'Escribe Markdown (# Encabezado, **negrita**, - lista, [enlace](https://...))...',
    emptyPreview: 'La vista previa aparecerá mientras escribes Markdown...',
  },
  pt: {
    sampleMarkdown: `# Notas de lançamento do UtilityFlow

Bem-vindo ao **Markdown Previewer**, um editor rápido no navegador com exportação *HTML* em tempo real.

## Principais recursos

- Formatação instantânea para títulos, listas e links
- Escape seguro de HTML sem nenhum upload remoto
- Cópia e download de HTML bruto com um clique

> Mantenha a documentação perto do trabalho e revise a estrutura antes de publicar.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Saiba mais em [UtilityFlow](/tools/).`,
    renderedPreview: 'Prévia renderizada',
    rawHtml: 'HTML bruto',
    exportHtml: 'Exportar HTML',
    copyHtml: 'Copiar HTML',
    markdownSource: 'Fonte Markdown',
    livePreview: 'Prévia ao vivo',
    compiledHtml: 'HTML compilado',
    compiledHtmlAria: 'Código-fonte HTML compilado',
    inputPlaceholder: 'Escreva Markdown (# Título, **negrito**, - lista, [link](https://...))...',
    emptyPreview: 'A prévia aparecerá conforme você digita Markdown...',
  },
  fr: {
    sampleMarkdown: `# Notes de version d'UtilityFlow

Bienvenue dans **Markdown Previewer**, un éditeur rapide côté client avec export *HTML* en direct.

## Fonctionnalités clés

- Mise en forme instantanée pour les titres, les listes et les liens
- Échappement HTML sécurisé sans aucun envoi distant
- Copie et téléchargement du HTML brut en un clic

> Gardez la documentation près du travail et vérifiez la structure avant de publier.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

En savoir plus sur [UtilityFlow](/tools/).`,
    renderedPreview: 'Aperçu rendu',
    rawHtml: 'HTML brut',
    exportHtml: 'Exporter le HTML',
    copyHtml: 'Copier le HTML',
    markdownSource: 'Source Markdown',
    livePreview: 'Aperçu en direct',
    compiledHtml: 'HTML compilé',
    compiledHtmlAria: 'Code source HTML compilé',
    inputPlaceholder: 'Écrivez du Markdown (# Titre, **gras**, - liste, [lien](https://...))...',
    emptyPreview: 'L\'aperçu apparaîtra au fur et à mesure de votre saisie Markdown...',
  },
  de: {
    sampleMarkdown: `# UtilityFlow Versionshinweise

Willkommen beim **Markdown Previewer**, einem schnellen clientseitigen Editor mit Live-*HTML*-Export.

## Hauptfunktionen

- Sofortige Formatierung für Überschriften, Listen und Links
- Sicheres HTML-Escaping ohne Remote-Uploads
- HTML-Rohdaten mit einem Klick kopieren und herunterladen

> Halten Sie die Dokumentation nah an der Arbeit und prüfen Sie die Struktur vor der Veröffentlichung.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Mehr erfahren unter [UtilityFlow](/tools/).`,
    renderedPreview: 'Gerenderte Vorschau',
    rawHtml: 'Rohes HTML',
    exportHtml: 'HTML exportieren',
    copyHtml: 'HTML kopieren',
    markdownSource: 'Markdown-Quelle',
    livePreview: 'Live-Vorschau',
    compiledHtml: 'Kompiliertes HTML',
    compiledHtmlAria: 'Kompilierte HTML-Quelle',
    inputPlaceholder: 'Markdown schreiben (# Überschrift, **fett**, - Liste, [Link](https://...))...',
    emptyPreview: 'Die Vorschau erscheint, während Sie Markdown eingeben...',
  },
  it: {
    sampleMarkdown: `# Note di rilascio di UtilityFlow

Benvenuto in **Markdown Previewer**, un editor rapido lato client con esportazione *HTML* in tempo reale.

## Funzionalità principali

- Formattazione immediata di titoli, elenchi e link
- Escape HTML sicuro senza caricamenti remoti
- Copia e download dell\'HTML grezzo con un clic

> Tieni la documentazione vicina al lavoro e controlla la struttura prima della pubblicazione.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Scopri di più su [UtilityFlow](/tools/).`,
    renderedPreview: 'Anteprima renderizzata',
    rawHtml: 'HTML grezzo',
    exportHtml: 'Esporta HTML',
    copyHtml: 'Copia HTML',
    markdownSource: 'Sorgente Markdown',
    livePreview: 'Anteprima live',
    compiledHtml: 'HTML compilato',
    compiledHtmlAria: 'Sorgente HTML compilata',
    inputPlaceholder: 'Scrivi Markdown (# Titolo, **grassetto**, - elenco, [link](https://...))...',
    emptyPreview: 'L\'anteprima apparirà mentre scrivi Markdown...',
  },
  id: {
    sampleMarkdown: `# Catatan Rilis UtilityFlow

Selamat datang di **Markdown Previewer**, editor sisi klien yang cepat dengan ekspor *HTML* langsung.

## Kemampuan Utama

- Pemformatan instan untuk judul, daftar, dan tautan
- Escaping HTML yang aman tanpa unggahan jarak jauh
- Salin dan unduh HTML mentah dengan satu klik

> Simpan dokumentasi dekat dengan pekerjaan dan pratinjau strukturnya sebelum menerbitkan.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Pelajari lebih lanjut di [UtilityFlow](/tools/).`,
    renderedPreview: 'Pratinjau yang Dirender',
    rawHtml: 'HTML Mentah',
    exportHtml: 'Ekspor HTML',
    copyHtml: 'Salin HTML',
    markdownSource: 'Sumber Markdown',
    livePreview: 'Pratinjau Langsung',
    compiledHtml: 'HTML yang Dikompilasi',
    compiledHtmlAria: 'Sumber HTML yang dikompilasi',
    inputPlaceholder: 'Tulis Markdown (# Judul, **tebal**, - daftar, [tautan](https://...))...',
    emptyPreview: 'Pratinjau akan muncul saat Anda mengetik Markdown...',
  },
  ru: {
    sampleMarkdown: `# Заметки о выпуске UtilityFlow

Добро пожаловать в **Markdown Previewer** — быстрый редактор на стороне клиента с живым экспортом в *HTML*.

## Основные возможности

- Мгновенное форматирование заголовков, списков и ссылок
- Безопасное экранирование HTML без загрузки на сервер
- Копирование и скачивание исходного HTML в один клик

> Держите документацию рядом с работой и проверяйте структуру перед публикацией.

\`\`\`json
{
  "tool": "markdown-previewer",
  "mode": "browser-side"
}
\`\`\`

Подробнее — на [UtilityFlow](/tools/).`,
    renderedPreview: 'Отрендеренный предпросмотр',
    rawHtml: 'Исходный HTML',
    exportHtml: 'Экспорт HTML',
    copyHtml: 'Копировать HTML',
    markdownSource: 'Исходник Markdown',
    livePreview: 'Живой предпросмотр',
    compiledHtml: 'Скомпилированный HTML',
    compiledHtmlAria: 'Исходный код скомпилированного HTML',
    inputPlaceholder: 'Напишите Markdown (# Заголовок, **жирный**, - список, [ссылка](https://...))...',
    emptyPreview: 'Предпросмотр появится, когда вы начнёте вводить Markdown...',
  },
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHref(raw: string): string {
  const trimmed = raw.trim();
  if (
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('/') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('mailto:')
  ) {
    return escapeHtml(trimmed);
  }
  return '#';
}

function formatInline(raw: string): string {
  const escaped = escapeHtml(raw);
  return escaped
    .replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-900">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
      const safe = sanitizeHref(url);
      const isExternal = safe.startsWith('http');
      return `<a href="${safe}" class="text-indigo-600 underline hover:text-indigo-700"${
        isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
      }>${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/__([^_]+)__/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    .replace(/~~([^~]+)~~/g, '<del>$1</del>');
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (listType) {
      html.push(listType === 'ul' ? '</ul>' : '</ol>');
      listType = null;
    }
  };

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      closeList();
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
      } else {
        html.push(
          `<pre class="my-3 overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-100"><code>${escapeHtml(
            codeLines.join('\n')
          )}</code></pre>`
        );
        inCodeBlock = false;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      closeList();
      continue;
    }

    if (/^---+$|^\*\*\*+$/.test(trimmed)) {
      closeList();
      html.push('<hr class="my-5 border-slate-200" />');
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      const sizes: Record<number, string> = {
        1: 'text-2xl font-bold text-slate-900 mt-4 mb-3',
        2: 'text-xl font-bold text-slate-900 mt-5 mb-2',
        3: 'text-lg font-semibold text-slate-900 mt-4 mb-2',
        4: 'text-base font-semibold text-slate-900 mt-3 mb-1.5',
        5: 'text-sm font-semibold text-slate-900 mt-3 mb-1',
        6: 'text-xs font-semibold uppercase tracking-wide text-slate-700 mt-3 mb-1',
      };
      html.push(`<h${level} class="${sizes[level]}">${formatInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith('> ')) {
      closeList();
      html.push(
        `<blockquote class="my-3 border-l-2 border-slate-300 pl-4 italic text-slate-600">${formatInline(
          trimmed.slice(2)
        )}</blockquote>`
      );
      continue;
    }

    const ulMatch = /^[-*+]\s+(.+)$/.exec(trimmed);
    if (ulMatch) {
      if (listType !== 'ul') {
        closeList();
        listType = 'ul';
        html.push('<ul class="my-3 list-disc pl-6 space-y-1 text-slate-700">');
      }
      html.push(`<li>${formatInline(ulMatch[1])}</li>`);
      continue;
    }

    const olMatch = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (olMatch) {
      if (listType !== 'ol') {
        closeList();
        listType = 'ol';
        html.push('<ol class="my-3 list-decimal pl-6 space-y-1 text-slate-700">');
      }
      html.push(`<li>${formatInline(olMatch[1])}</li>`);
      continue;
    }

    closeList();
    html.push(`<p class="my-2.5 leading-relaxed text-slate-700">${formatInline(trimmed)}</p>`);
  }

  closeList();
  if (inCodeBlock && codeLines.length > 0) {
    html.push(
      `<pre class="my-3 overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-100"><code>${escapeHtml(
        codeLines.join('\n')
      )}</code></pre>`
    );
  }

  return html.join('\n');
}

export default function MarkdownPreviewerTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [markdown, setMarkdown] = useState(s.sampleMarkdown);
  const [viewMode, setViewMode] = useState<'preview' | 'html'>('preview');

  const compiledHtml = useMemo(() => markdownToHtml(markdown), [markdown]);

  const handleDownloadHtml = () => {
    if (!compiledHtml) return;
    const doc = `<!doctype html>\n<html lang="${locale}">\n<head>\n<meta charset="utf-8" />\n<title>Markdown Export</title>\n</head>\n<body>\n${compiledHtml}\n</body>\n</html>`;
    const blob = new Blob([doc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'markdown-export.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMarkdown(s.sampleMarkdown)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.common.loadSample}</span>
          </button>
          <button
            type="button"
            onClick={() => setMarkdown('')}
            disabled={!markdown}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.common.clear}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setViewMode('preview')}
              className={`rounded-md px-3 py-1 text-xs font-medium cursor-pointer ${
                viewMode === 'preview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.renderedPreview}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('html')}
              className={`rounded-md px-3 py-1 text-xs font-medium cursor-pointer ${
                viewMode === 'html' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              {s.rawHtml}
            </button>
          </div>
          <button
            type="button"
            onClick={handleDownloadHtml}
            disabled={!compiledHtml}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{s.exportHtml}</span>
          </button>
          <CopyButton text={compiledHtml} label={s.copyHtml} copiedLabel={t.common.copied} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="md-editor" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.markdownSource}
          </label>
          <textarea
            id="md-editor"
            rows={14}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder={s.inputPlaceholder}
            className="w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
          />
        </div>

        <div>
          <span className="block text-sm font-semibold text-slate-900 mb-1.5">
            {viewMode === 'preview' ? s.livePreview : s.compiledHtml}
          </span>
          {viewMode === 'preview' ? (
            <div
              className="h-[344px] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  compiledHtml ||
                  `<p class="text-slate-400">${s.emptyPreview}</p>`,
              }}
            />
          ) : (
            <textarea
              rows={14}
              readOnly
              aria-label={s.compiledHtmlAria}
              value={compiledHtml}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-800 focus:outline-none"
            />
          )}
        </div>
      </div>
    </div>
  );
}
