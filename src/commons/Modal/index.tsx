import { ModalWrapper } from './style';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

type ValidationProps = {
  EMAIL: string;
  NAME: string;
}

type FormProps = {
  status: any;
  message: any;
  onValidated: ({ EMAIL, NAME }: ValidationProps) => void;
}

const CustomForm = ({ status, message, onValidated }: FormProps) => {
  let email: string | any, name: string | any;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div className="form">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="input">
        <label>My name is</label>
        <input
          ref={node => (name = node)}
          type="text"
          placeholder="Enter your name"
        />
      </div>

      <div className="input">
        <label>My email is</label>
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <button className="formSubmit" onClick={submit}>
        Sign up for early access
      </button>
    </div>
  );
};

const Modal: React.FC<IProps> = ({ onClick }) => {
  return (
    <ModalWrapper>
      <div className="modal-container">
        <span onClick={onClick} className="close"> close </span>
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL!}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData: any) => subscribe(formData)}
            />
          )}
        />
      </div>
    </ModalWrapper>
  );
}

export default Modal;