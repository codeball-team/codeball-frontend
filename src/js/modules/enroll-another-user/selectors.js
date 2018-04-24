import { createSelector } from 'reselect';

export const selectRoot = (state) => state.enrollAnotherUser;
export const selectUserId = createSelector(selectRoot, ({ userId }) => userId);
