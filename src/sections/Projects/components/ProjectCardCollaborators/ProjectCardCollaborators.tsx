import { useTranslation } from 'react-i18next';
import type { Collaborator } from '../../projects.types';

interface ProjectCardCollaboratorsProps {
  collaborators: Collaborator[];
}

export const ProjectCardCollaborators = ({
  collaborators,
}: ProjectCardCollaboratorsProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs text-ink-soft/90">
        {t('projects.collaboratorsLabel')}
      </span>
      <div className="flex flex-wrap gap-2">
        {collaborators.map((collab) => (
          <a
            key={collab.url}
            href={collab.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-burgundy-100 bg-burgundy-50 px-2.5 py-0.5 font-mono text-xs text-burgundy-600 transition-colors duration-200 hover:border-burgundy-200 hover:bg-burgundy-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600"
          >
            {collab.label}
          </a>
        ))}
      </div>
    </div>
  );
};
