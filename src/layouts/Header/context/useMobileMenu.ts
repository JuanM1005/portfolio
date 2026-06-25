import { useContext } from 'react';
import MobileMenuContext, {
  type MobileMenuContextType,
} from './mobileMenuContext';

const useMobileMenu = (): MobileMenuContextType => {
  const context = useContext(MobileMenuContext);

  if (context === undefined) {
    throw new Error('useMobileMenu must be used within <MobileMenuProvider>');
  }

  return context;
};

export default useMobileMenu;
