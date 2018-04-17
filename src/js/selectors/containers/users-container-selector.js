import { createStructuredSelector } from 'reselect';
import {
  createIsLoadingSelector,
  isUsersDataLoadingSelector
} from 'selectors/is-loading';
import { currentUserSelector } from 'selectors/models/current-user';
import { sortedUsersSelector } from 'selectors/models/users';

const areUsersLoadingSelector = createIsLoadingSelector(
  isUsersDataLoadingSelector
);

export default createStructuredSelector({
  isLoading: areUsersLoadingSelector,
  currentUser: currentUserSelector,
  users: sortedUsersSelector
});
