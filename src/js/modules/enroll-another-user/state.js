import { combineActions, createActions, handleActions } from 'redux-actions';
import { createAjaxActions } from 'utils';
import { EnrollAnotherUserModel, GameModel } from 'models';

const initialState = {
  ...new EnrollAnotherUserModel(),
  isEditing: false
};

export const actions = createActions({
  enrollAnotherUser: {
    cancel: undefined,
    changeUserId: (userId) => userId,
    edit: undefined,
    reset: undefined,
    ...createAjaxActions(GameModel.fromServerFormat, {
      submit: undefined
    })
  }
});

export default handleActions({
  [actions.enrollAnotherUser.edit]: (state) => ({ ...state, isEditing: true }),
  [actions.enrollAnotherUser.changeUserId]: (state, { payload: userId }) => ({ ...state, userId }),
  [actions.enrollAnotherUser.cancel]: () => initialState,
  [actions.enrollAnotherUser.reset]: () => initialState
}, initialState);
