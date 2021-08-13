import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';
import { SpaceBetween } from '../UtilityStyles/Flex';

export const GiftThumb = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.navy};
  border-radius: 10px;
  height: 270px;
  min-width: 230px;
  margin: 0.5rem;
  position: relative;
`;

export const GiftThumbImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
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
  padding: 0.5rem 0.75rem;
  border-radius: 30px;
  box-shadow: 0 1px 6px #0000006b;
  display: flex;

  span {
    padding: 2.5px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 2px;
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
    background-color: #000000dd;
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
  right: 10px;
  background: ${Colors.white};
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: ${Colors.black};
  overflow: hidden;

  a {
    padding: 0.7rem 1rem;
    transition: 0.5s ease all;

    &:not(:last-child) {
      border-bottom: 1px solid ${Colors.grey};
    }
    &:hover {
      background: ${Colors.lightGrey};
    }
  }
`;
