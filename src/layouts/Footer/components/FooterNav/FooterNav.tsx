import clsx from 'clsx';
import toast from 'react-hot-toast';
import { navItems } from '../../../Header/constants/navigation.constants';
import { NavLink } from '@/components/ui';

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
        <NavLink
          href={item.href}
          key={item.href}
          className="text-sm"
          onClick={(e) => {
            if (item.pending) {
              e.preventDefault();
              toast('Próximamente', {
                icon: '🚧',
                style: {
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                },
              });
            }
          }}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
