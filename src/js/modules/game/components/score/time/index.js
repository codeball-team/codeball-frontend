import { connect } from 'react-redux';
import { selectTime } from 'selectors/models/game';
import Time from './component';

const mapStateToProps = (state) => ({
  time: selectTime(state)
});

export default connect(mapStateToProps)(Time);
