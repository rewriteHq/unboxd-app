import { useEffect } from 'react';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../../commons/DashboardLayout/styles';
import GiftCard from '../../../../../commons/GiftCard';
import AppState, { WishList } from '../../../../../typings';
import { GiftList } from '../styles';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

type ParamTypes = {
  id: string;
};

type ComponentProps = {
  list: WishList | null;
  getWishlist: (id: string) => void;
};

const Archive = ({ list, getWishlist }: ComponentProps) => {
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (!list || list._id !== id) {
      getWishlist(id);
    }
  }, [list, id, getWishlist]);

  return list ? (
    <>
      <DashboardLayout pageTitle="archive" showBack />
      <DashboardContainer>
        <GiftList>
          {list.gifts.map((gift) => (
            <GiftCard gift={gift} key={gift._id} />
          ))}
        </GiftList>
      </DashboardContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Archive);
