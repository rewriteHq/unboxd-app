import React from 'react';
import { PageHeading } from '../../commons/Heading';
import { HomeComponentProps } from './types';

import Layout from '../../Layout';
import { Paragraph, UnboxdCarousel, GetStarted } from './styles';
import { BTNLink } from '../../commons/Button/styles';

const Home: React.FC<HomeComponentProps> = () => {

  const tabs = [
    { name: "new home", active: false, icon: "🏛" },
    { name: "social cause", active: false },
    { name: "birthday", active: false },
    { name: "graduation", active: true, icon: "🎉" },
    { name: "anniversary", active: false },
    { name: "wedding", active: false },
    { name: "new business", active: false }
  ]

  const sample = [
    {
      name: "Work Space",
      price: "245,999",
      raised: "84,599.00",
      image: "workstation"
    },
    {
      name: "Macbook Pro",
      price: "645,999",
      raised: "324,099.00",
      image: "laptop"
    },
    {
      name: "Washing Machine",
      price: "950,000",
      raised: "284,898.00",
      image: "washingmachine"
    },
    {
      name: "HalfStation",
      price: "350,000",
      raised: "64,898.00",
      image: "halfstation"
    },
    {
      name: "HalfStation",
      price: "350,000",
      raised: "64,898.00",
      image: "halfstation"
    },
    {
      name: "HalfStation",
      price: "350,000",
      raised: "64,898.00",
      image: "halfstation"
    }
  ]

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Whatever you want.
        </PageHeading>

        <Paragraph className="text-center">
          List it, share it, and receive cash contributions from your loved ones.
        </Paragraph>

        <UnboxdCarousel>
          <div className="carousel-tab">
            <ul>
              {tabs.map((item, index) => <li key={index} className={item.active ? "active list-item" : "list-item"}>{item.name} {item.active ? item.icon : null}</li>)}
            </ul>
          </div>
          <div className="carousel">
            {sample.map((item, index) =>
              <div key={index} className="card">
                <div className="img-holder">
                  <img src={`/assets/card-img/${item.image}.png`} alt={item.name} />
                </div>
                <div className="card-content">
                  <h3 className="name">{item.name}</h3>
                  <p className="price">₦{item.price}</p>
                  <div className="progress">
                    <p className="amount-raised">₦{item.raised} raised</p>
                    <div className="progress-circle"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <GetStarted>
            <BTNLink to="/register">Sign up for early access</BTNLink>
          </GetStarted>
        </UnboxdCarousel>
      </div>
    </Layout>
  );
};

export default Home;