import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({ register, ...props }) => {
  return (
    <InputField>
      <Label htmlFor={props.name}>{props.label}</Label>
      <input id={props.name} {...props} ref={register} />
    </InputField>
  );
};

export default Input;
