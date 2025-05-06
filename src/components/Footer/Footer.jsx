import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br to-blue-300 dark:from-gray-900 dark:to-gray-800 p-8 text-center transition-colors duration-500 py-4 shadow-inner dark:text-white text-gray-800">
            <p>
                &copy; {new Date().getFullYear()} Monopoly - Tous droits réservés
            </p>
            <p>
                Développé par <a href="https://github.com/achedon12" target="_blank" rel="noopener noreferrer"
                                 className="text-blue-600 hover:underline">Achedon12</a>
            </p>
        </footer>
    );
};

export default Footer;