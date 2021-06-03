import Button from '../../../../../components/Button';
import Modal from '../../../../../components/Modal';
import { WishList } from '../../../../../typings';
import { WelcomeBody, WelcomeWrapper } from '../../../routes/styles';
import { WelcomeHead, Banner } from './style';

type ComponentProps = {
  show: boolean;
  close: () => void;
  list: WishList;
};

const WelcomeModal = ({ show, close, list }: ComponentProps) => {
  return (
    <Modal show={show} onClose={close}>
      <Modal.Centered>
        <WelcomeWrapper>
          <WelcomeHead>
            <Banner src={list.coverImage} alt="User" />
            <span className="name">{list.title}</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Hello,</p>
            <p className="note">
              {list.description
                ? list.description
                : "If you are here, it's because you count as one of my loved ones. On the list you're about to see, are the items I deeply wish for."}
            </p>
            <Button onClick={close}>Open List</Button>
          </WelcomeBody>
        </WelcomeWrapper>
      </Modal.Centered>
    </Modal>
  );
};

export default WelcomeModal;
