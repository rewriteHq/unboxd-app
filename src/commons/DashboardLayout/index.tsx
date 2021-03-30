import React from 'react';
import Header from './header';
// import Header from './Header';
import { LayoutProps } from './types';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showBack,
  navItems,
}) => {
  return (
    <>
      {/* <Header pageTitle={pageTitle} showBack={showBack} navItems={navItems} /> */}
      <Header>
        <Header.Main />
      </Header>
      {children}
    </>
  );
};

export default DashboardLayout;
