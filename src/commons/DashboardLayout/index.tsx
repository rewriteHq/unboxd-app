import React from 'react';
import Header from './header';
import { LayoutProps } from './types';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showBack,
  navItems,
}) => {
  return (
    <>
      <Header>
        <Header.Main />
      </Header>
      {children}
    </>
  );
};

export default DashboardLayout;
