import { combineActions, createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, parseNumber } from 'utils';
import { GameModel } from 'models';
import { actions as newGameActions } from 'new-game/state';

const initialState = {
  isEditing: false,
  game: new GameModel(),
  editedGame: {}
};

export const actions = createActions({
  game: {
    ...createAjaxActions(GameModel.fromServerFormat, {
      changeEnrollmentStatus: (gameId, enrollmentStatus) => ({ enrollmentStatus, gameId }),
      closeEnrollment: (gameId) => (gameId),
      drawTeams: (gameId) => (gameId),
      end: (gameId) => (gameId),
      enrollAnotherUser: (gameId, userId) => ({ gameId, userId }),
      load: (gameId) => gameId,
      loadAll: undefined,
      saveScore: undefined,
    }),
    edit: undefined,
    editCancel: undefined,
    editScoreA: parseNumber,
    editScoreB: parseNumber,
    enrollAnotherUserCancel: undefined,
    enrollAnotherUserChangeUserId: undefined,
    enrollAnotherUserEdit: undefined,
    enrollAnotherUserReset: undefined
  }
});

const ajaxActions = [
  actions.game.load,
  actions.game.loadFailure,
  actions.game.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [combineActions(
    actions.game.changeEnrollmentStatusSuccess,
    actions.game.closeEnrollmentSuccess,
    actions.game.drawTeamsSuccess,
    actions.game.endSuccess,
    actions.game.enrollAnotherUserSuccess,
    actions.game.loadSuccess,
    actions.game.saveScoreSuccess,
    newGameActions.newGame.submit,
    newGameActions.newGame.submitSuccess
  )]: (state, { payload: game }) => ({ ...initialState, game }),

  [combineActions(
    actions.game.saveScoreFailure,
    newGameActions.newGame.submit,
    newGameActions.newGame.submitFailure
  )]: (state) => ({ ...state, isEditing: true }),

  [actions.game.edit]: (state) => ({
    ...state,
    editedGame: {
      ...state.game
    },
    isEditing: true
  }),

  [actions.game.editCancel]: (state) => ({
    ...state,
    editedGame: initialState.editedGame,
    isEditing: false
  }),

  [actions.game.editScoreA]: (state, { payload: teamAScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamAScore
    }
  }),

  [actions.game.editScoreB]: (state, { payload: teamBScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamBScore
    }
  })
});
