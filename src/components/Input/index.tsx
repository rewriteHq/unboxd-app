import { useState } from 'react';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const Input: React.FC<InputComponentProps> = ({
  register,
  showCallToAction,
  callToAction: CallToAction,
  isPassword,
  isEdit,
  isPhone,
  ctaClick,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  // const [edit, setEdit] = useState(false);
  // const enableEdit = () => {
  //   setEdit((prev) => !prev);
  // }
  return (
    <InputField>
      <Label htmlFor={props.id}>{props.label}</Label>
      <div className="input-icon">
        <input
          {...props}
          type={isPassword ? (show ? 'text' : 'password') : props.type}
          inputMode={isPhone ? 'numeric' : 'text'}
          ref={register}
          disabled={isEdit && !show}
          autoComplete="off"
        />
        {showCallToAction && CallToAction && (
          <span
            className="icon-area"
            onClick={isPassword || isEdit ? handleShow : ctaClick}
          >
            <CallToAction />
          </span>
        )}
      </div>
    </InputField>
  );
};

export default Input;
