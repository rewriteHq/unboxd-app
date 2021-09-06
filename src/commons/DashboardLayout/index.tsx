import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import AppWrapper from '../AppWrapper';
import DashboardSidebar from '../DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Header from './header';
import {
  DashboardContent,
  DashboardWalletSection,
  UnboxdAddButton,
  UserProfile,
  WalletBalance,
} from './styles';
import { LayoutProps } from './types';
import { ReactComponent as PlusIcon } from '../../assets/img/icons/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import AppState from '../../typings';
import { GlobalStoreState } from '../../store/types';
import { getUserData } from '../../modules/auth/pages/Login/redux/actions';
import { getUserWishList } from '../../modules/beneficiary/pages/Dashboard/redux/actions';
import { getUserWallet } from '../../modules/beneficiary/pages/Wallet/redux/actions';
import { formatNumber } from '../../utils/helpers/formatNumber';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Colors from 'constants/Colors';
import { PageParams } from 'modules/beneficiary/pages/Event/types';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  isHome,
  hideWalletSection,
  loading,
}) => {
  const dispatch = useDispatch();
  const { link } = useSelector((state: AppState) => state.beneficiary);
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const { data: wishlist } = useSelector(
    (state: GlobalStoreState) => state.wishlist
  );

  const {
    data,
    isLoading,
  } = useSelector((state: GlobalStoreState) => state.wallet);

  useEffect(() => {
    dispatch(getUserWallet());
  }, [dispatch]);

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
      dispatch(getUserWishList());
    }
  }, [credentials, dispatch, wishlist]);

  const { pathname } = useLocation();
  const { slug } = useParams<PageParams>();
  
  return (
    <>
      <DashboardHeader></DashboardHeader>
      <Header>{isHome ? <Header.Home /> : <Header.Main />}</Header>
      <AppWrapper>
        <DashboardSidebar />
        <DashboardContent>
          {!hideWalletSection ? (
            <DashboardWalletSection>
              <UserProfile>
                <div className="profile-img">
                  <img src="/assets/dp.jpg" alt="profile" />
                </div>
                <p>Hi, {credentials?.firstname}</p>
              </UserProfile>
              <WalletBalance>
                <span>Wallet Balance</span>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>NGN {formatNumber(data?.balance || 0)}</p>
                )}
              </WalletBalance>
            </DashboardWalletSection>
          ) : null}
          {loading ? (
            <SkeletonTheme color={Colors.navy}>
              <Skeleton height={200} delay={2} />
              <Skeleton count={5} delay={2} />
            </SkeletonTheme>
          ) : (
            children
          )}
        </DashboardContent>
        {(pathname === '/dashboard' || pathname === `/event/${slug}`) && (<UnboxdAddButton>
          <div className="under-layer pulsate-fwd"></div>
          <Link to={link} className="d-flex-center">
            <PlusIcon />
          </Link>
        </UnboxdAddButton>)}
      </AppWrapper>
    </>
  );
};

export default DashboardLayout;
