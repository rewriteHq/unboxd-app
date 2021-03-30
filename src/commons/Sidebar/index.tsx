import { Facebook, Instagram, Twitter } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';
import {
  CloseButton,
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
      <CloseButton onClick={onClose} />
      <NavLinks>
        <NavItem>
          <Link to="/dashboard">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/archive">Archive</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile/edit">Edit Profile</Link>
        </NavItem>
        <NavItem>
          <Link to="/settings">Settings</Link>
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
