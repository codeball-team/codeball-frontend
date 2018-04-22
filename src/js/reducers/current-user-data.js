import { ajaxReducer } from 'utils';
import { CURRENT_USER_LOAD } from 'constants/action-types';
import { UserModel } from 'models';

const initialState = {
  currentUser: new UserModel()
};

export default ajaxReducer(initialState, CURRENT_USER_LOAD, {
  [CURRENT_USER_LOAD.SUCCESS]: (state, { response }) => ({
    ...initialState,
    currentUser: UserModel.fromServerFormat(response)
  })
});
