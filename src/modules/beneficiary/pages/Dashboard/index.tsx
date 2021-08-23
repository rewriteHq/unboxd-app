import { useEffect, useCallback } from 'react';
import { ComponentProps } from './types';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { MyUnboxdListHeader, WishList } from './styles';
import Logo from '../../../../components/Logo';
import WishCard from '../../../../components/WishCard';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getUserWishList } from './redux/actions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Colors from 'constants/Colors';
import { unSetGlobalButtoLink } from 'modules/beneficiary/redux/actions';

const fallbackImage = '/assets/birthday.jpg';

const Dashboard: React.FC<ComponentProps> = () => {
  const { data: wishlist, isLoading } = useSelector(
    (state: GlobalStoreState) => state.wishlist
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserWishList());
    dispatch(unSetGlobalButtoLink());
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
          {wishlist ? 'my ' : 'create your first '} &nbsp;
          <Logo />
          &nbsp; list
        </p>
      </MyUnboxdListHeader>
      <WishList>
        {isLoading ? (
          <SkeletonTheme color={Colors.navy}>
            <Skeleton height={150} />
          </SkeletonTheme>
        ) : (
          wishlist.map((wish) => (
            <WishCard
              key={wish._id}
              title={wish.title}
              wishCount={wish.gifts.length}
              imgSrc={wish.coverImage || fallbackImage}
              click={() => openList(wish.slug)}
            />
          ))

        )}
      </WishList>
    </DashboardLayout>
  );
};

export default Dashboard;
