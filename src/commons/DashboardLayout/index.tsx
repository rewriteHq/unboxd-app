import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  isHome,
  hideWalletSection,
}) => {
  const dispatch = useDispatch();
  const { link } = useSelector((state: AppState) => state.beneficiary);
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const { data:wishlist } = useSelector((state: GlobalStoreState) => state.wishlist);

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
      dispatch(getUserWishList());
    }
  }, [credentials, dispatch, wishlist]);

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
                <p>Hi, {credentials?.username || credentials?.firstname}</p>
              </UserProfile>
              <WalletBalance>
                <span>Wallet Balance</span>
                <p>NGN 150,000.00</p>
              </WalletBalance>
            </DashboardWalletSection>
          ) : null}
          {children}
        </DashboardContent>
        <UnboxdAddButton>
          <div className="under-layer pulsate-fwd"></div>
          <Link to={link} className="d-flex-center">
            <PlusIcon />
          </Link>
        </UnboxdAddButton>
      </AppWrapper>
    </>
  );
};

export default DashboardLayout;
