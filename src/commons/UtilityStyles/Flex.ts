import styled from 'styled-components';

export const SpaceBetween = styled.div<{ align?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'flex-start'};
`;

export const Flex = styled.div`
  display: flex;
`;
