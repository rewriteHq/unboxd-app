import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const SideBarWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  backdrop-filter: blur(10px);
`;
