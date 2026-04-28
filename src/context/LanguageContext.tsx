import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
    isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('es');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const setLanguage = (lang: Language) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setLanguageState(lang);
            setIsTransitioning(false);
        }, 300);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
        isTransitioning,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
