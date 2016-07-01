import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as codeballActions from 'actions';
import { refreshDataIfNecessary } from 'utils';
import { LoadableContent } from 'components/ui';
//import { NewPitchSection } from 'components/sections';

class NewPitch extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    currentUserData: PropTypes.object.isRequired,
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

    refreshDataIfNecessary(currentUserData, actions.currentUserLoad);
    refreshDataIfNecessary(pitchesData, actions.pitchesLoad);
    refreshDataIfNecessary(usersData, actions.usersLoad);
  };

  render () {
    const {
      actions,
      currentUserData,
      pitchesData,
      usersData
    } = this.props;

    const { currentUser } = currentUserData;
    const { pitches } = pitchesData;
    const { users } = usersData;

    const isContentLoading = _.any([
      currentUserData.isLoading,
      pitchesData.isLoading,
      usersData.isLoading
    ]);

    return (
      <LoadableContent
        isLoading={isContentLoading}
        render={() => (
          <section className="new-pitch">
            new pitch
          </section>
        )} />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserData: state.currentUserData,
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
)(NewPitch);