import { createSelector } from 'reselect';
import { findLabelByValue } from 'utils';
import { EnrollAnotherUserModel } from 'models';
import { selectUsersOptions } from 'users/selectors';

export const selectRoot = (state) => state.enrollAnotherUser;
export const selectEnrollmentStatus = createSelector(selectRoot, ({ enrollmentStatus }) => enrollmentStatus);
export const selectUserId = createSelector(selectRoot, ({ userId }) => userId);
export const selectDisplayValue = createSelector(
  [ selectUsersOptions, selectUserId ],
  findLabelByValue
);
export const selectIsEditing = createSelector(selectRoot, ({ isEditing }) => isEditing);
export const selectIsValid = createSelector(selectRoot, EnrollAnotherUserModel.isUserIdValid);
