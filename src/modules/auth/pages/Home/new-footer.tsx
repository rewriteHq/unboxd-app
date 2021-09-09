import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from '@styled-icons/icomoon';
import Logo from '../../../../components/Logo';

import { HomeFooter, FindOnline, SocialIcon, NavSide } from './new-styles';

const NewFooter: React.FC = () => {
  return (
    <HomeFooter>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>

        <NavSide>
          <div className="nav">
            <Link to="/faq">FAQs</Link>
            <Link to="/terms">Terms of use</Link>
            <Link to="/privacy" className="hide-mobile">
              Privacy Policy
            </Link>
          </div>

          <FindOnline>
            <div className="socials">
              {/* <SocialIcon href="https://www.facebook.com/unboxdgifts">
            <Facebook />
          </SocialIcon> */}
              <SocialIcon href="https://www.twitter.com/unboxdgifts">
                <Twitter />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/unboxdgifts">
                <Instagram />
              </SocialIcon>
            </div>
          </FindOnline>
        </NavSide>
      </div>
    </HomeFooter>
  );
};

export default NewFooter;
