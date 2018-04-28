import { connect } from 'react-redux';
import { selectEmail, selectName, selectPictureUrl, selectRoleString } from 'user/selectors';
import { Section } from 'components';
import Profile from './component';

const mapStateToProps = (state) => ({
  email: selectEmail(state),
  pictureUrl: selectPictureUrl(state),
  role: selectRoleString(state),
  title: selectName(state)
});

export default connect(mapStateToProps)(Section(Profile));
