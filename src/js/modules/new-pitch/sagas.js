import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { API_DEBOUNCE } from 'constants';
import { newPitchSelector } from 'selectors/models/new-pitch';
import { selectCanAddPitch } from 'current-user/selectors';
import { postNewPitch } from 'new-pitch/api';
import { actions } from 'new-pitch/state';

export default function* newPitchSagas() {
  yield takeLatest(actions.newPitch.reset, onReset);
  yield takeLatest(actions.newPitch.submit, onSubmit);
}

function* onReset() {
  const canAddPitch = yield select(selectCanAddPitch);
  if (canAddPitch) {
    document.querySelector('input').focus();
  } else {
    yield put(push('/unauthorized'));
  }
}

function* onSubmit() {
  yield call(delay, API_DEBOUNCE);
  try {
    const newPitch = yield select(newPitchSelector);
    const pitch = yield call(postNewPitch, newPitch);
    yield put(actions.newPitch.submitSuccess(pitch));
    yield put(push(`/pitches/${pitch.id}`));
  } catch (error) {
    yield put(actions.newPitch.submitFailure(error));
  }
}
