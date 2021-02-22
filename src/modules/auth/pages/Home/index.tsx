import React from 'react';
import { PageHeadingXl } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import Layout from '../../../../Layout';
import { Paragraph, Image } from './styles';
import { BTNLink } from '../../../../components/Button/styles';
import PageBottom from '../../../../commons/PageBottom';

const Home: React.FC<HomeComponentProps> = () => {
  return (
    <Layout>
      <div className="container">
        <PageHeadingXl className="text-center">
          Gather funds for the things you need.
        </PageHeadingXl>

        <Paragraph className="text-center">
          Create a visual list, share with your loved ones and receive financial
          support from them.
        </Paragraph>

        <Image />
      </div>
      <PageBottom>
        <BTNLink to="/register">Get Started</BTNLink>
      </PageBottom>
    </Layout>
  );
};

export default Home;
