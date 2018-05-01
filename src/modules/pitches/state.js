import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import PitchModel from 'pitch/model';
import { actions as newPitchActions } from 'new-pitch/state';

const initialState = {
  pitches: []
};

export const actions = createActions({
  pitches: {
    ...createAjaxActions(PitchModel.arrayFromServerFormat, {
      load: noop
    })
  }
}).pitches;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [newPitchActions.submitSuccess]: (state, { payload: pitch }) => ({
    ...state,
    pitches: [
      ...state.pitches,
      pitch
    ]
  }),

  [actions.loadSuccess]: (state, { payload: pitches }) => ({ ...initialState, pitches })
});
