import React, { useState, lazy } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';
import AppImageOne from '../../../../assets/img/unboxd-app1.png';
import AppImageTwo from '../../../../assets/img/unboxd-app2.png';
import AppImageThree from '../../../../assets/img/unboxd-app3.png';

import {
  Paragraph,
  UnboxdCarousel,
  GetStarted,
  HowItWorksContent,
  CenterContent,
  StatisticWrapper,
  HowItWorks,
  StepTitle,
  StepContent,
  Button,
  ListingsContainer,
  ListingLink,
  UnbxodHeading,
  GradientWrapper,
  UnboxdCarouselBottom,
} from './new-styles';

import { BTNLink } from '../../../../components/Button/styles';

const Layout = lazy(() => import('../../../../Layout/'));

const NewHome: React.FC<HomeComponentProps> = () => {
  const [toggleState, setToggleState] = useState(1);

  const steps = [
    {
      num: 1,
      title: 'Create Wishlist',
      content:
        'With unboxd, you can do more than a bland list on notes. You can add image, price and description',
    },
    {
      num: 2,
      title: 'Share Around',
      content:
        'You get a customized link to share your wish on any social platform of choice',
    },
    {
      num: 3,
      title: 'Request Payout',
      content:
        'Whether you have raised all that you need or part of it, your money is sent to your local account when you request for it',
    },
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

  const toggleBTN = (index: number) => {
    setToggleState(index);
  };

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Gather funds for the things you need
        </PageHeading>

        <Paragraph className="text-center">
          Use unboxd to list your wishes, share it with loved ones and receive
          cash contributions from anywhere in the world
        </Paragraph>

        <UnboxdCarousel>
          <div className="carousel"></div>
          <div className="bottom-overlay"></div>
          <GetStarted>
            <BTNLink to="/register">Try Unboxd</BTNLink>
          </GetStarted>
        </UnboxdCarousel>

        <HowItWorks>
          <div className="contentContainer">
            <PageHeading centered>How it works</PageHeading>
            <HowItWorksContent>
              <div className="imageWrapper">
                <img src={AppImageOne} alt="phone" className="img-1 img" />
                <img src={AppImageTwo} alt="phone" className="img-2 img" />
                <img src={AppImageThree} alt="phone" className="img-3 img" />
              </div>

              <div className="contentWrapper">
                {steps.map((step, index) => (
                  <li key={index + 1}>
                    <div
                      className={
                        toggleState === step.num ? 'active-content' : 'content'
                      }
                    >
                      <div className="spanContainer">
                        <span>{index + 1}</span>
                      </div>
                      <StepTitle>{step.title}</StepTitle>
                      <StepContent>{step.content}</StepContent>
                      <div className="buttonWrapper">
                        <Button onClick={() => toggleBTN(1)}>
                          <div
                            className={
                              toggleState === 1
                                ? 'btn-active circleBTN'
                                : 'circleBTN'
                            }
                          ></div>
                        </Button>
                        <Button onClick={() => toggleBTN(2)}>
                          <div
                            className={
                              toggleState === 2
                                ? 'btn-active  circleBTN'
                                : 'circleBTN'
                            }
                          ></div>
                        </Button>
                        <Button onClick={() => toggleBTN(3)}>
                          <div
                            className={
                              toggleState === 3
                                ? 'btn-active  circleBTN'
                                : 'circleBTN'
                            }
                          ></div>
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </HowItWorksContent>
          </div>
        </HowItWorks>
        <CenterContent>
          <PageHeading centered>Unboxd is growing</PageHeading>
          <p>We are commited to making sure you can gather funds easily</p>
        </CenterContent>

        <GradientWrapper>
          <div className="grad"></div>
          <StatisticWrapper>
            {stats.map((stat, index) => (
              <li key={index} className="stat-item">
                <div className="stat-details">
                  <p>{stat.icon}</p>
                  <h1>{stat.number}</h1>
                  <p className="stat-text">{stat.text}</p>
                </div>
              </li>
            ))}
          </StatisticWrapper>

          <UnbxodHeading>
            <p>Unboxd Works for</p>
          </UnbxodHeading>

          <UnboxdCarouselBottom>
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
          </UnboxdCarouselBottom>

          <ListingsContainer>
            <ListingLink to="/register">Start listing your wishes</ListingLink>
          </ListingsContainer>
        </GradientWrapper>
      </div>
    </Layout>
  );
};

export default NewHome;
