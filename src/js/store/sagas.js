import ajaxSagas from 'ajax/sagas';
import currentUserSagas from 'current-user/sagas';
import gameSagas from 'game/sagas';

export default function* rootSagas() {
  yield* ajaxSagas();
  yield* currentUserSagas();
  yield* gameSagas();
}
