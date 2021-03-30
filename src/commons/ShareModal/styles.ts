import styled, { css } from 'styled-components';
import { Copy, Facebook, Twitter, Whatsapp } from '@styled-icons/icomoon';
import { PlainButton } from '../../components/Button/styles';
import Colors from '../../constants/Colors';

export const ShareWrapper = styled.div`
  background: ${Colors.white};
  padding: 20px 40px;
`;

export const ShareText = styled.p`
  width: 70%;
  margin: 1rem 0 1.5rem;
  color: ${Colors.darkGrey};
`;

export const ShareUrl = styled.p`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 1rem 0.5rem;
  background: #f7f7f7;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      270deg,
      #f7f7f7 0%,
      rgba(247, 247, 247, 0) 100%
    );
    width: 100%;
    height: 100%;
  }
`;

export const SocialOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialIcon = styled(PlainButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  font-size: 0.8rem;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${Colors.grey};
    margin-bottom: 0.5rem;
  }
`;

const socialIconImage = css`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: ${Colors.grey};
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  color: ${Colors.white};
`;

export const FShare = styled(Facebook)`
  ${socialIconImage}
  background: #1877F2;
`;

export const WShare = styled(Whatsapp)`
  ${socialIconImage}
  background: linear-gradient(53.56deg, #22B139 3.54%, #5FD569 99.84%);
`;

export const TShare = styled(Twitter)`
  ${socialIconImage}
  background: #1DA1F2;
`;

export const CopyShare = styled(Copy)`
  ${socialIconImage}
  background: ${Colors.green}
`;
