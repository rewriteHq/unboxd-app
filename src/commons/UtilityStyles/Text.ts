import styled from 'styled-components';

export const Paragraph = styled.p<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
`;
