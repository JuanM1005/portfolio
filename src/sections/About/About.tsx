import { SectionHeader, SectionLayout, Card } from '@/components/ui';
import { ABOUT_FACTS } from './constants/about.constants';
import { AboutPhoto } from './components/AboutPhoto/AboutPhoto';

export const About = () => {
  return (
    <SectionLayout
      id="about"
      className="bg-section"
      containerClassName="grid grid-cols-1 gap-10 py-16 md:grid-cols-[3fr_2fr] md:gap-12 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="01"
        eyebrowLabel="Sobre mí"
        title="Base técnica, criterio visual y ganas de construir mejor."
        description="Soy estudiante de Ingeniería Informática en CUCEI y desarrollador frontend en formación. Mi base viene de proyectos académicos completos, sistemas de gestión, bases de datos y estructuras de datos implementadas desde cero.

        Hoy estoy enfocado en React, TypeScript y Tailwind CSS, con el objetivo de avanzar hacia full stack. Me interesa escribir interfaces limpias, responsivas y mantenibles, entendiendo tanto la experiencia del usuario como la estructura del código.

        Estoy en una etapa de crecimiento profesional: no exagero mi experiencia, pero sí cuido cada proyecto como una oportunidad para practicar, documentar decisiones y aportar con responsabilidad."
      />
      <Card variant="default" size="sm" className="self-start">
        <AboutPhoto />

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border-soft bg-border-soft">
          {ABOUT_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 bg-surface-card p-3"
            >
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
                {fact.label}
              </span>
              <span className="text-xs font-semibold text-ink">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </SectionLayout>
  );
};
