import { connect } from 'react-redux';
import { selectCanAddUser } from 'current-user/selectors';
import NotLoaded from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddUser(state)
});

export default connect(mapStateToProps)(NotLoaded);

