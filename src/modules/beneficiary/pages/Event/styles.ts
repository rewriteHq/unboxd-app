import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Plus } from '@styled-icons/icomoon';

import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';
import Sizes from '../../../../constants/Sizes';

const headlineFont = css`
  font-weight: bold;
  font-size: calc(${Sizes.twenty}px);
`;

export const ImageHolder = styled(BTN)`
  height: 30vh;
  background: ${Colors.grey};
  border-radius: 5px;
`;

export const EventCard = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 18px;
  overflow: hidden;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      #000000 2.57%,
      rgba(0, 0, 0, 0) 140.57%
    );
    z-index: 2;
  }
`;

export const EventCardContent = styled(SpaceBetween)`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0px;
  padding: 0 10px;
  align-items: flex-end;
  z-index: 3;
`;

export const WishlistHeader = styled.div`
  width: 100%;
  position: relative;
  height: 235px;
  border-radius: 28px;
  overflow: hidden;
  .list-header-content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  }
  img {
    width: 100%;
    height: 235px;
    object-fit: cover;
  }
`;

export const CopyLink = styled.div`
  min-width: 335px;
  max-width: 335px;
  background: ${(props) => props.theme.appSecondaryColor};
  color: ${Colors.yellow};
  height: 53px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 99;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: normal;
  p {
    position: relative;
    overflow: hidden;
    width: max-content;
    max-width: 70%;
    &::after {
      content: '';
      position: absolute;
      background: linear-gradient(
        270deg,
        rgba(22, 24, 29, 0.9) 20.33%,
        rgba(22, 24, 29, 0.5) 100.71%
      );
      width: 30px;
      height: 100%;
      right: 0;
      top: 0;
    }
  }
  .copy {
    color: #80ba7c;
  }
`;

export const WishlistHeaderEventDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  padding: 10px;
  span.days {
    color: #ffffff;
    background: #80ba7c;
    padding: 8px;
    border-radius: 10px;
    font-size: 13px;
  }
`;

export const CoverImage = styled.img`
  height: 25vh;
  width: 100%;
  object-fit: cover;
`;

export const CountDown = styled.div`
  background-color: ${Colors.green};
  padding: 0.4rem 0.7rem;
  font-size: 0.95rem;
  border-radius: 7.5px;
  text-align: center;
  white-space: nowrap;
`;

export const HeadlineInput = styled.textarea`
  border: none;
  background: transparent;
  padding: 1rem 0;
  width: 100%;
  color: ${Colors.white};
  ${headlineFont}

  &::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;

export const HeadlineText = styled.div`
  max-width: 60%;
  h2 {
    ${headlineFont};
  }
`;

export const ShareBox = styled.div`
  position: relative;
  padding: 1rem;
  background: ${Colors.darkNavy};
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 20%,
      ${Colors.darkNavy} 60%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .url {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .share-button {
    color: ${Colors.textGreen};
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
    padding: 0.5rem 1rem;
    font-size: ${Sizes.normal}px;
  }
`;

export const NeedText = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`;

export const GiftList = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
`;

export const AddIcon = styled(Plus)`
  color: ${Colors.green};
  width: 15px;
  height: 15px;
`;

export const AddItem = styled(Link)`
  border-radius: 50%;
  padding: 2rem;
  background-color: ${Colors.lightgreen};
  position: fixed;
  bottom: 10vh;
  right: 20px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);

  &::after {
    content: ' ';
    width: 70%;
    height: 70%;
    background: ${Colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

//Explainer Modal Styles

export const ExplainerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, white, rgba(255, 255, 255, 0.85));
  z-index: 3;
  padding: 0 20px;
`;

export const ExplainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
  background: ${Colors.white};
`;

export const ExplainerNav = styled.div<{ active?: boolean }>`
  background-color: transparent;
  opacity: ${({ active }) => (active ? '1' : '0.2')};
  font-size: 13px;
  padding: 0 10px;

  &:last-child {
    padding-right: 0;
  }
`;

export const ExplainerContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  padding-right: 20px;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    width: 70%;
    margin-bottom: 2.5rem;
  }
`;

export const ExplainerButton = styled.button`
  background: transparent;
  text-decoration: underline;
  font-size: 1rem;
`;
