import { actions } from 'ajax/state';
import { selectNonSilentErrors } from 'ajax/selectors';
import { ContainerComponent, Errors } from 'components';

export default ContainerComponent(Errors, {
  mapStateToProps: (state) => ({
    errors: selectNonSilentErrors(state)
  }),
  mapDispatchToProps: {
    onErrorAcknowledge: actions.ajax.acknowledge
  }
});
