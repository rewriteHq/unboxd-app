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
        <NavItem key={shortid.generate()}>
          <Item />
        </NavItem>
      );
    });
  };

  return (
    <Head>
      {showBack ? (
        <a href="/" onClick={goBack} className="back-arrow">
          ←
        </a>
      ) : (
        <Link to="/">Go home</Link>
      )}
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <Nav>
        <NavList>{renderNavItems()}</NavList>
      </Nav>
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
  a {
    font-weight: 400;
    font-size: 13px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  padding: 0 10px;

  &:last-child {
    padding-right: 0;
  }
`;

export default Header;
