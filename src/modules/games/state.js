import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import GameModel from 'game/model';

const initialState = {
  games: []
};

export const actions = createActions({
  games: {
    ...createAjaxActions(GameModel.arrayFromServerFormat, {
      load: noop
    })
  }
}).games;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.loadSuccess]: (state, { payload: games }) => ({ ...initialState, games })
});
