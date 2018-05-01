import { uniqBy } from 'lodash-es';
import { createActions, handleActions } from 'redux-actions';
import ErrorModel from 'ajax/model';

const normalizeType = (type) => type.replace('Success', '').replace('Failure', '');

const initialState = {
  errors: [],
  pending: []
};

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
    errors: uniqBy([ ...state.errors, error ], JSON.stringify),
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
