import React, { lazy, useState } from 'react';
import { PageHeading } from '../../commons/Heading';
import { HomeComponentProps } from './types';

import { UnboxdCarousel, GetStarted, UnorderedList } from './styles';
import { BTN } from '../../commons/Button/styles';

const Layout = lazy(() => import('../../Layout'));
const Modal = lazy(() => import('../../commons/Modal'));

const Home: React.FC<HomeComponentProps> = () => {
  const [openModal, setOpenModal] = useState(false);

  const steps = [
    "Create a list with pictures of items you want",
    "Share with loved ones",
    "Receive part or full contributions"
  ]

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Gather funds for the things you need
        </PageHeading>

        <UnorderedList>
          {steps.map((step, index) => <li key={index + 1}><span>{index + 1}</span>{step}</li>)}
        </UnorderedList>

        <UnboxdCarousel>
          <div className="carousel"></div>
          <div className="bottom-overlay"></div>
          <GetStarted>
            <BTN onClick={toggleModal}>Sign up for early access</BTN>
          </GetStarted>
        </UnboxdCarousel>
      </div>
      {openModal && <Modal onClick={toggleModal} />}
    </Layout>
  );
};

export default Home;