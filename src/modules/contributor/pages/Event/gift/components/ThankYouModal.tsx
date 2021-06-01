import { Link } from 'react-router-dom';
import Avatar from '../../../../../../commons/Avatar';
import { BTN } from '../../../../../../components/Button/styles';
import Modal from '../../../../../../components/Modal';
import {
  WelcomeBody,
  WelcomeHead,
  WelcomeWrapper,
} from '../../../../routes/styles';
import { EventData } from '../index'

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
            <Avatar src={eventData?.coverImage} alt="User" />
            <span className="name">{eventData?.userID.firstname}</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Thank You 😊,</p>
            <p className="note">
              I sincerely appreciate you for this gesture, 
              you don't know how much it means to me, 
              but I want you to know it means a lot. 
              I can't thank you enough.
            </p>
            <Link className="create" to="/">create your own list</Link>
            <BTN onClick={goBack}>Finish</BTN>
          </WelcomeBody>
        </WelcomeWrapper>
      </Modal.Centered>
    </Modal>
  );
};

export default ThankYouModal;
