import { createSelector } from 'reselect';
import { ROLE_STRING, USER_MISSING_PICTURE_URL } from 'constants';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

export const selectRoot = (state) => state.userData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectHasLoaded = createSelector(selectRoot, ({ hasLoaded }) => hasLoaded);
export const selectUser = createSelector(selectRoot, ({ user }) => user);

export const selectEmail = createSelector(selectUser, ({ email }) => email);
export const selectPictureUrl = createSelector(selectUser, ({ pictureUrl }) => pictureUrl || USER_MISSING_PICTURE_URL);
export const selectRole = createSelector(selectUser, ({ role }) => role);
export const selectRoleString = createSelector(selectRole, (role) => ROLE_STRING[role]);
export const selectFirstName = createSelector(selectUser, ({ firstName }) => firstName);
export const selectLastName = createSelector(selectUser, ({ lastName }) => lastName);
export const selectName = createSelector(
  [ selectFirstName, selectLastName ],
  (firstName, lastName) => `${lastName} ${firstName}`
);
