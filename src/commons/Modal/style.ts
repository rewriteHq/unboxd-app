import Styled from 'styled-components';
import { button } from '../Button/styles';
import Colors from '../../constants/Colors';
import Effects from '../../constants/Effects';

export const ModalWrapper = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 5;
  padding: 2rem 1rem;

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

  .modal-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .close {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;

      .input {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        border-bottom: 1px solid ${Colors.white};

        label {
          margin-bottom: 1rem;
          font-size: 20px;
        }

        input {
          color: ${Colors.white};
          padding-bottom: 0.5rem;
        }
      }

      .formSubmit {
        ${button}
      }
    }
  }

  @media (min-width: 780px) {

    .modal-container {
      max-width: 50%;
    }
  }
`;

