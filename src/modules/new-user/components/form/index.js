import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectIsValid } from 'new-user/selectors';
import { Section } from 'components';
import NewUser from './component';

const mapStateToProps = (state) => ({
  isValid: selectIsValid(state),
  title: 'New player'
});

const mapDispatchToProps = {
  onSubmit: actions.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(NewUser));
