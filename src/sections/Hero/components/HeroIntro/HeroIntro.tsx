import { FiMail } from 'react-icons/fi';
import { Badge, Button } from '@/components/ui';
import { HERO_LINKS } from '../../constants/hero.constants';

export const HeroIntro = () => {
  return (
    <div className="flex flex-col items-start">
      <Badge variant="available" withDot>
        Disponible para trabajar
      </Badge>

      <div className="font-mono">
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2rem] text-ink-muted">
          Juan Antonio Aguirre Mares
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
          Desarrollador <span className="text-burgundy-600">frontend</span> en
          formación, con rumbo a full stack.
        </h1>
      </div>

      <p className="mt-6 max-w-xl text-base text-justify leading-relaxed text-ink-muted md:text-lg">
        Desarrollador en formación, disciplinado y comprometido con la mejora constante y el aprendizaje continuo.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={HERO_LINKS.projects}>
          <Button variant="secondary">Ver proyectos</Button>
        </a>
        <a href={HERO_LINKS.contact}>
          <Button variant="ghost" leftIcon={<FiMail size={16} />}>
            Contactar
          </Button>
        </a>
      </div>
    </div>
  );
};
