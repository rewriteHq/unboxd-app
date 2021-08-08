import React, { lazy } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import {
  Paragraph,
  UnboxdCarousel,
  GetStarted,
  UnorderedList,
  StatsArea,
  HowItWorks,
} from './styles';
import { BTNLink } from '../../../../components/Button/styles';

const Layout = lazy(() => import('../../../../Layout'));

const Home: React.FC<HomeComponentProps> = () => {
  const steps = [
    "Create a list with pictures of items you want",
    "Share with loved ones",
    "Receive part or full contributions"
  ];

  const tabs = [
    { name: 'new home', active: false, icon: '🏛' },
    { name: 'social cause', active: false },
    { name: 'birthday', active: false },
    { name: 'graduation', active: true, icon: '🎉' },
    { name: 'anniversary', active: false },
    { name: 'wedding', active: false },
    { name: 'new business', active: false },
  ];

  const stats = [
    { number: '500k', text: 'naira, raised so far', icon: '🎉' },
    {
      number: '40+',
      text: 'successfully onboarded users and counting',
      icon: '🥳',
    },
    { number: '50+', text: 'wishlists created monthly', icon: '❤️' },
  ];

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Gather funds for the things you need
        </PageHeading>

        <Paragraph className="text-center">
          List it, share it, and receive cash contributions from your loved
          ones.
        </Paragraph>

        <UnboxdCarousel>
          <div className="carousel"></div>
          <div className="bottom-overlay"></div>
          <GetStarted>
            <BTNLink to="/register">Get Started</BTNLink>
          </GetStarted>
        </UnboxdCarousel>

        <UnboxdCarousel>
          <div className="carousel-tab">
            <ul>
              {tabs.map((item, index) => (
                <li
                  key={index}
                  className={item.active ? 'active list-item' : 'list-item'}
                >
                  {item.name} {item.active ? item.icon : null}
                </li>
              ))}
            </ul>
          </div>
        </UnboxdCarousel>

        <HowItWorks>
          <div className="container">
            <PageHeading centered>How it works</PageHeading>
          </div>
        </HowItWorks>

        <UnorderedList>
          {steps.map((step, index) => <li key={index + 1}><span>{index + 1}</span>{step}</li>)}
        </UnorderedList>

        <StatsArea>
          <div className="container">
            <div className="content-stat">
              <PageHeading centered>Unboxd is growing</PageHeading>
              <Paragraph className="text-center-left">
                We are dedicated to making sure you can gather funds easily
              </Paragraph>
              <ul>
                {stats.map((stat, index) => (
                  <li key={index}>
                    <h1>{stat.number}</h1>
                    <p>
                      {stat.text} {stat.icon}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-stat"></div>
          </div>
        </StatsArea>
      </div>
    </Layout>
  );
};

export default Home;
