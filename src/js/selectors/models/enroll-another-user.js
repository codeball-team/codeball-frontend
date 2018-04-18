import { createSelector } from 'reselect';

export const enrollAnotherUserSelector = (state) => state.enrollAnotherUser;

export const isEnrollAnotherUserEditingSelector = createSelector(
  [ enrollAnotherUserSelector ],
  (enrollAnotherUser) => enrollAnotherUser.isEditing
);
