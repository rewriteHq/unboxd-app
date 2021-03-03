import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  background: white;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${Colors.grey};
    font-size: ${Sizes.small};
  }
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: ${Colors.white};
  min-height: 75vh;
`;
