import clsx from 'clsx';
import { FiMail } from 'react-icons/fi';
import { Badge, NavLink } from '@/components/ui';
import { variantStyles as buttonVariantStyles } from '@/components/ui/Button/Button.styles';
import { HERO_LINKS } from '../../constants/hero.constants';

const buttonShell =
  'justify-center gap-1 font-medium hover:scale-95 active:scale-95 ' +
  'h-auto! rounded-md! px-4! py-2! transition-all! duration-300!';

export const HeroIntro = () => {
  return (
    <div className="flex flex-col items-start">
      <Badge variant="available" withDot>
        Disponible para colaborar
      </Badge>

      <div className="font-mono">
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2rem] text-ink-muted">
          Juan Antonio Aguirre Mares
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
          Desarrollador <span className="text-burgundy-600">frontend</span> en
          formación, construyendo interfaces claras y bien estructuradas.
        </h1>
      </div>

      <p className="mt-6 max-w-xl text-base text-justify leading-relaxed text-ink-muted md:text-lg">
        Trabajo con React, TypeScript y Tailwind CSS mientras fortalezco mi
        camino hacia full stack. Me enfoco en crear experiencias limpias,
        responsivas y accesibles, con atención al detalle y disposición para
        aportar en proyectos reales.
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
          Ver proyectos
        </NavLink>

        <NavLink
          href={HERO_LINKS.contact}
          withAnimation={false}
          className={clsx(buttonShell, buttonVariantStyles.ghost)}
        >
          <FiMail size={16} aria-hidden="true" />
          Contactar
        </NavLink>
      </div>
    </div>
  );
};
