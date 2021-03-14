import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../../../../constants/Colors';

export const AddItem = styled(Link)`
  border-radius: 50%;
  padding: 1.5rem 1.8rem;
  background-color: ${Colors.grey};
  position: fixed;
  bottom: 10vh;
  right: 20px;
  z-index: 3;
`;

export const Explainer = styled.div`
  width: 50%;
  position: fixed;
  bottom: 15vh;
  left: 40px;
  z-index: 3;

  h3 {
    margin-bottom: 5px;
  }
`;

export const GiftThumb = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 10px;
  overflow: hidden;
  height: 30vh;
`;

const thumbImageStyle = css`
  width: 100%;
  height: 70%;
`;

export const GiftThumbImage = styled.img`
  ${thumbImageStyle}
  object-fit: cover;
`;

export const EmptyThumbImage = styled.div`
  ${thumbImageStyle}
  background-color: ${Colors.lightGrey};
`;

export const GiftThumbList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
`;

export const GiftThumbText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0;

  .price {
    font-size: 1.1rem;
    margin-top: 5px;
  }
`;

export const Hold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
