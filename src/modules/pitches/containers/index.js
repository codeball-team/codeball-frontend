import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitches/state';
import { selectCanAddPitch } from 'current-user/selectors';
import { selectDataIsLoading } from 'pitches/selectors';
import { Container } from 'components';
import Pitches from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddPitch(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateData: () => {
    dispatch(currentUserActions.load());
    dispatch(actions.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Pitches));
