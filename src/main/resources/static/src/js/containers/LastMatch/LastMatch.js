import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CodeballActions from 'actions/CodeballActions';
import { MatchLineup, MatchScore } from 'components';
import './LastMatch.scss';

class LastMatch extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentWillMount = () => {
    const { actions } = this.props;
    actions.loadUsers();
  };

  render () {
    const {
      game,
      users,
      actions
    } = this.props;

    const {
      date,
      time,
      pitch,
      teamA,
      teamAScore,
      teamB,
      teamBScore
    } = game;

    return (
      <section className="upcoming-match">
        <MatchScore
          pitchName={pitch.name}
          date={date}
          time={time}
          teamAScore={teamAScore}
          teamBScore={teamBScore} />

        <MatchLineup
          users={users}
          teamA={teamA}
          teamB={teamB} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CodeballActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LastMatch);
