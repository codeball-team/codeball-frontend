import { combineActions, createActions } from 'redux-actions';
import { ajaxReducer, createAjaxActions, noop, parseNumber } from 'utils';
import GameModel from 'game/model';
import { actions as newGameActions } from 'new-game/state';
import { actions as enrollAnotherUserActions } from 'enroll-another-user/state';

const initialState = {
  isEditing: false,
  game: new GameModel(),
  editedGame: {}
};

export const actions = createActions({
  game: {
    edit: noop,
    editCancel: noop,
    changeScoreA: parseNumber,
    changeScoreB: parseNumber,
    ...createAjaxActions(GameModel.fromServerFormat, {
      changeEnrollmentStatus: (enrollmentStatus) => enrollmentStatus,
      closeEnrollment: noop,
      drawTeams: noop,
      end: noop,
      load: (gameId) => gameId,
      saveScore: noop
    })
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
    actions.game.loadSuccess,
    actions.game.saveScoreSuccess,
    enrollAnotherUserActions.enrollAnotherUser.submitSuccess,
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

  [actions.game.changeScoreA]: (state, { payload: teamAScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamAScore
    }
  }),

  [actions.game.changeScoreB]: (state, { payload: teamBScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamBScore
    }
  })
});
