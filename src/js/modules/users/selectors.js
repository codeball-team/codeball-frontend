import { createSelector } from 'reselect';
import { sortByMany } from 'utils';

const sortUsers = (users) => sortByMany(users, [ 'lastName', 'firstName' ]);

export const selectRoot = (state) => state.usersData;
export const selectUsers = createSelector(selectRoot, ({ users }) => users);
export const selectSortedUsers = createSelector(selectUsers, sortUsers);
