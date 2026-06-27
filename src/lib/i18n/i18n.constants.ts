import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'es'

// Llave de localStorage usada para persistir la preferencia de idioma.
export const LANGUAGE_STORAGE_KEY = 'portfolio-language';
export const defaultNS = 'common'

export const resources = {
    es: {
        common: esCommon
    },
    en: {
        common: enCommon
    }
} as const