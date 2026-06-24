import { useState, useEffect } from 'react';

interface UseHandleScrollProps {
  isScrolled: boolean;
}

export const useHandleScroll = (threshold: number): UseHandleScrollProps => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
};
