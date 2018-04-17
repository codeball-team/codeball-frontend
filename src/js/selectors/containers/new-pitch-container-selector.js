import { createStructuredSelector } from 'reselect';
import {
  createIsLoadingSelector,
  isCurrentUserLoadingSelector
} from 'selectors/is-loading';
import { newPitchSelector } from 'selectors/models/new-pitch';

const isNewPitchLoadingSelector = createIsLoadingSelector(
  isCurrentUserLoadingSelector
);

export default createStructuredSelector({
  isLoading: isNewPitchLoadingSelector,
  newPitch: newPitchSelector
});
