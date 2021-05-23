import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({
  register,
  showCallToAction,
  callToAction: CallToAction,
  ...props
}) => {
  return (
    <InputField>
      <Label htmlFor={props.id}>{props.label}</Label>
      <div className="input-icon">
        <input {...props} ref={register} />
        {showCallToAction && CallToAction && (
          <span className="icon-area">
            <CallToAction />
          </span>
        )}
      </div>
    </InputField>
  );
};

export default Input;
