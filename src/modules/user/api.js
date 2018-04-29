import { fetchJson } from 'utils';
import { getUsersUrl } from 'users/api';

export const getUserUrl = (userId) => `${getUsersUrl()}/${userId}`;

export const getUser = (userId) => fetchJson(getUserUrl(userId));
