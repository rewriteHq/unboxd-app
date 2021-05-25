import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import Sidebar from '../../Sidebar';
import { Hamburger } from './styles';
import Wallet from '../../icons/Wallet';
import Bell from '../../icons/Bell';
import { SpaceBetweenHeader } from '../../UtilityStyles/Flex';

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <>
      <Hamburger onClick={toggleSidebar}>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </Hamburger>
      <Logo size="sm" />
      <SpaceBetweenHeader>
        <Link to="/wallet" className="marg-r">
          <Wallet />
        </Link>
        <Link to="/notiications">
          <Bell />
        </Link>
      </SpaceBetweenHeader>

      <Sidebar show={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Main;
