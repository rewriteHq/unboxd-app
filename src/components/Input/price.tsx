import React, { useRef } from 'react';
import NumberInput from 'react-number-format';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const PriceInput: React.FC<InputComponentProps> = ({ register, ...props }) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    labelRef.current?.classList.toggle('focus');
  };

  return (
    <InputField>
      <Label ref={labelRef}>{props.label}</Label>
      <NumberInput
        thousandSeparator
        prefix="₦ "
        value={props.value}
        onValueChange={props.onChange}
        decimalScale={2}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </InputField>
  );
};

export default PriceInput;
