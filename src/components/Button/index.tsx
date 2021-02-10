import { BTN, Spinner } from './styles';
import { ButtonComponentProps } from './types';

const Button: React.FC<ButtonComponentProps> = (props) => {
  return <BTN>{props.loading ? (
        <Spinner>
          <img src="/assets/icons/rolling.svg" alt="loading spinner" />
        </Spinner>
      ) : props.children}</BTN>;
};

export default Button;
