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
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
