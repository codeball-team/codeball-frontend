import { createSelector } from 'reselect';

export const selectRoot = (state) => state.pitchesData;
export const selectPitches = createSelector(selectRoot, ({ pitches }) => pitches);
