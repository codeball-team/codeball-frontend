import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_DEBOUNCE } from 'constants';
import { getUser } from 'user/api';
import { actions } from 'user/state';

export default function* userSagas() {
  yield takeLatest(actions.user.load, onLoad);
}

function *onLoad({ payload: userId }) {
  yield delay(API_DEBOUNCE);
  try {
    const user = yield call(getUser, userId);
    yield put(actions.user.loadSuccess(user));
  } catch(error) {
    yield put(actions.user.loadFailure(error));
  }
}
