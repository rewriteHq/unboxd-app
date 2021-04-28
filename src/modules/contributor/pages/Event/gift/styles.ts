import styled from 'styled-components';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';
import Colors from '../../../../../constants/Colors';
import {
  CountDown,
  EventCard,
} from '../../../../beneficiary/pages/Event/styles';

export const GiftCoverTime = styled(EventCard)`
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
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 2;
`;

export const GiftDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: ${Colors.white};
  z-index: 2;
  width: 100%;
`;

export const GiftProgressPrice = styled(SpaceBetween)`
  margin-top: 0.5rem;

  .price {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.3rem;
      margin-bottom: 2px;
    }

    small {
      opacity: 0.5;
    }
  }
`;

export const SuggestWrapper = styled.div`
  padding: 2rem 0 3rem;
  p {
    color: ${Colors.darkGrey};
    margin-bottom: 1rem;
  }
`;
