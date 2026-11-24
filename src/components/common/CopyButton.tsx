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
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] ${
        isDisabled
          ? 'border-[#E5E5EA] bg-[#F5F5F7] text-[#64748B] cursor-not-allowed dark:border-[#243247] dark:bg-[#182239] dark:text-[#94A3B8]'
          : copied
          ? 'border-[#BFE3D3] bg-[#E7F3EE] text-[#0B7A59] cursor-pointer dark:border-[rgba(52,211,153,.35)] dark:bg-[rgba(16,185,129,.14)] dark:text-[#34D399]'
          : 'border-[#D2D2D7] bg-white text-[#1D1D1F] hover:border-[#0E8A66] hover:text-[#0B7A59] cursor-pointer dark:border-[#243247] dark:bg-[#131D31] dark:text-[#F1F5F9] dark:hover:border-[#34D399] dark:hover:text-[#34D399]'
      } ${className}`}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#0E8A66] dark:text-[#34D399]" aria-hidden="true" />
      ) : (
        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
      )}
      <span>{copied ? effectiveCopiedLabel : effectiveLabel}</span>
    </button>
  );
}
