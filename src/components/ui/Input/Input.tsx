import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import type { InputProps } from './Input.types';

export const Input = ({
  label,
  hint,
  id,
  name,
  fullWidth = false,
  className,
  ...rest
}: InputProps) => {
  const inputId = id ?? name;

  const {
    register,
    formState: { errors }
  } = useFormContext();

  const errorMessage = typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined

  const descriptionId =
    errorMessage || hint ? `${inputId}-description` : undefined;

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      <input
        id={inputId}
        className={clsx(
          'order-2 peer w-full rounded-lg border border-border-soft bg-surface px-3 py-2 text-sm text-ink transition-[border-color,box-shadow] placeholder:text-ink-muted focus-visible:border-burgundy-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-100 disabled:cursor-not-allowed disabled:bg-surface-card-muted disabled:opacity-60',
          errorMessage &&
          'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/40',
          className
        )}
        aria-invalid={errorMessage ? true : undefined}
        aria-describedby={descriptionId}
        {...rest}
        {...register(name)}
      />

      <label
        htmlFor={inputId}
        className="order-1 font-mono text-[11px] font-medium uppercase text-ink-soft/80 transition-colors peer-focus:text-burgundy-600"
      >
        {label}
      </label>

      {errorMessage ? (
        <span id={descriptionId} className="order-3 mt-2 text-xs text-red-500">
          {errorMessage}
        </span>
      ) : hint ? (
        <span id={descriptionId} className="order-3 mt-2 text-xs text-ink-muted">
          {hint}
        </span>
      ) : null}
    </div>
  );
};