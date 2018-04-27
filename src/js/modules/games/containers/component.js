import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import { AddGameButton } from 'components/codeball';
import PreviousList from 'games/components/previous-list';
import UpcomingList from 'games/components/upcoming-list';

const Games = ({ canAddNew }) => (
  <main>
    <UpcomingList
      buttons={(
        <React.Fragment>
          <Render when={canAddNew}>
            <AddGameButton />
          </Render>
        </React.Fragment>
      )} />

    <PreviousList />
  </main>
);

Games.propTypes = {
  canAddNew: PropTypes.bool
};

export default Games;
