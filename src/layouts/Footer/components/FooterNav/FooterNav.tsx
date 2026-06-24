import clsx from 'clsx';
import { navItems } from '../../../Header/data/navigation.data';
import { NavLink } from '../../../Header/components/NavLink/NavLink';

interface FooterNavProps {
  className?: string;
}

export const FooterNav = ({ className }: FooterNavProps) => {
  return (
    <nav
      className={clsx('flex flex-col gap-1', className)}
      aria-label="Navegación del footer"
    >
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Navegación
      </p>
      {navItems.map((item) => (
        <NavLink href={item.href} key={item.href} className="text-sm">
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
