import { handleActions } from 'utils';
import {
  NEW_PITCH_CHANGE_ADDRESS,
  NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS,
  NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS,
  NEW_PITCH_CHANGE_NAME,
  NEW_PITCH_CHANGE_TYPE,
  NEW_PITCH_RESET
} from 'constants/action-types';
import { NewPitchModel } from 'models';

const initialState = new NewPitchModel();

export default handleActions({
  [NEW_PITCH_CHANGE_ADDRESS]: (state, { payload: address }) => ({ ...state, address }),
  [NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS]: (state, { payload: maxNumberOfPlayers }) => ({ ...state, maxNumberOfPlayers }),
  [NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS]: (state, { payload: minNumberOfPlayers }) => ({ ...state, minNumberOfPlayers }),
  [NEW_PITCH_CHANGE_NAME]: (state, { payload: name }) => ({ ...state, name }),
  [NEW_PITCH_CHANGE_TYPE]: (state, { payload: pitchType }) => ({ ...state, type: pitchType }),
  [NEW_PITCH_RESET]: () => initialState
}, initialState);
