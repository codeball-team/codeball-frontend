import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_DEBOUNCE } from 'constants';
import { getUser } from 'user/api';
import { actions } from 'user/state';

export default function* userSagas() {
  yield takeLatest(actions.load, onLoad);
}

function* onLoad({ payload: userId }) {
  yield call(delay, API_DEBOUNCE);
  try {
    const user = yield call(getUser, userId);
    yield put(actions.loadSuccess(user));
  } catch (error) {
    yield put(actions.loadFailure(error));
  }
}
