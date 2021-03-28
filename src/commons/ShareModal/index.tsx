import React from 'react';
import { SpaceBetween } from '../UtilityStyles/Flex';
import { PlainButton } from '../../components/Button/styles';
import Modal from '../../components/Modal';
import {
  ShareWrapper,
  ShareText,
  ShareUrl,
  SocialIcon,
  SocialOptions,
  FShare,
  WShare,
  TShare,
  CopyShare,
} from './styles';

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
              <CopyShare />
              Copy Link
            </SocialIcon>
            <SocialIcon>
              <FShare />
              Facebook
            </SocialIcon>
            <SocialIcon>
              <WShare />
              WhatsApp
            </SocialIcon>
            <SocialIcon>
              <TShare />
              Twitter
            </SocialIcon>
          </SocialOptions>
        </ShareWrapper>
      </Modal.Bottom>
    </Modal>
  );
};

export default ShareEventModal;