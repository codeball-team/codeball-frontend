import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import { selectIsValid } from 'new-pitch/selectors';
import { Section } from 'components';
import NewPitch from './component';

const mapStateToProps = (state) => ({
  isValid: selectIsValid(state),
  title: 'New pitch'
});

const mapDispatchToProps = {
  onSubmit: actions.newPitch.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(NewPitch));
