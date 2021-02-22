import styled from 'styled-components';
import Sizes from '../../constants/Sizes';

export const HeadWrapper = styled.header`
  display: flex;
  height: 70px;
  .container {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Auth = styled.p`
  font-size: calc(${Sizes.small}px + 1px);

  a {
    font-weight: ${Sizes.mediumWeight};
  }
`;
