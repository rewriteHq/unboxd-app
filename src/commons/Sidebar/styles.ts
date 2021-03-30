import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { Cross } from '@styled-icons/icomoon';
import Sizes from '../../constants/Sizes';

export const SideBarWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  backdrop-filter: blur(10px);
  transform: translateX(${({ show }) => (show ? '0' : '-110vw')});
  transition: 0.4s transform ease;
  color: ${Colors.white};
  padding: 3rem 2rem 2rem;
`;

export const CloseButton = styled(Cross)`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 20px;
`;

export const NavLinks = styled.ul`
  margin: 4rem 0;
`;

export const NavItem = styled.li`
  margin-bottom: 2rem;
  font-size: ${Sizes.twenty}px;
`;

export const FindOnline = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 2rem;

  p {
    font-size: 20px;
    margin-bottom: 2rem;
  }
`;

export const SocialIcon = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  background: ${Colors.white};
  border-radius: 17px;
  color: ${Colors.black};
  font-size: 1rem;
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 0.8rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
