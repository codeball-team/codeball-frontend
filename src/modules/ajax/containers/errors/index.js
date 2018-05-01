import { connect } from 'react-redux';
import { actions } from 'ajax/state';
import { selectNonSilentErrors } from 'ajax/selectors';
import { Container, Errors } from 'components';

const mapStateToProps = (state) => ({
  errors: selectNonSilentErrors(state)
});

const mapDispatchToProps = {
  onErrorAcknowledge: actions.acknowledge
};

export default connect(mapStateToProps, mapDispatchToProps)(Container(Errors));
