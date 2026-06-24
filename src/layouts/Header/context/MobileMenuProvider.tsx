import { useCallback, useMemo, useState, type ReactNode } from 'react';
import MobileMenuContext from './mobileMenuContext';

interface MobileMenuProviderProps {
    children: ReactNode
}

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // Se guardan las funciones en memoria para evitar su creación en cada re-render de los componentes en los que se utilizan
    const openMenu = useCallback(() => setIsOpen(true), [])
    const closeMenu = useCallback(() => setIsOpen(false), [])
    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])

    // Memoriza el valor del contexto para evitar recrear el objeto en cada render
    const value = useMemo(
        () => ({ isOpen, openMenu, closeMenu, toggleMenu }),
        [isOpen, openMenu, closeMenu, toggleMenu],
    )

    return (
        <MobileMenuContext.Provider value={value}>
            {children}
        </MobileMenuContext.Provider>
    )
}