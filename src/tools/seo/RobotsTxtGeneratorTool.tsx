import { Download, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    starterTemplates: 'Starter Templates:',
    allowAll: 'Allow All Crawlers',
    standardWebApp: 'Standard Web App / SaaS',
    wordpressClean: 'WordPress Clean',
    stagingBlockAll: 'Staging (Block All)',
    crawlerRules: 'Crawler Path Rules',
    addRule: 'Add Rule',
    directiveAria: 'Directive',
    pathAria: 'Path',
    deleteRuleAria: 'Delete rule',
    crawlDelayLabel: 'Crawl-delay (seconds, optional)',
    crawlDelayPlaceholder: 'None',
    sitemapUrlsLabel: 'Sitemap URLs (one per line)',
    generatedLabel: 'Generated robots.txt',
  },
  es: {
    starterTemplates: 'Plantillas iniciales:',
    allowAll: 'Permitir todos los rastreadores',
    standardWebApp: 'Aplicación web / SaaS estándar',
    wordpressClean: 'WordPress limpio',
    stagingBlockAll: 'Entorno de pruebas (bloquear todo)',
    crawlerRules: 'Reglas de rutas para rastreadores',
    addRule: 'Agregar regla',
    directiveAria: 'Directiva',
    pathAria: 'Ruta',
    deleteRuleAria: 'Eliminar regla',
    crawlDelayLabel: 'Crawl-delay (segundos, opcional)',
    crawlDelayPlaceholder: 'Ninguno',
    sitemapUrlsLabel: 'URL de sitemaps (una por línea)',
    generatedLabel: 'robots.txt generado',
  },
  pt: {
    starterTemplates: 'Modelos iniciais:',
    allowAll: 'Permitir todos os rastreadores',
    standardWebApp: 'Aplicativo web / SaaS padrão',
    wordpressClean: 'WordPress limpo',
    stagingBlockAll: 'Staging (bloquear tudo)',
    crawlerRules: 'Regras de caminho para rastreadores',
    addRule: 'Adicionar regra',
    directiveAria: 'Diretiva',
    pathAria: 'Caminho',
    deleteRuleAria: 'Excluir regra',
    crawlDelayLabel: 'Crawl-delay (segundos, opcional)',
    crawlDelayPlaceholder: 'Nenhum',
    sitemapUrlsLabel: 'URLs de sitemap (uma por linha)',
    generatedLabel: 'robots.txt gerado',
  },
  fr: {
    starterTemplates: 'Modèles de départ :',
    allowAll: 'Autoriser tous les robots d\'exploration',
    standardWebApp: 'Application web / SaaS standard',
    wordpressClean: 'WordPress épuré',
    stagingBlockAll: 'Préproduction (tout bloquer)',
    crawlerRules: 'Règles de chemin pour les robots',
    addRule: 'Ajouter une règle',
    directiveAria: 'Directive',
    pathAria: 'Chemin',
    deleteRuleAria: 'Supprimer la règle',
    crawlDelayLabel: 'Crawl-delay (secondes, facultatif)',
    crawlDelayPlaceholder: 'Aucun',
    sitemapUrlsLabel: 'URL de sitemap (une par ligne)',
    generatedLabel: 'robots.txt généré',
  },
  de: {
    starterTemplates: 'Startvorlagen:',
    allowAll: 'Alle Crawler erlauben',
    standardWebApp: 'Standard-Web-App / SaaS',
    wordpressClean: 'WordPress (sauber)',
    stagingBlockAll: 'Staging (alle blockieren)',
    crawlerRules: 'Crawler-Pfadregeln',
    addRule: 'Regel hinzufügen',
    directiveAria: 'Anweisung',
    pathAria: 'Pfad',
    deleteRuleAria: 'Regel löschen',
    crawlDelayLabel: 'Crawl-Delay (Sekunden, optional)',
    crawlDelayPlaceholder: 'Keiner',
    sitemapUrlsLabel: 'Sitemap-URLs (eine pro Zeile)',
    generatedLabel: 'Generierte robots.txt',
  },
  it: {
    starterTemplates: 'Modelli di partenza:',
    allowAll: 'Consenti tutti i crawler',
    standardWebApp: 'Web app standard / SaaS',
    wordpressClean: 'WordPress pulito',
    stagingBlockAll: 'Staging (blocca tutto)',
    crawlerRules: 'Regole di percorso per i crawler',
    addRule: 'Aggiungi regola',
    directiveAria: 'Direttiva',
    pathAria: 'Percorso',
    deleteRuleAria: 'Elimina regola',
    crawlDelayLabel: 'Crawl-delay (secondi, facoltativo)',
    crawlDelayPlaceholder: 'Nessuno',
    sitemapUrlsLabel: 'URL sitemap (uno per riga)',
    generatedLabel: 'robots.txt generato',
  },
};

interface RuleRow {
  id: number;
  userAgent: string;
  directive: 'Allow' | 'Disallow';
  path: string;
}

export default function RobotsTxtGeneratorTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [rules, setRules] = useState<RuleRow[]>([
    { id: 1, userAgent: '*', directive: 'Allow', path: '/' },
    { id: 2, userAgent: '*', directive: 'Disallow', path: '/admin/' },
    { id: 3, userAgent: '*', directive: 'Disallow', path: '/api/' },
  ]);
  const [crawlDelay, setCrawlDelay] = useState('');
  const [sitemapsText, setSitemapsText] = useState('https://utilityflow.online/sitemap.xml');

  const applyPreset = (preset: 'open' | 'spa' | 'wordpress' | 'block-all') => {
    if (preset === 'open') {
      setRules([{ id: 1, userAgent: '*', directive: 'Allow', path: '/' }]);
      setCrawlDelay('');
    } else if (preset === 'spa') {
      setRules([
        { id: 1, userAgent: '*', directive: 'Allow', path: '/' },
        { id: 2, userAgent: '*', directive: 'Disallow', path: '/api/' },
        { id: 3, userAgent: '*', directive: 'Disallow', path: '/private/' },
      ]);
      setCrawlDelay('');
    } else if (preset === 'wordpress') {
      setRules([
        { id: 1, userAgent: '*', directive: 'Disallow', path: '/wp-admin/' },
        { id: 2, userAgent: '*', directive: 'Allow', path: '/wp-admin/admin-ajax.php' },
        { id: 3, userAgent: '*', directive: 'Disallow', path: '/?s=' },
      ]);
      setCrawlDelay('');
    } else {
      setRules([{ id: 1, userAgent: '*', directive: 'Disallow', path: '/' }]);
      setCrawlDelay('');
    }
  };

  const robotsOutput = useMemo(() => {
    const groups = new Map<string, RuleRow[]>();
    for (const rule of rules) {
      const ua = rule.userAgent.trim() || '*';
      const list = groups.get(ua) ?? [];
      list.push(rule);
      groups.set(ua, list);
    }

    const blocks: string[] = [];
    for (const [ua, list] of groups.entries()) {
      const lines = [`User-agent: ${ua}`];
      for (const item of list) {
        if (item.path.trim()) {
          lines.push(`${item.directive}: ${item.path.trim()}`);
        }
      }
      if (ua === '*' && crawlDelay.trim() && Number(crawlDelay) > 0) {
        lines.push(`Crawl-delay: ${Number(crawlDelay)}`);
      }
      blocks.push(lines.join('\n'));
    }

    const sitemaps = sitemapsText
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => `Sitemap: ${s}`);

    if (sitemaps.length > 0) {
      blocks.push(sitemaps.join('\n'));
    }

    return `${blocks.join('\n\n')}\n`;
  }, [rules, crawlDelay, sitemapsText]);

  const addRule = () => {
    const nextId = rules.reduce((m, r) => Math.max(m, r.id), 0) + 1;
    setRules([...rules, { id: nextId, userAgent: '*', directive: 'Disallow', path: '/tmp/' }]);
  };

  const downloadFile = () => {
    const blob = new Blob([robotsOutput], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">{s.starterTemplates}</span>
        <button
          type="button"
          onClick={() => applyPreset('open')}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 cursor-pointer"
        >
          {s.allowAll}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('spa')}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 cursor-pointer"
        >
          {s.standardWebApp}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('wordpress')}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 cursor-pointer"
        >
          {s.wordpressClean}
        </button>
        <button
          type="button"
          onClick={() => applyPreset('block-all')}
          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 cursor-pointer"
        >
          {s.stagingBlockAll}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900">{s.crawlerRules}</h3>
            <button
              type="button"
              onClick={addRule}
              className="inline-flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              {s.addRule}
            </button>
          </div>

          <div className="space-y-2">
            {rules.map((rule) => (
              <div key={rule.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  aria-label="User-agent"
                  value={rule.userAgent}
                  onChange={(e) =>
                    setRules(rules.map((r) => (r.id === rule.id ? { ...r, userAgent: e.target.value } : r)))
                  }
                  placeholder="*"
                  className="col-span-3 rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-mono text-xs"
                />
                <select
                  aria-label={s.directiveAria}
                  value={rule.directive}
                  onChange={(e) =>
                    setRules(
                      rules.map((r) =>
                        r.id === rule.id ? { ...r, directive: e.target.value as 'Allow' | 'Disallow' } : r
                      )
                    )
                  }
                  className="col-span-3 rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs"
                >
                  <option value="Allow">Allow</option>
                  <option value="Disallow">Disallow</option>
                </select>
                <input
                  type="text"
                  aria-label={s.pathAria}
                  value={rule.path}
                  onChange={(e) =>
                    setRules(rules.map((r) => (r.id === rule.id ? { ...r, path: e.target.value } : r)))
                  }
                  placeholder="/path/"
                  className="col-span-5 rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-mono text-xs"
                />
                <button
                  type="button"
                  disabled={rules.length <= 1}
                  onClick={() => setRules(rules.filter((r) => r.id !== rule.id))}
                  aria-label={s.deleteRuleAria}
                  className="col-span-1 flex justify-center rounded-lg border border-slate-300 bg-white p-2 text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label htmlFor="rob-delay" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.crawlDelayLabel}
              </label>
              <input
                id="rob-delay"
                type="number"
                min={0}
                max={60}
                value={crawlDelay}
                onChange={(e) => setCrawlDelay(e.target.value)}
                placeholder={s.crawlDelayPlaceholder}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="rob-sitemaps" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.sitemapUrlsLabel}
              </label>
              <textarea
                id="rob-sitemaps"
                rows={2}
                value={sitemapsText}
                onChange={(e) => setSitemapsText(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-700">{s.generatedLabel}</span>
            <div className="flex items-center gap-2">
              <CopyButton text={robotsOutput} label={t.common.copy} copiedLabel={t.common.copied} />
              <button
                type="button"
                onClick={downloadFile}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {t.common.download}
              </button>
            </div>
          </div>
          <pre className="rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs text-slate-900 whitespace-pre-wrap overflow-x-auto min-h-48">
            {robotsOutput}
          </pre>
        </div>
      </div>
    </div>
  );
}
