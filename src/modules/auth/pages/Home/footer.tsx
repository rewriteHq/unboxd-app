import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo';

import { HomeFooter } from './styles';

const Footer: React.FC = () => {
  return (
    <HomeFooter>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>

        <div className="nav">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Terms of use</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </HomeFooter>
  );
};

export default Footer;
