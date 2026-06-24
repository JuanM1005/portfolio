import { Container } from '@/components/ui';
import { NavLink } from '../../../Header/components/NavLink/NavLink';

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="mt-10 flex flex-col gap-3 border-t border-border-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-xs text-ink-muted">
        &copy; {currentYear} Juan Antonio Aguirre Mares &middot; React &middot;
        TypeScript &middot; Tailwind CSS
      </p>
      <NavLink href="#top" withAnimation={false} className="font-mono text-xs">
        Volver arriba ↑
      </NavLink>
    </Container>
  );
};
