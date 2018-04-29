import { createSelector } from 'reselect';
import { ROLE_STRING } from 'constants';
import NewUserModel from 'new-user/model';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

export const selectRoot = (state) => state.newUser;
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectFirstName = createSelector(selectRoot, ({ firstName }) => firstName);
export const selectFirstNameDisplayValue = selectFirstName;
export const selectFirstNameIsValid = createSelector(selectRoot, NewUserModel.isFirstNameValid);
export const selectLastName = createSelector(selectRoot, ({ lastName }) => lastName);
export const selectLastNameDisplayValue = selectLastName;
export const selectLastNameIsValid = createSelector(selectRoot, NewUserModel.isLastNameValid);
export const selectEmail = createSelector(selectRoot, ({ email }) => email);
export const selectEmailDisplayValue = selectEmail;
export const selectEmailIsValid = createSelector(selectRoot, NewUserModel.isEmailValid);
export const selectRole = createSelector(selectRoot, ({ role }) => role);
export const selectRoleDisplayValue = createSelector(selectRole, (role) => ROLE_STRING[role]);
export const selectRoleIsValid = createSelector(selectRoot, NewUserModel.isRoleValid);
export const selectIsValid = createSelector(
  [ selectFirstNameIsValid, selectLastNameIsValid, selectEmailIsValid, selectRoleIsValid ],
  (...conditions) => conditions.every(Boolean)
);
