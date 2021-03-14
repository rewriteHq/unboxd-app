import { GiftType } from '../../../../../../typings';
import {
  EmptyThumbImage,
  GiftThumb,
  GiftThumbImage,
  GiftThumbText,
} from '../styles';

interface ComponentProps {
  gift: GiftType;
}

const GiftCard: React.FC<ComponentProps> = ({ gift }) => {
  return (
    <GiftThumb to={`/add-gift/${gift._id}`}>
      <GiftThumbImage src={gift.imageURL} alt={gift.name} />
      <GiftThumbText>
        <p>{gift.name}</p>
        <p className="price">{`₦${gift.cost.toLocaleString()}`}</p>
      </GiftThumbText>
    </GiftThumb>
  );
};

export const EmptyGiftCard = ({ wishlistID }: { wishlistID: string }) => {
  return (
    <GiftThumb to={`/event/add-gift/${wishlistID}`}>
      <EmptyThumbImage />
    </GiftThumb>
  );
};

export default GiftCard;
