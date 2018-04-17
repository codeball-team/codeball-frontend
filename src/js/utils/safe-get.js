import { _ } from 'utils';

export default (object, path = [], defaultValue = undefined) => {
  const result = baseGet(object, path);
  return result === undefined ? defaultValue : result;
};

const baseGet = (object, path) => {
  let currentObject = object;
  let index = 0;
  const { length } = path;

  while (index < length && canGetDeeper(currentObject, path[index])) {
    currentObject = currentObject[path[index++]];
  }

  return (index && index === length) ? currentObject : undefined;
};

const canGetDeeper = (object, attribute) => _(object).has(attribute);
