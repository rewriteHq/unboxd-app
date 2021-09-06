import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import AppState, { WishList } from '../../../../typings';
import * as actions from './redux/actions';
import {
  CopyLink,
  NeedText,
  WishItemsWrapper,
  // ShareBox,
  WishlistHeader,
  WishlistHeaderEventDetails,
} from './styles';
import ExplainerModal from './components/ExplainerModal';
// import { PlainButton } from '../../../../components/Button/styles';
import ShareEventModal from '../../../../commons/ShareModal';
import { setGlobalButtoLink } from '../../redux/actions';
import GiftCard from '../../../../commons/GiftCard';
import { differenceInDays } from 'date-fns';
import Skeleton from 'react-loading-skeleton';

type ParamTypes = {
  id: string;
  slug: string;
};

type ComponentProps = {
  list: WishList | null;
  isLoading: boolean;
  getWishlist: (slug: string) => void;
};

type LocationState = {
  showIntro?: boolean;
};

const Event = ({ list, isLoading, getWishlist }: ComponentProps) => {
  const { slug } = useParams<ParamTypes>();
  const { state } = useLocation<LocationState>();
  const [explainer, setExplainer] = useState({
    show: state && state.showIntro,
    active: 0,
  });
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal((prev) => !prev);

  useEffect(() => {
    async function getListDetails() {
      if (!list || list!.slug !== slug) {
        await getWishlist(slug);
      }
    }
    getListDetails();
  }, [list, slug, getWishlist]);

  const navItems = [
    () => <Link to={`/archive/${list!._id}`}>Archive</Link>,
    () => <Link to={`/event/edit/${list!._id}`}>Edit</Link>,
    () => (
      <Link to="#0" onClick={toggleShareModal}>
        Share
      </Link>
    ),
    () => <Link to={`/event/wallet/${list!._id}`}>Wallet</Link>,
  ];

  const incrementExplainerIndex = () =>
    setExplainer(({ active, show }) => ({ active: active + 1, show }));

  const closeExplainer = () => setExplainer({ active: 0, show: false });

  const daysLeft = list ? differenceInDays(new Date(list.date), new Date()) : 1;

  useEffect(() => {
    if (list) {
      dispatch(setGlobalButtoLink(`/event/add-gift/${list._id}`));
    }
  }, [dispatch, list]);

  return (
    <>
      <DashboardLayout
        pageTitle=""
        navItems={navItems}
        showBack
        loading={isLoading}
      >
        <DashboardContainer>
          <WishlistHeader>
            <div className="list-header-content">
              <CopyLink onClick={toggleShareModal}>
                <p>
                  unboxd.gifts/{username}/{list?.slug}
                </p>
                <span className="copy">copy</span>
              </CopyLink>
              <WishlistHeaderEventDetails>
                <h2>{list?.title}</h2>
                <span className="days">{daysLeft} day{daysLeft > 1 || daysLeft < 1 ? 's' : ''} left</span>
              </WishlistHeaderEventDetails>
            </div>
            <img src={list?.coverImage} alt="event" />
          </WishlistHeader>
          <NeedText>Your wishes &#40;{list?.gifts?.filter(gift => gift.isArchived !== true).length}&#41;</NeedText>
          <WishItemsWrapper>
            {list?.gifts?.filter(gift => gift.isArchived !== true).map((gift) =>
              gift.imageURL ? (
                <GiftCard gift={gift} wishlistId={list._id} key={gift._id}>
                  <GiftCard.Menu />
                </GiftCard>
              ) : (
                <Skeleton height={350} />
              )
            )}
          </WishItemsWrapper>
        </DashboardContainer>
      </DashboardLayout>
      {explainer.show && (
        <ExplainerModal
          active={explainer.active}
          goToNext={incrementExplainerIndex}
          finish={closeExplainer}
        />
      )}

      {list && (
        <ShareEventModal
          show={shareModal}
          close={toggleShareModal}
          wishlist={list}
        />
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.event.list.data,
    isLoading: state.event.list.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (slug: string) => dispatch(actions.getWishlistBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
