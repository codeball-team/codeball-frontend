import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import GameModel from 'game/model';
import NewGameModel from 'new-game/model';

const initialState = new NewGameModel();

export const actions = createActions({
  newGame: {
    changeDate: (date) => date,
    changeDuration: (duration) => duration,
    changeHour: (hour) => hour,
    changeMinute: (minute) => minute,
    changePitchId: (pitchId) => pitchId,
    reset: noop,
    ...createAjaxActions(GameModel.fromServerFormat, {
      submit: noop
    })
  }
}).newGame;

export default handleActions({
  [actions.changeDate]: (state, { payload: date }) => ({ ...state, date }),
  [actions.changeDuration]: (state, { payload: duration }) => ({ ...state, duration }),
  [actions.changeHour]: (state, { payload: hour }) => ({ ...state, hour }),
  [actions.changeMinute]: (state, { payload: minute }) => ({ ...state, minute }),
  [actions.changePitchId]: (state, { payload: pitchId }) => ({ ...state, pitchId }),
  [actions.reset]: () => initialState
}, initialState);
