import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import { PitchModel, NewPitchModel } from 'models';

const initialState = new NewPitchModel();

export const actions = createActions({
  newPitch: {
    changeAddress: (address) => address,
    changeMaxNumberOfPlayers: (maxNumberOfPlayers) => maxNumberOfPlayers,
    changeMinNumberOfPlayers: (minNumberOfPlayers) => minNumberOfPlayers,
    changeName: (name) => name,
    changeType: (type) => type,
    reset: noop,
    ...createAjaxActions(PitchModel.fromServerFormat, {
      submit: noop
    })
  }
});

export default handleActions({
  [actions.newPitch.changeAddress]: (state, { payload: address }) => ({ ...state, address }),
  [actions.newPitch.changeMaxNumberOfPlayers]: (state, { payload: maxNumberOfPlayers }) => ({ ...state, maxNumberOfPlayers }),
  [actions.newPitch.changeMinNumberOfPlayers]: (state, { payload: minNumberOfPlayers }) => ({ ...state, minNumberOfPlayers }),
  [actions.newPitch.changeName]: (state, { payload: name }) => ({ ...state, name }),
  [actions.newPitch.changeType]: (state, { payload: type }) => ({ ...state, type }),
  [actions.newPitch.reset]: () => initialState
}, initialState);
