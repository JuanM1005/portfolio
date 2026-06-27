import clsx from 'clsx';
import type { CharacterCounterProps } from './Textarea.types';

const CharacterCounter = ({ current, max }: CharacterCounterProps) => {
  const percentage = max > 0 ? current / max : 0;

  return (
    <span
      className={clsx(
        'ml-auto text-xs transition-colors',
        percentage >= 1
          ? 'text-red-500'
          : percentage >= 0.8
            ? 'text-amber-500'
            : 'text-ink-muted'
      )}
    >
      {current} / {max}
    </span>
  );
};

export default CharacterCounter;