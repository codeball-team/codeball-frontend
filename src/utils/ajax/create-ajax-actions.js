import { actions } from 'ajax/state';
import ErrorModel from 'ajax/model';

export default (...params) => {
  if (typeof params[0] === 'string') {
    return createAjaxActionsSet(...params);
  }
  return createAjaxActionsMap(...params);
};

const createAjaxActionsMap = (successPayloadCreator, map) => Object.keys(map).reduce(
  (actionsMap, name) => {
    const payloadCreator = map[name];
    Object.assign(actionsMap, createAjaxActionsSet(name, [ payloadCreator, successPayloadCreator ]));
    return actionsMap;
  },
  {}
);

const createAjaxActionsSet = (name, [ payloadCreator, successPayloadCreator ]) => ({
  [name]: [
    payloadCreator,
    () => ({
      ajax: actions.start
    })
  ],
  [`${name}Failure`]: [
    ErrorModel.fromServerFormat,
    (response) => ({
      ajax: actions.failure,
      response
    })
  ],
  [`${name}Success`]: [
    successPayloadCreator,
    (response) => ({
      ajax: actions.success,
      response
    })
  ]
});


