import { fetchJson } from 'utils';

export const getPitchesUrl = () => `${process.env.API_URL}/pitch`;

export const getPitches = () => fetchJson(getPitchesUrl());
