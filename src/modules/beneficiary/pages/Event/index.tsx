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
  AddItem,
  CountDown,
  CoverAndTime,
  CoverImage,
  GiftList,
  HeadlineText,
  NeedText,
  ShareBox,
} from './styles';
import ExplainerModal from './components/ExplainerModal';
import { PlainButton } from '../../../../components/Button/styles';
import ShareEventModal from '../../../../commons/ShareModal';
import { SideBarWrapper } from '../../../../commons/Sidebar/styles';

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
          <ShareBox>
            <p className="url">
              unboxd.gifts/a-new-beginning-with-the-love-of-my-life
            </p>
            <PlainButton className="share-button" onClick={toggleShareModal}>
              Share
            </PlainButton>
          </ShareBox>
          <NeedText>Your wishes</NeedText>
          <GiftList>
            {list.gifts.map((gift) => (
              <GiftCard gift={gift} key={gift._id} />
            ))}
          </GiftList>
          <AddItem to={`/event/add-gift/${id}`}>Add wish</AddItem>
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
