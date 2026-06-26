import { ProjectCard } from '../ProjectCard/ProjectCard';
import { PROJECTS } from '../../constants/projects.constants';

export const ProjectList = () => {
  return (
    <ul className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ul>
  );
};
