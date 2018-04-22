const globalFetch = window.fetch;

export const fetch = (url, options) => globalFetch(url, getOptions(options))
  .catch((error) => {
    const [ title, message ] = (error && error.message || '').split('\n');
    throw { error: title, message };
  })
  .then((response) => {
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.response = response;
      throw response.body;
    }
    return response;
  });

export const fetchJson = (...params) => globalFetch(...params)
  .then((response) => response.json());

const getOptions = (options = {}) => ({
  ...options,
  // credentials: 'include',
  headers: new Headers({
    ...options.headers,
    'Content-Type': 'application/json'
  })
});

const createErrorResponse = (error, body) => {
  const [ title, message ] = safeGet(error, [ 'message' ], '').split('\n');
  const errorResponse = body || { error: title, message };
  return errorResponse;
};
