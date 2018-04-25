import { connect } from 'react-redux';
import { selectGame, selectPitch, selectPitchName } from 'game/selectors';
import { Section } from 'components/ui';
import Info from './component';

const mapStateToProps = (state) => ({
  game: selectGame(state),
  pitch: selectPitch(state),
  title: selectPitchName(state)
});

export default connect(mapStateToProps)(Section(Info));
