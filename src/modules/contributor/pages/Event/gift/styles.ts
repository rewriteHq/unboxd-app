import styled from 'styled-components';
import Colors from '../../../../../constants/Colors';
import {
  CountDown,
  CoverAndTime,
} from '../../../../beneficiary/pages/Event/styles';

export const GiftCoverTime = styled(CoverAndTime)`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0.39deg,
      #000000 0.33%,
      rgba(0, 0, 0, 0) 85.87%
    );
    z-index: 1;
  }
`;

export const GiftCountdown = styled(CountDown)`
  top: 20px;
  bottom: unset;
`;

export const GiftDescription = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 20px;
  color: ${Colors.white};
  z-index: 2;
  width: 100%;
`;
