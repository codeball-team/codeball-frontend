import { fetchJson } from 'utils';
import { getGamesUrl } from 'games/api';

export const postNewGame = (payload) => fetchJson(getGamesUrl(), {
  method: 'POST',
  body: JSON.stringify(payload)
});
