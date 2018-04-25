import { selectArePending } from 'ajax/selectors';
import { ContainerComponent } from 'components/base';
import { Spinner } from 'components/ui';

export default ContainerComponent(Spinner, {
  mapStateToProps: (state) => ({
    placement: 'fixed',
    show: selectArePending(state)
  })
});
