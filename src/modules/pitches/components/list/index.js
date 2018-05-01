import { connect } from 'react-redux';
import { selectPitches, selectTitle } from 'pitches/selectors';
import { Section } from 'components';
import List from './component';

const mapStateToProps = (state) => ({
  title: selectTitle(state),
  pitches: selectPitches(state)
});

export default connect(mapStateToProps)(Section(List));
