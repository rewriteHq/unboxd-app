import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import Logo from '../../../components/Logo';
import AppWrapper from '../../AppWrapper';
import { ContributorHeaderWrapper, AppMenu, Span } from './styles';

type ParamTypes = {
  username: string;
  slug: string;
};

const ContributorHeader = () => {
  const history = useHistory();
  const { username, slug } = useParams<ParamTypes>();
  const path = window.location.pathname;
  const LogoClick = () => {
    slug ? history.push(`/${username}/${slug}`) : history.push('/')
  };

  const GoBack = () => history.goBack();

  return (
    <ContributorHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Logo click={LogoClick} />
          <AppMenu>
            {
              path === '/about' ? (
                <Span onClick={GoBack}>go back</Span>
              ) : (
                <Link to="/about">About Unboxd</Link>
              )
            }
          </AppMenu>
        </div>
      </AppWrapper>
    </ContributorHeaderWrapper>
  );
};

export default ContributorHeader;