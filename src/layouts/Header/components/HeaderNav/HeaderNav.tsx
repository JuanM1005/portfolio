import { headerNavItems } from '../../constants/navigation.constants';
import { NavLink } from '@/components/ui';
import type { HeaderNavType } from '../../headerNav.types';
import clsx from 'clsx';

interface HeaderNavProps {
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
  activeHref?: HeaderNavType;
  onItemClick?: (href: HeaderNavType) => void;
}

export const HeaderNav = ({
  className = 'hidden md:flex items-center gap-8',
  itemClassName,
  ariaLabel = 'Navegación principal',
  activeHref,
  onItemClick,
}: HeaderNavProps) => (
  <nav className={className} aria-label={ariaLabel}>
    {headerNavItems.map((item) => {
      const isActive = activeHref === item.href;

      return (
        <NavLink
          key={item.href}
          href={item.href}
          variant={isActive ? 'inverted' : 'ink'}
          className={clsx(itemClassName, isActive && 'rounded bg-burgundy-600 px-2 py-1')}
          onClick={() => onItemClick?.(item.href)}
          withAnimation={!isActive}
        >
          {item.label}
        </NavLink>
      );
    })}
  </nav>
);