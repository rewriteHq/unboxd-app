import React from 'react';
import { Head } from '../styles';
import Main from './main';

type ComponentProps = {
  children: React.ReactNode;
};

const Header = ({ children }: ComponentProps) => {
  return <Head>{children}</Head>;
};

Header.Main = Main;

export default Header;
