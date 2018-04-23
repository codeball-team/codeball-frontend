import { actions } from 'ajax/state';
// import { ErrorModel } from 'models';

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
    () => ({ ajax: actions.ajax.start })
  ],
  [`${name}Failure`]: [
    (error) => error, // TODO: use ErrorModel.fromServerFormat
    (error) => ({ ajax: actions.ajax.failure, error })
  ],
  [`${name}Success`]: [
    successPayloadCreator,
    () => ({ ajax: actions.ajax.success })
  ]
});
