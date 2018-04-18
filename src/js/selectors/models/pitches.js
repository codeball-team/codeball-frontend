import { createSelector } from 'reselect';
import { sortByMany } from 'utils';

export const pitchesSelector = (state) => state.pitchesData.pitches;

export const sortedPitchesSelector = createSelector(
  [ pitchesSelector ],
  (pitches) => sortByMany(pitches, ['name'])
);
