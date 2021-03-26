import Styled from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';

export const HomeHeader = Styled(HeadWrapper)`
padding: 2rem 0;
  .container {
    justify-content: center;
  }
`;

export const Paragraph = Styled.p`
  font-size: 22px;
  margin: 1rem 0;
`;

export const Image = Styled.img`
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  position: relative;

  &::before {
    content: 'What is going on?';
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
    background: linear-gradient(240.57deg, #B2FA28 -0.36%, #ddd 98.42%);
    z-index: 10;
  }
`;
