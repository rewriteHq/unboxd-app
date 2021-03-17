import React from 'react';
import { Link } from 'react-router-dom';

import { HomeHeader } from './styles';

const Header: React.FC = () => {
  return (
    <HomeHeader>
      <div className="container">
        <h2>
          <Link to="/">unboxd</Link>
        </h2>
      </div>
    </HomeHeader>
  );
};

export default Header;
