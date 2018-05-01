import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import PitchModel from 'pitch/model';

const initialState = {
  pitch: new PitchModel()
};

export const actions = createActions({
  pitch: {
    ...createAjaxActions(PitchModel.fromServerFormat, {
      load: (pitchId) => pitchId
    })
  }
}).pitch;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.loadSuccess]: (state, { payload: pitch }) => ({ ...initialState, pitch })
});
