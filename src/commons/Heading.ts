import styled, { css } from 'styled-components';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

export const PageHeading = styled.h1<{ large?: boolean; centered?: boolean }>`
  /* color: ${Colors.black}; */
  ${(props) =>
    props.large &&
    css`
      font-weight: 900;
      font-size: 53px;
      margin-top: 2rem;

      @media (min-width: 780px) {
        font-size: 62px;
        letter-spacing: 0.5px;
        margin-top: 3.5rem;
      }
    `}

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
`;

export const PageHeadingSmall = styled.h3<{
  centered?: boolean;
  color?: string;
}>`
  font-size: ${Sizes.twenty}px;
  color: ${Colors.black};
  padding: 10px 0;

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
