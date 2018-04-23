import { put, takeEvery } from 'redux-saga/effects';

export default function* ajaxSagas() {
  yield takeEvery('*', onAction);
}

function *onAction({ type, meta }) {
  if (meta && meta.ajax) {
    yield put({ type: meta.ajax, response: meta.error }); // TODO: rename "response" to "error"
  }
}
