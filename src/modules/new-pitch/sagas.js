import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { API_DEBOUNCE } from 'constants';
import { actions } from 'new-pitch/state';
import { selectCanAddPitch } from 'current-user/selectors';
import { selectNewPitchPayload } from 'new-pitch/selectors';
import { postNewPitch } from 'new-pitch/api';

export default function* newPitchSagas() {
  yield takeLatest(actions.reset, onReset);
  yield takeLatest(actions.submit, onSubmit);
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
    const newPitch = yield select(selectNewPitchPayload);
    const pitch = yield call(postNewPitch, newPitch);
    yield put(actions.submitSuccess(pitch));
    yield put(push(`/pitches/${pitch.id}`));
  } catch (error) {
    yield put(actions.submitFailure(error));
  }
}
