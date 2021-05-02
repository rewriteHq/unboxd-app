import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

export const SocialAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  font-family: ${Fonts.primary};
  margin-top: 33px;
  button {
    flex: 1;
    background: ${Colors.darkerGrey};
    color: #fff;
    font-size: ${Sizes.small}px;
    font-weight: 100;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-right: 1px solid #22242c;
    &:first-of-type {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
    &:last-of-type {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
      border-right: 0px;
    }
    svg {
      margin-right: 10px;
    }
    @media (max-width: 768px) {
      span {
        display: none;
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
