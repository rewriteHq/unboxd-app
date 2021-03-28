import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';
import Sizes from '../../../../constants/Sizes';

export const ImageHolder = styled(BTN)`
  height: 30vh;
`;

export const CoverAndTime = styled.div`
  position: relative;
  margin: 0 -20px;
`;

export const CoverImage = styled.img`
  height: 25vh;
  width: 100%;
  object-fit: cover;
`;

export const CountDown = styled.div`
  background-color: ${Colors.lightgreen};
  position: absolute;
  bottom: -5px;
  right: 20px;
  padding: 0.7rem 1rem;
  font-size: 0.85rem;
  border-radius: 7.5px;
  text-align: center;

  p {
    font-size: 1.1rem;
  }

  span {
    color: ${Colors.darkGrey};
  }
`;

const headlineFont = css`
  font-weight: bold;
  font-size: 25px;
`;

export const HeadlineInput = styled.textarea`
  border: none;
  padding: 1rem 0;
  width: 100%;
  ${headlineFont}

  &::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;

export const HeadlineText = styled.div`
  padding: 1.5rem 0 2rem;

  h2 {
    ${headlineFont};
  }
`;

export const ShareBox = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 10px;
  width: 100%;

  &::before {
    content: '';
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 1) 60%
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
    font-weight: ${Sizes.mediumWeight};
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

export const AddItem = styled(Link)`
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  box-shadow: 0px 11px 16px rgba(0, 0, 0, 0.15);
  background-color: ${Colors.lightgreen};
  border: 1px solid #cefabb;
  position: fixed;
  bottom: 10vh;
  right: 50%;
  transform: translateX(50%);
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '+';
    margin-left: 10px;
    font-size: 1.4rem;
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
