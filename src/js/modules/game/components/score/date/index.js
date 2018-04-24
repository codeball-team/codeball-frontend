import { connect } from 'react-redux';
import { selectDate } from 'selectors/models/game';
import Date from './component';

const mapStateToProps = (state) => ({
  date: selectDate(state)
});

export default connect(mapStateToProps)(Date);
