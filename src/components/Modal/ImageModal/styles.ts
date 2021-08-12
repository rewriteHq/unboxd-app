import styled from 'styled-components';
import Effects from '../../../constants/Effects';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(${Effects.blur}px);
`;

export const ModalContent = styled.div`
  width: 50%;
  height: 50vh;
  background: #2d3039;
  border-radius: 1.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
    max-height: 30rem;
  }

  @media (max-width: 620px) {
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 0;
    transform: none;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
`;
