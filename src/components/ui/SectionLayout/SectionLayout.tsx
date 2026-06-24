import { Container } from '../Container/Container';
import type { SectionLayoutProps } from './SectionLayout.types';

export const SectionLayout = ({
  id,
  children,
  className,
  containerClassName,
  ...rest
}: SectionLayoutProps) => {
  return (
    <section id={id} className={className} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
