import { connect } from 'react-redux';
import { selectEnrolledUsersPerStatus, selectEnrollmentsTitle } from 'game/selectors';
import { Section } from 'components';
import Enrollments from './component';

const mapStateToProps = (state) => ({
  enrolledUsersPerStatus: selectEnrolledUsersPerStatus(state),
  title: selectEnrollmentsTitle(state)
});

export default connect(mapStateToProps)(Section(Enrollments));
