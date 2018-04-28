import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import { PitchModel } from 'models';
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
});

const ajaxActions = [
  actions.pitches.load,
  actions.pitches.loadFailure,
  actions.pitches.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [newPitchActions.newPitch.submitSuccess]: (state, { payload: pitch }) => ({
    ...state,
    pitches: [
      ...state.pitches,
      pitch
    ]
  }),

  [actions.pitches.loadSuccess]: (state, { payload: pitches }) => ({ ...initialState, pitches })
});
