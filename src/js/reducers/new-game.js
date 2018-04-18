import { handleActions } from 'utils';
import {
  NEW_GAME_CHANGE_DATE,
  NEW_GAME_CHANGE_DURATION,
  NEW_GAME_CHANGE_HOUR,
  NEW_GAME_CHANGE_MINUTE,
  NEW_GAME_CHANGE_PITCH_ID,
  NEW_GAME_RESET
} from 'constants/action-types';
import { NewGameModel } from 'models';

const initialState = new NewGameModel();

export default handleActions({
  [NEW_GAME_CHANGE_DATE]: (state, { payload: date }) => ({ ...state, date }),
  [NEW_GAME_CHANGE_DURATION]: (state, { payload: duration }) => ({ ...state, duration }),
  [NEW_GAME_CHANGE_HOUR]: (state, { payload: hour }) => ({ ...state, hour }),
  [NEW_GAME_CHANGE_MINUTE]: (state, { payload: minute }) => ({ ...state, minute }),
  [NEW_GAME_CHANGE_PITCH_ID]: (state, { payload: pitchId }) => ({ ...state, pitchId }),
  [NEW_GAME_RESET]: () => initialState
}, initialState);
