import { Badge } from '@/components/ui';
import type { ProjectStatus } from '../../types/projects.types';
import { STATUS_CONFIG } from '../../constants/projects.constants';

interface ProjectCardHeaderProps {
  status: ProjectStatus;
  category: string;
}

export const ProjectCardHeader = ({ status, category }: ProjectCardHeaderProps) => {
  const { label, variant } = STATUS_CONFIG[status];

  return (
    <div className="flex items-center justify-between gap-4">
      <Badge variant={variant} withDot className="rounded-md uppercase">
        {label}
      </Badge>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
        {category}
      </span>
    </div>
  );
};
