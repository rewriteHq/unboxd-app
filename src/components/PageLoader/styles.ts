import Styled from 'styled-components';
import Colors from '../../constants/Colors';

export const LoaderWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.appPrimaryColor};
  overflow: hidden;
`;