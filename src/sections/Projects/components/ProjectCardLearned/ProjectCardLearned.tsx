import type { ProjectProps } from '../../projects.types';

type ProjectCardLearnedProps = Pick<ProjectProps, 'learned'>;

export const ProjectCardLearned = ({ learned }: ProjectCardLearnedProps) => {
  return (
    <div className="rounded-lg border border-border-soft bg-surface-card-muted/70 p-4">
      <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-burgundy-600">
        Qué aprendí
      </p>
      <p className="text-sm leading-relaxed text-ink-muted">{learned}</p>
    </div>
  );
};
