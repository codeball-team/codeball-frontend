import request from 'superagent';
import { ajax } from 'utils';
import { USER_LOAD } from 'constants/action-types';
import { userUrl } from 'constants';

export function userLoad(userId) {
  return ajax(() => ({
    actionType: USER_LOAD,
    request: request('GET', userUrl(userId)),
    json: true,
    debounce: true
  }));
}
