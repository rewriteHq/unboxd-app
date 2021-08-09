import { BTNLink } from 'components/Button/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalStoreState } from 'store/types';
import Logo from '../../../../components/Logo';

import { HomeHeader, Nav } from './styles';

const Header: React.FC = () => {
  const { authenticated } = useSelector((state: GlobalStoreState) => state.user);
  return (
    <HomeHeader>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <Link to="/faq">FAQs</Link>
          <BTNLink small to={authenticated ? "/dashboard" : "/login"}>{authenticated ? 'Dashboard' : 'Login'}</BTNLink>
        </Nav>
      </div>
    </HomeHeader>
  );
};

export default Header;
