// components/ProfileDropdown/ProfileDropdown.jsx
import React, {useEffect, useRef, useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import {baseUrl} from "../../utils/Const.jsx";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={handleToggle} className="flex items-center focus:outline-none">
                <FaUserCircle className="text-2xl text-gray-800 dark:text-white"/>
                <span className="ml-2 text-gray-800 dark:text-white">
          {currentUser ? currentUser.username : 'Profil'}
        </span>
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                    {currentUser ? (
                        <>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Voir le profil
                            </button>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Modifier le profil
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Se déconnecter
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    navigate(baseUrl + '/login');
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Se connecter
                            </button>
                            <button
                                onClick={() => {
                                    navigate(baseUrl + '/register');
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Créer un profil
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
