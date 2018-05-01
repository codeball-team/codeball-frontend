import { connect } from 'react-redux';
import { actions } from 'game/state';
import { selectEnrollmentStatus } from 'game/selectors';
import { Section } from 'components';
import EnrollmentForm from './component';

const mapStateToProps = (state) => ({
  enrollmentStatus: selectEnrollmentStatus(state),
  title: 'Are you going?'
});

const mapDispatchToProps = {
  onChange: actions.changeEnrollmentStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(EnrollmentForm));
