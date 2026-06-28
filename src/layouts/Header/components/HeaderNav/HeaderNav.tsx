import { useTranslation } from 'react-i18next';
import { navItems } from '@/constants/navigation.constants';
import { NavLink } from '@/components/ui';
import type { NavHref } from '@/types/navigation.types';
import clsx from 'clsx';

interface HeaderNavProps {
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
  activeHref?: NavHref;
  onItemClick?: (href: NavHref) => void;
}

export const HeaderNav = ({
  className = 'hidden md:flex items-center gap-8',
  itemClassName,
  ariaLabel,
  activeHref,
  onItemClick,
}: HeaderNavProps) => {
  const { t } = useTranslation();

  return (
    <nav
      className={className}
      aria-label={ariaLabel ?? t('header.mainNavAria')}
    >
      {navItems.map((item) => {
        const isActive = activeHref === item.href;
        const navKey = item.href.slice(1) as string;

        return (
          <NavLink
            key={item.href}
            href={item.href}
            variant={isActive ? 'inverted' : 'ink'}
            className={clsx(
              itemClassName,
              isActive && 'rounded bg-burgundy-600 px-2 py-1',
            )}
            onClick={() => onItemClick?.(item.href)}
            withAnimation={!isActive}
          >
            {t(`nav.${navKey}`)}
          </NavLink>
        );
      })}
    </nav>
  );
};
