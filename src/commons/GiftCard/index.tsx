import React, { ButtonHTMLAttributes, useState } from 'react';
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
}

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  active: boolean;
}

interface MenuProps {
  close: () => void;
}

const GiftMenuButton = ({ onClick, active }: MenuButtonProps) => {
  return (
    <MenuButton onClick={onClick} active={active}>
      <span />
      <span />
      <span />
    </MenuButton>
  );
};

const GiftMenu = ({ close }: MenuProps) => {
  return (
    <>
      <MenuItems>
        <Link to="event">Edit</Link>
        <Link to="event">Hide Item</Link>
        <Link to="event" className="danger">
          Delete
        </Link>
      </MenuItems>
      <MenuOverlay onClick={close} />
    </>
  );
};

const GiftCard = ({ gift }: ComponentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  return (
    <GiftThumb>
      <GiftThumbImage src={gift.imageURL} alt={gift.name} />
      <GiftMenuButton onClick={toggleMenu} active={showMenu} />
      {showMenu && <GiftMenu close={toggleMenu} />}
      <GiftThumbText>
        <p>{gift.name}</p>
        <p className="price">{`₦${gift.cost.toLocaleString()}`}</p>
      </GiftThumbText>
    </GiftThumb>
  );
};

export default GiftCard;
