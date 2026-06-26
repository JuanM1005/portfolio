import clsx from 'clsx';
import type { RoadmapProps } from '../../roadmap.types';
import { STATUS_CONFIG } from '../../constants/roadmap.constants';
import { statusStyles } from '../../constants/roadmap.styles';

type RoadmapHeaderProps = Pick<
  RoadmapProps,
  'eyebrowNumber' | 'title' | 'status'
>;

export const RoadmapHeader = ({
  eyebrowNumber,
  title,
  status,
}: RoadmapHeaderProps) => {
  const { label } = STATUS_CONFIG[status];
  const { badge } = statusStyles[status];

  return (
    <header className="flex items-start justify-between gap-4">
      {/* Número + título */}
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[10px] font-medium text-ink-muted">
          {eyebrowNumber}
        </span>
        <h3 className="font-mono text-base font-bold text-ink">{title}</h3>
      </div>

      {/* Badge de estado */}
      <span
        className={clsx(
          'shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider',
          badge,
        )}
      >
        {label}
      </span>
    </header>
  );
};
