import styled from 'styled-components';
import Colors from '../../../constants/Colors';

export const WelcomeWrapper = styled.div`
  background: ${Colors.white};
  font-size: 1.2rem;
`;

export const WelcomeHead = styled.div`
  background: ${Colors.paleblue};
  padding: 2rem;
  display: flex;
  align-items: center;
  .name {
    margin-left: 1rem;
  }
`;

export const WelcomeBody = styled.div`
  padding: 2rem 2rem 1rem;

  .hello {
    margin-bottom: 1.5rem;
  }
`;
