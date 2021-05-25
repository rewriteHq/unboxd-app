import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import AppWrapper from '../../AppWrapper';
import { ContributorHeaderWrapper, AppMenu } from './styles';
import { ReactComponent as ShareIcon } from '../../../assets/img/icons/share.svg';

const ContributorHeader = () => {
  return (
    <ContributorHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Logo />
          <AppMenu>
            <Link to="/share"><ShareIcon />Share feedback</Link>
            <Link to="/about">About Unboxd</Link>
          </AppMenu>
        </div>
      </AppWrapper>
    </ContributorHeaderWrapper>
  );
};

export default ContributorHeader;