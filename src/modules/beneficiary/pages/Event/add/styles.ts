import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../../../../constants/Colors';

export const Explainer = styled.div`
  width: 50%;
  position: fixed;
  bottom: 20vh;
  right: 40px;
  z-index: 3;

  h3 {
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const GiftThumb = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${Colors.navy};
  border-radius: 10px;
  height: 270px;
  min-width: 230px;
  margin: 0.5rem;
  position: relative;
`;

const thumbImageStyle = css`
  width: 100%;
  height: 55%;
`;

export const GiftThumbImage = styled.img`
  ${thumbImageStyle}
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const EmptyThumbImage = styled.div`
  ${thumbImageStyle}
  width: calc(100% - 0.5rem);
  margin: 0.25rem auto;
  background-color: ${Colors.darkNavy};
  border-radius: 10px 10px 0 0;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    color: ${Colors.grey};
    margin-top: 10px;
  }
`;
