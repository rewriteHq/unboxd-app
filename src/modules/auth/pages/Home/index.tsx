import React from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import Layout from '../../../../Layout';
import { Paragraph, Image } from './styles';
import { BTNLink } from '../../../../components/Button/styles';
import PageBottom from '../../../../commons/PageBottom';

import illustration from '../../../../assets/img/illustrations/home.png';

const Home: React.FC<HomeComponentProps> = () => {
  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Gather funds for the things you need.
        </PageHeading>

        <Paragraph className="text-center">
          Create a visual list, share with your loved ones and receive financial
          support from them.
        </Paragraph>

        <Image src={illustration} alt="illustration" />
      </div>
      <PageBottom>
        <BTNLink to="/register">Get Started</BTNLink>
      </PageBottom>
    </Layout>
  );
};

export default Home;
