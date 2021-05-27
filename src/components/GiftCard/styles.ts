import Styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Card = Styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.darkNavy};
  border-radius: 5px;
  overflow: hidden;
  min-width: 110px;
  max-width: 100%;
  margin-bottom: 5px;
  cursor: pointer;

  .img-holder {
    width: 100%;
    height: 110px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 110px;
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
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 1rem;

      .amount-raised {
        font-size: 12px;
        font-weight: 300;
      }

      .progress-circle {
        display: none;
      }
    }
  }

  @media (min-width: 320px) {
    min-width: 130px;

    .img-holder {
      height: 136px;
  
      img {
        height: 136px;
      }
    }
  }

  @media (min-width: 375px) {
    min-width: 155px;

    .img-holder {
      height: 145px;
  
      img {
        height: 145px;
      }
    }

    .card-content {
      .progress {
        justify-content: space-between;
  
        .progress-circle {
          display: flex;
        }
      }
    }
  }
  
  @media (min-width: 425px){
    min-width: 180px;
  }

  @media(min-width: 768px) {
    min-width: 170px;
  }
`;
