import ajaxSagas from 'ajax/sagas';
import currentUserSagas from 'current-user/sagas';
import gameSagas from 'game/sagas';
import gamesSagas from 'games/sagas';
import newGameSagas from 'new-game/sagas';
import newPitchSagas from 'new-pitch/sagas';
import newUserSagas from 'new-user/sagas';
import pitchSagas from 'pitch/sagas';
import userSagas from 'user/sagas';
import usersSagas from 'users/sagas';

export default function* rootSagas() {
  yield* ajaxSagas();
  yield* currentUserSagas();
  yield* gameSagas();
  yield* gamesSagas();
  yield* newGameSagas();
  yield* newPitchSagas();
  yield* newUserSagas();
  yield* pitchSagas();
  yield* userSagas();
  yield* usersSagas();
}
