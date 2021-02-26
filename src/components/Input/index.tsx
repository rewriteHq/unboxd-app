import { useRef } from 'react';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({ register, ...props }) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    labelRef.current?.classList.toggle('focus');
  };

  return (
    <InputField>
      <Label ref={labelRef}>{props.label}</Label>
      <input
        {...props}
        ref={register}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </InputField>
  );
};

export default Input;
