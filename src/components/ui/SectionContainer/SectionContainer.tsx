import clsx from 'clsx';
import type { SectionContainerProps } from './SectionContainer.types';
import { SectionEyebrow } from './components/SectionEyebrow';
import { SectionTitle } from './components/SectionTitle';
import { SectionDescription } from './components/SectionDescription';

export const SectionContainer = ({
  eyebrowNumber,
  eyebrowLabel,
  title,
  description,
  className,
  ...rest
}: SectionContainerProps) => {
  return (
    <header className={clsx('mb-12 md:mb-16', className)} {...rest}>
      {/* Ej: Eyebrow -> "01 ── SOBRE MÍ" */}
      <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />

      {/* Título de la sección */}
      <SectionTitle>{title}</SectionTitle>

      {/* Descripción opcional */}
      {description && <SectionDescription>{description}</SectionDescription>}
    </header>
  );
};
