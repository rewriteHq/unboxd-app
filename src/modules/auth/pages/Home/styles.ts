import Styled from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';

export const HomeHeader = Styled(HeadWrapper)`
  .container {
    justify-content: center;
  }
`;

export const Paragraph = Styled.p`
  font-size: 22px;
  margin: 1rem 0;
`;

export const Image = Styled.div`
  background-color: #C4C4C4;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem auto 3rem;
`;
