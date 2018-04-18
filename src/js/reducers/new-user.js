import { handleActions } from 'utils';
import {
  NEW_USER_CHANGE_EMAIL,
  NEW_USER_CHANGE_FIRST_NAME,
  NEW_USER_CHANGE_LAST_NAME,
  NEW_USER_CHANGE_ROLE,
  NEW_USER_RESET
} from 'constants/action-types';
import { NewUserModel } from 'models';

const initialState = new NewUserModel();

export default handleActions({
  [NEW_USER_CHANGE_EMAIL]: (state, { payload: email }) => ({ ...state, email }),
  [NEW_USER_CHANGE_FIRST_NAME]: (state, { payload: firstName }) => ({ ...state, firstName }),
  [NEW_USER_CHANGE_LAST_NAME]: (state, { payload: lastName }) => ({ ...state, lastName }),
  [NEW_USER_CHANGE_ROLE]: (state, { payload: role }) => ({ ...state, role }),
  [NEW_USER_RESET]: () => initialState
}, initialState);
