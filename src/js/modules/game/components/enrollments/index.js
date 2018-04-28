import { connect } from 'react-redux';
import { selectEnrolledUsersPerStatus } from 'game/selectors';
import { Section } from 'components/ui';
import Enrollments from './component';

const mapStateToProps = (state) => ({
  enrolledUsersPerStatus: selectEnrolledUsersPerStatus(state)
});

export default connect(mapStateToProps)(Section(Enrollments));
