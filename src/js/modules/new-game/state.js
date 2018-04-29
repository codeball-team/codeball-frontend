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
});

export default handleActions({
  [actions.newGame.changeDate]: (state, { payload: date }) => ({ ...state, date }),
  [actions.newGame.changeDuration]: (state, { payload: duration }) => ({ ...state, duration }),
  [actions.newGame.changeHour]: (state, { payload: hour }) => ({ ...state, hour }),
  [actions.newGame.changeMinute]: (state, { payload: minute }) => ({ ...state, minute }),
  [actions.newGame.changePitchId]: (state, { payload: pitchId }) => ({ ...state, pitchId }),
  [actions.newGame.reset]: () => initialState
}, initialState);
