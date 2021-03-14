import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: calc(100vh - 70px);

  .container {
    flex-direction: column;
    padding: 10px 20px;
    z-index: 1;
  }

  /* &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 50%;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.51),
      rgba(255, 255, 255, 0)
    );
    z-index: 2;
  } */
`;

export const DashboardFilm = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.61),
    rgba(255, 255, 255, 0)
  );
  z-index: 2;
`;
