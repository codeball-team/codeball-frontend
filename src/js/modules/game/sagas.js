import { delay } from 'redux-saga';
import { call, put, select, takeLatest, throttle } from 'redux-saga/effects';
import { API_DEBOUNCE, API_THROTTLE, ENROLLMENT_STATUS_YES } from 'constants';
import { editableGameSelector } from 'selectors/models/game';
import { push } from 'react-router-redux';
import {
  getGame,
  getGames,
  putChangeEnrollmentStatus,
  putCloseEnrollment,
  putDrawTeams,
  putEnd,
  putEnrollAnotherUser,
  putScore
} from './api';
import { actions } from './state';

export default function* gameSagas() {
  yield takeLatest(actions.game.changeEnrollmentStatus, onChangeEnrollmentStatus);
  yield throttle(API_THROTTLE, actions.game.closeEnrollment, onCloseEnrollment);
  yield throttle(API_THROTTLE, actions.game.drawTeams, onDrawTeams);
  yield takeLatest(actions.game.enrollAnotherUser, onEnrollAnotherUser);
  yield throttle(API_THROTTLE, actions.game.end, onEnd);
  yield takeLatest(actions.game.load, onLoad);
  yield takeLatest(actions.game.saveScore, onSaveScore);
  yield throttle(API_THROTTLE, actions.game.loadAll, onGamesLoad);
}

function *onChangeEnrollmentStatus({ payload: enrollmentStatus }) {
  yield call(delay, API_DEBOUNCE);
  try {
    const gameId = yield select(gameIdSelector);
    const game = yield call(putChangeEnrollmentStatus, gameId, enrollmentStatus);
    yield put(actions.game.changeEnrollmentStatusSuccess(game));
  } catch(error) {
    yield put(actions.game.changeEnrollmentStatusFailure(error));
  }
}

function *onCloseEnrollment() {
  try {
    const gameId = yield select(gameIdSelector);
    const game = yield call(putCloseEnrollment, gameId);
    yield put(actions.game.closeEnrollmentSuccess(game));
  } catch(error) {
    yield put(actions.game.closeEnrollmentFailure(error));
  }
}

function *onDrawTeams() {
  try {
    const gameId = yield select(gameIdSelector);
    const game = yield call(putDrawTeams, gameId);
    yield put(actions.game.drawTeamsSuccess(game));
  } catch(error) {
    yield put(actions.game.drawTeamsFailure(error));
  }
}

function *onEnrollAnotherUser({ payload: userId }) {
  yield call(delay, API_DEBOUNCE);
  try {
    const gameId = yield select(gameIdSelector);
    const game = yield call(putEnrollAnotherUser, gameId, userId, ENROLLMENT_STATUS_YES);
    yield put(actions.game.enrollAnotherUserSuccess(game));
    yield put(actions.game.enrollAnotherUserReset());
  } catch(error) {
    yield put(actions.game.enrollAnotherUserFailure(error));
  }
}

function *onEnd() {
  try {
    const gameId = yield select(gameIdSelector);
    const game = yield call(putEnd, gameId);
    yield put(actions.game.endSuccess(game));
    yield put(push(`/games/previous/${gameId}`));
  } catch(error) {
    yield put(actions.game.endFailure(error));
  }
}

function *onLoad({ payload: gameId}) {
  yield call(delay, API_DEBOUNCE);
  try {
    const game = yield call(getGame, gameId);
    yield put(actions.game.loadSuccess(game));
  } catch(error) {
    yield put(actions.game.loadFailure(error));
  }
}

function *onSaveScore() {
  yield call(delay, API_DEBOUNCE);
  try {
    const { id, teamAScore, teamBScore } = yield select(editableGameSelector);
    const game = yield call(putScore, id, teamAScore, teamBScore);
    yield put(actions.game.saveScoreSuccess(game));
  } catch(error) {
    yield put(actions.game.saveScoreFailure(error));
  }
}

function *onGamesLoad() {
  try {
    const game = yield call(getGames);
    yield put(actions.game.loadAllSuccess(game));
  } catch(error) {
    yield put(actions.game.loadAllFailure(error));
  }
}
