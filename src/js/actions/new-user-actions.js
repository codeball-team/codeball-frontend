import { createAction } from 'redux-actions';
import request from 'superagent';
import { ajax, safeGet } from 'utils';
import { push } from 'react-router-redux';
import {
  NEW_USER_CHANGE_EMAIL,
  NEW_USER_CHANGE_FIRST_NAME,
  NEW_USER_CHANGE_LAST_NAME,
  NEW_USER_CHANGE_ROLE,
  NEW_USER_RESET,
  NEW_USER_SUBMIT
} from 'constants/action-types';
import { usersUrl } from 'constants';
import { NewUserModel } from 'models';

export const newUserChangeEmail = createAction(NEW_USER_CHANGE_EMAIL, (email) => email);
export const newUserChangeFirstName = createAction(NEW_USER_CHANGE_FIRST_NAME, (firstName) => firstName);
export const newUserChangeLastName = createAction(NEW_USER_CHANGE_LAST_NAME, (lastName) => lastName);
export const newUserChangeRole = createAction(NEW_USER_CHANGE_ROLE, (role) => role);
export const newUserReset = createAction(NEW_USER_RESET);

export function newUserSubmit(newUser) {
  const payload = NewUserModel.toServerFormat(newUser);
  return ajax((dispatch) => ({
    actionType: NEW_USER_SUBMIT,
    request: request('POST', usersUrl())
      .send(JSON.stringify(payload)),
    json: true,
    debounce: true,
    successCallback: (response) => {
      const userId = safeGet(response, ['body', 'id']);
      dispatch(push(`/players/${userId}`));
    }
  }));
}
