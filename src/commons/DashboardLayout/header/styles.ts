import styled from 'styled-components';
import { PlainButton } from '../../../components/Button/styles';
import Colors from '../../../constants/Colors';

export const Hamburger = styled(PlainButton)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 25px;
  padding: 0;

  span {
    width: 100%;
    height: 2px;
    background-color: ${Colors.black};
  }
`;

export const WalletBubble = styled.button`
  margin-left: 5px;
  background: ${Colors.black};
  color: ${Colors.white};
  padding: 0.1rem 0.3rem;
  border-radius: 50%;
`;
