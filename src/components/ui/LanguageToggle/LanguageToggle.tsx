import { useState } from 'react';
import { Button } from '@/components/ui';
import { HiOutlineLanguage } from 'react-icons/hi2';
import toast from 'react-hot-toast';

type SupportedLanguage = 'es' | 'en'

export const LanguageToggle = () => {
    const [lang, setLang] = useState<SupportedLanguage>('es');

        const handleToggle  = () => {
            setLang(prev => (prev === 'es' ? 'en' : 'es'))
            toast('Cambio de idioma próximamente... (en desarrollo)', { icon: '🌐' });
        }

    return (
        <Button
            variant='secondary'
            size='sm'
            className='md:px-4 md:py-2 md:text-sm'
            onClick={handleToggle}
        >
            <HiOutlineLanguage size={18} />
            <span className='font-mono uppercase tracking-wide'>{lang}</span>
        </Button>
    );
}
