import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import Bell from '../../icons/Bell';
import Wallet from '../../icons/Wallet';
import Sidebar from '../../Sidebar';
import { Hamburger, HeaderLeft, HeaderRight } from './styles';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <>
      <HeaderLeft>
        <Hamburger onClick={toggleSidebar} className="marg-r">
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </Hamburger>
        <Logo size="sm" />
      </HeaderLeft>

      <HeaderRight>
        <Link to="/wallet" className="marg-r">
          <Wallet />
        </Link>
        <Link to="/notifications" className="marg-r">
          <Bell />
        </Link>
      </HeaderRight>
      <Sidebar show={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Home;
