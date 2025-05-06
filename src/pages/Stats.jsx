import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/Const.jsx';

const StatsPage = () => {
    const [playerStats, setPlayerStats] = useState([]);
    const [totalMoneyEarned, setTotalMoneyEarned] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`${baseUrl}/stats.json`);
                const data = await response.json();

                const statsArray = Object.entries(data).map(([name, stats]) => {
                    const averageMoneyPerGame =
                        stats.gamesPlayed > 0
                            ? (stats.totalMoneyEarned / stats.gamesPlayed).toFixed(2)
                            : '0.00';
                    return {
                        name,
                        gamesPlayed: stats.gamesPlayed,
                        gamesWon: stats.gamesWon,
                        totalMoneyEarned: stats.totalMoneyEarned,
                        averageMoneyPerGame,
                    };
                });

                const sortedStats = statsArray.sort((a, b) => b.gamesWon - a.gamesWon);
                const top10Stats = sortedStats.slice(0, 10);

                const totalEarned = statsArray.reduce(
                    (sum, player) => sum + player.totalMoneyEarned,
                    0
                );

                setPlayerStats(top10Stats);
                setTotalMoneyEarned(totalEarned);
            } catch (error) {
                console.error('Erreur lors du chargement des statistiques:', error);
            }
        };

        fetchStats();
    }, []);

    const filteredStats = playerStats.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-8 transition-colors duration-500">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    🏆 Classement des Joueurs
                </h1>
                <button
                    onClick={() => navigate(baseUrl + '/')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md transition-colors duration-300"
                >
                    Retour à l'accueil
                </button>
            </header>

            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Rechercher un joueur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 rounded shadow-md text-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Stats Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 dark:bg-gray-700">
                    <tr>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-200">Joueur</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-200">Parties Jouées</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-200">Parties Gagnées</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-200">Argent Total Gagné (€)</th>
                        <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-200">Argent Moyen par Partie (€)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredStats.map((player, index) => (
                        <tr
                            key={index}
                            className={`border-b dark:border-gray-700 ${
                                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
                            } hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300`}
                        >
                            <td className="py-3 px-6 text-gray-800 dark:text-gray-100">{player.name}</td>
                            <td className="py-3 px-6 text-gray-800 dark:text-gray-100">{player.gamesPlayed}</td>
                            <td className="py-3 px-6 text-gray-800 dark:text-gray-100">{player.gamesWon}</td>
                            <td className="py-3 px-6 text-gray-800 dark:text-gray-100">{player.totalMoneyEarned}</td>
                            <td className="py-3 px-6 text-gray-800 dark:text-gray-100">{player.averageMoneyPerGame}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Total Money Earned */}
            <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    💰 Argent total gagné par tous les joueurs : {totalMoneyEarned} €
                </p>
            </div>
        </div>
    );
};

export default StatsPage;
