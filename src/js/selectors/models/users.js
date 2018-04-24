import { createSelector } from 'reselect';
import { sortByMany } from 'utils';

export const selectRoot = (state) => state.usersData;

export const usersSelector = createSelector(selectRoot, ({ users }) => users);

export const sortedUsersSelector = createSelector(
  [ usersSelector ],
  (users) => sortByMany(users, [ 'lastName', 'firstName' ])
);
