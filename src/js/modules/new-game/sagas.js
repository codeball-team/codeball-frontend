import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { API_DEBOUNCE } from 'constants';
import { newGameSelector } from 'selectors/models/new-game';
import { selectCanAddGame } from 'current-user/selectors';
import { postNewGame } from 'new-game/api';
import { actions } from 'new-game/state';

export default function* newGameSagas() {
  yield takeLatest(actions.newGame.reset, onReset);
  yield takeLatest(actions.newGame.submit, onSubmit);
}

function* onReset() {
  const canAddGame = yield select(selectCanAddGame);
  if (!canAddGame) {
    yield put(push('/unauthorized'));
  } else {
    document.querySelector('input').focus();
  }
}

function* onSubmit() {
  yield call(delay, API_DEBOUNCE);
  try {
    const newGame = yield select(newGameSelector);
    const game = yield call(postNewGame, newGame);
    yield put(actions.newGame.submitSuccess(game));
    yield put(push(`/games/upcoming/${game.id}`));
  } catch (error) {
    yield put(actions.newGame.submitFailure(error));
  }
}
