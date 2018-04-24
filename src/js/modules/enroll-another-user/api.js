import { fetchJson } from 'utils';
import { getGameEnrollmentBaseUrl } from 'game/api';

export const getGameEnrollmentUserUrl = (gameId, userId) => `${getGameEnrollmentBaseUrl(gameId)}/${userId}`;

export const putEnrollAnotherUser = (gameId, userId, enrollmentStatus) => fetchJson(
  getGameEnrollmentUserUrl(gameId, userId),
  {
    method: 'PUT',
    body: `"${enrollmentStatus}"`
  }
);
