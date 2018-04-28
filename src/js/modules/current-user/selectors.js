import { createSelector } from 'reselect';
import {
  PERMISSION_ADD_GAME,
  PERMISSION_ADD_PITCH,
  PERMISSION_ADD_USER,
  PERMISSION_CLOSE_ENROLLMENT,
  PERMISSION_DRAW_TEAMS,
  PERMISSION_EDIT_GAME_SCORE,
  PERMISSION_END_GAME,
  PERMISSION_ENROLL,
  PERMISSION_ENROLL_ANOTHER_USER,
  ROLE_USER,
  ROLES_PERMISSIONS
} from 'constants';

export const selectRoot = (state) => state.currentUserData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectCurrentUser = createSelector(selectRoot, ({ currentUser }) => currentUser);
export const selectCurrentUserId = createSelector(selectCurrentUser, ({ id }) => id);
export const selectRole = createSelector(selectCurrentUser, ({ role }) => role || ROLE_USER);
export const selectPermissions = createSelector(selectRole, (role) => ROLES_PERMISSIONS[role]);

const createPermissionSelector = (permission) => createSelector(
  [ selectPermissions ],
  (permissions) => permissions[permission]
);
export const selectCanAddGame = createPermissionSelector(PERMISSION_ADD_GAME);
export const selectCanAddPitch = createPermissionSelector(PERMISSION_ADD_PITCH);
export const selectCanAddUser = createPermissionSelector(PERMISSION_ADD_USER);
export const selectCanCloseEnrollment = createPermissionSelector(PERMISSION_CLOSE_ENROLLMENT);
export const selectCanDrawTeams = createPermissionSelector(PERMISSION_DRAW_TEAMS);
export const selectCanEditGameScore = createPermissionSelector(PERMISSION_EDIT_GAME_SCORE);
export const selectCanEndGame = createPermissionSelector(PERMISSION_END_GAME);
export const selectCanEnroll = createPermissionSelector(PERMISSION_ENROLL);
export const selectCanEnrollAnotherUser = createPermissionSelector(PERMISSION_ENROLL_ANOTHER_USER);
