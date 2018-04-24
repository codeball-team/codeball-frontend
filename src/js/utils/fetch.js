const globalFetch = window.fetch;

export const fetch = (url, options) => globalFetch(url, getOptions(options))
  .catch((error) => {
    const [ title, message ] = (error && error.message || '').split('\n');
    throw { error: title, message };
  })
  .then((response) => {
    if (!response.ok) {
      return response.json().then((json) => {
        if (json) {
          throw json;
        }

        throw {
          error: `HTTP ${response.status}: ${response.statusText || 'Unknown error'}`
        };
      });
    }
    return response;
  });

export const fetchJson = (...params) => fetch(...params)
  .then((response) => response.json());

const getOptions = (options = {}) => ({
  ...options,
  // credentials: 'include',
  headers: new Headers({
    ...options.headers,
    'Content-Type': 'application/json'
  })
});
