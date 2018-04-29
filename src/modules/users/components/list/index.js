import { connect } from 'react-redux';
import { selectSortedUsers } from 'users/selectors';
import { Section } from 'components';
import List from './component';

const mapStateToProps = (state) => {
  const users = selectSortedUsers(state);

  return {
    title: `Players (${users.length})`,
    users
  };
};

export default connect(mapStateToProps)(Section(List));
