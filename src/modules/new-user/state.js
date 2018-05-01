import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import NewUserModel from 'new-user/model';
import UserModel from 'user/model';

const initialState = new NewUserModel();

export const actions = createActions({
  newUser: {
    changeEmail: (email) => email,
    changeFirstName: (firstName) => firstName,
    changeLastName: (lastName) => lastName,
    changeRole: (role) => role,
    reset: noop,
    ...createAjaxActions(UserModel.fromServerFormat, {
      submit: noop
    })
  }
}).newUser;

export default handleActions({
  [actions.changeEmail]: (state, { payload: email }) => ({ ...state, email }),
  [actions.changeFirstName]: (state, { payload: firstName }) => ({ ...state, firstName }),
  [actions.changeLastName]: (state, { payload: lastName }) => ({ ...state, lastName }),
  [actions.changeRole]: (state, { payload: role }) => ({ ...state, role }),
  [actions.reset]: () => initialState
}, initialState);
