import { fetchJson } from 'utils';

export const getGamesUrl = () => `${process.env.API_URL}/game`;

export const getGames = () => fetchJson(getGamesUrl());
