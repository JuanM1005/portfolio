import { useEffect } from 'react';
import useMobileMenu from '../context/useMobileMenu';

export const useLockScroll = () => {
  const { isOpen } = useMobileMenu();

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
};
