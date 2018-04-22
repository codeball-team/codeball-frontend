// TODO: remove file
export const currentUserUrl = () => `${usersUrl()}/me`;
export const gameCloseEnrollmentUrl = (gameId) => `${gameUrl(gameId)}/finishEnrollment`;
export const gameDrawTeamsUrl = (gameId) => `${gameUrl(gameId)}/team`;
export const gameEndUrl = (gameId) => `${gameUrl(gameId)}/end`;
export const gameEnrollmentUrl = (gameId, userId) => userId
  ? gameEnrollmentUserUrl(gameId, userId)
  : gameEnrollmentBaseUrl(gameId);
export const gameSetScoreUrl = (gameId) => `${gameUrl(gameId)}/score`;
export const gameUrl = (gameId) => `${gamesUrl()}/${gameId}`;
export const gamesUrl = () => `${process.env.API_URL}/game`;
export const pitchUrl = (pitchId) => `${pitchesUrl()}/${pitchId}`;
export const pitchesUrl = () => `${process.env.API_URL}/pitch`;
export const userUrl = (userId) => `${usersUrl()}/${userId}`;
export const usersUrl = () => `${process.env.API_URL}/user`;

const gameEnrollmentBaseUrl = (gameId) => `${gameUrl(gameId)}/enrollment`;
const gameEnrollmentUserUrl = (gameId, userId) => `${gameEnrollmentBaseUrl(gameId)}/${userId}`;
