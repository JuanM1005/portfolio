import { SectionLayout, SectionHeader } from '@/components/ui';
import { RoadmapList } from './components';

export const Roadmap = () => {
  return (
    <SectionLayout id="roadmap" containerClassName="py-16 md:py-24">
      <SectionHeader
        eyebrowNumber="04"
        eyebrowLabel="Roadmap full stack"
        title="Un camino de crecimiento con pasos concretos."
        description="Mi ruta actual prioriza fortalecer frontend, sumar backend con criterio y construir proyectos completos donde cada nueva tecnología tenga una aplicación práctica y medible."
      />

      <RoadmapList />
    </SectionLayout>
  );
};
