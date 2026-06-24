import clsx from 'clsx';
import type { SectionHeaderProps } from './SectionHeader.types';
import { SectionEyebrow } from './components/SectionEyebrow';
import { SectionTitle } from './components/SectionTitle';
import { SectionDescription } from './components/SectionDescription';

export const SectionHeader = ({
  eyebrowNumber,
  eyebrowLabel,
  title,
  description,
  className,
  ...rest
}: SectionHeaderProps) => {
  return (
    <header className={clsx('mb-10 md:mb-14', className)} {...rest}>
      {/* Ej: Eyebrow -> "01 ── SOBRE MÍ" */}
      <SectionEyebrow number={eyebrowNumber} label={eyebrowLabel} />

      {/* Título de la sección */}
      <SectionTitle>{title}</SectionTitle>

      {/* Descripción opcional */}
      {description && <SectionDescription>{description}</SectionDescription>}
    </header>
  );
};
