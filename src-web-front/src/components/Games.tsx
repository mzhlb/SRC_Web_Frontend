// src/components/Games.tsx
import React, { useState, useEffect } from 'react';
import { getGames, createGame } from '../api';

interface Game {
  id: number;
  name: string;
}

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await getGames();
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createGame({ name });
      setName('');
      fetchGames();
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <div>
      <ul className="mb-4">
        {games.map((game) => (
          <li key={game.id} className="bg-white p-2 rounded shadow-sm mb-2 text-blue-700">{game.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Game Name"
          className="flex-1 p-2 border rounded bg-blue-50 text-blue-700"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default Games;
