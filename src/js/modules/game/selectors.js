import { createSelector } from 'reselect';
import { findById } from 'utils';
import { selectUsers } from 'users/selectors';

const mapUsersIdsToUsers = (users, usersIds) => usersIds
  .map((userId) => findById(users, userId, null))
  .filter(Boolean);

export const selectRoot = (state) => state.gameData;
export const selectGame = createSelector(selectRoot, ({ game }) => game);
export const selectTeamA = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamB = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamAUsers = createSelector([ selectUsers, selectTeamA ], mapUsersIdsToUsers);
export const selectTeamBUsers = createSelector([ selectUsers, selectTeamB ], mapUsersIdsToUsers);
