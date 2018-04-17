import { ajaxReducer } from 'utils';
import { PITCH_LOAD } from 'constants/action-types';
import { PitchModel } from 'models';

const initialState = {
  pitch: new PitchModel()
};

export default ajaxReducer(initialState, PITCH_LOAD, {
  [PITCH_LOAD.SUCCESS]: (state, action) => {
    const { response } = action;
    const pitch = PitchModel.fromServerFormat(response);

    return {
      ...initialState,
      pitch
    };
  }
});
