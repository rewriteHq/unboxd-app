import Colors from 'constants/Colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
`;

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  max-width: 500px;
  margin: 1rem auto;

  @media (min-width: 425px) {
    font-size: 2.5rem;
  }

  @media (min-width: 520px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  color: ${Colors.darkWhite};

  span {
    color: ${Colors.white};
  }

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 1.5rem auto;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
  opacity: 0.7;
  margin: 1rem 0;

  a {
    color: ${Colors.green};
  }
`;

export const Clear = styled.span`
  margin: 1rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  li { 
    list-style: disc;
    margin: 0.35rem;
    opacity: 0.7;
  }
`;