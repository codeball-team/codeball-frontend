import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCanAddUser } from 'current-user/selectors';
import { Render } from 'components/ui';
import { AddUserButton } from 'components/codeball';
import List from 'users/components/list';

const Users = ({ canAddNew }) => (
  <main>
    <List
      buttons={(
        <Render when={canAddNew}>
          <AddUserButton />
        </Render>
      )} />
  </main>
);

Users.propTypes = {
  canAddNew: PropTypes.bool
};

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddUser(state)
});

export default connect(mapStateToProps)(Users);
