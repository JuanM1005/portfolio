import { FiMail } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { Badge, Button } from '@/components/ui';
import { HERO_LINKS } from '../../constants/hero.constants';

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
        <a
          href={HERO_LINKS.projects}
          className="group focus-visible:outline-none"
        >
          <Button
            variant="secondary"
            size="md"
            className="group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-burgundy-600"
          >
            Ver proyectos
          </Button>
        </a>

        <Button
          variant="ghost"
          size="md"
          leftIcon={<FiMail size={16} />}
          onClick={() =>
            toast('Próximamente', {
              icon: '🚧',
              style: {
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
              },
            })
          }
        >
          Contactar
        </Button>
      </div>
    </div>
  );
};
