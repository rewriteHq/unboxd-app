import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from 'commons/DashboardLayout';
import { TabList, TabPanel, TabPanels, Tabs, WalletContainer } from './styles';
import { WalletOverviewCard } from './components/WalletOverviewCard';
import { TabPane } from './components/TabPane';
import { TabItem } from './components/TabItem';
import walletHistory from './walletHistory.json';
import { GlobalStoreState } from 'store/types';
import { getUserWallet } from './redux/actions';

const Wallet = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const dispatch = useDispatch();

  const {
    data: { balance },
    isLoading,
  } = useSelector((state: GlobalStoreState) => state.wallet);

  useEffect(() => {
    dispatch(getUserWallet());
  }, [balance, dispatch]);

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
    // OTHER ACTIONS HERE
  };
  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <header>Wallet</header>
        <WalletOverviewCard balance={balance} isLoading={isLoading} />
        <Tabs>
          <TabList>
            <TabPane
              title="Contributions"
              isActive={currentTab === 0}
              onChangeTab={() => handleChangeTab(0)}
            />
            <TabPane
              title="Withdrawals"
              isActive={currentTab === 1}
              onChangeTab={() => handleChangeTab(1)}
            />
          </TabList>

          <TabPanels>
            {currentTab === 0 ? (
              <TabPanel>
                {walletHistory.map((item, index) => (
                  <React.Fragment key={index}>
                    <TabItem
                      date={item.date}
                      source={item.source}
                      amount={item.amount}
                      giftTitle={item.giftTitle}
                    />
                  </React.Fragment>
                ))}
              </TabPanel>
            ) : (
              <TabPanel>
                {walletHistory.map((item, index) => (
                  <React.Fragment key={index}>
                    <TabItem
                      isWithDrawal
                      date={item.date}
                      source={item.source}
                      amount={item.amount}
                      giftTitle={item.giftTitle}
                    />
                  </React.Fragment>
                ))}
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default Wallet;
