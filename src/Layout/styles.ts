import styled from 'styled-components';

export const PageMain = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
  .container {
    min-height: 75vh;
    flex-direction: column;
    max-width: 750px;
    margin: auto;
  }
`;