import { fetchJson } from 'utils';
import { getGamesUrl } from 'games/api';

export const getGameUrl = (gameId) => `${getGamesUrl()}/${gameId}`;
export const getGameCloseEnrollmentUrl = (gameId) => `${getGameUrl(gameId)}/finishEnrollment`;
export const getGameDrawTeamsUrl = (gameId) => `${getGameUrl(gameId)}/team`;
export const getGameEndUrl = (gameId) => `${getGameUrl(gameId)}/end`;
export const getGameEnrollmentBaseUrl = (gameId) => `${getGameUrl(gameId)}/enrollment`;
export const getGameSetScoreUrl = (gameId) => `${getGameUrl(gameId)}/score`;

export const getGame = (gameId) => fetchJson(getGameUrl(gameId));
export const putChangeEnrollmentStatus = (gameId, enrollmentStatus) => fetchJson(getGameEnrollmentBaseUrl(gameId), {
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
export const putScore = (gameId, teamAScore, teamBScore) => fetchJson(getGameSetScoreUrl(gameId), {
  method: 'PUT',
  body: JSON.stringify({ teamAScore, teamBScore })
});
