import { useState } from 'react';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({
  register,
  showCallToAction,
  callToAction: CallToAction,
  isPassword,
  ctaClick,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <InputField>
      <Label htmlFor={props.id}>{props.label}</Label>
      <div className="input-icon">
        <input
          {...props}
          type={isPassword ? (showPassword ? 'text' : 'password') : props.type}
          ref={register}
        />
        {showCallToAction && CallToAction && (
          <span
            className="icon-area"
            onClick={isPassword ? handleShowPassword : ctaClick}
          >
            <CallToAction />
          </span>
        )}
      </div>
    </InputField>
  );
};

export default Input;
