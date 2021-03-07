import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid ${Colors.black};
  padding-top: 10px;
  margin: 10px 0;

  input {
    height: 28px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: calc(${Sizes.normal}px);

  &.focus {
    font-size: calc(${Sizes.small}px);
  }
`;
