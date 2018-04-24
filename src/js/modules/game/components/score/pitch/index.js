import { connect } from 'react-redux';
import { selectPitchId, selectPitchName } from 'selectors/models/game';
import Pitch from './component';

const mapStateToProps = (state) => ({
  id: selectPitchId(state),
  name: selectPitchName(state)
});

export default connect(mapStateToProps)(Pitch);
