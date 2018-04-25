import { connect } from 'react-redux';
import { selectCanAddGame } from 'current-user/selectors';
import NotLoaded from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddGame(state)
});

export default connect(mapStateToProps)(NotLoaded);
