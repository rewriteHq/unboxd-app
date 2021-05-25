import Styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Card = Styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.darkNavy};
  border-radius: 5px;
  overflow: hidden;
  width: 180px;
  max-width: 200px;
  margin-bottom: 20px;

  .img-holder {
    width: 100%;
    height: 166px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 166px;
      object-fit: cover;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .name {
      font-size: 14px;
      font-weight: 100;
      padding-bottom: 0.25rem;
    }

    .price {
      font-size: 16px;
    }

    .progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;

      .amount-raised {
        font-size: 12px;
        font-weight: 300;
      }

      .progress-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${Colors.tintOrange};
      }
    }
  }
  @media(min-width: 768px) {
    width: 170px;
  }
  @media (min-width: 160px) and (max-width: 320px) {
    width: 100%;
    max-width: fit-content;
  }
  @media (min-width: 330px) and (max-width: 550px) {
    width: 180px;
  }
  @media (min-width: 560px) and (max-width: 768px) {
    width: 170px;
  }
`;
