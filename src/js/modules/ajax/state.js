import { createActions, handleActions } from 'redux-actions';
import { _ } from 'utils';
import { ErrorModel } from 'models';

const initialState = {
  numberOfPendingRequests: 0,
  errors: []
};

export const actions = createActions({
  ajax: {
    acknowledge: (errorIndex) => errorIndex,
    failure: ErrorModel.fromServerFormat,
    start: undefined,
    success: undefined
  }
});

export default handleActions({
  [actions.ajax.acknowledge]: (state, { payload: errorIndex }) => ({
    ...state,
    errors: [
      ...state.errors.slice(0, errorIndex),
      ...state.errors.slice(errorIndex + 1)
    ]
  }),

  [actions.ajax.failure]: (state, { payload: error }) => ({
    ...state,
    errors: _.uniq([ ...state.errors, error ], JSON.stringify),
    numberOfPendingRequests: state.numberOfPendingRequests - 1
  }),

  [actions.ajax.start]: (state) => ({
    ...state,
    numberOfPendingRequests: state.numberOfPendingRequests + 1
  }),

  [actions.ajax.success]: (state) => ({
    ...state,
    numberOfPendingRequests: state.numberOfPendingRequests - 1
  })
}, initialState);
