import { fetchJson } from 'utils';
import { getUsersUrl } from 'users/api';

export const getCurrentUserUrl = () => `${getUsersUrl()}/me`;

export const getCurrentUser = () => fetchJson(getCurrentUserUrl());
