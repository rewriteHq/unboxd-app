import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({ register, ...props }) => {
  return (
    <InputField>
      <Label htmlFor={props.id}>{props.label}</Label>
      <input {...props} ref={register} />
    </InputField>
  );
};

export default Input;
