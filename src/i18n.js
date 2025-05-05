import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ENLanguage from "./utils/languages/EN.js";
import FRLanguage from "./utils/languages/FR.js";

const resources = {
    en: ENLanguage,
    fr: FRLanguage
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;