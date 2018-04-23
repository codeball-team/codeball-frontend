function ajaxActionType(type) {
  return {
    FAILURE: `${type}_FAILURE`,
    SUCCESS: `${type}_SUCCESS`,

    toString() {
      return type;
    }
  };
}

export const AJAX_ABORT = 'AJAX_ABORT';
export const AJAX_ERROR_ACKNOWLEDGE = 'AJAX_ERROR_ACKNOWLEDGE';
export const AJAX = ajaxActionType('AJAX');
export const CURRENT_USER_LOAD = ajaxActionType('CURRENT_USER_LOAD');
export const GAMES_LOAD = ajaxActionType('GAMES_LOAD');
export const NEW_GAME_CHANGE_DATE = 'NEW_GAME_CHANGE_DATE';
export const NEW_GAME_CHANGE_DURATION = 'NEW_GAME_CHANGE_DURATION';
export const NEW_GAME_CHANGE_HOUR = 'NEW_GAME_CHANGE_HOUR';
export const NEW_GAME_CHANGE_MINUTE = 'NEW_GAME_CHANGE_MINUTE';
export const NEW_GAME_CHANGE_PITCH_ID = 'NEW_GAME_CHANGE_PITCH_ID';
export const NEW_GAME_RESET = 'NEW_GAME_RESET';
export const NEW_GAME_SUBMIT = ajaxActionType('NEW_GAME_SUBMIT');
export const NEW_PITCH_CHANGE_ADDRESS = 'NEW_PITCH_CHANGE_ADDRESS';
export const NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS = 'NEW_PITCH_CHANGE_MIN_NUMBER_OF_PLAYERS';
export const NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS = 'NEW_PITCH_CHANGE_MAX_NUMBER_OF_PLAYERS';
export const NEW_PITCH_CHANGE_NAME = 'NEW_PITCH_CHANGE_NAME';
export const NEW_PITCH_CHANGE_TYPE = 'NEW_PITCH_CHANGE_TYPE';
export const NEW_PITCH_RESET = 'NEW_PITCH_RESET';
export const NEW_PITCH_SUBMIT = ajaxActionType('NEW_PITCH_SUBMIT');
export const NEW_USER_CHANGE_EMAIL = 'NEW_USER_CHANGE_EMAIL';
export const NEW_USER_CHANGE_FIRST_NAME = 'NEW_USER_CHANGE_FIRST_NAME';
export const NEW_USER_CHANGE_LAST_NAME = 'NEW_USER_CHANGE_LAST_NAME';
export const NEW_USER_CHANGE_ROLE = 'NEW_USER_CHANGE_ROLE';
export const NEW_USER_RESET = 'NEW_USER_RESET';
export const NEW_USER_SUBMIT = ajaxActionType('NEW_USER_SUBMIT');
export const PITCH_LOAD = ajaxActionType('PITCH_LOAD');
export const PITCHES_LOAD = ajaxActionType('PITCHES_LOAD');
export const USER_LOAD = ajaxActionType('USER_LOAD');
export const USERS_LOAD = ajaxActionType('USERS_LOAD');
