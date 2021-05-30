import styled from 'styled-components';
import {
  EventCard,
} from '../../../beneficiary/pages/Event/styles';

export const GiftCoverTime = styled(EventCard)`
  min-height: 250px;
  margin-left: -1rem;
  margin-right: -1rem;

  @media (min-width: 375px) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

export const GiftList = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EventCardContent = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 3;
  flex-direction: column;

  @media (min-width: 320px) {
    flex-direction: row;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  margin: 0 auto;
`;