import { SectionLayout, SectionHeader } from '@/components/ui';
import { ProjectCard } from './components';
import { PROJECTS } from './constants/projects.constants';

export const Projects = () => {
  return (
    <SectionLayout id="projects" className="bg-section" containerClassName="p-14">
      <SectionHeader
        eyebrowNumber="03"
        eyebrowLabel="Proyectos"
        title="Proyectos desarrollados con enfoque práctico y funcional."
        description="Una selección de proyectos personales y académicos que muestran distintas soluciones, procesos de desarrollo y aplicaciones construidas a partir de necesidades específicas."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionLayout>
  );
};
