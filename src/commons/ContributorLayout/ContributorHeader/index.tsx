import { Link, useHistory, useParams } from 'react-router-dom';
import Logo from '../../../components/Logo';
import AppWrapper from '../../AppWrapper';
import { ContributorHeaderWrapper, AppMenu } from './styles';

type ParamTypes = {
  username: string;
  slug: string;
};

const ContributorHeader = () => {
  const history = useHistory();
  const { username, slug } = useParams<ParamTypes>();
  const LogoClick = () => history.push(`/${username}/${slug}`);

  return (
    <ContributorHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Logo click={LogoClick} />
          <AppMenu>
            <Link to="/about">About Unboxd</Link>
          </AppMenu>
        </div>
      </AppWrapper>
    </ContributorHeaderWrapper>
  );
};

export default ContributorHeader;