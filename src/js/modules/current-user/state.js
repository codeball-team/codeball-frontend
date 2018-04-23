import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import { UserModel } from 'models';

const initialState = {
  currentUser: new UserModel()
};

export const actions = createActions({
  currentUser: {
    ...createAjaxActions(UserModel.fromServerFormat, {
      load: undefined
    })
  }
});

const ajaxActions = [
  actions.currentUser.load,
  actions.currentUser.loadFailure,
  actions.currentUser.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.currentUser.loadSuccess]: (state, { payload: currentUser }) => ({
    ...initialState,
    currentUser
  })
});
