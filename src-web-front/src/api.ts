// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/', // Proxy will handle the rest
});

export const getGames = () => api.get('games/');
export const createGame = (game: { name: string }) => api.post('games/', game);
export const getCards = () => api.get('cards/');
export const createCard = (card: {
  name: string;
  description: string;
  ability_type: string;
  ability_value: number;
  game: number;
}) => api.post('cards/', card);
