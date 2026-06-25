import { Card } from '@/components/ui';
import type { ProjectProps } from '../../types/projects.types';
import { ProjectCardHeader } from '../ProjectCardHeader/ProjectCardHeader';
import { ProjectCardCollaborators } from '../ProjectCardCollaborators/ProjectCardCollaborators';
import { ProjectCardLearned } from '../ProjectCardLearned/ProjectCardLearned';
import { ProjectCardTags } from '../ProjectCardTags/ProjectCardTags';

export const ProjectCard = ({
  title,
  description,
  status,
  category,
  learned,
  tags,
  collaborators,
  repoUrl,
}: ProjectProps) => {
  return (
    <Card
      variant="default"
      size="md"
      className="flex h-full flex-col gap-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-sm"
    >
      <ProjectCardHeader status={status} category={category} />

      <h3 className="font-mono text-xl font-bold text-ink">{title}</h3>

      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>

      {collaborators && collaborators.length > 0 && (
        <ProjectCardCollaborators collaborators={collaborators} />
      )}

      <ProjectCardLearned learned={learned} />

      <ProjectCardTags tags={tags} repoUrl={repoUrl} />
    </Card>
  );
};
