import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import { PitchModel } from 'models';

const initialState = {
  pitch: new PitchModel()
};

export const actions = createActions({
  pitch: {
    ...createAjaxActions(PitchModel.fromServerFormat, {
      load: (pitchId) => pitchId
    })
  }
});

const ajaxActions = [
  actions.pitch.load,
  actions.pitch.loadFailure,
  actions.pitch.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [actions.pitch.loadSuccess]: (state, { payload: pitch }) => ({ ...initialState, pitch })
});
