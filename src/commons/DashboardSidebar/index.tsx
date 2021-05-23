import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SidebarWrapper } from './styles';
import { ReactComponent as WalletIcon } from '../../assets/img/icons/wallet.svg';
import { ReactComponent as HeartIcon } from '../../assets/img/icons/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/img/icons/user.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/icons/settings.svg';
import { ReactComponent as FacebookIcon } from '../../assets/img/icons/facebook.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/img/icons/whatsapp.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/twitter.svg';
import { ReactComponent as PlaneIcon } from '../../assets/img/icons/plane.svg';

const DashboardSidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <nav className="main-nav">
        <NavLink to="/wallet">
          <WalletIcon />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="/dashboard">
          <HeartIcon />
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/profile">
          <UserIcon />
          <span>Edit Profile</span>
        </NavLink>
        <NavLink to="/settings">
          <SettingsIcon />
          <span>Settings</span>
        </NavLink>
        <NavLink to="/" className="feedback">
          <PlaneIcon />
          <span>Share feedback</span>
        </NavLink>
        <div className="nav-footer">
          <h3>Find unboxd online</h3>
          <div className="media-links">
            <Link to="/">
              <FacebookIcon />
            </Link>
            <Link to="/">
              <WhatsappIcon />
            </Link>
            <Link to="/">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </nav>
    </SidebarWrapper>
  );
};

export default DashboardSidebar;
