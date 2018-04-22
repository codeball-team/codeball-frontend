import { combineActions, createActions } from 'redux-actions';
import { ajaxReducer, parseNumber } from 'utils';
import { GameModel } from 'models';
import { actions as newGameActions } from 'new-game/state';

const initialState = {
  isEditing: false,
  game: new GameModel(),
  editedGame: {}
};

export const actions = createActions({
  game: {
    changeEnrollmentStatus: (gameId, enrollmentStatus) => ({ enrollmentStatus, gameId }),
    changeEnrollmentStatusFailure: (error) => (error),
    changeEnrollmentStatusSuccess: GameModel.fromServerFormat,
    closeEnrollment: (gameId) => (gameId),
    closeEnrollmentFailure: (error) => (error),
    closeEnrollmentSuccess: GameModel.fromServerFormat,
    drawTeams: (gameId) => (gameId),
    drawTeamsFailure: (error) => (error),
    drawTeamsSuccess: GameModel.fromServerFormat,
    edit: undefined,
    editCancel: undefined,
    editScoreA: parseNumber,
    editScoreB: parseNumber,
    end: (gameId) => (gameId),
    endFailure: (error) => (error),
    endSuccess: GameModel.fromServerFormat,
    enrollAnotherUserCancel: undefined,
    enrollAnotherUserChangeUserId: undefined,
    enrollAnotherUserEdit: undefined,
    enrollAnotherUserReset: undefined,
    enrollAnotherUser: (gameId, userId) => ({ gameId, userId }),
    enrollAnotherUserFailure: (error) => (error),
    enrollAnotherUserSuccess: GameModel.fromServerFormat,
    load: (gameId) => (gameId),
    loadFailure: (error) => (error),
    loadSuccess: GameModel.fromServerFormat,
    loadAll: undefined,
    loadAllFailure: (error) => (error),
    loadAllSuccess: GameModel.fromServerFormat,
    saveScore: undefined,
    saveScoreFailure: (error) => (error),
    saveScoreSuccess: GameModel.fromServerFormat
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
