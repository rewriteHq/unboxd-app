import React, {
  ButtonHTMLAttributes,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { GiftType } from '../../typings';
import {
  GiftThumb,
  GiftThumbImage,
  GiftThumbText,
  MenuButton,
  MenuItems,
  MenuOverlay,
} from './style';

interface ComponentProps {
  gift: GiftType;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  active: boolean;
}

interface MenuProps {
  close: () => void;
  id: string;
}

interface ContextProps {
  show: boolean;
  toggle: () => void;
  gift: GiftType | null;
}

const GiftCardContext = React.createContext<ContextProps>({
  show: false,
  toggle: () => null,
  gift: null,
});

const GiftMenuButton = ({ onClick, active }: MenuButtonProps) => {
  return (
    <MenuButton onClick={onClick} active={active}>
      <span />
      <span />
      <span />
    </MenuButton>
  );
};

const GiftMenu = ({ close, id }: MenuProps) => {
  return (
    <>
      <MenuItems>
        <Link to={`/event/gift/${id}`}>Edit</Link>
        <Link to="event">Hide Item</Link>
        <Link to="event" className="danger">
          Delete
        </Link>
      </MenuItems>
      <MenuOverlay onClick={close} />
    </>
  );
};

const GiftCard = ({ gift, children, onClick }: ComponentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  const value = useMemo(() => ({ show: showMenu, toggle: toggleMenu, gift }), [
    showMenu,
    toggleMenu,
    gift,
  ]);

  return (
    <GiftCardContext.Provider value={value}>
      <GiftThumb onClick={onClick ? onClick : toggleMenu}>
        {children}
        <GiftThumbImage src={gift.imageURL} alt={gift.name} />
        <GiftThumbText>
          <p>{gift.name}</p>
          <p className="price">{`₦${gift.cost.toLocaleString()}`}</p>
        </GiftThumbText>
      </GiftThumb>
    </GiftCardContext.Provider>
  );
};

const Menu = () => {
  const { show, toggle, gift } = useContext(GiftCardContext);

  return (
    <>
      <GiftMenuButton onClick={toggle} active={show} />
      {show && <GiftMenu close={toggle} id={gift!._id} />}
    </>
  );
};

GiftCard.Menu = Menu;

export default GiftCard;
