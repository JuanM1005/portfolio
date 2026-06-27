import clsx from 'clsx';
import { Trans, useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';
import { Badge, NavLink } from '@/components/ui';
import { variantStyles as buttonVariantStyles } from '@/components/ui/Button/Button.styles';
import { HERO_LINKS } from '../../constants/hero.constants';

const buttonShell =
  'justify-center gap-1 font-medium hover:scale-95 active:scale-95 ' +
  'h-auto! rounded-md! px-4! py-2! transition-all! duration-300!';

export const HeroIntro = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <Badge variant="available" withDot>
        {t('hero.badge')}
      </Badge>

      <div className="font-mono">
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2rem] text-ink-muted">
          Juan Antonio Aguirre Mares
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
          <Trans
            i18nKey="hero.title"
            components={[<span className="text-burgundy-600" />]}
          />
        </h1>
      </div>

      <p className="mt-6 max-w-xl text-base text-justify leading-relaxed text-ink-muted md:text-lg">
        {t('hero.subtitle')}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <NavLink
          href={HERO_LINKS.projects}
          withAnimation={false}
          className={clsx(
            buttonShell,
            buttonVariantStyles.secondary,
            'text-white!',
            'focus-visible:ring-ink-soft!',
          )}
        >
          {t('actions.viewProjects')}
        </NavLink>

        <NavLink
          href={HERO_LINKS.contact}
          withAnimation={false}
          className={clsx(buttonShell, buttonVariantStyles.ghost)}
        >
          <FiMail size={16} aria-hidden="true" />
          {t('hero.ctaContact')}
        </NavLink>
      </div>
    </div>
  );
};
