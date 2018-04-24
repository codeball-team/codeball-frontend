import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import { GameModel } from 'models';

const initialState = {
  games: []
};

export const actions = createActions({
  games: {
    ...createAjaxActions(GameModel.arrayFromServerFormat, {
      load: noop
    })
  }
});

const ajaxActions = [
  actions.games.load,
  actions.games.loadFailure,
  actions.games.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.games.loadSuccess]: (state, { payload: games }) => ({ ...initialState, games })
});
