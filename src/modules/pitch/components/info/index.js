import { connect } from 'react-redux';
import { selectName, selectPitch } from 'pitch/selectors';
import { Section } from 'components';
import Info from './component';

const mapStateToProps = (state) => ({
  pitch: selectPitch(state),
  title: selectName(state)
});

export default connect(mapStateToProps)(Section(Info));
