import { SectionHeader, SectionLayout, Card } from '@/components/ui';
import { ABOUT_FACTS } from './constants/about.constants';
import { AboutPhoto } from './components/AboutPhoto/AboutPhoto';

export const About = () => {
  return (
    <SectionLayout
      id="about"
      className="bg-section"
      containerClassName="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 p-14"
    >
      <SectionHeader
        eyebrowNumber="01"
        eyebrowLabel="Sobre mí"
        title="Base sólida. Enfoque claro. En ruta al full stack."
        description="Soy estudiante de Ingeniería Informática (CUCEI) con una base real en programación: he trabajado en proyectos académicos completos, desde sistemas de gestión hasta estructuras de datos implementadas desde cero.

        Hoy estoy enfocado en desarrollo frontend moderno con el objetivo claro de convertirme en desarrollador full stack. No finjo experiencia que aún no tengo: muestro lo que sé, lo que estoy aprendiendo y hacia dónde voy.

        Me definen la disciplina y el aprendizaje continuo. Cada proyecto es un paso medible en esa dirección."
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
