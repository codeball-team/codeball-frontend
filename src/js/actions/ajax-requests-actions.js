import { AJAX_ERROR_ACKNOWLEDGE } from 'constants/action-types';

export function ajaxErrorAcknowledge(errorIndex) {
  return {
    type: AJAX_ERROR_ACKNOWLEDGE,
    errorIndex
  };
}
