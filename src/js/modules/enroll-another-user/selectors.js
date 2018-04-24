import { createSelector } from 'reselect';

export const selectRoot = (state) => state.enrollAnotherUser;
export const selectEnrollmentStatus = createSelector(selectRoot, ({ enrollmentStatus }) => enrollmentStatus);
export const selectUserId = createSelector(selectRoot, ({ userId }) => userId);
