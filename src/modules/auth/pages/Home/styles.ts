import Styled from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';
import Colors from '../../../../constants/Colors';

export const HomeHeader = Styled(HeadWrapper)`
padding: 3rem 0;
  .container {
    justify-content: center;
  }
`;

export const Paragraph = Styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1rem 0;
  opacity: 0.75;

  @media (min-width: 780px) {
    font-size: 24px;
    max-width: 414px;
    margin: 1rem auto;
  }
`;

export const Image = Styled.img`
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    background: linear-gradient(240.57deg, #B2FA28 -0.36%, #ddd 98.42%);
    z-index: 10;
  }
`;

export const UnboxdCarousel = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -10px;
  max-height: 58vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to top, rgba(34, 36, 44, 1), rgba(34, 36, 44, 0));
    z-index: 2;
  }

  .carousel-tab {
    margin: 0.5rem 0;

    ul {
      display: flex;
      width: 100%;
      overflow: hidden;
      justify-content: center;
      position: relative;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 15%;
        height: 100%;
        top: 0;
      }

      &::before {
        left: 0;
        background: linear-gradient(to right, rgba(34, 36, 44, 0.8), rgba(34, 36, 44, 0.1));
      }

      &::after {
        right: 0;
        background: linear-gradient(to left, rgba(34, 36, 44, 0.8), rgba(34, 36, 44, 0.1));
      }

      .list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
        white-space: nowrap;
        color: ${Colors.tintOrange};

        &.active {
          background: ${Colors.tintOrange};
          color: ${Colors.burntOrange};
          padding: 5px 10px;
          border-radius: 7.5px;
        }
      }
    }
  }

  .carousel {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    gap: 1rem;
    justify-content: center;
    margin: 1rem 0 0;

    .card {
      display: flex;
      flex-direction: column;
      background: ${Colors.black};
      border: 0.5px solid ${Colors.tintGrey};
      border-radius: 5px;
      overflow: hidden;

      .img-holder {
        width: 100%;
        height: 166px;
        overflow: hidden;
        position: relative;
        top: -1px;

        img {
          width: 100%;
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
    }
  }

  @media (min-width: 780px) {
    max-height: 65vh;
    
    .carousel-tab {
      margin: 1rem 0;

      ul {
        &::before, &::after {
          content: '';
          position: absolute;
          width: 31%;
          height: 100%;
          top: 0;
        }

        .list-item {
          font-size: 18px;
          margin: 0 0.95rem;
        }
      }
    }

    .carousel {
      grid-template-columns: repeat(3, 235px);
      gap: 1.15rem;
      margin-top: 2rem;

      .card {
        .img-holder {
          height: 200px;
        }

        .card-content {
          padding: 1.5rem; 

          .name {
            font-size: 20px
          }

          .price {
            font-size: 24px
          }

          .progress {
            .amount-raised {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`;

export const GetStarted = Styled.div`
  position: absolute;
  bottom: 3.5rem;
  display: flex;
  width: 100%;
  padding: 0 2rem;
  z-index: 3;

  @media (min-width: 780px) {
    padding: 0 10rem;
    bottom: 5rem
  }
`;
