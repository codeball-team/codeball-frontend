import { fetchJson } from 'utils';
import { getPitchesUrl } from 'pitches/api';

export const getPitchUrl = (userId) => `${getPitchesUrl()}/${userId}`;

export const getPitch = (pitchId) => fetchJson(getPitchUrl(pitchId));
