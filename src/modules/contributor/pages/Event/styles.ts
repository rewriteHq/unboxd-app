import styled from 'styled-components';

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
`;