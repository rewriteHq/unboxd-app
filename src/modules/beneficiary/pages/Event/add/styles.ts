import styled from 'styled-components';
import Colors from '../../../../../constants/Colors';

export const AddItemButton = styled.button`
  border-radius: 50%;
  padding: 1.5rem 1.8rem;
  background-color: ${Colors.grey};
  position: fixed;
  bottom: 10vh;
  right: 20px;
  z-index: 3;
`;

export const Explainer = styled.p`
  width: 50%;
  position: fixed;
  bottom: 15vh;
  left: 40px;
  z-index: 3;
`;
