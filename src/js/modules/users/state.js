import { createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions } from 'utils';
import { UserModel } from 'models';
import { actions as currentUserActions } from 'current-user/state';
import { actions as newUserActions } from 'new-user/state';

const initialState = {
  users: []
};

export const actions = createActions({
  users: {
    ...createAjaxActions(UserModel.arrayFromServerFormat, {
      load: (userId) => userId
    })
  }
});

const ajaxActions = [
  actions.users.load,
  actions.users.loadFailure,
  actions.users.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [currentUserActions.currentUser.loadSuccess]: (state, { payload: user }) => {
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

  [newUserActions.newUser.submitSuccess]: (state, { payload: user }) => ({
    ...state,
    users: [
      ...state.users,
      user
    ]
  }),

  [actions.users.loadSuccess]: (state, { payload: users }) => ({ ...initialState, users })
});
