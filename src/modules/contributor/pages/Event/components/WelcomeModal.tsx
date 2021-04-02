import React from 'react';
import Avatar from '../../../../../commons/Avatar';
import Button from '../../../../../components/Button';
import Modal from '../../../../../components/Modal';
import { WishList } from '../../../../../typings';
import {
  WelcomeBody,
  WelcomeHead,
  WelcomeWrapper,
} from '../../../routes/styles';

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
            <Avatar src={list.coverImage} alt="User" />
            <span className="name">Lateef</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Hello,</p>
            <p className="note">{list.description}</p>
            <Button onClick={close}>Open List</Button>
          </WelcomeBody>
        </WelcomeWrapper>
      </Modal.Centered>
    </Modal>
  );
};

export default WelcomeModal;
