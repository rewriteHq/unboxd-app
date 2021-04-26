import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { differenceInDays } from 'date-fns';

import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import GiftCard from '../../../../commons/GiftCard';
import AppState, { WishList } from '../../../../typings';
import * as actions from './redux/actions';
import {
  AddIcon,
  AddItem,
  CountDown,
  CoverImage,
  EventCard,
  EventCardContent,
  GiftList,
  HeadlineText,
  NeedText,
  ShareBox,
} from './styles';
import ExplainerModal from './components/ExplainerModal';
import { PlainButton } from '../../../../components/Button/styles';
import ShareEventModal from '../../../../commons/ShareModal';

type ParamTypes = {
  id: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (id: string) => void;
};

type LocationState = {
  showIntro?: boolean;
};

const Event = ({ list, getWishlist }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();
  const { state } = useLocation<LocationState>();
  const [explainer, setExplainer] = useState({
    show: state && state.showIntro,
    active: 0,
  });
  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal((prev) => !prev);

  const navItems = [
    () => <Link to={`/archive/${id}`}>Archive</Link>,
    () => <Link to={`/event/edit/${id}`}>Edit</Link>,
    () => (
      <Link to="#0" onClick={toggleShareModal}>
        Share
      </Link>
    ),
    () => <Link to={`/event/wallet/${id}`}>Wallet</Link>,
  ];

  useEffect(() => {
    if (!list || list._id !== id) {
      getWishlist(id);
    }
  }, [list, id, getWishlist]);

  const incrementExplainerIndex = () =>
    setExplainer(({ active, show }) => ({ active: active + 1, show }));

  const closeExplainer = () => setExplainer({ active: 0, show: false });

  const daysLeft = list ? differenceInDays(new Date(), new Date(list.date)) : 1;

  return list ? (
    <>
      <DashboardLayout pageTitle="" navItems={navItems} showBack>
        <DashboardContainer>
          <EventCard>
            <CoverImage src={list.coverImage} alt={list.title} />
            <EventCardContent>
              <HeadlineText>
                <h2>{list.title}</h2>
              </HeadlineText>
              <CountDown>
                <span>
                  {daysLeft} {daysLeft > 1 ? 'days ' : 'day'} left
                </span>
              </CountDown>
            </EventCardContent>
          </EventCard>
          <ShareBox>
            <p className="url">{`${process.env.REACT_APP_DOMAIN_NAME}${list.slug}`}</p>
            <PlainButton className="share-button" onClick={toggleShareModal}>
              share
            </PlainButton>
          </ShareBox>
          <NeedText>Your wishes &#40;{list.gifts.length}&#41;</NeedText>
          <GiftList>
            {list.gifts.map((gift) => (
              <GiftCard gift={gift} key={gift._id} />
            ))}
          </GiftList>
          <AddItem to={`/event/add-gift/${id}`}>
            <AddIcon />
          </AddItem>
        </DashboardContainer>
      </DashboardLayout>
      {explainer.show && (
        <ExplainerModal
          active={explainer.active}
          goToNext={incrementExplainerIndex}
          finish={closeExplainer}
        />
      )}

      <ShareEventModal
        show={shareModal}
        close={toggleShareModal}
        wishlist={list}
      />
    </>
  ) : null;
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.event.list.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (id: string) => dispatch(actions.getWishlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
