import { BTN } from './styles';
import { ButtonComponentProps } from './types';

const Button: React.FC<ButtonComponentProps> = ({ children }) => {
  return <BTN>{children}</BTN>;
};

export default Button;
