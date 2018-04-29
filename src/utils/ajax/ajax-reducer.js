import { handleActions } from 'redux-actions';
import { getObjectHash } from 'utils';

const ajaxReducerInitialState = {
  isLoading: false,
  hasLoaded: false,
  lastUpdateHash: undefined
};

const ajaxReducer = (initialState, actionTypes, handlers) => {
  const [ start, failure, success ] = actionTypes;
  const ajaxHandlers = {
    [start]: onAjaxStart,
    [failure]: onAjaxFailure,
    [success]: onAjaxSuccess
  };
  const reducerInitialState = {
    ...ajaxReducerInitialState,
    ...initialState
  };
  const originalReducer = handleActions(handlers, reducerInitialState);

  return (state = reducerInitialState, action) => {
    const { lastUpdateHash } = state;
    const { type } = action;
    const ajaxHandler = ajaxHandlers[type];

    if (ajaxHandler) {
      const newState = ajaxHandler(state, action);
      const hasHashChanged = lastUpdateHash !== newState.lastUpdateHash;

      if (hasHashChanged) {
        return {
          ...newState,
          ...originalReducer(newState, action)
        };
      }

      return newState;
    }

    return {
      ...state,
      ...originalReducer(state, action)
    };
  };
};

const onAjaxStart = (state) => ({
  ...state,
  isLoading: true
});

const onAjaxFailure = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: false
});

const onAjaxSuccess = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: true
});

const onAjaxEnd = (state, { payload }) => ({
  ...state,
  isLoading: false,
  lastUpdateHash: getObjectHash(payload)
});

export default ajaxReducer;
