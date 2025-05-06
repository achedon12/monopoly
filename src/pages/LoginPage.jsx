import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from "../utils/Const.jsx";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl + '/users.json');
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des utilisateurs.');
            }

            const users = await response.json();

            const foundUser = users.find(
                (u) => u.username === username && u.password === password
            );

            if (foundUser) {
                localStorage.setItem('currentUser', JSON.stringify(foundUser));
                navigate(baseUrl + '/');
            } else {
                setError('Pseudo ou mot de passe incorrect.');
            }
        } catch (err) {
            console.error(err);
            setError('Erreur lors de la connexion.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-6">
            <form
                onSubmit={handleLogin}
                className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    Connexion
                </h2>

                {error && (
                    <div className="mb-4 text-red-500 text-center">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">
                        Pseudo
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        required
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Se connecter
                    </button>
                    <button
                        onClick={() => navigate(baseUrl + '/register')}
                        className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 md:mt-0"
                    >
                        Créer un compte
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
