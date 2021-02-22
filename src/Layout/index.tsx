import React from 'react';

import { ComponentProps } from './types';
import { PageMain } from './styles';

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return <PageMain>{children}</PageMain>;
};

export default Layout;
