import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Layout from '../../../../../Layout';
import { GiftDataType } from '../../../../beneficiary/pages/Gift/redux/types';
import * as giftActions from '../../../../beneficiary/pages/Gift/redux/actions';
import { connect } from 'react-redux';
import GiftHeader from './header';
import { GiftCountdown, GiftCoverTime, GiftDescription } from './styles';
import { getWishlistBySlug } from '../redux/actions';
import AppState, { WishList } from '../../../../../typings';
import { differenceInDays } from 'date-fns';
import { CoverImage } from '../../../../beneficiary/pages/Event/styles';
import ProgressBar from '../../../../../commons/Progress';

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

const Gift = ({ gifts, getGift, list, getWishlist }: ComponentProps) => {
  const { id, slug } = useParams<ParamType>();
  const gift = gifts[id];

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

  console.log(gift);

  return (
    <>
      <GiftHeader title={gift?.name || ''} />
      {gift && (
        <Layout>
          <div className="container">
            <GiftCoverTime>
              <CoverImage src={gift.imageURL} alt={gift.name} />

              <GiftCountdown>
                <p>{daysLeft} </p>
                <span>{daysLeft > 1 ? 'days ' : 'day'} left</span>
              </GiftCountdown>
              <GiftDescription>
                <p>{gift.name}</p>
                <ProgressBar percentage={50} />
              </GiftDescription>
            </GiftCoverTime>
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
