import React from 'react';
import Header from './Header';
import { LayoutProps } from './types';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showBack,
  navItems,
}) => {
  return (
    <>
      <Header pageTitle={pageTitle} showBack={showBack} navItems={navItems} />
      {children}
    </>
  );
};

export default DashboardLayout;
