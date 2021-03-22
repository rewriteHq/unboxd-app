import { useEffect, useState } from 'react';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
} from './styles';
import ExplainerModal from './components/ExplainerModal';
import ShareEventModal from './components/ShareModal';

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
    active: 1,
  });
  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal((prev) => !prev);

  const navItems = [
    () => <Link to={`/event/edit/${id}`}>Archive</Link>,
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

  return list ? (
    <>
      <DashboardLayout pageTitle="" navItems={navItems} showBack>
        <DashboardContainer>
          <CoverAndTime>
            <CoverImage src={list.coverImage} alt={list.title} />
            <CountDown>
              {formatDistanceStrict(new Date(), new Date(list.date), {
                unit: 'day',
              })}{' '}
              left
            </CountDown>
          </CoverAndTime>
          <HeadlineText>
            <h2>{list.title}</h2>
            <p>{list.description}</p>
          </HeadlineText>
          <GiftList>
            {list.gifts.map((gift) => (
              <GiftCard gift={gift} key={gift._id} />
            ))}
          </GiftList>
          <AddItem to={`/event/add-gift/${id}`}>+</AddItem>
        </DashboardContainer>
      </DashboardLayout>
      {explainer.show && (
        <ExplainerModal
          active={explainer.active}
          goToNext={incrementExplainerIndex}
          finish={closeExplainer}
        />
      )}

      <ShareEventModal show={shareModal} close={toggleShareModal} />
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
