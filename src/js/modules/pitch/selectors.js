import { createSelector } from 'reselect';

export const selectRoot = (state) => state.pitchData;
export const selectPitch = createSelector(selectRoot, ({ pitch }) => pitch);
export const selectName = createSelector(selectPitch, ({ name }) => name);
