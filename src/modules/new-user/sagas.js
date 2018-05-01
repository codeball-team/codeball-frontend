import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { API_DEBOUNCE } from 'constants';
import { actions } from 'new-user/state';
import { selectCanAddUser } from 'current-user/selectors';
import { selectNewUserPayload } from 'new-user/selectors';
import { postNewUser } from 'new-user/api';

export default function* newUserSagas() {
  yield takeLatest(actions.reset, onReset);
  yield takeLatest(actions.submit, onSubmit);
}

function* onReset() {
  const canAddUser = yield select(selectCanAddUser);
  if (canAddUser) {
    document.querySelector('input').focus();
  } else {
    yield put(push('/unauthorized'));
  }
}

function* onSubmit() {
  yield call(delay, API_DEBOUNCE);
  try {
    const newUser = yield select(selectNewUserPayload);
    const user = yield call(postNewUser, newUser);
    yield put(actions.submitSuccess(user));
    yield put(push(`/players/${user.id}`));
  } catch (error) {
    yield put(actions.submitFailure(error));
  }
}
