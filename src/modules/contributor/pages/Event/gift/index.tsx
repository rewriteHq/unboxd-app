import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { GiftDataType } from '../../../../beneficiary/pages/Gift/redux/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  GiftCountdown,
  GiftCoverTime,
  GiftDescription,
  GiftProgressPrice,
} from './styles';
import { getGift, getWishlistBySlug } from '../redux/actions';
import AppState, { WishList } from '../../../../../typings';
import { differenceInDays } from 'date-fns';
import {
  CoverImage,
  NeedText,
} from '../../../../beneficiary/pages/Event/styles';
import ProgressBar from '../../../../../commons/Progress';
import GiftCard from '../../../../../components/GiftCard';
import PriceSuggest from './components/PriceSuggest';
import PaymentForm from './components/PaymentForm';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';
import ContributorLayout from '../../../../../commons/ContributorLayout';
import { GiftList } from '../styles';

interface ComponentProps {
  gifts: GiftDataType;
  list: WishList | null;
  getGift: (id: string) => void;
  getWishlist: (slug: string) => void;
}

interface ParamType {
  id: string;
  slug: string;
}

interface PaymentState {
  amount: number | '';
  showForm: boolean;
}

const Gift = () => {
  const { id, slug } = useParams<ParamType>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { gift, wishlist } = useSelector((state: AppState) => state.contributor.event.data)
  const [payment, setPayment] = useState<PaymentState>({
    amount: '',
    showForm: false,
  });

  const selectPrice = (amount: number | '') => {
    setPayment({
      amount,
      showForm: true,
    });
  };

  useEffect(() => {
    dispatch(getGift(id))
  }, [id, getGift, dispatch]);

  useEffect(() => {
    if (!wishlist) {
      dispatch(getWishlistBySlug(slug))
    }
  }, [dispatch, slug]);

  const daysLeft = wishlist ? differenceInDays(new Date(), new Date(wishlist.date)) : 1;
  const percentageRaised = gift ? Math.round((gift.paid / gift.cost) * 100) : 0;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${slug}/${giftId}`);
    },
    [history, slug]
  );

  return gift && (
    <ContributorLayout>
      <div className="container">
        <GiftCoverTime>
          <CoverImage src={gift.imageURL} alt={gift.name} />

          <GiftCountdown>
            {daysLeft} {daysLeft > 1 ? 'days ' : 'day'} left
              </GiftCountdown>
          <GiftDescription>
            <SpaceBetween align="flex-end">
              <h3>{gift.name}</h3>
              <GiftProgressPrice>
                <ProgressBar
                  percentage={percentageRaised}
                  radius={21}
                  stroke={1.5}
                />
                <div className="price">
                  <p>₦{gift.cost.toLocaleString()}</p>
                  <small>
                    ₦{gift.paid.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                        raised
                      </small>
                </div>
              </GiftProgressPrice>
            </SpaceBetween>
          </GiftDescription>
        </GiftCoverTime>

        {wishlist && (
          <>
            {payment.showForm ? (
              <PaymentForm
                price={payment.amount}
                eventData={{ ...wishlist, giftId: id }}
              />
            ) : (
              <PriceSuggest
                price={gift.cost}
                selectSuggestion={selectPrice}
              />
            )}

            <NeedText>Choose another item to gift Lateef</NeedText>

            <GiftList>
              {wishlist.gifts.map((gift) =>
                gift._id !== wishlist._id ? (
                  <GiftCard
                    name={gift.name}
                    image={gift.imageURL}
                    price={gift.cost}
                    raised={gift.paid}
                    key={gift._id}
                    onClick={() => openGift(`${gift._id}`)}
                  />
                ) : null
              )}
            </GiftList>
          </>
        )}
      </div>
    </ContributorLayout>
  );
};

export default Gift;
