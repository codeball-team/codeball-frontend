export default (collection, idToFind, defaultValue = {}) => {
  const result = collection.find(({ id }) => id === idToFind);
  return result || defaultValue;
};
