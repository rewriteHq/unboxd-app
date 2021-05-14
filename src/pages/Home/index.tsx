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

  const sample = ["ps4", "ipad", "camera", "sneakers", "throwpillows", "workspacechairs"]

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
          <div className="carousel">
            {sample.slice(0, 3).map((item, index) =>
              <div key={index} className="card">
                <div className="img-holder">
                  <img src={`/assets/card-img/${item}.png`} alt={item} />
                </div>
              </div>
            )}
          </div>
          <div className="carousel start">
            {sample.slice(3).map((item, index) =>
              <div key={index} className="card">
                <div className="img-holder">
                  <img src={`/assets/card-img/${item}.png`} alt={item} />
                </div>
              </div>
            )}
          </div>
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