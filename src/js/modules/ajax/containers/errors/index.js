import { actions } from 'ajax/state';
import { selectNonSilentErrors } from 'ajax/selectors';
import { ContainerComponent } from 'components/base';
import { Errors } from 'components/ui';

export default ContainerComponent(Errors, {
  mapStateToProps: (state) => ({
    errors: selectNonSilentErrors(state)
  }),
  mapDispatchToProps: {
    onErrorAcknowledge: actions.ajax.acknowledge
  }
});
