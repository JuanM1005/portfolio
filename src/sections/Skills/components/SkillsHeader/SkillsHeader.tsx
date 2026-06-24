interface SkillsHeaderProps {
  title: string;
}

export const SkillsHeader = ({ title }: SkillsHeaderProps) => {
  return (
    <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
      {title}
    </h3>
  );
};
