import { call, put, throttle } from 'redux-saga/effects';
import { API_THROTTLE } from 'constants';
import { getCurrentUser } from 'current-user/api';
import { actions } from 'current-user/state';

export default function* currentUserSagas() {
  yield throttle(API_THROTTLE, actions.currentUser.load, onLoad);
}

function* onLoad() {
  try {
    const currentUser = yield call(getCurrentUser);
    yield put(actions.currentUser.loadSuccess(currentUser));
  } catch (error) {
    yield put(actions.currentUser.loadFailure(error));
  }
}
