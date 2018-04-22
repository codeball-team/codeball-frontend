import { fetchJson } from 'utils';

export const getPitchUrl = (userId) => `${getPitchesUrl()}/${userId}`;
export const getPitchesUrl = () => `${process.env.API_URL}/pitch`;

export const getPitch = (pitchId) => fetchJson(getPitchUrl(pitchId));
export const getPitches = () => fetchJson(getPitchesUrl());
