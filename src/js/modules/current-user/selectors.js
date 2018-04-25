import { createSelector } from 'reselect';
import {
  PERMISSION_ADD_GAME,
  PERMISSION_ADD_PITCH,
  PERMISSION_ADD_USER,
  PERMISSION_EDIT_GAME_SCORE,
  ROLE_USER,
  ROLES_PERMISSIONS
} from 'constants';


export const selectRoot = (state) => state.currentUserData;
export const selectCurrentUser = createSelector(selectRoot, ({ currentUser }) => currentUser);
export const selectRole = createSelector(selectCurrentUser, ({ role }) => role || ROLE_USER);

// const selectPermission = (state, { permission }) => permission;
// export const selectHasPermission = createCachedSelector(
//   [ selectRole, selectPermission ],
//   (role, permission) => ROLES_PERMISSIONS[role][permission]
// )(selectPermission);
export const selectPermissions = createSelector(selectRole, (role) => ROLES_PERMISSIONS[role]);
export const selectCanAddGame = createSelector(selectPermissions, (permissions) => permissions[PERMISSION_ADD_GAME]);
export const selectCanAddPitch = createSelector(selectPermissions, (permissions) => permissions[PERMISSION_ADD_PITCH]);
export const selectCanAddUser = createSelector(selectPermissions, (permissions) => Boolean(permissions[PERMISSION_ADD_USER]));
export const selectCanEditGameScore = createSelector(selectPermissions, (permissions) => permissions[PERMISSION_EDIT_GAME_SCORE]);
