import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import UserModel from 'user/model';

const initialState = {
  currentUser: new UserModel()
};

export const actions = createActions({
  currentUser: {
    ...createAjaxActions(UserModel.fromServerFormat, {
      load: noop
    })
  }
}).currentUser;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.loadSuccess]: (state, { payload: currentUser }) => ({ ...initialState, currentUser })
});
