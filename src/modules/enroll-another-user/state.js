import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import GameModel from 'game/model';
import EnrollAnotherUserModel from 'enroll-another-user/model';

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
}).enrollAnotherUser;

export default handleActions({
  [actions.edit]: (state) => ({ ...state, isEditing: true }),
  [actions.changeUserId]: (state, { payload: userId }) => ({ ...state, userId }),
  [actions.cancel]: () => initialState,
  [actions.reset]: () => initialState
}, initialState);
