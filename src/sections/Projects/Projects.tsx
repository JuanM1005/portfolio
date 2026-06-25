import { SectionLayout, SectionHeader } from '@/components/ui';
import { ProjectList } from './components';

export const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      className="bg-section"
      containerClassName="py-16 md:py-24"
    >
      <SectionHeader
        eyebrowNumber="03"
        eyebrowLabel="Proyectos"
        title="Proyectos donde convierto aprendizaje en interfaces funcionales."
        description="Una selección de trabajos personales y académicos que muestran cómo resuelvo necesidades concretas, organizo componentes, consumo datos y documento lo aprendido en cada proceso."
      />

      <ProjectList />
    </SectionLayout>
  );
};
