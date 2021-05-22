import React from 'react';
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
import { useSelector } from 'react-redux';
import AppState from '../../typings';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  isHome,
  hideWalletSection,
}) => {
  const { link } = useSelector((state: AppState) => state.beneficiary);

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
                <p>Hi, Taofeeqat</p>
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
