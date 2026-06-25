import { FaGithub } from 'react-icons/fa';
import type { ProjectProps } from '../../types/projects.types';

type ProjectCardTagsProps = Pick<ProjectProps, 'tags' | 'repoUrl'>;

export const ProjectCardTags = ({ tags, repoUrl }: ProjectCardTagsProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border-soft px-2 py-1 font-mono text-xs text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 font-mono text-sm text-ink-soft transition-colors duration-200 hover:text-burgundy-500"
        >
          <FaGithub size={16} aria-hidden="true" />
          GitHub
        </a>
      )}
    </>
  );
};
