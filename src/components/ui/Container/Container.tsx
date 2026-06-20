import type { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
    children: ReactNode;
    className?: string;
}

// Contenedor reutilizable para centrar el contenido,
// limitar su ancho máximo y mantener padding lateral responsivo.

export const Container = ({ children, className = "" }: Props) => {
    return (
        <div
            className={clsx(
                'mx-auto w-full max-w-6xl px-6 md:px-8',
                className,
            )}
        >
            {children}
        </div>
    );
};
