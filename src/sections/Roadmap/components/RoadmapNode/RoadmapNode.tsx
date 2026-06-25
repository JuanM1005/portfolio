import clsx from 'clsx';
import { FaCheck, FaFlag } from 'react-icons/fa';
import type { RoadmapProps } from '../../roadmap.types';
import { statusStyles } from '../../constants/roadmap.styles';

type RoadmapNodeProps = Pick<RoadmapProps, 'status'> & {
  isFirst?: boolean;
  isLast?: boolean;
};

const NodeIcon = ({ status }: Pick<RoadmapProps, 'status'>) => {
  if (status === 'completed') return <FaCheck className="size-3.5" />;
  if (status === 'inProgress') return <span className="size-2.5 rounded-full bg-burgundy-600" />;
  if (status === 'goal') return <FaFlag className="size-3" />;
  return <span className="size-2 rounded-full bg-ink-muted/40" />;
};

export const RoadmapNode = ({ status, isFirst = false, isLast = false }: RoadmapNodeProps) => {
  const { node } = statusStyles[status];

  return (
    <div className="relative flex w-8 shrink-0 flex-col items-center self-stretch">
      {/* Línea superior (desde el nodo anterior) */}
      {!isFirst && (
        <span className="absolute top-0 h-1/2 w-px bg-border-soft" />
      )}

      {/* Nodo circular */}
      <span
        className={clsx(
          'relative z-10 my-auto flex size-8 shrink-0 items-center justify-center rounded-full',
          node,
        )}
      >
        <NodeIcon status={status} />
      </span>

      {/* Línea inferior (hacia el nodo siguiente) */}
      {!isLast && (
        <span className="absolute bottom-0 h-1/2 w-px bg-border-soft" />
      )}
    </div>
  );
};
