import { createSelector } from 'reselect';
import { findById } from 'utils';
import { selectPitches } from 'pitches/selectors';
import { selectUsers } from 'users/selectors';

const mapUsersIdsToUsers = (users, usersIds) => usersIds
  .map((userId) => findById(users, userId, null))
  .filter(Boolean);

export const selectRoot = (state) => state.gameData;
export const selectGame = createSelector(selectRoot, ({ game }) => game);
export const selectIsEditing = createSelector(selectRoot, ({ isEditing }) => isEditing);
export const selectEditedGame = createSelector(selectRoot, ({ editedGame }) => editedGame);
export const selectEditableGame = createSelector(
  [ selectIsEditing, selectGame, selectEditedGame ],
  (isEditing, game, editedGame) => isEditing ? editedGame : game
);
export const selectPitchId = createSelector(selectGame, ({ pitchId }) => pitchId);
export const selectPitch = createSelector([ selectPitches, selectPitchId ], findById);
export const selectPitchName = createSelector(selectPitch, ({ name }) => name);
export const selectTeamA = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamB = createSelector(selectGame, ({ teamA }) => teamA);
export const selectTeamAScore = createSelector(selectEditableGame, ({ teamAScore }) => teamAScore);
export const selectTeamBScore = createSelector(selectEditableGame, ({ teamBScore }) => teamBScore);
export const selectTeamAUsers = createSelector([ selectUsers, selectTeamA ], mapUsersIdsToUsers);
export const selectTeamBUsers = createSelector([ selectUsers, selectTeamB ], mapUsersIdsToUsers);
export const selectDate = createSelector(selectGame, ({ date }) => date);
export const selectDuration = createSelector(selectGame, ({ duration }) => duration);
export const selectTime = createSelector(selectGame, ({ time }) => time);
