import { createAction } from 'redux-actions';
import request from 'superagent';
import { ajax } from 'utils';
import {
  GAMES_LOAD,
} from 'constants/action-types';
import {
  gamesUrl
} from 'constants';

export function gamesLoad() {
  return ajax(() => ({
    actionType: GAMES_LOAD,
    request: request('GET', gamesUrl()),
    json: true,
    throttle: true
  }));
}
