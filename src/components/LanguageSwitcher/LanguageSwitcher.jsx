import React from 'react';
import { useTranslation } from 'react-i18next';

export const languages = [
    { code: 'fr', label: 'Français', flag: 'fr' },
    { code: 'en', label: 'English', flag: 'gb' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex flex-row items-center justify-center gap-1 ml-auto mr-auto">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`fi fi-${lang.flag} w-6 h-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    title={lang.label}
                ></button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
