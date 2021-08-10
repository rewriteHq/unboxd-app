import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarWrapper, NavLookLink } from './styles';
import { ReactComponent as WalletIcon } from '../../assets/img/icons/wallet.svg';
import { ReactComponent as HeartIcon } from '../../assets/img/icons/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/img/icons/user.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/icons/settings.svg';
// import { ReactComponent as FacebookIcon } from '../../assets/img/icons/facebook.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/img/icons/whatsapp.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/twitter.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/icons/logout.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'modules/auth/pages/Login/redux/actions';

const DashboardSidebar: React.FC = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutUser());

  return (
    <SidebarWrapper>
      <nav className="main-nav">
        <NavLink to="/wallet" activeClassName="activeLink">
          <WalletIcon />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="/dashboard" activeClassName="activeLink">
          <HeartIcon />
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeLink">
          <UserIcon />
          <span>Edit Profile</span>
        </NavLink>
        <NavLink to="/settings" activeClassName="activeLink">
          <SettingsIcon />
          <span>Settings</span>
        </NavLink>
        <NavLookLink className="logout" onClick={logout}>
          <LogoutIcon />
          <span>Logout</span>
        </NavLookLink>
        <div className="nav-footer">
          <h3>Find unboxd online</h3>
          <div className="media-links">
            {/* <Link to="/">
              <FacebookIcon />
            </Link> */}
            <a href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
            </a>
            <a href="https://twitter.com/unboxdgifts" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </nav>
    </SidebarWrapper>
  );
};

export default DashboardSidebar;
