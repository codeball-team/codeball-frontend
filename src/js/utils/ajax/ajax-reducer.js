import { getObjectHash, handleActions } from 'utils';

const ajaxReducerInitialState = {
  isLoading: false,
  hasLoaded: false,
  lastUpdateHash: undefined
};

const ajaxReducer = (initialState, actionType, handlers) => {
  let ajaxHandlers;

  if (Array.isArray(actionType)) {
    const [ start, failure, success ] = actionType;
    ajaxHandlers = {
      [start]: onAjaxStart,
      [failure]: onAjaxFailure,
      [success]: onAjaxSuccess
    };
  } else {
    ajaxHandlers = {
      [actionType]: onAjaxStartOld,
      [actionType.FAILURE]: onAjaxFailureOld,
      [actionType.SUCCESS]: onAjaxSuccessOld
    };
  }

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

const onAjaxStart = (state, action) => ({
  ...state,
  isLoading: true
});

const onAjaxSuccess = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: true
});

const onAjaxFailure = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: false
});

const onAjaxEnd = (state, { payload }) => ({
  ...state,
  isLoading: false,
  lastUpdateHash: getObjectHash(payload)
});

const onAjaxStartOld = (state, action) => ({
  ...state,
  isLoading: true
});

const onAjaxSuccessOld = (state, action) => ({
  ...onAjaxEndOld(state, action),
  hasLoaded: true
});

const onAjaxFailureOld = (state, action) => ({
  ...onAjaxEndOld(state, action),
  hasLoaded: false
});

const onAjaxEndOld = (state, action) => ({
  ...state,
  isLoading: false,
  lastUpdateHash: getObjectHash(action.response)
});

export default ajaxReducer;
