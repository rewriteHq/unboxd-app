import React from 'react';
import Avatar from '../../../../../../commons/Avatar';
import { BTN } from '../../../../../../components/Button/styles';
import Modal from '../../../../../../components/Modal';
import {
  WelcomeBody,
  WelcomeHead,
  WelcomeWrapper,
} from '../../../../routes/styles';
import { EventData } from './PaymentForm';

type ComponentProps = {
  show: boolean;
  close: () => void;
  eventData: EventData;
};

const ThankYouModal = ({ show, close, eventData }: ComponentProps) => {

  const goBack = () => {
    window.location.href = `/${eventData.userID.username}/${eventData.slug}`;
  }

  return (
    <Modal show={show} onClose={close}>
      <Modal.Centered>
        <WelcomeWrapper>
          <WelcomeHead>
            <Avatar src={eventData.coverImage} alt="User" />
            <span className="name">{eventData.userID.firstname}</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Thank You 😊,</p>
            <p className="note">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
              cum culpa! Assumenda dolor culpa asperiores vel ea dolorem?
              Dolores voluptatem nihil nam enim eum velit minus in adipisci
              doloremque eligendi?
            </p>
            <BTN onClick={goBack}>Finish</BTN>
          </WelcomeBody>
        </WelcomeWrapper>
      </Modal.Centered>
    </Modal>
  );
};

export default ThankYouModal;
