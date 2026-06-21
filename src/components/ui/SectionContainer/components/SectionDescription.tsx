import type { SectionDescriptionProps } from '../SectionContainer.types';

export const SectionDescription = ({ children }: SectionDescriptionProps) => {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80 md:text-lg">
      {children}
    </p>
  );
};
