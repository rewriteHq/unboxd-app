import Colors from 'constants/Colors';
import styled from 'styled-components';

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