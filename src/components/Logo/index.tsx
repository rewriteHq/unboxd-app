import styled from 'styled-components';
import image from '../../assets/img/logo/logo.svg';

const LogoSizes = {
  sm: 110,
  md: 150,
  lg: 200,
};

type Size = keyof typeof LogoSizes;

type LogoProps = {
  size?: Size;
};

const LogoStyle = styled.img<{ size: Size }>`
  width: ${({ size }) => LogoSizes[size]}px;
`;

const Logo = ({ size = 'md' }: LogoProps) => {
  return <LogoStyle size={size} src={image} alt="unboxd logo" />;
};

export default Logo;
