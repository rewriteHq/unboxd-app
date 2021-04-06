import { differenceInDays } from 'date-fns';
import localforage from 'localforage';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import GiftCard from '../../../../commons/GiftCard';
import Layout from '../../../../Layout';
import AppState, { WishList } from '../../../../typings';
import { getWishlistBySlug } from './redux/actions';
import {
  CountDown,
  CoverAndTime,
  CoverImage,
  GiftList,
  HeadlineText,
  NeedText,
} from '../../../beneficiary/pages/Event/styles';
import WelcomeModal from './components/WelcomeModal';

type ParamTypes = {
  slug: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (slug: string) => void;
  getWish: () => void;
};

const eventVisited = localforage.createInstance({
  name: 'Event Visited',
});

const Event = ({ list, getWishlist }: ComponentProps) => {
  const { slug } = useParams<ParamTypes>();
  const [welcomeModal, setWelcomeModal] = useState(false);
  const history = useHistory();

  const toggleWelcomeModal = () => setWelcomeModal((prev) => !prev);

  useEffect(() => {
    (async function () {
      if (!list || list.slug !== slug) {
        getWishlist(slug);
      } else {
        /**
         * check if this event has been visited before (saved with localforage),
         * then prevent showing welcome message if it has been visited
         */

        const isEventVisited = await eventVisited.getItem(slug);

        if (!isEventVisited) {
          const delay = setTimeout(toggleWelcomeModal, 1000);
          eventVisited.setItem(slug, true);
          return () => clearTimeout(delay);
        }
      }
    })();
  }, [list, slug, getWishlist]);

  const daysLeft = list ? differenceInDays(new Date(), new Date(list.date)) : 1;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${slug}/${giftId}`);
    },
    [history, slug]
  );

  return list ? (
    <Layout>
      <div className="container">
        <CoverAndTime>
          <CoverImage src={list.coverImage} alt={list.title} />
          <CountDown>
            <p>{daysLeft} </p>
            <span>{daysLeft > 1 ? 'days ' : 'day'} left</span>
          </CountDown>
        </CoverAndTime>
        <HeadlineText>
          <h2>{list.title}</h2>
        </HeadlineText>
        <NeedText>Choose what to gift Lateef</NeedText>
        <GiftList>
          {list.gifts.map((gift) => (
            <GiftCard
              gift={gift}
              key={gift._id}
              onClick={() => openGift(gift._id)}
            />
          ))}
        </GiftList>
      </div>
      <WelcomeModal
        show={welcomeModal}
        close={toggleWelcomeModal}
        list={list}
      />
    </Layout>
  ) : null;
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.contributor.event.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (slug: string) => dispatch(getWishlistBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
