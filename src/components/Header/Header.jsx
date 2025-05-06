import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import ProfileDropdown from "../Profile/ProfileDropdown.jsx";

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row gap-2 justify-between items-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-8 text-center transition-colors duration-500 py-4 shadow-inner dark:text-white text-gray-800">
            <h1 className="text-3xl font-bold">Monopoly</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 space-x-4">
                <LanguageSwitcher />
                <ProfileDropdown />
            </div>
        </header>
    );
};

export default Header;
