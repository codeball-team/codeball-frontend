import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputWrapper, Render } from 'components/ui';
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default Form;
