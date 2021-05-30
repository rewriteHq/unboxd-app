import { Wrapper, Header } from './style';
import ContributorLayout from '../../../../commons/ContributorLayout';
import { UnorderedList } from '../../../auth/pages/Home/styles';
import { BTN } from '../../../../components/Button/styles';
import { lazy, useState } from 'react';

const Modal = lazy(() => import('../../../../components/EarlyAccess'))

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  const steps = [
    "Create a list with pictures of items you want",
    "Share with loved ones",
    "Receive part or full contributions"
  ];

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <ContributorLayout>
      <Wrapper>
        <Header>
          Unboxd helps you gather funds for the things you need in 3 simple
          steps.
        </Header>
        <UnorderedList>
          {steps.map((step, index) => (
            <li key={index + 1}>
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </UnorderedList>
        <BTN onClick={toggleModal}>Create your wishlist now</BTN>
        {openModal && <Modal onClick={toggleModal} />}
      </Wrapper>
    </ContributorLayout>
  );
};

export default About;
