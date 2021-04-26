import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';
import { SpaceBetween } from '../UtilityStyles/Flex';

export const GiftThumb = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.darkNavy};
  border-radius: 10px;
  overflow: hidden;
  height: 270px;
  position: relative;
`;

export const GiftThumbImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

export const Raised = styled(SpaceBetween)`
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`;

export const GiftThumbText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .price {
    font-size: 1.1rem;
    margin-top: 5px;
  }

  .raised {
    color: ${Colors.darkGrey};
    font-size: ${Sizes.small}px;
  }
`;

export const MenuButton = styled.button<{ active: boolean }>`
  background-color: ${Colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  box-shadow: 0 4px 6px #00000090;
  display: flex;

  span {
    padding: 3px;
    background-color: ${Colors.black};
    border-radius: 50%;
    margin: 0 1px;
  }

  ${({ active }) =>
    active &&
    css`
      z-index: 5;
    `}
`;

export const MenuOverlay = styled.div`
  &::before {
    content: ' ';
    background-color: #00000090;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    height: 100%;
    width: 100%;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  top: 55px;
  background: ${Colors.white};
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  a {
    padding: 0.7rem 1rem;
    &:not(:last-child) {
      border-bottom: 1px solid ${Colors.grey};
    }
  }
`;
