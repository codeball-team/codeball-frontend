import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputWrapper, Render } from 'components/ui';
import SubmitButton from './submit-button';
import styles from './styles.scss';

const Form = ({ className, inputs, onSubmit }) => {
  const visibleInputs = inputs.reduce((inputsToRender, input) => {
    const haveAllInputsBeenValidSoFar = inputsToRender.every(({ isValid }) => isValid);
    if (haveAllInputsBeenValidSoFar) {
      inputsToRender.push(input);
    }
    return inputsToRender;
  }, []);
  const areAllInputsValid = visibleInputs.every(({ isValid }) => isValid);

  return (
    <div className={classNames(styles.form, className)}>
      <div>
        {visibleInputs.map(({ label, displayValue, isValid, component }, index) => (
          <InputWrapper
            key={index}
            label={label}
            displayValue={displayValue}
            isValid={isValid}>
            {component}
          </InputWrapper>
        ))}
      </div>

      <Render when={Boolean(onSubmit)}>
        <SubmitButton isDisabled={!areAllInputsValid} onClick={onSubmit} />
      </Render>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func
};

export default Form;
