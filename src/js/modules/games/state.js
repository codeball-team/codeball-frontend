import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import { GameModel } from 'models';

const initialState = {
  games: []
};

export const actions = createActions({
  games: {
    ...createAjaxActions(GameModel.arrayFromServerFormat, {
      load: undefined
    })
  }
});

const ajaxActions = [
  actions.games.load,
  actions.games.loadFailure,
  actions.games.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.games.loadSuccess]: (state, { payload: games }) => ({
    ...initialState,
    games
  })
});
