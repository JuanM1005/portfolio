import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import type { RoadmapProps } from '../../roadmap.types';
import { statusStyles } from '../../constants/roadmap.styles';

interface RoadmapHeaderProps {
  eyebrowNumber: string;
  title: string;
  status: RoadmapProps['status'];
}

export const RoadmapHeader = ({
  eyebrowNumber,
  title,
  status,
}: RoadmapHeaderProps) => {
  const { t } = useTranslation();
  const { badge } = statusStyles[status];

  return (
    <header className="flex items-start justify-between gap-4">
      {/* Número + título */}
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[10px] font-medium text-burgundy-600">
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
        {String(t(`roadmap.status.${status}`))}
      </span>
    </header>
  );
};
