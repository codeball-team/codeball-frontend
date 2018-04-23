import ajaxSagas from 'ajax/sagas';
import gameSagas from 'game/sagas';

export default function* rootSagas() {
  yield* ajaxSagas();
  yield* gameSagas();
}
