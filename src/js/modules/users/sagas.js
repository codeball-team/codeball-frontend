import { call, put, throttle } from 'redux-saga/effects';
import { API_THROTTLE } from 'constants';
import { getUsers } from 'users/api';
import { actions } from 'users/state';

export default function* usersSagas() {
  yield throttle(API_THROTTLE, actions.users.load, onLoad);
}

function* onLoad() {
  try {
    const users = yield call(getUsers);
    yield put(actions.users.loadSuccess(users));
  } catch (error) {
    yield put(actions.users.loadFailure(error));
  }
}
