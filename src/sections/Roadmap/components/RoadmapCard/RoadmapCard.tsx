import clsx from 'clsx';
import { Card } from '@/components/ui';
import type { RoadmapProps } from '../../roadmap.types';
import { RoadmapHeader } from '../RoadmapHeader/RoadmapHeader';
import { RoadmapNode } from '../RoadmapNode/RoadmapNode';

interface RoadmapCardProps extends RoadmapProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export const RoadmapCard = ({
  eyebrowNumber,
  title,
  description,
  status,
  isFirst = false,
  isLast = false,
}: RoadmapCardProps) => {
  const isCurrent = status === 'inProgress';

  return (
    <li className="relative flex gap-6">
      <RoadmapNode status={status} isFirst={isFirst} isLast={isLast} />

      <div className={clsx('min-w-0 flex-1', !isLast && 'pb-8')}>
        <Card
          variant={isCurrent ? 'active' : 'default'}
          size="md"
          className="flex flex-col gap-2 transition-all duration-300 hover:shadow-sm"
        >
          <RoadmapHeader eyebrowNumber={eyebrowNumber} title={title} status={status} />

          {description && (
            <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
          )}

          {isCurrent && (
            <p className="flex items-center gap-2 text-xs font-medium text-burgundy-600">
              <span className="size-1.5 rounded-full bg-burgundy-600" />
              Estás aquí
            </p>
          )}
        </Card>
      </div>
    </li>
  );
};
