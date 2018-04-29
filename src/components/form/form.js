import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Render } from 'components';
import SubmitButton from './submit-button';
import styles from './styles.scss';

const Form = ({ className, children, isValid = true, onSubmit }) => (
  <div className={classNames(styles.form, className)}>
    <div>
      {children}
    </div>

    <Render when={Boolean(onSubmit)}>
      <SubmitButton isDisabled={!isValid} onClick={onSubmit} />
    </Render>
  </div>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default Form;
