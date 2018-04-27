import { connect } from 'react-redux';
import { selectPitches } from 'pitches/selectors';
import { Section } from 'components/ui';
import List from './component';

const mapStateToProps = (state) => {
  const pitches = selectPitches(state);

  return {
    title: `Pitches (${pitches.length})`,
    pitches
  };
};

export default connect(mapStateToProps)(Section(List));
