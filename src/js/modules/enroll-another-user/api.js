import { fetchJson } from 'utils';
import { getGameEnrollmentUrl } from 'game/api';

export const putEnrollAnotherUser = (gameId, userId, enrollmentStatus) => fetchJson(getGameEnrollmentUrl(gameId, userId), {
  method: 'PUT',
  body: `"${enrollmentStatus}"`
});
