import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { InputWrapper } from 'components/ui';
import SubmitButton from './SubmitButton';
import styles from './styles.scss';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    inputs: PropTypes.array.isRequired,
    onSubmit: PropTypes.func
  };

  render() {
    const { className, inputs, onSubmit } = this.props;
    const visibleInputs = inputs.reduce((inputsToRender, input) => {
      const haveAllInputsBeenValidSoFar = inputsToRender.every(({ isValid }) => isValid);
      if(haveAllInputsBeenValidSoFar) {
        inputsToRender.push(input);
      }
      return inputsToRender;
    }, []);
    const areAllInputsValid = visibleInputs.every(({ isValid }) => isValid);

    return (
      <div
        className={classNames(
          styles.form,
          className
        )}>
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

        <SubmitButton
          renderWhen={Boolean(onSubmit)}
          isDisabled={!areAllInputsValid}
          onClick={onSubmit} />
      </div>
    );
  }
}

export default BaseComponent(Form);
