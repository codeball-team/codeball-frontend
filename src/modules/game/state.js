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
}).game;

const ajaxActions = [
  actions.load,
  actions.loadFailure,
  actions.loadSuccess
];

export default ajaxReducer(initialState, ajaxActions, {
  [combineActions(
    actions.changeEnrollmentStatusSuccess,
    actions.closeEnrollmentSuccess,
    actions.drawTeamsSuccess,
    actions.endSuccess,
    actions.loadSuccess,
    actions.saveScoreSuccess,
    enrollAnotherUserActions.submitSuccess,
    newGameActions.submitSuccess
  )]: (state, { payload: game }) => ({ ...initialState, game }),

  [combineActions(
    actions.saveScoreFailure,
    newGameActions.submitFailure
  )]: (state) => ({ ...state, isEditing: true }),

  [actions.edit]: (state) => ({
    ...state,
    editedGame: {
      ...state.game
    },
    isEditing: true
  }),

  [actions.editCancel]: (state) => ({
    ...state,
    editedGame: initialState.editedGame,
    isEditing: false
  }),

  [actions.changeScoreA]: (state, { payload: teamAScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamAScore
    }
  }),

  [actions.changeScoreB]: (state, { payload: teamBScore }) => ({
    ...state,
    editedGame: {
      ...state.editedGame,
      teamBScore
    }
  })
});
