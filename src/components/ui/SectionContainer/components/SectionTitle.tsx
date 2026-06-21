import type { SectionTitleProps } from '../SectionContainer.types';

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="font-mono max-w-2xl text-2xl font-semibold tracking-tight text-ink md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
};
