import { createSelector } from 'reselect';

export default createSelector(
  [ (state) => state.ajaxRequests.numberOfPendingRequests ],
  (numberOfPendingRequests) => ({
    placement: 'fixed',
    show: numberOfPendingRequests > 0
  })
);
