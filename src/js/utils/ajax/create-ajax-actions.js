import { AJAX } from 'constants/action-types';

export default (...params) => {
  if (typeof params[0] === 'string') {
    return createAjaxActionsSet(...params);
  }
  return createAjaxActionsMap(...params);
};

const createAjaxActionsMap = (successPayloadCreator, map) => Object.keys(map).reduce(
  (actions, name) => {
    const payloadCreator = actions[name];
    Object.assign(actions, createAjaxActionsSet(name, [ payloadCreator, successPayloadCreator ]));
    return actions;
  },
  {}
);

const createAjaxActionsSet = (name, [ payloadCreator, successPayloadCreator ]) => ({
  [name]: [
    payloadCreator,
    () => ({ ajax: AJAX })
  ],
  [`${name}Failure`]: [
    (error) => error,
    (error) => ({ ajax: AJAX.FAILURE, error })
  ],
  [`${name}Success`]: [
    successPayloadCreator,
    () => ({ ajax: AJAX.SUCCESS })
  ]
});
