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
        <div className="px-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Appearance
        </div>
        <div
          role="radiogroup"
          aria-label="Theme preference"
          className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1 border border-slate-200"
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
                className={`inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-semibold transition-colors min-h-[40px] cursor-pointer ${
                  active
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
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
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 cursor-pointer"
      >
        <ActiveIcon
          className={`w-4 h-4 shrink-0 ${
            resolvedTheme === 'dark' ? 'text-indigo-400' : 'text-amber-500'
          }`}
          aria-hidden="true"
        />
        <span className="hidden lg:inline whitespace-nowrap">{activeOptionLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme selection"
          className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg"
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
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors min-h-[40px] cursor-pointer ${
                  selected
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="inline-flex items-center gap-2.5">
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>
                    {label}
                    {id === 'system' && (
                      <span className="ml-1 text-[11px] text-slate-500">
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
