import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui';
import type { ProjectProps } from '../../projects.types';
import { STATUS_CONFIG } from '../../constants/projects.constants';

type ProjectCardHeaderProps = Pick<ProjectProps, 'status' | 'category'>;

export const ProjectCardHeader = ({
  status,
  category,
}: ProjectCardHeaderProps) => {
  const { t } = useTranslation();
  const { variant } = STATUS_CONFIG[status];

  return (
    <header className="flex items-center justify-between gap-4">
      <Badge variant={variant} withDot className="rounded-md uppercase">
        {t(`projects.status.${status}`)}
      </Badge>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
        {t(`projects.category.${category}`)}
      </span>
    </header>
  );
};
