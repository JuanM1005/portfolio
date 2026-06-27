interface EducationHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const EducationHeader = ({
  eyebrow,
  title,
  subtitle,
}: EducationHeaderProps) => {
  return (
    <header className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase font-medium text-burgundy-600">
        {eyebrow}
      </span>

      <div className="flex flex-col gap-1">
        <h3 className="font-mono text-xl font-bold text-ink">{title}</h3>
        <p className="text-base text-ink-soft/80">{subtitle}</p>
      </div>
    </header>
  );
};
