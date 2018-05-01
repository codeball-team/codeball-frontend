import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import UserModel from 'user/model';

const initialState = {
  user: new UserModel()
};

export const actions = createActions({
  user: {
    ...createAjaxActions(UserModel.fromServerFormat, {
      load: (userId) => userId
    })
  }
}).user;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.loadSuccess]: (state, { payload: user }) => ({ ...initialState, user })
});
