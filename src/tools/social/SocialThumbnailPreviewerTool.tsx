import { ImagePlus, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { pastelForKey } from '../../components/tool/pastel';
import { useComponentStrings } from '../../locales/componentStrings';

const STRINGS_EN = {
    sampleTitle: 'How We Built 85 Fast Browser Utilities Without Tracking',
    sampleChannel: 'UtilityFlow Studio',
    sampleViews: '24K views · 2 days ago',
    errNotImage: 'Please select a PNG, JPG, or WebP image file.',
    errDecode: 'Could not decode this image file in the browser.',
    previewEyebrow: '1280 × 720 PREVIEW',
    emptyThumb: 'Upload your thumbnail image to inspect feed readability',
    thumbAlt: 'Uploaded thumbnail preview',
    safeZoneTitle: 'Timestamp badge overlap zone',
    chooseThumb: 'Choose Local Thumbnail (PNG / JPG / WebP)',
    replaceThumb: (name: string) => `Replace: ${name}`,
    recommended: 'Recommended 1280×720 (16:9), under 2 MB · Never uploaded',
    diagTitle: 'Image Spec Diagnostics',
    dimLabel: 'Dimensions',
    dimHdOk: '(HD OK)',
    dimUnder: '(<1280px)',
    aspectLabel: 'Aspect Ratio',
    aspectMatch: '16:9 match',
    aspectNo: 'Not 16:9 (may crop/letterbox)',
    sizeLabel: 'File Size',
    sizeOk: '(<2 MB OK)',
    sizeOver: '(>2 MB limit)',
    titleLabel: (len: number) => `Video Title (${len}/100 chars · ~60 visible on mobile)`,
    channelLabel: 'Channel Name',
    durationLabel: 'Duration',
    darkMode: 'Dark Mode Feed Preview',
    safeZone: 'Highlight Timestamp Corner Zone',
    desktopCard: 'Desktop Home Feed Card',
    sidebar: 'Desktop Watch Sidebar (Compact Recommended)',
    untitled: 'Untitled video',
  };

interface ImageInfo {
  width: number;
  height: number;
  sizeBytes: number;
  fileName: string;
}

export default function SocialThumbnailPreviewerTool() {
  const s = useComponentStrings('social-thumbnail-previewer', STRINGS_EN);
  const palette = pastelForKey('social-thumbnail-previewer');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [title, setTitle] = useState(s.sampleTitle);
  const [channel, setChannel] = useState(s.sampleChannel);
  const [views, setViews] = useState(s.sampleViews);
  const [duration, setDuration] = useState('12:48');
  const [darkTheme, setDarkTheme] = useState(false);
  const [showSafeZone, setShowSafeZone] = useState(true);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const handleFileChange = (file: File | undefined) => {
    setUploadError('');
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError(s.errNotImage);
      return;
    }

    const nextUrl = URL.createObjectURL(file);
    const probe = new Image();
    probe.onload = () => {
      setImageUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return nextUrl;
      });
      setImageInfo({
        width: probe.naturalWidth,
        height: probe.naturalHeight,
        sizeBytes: file.size,
        fileName: file.name,
      });
    };
    probe.onerror = () => {
      URL.revokeObjectURL(nextUrl);
      setUploadError(s.errDecode);
    };
    probe.src = nextUrl;
  };

  const ratioDiff = imageInfo
    ? Math.abs(imageInfo.width / Math.max(1, imageInfo.height) - 16 / 9)
    : 0;
  const isSixteenByNine = imageInfo ? ratioDiff < 0.03 : true;
  const isUnderTwoMb = imageInfo ? imageInfo.sizeBytes <= 2 * 1024 * 1024 : true;
  const meetsHdWidth = imageInfo ? imageInfo.width >= 1280 : true;

  const renderThumbBox = (compact = false) => (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={s.thumbAlt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center text-white/90">
          <span className="text-xs font-semibold tracking-wide text-indigo-300">{s.previewEyebrow}</span>
          <span className={`mt-1 font-bold leading-tight ${compact ? 'text-xs' : 'text-base sm:text-lg'}`}>
            {s.emptyThumb}
          </span>
        </div>
      )}

      {duration.trim() && (
        <span className="absolute bottom-1.5 right-1.5 rounded bg-black/85 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-white tabular-nums">
          {duration.trim()}
        </span>
      )}

      {showSafeZone && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 right-1 h-7 w-14 rounded border border-dashed border-amber-400 bg-amber-400/15"
          title={s.safeZoneTitle}
        />
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-5 space-y-4">
          <label
            htmlFor="thumb-upload"
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-300 ${palette.card} px-4 py-6 text-center hover:border-indigo-400 hover:bg-indigo-50/40 cursor-pointer transition-colors`}
          >
            <ImagePlus className="w-7 h-7 text-indigo-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">
              {imageInfo ? s.replaceThumb(imageInfo.fileName) : s.chooseThumb}
            </span>
            <span className="mt-1 text-xs text-slate-500">
              {s.recommended}
            </span>
            <input
              id="thumb-upload"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files?.[0])}
              className="sr-only"
            />
          </label>

          {uploadError && (
            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
              {uploadError}
            </div>
          )}

          {imageInfo && (
            <div className={`rounded-xl border border-slate-200 ${palette.card} p-3.5 text-xs space-y-1.5 tabular-nums`}>
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                {s.diagTitle}
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{s.dimLabel}</span>
                <span className={`font-mono font-semibold ${meetsHdWidth ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {imageInfo.width} × {imageInfo.height} px {meetsHdWidth ? s.dimHdOk : s.dimUnder}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{s.aspectLabel}</span>
                <span className={`font-mono font-semibold ${isSixteenByNine ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {isSixteenByNine ? s.aspectMatch : s.aspectNo}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{s.sizeLabel}</span>
                <span className={`font-mono font-semibold ${isUnderTwoMb ? 'text-emerald-700' : 'text-red-700'}`}>
                  {(imageInfo.sizeBytes / 1024).toFixed(1)} KB {isUnderTwoMb ? s.sizeOk : s.sizeOver}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label htmlFor="thumb-title" className="block text-xs font-semibold text-slate-800 mb-1">
                {s.titleLabel(title.length)}
              </label>
              <input
                id="thumb-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2">
                <label htmlFor="thumb-chan" className="block text-xs font-semibold text-slate-800 mb-1">
                  {s.channelLabel}
                </label>
                <input
                  id="thumb-chan"
                  type="text"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs"
                />
              </div>
              <div>
                <label htmlFor="thumb-dur" className="block text-xs font-semibold text-slate-800 mb-1">
                  {s.durationLabel}
                </label>
                <input
                  id="thumb-dur"
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-xs"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={(e) => setDarkTheme(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                />
                {s.darkMode}
              </label>
              <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSafeZone}
                  onChange={(e) => setShowSafeZone(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600"
                />
                {s.safeZone}
              </label>
            </div>
          </div>
        </div>

        <div
          className={`lg:col-span-7 rounded-xl border p-5 space-y-6 transition-colors ${
            darkTheme
              ? 'border-slate-800 bg-slate-950 text-slate-100'
              : `social-light-preview border-slate-200 ${palette.card} text-slate-900`
          }`}
        >
          <div>
            <div className={`text-xs font-semibold mb-2 ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
              {s.desktopCard}
            </div>
            <div className="max-w-sm">
              {renderThumbBox(false)}
              <div className="mt-2.5 flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center text-xs font-bold">
                  {channel.trim().slice(0, 2).toUpperCase() || 'UH'}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold leading-snug line-clamp-2">{title || s.untitled}</div>
                  <div className={`mt-1 text-xs ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
                    {channel} · {views}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-300/25">
            <div className={`text-xs font-semibold mb-2 ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
              {s.sidebar}
            </div>
            <div className="flex gap-3 max-w-md items-start">
              <div className="w-40 shrink-0">{renderThumbBox(true)}</div>
              <div className="min-w-0">
                <div className="text-xs font-semibold leading-snug line-clamp-2">{title || s.untitled}</div>
                <div className={`mt-1 text-[11px] ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>
                  {channel}
                </div>
                <div className={`text-[11px] ${darkTheme ? 'text-slate-400' : 'text-slate-500'}`}>{views}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
