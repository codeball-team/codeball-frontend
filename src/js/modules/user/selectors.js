import { createSelector } from 'reselect';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

export const selectRoot = (state) => state.userData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectHasLoaded = createSelector(selectRoot, ({ hasLoaded }) => hasLoaded);
export const selectUser = createSelector(selectRoot, ({ user }) => user);
