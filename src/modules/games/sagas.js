import { call, put, throttle } from 'redux-saga/effects';
import { API_THROTTLE } from 'constants';
import { getGames } from 'games/api';
import { actions } from 'games/state';

export default function* gamesSagas() {
  yield throttle(API_THROTTLE, actions.load, onLoad);
}

function* onLoad() {
  try {
    const games = yield call(getGames);
    yield put(actions.loadSuccess(games));
  } catch (error) {
    yield put(actions.loadFailure(error));
  }
}
