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
    z-index: 4;
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
  min-width: 93.7%;
  max-width: fit-content;
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
  cursor: pointer;
  p {
    position: relative;
    overflow: hidden;
    width: max-content;
    max-width: 70%;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    cursor: pointer;
  }
  @media (min-width: 767px) {
    min-width: 335px;
    max-width: 335px;
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

export const WishlistGrid = styled.div`
  margin-top: 2rem;
`;
