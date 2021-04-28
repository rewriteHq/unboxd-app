import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { Head, HeaderTitle, Nav, NavItem, NavList } from './styles';
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

export default Header;
