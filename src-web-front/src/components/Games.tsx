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
      <h2>Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Game Name"
        />
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
};

export default Games;
