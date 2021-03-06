import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { API_DEBOUNCE } from 'constants';
import { selectGameId } from 'game/selectors';
import { selectEnrollmentStatus, selectUserId } from 'enroll-another-user/selectors';
import { putEnrollAnotherUser } from 'enroll-another-user/api';
import { actions } from 'enroll-another-user/state';

export default function* gameSagas() {
  yield takeLatest(actions.submit, onEnrollAnotherUser);
}

function* onEnrollAnotherUser() {
  yield call(delay, API_DEBOUNCE);
  try {
    const userId = yield select(selectUserId);
    const enrollmentStatus = yield select(selectEnrollmentStatus);
    const gameId = yield select(selectGameId);
    const game = yield call(putEnrollAnotherUser, gameId, userId, enrollmentStatus);
    yield put(actions.submitSuccess(game));
    yield put(actions.reset());
  } catch (error) {
    yield put(actions.submitFailure(error));
  }
}
