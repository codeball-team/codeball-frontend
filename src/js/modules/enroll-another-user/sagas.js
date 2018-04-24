import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { API_DEBOUNCE, ENROLLMENT_STATUS_YES } from 'constants';
import { gameIdSelector } from 'selectors/models/game';
import { selectUserId } from 'enroll-another-user/selectors';
import { putEnrollAnotherUser } from 'enroll-another-user/api';
import { actions } from 'enroll-another-user/state';

export default function* gameSagas() {
  yield takeLatest(actions.enrollAnotherUser.submit, onEnrollAnotherUser);
}

function *onEnrollAnotherUser() {
  yield call(delay, API_DEBOUNCE);
  try {
    const userId = yield select(selectUserId);
    const gameId = yield select(gameIdSelector);
    const game = yield call(putEnrollAnotherUser, gameId, userId, ENROLLMENT_STATUS_YES);
    yield put(actions.enrollAnotherUser.submitSuccess(game));
    yield put(actions.enrollAnotherUser.reset());
  } catch(error) {
    yield put(actions.enrollAnotherUser.submitFailure(error));
  }
}
