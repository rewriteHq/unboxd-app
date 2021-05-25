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

export const MyUnboxdListHeader = styled.div`
  width: 100%;
  margin-top: 50px;
  p {
    display: flex;
    align-items: center;
    font-size: 15px;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const WishList = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 42px;
`;

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  @media (min-width: 768px) {
    width: 60%;
    margin: 2rem auto;
  }
`;

export const SectionSeparator = styled.hr`
  border-top: 1px solid #3f3f3f;
  width: 100%;
  margin: 30px auto;
`;
