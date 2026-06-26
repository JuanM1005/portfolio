import { Card } from '@/components/ui';
import type { EducationProps } from '../../education.types';
import { EducationHeader } from '../EducationHeader/EducationHeader';

export const EducationCard = ({
  eyebrow,
  title,
  subtitle,
  description,
}: EducationProps) => {
  return (
    <li className="h-full">
      <Card
        variant="default"
        size="md"
        className="flex h-full flex-col gap-2 transition-all duration-300 hover:shadow-sm"
      >
        <EducationHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

        {description && (
          <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
        )}
      </Card>
    </li>
  );
};
