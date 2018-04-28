import { selectArePending } from 'ajax/selectors';
import { ContainerComponent, Spinner } from 'components';

export default ContainerComponent(Spinner, {
  mapStateToProps: (state) => ({
    placement: 'fixed',
    show: selectArePending(state)
  })
});
