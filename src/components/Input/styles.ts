import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 20px;
  margin: 10px 0;
  background: ${(props) => props.theme.appSecondaryColor};
  border-radius: 18px;
  height: 64px;
  .input-icon {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    input {
      flex: 3.5;
      margin-top: 0.5rem;
      background: ${(props) => props.theme.appSecondaryColor};
      color: ${(props) => props.theme.contentColor} !important;
      -webkit-text-fill-color: ${(props) =>
        props.theme.contentColor} !important;
      font-size: 16px;
      font-family: ${Fonts.secondary};
      font-weight: 300;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
      &:disabled {
        opacity: 0.5;
      }
    }
    .icon-area {
      font-size: 10px;
      color: ${Colors.yellow};
      flex: 1;
      margin-left: auto;
      display: block;
      text-align: right;
    }
  }
`;

export const Label = styled.label`
  color: ${Colors.yellow};
  font-size: calc(${Sizes.normal - 4}px);
`;
