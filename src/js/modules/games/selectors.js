import { createSelector } from 'reselect';
import { findById } from 'utils';
import { selectPitches } from 'pitches/selectors';

export const selectRoot = (state) => state.gamesData;
export const selectGamesRaw = createSelector(selectRoot, ({ games }) => games);
export const selectGames = createSelector(
  [ selectGamesRaw, selectPitches ],
  (games, pitches) => games.map((game) => ({
    ...game,
    pitch: findById(pitches, game.pitchId)
  }))
);
export const selectPreviousGames = createSelector(
  selectGames,
  (games) => games.filter(({ isGameOver }) => isGameOver)
);
export const selectUpcomingGames = createSelector(
  selectGames,
  (games) => games.filter(({ isGameOver }) => !isGameOver)
);
