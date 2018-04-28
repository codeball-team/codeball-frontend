import { createSelector } from 'reselect';
import { sortByMany } from 'utils';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

const sortUsers = (users) => sortByMany(users, [ 'lastName', 'firstName' ]);

export const selectRoot = (state) => state.usersData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectHasLoaded = createSelector(selectRoot, ({ hasLoaded }) => hasLoaded);
export const selectUsers = createSelector(selectRoot, ({ users }) => users);
export const selectSortedUsers = createSelector(selectUsers, sortUsers);
export const selectUsersOptions = createSelector(
  [ selectSortedUsers ],
  (users) => users.map(({ id, firstName, lastName }) => ({
    label: `${lastName} ${firstName}`,
    value: id
  }))
);
