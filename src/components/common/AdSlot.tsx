interface AdSlotProps {
  slotId: 'directory-top' | 'tool-below-workspace' | 'tool-below-guide' | 'category-mid';
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

/**
 * AdSense-ready placement container.
 * Intentionally spaced well away from interactive controls and buttons,
 * remaining unpopulated without fake advertisements until an ad network script is connected.
 */
export function AdSlot({ slotId, format = 'horizontal', className = '' }: AdSlotProps) {
  return (
    <aside
      aria-label="Sponsored placement"
      data-ad-slot={slotId}
      data-ad-format={format}
      data-ad-status="ready"
      className={`my-8 w-full empty:my-0 ${className}`}
    />
  );
}
