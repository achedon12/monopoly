import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher.jsx";

const HomePage = () => {
    const navigate = useNavigate();
    const [playerName, setPlayerName] = useState('');
    const [stats, setStats] = useState(null);

    const {t} = useTranslation();

    useEffect(() => {
        const storedStats = localStorage.getItem('monopolyStats');
        if (storedStats) {
            setStats(JSON.parse(storedStats));
        }
    }, []);

    const handleStartGame = () => {
        if (!playerName.trim()) {
            alert('Veuillez entrer votre nom pour commencer.');
            return;
        }

        const playerStats = {
            gamesPlayed: 0,
            gamesWon: 0,
            totalMoneyEarned: 0,
        };

        localStorage.setItem(
            'monopolyStats',
            JSON.stringify({[playerName]: playerStats})
        );

        navigate('/game', {state: {playerName}});
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{
                backgroundImage: "url('/images/monopoly-background.jpg')",
            }}
        >
            <div className="bg-black bg-opacity-50 flex flex-col flex-grow">
                <header className="flex justify-between items-center p-6 bg-white bg-opacity-80 shadow-md">
                    <h1 className="text-3xl font-bold text-gray-800">Monopoly</h1>
                    <button
                        onClick={() => navigate('/about')}
                        className="text-blue-600 hover:underline"
                    >
                        Crédits
                    </button>

                    <LanguageSwitcher />
                </header>

                {/* Main Content */}
                <main className="flex-grow flex flex-col items-center justify-center p-6">
                    <h2 className="text-5xl font-bold text-white mb-6 animate-bounce">
                        {t('welcome')}
                    </h2>
                    <input
                        type="text"
                        placeholder="Entrez votre nom"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="px-4 py-2 rounded shadow-md text-lg mb-4"
                    />
                    <button
                        onClick={handleStartGame}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Jouer
                    </button>

                    {stats && stats[playerName] && (
                        <div className="mt-8 bg-white bg-opacity-90 p-4 rounded shadow-md w-full max-w-md">
                            <h3 className="text-xl font-semibold mb-2">
                                Statistiques de {playerName}
                            </h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Parties jouées : {stats[playerName].gamesPlayed}</li>
                                <li>Parties gagnées : {stats[playerName].gamesWon}</li>
                                <li>
                                    Argent total gagné : {stats[playerName].totalMoneyEarned} €
                                </li>
                            </ul>
                        </div>
                    )}
                </main>

                <footer className="bg-white bg-opacity-80 text-center py-4 shadow-inner">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} Monopoly - Tous droits réservés
                    </p>
                    <p className="text-gray-600">
                        Développé par <a href="https://github.com/achedon12"
                                         className="text-blue-600 hover:underline">Achedon12</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
