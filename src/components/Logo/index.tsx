import styled from 'styled-components';
import { useAppThemeContext } from '../../store/ThemeContex';

const LogoSizes = {
  sm: 110,
  md: 130,
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
  const appThemeContext = useAppThemeContext();
  return (
    <LogoStyle
      size={size}
      src={
        appThemeContext?.theme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'
      }
      alt="unboxd logo"
    />
  );
};

export default Logo;
