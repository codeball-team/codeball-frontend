import { connect } from 'react-redux';
import { selectPitchId, selectPitchName } from 'game/selectors';
import Pitch from './component';

const mapStateToProps = (state) => ({
  id: selectPitchId(state),
  name: selectPitchName(state)
});

export default connect(mapStateToProps)(Pitch);
