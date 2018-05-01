import { connect } from 'react-redux';
import { selectArePending } from 'ajax/selectors';
import { Container, Spinner } from 'components';

const mapStateToProps = (state) => ({
  placement: 'fixed',
  show: selectArePending(state)
});

export default connect(mapStateToProps)(Container(Spinner));
