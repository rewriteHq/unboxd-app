import React from 'react';
import { GiftType } from '../../../../../../typings';
import {
  EmptyThumbImage,
  GiftThumb,
  GiftThumbImage,
  GiftThumbText,
} from '../styles';

interface ComponentProps {
  gift: GiftType;
  wishlistId: string;
}

const GiftCard: React.FC<ComponentProps> = ({ gift, wishlistId }) => {
  return (
    <GiftThumb to={`/event/edit-gift/${wishlistId}/${gift._id}`}>
      <GiftThumbImage src={gift.imageURL} alt={gift.name} />
      <GiftThumbText>
        <p>{gift.name}</p>
        <p className="price">{`₦${gift.cost.toLocaleString()}`}</p>
      </GiftThumbText>
    </GiftThumb>
  );
};

export const EmptyGiftCard: React.FC<{ wishlistID: string }> = ({
  wishlistID,
}) => {
  return (
    <GiftThumb to={`/event/add-gift/${wishlistID}`}>
      <EmptyThumbImage />
    </GiftThumb>
  );
};

export default GiftCard;
