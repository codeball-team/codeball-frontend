import { fetchJson } from 'utils';
import { getPitchesUrl } from 'pitches/api';

export const postNewPitch = (payload) => fetchJson(getPitchesUrl(), {
  method: 'POST',
  body: JSON.stringify(payload)
});
