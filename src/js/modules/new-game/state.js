import { createActions, handleActions } from 'redux-actions';
import { GameModel } from 'models';

const initialState = {
  isEditing: false,
  game: new GameModel(),
  editedGame: {}
};

export const actions = createActions({
  newGame: {
    changeDate: (date) => date,
    changeDuration: (duration) => duration,
    changeHour: (hour) => hour,
    changeMinute: (minute) => minute,
    changePitchId: (pitchId) => pitchId,
    reset: undefined,
    submit: (newGame) => newGame,
    submitFailure: (error) => error,
    submitSuccess: GameModel.fromServerFormat
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