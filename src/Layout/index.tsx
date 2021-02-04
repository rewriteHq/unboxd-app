import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {ComponentProps} from './types';

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
