import { useMemo, useState } from 'react';
import { CopyButton } from '../../components/common/CopyButton';
import { useLocale } from '../../locales/LocaleContext';

const STRINGS = {
  en: {
    presets: {
      instagramBio: 'Instagram Bio',
      linkedinPost: 'LinkedIn Post',
      newsletter: 'Newsletter',
      youtubeDescription: 'YouTube Description',
    },
    presetsLabel: 'Quick Channel Presets:',
    errorEmpty: 'Enter a destination website URL.',
    errorInvalid: 'Enter a valid destination URL (for example https://example.com/landing).',
    labelUrl: 'Website Destination URL *',
    labelSource: 'Campaign Source (utm_source) *',
    phSource: 'e.g. instagram, newsletter, google',
    labelMedium: 'Campaign Medium (utm_medium) *',
    phMedium: 'e.g. social, cpc, email, video',
    labelCampaign: 'Campaign Name (utm_campaign)',
    phCampaign: 'e.g. spring_launch',
    labelContent: 'Campaign Content (utm_content)',
    phContent: 'e.g. hero_banner, bio_button',
    labelTerm: 'Campaign Term (utm_term)',
    phTerm: 'Optional paid keyword or audience tag',
    normalizeLabel: 'Force lowercase & convert spaces to underscores (`_`)',
    generatedTitle: 'Generated Campaign URL',
    copyUtm: 'Copy UTM URL',
    thParam: 'Query Parameter',
    thValue: 'Normalized Value',
  },
  es: {
    presets: {
      instagramBio: 'Biografía de Instagram',
      linkedinPost: 'Publicación de LinkedIn',
      newsletter: 'Boletín',
      youtubeDescription: 'Descripción de YouTube',
    },
    presetsLabel: 'Preajustes rápidos de canal:',
    errorEmpty: 'Ingrese la URL del sitio web de destino.',
    errorInvalid: 'Ingrese una URL de destino válida (por ejemplo, https://example.com/landing).',
    labelUrl: 'URL del sitio web de destino *',
    labelSource: 'Fuente de la campaña (utm_source) *',
    phSource: 'p. ej., instagram, newsletter, google',
    labelMedium: 'Medio de la campaña (utm_medium) *',
    phMedium: 'p. ej., social, cpc, email, video',
    labelCampaign: 'Nombre de la campaña (utm_campaign)',
    phCampaign: 'p. ej., spring_launch',
    labelContent: 'Contenido de la campaña (utm_content)',
    phContent: 'p. ej., hero_banner, bio_button',
    labelTerm: 'Término de la campaña (utm_term)',
    phTerm: 'Palabra clave pagada o etiqueta de audiencia opcional',
    normalizeLabel: 'Forzar minúsculas y convertir espacios en guiones bajos (`_`)',
    generatedTitle: 'URL de campaña generada',
    copyUtm: 'Copiar URL UTM',
    thParam: 'Parámetro de consulta',
    thValue: 'Valor normalizado',
  },
};

type PresetId = keyof typeof STRINGS.en.presets;

const PRESETS: {
  id: PresetId;
  source: string;
  medium: string;
  campaign: string;
  content: string;
}[] = [
  { id: 'instagramBio', source: 'instagram', medium: 'social', campaign: 'bio_link', content: 'profile' },
  { id: 'linkedinPost', source: 'linkedin', medium: 'social', campaign: 'organic_post', content: 'feed' },
  { id: 'newsletter', source: 'newsletter', medium: 'email', campaign: 'weekly_digest', content: 'cta_button' },
  { id: 'youtubeDescription', source: 'youtube', medium: 'video', campaign: 'creator_channel', content: 'top_link' },
];

export default function UtmLinkBuilderTool() {
  const { locale, t } = useLocale();
  const s = STRINGS[locale];
  const [baseUrl, setBaseUrl] = useState('https://utilityflow.online/tools/');
  const [source, setSource] = useState('instagram');
  const [medium, setMedium] = useState('social');
  const [campaign, setCampaign] = useState('spring_launch');
  const [term, setTerm] = useState('');
  const [content, setContent] = useState('bio_button');
  const [normalizeSlug, setNormalizeSlug] = useState(true);

  const formatParam = (raw: string): string => {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    if (!normalizeSlug) return trimmed;
    return trimmed
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_-]/g, '');
  };

  const result = useMemo(() => {
    const rawBase = baseUrl.trim();
    if (!rawBase) {
      return { error: s.errorEmpty, finalUrl: '', params: [] as [string, string][] };
    }

    let parsed: URL;
    try {
      const candidate = /^https?:\/\//i.test(rawBase) ? rawBase : `https://${rawBase}`;
      parsed = new URL(candidate);
    } catch {
      return {
        error: s.errorInvalid,
        finalUrl: '',
        params: [] as [string, string][],
      };
    }

    const entries: [string, string][] = [
      ['utm_source', formatParam(source)],
      ['utm_medium', formatParam(medium)],
      ['utm_campaign', formatParam(campaign)],
      ['utm_term', formatParam(term)],
      ['utm_content', formatParam(content)],
    ];

    for (const [k, v] of entries) {
      if (v) {
        parsed.searchParams.set(k, v);
      } else {
        parsed.searchParams.delete(k);
      }
    }

    return {
      error: '',
      finalUrl: parsed.toString(),
      params: Array.from(parsed.searchParams.entries()),
    };
  }, [baseUrl, source, medium, campaign, term, content, normalizeSlug, s]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">{s.presetsLabel}</span>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => {
              setSource(preset.source);
              setMedium(preset.medium);
              setCampaign(preset.campaign);
              setContent(preset.content);
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 cursor-pointer"
          >
            {s.presets[preset.id]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label htmlFor="utm-url" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelUrl}
          </label>
          <input
            id="utm-url"
            type="url"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://example.com/product"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="utm-source" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelSource}
          </label>
          <input
            id="utm-source"
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder={s.phSource}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="utm-medium" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelMedium}
          </label>
          <input
            id="utm-medium"
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            placeholder={s.phMedium}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="utm-campaign" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelCampaign}
          </label>
          <input
            id="utm-campaign"
            type="text"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            placeholder={s.phCampaign}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="utm-content" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelContent}
          </label>
          <input
            id="utm-content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={s.phContent}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div>
          <label htmlFor="utm-term" className="block text-sm font-semibold text-slate-900 mb-1.5">
            {s.labelTerm}
          </label>
          <input
            id="utm-term"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={s.phTerm}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-sm"
          />
        </div>

        <div className="flex items-end pb-2">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={normalizeSlug}
              onChange={(e) => setNormalizeSlug(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600"
            />
            {s.normalizeLabel}
          </label>
        </div>
      </div>

      {result.error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {result.error}
        </div>
      )}

      {result.finalUrl && (
        <div className="space-y-4">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-indigo-700">{s.generatedTitle}</span>
              <CopyButton text={result.finalUrl} label={s.copyUtm} copiedLabel={t.common.copied} />
            </div>
            <div className="rounded-lg border border-indigo-100 bg-white p-3 font-mono text-xs sm:text-sm text-slate-900 break-all">
              {result.finalUrl}
            </div>
          </div>

          {result.params.length > 0 && (
            <div className="rounded-xl border border-slate-200 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-4 font-semibold">{s.thParam}</th>
                    <th className="py-2 px-4 font-semibold">{s.thValue}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {result.params.map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 px-4 text-slate-700">{k}</td>
                      <td className="py-2 px-4 font-semibold text-slate-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
