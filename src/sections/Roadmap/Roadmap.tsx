import { SectionLayout, SectionHeader } from '@/components/ui';
import { RoadmapList } from './components';

export const Roadmap = () => {
  return (
    <SectionLayout id="roadmap" containerClassName="py-16 md:py-24">
      <SectionHeader
        eyebrowNumber="04"
        eyebrowLabel="Roadmap full stack"
        title="Construyendo mi camino como desarrollador."
        description="Una ruta de aprendizaje y desarrollo enfocada en fortalecer mis habilidades frontend, incorporar bases sólidas de backend y construir soluciones completas a través de proyectos prácticos, personales y académicos."
      />

      <RoadmapList />
    </SectionLayout>
  );
};
