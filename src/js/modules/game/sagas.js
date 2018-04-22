import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ENROLLMENT_STATUS_YES } from 'constants';
import { editableGameSelector } from 'selectors/models/game';
import { push } from 'react-router-redux';
import {
  getGame,
  getGames,
  putGameChangeEnrollmentStatus,
  putGameCloseEnrollment,
  putGameDrawTeams,
  putGameEnd,
  putGameEnrollAnotherUser,
  putGameScore
} from './api';
import { actions } from './state';

export default function* gameSagas() {
  yield takeLatest(actions.game.changeEnrollmentStatus, onChangeEnrollmentStatus);
  yield takeLatest(actions.game.closeEnrollment, onCloseEnrollment);
  yield takeLatest(actions.game.drawTeams, onDrawTeams);
  yield takeLatest(actions.game.enrollAnotherUser, onEnrollAnotherUser);
  yield takeLatest(actions.game.end, onEnd);
  yield takeLatest(actions.game.load, onLoad);
  yield takeLatest(actions.game.saveScore, onSaveScore);
  yield takeLatest(actions.game.loadAll, onGamesLoad);
}

function *onChangeEnrollmentStatus({ payload: { enrollmentStatus, gameId } }) {
  // TODO: debounce
  try {
    const game = yield call(putGameChangeEnrollmentStatus, gameId, enrollmentStatus);
    yield put(actions.game.changeEnrollmentStatusSuccess(game));
  } catch(error) {
    yield put(actions.game.changeEnrollmentStatusFailure(error));
  }
}

function *onCloseEnrollment({ payload: gameId }) {
  // TODO: throttle
  try {
    const game = yield call(putGameCloseEnrollment, gameId);
    yield put(actions.game.closeEnrollmentSuccess(game));
  } catch(error) {
    yield put(actions.game.closeEnrollmentFailure(error));
  }
}

function *onDrawTeams({ payload: gameId }) {
  // TODO: throttle
  try {
    const game = yield call(putGameDrawTeams, gameId);
    yield put(actions.game.drawTeamsSuccess(game));
  } catch(error) {
    yield put(actions.game.drawTeamsFailure(error));
  }
}

function *onEnrollAnotherUser({ payload: { gameId, userId } }) {
  // TODO: debounce
  try {
    const game = yield call(putGameEnrollAnotherUser, gameId, userId, ENROLLMENT_STATUS_YES);
    yield put(actions.game.enrollAnotherUserSuccess(game));
    yield put(actions.game.enrollAnotherUserReset());
  } catch(error) {
    yield put(actions.game.enrollAnotherUserFailure(error));
  }
}

function *onEnd({ payload: gameId }) {
  // TODO: throttle
  try {
    const game = yield call(putGameEnd, gameId);
    yield put(actions.game.endSuccess(game));
    yield put(push(`/games/previous/${gameId}`));
  } catch(error) {
    yield put(actions.game.endFailure(error));
  }
}

function *onLoad({ payload: gameId }) {
  // TODO: debounce
  try {
    const game = yield call(getGame, gameId);
    yield put(actions.game.loadSuccess(game));
  } catch(error) {
    yield put(actions.game.loadFailure(error));
  }
}

function *onSaveScore() {
  // TODO: debounce
  try {
    const { id, teamAScore, teamBScore } = yield select(editableGameSelector);
    console.log(id, teamAScore, teamBScore);
    const game = yield call(putGameScore, id, teamAScore, teamBScore);
    yield put(actions.game.saveScoreSuccess(game));
  } catch(error) {
    yield put(actions.game.saveScoreFailure(error));
  }
}

function *onGamesLoad() {
  // TODO: throttle
  try {
    const game = yield call(getGames);
    yield put(actions.game.loadAllSuccess(game));
  } catch(error) {
    yield put(actions.game.loadAllFailure(error));
  }
}
