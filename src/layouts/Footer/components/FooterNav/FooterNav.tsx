import toast from 'react-hot-toast';
import { navItems } from '../../../Header/constants/navigation.constants';
import { NavLink } from '@/components/ui';

export const FooterNav = () => {
  return (
    <nav
      className='flex flex-col gap-1'
      aria-label="Navegación del footer"
    >
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        Navegación
      </p>

      {navItems.map((item) => (
        <NavLink
          href={item.href}
          key={item.href}
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
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
