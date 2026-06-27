import { useTranslation } from 'react-i18next';
import { socialLinks } from '@/constants/social.constants';

export const FooterSocials = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
        {t('footer.contact')}
      </p>

      {socialLinks.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          className="inline-flex items-center gap-2 rounded-sm text-sm text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600"
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon size={14} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};
