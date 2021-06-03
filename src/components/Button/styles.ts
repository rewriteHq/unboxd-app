import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.green};
  color: ${Colors.white};
  padding: 1.2rem 1rem;
  margin: 1.5rem 0;
  width: 100%;
  border-radius: 20px;
  font-weight: ${Sizes.normalWeight};
  font-size: calc(${Sizes.fourteen}px + 1px);
  height: 64px;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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

export const PlainButton = styled.button<{ underlined?: boolean }>`
  background: transparent;
  border: none;
  padding: 1rem 0;
  white-space: nowrap;
  color: ${Colors.white};

  ${({ underlined }) =>
    underlined &&
    css`
      text-decoration: underline;
    `}
`;
