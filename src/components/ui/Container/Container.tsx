import type { ContainerProps } from './Container.types';
import clsx from 'clsx';

// Contenedor reutilizable para centrar el contenido,
// limitar su ancho máximo y mantener padding lateral responsivo.

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div
      className={clsx('mx-auto w-full max-w-6xl px-6 md:px-8', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
