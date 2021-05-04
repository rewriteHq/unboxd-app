import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../commons/Logo';

import { HomeHeader } from '../pages/Home/styles';

const Header: React.FC = () => {
  return (
    <HomeHeader>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </HomeHeader>
  );
};

export default Header;