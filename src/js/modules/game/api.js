import { fetchJson } from 'utils';

export const getGameUrl = (gameId) => `${getGamesUrl()}/${gameId}`;
export const getGamesUrl = () => `${process.env.API_URL}/game`;
export const getGameCloseEnrollmentUrl = (gameId) => `${getGameUrl(gameId)}/finishEnrollment`;
export const getGameDrawTeamsUrl = (gameId) => `${getGameUrl(gameId)}/team`;
export const getGameEndUrl = (gameId) => `${getGameUrl(gameId)}/end`;
export const getGameEnrollmentUrl = (gameId, userId) => userId
  ? getGameEnrollmentUserUrl(gameId, userId)
  : getGameEnrollmentBaseUrl(gameId);
export const getGameSetScoreUrl = (gameId) => `${getGameUrl(gameId)}/score`;
export const getGameEnrollmentBaseUrl = (gameId) => `${getGameUrl(gameId)}/enrollment`;
export const getGameEnrollmentUserUrl = (gameId, userId) => `${getGameEnrollmentBaseUrl(gameId)}/${userId}`;

export const getGame = (gameId) => fetchJson(getGameUrl(gameId));
export const getGames = () => fetchJson(getGamesUrl());
export const putChangeEnrollmentStatus = (gameId, enrollmentStatus) => fetchJson(getGameEnrollmentUrl(gameId), {
  method: 'PUT',
  body: `"${enrollmentStatus}"`
});
export const putCloseEnrollment = (gameId) => fetchJson(getGameCloseEnrollmentUrl(gameId), {
  method: 'PUT'
});
export const putDrawTeams = (gameId) => fetchJson(getGameDrawTeamsUrl(gameId), {
  method: 'PUT'
});
export const putEnd = (gameId) => fetchJson(getGameEndUrl(gameId), {
  method: 'PUT'
});
export const putEnrollAnotherUser = (gameId, userId, enrollmentStatus) => fetchJson(getGameEnrollmentUrl(gameId, userId), {
  method: 'PUT',
  body: `"${enrollmentStatus}"`
});
export const putScore = (gameId, teamAScore, teamBScore) => fetchJson(getGameSetScoreUrl(gameId), {
  method: 'PUT',
  body: JSON.stringify({ teamAScore, teamBScore })
});