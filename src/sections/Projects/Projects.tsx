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
        title="Proyectos desarrollados con enfoque práctico y funcional."
        description="Una selección de proyectos personales y académicos que muestran distintas soluciones, procesos de desarrollo y aplicaciones construidas a partir de necesidades específicas."
      />

      <ProjectList />
    </SectionLayout>
  );
};
