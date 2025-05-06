import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from "../utils/Const.jsx";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !password || !age || !avatar) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        try {
            const response = await fetch(baseUrl + '/users.json');
            const users = await response.json();

            const existingUser = users.find((user) => user.username === username);
            if (existingUser) {
                setError('Ce pseudo est déjà pris.');
                return;
            }

            const newUser = {
                username,
                password,
                age,
                avatar: URL.createObjectURL(avatar),
            };

            const updatedUsers = [...users, newUser];

            await fetch(baseUrl + '/users.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUsers),
            });


            //navigate(baseUrl + '/');

        } catch (err) {
            console.error('Erreur lors de la vérification des utilisateurs:', err);
            setError('Erreur lors de la vérification des utilisateurs.');
            return;
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300 dark:from-gray-900 dark:to-gray-800 p-6">
            <form
                onSubmit={handleRegister}
                className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                    Créer un compte
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

                <div className="mb-4">
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

                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">
                        Âge
                    </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">
                        Avatar (image)
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="w-full"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                    S’inscrire
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
