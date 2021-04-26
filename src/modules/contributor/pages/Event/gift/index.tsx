import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Layout from '../../../../../Layout';
import { GiftDataType } from '../../../../beneficiary/pages/Gift/redux/types';
import * as giftActions from '../../../../beneficiary/pages/Gift/redux/actions';
import { connect } from 'react-redux';
import GiftHeader from './header';
import {
  GiftCountdown,
  GiftCoverTime,
  GiftDescription,
  GiftProgressPrice,
} from './styles';
import { getWishlistBySlug } from '../redux/actions';
import AppState, { WishList } from '../../../../../typings';
import { differenceInDays } from 'date-fns';
import {
  CoverImage,
  GiftList,
  NeedText,
} from '../../../../beneficiary/pages/Event/styles';
import ProgressBar from '../../../../../commons/Progress';
import GiftCard from '../../../../../commons/GiftCard';
import PriceSuggest from './components/PriceSuggest';
import PaymentForm from './components/PaymentForm';
import { SpaceBetween } from '../../../../../commons/UtilityStyles/Flex';

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

const Gift = ({ gifts, getGift, list, getWishlist }: ComponentProps) => {
  const { id, slug } = useParams<ParamType>();
  const gift = gifts[id];
  const history = useHistory();
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
    if (!gift) {
      getGift(id);
    }
  }, [id, gift, getGift]);

  useEffect(() => {
    if (!list || list.slug !== slug) {
      getWishlist(slug);
    }
  }, [list, slug, getWishlist]);

  const daysLeft = list ? differenceInDays(new Date(), new Date(list.date)) : 1;
  const percentageRaised = gift ? (gift.paid / gift.cost) * 100 : 0;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${slug}/${giftId}`);
    },
    [history, slug]
  );

  return (
    <>
      <GiftHeader title={list?.title || ''} />
      {gift && (
        <Layout>
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
                    <ProgressBar percentage={10} radius={21} stroke={1.5} />
                    <div className="price">
                      <p>₦{gift.cost.toLocaleString()}</p>
                      <small>
                        ₦
                        {gift.paid.toLocaleString(undefined, {
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

            {list && (
              <>
                {payment.showForm ? (
                  <PaymentForm
                    price={payment.amount}
                    eventData={{ ...list, giftId: id }}
                  />
                ) : (
                  <PriceSuggest
                    price={gift.cost}
                    selectSuggestion={selectPrice}
                  />
                )}

                <NeedText>Choose another item to gift Lateef</NeedText>
                <GiftList>
                  {list.gifts.map((gift) =>
                    gift._id !== id ? (
                      <GiftCard
                        gift={gift}
                        key={gift._id}
                        onClick={() => openGift(gift._id)}
                      />
                    ) : null
                  )}
                </GiftList>
              </>
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  gifts: state.gifts.data,
  list: state.contributor.event.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGift: (id: string) => dispatch(giftActions.addGift(id)),
  getWishlist: (slug: string) => dispatch(getWishlistBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
