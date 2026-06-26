import clsx from 'clsx';
import type { CharacterCounterProps } from './Textarea.types';

const CharacterCounter = ({ current, max }: CharacterCounterProps) => {
    const percentage = current / max;

    return (
        <span
            className={clsx(
                'text-xs ml-auto transition-colors',
                percentage >= 1
                    ? 'text-red-500'
                    : percentage >= 0.8
                        ? 'text-amber-500'
                        : 'text-ink-muted',
            )}
        >
            {current} / {max}
        </span>
    );
};

export default CharacterCounter;