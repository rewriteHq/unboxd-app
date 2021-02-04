import React from 'react';
import { PageHeading } from '../../commons/Heading';
import { HomeComponentProps } from './types';

import Layout from '../../Layout';

const Home: React.FC<HomeComponentProps> = () => {
  return (
    <Layout>
      <PageHeading>Home Page</PageHeading>
    </Layout>
  );
};

export default Home;
