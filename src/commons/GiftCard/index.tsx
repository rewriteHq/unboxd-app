import useOnClickOutside from 'hooks/useOnClickOutside';
import React, {
  ButtonHTMLAttributes,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { GiftType } from '../../typings';
import ProgressBar from '../Progress';
import {
  GiftThumb,
  GiftThumbImage,
  GiftThumbText,
  MenuButton,
  MenuItems,
  MenuOverlay,
  Raised,
} from './style';

interface ComponentProps {
  gift: GiftType;
  children?: React.ReactNode;
  onClick?: () => void;
  wishlistId: string;
}

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  active: boolean;
}

interface MenuProps {
  close: () => void;
  id: string;
  wishlistId: string;
}

interface ContextProps {
  show: boolean;
  toggle: () => void;
  gift: GiftType | null;
  wishlistId: string;
}

const GiftCardContext = React.createContext<ContextProps>({
  show: false,
  toggle: () => null,
  gift: null,
  wishlistId: '',
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

const GiftMenu = ({ close, id, wishlistId }: MenuProps) => {
  const clickRef = useRef(null);
  useOnClickOutside(clickRef, close);

  return (
    <>
      <MenuItems ref={clickRef}>
        <Link to={`/event/edit-gift/${wishlistId}/${id}`}>Edit</Link>
        <Link to="event">Hide Item</Link>
        <Link to="event" className="danger">
          Delete
        </Link>
      </MenuItems>
      <MenuOverlay />
    </>
  );
};

const GiftCard = ({ gift, children, onClick, wishlistId }: ComponentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  const value = useMemo(
    () => ({ show: showMenu, toggle: toggleMenu, gift, wishlistId }),
    [showMenu, toggleMenu, gift, wishlistId]
  );

  const percentageRaised = Math.round((gift.paid / gift.cost) * 100);

  return (
    <GiftCardContext.Provider value={value}>
      <GiftThumb onClick={onClick}>
        {children}
        <GiftThumbImage src={gift.imageURL} alt={gift.name} />
        <GiftThumbText>
          <p>{gift.name}</p>
          <p className="price">{`₦${gift.cost.toLocaleString()}`}</p>
          <Raised align="center">
            <p className="raised">{`₦${gift.paid.toLocaleString()} raised`}</p>
            <ProgressBar
              percentage={percentageRaised}
              radius={21}
              stroke={1.5}
            />
          </Raised>
        </GiftThumbText>
      </GiftThumb>
    </GiftCardContext.Provider>
  );
};

const Menu = () => {
  const { show, toggle, gift, wishlistId } = useContext(GiftCardContext);

  return (
    <>
      <GiftMenuButton onClick={toggle} active={show} />
      {show && <GiftMenu close={toggle} id={gift!._id} wishlistId={wishlistId} />}
    </>
  );
};

GiftCard.Menu = Menu;

export default GiftCard;
