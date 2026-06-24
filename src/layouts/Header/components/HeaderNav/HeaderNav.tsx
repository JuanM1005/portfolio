import clsx from 'clsx';
import { navItems } from '../../data/navigation.data';
import { NavLink } from '../NavLink/NavLink';

interface HeaderNavProps {
  className?: string;
}

export const HeaderNav = ({ className }: HeaderNavProps) => {
  return (
    <nav
      className={clsx('flex items-center gap-8', className)}
      aria-label="Navegación principal"
    >
      {navItems.map((item) => (
        <NavLink href={item.href} key={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
