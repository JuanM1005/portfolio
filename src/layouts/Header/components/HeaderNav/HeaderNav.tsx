import toast from 'react-hot-toast';
import { navItems } from '../../constants/navigation.constants';
import { NavLink } from '@/components/ui';

interface HeaderNavProps {
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
  onItemClick?: () => void;
}

export const HeaderNav = ({
  className = 'hidden md:flex items-center gap-8',
  itemClassName,
  ariaLabel = 'Navegación principal',
  onItemClick,
}: HeaderNavProps) => (
  <nav className={className} aria-label={ariaLabel}>
    {navItems.map((item) => (
      <NavLink
        key={item.href}
        href={item.href}
        className={itemClassName}
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
            return;
          }
          onItemClick?.();
        }}
      >
        {item.label}
      </NavLink>
    ))}
  </nav>
);
