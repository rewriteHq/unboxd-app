import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Effects from '../../constants/Effects';
import Sizes from '../../constants/Sizes';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
    backdrop-filter: blur(${Effects.blur}px);
  }
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

export const ModalMain = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${Colors.white};
  min-height: ${(props) => (props.full ? '100vh' : '75vh')};
`;

export const ModalBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;
