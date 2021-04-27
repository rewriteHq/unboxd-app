import { Facebook, Instagram, Twitter } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';
import { PlainButton } from '../../components/Button/styles';
import Close from '../icons/Close';
import Heart from '../icons/Heart';
import Home from '../icons/Home';
import Send from '../icons/Send';
import Settings from '../icons/Settings';
import User from '../icons/User';
import {
  FindOnline,
  NavItem,
  NavLinks,
  SideBarWrapper,
  SocialIcon,
} from './styles';

type ComponentProps = {
  show: boolean;
  onClose: () => void;
};

const Sidebar = ({ show, onClose }: ComponentProps) => {
  return (
    <SideBarWrapper show={show}>
      <PlainButton onClick={onClose}>
        <Close />
      </PlainButton>
      <NavLinks>
        <NavItem>
          <Link to="/dashboard">
            <Home />
            <span>Home</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/wishlist">
            <Heart />
            <span>Wishlist</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/profile/edit">
            <User />
            <span>Edit Profile</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/settings">
            <Settings />
            <span>Settings</span>
          </Link>
        </NavItem>
      </NavLinks>

      <NavItem>
        <Link to="/share">
          <Send />
          <span>Share feedback</span>
        </Link>
      </NavItem>

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
