import styled from 'styled-components';
import Colors from '../../constants/Colors';

const Hamburger = styled.button`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100px;

  .ham-line {
    background: ${Colors.black};
    width: 100%;
  }
`;

type ComponentProps = {
  onClick: () => void;
};

const MenuIcon = ({ onClick }: ComponentProps) => {
  return (
    <Hamburger onClick={onClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </Hamburger>
  );
};

export default MenuIcon;
