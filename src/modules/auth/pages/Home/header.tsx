import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo';

import { HomeHeader } from './styles';

const Header: React.FC = () => {
  return (
    <HomeHeader>
      <div className="container">
        <h2>
          <Link to="/">
            <Logo />
          </Link>
        </h2>
      </div>
    </HomeHeader>
  );
};

export default Header;
