import { createSelector } from 'reselect';
import { findById } from 'utils';
import { pitchesSelector } from 'selectors/models/pitches';

export const gamesSelector = createSelector(
  [ (state) => state.gamesData.games, pitchesSelector ],
  (games, pitches) => games.map((game) => ({
    ...game,
    pitch: findById(pitches, game.pitchId)
  }))
);

export const previousGamesSelector = createSelector(
  [ gamesSelector ],
  (games) => games.filter(({ isGameOver }) => isGameOver)
);

export const upcomingGamesSelector = createSelector(
  [ gamesSelector ],
  (games) => games.filter(({ isGameOver }) => !isGameOver)
);
