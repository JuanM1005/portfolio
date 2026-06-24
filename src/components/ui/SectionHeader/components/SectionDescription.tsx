import type { SectionDescriptionProps } from '../SectionHeader.types';

export const SectionDescription = ({ children }: SectionDescriptionProps) => {
  return (
    <p className="mt-8 max-w-2xl text-justify text-base leading-relaxed text-ink/80 md:text-lg">
      {children}
    </p>
  );
};
