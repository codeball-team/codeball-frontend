import { ajaxSpinnerContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Spinner } from 'components/ui';

export default ContainerComponent(Spinner, {
  mapStateToProps: ajaxSpinnerContainerSelector
});
