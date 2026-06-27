import { useTranslation } from 'react-i18next';
import { navItems } from '@/constants/navigation.constants';
import { NavLink } from '@/components/ui';

export const FooterNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-col gap-1" aria-label={t('footer.navAria')}>
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {t('footer.explore')}
      </p>

      {navItems.map((item) => (
        <NavLink
          href={item.href}
          key={item.href}
          variant="muted"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
        >
          {t(`nav.${item.href.slice(1)}`)}
        </NavLink>
      ))}
    </nav>
  );
};
