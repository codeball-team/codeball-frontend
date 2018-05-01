import { createActions, handleActions } from 'redux-actions';
import { createAjaxActions, noop } from 'utils';
import NewPitchModel from 'new-pitch/model';
import PitchModel from 'pitch/model';

const initialState = new NewPitchModel();

export const actions = createActions({
  newPitch: {
    changeAddress: (address) => address,
    changeMaxCapacity: (maxCapacity) => maxCapacity,
    changeMinCapacity: (minCapacity) => minCapacity,
    changeName: (name) => name,
    changeType: (type) => type,
    reset: noop,
    ...createAjaxActions(PitchModel.fromServerFormat, {
      submit: noop
    })
  }
}).newPitch;

export default handleActions({
  [actions.changeAddress]: (state, { payload: address }) => ({ ...state, address }),
  [actions.changeMaxCapacity]: (state, { payload: maxCapacity }) => ({ ...state, maxCapacity }),
  [actions.changeMinCapacity]: (state, { payload: minCapacity }) => ({ ...state, minCapacity }),
  [actions.changeName]: (state, { payload: name }) => ({ ...state, name }),
  [actions.changeType]: (state, { payload: type }) => ({ ...state, type }),
  [actions.reset]: () => initialState
}, initialState);
