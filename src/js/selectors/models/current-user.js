import { createSelector } from 'reselect';

export const currentUserSelector = (state) => state.currentUserData.currentUser;

export const currentUserIdSelector = createSelector(
  [ currentUserSelector ],
  (currentUser) => currentUser.id
);

