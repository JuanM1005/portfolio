import type { Collaborator } from '../../types/projects.types';

interface ProjectCardCollaboratorsProps {
  collaborators: Collaborator[];
}

export const ProjectCardCollaborators = ({ collaborators }: ProjectCardCollaboratorsProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs text-ink-soft/90">En colaboración</span>
      <div className="flex flex-wrap gap-2">
        {collaborators.map((collab) => (
          <a
            key={collab.url}
            href={collab.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-burgundy-100 bg-burgundy-50 px-2.5 py-0.5 font-mono text-xs text-burgundy-600 transition-colors duration-200 hover:border-burgundy-200 hover:bg-burgundy-100"
          >
            {collab.label}
          </a>
        ))}
      </div>
    </div>
  );
};