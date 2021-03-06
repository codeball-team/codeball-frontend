import { connect } from 'react-redux';
import { actions } from 'new-game/state';
import { selectIsValid } from 'new-game/selectors';
import { Section } from 'components';
import NewGame from './component';

const mapStateToProps = (state) => ({
  isValid: selectIsValid(state),
  title: 'New game'
});

const mapDispatchToProps = {
  onSubmit: actions.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(NewGame));
