import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { ConditionalRender } from 'components/base';
import InputWrapper from '../InputWrapper/InputWrapper';
import SubmitButton from './SubmitButton';
import './Form.scss';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    inputs: PropTypes.array.isRequired,
    onSubmit: PropTypes.func
  };

  render() {
    const {
      className,
      inputs,
      onSubmit
    } = this.props;

    const visibleInputs = inputs.reduce((inputsToRender, input) => {
      const haveAllInputsBeenValidSoFar = inputsToRender.every(({ isValid }) => isValid);
      if (haveAllInputsBeenValidSoFar) {
        inputsToRender.push(input);
      }
      return inputsToRender;
    }, []);
    const areAllInputsValid = visibleInputs.every(({ isValid }) => isValid);

    return (
      <div
        className={classNames(
          'form',
          className
        )}>
        <div className="inputs">
          {visibleInputs.map(({ label, value, isValid, component }, index) => (
            <InputWrapper
              key={index}
              label={label}
              value={value}
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

export default ConditionalRender(Form);
