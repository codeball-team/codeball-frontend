import { createAction } from 'redux-actions';
import { AJAX_ERROR_ACKNOWLEDGE } from 'constants/action-types';

export const ajaxErrorAcknowledge = createAction(AJAX_ERROR_ACKNOWLEDGE, (errorIndex) => errorIndex);
