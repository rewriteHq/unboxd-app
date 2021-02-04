import { HeadWrapper } from './styles';
import { HeaderComponentProps } from './types';

const Header = () => {
  return (
    <HeadWrapper>
      <div className="container">
        <h2>Unbox'd</h2>
        <p>Got account? Sign in</p>
      </div>
    </HeadWrapper>
  );
};

export default Header;
