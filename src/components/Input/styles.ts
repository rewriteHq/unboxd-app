import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid ${Colors.black};
  padding-top: 20px;
  margin: 10px 0;

  input {
    width: 100%;
    height: 28px;
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 0;
  font-size: calc(${Sizes.normal - 1}px);
`;
