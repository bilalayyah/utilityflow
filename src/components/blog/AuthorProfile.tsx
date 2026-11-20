/**
 * Author profile card shown on every blog article page.
 * The author is always Bilal Asghar — no props required.
 * Initials only, no photo.
 */
export function AuthorProfile() {
  return (
    <section
      aria-label="About the author"
      className="rounded-2xl border border-[#E5E5EA] bg-[#FFFFFF] p-5 shadow-sm dark:border-[#243247] dark:bg-[#131D31] sm:p-6"
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E8A66] text-base font-bold text-white"
        >
          BA
        </span>
        <div className="min-w-0">
          <p className="text-base font-bold text-[#1D1D1F] dark:text-[#F1F5F9]">
            Bilal Asghar
          </p>
          <p className="mt-0.5 text-sm leading-relaxed text-[#6E6E73] dark:text-[#CBD5E1]">
            Creator of UtilityFlow — free, privacy-first tools for everyday
            work.
          </p>
        </div>
      </div>
    </section>
  );
}
