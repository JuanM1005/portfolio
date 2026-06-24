import type { SectionTitleProps } from '../SectionHeader.types';

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="font-mono max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
};
