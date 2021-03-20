import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import Colors from '../../../../constants/Colors';

export const ImageHolder = styled(BTN)`
  height: 30vh;
`;

export const CoverAndTime = styled.div`
  position: relative;
`;

export const CoverImage = styled.img`
  height: 30vh;
  width: 100%;
  object-fit: cover;
`;

export const CountDown = styled.div`
  background-color: ${Colors.black};
  color: ${Colors.white};
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 0.3rem 0.6rem;
  font-size: 0.7rem;
  border-radius: 30px;
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
  padding: 1rem 0 1.5rem;
  border-bottom: 1px solid ${Colors.lightGrey};

  h2 {
    ${headlineFont};
    margin-bottom: 0.5rem;
  }
`;

export const GiftList = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;
`;

export const AddItem = styled(Link)`
  border-radius: 50%;
  padding: 1.5rem 1.8rem;
  background-color: ${Colors.grey};
  position: fixed;
  bottom: 10vh;
  right: 20px;
  z-index: 3;
`;
