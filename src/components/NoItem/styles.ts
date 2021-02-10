import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';

interface ICard {
  right?: boolean;
  big?: boolean;
}

export const NoItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NoItemCard = styled.div<ICard>`
  width: calc(50% - 8px);
  min-height: 158px;
  margin-right: 8px;
  margin-bottom: 16px;
  background-color: ${Colors.grey};
  opacity: 0.5;

  ${(props) =>
    props.right &&
    css`
      margin-left: 8px;
      margin-right: 0;
    `}

  ${(props) =>
    props.big &&
    css`
      height: calc(80vh - 158px);
    `}
`;
