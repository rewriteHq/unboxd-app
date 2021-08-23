import React from 'react';
import { useMemo } from 'react';
import shortid from 'shortid';
import { GiftType } from '../../../../../../typings';
import { GiftThumbList } from '../styles';
import { EmptyGiftCard } from './GiftCard';
import GiftCard from '../../../../../../commons/GiftCard';

interface ComponentProps {
  gifts: GiftType[];
  wishlistId: string;
}
const GiftList: React.FC<ComponentProps> = ({ gifts, wishlistId }) => {
  const giftList = useMemo((): Array<GiftType | null> => {
    const itemsArray = Array(6).fill(null);

    itemsArray.splice(0, gifts.length, ...gifts);
    return itemsArray;
  }, [gifts]);

  return (
    <GiftThumbList>
      {giftList.map((gift) =>
        gift ? (
          <GiftCard key={gift._id} gift={gift}>
            <GiftCard.Menu />
          </GiftCard>
        ) : (
          <EmptyGiftCard wishlistID={wishlistId} key={shortid.generate()} />
        )
      )}
    </GiftThumbList>
  );
};

export default GiftList;
