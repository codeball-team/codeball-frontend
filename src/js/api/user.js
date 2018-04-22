import { fetchJson } from 'utils';

export const getCurrentUserUrl = () => `${getUsersUrl()}/me`;
export const getUserUrl = (userId) => `${getUsersUrl()}/${userId}`;
export const getUsersUrl = () => `${process.env.API_URL}/user`;

export const getCurrentUser = () => fetchJson(getCurrentUserUrl());
export const getUser = (userId) => fetchJson(getUserUrl(userId));
export const getUsers = () => fetchJson(getUsersUrl());
