import { differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import Layout from '../../../../Layout';
import AppState, { WishList } from '../../../../typings';
import { getWishlist } from '../../../beneficiary/pages/Event/redux/actions';
import {
  CountDown,
  CoverAndTime,
  CoverImage,
} from '../../../beneficiary/pages/Event/styles';
import WelcomeModal from './components/WelcomeModal';

type ParamTypes = {
  id: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (id: string) => void;
};

const Event = ({ list, getWishlist }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();
  const [welcomeModal, setWelcomeModal] = useState(false);

  const toggleWelcomeModal = () => setWelcomeModal((prev) => !prev);

  useEffect(() => {
    if (!list || list._id !== id) {
      getWishlist(id);
    } else {
      const delay = setTimeout(toggleWelcomeModal, 1000);
      return () => clearTimeout(delay);
    }
  }, [list, id, getWishlist]);

  const daysLeft = list ? differenceInDays(new Date(), new Date(list.date)) : 1;

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
    list: state.event.list.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (id: string) => dispatch(getWishlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
