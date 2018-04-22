import { getObjectHash, handleActions } from 'utils';

const ajaxReducerInitialState = {
  isLoading: false,
  hasLoaded: false,
  lastUpdateTimestamp: undefined,
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
      [actionType]: onAjaxStart,
      [actionType.FAILURE]: onAjaxFailure,
      [actionType.SUCCESS]: onAjaxSuccess
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

const onAjaxStart = (state, action) => onUpdate({
  ...state,
  isLoading: true
}, action);

const onAjaxSuccess = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: true
});

const onAjaxFailure = (state, action) => ({
  ...onAjaxEnd(state, action),
  hasLoaded: false
});

const onAjaxEnd = (state, action) => onUpdate({
  ...state,
  isLoading: false,
  lastUpdateHash: getObjectHash(action.response)
}, action);

const onUpdate = (state, action) => ({
  ...state,
  lastUpdateTimestamp: action.timestamp
});

export default ajaxReducer;
