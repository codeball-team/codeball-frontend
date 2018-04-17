import { createStructuredSelector } from 'reselect';
import {
  createIsLoadingSelector,
  isCurrentUserLoadingSelector,
  isGameDataLoadingSelector,
  isPitchesDataLoadingSelector,
  isUsersDataLoadingSelector
} from 'selectors/is-loading';
import {
  editableGameSelector,
  hasGameLoadedSelector,
  isGameEditingSelector,
  pitchSelector,
  teamASelector,
  teamBSelector
} from 'selectors/models/game';

const isGameLoadingSelector = createIsLoadingSelector(
  isCurrentUserLoadingSelector,
  isGameDataLoadingSelector,
  isPitchesDataLoadingSelector,
  isUsersDataLoadingSelector
);

export default createStructuredSelector({
  game: editableGameSelector,
  hasGameLoaded: hasGameLoadedSelector,
  isGameEditing: isGameEditingSelector,
  isLoading: isGameLoadingSelector,
  pitch: pitchSelector,
  teamA: teamASelector,
  teamB: teamBSelector
});
