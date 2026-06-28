import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui';
import { HiOutlineLanguage } from 'react-icons/hi2';
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  type SupportedLanguage,
} from '@/lib/i18n';

export const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ??
    DEFAULT_LANGUAGE) as SupportedLanguage;

  const handleToggle = () => {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    const nextLanguage = SUPPORTED_LANGUAGES[nextIndex];

    i18n.changeLanguage(nextLanguage);
  };

  const displayCode = currentLanguage.toUpperCase();

  return (
    <Button
      variant="secondary"
      size="sm"
      className="md:px-4 md:py-2 md:text-sm"
      aria-label={t('language.switch')}
      title={t('language.current', { lang: displayCode })}
      onClick={handleToggle}
    >
      <HiOutlineLanguage size={18} />
      <span className="font-mono uppercase tracking-wide">
        {currentLanguage}
      </span>
    </Button>
  );
};
