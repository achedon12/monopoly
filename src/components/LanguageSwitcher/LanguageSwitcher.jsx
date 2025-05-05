import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:underline" onClick={() => changeLanguage('en')}>
                English
            </button>
            <button className="text-blue-600 hover:underline" onClick={() => changeLanguage('fr')}>
                Français
            </button>
        </div>
    );
};

export default LanguageSwitcher;