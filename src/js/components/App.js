import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import Changelog from 'containers/Changelog/Changelog';
import Game from 'containers/Game/Game';
import Games from 'containers/Games/Games';
import NewGame from 'containers/NewGame/NewGame';
import NewPitch from 'containers/NewPitch/NewPitch';
import NewUser from 'containers/NewUser/NewUser';
import NotFound from 'containers/NotFound/NotFound';
import Pitch from 'containers/Pitch/Pitch';
import Pitches from 'containers/Pitches/Pitches';
import Unauthorized from 'containers/Unauthorized/Unauthorized';
import UpcomingGame from 'containers/UpcomingGame/UpcomingGame';
import User from 'containers/User/User';
import Users from 'containers/Users/Users';
import AjaxSpinner from 'containers/AjaxSpinner/AjaxSpinner';
import AjaxErrors from 'containers/AjaxErrors/AjaxErrors';
import { Page } from 'components/ui';

const App = () => (
  <div>
    <Page>
      <Switch>
        <Route exact={true} path="/" component={UpcomingGame} />
        <Route exact={true} path="/404" component={NotFound} />
        <Route exact={true} path="/changelog" component={Changelog} />
        <Route exact={true} path="/last-game" component={Game(() => 'last')} />
        <Route exact={true} path="/upcoming-game" component={UpcomingGame(() => 'upcoming')} />
        <Route exact={true} path="/games" component={Games} />
        <Route exact={true} path="/games/new" component={NewGame} />
        <Route exact={true} path="/games/previous/:id" component={Game(getIdFromRoute)} />
        <Route exact={true} path="/games/upcoming/:id" component={UpcomingGame(getIdFromRoute)} />
        <Route exact={true} path="/pitches" component={Pitches} />
        <Route exact={true} path="/pitches/new" component={NewPitch} />
        <Route exact={true} path="/pitches/:id" component={Pitch} />
        <Route exact={true} path="/players" component={Users} />
        <Route exact={true} path="/players/new" component={NewUser} />
        <Route exact={true} path="/players/:id" component={User} />
        <Route exact={true} path="unauthorized" component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Page>
    <AjaxSpinner />
    <AjaxErrors />
  </div>
);

App.propTypes = {

};

const getIdFromRoute = (props) => props.params.id;

export default withRouter(App);
