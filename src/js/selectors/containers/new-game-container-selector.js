import { createStructuredSelector } from 'reselect';
import {
  createIsLoadingSelector,
  isCurrentUserLoadingSelector,
  isPitchesDataLoadingSelector
} from 'selectors/is-loading';
import { newGameSelector } from 'selectors/models/new-game';
import { sortedPitchesSelector } from 'selectors/models/pitches';

const isNewGameLoadingSelector = createIsLoadingSelector(
  isCurrentUserLoadingSelector,
  isPitchesDataLoadingSelector
);

export default createStructuredSelector({
  isLoading: isNewGameLoadingSelector,
  newGame: newGameSelector,
  pitches: sortedPitchesSelector
});
