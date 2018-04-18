import { createSelector } from 'reselect';
import { sortByMany } from 'utils';

export const usersSelector = (state) => state.usersData.users;

export const sortedUsersSelector = createSelector(
  [ usersSelector ],
  (users) => sortByMany(users, [ 'lastName', 'firstName' ])
);
