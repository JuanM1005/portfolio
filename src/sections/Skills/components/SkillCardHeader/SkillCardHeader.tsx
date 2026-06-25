import { Badge } from '@/components/ui';

interface SkillCardHeaderProps {
  title: string;
  eyebrow: string;
  tone: 'available' | 'progress';
}

export const SkillCardHeader = ({
  title,
  eyebrow,
  tone,
}: SkillCardHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <Badge variant={tone} className="rounded-md">
          {title}
        </Badge>
      </div>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
        {eyebrow}
      </span>
    </div>
  );
};
