import { Facebook, Instagram, Twitter } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';
import {
  FindOnline,
  NavItem,
  NavLinks,
  SideBarWrapper,
  SocialIcon,
} from './styles';
import { ReactComponent as CloseIcon } from '../../assets/img/icons/close.svg';
import { ReactComponent as WalletIcon } from '../../assets/img/icons/wallet.svg';
import { ReactComponent as HeartIcon } from '../../assets/img/icons/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/img/icons/user.svg';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/icons/settings.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/icons/logout.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'modules/auth/pages/Login/redux/actions';

type ComponentProps = {
  show: boolean;
  onClose: () => void;
};

const Sidebar = ({ show, onClose }: ComponentProps) => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutUser());
  return (
    <SideBarWrapper show={show}>
      <CloseIcon onClick={onClose} />
      <NavLinks>
        <NavItem>
          <HomeIcon />
          <Link to="/dashboard">Home</Link>
        </NavItem>
        <NavItem>
          <HeartIcon />
          <Link to="/dashboard">Wishlist</Link>
        </NavItem>
        <NavItem>
          <WalletIcon />
          <Link to="/wallet">Wallet</Link>
        </NavItem>
        <NavItem>
          <UserIcon />
          <Link to="/profile">Edit Profile</Link>
        </NavItem>
        <NavItem>
          <SettingsIcon />
          <Link to="/settings">Settings</Link>
        </NavItem>
        <NavItem className="logout" onClick={logout}>
          <LogoutIcon />
          <p>Logout</p>
        </NavItem>
      </NavLinks>
      <FindOnline>
        <p>Find unboxd online</p>
        <div className="socials">
          <SocialIcon href="https://www.facebook.com">
            <Facebook />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com">
            <Instagram />
          </SocialIcon>
        </div>
      </FindOnline>
    </SideBarWrapper>
  );
};

export default Sidebar;
