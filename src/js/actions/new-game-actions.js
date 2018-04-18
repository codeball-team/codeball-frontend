import { createAction } from 'redux-actions';
import request from 'superagent';
import { ajax, safeGet } from 'utils';
import { push } from 'react-router-redux';
import {
  NEW_GAME_CHANGE_DATE,
  NEW_GAME_CHANGE_DURATION,
  NEW_GAME_CHANGE_HOUR,
  NEW_GAME_CHANGE_MINUTE,
  NEW_GAME_CHANGE_PITCH_ID,
  NEW_GAME_RESET,
  NEW_GAME_SUBMIT
} from 'constants/action-types';
import { gamesUrl } from 'constants';
import { NewGameModel } from 'models';

export const newGameChangeDate = createAction(NEW_GAME_CHANGE_DATE, (date) => date);
export const newGameChangeDuration = createAction(NEW_GAME_CHANGE_DURATION, (duration) => duration);
export const newGameChangeHour = createAction(NEW_GAME_CHANGE_HOUR, (hour) => hour);
export const newGameChangeMinute = createAction(NEW_GAME_CHANGE_MINUTE, (minute) => minute);
export const newGameChangePitchId = createAction(NEW_GAME_CHANGE_PITCH_ID, (pitchId) => pitchId);
export const newGameReset = createAction(NEW_GAME_RESET);

export function newGameSubmit(newGame) {
  const payload = NewGameModel.toServerFormat(newGame);
  return ajax((dispatch) => ({
    actionType: NEW_GAME_SUBMIT,
    request: request('POST', gamesUrl())
      .send(JSON.stringify(payload)),
    json: true,
    debounce: true,
    successCallback: (response) => {
      const gameId = safeGet(response, ['body', 'id']);
      dispatch(push(`/games/upcoming/${gameId}`));
    }
  }));
}
