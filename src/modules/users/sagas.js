import { call, put, throttle } from 'redux-saga/effects';
import { API_THROTTLE } from 'constants';
import { getUsers } from 'users/api';
import { actions } from 'users/state';

export default function* usersSagas() {
  yield throttle(API_THROTTLE, actions.load, onLoad);
}

function* onLoad() {
  try {
    const users = yield call(getUsers);
    yield put(actions.loadSuccess(users));
  } catch (error) {
    yield put(actions.loadFailure(error));
  }
}
