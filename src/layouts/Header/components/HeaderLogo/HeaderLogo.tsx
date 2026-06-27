import clsx from 'clsx';
import { CursorBlink } from '@/components/ui';

interface HeaderLogoProps {
  className?: string;
}

export const HeaderLogo = ({ className }: HeaderLogoProps) => {
  return (
    <a
      href="#home"
      className={clsx(
        'flex items-center gap-2 rounded text-xs font-mono font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-600',
        className,
      )}
      aria-label="Ir al inicio"
    >
      <CursorBlink variant="burgundy" />
      Juan Mares
    </a>
  );
};
