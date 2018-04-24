import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions } from 'utils';
import { NewUserModel, UserModel } from 'models';

const initialState = new NewUserModel();

export const actions = createActions({
  newUser: {
    changeEmail: (email) => email,
    changeFirstName: (firstName) => firstName,
    changeLastName: (lastName) => lastName,
    changeRole: (role) => role,
    reset: undefined,
    ...createAjaxActions(UserModel.fromServerFormat, {
      submit: undefined
    })
  }
});

export default handleActions({
  [actions.newUser.changeEmail]: (state, { payload: email }) => ({ ...state, email }),
  [actions.newUser.changeFirstName]: (state, { payload: firstName }) => ({ ...state, firstName }),
  [actions.newUser.changeLastName]: (state, { payload: lastName }) => ({ ...state, lastName }),
  [actions.newUser.changeRole]: (state, { payload: role }) => ({ ...state, role }),
  [actions.newUser.reset]: () => initialState
}, initialState);