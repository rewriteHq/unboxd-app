import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  min-width: 250px;
  width: 23%;
  display: flex;
  align-items: center;
  height: 90vh;
  position: sticky;
  top: 0;
  .main-nav {
    background: ${(props) => props.theme.appSecondaryColor};
    height: 97%;
    width: 100%;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    padding: 50px 30px 20px 30px;
    a {
      font-size: 17px;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      width: 100%;
      font-weight: 300;

      svg {
        margin-right: 10px;
        min-width: 22px;
      }
    }
    a.feedback {
      margin-top: auto;
      margin-bottom: auto;
    }
    .nav-footer {
      margin-top: auto;
      h3 {
        font-weight: 400;
        margin-bottom: 15px;
      }
      .media-links {
        display: flex;
        justify-content: space-between;
        a {
          background: #fff;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          svg {
            margin-right: 0;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
