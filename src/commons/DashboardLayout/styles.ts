import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 0 20px;
  min-height: 75vh;
`;

export const NavItem = styled.li`
  padding: 0 10px;
  &:last-child {
    padding-right: 0;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 20px;
  margin-top: 1rem;
`;

export const HeaderTitle = styled.h2`
  margin: 0 auto;
`;

export const Nav = styled.nav`
  a {
    font-weight: 400;
    font-size: 13px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
