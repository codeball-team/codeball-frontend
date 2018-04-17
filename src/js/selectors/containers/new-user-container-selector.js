import { createStructuredSelector } from 'reselect';
import {
  createIsLoadingSelector,
  isCurrentUserLoadingSelector
} from 'selectors/is-loading';
import { newUserSelector } from 'selectors/models/new-user';

const isNewUserLoadingSelector = createIsLoadingSelector(
  isCurrentUserLoadingSelector
);

export default createStructuredSelector({
  isLoading: isNewUserLoadingSelector,
  newUser: newUserSelector
});
