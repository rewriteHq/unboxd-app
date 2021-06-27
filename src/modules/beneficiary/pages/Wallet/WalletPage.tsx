import React, { useState } from 'react';
import DashboardLayout from 'commons/DashboardLayout';
import { TabList, TabPanel, TabPanels, Tabs, WalletContainer } from './styles';
import { WalletOverviewCard } from './components/WalletOverviewCard';
import { TabPane } from './components/TabPane';
import { TabItem } from './components/TabItem';
import walletHistory from './walletHistory.json';

const WalletPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
    // OTHER ACTIONS HERE
  };
  return (
    <DashboardLayout hideWalletSection>
      <WalletContainer>
        <header>Wallet</header>
        <WalletOverviewCard balance={1500000} />
        <Tabs>
          <TabList>
            <TabPane
              title="Contributions"
              isActive={currentTab === 0}
              onChange={() => handleChangeTab(0)}
            />
            <TabPane
              title="Withdrawals"
              isActive={currentTab === 1}
              onChange={() => handleChangeTab(1)}
            />
          </TabList>

          <TabPanels>
            {currentTab === 0 ? (
              <TabPanel>
                {walletHistory.map((item) => (
                  <TabItem
                    date={item.date}
                    source={item.source}
                    amount={item.amount}
                    giftTitle={item.giftTitle}
                  />
                ))}
              </TabPanel>
            ) : (
              <TabPanel>
                {walletHistory.map((item) => (
                  <TabItem
                    isWithDrawal
                    date={item.date}
                    source={item.source}
                    amount={item.amount}
                    giftTitle={item.giftTitle}
                  />
                ))}
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      </WalletContainer>
    </DashboardLayout>
  );
};

export default WalletPage;
