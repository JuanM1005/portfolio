import { Container, NavLink } from '@/components/ui';
import { FaArrowUp } from 'react-icons/fa';

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="mt-10 flex gap-3 items-center justify-between border-t border-border-soft pt-6
    ">
      <p className="font-mono text-xs text-ink-muted">
        &copy; {currentYear} Juan Antonio Aguirre Mares
      </p>

      <NavLink
        href="#home"
        withAnimation={false}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
      >
        Volver arriba
        <FaArrowUp
          size={10}
          className="transition-transform duration-200 group-hover:-translate-y-0.5"
        />
      </NavLink>
    </Container>
  );
};
