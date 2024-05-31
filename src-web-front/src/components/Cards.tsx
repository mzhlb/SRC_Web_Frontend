// src/components/Cards.tsx
import React, { useState, useEffect } from 'react';
import { getCards, createCard } from '../api';

interface Card {
  id: number;
  name: string;
  description: string;
  ability_type: string;
  ability_value: number;
  game: number;
}

const Cards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardData, setCardData] = useState<Partial<Card>>({
    name: '',
    description: '',
    ability_type: '',
    ability_value: 0,
    game: 1, // Replace with a valid game ID
  });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await getCards();
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCard(cardData as Card);
      setCardData({
        name: '',
        description: '',
        ability_type: '',
        ability_value: 0,
        game: 1,
      });
      fetchCards();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <ul className="mb-4">
        {cards.map((card) => (
          <li key={card.id} className="bg-white p-2 rounded shadow-sm mb-2 text-blue-700">
            <strong>{card.name}</strong> - {card.description}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          placeholder="Card Name"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700"
        />
        <input
          type="text"
          name="description"
          value={cardData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700"
        />
        <input
          type="text"
          name="ability_type"
          value={cardData.ability_type}
          onChange={handleChange}
          placeholder="Ability Type"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700"
        />
        <input
          type="number"
          name="ability_value"
          value={cardData.ability_value}
          onChange={handleChange}
          placeholder="Ability Value"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700"
        />
        <input
          type="number"
          name="game"
          value={cardData.game}
          onChange={handleChange}
          placeholder="Game ID"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default Cards;
