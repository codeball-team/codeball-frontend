import { combineActions, createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import { EnrollAnotherUserModel, GameModel } from 'models';

const initialState = {
  ...new EnrollAnotherUserModel(),
  isEditing: false
};

export const actions = createActions({
  enrollAnotherUser: {
    cancel: noop,
    changeUserId: (userId) => userId,
    edit: noop,
    reset: noop,
    ...createAjaxActions(GameModel.fromServerFormat, {
      submit: noop
    })
  }
});

export default handleActions({
  [actions.enrollAnotherUser.edit]: (state) => ({ ...state, isEditing: true }),
  [actions.enrollAnotherUser.changeUserId]: (state, { payload: userId }) => ({ ...state, userId }),
  [actions.enrollAnotherUser.cancel]: () => initialState,
  [actions.enrollAnotherUser.reset]: () => initialState
}, initialState);
