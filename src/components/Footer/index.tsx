import { FooterWrapper } from './styles';
import { FooterComponentProps } from './types';

const Footer: React.FC<FooterComponentProps> = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <p className="info">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
