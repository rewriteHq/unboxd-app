import { useEffect, useState } from 'react';
import shortid from 'shortid';
import * as R from 'ramda';
import { useHistory, useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import NoItem from '../../../../../components/NoItem';
import { DashboardFilm, DashboardWrapper } from '../../Dashboard/styles';
import {
  CopyLink,
  Explainer,
  Hold,
  WishlistGrid,
  WishlistHeader,
  WishlistHeaderEventDetails,
} from './styles';
import * as actions from '../redux/actions';
import AppState, { WishList } from '../../../../../typings';
import GiftList from './components/GiftList';
import HoldModal from './components/HoldModal';
import { connect } from 'react-redux';
import { UnboxdAddButton } from 'commons/DashboardLayout/styles';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../../../../assets/img/icons/plus.svg';
import ShareEventModal from 'commons/ShareModal';
import { differenceInDays } from 'date-fns';

type ParamTypes = {
  id: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (id: string) => void;
};

const explainerTextTitle = [
  '',
  'One item added',
  'Two items added',
  'Three items added',
];

const AddEvent = ({ list, getWishlist }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();

  const [holdModal, setHoldModal] = useState(false);

  const finish = () => setHoldModal(true);

  const [shareModal, setShareModal] = useState(false);
  const toggleShareModal = () => setShareModal((prev) => !prev);

  const navItems = [
    () => (
      <a href="#0" key={shortid.generate()} onClick={finish}>
        Finish
      </a>
    ),
  ];

  const username = localStorage.getItem('username');
  const daysLeft = list ? differenceInDays(new Date(list.date), new Date()) : 1;

  const toggleHoldModal = () => setHoldModal((prev) => !prev);

  useEffect(() => {
    if (holdModal) {
      const timer = setTimeout(() => {
        toggleHoldModal();
        history.push({
          pathname: `/event/${id}`,
          state: { showIntro: true },
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [holdModal, history, id]);

  useEffect(() => {
    if (!list || list._id !== id) {
      getWishlist(id);
    }
  }, [id, list, getWishlist]);

  const renderExplainer = (giftLength: number) => {
    if (giftLength < explainerTextTitle.length) {
      return (
        <Explainer>
          <h3>{explainerTextTitle[giftLength]}</h3>
          <p>
            If you need more things, add to the list by clicking on the plus
            button
          </p>
        </Explainer>
      );
    }

    return null;
  };

  return list ? (
    <DashboardLayout pageTitle="Add your needs" navItems={navItems} showBack>
      <DashboardWrapper>
        <div className="container">
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
                <span className="days">{daysLeft} days left</span>
              </WishlistHeaderEventDetails>
            </div>
            <img src={list?.coverImage} alt="event" />
          </WishlistHeader>
          <WishlistGrid>
            {R.isEmpty(list.gifts) ? (
              <NoItem />
            ) : (
              <GiftList gifts={list.gifts.filter(gift => gift.isArchived !== true)} wishlistId={id} />
            )}
          </WishlistGrid>
          {list.gifts.length < 6 && <DashboardFilm />}
        </div>
      </DashboardWrapper>
      {R.isEmpty(list.gifts) ? (
        <Explainer>
          <p>
            Populate your list with all that you need. Click plus button to add
            item
          </p>
        </Explainer>
      ) : (
        renderExplainer(list.gifts.length)
      )}
      <UnboxdAddButton>
        <div className="under-layer pulsate-fwd"></div>
        <Link to={`/event/add-gift/${id}`} className="d-flex-center">
          <PlusIcon />
        </Link>
      </UnboxdAddButton>
      <HoldModal show={holdModal} onClose={toggleHoldModal}>
        <Hold>
          <h2>Please hold on</h2>
          <p>We are setting up your visual list</p>
        </Hold>
      </HoldModal>
      {list && (
        <ShareEventModal
          show={shareModal}
          close={toggleShareModal}
          wishlist={list}
        />
      )}
    </DashboardLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
