import React from 'react';
import Header from './header';
import { LayoutProps } from './types';

const DashboardLayout: React.FC<LayoutProps> = ({ children, isHome }) => {
  return (
    <>
      <Header>{isHome ? <Header.Home /> : <Header.Main />}</Header>
      {children}
    </>
  );
};

export default DashboardLayout;
