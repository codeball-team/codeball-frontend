import { actions } from 'ajax/state';
import { ajaxErrorsContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Errors } from 'components/ui';

export default ContainerComponent(Errors, {
  mapStateToProps: ajaxErrorsContainerSelector,
  mapDispatchToProps: {
    onErrorAcknowledge: actions.ajax.acknowledge
  }
});
