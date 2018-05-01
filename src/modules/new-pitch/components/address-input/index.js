import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import { selectAddress, selectAddressDisplayValue, selectAddressIsValid } from 'new-pitch/selectors';
import { EditableText, Input } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectAddressDisplayValue(state),
  isEditing: true,
  isValid: selectAddressIsValid(state),
  label: 'Address',
  text: selectAddress(state)
});

const mapDispatchToProps = {
  onChange: actions.changeAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(EditableText));
