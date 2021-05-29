import { differenceInDays } from 'date-fns';
import localforage from 'localforage';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import GiftCard from '../../../../components/GiftCard';
import ContributorLayout from '../../../../commons/ContributorLayout';
import AppState from '../../../../typings';
import { getWishlistBySlug } from './redux/actions';
import {
  CountDown,
  EventCard,
  CoverImage,
  HeadlineText,
  NeedText,
} from '../../../beneficiary/pages/Event/styles';
import { GiftList, EventCardContent } from './styles';
import WelcomeModal from './components/WelcomeModal';
import Skeleton from 'react-loading-skeleton';
import PageLoader from '../../../../components/PageLoader';

type ParamTypes = {
  username: string;
  slug: string;
};

const eventVisited = localforage.createInstance({
  name: 'Event Visited',
});

const Event = () => {
  const { username, slug } = useParams<ParamTypes>();
  const [welcomeModal, setWelcomeModal] = useState(false);
  const history = useHistory();
  const { wishlist } = useSelector((state: AppState) => state.contributor.event.data);
  const dispatch = useDispatch()

  const toggleWelcomeModal = () => setWelcomeModal((prev) => !prev);

  useEffect(() => {
    (async function () {
      if (!wishlist || wishlist.slug !== slug) {
        dispatch(getWishlistBySlug(username, slug));
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
  }, [username, slug, dispatch, wishlist]);

  const daysLeft = wishlist ? differenceInDays(new Date(wishlist.date), new Date()) : 1;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${username}/${slug}/${giftId}`);
    },
    [history, username, slug]
  );

  return wishlist ? (
    <ContributorLayout>
      <div className="container">
        {wishlist.coverImage ? (
          <EventCard>
            <CoverImage src={wishlist.coverImage} alt={wishlist.coverImage} />
            <EventCardContent>
              <HeadlineText>
                <h2>{wishlist.title}</h2>
              </HeadlineText>
              <CountDown>
                {daysLeft} {daysLeft > 1 ? 'days ' : 'day'} left
            </CountDown>
            </EventCardContent>
          </EventCard>
        ) : (
          <Skeleton height={250} />
        )}

        <NeedText>Choose what to gift <em>{wishlist.userID.firstname}</em></NeedText>

        <GiftList>
          {wishlist.gifts.map((gift) => (
            gift.imageURL ? (
              <GiftCard
                name={gift.name}
                price={gift?.totalCost!}
                raised={gift?.paid}
                image={gift.imageURL}
                key={gift._id}
                onClick={() => openGift(`${gift._id}`)}
              />
            ) : (
              <Skeleton height={350} />
            )
          ))}
        </GiftList>
      </div>
      <WelcomeModal
        show={welcomeModal}
        close={toggleWelcomeModal}
        list={wishlist}
      />
    </ContributorLayout>
  ) : <PageLoader />;
};

export default Event;
