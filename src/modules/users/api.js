import { fetchJson } from 'utils';

export const getUsersUrl = () => `${process.env.API_URL}/user`;

export const getUsers = () => fetchJson(getUsersUrl());
