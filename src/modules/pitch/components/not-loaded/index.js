import { connect } from 'react-redux';
import { selectCanAddPitch } from 'current-user/selectors';
import NotLoaded from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddPitch(state)
});

export default connect(mapStateToProps)(NotLoaded);

