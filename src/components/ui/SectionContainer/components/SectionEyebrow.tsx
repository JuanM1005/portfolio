import type { SectionEyebrowProps } from '../SectionContainer.types';

export const SectionEyebrow = ({ number, label }: SectionEyebrowProps) => {
  return (
    <p className="font-mono mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
      <span className="text-burgundy-600">{number}</span>
      <span aria-hidden="true" className="h-px w-4 bg-border-soft" />
      <span>{label}</span>
    </p>
  );
};
