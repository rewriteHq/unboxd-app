import Styled from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';
import { FooterWrapper } from '../../../../components/Footer/styles';
import Colors from '../../../../constants/Colors';
import Fonts from '../../../../constants/Fonts';
import Image from '../../../../assets/img/unboxd-banner-lg.png';
import SmImage from '../../../../assets/img/unboxd-banner-sm.png';
import { Link } from 'react-router-dom';

export const HomeHeader = Styled(HeadWrapper)`
  padding: 3rem 0;
  .container {
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 75%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const HomeFooter = Styled(FooterWrapper)`
  padding: .5rem 0;
  opacity: 0.75;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      a {
        margin: 0 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;

    .container {
      flex-direction: row;
      justify-content: space-between;
  
      .nav {
        display: flex;
        align-items: center;
        margin-top: 0;
        margin-right: 2rem;
  
        a {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export const NavSide = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Nav = Styled.nav`
  display: flex;
  align-items: center;

  a {
    margin: 0 1rem;

    &:not(:last-child) {
      display: none;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    a {
      &:first-child {
        display: flex;
      }
    }
  }
`;

export const Paragraph = Styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  opacity: 0.75;

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 1.5rem auto;
  }
`;

export const ListingLink = Styled(Link)`
    text-decoration: none;
    background-color: #fff;
    color: #16181D;
    padding: 8px 20px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;
    box-shadow: -1px 2px 5px #fff;
    font-weight: 700;
    z-index: 10;
`;

export const ListingsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 3rem;
    z-index: 10;
`;

export const Container = Styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
`;

export const UnbxodHeading = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    p {
      font-family: ${Fonts.tertiary};
      font-size: 25px;
      z-index: 10;
    }
`;

export const GradientWrapper = Styled.div`


  position: relative;

&::before{
  content: '';
  position: absolute;
  width: 100vw;
  max-width: 100vw;
  margin: 0 calc(-50vw + 50%);
  height: 100%;
  bottom: 0;
}

&::before {
  background-image: linear-gradient(#16181d 15%, #4e9060);
}

`;

export const HowItWorksContent = Styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;   
    grid-gap: 20px;
    margin-top: 5rem;


    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .imageWrapper {
        display: none;
        

        @media (min-width: 768px) {
        display: block;
        grid-column: 1/2;
        position: relative;
    }
    
        
    }

    .img {
        position: absolute;
    }

    .img-1 {
        left: 1rem;
        z-index: 3;
        width: 60%;
    }
    .img-2 {
        z-index: 2;
        left: 10rem;
        top: 1rem;
        width: 50%;
    }
    
    .img-3 {
        z-index: 1;
        left: 17rem;
        top: 2rem;
        width: 40%;
    }

    .contentWrapper {
      width: 100%;  
      grid-column: 1/-1;
      text-align: center;
      
        

        @media (min-width: 768px) {

        grid-column: 2/3;
        width: 90%;   
        display: flex;
        flex-direction: column;
        margin-left: 7rem; 
        margin-top: 5rem; 
        text-align: left;
    }

        .content {
            display: none;
        }

        .active-content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: min-content min-content 5rem; 
        }

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

        .spanContainer {
          display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 768px) {
              justify-content: flex-start;
            }
        }
    }

`;

export const Button = Styled.button`
    background-color: transparent;
    margin-right: 10px;
    margin-top: 25px;

    .circleBTN {
      width: 7px;
      min-width: 12px;
      height: 12px;
      border-radius: 50%;
      opacity: 0.5;
      background: ${Colors.tintOrange};
      color: ${Colors.burntOrange};
    }

    .btn-active {
      width: 10px;
      min-width: 15px;
      height: 15px;
      opacity: 1;
    }
`;

export const UnorderedList = Styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  li {
    margin: 0.5rem 0.5rem 2rem;
    display: flex;
    align-items: flex-start;
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
    margin: 2rem -2rem 1rem;
    flex-direction: row;
    justify-content: space-between;

    li {
      flex: 0 0 30%;
    }
  }
  @media (min-width: 890px) {
    margin-left: -4rem;
    margin-right: -4rem;
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
    width: 25%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
  &::before {
    left: -1px;
    background: linear-gradient(to right, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
  }
  &::after {
    right: -1px;
    background: linear-gradient(to left, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
  }
  .carousel-tab {
    margin: 1.5rem 0;
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
        background: linear-gradient(to right, rgba(22, 24, 29, 0.8), rgba(34, 36, 44, 0.1));
      }
      &::after {
        right: 0;
        background: linear-gradient(to left, rgba(22, 24, 29, 0.8), rgba(34, 36, 44, 0.1));
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
    height: 90%;
    background: linear-gradient(to top, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
    z-index: 2;
  }
  @media (min-width: 780px) {
    max-height: 45vh;
    margin-top: 1rem;
    .carousel-tab {
      margin: 4rem 0;
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

export const UnboxdCarouselBottom = Styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 1rem; */
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -10px;
  max-height: 45vh;
  z-index: 10;
 
  width: 100vw;
  max-width: 100vw;
  margin: 0 calc(-50vw + 50%);
 
  
  position: relative;
  overflow: hidden;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
  &::before {
    left: -1px;
    /* background: linear-gradient(to right, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0)); */
  }
  &::after {
    right: -1px;
    /* background: linear-gradient(to left, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0)); */
  }
  .carousel-tab {
    margin: 1.5rem 0;
    ul {
      display: flex;
      width: 100%;
      overflow: hidden;
      justify-content: center;
     
      .list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
        white-space: nowrap;
        font-family: ${Fonts.secondary};
        color: ${Colors.burntOrangeLite};
        opacity: 0.133;
        &.active {
          color: ${Colors.burntOrangeLite};
          padding: 5px 10px;
          border-radius: 7.5px;
          opacity: 1;
        }
      }
    }
  }
  .carousel {
    display: flex;
    height: 330px;
    background-size: 650px;
    background-repeat: repeat-x;
    background-position: top center;
    width: 4800px;
    -webkit-animation: scroll-grid 180s linear infinite;
    animation: scroll-grid 180s linear infinite;
  }
  .bottom-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90%;
    z-index: 2;
  }
  @media (min-width: 780px) {
    max-height: 45vh;
    .carousel-tab {
      ul {
        &::before, &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
        .list-item {
          font-size: 30px;
          letter-spacing: 5px;
          margin: 0 0.95rem;
        }
      }
    }
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

  a {
    max-width: 420px;
    margin: 0 auto;
  }

  @media (min-width: 780px) {
    padding: 0 10rem;
    bottom: 5rem
  }
`;

export const HowItWorks = Styled.div`
  display: flex;
  margin: 10rem auto;

  .contentContainer {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`;

export const StatisticWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 780px) {
      flex-direction: row;
  }

    .stat-item {
      margin-bottom: 35px;
      z-index: 10;

        @media (min-width: 780px) {
          margin-left: 40px;
      }

      .stat-text {
        text-align: center;
        z-index: 10;
      }

    }

    .stat-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    
