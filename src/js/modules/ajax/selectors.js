import { createSelector } from 'reselect';

export const selectRoot = (state) => state.ajax;
export const selectErrors = createSelector(selectRoot, ({ errors }) => errors);
export const selectNonSilentErrors = createSelector(
  [ selectErrors ],
  (errors) => errors.filter(({ isSilent }) => !isSilent)
);
export const selectPendingCount = createSelector(selectRoot, ({ pendingCount }) => pendingCount);
export const selectArePending = createSelector(selectPendingCount, (count) => count > 0);
