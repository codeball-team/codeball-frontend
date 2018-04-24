import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import { UserModel } from 'models';

const initialState = {
  user: new UserModel()
};

export const actions = createActions({
  user: {
    ...createAjaxActions(UserModel.fromServerFormat, {
      load: (userId) => userId
    })
  }
});

const ajaxActions = [
  actions.user.load,
  actions.user.loadFailure,
  actions.user.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.user.loadSuccess]: (state, { payload: user }) => ({ ...initialState, user })
});
