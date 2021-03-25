import React from 'react';
import styled from 'styled-components';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';
import { PlainButton } from '../../../../../components/Button/styles';
import Modal from '../../../../../components/Modal';
import Colors from '../../../../../constants/Colors';
import { ShareText, ShareUrl, SocialIcon, SocialOptions } from '../styles';

interface ComponentProps {
  show: boolean;
  close: () => void;
}

const ShareEventModal = ({ show, close }: ComponentProps) => {
  return (
    <Modal show={show} onClose={close}>
      <Modal.Bottom>
        <ShareWrapper>
          <SpaceBetween align="center">
            <h2>Share</h2>
            <PlainButton underlined onClick={close}>
              Close
            </PlainButton>
          </SpaceBetween>
          <ShareText>Let your loved ones know what exactly you need</ShareText>
          <ShareUrl>
            unboxd.gifts/a-new-beginning-with-the-love-of-my-life
          </ShareUrl>
          <SocialOptions>
            <SocialIcon>
              <span className="image" />
              Copy Link
            </SocialIcon>
            <SocialIcon>
              <span className="image" />
              Facebook
            </SocialIcon>
            <SocialIcon>
              <span className="image" />
              WhatsApp
            </SocialIcon>
            <SocialIcon>
              <span className="image" />
              Twitter
            </SocialIcon>
          </SocialOptions>
        </ShareWrapper>
      </Modal.Bottom>
    </Modal>
  );
};

export default ShareEventModal;

const ShareWrapper = styled.div`
  background: ${Colors.white};
  padding: 20px 40px;
`;
