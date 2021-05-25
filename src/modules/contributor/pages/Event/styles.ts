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