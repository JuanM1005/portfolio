import { useTranslation } from 'react-i18next';
import { HERO_STACK } from '../../constants/hero.constants';

export const HeroStack = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
        {t('hero.stack.current')}
      </p>
      <div className="flex flex-wrap gap-2">
        {HERO_STACK.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border-soft bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
