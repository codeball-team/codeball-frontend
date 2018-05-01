import { connect } from 'react-redux';
import { selectSortedUsers, selectTitle } from 'users/selectors';
import { Section } from 'components';
import List from './component';

const mapStateToProps = (state) => ({
  title: selectTitle(state),
  users: selectSortedUsers(state)
});

export default connect(mapStateToProps)(Section(List));
