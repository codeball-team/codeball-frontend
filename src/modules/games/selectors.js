import { createSelector } from 'reselect';
import { findById } from 'utils';
import { selectIsLoading as selectCurrentUserIsLoading } from 'current-user/selectors';
import { selectIsLoading as selectPitchesIsLoading, selectPitches } from 'pitches/selectors';
import { selectIsLoading as selectUsersIsLoading } from 'users/selectors';

export const selectRoot = (state) => state.gamesData;
export const selectIsLoading = createSelector(selectRoot, ({ isLoading }) => isLoading);
export const selectDataIsLoading = createSelector(
  [ selectCurrentUserIsLoading, selectIsLoading, selectPitchesIsLoading, selectUsersIsLoading ],
  (...isLoading) => isLoading.some(Boolean)
);
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
export const selectPreviousGamesTitle = createSelector(
  [ selectPreviousGames ],
  (games) => `Previous games (${games.length})`
);
export const selectUpcomingGames = createSelector(
  selectGames,
  (games) => games.filter(({ isGameOver }) => !isGameOver)
);
export const selectUpcomingGamesTitle = createSelector(
  [ selectUpcomingGames ],
  (games) => `Upcoming games (${games.length})`
);
