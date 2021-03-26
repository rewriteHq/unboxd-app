import styled from 'styled-components';
import image from '../../assets/img/logo/logo.svg';

const LogoStyle = styled.img<{ size?: string }>``;

const Logo = () => {
  return <LogoStyle src={image} alt="unboxd logo" />;
};

export default Logo;
