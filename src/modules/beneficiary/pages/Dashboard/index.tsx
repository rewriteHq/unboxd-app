import { useEffect, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ComponentProps } from './types';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { MyUnboxdListHeader, WishList } from './styles';
import Logo from '../../../../components/Logo';
import WishCard from '../../../../components/WishCard';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getUserWishList } from './redux/actions';
import Colors from 'constants/Colors';

const fallbackImage = '/assets/birthday.jpg';

const Dashboard: React.FC<ComponentProps> = () => {
  const { data: wishlist, loading } = useSelector(
    (state: GlobalStoreState) => state.wishlist
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserWishList());
  }, [dispatch]);

  const openList = useCallback(
    (listId: string) => {
      history.push(`/event/${listId}`);
    },
    [history]
  );

  return (
    <DashboardLayout>
      <MyUnboxdListHeader>
        <p>
          my &nbsp;
          <Logo />
          &nbsp; list
        </p>
      </MyUnboxdListHeader>
      <WishList>
        {!loading ? (wishlist.map((wish) => (
          <WishCard
            key={wish._id}
            title={wish.title}
            wishCount={wish.gifts.length}
            imgSrc={wish.coverImage || fallbackImage}
            click={() => openList(wish.slug)}
          />
        ))) : (
          <SkeletonTheme color={Colors.navy}>
            <Skeleton height={200} />
            <Skeleton height={200} />
          </SkeletonTheme>
        )}
      </WishList>
    </DashboardLayout>
  );
};

export default Dashboard;
