import { createAction } from 'redux-actions';
import request from 'superagent';
import { ajax, safeGet } from 'utils';
import { push } from 'react-router-redux';
import {
  NEW_PITCH_CHANGE_ADDRESS,
  NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS,
  NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS,
  NEW_PITCH_CHANGE_NAME,
  NEW_PITCH_CHANGE_TYPE,
  NEW_PITCH_RESET,
  NEW_PITCH_SUBMIT
} from 'constants/action-types';
import { pitchesUrl } from 'constants';
import { NewPitchModel } from 'models';

export const newPitchChangeAddress = createAction(NEW_PITCH_CHANGE_ADDRESS, (address) => address);
export const newPitchChangeMaxNumberOfPlayers = createAction(NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS, (maxNumberOfPlayers) => maxNumberOfPlayers);
export const newPitchChangeMinNumberOfPlayers = createAction(NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS, (minNumberOfPlayers) => minNumberOfPlayers);
export const newPitchChangeName = createAction(NEW_PITCH_CHANGE_NAME, (name) => name);
export const newPitchChangeType = createAction(NEW_PITCH_CHANGE_TYPE, (pitchType) => pitchType);
export const newPitchReset = createAction(NEW_PITCH_RESET);

export function newPitchSubmit(newPitch) {
  const payload = NewPitchModel.toServerFormat(newPitch);
  return ajax((dispatch) => ({
    actionType: NEW_PITCH_SUBMIT,
    request: request('POST', pitchesUrl())
      .send(JSON.stringify(payload)),
    json: true,
    debounce: true,
    successCallback: (response) => {
      const pitchId = safeGet(response, ['body', 'id']);
      dispatch(push(`/pitches/${pitchId}`));
    }
  }));
}
