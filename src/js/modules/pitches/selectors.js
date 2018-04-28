import { createSelector } from 'reselect';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';

export const selectRoot = (state) => state.pitchesData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
export const selectPitches = createSelector(selectRoot, ({ pitches }) => pitches);
export const selectPitchesOptions = createSelector(selectPitches, (pitches) => pitches.map((pitch) => ({
  label: pitch.name,
  value: pitch.id
})));
