import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { BACKGROUND_IMAGES } from 'constants';
import Changelog from 'changelog';
import Game from 'game/containers/previous';
import Games from 'games/containers';
import NewGame from 'new-game/containers';
import NewPitch from 'new-pitch/containers';
import NewUser from 'new-user/containers';
import NotFound from 'not-found';
import Pitch from 'pitch/containers';
import Pitches from 'pitches/containers';
import Unauthorized from 'unauthorized';
import UpcomingGame from 'game/containers/upcoming';
import User from 'user/containers';
import Users from 'users/containers';
import AjaxSpinner from 'ajax/containers/spinner';
import AjaxErrors from 'ajax/containers/errors';
import { BodyBackground, Page } from 'components/ui';

const PreviousGame = () => <Game id="last" />;
const NextGame = () => <UpcomingGame id="upcoming" />;

const App = () => (
  <div>
    <Page>
      <Switch>
        <Redirect exact={true} from="/" to="/upcoming-game" />
        <Route exact={true} path="/404" component={NotFound} />
        <Route exact={true} path="/changelog" component={Changelog} />
        <Route exact={true} path="/games" component={Games} />
        <Route exact={true} path="/games/new" component={NewGame} />
        <Route exact={true} path="/games/previous/:id" component={Game} />
        <Route exact={true} path="/games/upcoming/:id" component={UpcomingGame} />
        <Route exact={true} path="/last-game" component={PreviousGame} />
        <Route exact={true} path="/pitches" component={Pitches} />
        <Route exact={true} path="/pitches/new" component={NewPitch} />
        <Route exact={true} path="/pitches/:id" component={Pitch} />
        <Route exact={true} path="/players" component={Users} />
        <Route exact={true} path="/players/new" component={NewUser} />
        <Route exact={true} path="/players/:id" component={User} />
        <Route exact={true} path="/unauthorized" component={Unauthorized} />
        <Route exact={true} path="/upcoming-game" component={NextGame} />
        <Route component={NotFound} />
      </Switch>
    </Page>

    <BodyBackground images={BACKGROUND_IMAGES} />
    <AjaxSpinner />
    <AjaxErrors />
  </div>
);

export default withRouter(App);
