import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as codeballActions from 'actions';
import { refreshDataIfNecessary } from 'utils';
import { Link } from 'react-router';
import IconAdd from 'react-icons/lib/io/plus';
import { Button, LoadableContent } from 'components/ui';
import { GamesListSection } from 'components/sections';

class Games extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    currentUserData: PropTypes.object.isRequired,
    gamesData: PropTypes.object.isRequired,
    pitchesData: PropTypes.object.isRequired,
    usersData: PropTypes.object.isRequired
  };

  componentWillMount = () => {
    const {
      actions,
      currentUserData,
      pitchesData,
      usersData
    } = this.props;

    actions.gamesLoad();
    refreshDataIfNecessary(currentUserData, actions.currentUserLoad);
    refreshDataIfNecessary(pitchesData, actions.pitchesLoad);
    refreshDataIfNecessary(usersData, actions.usersLoad);
  };

  render () {
    const {
      currentUserData,
      gamesData,
      pitchesData,
      usersData
    } = this.props;

    const { currentUser } = currentUserData;
    const { games } = gamesData;
    const { pitches } = pitchesData;
    const { users } = usersData;

    const gamesListProps = {
      currentUser,
      pitches,
      users
    };

    const sortedGames = _(
      _(games).values()
    ).sortBy('date').reverse();
    const upcomingGames = _(sortedGames).filter(game => !game.isGameOver);
    const previousGames = _(sortedGames).filter(game => game.isGameOver);

    const isContentLoading = _.any([
      currentUserData.isLoading,
      gamesData.isLoading,
      pitchesData.isLoading,
      usersData.isLoading
    ]);

    return (
      <LoadableContent
        isLoading={isContentLoading}
        render={() => (
          <section className="games">
            <GamesListSection
              className="upcoming-games"
              title={`Upcoming games (${upcomingGames.length})`}
              formatUrl={id => `/games/upcoming/${id}`}
              games={upcomingGames}
              buttons={[
                <Link key="new" to="/games/new">
                  <Button>
                    <IconAdd className="icon" />
                    <span className="label">Add</span>
                  </Button>
                </Link>
              ]}
              {...gamesListProps} />

            <GamesListSection
              title={`Previous games (${previousGames.length})`}
              formatUrl={id => `/games/previous/${id}`}
              games={previousGames}
              {...gamesListProps} />
          </section>
        )} />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserData: state.currentUserData,
    gamesData: state.gamesData,
    pitchesData: state.pitchesData,
    usersData: state.usersData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(codeballActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Games);
