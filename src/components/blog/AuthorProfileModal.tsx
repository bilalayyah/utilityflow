import { useEffect } from 'react';
import { X } from 'lucide-react';
import { AuthorProfile } from './AuthorProfile';

interface AuthorProfileModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Author profile shown on demand from the article byline
 * ("By Bilal Asghar · ..."). Opens as a modal dialog; closes on
 * backdrop click, Escape, or the close button. Reuses the
 * AuthorProfile card so the content stays identical.
 */
export function AuthorProfileModal({ open, onClose }: AuthorProfileModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="About the author"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close author profile"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-black/50"
      />
      <div className="relative w-full max-w-lg">
        <AuthorProfile />
        <button
          type="button"
          aria-label="Close author profile"
          onClick={onClose}
          autoFocus
          className="absolute end-3 top-3 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#E5E5EA] bg-[#FFFFFF] text-[#6E6E73] shadow-sm transition-colors hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E8A66] dark:border-[#243247] dark:bg-[#131D31] dark:text-[#CBD5E1] dark:hover:text-[#F1F5F9]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
