import styled from 'styled-components';
import Colors from '../../../constants/Colors';

export const Hamburger = styled.button`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100px;

  .ham-line {
    background: ${Colors.black};
    width: 100%;
  }
`;
