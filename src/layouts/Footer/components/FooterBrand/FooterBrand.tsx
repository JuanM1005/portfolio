import { useTranslation } from 'react-i18next';
import { CursorBlink } from '@/components/ui';

export const FooterBrand = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <a
        href="#home"
        className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600 rounded"
        aria-label={t('footer.homeAria')}
      >
        <CursorBlink variant="burgundy" />
        Juan Mares
      </a>
      <p className="text-sm leading-relaxed">
        {t('footer.tagline')}
        <br />
        Guadalajara, Jal.
        <br />
        React · TypeScript · Tailwind
      </p>
    </div>
  );
};
