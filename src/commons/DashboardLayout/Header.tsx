import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import styled from 'styled-components';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ pageTitle, showBack, navItems }) => {
  const history = useHistory();
  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.goBack();
  };

  const renderNavItems = () => {
    return navItems?.map((Item) => {
      return (
        <NavItem>
          <Item key={shortid.generate()} />
        </NavItem>
      );
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

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
`;

const HeaderTitle = styled.h2`
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  a {
    font-weight: 400;
    font-size: 13px;
  }
`;

const NavItem = styled.li`
  padding: 0 10px;

  &:last-child {
    padding-right: 0;
  }
`;

export default Header;
