import request from 'superagent';
import { ajax } from 'utils';
import {
  CURRENT_USER_LOAD, CURRENT_USER_LOAD_FAILURE, CURRENT_USER_LOAD_SUCCESS
} from 'constants/ActionTypes';
import { currentUserUrl } from 'constants/Api';

export function currentUserLoad() {
  return ajax(() => ({
    request: request('GET', currentUserUrl()),
    startAction: CURRENT_USER_LOAD,
    successAction: CURRENT_USER_LOAD_SUCCESS,
    failureAction: CURRENT_USER_LOAD_FAILURE
  }));
}