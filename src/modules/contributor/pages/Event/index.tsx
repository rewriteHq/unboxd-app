import { differenceInDays } from 'date-fns';
import localforage from 'localforage';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import GiftCard from '../../../../components/GiftCard';
import ContributorLayout from '../../../../commons/ContributorLayout';
import AppState, { WishList } from '../../../../typings';
import { getWishlistBySlug } from './redux/actions';
import {
  CountDown,
  EventCard,
  CoverImage,
  HeadlineText,
  NeedText,
  EventCardContent,
} from '../../../beneficiary/pages/Event/styles';
import { GiftList } from './styles';
import WelcomeModal from './components/WelcomeModal';

type ParamTypes = {
  slug: string;
};

const eventVisited = localforage.createInstance({
  name: 'Event Visited',
});

const Event = () => {
  const { slug } = useParams<ParamTypes>();
  const [welcomeModal, setWelcomeModal] = useState(false);
  const history = useHistory();
  const { wishlist } = useSelector((state: AppState) => state.contributor.event.data);
  const dispatch = useDispatch()

  const toggleWelcomeModal = () => setWelcomeModal((prev) => !prev);

  useEffect(() => {
    (async function () {
      if (!wishlist || wishlist.slug !== slug) {
        dispatch(getWishlistBySlug(slug));
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
  }, [slug, dispatch, wishlist]);

  const daysLeft = wishlist ? differenceInDays(new Date(), new Date(wishlist.date)) : 1;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${slug}/${giftId}`);
    },
    [history, slug]
  );

  return wishlist ? (
    <ContributorLayout>
      <div className="container">
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

        <NeedText>Choose what to gift <em>Lateef</em></NeedText>

        <GiftList>
          {wishlist.gifts.map((gift) => (
            <GiftCard
              name={gift.name}
              price={gift.cost}
              raised={gift.paid}
              image={gift.imageURL}
              key={gift._id}
              onClick={() => openGift(`${gift._id}`)}
            />
          ))}
        </GiftList>
      </div>
      <WelcomeModal
        show={welcomeModal}
        close={toggleWelcomeModal}
        list={wishlist}
      />
    </ContributorLayout>
  ) : null;
};

export default Event;
