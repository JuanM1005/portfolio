import { socialLinks } from '../../constants/social.constants';

export const FooterSocials = () => {
  return (
    <div className='flex flex-col gap-1'>
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
