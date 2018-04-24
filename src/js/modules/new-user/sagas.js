import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { API_DEBOUNCE } from 'constants';
import { newUserSelector } from 'selectors/models/new-user';
import { selectCanAddUser } from 'current-user/selectors';
import { postNewUser } from 'new-user/api';
import { actions } from 'new-user/state';

export default function* newUserSagas() {
  yield takeLatest(actions.newUser.reset, onReset);
  yield takeLatest(actions.newUser.submit, onSubmit);
}

function* onReset() {
  const canAddUser = yield select(selectCanAddUser);
  if (!canAddUser) {
    yield put(push('/unauthorized'));
  }
}

function* onSubmit() {
  yield call(delay, API_DEBOUNCE);
  try {
    const newUser = yield select(newUserSelector);
    const user = yield call(postNewUser, newUser);
    yield put(actions.newUser.submitSuccess(user));
    yield put(push(`/players/${user.id}`));
  } catch (error) {
    yield put(actions.newUser.submitFailure(error));
  }
}
