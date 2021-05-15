import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { differenceInDays } from 'date-fns';

import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';
import AppState, { WishList } from '../../../../typings';
import * as actions from './redux/actions';
import {
  CopyLink,
  NeedText,
  // ShareBox,
  WishlistHeader,
  WishlistHeaderEventDetails,
} from './styles';
import ExplainerModal from './components/ExplainerModal';
// import { PlainButton } from '../../../../components/Button/styles';
// import ShareEventModal from '../../../../commons/ShareModal';
import { setGlobalButtoLink } from '../../redux/actions';

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

  const dispatch = useDispatch();
  const [, setShareModal] = useState(false);
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

  // const daysLeft = list ? differenceInDays(new Date(), new Date(list.date)) : 1;

  useEffect(() => {
    dispatch(setGlobalButtoLink(`/event/add-gift/${id}`));
  }, [id, dispatch]);

  return (
    <>
      <DashboardLayout pageTitle="" navItems={navItems} showBack>
        <DashboardContainer>
          <WishlistHeader>
            <div className="list-header-content">
              <CopyLink>
                <p>unboxd.com/taofeeqat30th</p>
                <span className="copy">copy</span>
              </CopyLink>
              <WishlistHeaderEventDetails>
                <h2>Make my birthday fabulous</h2>
                <span className="days">28 days left</span>
              </WishlistHeaderEventDetails>
            </div>
            <img src="/assets/rectangle-175.png" alt="event" />
          </WishlistHeader>
          <NeedText>Your wishes &#40;{50}&#41;</NeedText>
        </DashboardContainer>
      </DashboardLayout>
      {explainer.show && (
        <ExplainerModal
          active={explainer.active}
          goToNext={incrementExplainerIndex}
          finish={closeExplainer}
        />
      )}

      {/* <ShareEventModal
        show={shareModal}
        close={toggleShareModal}
        wishlist={[]}
      /> */}
    </>
  );
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
