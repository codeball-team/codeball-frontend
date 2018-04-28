import { put, takeEvery } from 'redux-saga/effects';

export default function* ajaxSagas() {
  yield takeEvery('*', onAction);
}

function* onAction({ meta }) {
  if (meta && meta.ajax) {
    yield put(meta.ajax(meta.response));
  }
}
