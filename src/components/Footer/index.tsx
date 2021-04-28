import { Link } from 'react-router-dom';
import { FooterWrapper } from './styles';
import { FooterComponentProps } from './types';

const Footer: React.FC<FooterComponentProps> = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p className="info">
          By continuing, you agree to our
          <br /> <Link to="/">Terms of Service</Link> and{' '}
          <Link to="/">Privacy Policy</Link>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
