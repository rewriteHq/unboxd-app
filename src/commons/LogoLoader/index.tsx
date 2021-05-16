import { HeartWrapper, Heart } from './styles';
import HeartIcon from '../../commons/icons/Heart';
import { LogoProps } from './types';

const LogoLoader = ({ size = 'md' }: LogoProps) => {
  return (
    <HeartWrapper>
      <Heart white size={size}>
        <HeartIcon />
      </Heart>
      <Heart size={size}>
        <HeartIcon />
      </Heart>
    </HeartWrapper>
  );
}

export default LogoLoader;