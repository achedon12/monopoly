import React from 'react';
import { useLocation } from 'react-router-dom';

const GamePage = () => {
    const location = useLocation();
    const { playerName } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h2 className="text-3xl font-bold">Bienvenue, {playerName} !</h2>
        </div>
    );
};

export default GamePage;
