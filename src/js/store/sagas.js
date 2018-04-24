import ajaxSagas from 'ajax/sagas';
import currentUserSagas from 'current-user/sagas';
import gameSagas from 'game/sagas';
import gamesSagas from 'games/sagas';
import newGameSagas from 'new-game/sagas';
import newUserSagas from 'new-user/sagas';
import usersSagas from 'users/sagas';

export default function* rootSagas() {
  yield* ajaxSagas();
  yield* currentUserSagas();
  yield* gameSagas();
  yield* gamesSagas();
  yield* newGameSagas();
  yield* newUserSagas();
  yield* usersSagas();
}
