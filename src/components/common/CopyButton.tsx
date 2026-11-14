import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocale } from '../../locales/LocaleContext';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  disabled?: boolean;
}

export function CopyButton({
  text,
  label,
  copiedLabel,
  className = '',
  disabled = false,
}: CopyButtonProps) {
  const { t } = useLocale();
  const effectiveLabel = label ?? t.common.copy;
  const effectiveCopiedLabel = copiedLabel ?? t.common.copied;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    if (!text || disabled) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  const isDisabled = disabled || !text;

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={isDisabled}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
        isDisabled
          ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
          : copied
          ? 'border-emerald-300 bg-emerald-50 text-emerald-800 cursor-pointer'
          : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40 hover:text-indigo-700 cursor-pointer'
      } ${className}`}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
      ) : (
        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
      )}
      <span>{copied ? effectiveCopiedLabel : effectiveLabel}</span>
    </button>
  );
}
