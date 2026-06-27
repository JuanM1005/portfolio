import clsx from 'clsx';
import { useFormContext, useWatch } from 'react-hook-form';
import type { TextareaProps } from './Textarea.types';
import CharacterCounter from './CharacterCounter';
import { fieldBase, fieldError } from '../Input/field.styles';

export const Textarea = ({
  label,
  hint,
  id,
  name,
  fullWidth = false,
  resize,
  className,
  ...rest
}: TextareaProps) => {
  const textareaId = id ?? name;

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext();

  const watchedValue = useWatch({ control, name });

  const currentLength = watchedValue ? String(watchedValue).length : 0;
  const { maxLength } = rest;

  const errorMessage =
    typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined;

  const descriptionId =
    errorMessage || hint ? `${textareaId}-description` : undefined;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      <textarea
        id={textareaId}
        className={clsx(
          fieldBase,
          'min-h-52 px-3 py-3',
          resize ? 'resize-y' : 'resize-none',
          errorMessage && fieldError,
          className
        )}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={descriptionId}
        {...rest}
        {...register(name)}
      />

      <label
        htmlFor={textareaId}
        className="order-1 font-mono text-[11px] font-medium uppercase text-ink-soft/80 transition-colors peer-focus:text-burgundy-600"
      >
        {label}
      </label>

      {(errorMessage || hint || maxLength) && (
        <div className="order-3 mt-2 flex items-center justify-between">
          {errorMessage ? (
            <span id={descriptionId} className="text-xs text-red-500">
              {errorMessage}
            </span>
          ) : hint ? (
            <span id={descriptionId} className="text-xs text-ink-muted">
              {hint}
            </span>
          ) : (
            <span />
          )}

          {maxLength && (
            <CharacterCounter current={currentLength} max={maxLength} />
          )}
        </div>
      )}
    </div>
  );
};