import styled from 'styled-components';

export const SpaceBetween = styled.div<{ align?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'flex-start'};
  h2 {
    color: #ffffff;
    opacity: 0.8;
    font-size: 25px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;
