import _ from 'underscore';
import { createActions, handleActions } from 'redux-actions';
import ErrorModel from 'ajax/model';

const initialState = {
  errors: [],
  pending: []
};

const normalizeType = (type) => type
  .replace('Success', '')
  .replace('Failure', '');

export const actions = createActions({
  ajax: {
    acknowledge: (errorIndex) => errorIndex,
    failure: (type, response) => ({
      error: ErrorModel.fromServerFormat(response),
      type: normalizeType(type)
    }),
    start: normalizeType,
    success: normalizeType
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

  [actions.ajax.failure]: (state, { payload: { error, type } }) => ({
    ...state,
    errors: _.uniq([ ...state.errors, error ], JSON.stringify),
    pending: state.pending.filter((pending) => pending !== type)
  }),

  [actions.ajax.start]: (state, { payload: type }) => ({
    ...state,
    pending: [ ...state.pending, type ]
  }),

  [actions.ajax.success]: (state, { payload: type }) => ({
    ...state,
    pending: state.pending.filter((pending) => pending !== type)
  })
}, initialState);
