import React from 'react';

import { ComponentProps } from './types';
import { PageMain } from './styles';
import Header from './header';

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <PageMain>{children}</PageMain>
    </>
  );
};

export default Layout;