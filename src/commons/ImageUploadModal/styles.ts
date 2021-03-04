import styled, { css } from 'styled-components';
import { button } from '../../components/Button/styles';
import Colors from '../../constants/Colors';

export const FileInput = styled.input`
  display: none;
`;

const buttonstyle = css`
  ${button};
  background-color: ${Colors.white};
  margin: 1rem 0 0.5rem;
`;

export const FileLabel = styled.label`
  ${buttonstyle}
`;

export const Button = styled.button`
  ${buttonstyle}
`;
