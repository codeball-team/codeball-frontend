import { put, takeEvery } from 'redux-saga/effects';

export default function* ajaxSagas() {
  yield takeEvery('*', onAction);
}

function* onAction({ meta, type }) {
  if (meta && meta.ajax) {
    yield put(meta.ajax(type, meta.response));
  }
}
