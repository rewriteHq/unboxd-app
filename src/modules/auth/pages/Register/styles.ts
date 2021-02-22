import styled from 'styled-components';
import Sizes from '../../../../constants/Sizes';

export const Main = styled.div`
  display: flex;

  .container {
    flex-direction: column;
    min-height: 80vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Auth = styled.p`
  font-size: calc(${Sizes.small}px + 1px);

  a {
    font-weight: ${Sizes.mediumWeight};
  }
`;
