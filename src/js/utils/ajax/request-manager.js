const requestManager = () => {
  const requests = new Map();

  const add = (key, request) => requests.set(key, request);
  const remove = (key) => requests.delete(key);
  const abortIfPending = (key) => {
    if(isPending(key)) {
      const request = requests.get(key);
      request.abort();
      remove(key);
    }
  };
  const isPending = (key) => requests.has(key);

  return {
    debounce(key, request) {
      return new Promise((resolve) => {
        abortIfPending(key);
        add(key, request);
        resolve();
      });
    },

    forget(key) {
      remove(key);
    },

    throttle(key, request) {
      return new Promise((resolve, reject) => {
        if(!isPending(key)) {
          add(key, request);
          resolve();
        }
        reject();
      });
    }
  };
};

export default requestManager;
