import { createSelector } from 'reselect';
import { findLabelByValue } from 'utils';
import { EnrollAnotherUserModel } from 'models';
import { selectUsersOptions } from 'users/selectors';

export const selectRoot = (state) => state.enrollAnotherUser;
export const selectEnrollmentStatus = createSelector(selectRoot, ({ enrollmentStatus }) => enrollmentStatus);
export const selectIsEditing = createSelector(selectRoot, ({ isEditing }) => isEditing);
export const selectUserId = createSelector(selectRoot, ({ userId }) => userId);
export const selectUserIdDisplayValue = createSelector(
  [ selectUsersOptions, selectUserId ],
  findLabelByValue
);
export const selectUserIdIsValid = createSelector(selectRoot, EnrollAnotherUserModel.isUserIdValid);
