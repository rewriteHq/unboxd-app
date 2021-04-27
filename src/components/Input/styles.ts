import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 20px;
  margin: 10px 0;
  background: ${Colors.darkNavy};
  border-radius: 18px;

  input {
    width: 100%;
    margin-top: 0.5rem;
    background: ${Colors.darkNavy};
    color: ${Colors.white} !important;
    -webkit-text-fill-color: ${Colors.white} !important;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const Label = styled.label`
  color: ${Colors.yellow};
  font-size: calc(${Sizes.small - 2}px);
`;