`;
// center HERE
export const CenterContent = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    z-index: 10;
    

    @media (min-width: 780px) {
      margin: 10rem 0 8rem;
  }

    p {
        margin-top: 5px;
        font-size: 22px;
        text-align: center;
        z-index: 10;

        @media (min-width: 780px) {
          width: 50%;
      }
        
    }

`;

export const StatsArea = Styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${Colors.green};
  margin-top: 1rem;
  margin-left: -20px;
  margin-right: -20px;
  
  .contentContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content-stat {
      ul {
        li {
          display: flex;
          flex-direction: column;
          margin: 1rem;
          h1 {
            font-size: 35px;
            margin-bottom: 0.45rem;
          }
        }
      }
    }

    .image-stat {
      display: none;
    }
  }

  @media (min-width: 425px) {
    .contentContainer {
      flex-direction: column;
      .content-stat {
        ul {
          display: flex;
          margin: 0 auto;
          flex-wrap: wrap;
          li {
            flex: 0 0 40%;
          }
        }
      }
    }
  }
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 3rem 2rem;
    margin-top: 2rem;

    .contentContainer {
      flex-direction: row;

      h1 { 
        text-align: left;
      }

      .content-stat {
        flex: 0 0 50%;
        ul {
          flex-direction: column;

          li {
            flex: 1;
          }
        }
      }

    }
  }

  @media (min-width: 890px) {
    margin-left: -4rem;
    margin-right: -4rem;
    margin-top: 4rem;
  }
`;

export const FindOnline = Styled.div`
  margin: 1rem auto;
`;

export const SocialIcon = Styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  background: ${Colors.white};
  border-radius: 17px;
  color: ${Colors.black};
  font-size: 0.5rem;
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 0.4rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const StepTitle = Styled.h3`
  font-size: 24px;
  margin: 1rem 0;
`;

export const StepContent = Styled.p`
  font-size: 16px;
`;
