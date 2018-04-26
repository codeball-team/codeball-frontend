import { connect } from 'react-redux';
import { selectUsers } from 'users/selectors';
import { Section } from 'components/ui';
import List from './component';

const mapStateToProps = (state) => {
  const users = selectUsers(state);

  return {
    title: `Players (${users.length})`,
    users
  };
};

export default connect(mapStateToProps)(Section(List));
