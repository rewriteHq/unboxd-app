import Styled from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';
import Colors from '../../../../constants/Colors';
import Image from '../../../../assets/img/unboxd-banner-lg.png';
import SmImage from '../../../../assets/img/unboxd-banner-sm.png';


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

export const UnorderedList = Styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  li {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      min-width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 1rem;
      background: ${Colors.tintOrange};
      color: ${Colors.burntOrange};
    }
  }
  @media (min-width: 768px) {
    width: 55%;
    margin: 2rem auto 1rem;
  }
`;

export const UnboxdCarousel = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -10px;
  max-height: 45vh;
  position: relative;
  overflow: hidden;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
  &::before {
    left: -1px;
    background: linear-gradient(to right, rgba(34, 36, 44, 1), rgba(34, 36, 44, 0));
  }
  &::after {
    right: -1px;
    background: linear-gradient(to left, rgba(34, 36, 44, 1), rgba(34, 36, 44, 0));
  }
  .carousel {
    display: flex;
    height: 330px;
    background-size: 650px;
    background-repeat: repeat-x;
    background-position: top center;
    background-image: url(${SmImage});
    width: 4800px;
    -webkit-animation: scroll-grid 180s linear infinite;
    animation: scroll-grid 180s linear infinite;
  }
  .bottom-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to top, rgba(34, 36, 44, 1), rgba(34, 36, 44, 0));
    z-index: 2;
  }
  @media (min-width: 780px) {
    max-height: 45vh;
    margin-top: 0;
    .carousel {
      height: 500px;
      background-size: 1420px;
      width: 5260px;
      margin-top: 2rem;
      background-image: url(${Image});
    }
  }
  @-webkit-keyframes scroll-grid {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-2420px, 0, 0);
        transform:translate3d(-2420px, 0, 0)
    }
  }
  @keyframes scroll-grid {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-2420px, 0, 0);
        transform:translate3d(-2420px, 0, 0)
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

  button {
    max-width: 420px;
    margin: 0 auto;
  }

  @media (min-width: 780px) {
    padding: 0 10rem;
    bottom: 5rem
  }
`;
