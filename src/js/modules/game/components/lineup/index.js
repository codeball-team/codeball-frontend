import { connect } from 'react-redux';
import { selectTeamAUsers, selectTeamBUsers } from 'game/selectors';
import { Section } from 'components/ui';
import Lineup from './component';

const mapStateToProps = (state) => ({
  teamA: selectTeamAUsers(state),
  teamB: selectTeamBUsers(state)
});

export default connect(mapStateToProps)(Section(Lineup));
