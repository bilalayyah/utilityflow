import { Check, ChevronDown, Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme, type ThemeMode } from '../../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'dropdown' | 'segmented';
  onSelect?: () => void;
}

const THEME_OPTIONS: {
  id: ThemeMode;
  label: string;
  shortLabel: string;
  Icon: typeof Sun;
}[] = [
  { id: 'light', label: 'Light Mode', shortLabel: 'Light', Icon: Sun },
  { id: 'dark', label: 'Dark Mode', shortLabel: 'Dark', Icon: Moon },
  { id: 'system', label: 'System Default', shortLabel: 'System', Icon: Monitor },
];

export function ThemeToggle({ variant = 'dropdown', onSelect }: ThemeToggleProps) {
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open || variant !== 'dropdown') return;

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, variant]);

  if (variant === 'segmented') {
    return (
      <div className="space-y-1.5">
        <div className="px-1 text-xs font-semibold text-[#86868B] dark:text-[#CBD5E1]">
          Appearance
        </div>
        <div
          role="radiogroup"
          aria-label="Theme preference"
          className="grid grid-cols-3 gap-1 rounded-xl bg-[#F5F5F7] p-1 border border-[#E5E5EA] dark:bg-[#0C1322] dark:border-[#243247]"
        >
          {THEME_OPTIONS.map(({ id, shortLabel, Icon }) => {
            const active = theme === id;
            return (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => {
                  setTheme(id);
                  onSelect?.();
                }}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors min-h-[40px] cursor-pointer ${
                  active
                    ? 'bg-[#FFFFFF] text-[#1D1D1F] shadow-sm dark:bg-[#131D31] dark:text-[#F1F5F9]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#CBD5E1] dark:hover:text-[#F1F5F9]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const ActiveIcon = resolvedTheme === 'dark' ? Moon : Sun;
  const activeOptionLabel =
    theme === 'system'
      ? `System (${systemTheme === 'dark' ? 'Dark' : 'Light'})`
      : theme === 'dark'
      ? 'Dark'
      : 'Light';

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Change theme (current: ${activeOptionLabel})`}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E5EA] bg-[#FFFFFF] px-2.5 max-[379px]:px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#1D1D1F] transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] cursor-pointer dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1] dark:hover:bg-[#0C1322] dark:hover:text-[#F1F5F9]"
      >
        <ActiveIcon
          className={`w-4 h-4 shrink-0 ${
            resolvedTheme === 'dark' ? 'text-[#34D399]' : 'text-[#0E8A66]'
          }`}
          aria-hidden="true"
        />
        <ChevronDown
          className={`w-3.5 h-3.5 max-[379px]:hidden text-[#86868B] transition-transform duration-150 dark:text-[#CBD5E1] ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme selection"
          className="absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-1.5 shadow-sm dark:border-[#243247] dark:bg-[#131D31]"
        >
          {THEME_OPTIONS.map(({ id, label, Icon }) => {
            const selected = theme === id;
            return (
              <button
                key={id}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setTheme(id);
                  setOpen(false);
                  onSelect?.();
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors min-h-[40px] cursor-pointer ${
                  selected
                    ? 'bg-[#E7F3EE] text-[#0B7A59] dark:bg-[rgba(16,185,129,0.14)] dark:text-[#34D399]'
                    : 'text-[#6E6E73] hover:bg-[#F5F5F7] hover:text-[#1D1D1F] dark:text-[#CBD5E1] dark:hover:bg-[#0C1322] dark:hover:text-[#F1F5F9]'
                }`}
              >
                <span className="inline-flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>
                    {label}
                    {id === 'system' && (
                      <span className="ml-1 text-[11px] text-[#86868B] dark:text-[#CBD5E1]">
                        ({systemTheme === 'dark' ? 'Dark' : 'Light'})
                      </span>
                    )}
                  </span>
                </span>
                {selected && <Check className="w-4 h-4 shrink-0" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
