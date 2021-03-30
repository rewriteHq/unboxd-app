import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import Sidebar from '../../Sidebar';
import { Hamburger, WalletBubble } from './styles';

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
      <Link to="/wallet">
        Wallet
        <WalletBubble>0</WalletBubble>
      </Link>
      <Sidebar show={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Main;
