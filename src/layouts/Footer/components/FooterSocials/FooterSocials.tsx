import clsx from 'clsx';
import { socialLinks } from '../../data/social.data';

interface FooterSocialsProps {
  className?: string;
}

export const FooterSocials = ({ className }: FooterSocialsProps) => {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Contacto
      </p>
      {socialLinks.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon size={14} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};
