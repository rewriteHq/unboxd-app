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
import Notify from '../../utils/notify/notify';
import { WishList } from '../../typings';

interface ComponentProps {
  show: boolean;
  close: () => void;
  wishlist: WishList;
}

const copyUrl = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url);
    Notify.bottom('Copied to clipboard');
  } catch (err) {
    return err;
  }
};

const shareToFacebook = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const facebookSharer = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${title}`;

  window.open(facebookSharer, '_blank');
};

const shareToWhatsapp = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url + ' \n\n' + title);
  const whatsappSharer = `whatsapp://send?text=${encodedUrl}`;

  window.open(whatsappSharer, '_blank');
};

const shareToTwitter = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const twitterSharer = `https://www.twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  window.open(twitterSharer, '_blank');
};

const ShareEventModal = ({ show, close, wishlist }: ComponentProps) => {
  const eventUrl = `${process.env.REACT_APP_DOMAIN_NAME}${wishlist.slug}`;
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
          <ShareUrl>{eventUrl}</ShareUrl>
          <SocialOptions>
            <SocialIcon onClick={() => copyUrl(eventUrl)}>
              <CopyShare />
              Copy Link
            </SocialIcon>
            <SocialIcon
              onClick={() => shareToFacebook(eventUrl, wishlist.title)}
            >
              <FShare />
              Facebook
            </SocialIcon>
            <SocialIcon
              onClick={() => shareToWhatsapp(eventUrl, wishlist.title)}
            >
              <WShare />
              WhatsApp
            </SocialIcon>
            <SocialIcon
              onClick={() => shareToTwitter(eventUrl, wishlist.title)}
            >
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
