import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop } from 'utils';
import UserModel from 'user/model';
import { actions as currentUserActions } from 'current-user/state';
import { actions as newUserActions } from 'new-user/state';

const initialState = {
  users: []
};

export const actions = createActions({
  users: {
    ...createAjaxActions(UserModel.arrayFromServerFormat, {
      load: noop
    })
  }
}).users;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [currentUserActions.loadSuccess]: (state, { payload: user }) => {
    const { users } = state;
    const userIndex = users.findIndex(({ id }) => id === user.id);

    return {
      ...state,
      users: [
        ...users.slice(0, userIndex),
        user,
        ...users.slice(userIndex + 1)
      ]
    };
  },

  [newUserActions.submitSuccess]: (state, { payload: user }) => ({
    ...state,
    users: [
      ...state.users,
      user
    ]
  }),

  [actions.loadSuccess]: (state, { payload: users }) => ({ ...initialState, users })
});
