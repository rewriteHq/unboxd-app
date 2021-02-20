import React from 'react';

import { ComponentProps } from './types';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
