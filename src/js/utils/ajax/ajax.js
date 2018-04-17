import { _, now, safeGet } from 'utils';
import { AJAX, AJAX_ABORT } from 'constants/action-types';
import requestManager from './request-manager';

const manager = requestManager();
const requestOptionsHandlers = {
  json: (request) => request.set('Content-Type', 'application/json')
};
const requestManagerHandlers = {
  debounce: (request, startAction) => manager.debounce(startAction, request),
  throttle: (request, startAction) => manager.throttle(startAction, request)
};

export default function ajax(getParams) {
  return (dispatch) => {
    const options = {
      failureCallback: _.noop,
      successCallback: _.noop,
      ...getParams(dispatch)
    };
    const {
      actionType,
      actionsData = {},
      request,
      failureCallback,
      successCallback
    } = options;
    const timestamp = now();

    applyRequestOptions(requestOptionsHandlers, request, options);
    applyRequestEnhancers(requestManagerHandlers, request, options).then(() => {
      request.end((error, response = {}) => {
        manager.forget(actionType);
        const body = nullToUndefined(safeGet(response, ['body']));

        if(error || !response.ok) {
          const errorResponse = createErrorResponse(error, body);
          dispatch({
            type: actionType.FAILURE,
            ...actionsData,
            response: errorResponse,
            timestamp
          });
          dispatch({
            type: AJAX.FAILURE,
            response: errorResponse
          });
          failureCallback(response);
        } else {
          dispatch({
            type: actionType.SUCCESS,
            ...actionsData,
            response: body,
            timestamp
          });
          dispatch({ type: AJAX.SUCCESS });
          successCallback(response);
        }
      });

      request.xhr.onabort = () => {
        dispatch({ type: AJAX_ABORT });
        dispatch({ type: actionType.FAILURE, timestamp });
      };

      dispatch({
        type: actionType,
        ...actionsData
      });
      dispatch({ type: AJAX });
    }, () => {
      manager.forget(actionType);
    });

    return request;
  };
}

const applyRequestOptions = (enhancers, request, options) => _(options).reduce(
  (enhancedRequest, isEnabled, key) => {
    if(isEnabled && enhancers.hasOwnProperty(key)) {
      return enhancers[key](enhancedRequest, options);
    }

    return enhancedRequest;
  },
  request
);

const applyRequestEnhancers = (enhancers, request, options) => Promise.all(
  _(options).reduce(
    (enhancements, isEnabled, key) => {
      if(isEnabled && enhancers.hasOwnProperty(key)) {
        return [
          ...enhancements,
          enhancers[key](request, options)
        ];
      }

      return enhancements;
    },
    []
  )
);

const createErrorResponse = (error, body) => {
  const [title, message] = safeGet(error, ['message'], '').split('\n');
  const errorResponse = body || { error: title, message };
  return errorResponse;
};

const nullToUndefined = (value) => (value === null ? undefined : value);
