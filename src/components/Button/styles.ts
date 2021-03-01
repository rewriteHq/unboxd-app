import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grey};
  padding: 1rem;
  margin: 1.5rem 0;
  width: 100%;
`;

export const BTN = styled.button`
  ${button}
`;

export const BTNLink = styled(Link)`
  ${button}
`;

export const Spinner = styled.span`
  max-width: 20px;
`;
