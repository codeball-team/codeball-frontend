import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_DEBOUNCE } from 'constants';
import { getPitch } from 'pitch/api';
import { actions } from 'pitch/state';

export default function* pitchSagas() {
  yield takeLatest(actions.load, onLoad);
}

function* onLoad({ payload: pitchId }) {
  yield call(delay, API_DEBOUNCE);
  try {
    const pitch = yield call(getPitch, pitchId);
    yield put(actions.loadSuccess(pitch));
  } catch (error) {
    yield put(actions.loadFailure(error));
  }
}
