import { fetchJson } from 'utils';
import { getUsersUrl } from 'users/api';

export const postNewUser = (payload) => fetchJson(getUsersUrl(), {
  method: 'POST',
  body: JSON.stringify(payload)
});
