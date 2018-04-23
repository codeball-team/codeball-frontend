import { createSelector } from 'reselect';
import createCachedSelector from 're-reselect';
import { PERMISSION_EDIT_GAME_SCORE, ROLE_USER, ROLES_PERMISSIONS } from 'constants';

const selectPermission = (state, { permission }) => permission;

export const selectRoot = (state) => state.currentUserData;
export const selectCurrentUser = createSelector(selectRoot, ({ currentUser }) => currentUser);
export const selectRole = createSelector(selectCurrentUser, ({ role }) => role || ROLE_USER);

// export const selectHasPermission = createCachedSelector(
//   [ selectRole, selectPermission ],
//   (role, permission) => ROLES_PERMISSIONS[role][permission]
// )(selectPermission);

export const selectCanEditGameScore = createSelector(selectRole, (role) => ROLES_PERMISSIONS[role][PERMISSION_EDIT_GAME_SCORE]);
