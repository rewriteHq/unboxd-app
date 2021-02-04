import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ pageTitle, showBack, navItems }) => {
  const history = useHistory();
  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.goBack();
  };

  const renderNavItems = () => {
    return navItems?.map((Items) => {
      return <Items />;
    });
  };

  return (
    <Head>
      {showBack ? (
        <a href="/" onClick={goBack}>
          ←
        </a>
      ) : (
        <Link to="/">Go home</Link>
      )}
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <Nav>{renderNavItems()}</Nav>
    </Head>
  );
};

const Head = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 20px;
`;

const HeaderTitle = Styled.h2`
    margin: 0 auto;
`;

const Nav = Styled.nav`
    display: flex;
    a {
        font-weight: 400;
        font-size: 13px;
    }
`;

export default Header;
