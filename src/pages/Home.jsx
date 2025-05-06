import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {baseUrl} from "../utils/Const.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
    const navigate = useNavigate();
    const [playerName, setPlayerName] = useState('');
    const [stats, setStats] = useState(null);

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

        navigate(baseUrl + '/game', {state: {playerName}});
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{
                backgroundImage: `url(${baseUrl}/bg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-color 0.5s ease',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                filter: 'blur(0px)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className=" flex flex-col flex-grow">
                <Header/>

                <main className="flex-grow flex flex-col items-center justify-center p-6">
                    <h2 className="text-5xl font-bold text-white mb-6 animate-bounce">
                        Welcome
                    </h2>
                    <input
                        type="text"
                        placeholder="Entrez votre nom"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="px-4 py-2 rounded shadow-md text-lg mb-4"
                    />
                    <div className="flex flex-row gap-2">
                        <button
                            onClick={() => navigate(baseUrl + '/stats')}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Statistiques
                        </button>
                        <button
                            onClick={handleStartGame}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Jouer
                        </button>
                    </div>

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

                <Footer/>
            </div>
        </div>
    );
};

export default HomePage;
