import { call, put, throttle } from 'redux-saga/effects';
import { API_THROTTLE } from 'constants';
import { getPitches } from 'pitches/api';
import { actions } from 'pitches/state';

export default function* pitchesSagas() {
  yield throttle(API_THROTTLE, actions.pitches.load, onLoad);
}

function* onLoad() {
  try {
    const pitches = yield call(getPitches);
    yield put(actions.pitches.loadSuccess(pitches));
  } catch (error) {
    yield put(actions.pitches.loadFailure(error));
  }
}
