import gameSagas from 'game/sagas';

export default function* rootSagas() {
  yield* gameSagas();
}
