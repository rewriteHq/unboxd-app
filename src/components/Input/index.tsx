import { useRef } from 'react';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = (props) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleClick = (e: any) => {
    e.stopPropagation();
    labelRef.current?.classList.toggle('focus');
  };
  return (
    <InputField>
      <Label ref={labelRef}>{props.label}</Label>
      <input {...props} onFocus={handleClick} />
    </InputField>
  );
};

export default Input;
