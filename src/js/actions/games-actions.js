import { createAction } from 'redux-actions';
import request from 'superagent';
import { ajax } from 'utils';
import { push } from 'react-router-redux';
import {
  GAMES_LOAD,
  GAME_EDIT_CANCEL,
  GAME_EDIT_SCORE_A,
  GAME_EDIT_SCORE_B,
  GAME_CHANGE_ENROLLMENT_STATUS,
  GAME_CLOSE_ENROLLMENT,
  GAME_DRAW_TEAMS,
  GAME_EDIT,
  GAME_END,
  GAME_ENROLL_ANOTHER_USER_CHANGE_USER_ID,
  GAME_ENROLL_ANOTHER_USER_EDIT,
  GAME_ENROLL_ANOTHER_USER_EDIT_CANCEL,
  GAME_ENROLL_ANOTHER_USER_RESET,
  GAME_ENROLL_ANOTHER_USER_SUBMIT,
  GAME_LOAD,
  GAME_SET_SCORE
} from 'constants/action-types';
import {
  gameCloseEnrollmentUrl,
  gameDrawTeamsUrl,
  gameEndUrl,
  gameEnrollmentUrl,
  gameSetScoreUrl,
  gameUrl,
  gamesUrl
} from 'constants';

export function gameChangeEnrollmentStatus(gameId, userId, enrollmentStatus) {
  return ajax(() => ({
    actionType: GAME_CHANGE_ENROLLMENT_STATUS,
    request: request('PUT', gameEnrollmentUrl(gameId))
      .send(`"${enrollmentStatus}"`),
    json: true,
    debounce: true
  }));
}

export function gameCloseEnrollment(gameId) {
  return ajax(() => ({
    actionType: GAME_CLOSE_ENROLLMENT,
    request: request('PUT', gameCloseEnrollmentUrl(gameId)),
    json: true,
    throttle: true
  }));
}

export function gameDrawTeams(gameId) {
  return ajax(() => ({
    actionType: GAME_DRAW_TEAMS,
    request: request('PUT', gameDrawTeamsUrl(gameId)),
    json: true,
    throttle: true
  }));
}

export const gameEdit = createAction(GAME_EDIT);
export const gameEditCancel = createAction(GAME_EDIT_CANCEL);
export const gameEditScoreA = createAction(GAME_EDIT_SCORE_A, (teamAScore) => teamAScore);
export const gameEditScoreB = createAction(GAME_EDIT_SCORE_B, (teamBScore) => teamBScore);
export const gameEnrollAnotherUserCancel = createAction(GAME_ENROLL_ANOTHER_USER_EDIT_CANCEL);
export const gameEnrollAnotherUserChangeUserId = createAction(GAME_ENROLL_ANOTHER_USER_CHANGE_USER_ID, (userId) => userId);
export const gameEnrollAnotherUserEdit = createAction(GAME_ENROLL_ANOTHER_USER_EDIT);
export const gameEnrollAnotherUserReset = createAction(GAME_ENROLL_ANOTHER_USER_RESET);

export function gameEnrollAnotherUserSubmit(gameId, userId, enrollmentStatus) {
  return ajax((dispatch) => ({
    actionType: GAME_ENROLL_ANOTHER_USER_SUBMIT,
    request: request('PUT', gameEnrollmentUrl(gameId, userId))
      .send(`"${enrollmentStatus}"`),
    json: true,
    debounce: true,
    successCallback: () => {
      dispatch(gameEnrollAnotherUserReset());
    }
  }));
}

export function gameEnd(gameId) {
  return ajax((dispatch) => ({
    actionType: GAME_END,
    request: request('PUT', gameEndUrl(gameId)),
    json: true,
    throttle: true,
    actionsData: {
      gameId
    },
    successCallback: () => {
      dispatch(push(`/games/previous/${gameId}`));
    }
  }));
}

export function gameLoad(gameId) {
  return ajax(() => ({
    actionType: GAME_LOAD,
    request: request('GET', gameUrl(gameId)),
    json: true,
    debounce: true,
    actionsData: {
      gameId
    }
  }));
}

export function gameSetScore(gameId, teamAScore, teamBScore) {
  return ajax(() => ({
    actionType: GAME_SET_SCORE,
    request: request('PUT', gameSetScoreUrl(gameId))
      .send({ teamAScore, teamBScore }),
    json: true,
    debounce: true
  }));
}

export function gamesLoad() {
  return ajax(() => ({
    actionType: GAMES_LOAD,
    request: request('GET', gamesUrl()),
    json: true,
    throttle: true
  }));
}
