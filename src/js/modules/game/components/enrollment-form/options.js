import {
  ENROLLMENT_STATUS_MAYBE,
  ENROLLMENT_STATUS_NO,
  ENROLLMENT_STATUS_YES
} from 'constants';
import styles from './styles.scss';

export default [
  {
    className: styles.yes,
    value: ENROLLMENT_STATUS_YES,
    text: 'Yes'
  },
  {
    className: styles.maybe,
    value: ENROLLMENT_STATUS_MAYBE,
    text: 'Maybe'
  },
  {
    className: styles.no,
    value: ENROLLMENT_STATUS_NO,
    text: 'No'
  }
];
