import styled, { css } from 'styled-components';
import Colors from 'constants/Colors';
import Fonts from 'constants/Fonts';

export const WalletBalanceBig = styled.div`
  background: ${(props) => props.theme.appSecondaryColor};
  border-radius: 18px;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  height: 10rem;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }

  .circle-1 {
    position: absolute;
    top: -70px;
    left: -70px;
    height: 200px;
    width: 200px;
    background: rgba(30, 32, 40, 0.8);
    z-index: 1;
    border-radius: 50%;
  }

  .circle-2 {
    position: absolute;
    height: 200px;
    width: 200px;
    z-index: 1;
    border-radius: 50%;
    background: rgba(30, 32, 40, 0.7);
    top: -140px;
    right: -60px;
  }
  .circle-3 {
    position: absolute;
    height: 120px;
    width: 120px;
    z-index: 1;
    border-radius: 50%;
    background: rgba(30, 32, 40, 0.4);
    top: -80px;
    right: 90px;
  }

  .left {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      align-self: center;
    }
    span {
      color: ${Colors.yellow};
      font-size: 1.3rem;
      margin-bottom: 5px;

      @media (max-width: 767px) {
        font-size: 1rem;
        align-self: center;
      }
    }

    p {
      font-family: ${Fonts.secondary};
      font-weight: 500;
      font-size: 2rem;
      color: ${(props) => props.theme.contentColor};
      @media (max-width: 767px) {
        font-size: 1.6rem;
      }
    }
  }

  .right {
    a {
      display: flex;
      align-items: center;
    }
    align-self: flex-end;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      align-self: center;
    }
    svg {
      transition: all 0.2s ease;
    }
    span {
      font-size: 14px;
      border-bottom: 1px solid ${Colors.white};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-right: 5px;
      font-weight: lighter;
      :hover {
        border-bottom: 1px solid ${Colors.yellow};
        & + svg {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const WalletContainer = styled.div`
  display: grid;
  row-gap: 2rem;

  header.breadCrumb {
    span {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
`;

export const Tabs = styled.div``;

export const Tab = styled.button`
  font-size: 1rem;
  font-weight: lighter;
  padding: 0em 3em 0.5em 3em;
  color: ${Colors.black100};
  background-color: transparent;

  @media (max-width: 767px) {
    padding: 0em 1em 0.5em 1em;
  }
  &.activeTab {
    color: white;
    border-bottom: 1px solid ${Colors.white};
  }
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid ${Colors.black100};
`;

export const TabItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${Colors.black200};
  padding: 1em 0em;
  line-height: 1.3rem;

  .right {
    text-align: right;
  }
  .left {
    display: flex;
    > div {
      margin-left: 1rem;
    }
  }
  span {
    color: ${Colors.black100};
    font-weight: lighter;
    font-size: 0.9rem;
  }
  p {
  }
`;

export const TabPanels = styled.div``;

export const TabPanel = styled.div``;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 300px;

  form {
    h3 {
      font-weight: normal;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .walletBalance {
      font-size: 0.8rem;
      font-weight: lighter;
      margin-top: 0.8rem;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 420px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const InputGroup = styled.div`
  border-radius: 20px;
  background-color: ${Colors.darkNavy};
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.5em;
  height: 64px;
  width: 100%;

  span {
    color: ${Colors.yellow};
    font-size: 0.8rem;
  }

  input {
    background-color: transparent;
    flex: 1;
    font-size: 1rem;
    color: ${Colors.white};

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ChooseBankList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h3 {
    font-size: 14px;
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0.5rem 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: ${Colors.tintOrange};
    color: ${Colors.burntOrange};
    margin-right: 1rem;
  }

  .account {
    display: flex;
    flex-direction: column;
  }
`;

export const GoBack = styled.span(
  () => css`
    margin-right: 1rem;
  `
);
